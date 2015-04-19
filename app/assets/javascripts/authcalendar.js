var clientId = '1035298012120-gudl33hk1035bn9hsgkllm7lvv90h8g8';
var apiKey = 'AIzaSyCwkPjiwelryF6oeKH5ADucDsEDznUmBOw';
var scopes = 'https://www.googleapis.com/auth/calendar';

var events;


function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (!authResult.error) {
	authorizeButton.style.visibility = 'hidden';
	makeApiCall();
  } else {
	authorizeButton.style.visibility = '';
	authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
	  {client_id: clientId, scope: scopes, immediate: false},
	  handleAuthResult);
  return false;
}

function makeApiCall() {
  gapi.client.load('calendar', 'v3', function() {
	var request = gapi.client.calendar.events.list({
	  'calendarId': 'primary'
	});
		  
	request.execute(function(resp) {
	  console.log('List of events:');
	  console.log(resp);
	  
	  events = resp;
	  setUpCalendar();
	  
	  /*for (var i = 0; i < resp.items.length; i++) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(resp.items[i].summary));
		document.getElementById('events').appendChild(li);
	  }*/
	});
  });
}


function setUpCalendar() {
	$('#calendar').fullCalendar({
		// put your options and callbacks here
	})
	
	events.items.forEach(function (googEvent) { 
		if(googEvent && googEvent.summary && googEvent.start && googEvent.start.dateTime) {
			var newEvent = {
				start: googEvent.start.dateTime,
				allDay: false,
				title: googEvent.summary
			};
			
			//$('#calendar').fullCalendar( 'renderEvent', newEvent, 'stick' );
		}
	});
}