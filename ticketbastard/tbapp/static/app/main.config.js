app.config(($routeProvider) => (
    $routeProvider
      .when("/", {
        controller: "HomePageCtrl",
        controllerAs: "home",
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
      .when("/userInfo", {
        controller: "UserInfoCtrl",
        controllerAs: "userInfo",
        templateUrl: "../static/app/partials/userInfo.html"
      })
      .when("/viewEvents", {
        controller: "ViewEventsCtrl",
        controllerAs: "viewEvents",
        templateUrl: "../static/app/partials/viewEvents.html"
      })
      .when("/purchaseTickets", {
        controller: "PurchaseTicketsCtrl",
        controllerAs: "purchaseTickets",
        templateUrl: "../static/app/partials/purchaseTickets.html"
      })
      .when("/pastEvents", {
        controller: "PastEventsCtrl",
        controllerAs: "pastEvents",
        templateUrl: "../static/app/partials/pastEvents.html"
      })
      .otherwise("/")
  ));
