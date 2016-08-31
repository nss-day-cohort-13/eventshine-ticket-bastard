app.config(($routeProvider) => (
    $routeProvider
      .when("/", {
        templateUrl: "../static/app/partials/homePage.html"
      })
      .when("/createEvent", {
        controller: "EventCtrl",
        controllerAs: "events",
        templateUrl: "../static/app/partials/createEvent.html"
      })
      .when("/login", {
        controller: "LoginCtrl",
        controllerAs: "login",
        templateUrl: "../static/app/partials/login.html"
      })
      .when("/registerUser", {
        controller: "RegisterCtrl",
        controllerAs: "register",
        templateUrl: "../static/app/partials/registerUser.html"
      })
      .when("/viewEvents", {
        controller: "ViewEventsCtrl",
        controllerAs: "viewEvents",
        templateUrl: "../static/app/partials/viewEvents.html"
      })
      .when("/pastEvents", {
        controller: "PastEventsCtrl",
        controllerAs: "pastEvents",
        templateUrl: "../static/app/partials/pastEvents.html"
      })
      .when("/createVenue", {
        controller: "VenueCtrl",
        controllerAs: "venues",
        templateUrl: "../static/app/partials/createVenue.html"
      })
      .otherwise("/")
  ));
