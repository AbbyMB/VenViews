class Review < ApplicationRecord
  validates :rating, presence: true
  validates :description, presence: true
  validates :vote_count, presence: true

  belongs_to :venue
  belongs_to :user 

end
