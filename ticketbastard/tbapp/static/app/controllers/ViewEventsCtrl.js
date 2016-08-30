app.controller("ViewEventsCtrl", function($http, $scope) {
    const viewEvents = this;
    $scope.events = undefined

    $http.get("http://127.0.0.1:8000/tbapp/events")
    .then(function(response) {
        $scope.events = response.data
        console.log(response.data)
    });
})
