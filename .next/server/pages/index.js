(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,739,682,406];
exports.modules = {

/***/ 1367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Layout; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@duik/it"
var it_ = __webpack_require__(5461);
;// CONCATENATED MODULE: external "react-router-dom"
var external_react_router_dom_namespaceObject = require("react-router-dom");;
// EXTERNAL MODULE: ./pages/components/Header.js
var Header = __webpack_require__(4053);
// EXTERNAL MODULE: ./pages/Blog.js
var Blog = __webpack_require__(8052);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(4823);
;// CONCATENATED MODULE: ./pages/index.js






 // import Home from './Home'


/* Blog as Homepage START */





/* Blog as Homepage END */

function Layout({
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "home-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header.default, {}), /*#__PURE__*/jsx_runtime_.jsx(it_.ContainerVertical, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Blog.default, {
        posts: posts
      })
    })]
  });
}
/* Blog as Homepage START */

async function getStaticProps() {
  const files = external_fs_default().readdirSync(external_path_default().join('posts'));
  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', filename), 'utf-8');
    const {
      data: frontmatter
    } = external_gray_matter_default()(markdownWithMeta);
    return {
      slug,
      frontmatter
    };
  });
  return {
    props: {
      posts: posts.sort(utils/* sortByDate */.df)
    }
  };
}
/* Blog as Homepage END */

/***/ }),

/***/ 5461:
/***/ (function(module) {

"use strict";
module.exports = require("@duik/it");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,127,893,969,390,52], function() { return __webpack_exec__(1367); });
module.exports = __webpack_exports__;

})();