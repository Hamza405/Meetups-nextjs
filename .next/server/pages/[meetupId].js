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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hamza/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n\n\n\nconst DetailsPage = ({\n  meetup\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: meetup.title,\n    image: meetup.image,\n    address: meetup.address,\n    description: meetup.description\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb://localhost:27017/meetups');\n  const db = client.db();\n  const meetupsColl = db.collection('meetups');\n  const result = await meetupsColl.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    fallback: false,\n    paths: result.map(m => ({\n      params: {\n        meetupId: m._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  const meetupId = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb://localhost:27017/meetups');\n  const db = client.db();\n  const meetupsColl = db.collection('meetups');\n  const result = await meetupsColl.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"])(meetupId)\n  });\n  client.close();\n  return {\n    props: {\n      meetup: {\n        id: result._id.toString(),\n        title: result.title,\n        address: result.address,\n        description: result.description,\n        image: result.image\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiRGV0YWlsc1BhZ2UiLCJtZWV0dXAiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibSIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJwcm9wcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBRTtBQUFFQztBQUFGLENBQUYsS0FBa0I7QUFDbEMsc0JBQU8scUVBQUMseUVBQUQ7QUFBZ0IsU0FBSyxFQUFHQSxNQUFNLENBQUNDLEtBQS9CO0FBQXVDLFNBQUssRUFBR0QsTUFBTSxDQUFDRSxLQUF0RDtBQUE4RCxXQUFPLEVBQUdGLE1BQU0sQ0FBQ0csT0FBL0U7QUFBeUYsZUFBVyxFQUFHSCxNQUFNLENBQUNJO0FBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVILENBSEQ7O0FBS08sZUFBZUMsY0FBZixHQUFpQztBQUNwQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFxQixtQ0FBckIsQ0FBckI7QUFDQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsV0FBVyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBZSxTQUFmLENBQXBCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLFdBQVcsQ0FBQ0csSUFBWixDQUFrQixFQUFsQixFQUFzQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUF0QixFQUFtQ0MsT0FBbkMsRUFBckI7QUFDQVQsUUFBTSxDQUFDVSxLQUFQO0FBQ0EsU0FBTztBQUNIQyxZQUFRLEVBQUUsS0FEUDtBQUVIQyxTQUFLLEVBQUVOLE1BQU0sQ0FBQ08sR0FBUCxDQUFZQyxDQUFDLEtBQU07QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGdCQUFRLEVBQUVGLENBQUMsQ0FBQ04sR0FBRixDQUFNUyxRQUFOO0FBQVo7QUFBVixLQUFOLENBQWI7QUFGSixHQUFQO0FBSUg7QUFDTSxlQUFlQyxjQUFmLENBQWdDQyxPQUFoQyxFQUEwQztBQUM3QyxRQUFNSCxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0osTUFBUixDQUFlQyxRQUFoQztBQUNBLFFBQU1oQixNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFxQixtQ0FBckIsQ0FBckI7QUFDQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsV0FBVyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBZSxTQUFmLENBQXBCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBcUI7QUFBRVosT0FBRyxFQUFFYSx3REFBUSxDQUFFTCxRQUFGO0FBQWYsR0FBckIsQ0FBckI7QUFDQWhCLFFBQU0sQ0FBQ1UsS0FBUDtBQUNBLFNBQU87QUFDSFksU0FBSyxFQUFFO0FBQ0g1QixZQUFNLEVBQUU7QUFDSjZCLFVBQUUsRUFBRWpCLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXUyxRQUFYLEVBREE7QUFFSnRCLGFBQUssRUFBRVcsTUFBTSxDQUFDWCxLQUZWO0FBR0pFLGVBQU8sRUFBRVMsTUFBTSxDQUFDVCxPQUhaO0FBSUpDLG1CQUFXLEVBQUVRLE1BQU0sQ0FBQ1IsV0FKaEI7QUFLSkYsYUFBSyxFQUFFVSxNQUFNLENBQUNWO0FBTFY7QUFETDtBQURKLEdBQVA7QUFXSDtBQUNjSCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwc0RldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBEZXRhaWxzUGFnZSA9ICggeyBtZWV0dXAgfSApID0+IHtcbiAgICByZXR1cm4gPE1lZXR1cHNEZXRhaWxzIHRpdGxlPXsgbWVldHVwLnRpdGxlIH0gaW1hZ2U9eyBtZWV0dXAuaW1hZ2UgfSBhZGRyZXNzPXsgbWVldHVwLmFkZHJlc3MgfSBkZXNjcmlwdGlvbj17IG1lZXR1cC5kZXNjcmlwdGlvbiB9XG4gICAgLz47XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L21lZXR1cHMnICk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IG1lZXR1cHNDb2xsID0gZGIuY29sbGVjdGlvbiggJ21lZXR1cHMnICk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGwuZmluZCgge30sIHsgX2lkOiAxIH0gKS50b0FycmF5KCk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgICAgICBwYXRoczogcmVzdWx0Lm1hcCggbSA9PiAoIHsgcGFyYW1zOiB7IG1lZXR1cElkOiBtLl9pZC50b1N0cmluZygpIH0gfSApIClcbiAgICB9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICggY29udGV4dCApIHtcbiAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L21lZXR1cHMnICk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IG1lZXR1cHNDb2xsID0gZGIuY29sbGVjdGlvbiggJ21lZXR1cHMnICk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGwuZmluZE9uZSggeyBfaWQ6IE9iamVjdElkKCBtZWV0dXBJZCApIH0gKTtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LnRpdGxlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3VsdC5pbWFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

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