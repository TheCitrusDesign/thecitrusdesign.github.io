(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 482:
/***/ ((module) => {

// Exports
module.exports = {
	"section_header": "SectionHeader_section_header__q3IG6",
	"title": "SectionHeader_title__B6vzA",
	"subtitle": "SectionHeader_subtitle__WVZud"
};


/***/ }),

/***/ 1212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(482);
/* harmony import */ var _styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);


const SectionHeader = ({ title , subtitle  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().section_header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().subtitle),
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_SectionHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeader);


/***/ }),

/***/ 8419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _features_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);
/* harmony import */ var core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9463);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7970);
/* harmony import */ var components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6935);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_4__]);
([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const TagPage = ({ posts , tag  })=>{
    const title = `${tag} | ${core_constants__WEBPACK_IMPORTED_MODULE_7__/* .SITE_NAME */ .px}`;
    const { paginatedPosts , previous , next , previousPage , nextPage  } = (0,_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .usePostsListNavigation */ .qj)(posts);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "my-48",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_section_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            subtitle: "Filtering posts by",
                            title: `tag ${tag}`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .PostsList */ .Eb, {
                            Item: "",
                            Navigation: "",
                            children: [
                                paginatedPosts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .PostsList.Item */ .Eb.Item, {
                                        title: post.title,
                                        date: post.date,
                                        author: post.author,
                                        excerpt: post.excerpt,
                                        slug: post.slug,
                                        coverImage: post.coverImage,
                                        tags: post.tags
                                    }, post.slug)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .PostsList.Navigation */ .Eb.Navigation, {
                                    previous: previous,
                                    next: next,
                                    previousPage: previousPage,
                                    nextPage: nextPage
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagPage);
async function getStaticProps({ params  }) {
    const posts = (0,core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getPostsByTag */ .J4)(params.tag, _features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .POST_HEADER_FIELDS */ .$h);
    return {
        props: {
            tag: params.tag,
            posts: posts.map((post)=>({
                    ...post,
                    author: (0,core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAuthorBySlug */ .ye)(post.author)
                }))
        }
    };
}
async function getStaticPaths() {
    const tags = (0,core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllTags */ .Ys)();
    return {
        paths: tags.map((tag)=>({
                params: {
                    tag
                }
            })),
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,970,971,398], () => (__webpack_exec__(8419)));
module.exports = __webpack_exports__;

})();