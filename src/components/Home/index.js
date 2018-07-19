import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db, auth } from '../../firebase';

var userID = "loading...";
var middle = "";
var role = "loading...";

var fetchUser = new Promise(function(resolve, reject) {
  const unsub = auth.onAuthStateChanged((user) => {
    unsub();
    resolve(user);
  }, (error) => {
    reject(error);
  });
});

middle = Promise.resolve(fetchUser).then(value => { userID = value.uid; });
setTimeout(function() { console.log(userID); }, 1100);
setTimeout(function() { role = db.onceGetUserRole(userID); }, 2200);
setTimeout(function() { console.log(db.onceGetUserRole("msTylacsnsXs7pUZ33cmOaCKYTI3")); }, 2200);
setTimeout(function() { console.log(role); }, 2200);

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      currentUser: auth.authUser,
      role
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    db.onceGetUserRole(userID).then(snapshot =>
      this.setState(() => ({ role: snapshot.val() })));
  }



  render() {
    const { users, currentUser } = this.state;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users, currentUser }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].role}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);