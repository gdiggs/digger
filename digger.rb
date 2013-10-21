require 'bundler'
require 'uri'
Bundler.require


configure :development do
  MongoMapper.database = 'digger_db'
end

configure :production do
  # from https://gist.github.com/kimenye/3121021
  uri = URI.parse(ENV['MONGOHQ_URL'])
  MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGOHQ_URL'])
  MongoMapper.database = uri.path.gsub(/^\//, '')
  puts ">> db is #{uri.path.gsub(/^\//, '')}"
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

get '/map' do
  @origin = params[:address]
  @location = GeocoderWrapper.new(params[:address]).location
  @stores = Store.near(@location).limit(8).to_a
  haml :map
end

get '/near' do
  @location = GeocoderWrapper.new(params[:address])
  @stores = Store.near @location.location
  haml :near
end

get '/stylesheet.css' do
  content_type 'text/css'
  sass :stylesheet
end
