import expect from 'expect';
import configurMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from 'app/actions/actions';
import firebase,{firebaseRef} from 'app/firebase/';

let createMockStore = configurMockStore([thunk]);

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
      todo: {
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: null,
        createdAt: 100
      }
    };

    let response = actions.addTodo(action.todo);

    expect(response).toEqual(action);
  });

  it('should generate add todos action', () => {
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

    let response = actions.addTodos(action.todos);

    expect(response).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'test';

    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  });

  it('should generate update todo action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };

    let response = actions.updateTodo(action.id, action.updates);

    expect(response).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'something to do',
        completed: false,
        createdAt: 123456
      }).then(() => {
        done();
      });
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => {done();});
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }).catch(done);
    });
  });
});