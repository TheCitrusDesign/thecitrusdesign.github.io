exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 9170:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__h_8de"
};


/***/ }),

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"header_section": "Header_header_section__XeiAr",
	"header_wrap": "Header_header_wrap__hBMzg",
	"header_logo": "Header_header_logo__vOXs4",
	"header_nav": "Header_header_nav__bQWFz",
	"header_search": "Header_header_search__2_iqz",
	"is_mobile": "Header_is_mobile__n1o8v",
	"is_desktop": "Header_is_desktop__XMzVU",
	"search_section": "Header_search_section__eZuwm",
	"search_overlay": "Header_search_overlay__ytgtf",
	"search_wrap": "Header_search_wrap__B_CEF",
	"search_content": "Header_search_content__32jtQ",
	"search_form": "Header_search_form__GBa_H",
	"search_results": "Header_search_results___wFNw",
	"search_meta": "Header_search_meta__kmu75",
	"search_counter": "Header_search_counter__v6ttQ",
	"search_info": "Header_search_info__8kPl8",
	"search_counter_results": "Header_search_counter_results__QMpEg",
	"search-results": "Header_search-results__ikFAf",
	"search_close": "Header_search_close__humnL"
};


/***/ }),

/***/ 6230:
/***/ ((module) => {

// Exports
module.exports = {
	"related_wrap": "RelatedPost_related_wrap__MqVn9",
	"small_title": "RelatedPost_small_title__JELJJ",
	"subtitle": "RelatedPost_subtitle__CebcI",
	"article_wrap": "RelatedPost_article_wrap__r3gyr",
	"article_title": "RelatedPost_article_title__DPLQZ"
};


/***/ }),

/***/ 9300:
/***/ ((module) => {

// Exports
module.exports = {
	"post_header": "SinglePost_post_header__FCZsW",
	"post_header_container": "SinglePost_post_header_container__vFm0Y",
	"post_header_content": "SinglePost_post_header_content__J2Smh",
	"post_header_content_wrap": "SinglePost_post_header_content_wrap__tblhc",
	"post_excerpt": "SinglePost_post_excerpt__SQTMf",
	"post_meta": "SinglePost_post_meta__jsy7Q",
	"post_meta_content": "SinglePost_post_meta_content__Jn55e",
	"post_author": "SinglePost_post_author__quGmc",
	"post_header_image": "SinglePost_post_header_image__tixlT",
	"post_image": "SinglePost_post_image__0nvD4"
};


/***/ }),

/***/ 6763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7711);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4666);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Modal({ show , onClose , children  }) {
    const [isBrowser, setIsBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    const handleCloseClick = (e)=>{
        e.preventDefault();
        onClose();
    };
    const modalContent = show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_section),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_wrap),
                    variants: _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__/* .searchBar */ .X6,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: .45
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_close),
                            onClick: (e)=>handleCloseClick(e),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                role: "img",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M11.997 10.846L1.369.219 1.363.214A.814.814 0 00.818.005.821.821 0 000 .822c0 .201.074.395.208.545l.006.006L10.842 12 .214 22.626l-.006.006a.822.822 0 00-.208.546c0 .447.37.817.818.817a.814.814 0 00.551-.215l10.628-10.627 10.628 10.628.005.005a.816.816 0 001.368-.603.816.816 0 00-.213-.552l-.006-.005L13.151 12l10.63-10.627c.003 0 .004-.003.006-.005A.82.82 0 0024 .817a.817.817 0 00-1.37-.602l-.004.004-10.63 10.627z"
                                })
                            })
                        }),
                        children
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_overlay),
                    variants: _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__/* .overlay */ .IJ,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: .25
                    }
                })
            ]
        })
    }) : null;
    if (isBrowser) {
        return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto global-padding",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 9556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const CrImage = ({ name , linkName , link  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-left text-xs font-normal my-2",
        children: [
            "Photo by ",
            name,
            " /",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: {
                    pathname: `${link}`
                },
                className: "underline hover:text-light-blue",
                children: linkName
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrImage);


/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6935);
/* harmony import */ var _section_separator_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4301);



const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "pt-[140px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_separator_light__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-28 flex flex-col lg:flex-row items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                            children: "Statically Generated with Next.js."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://nextjs.org/docs/basic-features/pages",
                                    className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                                    children: "Read Documentation"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `https://github.com/vercel/next.js/tree/canary/examples/`,
                                    className: "mx-3 font-bold hover:underline",
                                    children: "View on GitHub"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NavMenu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {
                            pathname: `${"http://localhost:3000"}`
                        },
                        children: "Demos"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {
                            pathname: `${"http://localhost:3000"}`
                        },
                        children: "Style Guide"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {
                            pathname: `${"http://localhost:3000"}`
                        },
                        children: "Membership"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                                className: "hover:text-almost-black mr-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        role: "img",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                                enter: "transition duration-100 ease-out",
                                enterFrom: "transform scale-95 opacity-0",
                                enterTo: "transform scale-100 opacity-100",
                                leave: "transition duration-75 ease-out",
                                leaveFrom: "transform scale-100 opacity-100",
                                leaveTo: "transform scale-95 opacity-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                                    className: "absolute right-0 mt-4 w-[10rem] py-3 rounded-[18px] shadow-lg bg-zinc-800 text-ghost-white ring-1 ring-black ring-opacity-5 focus:outline-none ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Features"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/tag`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Tags"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/authors`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Authors"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/subscribe`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Subscribe"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/contact`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Contact"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/authors`
                                                    },
                                                    className: `${active && "text-light-blue underline"} block w-full text-left px-4 py-2 text-sm cursor-pointer`,
                                                    children: "Get Theme"
                                                })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7251:
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
/* harmony import */ var _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7711);
/* harmony import */ var _Posts_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SearchCard = ({ title , coverImage , date , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "mb-3",
                variants: _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_3__/* .globalImage */ .cA,
                whileHover: "whileHover",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_4__/* .CoverImage */ .y5, {
                    slug: slug,
                    title: title,
                    src: coverImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-left text-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_4__/* .DateFormatter */ .CN, {
                    dateString: date
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-sm font-bold leading-relaxed",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: {
                        pathname: `${"http://localhost:3000"}/blog/${slug}`
                    },
                    className: "hover:underline",
                    children: title
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5631:
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4666);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Sidebar = ({ openSidebar =false , setOpenSidebar  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
            show: openSidebar,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                    className: "fixed right-0 top-0 w-[100%] z-30 h-screen",
                    enter: "transition ease-in-out duration-300 transform",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transition ease-in-out duration-300 transform",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "sidebar",
                        className: `fixed right-0 top-0 w-[100%] h-screen bg-almost-white pt-20 p-8 z-50`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setOpenSidebar(false),
                                "aria-expanded": openSidebar,
                                "aria-controls": "sidebar",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "absolute top-6 right-5 w-8 h-8",
                                    src: `${"http://localhost:3000"}/assets/navmenu/icon-close-menu.svg`,
                                    alt: "Close Menu"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex flex-col space-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: {
                                                pathname: `${"http://localhost:3000"}`
                                            },
                                            children: "Demos"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: {
                                                pathname: `${"http://localhost:3000"}`
                                            },
                                            children: "Style Guide"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: {
                                                pathname: `${"http://localhost:3000"}`
                                            },
                                            children: "Membership"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure, {
                                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Button, {
                                                            className: "flex items-center text-left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "mr-4",
                                                                    children: "Other Options"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "w-7 h-4",
                                                                    src: `${"http://localhost:3000"}/assets/navmenu/icon-arrow-${open ? "up" : "down"}.svg`,
                                                                    alt: "Arrow"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Panel, {
                                                            className: "px-4 pt-4 pb-2 text-sm text-gray-500",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "flex flex-col space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}`
                                                                            },
                                                                            className: ``,
                                                                            children: "Features"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}/tag`
                                                                            },
                                                                            className: ``,
                                                                            children: "Tags"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}/authors`
                                                                            },
                                                                            className: ``,
                                                                            children: "Authors"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}/subscribe`
                                                                            },
                                                                            className: ``,
                                                                            children: "Sunscribe"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}/contact`
                                                                            },
                                                                            className: ``,
                                                                            children: "Contact"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: `${"http://localhost:3000"}`
                                                                            },
                                                                            className: ``,
                                                                            children: "Get Theme"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-5 items-center justify-items-center pt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().is_mobile)} global-button`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    role: "img",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z"
                                                    })
                                                }),
                                                "Search"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "signup",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: {
                                                    pathname: `${"http://localhost:3000"}/contact`
                                                },
                                                className: "signup global-button",
                                                children: "Join"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                    enter: "transition-opacity ease-linear duration-100",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity ease-linear duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setOpenSidebar(false),
                        className: `"w-full h-full fixed bg-ghost-white opacity-100 z-10 inset-0`
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7711);
/* harmony import */ var _components_common_modal_modal_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6763);
/* harmony import */ var _components_navmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6637);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5631);
/* harmony import */ var _components_search_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7251);
/* harmony import */ var components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6935);
/* harmony import */ var _components_section_separator_light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4301);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4666);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_common_modal_modal_search__WEBPACK_IMPORTED_MODULE_5__, _components_navmenu__WEBPACK_IMPORTED_MODULE_6__, _components_sidebar__WEBPACK_IMPORTED_MODULE_7__, _components_search_card__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_common_modal_modal_search__WEBPACK_IMPORTED_MODULE_5__, _components_navmenu__WEBPACK_IMPORTED_MODULE_6__, _components_sidebar__WEBPACK_IMPORTED_MODULE_7__, _components_search_card__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = ()=>{
    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    /** Start Search Posts */ const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const searchEndpoint = (query)=>`/api/search?q=${query}`;
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const query = event.target.value;
        setQuery(query);
        if (query.length) {
            fetch(searchEndpoint(query)).then((res)=>res.json()).then((res)=>{
                setResults(res.results);
            });
        } else {
            setResults([]);
        }
    }, []);
    const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setActive(true);
        window.addEventListener("click", onClick);
    }, []);
    /** Reset the input form when user close search bar */ const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false);
            setQuery("");
            setResults([]);
            window.removeEventListener("click", onClick);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header_section)} mb-5`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header_wrap)} global-padding`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header_logo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: {
                                pathname: `${"http://localhost:3000"}`
                            },
                            className: "hover:underline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight",
                                children: "Bloggy."
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:flex lg:space-x-7 lg:ml-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header_nav)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navmenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setOpenSidebar(true),
                                "aria-expanded": openSidebar,
                                "aria-controls": "sidebar",
                                "aria-label": "Open Menu",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "block lg:hidden",
                                    src: `${"http://localhost:3000"}/assets/navmenu/icon-menu.svg`,
                                    alt: "Menu"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                openSidebar: openSidebar,
                                setOpenSidebar: setOpenSidebar
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden lg:flex lg:space-x-7 lg:items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().header_search)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().is_desktop)} global-button`,
                                            onClick: ()=>setOpenModal(true),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        role: "img",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z"
                                                        })
                                                    }),
                                                    "Search"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "signup",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: {
                                                pathname: `${"http://localhost:3000"}/contact`
                                            },
                                            className: "global-button",
                                            children: "Join"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_modal_modal_search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClose: ()=>setOpenModal(false),
                show: openModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_content),
                    ref: searchRef,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_form),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_input),
                                    onChange: onChange,
                                    onFocus: onFocus,
                                    value: query,
                                    type: "text",
                                    placeholder: "Search"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_meta),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_info),
                                        children: "Please enter title of post."
                                    })
                                })
                            ]
                        }),
                        active && results.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            variants: _core_utilities_MotionVariants__WEBPACK_IMPORTED_MODULE_4__/* .modalSearch */ .rM,
                            initial: "initial",
                            animate: "animate",
                            exit: "exit",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: .45
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_counter)}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_11___default().search_counter_results),
                                                children: [
                                                    results.length,
                                                    " "
                                                ]
                                            }),
                                            "results for your search"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_separator_light__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:grid-cols-8 lg:gap-x-4 gap-y-20 mt-10 mb-32",
                                        children: results.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_card__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                title: post.title,
                                                coverImage: post.coverImage,
                                                date: post.date,
                                                slug: post.slug
                                            }, post.slug))
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6077);
/* harmony import */ var _header___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3340);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header___WEBPACK_IMPORTED_MODULE_2__]);
_header___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                role: "main",
                className: "min-h-screen",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9463);



const Meta = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: `A statically generated blog using Next.js and ${_core_constants__WEBPACK_IMPORTED_MODULE_2__/* .SITE_NAME */ .px}.`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: _core_constants__WEBPACK_IMPORTED_MODULE_2__/* .HOME_OG_IMAGE_URL */ .vC
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);


/***/ }),

/***/ 4301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SectionSeparator = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "mx-auto border-t border-neutral-200"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionSeparator);


/***/ }),

/***/ 9463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UJ": () => (/* binding */ WORDS_PER_MINUTE),
/* harmony export */   "px": () => (/* binding */ SITE_NAME),
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL),
/* harmony export */   "vk": () => (/* binding */ SITE_DESCRIPTION)
/* harmony export */ });
/* unused harmony exports FAVICON_URL, TWITTER_URL, FACEBOOK_URL, LINKEDIN_URL */
const SITE_NAME = "Bloggy";
const SITE_DESCRIPTION = "Informations Blog";
const FAVICON_URL = "/assets/media/Logo-D2C-fond-blc.png";
const TWITTER_URL = "";
const FACEBOOK_URL = "";
const LINKEDIN_URL = "";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";
const WORDS_PER_MINUTE = 200;


/***/ }),

/***/ 7711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IJ": () => (/* binding */ overlay),
/* harmony export */   "X6": () => (/* binding */ searchBar),
/* harmony export */   "cA": () => (/* binding */ globalImage),
/* harmony export */   "rM": () => (/* binding */ modalSearch)
/* harmony export */ });
/* unused harmony export globalArticle */
const globalImage = {
    whileHover: {
        y: -5,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        transition: {
            duration: 0.25
        }
    }
};
/** */ const globalArticle = {
    initial: {
        y: "30%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: "30%",
        opacity: 0
    }
};
/** Variants for Modal Search Bar in Header */ const searchBar = {
    initial: {
        y: "100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: "100%",
        opacity: 0
    }
};
const overlay = {
    initial: {
        opacity: 0,
        backgroundColor: "",
        backdropFilter: "blur(0px)"
    },
    animate: {
        opacity: 1,
        backgroundColor: "rgba(51, 51, 51, .8)",
        backdropFilter: "blur(9px)"
    },
    exit: {
        opacity: 0,
        backgroundColor: "",
        backdropFilter: "blur(0px)"
    }
};
const modalSearch = {
    initial: {
        y: "20%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: "20%",
        opacity: 0
    }
};


/***/ }),

/***/ 2521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const AvatarImage = ({ name , src , slug , className , maxWidth , maxHeight  })=>{
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: `/assets/blog/authors/${src}`,
        alt: `${name} post author`,
        className: className,
        width: 640,
        height: 640,
        style: {
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            marginRight: "1rem"
        },
        loading: "lazy"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: {
                pathname: `${"http://localhost:3000"}/authors/${slug}`
            },
            children: image
        }) : image
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarImage);


/***/ }),

/***/ 4658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const CoverImage = ({ title , src , slug  })=>{
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: src,
        alt: `Cover Image for ${title}`,
        className: "global-image-orientation global-radius",
        width: 630,
        height: 350,
        loading: "lazy"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: {
                pathname: `${"http://localhost:3000"}/blog/${slug}`
            },
            "aria-label": title,
            children: image
        }) : image
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverImage);


/***/ }),

/***/ 3244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


const DateFormatter = ({ dateString  })=>{
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "LLLL	d, yyyy")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFormatter);


/***/ }),

/***/ 745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CN": () => (/* reexport safe */ _date_formatter_DateFormatter__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Eb": () => (/* reexport safe */ _posts_list_PostsList__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "F$": () => (/* reexport safe */ _avatar_image_AvatarImage__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Md": () => (/* reexport safe */ _post_tag_PostTag__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "SO": () => (/* reexport safe */ _post_Post__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "wE": () => (/* reexport safe */ _post_related_card_PostRelatedCard__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "y5": () => (/* reexport safe */ _cover_image_CoverImage__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _avatar_image_AvatarImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2521);
/* harmony import */ var _cover_image_CoverImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4658);
/* harmony import */ var _date_formatter_DateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3244);
/* harmony import */ var _post_related_card_PostRelatedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
/* harmony import */ var _post_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var _post_tag_PostTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1203);
/* harmony import */ var _posts_list_PostsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_related_card_PostRelatedCard__WEBPACK_IMPORTED_MODULE_3__, _post_Post__WEBPACK_IMPORTED_MODULE_4__, _posts_list_PostsList__WEBPACK_IMPORTED_MODULE_6__]);
([_post_related_card_PostRelatedCard__WEBPACK_IMPORTED_MODULE_3__, _post_Post__WEBPACK_IMPORTED_MODULE_4__, _posts_list_PostsList__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5924:
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
/* harmony import */ var _styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6230);
/* harmony import */ var _styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PostRelatedCard = ({ title , slug , coverImage , author  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "relative w-full mb-4 aspect-auto global-radius",
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_5___default().article_title),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: {
                        pathname: `${"http://localhost:3000"}/blog/${slug}`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: title
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostRelatedCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const PostTag = ({ tags  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "global-tags sm: text-sm",
        children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/tag/${tag}`,
                children: tag
            }, tag))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTag);


/***/ }),

/***/ 1955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_title_PostTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7728);
/* harmony import */ var _post_content_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5178);
/* harmony import */ var _post_header_PostHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2145);
/* harmony import */ var _post_related_articles_PostRelatedArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_header_PostHeader__WEBPACK_IMPORTED_MODULE_3__, _post_related_articles_PostRelatedArticles__WEBPACK_IMPORTED_MODULE_4__]);
([_post_header_PostHeader__WEBPACK_IMPORTED_MODULE_3__, _post_related_articles_PostRelatedArticles__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Post = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
Post.Title = _post_title_PostTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
Post.Content = _post_content_PostContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
Post.Header = _post_header_PostHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
Post.RelatedArticles = _post_related_articles_PostRelatedArticles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9170);
/* harmony import */ var _components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);


const PostContent = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_components_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().markdown),
        dangerouslySetInnerHTML: {
            __html: content
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContent);


/***/ }),

/***/ 2145:
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
/* harmony import */ var _Posts_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
/* harmony import */ var _Posts_components_post_post_title_PostTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7728);
/* harmony import */ var _components_copyright_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9556);
/* harmony import */ var _styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9300);
/* harmony import */ var _styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Posts_components__WEBPACK_IMPORTED_MODULE_2__]);
_Posts_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PostHeader = ({ title , coverImage , author , date , tags , copyrightImage , excerpt , readingTime  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header_wrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header_container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header_content),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header_content_wrap),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .PostTag */ .Md, {
                                        tags: tags
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components_post_post_title_PostTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        children: title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_excerpt),
                                        children: excerpt
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_meta),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_author),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: {
                                                        pathname: `${"http://localhost:3000"}/authors/${author.permalink}`
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .AvatarImage */ .F$, {
                                                        name: author.name,
                                                        src: author.profilePictureUrl,
                                                        maxWidth: "56px",
                                                        maxHeight: "56px",
                                                        className: "rounded-[500px] object-cover"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_meta_content),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: {
                                                                pathname: `${"http://localhost:3000"}/authors/${author.permalink}`
                                                            },
                                                            className: "hover:underline",
                                                            children: author.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .DateFormatter */ .CN, {
                                                        dateString: date
                                                    }),
                                                    " - ",
                                                    readingTime
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_header_image),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_SinglePost_module_css__WEBPACK_IMPORTED_MODULE_5___default().post_image),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .CoverImage */ .y5, {
                                            title: title,
                                            src: coverImage
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_copyright_image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            name: copyrightImage.name,
                                            linkName: copyrightImage.linkName,
                                            link: copyrightImage.link
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Posts_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);
/* harmony import */ var _styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6230);
/* harmony import */ var _styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Posts_components__WEBPACK_IMPORTED_MODULE_1__]);
_Posts_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PostRelatedArticles = ({ relatedArticles  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().related_wrap),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().small_title),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                    className: (_styles_RelatedPost_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),
                    children: [
                        "You also like ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "this related posts"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:grid-cols-4 lg:gap-x-4 gap-y-20 mb-32",
                children: relatedArticles.map((related)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_1__/* .PostRelatedCard */ .wE, {
                        slug: related.slug,
                        title: related.title,
                        coverImage: related.coverImage,
                        author: related.author
                    }, related.slug))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostRelatedArticles);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PostTitle = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 mt-6 text-center md:text-left",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTitle);


/***/ }),

/***/ 9803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts_list_item_PostsListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8728);
/* harmony import */ var _posts_list_navigation_PostsListNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_posts_list_item_PostsListItem__WEBPACK_IMPORTED_MODULE_1__]);
_posts_list_item_PostsListItem__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PostsList = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:grid-cols-3 lg:gap-x-4 gap-y-20 mb-32",
        children: children
    });
};
PostsList.Item = _posts_list_item_PostsListItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
PostsList.Navigation = _posts_list_navigation_PostsListNavigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8728:
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





const PostsListItem = ({ title , coverImage , date , excerpt , tags , author , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "relative w-full mb-4 aspect-auto global-radius",
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
                            href: `${"http://localhost:3000"}/blog/${slug}`,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsListItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PostsListNavigation = ({ previous , next , previousPage , nextPage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            previous && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: previousPage,
                children: "Newer Posts"
            }),
            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: nextPage,
                children: "Older posts"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsListNavigation);


/***/ })

};
;