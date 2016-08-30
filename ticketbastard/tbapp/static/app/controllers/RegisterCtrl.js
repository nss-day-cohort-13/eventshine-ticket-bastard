app.controller("RegisterCtrl", function($http) {
  const register = this;

  register.submit = () => {
    $http.post("http://localhost:8000/tbapp/register_user",
      register.user,
      {headers: {"Content-Type": "application/json"}})
        .then((resp) => alert(resp))
        .catch(err => console.error(err))
  };
});
