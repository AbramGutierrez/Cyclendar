class WelcomeController < ActionController::Base
  layout "application"
  @events
  
  def index
	url = "https://www.bikereg.com/api/search"
	
	json = JSON.parse(RestClient.get(url));
	@events = json["MatchingEvents"]
  end
  
end
