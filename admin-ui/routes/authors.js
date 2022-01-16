const express = require("express");
const { site, siteBuilder } = require("../siteBuilder");
const router = express.Router();

router.get("/delete/:id", (req, res, next) => {

	const id = req.params.id;

	siteBuilder.deletePageFromPath(`authors/${id}`);

	res.redirect("/");
});

router.get("/:id", (req, res, next) => {

	const id = req.params.id;

	const author = site.__authors["__" + id];

	const query = p => p.author === id;

	const starters = site.__starters.$pages.filter(query);
	const examples = site.__examples.$pages.filter(query);
	const websites = site.__websites.$pages.filter(query);
	const plugins = site.__plugins.$pages.filter(query);
	const libs = site.__libs.$pages.filter(query);

	res.render("author-show", {
		title: author.title,
		author,
		starters,
		examples,
		websites,
		plugins,
		libs
	});
});

module.exports = router;
