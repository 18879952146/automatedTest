import React from 'react'
import UndoList from '../../components/UndoList';
import {shallow} from 'enzyme';
import {findTestWrapper} from '../../../../utils/testUtils'

// test("UndoList 组件渲染样式正常", () => {
//   const wrapper = shallow(<UndoList />);
//   expect(wrapper).toMatchSnapshot();
// });

test('未完成列表当数据为空数组时count数目为0，列表无内容', () => {
  const wrapper = shallow(<UndoList list={[]}/>);
  const countElem = findTestWrapper(wrapper, 'count');
  const listItems = findTestWrapper(wrapper, 'list-item');
  expect(countElem.text()).toEqual('0');
  expect(listItems.length).toEqual(0);
});

test('未完成列表当数据有内容时count数目显示数据长度，列表不为空', () => {
  const array = ['xiao','fu','die']
  const wrapper = shallow(<UndoList list={array}/>);
  const countElem = findTestWrapper(wrapper, 'count');
  const listItems = findTestWrapper(wrapper, 'list-item');
  expect(countElem.text()).toEqual('3');
  expect(listItems.length).toEqual(3);
});


test('未完成列表当数据有内容时，要存在删除按钮', () => {
  const array = ['xiao','fu','die']
  const wrapper = shallow(<UndoList list={array}/>);
  const deletItems = findTestWrapper(wrapper, 'delet-item');
  expect(deletItems.length).toEqual(3);
});

test('未完成列表当数据有内容时，点击某个删除按钮，会调用删除方法', () => {
  const array = ['xiao','fu','die']
  const fn = jest.fn();
  const index = 1
  const wrapper = shallow(<UndoList deletItem={fn} list={array}/>);
  const deletItems = findTestWrapper(wrapper, 'delet-item');
  deletItems.at(index).simulate('click');
  expect(fn).toHaveBeenLastCalledWith(index);
  
});