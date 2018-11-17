require 'spec_helper'
require 'cell'

RSpec.describe Cell do
  it 'should create cell' do
    expect { Cell.new }.not_to raise_error
  end
end
