'use strict';

const brandingGuidelines = require('..');
const assert = require('assert').strict;

assert.strictEqual(brandingGuidelines(), 'Hello from brandingGuidelines');
console.info("brandingGuidelines tests passed");
