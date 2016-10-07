import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoList from "../../components/TodoList";
import Todo from "../../components/Todo";

describe('TodoList', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo for each todo', () => {
    var todos = [
      {id:1, text:'test 1'},
      {id:2, text:'test 2'}
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});