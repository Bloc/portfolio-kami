var wawametrics = {};

wawametrics.report = function(eventName) {
  var event = { event: { name: eventName } };
  var request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/api/events", true);
  request.setRequestHeader('Content-Type', 'application/json');
  console.log(event);
  request.send(JSON.stringify(event));
}

console.log('loaded');
