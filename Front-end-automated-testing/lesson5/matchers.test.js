test('测试 toMatch', () => {
  // toMatch 匹配器 字符串
  const a = 'http'
  expect(a).toMatch(/htt/);
})

test('测试 toContain', () => {
  // toContain 匹配器 array set
  const a = [1,2,3,4,'you']
  expect(a).toContain('you');
})

const throwNewErrorFunc = () => {
  throw new Error('代码错了呀，我的宝~')
}
test('测试 toThrow', () => {
  // toThrow 匹配器 处理异常
  expect(throwNewErrorFunc).toThrow('代码错了呀，我的宝~');
})