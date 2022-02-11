const express = require("express");
const { siteBuilder } = require("../siteBuilder");
const router = express.Router();

router.get("/:path(*)", (req, res, next) => {

	const path = req.params.path;

    console.log(path);

	const images = siteBuilder.findPageAssetsFromPath(path);

    res.json(images);
});


module.exports = router;