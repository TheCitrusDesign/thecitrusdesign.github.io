exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 7274:
/***/ ((module) => {

// Exports
module.exports = {
	"subscribe": "Subscribe_subscribe__HXN02",
	"subscribe_wrap": "Subscribe_subscribe_wrap__hD_3D",
	"subscribe_form": "Subscribe_subscribe_form__B_BDn"
};


/***/ }),

/***/ 2445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7274);
/* harmony import */ var _styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Subscribe = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${(_styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default().subscribe)} flex-col sm:flex-cols flex items-center md:justify-between md:mb-12`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "global-padding text-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        "Subscribe to",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "the newsletters"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default().subscribe_wrap),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: (_styles_Subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default().subscribe_form),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    placeholder: "Your email address",
                                    "aria-label": "Your email address",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    children: "Subscribe"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Get access to the locked content and update for member only."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscribe);


/***/ })

};
;