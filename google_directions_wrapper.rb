class GoogleDirectionsWrapper
  BASE_URL = 'http://maps.googleapis.com/maps/api/directions/json'

  def initialize(origin, stores)
    @origin = origin
    @stores = stores
  end

  def mode
    "walking"
  end

  def waypoints
    @stores.map(&:address)
  end

  def results
    return @results if @results
    resp = Typhoeus.get url
    json = JSON.parse resp.body

  end

  def url
    "#{BASE_URL}?origin=#{@origin}&waypoints=optimize:true|#{URI.encode(waypoints.join('|'))}&sensor=false&mode=#{mode}"
  end
end
