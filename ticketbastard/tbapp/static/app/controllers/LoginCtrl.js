//*****Login Ctrl*****//


app.controller("LoginCtrl", function($http, $location) {
    const login = this;

    login.login = () => {
      $http({
        url: "http://localhost:8000/tbapp/login",
        method: "POST",
        data: login.auth_user,
        headers: {
          "Content-Type": "application/json"}
      })
      .then(res => console.error(res));
    };

    login.register = () => {
      $location.path('/registerUser');
    };
  });
