class VenueSerializer < ActiveModel::Serializer
  attributes :name, :address, :description, :capacity, :url 
end
