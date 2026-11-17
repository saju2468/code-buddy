const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.use("/user", userAuth, (req, res) => {
  res.send("user data fetch");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("admin response sended");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("delete a user");
});

app.listen(3000, () => {
  console.log("hello successfully server started");
});
