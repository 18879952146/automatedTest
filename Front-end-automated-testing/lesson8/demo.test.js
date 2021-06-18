import {runCallback,createObject,getData} from './demo'
import axios from 'axios';
jest.mock('axios')

// 1. 捕获函数的调用和返回结果，以及this和调用顺序
// 2. 它可以让我们自由的设置返回结果
// 3. 改变函数的内部实现

test('测试 runCallback', () => {
  const func = jest.fn();
  // func. mockImplementation()
  runCallback(func);
  runCallback(func);
  expect(func).toBeCalled();
  console.log(func.mock)
});

test('测试 runCallback', () => {
  const func = jest.fn(); // mock 函数 捕获函数的调用
  // func.mockReturnValueOnce('Dell').mockReturnValueOnce('lee').mockReturnValueOnce('hello')
  // func.mockReturnValue('dell')
  // func. mockImplementation(() => {
  //   console.log('124342')
  //   return 'dell'
  // })
  // func. mockImplementationOnce(() => {
  //   console.log('124342')
  //   return 'dell'
  // })
  // func. mockImplementationOnce(() => {
  //   console.log('14444')
  //   return 'lee'
  // })
  func. mockReturnThis();
  runCallback(func);
  runCallback(func);
  runCallback(func);
  // expect(func.mock.calls.length).toBe(2); 
  // expect(func.mock.calls[0]).toEqual(['abc']);
  // expect(func.mock.calls[0]).toEqual(['abc']);
  // expect(func.mock.results[0].value).toBe('dell');
  // expect(func.mock.results[1].value).toBe('lee');
  expect(func.mock.results[0].value).toBeUndefined();
  expect(func).toBeCalledWith('abc')
  // console.log(func.mock)
});

test('测试 createObject', () => {
  const func = jest.fn();

  createObject(func);

  console.log(func.mock)
});

test('测试 getData', async() => {
  // 第三用处是改变函数的内部请求
  axios.get.mockResolvedValue({data: 'hello'})
  await getData().then((data) => {
    expect(data).toBe('hello');
  })
});