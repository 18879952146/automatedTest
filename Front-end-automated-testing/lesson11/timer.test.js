import timer from './timer';

beforeEach(() => {
  jest.useFakeTimers(); //模拟计时器
});

// jest.useFakeTimers(); //模拟计时器


test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers() //立即执行计时器
  // jest.runOnlyPendingTimers(); //只执行当前处于队列中即将被执行的计时器
  jest.advanceTimersByTime(3000); //让时间快进3秒
  expect(fn).toHaveBeenCalledTimes(1);
});

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers() //立即执行计时器
  // jest.runOnlyPendingTimers(); //只执行当前处于队列中即将被执行的计时器
  jest.advanceTimersByTime(3000); //让时间快进3秒
  expect(fn).toHaveBeenCalledTimes(1);
});