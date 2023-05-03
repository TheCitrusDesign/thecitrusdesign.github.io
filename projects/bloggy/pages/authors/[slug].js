(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 8090:
/***/ ((module) => {

// Exports
module.exports = {
	"hero_wrap": "Author_hero_wrap___V81K",
	"hero_img_wrap": "Author_hero_img_wrap__QxcmI",
	"hero_img_container": "Author_hero_img_container__I3NF2",
	"hero_img_shadow": "Author_hero_img_shadow__n7Vli",
	"hero_img_shadow_wrap": "Author_hero_img_shadow_wrap__Xn_0w",
	"hero_img_shadow_wrap_intro": "Author_hero_img_shadow_wrap_intro__YL_Lg",
	"hero_header": "Author_hero_header__H_FeC",
	"hero_eyebrow": "Author_hero_eyebrow__XJrxi",
	"hero_heading": "Author_hero_heading__i7ay_",
	"hero_heading_wrap": "Author_hero_heading_wrap__mJoTa"
};


/***/ }),

/***/ 9905:
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
/* harmony import */ var _core_helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _features_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9463);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7970);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6935);
/* harmony import */ var _features_Posts_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745);
/* harmony import */ var _components_section_separator_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4301);
/* harmony import */ var _components_featured_subtitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9761);
/* harmony import */ var _components_post_preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5961);
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2445);
/* harmony import */ var _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8090);
/* harmony import */ var _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, _components_layout__WEBPACK_IMPORTED_MODULE_4__, _features_Posts_components__WEBPACK_IMPORTED_MODULE_6__, _components_post_preview__WEBPACK_IMPORTED_MODULE_9__]);
([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, _components_layout__WEBPACK_IMPORTED_MODULE_4__, _features_Posts_components__WEBPACK_IMPORTED_MODULE_6__, _components_post_preview__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Author = ({ author  })=>{
    const title = `${author.name} | ${_core_constants__WEBPACK_IMPORTED_MODULE_11__/* .SITE_NAME */ .px}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "my-48",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_wrap),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_wrap),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_container),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts_components__WEBPACK_IMPORTED_MODULE_6__/* .AvatarImage */ .F$, {
                                                        name: author.name,
                                                        src: author.profilePictureUrl,
                                                        maxWidth: "100%",
                                                        maxHeight: "100%",
                                                        className: "rounded-[50%] object-cover"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_shadow_wrap),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_shadow)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_shadow_wrap)} ${(_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_shadow_wrap_intro)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_img_shadow)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_header)} flex flex-col justify-center items-center text-center`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_eyebrow),
                                                    children: author.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_heading_wrap),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: (_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_12___default().hero_heading),
                                                        children: author.description
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_separator_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "global-featured-title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_featured_subtitle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Read these",
                                subtitle: "latest articles"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:grid-cols-6 lg:gap-x-4 gap-y-20 mb-32",
                            children: author.posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_preview__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    title: post.title,
                                    coverImage: post.coverImage,
                                    author: author,
                                    date: post.date,
                                    tags: post.tags,
                                    slug: post.slug,
                                    excerpt: post.excerpt
                                }, post.slug))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subscribe__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);
function getStaticProps({ params  }) {
    const allPosts = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)(_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .POST_HEADER_FIELDS */ .$h);
    const author = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAuthorBySlug */ .ye)(params.slug);
    return {
        props: {
            author: {
                ...author,
                posts: allPosts.filter((post)=>post.author === author.slug)
            }
        }
    };
}
function getStaticPaths() {
    return {
        paths: (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllAuthors */ .uk)().map((author)=>({
                params: {
                    slug: author.slug
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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,970,971,398,445,182], () => (__webpack_exec__(9905)));
module.exports = __webpack_exports__;

})();