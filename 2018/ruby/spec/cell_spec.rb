require 'spec_helper'
require 'cell'

RSpec.describe Cell do
  it 'should create cell' do
    expect { Cell.new }.not_to raise_error
  end

  it 'has initial state as alive' do
    cell = Cell.new
    expect(cell.is_alive?).to eq(true)
  end

  it 'can die' do
    cell = Cell.new
    cell.die!
    expect(cell.is_alive?).to eq(false)
  end

  it 'cal live' do
    cell = Cell.new
    cell.die!
    cell.live!
    expect(cell.is_alive?).to eq(true)
  end
end
