var assert = require('chai').assert;
var StorageService = require('../../.');

describe('services:StorageService', function () {
  it('Should properly export', function () {
    assert.isObject(StorageService);
  });
});