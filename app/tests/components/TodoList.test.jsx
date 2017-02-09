import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import ConnectedTodoList, {TodoList} from "../../components/TodoList";
import Todo from "../../components/Todo";

describe('TodoList', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo for each todo', () => {
    let todos = [
      {id:1, text:'test 1'},
      {id:2, text:'test 2'}
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDom.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});