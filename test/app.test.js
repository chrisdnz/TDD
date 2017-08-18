const expect = require('chai').expect;
const mocha = require('mocha');

const app = require('../src/app').app;

describe('add', () => {
  it('should return 0 when no numbers are sent', () => {
    const sum = app('');
    expect(sum).equal(0);
  });
  it('should return the same number when only one number is sent', () => {
    const digit = parseInt(Math.random() * (0 - 25) + 25);
    const sum = app(digit.toString());
    expect(sum).equal(digit.toString());
  });
  it('should return the sum when two numbers are sent', () => {
    const digit1 = parseInt(Math.random() * (0 - 25) + 25);
    const digit2 = parseInt(Math.random() * (0 - 25) + 25);

    const sum = app(`${digit1},${digit2}`);
    expect(sum).equal(digit1+digit2);
  });
});
