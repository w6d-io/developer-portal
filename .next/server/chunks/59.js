exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 2059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeCards; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3854);





const cardsDatas = [{
  icon: "https://image.flaticon.com/icons/png/512/235/235251.png",
  title: "Documentation",
  caption: "Enjoy the comfort of having your dev process in one place."
}, {
  icon: "https://image.flaticon.com/icons/png/512/432/432579.png",
  title: "Tutorials",
  caption: "Watch others do what you need to do in our videos!"
}, {
  icon: "https://image.flaticon.com/icons/png/512/432/432587.png",
  title: "APIs",
  caption: "Be able to integrate any third party software right now!"
}, {
  icon: "https://image.flaticon.com/icons/png/512/425/425908.png",
  title: "Contact us",
  caption: "Still struggling buddy? Contact Linda, she is happy to help."
}];

function Card(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "homecards-card",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: props.icon
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "homecards-cardtitle",
      children: props.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "homecards-cardcaption",
      children: props.caption
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "homecards-seemore",
      children: ["See more ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__/* .HiOutlineArrowNarrowRight */ .T7S, {})]
    })]
  });
}

function HomeCards() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "homecards-container",
    children: cardsDatas.map(item => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
        title: item.title,
        caption: item.caption,
        icon: item.icon
      }, item.title);
    })
  });
}

/***/ })

};
;