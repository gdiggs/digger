class Store
  include MongoMapper::Document

  key :location, Array

  ensure_index :id
  ensure_index [[:location, '2d']]

  def self.nearest(location)
    where(:location => {'$near' => location}).limit(1).first
  end
end
