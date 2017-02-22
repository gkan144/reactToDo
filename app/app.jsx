import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import actions from 'app/actions/actions';
import configureStore from 'app/store/configureStore';

import TodoApp from 'app/components/TodoApp';

let store = configureStore();

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!app/styles/app.scss');

ReactDOM.render(<Provider store={store}>
                  <TodoApp />
                </Provider>, document.getElementById('app'));
