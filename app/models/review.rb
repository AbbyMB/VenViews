class Review < ApplicationRecord
  validates :rating, presence: true
  validates :description
  validates :vote_count, presence: true

  belongs_to :venue
  belongs_to :user

end
