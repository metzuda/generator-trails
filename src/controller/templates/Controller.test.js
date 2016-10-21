'use strict'
/* global describe, it */

const assert = require('assert')

describe('<%= name %>Controller', function() {
  this.timeout(50)
  it('should exist', function() {
    this.timeout(50)
    assert(global.app.api.controllers['<%= name %>Controller'])
  })
})
