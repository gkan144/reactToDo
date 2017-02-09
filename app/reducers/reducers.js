import uuid from 'node-uuid';
import moment from 'moment';

let searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

let showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

let todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          let nextCompleted = !todo.completed;
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted?moment().unix():null
          }
        }
      });
    default:
      return state;
  }
};

export default {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
}