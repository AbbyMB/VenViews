require 'rails_helper'

feature 'user views individual venue', %Q{
  As a visitor
  I want to view individual venues
  So that I can see that venues information
} do


  scenario 'present correct information' do
    rock_roll = Venue.create(name: 'Rock and Roll', address: '6 Hamilton Lane', description: 'Rock and Roll all night long!', capacity: '5000', url: 'www.rockandroll.com', image: 'https://d2uqqhmijd5j2z.cloudfront.net/files/131579/venue_gallery/HouseOfBluesBostonMA.jpg?1482355562')
    visit venue_path(rock_roll)

    expect(page).to have_content(rock_roll.name)
    expect(page).to have_content(rock_roll.address)
    expect(page).to have_content(rock_roll.description)
    expect(page).to have_content(rock_roll.capacity)
  end

end
