'use strict'
/* global describe, it */

const assert = require('assert')

describe('<%= name %> Model', function() {
  this.timeout(50)
  it('should exist', function() {
    this.timeout(50)
    assert(global.app.api.models['<%= fileName %>'])
  })
})
