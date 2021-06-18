jest.mock('./demo')
// jest.unmock('./demo')
import { fetchData } from './demo';
const {getNumber} = jest.requireActual('./demo');

// jest.mock('axios')

test('fetchData 测试', () => {
  // Axios.get.mockResolvedValue({
  //   data: "(function(){return '123'})()"
  // })
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123');
  })
})


test('getNumber 测试', () => {
  expect(getNumber()).toEqual('123');
});