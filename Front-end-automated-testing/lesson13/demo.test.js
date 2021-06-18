import $ from 'jquery';

// npm install jquery --save

import addDivToBody from './demo';

test('测试 addDivToBody', () => {
  addDivToBody();
  addDivToBody();
  expect($('body').find('div').length).toBe(2);
  // console.log($('body').find('div'))
});

// node 不具备 dom

// jest 在 node 环境下自己模拟了一套 dom 的api jsDom

// jQuery {
//   '0': HTMLDivElement {},
//   '1': HTMLDivElement {},
//   length: 2,
//   prevObject:
//    jQuery {
//      '0': HTMLBodyElement {},
//      length: 1,
//      prevObject: jQuery { '0': [Document], length: 1 } } }