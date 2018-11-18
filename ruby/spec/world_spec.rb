require 'spec_helper'
require 'world'

RSpec.describe World do
  it 'should not raise error' do
    expect { World.new }.not_to raise_error
  end
end
