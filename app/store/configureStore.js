import {createStore, combineReducers} from 'redux';
import reducers from '../reducers/reducers';

let configureStore = (initialState = {}) => {
  let reducer = combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  return createStore(reducer, initialState);
};

export default configureStore;