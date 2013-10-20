require 'bundler'
Bundler.require

set :server, :puma

get '/' do
  'sup'
end
