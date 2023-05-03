(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 558:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation_wrap": "PostNavigation_navigation_wrap__cRRea",
	"navigation_image": "PostNavigation_navigation_image__bEI8d",
	"navigation_content": "PostNavigation_navigation_content__hmT5w"
};


/***/ }),

/***/ 5421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post_navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: ./features/Posts/components/cover-image/CoverImage.tsx
var CoverImage = __webpack_require__(4658);
// EXTERNAL MODULE: ./styles/PostNavigation.module.css
var PostNavigation_module = __webpack_require__(558);
var PostNavigation_module_default = /*#__PURE__*/__webpack_require__.n(PostNavigation_module);
;// CONCATENATED MODULE: ./components/post-navigation.tsx





const PostNavigation = ({ previous , next  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "navigation-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (PostNavigation_module_default()).navigation_wrap,
            children: [
                previous && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: previous.href,
                    className: "pr-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: external_classnames_default()("relative w-[160px] h-[160px] mr-3 pointer-events-auto top-0 transition-all duration-300 custom", {
                                "hover:drop-shadow-image hover:top-[-3px]": previous.coverImage
                            }),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CoverImage/* default */.Z, {
                                slug: "",
                                title: previous.title,
                                src: previous.coverImage
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (PostNavigation_module_default()).navigation_content,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "inline-block font-medium leading-none m-[2vh_0_1vh] pr-2",
                                            children: "Previous Post"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: external_classnames_default()("text-2xl font-bold leading-normal pointer-events-auto", {
                                                "hover:underline": previous.title
                                            }),
                                            children: previous.title
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                next && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: next.href,
                    className: "ml-auto pl-10 text-right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (PostNavigation_module_default()).navigation_content,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            className: "inline-block font-medium leading-none m-[2vh_0_1vh] pl-2",
                                            children: "Next Post"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: external_classnames_default()("text-2xl font-bold leading-normal pointer-events-auto", {
                                                "hover:underline": next.title
                                            }),
                                            children: next.title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: external_classnames_default()("relative w-[160px] h-[160px] ml-3 pointer-events-auto top-0 transition-all duration-300 custom", {
                                "hover:drop-shadow-image hover:top-[-3px]": next.coverImage
                            }),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CoverImage/* default */.Z, {
                                slug: "",
                                title: next.title,
                                src: next.coverImage
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const post_navigation = (PostNavigation);


/***/ }),

/***/ 5604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ScrollProgress = ()=>{
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useScroll)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "fixed top-0 left-0 right-0 bottom-0 z-50 h-3 bg-light-blue origin-[0%]",
            style: {
                scaleX: scrollYProgress
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollProgress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function markdownToHtml(markdown) {
    const result = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(markdown);
    return result.toString();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8599:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1971);
/* harmony import */ var _features_Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7398);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9463);
/* harmony import */ var _core_utilities_markdownToHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4982);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7970);
/* harmony import */ var _components_scroll_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5604);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6935);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_post_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5421);
/* harmony import */ var _components_section_separator_light__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4301);
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Posts__WEBPACK_IMPORTED_MODULE_4__, _core_utilities_markdownToHtml__WEBPACK_IMPORTED_MODULE_5__, _components_layout__WEBPACK_IMPORTED_MODULE_6__, _components_scroll_progress__WEBPACK_IMPORTED_MODULE_7__]);
([_features_Posts__WEBPACK_IMPORTED_MODULE_4__, _core_utilities_markdownToHtml__WEBPACK_IMPORTED_MODULE_5__, _components_layout__WEBPACK_IMPORTED_MODULE_6__, _components_scroll_progress__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const PostPage = ({ post , related , previous , next  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const title = `${post.title} | ${_core_constants__WEBPACK_IMPORTED_MODULE_13__/* .SITE_NAME */ .px}`;
    if (!router.isFallback && !post?.slug) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: post.ogImage.url
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_scroll_progress__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .Post.Title */ .SO.Title, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: "my-48",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .Post.Header */ .SO.Header, {
                                    title: post.title,
                                    coverImage: post.coverImage,
                                    author: post.author,
                                    date: post.date,
                                    tags: post.tags,
                                    copyrightImage: post.copyrightImage,
                                    excerpt: post.excerpt,
                                    readingTime: post.readingTime
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .Post.Content */ .SO.Content, {
                                    content: post.content
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_separator_light__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_navigation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            previous: previous && {
                                title: previous.title,
                                coverImage: previous.coverImage,
                                href: previous.slug
                            },
                            next: next && {
                                title: next.title,
                                coverImage: next.coverImage,
                                href: next.slug
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_separator_light__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                        related.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .Post.RelatedArticles */ .SO.RelatedArticles, {
                            relatedArticles: related
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subscribe__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);
async function getStaticProps({ params  }) {
    const post = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getPostBySlug */ .zQ)(params.slug, _features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .POST_ALL_FIELDS */ .sc);
    const author = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getAuthorBySlug */ .ye)(post.author);
    const content = await (0,_core_utilities_markdownToHtml__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(post.content || "");
    const previous = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getPreviousPost */ .O2)(params.slug);
    const next = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getNextPost */ .QV)(params.slug);
    // Store the current tags of post
    const relatedTags = post.tags || [];
    // Filter related tags out of current post
    const concatRelated = relatedTags.slice(0, _features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .POSTS_PER_PAGE */ .DB).map((rt)=>(0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getPostsByTag */ .J4)(rt, _features_Posts__WEBPACK_IMPORTED_MODULE_4__/* .POST_HEADER_FIELDS */ .$h).filter((aPost)=>aPost.tags !== post.tags));
    // Concat the result
    const related = concatRelated.concat.apply([], concatRelated);
    return {
        props: {
            post: {
                ...post,
                content,
                author
            },
            previous,
            next,
            related: related.map((post)=>({
                    ...post,
                    author: (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getAuthorBySlug */ .ye)(post.author)
                }))
        }
    };
}
async function getStaticPaths() {
    const posts = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_3__/* .getAllPosts */ .Bd)([
        "slug"
    ]);
    return {
        paths: posts.map((post)=>({
                params: {
                    slug: post.slug
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

/***/ 5566:
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

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
var __webpack_exports__ = __webpack_require__.X(0, [636,61,970,971,398,445], () => (__webpack_exec__(8599)));
module.exports = __webpack_exports__;

})();