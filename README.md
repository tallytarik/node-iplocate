# IPLocate for Node.js

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]

Look up details about an IP address using the free [IPLocate.io](https://www.iplocate.io) API:

* [IP geolocation data](https://www.iplocate.io/docs#data-base-data) (IP to city, IP to country, IP to region, postal code, latitude, and longitude)
* [ASN details](https://www.iplocate.io/docs#data-asn-data) (ISP or network operator, associated domain name, and type, such as business, hosting, or company)
* [Privacy & threat data](https://www.iplocate.io/docs#data-privacy-data) (VPN detection, proxy detection, iCloud Private Relay detection, spam and abuser detection)
* [Company data](https://www.iplocate.io/docs#data-company-data) (the name and domain of the business that uses the IP address)

See what information we can provide for [your IP address](https://www.iplocate.io/what-is-my-ip).

IPLocate.io provides 1,000 free requests per day with a [free account](https://iplocate.io/signup). For higher plans and access to more data, check out [API pricing](https://www.iplocate.io/pricing).

## Installation

`npm install node-iplocate`

## Usage Example

```javascript
const iplocate = require("node-iplocate");

iplocate("123.243.246.200").then(function(results) {
  console.log("IP Address: " + results.ip);
  console.log("Country: " + results.country + " (" + results.country_code + ")");
  console.log("Continent: " + results.continent);

  console.log(JSON.stringify(results, null, 2));
});

// Without an API key you can make 50 free requests per day.
// With a free API key from IPLocate.io, you can make 1,000 requests per day.
iplocate("123.243.246.200", { api_key: "abcdef" }).then(function(results) {
  // ...
});
```

***

```javascript
IP Address: 123.243.246.200
Country: Australia (AU)
Continent: Australia

{
  "ip": "123.243.246.200",
  "country": "Australia",
  "country_code": "AU",
  "is_eu": false,
  "city": "Sydney",
  "continent": "Oceania",
  "latitude": -33.8672,
  "longitude": 151.1997,
  "time_zone": "Australia/Sydney",
  "postal_code": "2049",
  "subdivision": "New South Wales",
  "subdivision2": null,
  "network": "123.243.240.0/20",
  "asn": {
    "asn": "AS7545",
    "route": "123.243.246.0/24",
    "netname": "TPG-INTERNET-AP",
    "name": "TPG Telecom Limited",
    "country_code": "AU",
    "domain": "tpgtelecom.com.au",
    "type": "isp",
    "rir": "APNIC"
  },
  "privacy": {
    "is_abuser": false,
    "is_anonymous": false,
    "is_bogon": false,
    "is_datacenter": false,
    "is_icloud_relay": false,
    "is_proxy": false,
    "is_tor": false,
    "is_vpn": false
  },
  "company": {
    "name": "TPG Telecom",
    "domain": "www.tpgtelecom.com.au",
    "country_code": "AU",
    "type": "isp"
  },
  "abuse": {
    "address": "TPG Internet Pty Ltd., (Part of the Total Peripherals Group), 65 Waterloo Road, North Ryde NSW 2113",
    "email": "hostmaster@tpgtelecom.com.au",
    "name": "ABUSE TPGCOMAU",
    "network": "123.243.246.192 - 123.243.246.223",
    "phone": "+000000000"
  }
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
