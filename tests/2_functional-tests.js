const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
  test('Convert a valid input such as 10L: GET request to /api/convert.', function (done) {
     chai.request(server).get('/api/convert').query({ input: '10L' }).end((err, res) => {
       const response = res.body.string;
       //console.log(response)
       assert.equal( response, "10 liters converts to 2.64172 gallons");
       done();
     })
   })  
    test('Convert an invalid input such as 32g: GET request to /api/convert.', function (done) {
     chai.request(server).get('/api/convert').query({ input: '32g' }).end((err, res) => {
       const response = res.body.string;
       //console.log(response)
       assert.equal( response, "invalid unit");
       done();
     })
   })
    test('Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.', function (done) {
     chai.request(server).get('/api/convert').query({ input: '3/7.2/4kg' }).end((err, res) => {
       const response = res.body.string;
       //console.log(response)
       assert.equal( response, "invalid number");
       done();
     })
   })
    test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.', function (done) {
     chai.request(server).get('/api/convert').query({ input: '3/7.2/4kilomegagram' }).end((err, res) => {
       const response = res.body.string;
       //console.log(response)
       assert.equal( response, "invalid number and unit");
       done();
     })
   })
    test('Convert with no number such as kg: GET request to /api/convert.', function (done) {
     chai.request(server).get('/api/convert').query({ input: 'kg' }).end((err, res) => {
       const response = res.body.string;
       //console.log(response)
       assert.equal( response, "1 kilograms converts to 2.20462 pounds");
       done();
     })
   })
  
});
