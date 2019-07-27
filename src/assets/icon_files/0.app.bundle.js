(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/*! exports provided: ListOfFavs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfFavs\", function() { return ListOfFavs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n\n\n\nvar ListOfFavs = function ListOfFavs(_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], null, favs.map(function (fav) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      key: fav.id,\n      to: \"/detail/\".concat(fav.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: fav.src\n    }));\n  }));\n};\nListOfFavs.proptypes = {\n  favs: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"PropTypes\"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"PropTypes\"].shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"PropTypes\"].string,\n    src: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"PropTypes\"].string\n  }))\n};\n\n//# sourceURL=webpack:///./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/*! exports provided: Link, Grid, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  object-fit: cover;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding-top: 32px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  border-radius: 8px;\\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\\n  display: inline-block;\\n  margin: 1%;\\n  overflow: hidden;\\n  position: relative;\\n  width: 31.33%;\\n  &:after {\\n    content: '';\\n    display: block;\\n    padding-bottom: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"])(_templateObject());\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject3());\n\n//# sourceURL=webpack:///./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/container/GetFavorites.js":
/*!***************************************!*\
  !*** ./src/container/GetFavorites.js ***!
  \***************************************/
/*! exports provided: FavsWithQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavsWithQuery\", function() { return FavsWithQuery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getFavs {\\n    favs {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar GET_FAVS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\");\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error!\");\n  var favs = data.favs;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_3__[\"ListOfFavs\"], {\n    favs: favs\n  });\n};\n\nvar FavsWithQuery = function FavsWithQuery() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Query\"], {\n    query: GET_FAVS,\n    fetchPolicy: \"network-only\"\n  }, renderProp);\n};\n\n//# sourceURL=webpack:///./src/container/GetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/GetFavorites */ \"./src/container/GetFavorites.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    title: \"Tus favoritos\",\n    subtitle: \"Encuentra aqu\\xED tus animales favoritos.\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__[\"FavsWithQuery\"], null));\n});\n\n//# sourceURL=webpack:///./src/pages/Favs.js?");

/***/ })

}]);