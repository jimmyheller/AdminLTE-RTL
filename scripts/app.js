'use strict';

/**
 * @ngdoc overview
 * @name test1App
 * @description
 * # test1App
 *
 * Main module of the application.
 */
angular
    .module('aml', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/connections', {
                templateUrl: 'views/connections.html',
                controller: 'ConnectionsCtrl',
                controllerAs: 'connections'
            }).when('/amlReport', {
                templateUrl: 'views/amlReport.html',
                controller: 'amlCtrl',
                controllerAs: 'amlReport'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
