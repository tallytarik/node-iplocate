const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('request-promise');
const nock = require('nock');
const sinon = require('sinon');

const iplocate = require('../index');

var sandbox;

// Mock request responses
const response_tooManyRequests = {
  error: 'Rate limit exceeded'
};

describe('Main module',function() {
  this.timeout(5000);

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('iplocate',function() {
    it('should fail with an invalid IP address',function(done) {
      iplocate('256.256.256.256')
        .then(() => {
          done(new Error('Expected method to reject.'))
        })
        .catch((err) => {
          expect(err).to.equal('Invalid IP address');
          done();
        });
    });

    it('should add X-API-Key header if api_key provided in options',function(done) {
      // Stub the request.get method so we can check if the header was added
      let requestStub = sandbox.stub(request, "get").resolves(true);

      iplocate('1.2.3.4', { api_key: "abcdef" })
        .then(() => {
          // Ensure that request.get was called and the API key was added
          expect(requestStub.called).to.equal(true);
          expect(requestStub.getCall(0).args[0]).to.deep.equal({
            uri: "https://www.iplocate.io/api/lookup/1.2.3.4",
            json: true,
            headers: { "X-API-Key": 'abcdef' }
          });

          done();
        })
        .catch(done);
    });

    it('should return a valid response for an IPv4 address',function(done) {
      iplocate('8.8.8.8')
        .then((results) => {
          expect(results).to.not.be.null;

          // Let's be careful about what we check here
          // This is an IP for Google's Public DNS, so it's unlikely - but possible -
          // that the data could change.
          expect(results).to.have.property('ip', '8.8.8.8');
          expect(results).to.have.property('country', 'United States');
          expect(results).to.have.property('country_code', 'US');
          expect(results).to.have.property('continent', 'North America');
          done();
        })
        .catch(done);
    });

    it('should return a valid response for an IPv6 address',function(done) {
      iplocate('2001:4860:4860::8888')
        .then((results) => {
          expect(results).to.not.be.null;

          expect(results).to.have.property('ip', '2001:4860:4860:0000:0000:0000:0000:8888');
          expect(results).to.have.property('country', 'United States');
          expect(results).to.have.property('country_code', 'US');
          expect(results).to.have.property('continent', 'North America');
          done();
        })
        .catch(done);
    });

    it('should work with callbacks',function(done) {
      iplocate('8.8.8.8', null, function(error, results) {
        expect(error).to.be.null;
        expect(results).to.not.be.null;

        expect(results).to.have.property('ip', '8.8.8.8');
        expect(results).to.have.property('country', 'United States');
        expect(results).to.have.property('country_code', 'US');
        expect(results).to.have.property('continent', 'North America');
        done();
      });
    });

    it('should return an error if the number of requests have been exceeded',function(done) {
      nock('https://www.iplocate.io')
        .get('/api/lookup/8.8.8.8')
        .reply(429, response_tooManyRequests);

      iplocate('8.8.8.8')
        .then(() => {
          done(new Error('Expected method to reject.'))
        })
        .catch((err) => {
          expect(err).to.equal('Rate limit exceeded');
          done();
        });
    });
  });
});
