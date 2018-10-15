require 'rails_helper'

RSpec.describe Venue, type: :model do
  house_of_blues = Venue.new( name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/' )
  failure = Venue.new( address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/' )

  it "Is valid with attributes" do
    expect(house_of_blues).to be_valid
  end

  it "Is not valid without attributes" do
    expect(failure).to_not be_valid
  end

end
