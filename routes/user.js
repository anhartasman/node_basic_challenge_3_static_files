const express = require("express");
const rootDir = require("../util/path");
const path = require("path");
const router = express.Router();

//Menggunakan router.get
router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
