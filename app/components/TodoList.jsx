import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    let {todos} = this.props;
    if(todos.length === 0) return <div><p className="container__message">Nothing to do</p></div>;
    return <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>;
      })}
    </div>
  }

}

export default TodoList;