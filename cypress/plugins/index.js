const { defineConfig } = require("cypress");

module.exports = (on, config) => {
  on("file:preprocessor", (file) => {
    if (!config.env.TAGS) {
      return file;
    }

    const tags = config.env.TAGS.split(",");
    const content = file.output || file.contents;
    const isIncluded = tags.some((tag) => content.includes(`tags: ['${tag}']`));

    if (!isIncluded) {
      file.output = "";
    }

    return file;
  });
};
