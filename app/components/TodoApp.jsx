import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
    });
  }
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return <div>
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.searchListener}/>
            <TodoList />
            <AddTodo onAddTodo={this.addTodoListener}/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default TodoApp