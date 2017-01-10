import React from 'react';
import uuid from 'node-uuid';

import TodoAPI from '../api/TodoAPI';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
    this.addTodoListener = this.handleAddTodo.bind(this);
    this.searchListener = this.handleSearch.bind(this);
    this.toggleListener = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos:[
        ...this.state.todos,
        {id: uuid(), text: text, completed: false}
      ]
    });
  }
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id) todo.completed = !todo.completed;

      return todo;
    });
    this.setState({todos: updatedTodos});
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return <div>
      <TodoSearch onSearch={this.searchListener}/>
        <TodoList todos={filteredTodos} onToggle={this.toggleListener}/>
        <AddTodo onAddTodo={this.addTodoListener}/>
      </div>
  }
}

export default TodoApp