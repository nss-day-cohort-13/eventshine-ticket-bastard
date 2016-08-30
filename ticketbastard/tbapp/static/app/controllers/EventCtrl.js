app.controller("EventCtrl", function($http, $location) {
    const events = this;

    $http.get("http://localhost:8000/tbapp/venues")
        .then((response) => events.venues = response.data);

    // call to create a new event
    events.submitEventForm = function () {
        $http.post("http://localhost:8000/tbapp/create_event",
            events.event,
            {headers:{"Content-Type": "application/json"}})
        .then($location.path('/'))
        .catch(err => console.error(err));
    };
});
