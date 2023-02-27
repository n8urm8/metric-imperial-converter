const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  test('convertHandler should correctly read a whole number input.', function () {
     assert.equal(convertHandler.getNum('2'), 2)
   })  
  test('convertHandler should correctly read a decimal number input.', function () {
     assert.equal(convertHandler.getNum('2.2'), 2.2)
   })  
  test('convertHandler should correctly read a fractional input.', function () {
     assert.equal(convertHandler.getNum('1/2'), 0.5)
   })  
  test('convertHandler should correctly read a fractional input with a decimal.', function () {
     assert.equal(convertHandler.getNum('1.1/2.1'), 1.1/2.1)
   })  
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', function () {
     assert.isNull(convertHandler.getNum('1/4/4'))
   })  
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
     assert.equal(convertHandler.getNum('km'), 1)
   })  
  test('convertHandler should correctly read each valid input unit.', function () {
     assert.equal(convertHandler.getUnit('km'), 'km', 'km err')
     assert.equal(convertHandler.getUnit('mi'), 'mi', 'mi err')
     assert.equal(convertHandler.getUnit('lbs'), 'lbs', 'lbs err')
     assert.equal(convertHandler.getUnit('kg'), 'kg', 'kg err')
     assert.equal(convertHandler.getUnit('L'), 'L', 'L err')
     assert.equal(convertHandler.getUnit('gal'), 'gal', 'gal err')
   })  
  test('convertHandler should correctly return an error for an invalid input unit.', function () {
     assert.isNull(convertHandler.getUnit('gl'))
   })  
  test('convertHandler should return the correct return unit for each valid input unit.', function () {
     assert.equal(convertHandler.getReturnUnit('gal'), 'L')
   })  
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function () {
     assert.equal(convertHandler.spellOutUnit('gal'), 'gallons')
     assert.equal(convertHandler.spellOutUnit('L'), 'liters')
     assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms')
     assert.equal(convertHandler.spellOutUnit('km'), 'kilometers')
     assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds')
     assert.equal(convertHandler.spellOutUnit('mi'), 'miles')
   })  
  test('convertHandler should correctly convert gal to L.', function () {
    const input = '1gal'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 3.78541)
   })  
  test('convertHandler should correctly convert L to gal.', function () {
    const input = '3.78541L'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 1)
   })  
  test('convertHandler should correctly convert mi to km.', function () {
    const input = '1mi'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 1.60934)
   })  
  test('convertHandler should correctly convert km to mi.', function () {
    const input = '1.60934km'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 1)
   })  
  test('convertHandler should correctly convert lbs to kg.', function () {
    const input = '1lbs'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 0.45359)
   })  
  test('convertHandler should correctly convert kg to lbs.', function () {
    const input = '0.45359kg'
    const iNum = convertHandler.getNum(input)
    const iUnit = convertHandler.getUnit(input)
     assert.equal(convertHandler.convert(iNum, iUnit), 1)
   })

});