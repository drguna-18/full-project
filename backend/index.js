const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.post("/api/data", (req, res) => {
  const { businessName, sector, description, investment, location } = req.body;

  console.log(businessName);
  console.log(sector);
  console.log(description);
  console.log(investment);
  console.log(location);

  res.json({
    message: `Hello, ${businessName}!`,
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
