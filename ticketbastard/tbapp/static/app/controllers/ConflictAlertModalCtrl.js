app.controller("ConflictAlertModalCtrl", function($uibModalInstance, conflict_events) {
  const warning = this;
  warning.conflict_events = conflict_events;

  // purchase.confirm = () => { $uibModalInstance.close(purchase.count); };

  warning.cancel = () => { $uibModalInstance.dismiss("cancel"); };
});
