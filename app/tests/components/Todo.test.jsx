import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Todo from "../../components/Todo";

describe('Todo', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click on div', ()=>{
    var todoData = {id: 1, text:"test", completed:true};
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDom.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should call onToggle prop with id on checked change', ()=>{
    var todoData = {id: 1, text:"test", completed:true};
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDom.findDOMNode(todo));

    TestUtils.Simulate.click($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith(1);
  });
});