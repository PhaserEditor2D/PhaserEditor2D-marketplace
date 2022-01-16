const express = require("express");
const { start } = require("repl");
const { site, siteBuilder } = require("../siteBuilder");
const router = express.Router();

router.get("/:id/delete", (req, res, next) => {

	const id = req.params.id;

	siteBuilder.deletePageFromPath(`authors/${id}`);

	res.redirect("/");
});

router.get("/:id/edit", (req, res, next) => {

	const id = req.params.id;

	const page = siteBuilder.findPageFromPath(`authors/${id}`);
	const images = siteBuilder.findPageAssetsFromPath(`authors/${id}`);

	res.render("author-edit", {
		title: page.title,
		author: page,
		images
	});
});

router.post("/:id/edit", (req, res, next) => {

	const { id } = req.params;
	const { title, description, image } = req.body;

	const page = siteBuilder.findPageFromPath(`authors/${id}`);

	Object.assign(page, { title, description, image });

	siteBuilder.savePage(page);

	res.redirect(`/authors/${id}`);
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

	const canDelete = [starters, examples, websites, plugins, libs]
		.filter(p => p.length === 0)
		.length === 0;

	res.render("author-show", {
		title: author.title,
		author,
		starters,
		examples,
		websites,
		plugins,
		libs,
		canDelete
	});
});

module.exports = router;
