import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/';

let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

let startAddTodo = (text) => {
  return (dispatch) => {
    let todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {dispatch(addTodo({
      id: todoRef.key,
      ...todo
    }))});
  }
};

let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export default {
  setSearchText,
  addTodo,
  addTodos,
  startAddTodo,
  toggleShowCompleted,
  toggleTodo
}