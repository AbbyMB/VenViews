class Venue < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true
  validates :description, presence: true
  validates :capacity, numericality: { only_integer: true }
  validates :url, presence: true
  validates :image, presence: true

  has_many :reviews
end
