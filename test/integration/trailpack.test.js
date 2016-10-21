import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:trailpack', function() {
  describe('Should properly install trailpack and his archetype', function() {
    before(function() {
      return test
        .run(path.join(__dirname, '..', '..', 'src', 'trailpack'))
        .withArguments(['trailpack-hapi'])
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create trailpack files', function() {
      assert.file([
        'api/controllers/DefaultController.js',
        'api/controllers/ViewController.js',
        'api/controllers/index.js'
      ])
    })
  })
})
