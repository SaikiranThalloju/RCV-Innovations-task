const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");


dotenv.config();

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));


const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    storeDataFromFile();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const newsSchema = new mongoose.Schema({}, { strict: false });
const News = mongoose.model('NewsApiData', newsSchema);

async function storeDataFromFile() {
  try {
    const count = await News.countDocuments();
    if (count === 0) {
      const rawData = fs.readFileSync("data.json");
      const jsonData = JSON.parse(rawData);

      const result = await News.insertMany(jsonData);
      console.log(`${result.length} documents inserted from data.json`);
    } else {
      console.log("Data already exists in the collection. Skipping insert.");
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
}

app.get("/api/data", async (req, res) => {
  try {
    const data = await News.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
