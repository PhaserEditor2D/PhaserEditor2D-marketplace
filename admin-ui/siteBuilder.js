const {SiteBuilder} = require("staticojs");

const siteBuilder = new SiteBuilder(".");
const site = siteBuilder.parse();
siteBuilder.buildPageLinks(site);

module.exports = { siteBuilder, site };