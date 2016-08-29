app.controller('EventCtrl', function($http) {
    const ctrl = this

    ctrl.submitEventForm = function () {
        console.log("CEVENT",ctrl.event)
        $http.post('http://127.0.0.1:8000/tbapp/create_event', ctrl.event, {headers:{'Content-Type': 'application/json'}})
    }

})

