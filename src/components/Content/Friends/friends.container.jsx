import { connect } from 'react-redux';
import { setUsersAC } from '../../../redux/friends/friends.actions'

import FriendsComponent from './friends.component';

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsComponent)


export default FriendsContainer;
