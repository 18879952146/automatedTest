import Counter from './counter'

describe("测试counter相关的代码", () => {

  // describe 的作用域在 describe 里面
 
  let counter = null;
  
  beforeAll(() => {
    // 所有测试用例依次调用之前 准备
    // counter = new Counter()
    console.log('beforeAll')
  });
  
  afterAll(() => {
    // 所有测试用例依次调用之后 处理
    console.log('afterAll')
  });
  
  beforeEach(() => {
    //  每一个测试用例执行之前都会让 beforeEach 执行一次
    counter = new Counter()
    console.log('beforeEach')
  });
  
  afterEach(() => {
    //  每一个测试用例执行之后都会让 afterEach 执行一次
    console.log('afterEach')
  });
  
  describe("测试增加相关的代码", () => {
    // test.only 对单个测试用例进行测试
    // beforeAll(() => {
    //   console.log('测试增加相关的代码 beforeAll')
    // });

    // afterEach(() => {
    //   console.log('测试增加相关的代码 afterEach')
    // });

    // beforeEach(() => {
    //   console.log('测试增加相关的代码 beforeEach')
    // });

    // afterAll(() => {
    //   console.log('测试增加相关的代码 afterAll')
    // });
    test('测试 Counter 中的 addOne方法', () => {
      console.log('测试 Counter 中的 addOne方法')
      counter.addOne()
      expect(counter.number).toBe(1);
    });
    
    test('测试 Counter 中的 addTwo方法', () => {
      console.log('测试 Counter 中的 addTwo方法')
      counter.addTwo()
      expect(counter.number).toBe(2);
    });
  
  });
  
  describe("测试减少相关的代码", () => {
    test('测试 Counter 中的 minusOne方法', () => {
      console.log('测试 Counter 中的 minusOne方法')
      counter.minusOne()
      expect(counter.number).toBe(-1);
    });
    
    test('测试 Counter 中的 minusOne方法', () => {
      console.log('测试 Counter 中的 minusOne方法')
      counter.minusTwo()
      expect(counter.number).toBe(-2);
    });
  
  });

});


