import React from 'react';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import firebase from 'app/firebase/';

import TodoApp from 'app/components/TodoApp';
import Login from 'app/components/Login';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    if(hashHistory.getCurrentLocation().pathname !== '/') hashHistory.push('/');
  }
});

let requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

let redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default <Router history={hashHistory}>
  <Route path="/">
    <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
  </Route>
</Router>