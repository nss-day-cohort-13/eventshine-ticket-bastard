//*****Login Ctrl*****//


app.controller("LoginCtrl", function($http, $location) {
    const login = this;

    login.login = () => {
      $http({
        url: "http://127.0.0.1:8000/tbapp/login",
        method: "POST",
        data: login.auth_user,
        headers: {
          "Content-Type": "application/json"}
      });
    };

    login.register = () => {
      $location.path('/registerUser');
    };
  });
