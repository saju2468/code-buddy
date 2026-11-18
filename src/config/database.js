const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sajusj777_db_user:z9M3pXxfFffsbkKV@namastenode.fjgva0t.mongodb.net/codebuddy",
  );
};


module.exports = connectDB;


