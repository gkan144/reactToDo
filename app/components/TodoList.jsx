import React from 'react';
import {connect} from 'react-redux';
import Todo from 'app/components/Todo';
import TodoAPI from 'app/api/TodoAPI';

export class TodoList extends React.Component {

  render() {
    let {todos, showCompleted, searchText} = this.props;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    if(filteredTodos.length === 0) return <div><p className="container__message">Nothing to do</p></div>;
    return <div>
      {filteredTodos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  }
}

export default connect(state => state)(TodoList);