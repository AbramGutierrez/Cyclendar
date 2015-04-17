class EventsController < ApplicationController
  def display_all
	@url = "https://www.bikereg.com/api/search"
	
	response = JSON.parse(RestClient.get(url))
	
	for e in response["MatchedEvents"]
		puts e["EventName"]
	end 
  end

  def add_to_calendar
  end
end
