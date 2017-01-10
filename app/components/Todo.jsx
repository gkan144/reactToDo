import React from 'react';

class Todo extends React.Component {

  render() {
    let {id, text, completed, onToggle} = this.props;
    return <div onClick={()=>{onToggle(id)}}>
      <input type="checkbox" defaultChecked={completed}/>
      {`${text}`}
    </div>
  }

}

export default Todo;