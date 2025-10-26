const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/inotebookDB";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ Connected to Mongoose successfully");
  } catch (error) {
    console.error("❌ Mongoose connection failed:", error);
  }
};

module.exports = connectToMongo;