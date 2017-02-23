import React from 'react';
import {connect} from 'react-redux';

import actions from 'app/actions/actions'

export class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  login() {
    let {dispatch} = this.props;
    dispatch(actions.startLogin());
  }

  render() {
    return <div>
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="column small-centered small-10 medium-6 large-4">
          <div className="callout callout-auth">
            <h3>Login</h3>
            <p>Login with github account</p>
            <button className="button" onClick={this.login.bind(this)}>Login with github</button>
          </div>
        </div>
      </div>
    </div>
  }
}
export default connect()(Login);
