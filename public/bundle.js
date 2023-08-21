/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formData = void 0;\nconst formData = (form) => {\n    const inputs = form.querySelectorAll(\"input\");\n    const values = {};\n    inputs.forEach((input) => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\nexports.formData = formData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybXMudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sTUFBTSxHQUErQixFQUFFLENBQUM7SUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQVRXLGdCQUFRLFlBU25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10cy10dXRvcmlhbC8uL3NyYy9mb3Jtcy50cz81MGI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtRGF0YSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGNvbnN0IHZhbHVlczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICB2YWx1ZXNbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst forms_1 = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\nconst form = document.querySelector(\"form\");\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const data = (0, forms_1.formData)(form);\n    console.log(data);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBbUM7QUFFbkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztBQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLE1BQU0sSUFBSSxHQUFHLG9CQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdHMtdHV0b3JpYWwvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtRGF0YSB9IGZyb20gXCIuL2Zvcm1zXCI7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSE7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;