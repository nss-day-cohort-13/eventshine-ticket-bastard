app.controller('EventCtrl', function($http) {
    const events = this;

    events.submitEventForm = function () {
        $http.post('http://127.0.0.1:8000/tbapp/create_event',
            events.event,
            {headers:{'Content-Type': 'application/json'}})
    }

})

