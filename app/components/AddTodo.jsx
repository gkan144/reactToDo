import React from 'react';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmitListener = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText.trim().length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmitListener}>
        <input type="text" ref="todoText" placeholder="What do you need to do?" />
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
  }
}

export default AddTodo