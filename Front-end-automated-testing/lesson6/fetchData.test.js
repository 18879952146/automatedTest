import {fetchData} from './fetchData';

// test('fetchData 返回结果为 { success: true }', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({ success: true });
//     done();
//   })
// })

// test('fetchData 返回结果为 { success: true }', () => {
//   return fetchData().then(res => {
//     expect(res.data).toEqual({ success: true });
//   })
// })

// test('fetchData 返回结果为 404', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true);
//   })
// })


// test('fetchData { success: true }', async() => {
//   // toMatchObject 对象里面包含要匹配的元素就行了
//   await expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })


// test('fetchData 404', async() => {
//   // toThrow 匹配是否抛出错误
//   await expect(fetchData()).rejects.toThrow()
// }) 


// test('fetchData { success: true }', async() => {
//   const response = await fetchData();

//   expect(response.data).toEqual({ success: true });
// });


test('fetchData 404', async() => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e.toString()).toEqual('Error: Request failed with status code 404');
  }
});