import React from 'react';

class TodoSearch extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeListener = this.handleSearch.bind(this);
  }

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return <div>
      <div>
        <input type="search" ref="searchText" placeholder="Seach todos" onChange={this.onChangeListener}/>
      </div>
      <div>
        <label>
          <input type="checkbox" ref="showCompleted" onChange={this.onChangeListener} />
          Show completed todos
        </label>
      </div>
    </div>
  }
}

export default TodoSearch