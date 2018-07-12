module.exports = {
  extends: [
    "plugin:flowtype/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["react", "flowtype", "prettier"],
  parser: "babel-eslint"
};
