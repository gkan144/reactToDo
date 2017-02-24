import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

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
  return (dispatch, getState) => {
    let todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
    return todoRef.then(() => {dispatch(addTodo({
      id: todoRef.key,
      ...todo
    }))});
  }
};

let startAddTodos = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot) => {
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
    let uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    let updates = {
      completed,
      completedAt: completed?moment().unix():null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
};

let login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

let startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider)
      .then((result) =>{
        dispatch(login(result.user.uid));
      })
      .catch((error) => {
        console.error(error);
      })
  }
};

let logout = () => {
  return {
    type: 'LOGOUT'
  }
};

let startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
      .then(() =>{
        dispatch(logout());
      })
      .catch((error) => {
        console.error(error);
      })
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
  startToggleTodo,
  login,
  startLogin,
  logout,
  startLogout
}