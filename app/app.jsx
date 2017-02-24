import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import firebase from 'app/firebase/';

import actions from 'app/actions/actions';
import configureStore from 'app/store/configureStore';

import router from 'app/router/';

let store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    if(hashHistory.getCurrentLocation().pathname !== '/') hashHistory.push('/');
  }
});

$(document).foundation();
require('style!css!sass!app/styles/app.scss');

ReactDOM.render(<Provider store={store}>
                  {router}
                </Provider>, document.getElementById('app'));
