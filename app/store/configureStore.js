import {createStore, combineReducers, compose} from 'redux';
import reducers from '../reducers/reducers';

let configureStore = (initialState = {}) => {
  let reducer = combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  return createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension : f => f
  ))
};

export default configureStore;