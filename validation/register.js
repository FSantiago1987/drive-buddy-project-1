const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
    data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.post_code = !isEmpty(data.post_code) ? data.post_code : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.province = !isEmpty(data.province) ? data.province : "";
  data.user_type = !isEmpty(data.user_type) ? data.user_type : "";
// first_name checks
  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "First Name field is required";
  }
// last_name checks
if (Validator.isEmpty(data.last_name)) {
errors.last_name = "Last Name field is required";
}
// username checks
if (Validator.isEmpty(data.username)) {
errors.username = "User Name field is required";
}
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
// phone checks
if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
    }
// address checks
if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
    }
// post_code checks
if (Validator.isEmpty(data.post_code)) {
    errors.post_code = "Post Code field is required";
    }
// city checks
if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
    }
// province checks
if (Validator.isEmpty(data.province)) {
    errors.province = "Province field is required";
    }
// user_type checks
if (Validator.isEmpty(data.user_type)) {
    errors.user_type = "User Type field is required";
    }
return {
    errors,
    isValid: isEmpty(errors)
  };
};