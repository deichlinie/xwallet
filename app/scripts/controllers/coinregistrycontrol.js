'use strict';

/**
 * @ngdoc function
 * @name xwalletApp.controller:CoinRegistryController
 * @description
 * # CoinRegistryController
 * Controller of the xwalletApp
 */
angular.module('xwalletApp')
  .controller('CoinRegistryController', ['$scope', 'CoinRegistryService', function ($scope, coinRegistry) {
    $scope.registeredCoins = coinRegistry.getRegisteredCoinTypes();
  }]);


