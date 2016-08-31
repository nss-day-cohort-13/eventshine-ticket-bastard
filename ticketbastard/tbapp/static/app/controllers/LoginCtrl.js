app.controller("LoginCtrl", function($http, $location, $uibModal, authFactory) {
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
      .then(conflict_events => login.warning(conflict_events))
      .then(() => authFactory.user.current = login.auth_user);
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
      });
      modal.result.then(() => {},
                        () => $location.path('/'));
    };
  });
