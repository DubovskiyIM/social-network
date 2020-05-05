import {
	addMessageActionCreator,
	changeInputMessageActionCreator,
} from '../../../redux/dialogs/dialogs.actions';

import { connect } from 'react-redux';

import DialogsComponent from './dialogs.component';

const mapStateToProps = (state) => {
	return {
		users: state.dialogsPage.users,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => dispatch(addMessageActionCreator()),
		changeInputMessage: (newMessageText) =>
			dispatch(changeInputMessageActionCreator(newMessageText)),
	};
};

const DialogsComponentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsComponent);

export default DialogsComponentContainer;
