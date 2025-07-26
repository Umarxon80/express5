const User = require("../backend/models/users");
const express = require("express");
const upload = require("./upload");

const app = express.Router();

app.get("", async (req, res) => {
  let { page = 1, take = 10 } = req.query;
  try {
    let skip = (page - 1) * take;
    let data = await User.find().skip(skip).limit(take);
    res.send(data);
  } catch (e) {
    res.send({ message: e.message });
  }
});

app.post("", upload.single("img"), async (req, res) => {
  if (req.file && req.file.filename) {
    req.body.img = req.file.filename;
  }
  let body = req.body;
  try {
    let nline = new User(body);
    await nline.save();
    res.send(nline);
  } catch (e) {
    res.send({ messsage: e.messsage });
  }
});

app.patch("/:id", upload.single("img"), async (req, res) => {
  if (req.file && req.file.filename) {
    req.body.img = req.file.filename;
  }
  let { id } = req.params;
  let body = req.body;
  try {
    let nline = await User.findByIdAndUpdate(id, body, { new: true });
    res.send(nline);
  } catch (e) {
    res.send({ messsage: e.messsage });
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let nline = await User.findByIdAndDelete(id);
    res.send(nline);
  } catch (e) {
    res.send({ messsage: e.messsage });
  }
});

module.exports = app;
