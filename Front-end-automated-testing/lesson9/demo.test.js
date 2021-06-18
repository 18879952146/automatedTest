import { generateConfig, gengrateAnotherConfig } from "./demo";

// npm install prettier@1.18.2 --save
// test('测试 generateConfig 函数', () => {
//   // expect(generateConfig()).toEqual({
//   //   server: 'http://localhost',
//   //   port: 8080
//   // });
//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// });

// test('测试 gengrateAnotherConfig 函数', () => {
//   expect(gengrateAnotherConfig()).toMatchSnapshot({
//     time: expect.any(Date)
//   });
// });

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "locathost",
      "port": 8082,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 gengrateAnotherConfig 函数", () => {
  expect(gengrateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "locathost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
