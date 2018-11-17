const { World, Cell } = require('./world')

test('create world with size', () => {
  const world = new World(1)
  expect(world.size).toBe(1)
})

test('world with 1 cell is alive at beginning', () => {
  const world = new World(1)
  const cell = world.state
  expect(cell.isAlive()).toEqual(true)
})

test('world with alive cell dies in next evolution', () => {
  const world = new World(1)
  world.evolve()
  const cell = world.state
  expect(cell.isAlive()).toEqual(false)
})

test('create cell is alive by default', () => {
  const cell = new Cell()
  expect(cell.isAlive()).toBe(true)
})

test('alive cell can die', () => {
  const cell = new Cell()
  cell.die()
  expect(cell.isAlive()).toBe(false)
})
