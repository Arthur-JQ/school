/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.js */ \"./src/test.js\");\n/* harmony import */ var _test1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test1.js */ \"./src/test1.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');\n\naccSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));\n\nfunction toggleAccordion() {\n  const items = document.querySelectorAll('.js-acc-item');\n  const thisItem = this.parentNode;\n\n  items.forEach(item => {\n    if (thisItem == item) {\n      thisItem.classList.toggle('is-open');\n      return;\n    }\n    item.classList.remove('is-open');\n  });\n}\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ }),

/***/ "./src/test1.js":
/*!**********************!*\
  !*** ./src/test1.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst swiper = new Swiper('.swiper', {\n    // Optional parameters\n    direction: 'horizontal',\n    slidesPerView: 3,\n    breakpoints: {\n      // when window width is >= 320px\n      // 320: {\n      //   slidesPerView: 2,\n      //   spaceBetween: 20\n      // },\n      // when window width is >= 480px\n      // 480: {\n      //   slidesPerView: 3,\n      //   spaceBetween: 30\n      // },\n      // when window width is >= 640px\n      640: {\n        slidesPerView: 2,\n        spaceBetween: 40\n      }\n    },\n    loop: true,\n  \n    // If we need pagination\n    pagination: {\n      el: '.swiper-pagination',\n    },\n  \n    // Navigation arrows\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev',\n    },\n  \n    // And if we need scrollbar\n    scrollbar: {\n      el: '.swiper-scrollbar',\n    },\n  });\n\n//# sourceURL=webpack:///./src/test1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;