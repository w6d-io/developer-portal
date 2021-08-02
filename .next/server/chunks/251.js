exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 1003:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);



const NextImg = props => {
  const {
    src,
    alt
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
    src: __webpack_require__(6821)(`${src}`),
    alt: alt
  });
};

const MDXComponents = {
  NextImg
};
/* harmony default export */ __webpack_exports__["default"] = (MDXComponents);

/***/ }),

/***/ 2837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopularTags; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const tagsList = [{
  name: "React"
}, {
  name: "Docker"
}, {
  name: "CICD"
}, {
  name: "Pipeline"
}, {
  name: "Redis"
}, {
  name: "Forms"
}, {
  name: "CMS"
}];
function PopularTags() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "popular-tags",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "popular-tags-span",
      children: "Popular:"
    }), tagsList.map(item => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "tags",
        children: item.name
      }, item.name);
    })]
  });
}

/***/ }),

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

/***/ 6821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./BlogCategories": 6969,
	"./BlogCategories.js": 6969,
	"./Header": 4053,
	"./Header.js": 4053,
	"./HomeCards": 2059,
	"./HomeCards.js": 2059,
	"./MDXComponents": 1003,
	"./MDXComponents.js": 1003,
	"./PopularTags": 2837,
	"./PopularTags.js": 2837,
	"./SearchBar": 8383,
	"./SearchBar.js": 8383
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6821;

/***/ })

};
;