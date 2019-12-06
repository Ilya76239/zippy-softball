/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    let numStr = input.split(/([a-zA-Z])+/)[0];

    if (!numStr) {
      result = /^(gal|lbs|kg|mi|km|L)$/i.test(input) ? 1 : null;
    } else if (/^\d*\.?\d*\/\d*\.?\d*$/.test(numStr)) {
      let [num, denom] = numStr.split("/");
      result = num / denom;
    } else {
      result = Number(numStr);
    }
    return result;
  };

  this.getUnit = function(input) {
    var result = undefined;
    let unitStr = input.split(/(([a-zA-Z])+)/)[1].toLowerCase();
    result = /^(gal|lbs|kg|mi|km|l)$/i.test(unitStr) ? unitStr : undefined;
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    const returnUnits = {
      gal: "l",
      lbs: "kg",
      mi: "km",
      l: "gal",
      kg: "lbs",
      km: "mi"
    };
    var result = returnUnits[initUnit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = undefined;
    const units = {
      gal: "gallons",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
      l: "litres"
    };
    result = units[unit];
    
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      default:
        result = undefined;
        break;
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum && initUnit && returnNum && returnUnit) {
      result = `${Number(initNum.toFixed(5))} ${this.spellOutUnit(
        initUnit
      )} converts to ${Number(returnNum.toFixed(5))} ${this.spellOutUnit(
        returnUnit
      )}`;
    }
    return result;
  };
}
module.exports = ConvertHandler;
