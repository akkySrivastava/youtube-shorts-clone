const mongoose = require("mongoose");

const ytSchema = mongoose.Schema({
  url: String,
  channel: String,
  likes: Number,
  dislike: Number,
  comment: String,
  description: String,
  shares: Number,
  createdAt: Date,
});

module.exports = mongoose.model("ytVideos", ytSchema);
