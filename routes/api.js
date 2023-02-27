'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let cv = new ConvertHandler();
  
  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;
    const initNum = cv.getNum(input);
    const initUnit = cv.getUnit(input)
    const returnNum = cv.convert(initNum, initUnit)
    const returnUnit = cv.getReturnUnit(initUnit)
    const returnString = cv.getString(initNum, initUnit, returnNum, returnUnit)
    
    res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: returnString
    })
    
  })

};
