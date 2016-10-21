import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:policy', function() {
  describe('Should properly generate policy interface', function() {
    before(function() {
      return test
        .run(path.join(__dirname, '../../src/policy'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create policy files', function() {
      assert.file([
        'api/policies/Test.js'
      ])

    })

    it('Should properly create test files', function() {
      assert.file([
        'test/integration/policies/Test.test.js'
      ])

    })
  })
})
