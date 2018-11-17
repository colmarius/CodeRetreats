require 'spec_helper'
require 'world'

RSpec.describe World do
  it 'should not raise error' do
    expect { World.new }.not_to raise_error
  end

  it 'with one cell which is alive' do
    world = World.new
    cell = world.state
    expect(cell.is_alive?).to eq(true)
  end
end
