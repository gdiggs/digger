def update_record_stores
  puts "Getting updated list of record stores"
  n = 0
  raw_store_data = Typhoeus.get "http://www.recordshops.org/php/ajax/getshops.php"
  raw_store_data = JSON.parse(raw_store_data.body)
  raw_store_data['shops'].each do |shop|
    store = Store.find_by_id(shop['id'])
    next if store
    n += 1
    store = Store.create(shop)
  end
  puts "Updated stores. Added #{n} new stores."
end
