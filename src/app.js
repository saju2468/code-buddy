const express = require("express");

const app = express();


app.use("/dashboard", (req, res) => {
  res.send("hello dashboard server....");
});

app.use("/test", (req, res) => {
  res.send("hello from server....");
});

app.listen(3000, () => {
  console.log("hello successfully server started");
});
