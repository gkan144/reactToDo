import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    var {todos} = this.props;
    return <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>;
      })}
    </div>
  }

}

export default TodoList;