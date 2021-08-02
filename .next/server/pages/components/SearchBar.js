(function() {
var exports = {};
exports.id = 452;
exports.ids = [452,739,406];
exports.modules = {

/***/ 8383:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _duik_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5461);
/* harmony import */ var _duik_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_duik_it__WEBPACK_IMPORTED_MODULE_2__);




const optionsCategories = [{
  label: "All Categories",
  value: 1
}, {
  label: "Documentation",
  value: 2
}, {
  label: "Tutorials",
  value: 3
}, {
  label: "Blog",
  value: 4
}, {
  label: "Events",
  value: 5
}];
function SearchBar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_duik_it__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    lg: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      className: "search-bar-input",
      type: "text",
      placeholder: "Search framework, database, process, etc."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.Select, {
      className: "search-bar-select",
      options: optionsCategories,
      defaultOption: optionsCategories[0]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "search-bar-button",
      primary: true,
      children: "Search"
    })]
  });
}

/***/ }),

/***/ 5461:
/***/ (function(module) {

"use strict";
module.exports = require("@duik/it");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8383));
module.exports = __webpack_exports__;

})();