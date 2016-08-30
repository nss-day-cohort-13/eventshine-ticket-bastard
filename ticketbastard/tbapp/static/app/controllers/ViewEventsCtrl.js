app.controller("ViewEventsCtrl", function($http) {
    const viewEvents = this;

    $http.get("http://localhost:8000/tbapp/events")
    .then((response) => viewEvents.events = response.data);

    $http.get("http://localhost:8000/tbapp/venues")
    .then((response) => viewEvents.venues = response.data);

    viewEvents.date = new Date().toISOString();

    viewEvents.purchase = event => {
      $http.post("http://localhost:8000/tbapp/purchase_tickets",
        {"event": event.pk, "count": 2},
        {headers: {"Content-Type": "application/json"}})
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
    };
})
