const expect = require('chai').expect;
const mocha = require('mocha');

const app = require('../src/app').app;

describe('testing app.js', () => {
  it('should pass', () => {
    let x = 0;
    expect(x).equal(0);
  })
});
