app.controller("EventCtrl", function($http) {
    const events = this;

    $http.get("http://127.0.0.1:8000/tbapp/venues")
        .then((response) => events.venues = response.data)
        .then((test) => console.log("TEST", test));

    // call to create a new event
    events.submitEventForm = function () {
        $http.post("http://127.0.0.1:8000/tbapp/create_event",
            events.event,
            {headers:{"Content-Type": "application/json"}});
    };
});

