const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const request = require('supertest');

const HOST = 'http://localhost:3000';

require('../server/server.js');

describe('Server routes', function () {
  describe('GET request to /', function() {
    it('should respond with a status of 200', function(done) {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    });

    it('should respond with the index.html file', function(done) {
      request(HOST)
        .get('/')
        .expect((response) => {
          const indexFile = fs.readFileSync(path.join(__dirname, '../', 'index.html'));
          expect(indexFile.toString()).to.equal(response.text);
        })
        .expect(200,done);
    });
  });

  describe('GET request to /bundle.js', function() {
    it('should respond with the bundle.js file', function(done) {
      request(HOST)
        .get('/bundle.js')
        .expect((response) => {
          const bundleFile = fs.readFileSync(path.join(__dirname, '../',  'bundle.js'));
          expect(bundleFile.toString()).to.equal(response.text);
        })
        .expect(200,done);
    });
  });

  describe('GET request to an invalid route', function() {
    it('should respond with a status of 404', function(done) {
      request(HOST)
        .get('/bad')
        .expect(404, done);
    });
  });

  describe('POST request to an invalid route', function() {
    it('should respond with a status of 404', function(done) {
      request(HOST)
        .post('/bad')
        .expect(404, done)
    });
  });
});