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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");

var _jsxFileName = "/home/jeffersonco/educacion/NEXT-JS/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps
}) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/*! exports provided: useCart, useCartMutations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartMutations", function() { return useCartMutations; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/jeffersonco/educacion/NEXT-JS/store/Cart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {};
const CartItemsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(() => {});

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(cartReducers, defaultState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartItemsContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

function cartReducers(state, {
  item,
  type,
  quantity: qtyToAdd = 1
}) {
  const existingCartItem = state[item.id];

  switch (type) {
    case 'add':
      {
        if (existingCartItem != undefined) {
          const quantity = existingCartItem.quantity + qtyToAdd;
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          [item.id]: _objectSpread(_objectSpread({}, item), {}, {
            quantity: qtyToAdd
          })
        });
      }

    case 'remove':
      {
        if (existingCartItem == undefined) {
          return state;
        }

        const quantity = existingCartItem.quantity - 1;

        if (quantity > 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        const newCartItems = _objectSpread({}, state);

        delete newCartItems[item.id];
        return newCartItems;
      }

    default:
      {
        throw new Error(`Unhandled action type: ${type}`);
      }
  }
}

const getCartSubTotal = (sum, item) => {
  sum += item.price * item.quantity;
  return sum;
};

const getCartCount = (sum, item) => sum + item.quantity;
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */


const useCart = () => {
  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartItemsContext);
  const items = Object.values(itemsById); // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);
  return {
    items,
    itemsById,
    count,
    subTotal
  };
};
const useCartMutations = () => {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartDispatchContext);

  const addToCart = (product, quantity) => dispatch({
    type: 'add',
    item: product,
    quantity
  });

  const removeFromCart = product => dispatch({
    type: 'remove',
    item: product
  });

  return {
    addToCart,
    removeFromCart
  };
};
/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2FydC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHRTdGF0ZSIsIkNhcnRJdGVtc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImNhcnRSZWR1Y2VycyIsIml0ZW0iLCJ0eXBlIiwicXVhbnRpdHkiLCJxdHlUb0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJpZCIsInVuZGVmaW5lZCIsIm5ld0NhcnRJdGVtcyIsIkVycm9yIiwiZ2V0Q2FydFN1YlRvdGFsIiwic3VtIiwicHJpY2UiLCJnZXRDYXJ0Q291bnQiLCJ1c2VDYXJ0IiwiaXRlbXNCeUlkIiwidXNlQ29udGV4dCIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY291bnQiLCJyZWR1Y2UiLCJzdWJUb3RhbCIsInVzZUNhcnRNdXRhdGlvbnMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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LFFBQVEsQ0FBQztBQUNQSSxRQUFJLEVBQUUsS0FEQztBQUVQRCxRQUFJLEVBQUV3QixPQUZDO0FBR1B0QjtBQUhPLEdBQUQsQ0FEVjs7QUFPQSxRQUFNdUIsY0FBYyxHQUFJRCxPQUFELElBQ3JCM0IsUUFBUSxDQUFDO0FBQ1BJLFFBQUksRUFBRSxRQURDO0FBRVBELFFBQUksRUFBRXdCO0FBRkMsR0FBRCxDQURWOztBQU1BLFNBQU87QUFDTEQsYUFESztBQUVMRTtBQUZLLEdBQVA7QUFJRCxDQXBCTTtBQXNCUS9CLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcbmltcG9ydCAnLi4vZ2xvYmFsLmNzcydcblxuaW1wb3J0IENhcnRQcm92aWRlciBmcm9tICdAc3RvcmUvQ2FydCdcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAvLyBBZGl0aW9uYWwgcHJvcHNcbiAgLy8gQWRpdGlvbmFsIGxheW91dFxuICAvLyBNYW5lamFyIGVycm9yZXMgLSBjb21wb25lbnREaWRDYXRjaFxuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgQ2FydEl0ZW1UeXBlID0gVFByb2R1Y3QgJiB7IHF1YW50aXR5OiBudW1iZXIgfVxuXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IENhcnRJdGVtVHlwZVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0QWN0aW9uID0ge1xuICB0eXBlOiAnYWRkJyB8ICdyZW1vdmUnXG4gIGl0ZW06IFRQcm9kdWN0XG4gIHF1YW50aXR5PzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9IGFzIENhcnRTdGF0ZVxuXG5jb25zdCBDYXJ0SXRlbXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0U3RhdGUpXG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgoKCkgPT4ge30pIGFzIERpc3BhdGNoPFxuICBDYXJ0QWN0aW9uXG4+KVxuXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcnMoXG4gIHN0YXRlOiBDYXJ0U3RhdGUsXG4gIHsgaXRlbSwgdHlwZSwgcXVhbnRpdHk6IHF0eVRvQWRkID0gMSB9OiBDYXJ0QWN0aW9uXG4pIHtcbiAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IHN0YXRlW2l0ZW0uaWRdXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYWRkJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eSArIHF0eVRvQWRkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICBxdWFudGl0eTogcXR5VG9BZGQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgLSAxXG4gICAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDYXJ0SXRlbXMgPSB7IC4uLnN0YXRlIH1cbiAgICAgIGRlbGV0ZSBuZXdDYXJ0SXRlbXNbaXRlbS5pZF1cbiAgICAgIHJldHVybiBuZXdDYXJ0SXRlbXNcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XG4gIHN1bSArPSBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eVxuICByZXR1cm4gc3VtXG59XG5jb25zdCBnZXRDYXJ0Q291bnQgPSAoc3VtOiBudW1iZXIsIGl0ZW06IENhcnRJdGVtVHlwZSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eVxuLyoqXG4gKiBIZXkgdGhlcmUgaW5zYXRpYWJseSBicmFpbixcbiAqIEFyZSB5b3UgaW50ZXJlc3RlZCBpbiB0aGlzIHBhdHRlcm4gd2hlcmUgdGhlIENvbnRleHQgdmFsdWVzIGFyZVxuICogZXhwb3NlZCB3aXRob3V0IGFjdHVhbGx5IHByb3ZpbmRpbmcgYWNjZXNzIHRvIHRoZSBDb250ZXh0IGl0c2VsZiA6KVxuICogaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL2hvdy10by11c2UtcmVhY3QtY29udGV4dC1lZmZlY3RpdmVseVxuICovXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXNCeUlkID0gdXNlQ29udGV4dChDYXJ0SXRlbXNDb250ZXh0KVxuICBjb25zdCBpdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbXNCeUlkKVxuICAvLyBOb3QgZmFtaWxpYXIgd2l0aCBBcnJheS5yZWR1Y2U/IDopXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxuICBjb25zdCBjb3VudCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0Q291bnQsIDApXG4gIGNvbnN0IHN1YlRvdGFsID0gaXRlbXMucmVkdWNlKGdldENhcnRTdWJUb3RhbCwgMClcblxuICByZXR1cm4ge1xuICAgIGl0ZW1zLFxuICAgIGl0ZW1zQnlJZCxcbiAgICBjb3VudCxcbiAgICBzdWJUb3RhbCxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVzZUNhcnRNdXRhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk/OiBudW1iZXIpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBpdGVtOiBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgfSlcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAncmVtb3ZlJyxcbiAgICAgIGl0ZW06IHByb2R1Y3QsXG4gICAgfSlcblxuICByZXR1cm4ge1xuICAgIGFkZFRvQ2FydCxcbiAgICByZW1vdmVGcm9tQ2FydCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==