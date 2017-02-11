import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import {AddTodo} from "../../app/components/AddTodo";

describe('AddTodo', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should should dispatch ADD_TODO when valid todo text', () => {
    let todoText = 'Check mail';
    let action = {
      type: 'ADD_TODO',
      text: todoText
    };
    let spy = expect.createSpy();

    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    let todoText = '';
    let spy = expect.createSpy();

    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});