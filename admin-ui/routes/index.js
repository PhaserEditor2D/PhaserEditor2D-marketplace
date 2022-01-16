const express = require("express");
const { site } = require("../siteBuilder");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {

	const authors = site.__authors.$pages;

	res.render("index", { title: "Express", authors });
});

module.exports = router;
