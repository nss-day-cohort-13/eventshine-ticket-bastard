var app = angular
  .module("tbapp", ["ngRoute"])
  .config(function($interpolateProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $interpolateProvider.startSymbol("((");
    $interpolateProvider.endSymbol("))");
});
