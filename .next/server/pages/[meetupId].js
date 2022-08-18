module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetails.module.css */ \"./components/meetups/MeetupDetails.module.css\");\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hamza/Desktop/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetails.js\";\n\n\nconst MeetupsDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: \"img\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupsDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcz82ZTNkIl0sIm5hbWVzIjpbIk1lZXR1cHNEZXRhaWxzIiwicHJvcHMiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUtDLEtBQUYsSUFBYTtBQUNoQyxzQkFBTztBQUFTLGFBQVMsRUFBR0MsZ0VBQU8sQ0FBQ0MsU0FBN0I7QUFBQSw0QkFDSDtBQUFLLFNBQUcsRUFBR0YsS0FBSyxDQUFDRyxLQUFqQjtBQUF5QixTQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQUVIO0FBQUEsZ0JBQU1ILEtBQUssQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHLGVBR0g7QUFBQSxnQkFBTUosS0FBSyxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFLSCxDQU5EOztBQVFlTiw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IE1lZXR1cHNEZXRhaWxzID0gKCBwcm9wcyApID0+IHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXsgY2xhc3Nlcy5jb250YWluZXIgfT5cbiAgICAgICAgPGltZyBzcmM9eyBwcm9wcy5pbWFnZSB9IGFsdD1cImltZ1wiPjwvaW1nPlxuICAgICAgICA8aDE+eyBwcm9wcy50aXRsZSB9PC9oMT5cbiAgICAgICAgPGgzPnsgcHJvcHMuYWRkcmVzcyB9PC9oMz5cbiAgICA8L3NlY3Rpb24+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwc0RldGFpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetupDetails.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"MeetupDetails_container__3B3zY\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzPzY1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTWVldHVwRGV0YWlsc19jb250YWluZXJfXzNCM3pZXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hamza/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n\n\n\nconst DetailsPage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"First ss\",\n    image: \"data:image/jpeg;base64,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\",\n    address: \"adress bebe\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb://localhost:27017/meetups');\n  const db = client.db();\n  const meetupsColl = db.collection('meetups');\n  const result = await meetupsColl.find({}, {\n    _id: 1\n  }).toArray();\n  return {\n    fallback: false,\n    paths: result.map(m => ({\n      params: {\n        meetupId: m._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps() {\n  // const req = context.req;\n  return {\n    props: {// meetup: {}\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiRGV0YWlsc1BhZ2UiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGwiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibSIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsTUFBTTtBQUN0QixzQkFBTyxxRUFBQyx5RUFBRDtBQUFnQixTQUFLLEVBQUMsVUFBdEI7QUFBaUMsU0FBSyxFQUFDLHlzSkFBdkM7QUFBaXZKLFdBQU8sRUFBQztBQUF6dko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBRUgsQ0FIRDs7QUFLTyxlQUFlQyxjQUFmLEdBQWlDO0FBQ3BDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQXFCLG1DQUFyQixDQUFyQjtBQUNBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFFQSxRQUFNQyxXQUFXLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFlLFNBQWYsQ0FBcEI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsV0FBVyxDQUFDRyxJQUFaLENBQWtCLEVBQWxCLEVBQXNCO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBQXRCLEVBQW1DQyxPQUFuQyxFQUFyQjtBQUNBLFNBQU87QUFDSEMsWUFBUSxFQUFFLEtBRFA7QUFFSEMsU0FBSyxFQUFFTCxNQUFNLENBQUNNLEdBQVAsQ0FBWUMsQ0FBQyxLQUFNO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFRixDQUFDLENBQUNMLEdBQUYsQ0FBTVEsUUFBTjtBQUFaO0FBQVYsS0FBTixDQUFiO0FBRkosR0FBUDtBQUlIO0FBQ00sZUFBZUMsY0FBZixHQUFpQztBQUNwQztBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFLENBQ0g7QUFERztBQURKLEdBQVA7QUFLSDtBQUNjcEIsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cHNEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBEZXRhaWxzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gPE1lZXR1cHNEZXRhaWxzIHRpdGxlPVwiRmlyc3Qgc3NcIiBpbWFnZT1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQndnSEJna0lCd2dLQ2drTERSWVBEUXdNRFJzVUZSQVdJQjBpSWlBZEh4OGtLRFFzSkNZeEp4OGZMVDB0TVRVM09qbzZJeXMvUkQ4NFF6UTVPamNCQ2dvS0RRd05HZzhQR2pjbEh5VTNOemMzTnpjM056YzNOemMzTnpjM056YzNOemMzTnpjM056YzNOemMzTnpjM056YzNOemMzTnpjM056YzNOemMzTi8vQUFCRUlBSGtBdFFNQklnQUNFUUVERVFIL3hBQWNBQUFCQlFFQkFRQUFBQUFBQUFBQUFBQUZBUUlEQkFZQUJ3ai94QUE3RUFBQkF3SUVBd1lEQkFrRkFBQUFBQUFCQUFJREJCRUZFaUV4QmhOQklqSlJZWEdCQnhTaEkwS1IwVE0xWW5PU3NjSGg4Q1ZEVW5TeS84UUFHUUVBQXdFQkFRQUFBQUFBQUFBQUFBQUFBZ01FQVFVQS84UUFJeEVBQWdNQUFnSUNBd0VCQUFBQUFBQUFBQUVDQXhFU0lRUXhFMUVpUVdHQk12L2FBQXdEQVFBQ0VRTVJBRDhBOGtZN1JTUnlQaWRkamlQUlZXT1VqWGRDcUZKb2ljUTFTWXZPd2dGeHNqOURpakp3R3ZOajVyRk5PVXF6SEtScURZcXV2eUdSVytORitqZk1EWEM3VGNKMlJabkNjVmRHOE1sMldyaWMyVmdjM2F5dGpQa2puenFjSGhEa1hjdTZzWlU3SWkwWHhPZ3c0eXhsd0NyUzA1amRsSVJtaHFCR01wTmdrcld4eUhNMUxVNWN1eDdwZzRhdllFNWE3bHEyNk1ncnVXbThpYmdWQkdsNWF0Y3RMeVhXeldObDV5UEtCVTVZUzVQSkVLS201OVExaDJLT1A0ZlpsQnVsVHRqRjlqNnZHbE5iRXkwWmN4MXhvaUVHSlRSTURRU3BLMmdiVHlXQkZycW5KR0JzdmZqSmFFdWRUTDV4S1o3YkVsVlpLb205d3VaSTBNc1FvSkNDZEVLZ3RHeXRlZXlHVTVyMkNqc3BzcWprY3lNYWxNMUlUMnhNZzZybEdKMkhVTzBYSVBrajlqVlRKL284d1NncGdUcnJrYWR6Q1FQS2UyUWhSdEdpVUxVd0drWFlaQWRiMkswT0RZenlPeE1kRmxHSEtRcmpIWENvaFkwU1cxS1I2SFQ0aFR6YlBDdXR5dUYya0ZlYXhUUGpOMnVJUnpDY1psaWUxc3h1dzlWVEc3ZlpIS2o2TmdHcGJKYVo3WjRnOWgzVXVRcHZKQ09MUkFXcGNuZ3JRcHBYUERCRklYSFlCcHVubW5mRkxrbFk1anVvY0xGWnpRU3JsN3dmaDJFdnJDQ05BaXVJNGN5a283QnV0a1J3bGphYW12Zm9xdUkxUHpMc3R0Rkk3Wk9mOE9qR2lFSy82ek5VZWVDWU9EZGlpRlZpc2ptNVJjRUlvNm5oamcwQUpLb21sWmZPNEQ4RXpuR1Qxb1VxcDF4eUxBMDdwWlRtZUNRcTVhdEJWdWdFR1VBQW9ETk5IRmU1VFlUNko3YW1uNzBpZlpvdVZUbXEyTXZsc1ZYcjZ2bkRMRTVEMmxyZThibERLNzZEcjhmZTJTellrKy9aMlZVMUV0UTZ4S2JJMHlQT1FMbXd5UjYyMVNYWTJVeHFTZm90dEFpRmlWeUh6R1l1MUM1SzBmeU1la1hjeTZVRUZURkk1cmt0K3FaY0o0Rnd0MEhCMlpTeFNXTmxYMUNVRkVtQzQ2WDgxeGNLeFJ0bnFaNDZhbGlrbG1rTm1SeHR1NXg4Z3JYQm1DeThTWTNEaHpIR09NZ3ZtbEF2a1lOejZuUUQxWHVPRzRaZ2ZDc0wyWWJUTWJJRzl1ZDFuU085WGIrMnl5ZDZnZXE4V1ZnSTRVNFRmaE5FMmZpQ2NPbUl1Mm1ZZEdEOW85VDZhZXFyWXJ4bGdlR3p2aWJGRm5ZZG1zQ3pmR25ITXJ6SkZTdUxXNmpOZlZlZDRmUzFPUDRvMkJqN09rZDI1SGZkRi9yNmY0SlhPeTE2MmRDTlZWQzlhejBMRWZpdktYdStSaEpPMllqVkNjTitJSmlmUExpVlBVVkUwa21ZT2E0QU5GdHRVVHB1QmFPbGkrMkQ1b3c2L01MZzFvOVg5ZlFhZVpRckVxVGgyT1F4UlNZZnpCb1JuRy9xU25WeDRQVjdGWFdmSkhpL1JxOE0rSTJEMWdFTDVaS1IzUVZEUTBmeEFrZmpaYUJ0UTJRQndzUWRRUWQxNHpYWU5FVGVFRmp1Z3ZkdjVxOXd6ajFSZ0xoRlVTUGtvcjJraGNibUkrTGZMNmU2b2paOWtWbFhXeFBXelZPdFlEOFZCVlZvWkYyaWdkUmprQWpEb1hCN1hDNExUZTRRYXJ4V1NwMHZZZUNvNlhvazVOK3d0VzRzTlEwZ3JQMWxUSlVPSUJKVXNjTHBOWGFLMFd3VThkemJNaGN4aXJBOFhNamRsZmRFRzBzY2pNeEl1VlNxNmhzaElBVFdUdURMWFF2czJPTG9JdGlqaGNEYTZ1OHFPU01FaENZWGMzdk8yVTlWVjhpQ3pOZEV1VEhSd2RWUVF0ZUJjTGxuS2llcGxrTHJsY2g1SHY4QURLMktlQ25XVDJ4Z29FaDdZaldGM2QxU09hOEcxaXREZ0lvbXdPNTVhSGEzQkc0VFdpaytaY0hXeTMwOUY1ZG1BQVppUURvcGhDN01HZ2JvN0l5aHo5bHJiMjFWN2h2Q284Wnh1bm9ZRzM1anJPSUhkYU5TZndXOUphWm12RGMvQ0hoOTJIWVRVWXhVZ3RsclFHd3NJdGFOcE92dWRmUUJONDV4VjBNRWtiRFl5SExvVnU2cHJLV2liQlR0eXh4eDVXdDhBTkF2SE9PS3E5ZUdIWnV0bHoyK2N6cVZyaEF3dUtUT05SSTBuTUdtd0o2QmFyZ0trRWNIekY4cjVYRUIxdG05YmVaMi9IeFdTcW9ubUNTb2VOSHlXSG90amhvZEh3bVpZQ1E4VWI3VzN2WjMrZXlxL3dDU1NUNXRqT0lPSk1RNHFxb01BdytXT0RES2M4dUpnZGxFcDJ6T2QxSGhmeTZsR2NKK0ZjVWtiaGlkZStCNGFUOWkwV0I4TzF2OUZoZUhxY3pPZmtjd1A3UGU2aGVuWVhpT054MFVkRytxamMxamJNZmE3d1BDNUNxcnJUV3RIUHV1bEdmRk13K000UFc4SVYwY0ZUSzJla2x1V1NSWHlueHNQdXVIMVVHTXhHb3BmbUhmcFF5NEkwek1GaHQ0V0dub2pmR2dtbXcxeHFKQkxKekdscE9wQnY1OUxYUVZoNWRGVGM0QzVnY0Q1aTV0OUVxMWNIaFJUUG5IV040ZXEzUHBIUXVKSmlQWnY0SC9BQW9wekxFSUJ3cXd5elRnZEkyL3pXaWZTbXlvcmJjU082T1dNYyt1ZUcyYVZXZlV2ZnU1TDh1NGJwUkNPb1JZeGU2UXRsQU55bXZtdWRGSzZJWDJVVTBYL0ZZOU5GWlVPR2pUWlNGenBBTG05bFZFVGdWWmhCQVNaeG4ra01oSmZzWStUS2JXWEo3NDdtNjVCd245RHVTTWxkUERpbzA0TDJqR1N0Y1JzYktRT0ozS2hDZTBwaVlwb21hZXE5citFM0RSdzdERGk5V3kxVld0K3lCKzVGMDkzYitsbDQvZ2RLTVF4ZWlvM056Tm5uWkc0ZUxTUmY2TDZXNXdqYXhvc0FHNkR3Q1I1TnVMajlsUGkwOG55K2luamMwY2RNNGs2MlhodkZ6K2JYUGNEYzVWNnh4SFVoN1hnSG92RzhjZVhWc21icG9GSlgzSXZtdU1NSzlYQnpzTmRHd2RvTkJiYnhDWGh6Rk9YUi9MU0FPNVpQWmRzV24rOTFMVEg3Rm5qbENHVjlISlRTbXJwUWNsOHpnUHUrUHN1bmRYc1ZKSEY4YTdKeWhMN0Y1Y3VHVmdsaEdhRWFYdm9SNGVvV21wZUlZQkFKak81aEl5dFk1b2M0K2dIUlowNHQ4ekd6TTVrVHd3TVBaN0w3ZFQ1L2traWxhWDV1VlM1Z0xYTnlCN0J3SDBTbzJTaXNSUk9tTTNyTkFYUHhlQ2FTVndnZ2hIMmtzaHpPaER0TXhBMEJPb2EzVnppZWd2Y0xqbFpHK1NUNWR1U0lBUlFOL1pBdC9KTnE4VERvMnh5VG1VUjl5S01CckdYOEFMTkhydW9NUG9aOFhxYzd4bGhhYk9jTm1qd0htZy9LYkR4UVFYNFJwVEZTUzFCSDZaMW0rZy92ZEhYSmpRMkZqWW94bFl3V2Ezd0NqZk9Bcm94NHh3NTg1Y3BOaXlxczQ2cFpaN2pzaFFHUW5kTVFpWHNjNHFJbGM1M2lvM1BIUmVQQzV0VThQVll2c1U0UHVoWWNXU2wrcTVSRXJrQXpUTjVmSkxieVZrUjNHeVZzSkp0WlJLUlpoQUJmb25DdzNWdHRNbi9MRHdSS1l0b05mRFdBVkhHVkFTTHRoRWtwOW1FRDZrTDNTcExuTU9XMmpiTHliNFYwbit1VkV6UllzcHlQNG5EOGl2VjVuNUtkeDJLZzhtV3pPbDRpeXZUS1krOXRQQzV6eUwrSzhteEtYblZNandlcTlHNHJNa2pTU2V5dk5hbHRwM1dCdGZxdG9HM0RxS2NPSExPam05UEVJaEhKYlN3UVJ6QVNDQ1FSc1Fya0ZWT1cyYkczd3puOGwxYXIxeHlSeGIvRWs1N0Q5a0dKMGxLSGs4dHpKVHJhUHI1bEM1S0tkanNzak1oMzFGaXRWZ05OQS9Gb1BtM1ptWnM3NzYzQTFWampuRjI0cmliT1cwQmtUUzBGb1VsdHV6NlIwS2FPRmY1UFRJTXBUOTkrZ1Z1aGUrbWxENll1SFFoRXFEQjNQYUphcGptZzdNTzZOaWxpYkdDMEFlaU9GY24zb21kMFk5SmFEdm5uQTNMTi9OYzZ1dnZIcDZxMU55R04yRjFWZTZOemJOR3RsY21jeHJzVVZJY0xCbGxHNlN4VFl3R2c1Z21ocGZyMFJhTGFiRmZJQ0ZFa2UyeDBURG1DelRjSG5VcDdHMzZxcVh1QjNVME1sKzhoYkdKRDNOQVBlWEpyMmdtK1pjaDBaaUlZMk5BMUNuakVlNUN0aWc1WTdZVVpoRFhXdG91WnpMY0lnNW5nRTRocmhva2RFWE9zMEo3S2R3STBOeWlUMHpOOUhvZndzcEJIU1ZsUVJxNlJyQWZRWC9BS3JXWXBOeTRMazI4ME40TnAva2NDZ2lMY3JwTzI2L250OUFGTmpzZ2RFUTBadE5iS0NiMmJaMXFvY1lwR0x4K3FMb1hocmhjTEExZFE2V1E1cmFMVjRoRkxKSThGaEN5ZFhTU3h6T2EyTjVIb3FLUmR5WkMwZ25WV1d5QUFDOXJuVXF0eTNzMWUwdDlVNHlSRmdhR0hQNDNWR2svb3ZUVk1FYjJpZ0QzUDJNanVwOGdpT0Y0WTFqaE5VV2RKdlk2MlZiQ2FCN1FKNUc2bnVnajZvcUdTanFWc1ZuYkVYV045SXR5dUdYWUttNHVOOURaVE5oZVJjdVBvbElMQnFDVTc1Q1Z3S3BZd2p0TnY3SmdpaXpkMnl1MnVMcUY4UmVWdnlHY0NDVnNRR2pWV2ZhM1pCUkJ0UGJVNnBzalFIV3N0VXpIQUdHdys2azVkOWJJaTZKcEd5ak1iZWwxNzVET0FOZEFYSFJJNkFzNkltSWdOZ2xkRzA3cmZrTitNRGxwSFJjaXBoajZybG55QmZHSG5VckoyN1dLbzFXQk9kMm1HM3VpMEhSVytnVTNGRnJTWmpKNlYxRTZ6MzNjZG05VVRvS1dTZ2hqcjhRb1pLcUtZRmtUV24vQUhMZGtEVVh0Y20xN24yc29NVy9XcmYzdjVMYThVL3FyQlArNUQvN2FqNExnMkJIcWFYMmFhZ2JJYUdNVlF5emlOdWZUcllJZGlGblg3UU5rV3FPNHo5MHM1WC9BSHZmK3E1QjJFQjhRNU1KZVFBWGVCV2V4R1NPR1BQbGExeDZsRk1SL1NOOWxtdUp1NDFVVit3SitnRlZ6dW1sT3R3RlBobE1KcDI1KzREcjZLaXpkR2NOL1JlNnJSQk52R2FCaFpsRnVuUkxKSjJkQXEwR3lzSHVsTVpFaEdURTZKSFhlbWpkUGFzQ0hDQjJYZE9FUFozMVV6ZTRFdzdGWWEwVTNCOGI5OUZLYkVaaUF1bDd2dWsrNHRmb3hJaGtmNUpoa2Ezb2xsL3FtUFdhRmlIYzVoMzBTT3R1Q29KTmtyTzRoMDloTUdadGJoY3Vac3VXNnpjUC85az1cIiBhZGRyZXNzPVwiYWRyZXNzIGJlYmVcIlxuICAgIC8+O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzICgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9tZWV0dXBzJyApO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbCA9IGRiLmNvbGxlY3Rpb24oICdtZWV0dXBzJyApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsLmZpbmQoIHt9LCB7IF9pZDogMSB9ICkudG9BcnJheSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgcGF0aHM6IHJlc3VsdC5tYXAoIG0gPT4gKCB7IHBhcmFtczogeyBtZWV0dXBJZDogbS5faWQudG9TdHJpbmcoKSB9IH0gKSApXG4gICAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoKSB7XG4gICAgLy8gY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLy8gbWVldHVwOiB7fVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });