import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoApp from "../../components/TodoApp";

describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = 'test text';

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should update completed value when handleToggle called', ()=>{
    var todoData = {id: 11, text: 'Test features', completed: false};

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});