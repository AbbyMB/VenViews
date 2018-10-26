require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :venue do
    sequence(:name) {|n| "VenueName" }
    sequence(:address) {|n| "VenueAddress" }
    sequence(:capacity) {|n| 1 }
    sequence(:description) {|n| "VenueDescription" }
    sequence(:url) {|n| "http://www.facebook.com" }
    sequence(:image) {|n| "Myimage.jpg" }
  end

end
