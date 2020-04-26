# IPLocate for Node.js
Find geolocation data from IP addresses (e.g. city, country, timezone) using the [IPLocate.io](https://www.iplocate.io) API.

IPLocate.io provides 1,000 free requests per day. For higher plans, check out [the website](https://www.iplocate.io)

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Coverage Status](https://coveralls.io/repos/github/tallytarik/node-iplocate/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/tallytarik/node-iplocate?branch=master)

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install node-iplocate`

## Usage Example

```javascript
const iplocate = require("node-iplocate");

iplocate("8.8.8.8").then(function(results) {
  console.log("IP Address: " + results.ip);
  console.log("Country: " + results.country + " (" + results.country_code + ")");
  console.log("Continent: " + results.continent);
  console.log("Organisation: " + results.org + " (" + results.asn + ")");

  console.log(JSON.stringify(results, null, 2));
});

// Or with callbacks
iplocate("8.8.8.8", null, function(err, results) {
  // ...
  console.log(JSON.stringify(results, null, 2));
});

// Provide an API key from IPLocate.io
iplocate("8.8.8.8", { api_key: "abcdef" }).then(function(results) {
  // ...
});
```

***

```javascript
IP Address: 8.8.8.8
Country: United States (US)
Continent: North America
Organisation: Google LLC (AS15169)

{
  "ip": "8.8.8.8",
  "country": "United States",
  "country_code": "US",
  "city": null,
  "continent": "North America",
  "latitude": 37.751,
  "longitude": -97.822,
  "time_zone": null,
  "postal_code": null,
  "org": "Google LLC",
  "asn": "AS15169"
}
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-package-url]: https://npmjs.org/package/node-iplocate

[npm-package-version-badge]: https://img.shields.io/npm/v/node-iplocate.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/node-iplocate.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/node-iplocate.svg?style=flat-square

[devDependencies-status-badge]: https://david-dm.org/tallytarik/node-iplocate/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/tallytarik/node-iplocate#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/node-iplocate.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/en/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/tallytarik/node-iplocate.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/tallytarik/node-iplocate

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/tallytarik/node-iplocate.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/tallytarik/node-iplocate

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/tallytarik/node-iplocate.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/tallytarik/node-iplocate/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/tallytarik/node-iplocate.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/tallytarik/node-iplocate

[npm-package-statistics-badge]: https://nodei.co/npm/node-iplocate.png?downloads=true&downloadRank=true&stars=true
