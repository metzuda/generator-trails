import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:model', function() {
  describe('Should properly generate model interface', function() {
    before(function() {
      return test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create model files', function() {
      assert.file([
        'api/models/Test.js'
      ])

    })

    it('Should properly create test files', function() {
      assert.file([
        'test/unit/models/Test.test.js'
      ])

    })
  })
})
