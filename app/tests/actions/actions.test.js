import expect from 'expect';

import actions from '../../actions/actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text',
    };

    let response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Some text',
    };

    let response = actions.addTodo(action.text);

    expect(response).toEqual(action);
  });

  it('should generate show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    let response = actions.toggleTodo(action.id);

    expect(response).toEqual(action);
  });
});