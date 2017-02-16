import React from 'react';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TodoApp from "app/components/TodoApp";
import TodoList from "app/components/TodoList";

import configureStore from 'app/store/configureStore';

describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore();
    let provider = TestUtils.renderIntoDocument(<Provider store={store}><TodoApp /></Provider>)

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});