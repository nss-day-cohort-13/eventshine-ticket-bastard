app.controller("VenueCtrl", function($http, $location) {
    const venues = this;

    // call to create a new venue
    venues.submitVenueForm = function () {
        $http.post("http://localhost:8000/tbapp/create_venue",
            venues.venue,
            {headers:{"Content-Type": "application/json"}})
        .then($location.path('/'))
        .catch(err => console.error(err));
    };
});
