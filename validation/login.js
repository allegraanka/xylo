const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "Please enter your email to log in.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "The email you've entered is invalid.";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Please enter your password to log in.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}