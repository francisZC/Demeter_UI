"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
exports.NavMenu = exports.Row = void 0;
var styled_1 = require("@emotion/styled");
/**
 *
 */
exports.Row = styled_1["default"].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  display: flex;\n  align-items: center;\n  justify-content: ",
        ";\n  margin-bottom: ",
        ";\n\n  > * {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    margin-right: ",
        ";\n  }\n",
      ],
      [
        "\n  display: flex;\n  align-items: center;\n  justify-content: ",
        ";\n  margin-bottom: ",
        ";\n\n  > * {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n    margin-right: ",
        ";\n  }\n",
      ]
    )),
  function (props) {
    return props.between ? "space-between" : undefined;
  },
  function (props) {
    return props.marginBottom + "rem";
  },
  function (props) {
    return typeof props.gap === "number"
      ? props.gap + "rem"
      : props.gap
      ? "2rem"
      : undefined;
  }
);
exports.NavMenu = styled_1["default"].ul(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  display: flex;\n  justify-content: space-between;\n  > * {\n    list-style: none;\n    margin-left: 15px;\n    text-decoration: none;\n  }\n",
      ],
      [
        "\n  display: flex;\n  justify-content: space-between;\n  > * {\n    list-style: none;\n    margin-left: 15px;\n    text-decoration: none;\n  }\n",
      ]
    ))
);
var templateObject_1, templateObject_2;
