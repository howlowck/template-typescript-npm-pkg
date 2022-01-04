import { greet } from '../src/index'

test('outputs correct greeting', () => {
  const actual = greet('Hao')
  expect(actual).toEqual('Hi Hao!')
})
