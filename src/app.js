const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);

  res.send({
    firstname: "sajin",
    lastname: "pp",
  });
});

app.listen(3000, () => {
  console.log("hello successfully server started");
});
