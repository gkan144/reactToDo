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

let startAddTodos = () => {
  return (dispatch) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      let todos = snapshot.val() || {};

      let parsedTodos = Object.keys(todos).map((key) => {
        return {
          id: key,
          ...todos[key]
        }
      });

      dispatch(addTodos(parsedTodos));
    });
  }
};

let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed,
      completedAt: completed?moment().unix():null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
};

export default {
  setSearchText,
  addTodo,
  addTodos,
  startAddTodo,
  startAddTodos,
  toggleShowCompleted,
  updateTodo,
  startToggleTodo
}