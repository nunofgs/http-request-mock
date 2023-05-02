(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HttpRequestMock"] = factory();
	else
		root["HttpRequestMock"] = factory();
})(typeof self !== 'undefined' ? self : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rand": () => (/* binding */ rand),
  "randAbbreviation": () => (/* binding */ randAbbreviation),
  "randAccessory": () => (/* binding */ randAccessory),
  "randAccount": () => (/* binding */ randAccount),
  "randAddress": () => (/* binding */ randAddress),
  "randAirline": () => (/* binding */ randAirline),
  "randAirport": () => (/* binding */ randAirport),
  "randAirportCode": () => (/* binding */ randAirportCode),
  "randAirportName": () => (/* binding */ randAirportName),
  "randAlpha": () => (/* binding */ randAlpha),
  "randAlphaNumeric": () => (/* binding */ randAlphaNumeric),
  "randAmericanFootballTeam": () => (/* binding */ randAmericanFootballTeam),
  "randAnimalType": () => (/* binding */ randAnimalType),
  "randArn": () => (/* binding */ randArn),
  "randAvatar": () => (/* binding */ randAvatar),
  "randAwsRegion": () => (/* binding */ randAwsRegion),
  "randAwsRequestId": () => (/* binding */ randAwsRequestId),
  "randAwsService": () => (/* binding */ randAwsService),
  "randBaseballTeam": () => (/* binding */ randBaseballTeam),
  "randBasketballTeam": () => (/* binding */ randBasketballTeam),
  "randBear": () => (/* binding */ randBear),
  "randBetweenDate": () => (/* binding */ randBetweenDate),
  "randBinary": () => (/* binding */ randBinary),
  "randBird": () => (/* binding */ randBird),
  "randBitcoinAddress": () => (/* binding */ randBitcoinAddress),
  "randBook": () => (/* binding */ randBook),
  "randBoolean": () => (/* binding */ randBoolean),
  "randBrand": () => (/* binding */ randBrand),
  "randBrowser": () => (/* binding */ randBrowser),
  "randCardinalDirection": () => (/* binding */ randCardinalDirection),
  "randCat": () => (/* binding */ randCat),
  "randCatchPhrase": () => (/* binding */ randCatchPhrase),
  "randCetacean": () => (/* binding */ randCetacean),
  "randCity": () => (/* binding */ randCity),
  "randClothingSize": () => (/* binding */ randClothingSize),
  "randCodeSnippet": () => (/* binding */ randCodeSnippet),
  "randColor": () => (/* binding */ randColor),
  "randCompanyName": () => (/* binding */ randCompanyName),
  "randCountry": () => (/* binding */ randCountry),
  "randCountryCode": () => (/* binding */ randCountryCode),
  "randCounty": () => (/* binding */ randCounty),
  "randCow": () => (/* binding */ randCow),
  "randCreditCard": () => (/* binding */ randCreditCard),
  "randCreditCardBrand": () => (/* binding */ randCreditCardBrand),
  "randCreditCardCVV": () => (/* binding */ randCreditCardCVV),
  "randCreditCardNumber": () => (/* binding */ randCreditCardNumber),
  "randCrocodilia": () => (/* binding */ randCrocodilia),
  "randCurrencyCode": () => (/* binding */ randCurrencyCode),
  "randCurrencyName": () => (/* binding */ randCurrencyName),
  "randCurrencySymbol": () => (/* binding */ randCurrencySymbol),
  "randDatabaseCollation": () => (/* binding */ randDatabaseCollation),
  "randDatabaseColumn": () => (/* binding */ randDatabaseColumn),
  "randDatabaseEngine": () => (/* binding */ randDatabaseEngine),
  "randDatabaseType": () => (/* binding */ randDatabaseType),
  "randDepartment": () => (/* binding */ randDepartment),
  "randDirection": () => (/* binding */ randDirection),
  "randDirectoryPath": () => (/* binding */ randDirectoryPath),
  "randDog": () => (/* binding */ randDog),
  "randDomainName": () => (/* binding */ randDomainName),
  "randDomainSuffix": () => (/* binding */ randDomainSuffix),
  "randDrinks": () => (/* binding */ randDrinks),
  "randEmail": () => (/* binding */ randEmail),
  "randEmailProvider": () => (/* binding */ randEmailProvider),
  "randEmoji": () => (/* binding */ randEmoji),
  "randEthereumAddress": () => (/* binding */ randEthereumAddress),
  "randFileExt": () => (/* binding */ randFileExt),
  "randFileName": () => (/* binding */ randFileName),
  "randFilePath": () => (/* binding */ randFilePath),
  "randFileType": () => (/* binding */ randFileType),
  "randFirstName": () => (/* binding */ randFirstName),
  "randFish": () => (/* binding */ randFish),
  "randFlightDetails": () => (/* binding */ randFlightDetails),
  "randFlightNumber": () => (/* binding */ randFlightNumber),
  "randFloat": () => (/* binding */ randFloat),
  "randFontFamily": () => (/* binding */ randFontFamily),
  "randFontSize": () => (/* binding */ randFontSize),
  "randFood": () => (/* binding */ randFood),
  "randFootballTeam": () => (/* binding */ randFootballTeam),
  "randFrequency": () => (/* binding */ randFrequency),
  "randFullAddress": () => (/* binding */ randFullAddress),
  "randFullName": () => (/* binding */ randFullName),
  "randFutureDate": () => (/* binding */ randFutureDate),
  "randGender": () => (/* binding */ randGender),
  "randGitBranch": () => (/* binding */ randGitBranch),
  "randGitCommitEntry": () => (/* binding */ randGitCommitEntry),
  "randGitCommitMessage": () => (/* binding */ randGitCommitMessage),
  "randGitCommitSha": () => (/* binding */ randGitCommitSha),
  "randGitShortSha": () => (/* binding */ randGitShortSha),
  "randHex": () => (/* binding */ randHex),
  "randHexaDecimal": () => (/* binding */ randHexaDecimal),
  "randHorse": () => (/* binding */ randHorse),
  "randHsl": () => (/* binding */ randHsl),
  "randHttpMethod": () => (/* binding */ randHttpMethod),
  "randIban": () => (/* binding */ randIban),
  "randIceHockeyTeam": () => (/* binding */ randIceHockeyTeam),
  "randImg": () => (/* binding */ randImg),
  "randIntegration": () => (/* binding */ randIntegration),
  "randIp": () => (/* binding */ randIp),
  "randIpv6": () => (/* binding */ randIpv6),
  "randJSON": () => (/* binding */ randJSON),
  "randJobArea": () => (/* binding */ randJobArea),
  "randJobDescriptor": () => (/* binding */ randJobDescriptor),
  "randJobTitle": () => (/* binding */ randJobTitle),
  "randJobType": () => (/* binding */ randJobType),
  "randLanguage": () => (/* binding */ randLanguage),
  "randLastName": () => (/* binding */ randLastName),
  "randLatitude": () => (/* binding */ randLatitude),
  "randLine": () => (/* binding */ randLine),
  "randLines": () => (/* binding */ randLines),
  "randLion": () => (/* binding */ randLion),
  "randLocale": () => (/* binding */ randLocale),
  "randLongitude": () => (/* binding */ randLongitude),
  "randMac": () => (/* binding */ randMac),
  "randMask": () => (/* binding */ randMask),
  "randMimeType": () => (/* binding */ randMimeType),
  "randMonth": () => (/* binding */ randMonth),
  "randMovie": () => (/* binding */ randMovie),
  "randMovieCharacter": () => (/* binding */ randMovieCharacter),
  "randMusicGenre": () => (/* binding */ randMusicGenre),
  "randNearbyGPSCoordinate": () => (/* binding */ randNearbyGPSCoordinate),
  "randNumber": () => (/* binding */ randNumber),
  "randOAuthProvider": () => (/* binding */ randOAuthProvider),
  "randOctal": () => (/* binding */ randOctal),
  "randOrdinalDirection": () => (/* binding */ randOrdinalDirection),
  "randParagraph": () => (/* binding */ randParagraph),
  "randPassword": () => (/* binding */ randPassword),
  "randPastDate": () => (/* binding */ randPastDate),
  "randPermission": () => (/* binding */ randPermission),
  "randPersonTitle": () => (/* binding */ randPersonTitle),
  "randPhoneNumber": () => (/* binding */ randPhoneNumber),
  "randPhrase": () => (/* binding */ randPhrase),
  "randPort": () => (/* binding */ randPort),
  "randPost": () => (/* binding */ randPost),
  "randPriority": () => (/* binding */ randPriority),
  "randProduct": () => (/* binding */ randProduct),
  "randProductAdjective": () => (/* binding */ randProductAdjective),
  "randProductCategory": () => (/* binding */ randProductCategory),
  "randProductDescription": () => (/* binding */ randProductDescription),
  "randProductMaterial": () => (/* binding */ randProductMaterial),
  "randProductName": () => (/* binding */ randProductName),
  "randProgrammingLanguage": () => (/* binding */ randProgrammingLanguage),
  "randPronoun": () => (/* binding */ randPronoun),
  "randProtocol": () => (/* binding */ randProtocol),
  "randQuote": () => (/* binding */ randQuote),
  "randRabbit": () => (/* binding */ randRabbit),
  "randRecentDate": () => (/* binding */ randRecentDate),
  "randRgb": () => (/* binding */ randRgb),
  "randRole": () => (/* binding */ randRole),
  "randRoutingNumber": () => (/* binding */ randRoutingNumber),
  "randSeatNumber": () => (/* binding */ randSeatNumber),
  "randSemver": () => (/* binding */ randSemver),
  "randSentence": () => (/* binding */ randSentence),
  "randSequence": () => (/* binding */ randSequence),
  "randShape": () => (/* binding */ randShape),
  "randSinger": () => (/* binding */ randSinger),
  "randSkill": () => (/* binding */ randSkill),
  "randSlug": () => (/* binding */ randSlug),
  "randSnake": () => (/* binding */ randSnake),
  "randSocial": () => (/* binding */ randSocial),
  "randSong": () => (/* binding */ randSong),
  "randSoonDate": () => (/* binding */ randSoonDate),
  "randSports": () => (/* binding */ randSports),
  "randSportsTeam": () => (/* binding */ randSportsTeam),
  "randState": () => (/* binding */ randState),
  "randStateAbbr": () => (/* binding */ randStateAbbr),
  "randStatus": () => (/* binding */ randStatus),
  "randStreetAddress": () => (/* binding */ randStreetAddress),
  "randStreetName": () => (/* binding */ randStreetName),
  "randSubscriptionPlan": () => (/* binding */ randSubscriptionPlan),
  "randSuperhero": () => (/* binding */ randSuperhero),
  "randSuperheroName": () => (/* binding */ randSuperheroName),
  "randSvg": () => (/* binding */ randSvg),
  "randText": () => (/* binding */ randText),
  "randTextRange": () => (/* binding */ randTextRange),
  "randTimeZone": () => (/* binding */ randTimeZone),
  "randTodo": () => (/* binding */ randTodo),
  "randTransactionType": () => (/* binding */ randTransactionType),
  "randUrl": () => (/* binding */ randUrl),
  "randUser": () => (/* binding */ randUser),
  "randUserAgent": () => (/* binding */ randUserAgent),
  "randUserName": () => (/* binding */ randUserName),
  "randUuid": () => (/* binding */ randUuid),
  "randVehicle": () => (/* binding */ randVehicle),
  "randVehicleFuel": () => (/* binding */ randVehicleFuel),
  "randVehicleManufacturer": () => (/* binding */ randVehicleManufacturer),
  "randVehicleModel": () => (/* binding */ randVehicleModel),
  "randVehicleType": () => (/* binding */ randVehicleType),
  "randVerb": () => (/* binding */ randVerb),
  "randWeekday": () => (/* binding */ randWeekday),
  "randWord": () => (/* binding */ randWord),
  "randZipCode": () => (/* binding */ randZipCode),
  "random": () => (/* binding */ random),
  "seed": () => (/* binding */ seed)
});

// EXTERNAL MODULE: ./node_modules/seedrandom/index.js
var seedrandom = __webpack_require__(377);
var seedrandom_default = /*#__PURE__*/__webpack_require__.n(seedrandom);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./node_modules/@ngneat/falso/index.esm.js



let prng = seedrandom_default()();
/**
 * Create a seed.
 *
 * @category general
 *
 * @example
 *
 * random()
 *
 */

function random() {
  return prng();
}
/**
 * Sets and Resets random seed.
 *
 * @category general
 *
 * @example
 *
 * seed()
 *
 * @example
 *
 * seed('some-constant-seed')
 */

function seed(value) {
  prng = seedrandom_default()(value);
}

function fake(data, options) {
  const dataSource = Array.isArray(data) ? () => randElement(data) : data;

  if (!(options != null && options.length)) {
    return dataSource(0);
  }

  return Array.from({
    length: options.length
  }, (_, index) => dataSource(index));
}
function randElement(arr) {
  return arr[Math.floor(random() * arr.length)];
}
function getRandomInRange({
  min = 1.0,
  max = 9999.99,
  fraction = 0
} = {}) {
  return Number((random() * (max - min) + min).toFixed(fraction));
}

var data$1X = [
	"SCSI",
	"SMTP",
	"ADP",
	"TCP",
	"PNG",
	"EXE",
	"AI",
	"RAM",
	"RSS",
	"GB",
	"SSL",
	"CSS",
	"SAS",
	"SDD",
	"PCI",
	"IB",
	"SQL",
	"XML",
	"THX",
	"AGP",
	"HTTP",
	"SMS",
	"FTP",
	"JBOD",
	"XSS",
	"HDD",
	"JSON",
	"COM"
];

/**
 * Generate a random abbreviation.
 *
 * @category text
 *
 * @example
 *
 * randAbbreviation()
 *
 * @example
 *
 * randAbbreviation({ length: 10 })
 *
 */

function randAbbreviation(options) {
  return fake(data$1X, options);
}

var data$1W = [
	"Sunglasses",
	"Apron",
	"Necklace",
	"Watch",
	"Socks",
	"Tie",
	"Bow tie",
	"Purse",
	"Ring",
	"Gloves",
	"Scarf",
	"Umbrella",
	"Boots",
	"Mittens",
	"Stockings",
	"Earmuffs",
	"Hair clip",
	"Bobby pin",
	"Hair band",
	"Safety pin",
	"Pocket watch",
	"Beanie",
	"Cap",
	"Beret",
	"Straw hat",
	"Derby hat",
	"Helmet",
	"Top hat",
	"Mortar board"
];

/**
 * Generate a random accessory.
 *
 * @category Commerce
 *
 * @example
 *
 * randAccessory()
 *
 * @example
 *
 * randAccessory({ length: 10 })
 *
 */

function randAccessory(options) {
  return fake(data$1W, options);
}

/**
 * Generate a random account.
 *
 * @category finance
 *
 * @example
 *
 * randAccount()
 *
 * @example
 *
 * randAccount({ accountLength: 12 }) // default is 9
 *
 * @example
 *
 * randAccount({ length: 10 })
 *
 */

function randAccount(options) {
  var _options$accountLengt;

  const accountLength = (_options$accountLengt = options == null ? void 0 : options.accountLength) != null ? _options$accountLengt : 9;

  const factory = () => {
    return Array(accountLength).fill('#').join('').replace(/#/g, () => {
      return getRandomInRange({
        min: 0,
        max: 9
      }).toString();
    });
  };

  return fake(factory, options);
}

const numericChars = '0123456789';
const alphaChars = 'abcdefghijklmnopqrstuvwxyz'; // TODO
const numericAlphaChars = `${numericChars}${alphaChars}${alphaChars.split('').map(v => v.toUpperCase()).join('')}`;

function generator$1(size = 8, chars = numericAlphaChars) {
  let result = '';

  for (let i = size; i > 0; --i) result += chars[Math.floor(random() * chars.length)];

  return result;
}
/**
 * Generate a random sequence.
 *
 * @category general
 *
 * @example
 *
 * randSequence()
 *
 * @example
 *
 * randSequence({ size: 10 })
 *
 * @example
 *
 * randSequence({ chars: 'aAbBcC@#' })
 *
 * @example
 *
 * randSequence({ length: 10 })
 *
 */


function randSequence(options) {
  return fake(() => generator$1(options == null ? void 0 : options.size, options == null ? void 0 : options.chars), options);
}

/**
 * Get a random alpha.
 *
 * @category text
 *
 * @example
 *
 * randAlpha()
 *
 * @example
 *
 * randAlpha({ length: 3 })
 *
 */

function randAlpha(options) {
  return fake(alphaChars.split(''), options);
}

/**
 * Generate a random boolean.
 *
 * @category general
 *
 * @example
 *
 * randBoolean()
 *
 * @example
 *
 * randBoolean({ length: 10 })
 *
 */

function randBoolean(options) {
  return fake(() => randElement([true, false]), options);
}

/**
 * Generate a random number.
 *
 * @category general, math
 *
 * @example
 *
 * randNumber()
 *
 * @example
 *
 * randNumber({ length: 10 })
 *
 * @example
 *
 * randNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999
 *
 * @example
 *
 * randNumber({ min: 1000, max: 100000, precision: 1000 }) // 67000
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 100 }) // 1200
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 10 }) // 1250
 */

function randNumber(options) {
  const o = {
    min: (options == null ? void 0 : options.min) || 0,
    max: (options == null ? void 0 : options.max) || 999999,
    precision: options == null ? void 0 : options.precision
  };
  return fake(() => {
    const num = getRandomInRange(o);

    if (o.precision !== undefined) {
      return Math.floor(num / o.precision) * o.precision;
    }

    return num;
  }, options);
}

/**
 * Get a random alpha or numeric.
 *
 * @category text
 *
 * @example
 *
 * randAlphaNumeric()
 *
 * @example
 *
 * randAlphaNumeric({ length: 3 })
 *
 */

function randAlphaNumeric(options) {
  return fake(() => randBoolean() ? randAlpha() : randNumber({
    min: 0,
    max: 9
  }), options);
}

var data$1V = [
	"Arizona Cardinals",
	"Atlanta Falcons",
	"Baltimore Ravens",
	"Buffalo Bills",
	"Carolina Panthers",
	"Chicago Bears",
	"Cincinnati Bengals",
	"Cleveland Browns",
	"Dallas Cowboys",
	"Denver Broncos",
	"Detroit Lions",
	"Green Bay Packers",
	"Houston Texans",
	"Indianapolis Colts",
	"Jacksonville Jaguars",
	"Kansas City Chiefs",
	"Las Vegas Raiders",
	"Los Angeles Chargers",
	"Los Angeles Rams",
	"Miami Dolphins",
	"Minnesota Vikings",
	"New England Patriots",
	"New Orleans Saints",
	"New York Giants",
	"New York Jets",
	"Philadelphia Eagles",
	"Pittsburgh Steelers",
	"San Francisco 49ers",
	"Seattle Seahawks",
	"Tampa Bay Buccaneers",
	"Tennessee Titans"
];

/**
 * Generate a random american football team.
 *
 * @category sports
 *
 * @example
 *
 * randAmericanFootballTeam()
 *
 * @example
 *
 * randAmericanFootballTeam({ length: 10 })
 *
 */

function randAmericanFootballTeam(options) {
  return fake(data$1V, options);
}

var data$1U = [
	"bird",
	"cetacean",
	"rabbit",
	"bear",
	"cat",
	"snake",
	"cow",
	"insect",
	"crocodile",
	"horse",
	"fish",
	"dog",
	"lion"
];

/**
 * Generate a random animal type.
 *
 * @category animals
 *
 * @example
 *
 * randAnimalType()
 *
 * @example
 *
 * randAnimalType({ length: 10 })
 *
 */

function randAnimalType(options) {
  return fake(data$1U, options);
}

var data$1T = [
	"us-east-2",
	"us-east-1",
	"us-west-1",
	"us-west-2",
	"af-south-1",
	"ap-east-1",
	"ap-southeast-3",
	"ap-south-1",
	"ap-northeast-3",
	"ap-northeast-2",
	"ap-southeast-1",
	"ap-southeast-2",
	"ap-northeast-1",
	"ca-central-1",
	"eu-central-1",
	"eu-west-1",
	"eu-west-2",
	"eu-south-1",
	"eu-west-3",
	"eu-north-1",
	"me-south-1",
	"sa-east-1",
	"us-gov-east-1",
	"us-gov-west-1"
];

/**
 * Generate a random AWS region.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsRegion()
 *
 * @example
 *
 * randAwsRegion({ length: 10 })
 *
 */

function randAwsRegion(options) {
  return fake(data$1T, options);
}

var data$1S = [
	"/usr/X11R6",
	"/sys",
	"/mnt",
	"/Network",
	"/usr/libdata",
	"/Library",
	"/sbin",
	"/tmp",
	"/usr/local/src",
	"/boot/defaults",
	"/etc/mail",
	"/bin",
	"/boot",
	"/var/tmp",
	"/etc/namedb",
	"/private/var",
	"/var/mail",
	"/opt",
	"/opt/lib",
	"/proc",
	"/usr/include",
	"/usr/src",
	"/home/user",
	"/selinux",
	"/usr/libexec",
	"/dev",
	"/etc/defaults",
	"/usr",
	"/usr/share",
	"/rescue",
	"/private",
	"/usr/sbin",
	"/home/user/dir",
	"/Users",
	"/var",
	"/lost+found",
	"/usr/bin",
	"/etc/ppp",
	"/var/spool",
	"/var/yp",
	"/usr/ports",
	"/private/tmp",
	"/usr/obj",
	"/home",
	"/media"
];

/**
 * Generate a random directory path.
 *
 * @category system
 *
 * @example
 *
 * randDirectoryPath()
 *
 * @example
 *
 * randDirectoryPath({ length: 10 })
 *
 */

function randDirectoryPath(options) {
  return fake(data$1S, options);
}

var data$1R = [
	"markets",
	"solid_backing_strategist",
	"granite",
	"synthesizing_executive_specialist",
	"ecuador",
	"calculate_island",
	"nevada",
	"gloves_manat_delaware",
	"loan_saint",
	"client_server",
	"kroon",
	"investor",
	"dynamic_portal",
	"pixel",
	"concrete",
	"nuevo_avon_market",
	"productize_withdrawal_override",
	"operative_sum_bypassing",
	"visionary_online_account",
	"balboa",
	"sql_connecting",
	"incredible_azure_interface",
	"open_source_netherlands_copying",
	"hack_hard_thailand",
	"berkshire_car_micronesia",
	"pound_program_handmade",
	"implement_nevada",
	"home",
	"agp",
	"berkshire_investment_tasty",
	"licensed_pink_fundamental",
	"concrete_encompassing",
	"holistic",
	"application_saint_infrastructureg",
	"visionary",
	"towels_visionary_ergonomic",
	"scalable_jewelery_sudan",
	"revolutionary",
	"global_fresh_open_source",
	"png_capacitor_quantify",
	"automotive",
	"action_items",
	"soap_unbranded",
	"music_payment_payment",
	"chips_taiwan",
	"payment",
	"intelligent_connecting_account",
	"capacitor_bypass",
	"tools_vatu",
	"interface",
	"e_markets",
	"transmit_borders_input",
	"invoice",
	"ball_orange",
	"morph_magnetic",
	"team_oriented_ivory",
	"concrete_compress",
	"market_hack",
	"wireless_frictionless_chicken",
	"png",
	"turquoise_territories_berkshire",
	"back_end",
	"withdrawal_paradigm_matrix",
	"payment_context_sensitive_wisconsin",
	"unbranded_json_wooden",
	"invoice_sleek_customized",
	"silver_copying",
	"licensed",
	"plug_and_play",
	"cultivate_orchestrator",
	"quantifying_quantify_norway",
	"account_borders_gourde",
	"quantifyg",
	"open_architected_content_based_protocol",
	"administrator",
	"synthesizing",
	"metrics",
	"white_wireless_garden",
	"berkshireg",
	"nepal_view_protocol",
	"calculating_shirt",
	"fuchsia_reintermediate_fish",
	"extend",
	"matrix",
	"peso",
	"superstructure_value_added_redundant",
	"national_world_classv",
	"yellowv",
	"moratorium",
	"views",
	"metal_drive_sports",
	"ports_pink_overriding",
	"borders",
	"supply_chains_client_driven_dynamic",
	"shirt_moratorium_place",
	"calculate",
	"protocol_engineer_azerbaijan",
	"chair_rss",
	"b2b_belarussian",
	"fiji"
];

/**
 * Generate a random file name.
 *
 * @category system
 *
 * @example
 *
 * randFileName()
 *
 * @example
 *
 * randFileName({ length: 10 })
 *
 */

function randFileName(options) {
  var _options$extension;

  const ext = (_options$extension = options == null ? void 0 : options.extension) != null ? _options$extension : 'pdf';
  return fake(() => `${randElement(data$1R)}.${ext}`, options);
}

const partitions = ['aws', 'aws-cn', 'aws-us-gov'];
const services = ['s3', 'sqs', 'lambda', 'iam'];
const serviceArn = {
  s3: () => `::${randDirectoryPath()}/*`,
  iam: () => `:${randAccount()}:${fake(['user', 'group'])}/*`,
  sqs: () => `${randAwsRegion()}:${randAccount()}:queue${randNumber({
    min: 1,
    max: 10
  })}`,
  lambda: () => `${randAwsRegion()}:${randAccount()}:function:${randFileName().replace(/_/g, '-')}`
};
/**
 * Generate a random ARN.
 *
 * @category AWS
 *
 * @example
 *
 * randArn()
 *
 * @example
 *
 * randArn({ length: 10 })
 *
 */

function randArn(options) {
  return fake(() => {
    const partition = fake(partitions);
    const service = fake(services);
    return `arn:${partition}:${service}:${serviceArn[service]()}`;
  }, options);
}

/**
 * Generate a random avatar.
 *
 * @category person
 *
 * @example
 *
 * randAvatar()
 *
 * @example
 *
 * randAvatar({ length: 10 })
 *
 * @example
 *
 * randAvatar({ size: 200 }) // default is 100
 *
 */

function randAvatar(options) {
  var _options$size;

  const size = (_options$size = options == null ? void 0 : options.size) != null ? _options$size : 100;
  return fake(() => `https://i.pravatar.cc/${size}`, options);
}

var data$1Q = [
	"EC2",
	"RDS",
	"S3",
	"Lambda",
	"CloudFront",
	"Glacier",
	"SNS",
	"SQS",
	"EBS",
	"VPC",
	"Kinesis",
	"Kinesis Data Firehose",
	"Dynamo DB",
	"ElastiCache",
	"CloudWatch",
	"Cognito",
	"Cognito",
	"API Gateway",
	"AppSync",
	"Athena"
];

/**
 * Generate a random AWS service name.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsService()
 *
 * @example
 *
 * randAwsService({ length: 10 })
 *
 */

function randAwsService(options) {
  return fake(data$1Q, options);
}

/**
 * Generate a random AWS request id.
 *
 * @category AWS
 *
 * @example
 *
 * randAwsRequestId()
 *
 * @example
 *
 * randAwsRequestId({ length: 10 })
 *
 */

function randAwsRequestId(options) {
  const generator = () => {
    return [randAlphaNumeric({
      length: 8
    }), randAlphaNumeric({
      length: 4
    }), randAlphaNumeric({
      length: 4
    }), randAlphaNumeric({
      length: 4
    }), randAlphaNumeric({
      length: 12
    })].map(v => v.join('')).join('-');
  };

  return fake(generator, options);
}

var data$1P = [
	"Arizona Diamondbacks",
	"Atlanta Braves",
	"Baltimore Orioles",
	"Boston Red Sox",
	"Chicago Cubs",
	"Chicago White Sox",
	"Cincinnati Reds",
	"Cleveland Guardians",
	"Colorado Rockies",
	"Detroit Tigers",
	"Houston Astros",
	"Kansas City Royals",
	"Los Angeles Angels",
	"Los Angeles Dodgers",
	"Miami Marlins",
	"Milwaukee Brewers",
	"Minnesota Twins",
	"New York Mets",
	"New York Yankees",
	"Oakland Athletics",
	"Philadelphia Phillies",
	"Pittsburgh Pirates",
	"San Diego Padres",
	"San Francisco Giants",
	"Seattle Mariners",
	"St. Louis Cardinals",
	"Tampa Bay Rays",
	"Texas Rangers",
	"Toronto Blue Jays",
	"Washington Nationals"
];

/**
 * Generate a random baseball team.
 *
 * @category sports
 *
 * @example
 *
 * randBaseballTeam()
 *
 * @example
 *
 * randBaseballTeam({ length: 10 })
 *
 */

function randBaseballTeam(options) {
  return fake(data$1P, options);
}

var data$1O = [
	"Atlanta Hawks",
	"Boston Celtics",
	"Brooklyn Nets",
	"Charlotte Hornets",
	"Chicago Bulls",
	"Cleveland Cavaliers",
	"Dallas Mavericks",
	"Denver Nuggets",
	"Detroit Pistons",
	"Golden State Warriors",
	"Houston Rockets",
	"Indiana Pacers",
	"LA Clippers",
	"Los Angeles Lakers",
	"Memphis Grizzlies",
	"Miami Heat",
	"Milwaukee Bucks",
	"Minnesota Timberwolves",
	"New Orleans Pelicans",
	"New York Knicks",
	"Oklahoma City Thunder",
	"Orlando Magic",
	"Philadelphia 76ers",
	"Phoenix Suns",
	"Portland Trail Blazers",
	"Sacramento Kings",
	"San Antonio Spurs",
	"Toronto Raptors",
	"Utah Jazz",
	"Washington Wizards"
];

/**
 * Generate a random basketball team.
 *
 * @category sports
 *
 * @example
 *
 * randBasketballTeam()
 *
 * @example
 *
 * randBasketballTeam({ length: 10 })
 *
 */

function randBasketballTeam(options) {
  return fake(data$1O, options);
}

var data$1N = [
	"Spectacled bear",
	"Brown bear",
	"Asian black bear",
	"Sun bear",
	"Polar bear",
	"Giant panda",
	"Sloth bear",
	"American black bear"
];

/**
 * Generate a random bear.
 *
 * @category animals
 *
 * @example
 *
 * randBear()
 *
 * @example
 *
 * randBear({ length: 10 })
 *
 */

function randBear(options) {
  return fake(data$1N, options);
}

/**
 * Generate a random date between ranges.
 *
 * @category date
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/2020'), to: new Date() })
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/2020'), to: new Date(), length: 10 })
 *
 */

function randBetweenDate(options) {
  const from = options.from.getTime();
  const to = options.to.getTime();

  if (from >= to) {
    throw new Error('From must be before to');
  }

  const generator = () => {
    return new Date(randNumber({
      min: from,
      max: to
    }));
  };

  return fake(generator, options);
}

/**
 * Generate a random binary.
 *
 * @category Math
 *
 * @example
 *
 * randBinary()
 *
 * @example
 *
 * randBinary({ length: 10 })
 *
 */

function randBinary(options) {
  return fake(() => {
    const RADIX = 2;
    const randomNumber = getRandomInRange({
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
      fraction: 0
    });
    return BigInt(randomNumber.toString(RADIX)).toString();
  }, options);
}

var data$1M = [
	"Red-necked Phalarope",
	"Cliff Swallow",
	"Loggerhead Kingbird",
	"Aztec Thrush",
	"Hooded Warbler",
	"Common Pochard",
	"Scotts Oriole",
	"Black-browed Albatross",
	"Monk Parakeet",
	"Magnificent Hummingbird",
	"Broad-billed Sandpiper",
	"Bushtit",
	"Mexican Jay",
	"Hooded Merganser",
	"Wood Stork",
	"Rosss Gull",
	"Green Sandpiper",
	"Whooping Crane"
];

/**
 * Generate a random bird.
 *
 * @category animals
 *
 * @example
 *
 * randBird()
 *
 * @example
 *
 * randBird({ length: 10 })
 *
 */

function randBird(options) {
  return fake(data$1M, options);
}

/**
 * Generate a random bitcoin-address.
 *
 * @category finance
 *
 * @example
 *
 * randBitcoinAddress()
 *
 * @example
 *
 * randBitcoinAddress({ length: 10 })
 *
 */

function randBitcoinAddress(options) {
  return fake(() => randSequence({
    size: 33
  }), options);
}

var data$1L = [
	{
		title: "The Adventures of Augie March",
		author: "Saul Bellow",
		category: "Comedy"
	},
	{
		title: "The Uncommon Reader",
		author: "Alan Bennett",
		category: "Comedy"
	},
	{
		title: "Don Quixote",
		author: "Miguel de Cervantes",
		category: "Comedy"
	},
	{
		title: "Tom Jones",
		author: "Henry Fielding",
		category: "Comedy"
	},
	{
		title: "Dead Souls",
		author: "Nikolai Gogol",
		category: "Comedy"
	},
	{
		title: "The Wind in the Willows",
		author: "Kenneth Grahame",
		category: "Comedy"
	},
	{
		title: "Our Man in Havana",
		author: "Graham Greene",
		category: "Comedy"
	},
	{
		title: "Catch-22",
		author: "Joseph Heller",
		category: "Comedy"
	},
	{
		title: "High Fidelity",
		author: "Nick Hornby",
		category: "Comedy"
	},
	{
		title: "Three Men in a Boat",
		author: "Jerome K Jerome",
		category: "Comedy"
	},
	{
		title: "Finnegans Wake",
		author: "James Joyce",
		category: "Comedy"
	},
	{
		title: "Puckoon",
		author: "Spike Milligan",
		category: "Comedy"
	},
	{
		title: "Portnoy’s Complaint",
		author: "Philip Roth",
		category: "Comedy"
	},
	{
		title: "Great Apes",
		author: "Will Self",
		category: "Comedy"
	},
	{
		title: "The Life and Opinions of Tristram Shandy, Gentleman",
		author: "Laurence Sterne",
		category: "Comedy"
	},
	{
		title: "A Confederacy of Dunces",
		author: "John Kennedy Toole",
		category: "Comedy"
	},
	{
		title: "Breakfast of Champions",
		author: "Kurt Vonnegut",
		category: "Comedy"
	},
	{
		title: "Infinite Jest",
		author: "David Foster Wallace",
		category: "Comedy"
	},
	{
		title: "Molesworth",
		author: "Geoffrey Willans and Ronald Searle",
		category: "Comedy"
	},
	{
		title: "Thank You Jeeves",
		author: "PG Wodehouse",
		category: "Comedy"
	},
	{
		title: "The Thirty-Nine Steps",
		author: "John Buchan",
		category: "Crime"
	},
	{
		title: "The Big Sleep",
		author: "Raymond Chandler",
		category: "Crime"
	},
	{
		title: "And Then There Were None",
		author: "Agatha Christie",
		category: "Crime"
	},
	{
		title: "The Hound of the Baskervilles",
		author: "Arthur Conan Doyle",
		category: "Crime"
	},
	{
		title: "The Manchurian Candidate",
		author: "Richard Condon",
		category: "Crime"
	},
	{
		title: "The Andromeda Strain",
		author: "Michael Crichton",
		category: "Crime"
	},
	{
		title: "The Ipcress File",
		author: "Len Deighton",
		category: "Crime"
	},
	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		category: "Crime"
	},
	{
		title: "The Count of Monte Cristo",
		author: "Alexandre Dumas",
		category: "Crime"
	},
	{
		title: "The Day of the Jackal",
		author: "Frederick Forsyth",
		category: "Crime"
	},
	{
		title: "The Third Man",
		author: "Graham Greene",
		category: "Crime"
	},
	{
		title: "A Time to Kill",
		author: "John Grisham",
		category: "Crime"
	},
	{
		title: "The Thin Man",
		author: "Dashiell Hammett",
		category: "Crime"
	},
	{
		title: "The Talented Mr Ripley",
		author: "Patricia Highsmith",
		category: "Crime"
	},
	{
		title: "Tinker, Tailor, Soldier, Spy",
		author: "John le Carre",
		category: "Crime"
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		category: "Crime"
	},
	{
		title: "No Country for Old Men",
		author: "Cormac McCarthy",
		category: "Crime"
	},
	{
		title: "The Godfather",
		author: "Mario Puzo",
		category: "Crime"
	},
	{
		title: "The Crying of Lot 49",
		author: "Thomas Pynchon",
		category: "Crime"
	},
	{
		title: "Judgment in Stone",
		author: "Ruth Rendell",
		category: "Crime"
	},
	{
		title: "Little Women",
		author: "Louisa May Alcott",
		category: "Family and Self"
	},
	{
		title: "Le Pere Goriot",
		author: "Honore de Balzac",
		category: "Family and Self"
	},
	{
		title: "The Outsider",
		author: "Albert Camus",
		category: "Family and Self"
	},
	{
		title: "Great Expectations",
		author: "Charles Dickens",
		category: "Family and Self"
	},
	{
		title: "The Sound and the Fury",
		author: "William Faulkner",
		category: "Family and Self"
	},
	{
		title: "Howards End",
		author: "EM Forster",
		category: "Family and Self"
	},
	{
		title: "The Power and the Glory",
		author: "Graham Greene",
		category: "Family and Self"
	},
	{
		title: "Steppenwolf",
		author: "Herman Hesse",
		category: "Family and Self"
	},
	{
		title: "A Prayer for Owen Meany",
		author: "John Irving",
		category: "Family and Self"
	},
	{
		title: "Ulysses",
		author: "James Joyce",
		category: "Family and Self"
	},
	{
		title: "One Flew Over the Cuckoo’s Nest",
		author: "Ken Kesey",
		category: "Family and Self"
	},
	{
		title: "How Green was My Valley",
		author: "Richard Llewellyn",
		category: "Family and Self"
	},
	{
		title: "The Bluest Eye",
		author: "Toni Morrison",
		category: "Family and Self"
	},
	{
		title: "Who Do You Think You Are?",
		author: "Alice Munro",
		category: "Family and Self"
	},
	{
		title: "The Bell Jar",
		author: "Sylvia Plath",
		category: "Family and Self"
	},
	{
		title: "Remembrance of Things Past",
		author: "Marcel Proust",
		category: "Family and Self"
	},
	{
		title: "The Catcher in the Rye",
		author: "JD Salinger",
		category: "Family and Self"
	},
	{
		title: "The Color Purple",
		author: "Alice Walker",
		category: "Family and Self"
	},
	{
		title: "Jimmy Corrigan, The Smarest Kid on Earth",
		author: "Chris Ware",
		category: "Family and Self"
	},
	{
		title: "The Picture of Dorian Gray",
		author: "Oscar Wilde",
		category: "Family and Self"
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		category: "Love"
	},
	{
		title: "Jane Eyre",
		author: "Charlotte Bronte",
		category: "Love"
	},
	{
		title: "Wuthering Heights",
		author: "Emily Bronte",
		category: "Love"
	},
	{
		title: "Breakfast at Tiffany’s",
		author: "Truman Capote",
		category: "Love"
	},
	{
		title: "Rebecca",
		author: "Daphne du Maurier",
		category: "Love"
	},
	{
		title: "Daniel Deronda",
		author: "George Eliot",
		category: "Love"
	},
	{
		title: "The Great Gatsby",
		author: "F Scott Fitzgerald",
		category: "Love"
	},
	{
		title: "Madame Bovary",
		author: "Gustave Flaubert",
		category: "Love"
	},
	{
		title: "A Room with a View",
		author: "EM Forster",
		category: "Love"
	},
	{
		title: "The Sorrows of Young Werther",
		author: "Johann Wolfgang Goethe",
		category: "Love"
	},
	{
		title: "Far From the Madding Crowd",
		author: "Thomas Hardy",
		category: "Love"
	},
	{
		title: "The Scarlet Letter",
		author: "Nathaniel Hawthorne",
		category: "Love"
	},
	{
		title: "The Remains of the Day",
		author: "Kazuo Ishiguro",
		category: "Love"
	},
	{
		title: "Les Liaisons Dangereuses",
		author: "Pierre-Ambroise-Francois Choderlos de Laclos",
		category: "Love"
	},
	{
		title: "Of Human Bondage",
		author: "Somerset Maugham",
		category: "Love"
	},
	{
		title: "Atonement",
		author: "Ian McEwan",
		category: "Love"
	},
	{
		title: "Gone With the Wind",
		author: "Margaret Mitchell",
		category: "Love"
	},
	{
		title: "Norwegian Wood",
		author: "Haruki Murakami",
		category: "Love"
	},
	{
		title: "Doctor Zhivago",
		author: "Boris Pasternak",
		category: "Love"
	},
	{
		title: "Wide Sargasso Sea",
		author: "Jean Rhys",
		category: "Love"
	},
	{
		title: "The Hitchhikers Guide to the Galaxy",
		author: "Douglas Adams",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Foundation",
		author: "Isaac Asimov",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Fahrenheit 451",
		author: "Ray Bradbury",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Alice’s Adventures in Wonderland",
		author: "Lewis Carroll",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Man who was Thursday",
		author: "GK Chesterton",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Childhood’s End",
		author: "Arthur C Clarke",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Do Androids Dream of Electric Sheep?",
		author: "Philip K Dick",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "American Gods",
		author: "Neil Gaiman",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Neuromancer",
		author: "William Gibson",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Dune",
		author: "Frank L Herbert",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Turn of the Screw",
		author: "Henry James",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Shining",
		author: "Stephen King",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Earthsea Series",
		author: "Ursula Le Guin",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Chronicles of Narnia",
		author: "CS Lewis",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Nineteen Eighty-Four",
		author: "George Orwell",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Discworld Series",
		author: "Terry Pratchett",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Frankenstein",
		author: "Mary Shelley",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Strange Case of Dr Jekyll and Mr Hyde",
		author: "Robert Louis Stevenson",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Dracula",
		author: "Bram Stoker",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "The Lord of the Rings",
		author: "JRR Tolkien",
		category: "Science Fiction and Fantasy"
	},
	{
		title: "Things Fall Apart",
		author: "Chinua Achebe",
		category: "State of the Nation"
	},
	{
		title: "Go Tell it on the Mountain",
		author: "James Baldwin",
		category: "State of the Nation"
	},
	{
		title: "Uncle Tom’s Cabin",
		author: "Harriet Beecher Stowe",
		category: "State of the Nation"
	},
	{
		title: "Moll Flanders",
		author: "Daniel Defoe",
		category: "State of the Nation"
	},
	{
		title: "A Tale of Two Cities",
		author: "Charles Dickens",
		category: "State of the Nation"
	},
	{
		title: "North and South",
		author: "Elizabeth Gaskell",
		category: "State of the Nation"
	},
	{
		title: "Les Miserables",
		author: "Victor Hugo",
		category: "State of the Nation"
	},
	{
		title: "A Girl in Winter",
		author: "Philip Larkin",
		category: "State of the Nation"
	},
	{
		title: "The Magic Mountain",
		author: "Thomas Mann",
		category: "State of the Nation"
	},
	{
		title: "Bel-Ami",
		author: "Guy de Maupassant",
		category: "State of the Nation"
	},
	{
		title: "Animal Farm",
		author: "George Orwell",
		category: "State of the Nation"
	},
	{
		title: "Cry, the Beloved Country",
		author: "Alan Paton",
		category: "State of the Nation"
	},
	{
		title: "The Jungle",
		author: "Upton Sinclair",
		category: "State of the Nation"
	},
	{
		title: "White Teeth",
		author: "Zadie Smith",
		category: "State of the Nation"
	},
	{
		title: "The Grapes of Wrath",
		author: "John Steinbeck",
		category: "State of the Nation"
	},
	{
		title: "Vanity Fair",
		author: "William Makepeace Thackeray",
		category: "State of the Nation"
	},
	{
		title: "The Way We Live Now",
		author: "Anthony Trollope",
		category: "State of the Nation"
	},
	{
		title: "The Adventures of Tom Sawyer",
		author: "Mark Twain",
		category: "State of the Nation"
	},
	{
		title: "The Bonfire of the Vanities",
		author: "Tom Wolfe",
		category: "State of the Nation"
	},
	{
		title: "Germinal",
		author: "Emile Zola",
		category: "State of the Nation"
	},
	{
		title: "Empire of the Sun",
		author: "JG Ballard",
		category: "War and Travel"
	},
	{
		title: "Heart of Darkness",
		author: "Joseph Conrad",
		category: "War and Travel"
	},
	{
		title: "Robinson Crusoe",
		author: "Daniel Defoe",
		category: "War and Travel"
	},
	{
		title: "The Three Musketeers",
		author: "Alexandre Dumas",
		category: "War and Travel"
	},
	{
		title: "King Solomon’s Mines",
		author: "H Rider Haggard",
		category: "War and Travel"
	},
	{
		title: "Enigma",
		author: "Robert Harris",
		category: "War and Travel"
	},
	{
		title: "The Good Soldier Svejk",
		author: "Jaroslav Hasek",
		category: "War and Travel"
	},
	{
		title: "For Whom the Bell Tolls",
		author: "Ernest Hemingway",
		category: "War and Travel"
	},
	{
		title: "On the Road",
		author: "Jack Kerouac",
		category: "War and Travel"
	},
	{
		title: "The Call of the Wild",
		author: "Jack London",
		category: "War and Travel"
	},
	{
		title: "One Hundred Years of Solitude",
		author: "Gabriel Garcia Marquez",
		category: "War and Travel"
	},
	{
		title: "Moby-Dick or, The Whale",
		author: "Herman Melville",
		category: "War and Travel"
	},
	{
		title: "Zen and the Art of Motorcycle Maintenance",
		author: "Robert Pirsig",
		category: "War and Travel"
	},
	{
		title: "All Quiet on the Western Front",
		author: "Erich Maria Remarque",
		category: "War and Travel"
	},
	{
		title: "Ivanhoe",
		author: "Sir Walter Scott",
		category: "War and Travel"
	},
	{
		title: "Treasure Island",
		author: "Robert Louis Stevenson",
		category: "War and Travel"
	},
	{
		title: "Gulliver’s Travels",
		author: "Jonathan Swift",
		category: "War and Travel"
	},
	{
		title: "War and Peace",
		author: "Leo Tolstoy",
		category: "War and Travel"
	},
	{
		title: "Around the World in Eighty Days",
		author: "Jules Verne",
		category: "War and Travel"
	},
	{
		title: "The Caine Mutiny",
		author: "Herman Wouk",
		category: "War and Travel"
	}
];

/**
 * Generate a random book.
 *
 * @category entities
 *
 * @example
 *
 * randBook()
 *
 * @example
 *
 * randBook({ length: 10 })
 *
 * @example
 *
 * randBook({ category: 'Comedy' })
 *
 */

function randBook(options) {
  const bookData = options != null && options.category ? data$1L.filter(({
    category
  }) => category === options.category) : data$1L;
  return fake(bookData, options);
}

var data$1K = [
	"Apple",
	"Amazon",
	"Microsoft",
	"Google",
	"Samsung",
	"Coca-Cola",
	"Toyota",
	"Mercedes",
	"McDonald’s",
	"Disney",
	"BMW",
	"Intel",
	"Facebook",
	"IBM",
	"Nike",
	"Cisco",
	"Louis Vuitton",
	"SAP",
	"Instagram",
	"Honda",
	"Chanel",
	"J.P. Morgan",
	"American Express",
	"UPS",
	"Ikea",
	"Pepsi",
	"Adobe",
	"Hermès",
	"General Electric",
	"YouTube",
	"Accenture",
	"Gucci",
	"Budweiser",
	"Pampers",
	"Zara",
	"Hyundai",
	"H&M",
	"Nescafé",
	"Allianz",
	"Tesla",
	"Netflix",
	"Ford",
	"L'Oreal",
	"Audi",
	"Visa",
	"Ebay",
	"Volkswagen",
	"AXA",
	"Goldman Sachs",
	"Adidas",
	"Sony",
	"Citi",
	"Philips",
	"Gillette",
	"Porsche",
	"Starbucks",
	"Mastercard",
	"Salesforce",
	"Nissan",
	"PayPal",
	"Siemens",
	"Danone",
	"Nestlé",
	"HSBC",
	"Hewlett Packard",
	"Kellogg's",
	"3M",
	"Colgate",
	"Morgan Stanely",
	"Spotify",
	"Canon",
	"Lego",
	"Cartier",
	"Santander",
	"FedEx",
	"Nintendo",
	"Hewlett Packard Enterprise",
	"Corona",
	"Ferrari",
	"Huawei",
	"DHL",
	"Jack Daniel's",
	"Dior",
	"Caterpillar",
	"Panasonic",
	"Kia",
	"Johnson & Johnson",
	"Heineken",
	"John Deere",
	"LinkedIn",
	"Hennessy",
	"KFC",
	"Land Rover",
	"Tiffany & Co.",
	"Mini",
	"Uber",
	"Burberry",
	"Johnnie Walker",
	"Prada",
	"Zoom"
];

/**
 * Generate a random brand.
 *
 * @category company
 *
 * @example
 *
 * randBrand()
 *
 * @example
 *
 * randBrand({ length: 10 })
 *
 */

function randBrand(options) {
  return fake(data$1K, options);
}

var data$1J = [
	"Chrome",
	"Edge",
	"Firefox",
	"Internet Explorer",
	"Safari",
	"Opera",
	"Yandex",
	"Chromium",
	"Vivaldi",
	"Baidu",
	"Brave"
];

/**
 * Generate a random browser.
 *
 * @category internet
 *
 * @example
 *
 * randBrowser()
 *
 * @example
 *
 * randBrowser({ length: 10 })
 *
 */

function randBrowser(options) {
  return fake(data$1J, options);
}

var data$1I = [
	"East",
	"South",
	"West",
	"North"
];

/**
 * Generate a random cardinal direction.
 *
 * @category address
 *
 * @example
 *
 * randCardinalDirection()
 *
 * @example
 *
 * randCardinalDirection({ length: 10 })
 *
 */

function randCardinalDirection(options) {
  return fake(data$1I, options);
}

var data$1H = [
	"Japanese Bobtail",
	"Savannah",
	"LaPerm",
	"Siberian",
	"Ocicat",
	"Birman",
	"Devon Rex",
	"Minskin",
	"Serengeti",
	"Bombay",
	"Himalayan",
	"American Curl",
	"Thai",
	"Balinese",
	"Singapura",
	"American Shorthair",
	"Ojos Azules",
	"Burmese"
];

/**
 * Generate a random cat.
 *
 * @category animals
 *
 * @example
 *
 * randCat()
 *
 * @example
 *
 * randCat({ length: 10 })
 *
 */

function randCat(options) {
  return fake(data$1H, options);
}

var data$1G = [
	"Persevering encompassing middleware",
	"Multi-layered zero administration system engine",
	"Digitized attitude-oriented implementation",
	"Multi-lateral zero defect throughput",
	"Profit-focused coherent application",
	"Decentralized human-resource system engine",
	"Right-sized client-driven firmware",
	"Cloned incremental structure",
	"Streamlined impactful alliance",
	"Visionary fresh-thinking instruction set",
	"Networked exuding monitoring",
	"Organized contextually-based function",
	"Enterprise-wide directional orchestration",
	"Universal empowering product",
	"Reduced regional frame",
	"Monitored bottom-line productivity",
	"Reduced multi-tasking encoding",
	"Enhanced responsive software",
	"Multi-tiered exuding approach",
	"Balanced stable knowledge user",
	"Re-engineered neutral database",
	"Versatile national time-frame",
	"Exclusive fresh-thinking workforce",
	"Virtual background paradigm",
	"Upgradable cohesive knowledge user",
	"De-engineered needs-based hardware",
	"Networked mobile moratorium",
	"Inverse contextually-based portal",
	"De-engineered full-range extranet",
	"Advanced transitional support",
	"Business-focused stable framework",
	"Reactive 4th generation info-mediaries",
	"Switchable upward-trending array",
	"Integrated regional open architecture",
	"Reactive local implementation",
	"Focused asymmetric contingency",
	"Synergized 4th generation success",
	"Mandatory regional complexity",
	"Proactive client-server access",
	"Implemented well-modulated task-force",
	"Pre-emptive clear-thinking groupware",
	"Balanced radical archive",
	"Managed explicit installation",
	"Switchable next generation intranet",
	"Quality-focused coherent groupware",
	"Customizable client-driven encoding",
	"Centralized impactful contingency",
	"Streamlined executive Graphic Interface",
	"Seamless bi-directional capacity",
	"Synchronised 24 hour emulation",
	"Robust heuristic installation",
	"Face to face 6th generation complexity",
	"Vision-oriented holistic protocol",
	"Ameliorated asynchronous pricing structure",
	"Profit-focused executive core",
	"Multi-channelled zero tolerance core",
	"Customizable global open system",
	"Robust foreground synergy",
	"Up-sized eco-centric pricing structure",
	"Upgradable stable strategy",
	"Synergized client-server architecture",
	"Focused logistical definition",
	"Secured holistic architecture",
	"Adaptive asymmetric infrastructure",
	"Digitized clear-thinking firmware",
	"De-engineered eco-centric installation",
	"Stand-alone next generation task-force",
	"User-centric optimizing implementation",
	"Re-contextualized grid-enabled portal",
	"Extended asynchronous system engine",
	"Reactive neutral moderator",
	"Expanded 4th generation Graphic Interface",
	"Optimized contextually-based toolset",
	"Operative bi-directional protocol",
	"De-engineered dynamic frame",
	"User-friendly disintermediate alliance",
	"Fundamental client-server data-warehouse",
	"Ameliorated multimedia groupware",
	"Secured methodical frame",
	"Organized maximized firmware",
	"User-centric executive knowledge user",
	"Configurable global help-desk",
	"Realigned empowering monitoring",
	"Enterprise-wide 24 hour info-mediaries",
	"Expanded didactic methodology",
	"Configurable zero administration projection",
	"Fundamental multi-tasking standardization",
	"Future-proofed leading edge secured line",
	"Polarised global open system",
	"Re-engineered upward-trending standardization",
	"Stand-alone needs-based pricing structure",
	"Synergistic responsive service-desk",
	"Re-engineered 24/7 paradigm",
	"Compatible fresh-thinking success",
	"Innovative background attitude",
	"Automated modular access",
	"Distributed heuristic archive",
	"Cloned human-resource knowledge base",
	"User-friendly impactful utilisation",
	"Reactive motivating data-warehouse"
];

/**
 * Generate a random catch phrase.
 *
 * @category text
 *
 * @example
 *
 * randCatchPhrase()
 *
 * @example
 *
 * randCatchPhrase({ length: 10 })
 *
 */

function randCatchPhrase(options) {
  return fake(data$1G, options);
}

var data$1F = [
	"Clymene Dolphin",
	"Bottlenose Dolphin",
	"Costero",
	"Chilean Dolphin",
	"Heaviside’s Dolphin",
	"Pantropical Spotted Dolphin",
	"Sperm Whale",
	"Burrunan Dolphin",
	"Bryde’s whale",
	"Atlantic White-Sided Dolphin",
	"Northern Rightwhale Dolphin",
	"Killer Whale (Orca)",
	"False Killer Whale",
	"Ganges River Dolphin",
	"Pacific White-Sided Dolphin",
	"Blue Whale",
	"Southern Bottlenose Whale",
	"Peale’s Dolphin"
];

/**
 * Generate a random cetacean.
 *
 * @category animals
 *
 * @example
 *
 * randCetacean()
 *
 * @example
 *
 * randCetacean({ length: 10 })
 *
 */

function randCetacean(options) {
  return fake(data$1F, options);
}

var data$1E = [
	"South Dagmarshire",
	"New Solonmouth",
	"New Montemouth",
	"Langborough",
	"Padbergmouth",
	"Connfurt",
	"Metairie",
	"New Merle",
	"Willbury",
	"North Sigmund",
	"Opalbury",
	"North Antonetta",
	"Tallahassee",
	"Janefurt",
	"Port Adalberto",
	"West Dorris",
	"Kettering",
	"Lake Adell",
	"Bellingham",
	"Buffalo",
	"West Brendonville",
	"South Laila",
	"West Lucy",
	"Marionton",
	"Lake Brianne",
	"New Ansley",
	"Johnnieburgh",
	"Jaskolskifort",
	"New Davonteside",
	"New Kyle",
	"Williemouth",
	"Lake Cesar",
	"Bernierfurt",
	"West Janetborough",
	"Port Asa",
	"East Filibertofurt",
	"Fort Lauderdale",
	"West Dellside",
	"Glen Burnie",
	"Port Amie",
	"Shoreline",
	"West Estaton",
	"Cuyahoga Falls",
	"North Kaleighshire",
	"Kuvalismouth",
	"South Darienbury",
	"Venamouth",
	"North Winnifred",
	"Bahringertown",
	"Haneborough",
	"South Ahmedfort",
	"East Khalilton",
	"Aliso Viejo",
	"Jaquelinview",
	"Lake Ludie",
	"West Simone",
	"Katrinaside",
	"North Nona",
	"Tryciastad",
	"Tabithaville",
	"Frisco",
	"Olympia",
	"State College",
	"New Garlandfort",
	"Lake Anthony",
	"West Everardo",
	"Wehnerfort",
	"South Verdieton",
	"Lawrence",
	"New Wallaceberg",
	"White Plains",
	"South Stacey",
	"Farmington",
	"Borerville",
	"Erynside",
	"Lake Zackton",
	"Port Salvador",
	"Funkville",
	"North Frankie",
	"East Vicentaborough",
	"North Braulio",
	"East Providence",
	"Denesikburgh",
	"New Philip",
	"Durwardton",
	"Kissimmee",
	"North Celia",
	"Maxwellport",
	"Reichertland",
	"Rettaland",
	"West Amiya",
	"Elisabethland",
	"Rogers",
	"Henderson",
	"Franeckiview",
	"Grand Rapids",
	"Murray",
	"Port Ricky",
	"Port Hardymouth",
	"Cruzshire"
];

/**
 * Generate a random city.
 *
 * @category Address
 *
 * @example
 *
 * randCity()
 *
 * @example
 *
 * randCity({ length: 10 })
 *
 */

function randCity(options) {
  return fake(data$1E, options);
}

var data$1D = [
	"XXS",
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];

/**
 * Generate a random clothing size.
 *
 * @category Commerce
 *
 * @example
 *
 * randClothingSize()
 *
 * @example
 *
 * randClothingSize({ length: 10 })
 *
 */

function randClothingSize(options) {
  return fake(data$1D, options);
}

var data$1C = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGray",
	"DarkGrey",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"DarkOrange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGray",
	"DarkSlateGrey",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DimGrey",
	"DodgerBlue",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod",
	"Gray",
	"Grey",
	"Green",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"IndianRed",
	"Indigo",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGray",
	"LightGrey",
	"LightGreen",
	"LightPink",
	"LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue",
	"LightSlateGray",
	"LightSlateGrey",
	"LightSteelBlue",
	"LightYellow",
	"Lime",
	"LimeGreen",
	"Linen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"MintCream",
	"MistyRose",
	"Moccasin",
	"NavajoWhite",
	"Navy",
	"OldLace",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGoldenRod",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PapayaWhip",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"RebeccaPurple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"SeaShell",
	"Sienna",
	"Silver",
	"SkyBlue",
	"SlateBlue",
	"SlateGray",
	"SlateGrey",
	"Snow",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"WhiteSmoke",
	"Yellow",
	"YellowGreen"
];

/**
 * Generate a random color.
 *
 * @category colors
 *
 * @example
 *
 * randColor()
 *
 * @example
 *
 * randColor({ length: 10 })
 *
 */

function randColor(options) {
  return fake(data$1C, options);
}

var data$1B = [
	"Kautzer, Macejkovic and Fisher",
	"Greenholt - Mosciski",
	"Marquardt - Runolfsdottir",
	"Abernathy Inc",
	"Dickens - Lang",
	"Hand, Bernhard and Kessler",
	"Abbott LLC",
	"Kub Inc",
	"Johnston - Wisozk",
	"Reichert LLC",
	"Kohler LLC",
	"Shanahan - Boyle",
	"Batz - Rice",
	"Cronin, Oberbrunner and Beier",
	"Kuhlman, Schowalter and West",
	"Luettgen Inc",
	"Ward Group",
	"Hills and Sons",
	"Prohaska, Balistreri and Walker",
	"Rempel - Durgan",
	"Bernier LLC",
	"Stehr - Lockman",
	"Roberts, Rogahn and Dooley",
	"Lesch - Jakubowski",
	"Jenkins - Turcotte",
	"Gerhold - Rowe",
	"Block - Rau",
	"Dickinson, Tremblay and Moore",
	"Nader - Fritsch",
	"Kreiger and Sons",
	"Bartell, Wehner and Schowalter",
	"Hegmann Inc",
	"Orn, Spencer and Kiehn",
	"Graham, Sipes and Towne",
	"Hodkiewicz Inc",
	"Mills Group",
	"Legros, Tillman and Hodkiewicz",
	"Lesch - Carter",
	"Lesch Group",
	"Kreiger - Sauer",
	"Cartwright - Schuster",
	"Labadie LLC",
	"Pfannerstill, White and Mosciski",
	"Jenkins LLC",
	"Boehm, Hettinger and Huels",
	"Maggio, Wisoky and Blick",
	"Kozey Inc",
	"Stracke - Wisozk",
	"Olson, Olson and Carter",
	"Orn, Gerlach and Runolfsdottir",
	"Stracke - Kertzmann",
	"Champlin - Gaylord",
	"Walker - Zieme",
	"Hodkiewicz - Hintz",
	"Lind Group",
	"Fahey, Leannon and Gleichner",
	"Mertz, Gusikowski and Lemke",
	"Heidenreich - Aufderhar",
	"Zboncak and Sons",
	"Carroll Group",
	"Brown LLC",
	"Weber Inc",
	"Rath LLC",
	"Walker Inc",
	"Heller, Hyatt and Jaskolski",
	"Jacobi - Kutch",
	"Skiles and Sons",
	"Durgan - Stamm",
	"Renner - Prosacco",
	"Hahn - Welch",
	"Lesch, Dooley and Bartell",
	"Crona and Sons",
	"Rogahn, Armstrong and Goyette",
	"Lubowitz, Kuhlman and Bailey",
	"Doyle Group",
	"Dooley and Sons",
	"Kerluke LLC",
	"Bogan - Daniel",
	"Hintz - Boehm",
	"Swaniawski and Sons",
	"Kris, Legros and Cartwright",
	"Reichel Group",
	"Russel - Hintz",
	"Welch, Lockman and Hand",
	"Pouros - Brakus",
	"Mohr, Fritsch and Wisozk",
	"Upton - Reichert",
	"Koepp and Sons",
	"Weber and Sons",
	"Quigley, Bins and Becker",
	"Strosin, Oberbrunner and Wunsch",
	"Rodriguez - Spencer",
	"Wilkinson - Dare",
	"Gutkowski Inc",
	"OReilly LLC",
	"Collins, Mante and Pacocha",
	"Steuber, Luettgen and Corkery",
	"Kub and Sons",
	"Lesch and Sons"
];

/**
 * Generate a random company name.
 *
 * @category Company
 *
 * @example
 *
 * randCompanyName()
 *
 * @example
 *
 * randCompanyName({ length: 10 })
 *
 */

function randCompanyName(options) {
  return fake(data$1B, options);
}

var data$1A = [
	"Argentina",
	"Peru",
	"Colombia",
	"Chile",
	"Uruguay",
	"Gabon",
	"Congo",
	"Norfolk Island",
	"Qatar",
	"Syrian Arab Republic",
	"Wallis and Futuna",
	"Somalia",
	"Saint Barthelemy",
	"Comoros",
	"Sri Lanka",
	"Czech Republic",
	"Christmas Island",
	"Macao",
	"Montenegro",
	"Anguilla",
	"Canada",
	"Mayotte",
	"Tajikistan",
	"Afghanistan",
	"Liechtenstein",
	"Cocos (Keeling) Islands",
	"Angola",
	"Bahrain",
	"Dominican Republic",
	"Croatia",
	"Latvia",
	"Virgin Islands, U.S.",
	"United Kingdom",
	"Brazil",
	"Spain",
	"Mongolia",
	"Montserrat",
	"Estonia",
	"Benin",
	"Guinea",
	"Guinea-Bissau",
	"Greece",
	"Lao Peoples Democratic Republic",
	"Puerto Rico",
	"Slovakia (Slovak Republic)",
	"United States of America",
	"Switzerland",
	"Costa Rica",
	"Mauritius",
	"Nigeria",
	"Russian Federation",
	"Germany",
	"Antigua and Barbuda",
	"Albania",
	"Romania",
	"Moldova",
	"Senegal",
	"Tanzania",
	"British Indian Ocean Territory (Chagos Archipelago)",
	"Central African Republic",
	"New Caledonia",
	"Burundi",
	"Panama",
	"Azerbaijan",
	"Namibia",
	"French Southern Territories",
	"Vanuatu",
	"Ethiopia",
	"Burkina Faso",
	"Tunisia",
	"Mozambique",
	"Belarus",
	"Saint Kitts and Nevis",
	"Hungary",
	"Indonesia",
	"Cyprus",
	"Ecuador",
	"Saint Martin",
	"Nauru",
	"Faroe Islands",
	"Iran",
	"Bolivia",
	"Pitcairn Islands",
	"France",
	"Paraguay",
	"Isle of Man",
	"Sierra Leone",
	"Monaco",
	"Belize",
	"Trinidad and Tobago"
];

/**
 * Generate a random country.
 *
 * @category address
 *
 * @example
 *
 * randCountry()
 *
 * @example
 *
 * randCountry({ length: 10 })
 *
 */

function randCountry(options) {
  return fake(data$1A, options);
}

var data$1z = [
	"MS",
	"TW",
	"LR",
	"HU",
	"PK",
	"GQ",
	"GG",
	"SZ",
	"MQ",
	"AS",
	"WS",
	"BJ",
	"NR",
	"FJ",
	"ZM",
	"CR",
	"BO",
	"AW",
	"AI",
	"GW",
	"PF",
	"MO",
	"PE",
	"UZ",
	"JM",
	"KH",
	"RW",
	"GN",
	"IN",
	"MR",
	"MC",
	"KG",
	"SA",
	"SV",
	"TZ",
	"ME",
	"BB",
	"IE",
	"LY",
	"TM",
	"SN",
	"MA",
	"BN",
	"ML",
	"LV",
	"SM",
	"HT",
	"NF",
	"TD",
	"UA",
	"FM",
	"KM",
	"CN",
	"GF",
	"MT",
	"RO",
	"PA",
	"FI",
	"BG",
	"KZ",
	"PN",
	"BL",
	"NO",
	"IM",
	"AQ",
	"MV",
	"LA",
	"NU",
	"LS",
	"CW",
	"CF",
	"GT",
	"TL",
	"RU",
	"BQ",
	"GB",
	"BV",
	"TC",
	"EC",
	"NG",
	"AD",
	"RE",
	"SL",
	"CL",
	"ER"
];

/**
 * Generate a random country code.
 *
 * @category address
 *
 * @example
 *
 * randCountryCode()
 *
 * @example
 *
 * randCountryCode({ length: 10 })
 *
 */

function randCountryCode(options) {
  return fake(data$1z, options);
}

var data$1y = [
	"Bedfordshire",
	"Berkshire",
	"Bristol",
	"Buckinghamshire",
	"Cambridgeshire",
	"Cheshire",
	"City of London",
	"Cornwall",
	"Cumbria",
	"Derbyshire",
	"Devon",
	"Dorset",
	"Durham",
	"East Riding of Yorkshire",
	"East Sussex",
	"Essex",
	"Gloucestershire",
	"Greater London",
	"Greater Manchester",
	"Hampshire",
	"Herefordshire",
	"Hertfordshire",
	"Isle of Wight",
	"Kent",
	"Lancashire",
	"Leicestershire",
	"Lincolnshire",
	"Merseyside",
	"Norfolk",
	"North Yorkshire",
	"Northamptonshire",
	"Northumberland",
	"Nottinghamshire",
	"Oxfordshire",
	"Rutland",
	"Shropshire",
	"Somerset",
	"South Yorkshire",
	"Staffordshire",
	"Suffolk",
	"Surrey",
	"Tyne and Wear",
	"Warwickshire",
	"West Midlands",
	"West Sussex",
	"West Yorkshire",
	"Wiltshire",
	"Worcestershire"
];

/**
 * Generate a random county.
 *
 * @category Address
 *
 * @example
 *
 * randCounty()
 *
 * @example
 *
 * randCounty({ length: 10 })
 *
 */

function randCounty(options) {
  return fake(data$1y, options);
}

var data$1x = [
	"Hartón del Valle",
	"Pedit",
	"German Black Pied cattle",
	"Parda Alpina",
	"Dajal",
	"Raya",
	"Adamawa",
	"Blaarkop",
	"Doayo cattle",
	"Aulie-Ata",
	"North Bengal Grey",
	"Nguni",
	"Canaria",
	"Siri",
	"Breed",
	"Hallikar4",
	"Simmental",
	"Pie Rouge des Plaines"
];

/**
 * Generate a random cow.
 *
 * @category animals
 *
 * @example
 *
 * randCow()
 *
 * @example
 *
 * randCow({ length: 10 })
 *
 */

function randCow(options) {
  return fake(data$1x, options);
}

/**
 * Generate a random credit card CVV.
 *
 * @category Finance
 *
 * @example
 *
 * randCreditCardCVV()
 *
 * @example
 *
 * randCreditCardCVV({ length: 10 })
 *
 */

function randCreditCardCVV(options) {
  return fake(() => getRandomInRange({
    min: 100,
    max: 999
  }).toString(), options);
}

var data$1w = [
	"American Express",
	"T-Union",
	"UnionPay",
	"Diners Club",
	"Discover Card",
	"UkrCard",
	"RuPay",
	"InterPayment",
	"InstaPayment",
	"JCB",
	"Maestro UK",
	"Maestro",
	"Dankort",
	"Mir",
	"NPS Pridnestrovie",
	"Mastercard",
	"51–55",
	"Troy",
	"Visa",
	"Visa Electron",
	"UATP",
	"Verve"
];

/**
 * Generate a random credit card brand.
 *
 * @category Finance
 *
 * @example
 *
 * randCreditCardBrand()
 *
 * @example
 *
 * randCreditCardBrand({ length: 10 })
 *
 */

function randCreditCardBrand(options) {
  return fake(data$1w, options);
}

/**
 * Get a random item from array.
 *
 * @category general
 *
 * @example
 *
 * rand([ 1, 2, 3 ])
 *
 * @example
 *
 * rand([ 1, 2, 3 ], { length: 10 })
 *
 */

function rand(arr, options) {
  return fake(arr, options);
}

var data$1v = [
	{
		brand: "American Express",
		formats: [
			"34## ###### #####",
			"37## ###### #####"
		]
	},
	{
		brand: "UnionPay",
		formats: [
			"62## #### #### ####",
			"62#### #############"
		]
	},
	{
		brand: "Diners Club",
		formats: [
			"300# ###### ####",
			"301# ###### ####",
			"302# ###### ####",
			"303# ###### ####",
			"304# ###### ####",
			"305# ###### ####",
			"309# ###### ####",
			"36## ###### ####",
			"38## ###### ####",
			"39## ###### ####",
			"54## #### #### ####",
			"55## #### #### ####"
		]
	},
	{
		brand: "Discover Card",
		formats: [
			"6011 #### #### ####",
			"644# #### #### ####",
			"645# #### #### ####",
			"646# #### #### ####",
			"647# #### #### ####",
			"648# #### #### ####",
			"649# #### #### ####",
			"65## #### #### ####"
		]
	},
	{
		brand: "RuPay",
		formats: [
			"60## #### #### ####",
			"65## #### #### ####",
			"81## #### #### ####",
			"82## #### #### ####",
			"508# #### #### ####",
			"353# #### #### ####",
			"356# #### #### ####"
		]
	},
	{
		brand: "JCB",
		formats: [
			"3528 #### #### ####",
			"3565 #### #### ####",
			"3572 #### #### ####",
			"3589 #### #### ####"
		]
	},
	{
		brand: "Maestro",
		formats: [
			"5018 #### #####",
			"5020 #### #####",
			"5038 #### #####",
			"5893 ###### #####",
			"6304 #### #### ####",
			"6759 #### #### ####",
			"6761 #### #### #### ###",
			"6762 #### #### ####",
			"6763 #### #### #### ###"
		]
	},
	{
		brand: "Dankort",
		formats: [
			"5019 #### #### ####"
		]
	},
	{
		brand: "Mastercard",
		formats: [
			"51## #### #### ####",
			"52## #### #### ####",
			"53## #### #### ####",
			"54## #### #### ####",
			"55## #### #### ####"
		]
	},
	{
		brand: "Visa",
		formats: [
			"4### #### #### ####"
		]
	},
	{
		brand: "Visa Electron",
		formats: [
			"4026 #### #### ####",
			"4175 00## #### ####",
			"4405 #### #### ####",
			"4508 #### #### ####",
			"4844 #### #### ####",
			"4913 #### #### ####",
			"4917 #### #### ####"
		]
	},
	{
		brand: "UATP",
		formats: [
			"1### ##### ######"
		]
	}
];

/**
 * Generate a random credit card number.
 *
 * @category finance
 *
 * @example
 *
 * randCreditCardNumber()
 *
 * @example
 *
 * randCreditCardNumber({ brand: 'Visa' })
 *
 * @example
 *
 * randCreditCardNumber({ length: 10 })
 *
 */

function randCreditCardNumber(options) {
  var _options$brand, _data$find;

  const brand = (_options$brand = options == null ? void 0 : options.brand) != null ? _options$brand : rand(Object.keys(data$1v));
  const formats = (_data$find = data$1v.find(card => card.brand === brand)) == null ? void 0 : _data$find.formats;
  const fallBackFormat = ['#### #### #### ####'];

  const factory = () => {
    return randElement(formats || fallBackFormat).replace(/#/g, () => {
      return getRandomInRange({
        min: 0,
        max: 9
      }).toString();
    });
  };

  return fake(factory, options);
}

var data$1u = [
	"Orinoco Crocodile",
	"Gharial",
	"Broad-snouted Caiman",
	"Saltwater Crocodile",
	"Black Caiman",
	"West African Crocodile",
	"Tomistoma",
	"Siamese Crocodile",
	"Philippine Crocodile",
	"Schneider’s Smooth-fronted Caiman",
	"Cuban Crocodile",
	"New Guinea Freshwater Crocodile",
	"Nile Crocodile",
	"American Crocodile",
	"Chinese Alligator",
	"Dwarf Crocodile",
	"Yacare Caiman",
	"African Slender-snouted Crocodile"
];

/**
 * Generate a random crocodilia.
 *
 * @category animals
 *
 * @example
 *
 * randCrocodilia()
 *
 * @example
 *
 * randCrocodilia({ length: 10 })
 *
 */

function randCrocodilia(options) {
  return fake(data$1u, options);
}

var data$1t = [
	"IRR",
	"SHP",
	"NPR",
	"CAD",
	"XDR",
	"BMD",
	"LTL",
	"XTS",
	"CRC",
	"BYR",
	"GEL",
	"PGK",
	"HKD",
	"LKR",
	"IQD",
	"CVE",
	"BRL",
	"MGA",
	"TMT",
	"ISK",
	"GIP",
	"CUC",
	"SYP",
	"MWK",
	"BND",
	"AFN",
	"FKP",
	"GYD",
	"PAB",
	"NAD",
	"ZMK",
	"ILS",
	"KMF",
	"GBP",
	"JPY",
	"MUR",
	"UAH",
	"EEK",
	"SLL",
	"MMK",
	"NGN",
	"SDG",
	"ALL",
	"TRY",
	"BTN",
	"JMD",
	"AWG",
	"GTQ",
	"VEF",
	"XAF",
	"DJF",
	"NIO",
	"XAU",
	"COP",
	"CHF",
	"HNL",
	"DOP",
	"KHR",
	"EUR",
	"CLP",
	"KES",
	"TND",
	"DZD",
	"GNF",
	"USD",
	"MAD",
	"AOA",
	"SRD",
	"TWD",
	"RWF",
	"XPT",
	"PKR",
	"SOS",
	"SCR",
	"GHS",
	"MNT",
	"BWP",
	"AED",
	"RON"
];

/**
 * Generate a random currency code.
 *
 * @category finance
 *
 * @example
 *
 * randCurrencyCode()
 *
 * @example
 *
 * randCurrencyCode({ length: 10 })
 *
 */

function randCurrencyCode(options) {
  return fake(data$1t, options);
}

var data$1s = [
	"Egyptian Pound",
	"Belize Dollar",
	"Sudanese Pound",
	"Palladium",
	"Mexican Peso",
	"Rupiah",
	"Tenge",
	"Boliviano boliviano",
	"Vatu",
	"Lebanese Pound",
	"Riel",
	"US Dollar",
	"Djibouti Franc",
	"Kwacha",
	"Hryvnia",
	"Lari",
	"Russian Ruble",
	"Codes specifically reserved for testing purposes",
	"Kina",
	"Tunisian Dinar",
	"Leone",
	"Brunei Dollar",
	"Danish Krone",
	"Nepalese Rupee",
	"North Korean Won",
	"Saudi Riyal",
	"Afghani",
	"Platinum",
	"Iraqi Dinar",
	"Costa Rican Colon",
	"Singapore Dollar",
	"Philippine Peso",
	"Pound Sterling",
	"Dalasi",
	"Dobra",
	"Paanga",
	"Balboa",
	"Bermudian Dollar (customarily known as Bermuda Dollar)",
	"Barbados Dollar",
	"Pataca",
	"Kuwaiti Dinar",
	"CFP Franc",
	"Uganda Shilling",
	"Norwegian Krone",
	"Dong",
	"Lilangeni",
	"Croatian Kuna",
	"Lesotho Loti",
	"Rufiyaa",
	"Forint",
	"Argentine Peso",
	"Cedi",
	"Bhutanese Ngultrum",
	"Dominican Peso",
	"Somoni",
	"Guinea Franc",
	"European Unit of Account 9(E.U.A.-9)",
	"European Monetary Unit (E.M.U.-6)",
	"Convertible Marks",
	"Cuban Peso Convertible",
	"UAE Dirham",
	"Iceland Krona",
	"Gourde",
	"Som",
	"Bahamian Dollar",
	"Kwanza",
	"Cordoba Oro",
	"Gold",
	"Manat",
	"Burundi Franc",
	"New Taiwan Dollar",
	"Fiji Dollar",
	"Uzbekistan Sum",
	"Romanian Leu"
];

/**
 * Generate a random currency name.
 *
 * @category Finance
 *
 * @example
 *
 * randCurrencyName()
 *
 * @example
 *
 * randCurrencyName({ length: 10 })
 *
 */

function randCurrencyName(options) {
  return fake(data$1s, options);
}

var data$1r = [
	"B/.",
	"£",
	"Ls",
	"₡",
	"NT$",
	"лв",
	"$",
	"R",
	"Lt",
	"﷼",
	"kr",
	"KM",
	"៛",
	"Bs",
	"₹",
	"Q",
	"ƒ",
	"R$",
	"₨",
	"ден",
	"p.",
	"₺",
	"Дин.",
	"P",
	"RD$",
	"L",
	"Ft",
	"CHF",
	"₩",
	"Php",
	"S/.",
	"₭",
	"RM",
	"€",
	"Lek",
	"¥",
	"؋",
	"₦"
];

/**
 * Generate a random currency symbol.
 *
 * @category finance
 *
 * @example
 *
 * randCurrencySymbol()
 *
 * @example
 *
 * randCurrencySymbol({ length: 10 })
 *
 */

function randCurrencySymbol(options) {
  return fake(data$1r, options);
}

var data$1q = [
	"utf8_unicode_ci",
	"cp1250_general_ci",
	"cp1250_bin",
	"utf8_general_ci",
	"ascii_general_ci",
	"utf8_bin",
	"ascii_bin"
];

/**
 * Generate a random database collation.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseCollation()
 *
 * @example
 *
 * randDatabaseCollation({ length: 10 })
 *
 */

function randDatabaseCollation(options) {
  return fake(data$1q, options);
}

var data$1p = [
	"comment",
	"group",
	"password",
	"token",
	"phone",
	"title",
	"status",
	"id",
	"name",
	"updatedAt",
	"category",
	"email",
	"avatar",
	"createdAt"
];

/**
 * Generate a random database column.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseColumn()
 *
 * @example
 *
 * randDatabaseColumn({ length: 10 })
 *
 */

function randDatabaseColumn(options) {
  return fake(data$1p, options);
}

var data$1o = [
	"CSV",
	"ARCHIVE",
	"MyISAM",
	"MEMORY",
	"InnoDB",
	"BLACKHOLE"
];

/**
 * Generate a random database engine.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseEngine()
 *
 * @example
 *
 * randDatabaseEngine({ length: 10 })
 *
 */

function randDatabaseEngine(options) {
  return fake(data$1o, options);
}

var data$1n = [
	"tinyint",
	"date",
	"timestamp",
	"set",
	"datetime",
	"enum",
	"binary",
	"bigint",
	"point",
	"smallint",
	"text",
	"bit",
	"decimal",
	"varchar",
	"mediumint",
	"double",
	"time",
	"blob",
	"geometry",
	"boolean",
	"serial",
	"real",
	"float"
];

/**
 * Generate a random database type.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseType()
 *
 * @example
 *
 * randDatabaseType({ length: 10 })
 *
 */

function randDatabaseType(options) {
  return fake(data$1n, options);
}

var data$1m = [
	"Games",
	"Automotive",
	"Music",
	"Home",
	"Movies",
	"Health",
	"Sports",
	"Garden",
	"Baby",
	"Kids",
	"Toys",
	"Computers",
	"Clothing",
	"Outdoors",
	"Shoes",
	"Jewelery",
	"Industrial",
	"Electronics",
	"Tools",
	"Grocery",
	"Beauty",
	"Books"
];

/**
 * Generate a random department.
 *
 * @category commerce
 *
 * @example
 *
 * randDepartment()
 *
 * @example
 *
 * randDepartment({ length: 10 })
 *
 */

function randDepartment(options) {
  return fake(data$1m, options);
}

var data$1l = [
	"Southwest",
	"North",
	"Northeast",
	"Northwest",
	"South",
	"West",
	"East",
	"Southeast"
];

/**
 * Generate a random direction.
 *
 * @category address
 *
 * @example
 *
 * randDirection()
 *
 * @example
 *
 * randDirection({ length: 10 })
 *
 */

function randDirection(options) {
  return fake(data$1l, options);
}

var data$1k = [
	"Jack Russell Terrier",
	"Beauceron",
	"Denmark Feist",
	"Affenpinscher",
	"Kishu",
	"Boykin Spaniel",
	"English Toy Terrier",
	"Alaskan Malamute",
	"English Mastiff",
	"Maltese",
	"Croatian Sheepdog",
	"Garafian Shepherd",
	"Giant Schnauzer",
	"Austrian Black and Tan Hound",
	"Basset Fauve de Bretagne",
	"Pomeranian",
	"Nova Scotia Duck Tolling Retriever",
	"Hygen Hound",
	"Golden Retriever",
	"Doberman Pinscher",
	"French Poodle",
	"Siberian Husky",
	"Cocker Spaniel"
];

/**
 * Generate a random dog.
 *
 * @category animals
 *
 * @example
 *
 * randDog()
 *
 * @example
 *
 * randDog({ length: 10 })
 *
 */

function randDog(options) {
  return fake(data$1k, options);
}

var data$1j = [
	"org",
	"biz",
	"com",
	"net",
	"name",
	"info",
	"io",
	"dev"
];

/**
 * Generate a random domain suffix.
 *
 * @category Internet
 *
 * @example
 *
 * randDomainSuffix()
 *
 * @example
 *
 * randDomainSuffix({ length: 10 })
 *
 */

function randDomainSuffix(options) {
  return fake(data$1j, options);
}

var data$1i = [
	"est",
	"voluptatem",
	"non",
	"aut",
	"aliquid",
	"quaerat",
	"quos",
	"vel",
	"tenetur",
	"consectetur",
	"ipsum",
	"voluptate",
	"numquam",
	"cum",
	"nulla",
	"asperiores",
	"in",
	"laborum",
	"quas",
	"et",
	"ullam",
	"consequuntur",
	"enim",
	"dicta",
	"quia",
	"facilis",
	"voluptatibus",
	"at",
	"hic",
	"sunt",
	"excepturi",
	"maiores",
	"vitae",
	"fugit",
	"possimus",
	"unde",
	"repellat",
	"sit",
	"necessitatibus",
	"nemo",
	"qui",
	"exercitationem",
	"dolores",
	"esse",
	"reiciendis",
	"nihil",
	"commodi",
	"id",
	"sequi",
	"consequatur",
	"occaecati",
	"deserunt",
	"quae",
	"eos",
	"sapiente",
	"fugiat",
	"neque",
	"quasi",
	"nostrum",
	"magnam",
	"sed",
	"omnis",
	"doloribus",
	"error",
	"ducimus",
	"rerum",
	"beatae",
	"cupiditate",
	"a",
	"blanditiis",
	"labore"
];

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
/**
 * Generate a random word.
 *
 * @category text
 *
 * @example
 *
 * randWord()
 *
 * @example
 *
 * randWord({ capitalize: true }) // default is false
 *
 * @example
 *
 * randWord({ length: 10 })
 *
 */


function randWord(options) {
  const factory = () => {
    let word = randElement(data$1i);

    if (options != null && options.capitalize) {
      word = capitalizeFirstLetter(word);
    }

    return word;
  };

  return fake(factory, options);
}

/**
 * Generate a random domain name.
 *
 * @category Internet
 *
 * @example
 *
 * randDomainName()
 *
 * @example
 *
 * randDomainName({ length: 10 })
 *
 */

function randDomainName(options) {
  return fake(() => `${randWord()}.${randDomainSuffix()}`, options);
}

var data$1h = [
	"Amaretto Sour",
	"Aviation",
	"Cocktail",
	"Gin",
	"Liqueur",
	"Bellini",
	"Brandy",
	"Black Russian",
	"Bourbon",
	"Coffee-flavored liqueur",
	"Coffee liqueur",
	"Cranberry Vodka",
	"Creme de Cacao",
	"Creme de Cassis",
	"Creme de Menthe",
	"Creme de Noyaux",
	"Bloody Mary",
	"Boulevardier",
	"Bronx Cocktail",
	"Clover Club",
	"Cosmopolitan",
	"Cuba Libre",
	"Daiquiri",
	"Dark and Stormy",
	"French 75",
	"Gin and Tonic",
	"Godfather",
	"B52",
	"Greyhound",
	"Harvey Wallbanger",
	"Irish Coffee",
	"Jack Rose",
	"Kamikaze",
	"Martini",
	"Martini Bianco",
	"Long Island",
	"Long Island Ice Tea",
	"Mai Tai",
	"Margarita",
	"Mimosa",
	"Mint Julep",
	"Negroni",
	"Mojito",
	"Still Water",
	"Sprinkled Water",
	"White Lady",
	"Negroni",
	"Champagne",
	"Red Wine",
	"White Wine",
	"Rum",
	"Rum and Coke",
	"Rum Punch",
	"Pina Colada",
	"Sangria",
	"Sazerac",
	"Tequila",
	"Tequila Sunrise",
	"Zombie",
	"Thai Spring Mojito",
	"Thai Basil Martini",
	"Screwdriver",
	"Raspberry Lemon Drop",
	"Orange Soda",
	"Pineapple Gingerale",
	"Pomegranate Cranberry",
	"Natural Vanilla Syrup",
	"Orange Liqueur",
	"Peach Schnapps",
	"Peppermint Schnapps",
	"Pineapple Juice",
	"Pineapple Soda",
	"Passion Fruit Pucker"
];

/**
 * Generate a random drink.
 *
 * @category drinks
 *
 * @example
 *
 * randDrinks()
 *
 * @example
 *
 * randDrinks({ length: 10 })
 *
 */

function randDrinks(options) {
  return fake(data$1h, options);
}

var data$1g = [
	"aim",
	"alice",
	"aliceadsl",
	"aol",
	"arcor",
	"att",
	"bellsouth",
	"bigpond",
	"bluewin",
	"blueyonder",
	"bol",
	"centurytel",
	"charter",
	"chello",
	"club-internet",
	"comcast",
	"earthlink",
	"facebook",
	"free",
	"freenet",
	"frontiernet",
	"gmail",
	"gmx",
	"googlemail",
	"hetnet",
	"home",
	"hotmail",
	"ig",
	"juno",
	"laposte",
	"libero",
	"live",
	"mac",
	"mail",
	"me",
	"msn",
	"neuf",
	"ntlworld",
	"optonline",
	"optusnet",
	"orange",
	"outlook",
	"planet",
	"qq",
	"rambler",
	"rediffmail",
	"rocketmail",
	"sbcglobal",
	"sfr",
	"shaw",
	"sky",
	"skynet",
	"sympatico",
	"t-online",
	"telenet",
	"terra",
	"tin",
	"tiscali",
	"unaref",
	"uol",
	"verizon",
	"virgilio",
	"voila",
	"wanadoo",
	"web",
	"windstream",
	"yahoo",
	"yandex",
	"zonnet"
];

/**
 * Generate a random email provider.
 *
 * @category Internet
 *
 * @example
 *
 * randEmailProvider()
 *
 * @example
 *
 * randEmailProvider({ length: 10 })
 *
 */

function randEmailProvider(options) {
  return fake(data$1g, options);
}

var data$1f = {
	withAccents: [
		"Adrián",
		"Ædel",
		"Ægir",
		"Agnès",
		"Alícia",
		"Álvaro",
		"André",
		"Andrés",
		"Änne",
		"Antónia",
		"Árni",
		"Asbjørn",
		"Ásta",
		"Auður",
		"Björn",
		"Cäcilia",
		"César",
		"Chloë",
		"Claúdia",
		"Daníel",
		"Davíð",
		"Dörte",
		"Elín",
		"Elísabet",
		"Eliška",
		"Emílio",
		"Fañch",
		"François",
		"František",
		"Gísli",
		"Glória",
		"Götz",
		"Grażyna",
		"Guðbjörg",
		"Guðjón",
		"Guðmundur",
		"Guðný",
		"Guðrún",
		"Günter",
		"Halldór",
		"Hans-Jörg",
		"Hans-Jürgen",
		"Henriëtte",
		"Hüseyin",
		"Iñaki",
		"Ingibjörg",
		"Íris",
		"János",
		"Jesús",
		"Jiří",
		"Jóhann",
		"Jóhanna",
		"Jóhannes",
		"Jokūbas",
		"Jón",
		"Jóna",
		"José",
		"Jörn",
		"Júlia",
		"Julião",
		"Jürgen",
		"Käte",
		"Katrín",
		"Kolbrún",
		"Kristín",
		"Kristján",
		"KŠthe",
		"Letícia",
		"Lídia",
		"Lúcia",
		"Maël",
		"Magnús",
		"Małgorzata",
		"Margrét",
		"María",
		"Mathéo",
		"Mátyás",
		"Michał",
		"Mónica",
		"Natália",
		"Noël",
		"Nuñez",
		"Ólafur",
		"Ólöf",
		"Óscar",
		"Øyvind",
		"Páll",
		"Patrícia",
		"Paweł",
		"Pétur",
		"Ragnheiður",
		"Ramón",
		"Raúl",
		"René",
		"Renée",
		"Ruairí",
		"Rubén",
		"Ružena",
		"Seán",
		"Sérgio",
		"Siân",
		"Sigríður",
		"Sigrún",
		"Sigurður",
		"Sílvia",
		"Sönke",
		"Sørina",
		"Stefán",
		"Tomáš",
		"Věra",
		"Virgínia",
		"Zoë",
		"Þóra",
		"Þorsteinn",
		"Þórunn"
	],
	withoutAccents: [
		"Abdul",
		"Abdullahi",
		"Abubakar",
		"Adam",
		"Adamu",
		"Adiy",
		"Agata",
		"Agnieszka",
		"Ahmad",
		"Aisha",
		"Ajay",
		"Akira",
		"Alan",
		"Alberto",
		"Alejandro",
		"Aleksander",
		"Aleksandr",
		"Aleksandra",
		"Aleksey",
		"Alex",
		"Alexander",
		"Alexey",
		"Ali",
		"Alina",
		"Aliyu",
		"Alyona",
		"Amina",
		"Aminu",
		"Amit",
		"Amiyr",
		"Amiyt",
		"Amnuai",
		"Amphon",
		"Ana",
		"Ana-Maria",
		"Anah",
		"Anan",
		"Anastasiya",
		"Andrea",
		"Andreas",
		"Andrew",
		"Andrey",
		"Andri",
		"Andries",
		"Andrzej",
		"Angel",
		"Anil",
		"Anita",
		"Ann",
		"Anna",
		"Anong",
		"Anthony",
		"Anton",
		"Antonia",
		"Antonio",
		"Arnar",
		"Artur",
		"Artyom",
		"Arun",
		"Asha",
		"Ashok",
		"Atli",
		"Avraham",
		"Barbara",
		"Bartosz",
		"Beata",
		"Bello",
		"Berglind",
		"Bernd",
		"Bin",
		"Birgir",
		"Birgit",
		"Birna",
		"Bjarni",
		"Blessing",
		"Bongani",
		"Brian",
		"Brigitte",
		"Bunmi",
		"Busisiwe",
		"Carlos",
		"Carmen",
		"Carol",
		"Caroline",
		"Catherine",
		"Chan",
		"Chanah",
		"Chao",
		"Charles",
		"Charoen",
		"Chayah",
		"Chen",
		"Cheng",
		"Christa",
		"Christian",
		"Christine",
		"Christopher",
		"Claire",
		"Claudia",
		"Colin",
		"Cristina",
		"Daniel",
		"Daniyel",
		"Dariusz",
		"Darya",
		"David",
		"Denis",
		"Dennis",
		"Diego",
		"Dieter",
		"Dilip",
		"Dinesh",
		"Dmitriy",
		"Dmitry",
		"Dolores",
		"Dorota",
		"Edda",
		"Einar",
		"Ekaterina",
		"Elena",
		"Elisabeth",
		"Eliyahu",
		"Elizabeth",
		"Elke",
		"Emiko",
		"Emma",
		"Emmanuel",
		"Erika",
		"Erla",
		"Erna",
		"Ester",
		"Esther",
		"Eunice",
		"Eva",
		"Evgeniy",
		"Ewa",
		"Faith",
		"Fatima",
		"Fiona",
		"Fernando",
		"Fran",
		"Francis",
		"Francisca",
		"Francisco",
		"Francisco-Javier",
		"Frank",
		"Franz",
		"Fumiko",
		"Galina",
		"Gang",
		"Garba",
		"Gareth",
		"Gary",
		"George",
		"Gerhard",
		"Gisela",
		"Gita",
		"Grace",
		"Graham",
		"Grzegorz",
		"Gunnar",
		"Guy",
		"Hadiza",
		"Haim",
		"Haiyan",
		"Hanna",
		"Hans",
		"Hans-Ulrich",
		"Haruna",
		"Hassan",
		"Hauwa",
		"Heike",
		"Heinz",
		"Helen",
		"Helga",
		"Helgi",
		"Helmut",
		"Hendrik",
		"Herbert",
		"Hideo",
		"Hildur",
		"Hiroko",
		"Hiromi",
		"Hiroshi",
		"Hisako",
		"Hong",
		"Horst",
		"Hui",
		"Hulda",
		"Ian",
		"Ibrahim",
		"Idris",
		"Igor",
		"Ilya",
		"Inga",
		"Ingrid",
		"Irina",
		"Isa",
		"Isaac",
		"Isabel",
		"Isah",
		"Ivan",
		"Iwona",
		"Jabulani",
		"Jacek",
		"Jackline",
		"Jacobus",
		"Jakub",
		"James",
		"Jan",
		"Jane",
		"Janet",
		"Janusz",
		"Javier",
		"Jean",
		"Jennifer",
		"Jerzy",
		"Jesus",
		"Jason",
		"Jianguo",
		"Jianhua",
		"Jianjun",
		"Jianping",
		"Jin",
		"Joan",
		"Joanna",
		"Johan",
		"Johanna",
		"Johannes",
		"John",
		"Jonathan",
		"Jorge",
		"Jose",
		"Jose-Antonio",
		"Jose-Luis",
		"Jose-Manuel",
		"Jose-Maria",
		"Josef",
		"Josefa",
		"Joseph",
		"Joy",
		"Joyce",
		"Juan",
		"Julie",
		"Justyna",
		"Kabiru",
		"Kai",
		"Kamil",
		"Kanchana",
		"Karen",
		"Karin",
		"Karl",
		"Karl-Heinz",
		"Karolina",
		"Kasia",
		"Katarzyna",
		"Katsumi",
		"Kazuo",
		"Keiko",
		"Kelvin",
		"Kenji",
		"Kenneth",
		"Kevin",
		"Kiran",
		"Kirill",
		"Kiyoko",
		"Kiyoshi",
		"Kjartan",
		"Klaus",
		"Ko",
		"Koichi",
		"Koji",
		"Konstantin",
		"Koshi",
		"Krishna",
		"Kristina",
		"Kristinn",
		"Krzysztof",
		"Kseniya",
		"Kun",
		"Lakshmi",
		"Lalita",
		"Lan",
		"Latda",
		"Laura",
		"Laxmi",
		"Leah",
		"Lei",
		"Li",
		"Lihua",
		"Lijun",
		"Lilian",
		"Lilja",
		"Lin",
		"Linda",
		"Lindiwe",
		"Ling",
		"Liping",
		"Lisa",
		"Liyor",
		"Lucia",
		"Lucy",
		"Luis",
		"Lukasz",
		"Lyubov",
		"Lyudmila",
		"Maciej",
		"Magda",
		"Magdalena",
		"Mahmood",
		"Maksim",
		"Mali",
		"Manfred",
		"Manju",
		"Manoj",
		"Manuel",
		"Marcin",
		"Mardkhay",
		"Marek",
		"Margaret",
		"Maria",
		"Maria-Isabel",
		"Maria-Jose",
		"Maria-Pilar",
		"Marina",
		"Mariusz",
		"Mariya",
		"Mark",
		"Marta",
		"Martha",
		"Martin",
		"Mary",
		"Maryam",
		"Masako",
		"Masami",
		"Masao",
		"Mateusz",
		"Matt",
		"Matthew",
		"Mei",
		"Meiyr",
		"Mercy",
		"Michael",
		"Michal",
		"Michiko",
		"Mieko",
		"Miguel",
		"Miguel-Angel",
		"Mikhail",
		"Min",
		"Mina",
		"Ming",
		"Miriam",
		"Mitsuo",
		"Miykhael",
		"Miykhal",
		"Miyoko",
		"Mo",
		"Mohamed",
		"Mohammad",
		"Mohammed",
		"Mohan",
		"Monika",
		"Moses",
		"Moshe",
		"Mpho",
		"Muhammad",
		"Muhammed",
		"Mukesh",
		"Musa",
		"Na",
		"Nadezhda",
		"Nan",
		"Nancy",
		"Narong",
		"Natalya",
		"Nathan",
		"Ngozi",
		"Nicola",
		"Nikita",
		"Nikolay",
		"Ning",
		"Nittaya",
		"Nkosinathi",
		"Noam",
		"Nobuko",
		"Nokuthula",
		"Nonhlanhla",
		"Noriko",
		"Nushi",
		"Oleg",
		"Olga",
		"Omer",
		"Otieno",
		"Pablo",
		"Patricia",
		"Patrick",
		"Paul",
		"Paula",
		"Paulina",
		"Pavel",
		"Pawel",
		"Pedro",
		"Peng",
		"Peter",
		"Petra",
		"Petrus",
		"Philip",
		"Phonthip",
		"Pieter",
		"Pilar",
		"Ping",
		"Piotr",
		"Prani",
		"Prasit",
		"Prasoet",
		"Pricha",
		"Purity",
		"Pushpa",
		"Qiang",
		"Qing",
		"Rachel",
		"Radha",
		"Rafael",
		"Ragnar",
		"Raj",
		"Rajendra",
		"Rajesh",
		"Raju",
		"Rakesh",
		"Ram",
		"Ramesh",
		"Raphael",
		"Rattana",
		"Ravi",
		"Rebecca",
		"Reiko",
		"Rekha",
		"Renate",
		"Richard",
		"Rita",
		"Robert",
		"Roman",
		"Rong",
		"Rosa",
		"Rose",
		"Roy",
		"Rut",
		"Ruth",
		"Ryan",
		"Ryoko",
		"Sabine",
		"Sachiko",
		"Salisu",
		"Saman",
		"Samran",
		"Samuel",
		"Sani",
		"Sanjay",
		"Santosh",
		"Sara",
		"Sarah",
		"Sam",
		"Sammy",
		"Sawat",
		"Sebastian",
		"Sergey",
		"Sergio",
		"Shankar",
		"Shanti",
		"Sharon",
		"Shay",
		"Shigeru",
		"Shimon",
		"Shizuko",
		"Shlomo",
		"Shoji",
		"Shoshanah",
		"Sibongile",
		"Sibusiso",
		"Simon",
		"Sipho",
		"Sita",
		"Sombat",
		"Sombun",
		"Somchai",
		"Somchit",
		"Somkhit",
		"Somkiat",
		"Sommai",
		"Somnuek",
		"Somphon",
		"Somphong",
		"Somsak",
		"Sri",
		"Stefan",
		"Steinunn",
		"Stephen",
		"Steve",
		"Steven",
		"Sukanya",
		"Suman",
		"Sunday",
		"Sunil",
		"Sunita",
		"Sunthon",
		"Suphaphon",
		"Suresh",
		"Susan",
		"Susanne",
		"Sushila",
		"Suwit",
		"Sveinn",
		"Svetlana",
		"Tadashi",
		"Takako",
		"Takashi",
		"Takeshi",
		"Tal",
		"Tamar",
		"Tatyana",
		"Tebogo",
		"Teruko",
		"Thabo",
		"Thawi",
		"Themba",
		"Thomas",
		"Thulani",
		"Tomasz",
		"Tomiko",
		"Toshiko",
		"Toshio",
		"Udom",
		"Umar",
		"Unnur",
		"Urai",
		"Uriy",
		"Urmila",
		"Ursula",
		"Usha",
		"Usman",
		"Uwe",
		"Valentina",
		"Victor",
		"Victoria",
		"Vijay",
		"Viktor",
		"Viktoriya",
		"Vincent",
		"Vinod",
		"Vladimir",
		"Walter",
		"Wanchai",
		"Wanjiru",
		"Wanphen",
		"Waraphon",
		"Watsana",
		"Wei",
		"Werner",
		"Wichai",
		"Wichian",
		"Wilai",
		"Willem",
		"William",
		"Winai",
		"Wirat",
		"Wirot",
		"Wojciech",
		"Wolfgang",
		"Xiang",
		"Xiaohong",
		"Xiaoli",
		"Xiaoping",
		"Xiaoyan",
		"Xin",
		"Xolani",
		"Yaakv",
		"Yael",
		"Yahaya",
		"Yakubu",
		"Yan",
		"Yasuko",
		"Yasuo",
		"Yelena",
		"Yhudah",
		"Yhudiyt",
		"Ying",
		"Yisrael",
		"Yoko",
		"Yong",
		"Yosef",
		"Yoshie",
		"Yoshiko",
		"Yoshimi",
		"Yoshio",
		"Yu",
		"Yue",
		"Yukio",
		"Yuko",
		"Yuliya",
		"Yun",
		"Yuriy",
		"Yusuf",
		"Yuval",
		"Zainab",
		"Zandile",
		"Zanele",
		"Zbigniew",
		"Zhen",
		"Zhiqiang"
	]
};

/**
 * Generate a random first name.
 *
 * @category person
 *
 * @example
 *
 * randFirstName()
 *
 * @example
 *
 * randFirstName({ withAccents: true })
 *
 * @example
 *
 * randFirstName({ length: 10 })
 *
 */

function randFirstName(options) {
  var _options$withAccents;

  const withAccents = (_options$withAccents = options == null ? void 0 : options.withAccents) != null ? _options$withAccents : randBoolean();
  const names = withAccents ? data$1f['withAccents'] : data$1f['withoutAccents'];
  return fake(names, options);
}

var data$1e = {
	withAccents: [
		"Æbelø",
		"Æbeltoft",
		"Ágústsdóttir",
		"Ágústsson",
		"Álvarez",
		"Árnadóttir",
		"Árnason",
		"Ásgeirsdóttir",
		"Ãshaikh",
		"Beneš",
		"Benešová",
		"Baldursdóttir",
		"Birgisdóttir",
		"Bjarnadóttir",
		"Björnsdóttir",
		"Björnsson",
		"Böttcher",
		"Černá",
		"Černý",
		"Chávez",
		"Ðekić",
		"Díaz",
		"Ðorðić",
		"Dvořák",
		"Dvořáková",
		"Einarsdóttir",
		"Fernández",
		"Fialová",
		"Förster",
		"Friðriksson",
		"Fröhlich",
		"García",
		"Gísladóttir",
		"Gíslason",
		"Göbel",
		"Gómez",
		"Groß",
		"Gunnarsdóttir",
		"Guðjónsdóttir",
		"Guðjónsson",
		"Guðmundsdóttir",
		"Guðmundsson",
		"Günther",
		"Halldórsdóttir",
		"Halldórsson",
		"Gutiérrez",
		"Guzmán",
		"Hájek",
		"Haraldsdóttir",
		"Harðardóttir",
		"Harðarson",
		"Helgadóttir",
		"Hernández",
		"Hauksdóttir",
		"Horák",
		"Horáková",
		"Jabłoński",
		"Jäger",
		"Jasiński",
		"Jiménez",
		"Jóhannesdóttir",
		"Jóhannesson",
		"Jóhannsdóttir",
		"Jóhannsson",
		"Jónasdóttir",
		"Jónasson",
		"Jónsdóttir",
		"Jónsson",
		"Kamiński",
		"Karlsdóttir",
		"Kjartansdóttir",
		"Köhler",
		"König",
		"Kozłowski",
		"Králová",
		"Krejčí",
		"Kristinsdóttir",
		"Kristjánsdóttir",
		"Kristjánsson",
		"Krüger",
		"Kučera",
		"Kučerová",
		"Łapiński",
		"Löffler",
		"López",
		"Łuczak",
		"Łukaszewski",
		"Magnúsdóttir",
		"Magnússon",
		"Marková",
		"Martínez",
		"Meißner",
		"Méndez",
		"Möller",
		"Müller",
		"Muñoz",
		"Novák",
		"Nováková",
		"Novotná",
		"Novotný",
		"Nuñez",
		"Núñez",
		"Ødegård",
		"Őhlschlägerová",
		"Ólafsdóttir",
		"Ólafsson",
		"Őllösová",
		"Olszewski",
		"Őri",
		"Őrségi-Zölderdő",
		"Óskarsdóttir",
		"Óskarsson",
		"Øvergård",
		"Őzse",
		"Pálsdóttir",
		"Pálsson",
		"Pawłowski",
		"Peña",
		"Pérez",
		"Pétursdóttir",
		"Pétursson",
		"Pokorná",
		"Pokorný",
		"Pospíšil",
		"Pospíšilová",
		"Procházka",
		"Procházková",
		"Ragnarsdóttir",
		"Ramírez",
		"Ríos",
		"Rodríguez",
		"Sánchez",
		"Schäfer",
		"Schröder",
		"Schütz",
		"Sigurðardóttir",
		"Sigurðsson",
		"Sigurjónsdóttir",
		"Sigurjónsson",
		"Sokołowski",
		"Stefánsdóttir",
		"Stefánsson",
		"Sveinsdóttir",
		"Svobodová",
		"Szczepański",
		"Szymański",
		"Urbański",
		"Ūsas",
		"Ūžien",
		"Vásquez",
		"Veselá",
		"Veselý",
		"Weiß",
		"Żak",
		"Žáková",
		"Zemanová",
		"Zieliński",
		"Žukauskas",
		"Žukauskienė",
		"Þórðardóttir",
		"Þórðarson",
		"Þorsteinsdóttir",
		"Þorsteinsson"
	],
	withoutAccents: [
		"Abdi",
		"Abdullahi",
		"Abe",
		"Abubakar",
		"Achieng",
		"Adamczyk",
		"Adamu",
		"Adan",
		"Adebayo",
		"Adhiambo",
		"Adri",
		"Agbaria",
		"Aguilar",
		"Ahmad",
		"Ahmed",
		"Akinyi",
		"Akpan",
		"Ali",
		"Aliev",
		"Aliyu",
		"Allen",
		"Alonso",
		"Alvarez",
		"Amadi",
		"Aminu",
		"Andreev",
		"Andreeva",
		"Ansari",
		"Anyango",
		"Aoki",
		"Arai",
		"Arnarson",
		"Ashknaziy",
		"Atieno",
		"Attias",
		"Audu",
		"Avraham",
		"Ayutthaya",
		"Azulay",
		"Baba",
		"Bai",
		"Bailey",
		"Baker",
		"Bakker",
		"Bala",
		"Baldursson",
		"Baloyi",
		"Baran",
		"Barasa",
		"Barman",
		"Bauer",
		"Becker",
		"Begam",
		"Begum",
		"Behera",
		"Bekher",
		"Bello",
		"Bennett",
		"Ber",
		"Bevan",
		"Bibi",
		"Birgisson",
		"Biswas",
		"Bitton",
		"Bjarnason",
		"Blanco",
		"Blom",
		"Borkowski",
		"Bos",
		"Botha",
		"Bowen",
		"Braun",
		"Brouwer",
		"Brown",
		"Bunma",
		"Bunmi",
		"Bunsi",
		"Buthelezi",
		"Cai",
		"Cano",
		"Cao",
		"Carter",
		"Castillo",
		"Castro",
		"Cele",
		"Ceng",
		"Chaichana",
		"Chand",
		"Chanthara",
		"Chauke",
		"Chebet",
		"Chen",
		"Cheng",
		"Chepkemoi",
		"Cherinsuk",
		"Cheruiyot",
		"Chided",
		"Chmielewski",
		"Chukwu",
		"Clark",
		"Clarke",
		"Coetzee",
		"Cohen",
		"Collins",
		"Cook",
		"Cooper",
		"Cortes",
		"Cruz",
		"Cui",
		"Czarnecki",
		"Dahan",
		"Dai",
		"Das",
		"Dauda",
		"David",
		"Davies",
		"Davis",
		"Dayan",
		"De-Bruijn",
		"De-Graaf",
		"De-Groot",
		"De-Jong",
		"Dekker",
		"Delgado",
		"Deng",
		"Devi",
		"Diaz",
		"Dijkstra",
		"Ding",
		"Dlamini",
		"Dominguez",
		"Dong",
		"Du-Plessis",
		"Dube",
		"Duda",
		"Dudek",
		"Dumont",
		"Edwards",
		"Egorov",
		"Egorova",
		"Einarsson",
		"Elbaz",
		"Eliyahu",
		"Ellis",
		"Emmanuel",
		"Endo",
		"Espinoza",
		"Esteban",
		"Evans",
		"Eze",
		"Fan",
		"Fang",
		"Feldman",
		"Feng",
		"Fernandez",
		"Fiala",
		"Fischer",
		"Flores",
		"Friedman",
		"Frolova",
		"Fu",
		"Fuchs",
		"Fujii",
		"Fujita",
		"Fukuda",
		"Gaby",
		"Gao",
		"Garba",
		"Garcia",
		"Garrido",
		"Garza",
		"Ghosh",
		"Gil",
		"Golan",
		"Goldstein",
		"Gomez",
		"Gonzales",
		"Gonzalez",
		"Goto",
		"Govender",
		"Grabowski",
		"Green",
		"Greenberg",
		"Griffiths",
		"Gu",
		"Guerrero",
		"Gumede",
		"Gunnarsson",
		"Guo",
		"Gupta",
		"Gutierrez",
		"Hahn",
		"Hall",
		"Han",
		"Haraldsson",
		"Harle",
		"Harle-Cowan",
		"Harris",
		"Harrison",
		"Hartmann",
		"Haruna",
		"Hasegawa",
		"Hashimoto",
		"Hasna",
		"Hassan",
		"Hauksson",
		"Hayashi",
		"He",
		"Helgason",
		"Hen",
		"Hendriks",
		"Herbulot",
		"Hernandez",
		"Herrera",
		"Herrmann",
		"Hill",
		"Hoekstra",
		"Hoffmann",
		"Hofmann",
		"Hongthong",
		"Hopkins",
		"Howells",
		"Hu",
		"Huang",
		"Huber",
		"Hughes",
		"Huisman",
		"Hussein",
		"Ibrahim",
		"Idris",
		"Iglesias",
		"Igwe",
		"Ikeda",
		"Inoue",
		"Isa",
		"Isaac",
		"Isah",
		"Ishii",
		"Ishikawa",
		"Ito",
		"Ivanov",
		"Ivanova",
		"Jabarin",
		"Jackson",
		"Jacobs",
		"Jadhav",
		"Jakubowski",
		"James",
		"Jankowski",
		"Jansen",
		"Janssen",
		"Jaworski",
		"Jenkins",
		"Jia",
		"Jiang",
		"Jimenez",
		"Jin",
		"John",
		"Johnson",
		"Jones",
		"Joseph",
		"Juma",
		"Jung",
		"Kaczmarek",
		"Kaiser",
		"Kamau",
		"Karanja",
		"Kariuki",
		"Karlsson",
		"Kato",
		"Katz",
		"Kaur",
		"Keller",
		"Khan",
		"Khatib",
		"Khatoon",
		"Khatun",
		"Khoury",
		"Khoza",
		"Khumalo",
		"Kibet",
		"Kikuchi",
		"Kim",
		"Kimani",
		"Kimura",
		"King",
		"Kjartansson",
		"Klein",
		"Kobayashi",
		"Koch",
		"Koech",
		"Kok",
		"Kondo",
		"Kongkaeo",
		"Koster",
		"Kovalenko",
		"Kowalczyk",
		"Kowalski",
		"Kozlov",
		"Kozlova",
		"Krause",
		"Krawczyk",
		"Kristinsson",
		"Kubiak",
		"Kucharski",
		"Kuipers",
		"Kumar",
		"Kumari",
		"Kuznetsov",
		"Kuznetsova",
		"Kwiatkowski",
		"Lal",
		"Lang",
		"Langat",
		"Lange",
		"Lavyan",
		"Lawal",
		"Lebedeva",
		"Lee",
		"Lehmann",
		"Levy",
		"Lewandowski",
		"Lewis",
		"Li",
		"Liang",
		"Liao",
		"Lim",
		"Lin",
		"Lis",
		"Liu",
		"Llewellyn",
		"Lloyd",
		"Lopez",
		"Lozano",
		"Lu",
		"Luo",
		"Ma",
		"Maas",
		"Mabaso",
		"Macharia",
		"Maciejewski",
		"Maeda",
		"Magomedov",
		"Mahagna",
		"Mahato",
		"Mahlangu",
		"Mahto",
		"Maier",
		"Maina",
		"Majewski",
		"Makarov",
		"Makarova",
		"Malinowski",
		"Malkah",
		"Maluleke",
		"Mandal",
		"Marciniak",
		"Marek",
		"Marin",
		"Martin",
		"Martinez",
		"Masarweh",
		"Maseko",
		"Mathebula",
		"Matsumoto",
		"Matthews",
		"Mayer",
		"Mazibuko",
		"Mazur",
		"Mazurek",
		"Mbatha",
		"Medina",
		"Meier",
		"Meijer",
		"Mendoza",
		"Meng",
		"Meyer",
		"Mhamid",
		"Mhlongo",
		"Michalak",
		"Michalski",
		"Mikhaylov",
		"Mikhaylova",
		"Mishra",
		"Mitchell",
		"Mizrahi",
		"Mkhize",
		"Mofokeng",
		"Mohamed",
		"Mohammed",
		"Mokoena",
		"Molefe",
		"Molina",
		"Mondal",
		"Moore",
		"Mor",
		"Morales",
		"Moreno",
		"Morgan",
		"Mori",
		"Morozov",
		"Morozova",
		"Morris",
		"Moshe",
		"Mthembu",
		"Mthethwa",
		"Mtshali",
		"Muhammad",
		"Muhammadu",
		"Muhammed",
		"Mulder",
		"Murakami",
		"Musa",
		"Mustapha",
		"Muthoni",
		"Mutua",
		"Mutuku",
		"Mwangi",
		"Naidoo",
		"Nakajima",
		"Nakamura",
		"Nakano",
		"Navarro",
		"Nayak",
		"Ndlovu",
		"Nel",
		"Neumann",
		"Ngcobo",
		"Ngobeni",
		"Ngubane",
		"Nguyen",
		"Ngwenya",
		"Nikitina",
		"Nikolaev",
		"Nikolaeva",
		"Njeri",
		"Njoroge",
		"Njuguna",
		"Nkosi",
		"Novikov",
		"Novikova",
		"Nowak",
		"Nowakowski",
		"Nowicki",
		"Ntuli",
		"Nxumalo",
		"Nyambura",
		"Oakley",
		"Ochieng",
		"Odhiambo",
		"Ogawa",
		"Ohana",
		"Ohayon",
		"Ojo",
		"Okada",
		"Okafor",
		"Okeke",
		"Okon",
		"Okoro",
		"Okoth",
		"Omar",
		"Omer",
		"Omondi",
		"Ono",
		"Onyango",
		"Ortega",
		"Ortiz",
		"Ostrowski",
		"Ota",
		"Otieno",
		"Ouma",
		"Owen",
		"Owino",
		"Pal",
		"Pan",
		"Panya",
		"Paramar",
		"Parker",
		"Parry",
		"Paswan",
		"Patel",
		"Patil",
		"Pavlov",
		"Pavlova",
		"Pawlak",
		"Peeters",
		"Peng",
		"Peretz",
		"Perez",
		"Peter",
		"Peters",
		"Petrov",
		"Petrova",
		"Pfeiffer",
		"Phillips",
		"Photsi",
		"Pietrzak",
		"Pillay",
		"Piotrowski",
		"Popov",
		"Popova",
		"Powell",
		"Prasad",
		"Pretorius",
		"Price",
		"Prieto",
		"Prins",
		"Pritchard",
		"Pugh",
		"Qiu",
		"Rabiu",
		"Radebe",
		"Ragnarsson",
		"Ram",
		"Ramirez",
		"Ramos",
		"Rani",
		"Rathod",
		"Ray",
		"Rees",
		"Ren",
		"Reuben",
		"Reyes",
		"Richards",
		"Richardson",
		"Richter",
		"Rivera",
		"Roberts",
		"Robinson",
		"Rodriguez",
		"Rogers",
		"Romanov",
		"Romanova",
		"Romero",
		"Rosenberg",
		"Rotich",
		"Rowlands",
		"Roy",
		"Rubio",
		"Ruiz",
		"Rungrueang",
		"Rumbelow",
		"Rutkowski",
		"Sadowski",
		"Saeli",
		"Saelim",
		"Saengthong",
		"Saetan",
		"Saetang",
		"Saeueng",
		"Sah",
		"Saha",
		"Sahu",
		"Saidu",
		"Saito",
		"Sakai",
		"Sakamoto",
		"Salazar",
		"Salisu",
		"Samuel",
		"Sanchez",
		"Sangthong",
		"Sani",
		"Santiago",
		"Santos",
		"Sanz",
		"Sarkar",
		"Sasaki",
		"Sato",
		"Sawicki",
		"Schmid",
		"Schmidt",
		"Schmitt",
		"Schmitz",
		"Schneider",
		"Scholz",
		"Schouten",
		"Schulz",
		"Schulze",
		"Schwartz",
		"Schwarz",
		"Scott",
		"Segel",
		"Sekh",
		"Sergeeva",
		"Serrano",
		"Shaikh",
		"Shalom",
		"Shapiro",
		"Sharabi",
		"Sharma",
		"Shaw",
		"Shehu",
		"Shemesh",
		"Shevchenko",
		"Shi",
		"Shimizu",
		"Sibiya",
		"Sichantha",
		"Sikora",
		"Simiyu",
		"Singh",
		"Sisuk",
		"Sithole",
		"Sitwat",
		"Smee",
		"Smirnov",
		"Smirnova",
		"Smit",
		"Smith",
		"Smits",
		"Sokolov",
		"Sokolova",
		"Sombun",
		"Song",
		"Soto",
		"Smoakley",
		"Starr",
		"Stepanov",
		"Stepanova",
		"Su",
		"Suad",
		"Suarez",
		"Suissa",
		"Sukkasem",
		"Sulaiman",
		"Suleiman",
		"Sun",
		"Sunday",
		"Suwan",
		"Suzuki",
		"Sveinsson",
		"Svoboda",
		"Szewczyk",
		"Takahashi",
		"Takeuchi",
		"Tal",
		"Tan",
		"Tanaka",
		"Tang",
		"Taylor",
		"Thakur",
		"Thomas",
		"Thompson",
		"Thongdi",
		"Thongkham",
		"Thongsuk",
		"Tian",
		"Tomaszewski",
		"Torres",
		"Tshabalala",
		"Turner",
		"Udo",
		"Ueda",
		"Umar",
		"Umaru",
		"Usman",
		"Vaknin",
		"Valdez",
		"Van-Beek",
		"Van-Dam",
		"Van-den-Berg",
		"Van-der-Heijden",
		"Van-der-Linden",
		"Van-Dijk",
		"Vargas",
		"Vasilev",
		"Vasileva",
		"Vazquez",
		"Vega",
		"Venter",
		"Verhoeven",
		"Vermeulen",
		"Visser",
		"Volkov",
		"Volkova",
		"Vos",
		"Wafula",
		"Wagner",
		"Wairimu",
		"Walczak",
		"Walker",
		"Walter",
		"Walters",
		"Wambua",
		"Wambui",
		"Wang",
		"Wangui",
		"Wanjala",
		"Wanjiku",
		"Ward",
		"Watanabe",
		"Watkins",
		"Watson",
		"Weber",
		"Wei",
		"Wekesa",
		"Wen",
		"Werner",
		"White",
		"Wieczorek",
		"Wilk",
		"Willems",
		"Williams",
		"Wilson",
		"Witkowski",
		"Wojciechowski",
		"Wolf",
		"Wood",
		"Wright",
		"Wu",
		"Xiao",
		"Xie",
		"Xu",
		"Yaakv",
		"Yadav",
		"Yahaya",
		"Yakovleva",
		"Yakubu",
		"Yamada",
		"Yamaguchi",
		"Yamamoto",
		"Yamashita",
		"Yamazaki",
		"Yan",
		"Yang",
		"Yao",
		"Ye",
		"Yin",
		"Yosef",
		"Yoshida",
		"Young",
		"Yu",
		"Yuan",
		"Yusuf",
		"Zając",
		"Zakharov",
		"Zakharova",
		"Zalewski",
		"Zawadzki",
		"Zaytseva",
		"Zhang",
		"Zhao",
		"Zheng",
		"Zhong",
		"Zhou",
		"Zhu",
		"Zimmermann",
		"Zoabi",
		"Zulu",
		"Zwane"
	]
};

/**
 * Generate a random last name.
 *
 * @category person
 *
 * @example
 *
 * randLastName()
 *
 * @example
 *
 * randLastName({ withAccents: false })
 *
 * @example
 *
 * randLastName({ length: 10 })
 *
 */

function randLastName(options) {
  var _options$withAccents;

  const withAccents = (_options$withAccents = options == null ? void 0 : options.withAccents) != null ? _options$withAccents : randBoolean();
  const names = withAccents ? data$1e['withAccents'] : data$1e['withoutAccents'];
  return fake(names, options);
}

function randFormattedName(options) {
  var _options$firstName, _options$lastName;

  let separator = '';
  const firstName = (_options$firstName = options == null ? void 0 : options.firstName) != null ? _options$firstName : randFirstName({
    withAccents: false
  });
  const lastName = (_options$lastName = options == null ? void 0 : options.lastName) != null ? _options$lastName : randLastName({
    withAccents: false
  });

  if (!(options != null && options.nameSeparator)) {
    separator = fake(['.', '-', '_', '+', '']);
  } else if (options.nameSeparator !== 'none') {
    separator = options.nameSeparator;
  }

  let name = `${firstName} ${lastName}`.replace(' ', separator);

  if (randBoolean()) {
    name += randNumber({
      min: 1,
      max: 1000
    });
  }

  return name.toLowerCase();
}
/**
 * Generate a random email.
 *
 * @category Person, User
 *
 * @example
 *
 * randEmail()
 *
 * @example
 *
 * randEmail({ length: 10 })
 *
 * @example
 *
 * randEmail({ firstName: 'Netanel' })
 *
 * @example
 *
 * randEmail({ lastName: 'Basal' })
 *
 * @example
 *
 * randEmail({ nameSeparator: '.' })
 *
 * @example
 *
 * randEmail({ provider: 'gmail' })
 *
 * @example
 *
 * randEmail({ suffix: 'com' })
 *
 *
 */


function randEmail(options) {
  const factory = () => {
    const emailProvider = (options == null ? void 0 : options.provider) || randEmailProvider();
    const formattedName = randFormattedName(options);
    const emailSuffix = (options == null ? void 0 : options.suffix) || randDomainSuffix();
    return `${formattedName}@${emailProvider}.${emailSuffix}`;
  };

  return fake(factory, options);
}

var data$1d = [
	"😀",
	"😃",
	"😄",
	"😁",
	"😆",
	"😅",
	"🤣",
	"😂",
	"🙂",
	"🙃",
	"😉",
	"😊",
	"😇",
	"🥰",
	"😍",
	"🤩",
	"😘",
	"😗",
	"☺️",
	"😚",
	"😙",
	"🥲",
	"😋",
	"😛",
	"😜",
	"🤪",
	"😝",
	"🤑",
	"🤗",
	"🤭",
	"🤫",
	"🤔",
	"🤐",
	"🤨",
	"😐",
	"😑",
	"😶",
	"😶‍🌫️",
	"😏",
	"😒",
	"🙄",
	"😬",
	"😮‍💨",
	"🤥",
	"😌",
	"😔",
	"😪",
	"🤤",
	"😴",
	"😷",
	"🤒",
	"🤕",
	"🤢",
	"🤮",
	"🤧",
	"🥵",
	"🥶",
	"🥴",
	"😵",
	"😵‍💫",
	"🤯",
	"🤠",
	"🥳",
	"🥸",
	"😎",
	"🤓",
	"🧐",
	"😕",
	"😟",
	"🙁",
	"☹️",
	"😮",
	"😯",
	"😲",
	"😳",
	"🥺",
	"😦",
	"😧",
	"😨",
	"😰",
	"😥",
	"😢",
	"😭",
	"😱",
	"😖",
	"😣",
	"😞",
	"😓",
	"😩",
	"😫",
	"🥱",
	"😤",
	"😡",
	"😠",
	"🤬",
	"😈",
	"👿",
	"💀",
	"☠️",
	"💩",
	"🤡",
	"👹",
	"👺",
	"👻",
	"👽",
	"👾",
	"🤖",
	"😺",
	"😸",
	"😹",
	"😻",
	"😼",
	"😽",
	"🙀",
	"😿",
	"😾",
	"🙈",
	"🙉",
	"🙊",
	"💋",
	"💌",
	"💘",
	"💝",
	"💖",
	"💗",
	"💓",
	"💞",
	"💕",
	"💟",
	"❣️",
	"💔",
	"❤️‍🔥",
	"❤️‍🩹",
	"❤️",
	"🧡",
	"💛",
	"💚",
	"💙",
	"💜",
	"🤎",
	"🖤",
	"🤍",
	"💯",
	"💢",
	"💥",
	"💫",
	"💦",
	"💨",
	"🕳️",
	"💣",
	"💬",
	"👁️‍🗨️",
	"🗨️",
	"🗯️",
	"💭",
	"💤",
	"👋",
	"🤚",
	"🖐️",
	"✋",
	"🖖",
	"👌",
	"🤌",
	"🤏",
	"✌️",
	"🤞",
	"🤟",
	"🤘",
	"🤙",
	"👈",
	"👉",
	"👆",
	"🖕",
	"👇",
	"☝️",
	"👍",
	"👎",
	"✊",
	"👊",
	"🤛",
	"🤜",
	"👏",
	"🙌",
	"👐",
	"🤲",
	"🤝",
	"🙏",
	"✍️",
	"💅",
	"🤳",
	"💪",
	"🦾",
	"🦿",
	"🦵",
	"🦶",
	"👂",
	"🦻",
	"👃",
	"🧠",
	"🫀",
	"🫁",
	"🦷",
	"🦴",
	"👀",
	"👁️",
	"👅",
	"👄",
	"👶",
	"🧒",
	"👦",
	"👧",
	"🧑",
	"👱",
	"👨",
	"🧔",
	"🧔‍♂️",
	"🧔‍♀️",
	"👨‍🦰",
	"👨‍🦱",
	"👨‍🦳",
	"👨‍🦲",
	"👩",
	"👩‍🦰",
	"🧑‍🦰",
	"👩‍🦱",
	"🧑‍🦱",
	"👩‍🦳",
	"🧑‍🦳",
	"👩‍🦲",
	"🧑‍🦲",
	"👱‍♀️",
	"👱‍♂️",
	"🧓",
	"👴",
	"👵",
	"🙍",
	"🙍‍♂️",
	"🙍‍♀️",
	"🙎",
	"🙎‍♂️",
	"🙎‍♀️",
	"🙅",
	"🙅‍♂️",
	"🙅‍♀️",
	"🙆",
	"🙆‍♂️",
	"🙆‍♀️",
	"💁",
	"💁‍♂️",
	"💁‍♀️",
	"🙋",
	"🙋‍♂️",
	"🙋‍♀️",
	"🧏",
	"🧏‍♂️",
	"🧏‍♀️",
	"🙇",
	"🙇‍♂️",
	"🙇‍♀️",
	"🤦",
	"🤦‍♂️",
	"🤦‍♀️",
	"🤷",
	"🤷‍♂️",
	"🤷‍♀️",
	"🧑‍⚕️",
	"👨‍⚕️",
	"👩‍⚕️",
	"🧑‍🎓",
	"👨‍🎓",
	"👩‍🎓",
	"🧑‍🏫",
	"👨‍🏫",
	"👩‍🏫",
	"🧑‍⚖️",
	"👨‍⚖️",
	"👩‍⚖️",
	"🧑‍🌾",
	"👨‍🌾",
	"👩‍🌾",
	"🧑‍🍳",
	"👨‍🍳",
	"👩‍🍳",
	"🧑‍🔧",
	"👨‍🔧",
	"👩‍🔧",
	"🧑‍🏭",
	"👨‍🏭",
	"👩‍🏭",
	"🧑‍💼",
	"👨‍💼",
	"👩‍💼",
	"🧑‍🔬",
	"👨‍🔬",
	"👩‍🔬",
	"🧑‍💻",
	"👨‍💻",
	"👩‍💻",
	"🧑‍🎤",
	"👨‍🎤",
	"👩‍🎤",
	"🧑‍🎨",
	"👨‍🎨",
	"👩‍🎨",
	"🧑‍✈️",
	"👨‍✈️",
	"👩‍✈️",
	"🧑‍🚀",
	"👨‍🚀",
	"👩‍🚀",
	"🧑‍🚒",
	"👨‍🚒",
	"👩‍🚒",
	"👮",
	"👮‍♂️",
	"👮‍♀️",
	"🕵️",
	"🕵️‍♂️",
	"🕵️‍♀️",
	"💂",
	"💂‍♂️",
	"💂‍♀️",
	"🥷",
	"👷",
	"👷‍♂️",
	"👷‍♀️",
	"🤴",
	"👸",
	"👳",
	"👳‍♂️",
	"👳‍♀️",
	"👲",
	"🧕",
	"🤵",
	"🤵‍♂️",
	"🤵‍♀️",
	"👰",
	"👰‍♂️",
	"👰‍♀️",
	"🤰",
	"🤱",
	"👩‍🍼",
	"👨‍🍼",
	"🧑‍🍼",
	"👼",
	"🎅",
	"🤶",
	"🧑‍🎄",
	"🦸",
	"🦸‍♂️",
	"🦸‍♀️",
	"🦹",
	"🦹‍♂️",
	"🦹‍♀️",
	"🧙",
	"🧙‍♂️",
	"🧙‍♀️",
	"🧚",
	"🧚‍♂️",
	"🧚‍♀️",
	"🧛",
	"🧛‍♂️",
	"🧛‍♀️",
	"🧜",
	"🧜‍♂️",
	"🧜‍♀️",
	"🧝",
	"🧝‍♂️",
	"🧝‍♀️",
	"🧞",
	"🧞‍♂️",
	"🧞‍♀️",
	"🧟",
	"🧟‍♂️",
	"🧟‍♀️",
	"💆",
	"💆‍♂️",
	"💆‍♀️",
	"💇",
	"💇‍♂️",
	"💇‍♀️",
	"🚶",
	"🚶‍♂️",
	"🚶‍♀️",
	"🧍",
	"🧍‍♂️",
	"🧍‍♀️",
	"🧎",
	"🧎‍♂️",
	"🧎‍♀️",
	"🧑‍🦯",
	"👨‍🦯",
	"👩‍🦯",
	"🧑‍🦼",
	"👨‍🦼",
	"👩‍🦼",
	"🧑‍🦽",
	"👨‍🦽",
	"👩‍🦽",
	"🏃",
	"🏃‍♂️",
	"🏃‍♀️",
	"💃",
	"🕺",
	"🕴️",
	"👯",
	"👯‍♂️",
	"👯‍♀️",
	"🧖",
	"🧖‍♂️",
	"🧖‍♀️",
	"🧗",
	"🧗‍♂️",
	"🧗‍♀️",
	"🤺",
	"🏇",
	"⛷️",
	"🏂",
	"🏌️",
	"🏌️‍♂️",
	"🏌️‍♀️",
	"🏄",
	"🏄‍♂️",
	"🏄‍♀️",
	"🚣",
	"🚣‍♂️",
	"🚣‍♀️",
	"🏊",
	"🏊‍♂️",
	"🏊‍♀️",
	"⛹️",
	"⛹️‍♂️",
	"⛹️‍♀️",
	"🏋️",
	"🏋️‍♂️",
	"🏋️‍♀️",
	"🚴",
	"🚴‍♂️",
	"🚴‍♀️",
	"🚵",
	"🚵‍♂️",
	"🚵‍♀️",
	"🤸",
	"🤸‍♂️",
	"🤸‍♀️",
	"🤼",
	"🤼‍♂️",
	"🤼‍♀️",
	"🤽",
	"🤽‍♂️",
	"🤽‍♀️",
	"🤾",
	"🤾‍♂️",
	"🤾‍♀️",
	"🤹",
	"🤹‍♂️",
	"🤹‍♀️",
	"🧘",
	"🧘‍♂️",
	"🧘‍♀️",
	"🛀",
	"🛌",
	"🧑‍🤝‍🧑",
	"👭",
	"👫",
	"👬",
	"💏",
	"👩‍❤️‍💋‍👨",
	"👨‍❤️‍💋‍👨",
	"👩‍❤️‍💋‍👩",
	"💑",
	"👩‍❤️‍👨",
	"👨‍❤️‍👨",
	"👩‍❤️‍👩",
	"👪",
	"👨‍👩‍👦",
	"👨‍👩‍👧",
	"👨‍👩‍👧‍👦",
	"👨‍👩‍👦‍👦",
	"👨‍👩‍👧‍👧",
	"👨‍👨‍👦",
	"👨‍👨‍👧",
	"👨‍👨‍👧‍👦",
	"👨‍👨‍👦‍👦",
	"👨‍👨‍👧‍👧",
	"👩‍👩‍👦",
	"👩‍👩‍👧",
	"👩‍👩‍👧‍👦",
	"👩‍👩‍👦‍👦",
	"👩‍👩‍👧‍👧",
	"👨‍👦",
	"👨‍👦‍👦",
	"👨‍👧",
	"👨‍👧‍👦",
	"👨‍👧‍👧",
	"👩‍👦",
	"👩‍👦‍👦",
	"👩‍👧",
	"👩‍👧‍👦",
	"👩‍👧‍👧",
	"🗣️",
	"👤",
	"👥",
	"🫂",
	"👣",
	"🐵",
	"🐒",
	"🦍",
	"🦧",
	"🐶",
	"🐕",
	"🦮",
	"🐕‍🦺",
	"🐩",
	"🐺",
	"🦊",
	"🦝",
	"🐱",
	"🐈",
	"🐈‍⬛",
	"🦁",
	"🐯",
	"🐅",
	"🐆",
	"🐴",
	"🐎",
	"🦄",
	"🦓",
	"🦌",
	"🦬",
	"🐮",
	"🐂",
	"🐃",
	"🐄",
	"🐷",
	"🐖",
	"🐗",
	"🐽",
	"🐏",
	"🐑",
	"🐐",
	"🐪",
	"🐫",
	"🦙",
	"🦒",
	"🐘",
	"🦣",
	"🦏",
	"🦛",
	"🐭",
	"🐁",
	"🐀",
	"🐹",
	"🐰",
	"🐇",
	"🐿️",
	"🦫",
	"🦔",
	"🦇",
	"🐻",
	"🐻‍❄️",
	"🐨",
	"🐼",
	"🦥",
	"🦦",
	"🦨",
	"🦘",
	"🦡",
	"🐾",
	"🦃",
	"🐔",
	"🐓",
	"🐣",
	"🐤",
	"🐥",
	"🐦",
	"🐧",
	"🕊️",
	"🦅",
	"🦆",
	"🦢",
	"🦉",
	"🦤",
	"🪶",
	"🦩",
	"🦚",
	"🦜",
	"🐸",
	"🐊",
	"🐢",
	"🦎",
	"🐍",
	"🐲",
	"🐉",
	"🦕",
	"🦖",
	"🐳",
	"🐋",
	"🐬",
	"🦭",
	"🐟",
	"🐠",
	"🐡",
	"🦈",
	"🐙",
	"🐚",
	"🐌",
	"🦋",
	"🐛",
	"🐜",
	"🐝",
	"🪲",
	"🐞",
	"🦗",
	"🪳",
	"🕷️",
	"🕸️",
	"🦂",
	"🦟",
	"🪰",
	"🪱",
	"🦠",
	"💐",
	"🌸",
	"💮",
	"🏵️",
	"🌹",
	"🥀",
	"🌺",
	"🌻",
	"🌼",
	"🌷",
	"🌱",
	"🪴",
	"🌲",
	"🌳",
	"🌴",
	"🌵",
	"🌾",
	"🌿",
	"☘️",
	"🍀",
	"🍁",
	"🍂",
	"🍃",
	"🍇",
	"🍈",
	"🍉",
	"🍊",
	"🍋",
	"🍌",
	"🍍",
	"🥭",
	"🍎",
	"🍏",
	"🍐",
	"🍑",
	"🍒",
	"🍓",
	"🫐",
	"🥝",
	"🍅",
	"🫒",
	"🥥",
	"🥑",
	"🍆",
	"🥔",
	"🥕",
	"🌽",
	"🌶️",
	"🫑",
	"🥒",
	"🥬",
	"🥦",
	"🧄",
	"🧅",
	"🍄",
	"🥜",
	"🌰",
	"🍞",
	"🥐",
	"🥖",
	"🫓",
	"🥨",
	"🥯",
	"🥞",
	"🧇",
	"🧀",
	"🍖",
	"🍗",
	"🥩",
	"🥓",
	"🍔",
	"🍟",
	"🍕",
	"🌭",
	"🥪",
	"🌮",
	"🌯",
	"🫔",
	"🥙",
	"🧆",
	"🥚",
	"🍳",
	"🥘",
	"🍲",
	"🫕",
	"🥣",
	"🥗",
	"🍿",
	"🧈",
	"🧂",
	"🥫",
	"🍱",
	"🍘",
	"🍙",
	"🍚",
	"🍛",
	"🍜",
	"🍝",
	"🍠",
	"🍢",
	"🍣",
	"🍤",
	"🍥",
	"🥮",
	"🍡",
	"🥟",
	"🥠",
	"🥡",
	"🦀",
	"🦞",
	"🦐",
	"🦑",
	"🦪",
	"🍦",
	"🍧",
	"🍨",
	"🍩",
	"🍪",
	"🎂",
	"🍰",
	"🧁",
	"🥧",
	"🍫",
	"🍬",
	"🍭",
	"🍮",
	"🍯",
	"🍼",
	"🥛",
	"☕",
	"🫖",
	"🍵",
	"🍶",
	"🍾",
	"🍷",
	"🍸",
	"🍹",
	"🍺",
	"🍻",
	"🥂",
	"🥃",
	"🥤",
	"🧋",
	"🧃",
	"🧉",
	"🧊",
	"🥢",
	"🍽️",
	"🍴",
	"🥄",
	"🔪",
	"🏺",
	"🌍",
	"🌎",
	"🌏",
	"🌐",
	"🗺️",
	"🗾",
	"🧭",
	"🏔️",
	"⛰️",
	"🌋",
	"🗻",
	"🏕️",
	"🏖️",
	"🏜️",
	"🏝️",
	"🏞️",
	"🏟️",
	"🏛️",
	"🏗️",
	"🧱",
	"🪨",
	"🪵",
	"🛖",
	"🏘️",
	"🏚️",
	"🏠",
	"🏡",
	"🏢",
	"🏣",
	"🏤",
	"🏥",
	"🏦",
	"🏨",
	"🏩",
	"🏪",
	"🏫",
	"🏬",
	"🏭",
	"🏯",
	"🏰",
	"💒",
	"🗼",
	"🗽",
	"⛪",
	"🕌",
	"🛕",
	"🕍",
	"⛩️",
	"🕋",
	"⛲",
	"⛺",
	"🌁",
	"🌃",
	"🏙️",
	"🌄",
	"🌅",
	"🌆",
	"🌇",
	"🌉",
	"♨️",
	"🎠",
	"🎡",
	"🎢",
	"💈",
	"🎪",
	"🚂",
	"🚃",
	"🚄",
	"🚅",
	"🚆",
	"🚇",
	"🚈",
	"🚉",
	"🚊",
	"🚝",
	"🚞",
	"🚋",
	"🚌",
	"🚍",
	"🚎",
	"🚐",
	"🚑",
	"🚒",
	"🚓",
	"🚔",
	"🚕",
	"🚖",
	"🚗",
	"🚘",
	"🚙",
	"🛻",
	"🚚",
	"🚛",
	"🚜",
	"🏎️",
	"🏍️",
	"🛵",
	"🦽",
	"🦼",
	"🛺",
	"🚲",
	"🛴",
	"🛹",
	"🛼",
	"🚏",
	"🛣️",
	"🛤️",
	"🛢️",
	"⛽",
	"🚨",
	"🚥",
	"🚦",
	"🛑",
	"🚧",
	"⚓",
	"⛵",
	"🛶",
	"🚤",
	"🛳️",
	"⛴️",
	"🛥️",
	"🚢",
	"✈️",
	"🛩️",
	"🛫",
	"🛬",
	"🪂",
	"💺",
	"🚁",
	"🚟",
	"🚠",
	"🚡",
	"🛰️",
	"🚀",
	"🛸",
	"🛎️",
	"🧳",
	"⌛",
	"⏳",
	"⌚",
	"⏰",
	"⏱️",
	"⏲️",
	"🕰️",
	"🕛",
	"🕧",
	"🕐",
	"🕜",
	"🕑",
	"🕝",
	"🕒",
	"🕞",
	"🕓",
	"🕟",
	"🕔",
	"🕠",
	"🕕",
	"🕡",
	"🕖",
	"🕢",
	"🕗",
	"🕣",
	"🕘",
	"🕤",
	"🕙",
	"🕥",
	"🕚",
	"🕦",
	"🌑",
	"🌒",
	"🌓",
	"🌔",
	"🌕",
	"🌖",
	"🌗",
	"🌘",
	"🌙",
	"🌚",
	"🌛",
	"🌜",
	"🌡️",
	"☀️",
	"🌝",
	"🌞",
	"🪐",
	"⭐",
	"🌟",
	"🌠",
	"🌌",
	"☁️",
	"⛅",
	"⛈️",
	"🌤️",
	"🌥️",
	"🌦️",
	"🌧️",
	"🌨️",
	"🌩️",
	"🌪️",
	"🌫️",
	"🌬️",
	"🌀",
	"🌈",
	"🌂",
	"☂️",
	"☔",
	"⛱️",
	"⚡",
	"❄️",
	"☃️",
	"⛄",
	"☄️",
	"🔥",
	"💧",
	"🌊",
	"🎃",
	"🎄",
	"🎆",
	"🎇",
	"🧨",
	"✨",
	"🎈",
	"🎉",
	"🎊",
	"🎋",
	"🎍",
	"🎎",
	"🎏",
	"🎐",
	"🎑",
	"🧧",
	"🎀",
	"🎁",
	"🎗️",
	"🎟️",
	"🎫",
	"🎖️",
	"🏆",
	"🏅",
	"🥇",
	"🥈",
	"🥉",
	"⚽",
	"⚾",
	"🥎",
	"🏀",
	"🏐",
	"🏈",
	"🏉",
	"🎾",
	"🥏",
	"🎳",
	"🏏",
	"🏑",
	"🏒",
	"🥍",
	"🏓",
	"🏸",
	"🥊",
	"🥋",
	"🥅",
	"⛳",
	"⛸️",
	"🎣",
	"🤿",
	"🎽",
	"🎿",
	"🛷",
	"🥌",
	"🎯",
	"🪀",
	"🪁",
	"🎱",
	"🔮",
	"🪄",
	"🧿",
	"🎮",
	"🕹️",
	"🎰",
	"🎲",
	"🧩",
	"🧸",
	"🪅",
	"🪆",
	"♠️",
	"♥️",
	"♦️",
	"♣️",
	"♟️",
	"🃏",
	"🀄",
	"🎴",
	"🎭",
	"🖼️",
	"🎨",
	"🧵",
	"🪡",
	"🧶",
	"🪢",
	"👓",
	"🕶️",
	"🥽",
	"🥼",
	"🦺",
	"👔",
	"👕",
	"👖",
	"🧣",
	"🧤",
	"🧥",
	"🧦",
	"👗",
	"👘",
	"🥻",
	"🩱",
	"🩲",
	"🩳",
	"👙",
	"👚",
	"👛",
	"👜",
	"👝",
	"🛍️",
	"🎒",
	"🩴",
	"👞",
	"👟",
	"🥾",
	"🥿",
	"👠",
	"👡",
	"🩰",
	"👢",
	"👑",
	"👒",
	"🎩",
	"🎓",
	"🧢",
	"🪖",
	"⛑️",
	"📿",
	"💄",
	"💍",
	"💎",
	"🔇",
	"🔈",
	"🔉",
	"🔊",
	"📢",
	"📣",
	"📯",
	"🔔",
	"🔕",
	"🎼",
	"🎵",
	"🎶",
	"🎙️",
	"🎚️",
	"🎛️",
	"🎤",
	"🎧",
	"📻",
	"🎷",
	"🪗",
	"🎸",
	"🎹",
	"🎺",
	"🎻",
	"🪕",
	"🥁",
	"🪘",
	"📱",
	"📲",
	"☎️",
	"📞",
	"📟",
	"📠",
	"🔋",
	"🔌",
	"💻",
	"🖥️",
	"🖨️",
	"⌨️",
	"🖱️",
	"🖲️",
	"💽",
	"💾",
	"💿",
	"📀",
	"🧮",
	"🎥",
	"🎞️",
	"📽️",
	"🎬",
	"📺",
	"📷",
	"📸",
	"📹",
	"📼",
	"🔍",
	"🔎",
	"🕯️",
	"💡",
	"🔦",
	"🏮",
	"🪔",
	"📔",
	"📕",
	"📖",
	"📗",
	"📘",
	"📙",
	"📚",
	"📓",
	"📒",
	"📃",
	"📜",
	"📄",
	"📰",
	"🗞️",
	"📑",
	"🔖",
	"🏷️",
	"💰",
	"🪙",
	"💴",
	"💵",
	"💶",
	"💷",
	"💸",
	"💳",
	"🧾",
	"💹",
	"✉️",
	"📧",
	"📨",
	"📩",
	"📤",
	"📥",
	"📦",
	"📫",
	"📪",
	"📬",
	"📭",
	"📮",
	"🗳️",
	"✏️",
	"✒️",
	"🖋️",
	"🖊️",
	"🖌️",
	"🖍️",
	"📝",
	"💼",
	"📁",
	"📂",
	"🗂️",
	"📅",
	"📆",
	"🗒️",
	"🗓️",
	"📇",
	"📈",
	"📉",
	"📊",
	"📋",
	"📌",
	"📍",
	"📎",
	"🖇️",
	"📏",
	"📐",
	"✂️",
	"🗃️",
	"🗄️",
	"🗑️",
	"🔒",
	"🔓",
	"🔏",
	"🔐",
	"🔑",
	"🗝️",
	"🔨",
	"🪓",
	"⛏️",
	"⚒️",
	"🛠️",
	"🗡️",
	"⚔️",
	"🔫",
	"🪃",
	"🏹",
	"🛡️",
	"🪚",
	"🔧",
	"🪛",
	"🔩",
	"⚙️",
	"🗜️",
	"⚖️",
	"🦯",
	"🔗",
	"⛓️",
	"🪝",
	"🧰",
	"🧲",
	"🪜",
	"⚗️",
	"🧪",
	"🧫",
	"🧬",
	"🔬",
	"🔭",
	"📡",
	"💉",
	"🩸",
	"💊",
	"🩹",
	"🩺",
	"🚪",
	"🛗",
	"🪞",
	"🪟",
	"🛏️",
	"🛋️",
	"🪑",
	"🚽",
	"🪠",
	"🚿",
	"🛁",
	"🪤",
	"🪒",
	"🧴",
	"🧷",
	"🧹",
	"🧺",
	"🧻",
	"🪣",
	"🧼",
	"🪥",
	"🧽",
	"🧯",
	"🛒",
	"🚬",
	"⚰️",
	"🪦",
	"⚱️",
	"🗿",
	"🪧",
	"🏧",
	"🚮",
	"🚰",
	"♿",
	"🚹",
	"🚺",
	"🚻",
	"🚼",
	"🚾",
	"🛂",
	"🛃",
	"🛄",
	"🛅",
	"⚠️",
	"🚸",
	"⛔",
	"🚫",
	"🚳",
	"🚭",
	"🚯",
	"🚱",
	"🚷",
	"📵",
	"🔞",
	"☢️",
	"☣️",
	"⬆️",
	"↗️",
	"➡️",
	"↘️",
	"⬇️",
	"↙️",
	"⬅️",
	"↖️",
	"↕️",
	"↔️",
	"↩️",
	"↪️",
	"⤴️",
	"⤵️",
	"🔃",
	"🔄",
	"🔙",
	"🔚",
	"🔛",
	"🔜",
	"🔝",
	"🛐",
	"⚛️",
	"🕉️",
	"✡️",
	"☸️",
	"☯️",
	"✝️",
	"☦️",
	"☪️",
	"☮️",
	"🕎",
	"🔯",
	"♈",
	"♉",
	"♊",
	"♋",
	"♌",
	"♍",
	"♎",
	"♏",
	"♐",
	"♑",
	"♒",
	"♓",
	"⛎",
	"🔀",
	"🔁",
	"🔂",
	"▶️",
	"⏩",
	"⏭️",
	"⏯️",
	"◀️",
	"⏪",
	"⏮️",
	"🔼",
	"⏫",
	"🔽",
	"⏬",
	"⏸️",
	"⏹️",
	"⏺️",
	"⏏️",
	"🎦",
	"🔅",
	"🔆",
	"📶",
	"📳",
	"📴",
	"♀️",
	"♂️",
	"⚧️",
	"✖️",
	"➕",
	"➖",
	"➗",
	"♾️",
	"‼️",
	"⁉️",
	"❓",
	"❔",
	"❕",
	"❗",
	"〰️",
	"💱",
	"💲",
	"⚕️",
	"♻️",
	"⚜️",
	"🔱",
	"📛",
	"🔰",
	"⭕",
	"✅",
	"☑️",
	"✔️",
	"❌",
	"❎",
	"➰",
	"➿",
	"〽️",
	"✳️",
	"✴️",
	"❇️",
	"©️",
	"®️",
	"™️",
	"#️⃣",
	"*️⃣",
	"0️⃣",
	"1️⃣",
	"2️⃣",
	"3️⃣",
	"4️⃣",
	"5️⃣",
	"6️⃣",
	"7️⃣",
	"8️⃣",
	"9️⃣",
	"🔟",
	"🔠",
	"🔡",
	"🔢",
	"🔣",
	"🔤",
	"🅰️",
	"🆎",
	"🅱️",
	"🆑",
	"🆒",
	"🆓",
	"ℹ️",
	"🆔",
	"Ⓜ️",
	"🆕",
	"🆖",
	"🅾️",
	"🆗",
	"🅿️",
	"🆘",
	"🆙",
	"🆚",
	"🈁",
	"🈂️",
	"🈷️",
	"🈶",
	"🈯",
	"🉐",
	"🈹",
	"🈚",
	"🈲",
	"🉑",
	"🈸",
	"🈴",
	"🈳",
	"㊗️",
	"㊙️",
	"🈺",
	"🈵",
	"🔴",
	"🟠",
	"🟡",
	"🟢",
	"🔵",
	"🟣",
	"🟤",
	"⚫",
	"⚪",
	"🟥",
	"🟧",
	"🟨",
	"🟩",
	"🟦",
	"🟪",
	"🟫",
	"⬛",
	"⬜",
	"◼️",
	"◻️",
	"◾",
	"◽",
	"▪️",
	"▫️",
	"🔶",
	"🔷",
	"🔸",
	"🔹",
	"🔺",
	"🔻",
	"💠",
	"🔘",
	"🔳",
	"🔲",
	"🏁",
	"🚩",
	"🎌",
	"🏴",
	"🏳️",
	"🏳️‍🌈",
	"🏳️‍⚧️",
	"🏴‍☠️",
	"🇦🇨",
	"🇦🇩",
	"🇦🇪",
	"🇦🇫",
	"🇦🇬",
	"🇦🇮",
	"🇦🇱",
	"🇦🇲",
	"🇦🇴",
	"🇦🇶",
	"🇦🇷",
	"🇦🇸",
	"🇦🇹",
	"🇦🇺",
	"🇦🇼",
	"🇦🇽",
	"🇦🇿",
	"🇧🇦",
	"🇧🇧",
	"🇧🇩",
	"🇧🇪",
	"🇧🇫",
	"🇧🇬",
	"🇧🇭",
	"🇧🇮",
	"🇧🇯",
	"🇧🇱",
	"🇧🇲",
	"🇧🇳",
	"🇧🇴",
	"🇧🇶",
	"🇧🇷",
	"🇧🇸",
	"🇧🇹",
	"🇧🇻",
	"🇧🇼",
	"🇧🇾",
	"🇧🇿",
	"🇨🇦",
	"🇨🇨",
	"🇨🇩",
	"🇨🇫",
	"🇨🇬",
	"🇨🇭",
	"🇨🇮",
	"🇨🇰",
	"🇨🇱",
	"🇨🇲",
	"🇨🇳",
	"🇨🇴",
	"🇨🇵",
	"🇨🇷",
	"🇨🇺",
	"🇨🇻",
	"🇨🇼",
	"🇨🇽",
	"🇨🇾",
	"🇨🇿",
	"🇩🇪",
	"🇩🇬",
	"🇩🇯",
	"🇩🇰",
	"🇩🇲",
	"🇩🇴",
	"🇩🇿",
	"🇪🇦",
	"🇪🇨",
	"🇪🇪",
	"🇪🇬",
	"🇪🇭",
	"🇪🇷",
	"🇪🇸",
	"🇪🇹",
	"🇪🇺",
	"🇫🇮",
	"🇫🇯",
	"🇫🇰",
	"🇫🇲",
	"🇫🇴",
	"🇫🇷",
	"🇬🇦",
	"🇬🇧",
	"🇬🇩",
	"🇬🇪",
	"🇬🇫",
	"🇬🇬",
	"🇬🇭",
	"🇬🇮",
	"🇬🇱",
	"🇬🇲",
	"🇬🇳",
	"🇬🇵",
	"🇬🇶",
	"🇬🇷",
	"🇬🇸",
	"🇬🇹",
	"🇬🇺",
	"🇬🇼",
	"🇬🇾",
	"🇭🇰",
	"🇭🇲",
	"🇭🇳",
	"🇭🇷",
	"🇭🇹",
	"🇭🇺",
	"🇮🇨",
	"🇮🇩",
	"🇮🇪",
	"🇮🇱",
	"🇮🇲",
	"🇮🇳",
	"🇮🇴",
	"🇮🇶",
	"🇮🇷",
	"🇮🇸",
	"🇮🇹",
	"🇯🇪",
	"🇯🇲",
	"🇯🇴",
	"🇯🇵",
	"🇰🇪",
	"🇰🇬",
	"🇰🇭",
	"🇰🇮",
	"🇰🇲",
	"🇰🇳",
	"🇰🇵",
	"🇰🇷",
	"🇰🇼",
	"🇰🇾",
	"🇰🇿",
	"🇱🇦",
	"🇱🇧",
	"🇱🇨",
	"🇱🇮",
	"🇱🇰",
	"🇱🇷",
	"🇱🇸",
	"🇱🇹",
	"🇱🇺",
	"🇱🇻",
	"🇱🇾",
	"🇲🇦",
	"🇲🇨",
	"🇲🇩",
	"🇲🇪",
	"🇲🇫",
	"🇲🇬",
	"🇲🇭",
	"🇲🇰",
	"🇲🇱",
	"🇲🇲",
	"🇲🇳",
	"🇲🇴",
	"🇲🇵",
	"🇲🇶",
	"🇲🇷",
	"🇲🇸",
	"🇲🇹",
	"🇲🇺",
	"🇲🇻",
	"🇲🇼",
	"🇲🇽",
	"🇲🇾",
	"🇲🇿",
	"🇳🇦",
	"🇳🇨",
	"🇳🇪",
	"🇳🇫",
	"🇳🇬",
	"🇳🇮",
	"🇳🇱",
	"🇳🇴",
	"🇳🇵",
	"🇳🇷",
	"🇳🇺",
	"🇳🇿",
	"🇴🇲",
	"🇵🇦",
	"🇵🇪",
	"🇵🇫",
	"🇵🇬",
	"🇵🇭",
	"🇵🇰",
	"🇵🇱",
	"🇵🇲",
	"🇵🇳",
	"🇵🇷",
	"🇵🇸",
	"🇵🇹",
	"🇵🇼",
	"🇵🇾",
	"🇶🇦",
	"🇷🇪",
	"🇷🇴",
	"🇷🇸",
	"🇷🇺",
	"🇷🇼",
	"🇸🇦",
	"🇸🇧",
	"🇸🇨",
	"🇸🇩",
	"🇸🇪",
	"🇸🇬",
	"🇸🇭",
	"🇸🇮",
	"🇸🇯",
	"🇸🇰",
	"🇸🇱",
	"🇸🇲",
	"🇸🇳",
	"🇸🇴",
	"🇸🇷",
	"🇸🇸",
	"🇸🇹",
	"🇸🇻",
	"🇸🇽",
	"🇸🇾",
	"🇸🇿",
	"🇹🇦",
	"🇹🇨",
	"🇹🇩",
	"🇹🇫",
	"🇹🇬",
	"🇹🇭",
	"🇹🇯",
	"🇹🇰",
	"🇹🇱",
	"🇹🇲",
	"🇹🇳",
	"🇹🇴",
	"🇹🇷",
	"🇹🇹",
	"🇹🇻",
	"🇹🇼",
	"🇹🇿",
	"🇺🇦",
	"🇺🇬",
	"🇺🇲",
	"🇺🇳",
	"🇺🇸",
	"🇺🇾",
	"🇺🇿",
	"🇻🇦",
	"🇻🇨",
	"🇻🇪",
	"🇻🇬",
	"🇻🇮",
	"🇻🇳",
	"🇻🇺",
	"🇼🇫",
	"🇼🇸",
	"🇽🇰",
	"🇾🇪",
	"🇾🇹",
	"🇿🇦",
	"🇿🇲",
	"🇿🇼",
	"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
	"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	"🏴󠁧󠁢󠁷󠁬󠁳󠁿"
];

/**
 * Generate a random emoji.
 *
 * @category text
 *
 * @example
 *
 * randEmoji()
 *
 * @example
 *
 * randEmoji({ length: 10 })
 *
 */

function randEmoji(options) {
  return fake(data$1d, options);
}

var data$1c = [
	"0x958aa9ddbd62f989dec2fd1468bf436aebeb8be6",
	"0x9a7a3607dc4617deff6d4f9ca5d8c0beba0cffc5",
	"0xf5dcc57cb74623d2b3bfa6be9d96902f4bacb0b4",
	"0xfeff5fc09fc64ddde1cb09cdbba9d5aa1bd60028",
	"0xbf7aa2fdfdc0a971427bc7a815eabe4f37f53c19",
	"0xba0cbdbda3e1fafd9ba9b1b638d9eea0f8b9d7da",
	"0xeac476af2cdd3d5bbd723759073db20fe987f7bc",
	"0x5cef0214f4ebecaeb0a34088f4169dc2dbbf3ddb",
	"0x3be4ca88dda4aede8b2cf4cdf80878daecfd97d0",
	"0x5a367fae4dae00e05d6b3ce19d4fadec4da5dffe",
	"0xbae7b517fdd077edfefffafbd6ffdec6a95413ac",
	"0xdbcebff49e6f9c8ddb764b5a68b7ba2fdf555c2e",
	"0xf7aea0ce7ab75bbbeabf83a35b6631124e1b01de",
	"0xbf53ee26d8dddcccda95b373ad8ce0ebdbb00cfd",
	"0xd97be3baebea30eedc318e82befd7b451fdca1ce",
	"0xa69ea3e7eb2937dbc56f1b93dbabbbe7484108d5",
	"0x46270faac76c1dcb9ea78bfc75d84b82b928962b",
	"0xeda7bd82aa45cb6f6ddc92ff432b9f1fc970cf6f"
];

/**
 * Generate a random ethereum address.
 *
 * @category Finance
 *
 * @example
 *
 * randEthereumAddress()
 *
 * @example
 *
 * randEthereumAddress({ length: 10 })
 *
 */

function randEthereumAddress(options) {
  return fake(data$1c, options);
}

var data$1b = [
	"aiff",
	"deb",
	"utz",
	"mpeg",
	"itp",
	"qxb",
	"mmf",
	"fbs",
	"aam",
	"link66",
	"mmr",
	"clkw",
	"vis",
	"eol",
	"cii",
	"ini",
	"uvd",
	"uvx",
	"kwd",
	"gqf",
	"onetoc2",
	"man",
	"z2",
	"urls",
	"ots",
	"cpp",
	"pub",
	"csp",
	"rdf",
	"list",
	"sfd-hdstx",
	"u32",
	"xhtml",
	"vxml",
	"ecma",
	"swi",
	"cpt",
	"gramps",
	"mb",
	"pre",
	"rs",
	"dts",
	"nnd",
	"atom",
	"pas",
	"uvvi",
	"p7b",
	"ptid",
	"djvu",
	"cmp",
	"msl",
	"oa2",
	"flw",
	"pcurl",
	"azs",
	"ssdl",
	"dotx",
	"mrcx",
	"ssf",
	"m3u",
	"onetoc",
	"w3d",
	"tpt",
	"mft",
	"yin",
	"ogg",
	"jsonml",
	"fst",
	"acc",
	"x3dvz",
	"mads",
	"sxg",
	"str",
	"ppsm",
	"pfx",
	"vsw",
	"irp",
	"meta4",
	"tex",
	"clkx",
	"chrt",
	"txt",
	"msf",
	"wvx",
	"et3",
	"bdm",
	"ods",
	"3ds",
	"smi",
	"skm",
	"t3",
	"asm"
];

/**
 * Generate a random file ext.
 *
 * @category system
 *
 * @example
 *
 * randFileExt()
 *
 * @example
 *
 * randFileExt({ length: 10 })
 *
 */

function randFileExt(options) {
  return fake(data$1b, options);
}

var data$1a = [
	"/opt/bin/turn_key_bedfordshire_contingency.mts.acu",
	"/lib/niches_account_springs.w3d.gtm",
	"/Applications/plains_fresh_hack.s.onepkg",
	"/usr/libexec/gold_plum_toys.mbk.xdf",
	"/net/green_terrace_faroe.csh.wspolicy",
	"/net/monitor_saint_engineer.mrc.ogv",
	"/usr/lib/dong.gsf.dxr",
	"/usr/include/rand_sleek.uvs.qxt",
	"/usr/buckinghamshire.pdb.so",
	"/tmp/soft.fxp.dist",
	"/lost+found/producer_metal_networked.spot.ktz",
	"/lost+found/gorgeous_plastic.z1.dwf",
	"/usr/sbin/car.cba.dssc",
	"/Applications/responsive_mobile.twds.markdown",
	"/usr/share/copying.scq.teacher",
	"/bin/neural_net.btif.php",
	"/lost+found/sudanese.sm.m1v",
	"/usr/local/bin/compressing_bifurcated.crd.oda",
	"/etc/mail/uzbekistan_invoice_analyzer.lostxml.xht",
	"/usr/local/bin/turn_key.uvv.mng",
	"/usr/share/moldova_loan_administration.pvb.xaml",
	"/opt/include/frozen.z2.pnm",
	"/opt/bin/recontextualize_optimization.onetoc.opf",
	"/rescue/director_grocery.gml.nns",
	"/opt/bin/adp_keyboard.mcd.prf",
	"/Users/table_leading.ufd.aas",
	"/usr/include/avon_best_of_breed.tga.xif",
	"/etc/periodic/compatible.icm.pcf",
	"/var/log/withdrawal.sdc.aep",
	"/var/yp/tasty_silver_idaho.cbr.uvf",
	"/etc/periodic/web_readiness_international_licensed.lwp.xlf",
	"/var/spool/future_organic.bpk.wtb",
	"/home/account_cotton.xap.jpe",
	"/etc/mail/strategist.ngdat.mcd",
	"/lib/transmit_awesome.cba.flx",
	"/home/software.spc.dd2",
	"/rescue/sticky.asc.ots",
	"/usr/bin/fish_islands_estates.fdf.aif",
	"/usr/sbin/optimization_multi_tasking.hvp.mcd",
	"/etc/ppp/steel.cdf.mp4",
	"/etc/gorgeous_mews.pml.ppam",
	"/usr/lib/metrics.smzip.hpid",
	"/System/hacking.sass.sxg",
	"/home/user/gloves_grey.ami.svg",
	"/usr/include/overriding_png.txt.aw",
	"/lost+found/designer_decentralized.tcl.m4u",
	"/etc/namedb/de_engineered_bandwidth.igx.avi",
	"/opt/include/christmas.mp2a.vob",
	"/usr/X11R6/producer_deliver.txd.rtx",
	"/net/exploit_smtp.kpxx.qwd",
	"/private/var/azure_pine_iranian.rif.cst",
	"/Library/virtual.bdoc.ief",
	"/usr/bin/drive.hpid.joda",
	"/etc/namedb/account_parsing.bcpio.mj2",
	"/lib/configuration_programming.fly.nfo",
	"/usr/include/maryland_enterprise_wide_tuna.rmvb.mk3d",
	"/srv/back_end.java.mp3",
	"/rescue/trace_cotton_synergized.pgm.mpt",
	"/var/mail/incredible.elc.setreg",
	"/usr/share/avon_state.onepkg.dwg",
	"/usr/lib/composite_maryland.md.psd",
	"/lib/ports_calculating.ogg.wm",
	"/Network/embrace_interactions_internal.mng.lasxml",
	"/Users/mobility_avon_internal.mpp.cxx",
	"/home/smtp_keys_serbian.cbt.f90",
	"/boot/defaults/index_avon.stl.dxp",
	"/var/computers_bedfordshire.mp2.ami",
	"/etc/zimbabwe.html.crx",
	"/usr/share/alarm.vob.wmls",
	"/etc/namedb/calculate.cbz.gqs",
	"/usr/ports/experiences.uvvz.ifm",
	"/home/user/regional_gold.p8.silo",
	"/System/avon_representative_bandwidth_monitored.nlu.ez3",
	"/selinux/gardens.dwg.aiff",
	"/Library/direct.link66.ktx",
	"/sys/agp_borders_channels.uu.roa",
	"/opt/share/computer_indigo.sfs.x3dv",
	"/srv/payment_invoice.ppd.irm",
	"/usr/local/bin/indexing_health_tactics.fe_launch.sgl",
	"/sbin/online_technician.vcd.zmm",
	"/var/tmp/soap_cambridgeshire_regional.au.xps",
	"/opt/share/singapore.elc.hps",
	"/root/solutions_logistical.npx.kmz",
	"/sbin/system_contingency.xspf.pgp",
	"/root/dakota.pfa.xps",
	"/usr/X11R6/savings_expressway.json.uvf",
	"/usr/ports/intermediate_avon_soft.mml.xfdf",
	"/etc/namedb/won_fresh.et3.aam",
	"/dev/hacking.caf.vcd",
	"/sys/gorgeous_payment.skm.htm",
	"/Applications/niches.x3d.atom",
	"/Applications/website.pgp.clkp",
	"/etc/mail/barbados_azure.gre.php",
	"/var/tasty.cfs.uvvt",
	"/usr/src/real.box.gif",
	"/opt/include/engineer.qxd.xpw",
	"/opt/sbin/synthesizing_investor.ra.c4d",
	"/etc/defaults/incredible.spc.edm",
	"/usr/src/rufiyaa.odp.ace",
	"/usr/local/bin/tactics_maryland_xml.zip.gram"
];

/**
 * Generate a random file path.
 *
 * @category system
 *
 * @example
 *
 * randFilePath()
 *
 * @example
 *
 * randFilePath({ length: 10 })
 *
 */

function randFilePath(options) {
  return fake(data$1a, options);
}

var data$19 = [
	"model",
	"x-conference",
	"x-shader",
	"video",
	"application",
	"message",
	"multipart",
	"font",
	"audio",
	"image",
	"chemical",
	"text"
];

/**
 * Generate a random file type.
 *
 * @category system
 *
 * @example
 *
 * randFileType()
 *
 * @example
 *
 * randFileType({ length: 10 })
 *
 */

function randFileType(options) {
  return fake(data$19, options);
}

var data$18 = [
	"Araucanian herring",
	"Pacific saury",
	"Indian oil sardine",
	"Nile tilapia",
	"Bombay-duck",
	"Japanese common catfish",
	"Whiteleg shrimp",
	"Haddock",
	"Chilean jack mackerel",
	"Pollock",
	"Southern rough shrimp",
	"Amur catfish",
	"Largehead hairtail",
	"Gazami crab",
	"Silver carp",
	"Blue whiting",
	"Pacific thread herring",
	"Pacific anchoveta"
];

/**
 * Generate a random fish.
 *
 * @category animals
 *
 * @example
 *
 * randFish()
 *
 * @example
 *
 * randFish({ length: 10 })
 *
 */

function randFish(options) {
  return fake(data$18, options);
}

/**
 * Generate a random float.
 *
 * @category general, math
 *
 * @example
 *
 * randFloat()
 *
 * @example
 *
 * randFloat({ length: 10 })
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 1 }) // 12.5
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 2 }) // 12.52
 */

function randFloat(options) {
  var _options$fraction;

  const o = Object.assign({}, options, {
    fraction: (_options$fraction = options == null ? void 0 : options.fraction) != null ? _options$fraction : 2
  });
  return fake(() => getRandomInRange(o), options);
}
randFloat();

var data$17 = [
	"Inter",
	"DM Sans",
	"Space Mono",
	"Space Grotesk",
	"Work Sans",
	"Syne",
	"Libre Franklin",
	"Cormorant",
	"Fira Sans",
	"Eczar",
	"Alegreya Sans",
	"Alegreya",
	"Source Sans Pro",
	"Source Serif Pro",
	"Roboto",
	"Roboto Slab",
	"BioRhyme",
	"Inknut Antiqua",
	"Poppins",
	"Archivo Narrow",
	"Libre Baskerville",
	"Playfair Display",
	"Karla",
	"Lora",
	"Proza Libre",
	"Spectral",
	"IBM Plex Sans",
	"Crimson Text",
	"Montserrat",
	"Lato",
	"PT Sans",
	"PT Serif",
	"Cardo",
	"Chivo",
	"Neuton",
	"Rubik",
	"Open Sans",
	"Inconsolata",
	"Raleway",
	"Merriweather"
];

/**
 * Generate a random font family.
 *
 * @category code
 *
 * @example
 *
 * randFontFamily()
 *
 * @example
 *
 * randFontFamily({ length: 10 })
 *
 */

function randFontFamily(options) {
  return fake(data$17, options);
}

/**
 * Generate a random font size.
 *
 * @category code
 *
 * @example
 *
 * randFontSize()
 *
 * @example
 *
 * randFontSize({ length: 10 })
 *
 */

function randFontSize(options) {
  return fake(() => {
    var _options$suffix;

    const length = randNumber({
      min: 0,
      max: 2000,
      fraction: 2
    });
    const suffix = (_options$suffix = options == null ? void 0 : options.suffix) != null ? _options$suffix : 'px';
    return `${length}${suffix}`;
  }, options);
}

var data$16 = {
	china: [
		"Peking roasted duck",
		"Kung pao chicken",
		"Sweet and sour pork",
		"Hot pot",
		"Dim sum",
		"Dumplings",
		"Ma po tofu",
		"Char siu",
		"Chicken chow mein",
		"Beef chow mein",
		"vegetable chow mein",
		"Chicken fried rice",
		"Beef fried rice",
		"Vegetable fried Rice",
		"Special fried Rice",
		"Sichuan pork",
		"Xiaolongbao",
		"Zhajiangmian",
		"Wonton soup",
		"Sweet and sour pork",
		"Duck spring Rolls",
		"Vegetable spring Rolls",
		"Wonton",
		"Peking duck",
		"Lamb hot pot",
		"Spicy crayfish",
		"Guilin rice noodles",
		"Lanzhou hand-pulled noodles",
		"Steamed crab",
		"Shredded pork with garlic sauce",
		"Red braised pork",
		"Sweet and sour Ribs",
		"Xinjiang",
		"Braised pork with vermicelli"
	],
	italy: [
		"Butternut squash risotto",
		"Mushroom risotto",
		"Beetroot risotto",
		"Courgette risotto",
		"Pizza",
		"Gnocchi",
		"Spaghetti bolognese",
		"Spaghetti carbonara",
		"Pesto alla Genovese",
		"Beef lasagne",
		"Vegetable lasagne",
		"Gelato",
		"Prosciutto di Parma",
		"Ribollita",
		"Bagna cauda",
		"Polenta",
		"Tortelli and ravioli",
		"Focaccia",
		"Garlic bread",
		"Arancini",
		"Il tartufo",
		"Panzerotto fritto",
		"Fiorentina",
		"Minestrone",
		"Frico",
		"Arrosticini",
		"Olive ascolante",
		"Fritto misto piemontes",
		"Tiramisù"
	],
	india: [
		"Biryani",
		"Dosa",
		"Tandoori chicken",
		"Samosas",
		"Chaat",
		"Plain naan",
		"Garlic naan",
		"Pilau rice",
		"Steamed rice",
		"Chicken madras",
		"Vegetable madras",
		"Chicken vindaloo",
		"Chicken jalfrezi",
		"Chicken roghan josh",
		"Lamb roghan josh",
		"Beef roghan josh",
		"Butter chicken",
		"Dosa",
		"Gulab jamun",
		"Chicken korma",
		"Mutter paneer",
		"Papadum",
		"Paratha",
		"Raita",
		"Saag paneer",
		"Tandoori chicken",
		"Chicken tikka masala",
		"Pakora",
		"Dal",
		"Chapati",
		"Pasanda",
		"Aloo gobi",
		"Kofta",
		"Chicken makhani",
		"Paneer naan",
		"Chana Aloo Curry"
	],
	mexico: [
		"Chilaquiles",
		"Pozole",
		"Tacos al pastor",
		"Tostadas",
		"Chiles en nogada",
		"Elote",
		"Enchiladas",
		"Mole",
		"Guacamole",
		"Tamales",
		"Huevos rancheros",
		"Machaca",
		"Discada",
		"Beef Burrito",
		"Chicken Burrito",
		"Pozole de pollo o duajolote",
		"Menudo",
		"Cochinita pibil",
		"Tamale",
		"Quesadilla",
		"Frijoles puercos",
		"Chile en nogada",
		"Esquites",
		"Alegria de amaranto",
		"Pipián",
		"Aguachile",
		"Ceviche",
		"Pescado zarandeado",
		"Camarones a la diabla",
		"Birria de chivo",
		"Tlayuda",
		"Guacamole con chapulines",
		"Flautas",
		"Torta Ahogada",
		"Carnitas",
		"Caldo Azteca",
		"Gorditas de Nata"
	],
	japan: [
		"Sushi",
		"Udon",
		"Tofu",
		"Tempura",
		"Yakitori",
		"Sashimi",
		"Ramen",
		"Donburi",
		"Natto",
		"Oden",
		"Tamagoyaki",
		"Soba",
		"Tonkatsu",
		"Kashipan",
		"Sukiyaki",
		"Miso soup",
		"Okonomiyaki",
		"Mentaiko",
		"Nikujaga",
		"Unagi no kabayaki",
		"Shabu Shabu",
		"Onigiri",
		"Gyoza",
		"Takoyaki",
		"aiseki ryori",
		"Edamame",
		"Yakisoba",
		"Chawanmushi",
		"Wagashi"
	],
	france: [
		"Foie gras",
		"Huîtres",
		"Cassoulet",
		"Poulet basquaise",
		"Escargots au beurre persillé",
		"Mouclade charentaise",
		"Galettes bretonnes",
		"Flemish carbonnade",
		"Quiche lorraine",
		"Raclette",
		"Cheese fondue",
		"Beef fondue",
		"Gratin dauphinois",
		"Tartiflette",
		"Bouillabaisse",
		"Ratatouille",
		"Boeuf bourguignon",
		"Blanquette de veau",
		"Pot-au-feu",
		"Coq-au-vin",
		"Hachis parmentier",
		"Steak tartare",
		"Choucroute",
		"Soufflé au fromage",
		"Cuisses de grenouilles",
		"Soupe à l’oignon",
		"Baguette",
		"Croissant",
		"French cheeses",
		"Fondant au chocolat",
		"Tarte tatin",
		"Macarons",
		"Crème brûlée",
		"Île flottante",
		"Profiteroles",
		"Pain au chocolat"
	],
	lebanon: [
		"Kibbeh",
		"Kafta",
		"Kanafeh",
		"Hummus",
		"Rice pilaf",
		"Fattoush",
		"Manakish",
		"Tabbouleh",
		"Sfeeha",
		"Fattoush",
		"Labneh",
		"Muhammara",
		"Lahm bi ajin",
		"Kaak",
		"Chanklich",
		"Mssabaha",
		"Shawarma",
		"Kebbe",
		"Falafel",
		"Halewit el jeben",
		"Namoura",
		"Maamoul",
		"Foul mdammas",
		"Balila",
		"Kawarma",
		"Fattouch"
	],
	thailand: [
		"Pad kra pao moo",
		"Tom kha gai",
		"Khao Pad",
		"Chicken pad Thai",
		"Vegetable pad Thai",
		"Moo satay",
		"Tom yum goong",
		"Khao niew mamuang",
		"Kai yad sai",
		"Khao soi",
		"Pad see ew",
		"Laab moo",
		"Gaeng panang",
		"Gai pad med ma muang",
		"Som tam",
		"Poh pia tod",
		"Gaeng massaman",
		"Pla kapung nueng manao",
		"Tod mun pla",
		"Gaeng ped",
		"Gaeng garee",
		"Gaeng keow wan",
		"Moo ping",
		"Durian",
		"Sai ooah",
		"Hoy tod",
		"Kuay teow reua",
		"Mu kratha",
		"Kao ka moo",
		"Yam nua"
	],
	greece: [
		"Moussaka",
		"Papoutsakia",
		"Pastitsio",
		"Souvlaki",
		"Soutzoukakia",
		"Stifado",
		"Tomatokeftedes",
		"Tzatziki",
		"Kolokithokeftedes",
		"Giouvetsi",
		"Choriatiki",
		"Kleftiko",
		"Gemista",
		"Fasolada",
		"Bougatsa",
		"Tiropita",
		"Spanakopita",
		"Feta Cheese with Honey",
		"Horta",
		"Tirokroketes",
		"Briam",
		"Saganaki",
		"Gigantes",
		"Dolmades",
		"Fasolatha",
		"Koulouri",
		"Loukoumades",
		"Gyros",
		"Galaktoboureko",
		"Baklava"
	],
	turkey: [
		"Şiş kebap",
		"Döner",
		"Köfte",
		"Pide",
		"Kumpir",
		"Meze",
		"Mantı",
		"Lahmacun",
		"Menemen",
		"Şiş kebap",
		"İskender kebab",
		"Corba",
		"Kuzu tandir",
		"Çiğ Köfte",
		"Pilav",
		"Yaprak sarma",
		"Dolma",
		"İmam bayıldı",
		"Borek",
		"Durum",
		"Kumpir",
		"Balik ekmek",
		"Simit",
		"Kunefe",
		"Baklava",
		"Lokum",
		"Halva",
		"Mozzaik pasta",
		"Güllaç",
		"Mercimek Köftesi",
		"Haydari",
		"Tursu suyu",
		"Kahvalti",
		"Kazan dibi",
		"Hunkar begendi",
		"Islak burgers",
		"Salep",
		"Yogurtlu kebab"
	],
	spain: [
		"Tortilla de patatas",
		"Fabada asturiana",
		"Calçots",
		"Boquerones al vinagre",
		"Empanada gallega",
		"Paella",
		"Gazpacho",
		"Gachas",
		"Migas",
		"Bocadillo de calamares",
		"Pulpo a feira",
		"Caldo gallego",
		"Lentejas con chorizo",
		"Cocido madrileño",
		"Cachopo",
		"Caracoles"
	],
	venezuela: [
		"Pabellón criollo",
		"Arepa",
		"Mondongo",
		"Empanadas",
		"Quesillo",
		"Chicha andina",
		"Tequeños",
		"Cachapa",
		"Hallaca",
		"Perico",
		"Pasticho",
		"Mandocas",
		"Caraotas negras",
		"Patacones",
		"Dulce de leche",
		"Pan de Jamón"
	],
	chile: [
		"Humitas",
		"Empanadas",
		"Porotos con riendas",
		"Completos",
		"Manjar",
		"Cordero al palo",
		"Pastel de choclo",
		"Mote con huesillos",
		"Sopaipillas",
		"Curanto"
	],
	argentina: [
		"Milanesas",
		"Empanadas",
		"Pizza fugazeta",
		"Asado",
		"Choripan",
		"Bondiola",
		"Bife de chorizo"
	],
	colombia: [
		"Bandeja paisa",
		"Chuleta valluna",
		"Sancocho trifásico",
		"Empanada valluna",
		"Salpicon de frutas",
		"Pastel de garbanzo",
		"Ajiaco",
		"Arepas",
		"Arroz de lisa",
		"Sancocho",
		"Pan de bono",
		"Cuchuco",
		"Oblea",
		"Cazuela de mariscos",
		"Pan de yuca",
		"Bollo Limpio",
		"Almojábana",
		"Empanadas",
		"Arroz con Coco",
		"Sopa de mondongo",
		"Cazuela de Mariscos",
		"Arroz con Pollo",
		"Arepa de Huevo",
		"Mote de Queso"
	],
	ecuador: [
		"Encebollado",
		"Ceviche",
		"Tigrillo",
		"Bolon de verde",
		"Llapingacho",
		"Mote pillo",
		"Locro de papa",
		"Churrasco"
	],
	peru: [
		"Ceviche",
		"Arroz con pollo",
		"Aji de gallina",
		"Llunca de gallina"
	],
	romania: [
		"Sarmale",
		"Mici",
		"Pomana porcului",
		"Ciorbă de fasole cu ciolan",
		"Ciorbă de burtă",
		"Ciorbă rădăuțeană",
		"Plăcintă cu brânză",
		"Ciorbă de potroace",
		"Mămăligă cu brânză și smântână",
		"Tochitură",
		"Piftie",
		"Iahnie de fasole",
		"Slănină afumată",
		"Cârnați afumați",
		"Varză a la Cluj",
		"Gulaș de cartofi cu afumătură",
		"Cozonac de casă",
		"Ciorbă ardelenească de porc",
		"Mucenici moldovenești",
		"Salată de boeuf",
		"Dovleac copt",
		"Papanași cu brânză de vacă și afine",
		"Drob de miel",
		"Pârjoale moldovenești",
		"Zacuscă de vinete",
		"Zacuscă de fasole",
		"Turtă dulce",
		"Clătitele cu gem",
		"Clătitele cu brânza de vacă",
		"Balmoș",
		"Cozonac",
		"Chiftele"
	]
};

var _Object$keys$1;
const totalOrigins = (_Object$keys$1 = Object.keys(data$16)) == null ? void 0 : _Object$keys$1.length;
/**
 * Generate a random food name.
 *
 * @category Food
 *
 * @example
 *
 * randFood()
 *
 * @example
 *
 * randFood({ origin: 'italy' })
 *
 * @example
 *
 * randFood({ length: 10 })
 *
 */

function randFood(options) {
  const foodData = data$16;
  const origin = options == null ? void 0 : options.origin;

  if (!totalOrigins) {
    throw 'No foods found';
  }

  if (origin && !foodData[origin]) {
    throw 'No foods found for selected origin';
  }

  const factory = () => {
    if (origin) {
      return randElement(foodData[origin]);
    }

    const originIndex = getRandomInRange({
      min: 0,
      max: totalOrigins - 1
    });
    const randomOrigin = Object.keys(foodData)[originIndex];
    return randElement(foodData[randomOrigin]);
  };

  return fake(factory, options);
}

var data$15 = [
	"AFC Bournemouth",
	"Alavés",
	"Arsenal",
	"Aston Villa",
	"Athletic Bilbao",
	"Atlético Madrid",
	"Barcelona",
	"Barnsley",
	"Birmingham City",
	"Blackburn Rovers",
	"Blackpool",
	"Bolton Wanderers",
	"Bradford City",
	"Brentford",
	"Brighton and Hove Albion",
	"Burnley",
	"Cádiz",
	"Cardiff City",
	"Celta Vigo",
	"Charlton Athletic",
	"Chelsea",
	"Coventry City",
	"Crystal Palace",
	"Derby County",
	"Elche",
	"Espanyol",
	"Everton",
	"Fulham",
	"Getafe",
	"Granada",
	"Huddersfield Town",
	"Hull City",
	"Ipswich Town",
	"Leeds United",
	"Leicester City",
	"Levante",
	"Liverpool",
	"Mallorca",
	"Manchester City",
	"Manchester United",
	"Middlesbrough",
	"Newcastle United",
	"Norwich City",
	"Nottingham Forest",
	"Oldham Athletic",
	"Osasuna",
	"Portsmouth",
	"Queens Park Rangers",
	"Rayo Vallecano",
	"Reading",
	"Real Betis",
	"Real Madrid",
	"Real Sociedad",
	"Sevilla",
	"Sheffield United",
	"Sheffield Wednesday",
	"Southampton",
	"Stoke City",
	"Sunderland",
	"Swansea City",
	"Swindon Town",
	"Tottenham Hotspur",
	"Valencia",
	"Villarreal",
	"Watford",
	"West Bromwich Albion",
	"West Ham United",
	"Wigan Athletic",
	"Wimbledon",
	"Wolverhampton Wanderers",
	"River Plate",
	"Boca Juniors",
	"Atlético Nacional",
	"Independiente",
	"Llaneros",
	"Tigre",
	"Palmeiras",
	"Atletico Paranaense",
	"Sydney FC",
	"Melbourne Victory"
];

/**
 * Generate a random football team.
 *
 * @category sports
 *
 * @example
 *
 * randFootballTeam()
 *
 * @example
 *
 * randFootballTeam({ length: 10 })
 *
 */

function randFootballTeam(options) {
  return fake(data$15, options);
}

var data$14 = [
	"always",
	"constantly",
	"usually",
	"normally",
	"frequently",
	"regularly",
	"often",
	"sometimes",
	"occasionally",
	"rarely",
	"infrequently",
	"seldom",
	"hardly",
	"never",
	"hourly",
	"daily",
	"weekly",
	"monthly",
	"yearly",
	"once",
	"twice"
];

/**
 * Generate a random adverb for definite or indefinite frequency.
 *
 * @category date
 *
 * @example
 *
 * randFrequency()
 *
 * @example
 *
 * randFrequency({ length: 10 })
 *
 */

function randFrequency(options) {
  return fake(data$14, options);
}

/**
 * Generate a random full name.
 *
 * @category person
 *
 * @example
 *
 * randFullName()
 *
 * @example
 *
 * randFullName({ withAccents: false })
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 */

function randFullName(options) {
  const nameOptions = {
    withAccents: options == null ? void 0 : options.withAccents
  };
  return fake(() => `${randFirstName(nameOptions)} ${randLastName(nameOptions)}`, options);
}

/**
 * Generate a random future.
 *
 * @category date
 *
 * @example
 *
 * randFutureDate()
 *
 * @example
 *
 * randFutureDate({ length: 10 })
 *
 * @example
 *
 * randFutureDate({ years: 10 }) // default is 1
 *
 */

function randFutureDate(options) {
  var _options$years;

  const years = (_options$years = options == null ? void 0 : options.years) != null ? _options$years : 1;

  if (years <= 0) {
    throw new Error('Years must be positive, use past() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + yearsInMilliseconds);
  return fake(() => randBetweenDate({
    from,
    to
  }), options);
}

var data$13 = [
	"Cisgender",
	"Male to female transgender woman",
	"Androgyne",
	"Bigender",
	"Pangender",
	"Cis",
	"Transexual Person",
	"Transgender Female",
	"Female to male transsexual man",
	"Gender neutral",
	"Intersex woman",
	"Intersex",
	"Transexual Female",
	"Trans*Male",
	"Cisgender Male",
	"Transexual Woman",
	"Trans Female",
	"Gender Variant",
	"Male to Female",
	"Two-spirit",
	"Trans Man",
	"Gender Nonconforming",
	"Non-binary",
	"Transgender Person",
	"Cisgender Woman",
	"Cis Woman",
	"Cis Female",
	"Trans*Woman",
	"Polygender",
	"M2F",
	"Neither",
	"Male to female transsexual woman",
	"Intersex man",
	"Asexual",
	"Transexual",
	"Cis Male",
	"T* woman",
	"Woman",
	"Cisgender Female",
	"Other",
	"T* man",
	"Androgynous",
	"Trans Male",
	"Male to female trans woman",
	"Transexual Male",
	"Cis Man",
	"Female to male transgender man",
	"Genderqueer",
	"Neutrois",
	"Intersex person",
	"FTM",
	"Hermaphrodite",
	"Female to Male"
];

var data$12 = [
	"Andro",
	"Bi",
	"Pan",
	"F",
	"M",
	"Cis",
	"Cis M",
	"Cis W",
	"Cis F",
	"Demi",
	"T*",
	"T F",
	"GV",
	"T M",
	"T*M",
	"T*W",
	"Non-bi",
	"Poly",
	"M2F",
	"M2FT",
	"Ace",
	"W",
	"Other",
	"NC",
	"Q",
	"TC",
	"TGNC",
	"FTM",
	"GSM"
];

/**
 * Generate a random gender.
 *
 * @category person
 *
 * @example
 *
 * randGender()
 *
 * @example
 *
 * randGender({ length: 10 })
 *
 * @example
 *
 * randGender({ code: true }) // default is false
 *
 */

function randGender(options) {
  return fake(options != null && options.code ? data$12 : data$13, options);
}

var data$11 = [
	"protocol-navigate",
	"array-quantify",
	"transmitter-override",
	"circuit-compress",
	"feed-program",
	"microchip-parse",
	"feed-quantify",
	"card-synthesize",
	"bus-reboot",
	"application-input",
	"firewall-generate",
	"monitor-transmit",
	"sensor-parse",
	"port-compress",
	"interface-reboot",
	"capacitor-program",
	"monitor-quantify",
	"transmitter-input"
];

/**
 * Generate a random git branch.
 *
 * @category git
 *
 * @example
 *
 * randGitBranch()
 *
 * @example
 *
 * randGitBranch({ length: 10 })
 *
 */

function randGitBranch(options) {
  return fake(data$11, options);
}

const commitShaLen = 40;
/**
 * Generate a random git sha.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitSha()
 *
 * @example
 *
 * randGitCommitSha({ length: 10 })
 *
 */

function randGitCommitSha(options) {
  return fake(() => {
    let sha = '';

    for (let i = 0; i < commitShaLen; i++) {
      sha += randAlphaNumeric();
    }

    return sha;
  }, options);
}

/**
 * Generate a random git message.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitMessage()
 *
 * @example
 *
 * randGitCommitMessage({ length: 10 })
 *
 */

function randGitCommitMessage(options) {
  return fake(() => {
    const words = [];

    for (let i = 0; i < randNumber({
      min: 2,
      max: 5
    }); i++) {
      words.push(randWord());
    }

    return words.join(' ');
  }, options);
}

/**
 * Generate a random git commit.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitEntry()
 *
 * @example
 *
 * randGitCommitEntry({ length: 10 })
 *
 */

function randGitCommitEntry(options) {
  return fake(() => {
    return `commit ${randGitCommitSha()}\\r\\nAuthor: ${randFullName()} <${randEmail()}>\\r\\nDate: ${new Date().toString()}\\r\\n\\r\\n${randGitCommitMessage()}`;
  }, options);
}

const commitShortShaLen = 7;
/**
 * Generate a random git short sha.
 *
 * @category git
 *
 * @example
 *
 * randGitShortSha()
 *
 * @example
 *
 * randGitShortSha({ length: 10 })
 *
 */

function randGitShortSha(options) {
  return fake(() => {
    let sha = '';

    for (let i = 0; i < commitShortShaLen; i++) {
      sha += randAlphaNumeric();
    }

    return sha;
  }, options);
}

/**
 * Generate a random hex.
 *
 * @category colors
 *
 * @example
 *
 * randHex()
 *
 * @example
 *
 * randHex({ length: 10 })
 *
 */

function randHex(options) {
  return fake(() => `#${random().toString(16).substr(2, 6)}`, options);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

function generator() {
  return '' + (randBoolean() ? fake(digits) : fake(letters));
}
/**
 * Generate a random hexa decimal.
 *
 * @category system
 *
 * @example
 *
 * randHexaDecimal()
 *
 * @example
 *
 * randHexaDecimal({ length: 10 })
 *
 */


function randHexaDecimal(options) {
  return fake(generator, options);
}

var data$10 = [
	"Pottok",
	"Dutch Heavy Draft",
	"Spanish Barb",
	"Russian Heavy Draft",
	"American Saddlebred",
	"Camarillo White Horse",
	"Karachai Horse",
	"Andalusian Horse",
	"Poitevin Horse",
	"Colorado Ranger",
	"Paso Fino",
	"Swiss Warmblood",
	"Murgese",
	"Selle Français",
	"Riwoche Horse",
	"French Trotter",
	"American Indian Horse",
	"Jeju Horse"
];

/**
 * Generate a random horse.
 *
 * @category animals
 *
 * @example
 *
 * randHorse()
 *
 * @example
 *
 * randHorse({ length: 10 })
 *
 */

function randHorse(options) {
  return fake(data$10, options);
}

/**
 * Generate a random hsl color.
 *
 * @category colors
 *
 * @example
 *
 * randHsl()
 *
 * @example
 *
 * randHsl({ length: 3 })
 *
 * @example
 *
 * randHsl({ alpha: true }) // default is false
 *
 */

function randHsl(options) {
  const factory = () => {
    const [h, s, l, a] = [getRandomInRange({
      min: 0,
      max: 359,
      fraction: 0
    }), getRandomInRange({
      min: 0,
      max: 100,
      fraction: 0
    }), getRandomInRange({
      min: 0,
      max: 100,
      fraction: 0
    }), randFloat({
      min: 0.1,
      max: 1
    })];
    return options != null && options.alpha ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`;
  };

  return fake(factory, options);
}

var data$$ = [
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];

/**
 * Generate a random http method.
 *
 * @category internet
 *
 * @example
 *
 * randHttpMethod()
 *
 * @example
 *
 * randHttpMethod({ length: 10 })
 *
 */

function randHttpMethod(options) {
  return fake(data$$, options);
}

/**
 * Generate a random ibn.
 *
 * @category finance
 *
 * @example
 *
 * randIban()
 *
 * @example
 *
 * randIban({ length: 10 })
 *
 */

function randIban(options) {
  return fake(() => {
    let iban = randCountryCode();

    for (let i = 0; i < randNumber({
      min: 14,
      max: 28
    }); i++) {
      iban += randAlphaNumeric();
    }

    return iban;
  }, options);
}

var data$_ = [
	"Anaheim Ducks",
	"Arizona Coyotes",
	"Boston Bruins",
	"Buffalo Sabres",
	"Calgary Flames",
	"Carolina Hurricanes",
	"Chicago Blackhawks",
	"Colorado Avalanche",
	"Columbus Blue Jackets",
	"Dallas Stars",
	"Detroit Red Wings",
	"Edmonton Oilers",
	"Florida Panthers",
	"Los Angeles Kings",
	"Minnesota Wild",
	"Montréal Canadiens",
	"Nashville Predators",
	"New Jersey Devils",
	"New York Islanders",
	"New York Rangers",
	"Ottawa Senators",
	"Philadelphia Flyers",
	"Pittsburgh Penguins",
	"San Jose Sharks",
	"Seattle Kraken",
	"St. Louis Blues",
	"Tampa Bay Lightning",
	"Toronto Maple Leafs",
	"Vancouver Canucks",
	"Vegas Golden Knights",
	"Washington Capitals",
	"Winnipeg Jets"
];

/**
 * Generate a random ice hockey team.
 *
 * @category sports
 *
 * @example
 *
 * randIceHockeyTeam()
 *
 * @example
 *
 * randIceHockeyTeam({ length: 10 })
 *
 */

function randIceHockeyTeam(options) {
  return fake(data$_, options);
}

/**
 * Generate a random img.
 *
 * @category General
 *
 * @example
 *
 * randImg()
 *
 * @example
 *
 * randImg({ length: 10 })
 *
 */

function randImg(options) {
  var _options$width, _options$height, _options$category;

  const [width, height, category] = [(_options$width = options == null ? void 0 : options.width) != null ? _options$width : 500, (_options$height = options == null ? void 0 : options.height) != null ? _options$height : 500, (_options$category = options == null ? void 0 : options.category) != null ? _options$category : ''];
  return fake(() => `https://placeimg.com/${width}/${height}${category ? `/${category}` : category}`, options);
}

var data$Z = [
	"Slack",
	"GitHub",
	"Jira",
	"AWS Lambda",
	"Bitbucket",
	"Bitbucket Server",
	"GitHub Enterprise",
	"GitLab",
	"Grafana",
	"Jira Server",
	"Microsoft Teams",
	"PagerDuty",
	"Vercel",
	"Azure DevOps",
	"WebHooks",
	"Amixr",
	"Calixa",
	"ClickUp",
	"Komodor",
	"Linear",
	"Rookout",
	"Shortcut",
	"Spike.sh",
	"Split",
	"TaskCall",
	"Teamwork",
	"Asana",
	"OpenReplay",
	"Bitbucket Pipelines",
	"Datadog",
	"FullStory",
	"GitHub Actions",
	"Heroku",
	"InsightFinder",
	"Netlify",
	"Octohook",
	"Learn More",
	"Pivotal Tracker",
	"Rocket.Chat",
	"Trello",
	"Twilio (SMS)",
	"OpsGenie",
	"Phabricator",
	"Pushover",
	"Redmine",
	"SessionStack",
	"VictorOps",
	"Amazon SQS",
	"Segment",
	"Splunk"
];

/**
 * Generate a random integration.
 *
 * @category internet
 *
 * @example
 *
 * randIntegrations()
 *
 * @example
 *
 * randIntegrations({ length: 10 })
 *
 */

function randIntegration(options) {
  return fake(data$Z, options);
}

const ipRange = {
  min: 0,
  max: 255
};
/**
 * Generate a random ip.
 *
 * @category internet
 *
 * @example
 *
 * randIp()
 *
 * @example
 *
 * randIp({ length: 10 })
 *
 */

function randIp(options) {
  return fake(() => Array.from({
    length: 4
  }, () => randNumber(ipRange)).join('.'), options);
}

/**
 * Generate a random ipv6.
 *
 * @category internet
 *
 * @example
 *
 * randIpv6()
 *
 * @example
 *
 * randIpv6({ length: 10 })
 *
 */

function randIpv6(options) {
  return fake(() => {
    return Array.from({
      length: 8
    }, () => {
      return Array.from({
        length: 4
      }, () => randHexaDecimal()).join('');
    }).join(':');
  }, options);
}

var data$Y = [
	"Brand",
	"Tactics",
	"Markets",
	"Usability",
	"Operations",
	"Integration",
	"Identity",
	"Marketing",
	"Creative",
	"Response",
	"Branding",
	"Quality",
	"Program",
	"Accounts",
	"Accountability",
	"Interactions",
	"Security",
	"Applications",
	"Configuration",
	"Factors",
	"Paradigm",
	"Division",
	"Group",
	"Data",
	"Directives",
	"Optimization",
	"Web",
	"Functionality",
	"Research",
	"Intranet",
	"Solutions",
	"Mobility",
	"Communications",
	"Metrics",
	"Assurance"
];

/**
 * Generate a random job area.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobArea()
 *
 * @example
 *
 * randJobArea({ length: 10 })
 *
 */

function randJobArea(options) {
  return fake(data$Y, options);
}

var data$X = [
	"Senior",
	"Corporate",
	"Future",
	"International",
	"Global",
	"Central",
	"Product",
	"Internal",
	"National",
	"Direct",
	"Customer",
	"Human",
	"Lead",
	"District",
	"Chief",
	"Dynamic",
	"Principal",
	"Forward",
	"Legacy",
	"Regional",
	"Investor"
];

/**
 * Generate a random job descriptor.
 *
 * @category jobs
 *
 * @example
 *
 * randJobDescriptor()
 *
 * @example
 *
 * randJobDescriptor({ length: 10 })
 *
 */

function randJobDescriptor(options) {
  return fake(data$X, options);
}

var data$W = [
	"Internal Quality Coordinator",
	"Legacy Marketing Planner",
	"Investor Configuration Specialist",
	"Human Directives Engineer",
	"District Quality Technician",
	"Central Mobility Liaison",
	"International Interactions Orchestrator",
	"Central Implementation Producer",
	"Forward Configuration Facilitator",
	"Internal Solutions Coordinator",
	"Global Web Agent",
	"International Brand Associate",
	"Regional Applications Strategist",
	"Direct Brand Analyst",
	"Investor Mobility Consultant",
	"Principal Division Supervisor",
	"Chief Interactions Administrator",
	"District Web Facilitator",
	"Investor Metrics Consultant",
	"Corporate Applications Director",
	"Corporate Group Planner",
	"Global Functionality Manager",
	"Principal Web Engineer",
	"National Directives Executive",
	"Dynamic Factors Officer",
	"Principal Identity Supervisor",
	"Dynamic Solutions Administrator",
	"Corporate Interactions Analyst",
	"Senior Configuration Consultant",
	"Human Web Consultant",
	"Customer Metrics Technician",
	"Senior Solutions Producer",
	"Central Operations Technician",
	"Product Security Producer",
	"Forward Security Executive",
	"Dynamic Assurance Architect",
	"Internal Integration Representative",
	"Lead Web Developer",
	"Human Directives Assistant",
	"Internal Operations Representative",
	"Chief Communications Associate",
	"Principal Branding Strategist",
	"International Paradigm Specialist",
	"Regional Security Administrator",
	"Forward Operations Architect",
	"Product Mobility Orchestrator",
	"Lead Functionality Orchestrator",
	"Lead Solutions Consultant",
	"Human Markets Strategist",
	"International Infrastructure Engineer",
	"Dynamic Response Officer",
	"Dynamic Quality Engineer",
	"National Creative Strategist",
	"Principal Security Representative",
	"Internal Usability Executive",
	"Product Usability Coordinator",
	"Global Optimization Associate",
	"Global Configuration Executive",
	"Global Research Engineer",
	"Regional Accounts Associate",
	"Central Identity Agent",
	"Principal Program Officer",
	"Senior Group Developer",
	"Forward Research Coordinator",
	"Legacy Identity Developer",
	"Central Interactions Developer",
	"Direct Research Technician",
	"Chief Web Planner",
	"Investor Program Architect",
	"National Intranet Architect",
	"Principal Operations Administrator",
	"Legacy Security Associate",
	"Global Communications Architect",
	"Forward Configuration Analyst",
	"Customer Program Representative",
	"Dynamic Communications Director",
	"Dynamic Division Architect",
	"Customer Security Manager",
	"Dynamic Branding Analyst",
	"Internal Configuration Agent",
	"Principal Program Liaison",
	"Regional Research Administrator",
	"Dynamic Functionality Coordinator",
	"Investor Configuration Producer",
	"Direct Web Engineer",
	"Central Implementation Orchestrator",
	"Investor Tactics Strategist",
	"National Creative Agent",
	"Central Intranet Specialist",
	"Future Creative Strategist",
	"Product Intranet Liaison",
	"Dynamic Markets Consultant",
	"Global Infrastructure Administrator",
	"Lead Interactions Supervisor",
	"Future Usability Designer",
	"Principal Research Producer",
	"International Quality Facilitator",
	"Legacy Data Director",
	"Dynamic Infrastructure Representative",
	"Direct Paradigm Analyst"
];

/**
 * Generate a random job title.
 *
 * @category Jobs
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 */

function randJobTitle(options) {
  return fake(data$W, options);
}

var data$V = [
	"Director",
	"Representative",
	"Officer",
	"Coordinator",
	"Engineer",
	"Designer",
	"Developer",
	"Specialist",
	"Analyst",
	"Orchestrator",
	"Technician",
	"Executive",
	"Assistant",
	"Producer",
	"Liaison",
	"Consultant",
	"Architect",
	"Associate",
	"Manager",
	"Agent",
	"Facilitator",
	"Planner",
	"Administrator",
	"Supervisor"
];

/**
 * Generate a random job type.
 *
 * @category jobs
 *
 * @example
 *
 * randJobType()
 *
 * @example
 *
 * randJobType({ length: 10 })
 *
 */

function randJobType(options) {
  return fake(data$V, options);
}

var data$U = [
	"Afrikaans",
	"Amharic",
	"Arabic",
	"Azerbaijani",
	"Byelorussian",
	"Bulgarian",
	"Bengali,Bangla",
	"Bosnian",
	"Catalan",
	"Cebuano",
	"Corsican",
	"Czech",
	"Welsh",
	"Danish",
	"German",
	"Greek",
	"English",
	"Esperanto",
	"Spanish",
	"Estonian",
	"Basque",
	"Persian",
	"Finnish",
	"French",
	"Frisian",
	"Irish",
	"Gaelic (Scots Gaelic)",
	"Galician",
	"Gujarati",
	"Hausa",
	"Hindi",
	"Hmong",
	"Croatian",
	"Haitian Creole",
	"Hungarian",
	"Armenian",
	"Indonesian",
	"Igbo",
	"Icelandic",
	"Italian",
	"Hebrew",
	"Japanese",
	"Javanese",
	"Georgian",
	"Kazakh",
	"Cambodian",
	"Kannada",
	"Korean",
	"Kurdish",
	"Kirghiz",
	"Latin",
	"Luxembourgish",
	"Laothian",
	"Lithuanian",
	"Latvian,Lettish",
	"Malagasy",
	"Maori",
	"Macedonian",
	"Malayalam",
	"Mongolian",
	"Marathi",
	"Malay",
	"Maltese",
	"Burmese",
	"Nepali",
	"Dutch",
	"Norwegian",
	"Nyanja",
	"Punjabi",
	"Polish",
	"Pashto,Pushto",
	"Portuguese",
	"Romanian",
	"Russian",
	"Sindhi",
	"Singhalese",
	"Slovak",
	"Slovenian",
	"Samoan",
	"Shona",
	"Somali",
	"Albanian",
	"Serbian",
	"Sesotho",
	"Sundanese",
	"Swedish",
	"Swahili",
	"Tamil",
	"Tegulu",
	"Tajik",
	"Thai",
	"Turkish",
	"Ukrainian",
	"Urdu",
	"Uzbek",
	"Vietnamese",
	"Xhosa",
	"Yiddish",
	"Yoruba",
	"Chinese",
	"Zulu"
];

var data$T = [
	"af",
	"am",
	"ar",
	"az",
	"be",
	"bg",
	"bn",
	"bs",
	"ca",
	"ce",
	"co",
	"cs",
	"cy",
	"da",
	"de",
	"el",
	"en",
	"eo",
	"es",
	"et",
	"eu",
	"fa",
	"fi",
	"fr",
	"fy",
	"ga",
	"gd",
	"gl",
	"gu",
	"ha",
	"hi",
	"hm",
	"hr",
	"ht",
	"hu",
	"hy",
	"id",
	"ig",
	"is",
	"it",
	"iw",
	"ja",
	"jv",
	"ka",
	"kk",
	"km",
	"kn",
	"ko",
	"ku",
	"ky",
	"la",
	"lb",
	"lo",
	"lt",
	"lv",
	"mg",
	"mi",
	"mk",
	"ml",
	"mn",
	"mr",
	"ms",
	"mt",
	"my",
	"ne",
	"nl",
	"no",
	"ny",
	"pa",
	"pl",
	"ps",
	"pt",
	"ro",
	"ru",
	"sd",
	"si",
	"sk",
	"sl",
	"sm",
	"sn",
	"so",
	"sq",
	"sr",
	"st",
	"su",
	"sv",
	"sw",
	"ta",
	"te",
	"tg",
	"th",
	"tr",
	"uk",
	"ur",
	"uz",
	"vi",
	"xh",
	"yi",
	"yo",
	"zh",
	"zu"
];

/**
 * Generate a random language.
 *
 * @category person
 *
 * @example
 *
 * randLanguage()
 *
 * @example
 *
 * randLanguage({ length: 10 })
 *
 * @example
 *
 * randLanguage({ code: true }) // default is false
 *
 */

function randLanguage(options) {
  return fake(options != null && options.code ? data$T : data$U, options);
}

/**
 * Generate a random latitude.
 *
 * @category address
 *
 * @example
 *
 * randLatitude()
 *
 * @example
 *
 * randLatitude({ length: 10 })
 *
 */

function randLatitude(options) {
  return fake(() => getRandomInRange({
    min: -90,
    max: 90,
    fraction: 3
  }), options);
}

const maxWords = 50;

function getSpecialCharacter(wordCount) {
  const randomNumber = getRandomInRange({
    min: 1,
    max: 10,
    fraction: 0
  });

  if (randomNumber === 1 || wordCount === maxWords) {
    return '.';
  }

  if (randomNumber === 2) {
    return ',';
  }

  return '';
}
/**
 * Generate a random sentence.
 *
 * @category text
 *
 * @example
 *
 * randSentence()
 *
 * @example
 *
 * randSentence({ length: 10 })
 *
 */


function randSentence(options) {
  const factory = () => {
    let text = randWord({
      capitalize: true
    });
    let wordCount = 1;

    while (wordCount < maxWords) {
      const randomWord = randWord();
      let specialChar = '';
      wordCount++;

      if (wordCount > 3) {
        specialChar = getSpecialCharacter(wordCount);
      }

      text += ` ${randomWord}${specialChar}`;

      if (specialChar === '.') {
        break;
      }
    }

    return text;
  };

  return fake(factory, options);
}

/**
 * Generate random lines.
 *
 * @category text
 *
 * @example
 *
 * randLine()
 *
 * @example
 *
 * randLine({ lineCount: 10 }) // default is 5
 *
 */

function randLine(options) {
  var _options$lineCount;

  const lineCount = (_options$lineCount = options == null ? void 0 : options.lineCount) != null ? _options$lineCount : 5;

  if (lineCount < 1 || isNaN(lineCount)) {
    throw 'Line count must be greater than 0';
  }

  const factory = () => {
    let lines = `${randSentence()}\n`;

    for (let i = 0; i < lineCount - 1; i++) {
      lines += `${randSentence()}\n`;
    }

    return lines;
  };

  return fake(factory, options);
}

var data$S = [
	"Commodi est rerum dolorum quae voluptatem aliquam.",
	"Minima qui ut nulla eius.\\nA incidunt ipsum tempore porro tempore.\\nFugit quas voluptas ducimus aut.\\nTempore nostrum velit expedita voluptate est.\\nNam iste explicabo tempore impedit voluptas.",
	"Dolorem sed neque sequi ad nulla.\\nEum tempora ut sit et ducimus.\\nVel a expedita dignissimos.\\nFacilis iste ut.\\nAd saepe doloremque possimus mollitia atque explicabo.",
	"Omnis quidem vero eius sed laudantium a ex a saepe.\\nModi qui laudantium in libero odit et impedit.",
	"Doloribus temporibus dolorum placeat.\\nFugit nulla quaerat.\\nEveniet ratione odit sed non rerum.\\nNemo tempore eveniet veritatis alias repellat et.\\nVoluptas nisi quis commodi id.",
	"Sunt hic autem eum sint quia vitae.",
	"Laborum est maxime enim accusantium magnam.\\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\\nDeleniti consequatur explicabo aut nobis est vero tempore.\\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet.",
	"Sed dolores nostrum quis.",
	"Autem sed aspernatur aut sint ipsam et facere rerum voluptas.\\nPerferendis eligendi molestias laudantium eveniet eos.\\nId veniam asperiores quis voluptates aut deserunt.\\nTempora et eius dignissimos nulla iusto et omnis pariatur.\\nSit mollitia eum blanditiis suscipit.",
	"Temporibus aut adipisci magnam aliquam eveniet nihil laudantium reprehenderit sit.\\nAspernatur cumque labore voluptates mollitia deleniti et.",
	"Ipsam voluptate fugiat iusto illo dignissimos rerum sint placeat.\\nLabore sit omnis.",
	"Deserunt ab porro similique est accusamus id enim aut suscipit.\\nSoluta reprehenderit error nesciunt odit veniam sed.\\nDolore optio qui aut ab.\\nAut minima provident eius repudiandae a quibusdam in nisi quam.",
	"Mollitia nostrum exercitationem sunt rem.\\nRem et voluptas consequatur mollitia nostrum.\\nSunt nesciunt et pariatur quam provident impedit.",
	"Ipsum eos ipsam.\\nAperiam quia quis sit fugiat saepe voluptas est.\\nDolores et veniam ut.\\nQuibusdam voluptatum quis.\\nEt omnis ut corporis.",
	"Quia consequatur voluptatibus et.\\nVoluptatibus aspernatur et.\\nDicta architecto qui dignissimos.\\nVeritatis facilis voluptatem inventore aliquid cum.\\nNumquam odio quis porro sunt adipisci culpa.",
	"Totam ab necessitatibus quidem non.",
	"Quia quo iste et aperiam voluptas consectetur a omnis et.\\nDolores et earum consequuntur sunt et.\\nEa nulla ab voluptatem dicta vel.",
	"Qui corrupti at eius cumque adipisci ut sunt voluptates ab.",
	"Blanditiis non quos aut dolore nulla unde.\\nIncidunt repudiandae amet eius porro.\\nTempora unde sapiente repellat voluptatem omnis et ut omnis in.\\nEt pariatur odit qui minima perspiciatis non dolores.",
	"Sed odit quidem qui sed eum id eligendi laboriosam.",
	"Nisi vitae nostrum perspiciatis impedit laborum repellat ullam et ut.",
	"Quas ea voluptatem iste iure.\\nEt soluta et doloremque vero quis occaecati et fuga.\\nIncidunt recusandae dignissimos iusto quisquam sed unde at ea incidunt.\\nId voluptate incidunt qui totam autem voluptas maxime atque quaerat.\\nCorporis iste ut molestiae.",
	"Qui soluta veritatis autem repellat et inventore occaecati.",
	"Totam voluptas consequatur officiis.\\nPlaceat sit nobis ut est quae dolore consequuntur vel.\\nRepudiandae ut molestias rerum occaecati quod.\\nRerum optio minus aliquid.\\nIllum et voluptas iusto molestiae nulla praesentium deserunt est voluptas.",
	"Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi.",
	"Ut in omnis sapiente laboriosam autem laborum.\\nRepellendus et beatae qui qui numquam saepe.\\nNon vitae molestias quos illum.\\nSed fugiat qui ullam molestias ad ullam dolore.\\nAutem ex minus distinctio dicta sapiente beatae veritatis at.",
	"Nemo repudiandae molestiae.\\nNobis sed ducimus aperiam.\\nBeatae cupiditate praesentium in omnis.",
	"Voluptatem sed debitis.\\nArchitecto sint et deleniti et quod possimus cupiditate.\\nTempore aut eum ipsum recusandae aliquid.",
	"Qui eligendi molestiae molestiae sit rem quis.\\nDucimus voluptates ut ducimus possimus quis.\\nCupiditate velit cupiditate harum impedit minima veniam ipsam amet atque.\\nEt architecto molestiae omnis eos aspernatur voluptatem occaecati non.\\nMolestiae inventore aut aut nesciunt totam eum a expedita illo.",
	"Consequuntur dolorem enim eos sit.\\nMollitia impedit dolor optio et dolorem.\\nVitae nulla eos excepturi culpa.\\nMagni iure optio quaerat.\\nAb sed sit autem et ut eum.",
	"Et fuga repellendus magnam dignissimos eius aspernatur rerum.",
	"Debitis facilis dolorum maiores aut et.\\nEa voluptas magnam deserunt at ut sunt voluptatem.\\nEt voluptatem voluptatem.\\nUt est fugiat magnam.",
	"Temporibus quod quidem placeat porro.\\nUnde ipsam vel explicabo.",
	"Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae.",
	"Laborum excepturi numquam sequi reiciendis voluptate repellat sint.\\nQui inventore ipsam voluptatem sit quos.\\nDolorem aut quod suscipit fugiat culpa.\\nOdio nostrum praesentium accusantium dolor quo.",
	"Voluptatem velit ut deserunt.\\nQuibusdam eius repellat.",
	"Illum voluptates ut vel et.\\nUt debitis excepturi suscipit perferendis officia numquam possimus.\\nFacere sit doloremque repudiandae corrupti veniam qui.",
	"Autem reiciendis provident iure possimus.\\nOccaecati soluta quibusdam libero tenetur minus vel sit illo.\\nCulpa optio dolorem eos similique voluptatem voluptatibus error accusantium.",
	"Ipsa cumque ad repellat qui libero quia impedit fugiat.\\nExcepturi ut vitae recusandae eos quisquam et voluptatem.\\nNeque nostrum distinctio provident eius tempore odio aliquid.\\nSaepe ut suscipit architecto.",
	"Non natus nihil.",
	"Ad voluptate vel.\\nAut aut dolor.",
	"Est est sed itaque necessitatibus vitae officiis.\\nIusto dolores sint eveniet quasi dolore quo laborum esse laboriosam.\\nModi similique aut voluptates animi aut dicta dolorum.\\nSint explicabo autem quidem et.\\nNeque aspernatur assumenda fugit provident.",
	"Voluptatibus harum ullam odio sed animi corporis.",
	"Laborum itaque quos provident.\\nRerum cupiditate praesentium amet voluptatem dolor impedit modi dicta.\\nVoluptates assumenda optio est.\\nNon aperiam nam consequuntur vel a commodi dicta incidunt.",
	"Et perspiciatis illo.\\nLaboriosam aspernatur omnis expedita doloribus.\\nEum aliquam provident voluptas similique et omnis.",
	"Ipsa laudantium deserunt.",
	"Nesciunt numquam velit nihil qui quia eius.",
	"Voluptate et quasi optio eos et eveniet culpa et nobis.\\nSint aut sint sequi possimus reiciendis nisi.\\nRerum et omnis et sit doloribus corporis voluptas error.\\nIusto molestiae tenetur necessitatibus dolorem omnis.",
	"Quia harum nulla et quos sint voluptates exercitationem corrupti.",
	"Similique et quos maiores commodi exercitationem laborum animi qui.",
	"Ab quis aut earum.\\nVoluptatem sint accusantium sed cupiditate optio.\\nConsequatur in dolores aut enim.\\nNon sunt atque maxime dolores.\\nNam impedit sit.",
	"Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit.",
	"Cum vitae aliquam neque consequatur quia id dicta ipsam.\\nExercitationem ab eum exercitationem non alias numquam qui.\\nItaque rerum ut nobis est nam vitae exercitationem minima fugiat.\\nEst sit non tempora soluta consequatur eveniet.\\nCorporis nisi dolorem architecto voluptatem.",
	"Qui et dolorum.\\nEveniet architecto qui accusamus et modi harum facilis a eum.\\nEt vel cumque voluptatem earum minima perferendis.",
	"Consequatur odit voluptatem qui.\\nQui quis sequi vel corrupti asperiores soluta rerum.\\nIusto at id quod reiciendis.",
	"Dolorum eius dignissimos et magnam voluptate aut voluptatem natus.\\nAut sint est eum molestiae consequatur officia omnis.\\nQuae et quam odit voluptatum itaque ducimus magni dolores ab.\\nDolorum sed iure voluptatem et reiciendis.",
	"Id est non ad temporibus nobis.\\nQuod soluta quae voluptatem quisquam est.",
	"Exercitationem suscipit enim et aliquam dolor.",
	"Deleniti explicabo assumenda ipsum cumque voluptatem blanditiis voluptatum omnis provident.\\nQuis placeat nisi fugit aperiam quaerat mollitia.\\nOccaecati repellendus voluptate similique.\\nLaboriosam qui qui voluptas itaque ipsa.",
	"Voluptas aut occaecati cum et quia quam.\\nBeatae libero doloribus nesciunt iusto.\\nDolores vitae neque quisquam qui ipsa ut aperiam.",
	"Eveniet sit ipsa officiis laborum.\\nIn vel est omnis sed impedit quod magni.\\nDignissimos quis illum qui atque aut ut quasi sequi.",
	"Voluptatem cumque molestias soluta consequatur aut voluptatibus beatae vel commodi.\\nNulla voluptatem aut.",
	"Pariatur quo neque est perspiciatis non illo rerum expedita minima.\\nEt commodi voluptas eos ex.\\nUnde velit delectus deleniti deleniti non in sit.\\nAliquid voluptatem magni.",
	"Aut ipsa et qui vel similique sed hic a.\\nVoluptates dolorem culpa nihil aut ipsam voluptatem.",
	"Animi enim quo deserunt.\\nAmet facilis at laboriosam.\\nRerum assumenda harum et sapiente suscipit ipsa fugiat.\\nSunt ut aut rem expedita consequatur optio.\\nRecusandae tenetur rerum quos culpa.",
	"Maiores assumenda porro est ea necessitatibus qui qui dolorum.\\nVelit suscipit ut ipsam odit aut earum.",
	"Placeat sequi quaerat sapiente aspernatur autem sunt molestiae voluptatem.\\nAccusamus unde libero accusamus omnis totam et temporibus.",
	"Nemo tempore dolor maiores blanditiis quia qui qui voluptatem non.\\nNisi dolores animi laboriosam aliquam qui adipisci voluptates atque dignissimos.\\nLibero sit quibusdam corporis aut inventore natus libero.\\nPraesentium omnis dolorum temporibus repellendus qui.\\nNon nostrum doloribus occaecati dolores sit ut.",
	"Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod.",
	"Est aut quis soluta accusantium debitis vel.\\nQuisquam aliquid ex corporis velit.",
	"Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae.",
	"Ducimus dolores recusandae.\\nEa aut aperiam et aut eos inventore.\\nQuia cum ducimus autem iste.\\nQuos consequuntur est delectus temporibus autem.",
	"Sapiente vitae culpa ut voluptatem incidunt excepturi voluptates exercitationem.\\nSed doloribus alias consectetur omnis occaecati ad placeat labore.\\nVoluptate consequatur expedita nemo recusandae sint assumenda.\\nQui vel totam quia fugit saepe suscipit autem quasi qui.\\nEt eum vel ut delectus ut nesciunt animi.",
	"Eos pariatur eos fugit aut aperiam labore beatae.\\nVel non ea id dignissimos voluptate quis error assumenda consectetur.\\nRerum quas libero totam error facere sunt facilis quo.\\nEveniet debitis et aliquid ratione.",
	"Incidunt doloremque enim autem quam et magnam et expedita fuga.\\nPlaceat quia dolor ut.\\nNon dolor amet temporibus quas non hic sed.\\nQui tempore enim mollitia omnis sed ut eos rerum et.\\nQuidem voluptas est vel.",
	"Officia consectetur quibusdam velit debitis porro quia cumque.\\nSuscipit esse voluptatem cum sit totam consequatur molestiae est.\\nMollitia pariatur distinctio fugit.",
	"Ipsa labore numquam aut quidem quia.\\nMinus ut et recusandae sed dolorem eveniet.\\nEst vero sit et omnis et explicabo exercitationem qui quasi.\\nQui maxime iusto alias sint nihil quas.\\nModi quaerat voluptatem reiciendis reiciendis vero.",
	"Sapiente maxime sequi.",
	"Ab rerum eos ipsa accusantium nihil voluptatem.\\nEum minus alias.\\nIure commodi at harum.\\nNostrum non occaecati omnis quisquam.",
	"Facere consequatur ullam.\\nSint illum iste ab et saepe sit ut quis voluptatibus.\\nQuo esse dolorum a quasi nihil.\\nError quo eveniet.\\nQuia aut rem quia in iste fugit ad.",
	"Sunt dolor maxime nam assumenda non beatae magni molestias quia.",
	"Facere beatae delectus ut.\\nPossimus voluptas perspiciatis voluptatem nihil sint praesentium.\\nSint est nihil voluptates nesciunt voluptatibus temporibus blanditiis.\\nOfficiis voluptatem earum sed.",
	"In ipsam mollitia placeat quia adipisci rerum labore repellat.",
	"Et sed dicta eveniet accusamus consequatur.\\nUllam voluptas consequatur aut eos ducimus.\\nId officia est ut dicta provident beatae ipsa.",
	"Consequatur exercitationem asperiores quidem fuga rerum voluptas pariatur.\\nRepellendus sit itaque nam.\\nDeleniti consectetur vel aliquam vitae est velit.\\nId blanditiis ullam sed consequatur omnis.",
	"Dicta quia molestias natus est.\\nSit animi inventore a ut ut suscipit.\\nEos et et commodi eligendi nihil.\\nEa reprehenderit consectetur eum.",
	"Iusto laborum aperiam neque delectus consequuntur provident est maiores explicabo.",
	"Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et.",
	"Quos pariatur tenetur.\\nQuasi omnis eveniet eos maiores esse magni possimus blanditiis.\\nQui incidunt sit quos consequatur aut qui et aperiam delectus.\\nPraesentium quas culpa.\\nEaque occaecati cumque incidunt et.",
	"Quo perferendis nesciunt.\\nDolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et.\\nTempora facere ipsa.\\nDolore accusamus soluta officiis eligendi.\\nEum quaerat neque eum beatae odio.",
	"Ut autem labore nisi iusto.\\nRepellendus voluptate eaque eligendi nam facere tempora soluta.\\nAnimi sed vero aut dignissimos.",
	"Officia vero fugiat sit praesentium fugiat id cumque.\\nEt iste amet dolores molestiae quo dignissimos recusandae.\\nAliquam explicabo facilis asperiores ea optio.\\nExplicabo ut quia harum corrupti omnis.\\nOmnis sit mollitia qui dolorem ipsam sed aut.",
	"Non enim expedita maiores incidunt voluptatem rem.\\nEt nam vel nihil non non.\\nVoluptates accusantium aut nisi et error doloribus molestiae voluptas soluta.",
	"Quis nesciunt ut est eos.\\nQui reiciendis doloribus.\\nEst quidem ullam reprehenderit.\\nEst omnis eligendi quis quis quo eum officiis asperiores quis.",
	"Reprehenderit quae quas quos sapiente ullam ut.\\nVoluptates non ut.",
	"Molestias non debitis quibusdam quis quod.\\nSaepe ab et hic unde et sed.\\nMagni voluptatem est.\\nEt similique quo porro et.",
	"Doloribus consequatur et labore suscipit deserunt tempore ad quasi sed.\\nQuam cupiditate modi dolor et eos et culpa qui.\\nDelectus molestias ea id.\\nIllum ea unde sapiente non non non.\\nDolorem ut sed magni.",
	"Rerum minus et quia et dolorem officiis sunt id.\\nPariatur dolorum sint blanditiis ex vero optio.\\nQuam numquam omnis porro voluptatem.",
	"Dolores accusamus ducimus suscipit neque fugit quo aliquam.\\nOdit eum eum sint accusamus.\\nQuod ipsum sed placeat.\\nEt culpa voluptas et quod atque a.\\nVoluptatibus rerum nihil quia cupiditate nihil facere beatae dolor.",
	"Fugit harum mollitia.\\nMagni eos asperiores assumenda ad."
];

/**
 * Generate a random lines.
 *
 * @category text
 *
 * @example
 *
 * randLines()
 *
 * @example
 *
 * randLines({ length: 10 })
 *
 */

function randLines(options) {
  return fake(data$S, options);
}

var data$R = [
	"Cape lion",
	"Transvaal lion",
	"Masai Lion",
	"Barbary Lion",
	"West African Lion",
	"Northeast Congo Lion",
	"Asiatic Lion"
];

/**
 * Generate a random lion.
 *
 * @category animals
 *
 * @example
 *
 * randLion()
 *
 * @example
 *
 * randLion({ length: 10 })
 *
 */

function randLion(options) {
  return fake(data$R, options);
}

var data$Q = [
	"cz",
	"ge",
	"ne",
	"it",
	"de_CH",
	"en_AU_ocker",
	"ja",
	"ar",
	"en_CA",
	"pt_BR",
	"de",
	"es",
	"vi",
	"hr",
	"en_ZA",
	"fr",
	"id_ID",
	"nb_NO",
	"zh_TW",
	"ro",
	"pl",
	"en_GB",
	"en_AU",
	"fr_CA",
	"hy",
	"ko",
	"en_BORK",
	"es_MX",
	"en_IE",
	"az",
	"nl_BE",
	"en_US",
	"sk",
	"fr_CH",
	"en_IND",
	"sv",
	"fi",
	"en",
	"zh_CN",
	"he",
	"pt_PT",
	"de_AT"
];

/**
 * Generate a random locale.
 *
 * @category address
 *
 * @example
 *
 * randLocale()
 *
 * @example
 *
 * randLocale({ length: 10 })
 *
 */

function randLocale(options) {
  return fake(data$Q, options);
}

/**
 * Generate a random longitude.
 *
 * @category address
 *
 * @example
 *
 * randLongitude()
 *
 * @example
 *
 * randLongitude({ length: 10 })
 *
 */

function randLongitude(options) {
  return fake(() => getRandomInRange({
    min: -180,
    max: 180,
    fraction: 3
  }), options);
}

/**
 * Generate a random mac address.
 *
 * @category system
 *
 * @example
 *
 * randMac()
 *
 * @example
 *
 * randMac({ length: 10 })
 *
 */

function randMac(options) {
  return fake(() => Array.from({
    length: 6
  }, () => randHexaDecimal() + randHexaDecimal()).join('-'), options);
}

/**
 * Generate a random mask.
 *
 * @category Finance
 *
 * @example
 *
 * randMask()
 *
 * @example
 *
 * randMask({ mask: '@#### @##' })
 *
 * @example
 *
 * randMask({ length: 10 })
 *
 */

function randMask(options) {
  return fake(() => {
    var _options$mask, _options$char, _options$digit;

    const [mask, char, digit] = [(_options$mask = options == null ? void 0 : options.mask) != null ? _options$mask : '@##@#', (_options$char = options == null ? void 0 : options.char) != null ? _options$char : '@', (_options$digit = options == null ? void 0 : options.digit) != null ? _options$digit : '#'];
    return mask.split('').map(item => {
      if (item === char) return randAlpha();else if (item === digit) return getRandomInRange({
        min: 0,
        max: 9,
        fraction: 0
      });else return item;
    }).join('');
  }, options);
}

var data$P = [
	"application/vnd.lotus-approach",
	"application/vnd.wv.csp+wbxml",
	"application/font-tdpfr",
	"application/vnd.nokia.iptv.config+xml",
	"application/vnd.oma.dcdc",
	"application/vnd.dece.data",
	"audio/x-flac",
	"application/vnd.uplanet.channel-wbxml",
	"application/vnd.fsc.weblaunch",
	"video/mpv",
	"application/vnd.framemaker",
	"application/vnd.gov.sk.e-form+xml",
	"model/vnd.opengex",
	"application/metalink+xml",
	"application/scvp-vp-response",
	"application/vnd.oipf.mippvcontrolmessage+xml",
	"multipart/form-data",
	"application/vnd.umajin",
	"application/x-bzip",
	"application/vnd.anser-web-certificate-issue-initiation",
	"application/ocsp-request",
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml",
	"video/ogg",
	"audio/evrcwb0",
	"application/vnd.font-fontforge-sfd",
	"application/vnd.openxmlformats-officedocument.presentationml-template",
	"video/parityfec",
	"application/vnd.openblox.game+xml",
	"text/jade",
	"audio/aptx",
	"application/vnd.japannet-registration",
	"application/vnd.pvi.ptid1",
	"application/vnd.webturbo",
	"application/vnd.accpac.simply.imp",
	"application/x-msschedule",
	"image/vnd.airzip.accelerator.azv",
	"application/vnd.kenameaapp",
	"application/vnd.geoplan",
	"application/vnd.tmd.mediaflex.api+xml",
	"application/mpeg4-iod",
	"application/vnd.syncml.dmddf+xml",
	"application/vnd.cluetrust.cartomobile-config",
	"application/vnd.radisys.msml-audit-stream+xml",
	"application/vnd.sus-calendar",
	"application/samlassertion+xml",
	"application/vnd.ms-word.document.macroenabled.12",
	"application/x-shockwave-flash",
	"application/xcap-error+xml",
	"video/h264-svc",
	"multipart/header-set",
	"image/vnd.adobe.photoshop",
	"application/pkix-pkipath",
	"application/mac-compactpro",
	"text/vnd.fly",
	"application/vnd.novadigm.edm",
	"application/vnd.dtg.local.flash",
	"application/vnd.ecowin.series",
	"application/vnd.spotfire.dxp",
	"audio/x-m4a",
	"text/rtp-enc-aescm128",
	"audio/pcmu",
	"multipart/appledouble",
	"audio/x-wav",
	"application/vnd.ibm.electronic-media",
	"text/coffeescript",
	"application/metalink4+xml",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
	"audio/1d-interleaved-parityfec",
	"application/vnd.powerbuilder75",
	"application/sql",
	"text/markdown",
	"text/vnd.dmclientscript",
	"application/pidf+xml",
	"application/mbms-msk+xml",
	"audio/rtp-enc-aescm128",
	"application/x-font-dos",
	"application/x-pkcs7-certificates",
	"application/x-msaccess",
	"text/x-sass",
	"application/vnd.dart",
	"application/vnd.palm",
	"application/vnd.intergeo",
	"application/vnd.accpac.simply.aso",
	"model/vnd.moml+xml",
	"application/vnd.uplanet.alert-wbxml",
	"audio/g726-24",
	"image/vnd.microsoft.icon",
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml",
	"audio/ilbc",
	"audio/vnd.dts.hd",
	"audio/l20",
	"audio/vnd.nuera.ecelp4800",
	"video/vnd.iptvforum.1dparityfec-2005",
	"application/vnd.ms-asf",
	"application/vnd.avistar+xml",
	"audio/vnd.dolby.pulse.1",
	"application/vnd.dm.delegation+xml"
];

/**
 * Generate a random mime type.
 *
 * @category system
 *
 * @example
 *
 * randMimeType()
 *
 * @example
 *
 * randMimeType({ length: 10 })
 *
 */

function randMimeType(options) {
  return fake(data$P, options);
}

var data$O = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

/**
 * Generate a random month.
 *
 * @category date
 *
 * @example
 *
 * randMonth()
 *
 * @example
 *
 * randMonth({ abbreviation: true })
 *
 *
 * @example
 *
 * randMonth({ length: 10 })
 *
 */

function randMonth(options) {
  const monthData = data$O;
  const abbreviation = options == null ? void 0 : options.abbreviation;

  const factory = () => {
    const randMonth = randElement(monthData);

    if (abbreviation) {
      return randMonth.slice(0, 3);
    }

    return randMonth;
  };

  return fake(factory, options);
}

var data$N = [
	"The Shawshank Redemption",
	"The Godfather",
	"The Godfather: Part II",
	"Pulp Fiction",
	"The Good, the Bad and the Ugly",
	"The Dark Knight",
	"12 Angry Men",
	"Schindler's List",
	"The Lord of the Rings: The Return of the King",
	"Fight Club",
	"Star Wars: Episode V - The Empire Strikes Back",
	"The Lord of the Rings: The Fellowship of the Ring",
	"One Flew Over the Cuckoo's Nest",
	"Inception",
	"Goodfellas",
	"Star Wars",
	"Seven Samurai",
	"Forrest Gump",
	"The Matrix",
	"The Lord of the Rings: The Two Towers",
	"City of God",
	"Se7en",
	"The Silence of the Lambs",
	"Once Upon a Time in the West",
	"Casablanca",
	"The Usual Suspects",
	"Raiders of the Lost Ark",
	"Rear Window",
	"It's a Wonderful Life",
	"Psycho",
	"Léon: The Professional",
	"Sunset Blvd.",
	"American History X",
	"Apocalypse Now",
	"Terminator 2: Judgment Day",
	"Saving Private Ryan",
	"Memento",
	"City Lights",
	"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
	"Alien",
	"Modern Times",
	"Spirited Away",
	"North by Northwest",
	"Back to the Future",
	"Life Is Beautiful",
	"The Shining",
	"The Pianist",
	"Citizen Kane",
	"The Departed",
	"M",
	"Paths of Glory",
	"Vertigo",
	"Django Unchained",
	"Double Indemnity",
	"The Dark Knight Rises",
	"Aliens",
	"Taxi Driver",
	"American Beauty",
	"The Green Mile",
	"Gladiator",
	"The Intouchables",
	"WALL·E",
	"The Lives of Others",
	"Toy Story 3",
	"The Great Dictator",
	"The Prestige",
	"A Clockwork Orange",
	"Lawrence of Arabia",
	"Amélie",
	"To Kill a Mockingbird",
	"Reservoir Dogs",
	"Das Boot",
	"The Lion King",
	"Cinema Paradiso",
	"Star Wars: Episode VI - Return of the Jedi",
	"The Treasure of the Sierra Madre",
	"The Third Man",
	"Once Upon a Time in America",
	"Requiem for a Dream",
	"Eternal Sunshine of the Spotless Mind",
	"Full Metal Jacket",
	"Oldboy",
	"Braveheart",
	"L.A. Confidential",
	"Bicycle Thieves",
	"Chinatown",
	"Singin' in the Rain",
	"Princess Mononoke",
	"Monty Python and the Holy Grail",
	"Metropolis",
	"Rashomon",
	"Some Like It Hot",
	"Amadeus",
	"2001: A Space Odyssey",
	"All About Eve",
	"Witness for the Prosecution",
	"The Sting",
	"The Apartment",
	"Grave of the Fireflies",
	"Indiana Jones and the Last Crusade"
];

/**
 * Generate a random movie.
 *
 * @category Movie
 *
 * @example
 *
 * randMovie()
 *
 * @example
 *
 * randMovie({ length: 10 })
 *
 */

function randMovie(options) {
  return fake(data$N, options);
}

var data$M = [
	"Darth Vader",
	"Edna Mode",
	"Randle McMurphy",
	"Optimus Prime",
	"Norman Bates",
	"The Minions",
	"Maximus",
	"Legolas",
	"Wednesday Addams",
	"Inspector Clouseau",
	"Inigo Montoya",
	"Hal",
	"Groot",
	"Gromit",
	"Ethan Hunt",
	"Red",
	"Walker",
	"Corporal Hicks",
	"Bane",
	"Woody",
	"Withnail",
	"V",
	"Roy Batty",
	"Martin Blank",
	"Samwise Gamgee",
	"Private William Hudson",
	"Lisbeth Salander",
	"Frank Drebin",
	"Donnie Darko",
	"Captain Kirk",
	"Star-Lord",
	"Tony Montana",
	"Marge Gunderson",
	"Neo",
	"Harry Potter",
	"Gollum / Sméagol",
	"Hans Landa",
	"George Bailey",
	"Wolverine",
	"E.T.",
	"Bilbo Baggins",
	"Dr. King Schultz",
	"Ace Ventura",
	"Sarah Connor",
	"Katniss Everdeen",
	"Jack Burton",
	"Axel Foley",
	"Amélie Poulain",
	"Vito Corleone",
	"Shaun Riley",
	"Obi-Wan Kenobi",
	"Luke Skywalker",
	"Harry Callahan",
	"Lester Burnham",
	"Rick Deckard",
	"Captain America",
	"Tommy DeVito",
	"Anton Chigurh",
	"Amy Dunne",
	"Lou Bloom",
	"Keyser Söze",
	"Ferris Bueller",
	"Driver",
	"Yoda",
	"Walter Sobchak",
	"Rocky Balboa",
	"Atticus Finch",
	"Captain Mal Reynolds",
	"The Man With No Name",
	"Jules Winnfield",
	"Peter Venkman",
	"Gandalf",
	"Snake Plissken",
	"The Terminator (T-800)",
	"Forrest Gump",
	"Patrick Bateman",
	"Ash",
	"Daniel Plainview",
	"The Bride",
	"Travis Bickle",
	"Hannibal Lecter",
	"Doc Brown",
	"Loki",
	"Rick Blaine",
	"M. Gustave",
	"Ron Burgundy",
	"Aragorn",
	"Captain Jack Sparrow",
	"Iron Man",
	"Marty McFly",
	"Michael Corleone",
	"The Dude",
	"Tyler Durden",
	"John McClane",
	"The Joker",
	"Ellen Ripley",
	"Batman",
	"Han Solo",
	"James Bond",
	"Indiana Jones"
];

/**
 * Generate a random movie character.
 *
 * @category movie
 *
 * @example
 *
 * randMovieCharacter()
 *
 * @example
 *
 * randMovieCharacter({ length: 10 })
 *
 */

function randMovieCharacter(options) {
  return fake(data$M, options);
}

var data$L = [
	"Classical",
	"Reggae",
	"Blues",
	"Country",
	"Latin",
	"Funk",
	"Rap",
	"Folk",
	"Electronic",
	"World",
	"Hip Hop",
	"Pop",
	"Stage And Screen",
	"Soul",
	"Non Music",
	"Jazz",
	"Rock",
	"Metal"
];

/**
 * Generate a random genre.
 *
 * @category music
 *
 * @example
 *
 * randMusicGenre()
 *
 * @example
 *
 * randMusicGenre({ length: 10 })
 *
 */

function randMusicGenre(options) {
  return fake(data$L, options);
}

/**
 * Generate a random GPS coordinate.
 *
 * @category address
 *
 * @example
 *
 * randNearbyGPSCoordinate()
 *
 * @example
 *
 * randNearbyGPSCoordinate({ length: 10 })
 *
 */

function randNearbyGPSCoordinate(options) {
  return fake(() => [randLatitude(), randLongitude()], options);
}

var data$K = [
	"Amazon",
	"AOL",
	"Autodesk",
	"Apple",
	"Basecamp",
	"Battle.net",
	"Bitbucket",
	"bitly",
	"Box",
	"ClearScore",
	"Cloud Foundry",
	"Dailymotion",
	"Deutsche Telekom",
	"deviantART",
	"Discogs",
	"Discord",
	"Dropbox",
	"Etsy",
	"Evernote",
	"Facebook",
	"FatSecret",
	"Fitbit",
	"Flickr",
	"Formstack",
	"Foursquare",
	"GitHub",
	"GitLab",
	"Goodreads",
	"Google",
	"Google App Engine",
	"Groundspeak",
	"Huddle",
	"Imgur",
	"Instagram",
	"IntelCloud Services",
	"Jive Software",
	"Keycloak",
	"LinkedIn",
	"LoginRadius",
	"Microsoft services",
	"Mixi",
	"MySpace",
	"MoreTeam",
	"Netflix",
	"NetIQ",
	"Okta",
	"OpenAM",
	"OpenStreetMap",
	"OpenTable",
	"ORCID",
	"PayPal",
	"Ping Identity",
	"Pixiv",
	"Plurk",
	"Reddit",
	"Salesforce.com",
	"Sina Weibo",
	"Spotify",
	"Stack Exchange",
	"StatusNet",
	"Strava",
	"Stripe",
	"Trello",
	"Tumblr",
	"Twitch",
	"Twitter",
	"Ubuntu One",
	"Viadeo",
	"Vimeo",
	"VK",
	"WeChat",
	"Withings",
	"WooCommerce",
	"WordPress.com",
	"WSO2 Identity Server",
	"Xero",
	"XING",
	"Yahoo!",
	"Yammer",
	"Yandex",
	"Yelp",
	"Zendesk"
];

/**
 * Generate a random OAuth provider.
 *
 * @category Internet
 *
 * @example
 *
 * randOAuthProvider()
 *
 * @example
 *
 * randOAuthProvider({ length: 10 })
 *
 */

function randOAuthProvider(options) {
  return fake(data$K, options);
}

/**
 * Generate a random octal.
 *
 * @category Math
 *
 * @example
 *
 * randOctal()
 *
 * @example
 *
 * randOctal({ length: 10 })
 *
 */
function randOctal(options) {
  const RADIX = 8;
  const randomNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return BigInt(randomNumber.toString(RADIX));
}

var data$J = [
	"Southwest",
	"Northwest",
	"Southeast",
	"Northeast"
];

/**
 * Generate a random ordinal direction.
 *
 * @category address
 *
 * @example
 *
 * randOrdinalDirection()
 *
 * @example
 *
 * randOrdinalDirection({ length: 10 })
 *
 */

function randOrdinalDirection(options) {
  return fake(data$J, options);
}

var data$I = [
	"Quia sit architecto itaque voluptas aliquam. Rem veritatis qui quasi sint velit dolorem maxime voluptatem. Sit aut laboriosam aspernatur dicta non consequatur qui recusandae. Dignissimos voluptatem labore praesentium.",
	"Eveniet qui aperiam et. Rem incidunt sapiente architecto earum consectetur officia. Assumenda voluptatem sed aperiam sed temporibus sunt in. Totam molestiae aspernatur quia non rem facilis expedita harum veritatis. Culpa ipsam quo dolor.",
	"Perspiciatis distinctio quia est magni. Aliquid id sed qui quis eum amet ut iusto. Et eos repellat nisi doloremque. Non est aut dolores accusamus pariatur placeat amet dolor.",
	"Sint doloribus id voluptatem nulla dicta deserunt. Enim exercitationem aut modi saepe numquam ea. Voluptas mollitia non totam tempora delectus tenetur necessitatibus officiis. Odit vero consequatur qui dolorem et. Repellendus quia iure et dolorem.",
	"Error quos aperiam et dolor et sit occaecati. Qui minima officia pariatur dolorem sit. Et incidunt consequatur eaque unde sunt sit dolore. Et quia ut rerum. Fugit sunt architecto cupiditate voluptas.",
	"Consequatur praesentium vel optio facilis alias ea nesciunt. Soluta dolores facere eum ea quasi qui. Odit quisquam libero recusandae sit sit sed. Distinctio nihil omnis est sunt.",
	"Magni fugit perspiciatis aperiam ipsam dolorem minima. Magni ea qui quaerat harum quo repellat eos. Necessitatibus possimus quis fugit aut sed quis asperiores et.",
	"Perspiciatis illum illum et et error labore ut iure. Eius quidem eius placeat blanditiis in et deserunt. Eligendi fugiat vero nam asperiores sequi sit dignissimos. Quam rerum consequuntur dolor.",
	"Distinctio facere fugit vel nobis dolor voluptas vel quod in. Molestiae et velit. Maiores voluptatem ut qui eligendi repellat eos quia. Tempore ipsa voluptatem minus. In reiciendis dolorem deserunt consequatur at.",
	"Consectetur suscipit beatae est ut ut dolorem voluptas. Et sunt ratione. Consequatur illo et architecto.",
	"Quisquam at dolorem cupiditate enim ut recusandae porro aut quae. In nostrum et velit maiores dolores in architecto natus delectus. Aspernatur possimus libero velit omnis beatae. Libero adipisci et consequatur ullam. Aliquam est nam repudiandae odio. Eligendi vitae in beatae sint saepe ut eaque esse.",
	"Odit consequatur nobis aut quo dolores in adipisci praesentium. Quod rerum ducimus ad. Ut autem velit consequatur nihil animi animi architecto. Quaerat et sed.",
	"Vel provident ab nemo rerum consequatur fugiat. Voluptas facilis officia sint ullam omnis qui quis a. Nostrum atque laudantium delectus dolorum quod error.",
	"Veritatis officiis est occaecati sunt consequatur. Aut sapiente totam sed ad ad qui eum omnis deleniti. Quis blanditiis aperiam.",
	"Asperiores labore tempore quam. Ut voluptatem unde tempore fuga non repellendus omnis maxime. Quia soluta quibusdam. Commodi animi eum dolorem placeat sit. Quam nihil doloremque eligendi rem quibusdam iusto consequatur quae. Modi quaerat labore laboriosam quaerat sint nulla.",
	"Provident cumque quos quam enim. Nihil aperiam nihil ut. Blanditiis enim officia omnis quo tenetur aliquid odio et. Perspiciatis unde officiis ea expedita id dolorem. Quam nihil et amet quos et fugit. Cum voluptatem tempora deserunt.",
	"Ipsa nemo eos sequi nulla id accusamus nam ratione dolore. Omnis sint quisquam accusamus rem rem nihil. Non minus animi cum dolorem earum odit sequi. Rem non inventore sed dicta atque modi. Sed dolorem iste molestiae. Sed eum iste aliquid aliquid.",
	"Et quod ad optio culpa dicta at eveniet. Deserunt perferendis debitis sunt aut. Laboriosam laboriosam aspernatur id corporis.",
	"Et atque sunt ab esse excepturi ut quos delectus. Possimus dolor assumenda dicta sapiente quaerat nisi sed consequatur hic. In dolorem eos ut eum nam accusantium iure. Ipsam laborum deleniti ut.",
	"Et id harum unde et ratione minima non. Suscipit ipsum rem. Sed asperiores quaerat dolorum autem nihil voluptatem et hic ut. Molestiae rerum autem. Dolores nam soluta officia pariatur debitis.",
	"Alias esse minus. Molestiae et ut dolores iste. Nam sint aut. Explicabo ut earum modi accusamus facilis rerum.",
	"Sint id odit. Tenetur sit in deserunt voluptatem corporis voluptatum culpa eligendi. Est quia reprehenderit atque modi. Ipsum quo eos deserunt nobis.",
	"Molestias in reprehenderit molestias quam doloribus tenetur. Cupiditate enim ad est nemo et quos. Minus non et voluptatem magni voluptatibus consectetur temporibus ad. Molestiae sed voluptate et dolor eaque sequi minima. Quisquam atque distinctio culpa distinctio rerum labore vero assumenda voluptate.",
	"Quas quidem dolores eum aspernatur tempore illo deserunt veniam sed. Non est molestias omnis dolorem doloremque et exercitationem odit itaque. Aliquid nam eos rem maiores exercitationem similique rerum voluptatem voluptas. Dolor rerum ea hic esse inventore.",
	"Distinctio adipisci ex. Temporibus esse error ea aut est temporibus. Sunt laudantium recusandae. Soluta culpa nihil nemo sunt et repellat sapiente distinctio. Nostrum accusamus doloribus repellat blanditiis labore.",
	"Esse omnis enim odit. Veniam sed iusto. Voluptas libero accusamus. Corporis consequatur ut voluptas corporis blanditiis laudantium consequatur ea ducimus. Incidunt incidunt molestiae.",
	"Dignissimos nesciunt suscipit beatae et eveniet omnis voluptatum natus. Iusto minima commodi rem et a rerum asperiores. Fugit tenetur ut at aut molestias.",
	"Optio consectetur rerum eos reiciendis. Voluptatem hic iure. Unde aut voluptas.",
	"Culpa ipsa voluptatem suscipit ut omnis omnis iste. Molestias facere facilis delectus vel fugit quibusdam saepe. Vel ut et dignissimos fugiat sint aut magnam. Quis maiores harum aliquid modi consequuntur veniam ipsum quaerat. Quam quo iusto nulla. Et quasi qui dolore enim.",
	"Exercitationem similique magni voluptates. Amet et asperiores quidem error. Commodi nostrum hic suscipit fuga consequatur nobis veritatis sit.",
	"Quaerat officia voluptatum officiis. Quo velit numquam qui sint voluptatem eos magnam quas hic. Excepturi reprehenderit totam reprehenderit et fugit dolorum perferendis est. Quae repudiandae quisquam veniam maxime qui. Rerum aut dolores voluptates corrupti modi ducimus pariatur error tempore.",
	"Sed quam quo nesciunt et laboriosam. Aspernatur et eum voluptas nesciunt omnis distinctio occaecati eum aut. Occaecati mollitia et est. Reiciendis dolor et ut commodi est repellat ipsa iure. Minus laudantium ut sed earum odit. Laudantium et non iusto et aliquid.",
	"Repellat illo sunt cum. Maiores et iure. Accusantium eum quo ullam minus architecto aut nulla rerum. Non quis nisi omnis eos dolores quia. Beatae nihil hic ut necessitatibus id fugiat.",
	"Non consequuntur ut voluptatum. Dicta omnis architecto iure perspiciatis veritatis itaque dolore. Quos necessitatibus dolor nam.",
	"Et ipsam distinctio quia quia ipsum dignissimos autem assumenda qui. Vel earum harum provident consequatur. Neque animi architecto ratione. Veniam porro possimus nisi voluptas.",
	"Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit debitis et et voluptates voluptatem voluptatibus. Quas voluptatum quae corporis corporis possimus.",
	"Et illo dolor cupiditate beatae. Eius eum recusandae odit placeat. Quibusdam error quisquam culpa pariatur praesentium et.",
	"Consequatur perferendis itaque dolor corporis vel voluptatem quaerat. Ex numquam sed. Reiciendis eveniet ducimus nobis et necessitatibus qui. Sit veritatis temporibus nostrum eius laborum voluptatum deleniti optio. Aperiam vel laborum eos odit ut veritatis. Eos tempora enim sed.",
	"Est iste totam accusamus dolorem est. Quis non sit impedit similique incidunt odio aspernatur aut rem. Architecto est eum.",
	"Aperiam autem non et aut illum ut nihil laborum omnis. Vitae et ab et. Cupiditate et est delectus. Mollitia qui qui dolores reiciendis perferendis voluptates maiores. Omnis corporis cumque sequi sequi excepturi velit laborum nobis. Neque id maiores voluptatem est debitis.",
	"Recusandae id nemo ut amet quas voluptas. Quas vero et molestiae esse. Eum qui quia nulla. Cum ipsa aut voluptate et iste ut porro adipisci. Quisquam error sed quasi voluptates ea nobis consequatur explicabo.",
	"Sunt velit facere fuga et voluptas inventore itaque. Necessitatibus ratione in esse. Quasi dignissimos quia est sequi incidunt enim reiciendis. At omnis iure in doloremque. Aut tempore consequatur facilis est ut distinctio est quas. Autem sunt est saepe quasi sed reprehenderit error magnam.",
	"Aliquid rerum tenetur exercitationem enim nihil laboriosam. Ut sequi sit dicta sequi non voluptatibus molestias rerum laudantium. Dolores beatae aut ipsa aut. Ut porro consequatur inventore praesentium quis. Omnis enim in voluptatem voluptatem quia.",
	"Tempora sunt enim. Sint ullam deleniti ut. Consequatur unde error odio quod fugit. Expedita unde commodi ratione sequi velit. Qui reprehenderit et tempora tenetur rerum. Veritatis consequatur odit sequi explicabo.",
	"Praesentium consequatur ut sit vel. Molestias fugiat quis cupiditate ipsa eos fugit est ullam. Sit labore et natus dolores ut quis eaque cupiditate. Et ut et et autem assumenda animi autem. Pariatur amet consequatur necessitatibus consequatur consequatur et explicabo sint. Nam sit dolore.",
	"Corporis distinctio delectus a ipsam commodi voluptas. Facilis minus sit numquam. Iusto quod consequatur molestias dolore dolor atque quidem distinctio. Voluptatem hic debitis sint ut sed recusandae qui consequatur. Nulla veritatis est.",
	"Deleniti dolor aliquam qui saepe officia nisi. Omnis sit molestiae ea rerum ratione. Dolorum ut corporis eligendi id dolorem totam et architecto voluptatem. Laudantium et vel. Dolores laborum sed quis sed et soluta. Et odio voluptate amet.",
	"Veniam commodi autem voluptatibus eos dolor quas reprehenderit. Praesentium cupiditate tempore et reprehenderit. Deleniti exercitationem illum maiores. Reprehenderit odio in ea voluptatem ut ut ullam.",
	"Labore corporis blanditiis dolorum nemo nam praesentium alias sequi inventore. Cupiditate rerum enim sint quis. Eum occaecati provident labore veniam deserunt vero sed soluta repellat. Cum sapiente pariatur et ea a recusandae et optio. Sequi doloribus reiciendis corrupti quidem accusamus est nesciunt. Excepturi accusamus consequatur est sed maiores excepturi autem.",
	"Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
	"Aut facere quaerat sapiente inventore libero impedit vero. Animi harum assumenda autem sint necessitatibus fugiat. Qui eligendi et ut distinctio.",
	"Vel amet eos voluptatibus vel expedita accusantium molestiae illo exercitationem. Assumenda ea voluptatem rerum. Accusantium sed totam aut et.",
	"Accusantium aliquid non neque dicta eum. Molestias nesciunt odit. Quis rerum et cumque distinctio a pariatur vel ea dicta.",
	"Tempora id non maxime. Qui qui dignissimos omnis adipisci qui. Voluptatibus ut labore est quisquam consequuntur fugiat harum tenetur est. Repellendus quisquam quaerat error nobis voluptatem nihil minima. Autem aliquid ut adipisci officia eos atque excepturi.",
	"Cupiditate voluptas cumque aspernatur. Adipisci voluptatibus vel eos. Doloremque commodi aliquid occaecati quia provident. Voluptatem tempore doloribus architecto rem quidem quaerat ipsam possimus. Laboriosam quisquam aut illo necessitatibus quo ducimus. Eum cupiditate sint a placeat dolores nemo.",
	"Beatae officiis nihil similique soluta non voluptas totam ad. Quam nobis enim vel qui ratione quos voluptatem molestiae est. Ipsum voluptate illo aliquid beatae blanditiis dolorem. Adipisci non libero laudantium. A aperiam distinctio tempora aspernatur.",
	"Eligendi corrupti occaecati et. Laboriosam molestiae dolore laborum consequuntur dolorem sit qui sit. Et placeat voluptas repudiandae expedita et. Dolores aut incidunt iure qui enim et quo fuga.",
	"Eos necessitatibus officia quos. Et vitae aliquid autem occaecati repudiandae placeat repellat odit. Minus iure voluptates autem quam dicta. Iste consequatur aspernatur voluptas quibusdam sint beatae.",
	"In reprehenderit esse id ut quas cupiditate error sit. Eum nostrum libero facilis quis error consectetur. Totam porro ut similique aut sint enim amet enim. Harum quo est repudiandae doloribus.",
	"Quis error sunt. Tempora magnam consequatur. Eum repellendus beatae dolores hic ut placeat voluptas commodi. Amet aliquid vero. Ullam ratione architecto.",
	"Inventore natus explicabo qui adipisci laborum voluptate molestias suscipit. Ullam quisquam assumenda nesciunt voluptatem in. Similique facere debitis mollitia autem fugit a quo et impedit.",
	"Vel facere dolorem sit hic non. Veniam nihil cumque sed et delectus. Maiores minus quisquam nostrum. Eius quasi nostrum. Molestiae recusandae ut. Suscipit natus aliquam eos sit aut.",
	"Incidunt accusamus vero. Ipsam reiciendis unde voluptatibus voluptates ab aliquam aut. Aut voluptas laudantium. Voluptatem beatae explicabo et eius. Commodi a autem omnis.",
	"Placeat tenetur ut enim similique et nam commodi. Dolores culpa enim. Fuga aliquid voluptatem repellat.",
	"Rerum enim tenetur maiores ullam et id assumenda est magnam. At praesentium molestias culpa fugiat et ipsum velit est et. Non velit ipsum quas laudantium accusantium sed qui id. Eum deserunt ratione veniam.",
	"Tempore explicabo laborum laboriosam officia velit aspernatur dolor cupiditate aperiam. Ab aliquid est. Veniam eius vel id rerum quisquam illo voluptates id.",
	"Quaerat veritatis tempora. Consectetur id fuga iusto voluptas quibusdam est. Et aut dolor est. Sunt mollitia libero.",
	"Voluptatem ipsa delectus corporis necessitatibus et et et eos debitis. Doloremque enim dolorum. Exercitationem ratione pariatur ut temporibus et est distinctio. Doloremque exercitationem dolores excepturi praesentium ut esse ut dolorum laboriosam. Itaque non aut quos nesciunt voluptatem voluptatem cupiditate.",
	"Tenetur doloremque at fuga eligendi mollitia modi placeat. Dolores corrupti repellendus et quos eos modi sunt. Quae non molestiae earum iusto magni. Molestiae quo fugit quisquam sed. Quia culpa rem minus distinctio.",
	"Molestias fugit perspiciatis voluptatem nihil assumenda doloribus. Reiciendis et aperiam ea fugiat ipsum atque omnis qui. Doloribus officiis quisquam optio nihil. Minus iure consequatur fugit quidem quae. Sit et ducimus culpa voluptatum officiis fugiat.",
	"Cupiditate eos ratione aperiam fuga temporibus. Ut nulla aliquid. Eos dolores eaque. Itaque est nostrum consequuntur sapiente qui delectus unde. Et ut et aut qui a ut ducimus ut. Mollitia quis rem dolorum in pariatur id velit.",
	"Ducimus omnis numquam. Eos ut quis. Autem numquam nihil ut quo est nam eius. Laboriosam sint nihil in dolorum et recusandae est. Inventore consequuntur at ratione dolores quas doloribus autem et. Qui atque delectus consectetur praesentium doloribus corporis expedita soluta.",
	"Quo voluptatem quia numquam laudantium sit quibusdam aut. Veritatis omnis neque ea saepe hic enim. Nam odit dolor non consequuntur perspiciatis inventore ut sint. Velit quod praesentium adipisci modi.",
	"Deserunt laboriosam quas autem repellat aspernatur ipsa accusamus pariatur deserunt. Nam aut eum vel ut. Sunt dicta id eveniet minus. Debitis temporibus quod.",
	"Ea aut aut sit. Incidunt ut quisquam laborum molestiae temporibus aut quam non. Voluptatibus quia laudantium et et quis quae voluptas accusantium. Doloremque in ab. Illo alias aut.",
	"Et veritatis rerum. Omnis repellat quo. Provident omnis consequatur provident tempore assumenda assumenda ducimus.",
	"Est sed deserunt eligendi in velit saepe. Dolorem quis illo vero qui ut recusandae occaecati dolores quae. Voluptatem vero aliquam alias adipisci reiciendis odit nobis est. Vel laboriosam quia commodi rerum. Voluptatum et sed et nesciunt iure ipsum iste aut enim.",
	"Corrupti aspernatur minus eum. Nihil omnis fuga doloremque eius ipsam saepe impedit. Nobis odio omnis laboriosam similique nostrum voluptas magnam commodi at. Magnam quibusdam dolore. Dolorem minima neque est amet voluptate explicabo similique quos. Rerum esse pariatur.",
	"Vel et molestiae quis ea modi quas tempore dolorum fuga. Aut dolore numquam et. Amet sit quibusdam ea blanditiis consectetur velit.",
	"Rerum aut expedita ad nam rerum. Animi sed in sunt enim. Rerum aspernatur ipsam quia consequatur sit est excepturi quidem voluptatem. Eum est et autem ducimus eius quod ipsa officia vero.",
	"Unde est nesciunt consequuntur magnam quo quia et fugiat. Totam sapiente iure eaque. Ut praesentium quisquam dolorem animi quibusdam quo nostrum facilis. Quasi quos et beatae architecto perferendis. Et laudantium officiis autem aut dolor iure et omnis.",
	"Similique molestiae id officia corporis quidem. Aliquam et ut eos ut nemo est voluptatem. Possimus ut quo labore. Alias amet quia enim. Quia ipsum pariatur facere illum esse recusandae veniam. Nihil enim fugit porro nam et quis sunt.",
	"Quis repellendus aspernatur magni non temporibus officiis et aliquid ut. Voluptas consectetur voluptatibus quos quas illo unde. Alias voluptas est. Inventore occaecati sed id minima fuga enim amet. Voluptatibus eius dolorum quam natus consectetur repellat rerum. Incidunt nisi hic consequatur iste iste velit.",
	"Minima soluta sed sed et optio explicabo at distinctio repudiandae. Magnam deleniti a ea. Non velit accusamus veniam qui. Necessitatibus velit ad aut officiis in officiis quasi. Sunt nulla dolores voluptatem esse magnam ut.",
	"Consequuntur nihil a id. Consequatur est cum excepturi aut labore odit quo molestiae molestiae. Soluta voluptatem ducimus cupiditate. Dolorum eveniet aliquid aut repudiandae et illo et. Harum unde ut harum accusamus suscipit quia.",
	"Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.",
	"Ea hic voluptatum omnis dolorum pariatur sed illo ea. Praesentium veniam vitae pariatur quae. Optio aspernatur aut ut recusandae.",
	"Ea tempora qui. Aut deserunt dolorum laborum rerum vel. Omnis et ut deserunt minima soluta adipisci sed voluptas.",
	"Dolor officia a fuga omnis sit. Ut atque est nostrum. Quos aut quo eos vel velit autem et aspernatur.",
	"Quo nihil assumenda corrupti nobis provident tenetur et. Molestiae unde explicabo nihil maxime. Quidem molestiae velit laborum amet rerum tenetur. Error non aspernatur suscipit asperiores voluptas ipsa dolor. Similique itaque omnis.",
	"Ut a voluptas labore et dolores magnam. Dolor deleniti dolores temporibus non autem. Voluptatibus numquam reiciendis nesciunt ipsa numquam enim. Unde velit optio quia.",
	"Libero quod eius. Ad libero qui omnis. Laudantium ut aperiam est exercitationem qui soluta aut ullam. Est dicta veniam voluptas est perspiciatis rerum. Alias ut autem est illo.",
	"Possimus molestiae mollitia alias reprehenderit autem saepe est odio qui. Odit est quos. Corrupti similique harum reiciendis. Placeat est at aut quo. Laudantium qui voluptatem nemo accusamus minima. Perferendis quos architecto repellat sed id quae iusto.",
	"Pariatur ut dolor repellendus dolores ut debitis. Est iusto neque dicta voluptatibus quia nulla consequatur. Omnis aut sed dolores qui laborum a amet.",
	"Veritatis fuga sit ut explicabo ab eos repellendus. Ipsa praesentium dolor. Tempora ipsum est dolorum nihil.",
	"Rerum quisquam qui repellendus totam nemo nihil odio. Tempore quam non vel molestiae veniam rem necessitatibus. Voluptas commodi recusandae vel illum eveniet ex. Dolore facilis illum atque explicabo.",
	"Ut quidem et. Quo assumenda et cumque molestias atque sint qui modi. Velit qui dolore possimus totam qui blanditiis. Vel quia consequatur aliquid corrupti qui libero.",
	"Est quo facilis voluptas aperiam. Natus dolores quas ratione enim repellendus. Illum dolor repellendus voluptas.",
	"Eveniet quae minus vero praesentium eos fugit explicabo et. Libero at ea ut sapiente et nesciunt odio similique vel. Libero aliquam tempore corporis eveniet dolorum nihil maiores veritatis. Harum modi sint officia.",
	"Repellendus et iste dolorem iste et perspiciatis occaecati vero eius. Vel ipsa officia quidem in maiores. Fugiat similique aliquam est eveniet ullam laborum qui. Et a maxime et magnam in."
];

/**
 * Generate a random paragraph.
 *
 * @category text
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 */

function randParagraph(options) {
  return fake(data$I, options);
}

/**
 * Generate a random password.
 *
 * @category person
 *
 * @example
 *
 * randPassword()
 *
 * @example
 *
 * randPassword({ length: 10 })
 *
 * @example
 *
 * randPassword({ size: 10 }) // default is 15
 *
 */

function randPassword(options) {
  const size = (options == null ? void 0 : options.size) || 15;
  return fake(() => randSequence({
    size
  }), options);
}

/**
 * Generate a random past date.
 *
 * @category date
 *
 * @example
 *
 * randPastDate()
 *
 * @example
 *
 * randPastDate({ length: 10 })
 *
 * @example
 *
 * randPastDate({ years: 2 }) // default is 1
 *
 */

function randPastDate(options) {
  var _options$years;

  const years = (_options$years = options == null ? void 0 : options.years) != null ? _options$years : 1;

  if (years <= 0) {
    throw new Error('Years must be positive, use future() instead');
  }

  const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - yearsInMilliseconds);
  return fake(() => randBetweenDate({
    from,
    to
  }), options);
}

var data$H = [
	"read",
	"write",
	"execute",
	"no permission"
];

/**
 * Generate a random permission.
 *
 * @category system
 *
 * @example
 *
 * randPermission()
 *
 * @example
 *
 * randPermission({ length: 10 })
 *
 * @example
 *
 * randPermission({ numeric: true })
 *
 */

function randPermission(options) {
  if (options != null && options.numeric) {
    return fake([0, 1, 2, 4], options);
  }

  return fake(data$H, options);
}

var data$G = [
	"Dr.",
	"Miss",
	"Mr.",
	"Mrs.",
	"Ms."
];

/**
 * Generate a random person title.
 *
 * @category person
 *
 * @example
 *
 * randPersonTitle()
 *
 * @example
 *
 * randPersonTitle({ length: 10 })
 *
 */

function randPersonTitle(options) {
  return fake(data$G, options);
}

var data$F = [
	{
		formats: [
			"+247 ####"
		],
		countryCode: [
			"AC"
		]
	},
	{
		formats: [
			"+376 ### ###"
		],
		countryCode: [
			"AD"
		]
	},
	{
		formats: [
			"+971 ## ### ####",
			"+971 # ### ####"
		],
		countryCode: [
			"AE"
		]
	},
	{
		formats: [
			"+93 ## ### ####"
		],
		countryCode: [
			"AF"
		]
	},
	{
		formats: [
			"+1(268)### ####"
		],
		countryCode: [
			"AG"
		]
	},
	{
		formats: [
			"+1(264)### ####"
		],
		countryCode: [
			"AI"
		]
	},
	{
		formats: [
			"+355(###)### ###"
		],
		countryCode: [
			"AL"
		]
	},
	{
		formats: [
			"+374 ## ### ###"
		],
		countryCode: [
			"AM"
		]
	},
	{
		formats: [
			"+599 ### ####",
			"+599 9### ####"
		],
		countryCode: [
			"AN"
		]
	},
	{
		formats: [
			"+244(###)### ###"
		],
		countryCode: [
			"AO"
		]
	},
	{
		formats: [
			"+672 1## ###"
		],
		countryCode: [
			"AQ"
		]
	},
	{
		formats: [
			"+54(###)### ####"
		],
		countryCode: [
			"AR"
		]
	},
	{
		formats: [
			"+1(684)### ####"
		],
		countryCode: [
			"AS"
		]
	},
	{
		formats: [
			"+43(###)### ####"
		],
		countryCode: [
			"AT"
		]
	},
	{
		formats: [
			"+61 # #### ####"
		],
		countryCode: [
			"AU"
		]
	},
	{
		formats: [
			"+297 ### ####"
		],
		countryCode: [
			"AW"
		]
	},
	{
		formats: [
			"+994 ## ### ## ##"
		],
		countryCode: [
			"AZ"
		]
	},
	{
		formats: [
			"+387 ## #####",
			"+387 ## ####"
		],
		countryCode: [
			"BA"
		]
	},
	{
		formats: [
			"+1(246)### ####"
		],
		countryCode: [
			"BB"
		]
	},
	{
		formats: [
			"+880 ## ### ###"
		],
		countryCode: [
			"BD"
		]
	},
	{
		formats: [
			"+32(###)### ###"
		],
		countryCode: [
			"BE"
		]
	},
	{
		formats: [
			"+226 ## ## ####"
		],
		countryCode: [
			"BF"
		]
	},
	{
		formats: [
			"+359(###)### ###"
		],
		countryCode: [
			"BG"
		]
	},
	{
		formats: [
			"+973 #### ####"
		],
		countryCode: [
			"BH"
		]
	},
	{
		formats: [
			"+257 ## ## ####"
		],
		countryCode: [
			"BI"
		]
	},
	{
		formats: [
			"+229 ## ## ####"
		],
		countryCode: [
			"BJ"
		]
	},
	{
		formats: [
			"+1(441)### ####"
		],
		countryCode: [
			"BM"
		]
	},
	{
		formats: [
			"+673 ### ####"
		],
		countryCode: [
			"BN"
		]
	},
	{
		formats: [
			"+591 # ### ####"
		],
		countryCode: [
			"BO"
		]
	},
	{
		formats: [
			"+55 ## #### ####, +55 ## ##### ####"
		],
		countryCode: [
			"BR"
		]
	},
	{
		formats: [
			"+1(242)### ####"
		],
		countryCode: [
			"BS"
		]
	},
	{
		formats: [
			"+975 17 ### ###, +975 # ### ###"
		],
		countryCode: [
			"BT"
		]
	},
	{
		formats: [
			"+267 ## ### ###"
		],
		countryCode: [
			"BW"
		]
	},
	{
		formats: [
			"+375(##)### ## ##"
		],
		countryCode: [
			"BY"
		]
	},
	{
		formats: [
			"+501 ### ####"
		],
		countryCode: [
			"BZ"
		]
	},
	{
		formats: [
			"+243(###)### ###"
		],
		countryCode: [
			"CD"
		]
	},
	{
		formats: [
			"+236 ## ## ####"
		],
		countryCode: [
			"CF"
		]
	},
	{
		formats: [
			"+242 ## ### ####"
		],
		countryCode: [
			"CG"
		]
	},
	{
		formats: [
			"+41 ## ### ####"
		],
		countryCode: [
			"CH"
		]
	},
	{
		formats: [
			"+225 ## ### ###"
		],
		countryCode: [
			"CI"
		]
	},
	{
		formats: [
			"+682 ## ###"
		],
		countryCode: [
			"CK"
		]
	},
	{
		formats: [
			"+56 # #### ####"
		],
		countryCode: [
			"CL"
		]
	},
	{
		formats: [
			"+237 #### ####"
		],
		countryCode: [
			"CM"
		]
	},
	{
		formats: [
			"+86(###)#### ####",
			"+86(###)#### ###",
			"+86 ## ##### #####"
		],
		countryCode: [
			"CN"
		]
	},
	{
		formats: [
			"+57(###)### ####"
		],
		countryCode: [
			"CO"
		]
	},
	{
		formats: [
			"+506 #### ####"
		],
		countryCode: [
			"CR"
		]
	},
	{
		formats: [
			"+53 # ### ####"
		],
		countryCode: [
			"CU"
		]
	},
	{
		formats: [
			"+238(###)## ##"
		],
		countryCode: [
			"CV"
		]
	},
	{
		formats: [
			"+599 ### ####"
		],
		countryCode: [
			"CW"
		]
	},
	{
		formats: [
			"+357 ## ### ###"
		],
		countryCode: [
			"CY"
		]
	},
	{
		formats: [
			"+420(###)### ###"
		],
		countryCode: [
			"CZ"
		]
	},
	{
		formats: [
			"+49(####)### ####, +49(###)### ####",
			"+49(###)## ####",
			"+49(###)## ###",
			"+49(###)## ##",
			"+49 ### ###"
		],
		countryCode: [
			"DE"
		]
	},
	{
		formats: [
			"+253 ## ## ## ##"
		],
		countryCode: [
			"DJ"
		]
	},
	{
		formats: [
			"+45 ## ## ## ##"
		],
		countryCode: [
			"DK"
		]
	},
	{
		formats: [
			"+1(767)### ####"
		],
		countryCode: [
			"DM"
		]
	},
	{
		formats: [
			"+1(809)### ####",
			"+1(829)### ####",
			"+1(849)### ####"
		],
		countryCode: [
			"DO"
		]
	},
	{
		formats: [
			"+213 ## ### ####"
		],
		countryCode: [
			"DZ"
		]
	},
	{
		formats: [
			"+593 ## ### ####",
			"+593 # ### ####"
		],
		countryCode: [
			"EC"
		]
	},
	{
		formats: [
			"+372 #### ####",
			"+372 ### ####"
		],
		countryCode: [
			"EE"
		]
	},
	{
		formats: [
			"+20(###)### ####"
		],
		countryCode: [
			"EG"
		]
	},
	{
		formats: [
			"+291 # ### ###"
		],
		countryCode: [
			"ER"
		]
	},
	{
		formats: [
			"+34(###)### ###"
		],
		countryCode: [
			"ES"
		]
	},
	{
		formats: [
			"+251 ## ### ####"
		],
		countryCode: [
			"ET"
		]
	},
	{
		formats: [
			"+358(###)### ## ##"
		],
		countryCode: [
			"FI"
		]
	},
	{
		formats: [
			"+679 ## #####"
		],
		countryCode: [
			"FJ"
		]
	},
	{
		formats: [
			"+500 #####"
		],
		countryCode: [
			"FK"
		]
	},
	{
		formats: [
			"+691 ### ####"
		],
		countryCode: [
			"FM"
		]
	},
	{
		formats: [
			"+298 ### ###"
		],
		countryCode: [
			"FO"
		]
	},
	{
		formats: [
			"+262 ##### ####",
			"+33 1 ## ## ## ##",
			"+33 2 ## ## ## ##",
			"+33 3 ## ## ## ##",
			"+33 4 ## ## ## ##",
			"+33 5 ## ## ## ##",
			"+33 6 ## ## ## ##",
			"+33 7 ## ## ## ##",
			"+508 ## ####",
			"+590(###)### ###"
		],
		countryCode: [
			"FR"
		]
	},
	{
		formats: [
			"+241 # ## ## ##"
		],
		countryCode: [
			"GA"
		]
	},
	{
		formats: [
			"+1(473)### ####"
		],
		countryCode: [
			"GD"
		]
	},
	{
		formats: [
			"+995(###)### ###"
		],
		countryCode: [
			"GE"
		]
	},
	{
		formats: [
			"+594 ##### ####"
		],
		countryCode: [
			"GF"
		]
	},
	{
		formats: [
			"+233(###)### ###"
		],
		countryCode: [
			"GH"
		]
	},
	{
		formats: [
			"+350 ### #####"
		],
		countryCode: [
			"GI"
		]
	},
	{
		formats: [
			"+299 ## ## ##"
		],
		countryCode: [
			"GL"
		]
	},
	{
		formats: [
			"+220(###)## ##"
		],
		countryCode: [
			"GM"
		]
	},
	{
		formats: [
			"+224 ## ### ###"
		],
		countryCode: [
			"GN"
		]
	},
	{
		formats: [
			"+240 ## ### ####"
		],
		countryCode: [
			"GQ"
		]
	},
	{
		formats: [
			"+30(###)### ####"
		],
		countryCode: [
			"GR"
		]
	},
	{
		formats: [
			"+502 # ### ####"
		],
		countryCode: [
			"GT"
		]
	},
	{
		formats: [
			"+1(671)### ####"
		],
		countryCode: [
			"GU"
		]
	},
	{
		formats: [
			"+245 # ######"
		],
		countryCode: [
			"GW"
		]
	},
	{
		formats: [
			"+592 ### ####"
		],
		countryCode: [
			"GY"
		]
	},
	{
		formats: [
			"+852 #### ####"
		],
		countryCode: [
			"HK"
		]
	},
	{
		formats: [
			"+504 #### ####"
		],
		countryCode: [
			"HN"
		]
	},
	{
		formats: [
			"+385 (##) ### ###",
			"+385 (##) ### ####",
			"+385 1 #### ###"
		],
		countryCode: [
			"HR"
		]
	},
	{
		formats: [
			"+509 ## ## ####"
		],
		countryCode: [
			"HT"
		]
	},
	{
		formats: [
			"+36(###)### ###"
		],
		countryCode: [
			"HU"
		]
	},
	{
		formats: [
			"+62(8##)### ####",
			"+62(8##)### ###",
			"+62(8##)### ## ###",
			"+62 ## ### ##",
			"+62 ## ### ###",
			"+62 ## ### ####"
		],
		countryCode: [
			"ID"
		]
	},
	{
		formats: [
			"+353(###)### ###"
		],
		countryCode: [
			"IE"
		]
	},
	{
		formats: [
			"+972 5# ### ####",
			"+972 # ### ####"
		],
		countryCode: [
			"IL"
		]
	},
	{
		formats: [
			"+91 ##### #####"
		],
		countryCode: [
			"IN"
		]
	},
	{
		formats: [
			"+246 ### ####"
		],
		countryCode: [
			"IO"
		]
	},
	{
		formats: [
			"+964(###)### ####"
		],
		countryCode: [
			"IQ"
		]
	},
	{
		formats: [
			"+98(###)### ####"
		],
		countryCode: [
			"IR"
		]
	},
	{
		formats: [
			"+354 ### ####"
		],
		countryCode: [
			"IS"
		]
	},
	{
		formats: [
			"+39(0##)#### ## ##",
			"+39(0##)#### ###",
			"+39(0##)### ###",
			"+39(0##)## ###",
			"+39(0##)## ##",
			"+39(0#)## ##",
			"+39(3##)### ## ##",
			"+39(3##)## ## ##"
		],
		countryCode: [
			"IT"
		]
	},
	{
		formats: [
			"+1(876)### ####"
		],
		countryCode: [
			"JM"
		]
	},
	{
		formats: [
			"+962 # #### ####"
		],
		countryCode: [
			"JO"
		]
	},
	{
		formats: [
			"+81 ## #### ####",
			"+81(###)### ###"
		],
		countryCode: [
			"JP"
		]
	},
	{
		formats: [
			"+254 ### ######"
		],
		countryCode: [
			"KE"
		]
	},
	{
		formats: [
			"+996(###)### ###"
		],
		countryCode: [
			"KG"
		]
	},
	{
		formats: [
			"+855 ## ### ###"
		],
		countryCode: [
			"KH"
		]
	},
	{
		formats: [
			"+686 ## ###"
		],
		countryCode: [
			"KI"
		]
	},
	{
		formats: [
			"+269 ## #####"
		],
		countryCode: [
			"KM"
		]
	},
	{
		formats: [
			"+1(869)### ####"
		],
		countryCode: [
			"KN"
		]
	},
	{
		formats: [
			"+850 191 ### ####",
			"+850 ## ### ###",
			"+850 ### #### ###",
			"+850 ### ###",
			"+850 #### ####",
			"+850 #### #############"
		],
		countryCode: [
			"KP"
		]
	},
	{
		formats: [
			"+82 ## ### ####"
		],
		countryCode: [
			"KR"
		]
	},
	{
		formats: [
			"+965 #### ####"
		],
		countryCode: [
			"KW"
		]
	},
	{
		formats: [
			"+1(345)### ####"
		],
		countryCode: [
			"KY"
		]
	},
	{
		formats: [
			"+7(6##)### ## ##",
			"+7(7##)### ## ##"
		],
		countryCode: [
			"KZ"
		]
	},
	{
		formats: [
			"+856(20##)### ###",
			"+856 ## ### ###"
		],
		countryCode: [
			"LA"
		]
	},
	{
		formats: [
			"+961 ## ### ###",
			"+961 # ### ###"
		],
		countryCode: [
			"LB"
		]
	},
	{
		formats: [
			"+1(758)### ####"
		],
		countryCode: [
			"LC"
		]
	},
	{
		formats: [
			"+423(###)### ####"
		],
		countryCode: [
			"LI"
		]
	},
	{
		formats: [
			"+94 ## ### ####"
		],
		countryCode: [
			"LK"
		]
	},
	{
		formats: [
			"+231 ## ### ###"
		],
		countryCode: [
			"LR"
		]
	},
	{
		formats: [
			"+266 # ### ####"
		],
		countryCode: [
			"LS"
		]
	},
	{
		formats: [
			"+370(###)## ###"
		],
		countryCode: [
			"LT"
		]
	},
	{
		formats: [
			"+352 ### ###",
			"+352 #### ###",
			"+352 ##### ###",
			"+352 ###### ###"
		],
		countryCode: [
			"LU"
		]
	},
	{
		formats: [
			"+371 ## ### ###"
		],
		countryCode: [
			"LV"
		]
	},
	{
		formats: [
			"+218 ## ### ###",
			"+218 21 ### ####"
		],
		countryCode: [
			"LY"
		]
	},
	{
		formats: [
			"+212 ## #### ###"
		],
		countryCode: [
			"MA"
		]
	},
	{
		formats: [
			"+377(###)### ###",
			"+377 ## ### ###"
		],
		countryCode: [
			"MC"
		]
	},
	{
		formats: [
			"+373 #### ####"
		],
		countryCode: [
			"MD"
		]
	},
	{
		formats: [
			"+382 ## ### ###"
		],
		countryCode: [
			"ME"
		]
	},
	{
		formats: [
			"+261 ## ## #####"
		],
		countryCode: [
			"MG"
		]
	},
	{
		formats: [
			"+692 ### ####"
		],
		countryCode: [
			"MH"
		]
	},
	{
		formats: [
			"+389 ## ### ###"
		],
		countryCode: [
			"MK"
		]
	},
	{
		formats: [
			"+223 ## ## ####"
		],
		countryCode: [
			"ML"
		]
	},
	{
		formats: [
			"+95 ## ### ###",
			"+95 # ### ###",
			"+95 ### ###"
		],
		countryCode: [
			"MM"
		]
	},
	{
		formats: [
			"+976 ## ## ####"
		],
		countryCode: [
			"MN"
		]
	},
	{
		formats: [
			"+853 #### ####"
		],
		countryCode: [
			"MO"
		]
	},
	{
		formats: [
			"+1(670)### ####"
		],
		countryCode: [
			"MP"
		]
	},
	{
		formats: [
			"+596(###)## ## ##"
		],
		countryCode: [
			"MQ"
		]
	},
	{
		formats: [
			"+222 ## ## ####"
		],
		countryCode: [
			"MR"
		]
	},
	{
		formats: [
			"+1(664)### ####"
		],
		countryCode: [
			"MS"
		]
	},
	{
		formats: [
			"+356 #### ####"
		],
		countryCode: [
			"MT"
		]
	},
	{
		formats: [
			"+230 ### ####"
		],
		countryCode: [
			"MU"
		]
	},
	{
		formats: [
			"+960 ### ####"
		],
		countryCode: [
			"MV"
		]
	},
	{
		formats: [
			"+265 1 ### ###",
			"+265 # #### ####"
		],
		countryCode: [
			"MW"
		]
	},
	{
		formats: [
			"+52(###)### ####",
			"+52 ## ## ####"
		],
		countryCode: [
			"MX"
		]
	},
	{
		formats: [
			"+60 ## ### ####",
			"+60 11 #### ####",
			"+60(###)### ###",
			"+60 ## ### ###",
			"+60 # ### ###"
		],
		countryCode: [
			"MY"
		]
	},
	{
		formats: [
			"+258 ## ### ###"
		],
		countryCode: [
			"MZ"
		]
	},
	{
		formats: [
			"+264 ## ### ####"
		],
		countryCode: [
			"NA"
		]
	},
	{
		formats: [
			"+687 ## ####"
		],
		countryCode: [
			"NC"
		]
	},
	{
		formats: [
			"+227 ## ## ####"
		],
		countryCode: [
			"NE"
		]
	},
	{
		formats: [
			"+672 3## ###"
		],
		countryCode: [
			"NF"
		]
	},
	{
		formats: [
			"+234(###)### ####",
			"+234 ## ### ###",
			"+234 ## ### ##",
			"+234(###)### ####"
		],
		countryCode: [
			"NG"
		]
	},
	{
		formats: [
			"+505 #### ####"
		],
		countryCode: [
			"NI"
		]
	},
	{
		formats: [
			"+31 ## ### ####"
		],
		countryCode: [
			"NL"
		]
	},
	{
		formats: [
			"+47(###)## ###"
		],
		countryCode: [
			"NO"
		]
	},
	{
		formats: [
			"+977 ## ### ###"
		],
		countryCode: [
			"NP"
		]
	},
	{
		formats: [
			"+674 ### ####"
		],
		countryCode: [
			"NR"
		]
	},
	{
		formats: [
			"+683 ####"
		],
		countryCode: [
			"NU"
		]
	},
	{
		formats: [
			"+64(###)### ###[#]",
			"+64 ## ### ###"
		],
		countryCode: [
			"NZ"
		]
	},
	{
		formats: [
			"+968 ## ### ###"
		],
		countryCode: [
			"OM"
		]
	},
	{
		formats: [
			"+507 ### ####"
		],
		countryCode: [
			"PA"
		]
	},
	{
		formats: [
			"+51(###)### ###"
		],
		countryCode: [
			"PE"
		]
	},
	{
		formats: [
			"+689 ## ## ##"
		],
		countryCode: [
			"PF"
		]
	},
	{
		formats: [
			"+675(###)## ###"
		],
		countryCode: [
			"PG"
		]
	},
	{
		formats: [
			"+63(###)### ####"
		],
		countryCode: [
			"PH"
		]
	},
	{
		formats: [
			"+92(###)### ####"
		],
		countryCode: [
			"PK"
		]
	},
	{
		formats: [
			"+48(###)### ###"
		],
		countryCode: [
			"PL"
		]
	},
	{
		formats: [
			"+970 ## ### ####"
		],
		countryCode: [
			"PS"
		]
	},
	{
		formats: [
			"+351 ## ### ####"
		],
		countryCode: [
			"PT"
		]
	},
	{
		formats: [
			"+680 ### ####"
		],
		countryCode: [
			"PW"
		]
	},
	{
		formats: [
			"+595(###)### ###"
		],
		countryCode: [
			"PY"
		]
	},
	{
		formats: [
			"+974 #### ####"
		],
		countryCode: [
			"QA"
		]
	},
	{
		formats: [
			"+262 ##### ####"
		],
		countryCode: [
			"RE"
		]
	},
	{
		formats: [
			"+40 ## ### ####"
		],
		countryCode: [
			"RO"
		]
	},
	{
		formats: [
			"+381 ## ### ####"
		],
		countryCode: [
			"RS"
		]
	},
	{
		formats: [
			"+7(###)### ## ##"
		],
		countryCode: [
			"RU"
		]
	},
	{
		formats: [
			"+250(###)### ###"
		],
		countryCode: [
			"RW"
		]
	},
	{
		formats: [
			"+966 5 #### ####",
			"+966 # ### ####"
		],
		countryCode: [
			"SA"
		]
	},
	{
		formats: [
			"+677 ### ####",
			"+677 #####"
		],
		countryCode: [
			"SB"
		]
	},
	{
		formats: [
			"+248 # ### ###"
		],
		countryCode: [
			"SC"
		]
	},
	{
		formats: [
			"+249 ## ### ####"
		],
		countryCode: [
			"SD"
		]
	},
	{
		formats: [
			"+46 ## ### ####"
		],
		countryCode: [
			"SE"
		]
	},
	{
		formats: [
			"+65 #### ####"
		],
		countryCode: [
			"SG"
		]
	},
	{
		formats: [
			"+290 ####",
			"+290 ####"
		],
		countryCode: [
			"SH"
		]
	},
	{
		formats: [
			"+386 ## ### ###"
		],
		countryCode: [
			"SI"
		]
	},
	{
		formats: [
			"+421(###)### ###"
		],
		countryCode: [
			"SK"
		]
	},
	{
		formats: [
			"+232 ## ######"
		],
		countryCode: [
			"SL"
		]
	},
	{
		formats: [
			"+378 #### ######"
		],
		countryCode: [
			"SM"
		]
	},
	{
		formats: [
			"+221 ## ### ####"
		],
		countryCode: [
			"SN"
		]
	},
	{
		formats: [
			"+252 ## ### ###",
			"+252 # ### ###",
			"+252 # ### ###"
		],
		countryCode: [
			"SO"
		]
	},
	{
		formats: [
			"+597 ### ####",
			"+597 ### ###"
		],
		countryCode: [
			"SR"
		]
	},
	{
		formats: [
			"+211 ## ### ####"
		],
		countryCode: [
			"SS"
		]
	},
	{
		formats: [
			"+239 ## #####"
		],
		countryCode: [
			"ST"
		]
	},
	{
		formats: [
			"+503 ## ## ####"
		],
		countryCode: [
			"SV"
		]
	},
	{
		formats: [
			"+1(721)### ####"
		],
		countryCode: [
			"SX"
		]
	},
	{
		formats: [
			"+963 ## #### ###"
		],
		countryCode: [
			"SY"
		]
	},
	{
		formats: [
			"+268 ## ## ####"
		],
		countryCode: [
			"SZ"
		]
	},
	{
		formats: [
			"+1(649)### ####"
		],
		countryCode: [
			"TC"
		]
	},
	{
		formats: [
			"+235 ## ## ## ##"
		],
		countryCode: [
			"TD"
		]
	},
	{
		formats: [
			"+228 ## ### ###"
		],
		countryCode: [
			"TG"
		]
	},
	{
		formats: [
			"+66 ## ### ####",
			"+66 ## ### ###"
		],
		countryCode: [
			"TH"
		]
	},
	{
		formats: [
			"+992 ## ### ####"
		],
		countryCode: [
			"TJ"
		]
	},
	{
		formats: [
			"+690 ####"
		],
		countryCode: [
			"TK"
		]
	},
	{
		formats: [
			"+670 ### ####",
			"+670 77# #####",
			"+670 78# #####"
		],
		countryCode: [
			"TL"
		]
	},
	{
		formats: [
			"+993 # ### ####"
		],
		countryCode: [
			"TM"
		]
	},
	{
		formats: [
			"+216 ## ### ###"
		],
		countryCode: [
			"TN"
		]
	},
	{
		formats: [
			"+676 #####"
		],
		countryCode: [
			"TO"
		]
	},
	{
		formats: [
			"+90(###)### ####"
		],
		countryCode: [
			"TR"
		]
	},
	{
		formats: [
			"+1(868)### ####"
		],
		countryCode: [
			"TT"
		]
	},
	{
		formats: [
			"+688 90####",
			"+688 2####"
		],
		countryCode: [
			"TV"
		]
	},
	{
		formats: [
			"+886 # #### ####",
			"+886 #### ####"
		],
		countryCode: [
			"TW"
		]
	},
	{
		formats: [
			"+255 ## ### ####"
		],
		countryCode: [
			"TZ"
		]
	},
	{
		formats: [
			"+380(##)### ## ##"
		],
		countryCode: [
			"UA"
		]
	},
	{
		formats: [
			"+256(###)### ###"
		],
		countryCode: [
			"UG"
		]
	},
	{
		formats: [
			"+44 #### ######"
		],
		countryCode: [
			"GB",
			"UK"
		]
	},
	{
		formats: [
			"+598 # ### ## ##"
		],
		countryCode: [
			"UY"
		]
	},
	{
		formats: [
			"+998 ## ### ####"
		],
		countryCode: [
			"UZ"
		]
	},
	{
		formats: [
			"+39 6 698 #####"
		],
		countryCode: [
			"VA"
		]
	},
	{
		formats: [
			"+1(784)### ####"
		],
		countryCode: [
			"VC"
		]
	},
	{
		formats: [
			"+58(###)### ####"
		],
		countryCode: [
			"VE"
		]
	},
	{
		formats: [
			"+1(284)### ####"
		],
		countryCode: [
			"VG"
		]
	},
	{
		formats: [
			"+1(340)### ####"
		],
		countryCode: [
			"VI"
		]
	},
	{
		formats: [
			"+84 ## #### ###",
			"+84(###)#### ###"
		],
		countryCode: [
			"VN"
		]
	},
	{
		formats: [
			"+678 ## #####",
			"+678 #####"
		],
		countryCode: [
			"VU"
		]
	},
	{
		formats: [
			"+681 ## ####"
		],
		countryCode: [
			"WF"
		]
	},
	{
		formats: [
			"+685 ## ####"
		],
		countryCode: [
			"WS"
		]
	},
	{
		formats: [
			"+967 ### ### ###",
			"+967 # ### ###",
			"+967 ## ### ###"
		],
		countryCode: [
			"YE"
		]
	},
	{
		formats: [
			"+27 ## ### ####"
		],
		countryCode: [
			"ZA"
		]
	},
	{
		formats: [
			"+260 ## ### ####"
		],
		countryCode: [
			"ZM"
		]
	},
	{
		formats: [
			"+263 # ######"
		],
		countryCode: [
			"ZW"
		]
	},
	{
		formats: [
			"+1(###)### ####"
		],
		countryCode: [
			"US",
			"CA"
		]
	}
];

/**
 * Generate a random phone number.
 *
 * @category person
 *
 * @example
 *
 * randPhoneNumber()
 *
 * @example
 *
 * randPhoneNumber({ countryCode: 'US' })
 *
 * @example
 *
 * randPhoneNumber({ length: 10 })
 *
 */

function randPhoneNumber(options) {
  let formats;

  if (options != null && options.countryCode) {
    var _data$find;

    formats = ((_data$find = data$F.find(country => {
      return country.countryCode.includes(options.countryCode);
    })) == null ? void 0 : _data$find.formats) || [];
  } else {
    formats = data$F.map(({
      formats
    }) => formats).flat();
  }

  const phoneNumber = Array.from({
    length: (options == null ? void 0 : options.length) || 1
  }, (_, index) => {
    return randMask({
      mask: randElement(formats)
    });
  });
  return fake(phoneNumber, options);
}

var data$E = [
	"Try to program the GB interface, maybe it will copy the wireless hard drive!",
	"Try to bypass the GB panel, maybe it will synthesize the back-end transmitter!",
	"If we program the protocol, we can get to the SDD application through the virtual RAM pixel!",
	"Use the open-source THX application, then you can quantify the solid state transmitter!",
	"You cant transmit the firewall without copying the 1080p SDD interface!",
	"Ill compress the open-source SAS bandwidth, that should array the FTP port!",
	"programming the alarm wont do anything, we need to hack the solid state ADP transmitter!",
	"calculating the interface wont do anything, we need to bypass the mobile IB panel!",
	"Try to calculate the GB transmitter, maybe it will quantify the online pixel!",
	"If we calculate the circuit, we can get to the HDD driver through the optical XML panel!",
	"navigating the program wont do anything, we need to calculate the cross-platform SMS capacitor!",
	"Try to calculate the JBOD firewall, maybe it will override the redundant port!",
	"If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!",
	"You cant override the capacitor without indexing the bluetooth PNG pixel!",
	"quantifying the microchip wont do anything, we need to index the online SQL hard drive!",
	"connecting the port wont do anything, we need to program the haptic RSS pixel!",
	"We need to back up the 1080p JBOD bandwidth!",
	"If we index the card, we can get to the SMS hard drive through the bluetooth AGP bus!",
	"Ill compress the optical SDD hard drive, that should interface the XSS bandwidth!",
	"You cant copy the feed without compressing the primary JBOD circuit!",
	"If we back up the application, we can get to the TCP bus through the auxiliary FTP hard drive!",
	"Try to override the RSS port, maybe it will quantify the haptic port!",
	"We need to calculate the bluetooth JBOD bus!",
	"bypassing the bus wont do anything, we need to program the wireless SDD driver!",
	"Try to parse the PCI capacitor, maybe it will quantify the bluetooth interface!",
	"copying the monitor wont do anything, we need to synthesize the back-end ADP application!",
	"Try to index the PNG card, maybe it will transmit the neural system!",
	"Try to bypass the SCSI sensor, maybe it will generate the 1080p card!",
	"We need to calculate the open-source SDD driver!",
	"If we reboot the port, we can get to the RSS application through the 1080p SQL microchip!",
	"Use the cross-platform AI system, then you can connect the digital card!",
	"We need to navigate the virtual SSL transmitter!",
	"The JSON hard drive is down, bypass the redundant firewall so we can copy the FTP port!",
	"We need to navigate the haptic JBOD system!",
	"We need to generate the virtual USB pixel!",
	"Ill override the digital ADP alarm, that should microchip the USB firewall!",
	"We need to bypass the redundant RAM pixel!",
	"Ill compress the cross-platform EXE card, that should circuit the AGP sensor!",
	"The AGP protocol is down, compress the open-source card so we can override the XML program!",
	"Ill reboot the bluetooth GB capacitor, that should card the HDD panel!",
	"Ill connect the neural IB matrix, that should array the CSS card!",
	"The EXE matrix is down, transmit the wireless matrix so we can index the RAM pixel!",
	"The THX monitor is down, reboot the auxiliary array so we can parse the XML microchip!",
	"Try to override the HDD firewall, maybe it will generate the open-source panel!",
	"We need to index the digital JBOD bus!",
	"Use the multi-byte THX firewall, then you can back up the digital system!",
	"Use the 1080p IB feed, then you can reboot the haptic feed!",
	"Try to bypass the SAS card, maybe it will transmit the solid state system!",
	"Try to quantify the TCP array, maybe it will index the virtual transmitter!",
	"Ill override the cross-platform PCI port, that should driver the FTP card!",
	"If we override the bandwidth, we can get to the SMTP capacitor through the cross-platform RSS alarm!",
	"Use the redundant AGP transmitter, then you can generate the 1080p circuit!",
	"Use the auxiliary EXE monitor, then you can hack the haptic port!",
	"Try to synthesize the SCSI card, maybe it will back up the 1080p circuit!",
	"We need to transmit the auxiliary GB sensor!",
	"Use the mobile GB transmitter, then you can quantify the wireless system!",
	"Try to quantify the SQL application, maybe it will bypass the primary pixel!",
	"You cant override the protocol without programming the mobile RAM card!",
	"The JBOD port is down, program the wireless array so we can input the PCI program!",
	"Use the auxiliary JSON card, then you can copy the optical matrix!",
	"We need to calculate the wireless TCP circuit!",
	"Use the back-end AI firewall, then you can parse the optical program!",
	"navigating the hard drive wont do anything, we need to synthesize the auxiliary USB circuit!",
	"Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth!",
	"If we back up the sensor, we can get to the JBOD matrix through the optical EXE alarm!",
	"Try to generate the TCP bus, maybe it will override the neural bandwidth!",
	"The ADP protocol is down, parse the 1080p card so we can reboot the ADP application!",
	"calculating the driver wont do anything, we need to generate the optical SMTP feed!",
	"Ill calculate the 1080p XML transmitter, that should alarm the RSS firewall!",
	"You cant connect the interface without programming the virtual PNG protocol!",
	"Use the cross-platform THX array, then you can parse the primary capacitor!",
	"generating the sensor wont do anything, we need to hack the solid state AI bus!",
	"Try to calculate the JBOD program, maybe it will synthesize the mobile system!",
	"We need to program the back-end PNG pixel!",
	"Ill program the virtual XML microchip, that should transmitter the SDD protocol!",
	"If we hack the firewall, we can get to the USB application through the bluetooth SDD system!",
	"Use the auxiliary SDD system, then you can input the redundant hard drive!",
	"The GB port is down, quantify the mobile circuit so we can hack the SMTP system!",
	"You cant quantify the driver without transmitting the multi-byte SQL microchip!",
	"Try to parse the SMTP array, maybe it will generate the multi-byte port!",
	"copying the system wont do anything, we need to calculate the virtual SSL circuit!",
	"Use the bluetooth TCP capacitor, then you can reboot the open-source hard drive!",
	"If we navigate the card, we can get to the ADP array through the open-source IB feed!",
	"Try to input the HTTP feed, maybe it will reboot the mobile capacitor!",
	"If we input the driver, we can get to the RAM monitor through the 1080p GB bus!",
	"Ill calculate the wireless ADP port, that should bandwidth the SSL microchip!",
	"Use the haptic XSS driver, then you can connect the wireless program!",
	"quantifying the circuit wont do anything, we need to parse the back-end FTP interface!",
	"Ill reboot the online COM interface, that should system the THX protocol!",
	"Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
	"Ill program the back-end THX matrix, that should interface the HDD panel!",
	"Ill generate the virtual SQL protocol, that should bus the AI hard drive!",
	"We need to calculate the mobile AGP panel!",
	"Ill compress the back-end PCI circuit, that should monitor the PNG driver!",
	"We need to quantify the primary TCP matrix!",
	"Ill synthesize the primary AI capacitor, that should array the JBOD sensor!",
	"You cant hack the card without indexing the primary XSS capacitor!",
	"The TCP feed is down, compress the cross-platform alarm so we can synthesize the XSS array!",
	"The JSON interface is down, hack the haptic transmitter so we can bypass the XML system!",
	"Use the online SDD protocol, then you can parse the open-source bandwidth!"
];

/**
 * Generate a random phrase.
 *
 * @category text
 *
 * @example
 *
 * randPhrase()
 *
 * @example
 *
 * randPhrase({ length: 10 })
 *
 */

function randPhrase(options) {
  return fake(data$E, options);
}

/**
 * Generate a random port.
 *
 * @category internet
 *
 * @example
 *
 * randPort()
 *
 * @example
 *
 * randPort({ length: 10 })
 *
 */

function randPort(options) {
  return fake(() => randNumber({
    min: 0,
    max: 65353
  }), options);
}

/**
 * Generate a random uuid.
 *
 * @category general, database
 *
 * @example
 *
 * randUuid()
 *
 * @example
 *
 * randUuid({ length: 10 })
 *
 */

function randUuid(options) {
  return fake(() => esm_browser_v4(), options);
}

/**
 * Generate a random user name.
 *
 * @category person
 *
 * @example
 *
 * randUserName()
 *
 * @example
 *
 * randUserName({ length: 10 })
 *
 * @example
 *
 * randUserName({ firstName: 'Ryan' })
 *
 * @example
 *
 * randUserName({ lastName: 'Smee' })
 *
 */

function randUserName(options) {
  return fake(() => {
    var _options$firstName, _options$lastName;

    const firstName = (_options$firstName = options == null ? void 0 : options.firstName) != null ? _options$firstName : randFirstName();
    const lastName = (_options$lastName = options == null ? void 0 : options.lastName) != null ? _options$lastName : randLastName();
    let userName = `${firstName} ${lastName}`.replace(' ', fake(['.', '_']));

    if (randBoolean()) {
      userName += randNumber({
        min: 0,
        max: 100
      });
    }

    return userName;
  }, options);
}

var data$D = [
	"King Drives",
	"Georgiana Throughway",
	"Antonietta Highway",
	"Elian Road",
	"Reynold Crossing",
	"Max Wall",
	"Lehner Drive",
	"Graham Walks",
	"Buckridge Drives",
	"Schimmel Fields",
	"Doyle Expressway",
	"Cade Forks",
	"Myriam Spur",
	"Fannie Loaf",
	"Dorian Gateway",
	"Ruecker Fields",
	"Daugherty Center",
	"Emerald Key",
	"Jazmyn Isle",
	"Viviane Junctions",
	"Price Spring",
	"Aracely Row",
	"Chyna Plaza",
	"Harmon Lodge",
	"Konopelski Inlet",
	"Dave Stravenue",
	"Goyette Circle",
	"Stokes Wells",
	"Arturo Manors",
	"Schumm Land",
	"Bechtelar Fields",
	"Natalia Points",
	"Dianna Inlet",
	"Curt Locks",
	"Durgan Parkways",
	"Dante Summit",
	"Hilma Mills",
	"Stiedemann Field",
	"Genesis Plaza",
	"Carmelo Plaza",
	"Gutkowski Ferry",
	"Abbott Square",
	"Hodkiewicz Oval",
	"Heathcote Cliff",
	"Calista Via",
	"Kihn Expressway",
	"Caesar Place",
	"Lockman Greens",
	"Brisa Hill",
	"Quigley Parkways",
	"Howell Vista",
	"Fisher Light",
	"Tremblay Springs",
	"Stroman Turnpike",
	"Howell Plaza",
	"Wilma Greens",
	"Adell Mews",
	"Shakira Crossroad",
	"Moises Causeway",
	"Frances Groves",
	"Sammy Creek",
	"Wolf Glen",
	"Fay Corners",
	"Collins Lane",
	"Smitham Drive",
	"Cronin Shoal",
	"Missouri Extension",
	"Leffler Fields",
	"Laurianne Glens",
	"Parker Ways",
	"Benny River",
	"Kreiger Mission",
	"Dameon Mountain",
	"Emard Hill",
	"Quitzon Green",
	"Corwin Mission",
	"Rosendo Spring",
	"Carter Pike",
	"Harber Village",
	"Jade Shore",
	"Dariana Junction",
	"Beer Plaza",
	"Hauck Stream",
	"Joshuah Fork",
	"Rath Walk",
	"Eugenia Heights",
	"Kuphal Mountain",
	"Zboncak Harbor",
	"Torphy Fords",
	"Jocelyn Throughway",
	"Cole Center",
	"Forest Path",
	"Oswald Junction",
	"King Springs",
	"Zulauf Branch",
	"Esteban Inlet",
	"Conner Vista",
	"Zboncak Center",
	"Glover Lights",
	"Rohan Tunnel"
];

/**
 * Generate a random street name.
 *
 * @category address
 *
 * @example
 *
 * randStreetName()
 *
 * @example
 *
 * randStreetName({ length: 10 })
 *
 */

function randStreetName(options) {
  return fake(data$D, options);
}

/**
 * Generate a random street address.
 *
 * @category address
 *
 * @example
 *
 * randStreetAddress()
 *
 * @example
 *
 * randStreetAddress({ length: 10 })
 *
 */

function randStreetAddress(options) {
  return fake(() => `${randNumber({
    min: 0,
    max: 1500
  })} ${randStreetName()}`, options);
}

/**
 * Generate a random zip code.
 *
 * @category address
 *
 * @example
 *
 * randZipCode()
 *
 * @example
 *
 * randZipCode({ length: 10 })
 *
 */

function randZipCode(options) {
  return fake(() => {
    let zipCode = '' + randNumber({
      min: 10000,
      max: 99999
    });

    if (randBoolean()) {
      zipCode += '-' + randNumber({
        min: 1000,
        max: 9999
      });
    }

    return zipCode;
  }, options);
}

/**
 * Generate a random address.
 *
 * @category entities, address
 *
 * @example
 *
 * randAddress()
 *
 * @example
 *
 * randAddress({ includeCounty: false }) // default is true
 *
 * @example
 *
 * randAddress({ includeCountry: false }) // default is true
 *
 * @example
 *
 * randAddress({ length: 10 })
 *
 */

function randAddress(options) {
  var _options$includeCount, _options$includeCount2;

  const includeCounty = (_options$includeCount = options == null ? void 0 : options.includeCounty) != null ? _options$includeCount : true;
  const includeCountry = (_options$includeCount2 = options == null ? void 0 : options.includeCountry) != null ? _options$includeCount2 : true;

  const factory = () => {
    const address = {
      street: randStreetAddress(),
      city: randCity(),
      zipCode: randZipCode()
    };

    if (includeCounty) {
      address.county = randCounty();
    }

    if (includeCountry) {
      address.country = randCountry();
    }

    return address;
  };

  return fake(factory, options);
}

/**
 * Generate a random user.
 *
 * @category entities, user
 *
 * @example
 *
 * randUser()
 *
 * @example
 *
 * randUser({ length: 10 })
 *
 */

function randUser(options) {
  return fake(() => {
    const firstName = randFirstName({
      withAccents: false
    });
    const lastName = randLastName({
      withAccents: false
    });
    const user = {
      id: randUuid(),
      email: randEmail({
        firstName,
        lastName
      }),
      firstName,
      lastName,
      phone: randPhoneNumber(),
      img: randAvatar(),
      username: randUserName({
        firstName,
        lastName
      }),
      address: randAddress()
    };
    return user;
  }, options);
}

/**
 * Generate a random text.
 *
 * @category text
 *
 * @example
 *
 * text()
 *
 * @example
 *
 * text({ length: 10 })
 *
 * @example
 *
 * text({ charCount: 10 }) // default is 10
 *
 */

function randText(options) {
  var _options$charCount;

  const charCount = (_options$charCount = options == null ? void 0 : options.charCount) != null ? _options$charCount : 10;

  if (charCount < 1 || isNaN(charCount)) {
    throw 'Character count must be greater than 0';
  }

  const factory = () => {
    let text = randSentence();

    if (charCount === 1) {
      return randAlpha();
    }

    while (text.length < charCount) {
      text += ` ${randSentence()}`;
    }

    text = text.substring(0, charCount - 2); // Ensure last char is always a full-stop (not a space)

    text += `${randAlpha()}.`;
    return text;
  };

  return fake(factory, options);
}

/**
 * Generate a random post.
 *
 * @category entities, internet
 *
 * @example
 *
 * randPost()
 *
 * @example
 *
 * randPost({ length: 10 })
 *
 */

function randPost(options) {
  return fake(() => {
    const post = {
      id: randUuid(),
      title: randText({
        charCount: 40
      }),
      body: randText({
        charCount: 500
      }),
      comments: Array.from({
        length: randNumber({
          min: 1,
          max: 5
        })
      }, () => {
        return {
          id: randUuid(),
          text: randText({
            charCount: 100
          }),
          user: randUser()
        };
      })
    };
    return post;
  }, options);
}

var data$C = [
	"low",
	"medium",
	"high",
	"critical",
	"urgent",
	"major",
	"moderate",
	"minor"
];

/**
 * Generate a random priority.
 *
 * @category general
 *
 * @example
 *
 * randPriority()
 *
 * @example
 *
 * randPriority({ length: 10 })
 *
 */

function randPriority(options) {
  return fake(data$C, options);
}

var data$B = [
	"Small Rubber Shoes",
	"Fantastic Wooden Sausages",
	"Handmade Frozen Salad",
	"Intelligent Soft Car",
	"Intelligent Concrete Chips",
	"Handcrafted Concrete Bacon",
	"Small Fresh Fish",
	"Rustic Metal Towels",
	"Unbranded Cotton Hat",
	"Fantastic Frozen Bike",
	"Generic Rubber Shirt",
	"Unbranded Wooden Keyboard",
	"Awesome Metal Computer",
	"Gorgeous Fresh Shoes",
	"Unbranded Concrete Sausages",
	"Practical Wooden Ball",
	"Ergonomic Soft Towels",
	"Small Plastic Table",
	"Awesome Metal Pants",
	"Licensed Steel Sausages",
	"Handcrafted Rubber Bike",
	"Ergonomic Cotton Computer",
	"Generic Wooden Ball",
	"Fantastic Frozen Soap",
	"Generic Plastic Keyboard",
	"Awesome Cotton Pizza",
	"Licensed Metal Chips",
	"Handcrafted Cotton Towels",
	"Handmade Plastic Tuna",
	"Practical Granite Keyboard",
	"Intelligent Concrete Soap",
	"Rustic Concrete Chips",
	"Fantastic Steel Hat",
	"Rustic Cotton Chair",
	"Gorgeous Metal Pants",
	"Intelligent Metal Bacon",
	"Handmade Rubber Car",
	"Tasty Concrete Keyboard",
	"Incredible Granite Hat",
	"Practical Rubber Fish",
	"Rustic Cotton Gloves",
	"Rustic Cotton Ball",
	"Refined Fresh Shirt",
	"Generic Granite Sausages",
	"Rustic Granite Fish",
	"Practical Wooden Bacon",
	"Sleek Plastic Chair",
	"Handcrafted Fresh Mouse",
	"Small Concrete Shoes",
	"Awesome Fresh Chair",
	"Incredible Soft Computer",
	"Tasty Concrete Chips",
	"Generic Rubber Sausages",
	"Intelligent Concrete Chicken",
	"Rustic Soft Ball",
	"Awesome Steel Towels",
	"Incredible Fresh Bike",
	"Unbranded Granite Chicken",
	"Rustic Concrete Bike",
	"Small Frozen Sausages",
	"Intelligent Plastic Gloves",
	"Ergonomic Frozen Towels",
	"Refined Frozen Ball",
	"Refined Cotton Ball",
	"Licensed Steel Salad",
	"Intelligent Wooden Bacon",
	"Unbranded Metal Shoes",
	"Fantastic Granite Car",
	"Ergonomic Granite Bacon",
	"Awesome Wooden Shirt",
	"Rustic Wooden Pizza",
	"Tasty Frozen Table",
	"Awesome Wooden Hat",
	"Awesome Rubber Salad",
	"Licensed Concrete Fish",
	"Fantastic Soft Cheese",
	"Rustic Frozen Pizza",
	"Refined Concrete Tuna",
	"Small Frozen Tuna",
	"Licensed Granite Cheese",
	"Practical Rubber Car",
	"Rustic Steel Sausages",
	"Awesome Concrete Hat",
	"Awesome Granite Sausages",
	"Sleek Plastic Chips",
	"Handcrafted Wooden Gloves",
	"Intelligent Metal Computer",
	"Fantastic Fresh Sausages",
	"Fantastic Plastic Salad",
	"Unbranded Steel Sausages",
	"Handcrafted Wooden Fish",
	"Sleek Wooden Bacon",
	"Unbranded Plastic Towels",
	"Tasty Soft Sausages",
	"Generic Metal Shirt",
	"Handmade Granite Cheese",
	"Small Fresh Bacon",
	"Tasty Granite Towels",
	"Licensed Steel Chips"
];

/**
 * Generate a random product name.
 *
 * @category commerce
 *
 * @example
 *
 * randProductName()
 *
 * @example
 *
 * randProductName({ length: 10 })
 *
 */

function randProductName(options) {
  return fake(data$B, options);
}

var data$A = [
	"Bostons most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
	"The Football Is Good For Training And Recreational Purposes",
	"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
	"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
	"The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
	"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
	"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
	"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
	"Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
	"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
	"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
	"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
];

/**
 * Generate a random product description.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductDescription()
 *
 * @example
 *
 * randProductDescription({ length: 10 })
 *
 */

function randProductDescription(options) {
  return fake(data$A, options);
}

var data$z = [
	"Antiques",
	"Appliances",
	"Automotive Parts & Accessories",
	"Automotive Parts",
	"Baby & Personal Care",
	"Books",
	"CDs & Vinyl",
	"Clothing",
	"Collectibles",
	"Computers & Tablets",
	"Crafts",
	"Electronics",
	"Garden",
	"Grocery",
	"Health & Beauty",
	"Kindle",
	"Movies & TV",
	"Musical Instruments",
	"Smartphones & Accessories",
	"Sporting Goods",
	"Toys",
	"Video Games"
];

/**
 * Generate a random product category.
 *
 * @category Commerce
 *
 * @example
 *
 * randProductCategory()
 *
 * @example
 *
 * randProductCategory({ length: 10 })
 *
 */

function randProductCategory(options) {
  return fake(data$z, options);
}

/**
 * Generate a random product.
 *
 * @category entities
 *
 * @example
 *
 * randProduct()
 *
 * @example
 *
 * randProduct({ length: 10 })
 *
 */

function randProduct(options) {
  return fake(() => ({
    id: randUuid(),
    title: randProductName(),
    description: randProductDescription(),
    price: getRandomInRange({
      fraction: 2
    }).toString(),
    category: randProductCategory(),
    image: randImg(),
    rating: {
      rate: getRandomInRange({
        min: 0.1,
        max: 5.0,
        fraction: 1
      }).toString(),
      count: getRandomInRange({
        min: 0,
        max: 10000
      }).toString()
    }
  }), options);
}

var data$y = [
	"Awesome",
	"Rustic",
	"Small",
	"Gorgeous",
	"Fantastic",
	"Sleek",
	"Intelligent",
	"Unbranded",
	"Refined",
	"Licensed",
	"Generic",
	"Practical",
	"Ergonomic",
	"Handcrafted",
	"Tasty",
	"Handmade",
	"Incredible"
];

/**
 * Generate a random product adjective.
 *
 * @category commerce
 *
 * @example
 *
 * randProductAdjective()
 *
 * @example
 *
 * randProductAdjective({ length: 10 })
 *
 */

function randProductAdjective(options) {
  return fake(data$y, options);
}

var data$x = [
	"Metal",
	"Plastic",
	"Rubber",
	"Frozen",
	"Soft",
	"Concrete",
	"Granite",
	"Fresh",
	"Steel",
	"Cotton",
	"Wooden"
];

/**
 * Generate a random product material.
 *
 * @category commerce
 *
 * @example
 *
 * randProductMaterial()
 *
 * @example
 *
 * randProductMaterial({ length: 10 })
 *
 */

function randProductMaterial(options) {
  return fake(data$x, options);
}

var data$w = [
	"Python",
	"Java",
	"JavaScript",
	"C",
	"C++",
	"C#",
	"PHP",
	"Kotlin",
	"R",
	"TypeScript",
	"Abap",
	"Swift",
	"Objective-C",
	"VBA",
	"Matlab",
	"Go",
	"Scala",
	"Ruby",
	"Groovy",
	"Dart",
	"Cobol",
	"Visual Basic",
	"Perl",
	"Julia",
	"Rust",
	"Lua",
	"Lisp",
	"Haskell",
	"Delphi"
];

/**
 * Generate a random programming language.
 *
 * @category code
 *
 * @example
 *
 * randProgrammingLanguage()
 *
 * @example
 *
 * randProgrammingLanguage({ length: 10 })
 *
 */

function randProgrammingLanguage(options) {
  return fake(data$w, options);
}

var data$v = [
	"They/Them",
	"She/Her",
	"He/Him",
	"Ze/Hir"
];

/**
 * Generate a random pronoun.
 *
 * @category person
 *
 * @example
 *
 * randPronoun()
 *
 */

function randPronoun(options) {
  return fake(data$v, options);
}

var data$u = [
	"https",
	"http",
	"tcp",
	"udp",
	"ip",
	"pop",
	"smtp",
	"dhcp",
	"l2tp",
	"ftp",
	"imap"
];

var data$t = [
	"Hyper Text Transfer Protocol Secure",
	"Hyper Text Transfer Protocol",
	"Transmission Control Protocol",
	"User Datagram Protocol",
	"Internet Protocol",
	"Post office Protocol",
	"Simple mail transport Protocol",
	"Dynamic Host Configuration Protoco",
	"Layer Two Tunnelling Protocol",
	"File Transfer Protocol",
	"Internet Message Access Protocol"
];

/**
 * Generate a random protocol.
 *
 * @category internet
 *
 * @example
 *
 * randProtocol()
 *
 * @example
 *
 * randProtocol({ length: 10 })
 *
 * @example
 *
 * randProtocol({ fullName: true })
 *
 */

function randProtocol(options) {
  return fake(options != null && options.fullName ? data$t : data$u, options);
}

var data$s = [
	"A stumble may prevent a fall.",
	"Put your future in good hands your own.",
	"What you see depends on what you're looking for.",
	"Worry gives a small thing a big shadow.",
	"To get something you never had, you have to do something you never did.",
	"Be thankful when you don't know something for it gives you the opportunity to learn.",
	"Letting go is not the end of the world; it is the beginning of a new life.",
	"Our greatest glory is not in never failing but rising everytime we fall.",
	"Being right is highly overrated. Even a stopped clock is right twice a day.",
	"Love is not blind; it simply enables one to see things others fail to see.",
	"If you get up one more time than you fall, you will make it through.",
	"Don't focus on making the right decision, focus on making the decision the right one.",
	"Love is just a word until someone comes along and gives it meaning.",
	"We all have problems. The way we solve them is what makes us different.",
	"Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
	"Every day may not be good, but there's something good in every day.",
	"Some people think it's holding that makes one strong sometimes it's letting go.",
	"Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
	"It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
	"As the rest of the world is walking out the door, your best friends are the ones walking in.",
	"Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
	"A good teacher is like a candle it consumes itself to light the way for others.",
	"Life is not measured by the breaths we take, but by the moments that take our breath.",
	"The real measure of your wealth is how much youd be worth if you lost all your money.",
	"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
	"A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
	"Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
	"Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
	"Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
	"When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
	"Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.",
	"If we are facing in the right direction, all we have to do is keep on walking.",
	"Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
	"An obstacle may be either a stepping stone or a stumbling block.",
	"I've never seen a smiling face that was not beautiful.",
	"Kindness is the greatest wisdom.",
	"Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
	"You don't drown by falling in water. You drown by staying there.",
	"Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
	"A smile is a light in the window of your face to show your heart is at home.",
	"You may only be someone in the world, but to someone else, you may be the world.",
	"A bend in the road is not the end of the road...unless you fail to make the turn.",
	"One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
	"Courage is the discovery that you may not win, and trying when you know you can lose.",
	"A good rest is half the work.",
	"All the flowers of all the tomorrows are in the seeds of today.",
	"A man is not where he lives but where he loves.",
	"The world does not happen to you it happens from you.",
	"More powerful than the will to win is the courage to begin.",
	"What we see is mainly what we look for.",
	"Don't wait for people to be friendly. Show them how.",
	"Don't let today's disappointments cast a shadow on tomorrow's dreams.",
	"Never let lack of money interfere with having fun.",
	"He who has health has hope, and he who has hope has everything.",
	"The difficulties of life are intended to make us better, not bitter.",
	"Change your words. Change your world.",
	"Open minds lead to open doors.",
	"Each time we face a fear, we gain strength, courage, and confidence in the doing.",
	"If you come to a fork in the road, take it.",
	"Nobody can do everything, but everybody can do something.",
	"Why worry about tomorrow, when today is all we have?",
	"Most smiles are started by another smile.",
	"When you lose, don't lose the lesson.",
	"If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
	"The steeper the mountain the harder the climb the better the view from the finishing line",
	"Don't let what you can't do stop you from doing what you can do.",
	"You can never cross the ocean unless you have the courage to lose sight of the shore.",
	"The best place to find a helping hand is at the end of your own arm.",
	"Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
	"We cannot direct the wind but we can adjust the sails.",
	"Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
	"Many people have gone further than they thought they could because someone else thought they could.",
	"Never tell me the sky is the limit when there are footprints on the moon.",
	"Count your joys instead of your woes. Count your friends instead of your foes.",
	"Beware of the half truth. You may have gotten hold of the wrong half.",
	"It's not who you are that holds you back, it's who you think you're not.",
	"Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life.",
	"My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength.",
	"Weakness of attitude becomes weakness of character.",
	"Nothing can stop the man with the right mental attitude from achieving his goal nothing on earth can help the man with the wrong mental attitude.",
	"Attitude is a little thing that makes a big difference.",
	"Your attitude, not your aptitude, will determine your altitude.",
	"There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.",
	"Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.",
	"Everything can be taken from a man but one thing: the last of human freedoms - to choose one's attitude in any given set of circumstances, to choose one's own way.",
	"A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results.",
	"Morality is simply the attitude we adopt towards people whom we personally dislike.",
	"It is not the body's posture, but the heart's attitude that counts when we pray.",
	"People may hear your words, but they feel your attitude.",
	"But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.",
	"Character is the result of two things: mental attitude and the way we spend our time.",
	"Our attitude towards others determines their attitude towards us.",
	"Adopting the right attitude can convert a negative stress into a positive one.",
	"Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
	"The reactionary is always willing to take a progressive attitude on any issue that is dead.",
	"Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
	"Cock your hat - angles are attitudes.",
	"When you pray for anyone you tend to modify your personal attitude toward him.",
	"If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
	"I'm only going to stand before God and give an account for my life, not for somebody else's life. If I have a bad attitude, then I need to say there's no point in me blaming you for what's wrong in my life.",
	"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
	"My attitude is, if someone's going to criticize me, tell me to my face.",
	"Having a positive mental attitude is asking how something can be done rather than saying it can't be done.",
	"My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, 'Oh God, I've got to do this today.'",
	"A complainer is like a Death Eater because there's a suction of negative energy. You can catch a great attitude from great people.",
	"The meaning of things lies not in the things themselves, but in our attitude towards them.",
	"Pink isn't just a color, it's an attitude!",
	"The remarkable thing is, we have a choice everyday regarding the attitude we will embrace for that day.",
	"A positive attitude can really make dreams come true - it did for me.",
	"Good humor is one of the best articles of dress one can wear in society.",
	"When you are thwarted, it is your own attitude that is out of order.",
	"I think it's my adventure, my trip, my journey, and I guess my attitude is, let the chips fall where they may.",
	"Bad attitudes will ruin your team.",
	"For success, attitude is equally as important as ability.",
	"Happiness is an attitude of mind, born of the simple determination to be happy under all outward circumstances.",
	"Great effort springs naturally from great attitude.",
	"Attitudes are more important than facts.",
	"Attitude is everything.",
	"Attitude determines the altitude of life.",
	"Our attitude toward life determines life's attitude towards us.",
	"The greatest discovery of my generation is that man can alter his life simply by altering his attitude of mind.",
	"But my attitude about it is I have miles to go before I sleep.",
	"The attitude is very important. Because, your behavior radiates how you feel.",
	"When you ain't got no money, you gotta get an attitude.",
	"Civilization is a method of living, an attitude of equal respect for all men.",
	"Most of us start out with a positive attitude and a plan to do our best.",
	"There are no menial jobs, only menial attitudes.",
	"Funny is an attitude.",
	"The biggest challenge is how to affect public attitudes and make people care.",
	"If you don't like something, change it. If you can't change it, change your attitude.",
	"It is very important to generate a good attitude, a good heart, as much as possible. From this, happiness in both the short term and the long term for both yourself and others will come.",
	"Your living is determined not so much by what life brings to you as by the attitude you bring to life not so much by what happens to you as by the way your mind looks at what happens.",
	"Happiness doesn't depend on any external conditions, it is governed by our mental attitude.",
	"Whenever you're in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude.",
	"Keep a good attitude and do the right thing even when it's hard. When you do that you are passing the test. And God promises you your marked moments are on their way.",
	"Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results.",
	"Like success, failure is many things to many people. With Positive Mental Attitude, failure is a learning experience, a rung on the ladder, a plateau at which to get your thoughts in order and prepare to try again.",
	"The only disability in life is a bad attitude.",
	"If you have a positive attitude and constantly strive to give your best effort, eventually you will overcome your immediate problems and find you are ready for greater challenges.",
	"You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.",
	"The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
	"A healthy attitude is contagious but don't wait to catch it from others. Be a carrier.",
	"Any fact facing us is not as important as our attitude toward it, for that determines our success or failure. The way you think about a fact may defeat you before you ever do anything about it. You are overcome by the fact because you think you are.",
	"Excellence is not a skill. It is an attitude.",
	"I hope the millions of people I've touched have the optimism and desire to share their goals and hard work and persevere with a positive attitude.",
	"We cannot change our past. We can not change the fact that people act in a certain way. We can not change the inevitable. The only thing we can do is play on the one string we have, and that is our attitude.",
	"I was looking for something a lot heavier, yet melodic at the same time. Something different from heavy metal, a different attitude.",
	"Spend some time this weekend on home improvement improve your attitude toward your family.",
	"We awaken in others the same attitude of mind we hold toward them.",
	"There is little difference in people, but that little difference makes a big difference. That little difference is attitude. The big difference is whether it is positive or negative.",
	"Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
	"The last of human freedoms - the ability to chose one's attitude in a given set of circumstances.",
	"Attitude is more important than the past, than education, than money, than circumstances, than what people do or say. It is more important than appearance, giftedness, or skill.",
	"Being black is not a matter of pigmentation - being black is a reflection of a mental attitude.",
	"People in tough times - it doesn't mean they don't have a great attitude.",
	"A strong positive mental attitude will create more miracles than any wonder drug.",
	"Certain thoughts are prayers. There are moments when, whatever be the attitude of the body, the soul is on its knees.",
	"Leadership is practiced not so much in words as in attitude and in actions.",
	"If a person gets his attitude toward money straight, it will help straighten out almost every other area in his life.",
	"I've reached a point in my life where it's the little things that matter... I was always a rebel and probably could have got much farther had I changed my attitude. But when you think about it, I got pretty far without changing attitudes. I'm happier with that.",
	"Fairness is not an attitude. It's a professional skill that must be developed and exercised.",
	"I think whether you're having setbacks or not, the role of a leader is to always display a winning attitude.",
	"Be sure what you want and be sure about yourself. Fashion is not just beauty, it's about good attitude. You have to believe in yourself and be strong.",
	"Hitler and Mussolini were only the primary spokesmen for the attitude of domination and craving for power that are in the heart of almost everyone. Until the source is cleared, there will always be confusion and hate, wars and class antagonisms.",
	"There must be something solemn, serious, and tender about any attitude which we denominate religious. If glad, it must not grin or snicker if sad, it must not scream or curse.",
	"Sales are contingent upon the attitude of the salesman - not the attitude of the prospect.",
	"A positive attitude is not going to save you. What it's going to do is, everyday, between now and the day you die, whether that's a short time from now or a long time from now, that every day, you're going to actually live.",
	"Always keep that happy attitude. Pretend that you are holding a beautiful fragrant bouquet.",
	"Black Consciousness is an attitude of the mind and a way of life, the most positive call to emanate from the black world for a long time.",
	"I think music is the greatest art form that exists, and I think people listen to music for different reasons, and it serves different purposes. Some of it is background music, and some of it is things that might affect a person's day, if not their life, or change an attitude. The best songs are the ones that make you feel something.",
	"We submit to the majority because we have to. But we are not compelled to call our attitude of subjection a posture of respect.",
	"The winner's edge is not in a gifted birth, a high IQ, or in talent. The winner's edge is all in the attitude, not aptitude. Attitude is the criterion for success.",
	"Having a clear faith, based on the creed of the church is often labeled today as fundamentalism. Whereas relativism, which is letting oneself be tossed and swept along by every wind of teaching, look like the only attitude acceptable to today's standards.",
	"Today's students can put dope in their veins or hope in their brains. If they can conceive it and believe it, they can achieve it. They must know it is not their aptitude but their attitude that will determine their altitude.",
	"I think a lot of times we don't pay enough attention to people with a positive attitude because we assume they are naive or stupid or unschooled.",
	"A great attitude does much more than turn on the lights in our worlds it seems to magically connect us to all sorts of serendipitous opportunities that were somehow absent before the change.",
	"Chaotic people often have chaotic lives, and I think they create that. But if you try and have an inner peace and a positive attitude, I think you attract that.",
	"I am Classic Rock Revisited. I revisit it every waking moment of my life because it has the spirit and the attitude and the fire and the middle finger. I am Rosa Parks with a Gibson guitar.",
	"And the attitude of faith is the very opposite of clinging to belief, of holding on.",
	"Our lives are not determined by what happens to us but how we react to what happens, not by what life brings us but the attitude we bring to life.",
	"Being a sex symbol has to do with an attitude, not looks. Most men think it's looks, most women know otherwise.",
	"I am responsible. Although I may not be able to prevent the worst from happening, I am responsible for my attitude toward the inevitable misfortunes that darken life.",
	"No rational argument will have a rational effect on a man who does not want to adopt a rational attitude.",
	"When I was a child I asked my mother what homosexuality was about and she said - and this was 100 years ago in Germany and she was very open-minded - 'It's like hair color. It's nothing. Some people are blond and some people have dark hair. It's not a subject.' This was a very healthy attitude.",
	"Success or failure in business is caused more by the mental attitude even than by mental capacities.",
	"Obama does not represent America. Nor does he represent anything what our forefathers stood for. This country is basically built on an attitude. It's a way of life. It's not because you're born here. It's not that you're supposed to take from those who have and give to those who haven't. That kills a country. It killed Russia.",
	"Stop this attitude that older people ain't any good anymore! We're as good as we ever were - if we ever were any good.",
	"My attitude to peace is rather based on the Burmese definition of peace - it really means removing all the negative factors that destroy peace in this world. So peace does not mean just putting an end to violence or to war, but to all other factors that threaten peace, such as discrimination, such as inequality, poverty.",
	"Your attitude is like a box of crayons that color your world. Constantly color your picture gray, and your picture will always be bleak. Try adding some bright colors to the picture by including humor, and your picture begins to lighten up.",
	"Crime is terribly revealing. Try and vary your methods as you will, your tastes, your habits, your attitude of mind, and your soul is revealed by your actions.",
	"Some people say I have attitude - maybe I do... but I think you have to. You have to believe in yourself when no one else does - that makes you a winner right there.",
	"The minute you try to talk business with him he takes the attitude that he is a gentleman and a scholar, and the moment you try to approach him on the level of his moral integrity he starts to talk business.",
	"Stiletto, I look at it more as an attitude as opposed to a high-heeled shoe.",
	"If somebody says no to you, or if you get cut, Michael Jordan was cut his first year, but he came back and he was the best ever. That is what you have to have. The attitude that I'm going to show everybody, I'm going to work hard to get better and better.",
	"When you have vision it affects your attitude. Your attitude is optimistic rather than pessimistic.",
	"What matters to me is that I do what I think is right and I see, I'm a numbers guy, that's my attitude. I know we have a debt tsunami coming, we are bankrupting this country and I'm in a position where I can actually advance ideas to prevent that from happening. That's exactly what I should be doing.",
	"I developed a nutty attitude where I'd think, If some guy really loves me he doesn't care if I'm fat. I'd come up with all these stupid reasons why it would be OK to be fat.",
	"Really you just gotta keep chugging along and keep a positive attitude and get through all the problems. You gotta face them, otherwise you don't get through.",
	"Solidarity is an attitude of resistance, I suppose, or it should be.",
	"There's always the motivation of wanting to win. Everybody has that. But a champion needs, in his attitude, a motivation above and beyond winning.",
	"Americans are the most generous country on the planet. I've worked in Europe, I've worked in Australia. There is no where else where you get absolutely no attitude for being a foreigner. If you do your job well, they embrace you.",
	"When I go to the clinic next and sit with a tube in my arm and watch the poison go in, I'm in an attitude of abject passivity. It doesn't feel like fighting at all it just feels like submitting.",
	"Our judgments judge us, and nothing reveals us, exposes our weaknesses, more ingeniously than the attitude of pronouncing upon our fellows.",
	"Pessimism only describes an attitude, and not facts, and hence is entirely subjective.",
	"I was kicked out of school because of my attitude. I was not assimilating. So I went to work, taking any jobs I could get.",
	"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",
	"So long as you've got your friends about you, and a good positive attitude, you don't really have to care what everyone else thinks.",
	"I separated from the Southern Baptists when they adopted the discriminatory attitude towards women, because I believe what Paul taught in Galatians that there is no distinction in God's eyes between men and women, slaves and masters, Jews and non-Jews - everybody is created equally in the eyes of God.",
	"My attitude toward men who mess around is simple: If you find 'em, kill 'em.",
	"Prayer is talking with God. God knows your heart and is not so concerned with your words as He is with the attitude of your heart.",
	"You can't study comedy it's within you. It's a personality. My humor is an attitude.",
	"You call to a dog and a dog will break its neck to get to you. Dogs just want to please. Call to a cat and its attitude is, 'What's in it for me?'",
	"The compulsion to do good is an innate American trait. Only North Americans seem to believe that they always should, may, and actually can choose somebody with whom to share their blessings. Ultimately this attitude leads to bombing people into the acceptance of gifts.",
	"I keep guitars that are, you know, the neck's a little bit bent and it's a little bit out of tune. I want to work and battle it and conquer it and make it express whatever attitude I have at that moment. I want it to be a struggle.",
	"Most of my arguments with musicians through the years have had more to do with their attitude about music, or their attitude about their own lives, or their personal responsibility. Music has never really been the big centerpiece of the fight.",
	"I love everybody. One of the great things about me is that I have a very positive attitude.",
	"Mankind's true moral test, its fundamental test (which lies deeply buried from view), consists of its attitude towards those who are at its mercy: animals. And in this respect mankind has suffered a fundamental debacle, a debacle so fundamental that all others stem from it.",
	"It's sort of a mental attitude about critical thinking and curiosity. It's about mindset of looking at the world in a playful and curious and creative way.",
	"Punk was defined by an attitude rather than a musical style.",
	"It's a fundamental, social attitude that the 1% supports symphonies and operas and doesn't support Johnny learning to program hip-hop beats. When I put it like that, it sounds like, 'Well, yeah,' but you start to think, 'Why not, though?' What makes one more valuable than another?",
	"I think people feel threatened by homosexuality. The problem isn't about gay people, the problem is about the attitude towards gay people. People think that all gays are Hannibal Lecters. But gay people are sons and daughters, politicians and doctors, American heroes and daughters of American heroes.",
	"I have this theory that, depending on your attitude, your life doesn't have to become this ridiculous charade that it seems so many people end up living.",
	"It was just like a dream. I could have ended up with an album that's not all that different from anything else coming out of Nashville. Mutt made the difference. He took these songs, my attitude, my creativity, and colored them in a way that is unique.",
	"I look at Jagger and the like and if I see a good attitude I'll admire it but I wouldn't copy their style.",
	"My attitude is never to be satisfied, never enough, never.",
	"Today's youth are told to get rich or die trying and they really shouldn't take that attitude forward with them.",
	"The purely agitational attitude is not good enough for a detailed consideration of a subject.",
	"Not every religion has to have St. Augustine's attitude to sex. Why even in our culture marriages are celebrated in a church, everyone present knows what is going to happen that night, but that doesn't prevent it being a religious ceremony.",
	"Never refuse an assignment except when there is a conflict of interest, a potential of danger to you or your family, or you hold a strongly biased attitude about the subject under focus.",
	"We can revolutionize the attitude of inner city brown and black kids to learning. We need a civil rights movement within the African-American community.",
	"It's a question of keeping one's eyes and ears open and watching how other people play the game. They're watching me too, to see what my attitude is like.",
	"Yes, we're still five little people with a noisy attitude.",
	"In individual industries where female labour pays an important role, any movement advocating better wages, shorter working hours, etc., would not be doomed from the start because of the attitude of those women workers who are not organized.",
	"On 'Van Halen,' I was a young punk, and everything revolved around the fastest kid in town, gunslinger attitude. But I'd say that at the time of 'Fair Warning,' I started concentrating more on songwriting. But I guess in most people's minds I'm just a gunslinger.",
	"Design is about point of view, and there should be some sort of woman or lifestyle or attitude in one's head as a designer.",
	"Liberalism is an attitude rather than a set of dogmas - an attitude that insists upon questioning all plausible and self-evident propositions, seeking not to reject them but to find out what evidence there is to support them rather than their possible alternatives.",
	"The Dolls were an attitude. If nothing else they were a great attitude.",
	"I was impressed by Hendrix. His attitude was brilliant. Even the way he walked was amazing.",
	"The best way to inspire people to superior performance is to convince them by everything you do and by your everyday attitude that you are wholeheartedly supporting them.",
	"I think it's your mental attitude. So many of us start dreading age in high school and that's a waste of a lovely life. 'Oh... I'm 30, oh, I'm 40, oh, 50.' Make the most of it.",
	"The attitude that nature is chaotic and that the artist puts order into it is a very absurd point of view, I think. All that we can hope for is to put some order into ourselves.",
	"Britishness is just a way of putting things together and a certain don't care attitude about clothes. You don't care, you just do it and it looks great.",
	"It remains to consider what attitude thoughtful men and Christian believers should take respecting them, and how they stand related to beliefs of another order.",
	"Surfers have the most attitude.",
	"I've never run into a guy who could win at the top level in anything today and didn't have the right attitude, didn't give it everything he had, at least while he was doing it wasn't prepared and didn't have the whole program worked out.",
	"That's what I love from metal, and that's what I love from hip-hop. That's what I love from any music that's hard, that's got an edge to it-The attitude in it.",
	"That attitude that fighting is probably not fair, but you have to defend yourself anyway and damage the enemy, has been profoundly consequential as far as my political activism goes.",
	"Seek out that particular mental attribute which makes you feel most deeply and vitally alive, along with which comes the inner voice which says, 'This is the real me,' and when you have found that attitude, follow it.",
	"People think, 'She's a model. She must have such an attitude. She must be so stuck up.' But I'm normal. I cry. I'm not rich. I drive a 1987 Chevrolet Celebrity.",
	"My grandfather was a man, when he talked about freedom, his attitude was really interesting. His view was that you had obligations or you had responsibilities, and when you fulfilled those obligations or responsibilities, that then gave you the liberty to do other things.",
	"I think failure is nothing more than life's way of nudging you that you are off course. My attitude to failure is not attached to outcome, but in not trying. It is liberating. Most people attach failure to something not working out or how people perceive you. This way, it is about answering to yourself.",
	"Part of our western outlook stems from the scientific attitude and its method of isolating the parts of a phenomenon in order to analyze them.",
	"There is a single thread of attitude, a single direction of flow, that joins our present time to its early burgeoning in Mediterranean civilization.",
	"We live in a country that used to have a can-do attitude, and now we have a 'what-can-you-do-for-me?' attitude, and what I try to do is find ways that we can develop common ground.",
	"Could we change our attitude, we should not only see life differently, but life itself would come to be different.",
	"The ideal attitude is to be physically loose and mentally tight.",
	"An attitude to life which seeks fulfillment in the single-minded pursuit of wealth - in short, materialism - does not fit into this world, because it contains within itself no limiting principle, while the environment in which it is placed is strictly limited.",
	"You may not be able to change a situation, but with humor you can change your attitude about it.",
	"What was past was past. I suppose that was the general attitude.",
	"Iraq is just a symbol of the attitude of western democracies to the rest of the world.",
	"I don't mean this in a stuck-up way, but I needed an attitude song.",
	"I met my grandfather just before he died, and it was the first time that I had seen Dad with a relative of his. It was interesting to see my own father as a son and the body language and alteration in attitude that comes with that, and it sort of changed our relationship for the better.",
	"I don't think it's a good attitude in your life to feel that you have to be rich to have self-esteem.",
	"All we need, really, is a change from a near frigid to a tropical attitude of mind.",
	"An aristocratic culture does not advertise its emotions. In its forms of expression it is sober and reserved. Its general attitude is stoic.",
	"I was impressed by Hendrix. Not so much by his playing, as his attitude - he wasn't a great player, but everything else about him was brilliant.",
	"Attitude is attitude, whether you're a West Coast gangster or East Coast gangster, you know?",
	"You know, I always say white is not a colour, white is an attitude, and if you haven't got trillions of dollars in the bank that you don't need, you can't be white.",
	"Being a part of SKECHERS is exciting. It is such a hip company with a great attitude and image.",
	"It is precisely the purpose of the public opinion generated by the press to make the public incapable of judging, to insinuate into it the attitude of someone irresponsible, uninformed.",
	"Coaches will eventually notice a great attitude, and they respect that.",
	"The novelist teaches the reader to comprehend the world as a question. There is wisdom and tolerance in that attitude. In a world built on sacrosanct certainties the novel is dead.",
	"No one's going to be able to operate without a grounding in the basic sciences. Language would be helpful, although English is becoming increasingly international. And travel. You have to have a global attitude.",
	"My second husband believed I had such a fickle attitude to friendship that each Friday he would update the list of my 'Top Ten' friends in the manner of a Top Of The Pops chart countdown.",
	"If you can kill animals, the same attitude can kill human beings. The mentality is the same which exploits nature and which creates wars.",
	"My attitude is, do as much as I can while I'm free. And if I'm arrested I'll still do as much as I can.",
	"There are a lot of movies I'd like to throw away. That's not to say that I went in with that attitude. Any film I ever started, I went in with all the hope and best intentions in the world, but some films just don't work.",
	"By making a comeback, I'm changing the attitude of people toward me. If I'd known that people would react so enthusiastically, I'd have done it years ago.",
	"Today, I think the attitude is that governing is not necessarily good politics, and the result is that it's much more partisan and much more divided.",
	"That term's definitely got a negative aura to it, because people think a diva is somebody with an attitude who demands things all the time. Of course there is that type of diva, but my idea of a diva has always been a singer - whether male or female - who gets on that stage and captivates you with their presence and their voice.",
	"Oh, I don't think Tom Sowell would tell anybody to join the administration. That's not his style. But I think his attitude has always been if it had to be done he'd prefer me to do it than somebody else.",
	"The Senator from Massachusetts has given us ample grounds to doubt the judgment and the attitude he brings to bear on vital issues of national security.",
	"I perfectly understood President Obama's attitude throughout the French presidential campaign. He had no reason to distance himself from Nicolas Sarkozy. It's the basic solidarity that leaders who worked together owe to each other.",
	"I think it has something to do with being British. We don't take ourselves as seriously as some other countries do. I think a lot of people take themselves far too seriously I find that a very tedious attitude.",
	"I failed the LSAT. Basically, if I had not failed, I'd have been a lawyer and there would be no Spanx. I think failure is nothing more than life's way of nudging you that you are off course. My attitude to failure is not attached to outcome, but in not trying. It is liberating.",
	"My attitude to writing is like when you do wallpapering, you remember where all the little bits are that don't meet. And then your friends say: It's terrific!",
	"Liberalism is a really old British tradition and it has a completely different attitude towards the individual and the relationship between the individual and the state than the collectivist response of Labour, and particularly Old Labour, does.",
	"I've always had a 'Work hard, play hard' attitude to life - I still do - but sometimes you get involved in something that needs a calm, methodical approach.",
	"I've always considered myself to be fiercely patriotic. I love Britain - its history and the down-to-earth attitude people have.",
	"There is a brief moment when all there is in a man's mind and soul and spirit is reflected through his eyes, his hands, his attitude. This is the moment to record.",
	"I was fortunate to play for Pete Rose and have teammates like Ken Griffey Sr., Tony Perez and Dave Concepcion. I grew up in the game with a mature attitude. I've always known it was better to be seen and not heard.",
	"I've never been out with any of the cast of Coronation Street. We're all very close friends so it's very much a professional attitude.",
	"Nothing. We're all friends and friendly. So when the cameras go down, depending on the mood or the nature of the material we're dealing with, there's usually a kind of a prevailing light attitude that's floating around.",
	"I will keep smiling, be positive and never give up! I will give 100 percent each time I play. These are always my goals and my attitude.",
	"I'm taking a bit of a wait-and-see attitude towards 3D.",
	"My father instilled in me the attitude of prevailing. If there's a challenge, go for it. If there's a wall to break down, break it down.",
	"Just as the left has to be more willing to question 'Government knows best,' the right has to rethink its laissez-faire attitude toward government.",
	"The attitude of insolent haughtiness is characteristic of the relationships Americans form with what is alien to them, with others.",
	"Although as a sailor I despised politics - for I loved my sailor's life and still love it today - conditions forced me to take up a definite attitude towards political problems.",
	"How do you nurture a positive attitude when all the statistics say you're a dead man? You go to work.",
	"The pilot looked at his cues of attitude and speed and orientation and so on and responded as he would from the same cues in an airplane, but there was no way it flew the same. The simulators had showed us that.",
	"It was my father who instilled the 'never say no' attitude I carry around with me today, and who instilled in me a sense of wonder, always taking us on adventures in the car, never telling us the destination.",
	"I went to England in the '70s, and I was in my early 20s. There was still a residue of that era of being an underclass or colonial. I assume it must have been a more aggressive and prominent attitude 40 years before that, because Australia internationally wasn't regarded as having much cultural value. We were a country full of sheep and convicts.",
	"For a writer only one form of patriotism exists: his attitude toward language.",
	"Gardening is not trivial. If you believe that it is, closely examine why you feel that way. You may discover that this attitude has been forced upon you by mass media and the crass culture it creates and maintains. The fact is, gardening is just the opposite - it is, or should be, a central, basic expression of human life.",
	"Becoming an author changes your attitude too. Once you see where books come from, and how they're made, they never seem quite as sacred again.",
	"I was bringing my attitude as a regular person 'cause this is my attitude.",
	"If you can attribute your success entirely to your own mental effort, to your own attitude, to some spiritual essence that you have that is better than other people's, then that must feel pretty good.",
	"I fell in love with Erica Kane the summer before my freshman year of high school. Like all red-blooded teen American boys, I'd come home from water polo practice and eat a box of Entenmann's Pop'Ems donut holes in front of the TV while obsessively fawning over 'All My Children' and Erica, her clothes, and her narcissistic attitude.",
	"Films for TV have to be much closer to the book, mainly because the objective with a TV movie that translates literature is to get the audience, after seeing this version, to pick up the book and read it themselves. My attitude is that TV can never really be any form of art, because it serves audience expectations.",
	"You can't beat the beehive for glam punkette attitude.",
	"I haven't seen Clones, which has been during this period when I haven't seen much of anything, but I did see Phantom Menace, and see my feelings about it - see, first of all, I think that when you make a lot of movies, your attitude about the movies changes.",
	"My attitude is always one of sensuality, aggressive enthusiasm and a kind of outrageousness in my expression.",
	"Epic poetry exhibits life in some great symbolic attitude. It cannot strictly be said to symbolize life itself, but always some manner of life.",
	"When you retire, it's a place in life, a part of the journey. You just don't quit work you develop an attitude where you can do what you please.",
	"When a parent shows up with an attitude of entitlement, understand that under it is a boatload of anxiety.",
	"What reader wants to be told what attitude to strike?",
	"My denial and irresponsible attitude about asthma put me at great risk and caused me so much needless suffering. My hope is that the kids I talk to learn to open up about their asthma, become educated about their condition, and seek help.",
	"Woman must have her freedom, the fundamental freedom of choosing whether or not she will be a mother and how many children she will have. Regardless of what man's attitude may be, that problem is hers - and before it can be his, it is hers alone.",
	"Even as a little child, I've always had that comedian kind of attitude.",
	"I mean, the shoe - there is a music to it, there is attitude, there is sound, it's a movement. Clothes - it's a different story. There are a million things I'd rather do before designing clothes: directing, landscaping.",
	"In just the same way the thousands of successive positions of a runner are contracted into one sole symbolic attitude, which our eye perceives, which art reproduces, and which becomes for everyone the image of a man who runs.",
	"In the late '70s, maybe just before I started, there was still an attitude that if you did film you didn't do TV and vice versa, but that's gone now.",
	"I cannot say that the attitude of the United Nations always is for the Israeli attitude. Israel, I think, has been under severe attacks by members of the United Nations many times.",
	"I love her attitude, but as much as I'd like to bring my medals to a speech or appearance, I never do.",
	"We must advertise to U.S. business that we are there, that our attitude has changed, and that we care. When we are asked to help, we have to perform and provide the right advice.",
	"The American attitude towards efficiency and execution should always underlie architecture.",
	"I have such an extreme attitude about work, where I can just completely be derelict of my responsibilities and then when I am not derelict, I am completely indulged in it. I swing pretty wildly from the two extremes.",
	"I have a political attitude, but I'm certainly not a politician.",
	"I think my attitude to human beings has changed since leaving prison.",
	"I went to the Performing Arts School and studied classical ballet. That attitude is something that's put into your head. You are never thin enough.",
	"I have always detested any departure from reality, an attitude which I relate to my mother's poor mental health.",
	"With just about every player in Australia, his whole goal and ambition is to play for Australia. That's why they're playing first class cricket. It's just a different attitude.",
	"Right after 'Raymond' I had a world-is-my-oyster attitude, but I found out I don't like oysters. I had this existential emptiness. 'What is my purpose? Who am I?' I had a big identity crisis.",
	"What sculptors do is represent the essence of gesture. What is important in mime is attitude.",
	"It really was hand-to-mouth and you can say, 'Poor little me, how dreadful, what a deprived childhood', but I didn't feel that way at all. It's all about the attitude at home.",
	"Having a clear faith, based on the creed of the church is often labeled today as fundamentalism. Whereas relativism, which is letting oneself be tossed and swept along by every wind of teaching, look like the only attitude acceptable to today's standards.",
	"You know what's funny to me? Attitude.",
	"The characteristic political attitude of today is not one of positive belief, but of despair.",
	"If you can't change your fate, change your attitude.",
	"Mainly what I learned from Buddy... was an attitude. He loved music, and he taught me that it shouldn't have any barriers to it.",
	"I think fun is an important part of the entertainment industry, and it should be. Anybody who's not incorporating some of that into their work needs to take a break, go away, and have an attitude adjustment.",
	"I have played on many teams throughout my career, and I know when a team has the tools, and the right positive attitude towards winning.",
	"Vampires are so old that they don't need to impress anyone anymore. They're comfortable in their own skin. It's this enigmatic strength that's very romantic and old-fashioned. I think it goes back to something of a Victorian attitude of finding a strong man who's going to look after his woman.",
	"What I wish I had, is that I wish I was a little more Greek, in that I wish I could lose my North American driven attitude and that I could be a little bit more poetic and laissez faire.",
	"I was always the guy getting kicked out of my classes at school for having an attitude problem.",
	"And I tell you, having girls has made me a much better man. I have friends who are fathers, but they only have boys, and they have the same attitude toward women they always had, you know? And I don't play that... My girls, you mess with them? I will bury you underground.",
	"Style is a reflection of your attitude and your personality.",
	"If a person can be said to have the wrong attitude, there is no need to pay attention to his arguments.",
	"The attitude is we live and let live. This is actually an amazing change in values in a rather short time and it's an example of freedom from religion.",
	"Not to discriminate every moment some passionate attitude in those about us, and in the very brilliancy of their gifts some tragic dividing on their ways, is, on this short day of frost and sun, to sleep before evening.",
	"Players should know that if you can't make the contribution of the winning shot, that your attitude every day when you come to practice, or the positive contribution you make through cheering and keeping up team morale, is just as important in the overall picture.",
	"It's not the style that motivates me, as much as an attitude of openness that I have when I go into a project.",
	"The place of chess in the society is closely related to the attitude of young people towards our game.",
	"We assume that we've come so far as compassionate citizens of the world if we do choose to read the news, yet the attitude towards life can be one where we put blinders on and forget that there are civil wars going on. It's easy to forget that there are so many people starving to death every single day.",
	"The jokes are great but what really matters for a comedian is his performance, his whole attitude, and the laughs that he gets between the jokes rather than on top of the jokes.",
	"There were a few teachers who just did not like me because of my face. Once, I was told to stand in the corner until I cheered up. The attitude was, 'Oh, for God's sake, what's the matter with him?' But it's just a natural expression.",
	"I'm just part of a tradition of people who aren't pleased. I would never think anyone else who has the same attitude was getting it from me. I'd just think they're... sensible.",
	"The key to life is your attitude. Whether you're single or married or have kids or don't have kids, it's how you look at your life, what you make of it. It's about making the best of your life wherever you are in life.",
	"If you get a diagnosis, get on a therapy, keep a good attitude and keep your sense of humor.",
	"When a woman puts on a heel, she has a different posture, a different attitude. She really stands up and has a consciousness of her body.",
	"Whenever I'm having a bad day and have an attitude, I stay home. I keep it at home.",
	"You don't have to have an attitude if you're famous.",
	"I need that aggressive attitude to play my music and more men have that attitude than women.",
	"But Jesus changes your attitude towards yourself and towards other people.",
	"But I think bands that rolled in with a big attitude, like they were some big deal, I just found that very strange.",
	"What irritates me is the bland way people go around saying, 'Oh, our attitude has changed. We don't dislike these people any more.' But by the strangest coincidence, they haven't taken away the injustice the laws are still on the books.",
	"There is definitely something sexy about a girl with an attitude and a pair of leather pants.",
	"The phenomenon of home schooling is a wonderful example of the American can-do attitude. Growing numbers of parents have become disenchanted with government-run public schools. Many parents have simply taken matters into their own hands, literally.",
	"Regardless of what one's attitude towards prohibition may be, temperance is something against which, at a time of war, no reasonable protest can be made.",
	"At home in Ireland, there's a habit of avoidance, an ironical attitude towards the authority figure.",
	"Even if people do wrong, we're social animals, so what can we do about stopping them doing the same things in future? Saying people are 'bad' or 'evil' is just an unwillingness to engage an unwillingness to try to empathise. That sanctimonious attitude doesn't help anyone.",
	"People have often asked if I'm gay because I don't go out of my way to spit and scratch and give people attitude.",
	"I don't return anybody's calls unless it's going to mean extra money for me. And I've completely cut off all relationships with any friends that I had before the show. And I've copped an attitude.",
	"A positive attitude is something everyone can work on, and everyone can learn how to employ it.",
	"My feelings about my mortality are less selfish than they used to be. I used to affect a cavalier attitude to death now I see it from my son's perspective.",
	"The U.S. tries to provide immigrants who grow up here with a world-class education and imbue them with the can-do attitude that has long defined American innovation.",
	"The attitude of independence toward a constructed language which all national speakers must adopt is really a great advantage, because it tends to make man see himself as the master of language instead of its obedient servant.",
	"I feel like I have as good a shot as anybody out there and I have gotten close in the past, so why not have the attitude that I can come out and play great tennis and maybe even win this tournament.",
	"Art is the child of Nature yes, her darling child, in whom we trace the features of the mother's face, her aspect and her attitude.",
	"I just think that people take me a little more seriously as a brunette. I don't know if that's just because of a societal preconceived notion that all blondes are stupid, but it's a different kind of attitude.",
	"I came back to performing with a different attitude about performing and myself. I wasn't expecting perfection any more, just hoping for an occasional inspiration.",
	"The purely agitation attitude is not good enough for a detailed consideration of a subject.",
	"Animals have a much better attitude to life and death than we do. They know when their time has come. We are the ones that suffer when they pass, but it's a healing kind of grief that enables us to deal with other griefs that are not so easy to grab hold of.",
	"Only one thing can conquer war - that attitude of mind which can see nothing in war but destruction and annihilation.",
	"It's not too good to have this attitude in F1. It could be a disadvantage.",
	"I just really think every job I do, I get this gypsy attitude to money.",
	"My personal view is that such total planning by the state is an absolute good and not simply a relative good... I do not myself think of the attitude I take as deriving from Marx - though this undoubtedly will be suggested - but from Fichte and Hegel.",
	"There's a punk-rock attitude, clearly, to 'Hated.' There's even a punk-rock attitude to 'The Hangover,' I think. We start the movie with a Glenn Danzig song.",
	"The American attitude is 'We're the best'. That's why the NBA guys who come from other countries, the Europeans, all sort of stick together away from the game.",
	"The problem was just a mean attitude that festers and has to be challenged.",
	"I'm not anti-fashion, but I've always had a bit of a punk attitude. That's important, I think. I do my own thing.",
	"To so enter into it in nature and art that the enjoyed meanings of life may become a part of living is the attitude of aesthetic appreciation.",
	"The traditional Christian attitude toward human personality was that human nature was essentially good and that it was formed and modified by social pressures and training.",
	"My parents have a strong work ethic, but their attitude to life, their philosophy, is: 'whatever makes you happy.'",
	"Bob Altman had this relaxed but serious attitude. Everybody loved him. I wanted him to adopt me.",
	"The pool is terrible, but that doesn't have much to do with my record swims. That's all mental attitude.",
	"Fame can be just so annoying because people are so critical of you. You can't just say, 'hi'. You say hi and people whisper' man did you see the way she said hi? What an attitude.",
	"My dad instilled in me a great sense of humor. I wasn't bullied at school because my outward attitude was confident, and that helps.",
	"The attitude and capacity of the factory, the old metal table and the new ideas of the wooden furniture quickly and naturally suggested the possibility of metal furniture.",
	"You can measure a programmer's perspective by noting his attitude on the continuing vitality of FORTRAN.",
	"Let us change our traditional attitude to the construction of programs. Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.",
	"It goes without saying that the Jewish people can have no other goal than Palestine and that, whatever the fate of the proposition may be, our attitude toward the land of our fathers is and shall remain unchangeable.",
	"That attitude toward women as objects may have worked for the late Sixties, but it doesn't do so now.",
	"The time I spent thinking about how I was better than somebody else or worrying about somebody else's attitude was time I could put to better use.",
	"I really believe you can predict when someone has a great attitude, a real well of talent.",
	"It is impossible to exaggerate the wide, and widening, gulf between the American attitude on the Iraq war and the view from our friends across the Atlantic.",
	"As a team, you need to come from behind every once in awhile just to do it. Good for the attitude. It makes it exciting. And when everybody knows you have to throw it... that makes it fun too.",
	"I hope 'The Voice' has a fifteen-year run, don't get me wrong. But I come from nothing, and maybe it's the Irish in me, but my attitude is always like, 'They'll figure me out soon.'",
	"Time plays a role in almost every decision. And some decisions define your attitude about time.",
	"'UFO's' attitude toward the subject is very similar to mine. It's not an advocacy its philosophy is more 'I want to believe this, but I want it proved.'",
	"The music is first and foremost everything - no egos, no attitude, nothing - it's about the music.",
	"But having said that, there's also a sea change in attitude towards media.",
	"In the West, you have always associated the Islamic faith 100 percent with Arab culture. This in itself is a fundamentalist attitude and it is mistaken.",
	"Jazz in itself is not struggling. That is, the music itself is not struggling... It's the attitude that's in trouble. My plays insist that we should not forget or toss away our history.",
	"As the time goes by, you change, your learn new things, your attitude is different. For the moment, I'm still enjoying ski racing so much that it would be difficult for me to think about ending my career.",
	"My attitude on skis is different now. I have learned to put less pressure on myself and on the edges of my skis when I'm racing, to be keep myself more under control.",
	"Our attitude is that we want to cross over. You can't go on making records just for your own hometown.",
	"I do not share the half-in, half-out attitude to the EU of some in Britain. Britain's place is in Europe.",
	"I think that the U.S. does have this very much more open attitude, and I admire it very much and I think it's very important to the world. But the information and the discussion sometimes come too late, after the effective decision has been made.",
	"The Stones are a different kind of group. I realized that when I joined them. It's not really so much their musical ability, it's just they have a certain kind of style and attitude which is unique.",
	"Even with, or perhaps, because of, this background, I have over the past few years sensed a very dramatic change in attitude on the part of Prince Edward Islanders towards the on-going rush for so-called modernization.",
	"If you're looking for can-do, earthy-crunchy attitude then you've got to go to Wisconsin.",
	"When I was in my 20s it did occur to me that there was something perverted about an attitude that thought that killing somebody was a minor offence compared to kissing somebody.",
	"You can have a laugh in Los Angeles, or you can weep in Los Angeles, depending on your attitude towards it.",
	"People are patronizing the theatres with renewed enthusiasm - there is an entire picnic-like attitude when families go out to see movies, which is a very good sign. They want to see larger-than-life characters on the big screen and not just watch movies on television or on DVDs.",
	"I just want to go in with the right attitude and from Day 1 make a difference.",
	"The theatre only knows what it's doing next week, not like the opera, where they say: What are we going to do in five years' time? A completely different attitude.",
	"I'm not a music lover in the sense that I look for something to have on. I've never had that attitude to music.",
	"I think one of the things that language poets are very involved with is getting away from conventional ideas of beauty, because those ideas contain a certain attitude toward women, certain attitudes toward sex, certain attitudes toward race, etc.",
	"When you Google me, you'll find a lot of people don't like Richard Dreyfuss. Because I'm cocky and I present a cocky attitude. But no one has ever disagreed with the notion I represent, that we need more civic education. So far there's 100 percent support for that.",
	"My mother, she had a very good attitude toward money. I'm very grateful for the fact that we had to learn to save. I used to get like 50 pence a week, and I'd save it for like five months. And then I'd spend it on Christmas presents. I'd save up like eight pounds. It's nothing, but we did that.",
	"Too many people say to their brokers, I can't deal with this. Take my money. Do what you want. That's the worst attitude you can have.",
	"If philosophy is practice, a demand to know the manner in which its history is to be studied is entailed: a theoretical attitude toward it becomes real only in the living appropriation of its contents from the texts.",
	"I am shocked by the easy attitude of many in the media towards disclosing our Nation's secrets.",
	"I always give Lindsay so much credit for her tennis game, for her attitude, for her person, and because of how she deals with all the things. I don't think people give her enough credit for how well she's doing.",
	"I don't know that I have any role models now that are fixed. Definitely my mom - she's the coolest. She's worked really hard her whole life and I just think she's got a great attitude. Moms just know so much it's so silly.",
	"It's tricky. I've never been standing at the top of the tree with tons of money thrown at me. I've never really had a profile. So in a way I have this 'nothing to lose' attitude.",
	"Lead singers not only do the majority of the work, but their personalities are singled out and taken as the general attitude of the unit.",
	"It's better for me to play with guys because Rock 'n' Roll has such an aggressive attitude.",
	"I think Nina Simone has had an amazing journey. She was spicy and she had attitude and she didn't care, she wanted her money in a paper bag and don't mess with me and I've been doing some research on that so.",
	"I kind of resent this attitude of men that we somehow must always look good.",
	"Bambi can't act. Bambi had major attitude.",
	"I'm a big fan of Courtney Love. I love Hole and I love her acting and I love her attitude. I just hope I never meet her in a dark alley.",
	"I do support a sex-positive attitude for young people. Use condoms, that's important. I love the idea that promiscuity can be healthy but it's got some dodgy crevasses. Ooh, that's a bad reference! But it's got some dangerous cavities there. You know what I'm saying.",
	"The war changed everybody's attitude. We became international almost overnight.",
	"As I wrote, I found that Aibileen had some things to say that really weren't in her character. She was older, soft-spoken, and she started showing some attitude.",
	"I like England more than I did when I left. It's become a bit of a better country in the last ten years, in the attitude of it. A bit more Americanized, which is both good and bad. At least when you order a cup of coffee they don't give you a hard time.",
	"What a stupid attitude we have in this country to personal stories.",
	"I have a Woody Allen Jewish attitude to life: that it's all going to be disastrous. That it hasn't all been that way is simply down to some random quirk of fate.",
	"My attitude toward graduate students was different, I must say. I used graduate students as colleagues: I gave them the best problems to work on, and I encouraged them.",
	"Tommie Aaron taught me how to have a good attitude, to be easy going and not get uptight.",
	"In aid, the proper attitude is one omitting gratitude.",
	"In Scotland over many years we have cultivated through our justice system what I hope can be described as a 'culture of compassion.' On the other hand, there still exists in many parts of the U.S., if not nationally, an attitude towards the concept of justice which can only be described as a 'culture of vengeance.'",
	"Any time I need to get a serious attitude adjustment, I put on one of their records, and there are examples there for all time to keep us honest and keep us reaching they'll never be eclipsed.",
	"I always had the attitude that I wanted to throw a no-hitter every game.",
	"I like actors that are good with pantomime and that can transmit a lot by their presence and attitude more than through their dialogue.",
	"Having a child makes you strong and gives you chutzpah. It relaxed my attitude to the job my center of focus shifted, which I think is very helpful, because even if you're not a very indulgent actor you spend a lot of time thinking about yourself. I don't think that is particularly healthy.",
	"I always said punk was an attitude. It was never about having a Mohican haircut or wearing a ripped T-shirt. It was all about destruction, and the creative potential within that.",
	"Sid Vicious began the age of participation in which everyone could be the artist. Sid proved that you don't have to play well to be the star. You can play badly, or not even at all. I endorsed that attitude. If you can't write songs, no problem - simply steal one and change it to your taste.",
	"Abhorrence of apartheid is a moral attitude, not a policy.",
	"Every baseball crowd, like every theatre audience, has its own distinctive attitude and atmosphere.",
	"Football is my profession now. I'm getting married in August... It's a new experience for me as someone just getting out of college. I still have the same attitude about football I always had. I play hard. I enjoy practice. I'd rather be throwing in passing drills than sitting around and watching TV.",
	"The attitude we have towards our personal pets as opposed to the animals that suffer under the factory farm is hypocritical and delusional.",
	"Certain kinds of speed, flow, intensity, density of attacks, density of interaction... Music that concentrates on those qualities is, I think, easier achieved by free improvisation between people sharing a common attitude, a common language.",
	"I saw 'Taxi Driver,' and 'Taxi Driver' kind of saved my life. The scene where Robert De Niro is looking at himself in the mirror saying, 'You talkin' to me? You talkin' to me? Who the hell else are you talkin' to?' That's the scene that changed my life by changing my attitude about acting.",
	"I've always been a guy who's pretty supportive, its just my nature, so I came in to the situation with the attitude that I wanted to support Johnny and make it work.",
	"I thought I was going to be killed. The casualties were so heavy, it was just a given. I learned to take each day, each mission, as it came. That's an attitude I've carried into my professional life. I take each case, each job, as it comes.",
	"What has happened is that to some degree they have taken an attitude where they don't listen to demos of diverse subject matters. They're looking for demos like the record the guy on the left just did.",
	"Here you do have forests, where pigs could be raised by letting them root about in the forests for a good part of the year. Therefore, you have a different attitude toward them compared with what continues to exist in the Middle East.",
	"The attitude of physiological psychology to sensations and feelings, considered as psychical elements, is, naturally, the attitude of psychology at large.",
	"This generation... they have a different attitude. Instead of sitting and watching something, they want to be a part of it - they're very hedonistic and sensual.",
	"We have become aware of the responsibility for our attitude towards the dark pages in our history. We have understood that bad service is done to the nation by those who are impelling to renounce that past.",
	"But I do think that we approach music, in of itself, with a religious attitude.",
	"I think that generally music should be a positive thing, I like Bob Marley's attitude: he said that his goal in life was to single handedly fight all the evil in the world with nothing but music, and when he went to a place he didn't go to play, he went to conquer.",
	"In 1977, at least, he wished to have people believe that he shared and was proud of an attitude toward women that is not acceptable in a politician. In 2003, all he has said is that he doesn't remember the interview.",
	"You'd like more people to recognise what you do is special. But I take the attitude that the best thing I can do for my sport is to be the best at it. The best way people will come to recognise that track and field is a great sport is to see athletes excelling at it. Which is what I intend to do.",
	"So at a time in which the media give the public everything it wants and desires, maybe art should adopt a much more aggressive attitude towards the public. I myself am very much inclined to take this position.",
	"Modern Orthodoxy has a highly positive attitude toward the State of Israel. Our Ultra-Orthodox brethren recognize only the Holy Land, but not the state.",
	"I just try to try to keep an attitude that I don't know what I'm doing. Not to the point where I'm beating myself up, but I just go in thinking that I have a lot to learn. And I hope I still have that attitude 30 years from now.",
	"I'm not going to take this defeatist attitude and listen to all this crap any more from all these people who have nothing except doomsday to predict.",
	"A series of rumors about my attitude, as well as derogatory remarks about myself and my family showed me that the personal resentment of the Detroit general manager toward me would make it impossible for me to continue playing hockey in Detroit.",
	"Before 'Gangnam Style' I was not a good attitude artist.",
	"Women didn't want to be on the stage with other women because they didn't want their bodies to be compared. They didn't want another female act opening for them because of this weird competitive and tokenistic attitude.",
	"Listen, whatever makes the movie better. That's the attitude you have to have.",
	"Reason is an action of the mind knowledge is a possession of the mind but faith is an attitude of the person. It means you are prepared to stake yourself on something being so.",
	"Hardboiled crime fiction came of age in 'Black Mask' magazine during the Twenties and Thirties. Writers like Dashiell Hammett and Raymond Chandler learnt their craft and developed a distinct literary style and attitude toward the modern world.",
	"I don't think people are fools, and I think they deserve a good attitude and smart entertainment.",
	"Hollywood's a very weird place. I think there's less of everything except for attitude.",
	"My agent says that I'm a 'repeat business guy.' If you hire me to come do a movie, I'll be on time, know all my material, be ready to go, have a good attitude. I'm here to work, so I get hired over and over again by the same producers. If you just be a team player on set you can work so much more often.",
	"What do you mean by faith? Is faith enough for Man? Should he be satisfied with faith alone? Is there no way of finding out the truth? Is the attitude of faith, of believing in something for which there can be no more than philosophic proof, the true mark of a Christian?",
	"I still have a young attitude.",
	"Elvis Costello had a brand new bag. He was a musician, but he knew all about the attitude part of it.",
	"The world is full of musicians who can play great, and you wouldn't cross the road to see them. It's people who have this indefinable attitude that are the good ones.",
	"After working for years in Hollywood where the actors have taken over, it was a real relief to get down there and not only have some children, but also have some actors that had no attitude.",
	"When you are facing the wilderness on your own, you have a totally different attitude to someone who works in government or who has a monthly cheque.",
	"If you take the contempt some Americans have for yuppies and multiply it by 10 you might come close to understanding their attitude towards the City, as they call it - London, the people of the south.",
	"If you go on stage with the wrong attitude, or something in your performance is off, you can lose an audience in the first minute. That first minute is crucial.",
	"We can do better in higher education. And it is more than just technology. It's also an attitude on the part of faculty. We need to think through how we can produce a better quality product at less cost.",
	"In terms of work I've always had a Bad Attitude in that I won't work anywhere which requires me to work strict hours or follow a dress code. I don't know if that's an Asperger's thing or not, I think it's just being reasonable."
];

/**
 * Generate a random quote.
 *
 * @category text
 *
 * @example
 *
 * randQuote()
 *
 * @example
 *
 * randQuote({ length: 10 })
 *
 */

function randQuote(options) {
  return fake(data$s, options);
}

var data$r = [
	"Satin",
	"Giant Angora",
	"Tan",
	"Havana",
	"Harlequin",
	"Rhinelander",
	"Cinnamon",
	"American",
	"Florida White",
	"Checkered Giant",
	"English Lop",
	"Polish",
	"English Angora",
	"Belgian Hare",
	"Standard Chinchilla",
	"Giant Chinchilla",
	"English Spot",
	"Dutch"
];

/**
 * Generate a random rabbit.
 *
 * @category animals
 *
 * @example
 *
 * randRabbit()
 *
 * @example
 *
 * randRabbit({ length: 10 })
 *
 */

function randRabbit(options) {
  return fake(data$r, options);
}

/**
 * Generate a random recent date.
 *
 * @category date
 *
 * @example
 *
 * randRecentDate()
 *
 * @example
 *
 * randRecentDate({ days: 10 }) // default is 1
 *
 * @example
 *
 * randRecentDate({ length: 10 })
 *
 */

function randRecentDate(options) {
  var _options$days;

  const days = (_options$days = options == null ? void 0 : options.days) != null ? _options$days : 1;

  if (days < 1) {
    throw new Error('days must be positive, use soon() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const to = new Date();
  const from = new Date(to.getTime() - daysInMilliseconds);
  return fake(() => randBetweenDate({
    from,
    to
  }), options);
}

/**
 * Generate a random rgb.
 *
 * @category colors
 *
 * @example
 *
 * randRgb()
 *
 * @example
 *
 * randRgb({ alpha: true }) // default is false
 *
 * @example
 *
 * randRgb({ length: 10 })
 *
 */

function randRgb(options) {
  const factory = () => {
    const [r, g, b, a] = [getRandomInRange({
      min: 0,
      max: 255
    }), getRandomInRange({
      min: 0,
      max: 255
    }), getRandomInRange({
      min: 0,
      max: 255
    }), randFloat({
      min: 0.1,
      max: 1
    })];
    return options != null && options.alpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
  };

  return fake(factory, options);
}

var data$q = [
	"Admin",
	"Editor",
	"Owner",
	"Contributor",
	"Viewer",
	"Developer"
];

/**
 * Generate a random user role
 *
 * @category user
 *
 * @example
 *
 * randRole()
 *
 * @example
 *
 * randRole({ length: 10 })
 *
 */

function randRole(options) {
  return fake(data$q, options);
}

/**
 * Generate a random routing number.
 *
 * @category finance
 *
 * @example
 *
 * randRoutingNumber()
 *
 * @example
 *
 * randRoutingNumber({ length: 10 })
 *
 */

function randRoutingNumber(options) {
  return fake(() => randNumber({
    min: 10000000,
    max: 99999999
  }), options);
}

/**
 * Generate a random semantic version.
 *
 * @category internet
 *
 * @example
 *
 * randSemver()
 *
 * @example
 *
 * randSemver({ length: 10 })
 *
 * @example
 *
 * randSemver({ prefix: 'v' })
 *
 */

function randSemver(options) {
  return fake(() => {
    const version = Array.from({
      length: 3
    }, () => randNumber({
      min: 0,
      max: 20
    })).join('.');
    return `${(options == null ? void 0 : options.prefix) || ''}${version}`;
  }, options);
}

var data$p = [
	"Triangle",
	"Circle",
	"Square",
	"Rectangle",
	"Parallelogram",
	"Rhombus",
	"Trapezium",
	"Kite",
	"Polygons",
	"Sphere",
	"Cube",
	"Cuboid",
	"Cone",
	"Cylinder"
];

/**
 * Generate a random shape.
 *
 * @category general
 *
 * @example
 *
 * randShape()
 *
 * @example
 *
 * randShape({ length: 10 })
 *
 */

function randShape(options) {
  return fake(data$p, options);
}

var data$o = [
	"Accounting or bookkeeping",
	"Active listening",
	"Adaptability",
	"Analytical and problem solving",
	"Attention to detail",
	"Brand development",
	"Collaboration",
	"Communication",
	"Creativity",
	"Critical thinking",
	"Customer service",
	"Data analysis",
	"Data mining",
	"Data privacy",
	"Decision making",
	"Dependability",
	"Diplomacy",
	"Empathy",
	"Enterprise resource planning",
	"Human resources",
	"Leadership",
	"Microsoft office proficiency",
	"Multilingualism",
	"Multitasking",
	"Negotiation",
	"Organization",
	"Patience",
	"Positivity",
	"Problem solving",
	"Process automation",
	"Product design",
	"Project management",
	"Research skills",
	"Search engine optimization",
	"Self-motivation",
	"Social skills",
	"Software proficiency",
	"Storytelling",
	"Teamwork",
	"Time management",
	"Troubleshooting",
	"Typing skills",
	"Verbal and presentation",
	"Work ethic",
	"Writing and editing"
];

/**
 * Generate a random skill.
 *
 * @category Person
 *
 * @example
 *
 * randSkill()
 *
 * @example
 *
 * randSkill({ length: 10 })
 *
 */

function randSkill(options) {
  return fake(data$o, options);
}

/**
 * Generate a random slug.
 *
 * @category Internet
 *
 * @example
 *
 * randSlug()
 *
 * @example
 *
 * randSlug({ length: 10 })
 *
 */

function randSlug(options) {
  return fake(() => {
    const numberOfWordsInSlug = getRandomInRange({
      min: 3,
      max: 10
    });
    const randomWords = randWord({
      length: numberOfWordsInSlug
    });
    return randomWords.join('-');
  }, options);
}

var data$n = [
	"Bluntnose viper",
	"Yunnan keelback",
	"Eastern hognose snake",
	"Southwestern black spitting cobra",
	"Machete savane",
	"Angolan python",
	"Huttons tree viper",
	"Eastern tiger snake",
	"Central ranges taipan",
	"Schultzes pitviper",
	"Mexican west coast rattlesnake",
	"Indigo snake",
	"Dog-toothed cat snake",
	"Bismarck ringed python",
	"Boomslang",
	"Mangshan pitviper",
	"Whip snake",
	"Mountain adder"
];

/**
 * Generate a random snake.
 *
 * @category animals
 *
 * @example
 *
 * randSnake()
 *
 * @example
 *
 * randSnake({ length: 10 })
 *
 */

function randSnake(options) {
  return fake(data$n, options);
}

var data$m = [
	{
		name: "Triller",
		link: "https://www.triller.co/"
	},
	{
		name: "Periscope",
		link: "https://www.periscope.tv/"
	},
	{
		name: "Vimeo",
		link: "https://vimeo.com/"
	},
	{
		name: "Valence",
		link: "https://valence.community/"
	},
	{
		name: "Untappd",
		link: "https://untappd.com/"
	},
	{
		name: "Elpha",
		link: "https://elpha.com/"
	},
	{
		name: "Yubo",
		link: "https://yubo.live/"
	},
	{
		name: "Peanut",
		link: "https://www.peanut-app.io/"
	},
	{
		name: "Houseparty",
		link: "https://houseparty.com/"
	},
	{
		name: "Caffeine",
		link: "https://www.caffeine.tv/"
	},
	{
		name: "Steemit",
		link: "https://steemit.com/"
	},
	{
		name: "Baidu Tieba",
		link: "https://tieba.baidu.com/"
	},
	{
		name: "23snaps",
		link: "https://www.23snaps.com/"
	},
	{
		name: "Likee",
		link: "https://likee.video/"
	},
	{
		name: "8tracks",
		link: "https://8tracks.com/"
	},
	{
		name: "Academia",
		link: "https://www.academia.edu/"
	},
	{
		name: "Amikumu",
		link: "https://amikumu.com/"
	},
	{
		name: "aNobii",
		link: "https://www.anobii.com/"
	},
	{
		name: "ASMALLWORLD",
		link: "https://www.asmallworld.com/"
	},
	{
		name: "Athlinks",
		link: "https://www.athlinks.com/"
	},
	{
		name: "BAND",
		link: "https://band.us/en"
	},
	{
		name: "beBee",
		link: "https://www.bebee.com/us/"
	},
	{
		name: "blind",
		link: "https://www.teamblind.com/"
	},
	{
		name: "diaspora*",
		link: "https://diasporafoundation.org/"
	},
	{
		name: "Fark",
		link: "https://www.fark.com/"
	},
	{
		name: "MeWe",
		link: "https://mewe.com/"
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/"
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/"
	},
	{
		name: "Twitter",
		link: "https://twitter.com/"
	},
	{
		name: "Tumblr",
		link: "https://www.tumblr.com/"
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/"
	},
	{
		name: "WhatsApp",
		link: "https://www.whatsapp.com/"
	},
	{
		name: "Snapchat",
		link: "https://www.snapchat.com/"
	},
	{
		name: "Pinterest",
		link: "https://www.pinterest.com/"
	},
	{
		name: "Reddit",
		link: "https://www.reddit.com/"
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/"
	},
	{
		name: "Mix",
		link: "https://mix.com/"
	},
	{
		name: "Tagged",
		link: "https://www.tagged.com/"
	},
	{
		name: "Nextdoor",
		link: "https://nextdoor.com/"
	},
	{
		name: "DeviantArt",
		link: "https://www.deviantart.com/"
	},
	{
		name: "Quora",
		link: "https://www.quora.com/"
	},
	{
		name: "Meetup",
		link: "https://www.meetup.com/"
	},
	{
		name: "ReverbNation",
		link: "https://www.reverbnation.com/"
	},
	{
		name: "Flixster",
		link: "https://www.flixster.com/"
	},
	{
		name: "Goodreads",
		link: "https://www.goodreads.com/"
	},
	{
		name: "Twitch",
		link: "https://www.twitch.tv/"
	},
	{
		name: "CaringBridge",
		link: "https://www.caringbridge.org/"
	},
	{
		name: "Wattpad",
		link: "https://www.wattpad.com/"
	},
	{
		name: "Viadeo",
		link: "http://www.viadeo.com/"
	},
	{
		name: "Crunchyroll",
		link: "https://www.crunchyroll.com/"
	},
	{
		name: "Skyrock",
		link: "https://www.skyrock.com/"
	},
	{
		name: "VK",
		link: "https://vk.com/"
	},
	{
		name: "MyHeritage",
		link: "https://www.myheritage.com/"
	},
	{
		name: "LiveJournal",
		link: "https://www.livejournal.com/"
	},
	{
		name: "Classmates",
		link: "https://www.classmates.com/"
	},
	{
		name: "SoundCloud",
		link: "https://soundcloud.com/"
	},
	{
		name: "Bubbly",
		link: "http://bubbly.net/"
	},
	{
		name: "Flickr",
		link: "https://www.flickr.com/"
	},
	{
		name: "We Heart It",
		link: "https://weheartit.com/"
	},
	{
		name: "Influenster",
		link: "https://www.influenster.com/"
	},
	{
		name: "FilmAffinity",
		link: "https://www.filmaffinity.com/en/main.html"
	},
	{
		name: "Open Diary",
		link: "https://www.opendiary.com/"
	},
	{
		name: "Yelp",
		link: "https://www.yelp.com/"
	},
	{
		name: "CollegeHumor",
		link: "http://www.collegehumor.com/"
	},
	{
		name: "Gaia Online",
		link: "https://www.gaiaonline.com/"
	},
	{
		name: "MocoSpace",
		link: "https://www.mocospace.com/"
	},
	{
		name: "CouchSurfing",
		link: "https://www.couchsurfing.com/"
	},
	{
		name: "Funny or Die",
		link: "https://www.funnyordie.com/"
	},
	{
		name: "italki",
		link: "https://www.italki.com/home"
	},
	{
		name: "eToro",
		link: "https://www.etoro.com/"
	},
	{
		name: "XING",
		link: "https://www.xing.com/en"
	},
	{
		name: "MeetMe",
		link: "https://www.meetme.com/"
	},
	{
		name: "Ravelry",
		link: "https://www.ravelry.com/account/login"
	},
	{
		name: "Care2",
		link: "https://www.care2.com/"
	},
	{
		name: "YY",
		link: "http://www.yy.com/"
	},
	{
		name: "Vero",
		link: "https://www.vero.co/"
	},
	{
		name: "Medium",
		link: "https://medium.com/"
	},
	{
		name: "GIPHY",
		link: "https://giphy.com/"
	},
	{
		name: "Tribe",
		link: "https://tribe.so/"
	},
	{
		name: "Tencent QQ",
		link: "https://www.qq.com/"
	},
	{
		name: "WeChat",
		link: "https://www.wechat.com/en"
	},
	{
		name: "Qzone",
		link: "https://qzone.qq.com/"
	},
	{
		name: "TikTok",
		link: "https://www.tiktok.com/trending?lang=en"
	},
	{
		name: "Sina Weibo",
		link: "https://www.weibo.com/overseas"
	},
	{
		name: "Kuaishou",
		link: "https://www.kuaishou.com/"
	},
	{
		name: "Skype",
		link: "https://www.skype.com/en/"
	},
	{
		name: "Viber",
		link: "https://www.viber.com/en/"
	},
	{
		name: "LINE",
		link: "https://line.me/en/"
	},
	{
		name: "LINE PLAY",
		link: "http://lp.play.line.me/en.html"
	},
	{
		name: "The Dots",
		link: "https://the-dots.com/"
	},
	{
		name: "Telegram",
		link: "https://telegram.org/"
	},
	{
		name: "Foursquare Swarm",
		link: "https://www.swarmapp.com/"
	},
	{
		name: "Douban",
		link: "https://www.douban.com/"
	},
	{
		name: "Discord",
		link: "https://discord.com/"
	},
	{
		name: "Badoo",
		link: "https://badoo.com/"
	},
	{
		name: "Myspace",
		link: "https://myspace.com/"
	},
	{
		name: "Mixi",
		link: "https://mixi.jp/"
	},
	{
		name: "Ravelry",
		link: "https://www.ravelry.com/account/login"
	},
	{
		name: "Cellufun",
		link: "http://www.cellufun.com/games.asp?v=59bfuWxNv00"
	},
	{
		name: "Xanga",
		link: "http://xanga.com/"
	},
	{
		name: "Imgur",
		link: "https://imgur.com/"
	},
	{
		name: "Ello",
		link: "https://ello.co/"
	}
];

/**
 * Generate random social network
 *
 * @category internet
 *
 * @example
 *
 * randSocial()
 *
 * @example
 *
 * randSocial({ length: 2 })
 *
 *
 */

function randSocial(options) {
  return fake(data$m, options);
}

/**
 * Generate a random soon.
 *
 * @category date
 *
 * @example
 *
 * randSoonDate()
 *
 * @example
 *
 * randSoonDate({ days: 5 }) // default is 1
 *
 * @example
 *
 * randSoonDate({ length: 10 })
 *
 */

function randSoonDate(options) {
  var _options$days;

  const days = (_options$days = options == null ? void 0 : options.days) != null ? _options$days : 1;

  if (days < 1) {
    throw new Error('days must be positive, use recent() instead');
  }

  const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
  const from = new Date();
  const to = new Date(from.getTime() + daysInMilliseconds);
  return fake(() => randBetweenDate({
    from,
    to
  }), options);
}

var data$l = {
	olympic: [
		"Archery",
		"Artistic Gymnastics",
		"Artistic Swimming",
		"Athletics",
		"Badminton",
		"Baseball Softball",
		"Basketball",
		"Beach Volleyball",
		"BMX Freestyle",
		"BMX Racing",
		"Boxing",
		"Kayak Flatwater",
		"Kayak Slalom",
		"Diving",
		"Equestrian",
		"Fencing",
		"Football",
		"Golf",
		"Handball",
		"Hockey",
		"Judo",
		"Karate",
		"Marathon Swimming",
		"Modern Pentathlon",
		"Mountain Bike",
		"Rhythmic Gymnastics",
		"Road Cycling",
		"Rowing",
		"Rugby",
		"Sailing",
		"Shooting",
		"Skateboarding",
		"Sport Climbing",
		"Surfing",
		"Swimming",
		"Table Tennis",
		"Taekwondo",
		"Tennis",
		"Track Cycling",
		"Trampoline",
		"Triathlon",
		"Volleyball",
		"Water Polo",
		"Weightlifting",
		"Wrestling"
	],
	winterOlympic: [
		"Alpine Skiing",
		"Biathlon",
		"Bobsleigh",
		"Cross-Country Skiing",
		"Curling",
		"Figure Skating",
		"Freestyle Skiing",
		"Ice Hockey",
		"Luge",
		"Nordic Combined",
		"Short Track Speed Skating",
		"Skeleton",
		"Ski Jumping",
		"Snowboard",
		"Speed Skating"
	],
	outdoor: [
		"Archery",
		"Athletics",
		"Badminton",
		"Baseball",
		"Basketball",
		"Bowling",
		"Boxing",
		"Camping",
		"Canoeing",
		"Climbing",
		"Cricket",
		"Curling",
		"Cycling",
		"Equestrian",
		"Fencing",
		"Football",
		"Golf",
		"Gymnastics",
		"Handball",
		"Hang Gliding",
		"High Jumping",
		"Hockey",
		"Ice Hockey",
		"Judo",
		"Karate",
		"Kite Flying",
		"Monkey Bars",
		"Motorsports",
		"Netball",
		"Rowing",
		"Rugby",
		"Running",
		"Sailing",
		"Skateboarding",
		"Slide",
		"Snow Skiing",
		"Soccer",
		"Street Hockey",
		"Surfing",
		"Swimming",
		"Table Tennis",
		"Tennis",
		"Trekking",
		"Triathlon",
		"Volleyball",
		"Weightlifting",
		"Wrestling"
	]
};

var _Object$keys;
const categoriesCount = (_Object$keys = Object.keys(data$l)) == null ? void 0 : _Object$keys.length;
/**
 * Generate a random sports.
 *
 * @category sports
 *
 * @example
 *
 * randSports()
 *
 * @example
 *
 * randSports({ category : 'olympic' })
 *
 * @example
 *
 * randSports({ length: 10 })
 *
 */

function randSports(options) {
  const sportsData = data$l;
  const category = options == null ? void 0 : options.category;

  if (!categoriesCount) {
    throw 'No Sport Categories found';
  }

  if (category && !sportsData[category]) {
    throw `No Sports found for selected category (${category})`;
  }

  const factory = () => {
    if (category) {
      return randElement(sportsData[category]);
    }

    const randIndex = getRandomInRange({
      min: 0,
      max: categoriesCount - 1,
      fraction: 0
    });
    const randomOrigin = Object.keys(sportsData)[randIndex];
    return randElement(sportsData[randomOrigin]);
  };

  return fake(factory, options);
}

/**
 * Generate a random sports team.
 *
 * @category sports
 *
 * @example
 *
 * randSportsTeam()
 *
 * @example
 *
 * randSportsTeam({ length: 10 })
 *
 */

function randSportsTeam(options) {
  const teamNameFunctions = [randAmericanFootballTeam(), randBaseballTeam(), randBasketballTeam(), randFootballTeam(), randIceHockeyTeam()];
  return fake(() => randElement(teamNameFunctions), options);
}

var data$k = [
	"Oklahoma",
	"South Dakota",
	"Massachusetts",
	"Minnesota",
	"Rhode Island",
	"Florida",
	"Delaware",
	"Utah",
	"Maryland",
	"Pennsylvania",
	"West Virginia",
	"Nevada",
	"New York",
	"Alabama",
	"Arizona",
	"Wyoming",
	"Washington",
	"Nebraska",
	"Mississippi",
	"Missouri",
	"Arkansas",
	"Vermont",
	"North Dakota",
	"Iowa",
	"Georgia",
	"Kentucky",
	"Wisconsin",
	"New Hampshire",
	"Hawaii",
	"Idaho",
	"Michigan",
	"Ohio",
	"Colorado",
	"Kansas",
	"Maine",
	"Alaska",
	"Indiana",
	"South Carolina",
	"Oregon",
	"Illinois",
	"Tennessee",
	"California",
	"Virginia",
	"Texas",
	"Montana",
	"New Jersey",
	"North Carolina"
];

/**
 * Generate a random state.
 *
 * @category address
 *
 * @example
 *
 * randState()
 *
 * @example
 *
 * randState({ length: 10 })
 *
 */

function randState(options) {
  return fake(data$k, options);
}

var data$j = [
	"OR",
	"FL",
	"NM",
	"AK",
	"MO",
	"NE",
	"RI",
	"MI",
	"PA",
	"WI",
	"AL",
	"MA",
	"MN",
	"TN",
	"ND",
	"MS",
	"AR",
	"HI",
	"UT",
	"ID",
	"SC",
	"CA",
	"NJ",
	"CT",
	"OK",
	"AZ",
	"IA",
	"SD",
	"MT",
	"MD",
	"WY",
	"KS",
	"WV",
	"CO",
	"TX",
	"VT",
	"NV",
	"DE",
	"ME",
	"GA",
	"LA",
	"IN",
	"VA"
];

/**
 * Generate a random state abbr.
 *
 * @category address
 *
 * @example
 *
 * randStateAbbr()
 *
 * @example
 *
 * randStateAbbr({ length: 10 })
 *
 */

function randStateAbbr(options) {
  return fake(data$j, options);
}

var data$i = [
	{
		status: "Pending",
		type: [
			"Project",
			"User Story"
		]
	},
	{
		status: "Todo",
		type: [
			"User Story",
			"Task"
		]
	},
	{
		status: "In progress",
		type: [
			"Task"
		]
	},
	{
		status: "In Discussion",
		type: [
			"User Story"
		]
	},
	{
		status: "In Development",
		type: [
			"User Story",
			"Task"
		]
	},
	{
		status: "Needs Confirmation",
		type: [
			"User Story"
		]
	},
	{
		status: "Completed",
		type: [
			"User Story",
			"Task",
			"Project"
		]
	},
	{
		status: "Upcoming",
		type: [
			"Project"
		]
	},
	{
		status: "Overdue",
		type: [
			"Project"
		]
	},
	{
		status: "Not started",
		type: [
			"Project"
		]
	},
	{
		status: "Active",
		type: [
			"Project"
		]
	},
	{
		status: "Priority",
		type: [
			"Project"
		]
	},
	{
		status: "Canceled",
		type: [
			"Project"
		]
	},
	{
		status: "Closed",
		type: [
			"Project",
			"Task"
		]
	},
	{
		status: "New",
		type: [
			"Project",
			"Task",
			"User Story"
		]
	},
	{
		status: "On hold",
		type: [
			"Project"
		]
	}
];

/**
 * Generate a random status.
 *
 * @category general
 *
 * @example
 *
 * randStatus()
 *
 * @example
 *
 * randStatus({ type: 'User Story' })
 *
 * @example
 *
 * randStatus({ length: 10 })
 *
 */

function randStatus(options) {
  let statuses;

  if (options != null && options.type) {
    const filteredStatuses = data$i.filter(status => {
      return status.type.includes(options.type);
    });
    statuses = filteredStatuses.map(({
      status
    }) => status).flat() || [];
  } else {
    statuses = data$i.map(({
      status
    }) => status).flat();
  }

  return fake(statuses, options);
}

var data$h = [
	"Basic",
	"Premium",
	"Free",
	"Gold",
	"Unlimited",
	"Starter",
	"Business",
	"Professional",
	"Advanced",
	"Silver",
	"Bronze",
	"Standard",
	"Pro",
	"Enterprise",
	"Platinum"
];

/**
 * Generate a random subscription plan.
 *
 * @category company
 *
 * @example
 *
 * randSubscriptionPlan()
 *
 * @example
 *
 * randSubscriptionPlan({ length: 10 })
 *
 */

function randSubscriptionPlan(options) {
  return fake(data$h, options);
}

var data$g = [
	{
		realName: "Peter Parker",
		alterEgo: "Spider-man",
		company: "Marvel"
	},
	{
		realName: "Matt Murdock",
		alterEgo: "Daredevil",
		company: "Marvel"
	},
	{
		realName: "T'Challa",
		alterEgo: "Black Panther",
		company: "Marvel"
	},
	{
		realName: "Steve Rogers",
		alterEgo: "Captain America",
		company: "Marvel"
	},
	{
		realName: "Thor Odinson",
		alterEgo: "Thor",
		company: "Marvel"
	},
	{
		realName: "Remy Etienne LeBeau",
		alterEgo: "Gambit",
		company: "Marvel"
	},
	{
		realName: "James \"Logan\" Howlett",
		alterEgo: "Wolverine",
		company: "Marvel"
	},
	{
		realName: "Frank Castle",
		alterEgo: "Punisher",
		company: "Marvel"
	},
	{
		realName: "Dr. Stephen Strange",
		alterEgo: "Doctor Strange",
		company: "Marvel"
	},
	{
		realName: "Tony Stark",
		alterEgo: "Iron Man",
		company: "Marvel"
	},
	{
		realName: "Wade Wilson",
		alterEgo: "Deadpool",
		company: "Marvel"
	},
	{
		realName: "Steven Grant",
		alterEgo: "Moon Knight",
		company: "Marvel"
	},
	{
		realName: "Frog Thor",
		alterEgo: "Frog Thor",
		company: "Marvel"
	},
	{
		realName: "Doug Ramsey",
		alterEgo: "Cypher",
		company: "Marvel"
	},
	{
		realName: "Natasha Alianovna Romanova",
		alterEgo: "Black Widow",
		company: "Marvel"
	},
	{
		realName: "Ms. Marvel",
		alterEgo: "Carol Danvers",
		company: "Marvel"
	},
	{
		realName: "Shadowcat",
		alterEgo: "Kitty Pryde",
		company: "Marvel"
	},
	{
		realName: "Susan Storm",
		alterEgo: "Invisible Woman",
		company: "Marvel"
	},
	{
		realName: "Elektra Natchios",
		alterEgo: "Elektra",
		company: "Marvel"
	},
	{
		realName: "Janet Van Dyne",
		alterEgo: "Wasp",
		company: "Marvel"
	},
	{
		realName: "Clarice Ferguson",
		alterEgo: "Blink",
		company: "Marvel"
	},
	{
		realName: "Ororo Munroe",
		alterEgo: "Storm",
		company: "Marvel"
	},
	{
		realName: "Wanda Maximoff",
		alterEgo: "Scarlet Witch",
		company: "Marvel"
	},
	{
		realName: "Anna Marie LeBeau",
		alterEgo: "Rogue",
		company: "Marvel"
	},
	{
		realName: "Jennifer Walter",
		alterEgo: "She-Hulk",
		company: "Marvel"
	},
	{
		realName: "Silvija Sablinova",
		alterEgo: "Silver Sable",
		company: "Marvel"
	},
	{
		realName: "Gamora Zen Whoberi Ben Titan",
		alterEgo: "Gamora",
		company: "Marvel"
	},
	{
		realName: "Jessica Drew",
		alterEgo: "X-23",
		company: "Marvel"
	},
	{
		realName: "Bruce Wayne",
		alterEgo: "Batman",
		company: "DC"
	},
	{
		realName: "Clark Kent",
		alterEgo: "Superman",
		company: "DC"
	},
	{
		realName: "Hal Jordan",
		alterEgo: "Green Lantern",
		company: "DC"
	},
	{
		realName: "Barry Allen",
		alterEgo: "The Flash",
		company: "DC"
	},
	{
		realName: "J'onn J'onzz",
		alterEgo: "Martian Manhunter",
		company: "DC"
	},
	{
		realName: "Arthur Curry",
		alterEgo: "Aquaman",
		company: "DC"
	},
	{
		realName: "Oliver Queen",
		alterEgo: "Green Arrow",
		company: "DC"
	},
	{
		realName: "Ryan Choi",
		alterEgo: "The Atom",
		company: "DC"
	},
	{
		realName: "Carter Hall",
		alterEgo: "Hawkman",
		company: "DC"
	},
	{
		realName: "Nathaniel Adam",
		alterEgo: "Captain Atom",
		company: "DC"
	},
	{
		realName: "Jefferson Michael Pierce",
		alterEgo: "Black Lightning",
		company: "DC"
	},
	{
		realName: "Diana Prince",
		alterEgo: "Wonder Woman",
		company: "DC"
	},
	{
		realName: "Chay-Ara",
		alterEgo: "Hawkgirl",
		company: "DC"
	},
	{
		realName: "Tora Olafsdotter",
		alterEgo: "Ice",
		company: "DC"
	},
	{
		realName: "Kara Zor-El",
		alterEgo: "Supergirl",
		company: "DC"
	},
	{
		realName: "Jennifer-Lynn Hayden",
		alterEgo: "Jade",
		company: "DC"
	},
	{
		realName: "Kara Zor-L",
		alterEgo: "Power Girl",
		company: "DC"
	},
	{
		realName: "Dawn Granger",
		alterEgo: "Hawk",
		company: "DC"
	},
	{
		realName: "Dinah Lance",
		alterEgo: "Black Canary",
		company: "DC"
	},
	{
		realName: "Helena Bertinelli",
		alterEgo: "Huntress",
		company: "DC"
	},
	{
		realName: "Barbara Gordon",
		alterEgo: "Batgirl",
		company: "DC"
	},
	{
		realName: "Zinda Blake",
		alterEgo: "Lady Blackhawk",
		company: "DC"
	}
];

/**
 * Generate a random superhero.
 *
 * @category entities, comic book
 *
 * @example
 *
 * randSuperhero()
 *
 * @example
 *
 * randSuperhero({ company: 'Marvel' })
 *
 * @example
 *
 * randSuperhero({ length: 10 })
 *
 */

function randSuperhero(options) {
  const factory = () => {
    const heroes = options != null && options.company ? data$g.filter(({
      company
    }) => company === options.company) : data$g;
    return Object.assign({}, randElement(heroes), {
      id: randUuid()
    });
  };

  return fake(factory, options);
}

/**
 * Generate a random superhero name.
 *
 * @category comic book
 *
 * @example
 *
 * randSuperheroName()
 *
 * @example
 *
 * randSuperhero({ company: 'Marvel' })
 *
 * @example
 *
 * randSuperheroName({ length: 10 })
 *
 */

function randSuperheroName(options) {
  const factory = () => {
    const heroes = options != null && options.company ? data$g.filter(({
      company
    }) => company === options.company) : data$g;
    return randElement(heroes).alterEgo;
  };

  return fake(factory, options);
}

var data$f = [
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M28,14H14c-1.1,0-2-0.9-2-2s0.9-2,2-2h1h13c0.6,0,1-0.4,1-1s-0.4-1-1-1H15h-1H7C5.9,8,5,7.1,5,6s0.9-2,2-2h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C4.8,2,3,3.8,3,6v15c0,2.2,1.8,4,4,4h3v2c0,2.2,1.8,4,4,4h14c0.6,0,1-0.4,1-1V15C29,14.4,28.6,14,28,14z\"/><path d=\"M28,11H14c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S28.6,11,28,11z\"/><path d=\"M21,5H7C6.4,5,6,5.4,6,6s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,5,21,5z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M31,25H10.5C8,25,6,23,6,20.5S8,16,10.5,16H31c0.6,0,1,0.4,1,1s-0.4,1-1,1H10.5C9.1,18,8,19.1,8,20.5S9.1,23,10.5,23H31 c0.6,0,1,0.4,1,1S31.6,25,31,25z\"/></g><g><path d=\"M30,25c-0.3,0-0.7-0.2-0.9-0.5c-1.4-2.5-1.4-5.5,0-8c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4c-1.1,1.9-1.1,4.1,0,6c0.3,0.5,0.1,1.1-0.4,1.4C30.3,25,30.2,25,30,25z\"/></g><g><path d=\"M25,32H4.5C2,32,0,30,0,27.5S2,23,4.5,23H25c0.6,0,1,0.4,1,1s-0.4,1-1,1H4.5C3.1,25,2,26.1,2,27.5S3.1,30,4.5,30H25 c0.6,0,1,0.4,1,1S25.6,32,25,32z\"/></g><g><path d=\"M24,32c-0.3,0-0.7-0.2-0.9-0.5c-1.4-2.5-1.4-5.5,0-8c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4c-1.1,1.9-1.1,4.1,0,6c0.3,0.5,0.1,1.1-0.4,1.4C24.3,32,24.2,32,24,32z\"/></g><g><path d=\"M16.9,5c-0.6,0-1-0.4-1-1c0-0.7-0.6-1.5-1.5-2l-0.2-0.1c-0.5-0.3-0.7-0.9-0.4-1.3c0.3-0.5,0.9-0.7,1.3-0.4l0.2,0.1c1.6,0.9,2.6,2.3,2.6,3.8C17.9,4.6,17.5,5,16.9,5z\"/></g><path d=\"M21.5,3.1L21.5,3.1c-1.2-0.2-2.4,0.1-3.4,0.7c-0.3,0.2-0.8,0.2-1.1,0c-0.3-0.2-0.7-0.4-1.1-0.5c0,0.2,0.1,0.5,0.1,0.7c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-0.3-0.1-0.6-0.3-0.9c0,0-0.1,0-0.1,0c-2.9,0.5-4.9,3.5-4.5,6.7c0.3,2.3,1.9,5.8,3.9,7.3c0.7,0.5,1.4,0.8,2,0.8c0.1,0,0.3,0,0.4,0c0.5-0.1,0.9-0.3,1.3-0.6c0.4-0.3,1.1-0.3,1.5,0c0.4,0.3,0.9,0.5,1.3,0.6c0.8,0.1,1.6-0.1,2.5-0.7c2-1.5,3.6-5,3.9-7.3C26.3,6.6,24.3,3.5,21.5,3.1z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M14,24c0-5.5,4.5-10,10-10c1,0,2.1,0.2,3,0.5V9c0-0.6-0.4-1-1-1H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h5C14.8,28.3,14,26.3,14,24z\"/><path d=\"M24,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S28.4,16,24,16z M27,25h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S27.6,25,27,25z\"/><g><path d=\"M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M18.3,18.3c-3.1,3.1-3.1,8.2,0,11.3s8.2,3.1,11.3,0s3.1-8.2,0-11.3S21.5,15.2,18.3,18.3z M26.8,22.6L25.4,24l1.4,1.4c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0L24,25.4l-1.4,1.4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l1.4-1.4l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l1.4,1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0C27.2,21.6,27.2,22.2,26.8,22.6z\"/><path d=\"M14,24c0-5.5,4.5-10,10-10c1,0,2.1,0.2,3,0.5V9c0-0.6-0.4-1-1-1H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h5C14.8,28.3,14,26.3,14,24z\"/><g><path d=\"M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M20,24c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S22.8,24,20,24z\"/></g><path d=\"M29,5H3C2.4,5,2,5.4,2,6v20c0,0.6,0.4,1,1,1h11v-4.4c-0.6-1.1-1-2.3-1-3.6c0-3.9,3.1-7,7-7s7,3.1,7,7c0,1.3-0.4,2.5-1,3.6V27h3c0.6,0,1-0.4,1-1V6C30,5.4,29.6,5,29,5z M10,16H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S10.6,16,10,16z M13,12H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S13.6,12,13,12z\"/><path d=\"M20,26c-1.5,0-2.9-0.5-4-1.3V31c0,0.3,0.2,0.6,0.4,0.8c0.3,0.2,0.6,0.2,0.9,0.1l2.7-0.9l2.7,0.9c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.5,0.4-0.8v-6.3C22.9,25.5,21.5,26,20,26z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z\"/></g><path d=\"M26,8H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h15c0.6,0,1-0.4,1-1V9C27,8.4,26.6,8,26,8z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M24,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S28.4,16,24,16z M27,25h-2v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2h2c0.6,0,1,0.4,1,1S27.6,25,27,25z\"/><path d=\"M14,24c0-5.5,4.5-10,10-10c1,0,2.1,0.2,3,0.5V9c0-0.6-0.4-1-1-1H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h5C14.8,28.3,14,26.3,14,24z\"/><g><path d=\"M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M14,24c0-5.5,4.5-10,10-10c1,0,2.1,0.2,3,0.5V9c0-0.6-0.4-1-1-1H11H9C7.9,8,7,7.1,7,6s0.9-2,2-2h17c0.6,0,1-0.4,1-1s-0.4-1-1-1H9C6.8,2,5,3.8,5,6v20c0,2.2,1.8,4,4,4h2h5C14.8,28.3,14,26.3,14,24z\"/><g><path d=\"M26,7H9C8.4,7,8,6.6,8,6s0.4-1,1-1h17c0.6,0,1,0.4,1,1S26.6,7,26,7z\"/></g><path d=\"M31.7,21.9c-0.1-0.5-0.7-0.8-1.2-0.7c-0.7,0.2-1.2,0-1.3-0.2c-0.1-0.2,0-0.7,0.5-1.3c0.4-0.4,0.4-1,0-1.4c-1-1-2.2-1.7-3.6-2.1c-0.5-0.1-1.1,0.2-1.2,0.7c-0.2,0.7-0.6,1-0.9,1s-0.6-0.4-0.9-1c-0.2-0.5-0.7-0.8-1.2-0.7c-1.4,0.4-2.6,1.1-3.6,2.1c-0.4,0.4-0.4,1,0,1.4c0.5,0.5,0.6,1,0.5,1.3c-0.1,0.2-0.6,0.4-1.3,0.2c-0.5-0.1-1.1,0.2-1.2,0.7C16.1,22.6,16,23.3,16,24s0.1,1.4,0.3,2.1c0.1,0.5,0.7,0.8,1.2,0.7c0.7-0.2,1.2,0,1.3,0.2c0.1,0.2,0,0.7-0.5,1.3c-0.4,0.4-0.4,1,0,1.4c1,1,2.2,1.7,3.6,2.1c0.5,0.1,1.1-0.2,1.2-0.7c0.2-0.7,0.6-1,0.9-1s0.6,0.4,0.9,1c0.1,0.4,0.5,0.7,1,0.7c0.1,0,0.2,0,0.3,0c1.4-0.4,2.6-1.1,3.6-2.1c0.4-0.4,0.4-1,0-1.4c-0.5-0.5-0.6-1-0.5-1.3c0.1-0.2,0.6-0.4,1.3-0.2c0.5,0.1,1.1-0.2,1.2-0.7c0.2-0.7,0.3-1.4,0.3-2.1S31.9,22.6,31.7,21.9z M24,27c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S25.7,27,24,27z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><polygon points=\"7.1,23 8.9,23 8,21.2\"/><path d=\"M13,16H3c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V18C15,16.9,14.1,16,13,16z M12.4,27.9C12.3,28,12.2,28,12,28c-0.4,0-0.7-0.2-0.9-0.6L9.9,25H6.1l-1.2,2.4c-0.2,0.5-0.8,0.7-1.3,0.4c-0.5-0.2-0.7-0.8-0.4-1.3l4-8c0.3-0.7,1.5-0.7,1.8,0l4,8C13.1,27,12.9,27.6,12.4,27.9z\"/></g><path d=\"M17,1H7C5.9,1,5,1.9,5,3v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M12,11c0.9,0,1.7-0.4,2.2-1c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4c-1,1.1-2.3,1.7-3.8,1.7c-2.8,0-5-2.2-5-5s2.2-5,5-5c1.4,0,2.8,0.6,3.8,1.7c0.4,0.4,0.3,1-0.1,1.4c-0.4,0.4-1,0.3-1.4-0.1c-0.6-0.7-1.4-1-2.2-1c-1.7,0-3,1.3-3,3S10.3,11,12,11z\"/><g><path d=\"M24,24h-3v2h3c0.6,0,1-0.4,1-1S24.6,24,24,24z\"/><path d=\"M25,21c0-0.6-0.4-1-1-1h-3v2h3C24.6,22,25,21.6,25,21z\"/><path d=\"M28,16H18c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V18C30,16.9,29.1,16,28,16z M27,25c0,1.7-1.3,3-3,3h-4c-0.6,0-1-0.4-1-1v-4v-4c0-0.6,0.4-1,1-1h4c1.7,0,3,1.3,3,3c0,0.8-0.3,1.5-0.8,2C26.7,23.5,27,24.2,27,25z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M28.9,9.4C28.9,9.4,28.9,9.4,28.9,9.4C28.9,9.3,29,9.2,29,9.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2l-11-7c-0.3-0.2-0.8-0.2-1.1,0l-13,9c0,0-0.1,0.1-0.1,0.1c0,0,0,0-0.1,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0.1C3,10.8,3,10.9,3,11c0,0,0,0,0,0v6v6c0,0.3,0.2,0.7,0.5,0.8l11,7c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l13-9c0.2-0.2,0.4-0.4,0.4-0.7s-0.1-0.6-0.3-0.8c-0.9-0.9-1.1-2.2-0.5-3.4l0.7-1.5c0-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0c-0.9-0.9-1.1-2.2-0.5-3.4L28.9,9.4z M26.6,14.8l-11.6,8L5,16.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1C25.8,12.8,26,13.8,26.6,14.8z M15,28.8L5,22.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1c-0.1,1.1,0.1,2.2,0.7,3.1L15,28.8z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M16,21c-1.3,0-2.6-0.5-3.5-1.5C11.5,18.6,11,17.3,11,16s0.5-2.6,1.5-3.5c1.9-1.9,5.1-1.9,7.1,0c0.9,0.9,1.5,2.2,1.5,3.5s-0.5,2.6-1.5,3.5l0,0l0,0C18.6,20.5,17.3,21,16,21z\"/></g><path d=\"M11.1,20.9c-0.9-0.9-1.6-2.1-1.9-3.4c-2.7,2.4-5.6,4.7-8.6,6.8c-0.2,0.2-0.4,0.4-0.4,0.7c0,0.3,0.1,0.6,0.3,0.8l5.7,5.7c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0.1,0,0.1,0c0.3,0,0.6-0.2,0.7-0.4c2.1-3,4.4-5.9,6.8-8.6C13.2,22.5,12,21.9,11.1,20.9z\"/><path d=\"M31.5,6.1l-5.7-5.7c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.2-0.7,0.4c-2.1,3-4.4,5.9-6.8,8.6c1.3,0.3,2.4,0.9,3.4,1.9c0.9,0.9,1.6,2.1,1.9,3.4c2.7-2.4,5.6-4.7,8.6-6.8c0.2-0.2,0.4-0.4,0.4-0.7C31.9,6.6,31.7,6.3,31.5,6.1z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M29,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h8.6l-2.6,7.7c-0.2,0.5,0.1,1.1,0.6,1.3c0.5,0.2,1.1-0.1,1.3-0.6l1.4-4.3h7.2l1.4,4.3c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.3-0.1c0.5-0.2,0.8-0.7,0.6-1.3L20.4,22H29c0.6,0,1-0.4,1-1V3C30,2.4,29.6,2,29,2zM18.9,24h-5.9l0.7-2h4.6L18.9,24z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M6,19v8c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H6z M21,24c0,1.7-1.3,3-3,3h-4c-1.7,0-3-1.3-3-3v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V24z\"/><g><path d=\"M22,7.-3C26,11.1,24.4,8.5,22,7.1z\"/><path d=\"M10,7.1c-2.4,1.4-4,4-4,6.9v3h4V7.1z\"/></g><g><path d=\"M19,8h-6c-0.6,0-1-0.4-1-1V5c0-1.7,1.3-3,3-3h2c1.7,0,3,1.3,3,3v2C20,7.6,19.6,8,19,8z M14,6h4V5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1V6z\"/></g><path d=\"M18,6h-4c-0.7,0-1.4,0.1-2,0.3V7v1v9h8V8V7V6.3C19.4,6.1,18.7,6,18,6z\"/><g><path d=\"M4,18.2c-1.2,0.4-2,1.5-2,2.8v4c0,1.3,0.8,2.4,2,2.8V18.2z\"/></g><g><path d=\"M28,18.2v9.6c1.2-0.4,2-1.5,2-2.8v-4C30,19.7,29.2,18.6,28,18.2z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M27,3H11C9.3,3,8,4.8,8,7v14H7c-1.7,0-3,1.8-3,4s1.3,4,3,4h16c1.7,0,3-1.8,3-4V8h3c0.6,0,1-0.4,1-1C30,4.8,28.7,3,27,3zM12,10h6c0.6,0,1,0.4,1,1s-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1S11.4,10,12,10z M12,13h3c0.6,0,1,0.4,1,1s-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1S11.4,13,12,13z M20.4,27H7c-0.4,0-1-0.8-1-2s0.6-2,1-2h13.4c-0.3,0.6-0.4,1.3-0.4,2S20.2,26.4,20.4,27z M26.1,6c0.2-0.6,0.6-1,0.9-1s0.6,0.4,0.9,1H26.1z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M11,1H9C7.3,1,6,2.3,6,4v1h4c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v3h3c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v3h4c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v3h3c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v3h4c0.6,0,1,0.4,1,1s-0.4,1-1,1H6v1c0,1.7,1.3,3,3,3h2c1.7,0,3-1.3,3-3V4C14,2.3,12.7,1,11,1z\"/><g><path d=\"M26,6V4c0-1.7-1.3-3-3-3h-2c-1.7,0-3,1.3-3,3v2H26z\"/><path d=\"M18,8v18c0,0.2,0.1,0.4,0.2,0.6l3,4c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.1,0.8-0.4l3-4c0.1-0.2,0.2-0.4,0.2-0.6V8H18z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M23,28L23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1,0-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28h0c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z\"/><path d=\"M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h6.9h8.1H27c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z\"/></g><path class=\"st0\" d=\"M15,20V10c0-1.7-1.3-3-3-3H7C6.4,7,6,7.4,6,8v8c0,0.6,0.4,1,1,1h5C13.7,17,15,18.3,15,20L15,20\"/><path class=\"st0\" d=\"M17,20V10c0-1.7,1.3-3,3-3h5c0.6,0,1,0.4,1,1v8c0,0.6-0.4,1-1,1h-5C18.3,17,17,18.3,17,20L17,20\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M19,22V12c0-1.7-1.3-3-3-3h-5c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h5C17.7,19,19,20.3,19,22L19,22\"/><path d=\"M20,22V12c0-1.7,1.3-3,3-3h5c0.6,0,1,0.4,1,1v8c0,0.6-0.4,1-1,1h-5C21.3,19,20,20.3,20,22L20,22\"/><path d=\"M16,22H6H4V8h2h10h2V5c0-1.7-1.3-3-3-3H5C3.3,2,2,3.3,2,5v22c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-5H16z M11,27H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S11.6,27,11,27z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M19.1,11.1c-0.1-0.2-0.3-0.3-0.4-0.3c-0.9,0.2-1.7,0-2-0.5c-0.3-0.5-0.1-1.3,0.6-2c0.1-0.1,0.1-0.4,0-0.5c-0.9-0.9-2-1.6-3.3-1.9c-0.2-0.1-0.4,0.1-0.5,0.3C13.2,7,12.6,7.6,12,7.6S10.8,7,10.5,6.1c-0.1-0.2-0.3-0.3-0.5-0.3c-1.3,0.3-2.4,1-3.3,1.9c-0.1,0.1-0.1,0.4,0,0.5c0.6,0.7,0.9,1.5,0.6,2c-0.3,0.5-1.1,0.7-2,0.5c-0.2,0-0.4,0.1-0.4,0.3c-0.2,0.6-0.3,1.3-0.3,1.9s0.1,1.3,0.3,1.9c0.1,0.2,0.3,0.3,0.4,0.3c0.9-0.2,1.7,0,2,0.5c0.3,0.5,0.1,1.3-0.6,2c-0.1,0.1-0.1,0.4,0,0.5c0.9,0.9,2,1.6,3.3,1.9c0,0,0.1,0,0.1,0c0.2,0,0.3-0.1,0.4-0.3c0.3-0.9,0.8-1.5,1.5-1.5s1.2,0.6,1.5,1.5c0.1,0.2,0.3,0.3,0.5,0.3c1.3-0.3,2.4-1,3.3-1.9c0.1-0.1,0.1-0.4,0-0.5c-0.6-0.7-0.9-1.5-0.6-2c0.3-0.5,1.1-0.7,2-0.5c0.2,0,0.4-0.1,0.4-0.3c0.2-0.6,0.3-1.3,0.3-1.9S19.3,11.7,19.1,11.1z M12.9,13.4c-0.1,0.1-0.1,0.2-0.2,0.3C12.5,13.9,12.3,14,12,14c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0.1,0.3,0.1,0.4C13,13.1,13,13.3,12.9,13.4z\"/><path d=\"M28.9,17.6L26,11.8C25.9,6.4,21.4,2,16,2c-2.4,0-4.6,0.8-6.4,2.3C10.4,4.1,11.2,4,12,4c5,0,9,4,9,9c0,5-4,9-9,9c-1.1,0-2.1-0.2-3-0.5V27c0,0.5,0.3,0.9,0.8,1l10,2c0.1,0,0.1,0,0.2,0c0.2,0,0.5-0.1,0.6-0.2c0.2-0.2,0.4-0.5,0.4-0.8v-4h2c1.7,0,3-1.3,3-3v-3h2c0.3,0,0.7-0.2,0.9-0.5S29,17.9,28.9,17.6z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M6,7H0.9C0.4,7,0,7.4,0,7.9v9.1C0,17.6,0.4,18,0.9,18H6c1.7,0,3,1.3,3,3V10C9,8.3,7.7,7,6,7z\"/><path d=\"M18.1,7H13c-1.7,0-3,1.3-3,3v11c0-1.7,1.3-3,3-3h5.1c0.5,0,0.9-0.4,0.9-0.9V7.9C19,7.4,18.6,7,18.1,7z\"/></g><path d=\"M31.9,17.6L29,11.8C28.9,6.4,24.4,2,19,2c-2.8,0-5.4,1.2-7.3,3.2C12.1,5.1,12.5,5,13,5h5.1C19.7,5,21,6.3,21,7.9v9.1c0,1.6-1.3,2.9-2.9,2.9H13c-0.6,0-1,0.4-1,1v6c0,0.5,0.3,0.9,0.8,1l10,2c0.1,0,0.1,0,0.2,0c0.2,0,0.5-0.1,0.6-0.2c0.2-0.2,0.4-0.5,0.4-0.8v-4h2c1.7,0,3-1.3,3-3v-3h2c0.3,0,0.7-0.2,0.9-0.5S32,17.9,31.9,17.6z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M30.3,17.4c0-0.1,0-0.2,0-0.3l-3.6-9.7C26.2,6,25.1,5.2,23.7,5c-1.4-0.2-2.7,0.3-3.5,1.4c-0.3,0.4-0.2,1.1,0.2,1.4c0.4,0.3,1.1,0.2,1.4-0.2c0.4-0.5,1-0.8,1.6-0.7C24.1,7,24.6,7.4,24.8,8l2.4,6.6c-1-0.4-2.1-0.7-3.2-0.7c-3.1,0-5.8,1.8-6.7,4.2c-0.9-0.2-1.8-0.2-2.7,0C13.8,15.8,11.1,14,8,14c-1.2,0-2.3,0.2-3.2,0.7L7.2,8c0.2-0.6,0.7-1,1.4-1.1c0.6-0.1,1.2,0.2,1.6,0.7c0.3,0.4,1,0.5,1.4,0.2s0.5-1,0.2-1.4C11,5.3,9.7,4.8,8.3,5C6.9,5.2,5.8,6,5.3,7.3l-3.6,9.7c0,0.1,0,0.2,0,0.3C1.3,18.2,1,19.1,1,20c0,3.3,3.1,6,7,6c3.8,0,6.9-2.6,7-5.8c0.7-0.2,1.4-0.2,2,0c0.1,3.2,3.2,5.8,7,5.8c3.9,0,7-2.7,7-6C31,19.1,30.7,18.2,30.3,17.4z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M27,8V7c0-3.4-4.8-6-11-6S5,3.6,5,7v1c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3c0-0.6,0.4-1,1-1v6.2c-1.2,0.4-2,1.5-2,2.8v6c0,0.6,0.4,1,1,1v1c0,1.7,1.3,3,3,3h1c1.7,0,3-1.3,3-3v-1h10v1c0,1.7,1.3,3,3,3h1c1.7,0,3-1.3,3-3v-1c0.6,0,1-0.4,1-1v-6c0-1.3-0.8-2.4-2-2.8V10c0.6,0,1,0.4,1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C30,9.3,28.7,8,27,8z M26,21c0,0.6-0.4,1-1,1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1C25.6,20,26,20.4,26,21z M25,16h-3h-3.6H17v-6h8V16z M21,5.8c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.1c0.4-0.4,1-0.4,1.4,0c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2S22.1,7,22,7c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.3-0.2C21.1,6.5,21,6.3,21,6C21,5.9,21,5.9,21,5.8z M13,5h6c0.6,0,1,0.4,1,1s-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1S12.4,5,13,5z M9,5.8c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.1c0.4-0.4,1-0.4,1.4,0c0,0,0.1,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2S10.1,7,10,7C9.9,7,9.7,7,9.6,6.9c-0.1,0-0.2-0.1-0.3-0.2C9.1,6.5,9,6.3,9,6C9,5.9,9,5.9,9,5.8z M7,10h8v6h-1.4H10H7V10z M7,20h1c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,20,7,20z M19.3,24h-6.5c-0.7,0-1.3-0.7-1.1-1.4l0.9-3.6c0.1-0.6,0.5-0.9,1-0.9h4.9c0.4,0,0.8,0.4,1,1l0.9,3.6C20.5,23.3,20,24,19.3,24z\"/></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><g><path d=\"M16,6c-2.9,0-5-1.3-5-3s2.1-3,5-3s5,1.3,5,3S18.9,6,16,6z\"/></g><g><path d=\"M16,24.6c2.3,0,4.1-0.6,5-1.3V6.6C19.8,7.5,18,8,16,8s-3.8-0.5-5-1.4v16.7C11.9,24,13.7,24.6,16,24.6z\"/><path d=\"M16,26.9c-1.7,0-3.2-0.3-4.5-0.7l3.6,5.4c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.2,0.8-0.4l3.6-5.4C19.2,26.6,17.7,26.9,16,26.9z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M29,9H3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h26c0.6,0,1-0.4,1-1V10C30,9.4,29.6,9,29,9z M15,23H7c-0.6,0-1-0.4-1-1c0-1.9,1-3.5,2.5-4.3C8.2,17.2,8,16.6,8,16c0-1.7,1.3-3,3-3s3,1.3,3,3c0,0.6-0.2,1.2-0.5,1.7C15,18.5,16,20.1,16,22C16,22.6,15.6,23,15,23z M25,21h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S25.6,21,25,21z M25,17h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S25.6,17,25,17z\"/><g><path d=\"M20,11h-8c-0.6,0-1-0.4-1-1V9c0-2.8,2.2-5,5-5s5,2.2,5,5v1C21,10.6,20.6,11,20,11z M13,9h6c0-1.7-1.3-3-3-3S13,7.3,13,9z\"/></g></svg>",
	"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#FFFFFF;}</style><path d=\"M30.4,6.5c-0.2-1.1-0.8-2.3-1.7-3.2c-0.9-0.9-2-1.5-3.2-1.7c-1.2-0.2-2.4,0.2-3.2,1c0,0,0,0,0,0c0,0,0,0,0,0c-2.8,3.3-5.8,6.5-8.9,9.6c-0.2,0-0.5,0-0.7,0.1c-0.4,0.2-0.5,0.6-0.4,1c-3.1,3.1-6.3,6.1-9.7,9c-0.8,0.8-1.1,1.9-1,3.2c0.2,1.1,0.8,2.3,1.7,3.2c0.9,0.9,2,1.5,3.2,1.7c0.2,0,0.4,0,0.6,0c1,0,1.9-0.4,2.6-1.1c2.4-2.7,4.8-5.3,7.3-7.9V25c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.9c0.7,1,1,2.4,1,4.4V29c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5c0-1.9-0.2-4.4-1.9-6.2c3-3,6.1-5.9,9.3-8.6c0,0,0,0,0,0c0,0,0,0,0,0C30.2,8.9,30.6,7.7,30.4,6.5z M25.5,10.4c-2.4,2.2-4.8,4.4-7.1,6.7c-0.1,0-0.2-0.1-0.3-0.1c-1.1-0.9-2.5-2.2-3.4-3.3c2.3-2.4,4.6-4.8,6.8-7.2c0.3,0.9,0.8,1.8,1.5,2.5C23.8,9.6,24.6,10.2,25.5,10.4z M8.2,28c-0.5,0.5-1.1,0.4-1.5,0.4c-0.7-0.1-1.5-0.5-2.1-1.1c-0.6-0.6-1-1.3-1.1-2.1c-0.1-0.4-0.1-1,0.3-1.4c3.2-2.8,6.4-5.7,9.4-8.7c1.1,1.3,2.5,2.6,3.6,3.5C13.9,21.7,11,24.8,8.2,28z\"/></svg>"
];

/**
 * Generate a random svg.
 *
 * @category general
 *
 * @example
 *
 * randSvg()
 *
 * @example
 *
 * randSvg({ length: 10 })
 *
 */

function randSvg(options) {
  return fake(data$f, options);
}

var data$e = [
	"America/Lima",
	"America/Juneau",
	"Pacific/Auckland",
	"Europe/Warsaw",
	"Europe/London",
	"Asia/Taipei",
	"Asia/Shanghai",
	"Pacific/Majuro",
	"Asia/Tashkent",
	"America/Caracas",
	"Africa/Harare",
	"America/La_Paz",
	"Europe/Vilnius",
	"Asia/Tokyo",
	"Australia/Brisbane",
	"Africa/Casablanca",
	"Atlantic/South_Georgia",
	"Europe/Riga",
	"Asia/Baku",
	"America/St_Johns",
	"Asia/Riyadh",
	"Europe/Bratislava",
	"Europe/Rome",
	"Asia/Dhaka",
	"Asia/Kolkata",
	"Europe/Berlin",
	"America/Chicago",
	"America/Phoenix",
	"Asia/Seoul",
	"Australia/Melbourne",
	"Asia/Baghdad",
	"Asia/Karachi",
	"America/New_York",
	"Asia/Krasnoyarsk",
	"Europe/Paris",
	"America/Mexico_City",
	"Europe/Moscow",
	"Europe/Madrid",
	"Africa/Johannesburg",
	"Europe/Athens",
	"Asia/Tehran",
	"Pacific/Port_Moresby",
	"Europe/Bucharest",
	"Asia/Singapore",
	"America/Denver",
	"Europe/Prague",
	"Africa/Cairo",
	"Asia/Kamchatka",
	"Europe/Stockholm",
	"America/Santiago",
	"Africa/Nairobi",
	"Asia/Kuala_Lumpur",
	"Europe/Lisbon",
	"America/Monterrey",
	"Europe/Vienna",
	"America/Argentina/Buenos_Aires",
	"Europe/Dublin",
	"Europe/Copenhagen",
	"Pacific/Apia",
	"Europe/Zagreb",
	"America/Mazatlan",
	"America/Guyana",
	"America/Tijuana",
	"Africa/Monrovia",
	"Europe/Minsk",
	"Pacific/Honolulu",
	"America/Indiana/Indianapolis"
];

/**
 * Generate a random time zone.
 *
 * @category address
 *
 * @example
 *
 * randTimeZone()
 *
 * @example
 *
 * randTimeZone({ length: 10 })
 *
 */

function randTimeZone(options) {
  return fake(data$e, options);
}

/**
 * Generate a random todo.
 *
 * @category entities
 *
 * @example
 *
 * randTodo()
 *
 * @example
 *
 * randTodo({ length: 10 })
 *
 */

function randTodo(options) {
  return fake(() => {
    return {
      id: randUuid(),
      title: randText({
        charCount: 40
      }),
      completed: randBoolean()
    };
  }, options);
}

var data$d = [
	"deposit",
	"withdrawal",
	"payment",
	"invoice"
];

/**
 * Generate a random transaction type.
 *
 * @category Finance
 *
 * @example
 *
 * randTransactionType()
 *
 * @example
 *
 * randTransactionType({ length: 10 })
 *
 */

function randTransactionType(options) {
  return fake(data$d, options);
}

/**
 * Generate a random url.
 *
 * @category internet
 *
 * @example
 *
 * randUrl()
 *
 * @example
 *
 * randUrl({ length: 10 })
 *
 */

function randUrl(options) {
  return fake(() => {
    return `${fake(['http', 'https'])}://${randWord()}.${randDomainSuffix()}`;
  }, options);
}

var data$c = [
	"Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/538.2.0 (KHTML, like Gecko) Chrome/32.0.862.0 Safari/538.2.0",
	"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.2; Trident/4.1; .NET CLR 1.3.78921.4)",
	"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_9_8 rv:3.0; RU) AppleWebKit/537.2.2 (KHTML, like Gecko) Version/7.1.6 Safari/537.2.2",
	"Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/535.1.1 (KHTML, like Gecko) Chrome/38.0.882.0 Safari/535.1.1",
	"Mozilla/5.0 (Windows; U; Windows NT 5.3) AppleWebKit/536.1.1 (KHTML, like Gecko) Chrome/30.0.896.0 Safari/536.1.1",
	"Mozilla/5.0 (Windows NT 6.3; rv:15.9) Gecko/20100101 Firefox/15.9.2",
	"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/6.0)",
	"Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/537.0.1 (KHTML, like Gecko) Chrome/16.0.885.0 Safari/537.0.1",
	"Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/532.2.1 (KHTML, like Gecko) Chrome/34.0.818.0 Safari/532.2.1",
	"Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/536.1.2 (KHTML, like Gecko) Chrome/15.0.867.0 Safari/536.1.2",
	"Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
	"Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:13.0) Gecko/20100101 Firefox/13.0.0",
	"Mozilla/5.0 (Windows; U; Windows NT 5.0) AppleWebKit/538.0.1 (KHTML, like Gecko) Chrome/14.0.814.0 Safari/538.0.1",
	"Mozilla/5.0 (Windows; U; Windows NT 5.3) AppleWebKit/532.0.2 (KHTML, like Gecko) Chrome/33.0.871.0 Safari/532.0.2",
	"Mozilla/5.0 (Windows; U; Windows NT 5.3) AppleWebKit/537.2.0 (KHTML, like Gecko) Chrome/35.0.864.0 Safari/537.2.0",
	"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.3; Trident/6.1; .NET CLR 4.8.82855.9)",
	"Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/537.1.1 (KHTML, like Gecko) Chrome/21.0.863.0 Safari/537.1.1",
	"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/6.1; .NET CLR 2.7.77884.9)"
];

/**
 * Generate a random user agent.
 *
 * @category internet
 *
 * @example
 *
 * randUserAgent()
 *
 * @example
 *
 * randUserAgent({ length: 10 })
 *
 */

function randUserAgent(options) {
  return fake(data$c, options);
}

var data$b = [
	"Toyota Volt",
	"Rolls Royce XC90",
	"Nissan Fiesta",
	"Mercedes Benz A4",
	"Bugatti 1",
	"Mini Explorer",
	"Nissan Spyder",
	"Kia Spyder",
	"Ford Camry",
	"Bugatti Corvette",
	"Toyota A4",
	"Toyota Challenger",
	"Smart Focus",
	"Mazda Challenger",
	"Lamborghini F-150",
	"Lamborghini Prius",
	"Hyundai Roadster",
	"Chevrolet Malibu"
];

/**
 * Generate a random vehicle.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicle()
 *
 * @example
 *
 * randVehicle({ length: 10 })
 *
 */

function randVehicle(options) {
  return fake(data$b, options);
}

var data$a = [
	"Gasoline",
	"Hybrid",
	"Electric",
	"Diesel"
];

/**
 * Generate a random vehicle fuel.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleFuel()
 *
 * @example
 *
 * randVehicleFuel({ length: 10 })
 *
 */

function randVehicleFuel(options) {
  return fake(data$a, options);
}

var data$9 = [
	"Abarth",
	"Acura",
	"Alpine",
	"Alfa Romeo",
	"Aston Martin",
	"Audi",
	"Bentley",
	"BMW",
	"Bugatti",
	"Buick",
	"Cadillac",
	"Caterham",
	"Chrysler",
	"Citroën",
	"Chevrolet",
	"Dacia",
	"Dodge",
	"Ferrari",
	"Fiat",
	"Ford",
	"Genesis",
	"GMC",
	"Hennessey",
	"Honda",
	"Hyundai",
	"Infiniti",
	"Isuzu",
	"Jaguar",
	"Jeep",
	"Kia",
	"Koenigsegg",
	"Lamborghini",
	"Lancia",
	"Land Rover",
	"Lexus",
	"Lincoln",
	"Lotus",
	"Maserati",
	"Maybach",
	"Mazda",
	"McLaren",
	"Mercedes Benz",
	"Mini",
	"Mitsubishi",
	"Morgan",
	"Nissan",
	"Opel",
	"Pagani",
	"Peugeot",
	"Plymouth",
	"Polestar",
	"Pontiac",
	"Porsche",
	"Renault",
	"Rimac",
	"Rolls Royce",
	"SEAT",
	"Smart",
	"Subaru",
	"Suzuki",
	"Tesla",
	"Toyota",
	"Volkswagen",
	"Volvo"
];

/**
 * Generate a random vehicle manufacturer.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleManufacturer()
 *
 * @example
 *
 * randVehicleManufacturer({ length: 10 })
 *
 */

function randVehicleManufacturer(options) {
  return fake(data$9, options);
}

var data$8 = [
	"Alpine",
	"Land Cruiser",
	"Grand Cherokee",
	"A4",
	"Golf",
	"Accord",
	"Expedition",
	"Camry",
	"Jetta",
	"Taurus",
	"Camaro",
	"Prius",
	"CX-9",
	"Wrangler",
	"Civic",
	"Explorer",
	"Sentra",
	"Silverado"
];

/**
 * Generate a random vehicle model.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleModel()
 *
 * @example
 *
 * randVehicleModel({ length: 10 })
 *
 */

function randVehicleModel(options) {
  return fake(data$8, options);
}

var data$7 = [
	"Sedan",
	"Crew Cab Pickup",
	"Minivan",
	"Extended Cab Pickup",
	"Wagon",
	"SUV",
	"Cargo Van",
	"Coupe",
	"Hatchback",
	"Convertible",
	"Passenger Van"
];

/**
 * Generate a random vehicle type.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleType()
 *
 * @example
 *
 * randVehicleType({ length: 10 })
 *
 */

function randVehicleType(options) {
  return fake(data$7, options);
}

var data$6 = [
	"bypass",
	"index",
	"transmit",
	"parse",
	"synthesize",
	"compress",
	"reboot",
	"quantify",
	"hack",
	"back up",
	"program",
	"generate",
	"override",
	"input",
	"connect",
	"copy",
	"calculate",
	"navigate"
];

/**
 * Generate a random verb.
 *
 * @category text
 *
 * @example
 *
 * randVerb()
 *
 * @example
 *
 * randVerb({ length: 10 })
 *
 */

function randVerb(options) {
  return fake(data$6, options);
}

var data$5 = [
	"Monday",
	"Tuesday",
	"Wedneday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];

/**
 * Generate a random weekday.
 *
 * @category date
 *
 * @example
 *
 * randWeekday()
 *
 * @example
 *
 * randWeekday({ length: 10 })
 *
 */

function randWeekday(options) {
  return fake(data$5, options);
}

var data$4 = [
	"Mary J. Blige",
	"Steven Tyler",
	"Stevie Nicks",
	"Joe Cocker",
	"B.B. King",
	"Patti LaBelle",
	"Karen Carpenter",
	"Annie Lennox",
	"Morrissey",
	"Levon Helm",
	"The Everly Brothers",
	"Solomon Burke",
	"Willie Nelson",
	"Don Henley",
	"Art Garfunkel",
	"Sam Moore",
	"Darlene Love",
	"Patti Smith",
	"Tom Waits",
	"John Lee Hooker",
	"Frankie Valli",
	"Mariah Carey",
	"Sly Stone",
	"Merle Haggard",
	"Steve Perry",
	"Iggy Pop",
	"James Taylor",
	"Dolly Parton",
	"John Fogerty",
	"Toots Hibbert",
	"Gregg Allman",
	"Ronnie Spector",
	"Wilson Pickett",
	"Jerry Lee Lewis",
	"Thom Yorke",
	"David Ruffin",
	"Axl Rose",
	"Dion",
	"Lou Reed",
	"Roger Daltrey",
	"Björk",
	"Rod Stewart",
	"Christina Aguilera",
	"Eric Burdon",
	"Mavis Staples",
	"Paul Rodgers",
	"Luther Vandross",
	"Muddy Waters",
	"Brian Wilson",
	"Gladys Knight",
	"Bonnie Raitt",
	"Donny Hathaway",
	"Buddy Holly",
	"Jim Morrison",
	"Patsy Cline",
	"Kurt Cobain",
	"Bobby Blue Bland",
	"George Jones",
	"Joni Mitchell",
	"Chuck Berry",
	"Curtis Mayfield",
	"Jeff Buckley",
	"Elton John",
	"Neil Young",
	"Bruce Springsteen",
	"Dusty Springfield",
	"Whitney Houston",
	"Steve Winwood",
	"Bono",
	"Howlin' Wolf",
	"Prince",
	"Nina Simone",
	"Janis Joplin",
	"Hank Williams",
	"Jackie Wilson",
	"Michael Jackson",
	"Van Morrison",
	"David Bowie",
	"Etta James",
	"Johnny Cash",
	"Smokey Robinson",
	"Bob Marley",
	"Freddie Mercury",
	"Tina Turner",
	"Mick Jagger",
	"Robert Plant",
	"Al Green",
	"Roy Orbison",
	"Little Richard",
	"Paul McCartney",
	"James Brown",
	"Stevie Wonder",
	"Otis Redding",
	"Bob Dylan",
	"Marvin Gaye",
	"John Lennon",
	"Sam Cooke",
	"Elvis Presley",
	"Ray Charles",
	"Aretha Franklin"
];

/**
 * Generate a random singer.
 *
 * @category music
 *
 * @example
 *
 * randSinger()
 *
 * @example
 *
 * randSinger({ length: 10 })
 *
 */

function randSinger(options) {
  return fake(data$4, options);
}

var data$3 = [
	"The twist",
	"Smooth",
	"Mack the knife",
	"Uptown funk!",
	"How do i live",
	"Party rock anthem",
	"I gotta feeling",
	"Macarena (bayside boys mix)",
	"Shape of you",
	"Physical",
	"You light up my life",
	"Hey jude",
	"Closer",
	"We belong together",
	"Un-break my heart",
	"Yeah!",
	"Bette davis eyes",
	"Endless love",
	"Tonight’s the night (gonna be alright)",
	"You were meant for me/foolish games",
	"(everything i do) i do it for you",
	"I’ll make love to you",
	"The theme from “a summer place”",
	"Le freak",
	"How deep is your love",
	"Eye of the tiger",
	"We found love",
	"Low",
	"Just want to be your everything",
	"Too close",
	"Every breath you take",
	"Somebody that i used to know",
	"Despacito",
	"Flashdance… what a feeling",
	"Rolling in the deep",
	"Tossin’ and turnin’",
	"The battle of new orleans",
	"One sweet day",
	"Truly madly deeply",
	"Silly love songs",
	"Let’s get it on",
	"Night fever",
	"Another one bites the dust",
	"Say say say",
	"How you remind me",
	"Tie a yellow ribbon round the ole oak tree",
	"It's all in the game",
	"I want to hold your hand",
	"Shadow dancing",
	"Call me maybe",
	"Blurred lines",
	"Candle in the wind ‘97/something about the way you look tonight",
	"No one",
	"I will always love you",
	"End of the road",
	"Boom boom pow",
	"Call me",
	"Let me love you",
	"Stayin’ alive",
	"Lady",
	"Tik tok",
	"I’m a believer",
	"Gold digger",
	"Apologize",
	"The sign",
	"Centerfold",
	"All about that bass",
	"(just like) starting over",
	"Royals",
	"The boy is mine",
	"Because i love you (the postman song)",
	"I love rock ’n rolln",
	"Aquarius/let the sunshine in",
	"Whoomp! (there it is)",
	"Moves like jagger",
	"Ebony and ivory",
	"Rush rush",
	"That’s what friends are for",
	"Happy",
	"Upside down",
	"Sugar, sugar",
	"Just the way you are",
	"Dilemma",
	"I heard it through the grapevine",
	"You’re still the one",
	"Billie jean",
	"Hot stuff",
	"Rockstar",
	"Gangsta’s paradise",
	"Abracadabra",
	"Perfect",
	"You’re so vain",
	"Play that funky music",
	"Say you, say me",
	"My sharona",
	"All night long (all night)",
	"Nothing compares 2 u",
	"I swear",
	"Family affair",
	"Waiting for a girl like you"
];

/**
 * Generate a random song.
 *
 * @category Music
 *
 * @example
 *
 * randSong()
 *
 * @example
 *
 * randSong({ length: 10 })
 *
 */

function randSong(options) {
  return fake(data$3, options);
}

/**
 * Generate a random full address.
 *
 * @category Address
 *
 * @example
 *
 * randFullAddress()
 *
 * @example
 *
 * randFullAddress({ includeCounty: false }) // default is true
 *
 * @example
 *
 * randFullAddress({ includeCountry: false }) // default is true
 *
 * @example
 *
 * randFullAddress({ length: 10 })
 *
 */

function randFullAddress(options) {
  var _options$includeCount, _options$includeCount2;

  const includeCounty = (_options$includeCount = options == null ? void 0 : options.includeCounty) != null ? _options$includeCount : true;
  const includeCountry = (_options$includeCount2 = options == null ? void 0 : options.includeCountry) != null ? _options$includeCount2 : true;

  const factory = () => {
    const {
      street,
      city,
      county,
      country,
      zipCode
    } = randAddress({
      includeCounty,
      includeCountry
    });
    let address = `${street}, ${city}, `;

    if (includeCounty) {
      address += `${county}, `;
    }

    if (includeCountry) {
      address += `${country}, `;
    }

    return address + zipCode;
  };

  return fake(factory, options);
}

var data$2 = [
	"Aeroflot",
	"Air Canada",
	"Air Europa",
	"Air France",
	"Air New Zealand",
	"Alitalia",
	"American Airlines",
	"Avianca",
	"British Airways",
	"Cathay Pacific Airways",
	"Delta Air Lines",
	"EasyJet",
	"Emirates",
	"Etihad Airways",
	"Eurowings",
	"Finnair",
	"Garuda Indonesia",
	"Hainan Airlines",
	"Hawaiian Airlines",
	"Iberia",
	"Japan Airlines",
	"Jet2",
	"JetBlue",
	"KLM",
	"Korean Air",
	"Lufthansa",
	"Norwegian",
	"Qantas Airlines",
	"Qatar Airways",
	"RyanAir",
	"Singapore Airlines",
	"Swiss International Air Lines",
	"TAP Portugal",
	"Tarom",
	"Thai Airways",
	"Turkish Airlines",
	"United Airlines",
	"Virgin Atlantic",
	"Vueling Airlines",
	"Wizz Air"
];

/**
 * Generate a random airline.
 *
 * @category flight
 *
 * @example
 *
 * randAirline()
 *
 * @example
 *
 * randAirline({ length: 10 })
 *
 */

function randAirline(options) {
  return fake(data$2, options);
}

const flightNumberInfo = {
  RyanAir: {
    prefix: 'FR'
  },
  'British Airways': {
    prefix: 'BA',
    suffixMin: 100,
    suffixMax: 999
  },
  Iberia: {
    prefix: 'IB'
  },
  Jet2: {
    prefix: 'LS'
  },
  EasyJet: {
    prefix: 'EZY',
    suffixMin: 100,
    suffixMax: 999
  },
  Emirates: {
    prefix: 'EK',
    suffixMin: 10,
    suffixMax: 99
  },
  'American Airlines': {
    prefix: 'AA'
  },
  JetBlue: {
    prefix: 'B',
    suffixMin: 100,
    suffixMax: 999
  },
  'Air Europa': {
    prefix: 'UX'
  },
  'Delta Air Lines': {
    prefix: 'DL'
  },
  'United Airlines': {
    prefix: 'UA'
  },
  'Virgin Atlantic': {
    prefix: 'VS'
  },
  'Thai Airways': {
    prefix: 'TG'
  },
  'Qatar Airways': {
    prefix: 'QR'
  }
};

function generateStandardFlightNumber({
  prefix,
  suffixMin = 1000,
  suffixMax = 9999
}) {
  return `${prefix}${getRandomInRange({
    min: suffixMin,
    max: suffixMax
  })}`;
}
/**
 * Generate a random flight number.
 *
 * @category flight
 *
 * @example
 *
 * randFlightNumber()
 *
 * @example
 *
 * randFlightNumber({ airline: 'RyanAir' })
 *
 * @example
 *
 * randFlightNumber({ length: 10 })
 *
 */


function randFlightNumber(options) {
  var _options$airline;

  const airline = (_options$airline = options == null ? void 0 : options.airline) != null ? _options$airline : rand(data$2);

  const factory = () => {
    if (flightNumberInfo[airline]) {
      return generateStandardFlightNumber(flightNumberInfo[airline]);
    }

    return getRandomInRange({
      min: 10000,
      max: 99999
    }).toString();
  };

  return fake(factory, options);
}

/**
 * Generate a random seat number.
 *
 * @category flight
 *
 * @example
 *
 * randSeatNumber()
 *
 * @example
 *
 * randSeatNumber({ length: 10 })
 *
 */

function randSeatNumber(options) {
  const factory = () => {
    return `${getRandomInRange({
      min: 1,
      max: 33
    })}${rand(['A', 'B', 'C', 'D', 'E', 'F'])}`;
  };

  return fake(factory, options);
}

var data$1 = [
	{
		name: "Hartsfield–Jackson Atlanta International Airport",
		code: "ATL",
		city: "Atlanta",
		country: "United States"
	},
	{
		name: "Los Angeles International Airport",
		code: "LAX",
		city: "Los Angeles",
		country: "United States"
	},
	{
		name: "O'Hare International Airport",
		code: "ORD",
		city: "Chicago",
		country: "United States"
	},
	{
		name: "Dallas-Fort Worth International Airport",
		code: "DFW",
		city: "Dallas",
		country: "United States"
	},
	{
		name: "Denver International Airport",
		code: "DEN",
		city: "Denver",
		country: "United States"
	},
	{
		name: "John F. Kennedy International Airport",
		code: "JFK",
		city: "New York",
		country: "United States"
	},
	{
		name: "San Francisco International Airport",
		code: "SFO",
		city: "San Francisco",
		country: "United States"
	},
	{
		name: "McCarran International Airport",
		code: "LAS",
		city: "Las Vegas",
		country: "United States"
	},
	{
		name: "Toronto Pearson International Airport",
		code: "YYZ",
		city: "Toronto",
		country: "Canada"
	},
	{
		name: "Seattle–Tacoma International Airport",
		code: "SEA",
		city: "Seattle",
		country: "United States"
	},
	{
		name: "Charlotte Douglas International Airport",
		code: "CLT",
		city: "Charlotte",
		country: "United States"
	},
	{
		name: "Orlando International Airport",
		code: "MCO",
		city: "Orlando",
		country: "United States"
	},
	{
		name: "Miami International Airport",
		code: "MIA",
		city: "Miami",
		country: "United States"
	},
	{
		name: "Phoenix Sky Harbor International Airport",
		code: "PHX",
		city: "Phoenix",
		country: "United States"
	},
	{
		name: "Newark Liberty International Airport",
		code: "EWR",
		city: "Newark",
		country: "United States"
	},
	{
		name: "George Bush Intercontinental Houston Airport",
		code: "IAH",
		city: "Houston",
		country: "United States"
	},
	{
		name: "Minneapolis-St Paul International/Wold-Chamberlain Airport",
		code: "MSP",
		city: "Minneapolis",
		country: "United States"
	},
	{
		name: "Logan International Airport",
		code: "BOS",
		city: "Boston",
		country: "United States"
	},
	{
		name: "Detroit Metropolitan Wayne County Airport",
		code: "DTW",
		city: "Detroit",
		country: "United States"
	},
	{
		name: "Fort Lauderdale Hollywood International Airport",
		code: "FLL",
		city: "Fort Lauderdale",
		country: "United States"
	},
	{
		name: "Orlando Executive Airport",
		code: "ORL",
		city: "Orlando",
		country: "United States"
	},
	{
		name: "LaGuardia Airport",
		code: "LGA",
		city: "New York",
		country: "United States"
	},
	{
		name: "Philadelphia International Airport",
		code: "PHL",
		city: "Philadelphia",
		country: "United States"
	},
	{
		name: "Baltimore/Washington International Thurgood Marshall Airport",
		code: "BWI",
		city: "Baltimore",
		country: "United States"
	},
	{
		name: "Salt Lake City International Airport",
		code: "SLC",
		city: "Salt Lake City",
		country: "United States"
	},
	{
		name: "Vancouver International Airport",
		code: "YVR",
		city: "Vancouver",
		country: "Canada"
	},
	{
		name: "Ronald Reagan Washington National Airport",
		code: "DCA",
		city: "Washington",
		country: "United States"
	},
	{
		name: "Washington Dulles International Airport",
		code: "IAD",
		city: "Washington",
		country: "United States"
	},
	{
		name: "Midway International Airport",
		code: "MDW",
		city: "Chicago",
		country: "United States"
	},
	{
		name: "San Diego International Airport",
		code: "SAN",
		city: "San Diego",
		country: "United States"
	},
	{
		name: "O. R. Tambo International Airport",
		code: "JNB",
		city: "Johannesburg",
		country: "South Africa"
	},
	{
		name: "Cairo International Airport",
		code: "CAI",
		city: "Cairo",
		country: "Egypt"
	},
	{
		name: "Cape Town International Airport",
		code: "CPT",
		city: "Cape Town",
		country: "South Africa"
	},
	{
		name: "Mohammed V International Airport",
		code: "CMN",
		city: "Casablanca",
		country: "Morocco"
	},
	{
		name: "Addis Ababa Bole International Airport",
		code: "ADD",
		city: "Addis Ababa",
		country: "Ethiopia"
	},
	{
		name: "Houari Boumediene Airport",
		code: "ALG",
		city: "Algier",
		country: "Algeria"
	},
	{
		name: "Jomo Kenyatta International Airport",
		code: "NBO",
		city: "Nairobi",
		country: "Kenya"
	},
	{
		name: "Murtala Muhammed International Airport",
		code: "LOS",
		city: "Lagos",
		country: "Nigeria"
	},
	{
		name: "Tunis Carthage International Airport",
		code: "TUN",
		city: "Tunis",
		country: "Tunisia"
	},
	{
		name: "King Shaka International Airport",
		code: "DUR",
		city: "Durban",
		country: "South Africa"
	},
	{
		name: "Menara Airport",
		code: "RAK",
		city: "Marrakech",
		country: "Morocco"
	},
	{
		name: "Hurghada International Airport",
		code: "HRG",
		city: "Hurghada",
		country: "Egypt"
	},
	{
		name: "Monastir Habib Bourguiba International Airport",
		code: "MIR",
		city: "Monastir",
		country: "Tunisia"
	},
	{
		name: "Sir Seewoosagur Ramgoolam International Airport",
		code: "MRU",
		city: "Plaisance",
		country: "Mauritius"
	},
	{
		name: "Nnamdi Azikiwe International Airport",
		code: "ABV",
		city: "Abuja",
		country: "Nigeria"
	},
	{
		name: "Kotoka International Airport",
		code: "ACC",
		city: "Accra",
		country: "Ghana"
	},
	{
		name: "Sharm El Sheikh International Airport",
		code: "SSH",
		city: "Sharm El Sheikh",
		country: "Egypt"
	},
	{
		name: "Julius Nyerere International Airport",
		code: "DAR",
		city: "Dar Es Salaam",
		country: "Tanzania"
	},
	{
		name: "Quatro de Fevereiro Airport",
		code: "LAD",
		city: "Luanda",
		country: "Angola"
	},
	{
		name: "Roland Garros Airport",
		code: "RUN",
		city: "St.-denis",
		country: "Reunion"
	},
	{
		name: "Khartoum International Airport",
		code: "KRT",
		city: "Khartoum",
		country: "Sudan"
	},
	{
		name: "Léopold Sédar Senghor International Airport",
		code: "DKR",
		city: "Dakar",
		country: "Senegal"
	},
	{
		name: "Félix-Houphouët-Boigny International Airport",
		code: "ABJ",
		city: "Abidjan",
		country: "Cote d'Ivoire"
	},
	{
		name: "Es Senia Airport",
		code: "ORN",
		city: "Oran",
		country: "Algeria"
	},
	{
		name: "Borg El Arab Airport",
		code: "HBE",
		city: "Alexandria",
		country: "Egypt"
	},
	{
		name: "Port Elizabeth International Airport",
		code: "PLZ",
		city: "Port Elizabeth",
		country: "South Africa"
	},
	{
		name: "Agadir–Al Massira Airport",
		code: "AGA",
		city: "Agadir",
		country: "Morocco"
	},
	{
		name: "Entebbe International Airport",
		code: "EBB",
		city: "Entebbe",
		country: "Uganda"
	},
	{
		name: "Douala International Airport",
		code: "DLA",
		city: "Douala",
		country: "Cameroon"
	},
	{
		name: "Djerba–Zarzis International Airport",
		code: "DJE",
		city: "Djerba",
		country: "Tunisia"
	},
	{
		name: "Beijing Capital International Airport",
		code: "PEK",
		city: "Beijing",
		country: "China"
	},
	{
		name: "Dubai International Airport",
		code: "DXB",
		city: "Dubai",
		country: "United Arab Emirates"
	},
	{
		name: "Haneda Airport",
		code: "HND",
		city: "Tokyo",
		country: "Japan"
	},
	{
		name: "Hong Kong International Airport",
		code: "HKG",
		city: "Hong Kong",
		country: "Hong Kong"
	},
	{
		name: "Shanghai Pudong International Airport",
		code: "PVG",
		city: "Shanghai",
		country: "China"
	},
	{
		name: "Guangzhou Baiyun International Airport",
		code: "CAN",
		city: "Guangzhou",
		country: "China"
	},
	{
		name: "Indira Gandhi International Airport",
		code: "DEL",
		city: "Delhi",
		country: "India"
	},
	{
		name: "Soekarno-Hatta International Airport",
		code: "CGK",
		city: "Jakarta",
		country: "Indonesia"
	},
	{
		name: "Singapore Changi Airport",
		code: "SIN",
		city: "Singapore",
		country: "Singapore"
	},
	{
		name: "Incheon International Airport",
		code: "ICN",
		city: "Seoul",
		country: "South Korea"
	},
	{
		name: "Suvarnabhumi Airport",
		code: "BKK",
		city: "Bangkok",
		country: "Thailand"
	},
	{
		name: "Kuala Lumpur International Airport",
		code: "KUL",
		city: "Kuala Lumpur",
		country: "Malaysia"
	},
	{
		name: "Chengdu Shuangliu International Airport",
		code: "CTU",
		city: "Chengdu",
		country: "China"
	},
	{
		name: "Chhatrapati Shivaji International Airport",
		code: "BOM",
		city: "Mumbai",
		country: "India"
	},
	{
		name: "Shenzhen Bao'an International Airport",
		code: "SZX",
		city: "Shenzhen",
		country: "China"
	},
	{
		name: "Taiwan Taoyuan International Airport",
		code: "TPE",
		city: "Taipei",
		country: "Taiwan"
	},
	{
		name: "Kunming Changshui International Airport",
		code: "KMG",
		city: "Kunming",
		country: "China"
	},
	{
		name: "Ninoy Aquino International Airport",
		code: "MNL",
		city: "Manila",
		country: "Philippines"
	},
	{
		name: "Shanghai Hongqiao International Airport",
		code: "SHA",
		city: "Shanghai",
		country: "China"
	},
	{
		name: "Xi'an Xianyang International Airport",
		code: "XIY",
		city: "Xi'an",
		country: "China"
	},
	{
		name: "Narita International Airport",
		code: "NRT",
		city: "Tokyo",
		country: "Japan"
	},
	{
		name: "Chongqing Jiangbei International Airport",
		code: "CKG",
		city: "Chongqing",
		country: "China"
	},
	{
		name: "Don Mueang International Airport",
		code: "DMK",
		city: "Bangkok",
		country: "Thailand"
	},
	{
		name: "Tan Son Nhat International Airport",
		code: "SGN",
		city: "Ho Chi Minh City",
		country: "Vietnam"
	},
	{
		name: "Hamad International Airport",
		code: "DOH",
		city: "Doha",
		country: "Qatar"
	},
	{
		name: "Hangzhou Xiaoshan International Airport",
		code: "HGH",
		city: "Hangzhou",
		country: "China"
	},
	{
		name: "King Abdulaziz International Airport",
		code: "JED",
		city: "Jeddah",
		country: "Saudi Arabia"
	},
	{
		name: "Jeju International Airport",
		code: "CJU",
		city: "Cheju",
		country: "South Korea"
	},
	{
		name: "Kansai International Airport",
		code: "KIX",
		city: "Osaka",
		country: "Japan"
	},
	{
		name: "Nanjing Lukou International Airport",
		code: "NKG",
		city: "Nanjing",
		country: "China"
	},
	{
		name: "Sydney Airport",
		code: "SYD",
		city: "Sydney",
		country: "Australia"
	},
	{
		name: "Melbourne Airport",
		code: "MEL",
		city: "Melbourne",
		country: "Australia"
	},
	{
		name: "Brisbane International Airport",
		code: "BNE",
		city: "Brisbane",
		country: "Australia"
	},
	{
		name: "Auckland International Airport",
		code: "AKL",
		city: "Auckland",
		country: "New Zealand"
	},
	{
		name: "Perth International Airport",
		code: "PER",
		city: "Perth",
		country: "Australia"
	},
	{
		name: "Adelaide International Airport",
		code: "ADL",
		city: "Adelaide",
		country: "Australia"
	},
	{
		name: "Christchurch International Airport",
		code: "CHC",
		city: "Christchurch",
		country: "New Zealand"
	},
	{
		name: "Gold Coast Airport",
		code: "OOL",
		city: "Coolangatta",
		country: "Australia"
	},
	{
		name: "Wellington International Airport",
		code: "WLG",
		city: "Wellington",
		country: "New Zealand"
	},
	{
		name: "Cairns International Airport",
		code: "CNS",
		city: "Cairns",
		country: "Australia"
	},
	{
		name: "Canberra International Airport",
		code: "CBR",
		city: "Canberra",
		country: "Australia"
	},
	{
		name: "Hobart International Airport",
		code: "HBA",
		city: "Hobart",
		country: "Australia"
	},
	{
		name: "Darwin International Airport",
		code: "DRW",
		city: "Darwin",
		country: "Australia"
	},
	{
		name: "Nadi International Airport",
		code: "NAN",
		city: "Nandi",
		country: "Fiji"
	},
	{
		name: "Queenstown International Airport",
		code: "ZQN",
		city: "Queenstown International",
		country: "New Zealand"
	},
	{
		name: "Townsville Airport",
		code: "TSV",
		city: "Townsville",
		country: "Australia"
	},
	{
		name: "Launceston Airport",
		code: "LST",
		city: "Launceston",
		country: "Australia"
	},
	{
		name: "Newcastle Airport",
		code: "NTL",
		city: "Newcastle",
		country: "Australia"
	},
	{
		name: "Nelson Airport",
		code: "NSN",
		city: "Nelson",
		country: "New Zealand"
	},
	{
		name: "Dunedin Airport",
		code: "DUD",
		city: "Dunedin",
		country: "New Zealand"
	},
	{
		name: "Mackay Airport",
		code: "MKY",
		city: "Mackay",
		country: "Australia"
	},
	{
		name: "Port Moresby Jacksons International Airport",
		code: "POM",
		city: "Port Moresby",
		country: "Papua New Guinea"
	},
	{
		name: "Sunshine Coast Airport",
		code: "MCY",
		city: "Maroochydore",
		country: "Australia"
	},
	{
		name: "Karratha Airport",
		code: "KTA",
		city: "Karratha",
		country: "Australia"
	},
	{
		name: "Hawke's Bay Airport",
		code: "NPE",
		city: "NAPIER",
		country: "New Zealand"
	},
	{
		name: "Rockhampton Airport",
		code: "ROK",
		city: "Rockhampton",
		country: "Australia"
	},
	{
		name: "Palmerston North Airport",
		code: "PMR",
		city: "Palmerston North",
		country: "New Zealand"
	},
	{
		name: "Alice Springs Airport",
		code: "ASP",
		city: "Alice Springs",
		country: "Australia"
	},
	{
		name: "Hamilton Island Airport",
		code: "HTI",
		city: "Hamilton Island",
		country: "Australia"
	},
	{
		name: "Port Hedland International Airport",
		code: "PHE",
		city: "Port Hedland",
		country: "Australia"
	},
	{
		name: "Heathrow Airport",
		code: "LHR",
		city: "London",
		country: "United Kingdom"
	},
	{
		name: "Charles de Gaulle International Airport",
		code: "CDG",
		city: "Paris",
		country: "France"
	},
	{
		name: "Amsterdam Airport Schiphol",
		code: "AMS",
		city: "Amsterdam",
		country: "Netherlands"
	},
	{
		name: "Frankfurt am Main International Airport",
		code: "FRA",
		city: "Frankfurt",
		country: "Germany"
	},
	{
		name: "Istanbul Atatürk Airport",
		code: "IST",
		city: "Istanbul",
		country: "Turkey"
	},
	{
		name: "Adolfo Suárez Madrid–Barajas Airport",
		code: "MAD",
		city: "Madrid",
		country: "Spain"
	},
	{
		name: "Barcelona–El Prat Airport",
		code: "BCN",
		city: "Barcelona",
		country: "Spain"
	},
	{
		name: "Gatwick Airport",
		code: "LGW",
		city: "London",
		country: "United Kingdom"
	},
	{
		name: "Munich Airport",
		code: "MUC",
		city: "Munich",
		country: "Germany"
	},
	{
		name: "Leonardo da Vinci–Fiumicino Airport",
		code: "FCO",
		city: "Rome",
		country: "Italy"
	},
	{
		name: "Sheremetyevo International Airport",
		code: "SVO",
		city: "Moscow",
		country: "Russia"
	},
	{
		name: "Sabiha Gökçen International Airport",
		code: "SAW",
		city: "Istanbul",
		country: "Turkey"
	},
	{
		name: "Moscow Domodedovo Airport",
		code: "DME",
		city: "Moscow",
		country: "Russia"
	},
	{
		name: "Dublin Airport",
		code: "DUB",
		city: "Dublin",
		country: "Ireland"
	},
	{
		name: "Zürich Airport",
		code: "ZRH",
		city: "Zurich",
		country: "Switzerland"
	},
	{
		name: "Copenhagen Airport",
		code: "CPH",
		city: "Copenhagen",
		country: "Denmark"
	},
	{
		name: "Palma De Mallorca Airport",
		code: "PMI",
		city: "Palma de Mallorca",
		country: "Spain"
	},
	{
		name: "Manchester Airport",
		code: "MAN",
		city: "Manchester",
		country: "United Kingdom"
	},
	{
		name: "Oslo Airport, Gardermoen",
		code: "OSL",
		city: "Oslo",
		country: "Norway"
	},
	{
		name: "Lisbon Portela Airport",
		code: "LIS",
		city: "Lisbon",
		country: "Portugal"
	},
	{
		name: "Stockholm Arlanda Airport",
		code: "ARN",
		city: "Stockholm",
		country: "Sweden"
	},
	{
		name: "Antalya Airport",
		code: "AYT",
		city: "Antalya",
		country: "Turkey"
	},
	{
		name: "London Stansted Airport",
		code: "STN",
		city: "London",
		country: "United Kingdom"
	},
	{
		name: "Brussels Airport",
		code: "BRU",
		city: "Brussels",
		country: "Belgium"
	},
	{
		name: "Düsseldorf International Airport",
		code: "DUS",
		city: "Duesseldorf",
		country: "Germany"
	},
	{
		name: "Vienna International Airport",
		code: "VIE",
		city: "Vienna",
		country: "Austria"
	},
	{
		name: "Milan–Malpensa Airport",
		code: "MXP",
		city: "Milano",
		country: "Italy"
	},
	{
		name: "Athens International Airport",
		code: "ATH",
		city: "Athens",
		country: "Greece"
	},
	{
		name: "Berlin-Tegel International Airport",
		code: "TXL",
		city: "Berlin",
		country: "Germany"
	},
	{
		name: "Helsinki Airport",
		code: "HEL",
		city: "Helsinki",
		country: "Finland"
	},
	{
		name: "Málaga Airport",
		code: "AGP",
		city: "Malaga",
		country: "Spain"
	},
	{
		name: "Mexico City International Airport",
		code: "MEX",
		city: "Mexico City",
		country: "Mexico"
	},
	{
		name: "São Paulo–Guarulhos International Airport",
		code: "GRU",
		city: "Sao Paulo",
		country: "Brazil"
	},
	{
		name: "El Dorado International Airport",
		code: "BOG",
		city: "Bogota",
		country: "Colombia"
	},
	{
		name: "Cancún International Airport",
		code: "CUN",
		city: "Cancun",
		country: "Mexico"
	},
	{
		name: "Comodoro Arturo Merino Benítez International Airport",
		code: "SCL",
		city: "Santiago",
		country: "Chile"
	},
	{
		name: "Jorge Chávez International Airport",
		code: "LIM",
		city: "Lima",
		country: "Peru"
	},
	{
		name: "São Paulo–Congonhas Airport",
		code: "CGH",
		city: "Sao Paulo",
		country: "Brazil"
	},
	{
		name: "Presidente Juscelino Kubistschek International Airport",
		code: "BSB",
		city: "Brasilia",
		country: "Brazil"
	},
	{
		name: "Rio de Janeiro–Galeão International Airport",
		code: "GIG",
		city: "Rio De Janeiro",
		country: "Brazil"
	},
	{
		name: "Tocumen International Airport",
		code: "PTY",
		city: "Panama City",
		country: "Panama"
	},
	{
		name: "Aeroparque Jorge Newbery",
		code: "AEP",
		city: "Buenos Aires",
		country: "Argentina"
	},
	{
		name: "Guadalajara International Airport",
		code: "GDL",
		city: "Guadalajara",
		country: "Mexico"
	},
	{
		name: "Ministro Pistarini International Airport",
		code: "EZE",
		city: "Buenos Aires",
		country: "Argentina"
	},
	{
		name: "Tancredo Neves International Airport",
		code: "CNF",
		city: "Belo Horizonte",
		country: "Brazil"
	},
	{
		name: "Monterrey International Airport",
		code: "MTY",
		city: "Monterrey",
		country: "Mexico"
	},
	{
		name: "Viracopos International Airport",
		code: "VCP",
		city: "Campinas",
		country: "Brazil"
	},
	{
		name: "Santos Dumont Airport",
		code: "SDU",
		city: "Rio De Janeiro",
		country: "Brazil"
	},
	{
		name: "Salgado Filho Airport",
		code: "POA",
		city: "Porto Alegre",
		country: "Brazil"
	},
	{
		name: "Guararapes - Gilberto Freyre International Airport",
		code: "REC",
		city: "Recife",
		country: "Brazil"
	},
	{
		name: "Deputado Luís Eduardo Magalhães International Airport",
		code: "SSA",
		city: "Salvador",
		country: "Brazil"
	},
	{
		name: "General Abelardo L. Rodríguez International Airport",
		code: "TIJ",
		city: "Tijuana",
		country: "Mexico"
	},
	{
		name: "Afonso Pena Airport",
		code: "CWB",
		city: "Curitiba",
		country: "Brazil"
	},
	{
		name: "Pinto Martins International Airport",
		code: "FOR",
		city: "Fortaleza",
		country: "Brazil"
	},
	{
		name: "José Martí International Airport",
		code: "HAV",
		city: "Havana",
		country: "Cuba"
	},
	{
		name: "Juan Santamaria International Airport",
		code: "SJO",
		city: "San Jose",
		country: "Costa Rica"
	},
	{
		name: "Maturín Airport",
		code: "MUN",
		city: "Maturin",
		country: "Venezuela"
	},
	{
		name: "Hercílio Luz International Airport",
		code: "FLN",
		city: "Florianopolis",
		country: "Brazil"
	},
	{
		name: "Val de Cans International Airport",
		code: "BEL",
		city: "Belem",
		country: "Brazil"
	},
	{
		name: "Alejandro Velasco Astete International Airport",
		code: "CUZ",
		city: "Cuzco",
		country: "Peru"
	},
	{
		name: "Santa Genoveva Airport",
		code: "GYN",
		city: "Goiania",
		country: "Brazil"
	}
];

/**
 * Generate a random airport.
 *
 * @category flight
 *
 * @example
 *
 * randAirport()
 *
 * @example
 *
 * randAirport({ length: 10 })
 *
 */

function randAirport(options) {
  return fake(data$1, options);
}

function generateFlightLength() {
  return Math.ceil(getRandomInRange({
    min: 1,
    max: 9,
    fraction: 2
  }) / 0.25) * 0.25;
}
/**
 * Generate a random flight details.
 *
 * @category flight, entities
 *
 * @example
 *
 * randFlightDetails()
 *
 * @example
 *
 * randFlightDetails({ passenger: 'Ryan Smee' })
 *
 * @example
 *
 * randFlightDetails({ airline: 'RyanAir' })
 *
 * @example
 *
 * randFlightDetails({ length: 10 })
 *
 */


function randFlightDetails(options) {
  const factory = () => {
    var _options$airline, _options$passenger;

    const airline = (_options$airline = options == null ? void 0 : options.airline) != null ? _options$airline : randAirline();
    const passenger = (_options$passenger = options == null ? void 0 : options.passenger) != null ? _options$passenger : randFullName();
    const [origin, destination] = randAirport({
      length: 2
    });
    return {
      passenger,
      airline,
      flightNumber: randFlightNumber({
        airline: airline
      }),
      origin,
      destination,
      date: randFutureDate().toISOString(),
      seat: randSeatNumber(),
      flightLength: generateFlightLength()
    };
  };

  return fake(factory, options);
}

/**
 * Generate a random credit card.
 *
 * @category finance, entities
 *
 * @example
 *
 * randCreditCard()
 *
 * @example
 *
 * randCreditCard({ fullName: 'Mr Ryan Smee' })
 *
 * @example
 *
 * randCreditCard({ brand: 'Visa' })
 *
 * @example
 *
 * randCreditCard({ length: 10 })
 *
 */

function randCreditCard(options) {
  const factory = () => {
    var _options$fullName, _options$brand;

    const fullName = (_options$fullName = options == null ? void 0 : options.fullName) != null ? _options$fullName : `${randPersonTitle()} ${randFullName({
      withAccents: false
    })}`;
    const brand = (_options$brand = options == null ? void 0 : options.brand) != null ? _options$brand : randCreditCardBrand();
    const dateOptions = {
      month: 'numeric',
      year: '2-digit'
    };
    const validFrom = randPastDate({
      years: 1
    }).toLocaleDateString('en-GB', dateOptions);
    const untilEnd = randFutureDate({
      years: 2
    }).toLocaleDateString('en-GB', dateOptions);
    return {
      fullName,
      brand,
      validFrom,
      untilEnd,
      ccv: randCreditCardCVV(),
      number: randCreditCardNumber({
        brand
      }),
      account: randAccount(),
      type: rand(['Credit', 'Debit'])
    };
  };

  return fake(factory, options);
}

const generateRandomValue = () => {
  const availableValuesGenerators = [randBoolean(), randNumber(), randNumber({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randSinger(), randSinger({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randMovie(), randMovie({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randMovieCharacter(), randMovieCharacter({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randWord(), randWord({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randSnake(), randSnake({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randUser(), randUser({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randAddress(), randAddress({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randProduct(), randProduct({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randFlightDetails(), randFlightDetails({
    length: randNumber({
      min: 1,
      max: 10
    })
  }), randCreditCard(), randCreditCard({
    length: randNumber({
      min: 1,
      max: 10
    })
  })];
  return availableValuesGenerators[randNumber({
    min: 0,
    max: availableValuesGenerators.length - 1
  })];
};
/**
 * Generate a random JSON Object.
 *
 * @category Datatype
 *
 * @example
 * randJSON()
 *
 * @example If a fixed number of keys are required
 *
 * randJSON({ totalKeys: 10 })
 *
 * @example If a random number of keys are required
 *
 * randJSON({ minKeys: 1, maxKeys: 10 })
 *
 */


function randJSON(options) {
  var _options$totalKeys;

  const objectSize = (_options$totalKeys = options == null ? void 0 : options.totalKeys) != null ? _options$totalKeys : randNumber({
    min: (options == null ? void 0 : options.minKeys) || 1,
    max: (options == null ? void 0 : options.maxKeys) || 99
  });

  const factory = () => {
    const generatedObject = {};

    for (let index = 0; index < objectSize; index++) {
      generatedObject[randUuid().replace(/-/g, '')] = generateRandomValue();
    }

    return generatedObject;
  };

  return fake(factory, options);
}

var data = {
	bash: "#!/bin/bash\n\nmove()\n{\n  local n=\"$1\"\n  local from=\"$2\"\n  local to=\"$3\"\n  local via=\"$4\"\n\n  if [[ \"$n\" == \"1\" ]]\n  then\n    echo \"Move disk from pole $from to pole $to\"\n  else\n    move $(($n - 1)) $from $via $to\n    move 1 $from $to $via\n    move $(($n - 1)) $via $to $from\n  fi\n}\n\nmove $1 $2 $3 $4",
	c: "#include <stdio.h>\n\nvoid move(int n, int from, int via, int to) {\n   if (n > 1) {\n      move(n - 1, from, to, via);\n      printf(\"Move disk from pole %d to pole %d\\n\", from, to);\n      move(n - 1, via, from, to);\n   } else {\n      printf(\"Move disk from pole %d to pole %d\\n\", from, to);\n   }\n}\nint main() {\n   move(4, 1, 2, 3);\n   return 0;\n}",
	"c#": "public void move(int n, int from, int to, int via) {\n  if (n == 1) {\n    System.Console.WriteLine(\"Move disk from pole \" + from + \" to pole \" + to);\n  } else {\n    move(n - 1, from, via, to);\n    move(1, from, to, via);\n    move(n - 1, via, to, from);\n  }\n}",
	"c++": "void move(int n, int from, int to, int via) {\n  if (n == 1) {\n    std::cout << \"Move disk from pole \" << from << \" to pole \" << to << std::endl;\n  } else {\n    move(n - 1, from, via, to);\n    move(1, from, to, via);\n    move(n - 1, via, to, from);\n  }\n}",
	css: ".hover-rotate {\n  overflow: hidden;\n  margin: 8px;\n  min-width: 240px;\n  max-width: 320px;\n  width: 100%;\n}\n\n.hover-rotate img {\n  transition: all 0.3s;\n  box-sizing: border-box;\n  max-width: 100%;\n}\n\n.hover-rotate:hover img {\n  transform: scale(1.3) rotate(5deg);\n}",
	go: "func fib(a int) int {\n  if a < 2 {\n      return a\n  }\n  return fib(a - 1) + fib(a - 2)\n}",
	html: "<form action=\"http://maps.google.com/maps\" method=\"get\" target=\"_blank\">\n  <label for=\"saddr\">Enter your location</label>\n  <input type=\"text\" name=\"saddr\" />\n  <input type=\"hidden\" name=\"daddr\" value=\"350 5th Ave New York, NY 10018 (Empire State Building)\" />\n  <input type=\"submit\" value=\"Get directions\" />\n</form>",
	java: "public void move(int n, int from, int to, int via) {\n  if (n == 1) {\n      System.out.println(\"Move disk from pole \" + from + \" to pole \" + to);\n  } else {\n      move(n - 1, from, via, to);\n      move(1, from, to, via);\n      move(n - 1, via, to, from);\n  }\n}",
	javascript: "function move(n, a, b, c) {\n  if (n > 0) {\n    move(n - 1, a, c, b);\n    console.log(\"Move disk from \" + a + \" to \" + c);\n    move(n - 1, b, a, c);\n  }\n}\nmove(4, \"A\", \"B\", \"C\");",
	php: "function move($n,$from,$to,$via) {\n  if ($n === 1) {\n    print(\"Move disk from pole $from to pole $to\");\n  } else {\n    move($n-1,$from,$via,$to);\n    move(1,$from,$to,$via);\n    move($n-1,$via,$to,$from);\n  }\n}",
	python: "def hanoi(ndisks, startPeg=1, endPeg=3):\n  if ndisks:\n    hanoi(ndisks - 1, startPeg, 6 - startPeg - endPeg)\n    print \"Move disk %d from peg %d to peg %d\" % (ndisks, startPeg, endPeg)\n    hanoi(ndisks - 1, 6 - startPeg - endPeg, endPeg)\n\nhanoi(ndisks=4)",
	rust: "fn move_(n: i32, from: i32, to: i32, via: i32) {\n  if n > 0 {\n      move_(n - 1, from, via, to);\n      println!(\"Move disk from pole {} to pole {}\", from, to);\n      move_(n - 1, via, to, from);\n  }\n}\n \nfn main() {\n  move_(4, 1,2,3);\n}",
	sql: "SELECT *\nFROM   call\nORDER  BY call.employee_id ASC,\n          call.start_time ASC;",
	swift: "func hanoi(n: Int, a: String, b: String, c: String) {\n  if n > 0 {\n    hanoi(n - 1, a: a, b: c, c: b)\n    print(\"Move disk from \\\\(a) to \\\\(c)\")\n    hanoi(n - 1, a: b, b: a, c: c)\n  }\n}\n  \nhanoi(4, a: \"A\", b: \"B\", c: \"C\")';"
};

/**
 * Generate a random code snippet.
 *
 * @category code
 *
 * @example
 *
 * randCodeSnippet()
 *
 * @example
 *
 * randCodeSnippet({ length: 10 })
 *
 * @example
 *
 * randCodeSnippet({ lang: 'html' }) // default is 'javascript'
 *
 */

function randCodeSnippet(options) {
  var _options$lang;

  const lang = (_options$lang = options == null ? void 0 : options.lang) != null ? _options$lang : 'javascript';
  return fake(() => data[lang], options);
}

/**
 * Generate a random text range.
 *
 * @category text
 *
 * @example
 *
 * randTextRange({ min: 10, max: 100 })
 *
 * @example
 *
 * randTextRange({ min: 10, max: 100, length: 10 })
 *
 */

function randTextRange(options) {
  const min = options.min;
  const max = options.max;

  if (min >= max) {
    throw new Error('Min must be less than max');
  }

  const factory = () => {
    const charCount = getRandomInRange({
      min,
      max
    });
    return randText({
      charCount
    });
  };

  return fake(factory, options);
}

/**
 * Generate a random airport name.
 *
 * @category flight
 *
 * @example
 *
 * randAirportName()
 *
 * @example
 *
 * randAirportName({ length: 10 })
 *
 */

function randAirportName(options) {
  const factory = () => {
    return rand(data$1.map(({
      name
    }) => name));
  };

  return fake(factory, options);
}

/**
 * Generate a random airport code.
 *
 * @category flight
 *
 * @example
 *
 * randAirportCode()
 *
 * @example
 *
 * randAirportCode({ length: 10 })
 *
 */

function randAirportCode(options) {
  const factory = () => {
    return rand(data$1.map(({
      code
    }) => code));
  };

  return fake(factory, options);
}




/***/ }),

/***/ 377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(832);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(652);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(801);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(30);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(618);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(49);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(971);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(42);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mocker = void 0;
var fetch_1 = __importDefault(__webpack_require__(676));
var wx_request_1 = __importDefault(__webpack_require__(833));
var xml_http_request_1 = __importDefault(__webpack_require__(219));
var mocker_1 = __importDefault(__webpack_require__(819));
exports.Mocker = mocker_1.default;
var BrowserPureIndex = /** @class */ (function () {
    function BrowserPureIndex() {
    }
    /**
     * Auto detect request environment and setup request mock for wx.request, fetch and XHR.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setup = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        if (this.isEnabled && typeof wx !== 'undefined' && typeof wx.request === 'function') {
            wx_request_1.default.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.XMLHttpRequest === 'function') {
            xml_http_request_1.default.setup(mocker, proxyServer);
        }
        if (this.isEnabled && typeof window !== 'undefined' && typeof window.fetch === 'function') {
            fetch_1.default.setup(mocker, proxyServer);
        }
        return mocker;
    };
    /**
     * Setup request mock for wx.request.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForWx = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && wx_request_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for XMLHttpRequest.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForXhr = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && xml_http_request_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Setup request mock for fetch.
     * @param {string} proxyServer A proxy server which is used by proxy mode.
     */
    BrowserPureIndex.setupForFetch = function (proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var mocker = new mocker_1.default(proxyServer);
        this.isEnabled && fetch_1.default.setup(mocker, proxyServer);
        return mocker;
    };
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enable = function () {
        this.isEnabled = true;
        return mocker_1.default.getInstance().enable();
    };
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disable = function () {
        this.isEnabled = false;
        return mocker_1.default.getInstance().disable();
    };
    /**
     * Enable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.enableLog = function () {
        return mocker_1.default.getInstance().enableLog();
    };
    /**
     * Disable verbose log.
     * Not available in proxy mode.
     */
    BrowserPureIndex.disableLog = function () {
        return mocker_1.default.getInstance().disableLog();
    };
    BrowserPureIndex.isEnabled = true;
    BrowserPureIndex.default = BrowserPureIndex; // for backward compatibility
    return BrowserPureIndex;
}());
exports["default"] = BrowserPureIndex;


/***/ }),

/***/ 280:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mocker = void 0;
var cache_js_1 = __importDefault(__webpack_require__(612));
var faker_js_1 = __importDefault(__webpack_require__(975));
var browser_pure_1 = __importDefault(__webpack_require__(287));
var mocker_1 = __importDefault(__webpack_require__(819));
exports.Mocker = mocker_1.default;
/**
 * The same as BrowserPureIndex, but with "faker" and "cache" plugins.
 */
var BrowserIndex = /** @class */ (function (_super) {
    __extends(BrowserIndex, _super);
    function BrowserIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserIndex.faker = faker_js_1.default;
    BrowserIndex.cache = cache_js_1.default;
    BrowserIndex.default = BrowserIndex; // for backward compatibility
    return BrowserIndex;
}(browser_pure_1.default));
exports["default"] = BrowserIndex;


/***/ }),

/***/ 719:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Bypass = /** @class */ (function () {
    function Bypass() {
        this.flag = 'yes';
    }
    return Bypass;
}());
exports["default"] = Bypass;


/***/ }),

/***/ 391:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __filename = "/index.js";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCallerFile = exports.isImported = exports.isPromise = exports.isNodejs = exports.currentDatetime = exports.currentTime = exports.currentDate = exports.isArrayBuffer = exports.str2arrayBuffer = exports.sleep = exports.tryToParseJson = exports.tryToParseObject = exports.isObject = exports.queryObject2String = exports.getQuery = void 0;
/**
 * Get query parameters from the specified request url.
 * https://www.sitepoint.com/get-url-parameters-with-javascript/
 *
 * @param {string} reqUrl
 */
function getQuery(reqUrl) {
    var _a;
    // no protocol, domain, path and hash tag
    var query = (reqUrl || '').replace(/^.*?\?/g, '').replace(/#.*$/g, '');
    var obj = {};
    if (query) {
        var parts = query.split('&');
        for (var i = 0; i < parts.length; i++) {
            var _b = parts[i].split('='), key = _b[0], _c = _b[1], val = _c === void 0 ? '' : _c;
            // for keys which ends with square brackets, such as list[] or list[1]
            if (key.match(/\[(\d+)?\]$/)) {
                var field = key.replace(/\[(\d+)?\]/, '');
                obj[field] = obj[field] || [];
                if (key.match(/\[\d+\]$/)) {
                    // set array index, if it's an indexed array e.g. list[2]
                    obj[field][Number((_a = /\[(\d+)\]/.exec(key)) === null || _a === void 0 ? void 0 : _a[1])] = val;
                }
                else {
                    obj[field].push(val);
                }
            }
            else {
                if (key in obj) {
                    obj[key] = [].concat(obj[key], val);
                }
                else {
                    obj[key] = val;
                }
            }
        }
    }
    return obj;
}
exports.getQuery = getQuery;
/**
 * Convert query object to search string.
 * @param {object} queryObj
 */
function queryObject2String(queryObj) {
    var str = [];
    for (var key in queryObj) {
        if (Array.isArray(queryObj[key])) {
            for (var _i = 0, _a = queryObj[key]; _i < _a.length; _i++) {
                var val = _a[_i];
                str.push(key + '=' + val);
            }
        }
        else {
            str.push(key + '=' + queryObj[key]);
        }
    }
    return str.join('&');
}
exports.queryObject2String = queryObject2String;
/**
 * Check whether or not the specified obj is an object.
 * @param {unknown} obj
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
exports.isObject = isObject;
/**
 * Try to convert an object like string to an object.
 * @param {unknown} body
 */
function tryToParseObject(body) {
    var isObjLiked = typeof body === 'string' && body[0] === '{' && body[body.length - 1] === '}';
    var isArrLiked = typeof body === 'string' && body[0] === '[' && body[body.length - 1] === ']';
    if (!isObjLiked && !isArrLiked) {
        return body;
    }
    try {
        return JSON.parse(body);
    }
    catch (e) {
        return body;
    }
}
exports.tryToParseObject = tryToParseObject;
/**
 * Try to parse a JSON string
 * @param {unknown} body
 */
function tryToParseJson(str, defaultVal) {
    if (defaultVal === void 0) { defaultVal = null; }
    try {
        return JSON.parse(String(str));
    }
    catch (e) {
        return defaultVal;
    }
}
exports.tryToParseJson = tryToParseJson;
/**
 * Sleep the specified number of milliseconds.
 * @param {number} ms
 */
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
/**
 * Convert string to arraybuffer.
 * @param {string} str
 */
function str2arrayBuffer(str) {
    if (typeof TextEncoder === 'function') {
        return new TextEncoder().encode(str);
    }
    if (typeof ArrayBuffer === 'function') {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    return null;
}
exports.str2arrayBuffer = str2arrayBuffer;
/**
 * Whether or not the specified data is arraybuffer.
 * @param {unknown} data
 */
function isArrayBuffer(data) {
    if (typeof ArrayBuffer === 'function' && data instanceof ArrayBuffer) {
        return true;
    }
    if (typeof Int32Array === 'function' && (data instanceof Int32Array)) {
        return true;
    }
    if (typeof Int16Array === 'function' && (data instanceof Int16Array)) {
        return true;
    }
    if (typeof Int8Array === 'function' && (data instanceof Int8Array)) {
        return true;
    }
    return false;
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * Get current date.
 */
function currentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date));
}
exports.currentDate = currentDate;
/**
 * Get current time.
 */
function currentTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
exports.currentTime = currentTime;
/**
 * Get current datetime.
 */
function currentDatetime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var two = function (num) { return num < 10 ? "0".concat(num) : "".concat(num); };
    return "".concat(two(year), "-").concat(two(month), "-").concat(two(date), " ").concat(two(hour), ":").concat(two(minute), ":").concat(two(second));
}
exports.currentDatetime = currentDatetime;
/**
 * Check current environment: nodejs or not.
 * Note: arrow function is required.
 */
function isNodejs() {
    return (typeof process !== 'undefined')
        && (Object.prototype.toString.call(process) === '[object process]')
        && (!!(process.versions && process.versions.node));
}
exports.isNodejs = isNodejs;
/**
 * Check if an object is a Promise
 */
function isPromise(object) {
    if (Promise && Promise.resolve) {
        return Promise.resolve(object) === object;
    }
    else {
        throw new Error('Promise not supported in your environment');
    }
}
exports.isPromise = isPromise;
/**
 * Check if an object is imported.
 */
function isImported(obj) {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 1 && ('default' in obj);
}
exports.isImported = isImported;
/**
 * Get caller file from error stack
 */
function getCallerFile() {
    var oldPrepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) { return stack; };
    var stack = new Error().stack;
    Error.prepareStackTrace = oldPrepareStackTrace;
    if (stack !== null && typeof stack === 'object') {
        for (var i = 0; i < 50; i++) {
            var file = stack[i] ? stack[i].getFileName() : undefined;
            var next = stack[i + 1] ? stack[i + 1].getFileName() : undefined;
            if (file !== next && file === __filename) {
                return next;
            }
        }
    }
}
exports.getCallerFile = getCallerFile;


/***/ }),

/***/ 542:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTTPStatusCodes = void 0;
exports.HTTPStatusCodes = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a Teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required'
};


/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(391);
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor(mocker, proxyServer) {
        var _a;
        if (proxyServer === void 0) { proxyServer = ''; }
        this.proxyServer = '';
        this.proxyMode = '';
        this.mocker = mocker;
        if (/^(matched@localhost:\d+)|(middleware@\/)$/.test(proxyServer)) {
            _a = proxyServer.split('@'), this.proxyMode = _a[0], this.proxyServer = _a[1];
        }
        this.global = BaseInterceptor.getGlobal();
    }
    /**
     * Setup request mocker.
     * @param {Mocker} mocker
     */
    BaseInterceptor.setup = function (mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        return new this(mocker, proxyServer);
    };
    /**
     * return global variable
     */
    BaseInterceptor.getGlobal = function () {
        if (typeof window !== 'undefined') {
            return window;
        }
        else if (typeof __webpack_require__.g !== 'undefined') {
            return __webpack_require__.g;
        }
        throw new Error('Detect global variable error');
    };
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return mock meta information, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     */
    BaseInterceptor.prototype.matchMockRequest = function (reqUrl, reqMethod) {
        // ignore matching when it is a proxy mode
        if (this.proxyMode === 'matched' && reqUrl.indexOf("http://".concat(this.proxyServer)) === 0) {
            return null;
        }
        var mockItem = this.mocker.matchMockItem(reqUrl, reqMethod);
        if (mockItem && mockItem.times !== undefined) {
            mockItem.times -= 1;
        }
        // "mockItem" should be returned if current request is under proxy mode of middleware and is marked by @deProxy
        if (this.proxyMode === 'middleware' && reqUrl.indexOf(this.getMiddlewareHost()) === 0) {
            return mockItem && mockItem.deProxy ? mockItem : null;
        }
        return mockItem;
    };
    BaseInterceptor.prototype.getRequestInfo = function (requestInfo) {
        var info = {
            url: requestInfo.url,
            method: requestInfo.method || 'GET',
            query: (0, utils_1.getQuery)(requestInfo.url),
        };
        if (requestInfo.headers || requestInfo.header) {
            info.headers = requestInfo.headers || requestInfo.header;
        }
        if (requestInfo.body !== undefined) {
            info.body = (0, utils_1.tryToParseObject)(requestInfo.body);
        }
        return info;
    };
    /**
     * Get full request url.
     * @param {string} url
     */
    BaseInterceptor.prototype.getFullRequestUrl = function (url, method) {
        if (/^https?:\/\//i.test(url)) {
            return this.checkProxyUrl(url, method);
        }
        if (typeof URL === 'function' && typeof window === 'object' && window) {
            return this.checkProxyUrl(new URL(url, window.location.href).href, method);
        }
        if (typeof document === 'object' && document && typeof document.createElement === 'function') {
            var elemA = document.createElement('a');
            elemA.href = url;
            return this.checkProxyUrl(elemA.href, method);
        }
        return this.checkProxyUrl(url, method);
    };
    /**
     * Return a proxy url if in a proxy mode otherwise return the original url.
     * @param {string} url
     */
    BaseInterceptor.prototype.checkProxyUrl = function (url, method) {
        if (!['matched', 'middleware'].includes(this.proxyMode) || !this.proxyServer) {
            return url;
        }
        var mockItem = this.mocker.matchMockItem(url, method);
        if (!mockItem) {
            return url;
        }
        var proxyUrl = this.proxyMode === 'middleware'
            ? "".concat(this.getMiddlewareHost()).concat(url.replace(/^(https?):\/\//, '/$1/'))
            : "http://".concat(this.proxyServer).concat(url.replace(/^(https?):\/\//, '/$1/'));
        return mockItem.deProxy ? url : proxyUrl;
    };
    BaseInterceptor.prototype.getMiddlewareHost = function () {
        var _a = window.location, protocol = _a.protocol, host = _a.host;
        return "".concat(protocol, "//").concat(host);
    };
    return BaseInterceptor;
}());
exports["default"] = BaseInterceptor;


/***/ }),

/***/ 676:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/ban-types */
var bypass_1 = __importDefault(__webpack_require__(719));
var utils_1 = __webpack_require__(391);
var config_1 = __webpack_require__(542);
var base_1 = __importDefault(__webpack_require__(667));
var FetchInterceptor = /** @class */ (function (_super) {
    __extends(FetchInterceptor, _super);
    function FetchInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (FetchInterceptor.instance) {
            return FetchInterceptor.instance;
        }
        FetchInterceptor.instance = _this;
        _this.fetch = _this.global.fetch.bind(_this.global);
        _this.intercept();
        return _this;
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * Intercept fetch object.
     */
    FetchInterceptor.prototype.intercept = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        this.global.fetch = function (input, init) {
            var _this = this;
            var url;
            var params;
            // https://developer.mozilla.org/en-US/docs/Web/API/Request
            // Note: the first argument of fetch maybe a Request object.
            if (typeof input === 'object') {
                url = input.url;
                params = input;
            }
            else {
                url = input;
                params = init || {};
            }
            var method = (params && params.method ? params.method : 'GET');
            var requestUrl = me.getFullRequestUrl(url, method);
            return new Promise(function (resolve, reject) {
                var mockItem = me.matchMockRequest(requestUrl, method);
                if (!mockItem) {
                    me.fetch(requestUrl, params).then(resolve).catch(reject);
                    return;
                }
                var requestInfo = me.getRequestInfo(__assign(__assign({}, params), { url: requestUrl, method: method }));
                requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, me.getOriginalResponse(requestUrl, params)];
                            case 1:
                                res = _a.sent();
                                requestInfo.doOriginalCall = undefined;
                                return [2 /*return*/, res];
                        }
                    });
                }); };
                var remoteInfo = mockItem === null || mockItem === void 0 ? void 0 : mockItem.getRemoteInfo(requestUrl);
                if (remoteInfo) {
                    params.method = remoteInfo.method || method;
                    me.setRequestHeadersForRemoteRequest(mockItem, params);
                    me.fetch(remoteInfo.url, params).then(function (fetchResponse) {
                        me.sendRemoteResult(fetchResponse, mockItem, requestInfo, resolve);
                    }).catch(reject);
                    return;
                }
                me.doMockRequest(mockItem, requestInfo, resolve).then(function (isBypassed) {
                    if (isBypassed) {
                        me.fetch(requestUrl, params).then(resolve).catch(reject);
                    }
                });
            });
        };
        return this;
    };
    /**
     * Set request headers for requests marked by remote config.
     * @param {AnyObject} fetchParams
     */
    FetchInterceptor.prototype.setRequestHeadersForRemoteRequest = function (mockItem, fetchParams) {
        if (Object.keys(mockItem.requestHeaders).length <= 0)
            return;
        if (typeof Headers === 'function' && fetchParams.headers instanceof Headers) {
            Object.entries(mockItem.requestHeaders).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                fetchParams.headers.set(key, val);
            });
        }
        else {
            fetchParams.headers = __assign(__assign({}, (fetchParams.headers || {})), mockItem.requestHeaders);
        }
    };
    /**
     * Set remote result.
     * @param {FetchResponse} fetchResponse
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.sendRemoteResult = function (fetchResponse, mockItem, requestInfo, resolve) {
        var _this = this;
        var headers = {};
        if (typeof Headers === 'function' && fetchResponse.headers instanceof Headers) {
            fetchResponse.headers.forEach(function (val, key) {
                headers[key.toLocaleLowerCase()] = val;
            });
        }
        fetchResponse.text().then(function (text) {
            var json = (0, utils_1.tryToParseJson)(text);
            var remoteResponse = {
                status: fetchResponse.status,
                headers: headers,
                response: json || text,
                responseText: text,
                responseJson: json,
            };
            _this.doMockRequest(mockItem, requestInfo, resolve, remoteResponse);
        });
    };
    /**
     * Get original response
     * @param {string} requestUrl
     * @param {FetchRequest | AnyObject} params
     */
    FetchInterceptor.prototype.getOriginalResponse = function (requestUrl, params) {
        return __awaiter(this, void 0, void 0, function () {
            var status, headers, responseText, responseJson, responseBuffer, responseBlob, res, isBlobAvailable, _a, _b, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        status = null;
                        headers = {};
                        responseText = null;
                        responseJson = null;
                        responseBuffer = null;
                        responseBlob = null;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 13, , 14]);
                        return [4 /*yield*/, this.fetch(requestUrl, params)];
                    case 2:
                        res = _d.sent();
                        status = res.status;
                        if (typeof Headers === 'function' && res.headers instanceof Headers) {
                            res.headers.forEach(function (val, key) { return (headers[key.toLocaleLowerCase()] = val); });
                        }
                        isBlobAvailable = typeof Blob === 'function'
                            && typeof Blob.prototype.text === 'function'
                            && typeof Blob.prototype.arrayBuffer === 'function'
                            && typeof Blob.prototype.slice === 'function'
                            && typeof Blob.prototype.stream === 'function';
                        if (!isBlobAvailable) return [3 /*break*/, 4];
                        return [4 /*yield*/, res.blob()];
                    case 3:
                        _a = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = null;
                        _d.label = 5;
                    case 5:
                        responseBlob = _a;
                        if (!isBlobAvailable) return [3 /*break*/, 7];
                        return [4 /*yield*/, responseBlob.text()];
                    case 6:
                        _b = _d.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, res.text()];
                    case 8:
                        _b = _d.sent();
                        _d.label = 9;
                    case 9:
                        responseText = _b;
                        if (!isBlobAvailable) return [3 /*break*/, 11];
                        return [4 /*yield*/, responseBlob.arrayBuffer()];
                    case 10:
                        _c = _d.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        _c = null;
                        _d.label = 12;
                    case 12:
                        responseBuffer = _c;
                        responseJson = responseText === null ? null : (0, utils_1.tryToParseJson)(responseText);
                        return [2 /*return*/, { status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: null }];
                    case 13:
                        err_1 = _d.sent();
                        return [2 /*return*/, { status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: err_1 }];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.doMockRequest = function (mockItem, requestInfo, resolve, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var isBypassed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.sleep)(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, resolve, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, resolve, remoteResponse)];
                    case 4:
                        isBypassed = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, isBypassed];
                }
            });
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {Function} resolve
     */
    FetchInterceptor.prototype.doMockResponse = function (mockItem, requestInfo, resolve, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var body, now, spent, statusCode, headers, transformed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        body = _a.sent();
                        now = Date.now();
                        if (body instanceof bypass_1.default) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        statusCode = mockItem.status;
                        headers = __assign(__assign(__assign({}, mockItem.headers), ((remoteResponse === null || remoteResponse === void 0 ? void 0 : remoteResponse.headers) || {})), { 'x-powered-by': 'http-request-mock' });
                        if (!mockItem.transformResponse) return [3 /*break*/, 3];
                        return [4 /*yield*/, mockItem.transformResponse(requestInfo, mockItem)];
                    case 2:
                        transformed = _a.sent();
                        if ('body' in transformed) {
                            body = transformed.body;
                        }
                        if ('headers' in transformed) {
                            headers = __assign(__assign({}, headers), transformed.headers);
                        }
                        if ('status' in transformed) {
                            statusCode = transformed.status;
                        }
                        _a.label = 3;
                    case 3:
                        this.mocker.sendResponseLog(spent, body, requestInfo, mockItem);
                        resolve(this.getFetchResponse(body, headers, statusCode, mockItem, requestInfo));
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Response
     * Format mock data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    FetchInterceptor.prototype.getFetchResponse = function (responseBody, responseHeaders, responseStatus, mockItem, requestInfo) {
        var data = responseBody;
        var status = responseStatus;
        var statusText = config_1.HTTPStatusCodes[status] || '';
        var body = typeof Blob === 'function'
            ? new Blob([typeof data === 'string' ? data : JSON.stringify(data)])
            : data;
        var headers = typeof Headers === 'function'
            ? new Headers(__assign(__assign({}, responseHeaders), { 'x-powered-by': 'http-request-mock' }))
            : Object.entries(__assign(__assign({}, responseHeaders), { 'x-powered-by': 'http-request-mock' }));
        if (typeof Response === 'function') {
            var response_1 = new Response(body, { status: status, statusText: statusText, headers: headers });
            Object.defineProperty(response_1, 'url', { value: requestInfo.url });
            return response_1;
        }
        var response = {
            body: body,
            bodyUsed: false,
            headers: headers,
            ok: true,
            redirected: false,
            status: status,
            statusText: statusText,
            url: requestInfo.url,
            type: 'basic',
            // response data depends on prepared data
            json: function () { return Promise.resolve(data); },
            arrayBuffer: function () { return Promise.resolve(data); },
            blob: function () { return Promise.resolve(body); },
            formData: function () { return Promise.resolve(data); },
            text: function () { return Promise.resolve(typeof data === 'string' ? data : JSON.stringify(data)); },
            // other methods that may be used
            clone: function () { return response; },
            error: function () { return response; },
            redirect: function () { return response; },
        };
        return response;
    };
    return FetchInterceptor;
}(base_1.default));
exports["default"] = FetchInterceptor;


/***/ }),

/***/ 833:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/no-empty-function */
var bypass_1 = __importDefault(__webpack_require__(719));
var utils_1 = __webpack_require__(391);
var base_1 = __importDefault(__webpack_require__(667));
var WxRequestInterceptor = /** @class */ (function (_super) {
    __extends(WxRequestInterceptor, _super);
    function WxRequestInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (WxRequestInterceptor.instance) {
            return WxRequestInterceptor.instance;
        }
        WxRequestInterceptor.instance = _this;
        // Note: this.global has no wx object
        _this.wxRequest = wx.request.bind(wx);
        _this.intercept();
        return _this;
    }
    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
     * Intercept wx.request object.
     */
    WxRequestInterceptor.prototype.intercept = function () {
        var _this = this;
        Object.defineProperty(wx, 'request', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function (wxRequestOpts) {
                if (!wxRequestOpts || !wxRequestOpts.url) {
                    return;
                }
                wxRequestOpts.url = _this.getFullRequestUrl(wxRequestOpts.url, wxRequestOpts.method);
                var mockItem = _this.matchMockRequest(wxRequestOpts.url, wxRequestOpts.method);
                var remoteInfo = mockItem === null || mockItem === void 0 ? void 0 : mockItem.getRemoteInfo(wxRequestOpts.url);
                var requestInfo = _this.getRequestInfo(wxRequestOpts);
                if (mockItem && remoteInfo) {
                    wxRequestOpts.url = remoteInfo.url;
                    wxRequestOpts.method = remoteInfo.method || wxRequestOpts.method;
                    if (Object.keys(mockItem.requestHeaders).length > 0) {
                        wxRequestOpts.header = __assign(__assign({}, (wxRequestOpts.header || {})), mockItem.requestHeaders);
                    }
                    return _this.sendRemoteResult(wxRequestOpts, mockItem, requestInfo);
                }
                if (/^get$/i.test(wxRequestOpts.method) && (0, utils_1.isObject)(wxRequestOpts.data)) {
                    requestInfo.query = __assign(__assign({}, requestInfo.query), wxRequestOpts.data);
                }
                else {
                    requestInfo.body = wxRequestOpts.data;
                }
                requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res;
                    return __generator(this, function (_a) {
                        res = this.getOriginalResponse(wxRequestOpts);
                        requestInfo.doOriginalCall = undefined;
                        return [2 /*return*/, res];
                    });
                }); };
                if (mockItem) {
                    _this.doMockRequest(mockItem, requestInfo, wxRequestOpts).then(function (isBypassed) {
                        if (isBypassed) {
                            _this.wxRequest(wxRequestOpts); // fallback to original wx.request
                        }
                    });
                    return _this.getRequstTask();
                }
                else {
                    wxRequestOpts.url = wxRequestOpts.url;
                    return _this.wxRequest(wxRequestOpts); // fallback to original wx.request
                }
            }
        });
        return this;
    };
    WxRequestInterceptor.prototype.getRequstTask = function () {
        return {
            abort: function () { },
            onHeadersReceived: function () { },
            offHeadersReceived: function () { }
        };
    };
    /**
     * Set remote result.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     */
    WxRequestInterceptor.prototype.sendRemoteResult = function (wxRequestOpts, mockItem, requestInfo) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        // fallback to original wx.request
        this.wxRequest(__assign(__assign({}, wxRequestOpts), { success: function (wxResponse) {
                var remoteResponse = {
                    status: wxResponse.statusCode,
                    headers: wxResponse.header,
                    response: wxResponse.data,
                    responseText: typeof wxResponse.data === 'string' ? wxResponse.data : JSON.stringify(wxResponse.data),
                    responseJson: typeof wxResponse.data === 'string' ? (0, utils_1.tryToParseJson)(wxResponse.data) : wxResponse.data
                };
                me.doMockRequest(mockItem, requestInfo, wxRequestOpts, remoteResponse);
            } }));
        return this.getRequstTask();
    };
    /**
     * Get original response
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.getOriginalResponse = function (wxRequestOpts) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.wxRequest(__assign(__assign({}, wxRequestOpts), { success: function (wxResponse) {
                    var data = wxResponse.data;
                    resolve({
                        status: wxResponse.statusCode,
                        headers: wxResponse.header,
                        responseText: typeof data === 'string' ? data : JSON.stringify(data),
                        responseJson: typeof data === 'string' ? (0, utils_1.tryToParseJson)(data) : data,
                        responseBuffer: typeof ArrayBuffer === 'function' && (data instanceof ArrayBuffer)
                            ? data
                            : null,
                        // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
                        // wx.request does not support Blob response data
                        responseBlob: null,
                        error: null,
                    });
                }, fail: function (err) {
                    resolve({
                        status: 0,
                        headers: {},
                        responseText: null,
                        responseJson: null,
                        responseBuffer: null,
                        responseBlob: null,
                        error: new Error("request error: ".concat(err.errMsg)),
                    });
                } }));
        });
    };
    /**
     * Make mock request.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.doMockRequest = function (mockItem, requestInfo, wxRequestOpts, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var isBypassed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.sleep)(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, wxRequestOpts, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(mockItem, requestInfo, wxRequestOpts, remoteResponse)];
                    case 4:
                        isBypassed = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, isBypassed];
                }
            });
        });
    };
    /**
     * Make mock response.
     * @param {MockItem} mockItem
     * @param {RequestInfo} requestInfo
     * @param {WxRequestOpts} wxRequestOpts
     */
    WxRequestInterceptor.prototype.doMockResponse = function (mockItem, requestInfo, wxRequestOpts, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var now, body, spent, wxResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = Date.now();
                        return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        body = _a.sent();
                        if (body instanceof bypass_1.default) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        wxResponse = this.getWxResponse(body, mockItem);
                        this.mocker.sendResponseLog(spent, body, requestInfo, mockItem);
                        this.sendResult(wxRequestOpts, wxResponse);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * Get WX mock response data.
     * @param {unknown} responseBody
     * @param {MockItem} mockItem
     */
    WxRequestInterceptor.prototype.getWxResponse = function (responseBody, mockItem) {
        var _a;
        // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
        var setCookieHeader = [].concat((((_a = mockItem.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']) || []));
        return {
            data: responseBody,
            statusCode: mockItem.status || 200,
            header: __assign(__assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
            cookies: setCookieHeader,
            profile: {},
        };
    };
    /**
     * Call some necessary callbacks if specified.
     * @param {WxRequestOpts} wxRequestOpts
     * @param {WxRequestOpts} response
     */
    WxRequestInterceptor.prototype.sendResult = function (wxRequestOpts, wxResponse) {
        if (typeof wxRequestOpts.success === 'function') {
            wxRequestOpts.success(wxResponse);
        }
        if (typeof wxRequestOpts.complete === 'function') {
            wxRequestOpts.complete(wxResponse);
        }
    };
    return WxRequestInterceptor;
}(base_1.default));
exports["default"] = WxRequestInterceptor;


/***/ }),

/***/ 219:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var bypass_1 = __importDefault(__webpack_require__(719));
var utils_1 = __webpack_require__(391);
var config_1 = __webpack_require__(542);
var base_1 = __importDefault(__webpack_require__(667));
var XMLHttpRequestInterceptor = /** @class */ (function (_super) {
    __extends(XMLHttpRequestInterceptor, _super);
    function XMLHttpRequestInterceptor(mocker, proxyServer) {
        if (proxyServer === void 0) { proxyServer = ''; }
        var _this = _super.call(this, mocker, proxyServer) || this;
        if (XMLHttpRequestInterceptor.instance) {
            return XMLHttpRequestInterceptor.instance;
        }
        XMLHttpRequestInterceptor.instance = _this;
        _this.xhr = _this.global.XMLHttpRequest.prototype;
        _this.intercept();
        return _this;
    }
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
     * Logic of intercepting XMLHttpRequest object.
     */
    XMLHttpRequestInterceptor.prototype.intercept = function () {
        // intercept methods
        this.interceptOpen();
        this.interceptSend();
        this.interceptSetRequestHeader();
        this.interceptGetAllResponseHeaders();
        this.interceptGetResponseHeader();
        // intercept getters
        this.interceptReadyState();
        this.interceptStatus();
        this.interceptStatusText();
        this.interceptResponseText();
        this.interceptResponse();
        this.interceptResponseURL();
        this.interceptResponseXML();
        return this;
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
     * Logic of intercepting XMLHttpRequest.open method.
     */
    XMLHttpRequestInterceptor.prototype.interceptOpen = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        var original = this.xhr.open;
        Object.defineProperty(this.xhr, 'open', {
            get: function () {
                var _this = this;
                return function (method, url, async, user, password) {
                    if (async === void 0) { async = true; }
                    if (user === void 0) { user = null; }
                    if (password === void 0) { password = null; }
                    var requestUrl = me.getFullRequestUrl(url, method);
                    var mockItem = me.matchMockRequest(requestUrl, method);
                    if (!_this.bypassMock) {
                        if (mockItem) {
                            // 'this' points XMLHttpRequest instance.
                            _this.isMockRequest = true;
                            _this.mockItem = mockItem;
                            _this.mockResponse = new NotResolved();
                            _this.requestInfo = me.getRequestInfo({ url: requestUrl, method: method, });
                            _this.requestArgs = [method, requestUrl, async, user, password];
                            _this.requestInfo.doOriginalCall = function () { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, me.getOriginalResponse(this)];
                                        case 1:
                                            res = _a.sent();
                                            this.requestInfo.doOriginalCall = undefined;
                                            return [2 /*return*/, res];
                                    }
                                });
                            }); };
                            return;
                        }
                    }
                    return original.call(_this, method, requestUrl, async, user, password);
                };
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.send method.
     */
    XMLHttpRequestInterceptor.prototype.interceptSend = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var me = this;
        var original = this.xhr.send;
        Object.defineProperty(this.xhr, 'send', {
            get: function () {
                var _this = this;
                return function (body) {
                    var _a;
                    if (_this.isMockRequest) {
                        if (body !== null && body !== undefined) {
                            _this.requestInfo.rawBody = body;
                            _this.requestInfo.body = (0, utils_1.tryToParseObject)(body);
                        }
                        // remoteInfo has a higher priority than BypassMock
                        var remoteInfo = (_a = _this.mockItem) === null || _a === void 0 ? void 0 : _a.getRemoteInfo(_this.requestInfo.url);
                        if (remoteInfo) {
                            return me.sendRemoteResult(_this, _this.mockItem, remoteInfo);
                        }
                        return me.doMockRequest(_this).then(function (isBypassed) {
                            if (isBypassed) {
                                _this.isMockRequest = false;
                                _this.bypassMock = true;
                                _this.open.apply(_this, _this.requestArgs);
                                return original.call(_this, body);
                            }
                        });
                    }
                    return original.call(_this, body);
                };
            }
        });
        return this;
    };
    /**
     * Set remote result.
     * @param {XMLHttpRequestInstance} xhr
     * @param {Record<string, string>} remoteInfo
     */
    XMLHttpRequestInterceptor.prototype.sendRemoteResult = function (xhr, mockItem, remoteInfo) {
        var _this = this;
        var _a = xhr.requestArgs, method = _a[0], async = _a[1], user = _a[2], password = _a[3];
        var newXhr = new XMLHttpRequest();
        newXhr.responseType = xhr.responseType;
        newXhr.timeout = xhr.timeout;
        Object.assign(newXhr, { isMockRequest: false, bypassMock: true });
        newXhr.onreadystatechange = function () {
            if (newXhr.readyState === 4) {
                var remoteResponse = {
                    status: newXhr.status,
                    headers: newXhr.getAllResponseHeaders().split('\r\n').reduce(function (res, item) {
                        var _a = item.split(':'), key = _a[0], val = _a[1];
                        if (key && val) {
                            res[key.toLowerCase()] = val.trim();
                        }
                        return res;
                    }, {}),
                    response: newXhr.response,
                    responseText: newXhr.responseText,
                    responseJson: (0, utils_1.tryToParseJson)(newXhr.responseText)
                };
                _this.doMockRequest(xhr, remoteResponse);
            }
        };
        newXhr.open(remoteInfo.method || method, remoteInfo.url, async, user, password);
        Object.entries(mockItem.requestHeaders).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            newXhr.setRequestHeader(key, val);
        });
        newXhr.send(xhr.requestInfo.rawBody); // raw body
        return xhr;
    };
    /**
     * Get original response
     * @param {XMLHttpRequestInstance} xhr
     */
    XMLHttpRequestInterceptor.prototype.getOriginalResponse = function (xhr) {
        var _a = xhr.requestArgs, method = _a[0], requestUrl = _a[1], async = _a[2], user = _a[3], password = _a[4];
        var requestInfo = xhr.requestInfo;
        return new Promise(function (resolve) {
            var newXhr = new XMLHttpRequest();
            newXhr.responseType = xhr.responseType;
            newXhr.timeout = xhr.timeout;
            Object.assign(newXhr, { isMockRequest: false, bypassMock: true });
            var status = null;
            var headers = {};
            var responseText = null;
            var responseJson = null;
            var responseBuffer = null;
            var responseBlob = null;
            newXhr.onreadystatechange = function handleLoad() {
                if (newXhr.readyState === 4) {
                    var responseType = newXhr.responseType;
                    status = newXhr.status;
                    headers = newXhr.getAllResponseHeaders()
                        .split('\r\n')
                        .reduce(function (res, item) {
                        var _a = item.split(':'), key = _a[0], val = _a[1];
                        if (key && val) {
                            res[key.toLowerCase()] = val.trim();
                        }
                        return res;
                    }, {});
                    responseText = !responseType || responseType === 'text' || responseType === 'json'
                        ? newXhr.responseText
                        : (typeof newXhr.response === 'string' ? typeof newXhr.response : null);
                    responseJson = (0, utils_1.tryToParseJson)(responseText);
                    responseBuffer = (typeof ArrayBuffer === 'function') && (newXhr.response instanceof ArrayBuffer)
                        ? newXhr.response
                        : null;
                    responseBlob = (typeof Blob === 'function') && (newXhr.response instanceof Blob)
                        ? newXhr.response
                        : null;
                    resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: null });
                }
            };
            newXhr.open(method, requestUrl, async, user, password);
            newXhr.ontimeout = function handleTimeout() {
                var error = new Error('timeout exceeded');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            newXhr.onerror = function handleError() {
                var error = new Error('network error');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            // Handle browser request cancellation (as opposed to a manual cancellation)
            newXhr.onabort = function handleAbort() {
                var error = new Error('request aborted');
                resolve({ status: status, headers: headers, responseText: responseText, responseJson: responseJson, responseBuffer: responseBuffer, responseBlob: responseBlob, error: error });
            };
            Object.entries(requestInfo.headers || {}).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                newXhr.setRequestHeader(key, val);
            });
            newXhr.send(requestInfo.rawBody); // raw body
        });
    };
    /**
     * Make mock request.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    XMLHttpRequestInterceptor.prototype.doMockRequest = function (xhr, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var isBypassed, mockItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isBypassed = false;
                        mockItem = xhr.mockItem;
                        if (!(mockItem.delay && mockItem.delay > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.sleep)(+mockItem.delay)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doMockResponse(xhr, remoteResponse)];
                    case 2:
                        isBypassed = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.doMockResponse(xhr, remoteResponse)];
                    case 4:
                        isBypassed = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, isBypassed];
                }
            });
        });
    };
    /**
     * Make mock response.
     * @param {XMLHttpRequestInstance} xhr
     * @param {RemoteResponse | null} remoteResponse
     */
    XMLHttpRequestInterceptor.prototype.doMockResponse = function (xhr, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var mockItem, requestInfo, now, body, _a, spent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mockItem = xhr.mockItem, requestInfo = xhr.requestInfo;
                        now = Date.now();
                        if (!remoteResponse) return [3 /*break*/, 2];
                        return [4 /*yield*/, mockItem.sendBody(requestInfo, remoteResponse)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, mockItem.sendBody(requestInfo)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        body = _a;
                        if (body instanceof bypass_1.default) {
                            if (remoteResponse) {
                                throw new Error('[http-request-mock] A request which is marked by @remote tag cannot be bypassed.');
                            }
                            return [2 /*return*/, true];
                        }
                        spent = (Date.now() - now) + (mockItem.delay || 0);
                        xhr.mockResponse = body;
                        this.mocker.sendResponseLog(spent, body, xhr.requestInfo, mockItem);
                        this.sendResult(xhr);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#event_handlers
     * Call some necessary callbacks if specified. Trigger some necessary events.
     * 'onreadystatechange' as a property of the XMLHttpRequest instance is supported in all browsers.
     * Since then, a number of additional on* event handler properties have been implemented in various
     * browsers (onload, onerror, onprogress, etc.). See Using XMLHttpRequest. More recent browsers,
     * including Firefox, also support listening to the XMLHttpRequest events via standard addEventListener() APIs
     * in addition to setting on* properties to a handler function.
     * @param {XMLHttpRequest} xhr
     */
    XMLHttpRequestInterceptor.prototype.sendResult = function (xhr) {
        var isEventReady = typeof Event !== 'undefined' && typeof xhr.dispatchEvent === 'function';
        if (typeof xhr.onreadystatechange === 'function') {
            xhr.onreadystatechange(this.event('readystatechange'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('readystatechange'));
        }
        if (typeof xhr.onload === 'function') {
            xhr.onload(this.event('load'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('load'));
        }
        if (typeof xhr.onloadend === 'function') {
            xhr.onloadend(this.event('loadend'));
        }
        else if (isEventReady) {
            xhr.dispatchEvent(new Event('loadend'));
        }
    };
    XMLHttpRequestInterceptor.prototype.event = function (type) {
        return {
            type: type,
            target: null,
            currentTarget: null,
            eventPhase: 0,
            bubbles: false,
            cancelable: false,
            defaultPrevented: false,
            composed: false,
            timeStamp: 294973.8000000119,
            srcElement: null,
            returnValue: true,
            cancelBubble: false,
            path: [],
            NONE: 0,
            CAPTURING_PHASE: 0,
            AT_TARGET: 0,
            BUBBLING_PHASE: 0,
            composedPath: function () { return []; },
            initEvent: function () { return void (0); },
            preventDefault: function () { return void (0); },
            stopImmediatePropagation: function () { return void (0); },
            stopPropagation: function () { return void (0); },
            isTrusted: false,
            lengthComputable: false,
            loaded: 1,
            total: 1
        };
    };
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     * Logic of intercepting XMLHttpRequest.getAllResponseHeaders method.
     */
    XMLHttpRequestInterceptor.prototype.interceptGetAllResponseHeaders = function () {
        var original = this.xhr.getAllResponseHeaders;
        Object.defineProperty(this.xhr, 'getAllResponseHeaders', {
            get: function () {
                var _this = this;
                return function () {
                    if (_this.isMockRequest) {
                        return Object.entries(__assign(__assign({}, _this.mockItem.headers), { 'x-powered-by': 'http-request-mock' }))
                            .map(function (_a) {
                            var key = _a[0], val = _a[1];
                            return key.toLowerCase() + ': ' + val;
                        })
                            .join('\r\n');
                    }
                    return original.call(_this);
                };
            }
        });
        return this;
    };
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/getResponseHeader
     * Logic of intercepting XMLHttpRequest.getResponseHeader method.
     */
    XMLHttpRequestInterceptor.prototype.interceptGetResponseHeader = function () {
        var original = this.xhr.getResponseHeader;
        Object.defineProperty(this.xhr, 'getResponseHeader', {
            get: function () {
                var _this = this;
                return function (field) {
                    if (_this.isMockRequest) {
                        if (/^x-powered-by$/i.test(field)) {
                            return 'http-request-mock';
                        }
                        var item = Object.entries(_this.mockItem.headers).find(function (_a) {
                            var key = _a[0];
                            return key.toLowerCase() === field;
                        });
                        return item ? item[1] : null;
                    }
                    return original.call(_this, field);
                };
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.interceptSetRequestHeader method.
     */
    XMLHttpRequestInterceptor.prototype.interceptSetRequestHeader = function () {
        var original = this.xhr.setRequestHeader;
        Object.defineProperty(this.xhr, 'setRequestHeader', {
            get: function () {
                var _this = this;
                return function (header, value) {
                    if (_this.isMockRequest) {
                        _this.requestInfo.headers = _this.requestInfo.headers || {};
                        _this.requestInfo.header = _this.requestInfo.header || {};
                        _this.requestInfo.headers[header] = value;
                        _this.requestInfo.header[header] = value;
                        return;
                    }
                    return original.call(_this, header, value);
                };
            }
        });
        return this;
    };
    /**
     * Get getter function by key.
     * @param {string} key
     */
    XMLHttpRequestInterceptor.prototype.getGetter = function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(this.xhr, key);
        if (descriptor) {
            return descriptor.get;
        }
        // when XMLHttpRequest is not a standard implement.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.xhr[key];
    };
    /**
     * Logic of intercepting XMLHttpRequest.readyState getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
     */
    XMLHttpRequestInterceptor.prototype.interceptReadyState = function () {
        var original = this.getGetter('readyState');
        Object.defineProperty(this.xhr, 'readyState', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return 1; // OPENED
                    return 4;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.status getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status
     */
    XMLHttpRequestInterceptor.prototype.interceptStatus = function () {
        var original = this.getGetter('status');
        Object.defineProperty(this.xhr, 'status', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return 0;
                    return this.mockItem.status;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.statusText getter.
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText
     */
    XMLHttpRequestInterceptor.prototype.interceptStatusText = function () {
        var original = this.getGetter('statusText');
        Object.defineProperty(this.xhr, 'statusText', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return '';
                    return config_1.HTTPStatusCodes[this.mockItem.status] || '';
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseText getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseText = function () {
        var original = this.getGetter('responseText');
        Object.defineProperty(this.xhr, 'responseText', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return '';
                    var data = this.mockResponse;
                    return typeof data === 'string' ? data : JSON.stringify(data);
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.response getter.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * When setting responseType to a particular value, the author should make
     * sure that the server is actually sending a response compatible with that
     * format. If the server returns data that is not compatible with the
     * responseType that was set, the value of response will be null.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponse = function () {
        var original = this.getGetter('response');
        Object.defineProperty(this.xhr, 'response', {
            get: function () {
                if (this.isMockRequest) {
                    if (this.mockResponse instanceof NotResolved)
                        return null;
                    var type = this.responseType;
                    // An empty responseType string is the same as "text", the default type.
                    if (type === 'text' || type === '') {
                        return this.responseText;
                    }
                    // The response is a JavaScript ArrayBuffer containing binary data.
                    if (type === 'arraybuffer' && typeof ArrayBuffer === 'function') {
                        return (this.mockResponse instanceof ArrayBuffer) ? this.mockResponse : null;
                    }
                    // The response is a Blob object containing the binary data.
                    if (type === 'blob' && typeof Blob === 'function') {
                        return (this.mockResponse instanceof Blob) ? this.mockResponse : null;
                    }
                    // The response is an HTML Document or XML XMLDocument, as appropriate based on the MIME type of
                    // the received data. See HTML in XMLHttpRequest to learn more about using XHR to fetch HTML content.
                    if (type === 'document' && (typeof Document === 'function' || typeof XMLDocument === 'function')) {
                        return ((this.mockResponse instanceof Document) || (this.mockResponse instanceof XMLDocument))
                            ? this.mockResponse
                            : null;
                    }
                    // The response is a JavaScript object created by parsing the contents of received data as JSON.
                    if (type === 'json') {
                        if (typeof this.mockResponse === 'object') {
                            return this.mockResponse;
                        }
                        if (typeof this.mockResponse === 'string') {
                            try {
                                return JSON.parse(this.mockResponse);
                            }
                            catch (err) { // eslint-disable-line
                                // console.warn('The mock response is not compatible with the responseType json: ' + err.message);
                                return null;
                            }
                        }
                        return null;
                    }
                    return this.mockResponse;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseURL getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseURL = function () {
        var original = this.getGetter('responseURL');
        Object.defineProperty(this.xhr, 'responseURL', {
            get: function () {
                if (this.isMockRequest) {
                    return this.requestInfo.url;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    /**
     * Logic of intercepting XMLHttpRequest.responseXML getter.
     */
    XMLHttpRequestInterceptor.prototype.interceptResponseXML = function () {
        var original = this.getGetter('responseXML');
        Object.defineProperty(this.xhr, 'responseXML', {
            get: function () {
                if (this.isMockRequest) {
                    return this.responseType === 'document' ? this.response : null;
                }
                return typeof original === 'function' ? original.call(this) : original;
            }
        });
        return this;
    };
    return XMLHttpRequestInterceptor;
}(base_1.default));
exports["default"] = XMLHttpRequestInterceptor;
var NotResolved = /** @class */ (function () {
    function NotResolved() {
    }
    return NotResolved;
}());


/***/ }),

/***/ 137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var bypass_1 = __importDefault(__webpack_require__(719));
var utils_1 = __webpack_require__(391);
var MockItem = /** @class */ (function () {
    /**
     * Format specified mock item.
     * @param {MockItemInfo} mockItem
     * @returns false | MockItemInfo
     */
    function MockItem(mockItem) {
        var _a;
        this.deProxy = false; // Use this option to make the mock use case run in the browser instead of nodejs.
        if (!mockItem.url || (typeof mockItem.url !== 'string' && !(mockItem.url instanceof RegExp))) {
            return;
        }
        this.url = mockItem.url;
        this.method = /^(get|post|put|patch|delete|head|any)$/i.test(mockItem.method || '')
            ? (_a = mockItem.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()
            : 'ANY';
        var reqHeaders = mockItem.requestHeaders;
        var headers = mockItem.headers || mockItem.header;
        this.header = headers && typeof headers === 'object' ? headers : {};
        this.headers = headers && typeof headers === 'object' ? headers : {};
        this.requestHeaders = reqHeaders && typeof reqHeaders === 'object' ? reqHeaders : {};
        this.delay = mockItem.delay !== undefined && /^\d{0,15}$/.test(mockItem.delay + '') ? (+mockItem.delay) : 0;
        this.times = mockItem.times !== undefined && /^-?\d{0,15}$/.test(mockItem.times + '') ? +mockItem.times : Infinity;
        this.status = mockItem.status && /^[1-5][0-9][0-9]$/.test(mockItem.status + '') ? +mockItem.status : 200;
        this.disable = (mockItem.disable && /^(yes|true|1)$/.test(mockItem.disable) ? 'YES' : 'NO');
        this.setBody(mockItem);
        this.transformResponse = mockItem.transformResponse;
        var isUrlLiked = /^((get|post|put|patch|delete|head)\s+)?https?:\/\//i.test(mockItem.remote);
        var isDollarUrl = mockItem.remote === '$url';
        if (mockItem.remote && (isUrlLiked || isDollarUrl)) {
            this.remote = mockItem.remote;
        }
        else if (mockItem.remote) {
            throw new Error('Invalid @remote config. Valid @remote examples: http://x.com/, GET http://x.com, $url');
        }
        this.deProxy = !!mockItem.deProxy;
        this.key = "".concat(this.url, "-").concat(this.method);
    }
    MockItem.prototype.setBody = function (mockItem) {
        var body;
        if ('body' in mockItem) {
            body = mockItem.body;
        }
        else if ('response' in mockItem) {
            body = mockItem.response;
        }
        else {
            body = '';
        }
        this.body = body;
    };
    MockItem.prototype.bypass = function () {
        return new bypass_1.default;
    };
    MockItem.prototype.sendBody = function (requestInfo, remoteResponse) {
        if (remoteResponse === void 0) { remoteResponse = null; }
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(0, utils_1.isPromise)(this.body)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.body];
                    case 1:
                        data = _b.sent();
                        this.body = (0, utils_1.isImported)(data) ? data.default : data;
                        _b.label = 2;
                    case 2:
                        if (!(typeof this.body === 'function')) return [3 /*break*/, 7];
                        if (!remoteResponse) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.body.bind(this)(remoteResponse, requestInfo, this)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.body.bind(this)(requestInfo, this)];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        body = _a;
                        return [3 /*break*/, 8];
                    case 7:
                        body = this.body;
                        _b.label = 8;
                    case 8: return [2 /*return*/, body];
                }
            });
        });
    };
    MockItem.prototype.getRemoteInfo = function (requestUrl) {
        if (!this.remote)
            return false;
        var arr = this.remote.split(/(\s)/);
        var method = '';
        var url = this.remote;
        if (/^(get|post|put|patch|delete|head)$/i.test(arr[0])) {
            method = arr[0];
            url = arr.slice(2).join('');
        }
        var query = (0, utils_1.getQuery)(requestUrl);
        for (var key in query) {
            var queryString = Array.isArray(query[key]) ? query[key].join(',') : query[key];
            url = url.replace(new RegExp('\\$query\.' + key, 'g'), queryString);
        }
        url = url.replace(/\$query/g, (0, utils_1.queryObject2String)(query));
        url = url === '$url' ? requestUrl : url;
        return { method: method, url: url };
    };
    return MockItem;
}());
exports["default"] = MockItem;


/***/ }),

/***/ 819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(391);
var config_1 = __webpack_require__(542);
var mock_item_1 = __importDefault(__webpack_require__(137));
var Mocker = /** @class */ (function () {
    function Mocker(proxyServer) {
        var _a;
        if (proxyServer === void 0) { proxyServer = ''; }
        this.disabled = false;
        this.log = false;
        this.proxyServer = '';
        this.proxyMode = 'none';
        if (Mocker.instance) {
            return Mocker.instance;
        }
        if (/^(matched@localhost:\d+)|(middleware@\/)$/.test(proxyServer)) {
            _a = proxyServer.split('@'), this.proxyMode = _a[0], this.proxyServer = _a[1];
        }
        Mocker.instance = this;
        this.log = !(0, utils_1.isNodejs)();
        this.mockConfigData = {};
        this.groupLog([['[http-request-mock] is %cloaded.', 'color:inherit;font-weight:bold;']]);
    }
    Mocker.getInstance = function () {
        return new Mocker();
    };
    /**
     * Set global mock data configuration.
     * @param {object} mockConfigData
     */
    Mocker.prototype.setMockData = function (mockConfigData) {
        for (var key in mockConfigData) {
            this.mock(mockConfigData[key]);
        }
        return this;
    };
    /**
     * Add an mock item to global mock data configuration.
     * @param {string} key
     * @param {MockItem} val
     */
    Mocker.prototype.addMockItem = function (key, val) {
        this.mockConfigData[key] = val;
        return this;
    };
    /**
     * Reset global mock data configuration.
     */
    Mocker.prototype.reset = function () {
        this.mockConfigData = {};
        this.sendMsgToProxyServer('reset');
        return this;
    };
    /**
     * Enable mock function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.enable = function () {
        this.disabled = false;
        this.sendMsgToProxyServer('enable');
        this.groupLog([['[http-request-mock] is %cenabled.', 'color:green;font-weight:bold;']]);
        return this;
    };
    /**
     * Disable mock function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.disable = function () {
        this.disabled = true;
        this.sendMsgToProxyServer('disable');
        this.groupLog([['[http-request-mock] is %cdisabled.', 'color:red;font-weight:bold;']]);
        return this;
    };
    /**
     * Send a message to proxy server if in a proxy mode.
     * @param {string} msg
     */
    Mocker.prototype.sendMsgToProxyServer = function (msg) {
        if (msg === void 0) { msg = ''; }
        if (!this.proxyServer) {
            return;
        }
        if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
            return;
        }
        if (typeof window !== 'undefined' &&
            Object.prototype.toString.call(window) === '[object Window]' &&
            typeof window.fetch === 'function') {
            window.fetch("http://".concat(this.proxyServer, "/__hrm_msg__/") + encodeURIComponent(msg));
        }
    };
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.disableLog = function () {
        this.log = false;
        this.sendMsgToProxyServer('disableLog');
        return this;
    };
    /**
     * Disable logs function temporarily.
     * Not available in proxy mode.
     */
    Mocker.prototype.enableLog = function () {
        this.log = true;
        this.sendMsgToProxyServer('enableLog');
        return this;
    };
    /**
     * Note: this method is only for a nodejs environment(test environment).
     * Use a mock file & add it to global mock data configuration.
     * @param {string} file
     */
    Mocker.prototype.use = function (file) {
        throw new Error("Can not use mock case: ".concat(file, ", only for a nodejs environment"));
    };
    /**
     * Check specified mock item & add it to global mock data configuration.
     * @param {MockItem} mockItem
     * @returns false | MockItem
     */
    Mocker.prototype.mock = function (mockItemInfo) {
        if (!(0, utils_1.isObject)(mockItemInfo)) {
            throw new Error('Invalid mock item, a valid mock item must be an object.');
        }
        var mockItem = new mock_item_1.default(mockItemInfo);
        if (!mockItem.key)
            return false;
        this.addMockItem(mockItem.key, mockItem);
        return mockItem;
    };
    /**
     * Make a mock item that matches an HTTP GET request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.get = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'GET', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP POST request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.post = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'POST', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP PUT request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.put = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'PUT', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP PATCH request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.patch = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'PATCH', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP DELETE request.
     * @param {RegExp | String} url
     * @param {any} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.delete = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'DELETE', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
     * Warning: A response to a HEAD method should not have a body.
     * If it has one anyway, that body must be ignored, any representation
     * headers that might describe the erroneous body are instead assumed
     * to describe the response which a similar GET request would have received.
     *
     * Make a mock item that matches an HTTP HEAD request.
     * @param {RegExp | String} url
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.head = function (url, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'HEAD', body: '', delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Make a mock item that matches an HTTP GET, POST, PUT, PATCH, DELETE or HEAD request.
     * @param {RegExp | String} url
     * @param {unknown} body
     * @param {MockItemExt} opts {
     *    @param {number} delay
     *    @param {number} status
     *    @param {object} header
     *    @param {object} headers
     *    @param {number} times
     * }
     */
    Mocker.prototype.any = function (url, body, opts) {
        if (opts === void 0) { opts = {
            delay: 0,
            status: 200,
            times: Infinity,
            header: {},
            headers: {}
        }; }
        var delay = opts.delay, status = opts.status, times = opts.times, header = opts.header, headers = opts.headers;
        this.mock({ url: url, method: 'ANY', body: body, delay: delay, status: status, header: header, headers: headers, times: times });
        return this;
    };
    /**
     * Check whether the specified request url matches a defined mock item.
     * If a match is found, return the matched mock item, otherwise a null is returned.
     * @param {string} reqUrl
     * @param {string} reqMethod
     * @return null | MockItem
     */
    Mocker.prototype.matchMockItem = function (reqUrl, reqMethod) {
        if (this.disabled) {
            return null;
        }
        var requestMethod = (reqMethod || 'GET').toUpperCase();
        var items = Object.values(this.mockConfigData).filter(function (_a) {
            var disable = _a.disable, times = _a.times, method = _a.method;
            var verb = String(method).toUpperCase();
            return disable !== 'YES' && (times === undefined || times > 0) && (verb === 'ANY' || verb === requestMethod);
        });
        for (var i = 0; i < 2; i++) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var info = items_1[_i];
                try {
                    if ((info.url instanceof RegExp) && info.url.test(reqUrl)) {
                        return info;
                    }
                    var infoUrl = reqUrl.indexOf('//') === 0
                        // for the request urls which without http protocol
                        ? String(info.url).replace(/^https?:/ig, '')
                        : String(info.url);
                    // [whole matching] takes precedence over partial matching
                    if (i === 0 && reqUrl === infoUrl) {
                        return info;
                    }
                    // whole matching takes precedence over [partial matching]
                    if (i === 1 && reqUrl.indexOf(infoUrl) !== -1) {
                        return info;
                    }
                }
                catch (e) {
                    // ignore match error, normally, user doesn't care it.
                }
            }
        }
        return null;
    };
    /**
     * Set group logs
     * @param {Logs[]} logs
     * @returns
     */
    Mocker.prototype.groupLog = function (logs) {
        if (!this.log)
            return;
        if (typeof console.groupCollapsed !== 'function')
            return;
        if (typeof console.groupEnd !== 'function')
            return;
        if (Array.isArray(logs[0])) {
            console.groupCollapsed.apply(console, logs[0]);
        }
        else {
            console.groupCollapsed(logs[0]);
        }
        for (var i = 1; i < logs.length; i++) {
            if (Array.isArray(logs[i])) {
                console.log.apply(console, logs[i]);
            }
            else {
                console.log(logs[i]);
            }
        }
        console.groupEnd();
    };
    Mocker.prototype.sendResponseLog = function (spent, body, requestInfo, mockItem) {
        var logs = [
            [
                '[http-request-mock] %s %s %s (%c%s%c)',
                "".concat((0, utils_1.currentTime)()),
                requestInfo.method,
                requestInfo.url,
                ('color:' + (mockItem.status < 300 ? 'green' : 'red')),
                mockItem.status,
                'color:inherit',
            ],
            ['Request: ', requestInfo],
            ['Response: ', {
                    body: body,
                    spent: spent,
                    headers: __assign(__assign({}, mockItem.headers), { 'x-powered-by': 'http-request-mock' }),
                    status: mockItem.status,
                    statusText: config_1.HTTPStatusCodes[mockItem.status] || ''
                }],
            // ['MockItem: ', mockItem]
        ];
        if ((0, utils_1.isNodejs)()) { // less information for nodejs
            var url = mockItem.url, method = mockItem.method, delay = mockItem.delay, times = mockItem.times, status_1 = mockItem.status, disable = mockItem.disable;
            logs[3] = ['MockItem:', { url: url, method: method, delay: delay, times: times, status: status_1, disable: disable }];
        }
        else {
            logs[3] = ['MockItem: ', mockItem];
        }
        this.groupLog(logs);
    };
    return Mocker;
}());
exports["default"] = Mocker;


/***/ }),

/***/ 612:
/***/ ((module) => {

/**
 * Set the specified mockData into localeStorage cache when it changes.
 * In proxy mode, cached data will be reset after the server restarts.
 *
 * @param {string} cacheKey
 * @param {object | array} mockData
 */
module.exports = function cacheWrapper(cacheKey, mockData) {
  if (typeof localStorage === 'undefined') {
    return mockData;
  }

  const isObjOrArr = (obj) => {
    return {}.toString.call(obj) === '[object Object]' || {}.toString.call(obj) === '[object Array]';
  };

  if (!cacheKey || typeof cacheKey !== 'string') {
    throw new Error('http-request-mock cacheWrapper: The [cacheKey] must be a non-empty string.');
  }
  if (!isObjOrArr(mockData)) {
    throw new Error('http-request-mock cacheWrapper: The [mockData] must be an object or array.');
  }
  if (typeof Proxy !== 'function' || typeof Reflect !== 'object') {
    return mockData;
  }

  let timer = null;
  const save = () => {
    clearTimeout(timer);
    timer = setTimeout(() => localStorage.setItem(cacheKey, JSON.stringify(result)), 10);
  };
  const wrap = (obj, handler) => {
    return isObjOrArr(obj) && !obj.__proxy__ ? new Proxy(obj, handler) : obj;
  };
  const handler = {
    get(target, key, receiver) {
      return key === '__proxy__' ? true : wrap(Reflect.get(target, key, receiver), handler);
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, wrap(value, handler), receiver);
      save();
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key);
      save();
      return res;
    },
  };

  const cache = (cacheKey in localStorage);
  const result = wrap(cache ? JSON.parse(localStorage.getItem(cacheKey)) : mockData, handler);
  save();
  return result;
};


/***/ }),

/***/ 975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  rand,
  randAvatar,
  randBoolean,
  randCity,
  randEmail,
  randEmailProvider,
  randFirstName,
  randFloat,
  randFullAddress,
  randFullName,
  randIp,
  randLastName,
  randNumber,
  randPhoneNumber,
  randSentence,
  randState,
  randStreetAddress,
  randText,
  randUrl,
  randUuid,
  randWord
} = __webpack_require__(405);

const randArr = rand;
const cache = {};
const chinese = getChineseInfo();
const twoDigits = num => num < 10 ? `0${num}` : `${num}`;

/**
 * Export some frequently-used methods.
 */
module.exports = {
  chinese,

  /**
   * Return a random integer.
   * @param {number} min
   * @param {number} max
   */
  rand(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return randNumber({ min, max });
  },

  /**
   * Create an array containing a range of elements
   * @param {number} start
   * @param {number} stop
   * @param {number} step
   */
  range(start = 0, stop = 10, step = 1) {
    const res = [];
    for(let i = start; i < stop; i += step) {
      res.push(i);
    }
    return res;
  },

  /**
   * The default likelihood of success (returning true) is 50%. Can optionally specify the likelihood in percent.
   * chance.bool({likelihood: 30}): In this case only a 30% likelihood of true, and a 70% likelihood of false.
   */
  bool() {
    return randBoolean();
  },

  /**
   * By default it will return a string with random character from the specified pool.
   * @param {string} pool
   */
  char(pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_') {
    return pool[this.rand(0, pool.length - 1)];
  },

  /**
   * Return a random string. By default it will return a string with random length of 5-20 characters
   * and will contain any of the following characters.
   * @param {number} min
   * @param {number} max
   * @param {string} pool
   */
  string(min = 5, max = 20, pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_') {
    return [...Array(this.rand(min, max))].map(() => this.char(pool)).join('');
  },

  /**
   * Return a random floating point number. By default it will return a fixed number of at most 2 digits after the decimal.
   * @param {number} min
   * @param {number} max
   * @param {number} fraction
   */
  float(min = 0, max = Number.MAX_SAFE_INTEGER, fraction = 2) {
    return randFloat({ min, max, fraction });
  },

  /**
   * Return a random integer. range: -9007199254740991 to 9007199254740991
   * @param {number} min
   * @param {number} max
   */
  integer(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return randNumber({ min, max });
  },


  /**
   * Return a random sentence populated by semi-pronounceable random (nonsense) words.
   * Default is a sentence with a random number of words from 12 to 18.
   * @param {boolean} cn
   */
  sentence(cn = false) {
    return cn ? randArr(chinese.words, { length: this.rand(8, 18) }).join('') : randSentence();
  },

  /**
   * Return a random text words.
   * Default is a sentence with a random number of words from 2 to 8.
   * @param {boolean} cn
   */
  text(cn = false) {
    return cn ? randArr(chinese.words, { length: this.rand(3, 8) }).join('') : randText();
  },

  /**
   * Return a semi-pronounceable random (nonsense) word.
   * @param {boolean} cn
   */
  word(cn = false) {
    return cn ? randArr(chinese.words) : randWord();
  },

  /**
   * Generate a random user name.
   * @param {boolean} cn
   */
  name(cn = false) {
    if (cn) {
      return randArr(chinese.firstNames) + randArr(chinese.lastNames, { length: this.rand(1, 2)}).join('');
    }
    return randFullName({ withAccents: false });
  },

  /**
   * Generate a random first name.
   * @param {boolean} cn
   */
  firstName(cn = false) {
    return cn ? randArr(chinese.firstNames) : randFirstName({ withAccents: false });
  },

  /**
   * Generate a random last name.
   * @param {boolean} cn
   */
  lastName(cn = false) {
    return cn ? randArr(chinese.lastNames, { length: this.rand(1, 2)}).join('') : randLastName({ withAccents: false });
  },

  /**
   * Generate a random gender.
   * @param {string[]} pool
   */
  gender(pool = ['male', 'female']) {
    return this.pick(pool);
  },

  /**
   * Return a random province.
   * @param {boolean} cn
   */
  province(cn = false) {
    return cn ? randArr(Object.keys(chinese.cities)) : randState();
  },

  /**
   * Return a random city.
   * @param {boolean} cn
   */
  city(cn = false) {
    return cn ? randArr(randArr(Object.values(chinese.cities)).split(',')) : randCity();
  },

  /**
   * Return a random street.
   * @param {boolean} cn
   */
  street(cn = false) {
    if (cn) {
      return randArr(chinese.area) + randArr(chinese.words, { length: this.rand(2, 3)}).join('')+'街';
    }
    return randStreetAddress();
  },

  /**
   * Return a random address.
   * @param {boolean} cn
   */
  address(cn = false) {
    if (cn) {
      return [
        randArr(chinese.area),
        randArr(chinese.words, { length: this.rand(2, 3)}).join(''),
        '路',
        this.rand(10, 999),
        '号'
      ].join('');
    }
    return randFullAddress({ includeCounty: false, includeCountry: false });
  },

  /**
   * Return a random avatar.
   * @param {number} size
   */
  avatar(size = 100) {
    return randAvatar({ size });
  },

  /**
   * Return a random image.
   * @param {string} size default to 640x480
   * @param {string} type default to any
   */
  image(size = '640x480', type = 'any') {
    if (!/^\w+x\d+$/i.test(size)) {
      throw new Error('Invalid size format.');
    }
    const category = ['animals', 'arch', 'nature', 'people', 'tech', 'any'].includes(type) ? type : 'any';

    const [width, height] = size.toLowerCase().split('x');
    return `https://placeimg.com/${width}/${height}/${category}`;
  },

  /**
   * Return a random email with a random domain.
   * @param {string} provider
   * @param {string} suffix
   */
  email(provider = randEmailProvider(), suffix = 'com') {
    return randEmail({ provider, suffix, nameSeparator: '_'  }).replace('_', this.rand(1, 3) === 1 ? '_' : '');
  },

  /**
   * Return a random IP Address.
   */
  ip(){
    return randIp();
  },

  /**
   * Generate a random phone.
   * @param {string} format
   */
  phone(format = '1##########') {
    return format === 'random' ? randPhoneNumber() : format.replace(/#/g, () => this.rand(0, 9));
  },

  /**
   * Generate a random string with specified format.
   * Meta chars:
   *    '#' for [0-9]
   *    '!' for [1-9]
   *    '@' for [a-zA-Z]
   *    '$' for [~!@#$%^&*()_+;'",<>/?\\-]
   *    '%' for [a-zA-Z~!@#$%^&*()_+;'",<>/?\\-]
   * Quantity chars:
   *    '*' for a random number from 0 to 10
   *    '+' for a random number from 1 to 10
   *    '?' for a random number from 0 to 1
   * @param {string} format
   */
  format(format) {
    if (typeof format !== 'string') {
      throw new Error('Expect [format] to be a string.');
    }
    const replacer = (match) => {
      const [char, quantity = ''] = [match[0], match.slice(1)];
      const fun = {
        '#': () => this.rand(0, 9),
        '!': () => this.rand(1, 9),
        '@': () => this.string(1, 1, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        '$': () => this.string(1, 1, '~!@#$%^&*()_-+;\'",<>/?\\'),
        '%': () => this.string(1, 1, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_-+;\'",<>/?\\'),
      }[char];
      const len = /^\d+$/.test(quantity) ? +quantity : {
        '*': this.rand(0, 10),
        '+': this.rand(1, 10),
        '?': this.rand(0, 1),
        '': 1,
      }[quantity];
      return [...Array(len)].map(() => fun()).join('');
    };
    return format.replace(/[#!@]([+*?]|\d+)?/g, replacer);
  },

  /**
   * Return a random url.
   * @param {string | undefined} domain
   * @param {string} protocol
   */
  url(){
    return randUrl().replace(/\/+$/g, '') + '/' + randWord();
  },

  /**
   * Return a random guid.
   */
  guid(){
    return randUuid();
  },

  /**
   * Return a random datetime.
   * @param {number} timestamp
   * @param {string} dateFormat
   * @param {string} timeFormat
   */
  datetime(timestamp, dateFormat = 'YYYY-MM-DD', timeFormat = 'HH:mm:ss') {
    return this.date(timestamp, dateFormat) + ' ' + this.time(timestamp, timeFormat);
  },

  /**
   * Return a random date.
   * @param {number} timestamp
   * @param {string} format default YYY-MM-DD
   */
  date(timestamp, format = 'YYYY-MM-DD') {
    const time = new Date(timestamp || Date.now() - this.rand(0, 1000) * 86400000);
    return format
      .replace(/YYYY/g, time.getFullYear())
      .replace(/MM/g, twoDigits(time.getMonth()+1))
      .replace(/DD/g, twoDigits(time.getDate()));
  },

  /**
   * Return a random time.
   * @param {number} timestamp
   * @param {string} format default HH:mm:ss
   */
  time(timestamp, format = 'HH:mm:ss') {
    const time = new Date(timestamp || Date.now() - this.rand(0, 86400000));
    return format
      .replace(/HH/g, twoDigits(time.getHours()))
      .replace(/mm/g, twoDigits(time.getMinutes()))
      .replace(/ss/g, twoDigits(time.getSeconds()));
  },



  /**
   * Return some bytes.
   * @param {string} str
   */
  bytes(str = '') {
    if (typeof ArrayBuffer === 'function' && typeof Uint8Array === 'function') {
      const chars = str || this.string(5, 10);
      const buf = new ArrayBuffer(chars.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < chars.length; i++) {
        view[i] = chars.charCodeAt(i);
      }
      return buf;
    }
    return (str || this.string(5, 10)).split('').map(c => c.charCodeAt(0));
  },

  /**
   * Given an array, pick some random elements.
   * @param {any[]} arr
   * @param {number} quantity
   */
  pick(arr, quantity = 1) {
    return quantity === 1 ? randArr(arr) : randArr(arr, { length: quantity });
  },

  /**
   * Return an auto-incremented id.
   * @param {string} group
   * @param {number} base
   */
  incrementId(group = 'default', base = 1) {
    if (typeof group === 'number' && typeof base === 'string') {
      [group, base] = [base, group];
    }
    cache.incrementId = cache.incrementId || {};
    cache.incrementId[group || 'default'] = cache.incrementId[group] || base;
    return cache.incrementId[group]++;
  },

  /**
   * Given an array, returns a value from it in turn
   * @param {any[]} arr
   * @param {string} group
   */
  rotate(arr, group = 'default') {
    if (!arr.length) {
      throw new Error('`arr` can not be empty.');
    }
    cache.rotate = cache.rotate || {};
    cache.rotate[group || 'default'] = cache.rotate[group] || 0;

    return arr[(cache.rotate[group]++)%arr.length];
  },

  /**
   * The shadow of 'faker' which returns a representation of a faker method invocation.
   * Example:
   *    const faker = require('http-request-mock/plugin/faker.js').shadow;
   *    console.log(faker.integer(1, 10));
   *    The codes above will output: "faker.integer(1, 10)";
   */
  get shadow() {
    const inteceptor = (instance, key) => new Proxy(instance, {
      // eslint-disable-next-line
      apply: function(_, __, argumentsList) {
        const args = argumentsList.map(arg => JSON.stringify(arg)).join(', ');
        return `faker.${key}(${args})`;
      }
    });
    const shadow = new Proxy(this, {
      get(target, key) {
        return typeof target[key] === 'function' ? inteceptor(target[key], key) : target[key];
      },
    });
    return shadow;
  }
};

function getChineseInfo () {
  const words = (
    '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经'+
    '十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间'+
    '样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入'+
    '常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光'+
    '门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至'+
    '达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非'+
    '验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养'+
    '易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞'
  ).split('');

  const firstNames = (
    '王李张刘陈杨黄吴赵周徐孙马朱胡林郭何高罗郑梁谢宋唐许邓冯韩曹曾彭萧蔡潘田董顾毛郝龚邵万钱严赖覃洪武贺' +
    '袁于余叶蒋杜苏魏程吕丁沈任姚卢傅钟姜崔谭廖范汪陆莫孔金石戴贾韦夏邱方侯邹熊孟秦白江阎薛尹段雷黎史龙陶'
  ).split('');

  const lastNames = (
    '绍齐博文梓晨胤祥瑞霖明哲天翊凯瑞健雄耀杰潇然子涵越彬钰轩智辉致远俊驰雨泽驰烨磊晟睿文昊修洁黎昕远航旭尧'+
    '鸿涛伟祺荣轩越泽浩宇瑾瑜皓轩擎苍擎宇志泽子轩睿渊弘文哲瀚雨涛泽楷瑞建辉晋鹏天磊绍辉泽洋鑫磊鹏煊昊强伟宸'+
    '博超君浩子骞鹏涛炎彬鹤轩越彬风华靖琪明辉伟诚琪明轩健柏修杰志泽弘文峻熙嘉懿煜城懿轩烨伟苑博伟泽熠彤鸿煊'+
    '博涛烨霖烨华煜祺智宸正豪昊然明浩杰立诚立轩立辉峻熙弘文熠彤鸿煊烨霖哲瀚鑫鹏昊天思聪展鹏笑愚志强炫明雪松'+
    '思源智渊思淼晓啸航天宇浩然文轩鹭洋振家乐驹晓博文博昊焱立果金鑫锦程嘉熙鹏飞子默思远浩轩语堂聪健明文果思鹏'
  ).split('');

  const cities = {
    河北省: '石家庄市,唐山市,秦皇岛市,邯郸市,邢台市,保定市,张家口市,承德市,沧州市,廊坊市,衡水市',
    山西省: '太原市,大同市,阳泉市,长治市,晋城市,朔州市,晋中市,运城市,忻州市,临汾市,吕梁市',
    内蒙古自治区: '呼和浩特市,包头市,乌海市,赤峰市,通辽市,鄂尔多斯市,呼伦贝尔市,巴彦淖尔市,乌兰察布市',
    辽宁省: '沈阳市,大连市,鞍山市,抚顺市,本溪市,丹东市,锦州市,营口市,阜新市,辽阳市,盘锦市,铁岭市,朝阳市,葫芦岛市',
    吉林省: '长春市,吉林市,四平市,辽源市,通化市,白山市,松原市,白城市',
    黑龙江省: '哈尔滨市,齐齐哈尔市,黑河市,大庆市,伊春市,鹤岗市,佳木斯市,双鸭山市,七台河市,鸡西市,牡丹江市,绥化市',
    江苏省: '南京市,徐州市,连云港市,宿迁市,淮安市,盐城市,扬州市,泰州市,南通市,镇江市,常州市,无锡市,苏州市',
    浙江省: '杭州市,宁波市,湖州市,嘉兴市,舟山市,绍兴市,衢州市,金华市,台州市,温州市,丽水市',
    安徽省: '合肥市,芜湖市,蚌埠市,淮南市,马鞍山市,淮北市,铜陵市,安庆市,黄山市,滁州市,阜阳市,宿州市,六安市,亳州市,池州市,宣城市',
    福建省: '厦门市,福州市,南平市,三明市,莆田市,泉州市,漳州市,龙岩市,宁德市。',
    江西省: '南昌市,九江市,景德镇市,鹰潭市,新余市,萍乡市,赣州市,上饶市,抚州市,宜春市,吉安市',
    山东省: '济南市,青岛市,德州市,东营市,淄博市,潍坊市,烟台市,威海市,日照市,临沂市,枣庄市,济宁市,泰安市,滨州市,菏泽市',
    河南省: '郑州市,开封市,洛阳市,平顶山市,安阳市,鹤壁市,新乡市,焦作市,濮阳市,许昌市,漯河市,三门峡市,南阳市,商丘市,周口市,驻马店市,信阳市',
    湖北省: '武汉市:,十堰市,襄阳市,荆门市,孝感市,黄冈市,鄂州市,黄石市,咸宁市,荆州市,宜昌市,随州市',
    湖南省: '长沙市,衡阳市,张家界市,常德市,益阳市,岳阳市,株洲市,湘潭市,郴州市,永州市,邵阳市,怀化市,娄底市',
    广东省: '广州市,深圳市,清远市,韶关市,河源市,梅州市,潮州市,汕头市,揭阳市,汕尾市,惠州市,东莞市,珠海市,中山市,江门市,佛山市,肇庆市,云浮市,阳江市,茂名市,湛江市',
    广西壮族自治区: '南宁市,桂林市,柳州市,梧州市,贵港市,玉林市,钦州市,北海市,防城港市,崇左市,百色市,河池市,来宾市,贺州市',
    海南省: '海口市,三亚市,三沙市,儋州市',
    四川省: '成都市,广元市,绵阳市,德阳市,南充市,广安市,遂宁市,内江市,乐山市,自贡市,泸州市,宜宾市,攀枝花市,巴中市,达州市,资阳市,眉山市,雅安市',
    贵州省: '贵阳市,六盘水市,遵义市,安顺市,毕节市,铜仁市',
    云南省: '昆明市,曲靖市,玉溪市,丽江市,昭通市,普洱市,临沧市,保山市',
    陕西省: '西安市,延安市,铜川市,渭南市,咸阳市,宝鸡市,汉中市,榆林市,商洛市,安康市',
    甘肃省: '兰州市,嘉峪关市,金昌市,白银市,天水市,酒泉市,张掖市,武威市,庆阳市,平凉市,定西市,陇南市',
    青海省: '西宁市,海东市',
    西藏自治区: '拉萨市,日喀则市,昌都市,林芝市,山南市,那曲市',
    宁夏回族自治区: '银川市,石嘴山市,吴忠市,中卫市,固原市',
    新疆维吾尔自治区: '乌鲁木齐市,克拉玛依市,吐鲁番市,哈密市',
  };

  const area = '东城区,西城区,朝阳区,西湖区,东湖区,丰台区,石景山区,海淀区,门头沟区,房山区,通州区,顺义区,昌平区,大兴区,怀柔区,平谷区'.split(',');

  return { words, firstNames, lastNames, cities, area };
}


/***/ }),

/***/ 42:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(280);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=http-request-mock.js.map