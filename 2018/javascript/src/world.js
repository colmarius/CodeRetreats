class World {
  constructor(state) {
    this.state = state
  }

  getAliveNeighbourghs(row, col) {
    const neighbours = this.getNeighbourghs(row, col)
    return neighbours.reduce((a, b) => a + b, 0)
  }

  getNeighbourghs(row, col) {
    const state = this.state
    const coordinates = [
      // Upper row neighbours
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      // Left and right neighbours
      [row, col - 1],
      [row, col + 1],
      // Lower neighbours
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ]
    return coordinates
      .map(coords => {
        const a = coords[0]
        const b = coords[1]
        if (state[a] && state[a][b] !== undefined) {
          return state[a][b]
        }
      })
      .filter(el => el !== undefined)
  }
}

module.exports = World
