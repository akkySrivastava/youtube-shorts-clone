const mongoose = require("mongoose");
const mongoUserPass = require("./nodemon.json");
const connection_url = mongoUserPass.env.mongopass;

module.exports.connect = () => {
  mongoose
    .connect(connection_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connect successfully"))
    .catch((err) => console.log("Error:", err));
};

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
