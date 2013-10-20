require 'bundler'
Bundler.require


configure :development do
  MongoMapper.database = 'digger_db'
end

configure :production do
  MongoMapper.setup({'production' => {'uri' => ENV['MONGODB_URI']}}, 'production')
end

require_relative 'store'
require_relative 'helpers'

configure do
  set :server, :puma
  update_record_stores
end

get '/' do
  haml :index
end
