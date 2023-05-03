module.exports = function (eleventyConfig) {
	eleventyConfig
		.addPassthroughCopy("assets")
		.setServerPassthroughCopyBehavior("passthrough")
};
