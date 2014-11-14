'use strict';

/**
 * @ngdoc service
 * @name xwalletApp.Coinregistry
 * @description
 * # Coinregistry
 * Service in the xwalletApp.
 */
angular.module('xwalletApp')
  .service('CoinRegistryService', function () {	

	var _registeredCoins = {};

	this.getRegisteredCoinTypes = function(){
		console.log("XXX");
		console.log(_registeredCoins);
		return Object.keys(_registeredCoins);
	};

	this.registerCoinService = function(coinService){
		_registeredCoins[coinService.getCoinType()] = coinService;
	};

  });
