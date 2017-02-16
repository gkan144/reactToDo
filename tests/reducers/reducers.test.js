import expect from 'expect';

import reducers from 'app/reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'search text'
      };


      let response = reducers.searchTextReducer('', action);

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      let response = reducers.showCompletedReducer(false, action);
      expect(response).toBe(true);
      response = reducers.showCompletedReducer(true, action);
      expect(response).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: '111',
          text: 'anything',
          completed: false,
          completedAt: null,
          createdAt: 100
        }
      };

      let response = reducers.todosReducer([], action);

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      let action = {
        type: 'ADD_TODOS',
        todos: [{
          id: '111',
          text: 'anything',
          completed: false,
          completedAt: null,
          createdAt: 100
        }],
      };

      let response = reducers.todosReducer([], action);

      expect(response.length).toEqual(1);
      expect(response).toEqual(action.todos);
    });

    it('should update todo', () => {

      let todos = [{
        id: '123',
        text: 'Walk the dog',
        completed: true,
        createdAt: '123',
        completedAt: '125'
      }];
      let updates = {
        completed: false,
        completedAt: null
      };

      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let response = reducers.todosReducer(todos, action);

      expect(response.length).toEqual(1);
      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(null);
      expect(response[0].text).toEqual(todos[0].text);
    });
  });
});