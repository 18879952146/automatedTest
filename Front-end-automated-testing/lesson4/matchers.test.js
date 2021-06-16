test('测试 toBe', () => {
  // toBe 匹配器 matchers object.is ===
  expect(10).toBe(10);
})

test('测试 toEqual', () => {
  // toEqual 匹配器 内容相等
  const a = {one: 1}
  expect(a).toEqual({one: 1});
})

test('测试 toBeNull', () => {
  // toBeNull 匹配器 内容相等
  const a = null
  expect(a).toBeNull();
})

test('测试 toBeUndefined', () => {
  // toBeUndefined 匹配器 内容相等
  const a = undefined
  expect(a).toBeUndefined();
})

test('测试 toBeDefined', () => {
  // toBeDefined 匹配器 内容相等
  const a = ''
  expect(a).toBeDefined();
})

test('测试 toBeTruthy', () => {
  // toBeTruthy 匹配器 内容相等
  const a = 1
  expect(a).toBeTruthy();
})

test('测试 toBeFalsy', () => {
  // toBeFalsy 匹配器 内容相等
  const a = 0
  expect(a).toBeFalsy();
})

test('测试 not', () => {
  // not 匹配器 内容相等
  const a = 1
  expect(a).not.toBeFalsy();
})

test('测试 toBeGreaterThan', () => {
  // toBeGreaterThan 匹配器 大于
  const a = 11
  expect(a).toBeGreaterThan(10);
})

test('测试 toBeLessThan', () => {
  // toBeLessThan 匹配器 小于
  const a = 1
  expect(a).toBeLessThan(2);
})

test('测试 toBeGreaterThanOrEqual', () => {
  // toBeGreaterThanOrEqual 匹配器 大于或等于
  const a = 2
  expect(a).toBeGreaterThanOrEqual(1);
})

test('测试 toBeLessThanOrEqual', () => {
  // toBeLessThanOrEqual 匹配器 大于或等于
  const a = 2
  expect(a).toBeLessThanOrEqual(2);
})

test('测试 toBeCloseTo', () => {
  // toBeCloseTo 匹配器 浮点数
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3);
})

test('测试 toMatch', () => {
  // toMatch 匹配器 字符串
  const a = 'http'
  expect(a).toMatch(/htt/);
})

test('测试 toContain', () => {
  // toContain 匹配器 array set
  const a = [1,2,3,4,'you']
  expect(a).toContain(2);
})

const throwNewErrorFunc = () => {
  throw new Error('代码错了呀，我的宝~')
}
test('测试 toThrow', () => {
  // toThrow 匹配器 处理异常
  expect(throwNewErrorFunc).toThrow('代码错了呀，我的宝~');
})