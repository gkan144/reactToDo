import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import TodoList from 'app/components/TodoList';
import AddTodo from 'app/components/AddTodo';
import TodoSearch from 'app/components/TodoSearch';

import actions from 'app/actions/actions';

export class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  logout(event) {
    event.preventDefault();
    this.props.dispatch(actions.startLogout());
  }

  render() {

    return <div>
      <div className="page-actions"><Link to="#" onClick={this.logout.bind(this)}>Logout</Link></div>
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect()(TodoApp);