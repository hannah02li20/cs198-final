const mongoose = require("mongoose");

// added this, not sure if it belongs here
const auth = require('../middleware/auth');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // Add more fields for information on the user.
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shoppinglist: {
    type: Array,
    required: false,
  },
  // copied from spec
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
