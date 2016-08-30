app.controller("EventCtrl", function($http) {
    const events = this;


// 2016-08-29T00:00:00Z

    $http.get("http://127.0.0.1:8000/tbapp/venues")
        .then((response) => events.venues = response.data);

    // call to create a new event
    events.submitEventForm = function () {
        $http.post("http://127.0.0.1:8000/tbapp/create_event",
            events.event,
            {headers:{"Content-Type": "application/json"}});
    };
});

