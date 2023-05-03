(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2758:
/***/ ((module) => {

// Exports
module.exports = {
	"heroIntro_content": "HeroIntro_heroIntro_content__dgOCH",
	"heroIntro_header": "HeroIntro_heroIntro_header__MmYLK",
	"title": "HeroIntro_title__q_fG5"
};


/***/ }),

/***/ 482:
/***/ ((module) => {

// Exports
module.exports = {
	"section_header": "SectionHeader_section_header__q3IG6",
	"title": "SectionHeader_title__B6vzA",
	"subtitle": "SectionHeader_subtitle__WVZud"
};


/***/ }),

/***/ 9503:
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
/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1161);
/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keen_slider_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9463);
/* harmony import */ var _hero_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1164);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6935);
/* harmony import */ var _section_separator_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4301);
/* harmony import */ var _featured_subtitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9761);
/* harmony import */ var _slider_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7205);
/* harmony import */ var _styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2423);
/* harmony import */ var _styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6443);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slider_preview__WEBPACK_IMPORTED_MODULE_7__]);
_slider_preview__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const HeroHeader = ({ posts  })=>{
    const [currentSlide, setCurrentSlide] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [sliderRef, instanceRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({
        mode: "snap",
        initial: 0,
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created () {
            setLoaded(true);
        },
        slides: {
            origin: "auto",
            perView: 3.5,
            spacing: 18
        },
        breakpoints: {
            "(max-width: 768px)": {
                initial: 0,
                slides: {
                    origin: "auto",
                    perView: 1.5,
                    spacing: 18
                }
            },
            "(min-width: 769px)": {
                initial: 0,
                slides: {
                    origin: "auto",
                    perView: 1.5,
                    spacing: 18
                }
            },
            "(min-width: 1180px)": {
                initial: 0,
                slides: {
                    origin: "auto",
                    perView: 3.5,
                    spacing: 18
                }
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().heroHeader_section),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().heroHeader_wrap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().heroHeader_content),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hero_intro__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: `Hey, I'm ${_core_constants__WEBPACK_IMPORTED_MODULE_10__/* .SITE_NAME */ .px}.`,
                        subtitle: "I provide some inspiring stories informations."
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_separator_light__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().featuredPosts_section),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "global-padding",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "global-featured-title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_featured_subtitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    title: "Get ready for the",
                                    subtitle: "best posts reading"
                                }),
                                loaded && instanceRef.current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "arrow-navigation",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                                            left: true,
                                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.prev(),
                                            disabled: currentSlide === 0
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                                            onClick: (e)=>e.stopPropagation() || instanceRef.current?.next(),
                                            disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_HeroHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().featuredPosts_padding),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: sliderRef,
                            className: "keen-slider",
                            children: posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: post.bestStories ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_preview__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        title: post.title,
                                        slug: post.slug,
                                        coverImage: post.coverImage,
                                        author: post.author,
                                        tags: post.tags,
                                        excerpt: post.excerpt
                                    }) : null
                                }, index))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroHeader);
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        onClick: props.onClick,
        className: `arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
            props.left && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            }),
            !props.left && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2758);
/* harmony import */ var _styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1__);


const HeroIntro = ({ title , subtitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1___default().heroIntro_content)} global-padding`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1___default().heroIntro_header),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_HeroIntro_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: subtitle
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroIntro);


/***/ }),

/***/ 8327:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Posts_components__WEBPACK_IMPORTED_MODULE_2__]);
_Posts_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const HeroPost = ({ title , excerpt , coverImage , author , date , tags , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8 md:mb-16 global-image-post",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .CoverImage */ .y5, {
                    title: title,
                    src: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "global-tags mb-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .PostTag */ .Md, {
                                            tags: tags
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-right text-lg mb-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_2__/* .DateFormatter */ .CN, {
                                            dateString: date
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-5xl leading-tight",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: {
                                        pathname: `${"http://localhost:3000"}/blog/${slug}`
                                    },
                                    className: "hover:underline",
                                    children: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg leading-relaxed mb-4",
                                children: excerpt
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9463);


const HeroIntro = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
                children: "Bloggy."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: [
                    "A statically generated blog example using",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://nextjs.org/",
                        className: "underline hover:text-blue-600 duration-200 transition-colors",
                        children: "Next.js"
                    }),
                    " ",
                    "and ",
                    _core_constants__WEBPACK_IMPORTED_MODULE_1__/* .SITE_NAME */ .px,
                    "."
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroIntro);


/***/ }),

/***/ 4868:
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
/* harmony import */ var _section_separator_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4301);
/* harmony import */ var _section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1212);
/* harmony import */ var _post_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_preview__WEBPACK_IMPORTED_MODULE_4__]);
_post_preview__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MoreStories = ({ posts  })=>{
    // Number of posts dislplayed on page load
    const [initialItems, setInitialItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6);
    // Number of posts Loaded when click on "Load More" button
    function handleClick() {
        setInitialItems((loadItems)=>loadItems + 6);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_separator_light__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        subtitle: "See the latest",
                        title: "written articles."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:grid-cols-3 lg:gap-x-4 gap-y-20 mb-32",
                        children: posts.slice(0, initialItems).map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_preview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                title: post.title,
                                coverImage: post.coverImage,
                                author: post.author,
                                date: post.date,
                                tags: post.tags,
                                slug: post.slug,
                                excerpt: post.excerpt
                            }, post.slug))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid items-center justify-items-center px-4 mb-32",
                        children: initialItems < posts.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "rounded-full bg-gray-300 hover:bg-light-blue text-white font-bold py-2 px-4 transition-bg-blue duration-200",
                            onClick: handleClick,
                            children: "LOAD MORE POSTS"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreStories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7205:
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
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6443);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _Posts_components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SliderPreview = ({ title , coverImage , excerpt , tags , slug , author  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "keen-slider__slide",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "mt-5 mb-5 global-radius",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts_components__WEBPACK_IMPORTED_MODULE_3__/* .PostTag */ .Md, {
                            tags: tags
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-2xl sm:text-xl mb-3 font-bold leading-relaxed",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `${"http://localhost:3000"}/blog/${slug}`,
                            className: "hover:underline",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg sm:text-base font-medium leading-relaxed mb-4",
                        children: excerpt
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderPreview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9463);
/* harmony import */ var _features_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7970);
/* harmony import */ var components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6935);
/* harmony import */ var _components_hero_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9503);
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2445);
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9042);
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8327);
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_4__, _components_hero_header__WEBPACK_IMPORTED_MODULE_6__, _components_hero_post__WEBPACK_IMPORTED_MODULE_9__, _components_more_stories__WEBPACK_IMPORTED_MODULE_10__]);
([_features_Posts__WEBPACK_IMPORTED_MODULE_3__, components_layout__WEBPACK_IMPORTED_MODULE_4__, _components_hero_header__WEBPACK_IMPORTED_MODULE_6__, _components_hero_post__WEBPACK_IMPORTED_MODULE_9__, _components_more_stories__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Index({ allPosts  }) {
    const heroPost = allPosts[0] // Set to 0 to see the latest post
    ;
    const morePosts = allPosts.slice(0) // Let number 0 to see all posts by the load more button in more-stories.tsx file
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${_core_constants__WEBPACK_IMPORTED_MODULE_11__/* .SITE_NAME */ .px} - ${_core_constants__WEBPACK_IMPORTED_MODULE_11__/* .SITE_DESCRIPTION */ .vk}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    posts: allPosts
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_subscribe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_intro__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                        heroPost && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            title: heroPost.title,
                            excerpt: heroPost.excerpt,
                            coverImage: heroPost.coverImage,
                            author: heroPost.author,
                            date: heroPost.date,
                            tags: heroPost.tags,
                            slug: heroPost.slug
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ()=>{
    const allPosts = (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)(_features_Posts__WEBPACK_IMPORTED_MODULE_3__/* .POST_HEADER_FIELDS */ .$h);
    return {
        props: {
            allPosts: allPosts.map((allPost)=>({
                    ...allPost,
                    author: (0,_core_helpers_api__WEBPACK_IMPORTED_MODULE_2__/* .getAuthorBySlug */ .ye)(allPost.author)
                }))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6443:
/***/ (() => {



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

/***/ 1161:
/***/ ((module) => {

"use strict";
module.exports = require("keen-slider/react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,970,971,398,445,182], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();