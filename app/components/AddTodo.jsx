import React from 'react';
import {connect} from 'react-redux';
import actions from 'app/actions/actions';

export class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmitListener = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.trim().length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return <div className="container__footer">
      <form onSubmit={this.handleSubmitListener}>
        <input type="text" ref="todoText" placeholder="What do you need to do?" />
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
  }
}

export default connect()(AddTodo)