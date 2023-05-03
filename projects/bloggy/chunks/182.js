exports.id = 182;
exports.ids = [182];
exports.modules = {

/***/ 2423:
/***/ ((module) => {

// Exports
module.exports = {
	"heroHeader_section": "HeroHeader_heroHeader_section__p0BKo",
	"heroHeader_wrap": "HeroHeader_heroHeader_wrap__hj4or",
	"featuredPosts_section": "HeroHeader_featuredPosts_section__vg5rK",
	"featuredPosts_global": "HeroHeader_featuredPosts_global__1ZEEt",
	"featuredPosts_title": "HeroHeader_featuredPosts_title__7YCcR",
	"featuredPosts_padding": "HeroHeader_featuredPosts_padding__LCAAw"
};


/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2423);
/* harmony import */ var _styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);


const FeaturedSubtitle = ({ title , subtitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().featuredPosts_global),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().featuredPosts_title),
            children: [
                title,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: subtitle
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedSubtitle);


/***/ }),

/***/ 5961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _Posts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7711);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PostPreview = ({ title , coverImage , author , date , excerpt , tags , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "mb-3 global-radius",
                variants: _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__/* .globalImage */ .cA,
                whileHover: "whileHover",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_3__/* .CoverImage */ .y5, {
                        slug: slug,
                        title: title,
                        src: coverImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "global-item-authors",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item-author",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: {
                                    pathname: `${"http://localhost:3000"}/authors/${author.permalink}`
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_3__/* .AvatarImage */ .F$, {
                                    name: author.name,
                                    src: author.profilePictureUrl,
                                    maxWidth: "56px",
                                    maxHeight: "56px",
                                    className: "rounded-[100px] object-cover"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pr-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_3__/* .PostTag */ .Md, {
                                tags: tags
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-right text-sm",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_3__/* .DateFormatter */ .CN, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-2xl mb-3 font-bold leading-relaxed",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: {
                                pathname: `${"http://localhost:3000"}/blog/${slug}`
                            },
                            className: "hover:underline",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg font-medium leading-relaxed mb-4",
                        children: excerpt
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPreview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;