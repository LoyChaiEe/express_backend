// Required backend libraries
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const numbers = [1,2,3,4,5,6]

// Declare the port to listen to and initialise Express
const PORT = 8080;
const app = express();

// enable CORS access to this server and middle wares
app.use(cors("*"));
app.use(express.json());

// Define a route and corresponding middleware function
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/get", (req, res) => {
  const output = {
    arr: numbers
  }
  return res.json(output);
})

app.post("/post", (req,res) => {
  const { data } = req.body
  console.log(data)
  const output = {
    arr: data
  }
  return res.json(output);
})

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
