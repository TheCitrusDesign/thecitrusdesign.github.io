"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 7926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$h": () => (/* binding */ POST_HEADER_FIELDS),
/* harmony export */   "DB": () => (/* binding */ POSTS_PER_PAGE),
/* harmony export */   "sc": () => (/* binding */ POST_ALL_FIELDS)
/* harmony export */ });
const POSTS_PER_PAGE = 5;
const POST_HEADER_FIELDS = [
    "slug",
    "title",
    "excerpt",
    "coverImage",
    "date",
    "tags",
    "author",
    "copyrightImage",
    "readingTime",
    "bestStories",
    "related",
    "ogImage"
];
const POST_ALL_FIELDS = [
    ...POST_HEADER_FIELDS,
    "content"
];


/***/ }),

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ use_posts_list_navigation_usePostsListNavigation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./core/helpers/constants.ts
const POSTS_PER_PAGE = 5;
const POST_HEADER_FIELDS = [
    "title",
    "coverImage",
    "date",
    "tags",
    "slug",
    "author",
    "copyrightImage",
    "content",
    "excerpt",
    "related",
    "readingTime",
    "ogImage"
];
const POST_ALL_FIELDS = [
    ...POST_HEADER_FIELDS,
    "content"
];

;// CONCATENATED MODULE: ./features/Posts/hooks/use-posts-list-navigation/usePostsListNavigation.ts


const usePostsListNavigation = (posts)=>{
    const [paginatedPosts, setPaginatedPosts] = (0,external_react_.useState)([]);
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const [lastPage, setLastPage] = (0,external_react_.useState)(1);
    const [previous, setPrevious] = (0,external_react_.useState)(false);
    const [next, setNext] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (currentPage === 1) {
            setPaginatedPosts(posts.slice(0, POSTS_PER_PAGE));
        } else {
            setPaginatedPosts(posts.slice(POSTS_PER_PAGE * (currentPage - 1), POSTS_PER_PAGE * currentPage));
        }
    }, [
        currentPage,
        posts
    ]);
    (0,external_react_.useEffect)(()=>{
        setLastPage(Math.ceil(posts.length / POSTS_PER_PAGE));
    }, [
        posts
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentPage > 1) setPrevious(true);
        if (currentPage === 1) setPrevious(false);
    }, [
        currentPage
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentPage < lastPage) setNext(true);
        if (currentPage === lastPage) setNext(false);
    }, [
        currentPage,
        lastPage
    ]);
    const previousPage = ()=>setCurrentPage((prevState)=>prevState - 1);
    const nextPage = ()=>setCurrentPage((prevState)=>prevState + 1);
    return {
        paginatedPosts,
        previous,
        next,
        previousPage,
        nextPage
    };
};
/* harmony default export */ const use_posts_list_navigation_usePostsListNavigation = (usePostsListNavigation);

;// CONCATENATED MODULE: ./features/Posts/hooks/index.ts




/***/ }),

/***/ 7398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$h": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.$h),
/* harmony export */   "DB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DB),
/* harmony export */   "Eb": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_1__.Eb),
/* harmony export */   "SO": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_1__.SO),
/* harmony export */   "qj": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.q),
/* harmony export */   "sc": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.sc)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7926);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(341);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components___WEBPACK_IMPORTED_MODULE_1__]);
_components___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;