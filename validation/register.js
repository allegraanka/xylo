const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegInput(data) {
    let errors = {};

    // Convert empty fields to empty strings to use Validator (works only with strings)
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // First name validator
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "Please enter your first name.";
    }

    // Last name validator
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Please enter your last name.";
    }

    // Username validator
    if (Validator.isEmpty(data.username)) {
        errors.username = "Please choose a username.";
    }

    // Email validator
    if (Validator.isEmpty(data.email)) {
        errors.email = "Please enter a valid email.";
    }

    // Password validators
    if (Validator.isEmpty(data.password)) {
        errors.password = "Please enter a password.";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Please confirm your password.";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}