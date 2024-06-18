const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

const app = express();
const PORT = !4556 ? 3000 : 4556;

// middleware
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("client/public"));

// routes
app.route("/api/todo").post((req, res) => {
  // posting data to the server/client
//   console.log(req.body);
  const { todo } = req.body;
  res.json({todo:todo})
});

app.listen(PORT, () => {
  // confirm that we are connected
  console.log("You are connected to port " + PORT);
});
