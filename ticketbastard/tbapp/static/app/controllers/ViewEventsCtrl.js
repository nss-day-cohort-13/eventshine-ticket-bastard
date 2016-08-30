app.controller("ViewEventsCtrl", function($http) {
    const viewEvents = this;

    $http.get("http://127.0.0.1:8000/tbapp/events")
    .then((response) => viewEvents.events = response.data);

    $http.get("http://127.0.0.1:8000/tbapp/venues")
    .then((response) => viewEvents.venues = response.data);


})
