const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://hannah02li20:DXv8WOt6L2cZGQ85@cluster0.ln4upv6.mongodb.net/?retryWrites=true&w=majority";
//const MONGOURI = "mongodb://127.0.0.1:27017";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;