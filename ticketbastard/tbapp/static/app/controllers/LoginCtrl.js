//*****Login Ctrl*****//


app.controller("LoginCtrl", function($http, $location, $uibModal) {
    const login = this;

    login.login = () => {
      $http({
        url: "http://localhost:8000/tbapp/login",
        method: "POST",
        data: login.auth_user,
        headers: {
          "Content-Type": "application/json"}
      })
      .then(res => conflict_events = res.data)
      .then(function(conflict_events) {
        if (conflict_events.length > 0){
          login.warning(conflict_events);
        }
      });
    };

    login.register = () => {
      $location.path('/registerUser');
    };

    login.warning = (conflict_events) => {
      const modal = $uibModal.open({
      templateUrl: "../static/app/partials/conflictAlertModal.html",
      controller: "ConflictAlertModalCtrl",
      controllerAs: "warning",
      size: "sm",
      resolve: {
          conflict_events: () => conflict_events
        }
      })
    }

  });
