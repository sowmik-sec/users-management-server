const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnoon", email: "sabnoon@gmail.com" },
  { id: 3, name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
