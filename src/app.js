const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "sachi",
    lastName: "kohli",
    emailId: "virat@gmail.com",
    password: "virat123",
  });

  try {
    await user.save();
    res.send("user added succesfully...");
  } catch (err) {
    res.status(400).send("error sending to the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("db connected successfully");
    app.listen(3000, () => {
      console.log("hello successfully server started");
    });
  })
  .catch((err) => {
    console.log("db connection failed");
  });
