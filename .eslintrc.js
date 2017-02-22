module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "presets": ["es2015"],
  "globals": {
    "window": true,
    "document": true
  },
  "plugins": [
    "import"
  ],
  "env": {
    "jest": true
  },
};
