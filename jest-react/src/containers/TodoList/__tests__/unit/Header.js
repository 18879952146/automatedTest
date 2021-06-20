// import { render, screen } from '@testing-library/react';
import React from 'react'
import Header from '../../components/Header';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test("Header 组件渲染样式正常", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('Header 组件包含一个input 框', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  expect(inputElem.length).toBe(1);
});

test('Header组件input框内容，初始化应该为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  expect(inputElem.prop('value')).toEqual('');
});

test('Header组件input框内容，当用户输入时，会跟随变化', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  const valueText = '蓝湛要天天'
  inputElem.simulate('change', {
    target: {value: valueText}
  })
  // expect(wrapper.state('value')).toEqual(valueText);
  const newInputElem = wrapper.find("[data-test='input']");
  expect(newInputElem.prop('value')).toEqual(valueText);
});

test('Header组件 input框输入回车时，如果input无内容，无操作', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = wrapper.find("[data-test='input']");
  wrapper.setState({
    value: ''
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })

  expect(fn).not.toHaveBeenCalled();

});

test('Header组件input 框输入回车时，如果input有内容，函数应该被调用', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = wrapper.find("[data-test='input']");
  const vt = '羡羡三岁啦';
  wrapper.setState({
    value: vt
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })

  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(vt);

});


test('Header组件input 框输入回车时，如果input有内容，函数应该被调用,输入完成后应该为空', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn}/>);
  const inputElem = wrapper.find("[data-test='input']");
  const vt = '羡羡三岁啦';
  wrapper.setState({
    value: vt
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  const newInputElem = wrapper.find("[data-test='input']");
  expect(newInputElem.prop('value')).toBe('');

});