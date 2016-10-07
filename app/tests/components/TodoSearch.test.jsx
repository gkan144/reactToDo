import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoSearch from "../../components/TodoSearch";

describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });

  it('should call onSearch prop with entered input text', () => {
    var searchText = 'Dog';

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch prop with proper checked value', () => {

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  });
});