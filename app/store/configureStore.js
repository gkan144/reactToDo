import * as redux from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

let configureStore = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer,
    auth: reducers.authReducer
  });

  return redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));
};

export default configureStore;