const fs = require('fs');
const path = require('path');
const expect = require('chai');
const request = require('supertest');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

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
          const indexFile = fs.readFileSync(path.join(__dirname, 'index.html'));
          expect(JSON.stringify(indexFile).to.equal(response.text));
        }, done);
    });
  });

  describe('GET request to /bundle.js', function() {
    it('should respond with the bundle.js file', function(done) {
      request(HOST)
        .expect((response) => {
          const bundleFile = fs.readFileSync(path.join(__dirname, 'bundle.js'));
          expect(JSON.stringify(bundleFile).to.equal(response.text));
        }, done);
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