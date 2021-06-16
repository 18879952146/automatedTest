## 使用Jest修改自动化测试样例

```js
sudo npm install jest@24.8.0 -D
```
- 单元测试，集成测试
- 模块测试，多个模块测试

## jest的简单配置

```js
npx jest --init
```

```js
//生成测试报告
npx jest --coverage
```

```js
// 代码测试覆盖率的报告生成到哪个文件夹下
coverageDirectory: "coverage" // -------
coverageDirectory: "delllee" // ++++++++
```

### 配置webpack环境

```js
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```

```js
// .babelrc
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```

- npm run jest
- jest (babel-jest)
- babel-core
- 取.babelrc配置
- 在运行测试之前，结合babel，先把你的代码做一次转化运行转化过的测试用例代码
