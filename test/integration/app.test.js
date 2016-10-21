import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'
import TrailsApp from 'trails'

describe('trails:app', function() {
  describe('Should create trails based on Hapi/Waterline from trails/archetype', function() {
    let tmpDir
    before(function() {
      return test
        .run(path.join(__dirname, '..', '..', 'src', 'app'))
        .inTmpDir(dir => {
          tmpDir = dir
        })
        .withPrompts({
          'web-engine': 'hapi',
          'orm-engine': 'waterline',
          authorName: 'trailsjs',
          authorEmail: 'hello@trailsjs.io',
          license: 'MIT'
        }) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create root files', function() {
      assert.file([
        '.editorconfig',
        '.gitignore',
        'index.js',
        'server.js',
        'api/index.js',
        'api/models/index.js',
        'api/services/index.js',
        'config/index.js',
        'config/database.js',
        'config/footprints.js',
        'config/main.js',
        'config/log.js',
        'config/policies.js',
        'config/routes.js',
        'config/session.js',
        'config/views.js',
        'config/web.js',
        'config/env/testing.js',
        'config/env/staging.js',
        'config/env/production.js',
        'config/env/development.js',
        'config/env/index.js',
        'test/integration/TrailsApp.test.js',
        'test/setup.js',
        'test/mocha.opts',
        'test/.eslintrc.json',
        'package.json',
        'LICENSE'
      ])
    })
    it('Should properly start', function(done) {
      const trailsApp = new TrailsApp(require(tmpDir))
      const stop = function() {
        return trailsApp.stop().then(_ => {
          done()
        }).catch(done)
      }
      trailsApp.start().then(stop).catch(stop)
    })
  })

  describe('Should create trails based on Express/Waterline from trails/archetype', function() {
    let tmpDir
    before(function() {
      return test
        .run(path.join(__dirname, '..', '..', 'src', 'app'))
        .inTmpDir(dir => {
          tmpDir = dir
        })
        .withPrompts({
          'web-engine': 'express',
          'express-version': '4',
          'orm-engine': 'waterline',
          authorName: 'trailsjs',
          authorEmail: 'hello@trailsjs.io',
          license: 'MIT'
        }) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create root files', function() {
      assert.file([
        '.editorconfig',
        '.gitignore',
        'index.js',
        'server.js',
        'api/index.js',
        'api/models/index.js',
        'api/services/index.js',
        'config/index.js',
        'config/database.js',
        'config/footprints.js',
        'config/main.js',
        'config/log.js',
        'config/policies.js',
        'config/routes.js',
        'config/session.js',
        'config/views.js',
        'config/web.js',
        'config/env/testing.js',
        'config/env/staging.js',
        'config/env/production.js',
        'config/env/development.js',
        'config/env/index.js',
        'test/integration/TrailsApp.test.js',
        'test/setup.js',
        'test/mocha.opts',
        'test/.eslintrc.json',
        'package.json',
        'LICENSE'
      ])
    })
    it('Should properly start', function(done) {
      const trailsApp = new TrailsApp(require(tmpDir))
      const stop = function() {
        return trailsApp.stop().then(_ => {
          done()
        }).catch(done)
      }
      trailsApp.start().then(stop).catch(stop)
    })
  })
})
