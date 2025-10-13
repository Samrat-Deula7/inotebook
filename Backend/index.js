const connectToMongo=require('./db');
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = 5000; // I have change this 3000 port to 5000 because the react app will run int the 3000 port

app.use(cors());
app.use(express.json()) // This is an middleware

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use("/api/notes", require("./routes/notes"));




app.listen(port, () => {
  console.log(`Inotebook app listening on port ${port}`);
});