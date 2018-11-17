const World = require('./world')
const input = [[0, 1], [1, 0]]
const world = new World(input)

test('check neighbours of first cell', () => {
  const neighbourghs = world.getNeighbourghs(0, 0)

  expect(neighbourghs).toEqual([1, 1, 0])
})

test('check neighbours of second cell', () => {
  const neighbourghs = world.getNeighbourghs(0, 1)

  expect(neighbourghs).toEqual([0, 1, 0])
})

test('check alive neighbours of first cell', () => {
  const count = world.getAliveNeighbourghs(0, 0)

  expect(count).toEqual(2)
})

test('check alive neighbours of second cell', () => {
  const count = world.getAliveNeighbourghs(0, 1)

  expect(count).toEqual(1)
})
