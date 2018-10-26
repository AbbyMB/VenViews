class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :user_id
end
