exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 6969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogCategories; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _duik_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5461);
/* harmony import */ var _duik_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_duik_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4823);






function OwnNavLink({
  leftElement,
  title,
  rightElement
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "ownnavlink_container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      className: "ownnavlink_container_img",
      src: leftElement
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "ownnavlink_container_title",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "ownnavlink_container_span",
      children: rightElement
    })]
  });
}

function Categories({
  posts,
  changeValue
}) {
  const getCategories = [];
  posts.map(post => {
    getCategories.push(post.frontmatter.category);
  });
  const sortedArr = getCategories.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
  }, {});
  const structuredArr = Object.entries(sortedArr).map(([key, value]) => {
    return {
      title: key,
      count: value
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "categories_container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.TopBarTitle, {
      className: "categories_container_title",
      children: "Categories"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      className: "categories_container_item",
      onClick: () => changeValue('All'),
      children: "All"
    }), structuredArr.map((post, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
        rightEl: post.count,
        className: "categories_container_item",
        onClick: () => changeValue(post.title),
        children: post.title
      }, index);
    })]
  });
}

function LatestReleases({
  posts
}) {
  const getReleases = [];
  posts.map(post => {
    getReleases.push(post.frontmatter);
  });
  getReleases.sort(_utils__WEBPACK_IMPORTED_MODULE_3__/* .orderReleasesByDate */ .UI);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "categories_container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_duik_it__WEBPACK_IMPORTED_MODULE_2__.TopBarTitle, {
      className: "categories_container_title",
      children: "Latest Releases"
    }), getReleases.map((release, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OwnNavLink, {
        leftElement: release.post_logo,
        title: release.app,
        rightElement: release.type
      }, index);
    })]
  });
}

function BlogCategories({
  posts,
  changeValue
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Categories, {
      posts: posts,
      changeValue: changeValue
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LatestReleases, {
      posts: posts
    })]
  });
}

/***/ }),

/***/ 4823:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "df": function() { return /* binding */ sortByDate; },
/* harmony export */   "UI": function() { return /* binding */ orderReleasesByDate; },
/* harmony export */   "RE": function() { return /* binding */ sortByValue; }
/* harmony export */ });
const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
const orderReleasesByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};
const sortByValue = (array, value) => {
  const posts = [];

  if (value != 'All') {
    array.map(post => {
      if (post.frontmatter.category == value) posts.push(post);
    });
  } else {
    array.map(post => {
      posts.push(post);
    });
  }

  return posts;
};

/***/ })

};
;