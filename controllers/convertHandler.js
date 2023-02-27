const unitsKey = {
  gal: 'gallons',
  L: 'liters',
  mi: 'miles',
  km: 'kilometers',
  lbs: 'pounds',
  kg: 'kilograms'
}

function ConvertHandler() {
  
  this.getNum = function(input) {
      const regex = /^(\d*\.?\/?\d*|\d*(\.\d+)?\/\d*(\.\d+)?)\w*$/
      const onlyUnit = /^\w/
      let result = input.match(regex);
      if (result == null) return null
      //console.log('result get num:', result)
      const fraction = result[0].includes('/') ? result[1].split('/') : null
      //console.log('has fraciton?:',  fraction[2])
      //if (input.match(onlyUnit)) return 1;
      if (fraction != null) return (fraction.length == 2 && fraction[1] != '0' && fraction[1])? Number(fraction[0])/Number(fraction[1]) : null;

      return result == null ? null : result[1] == "" ? 1 : Number(result[1]);
  };
  
  this.getUnit = function(input) {
    const regex = /[a-z]{1,3}$/ig
    let result = input.match(regex);
    if (result == null) return null;
    //console.log('unit result: ', result[0])
    const unit = result[0].toLowerCase() == 'l' ? 'L' : result[0].toLowerCase()
    let hasKey = Object.keys(unitsKey).includes(unit)
    console.log('unit has key: ', Object.keys(unitsKey),  hasKey)
    return hasKey ? unit : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case 'gal': return 'L'
      case 'L': return 'gal'
      case 'mi': return 'km'
      case 'km': return 'mi'
      case 'lbs': return 'kg'
      case 'kg': return 'lbs'
    }
  };

  this.spellOutUnit = function(unit) {
    
    return unitsKey[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit) {
        case 'gal': return Math.round(initNum * galToL * 100000) / 100000;
        case 'L': return Math.round(initNum / galToL * 100000) / 100000;
        case 'mi': return Math.round(initNum * miToKm * 100000) / 100000;
        case 'km': return Math.round(initNum / miToKm * 100000) / 100000;
        case 'lbs': return Math.round(initNum * lbsToKg * 100000) / 100000;
        case 'kg': return Math.round(initNum / lbsToKg * 100000) / 100000;
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (initNum == null && initUnit == null) {
      return 'invalid number and unit'
    } else if (initNum == null) {
      return 'invalid number'
    } else if (initUnit == null) {
      return 'invalid unit'
    } else {
        return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    }
  
  };
  
}

module.exports = ConvertHandler;
