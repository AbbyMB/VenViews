require 'rails_helper'

feature "visitor sees a list of venues" do
  scenario "sees a list of venues" do
    Venue.create(name: 'House Of Blues', address: '15 Lansdowne St', description: 'House Of Blues is awesome!', capacity: '2500', url: 'www.houseofblues.com', image: 'http://www.image.com')
    visit venues_path

    expect(page).to have_content "House Of Blues"
  end

end
