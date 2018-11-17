require 'spec_helper'
require 'example'

RSpec.describe Example do
  it 'should not raise error' do
    expect { Example.new }.not_to raise_error
  end
end
