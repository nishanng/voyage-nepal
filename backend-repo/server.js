const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/query", async (req, res) => {
    // Extract user query from request
    const userQuery = req.body.query;
  
    // Call OpenAI API with user query and process the response
    // Send the processed response back to the frontend
  });
  
  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
