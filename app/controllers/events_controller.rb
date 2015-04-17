class EventsController < ApplicationController
  @response
  
  def display_all
	url = "https://www.bikereg.com/api/search"
	@response = JSON.parse(RestClient.get(url))
  end

  def add_to_calendar
  end
end
