class GeocoderWrapper
  def initialize(address)
    @geocoded = Geocoder.search(address).first
  end

  def latitude
    @geocoded ? @geocoded.latitude : nil
  end

  def longitude
    @geocoded ? @geocoded.longitude : nil
  end

  def location
    [latitude, longitude]
  end
end
