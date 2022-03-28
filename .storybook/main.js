module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
};
