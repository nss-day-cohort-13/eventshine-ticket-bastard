app.controller("ConflictAlertModalCtrl", function($uibModalInstance, conflict_events) {
    const warning = this;
    warning.conflict_events = conflict_events;

    if (conflict_events.length > 0) {
        warning.hasConflicts = true;
    }

  warning.cancel = () => { $uibModalInstance.dismiss(); };
});
