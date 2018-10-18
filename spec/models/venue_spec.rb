require 'rails_helper'

RSpec.describe Venue, type: :model do
  house_of_blues = Venue.new( name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.thistestusedtowork.com' )
  no_name = Venue.new( address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.google.com' )
  no_address = Venue.new( name: 'House of Blues', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.website.com' )
  no_description = Venue.new( name: 'House of Blues', address: '15 Lansdown Street', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.image.com' )
  no_capacity = Venue.new( name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', url: 'http://www.houseofblues.com/', image: 'http://www.images.com' )
  no_url = Venue.new( name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, image: 'http://www.poerpefjoih.com' )

  it "Is valid with attributes" do
    expect(house_of_blues).to be_valid
  end

  it "Is not valid without attributes" do
    expect(no_name).to_not be_valid
    expect(no_description).to_not be_valid
    expect(no_address).to_not be_valid
    expect(no_capacity).to_not be_valid
    expect(no_url).to_not be_valid
  end

end
