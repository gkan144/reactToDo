import {createStore, combineReducers, compose} from 'redux';
import reducers from '../reducers/reducers';

let configureStore = () => {
  let reducer = combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  return createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension : f => f
  ))
};

export default configureStore;