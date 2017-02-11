import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import actions from './actions/actions';

import TodoApp from './components/TodoApp';
import TodoAPI from './api/TodoAPI';

import configureStore from './store/configureStore';

let store = configureStore();

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();
require('style!css!sass!./styles/app.scss');

ReactDOM.render(<Provider store={store}>
                  <TodoApp />
                </Provider>, document.getElementById('app'));
