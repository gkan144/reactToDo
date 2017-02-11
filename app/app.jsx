import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import TodoApp from './components/TodoApp';

import configureStore from './store/configureStore';

let store = configureStore();

store.subscribe(() => {
  console.log('New state', store.getState());
});

$(document).foundation();
require('style!css!sass!./styles/app.scss');

ReactDOM.render(<Provider store={store}>
                  <TodoApp />
                </Provider>, document.getElementById('app'));
