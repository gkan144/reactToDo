import React from 'react';

class Todo extends React.Component {

  render() {
    var {id, text, completed, onToggle} = this.props;
    return <div onClick={()=>{onToggle(id)}}>
      <input type="checkbox" checked={completed} onChange={()=>{onToggle(id)}}/>
      {`${text}`}
    </div>
  }

}

export default Todo;