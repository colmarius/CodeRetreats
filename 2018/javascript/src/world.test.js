const world = require('./world')

test('hellow world', () => {
  expect(world()).toEqual('hello world')
})
