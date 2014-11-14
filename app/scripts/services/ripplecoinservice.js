'use strict';

/**
 * @ngdoc service
 * @name xwalletApp.RippleCoinService
 * @description
 * # RippleCoinService
 * Service in the xwalletApp.
 */
angular.module('xwalletApp')
  .service('RippleCoinService', function () {
	this.getCoinType = function(){
		return 'XRP';
	};	
  })
  .run(function(CoinRegistryService, RippleCoinService){
	CoinRegistryService.registerCoinService(RippleCoinService);
   });
