app.controller("PurchaseTicketsModalCtrl", function($uibModalInstance, event) {
  const purchase = this;
  purchase.event = event;

  purchase.confirm = () => { $uibModalInstance.close(purchase.count); };

  purchase.cancel = () => { $uibModalInstance.dismiss("cancel"); };
});
