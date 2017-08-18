const expect = require('chai').expect;
const mocha = require('mocha');

const app = require('../src/app').app;

describe('testing app.js', () => {
  it('should return 0 when no numbers are sent', () => {
    let sum = app();
    expect(sum).equal(0);
  })
});
