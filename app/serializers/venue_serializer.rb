class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :capacity, :url, :image

  has_many :reviews
end
