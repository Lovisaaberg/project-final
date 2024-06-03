import express from "express";
import cors from "cors";
// Use path module to handle file paths
import path from "path"; 
import fs from "fs";

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

// Endpoint to serve JSON data
app.get("/sun", async (req, res) => {
  // Construct the file path:
  const filePath = path.join(__dirname, "data", "sun-moon.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error(parseErr);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
