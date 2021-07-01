// import { render, screen } from '@testing-library/react';
import React from 'react'
import TodoList from '../../index';
import {shallow} from 'enzyme';

describe('TodoList 组件', () => {
  
  test('初始化列表为空', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.state('undoList')).toEqual([]);
  });
  
  // test('TodoList应该给Header传递一个增加undoList内容的方法', () => {
  //   const wrapper = shallow(<TodoList />);
  //   const Header = wrapper.find('Header');
  //   const addFunc = Header.prop('addUndoItem')
  //   addFunc('清风明月晓星尘')
  //   expect(wrapper.state('undoList').length).toBe(1);
  //   expect(wrapper.state('undoList')[0]).toBe('清风明月晓星尘');
  // });
  
  test('addUndoItem被执行的时候,应该新增内容', () => {
    const wrapper = shallow(<TodoList />);
    const content = '清风明月晓星尘';
    wrapper.instance().addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toEqual({
      status: 'div',
      value:content
    });
    wrapper.instance().addUndoItem('傲雪凌霜宋子辰')
    expect(wrapper.state('undoList').length).toBe(2);
  });
  
  test('应该给未完成列表传递list数据，以及deleteItem、changeStatus、handleBlu、valueChange 方法', () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deletItem')).toBeTruthy();
    expect(UndoList.prop('changeStatus')).toBeTruthy();
    expect(UndoList.prop('handleBlur')).toBeTruthy();
    expect(UndoList.prop('valueChange')).toBeTruthy();
  
  });
  
  test('应该给Header传递一个增加undoList内容的方法', () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBeTruthy();
  
  });
  
  test('当deleteltem方法被执行时，undolist应该删除内容', () => {
    const wrapper = shallow(<TodoList />);
    const data = [
      {status: 'div',value: 'xiao'},
      {status: 'div',value: 'fu'},
      {status: 'div',value: 'die'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().deletItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0],data[2]]);
  
  });

  test('changeStatus 方法被调用，undoList 数据项status被修改', () => {
    const wrapper = shallow(<TodoList />);
    const data = [
      {status: 'div',value: 'xiao'},
      {status: 'div',value: 'fu'},
      {status: 'div',value: 'die'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().changeStatus(1);
    expect(wrapper.state('undoList')[1]).toEqual({
      ...data[1],
      status: 'input'
    });
  
  });

  test('handleBlur 方法被调用，undoList 数据项status被修改', () => {
    const wrapper = shallow(<TodoList />);
    const data = [
      {status: 'input',value: 'xiao'},
      {status: 'div',value: 'fu'},
      {status: 'div',value: 'die'},
    ]

    wrapper.setState({
      undoList: data
    })

    wrapper.instance().handleBlur(0);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      status: 'div'
    });
  });

  test('changeValue方法被调用，undolist数据项value被修改', () => {
    const wrapper = shallow(<TodoList />);
    const value = 'word'
    const data = [
      {status: 'input',value: 'xiao'},
      {status: 'div',value: 'ming'}
    ]

    wrapper.setState({
      undoList: data
    })

    wrapper.instance().valueChange(0,value);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      value
    });
  
  });
});



