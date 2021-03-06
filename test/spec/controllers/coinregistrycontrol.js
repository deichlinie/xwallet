'use strict';

describe('Controller: CoinregistrycontrolCtrl', function () {

  // load the controller's module
  beforeEach(module('xwalletApp'));

  var CoinregistrycontrolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoinregistrycontrolCtrl = $controller('CoinregistrycontrolCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
