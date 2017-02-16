import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import actions from 'app/actions/actions'

export class Todo extends React.Component {

  render() {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed?"todo todo-completed":"todo";

    return <div className={todoClassName} >
      <div>
        <input type="checkbox" defaultChecked={completed} onClick={()=>{ dispatch(actions.toggleTodo(id)); }}/>
      </div>
      <div>
        <p>{`${text}`}</p>
        <p className="todo__subtext">{completed?
          `Completed At: ${moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')}`:
          `Created At: ${moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')}`}</p>
      </div>
    </div>
  }

}

export default connect()(Todo);