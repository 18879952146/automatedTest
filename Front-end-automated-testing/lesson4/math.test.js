import {add, subtraction} from './math'

test('测试加法', () => {
    expect(add(3, 7)).toBe(10)
 })


test('测试减法', () => {
    expect(subtraction(3, 3)).toBe(0);
})
 
 