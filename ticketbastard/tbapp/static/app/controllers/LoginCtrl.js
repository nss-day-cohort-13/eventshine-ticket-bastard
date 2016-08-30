//*****Login Ctrl*****//
'use strict';

app.controller("LoginCtrl", function($http) {
    const login = this;

    // ng-models from login.html
    login.auth_user = {};

    login.login = () => {

      login.auth_user.username = login.username;
      login.auth_user.password = login.password;

      console.log(login.auth_user)


      $http({
        url: "http://127.0.0.1:8000/tbapp/login",
        method: "POST",
        data: login.auth_user,
        headers: {
          "Content-Type": "application/json"}
      })

      // $http.post("http://127.0.0.1:8000/tbapp/login",
      //     login.auth_user,
      //     {headers:{"Content-Type": "application/json"}});
    }

    login.register = () => {

    }
  });
