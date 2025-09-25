const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebookDB";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to Mongoose successfully");
  } catch (error) {
    console.error("❌ Mongoose connection failed:", error);
  }
};

module.exports = connectToMongo;