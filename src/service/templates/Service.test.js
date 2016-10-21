'use strict'
/* global describe, it */

const assert = require('assert')

describe('<%= fileName %>', function() {
  this.timeout(50)
  it('should exist', function() {
    this.timeout(50)
    assert(global.app.api.services['<%= fileName %>'])
  })
})
