'use strict';

describe('Service: Coinregistry', function () {

  // load the service's module
  beforeEach(module('xwalletApp'));

  // instantiate service
  var Coinregistry;
  beforeEach(inject(function (_Coinregistry_) {
    Coinregistry = _Coinregistry_;
  }));

  it('should do something', function () {
    expect(!!Coinregistry).toBe(true);
  });

});
