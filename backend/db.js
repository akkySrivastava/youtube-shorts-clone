const mongoose = require("mongoose");

const connection_url =
  "mongodb://akky:KdaWNLd6wxADLvy@cluster0-shard-00-00.rfatk.mongodb.net:27017,cluster0-shard-00-01.rfatk.mongodb.net:27017,cluster0-shard-00-02.rfatk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-i16i1b-shard-0&authSource=admin&retryWrites=true&w=majority";

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
