/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  const convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    let input = req.query.input;
    if (!input) {
      res.status(400);
      res.json({ error: "invalid number and unit" });
    }
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    //check for valid number and unit format
    if (isNaN(initNum) && !initUnit) {
      res.status(400);
      res.json({ error: "invalid number and unit" });
    } else if (isNaN(initNum)) {
      res.status(400);
      res.json({ error: "invalid number" });
    } else if (!initUnit) {
      res.status(400);
      res.json({ error: "invalid unit" });
    } else {
      res.json({
        initNum: Number(initNum.toFixed(5)),
        initUnit: initUnit,
        returnNum: returnNum.toFixed(5),
        returnUnit: returnUnit,
        string: toString
      });
    }
  });
};
