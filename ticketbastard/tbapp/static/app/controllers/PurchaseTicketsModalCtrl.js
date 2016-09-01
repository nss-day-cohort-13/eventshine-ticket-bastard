app.controller("PurchaseTicketsModalCtrl", function($uibModalInstance, $timeout, event) {
  const purchase = this;
  purchase.event = event;
  purchase.remaining_ticket_count_warning = false;

  purchase.confirm = () => {
    if (purchase.count <= purchase.event.remaining_tickets) {
      $uibModalInstance.close(purchase.count, purchase.event);
    }
    else {
      console.log(purchase.remaining_ticket_count_warning)
      purchase.remaining_ticket_count_warning = true;
      $timeout()
      console.log(purchase.remaining_ticket_count_warning)
    }
  };

  purchase.cancel = () => { $uibModalInstance.dismiss("cancel"); };
});
