jest.mock('./utils')
// jest.mock发现util是一个类，会自动把类的构造函数和方法变成jest.fn()
// const Util = jest.fn(); 
// Util.a = jest.fn(); 
// Util.b = jest.fn();
import demoFunction from './demo';
import Util from './utils'

test('测试 demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
  // console.log(Util.mock)
});

