import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import {TodoSearch} from "app/components/TodoSearch";

describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    let searchText = 'Dog';
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };

    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let searchTextInput = TestUtils.scryRenderedDOMComponentsWithTag(todoSearch, 'input')
      .filter(inputElement=> inputElement.type === "search")[0];

    expect(searchTextInput).toExist();

    searchTextInput.value = searchText;
    TestUtils.Simulate.change(searchTextInput);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is clicked', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let showCompletedInput = TestUtils.scryRenderedDOMComponentsWithTag(todoSearch, 'input')
      .filter(inputElement=> inputElement.type === "checkbox")[0];

    expect(showCompletedInput).toExist();

    TestUtils.Simulate.change(showCompletedInput);

    expect(spy).toHaveBeenCalledWith(action);
  });
});