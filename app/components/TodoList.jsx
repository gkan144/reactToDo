import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

export class TodoList extends React.Component {

  render() {
    let {todos} = this.props;
    if(todos.length === 0) return <div><p className="container__message">Nothing to do</p></div>;
    return <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  }

}

export default connect((state) => {
  return {
    todos: state.todos
  };
})(TodoList);