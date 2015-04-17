require 'test_helper'

class EventsControllerTest < ActionController::TestCase
  test "should get display_all" do
    get :display_all
    assert_response :success
  end

  test "should get add_to_calendar" do
    get :add_to_calendar
    assert_response :success
  end

end
