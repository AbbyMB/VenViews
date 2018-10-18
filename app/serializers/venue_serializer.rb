class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :capacity, :url 
end
