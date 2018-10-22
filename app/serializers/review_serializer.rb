class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description

  belongs_to :venue
end
