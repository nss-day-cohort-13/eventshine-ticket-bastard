app.controller("ViewEventsCtrl", function($http, $uibModal, $timeout, $location) {
    const viewEvents = this;

    $http.get("http://localhost:8000/tbapp/venues")
    .then((response) => viewEvents.venues = response.data);

    $http.get("http://localhost:8000/tbapp/tickets")
    .then((response) => viewEvents.all_tickets = response.data)
    .then(() => {
      $http.get("http://localhost:8000/tbapp/events")
      .then((response) => {
        viewEvents.events = response.data;
        for (var i = 0; i < viewEvents.events.length; i++) {
          stored_event = viewEvents.events[i];
          event_tickets_count = viewEvents.getEventTicketCount(stored_event.pk);
          stored_event.remaining_tickets = (stored_event.fields.max_tickets - event_tickets_count);
        }
      });
    });

    viewEvents.date = new Date().toISOString();

    viewEvents.purchase = event => {
      const modal = $uibModal.open({
        templateUrl: "../static/app/partials/purchaseTicketsModal.html",
        controller: "PurchaseTicketsModalCtrl",
        controllerAs: "purchase",
        size: "sm",
        resolve: {
          event: () => event
        }
      });

      modal.result.then(count => {
        $http.post("http://localhost:8000/tbapp/purchase_tickets",
          {"event": event.pk, "count": count},
          {headers: {"Content-Type": "application/json"}})
        .then(resp => console.log(resp))
        .then(() => alert(`${count} tickets purchased for ${event.fields.name}.`))
        .then(() => $location.path('/'))
        .catch(err => console.error(err));
      }, () => {});
    };

    viewEvents.getEventTicketCount = event_id => {
      let total_event_tickets = 0;
      for (var i = 0; i < viewEvents.all_tickets.length; i++) {
        const ticket = viewEvents.all_tickets[i];
        if (ticket.fields.event == event_id) {
          total_event_tickets ++;
        }
      }
      return total_event_tickets;
    };
});
