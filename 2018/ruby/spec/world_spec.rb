require 'spec_helper'
require 'world'

RSpec.describe World do
  let(:world) { World.new }

  it 'should not raise error' do
    expect { World.new }.not_to raise_error
  end

  it 'with one cell which is alive' do
    cell = world.state
    expect(cell.is_alive?).to eq(true)
  end

  it 'can evolve' do
    world.evolve
    cell = world.state
  end
end
