export default {
  setTodos: (todos) => {
    if(Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: ()=>{
    var todos = [];
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    } catch(e) {

    }
    return Array.isArray(todos)?todos:[];
  },
}
