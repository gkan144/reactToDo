import React from 'react';
import moment from 'moment';

class Todo extends React.Component {

  render() {
    let {id, text, completed, createdAt, completedAt, onToggle} = this.props;
    return <div onClick={()=>{onToggle(id)}}>
      <input type="checkbox" defaultChecked={completed}/>
      <p>{`${text}`}</p>
      <p>{completed?
        `Completed At: ${moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')}`:
        `Created At: ${moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')}`}</p>
    </div>
  }

}

export default Todo;