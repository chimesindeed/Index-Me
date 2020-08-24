class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :front, :back
end
