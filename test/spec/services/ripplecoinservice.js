'use strict';

describe('Service: Ripplecoinservice', function () {

  // load the service's module
  beforeEach(module('xwalletApp'));

  // instantiate service
  var Ripplecoinservice;
  beforeEach(inject(function (_Ripplecoinservice_) {
    Ripplecoinservice = _Ripplecoinservice_;
  }));

  it('should do something', function () {
    expect(!!Ripplecoinservice).toBe(true);
  });

});
