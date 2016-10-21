import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:service', function() {
  describe('Should properly generate service interface', function() {
    before(function() {
      return test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create service files', function() {
      assert.file([
        'api/services/TestService.js'
      ])

    })

    it('Should properly create test files', function() {
      assert.file([
        'test/unit/services/TestService.test.js'
      ])

    })
  })
})
