export default {
  setTodos: (todos) => {
    if(Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: ()=>{
    let todos = [];
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    } catch(e) {

    }
    return Array.isArray(todos)?todos:[];
  },
  filterTodos: (todos, showCompleted, searchText)=>{
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => (!todo.completed) || showCompleted);

    filteredTodos = filteredTodos.filter(todo => searchText.trim().length === 0 || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

    filteredTodos.sort((a, b)=>{
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}
