class EventsController < ApplicationController
  @events
  
  def display_all
	url = "https://www.bikereg.com/api/search"
	@events = JSON.parse(RestClient.get(url))
  end

  def add_to_calendar
  end
end
