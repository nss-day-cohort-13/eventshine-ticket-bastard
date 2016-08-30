app.controller("RegisterCtrl", function($http, $location) {
  const register = this;

  register.submit = () => {
    $http.post("http://localhost:8000/tbapp/register_user",
      register.user,
      {headers: {"Content-Type": "application/json"}})
        .then(resp => console.log(resp))
        .then(() => $location.path("/"))
        .catch(err => console.error(err))
  };
});
