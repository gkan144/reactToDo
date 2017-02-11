import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import configureStore from "../../store/configureStore";
import ConnectedTodoList, {TodoList} from "../../components/TodoList";
import ConnectedTodo, {Todo} from "../../components/Todo";

describe('TodoList', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo for each todo', () => {
    let todos = [
      {id:1, text:'test 1', completed: false, completedAt: null, createdAt: 500},
      {id:2, text:'test 2', completed: false, completedAt: null, createdAt: 500}
    ];

    let store = configureStore({ todos });

    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDom.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});