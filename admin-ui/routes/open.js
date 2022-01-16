const express = require("express");
const open = require("open");
const { join, delimiter } = require("path");
const router = express.Router();

router.post("/file", (req, res, next) => {

    const file = join("content", "en", req.body.filePath.replace("\\", delimiter));
    console.log("Opening file: " + file);
    open(file);
});

module.exports = router;