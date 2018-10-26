require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

  describe "DELETE#destroy" do
    let!(:venue) { Venue.create(name: 'House of Blues', address: '15 Lansdown Street', description: 'house o blues yo', capacity: 200, url: 'http://www.houseofblues.com/', image: 'http://www.image.com') }
    let!(:user)  { FactoryBot.create(:user) }
    let!(:review) { Review.create(rating: 4, description: "Love it", vote_count: 0, user: user, venue: venue) }

    it "deletes a review" do
      allow(controller).to receive(:current_user).and_return(user)
      
      prev_count = Review.count

      delete :destroy, params: { venue_id: venue.id, id: review.id }
      expect(Review.count).to eq(prev_count - 1)
    end
  end
end
