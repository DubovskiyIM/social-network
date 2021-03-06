const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

admin.initializeApp();

const config = {
	apiKey: 'AIzaSyDYug26YPZSMxEtihoPYp-1849SeqJbu4Q',
	authDomain: 'social-network-ba568.firebaseapp.com',
	databaseURL: 'https://social-network-ba568.firebaseio.com',
	projectId: 'social-network-ba568',
	storageBucket: 'social-network-ba568.appspot.com',
	messagingSenderId: '253896514505',
	appId: '1:253896514505:web:c5ad79f6813975f1dc2618',
};

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/posts', (req, res) => {
	db.collection('posts')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let posts = [];
			data.forEach((doc) => {
				posts.push({
					postId: doc.id,
					body: doc.data().body,
					userHandle: doc.data().userHandle,
					createdAt: doc.data().createdAt,
				});
			});
			return res.json(posts);
		})
		.catch((err) => console.error(err));
});

const FBAuth = (req, res, next) => {
	let idToken;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer ')
	) {
		idToken = req.headers.authorization.split('Bearer ')[1];
	} else {
		console.error('No token found');
		return res.status(403).json({ error: 'Unauthorized' });
	}

	admin
		.auth()
		.verifyIdToken(idToken)
		.then((decodedToken) => {
			req.user = decodedToken;
			console.log(decodedToken);
			return db
				.collection('users')
				.where('userId', '==', req.user.uid)
				.limit(1)
				.get();
		})
		.then(data => {
			req.user.handle = data.docs[0].data().handle;
			return next()
		})
		.catch(err => {
			console.error('Error while verifying token ', err);
			return res.status(403).json(err);
		})
};

app.post('/post', FBAuth, (req, res) => {
	const newPost = {
		body: req.body.body,
		userHandle: req.user.handle,
		createdAt: new Date().toISOString(),
	};
	db.collection('posts')
		.add(newPost)
		.then((doc) => {
			res.json({ message: `document ${doc.id} created successfully` });
		})
		.catch((err) => {
			res.status(500).json({ error: 'something went wrong' });
			console.error(err);
		});
});

const isEmpty = (string) => {
	return string.trim() === '' ? true : false;
};

const isEmail = (email) => {
	const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return email.match(regExp) ? true : false;
};

// Signup route
app.post('/signup', (req, res) => {
	const newUser = {
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword,
		handle: req.body.handle,
	};

	let errors = {};

	if (isEmpty(newUser.email)) {
		errors.email = 'Must not be empty';
	} else if (!isEmail(newUser.email)) {
		errors.email = 'Email must be a valid email address';
	}

	if (isEmpty(newUser.password)) errors.password = 'Must not be empty';
	if (newUser.password !== newUser.confirmPassword)
		errors.confirmPassword = 'Password must be the same';
	if (isEmpty(newUser.handle)) errors.handle = 'Must not be empty';

	if (Object.keys(errors).length > 0) return res.status(400).json(errors);

	// TODO validate data

	let token, userId;
	db.doc(`/users/${newUser.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				return res.status(400).json({ handle: 'this handle is already taken' });
			} else {
				return firebase
					.auth()
					.createUserWithEmailAndPassword(newUser.email, newUser.password);
			}
		})
		.then((data) => {
			userId = data.user.uid;
			return data.user.getIdToken();
		})
		.then((idToken) => {
			token = idToken;
			const userCredentials = {
				handle: newUser.handle,
				email: newUser.email,
				createdAt: new Date().toISOString(),
				userId,
			};
			return db.doc(`/users/${newUser.handle}`).set(userCredentials);
		})
		.then(() => {
			return res.status(201).json({ token });
		})
		.catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return res.status(400).json({ email: 'email is already in use' });
			} else {
				return res.status(500).json({ error: err });
			}
		});
});

app.post('/login', (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	const errors = {};

	if (isEmpty(user.email)) errors.email = 'Must not be empty';
	if (isEmpty(user.password)) errors.password = 'Must not be empty';

	if (Object.keys(errors).length > 0) return res.status(400).json(errors);

	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then((data) => {
			return data.user.getIdToken();
		})
		.then((token) => {
			return res.json({ token });
		})
		.catch((err) => {
			console.error(err);
			if (err.code === 'auth/wrong-password')
				return res
					.status(403)
					.json({ general: 'Wrong credentials. Please try again' });
			else return res.status(500).json({ error: err.code });
		});
});

exports.api = functions.region('europe-west1').https.onRequest(app);
