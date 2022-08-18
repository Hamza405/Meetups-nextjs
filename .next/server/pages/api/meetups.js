module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/meetups.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/meetups.js":
/*!******************************!*\
  !*** ./pages/api/meetups.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { MongoClient } from \"mongodb\";\n// export async function handler ( req, res ) {\n//     const client = await MongoClient.connect( 'mongodb://localhost:27017/meetups' );\n//     const db = client.db();\n//     const meetupsColl = db.collection( 'meetups' );\n//     const result = await meetupsColl.find().toArray();\n//     const meetups = result.map( m => ( {\n//         id: m._id.toString(),\n//         title: m.title,\n//         image: m.image,\n//         address: m.address\n//     } ) );\n//     res.status( 201 ).json( { meetups: meetups } );\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVldHVwcy5qcz9iNmQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVldHVwcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKCByZXEsIHJlcyApIHtcblxuLy8gICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L21lZXR1cHMnICk7XG4vLyAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICAgIGNvbnN0IG1lZXR1cHNDb2xsID0gZGIuY29sbGVjdGlvbiggJ21lZXR1cHMnICk7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGwuZmluZCgpLnRvQXJyYXkoKTtcbi8vICAgICBjb25zdCBtZWV0dXBzID0gcmVzdWx0Lm1hcCggbSA9PiAoIHtcblxuLy8gICAgICAgICBpZDogbS5faWQudG9TdHJpbmcoKSxcbi8vICAgICAgICAgdGl0bGU6IG0udGl0bGUsXG4vLyAgICAgICAgIGltYWdlOiBtLmltYWdlLFxuLy8gICAgICAgICBhZGRyZXNzOiBtLmFkZHJlc3NcblxuLy8gICAgIH0gKSApO1xuLy8gICAgIHJlcy5zdGF0dXMoIDIwMSApLmpzb24oIHsgbWVldHVwczogbWVldHVwcyB9ICk7XG5cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/meetups.js\n");

/***/ })

/******/ });