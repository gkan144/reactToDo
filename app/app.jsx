import React    from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import actions from 'app/actions/actions';
import configureStore from 'app/store/configureStore';

import TodoApp from 'app/components/TodoApp';
import Login from 'app/components/Login';

let store = configureStore();

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!app/styles/app.scss');

ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/">
                      <IndexRoute component={Login}/>
                      <Route path="/todos" component={TodoApp}/>
                    </Route>
                  </Router>
                </Provider>, document.getElementById('app'));
