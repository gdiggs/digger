class Store
  include MongoMapper::Document

  key :location, Array

  ensure_index :id
  ensure_index [[:location, '2d']]

  def self.near(location)
    where(:location => {'$near' => location})
  end
end
