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
    wrapper.instance().addUndoItem('清风明月晓星尘');
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe('清风明月晓星尘');
    wrapper.instance().addUndoItem('傲雪凌霜宋子辰')
    expect(wrapper.state('undoList').length).toBe(2);
  });
  
  test('应该给未完成列表传递list数据，以及deleteItem 方法', () => {
    const wrapper = shallow(<TodoList />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deletItem')).toBeTruthy();
  
  });
  
  test('应该给Header传递一个增加undoList内容的方法', () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBeTruthy();
  
  });
  
  test('当deleteltem方法被执行时，undolist应该删除内容', () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({
      undoList: ['ni', 'shi', 'biu', 'biu']
    })
    wrapper.instance().deletItem(1);
    expect(wrapper.state('undoList')).toEqual(['ni', 'biu', 'biu']);
  
  });
});
