require "rails_helper"

RSpec.describe Api::V1::VenuesController, type: :controller do
  let!(:first_venue) { Venue.create(name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.image.com') }
  let!(:second_venue) { Venue.create(name: 'Hatch Shell', address: '47 David G Mugar Way', description: 'The HALF shell', capacity: 500, url: 'http://www.hatchshell.com/', image: 'http://www.wayfair.com') }
  
  describe "GET#index" do
    it "should return a list of all the venues" do

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["venues"].length).to eq 2
      expect(returned_json["venues"][0]["name"]).to eq "House of Blues"
      expect(returned_json["venues"][0]["address"]).to eq "15 Lansdown Street"
      expect(returned_json["venues"][0]["description"]).to eq "house o blues yo"
      expect(returned_json["venues"][0]["capacity"]).to eq 200
      expect(returned_json["venues"][0]["url"]).to eq "http://www.houseofblues.com/"
      expect(returned_json["venues"][0]["image"]).to eq "http://www.image.com"

      expect(returned_json["venues"][1]["name"]).to eq "Hatch Shell"
      expect(returned_json["venues"][1]["address"]).to eq "47 David G Mugar Way"
      expect(returned_json["venues"][1]["description"]).to eq "The HALF shell"
      expect(returned_json["venues"][1]["capacity"]).to eq 500
      expect(returned_json["venues"][1]["url"]).to eq "http://www.hatchshell.com/"
      expect(returned_json["venues"][1]["image"]).to eq "http://www.wayfair.com"
    end
  end
end
