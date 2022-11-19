const colors = require("colors");
//get the mongodb uri in uri.js file for privacy
const uri = require("./uri");
const { default: mongoose } = require("mongoose");
//Connects our app with mongodb database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || uri);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
