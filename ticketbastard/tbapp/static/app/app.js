var app = angular
  .module("tbapp", ["ngRoute"])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol("((");
    $interpolateProvider.endSymbol("))");
});
