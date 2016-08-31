app.controller("NavCtrl", function($http, $location, authFactory) {
  const nav = this;
  nav.user = authFactory.user;

  nav.logout = () =>
    $http.post("http://localhost:8000/tbapp/logout", authFactory.user.current)
      .then(() => authFactory.user.current = null)
      .then(() => $location.path("/"))
      .catch(err => console.error(err))
});
