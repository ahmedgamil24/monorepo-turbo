const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Hello from API 🚀" });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});