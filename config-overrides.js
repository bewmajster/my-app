const path = require("path");

/* eslint-disable react-hooks/rules-of-hooks */
const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    ["@features"]: path.resolve(__dirname, "src/features"),
    ["@pages"]: path.resolve(__dirname, "src/pages"),
  }),
  fixBabelImports([
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/icons-material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "icons",
    ],
  ])
);
