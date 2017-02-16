import React from 'react';
import {connect} from 'react-redux';
import actions from 'app/actions/actions';

export class TodoSearch extends React.Component {

  constructor(props) {
    super(props);

    this.searchTextRef = null;
  }

  render() {

    let {dispatch, showCompleted, searchText} = this.props;

    return <div className="container__header">
      <div>
        <input type="search" ref={(ref)=>{this.searchTextRef = ref}} placeholder="Seach todos"
               value={searchText} onChange={()=>{dispatch(actions.setSearchText(this.searchTextRef.value))}}/>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={showCompleted} onChange={()=>{dispatch(actions.toggleShowCompleted())}} />
          Show completed todos
        </label>
      </div>
    </div>
  }
}

export default connect((state) => {
  return {
    showComplete: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);