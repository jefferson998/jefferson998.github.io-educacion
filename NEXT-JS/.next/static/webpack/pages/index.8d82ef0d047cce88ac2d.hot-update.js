webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/jeffersonco/educacion/NEXT-JS/components/ProductList/ProductList.tsx",
    _this = undefined;





var mapProductsToCards = function mapProductsToCards(products) {
  return products.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id,
        price = _ref.price,
        image = _ref.image;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(id),
      passHref: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        as: "a",
        header: name,
        image: image,
        meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
          style: {
            color: 'red'
          },
          children: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)
    }, id, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this);
  });
};

var ProductList = function ProductList(_ref2) {
  var products = _ref2.products;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    itemsPerRow: 2,
    stackable: true,
    children: mapProductsToCards(products)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, _this);
};

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC9Qcm9kdWN0TGlzdC50c3giXSwibmFtZXMiOlsibWFwUHJvZHVjdHNUb0NhcmRzIiwicHJvZHVjdHMiLCJtYXAiLCJuYW1lIiwiaWQiLCJwcmljZSIsImltYWdlIiwiY29sb3IiLCJQcm9kdWN0TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FDekJBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsRUFBVCxRQUFTQSxFQUFUO0FBQUEsUUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsUUFBb0JDLEtBQXBCLFFBQW9CQSxLQUFwQjtBQUFBLHdCQUNYLHFFQUFDLGdEQUFEO0FBQWUsVUFBSSxFQUFDLGVBQXBCO0FBQW9DLFFBQUUscUJBQWNGLEVBQWQsQ0FBdEM7QUFBMEQsY0FBUSxNQUFsRTtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsVUFBRSxFQUFDLEdBREw7QUFFRSxjQUFNLEVBQUVELElBRlY7QUFHRSxhQUFLLEVBQUVHLEtBSFQ7QUFJRSxZQUFJLGVBQUUscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVCxXQUFsQjtBQUFBLG9CQUFxQ0Y7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFXRCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVztBQUFBLEdBQWIsQ0FEeUI7QUFBQSxDQUEzQjs7QUFZQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdQLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHNCQUNsQixxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxlQUFXLEVBQUUsQ0FBekI7QUFBNEIsYUFBUyxNQUFyQztBQUFBLGNBQ0dELGtCQUFrQixDQUFDQyxRQUFEO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7S0FBTU8sVztBQU1TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZDgyZWYwZDA0N2NjZTg4YWMyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG50eXBlIFByb2R1Y3RMaXN0UHJvcHMgPSB7XG4gIHByb2R1Y3RzOiBUUHJvZHVjdFtdXG59XG5cbmNvbnN0IG1hcFByb2R1Y3RzVG9DYXJkcyA9IChwcm9kdWN0czogVFByb2R1Y3RbXSkgPT5cbiAgcHJvZHVjdHMubWFwKCh7IG5hbWUsIGlkLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxuICAgIDxMaW5rIGtleT17aWR9IGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke2lkfWB9IHBhc3NIcmVmPlxuICAgICAgPENhcmRcbiAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgaGVhZGVyPXtuYW1lfVxuICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIG1ldGE9ezxDYXJkLk1ldGEgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntwcmljZX08L0NhcmQuTWV0YT59XG4gICAgICAvPlxuICAgIDwvTGluaz5cbiAgKSlcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBwcm9kdWN0cyB9OiBQcm9kdWN0TGlzdFByb3BzKSA9PiAoXG4gIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBzdGFja2FibGU+XG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XG4gIDwvQ2FyZC5Hcm91cD5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3QiXSwic291cmNlUm9vdCI6IiJ9