"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[color]";
exports.ids = ["pages/[color]"];
exports.modules = {

/***/ "./pages/[color].js":
/*!**************************!*\
  !*** ./pages/[color].js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Color),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/colors.json */ \"./data/colors.json\");\n\n\nasync function getStaticPaths() {\n    // loop through the colors array\n    const paths = _data_colors_json__WEBPACK_IMPORTED_MODULE_1__.map((color)=>({\n            // return an object with params.color set to the color's name\n            params: {\n                color: color.name\n            }\n        })\n    );\n    // Paths will look like this:\n    // [\n    //   { params: { color: 'Marsala' } },\n    //   { params: { color: 'Illuminating'} }\n    //   ...\n    // ]\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // find the info for just one color\n    const color1 = _data_colors_json__WEBPACK_IMPORTED_MODULE_1__.find((color)=>color.name === params.color\n    );\n    // return it in the necessary format.\n    return {\n        props: {\n            color: color1\n        }\n    };\n}\nfunction Color({ color  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"color-page\",\n        style: {\n            backgroundColor: color.hex\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: color.name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TDCM006\\\\Development\\\\hello-next\\\\pages\\\\[color].js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TDCM006\\\\Development\\\\hello-next\\\\pages\\\\[color].js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bY29sb3JdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBRWxDLGVBQWVDLGNBQWMsR0FBRztJQUNyQyxnQ0FBZ0M7SUFDaEMsTUFBTUMsS0FBSyxHQUFHRixrREFBVSxDQUFDLENBQUNJLEtBQUssR0FBSyxDQUFDO1lBQ25DLDZEQUE2RDtZQUM3REMsTUFBTSxFQUFFO2dCQUFFRCxLQUFLLEVBQUVBLEtBQUssQ0FBQ0UsSUFBSTthQUFFO1NBQzlCLENBQUM7SUFBQSxDQUFDO0lBRUgsNkJBQTZCO0lBQzdCLElBQUk7SUFDSixzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztRQUFFSixLQUFLO1FBQUVLLFFBQVEsRUFBRSxLQUFLO0tBQUUsQ0FBQztDQUNuQztBQUNNLGVBQWVDLGNBQWMsQ0FBQyxFQUFFSCxNQUFNLEdBQUUsRUFBRTtJQUMvQyxtQ0FBbUM7SUFDbkMsTUFBTUQsTUFBSyxHQUFHSixtREFBVyxDQUFDLENBQUNJLEtBQUssR0FBS0EsS0FBSyxDQUFDRSxJQUFJLEtBQUtELE1BQU0sQ0FBQ0QsS0FBSztJQUFBLENBQUM7SUFDakUscUNBQXFDO0lBQ3JDLE9BQU87UUFBRU0sS0FBSyxFQUFFO1lBQUVOLEtBQUssRUFBTEEsTUFBSztTQUFFO0tBQUUsQ0FBQztDQUM3QjtBQUNjLFNBQVNPLEtBQUssQ0FBQyxFQUFFUCxLQUFLLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsWUFBWTtRQUFDQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFWCxLQUFLLENBQUNZLEdBQUc7U0FBRTtrQkFDL0QsNEVBQUNDLElBQUU7c0JBQUViLEtBQUssQ0FBQ0UsSUFBSTs7Ozs7Z0JBQU07Ozs7O1lBQ2pCLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9bY29sb3JdLmpzP2JiMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vZGF0YS9jb2xvcnMuanNvblwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vIGxvb3AgdGhyb3VnaCB0aGUgY29sb3JzIGFycmF5XHJcbiAgY29uc3QgcGF0aHMgPSBjb2xvcnMubWFwKChjb2xvcikgPT4gKHtcclxuICAgIC8vIHJldHVybiBhbiBvYmplY3Qgd2l0aCBwYXJhbXMuY29sb3Igc2V0IHRvIHRoZSBjb2xvcidzIG5hbWVcclxuICAgIHBhcmFtczogeyBjb2xvcjogY29sb3IubmFtZSB9LFxyXG4gIH0pKTtcclxuXHJcbiAgLy8gUGF0aHMgd2lsbCBsb29rIGxpa2UgdGhpczpcclxuICAvLyBbXHJcbiAgLy8gICB7IHBhcmFtczogeyBjb2xvcjogJ01hcnNhbGEnIH0gfSxcclxuICAvLyAgIHsgcGFyYW1zOiB7IGNvbG9yOiAnSWxsdW1pbmF0aW5nJ30gfVxyXG4gIC8vICAgLi4uXHJcbiAgLy8gXVxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGZpbmQgdGhlIGluZm8gZm9yIGp1c3Qgb25lIGNvbG9yXHJcbiAgY29uc3QgY29sb3IgPSBjb2xvcnMuZmluZCgoY29sb3IpID0+IGNvbG9yLm5hbWUgPT09IHBhcmFtcy5jb2xvcik7XHJcbiAgLy8gcmV0dXJuIGl0IGluIHRoZSBuZWNlc3NhcnkgZm9ybWF0LlxyXG4gIHJldHVybiB7IHByb3BzOiB7IGNvbG9yIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvcih7IGNvbG9yIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXggfX0+XHJcbiAgICAgIDxoMT57Y29sb3IubmFtZX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY29sb3JzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsImNvbG9yIiwicGFyYW1zIiwibmFtZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaW5kIiwicHJvcHMiLCJDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGV4IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[color].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./data/colors.json":
/*!**************************!*\
  !*** ./data/colors.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Illuminating","hex":"#F5DF4D"},{"name":"Classic Blue","hex":"#0f4c81"},{"name":"Living Coral","hex":"#FA7268"},{"name":"Ultra Violet","hex":"#5f4b8b"},{"name":"Greenery","hex":"#88b04b"},{"name":"Rose Quartz","hex":"#F7CAC9"},{"name":"Marsala","hex":"#B57170"},{"name":"Radiant Orchid","hex":"#b067a1"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[color].js"));
module.exports = __webpack_exports__;

})();