const express = require("express");
const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;
var _ = require("underscore");
const router = express.Router();

router.post("/", (req, res) => {
  //any of the props in this object are optional, also spelling does not have to be exact.
  // var lookup = new Lookup( req.body.street +','+ req.body.city +','+ req.body.state+','+req.body.country);
  let lookup = new Lookup();
  lookup.prefix = req.body.street;
  lookup.city = req.body.city;
  lookup.state = req.body.state;
  lookup.maxSuggestions = 10;
  console.log(lookup);

  // for client-side requests (browser/mobile), use this code:
  let key = 8387849530931884;

  let credentials = new SmartyStreetsCore.SharedCredentials(key);
  credentials.hostName = "localhost";
  console.log(credentials);
  let client = SmartyStreetsCore.buildClient.usAutocomplete(credentials);

  // Documentation for input fields can be found at:
  // https://smartystreets.com/docs/cloud/us-autocomplete-api#http-request-input-fields

  // let lookup = new Lookup("4770 Lincoln Ave O");

  client.send(lookup).then(logSuggestions).catch(console.log);

  // lookup.maxSuggestions = 10;
  //
  // lookup.cityFilter = ["Ogden"];
  // lookup.stateFilter = ["IL"];
  // lookup.prefer = ["Ogden, IL"];
  // lookup.preferRatio = 0.33333333;
  //
  // client.send(lookup)
  // 	.then(logSuggestions)
  // 	.catch(console.log);

  function logSuggestions(response) {
    console.log(response.result);
    return res.status(200).json(response.result);
    console.log("*********************");
  }
});
module.exports = router;
