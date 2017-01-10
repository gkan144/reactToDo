import React from 'react';
import moment from 'moment';

class Todo extends React.Component {

  render() {
    let {id, text, completed, createdAt, completedAt, onToggle} = this.props;
    let todoClassName = completed?"todo todo-completed":"todo";

    return <div className={todoClassName} onClick={()=>{onToggle(id)}}>
      <div>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
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

export default Todo;