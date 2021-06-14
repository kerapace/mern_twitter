const Validator = require("validator");
const ValidText = require("./valid-text.js");

module.exports = function validateTweetInput(data) {
  const errors = {};
  data.text = ValidText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text,{ min: 5, max: 140})) {
    errors.text = "Tweet must be no longer than 140 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Tweet cannot be blank";
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};