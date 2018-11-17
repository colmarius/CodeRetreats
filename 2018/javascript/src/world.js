class Cell {
  constructor() {
    this.state = 'alive'
  }

  isAlive() {
    return this.state === 'alive'
  }

  die() {
    this.state = 'dead'
  }
}

class World {
  constructor(size) {
    this.size = size
    this.state = new Cell()
  }

  evolve() {
    this.state.die()
  }
}

module.exports = {
  Cell,
  World,
}
