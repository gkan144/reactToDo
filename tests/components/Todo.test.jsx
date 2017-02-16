import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import actions from 'app/actions/actions';
import {Todo} from "app/components/Todo";

describe('Todo', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });

  it('should dispatch START_TOGGLE_TODO action on click', ()=>{
    var todoData = {id: 1, text:"test", completed:true};
    let action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();

    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDom.findDOMNode(todo));

    TestUtils.Simulate.click($el.find('input')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});