(function() {
var exports = {};
exports.id = 418;
exports.ids = [418,739,682,406];
exports.modules = {

/***/ 2632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "marked"
var external_marked_namespaceObject = require("marked");;
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_namespaceObject);
// EXTERNAL MODULE: ./pages/components/BlogCategories.js
var BlogCategories = __webpack_require__(6969);
// EXTERNAL MODULE: ./pages/components/Header.js
var Header = __webpack_require__(4053);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(4823);
;// CONCATENATED MODULE: ./pages/Blog/[slug].js










function PostPage({
  frontmatter: {
    title,
    date,
    reading_time
  },
  slug,
  content,
  posts
}) {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)("");
  const sortedPosts = [];

  if (value) {
    sortedPosts.push((0,utils/* sortByValue */.RE)(posts, value));
  } else {
    sortedPosts.push(posts);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "home-container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
      children: [title, " - Wildcard Portal"]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header.default, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "blog_container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "post_container_title",
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [date, " \u2022 ", reading_time]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "post_container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "test",
            dangerouslySetInnerHTML: {
              __html: external_marked_default()(content)
            }
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(BlogCategories.default, {
          posts: posts,
          changeValue: value => setValue(value)
        })
      })]
    })]
  });
}
async function getStaticPaths() {
  const files = external_fs_default().readdirSync(external_path_default().join('posts'));
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params: {
    slug
  }
}) {
  const files = external_fs_default().readdirSync(external_path_default().join('posts'));
  const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join('posts', slug + '.mdx'), 'utf-8');
  const {
    data: frontmatter,
    content
  } = external_gray_matter_default()(markdownWithMeta);
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
      frontmatter,
      slug,
      content,
      posts
    }
  };
}

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,127,893,969,390], function() { return __webpack_exec__(2632); });
module.exports = __webpack_exports__;

})();