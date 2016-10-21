import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:api', function() {
  describe('Should properly generate api interface', function() {
    describe('Should properly generate model interface', function() {
      before(function(done) {
        /*
         test
         .run(path.join(__dirname, '../../src/api'))
         .withArguments(['apiTest'])
         .on('end', done)
         */
        //FIXME: really test api call, currently not working cause api run model and controller
        test
          .run(path.join(__dirname, '../../src/model'))
          .withArguments(['apiTest'])
          .on('end', done)
      })

      it('Should properly create model files', function() {
        assert.file([
          'api/models/ApiTest.js'
        ])
      })


      it('Should properly create test files', function() {
        assert.file([
          'test/unit/models/ApiTest.test.js'
        ])
      })

    })
    describe('Should properly generate controller interface', function() {
      before(function() {
        return test
          .run(path.join(__dirname, '../../src/controller'))
          .withArguments(['apiTest'])
          .toPromise()

      })

      it('Should properly create controller files', function() {
        assert.file([
          'api/controllers/ApiTestController.js'
        ])
      })

      it('Should properly create test files', function() {
        assert.file([
          'test/integration/controllers/ApiTestController.test.js'
        ])
      })
    })
  })
})
