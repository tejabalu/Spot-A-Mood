/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/History/History.js":
/*!*******************************************!*\
  !*** ./src/components/History/History.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/format */ \"./node_modules/date-fns/esm/format/index.js\");\n/* harmony import */ var _HistoryStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HistoryStyles */ \"./src/components/History/HistoryStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/chuan-lichang/Downloads/spot_a_mood/src/components/History/History.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar History = /*#__PURE__*/function (_Component) {\n  (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(History, _Component);\n\n  var _super = _createSuper(History);\n\n  function History() {\n    (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, History);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_Users_chuan_lichang_Downloads_spot_a_mood_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(History, [{\n    key: \"componentDidMount\",\n    // constructor() {\n    //   super();\n    //   const urlParams = new URLSearchParams(window.location.search);\n    //   const isUserAuthorized = urlParams.has('authorized') ? true : false;\n    //   this.state = {\n    //     isUserAuthorized,\n    //     musicHistory: [],\n    //   };\n    // }\n    value: function componentDidMount() {\n      var _this = this;\n\n      var isUserAuthorized = this.state.isUserAuthorized;\n\n      if (isUserAuthorized) {\n        fetch('http://localhost:5000/history').then(function (res) {\n          return res.json();\n        }).then(function (data) {\n          _this.setState({\n            musicHistory: data\n          });\n        })[\"catch\"](function (error) {\n          return console.log(error);\n        });\n        var pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_7___default())('6dd16304a8d9e90f8877', {\n          cluster: 'eu',\n          encrypted: true\n        });\n        var channel = pusher.subscribe('spotify');\n        channel.bind('update-history', function (data) {\n          _this.setState(function (prevState) {\n            var arr = data.musicHistory.map(function (item) {\n              var isPresent = prevState.musicHistory.find(function (e) {\n                return e.played_at === item.played_at;\n              });\n\n              if (isPresent === undefined) {\n                return item;\n              } else {\n                return null;\n              }\n            }).filter(Boolean);\n            return {\n              musicHistory: arr.concat(prevState.musicHistory)\n            };\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          isUserAuthorized = _this$state.isUserAuthorized,\n          musicHistory = _this$state.musicHistory;\n      var connectSpotify = isUserAuthorized ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"http://localhost:5000/login\",\n        children: \"Connect your Spotify account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, this);\n\n      var TableItem = function TableItem(item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: index + 1\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 9\n          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: item.track_name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 9\n          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_11__.default)(item.played_at, 'D MMM YYYY, hh:mma')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 9\n          }, _this2)]\n        }, item.played_at, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 7\n        }, _this2);\n      };\n\n      var RecentlyPlayed = function RecentlyPlayed() {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"recently-played\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Recent Tracks\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 9\n          }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  children: \"#\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 15\n                }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  children: \"Song title\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 15\n                }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                  children: \"Time\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 15\n                }, _this2)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 13\n              }, _this2)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 11\n            }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n              children: musicHistory.map(function (e, index) {\n                return TableItem(e, index);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 11\n            }, _this2)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 9\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 7\n        }, _this2);\n      };\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n          className: \"header\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Spotify Listening History\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"View your music history in realtime with Spotify and Pusher\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 11\n          }, this), connectSpotify, musicHistory.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RecentlyPlayed, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 40\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return History;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component); // const History = () => (\n//   <Section id=\"history\">\n//     <SectionDivider divider/>\n//     <SectionTitle>Spotify Mood History</SectionTitle>\n//     <SectionText>\n//       View your music history in realtime with Spotify<br />\n//       Recent Tracks\n//       <tbody>{musicHistory.map((e, index) => TableItem(e, index))}</tbody>\n//     </SectionText>\n//   </Section>\n// );\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (History);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeS9IaXN0b3J5LmpzPzUzNTUiXSwibmFtZXMiOlsiSGlzdG9yeSIsImlzVXNlckF1dGhvcml6ZWQiLCJzdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2V0U3RhdGUiLCJtdXNpY0hpc3RvcnkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoZXIiLCJQdXNoZXIiLCJjbHVzdGVyIiwiZW5jcnlwdGVkIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJwcmV2U3RhdGUiLCJhcnIiLCJtYXAiLCJpdGVtIiwiaXNQcmVzZW50IiwiZmluZCIsImUiLCJwbGF5ZWRfYXQiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiY29uY2F0IiwiY29ubmVjdFNwb3RpZnkiLCJUYWJsZUl0ZW0iLCJpbmRleCIsInRyYWNrX25hbWUiLCJmb3JtYXQiLCJSZWNlbnRseVBsYXllZCIsImxlbmd0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7d0NBRW9CO0FBQUE7O0FBQUEsVUFDVkMsZ0JBRFUsR0FDVyxLQUFLQyxLQURoQixDQUNWRCxnQkFEVTs7QUFHbEIsVUFBSUEsZ0JBQUosRUFBc0I7QUFDcEJFLGFBQUssQ0FBQywrQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxHQUFHO0FBQUEsaUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsU0FEWCxFQUVHRixJQUZILENBRVEsVUFBQUcsSUFBSSxFQUFJO0FBQ1osZUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWkMsd0JBQVksRUFBRUY7QUFERixXQUFkO0FBR0QsU0FO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QjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcUI7QUFBQSxPQUF2Qjs7QUFnQkEsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRTtBQUFRLG1CQUFTLEVBQUMsUUFBbEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBSUdGLGNBSkgsRUFLR3ZCLFlBQVksQ0FBQzZCLE1BQWIsS0FBd0IsQ0FBeEIsZ0JBQTRCLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUIsR0FBaUQsSUFMcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBV0Q7Ozs7RUFoR21CQyw0QyxHQW1HdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsK0RBQWV2QyxPQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGlzdG9yeS9IaXN0b3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuXG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL0hpc3RvcnlTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBjb25zdHJ1Y3RvcigpIHtcbiAgLy8gICBzdXBlcigpO1xuICAvLyAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIC8vICAgY29uc3QgaXNVc2VyQXV0aG9yaXplZCA9IHVybFBhcmFtcy5oYXMoJ2F1dGhvcml6ZWQnKSA/IHRydWUgOiBmYWxzZTtcblxuICAvLyAgIHRoaXMuc3RhdGUgPSB7XG4gIC8vICAgICBpc1VzZXJBdXRob3JpemVkLFxuICAvLyAgICAgbXVzaWNIaXN0b3J5OiBbXSxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpc1VzZXJBdXRob3JpemVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzVXNlckF1dGhvcml6ZWQpIHtcbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvaGlzdG9yeScpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG11c2ljSGlzdG9yeTogZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cbiAgICAgIGNvbnN0IHB1c2hlciA9IG5ldyBQdXNoZXIoJzZkZDE2MzA0YThkOWU5MGY4ODc3Jywge1xuICAgICAgICBjbHVzdGVyOiAnZXUnLFxuICAgICAgICBlbmNyeXB0ZWQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoJ3Nwb3RpZnknKTtcbiAgICAgIGNoYW5uZWwuYmluZCgndXBkYXRlLWhpc3RvcnknLCBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGFyciA9IGRhdGEubXVzaWNIaXN0b3J5XG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc1ByZXNlbnQgPSBwcmV2U3RhdGUubXVzaWNIaXN0b3J5LmZpbmQoXG4gICAgICAgICAgICAgICAgZSA9PiBlLnBsYXllZF9hdCA9PT0gaXRlbS5wbGF5ZWRfYXRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtdXNpY0hpc3Rvcnk6IGFyci5jb25jYXQocHJldlN0YXRlLm11c2ljSGlzdG9yeSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1VzZXJBdXRob3JpemVkLCBtdXNpY0hpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY29ubmVjdFNwb3RpZnkgPSBpc1VzZXJBdXRob3JpemVkID8gKFxuICAgICAgJydcbiAgICApIDogKFxuICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9sb2dpblwiPkNvbm5lY3QgeW91ciBTcG90aWZ5IGFjY291bnQ8L2E+XG4gICAgKTtcblxuICAgIGNvbnN0IFRhYmxlSXRlbSA9IChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPHRyIGtleT17aXRlbS5wbGF5ZWRfYXR9PlxuICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxuICAgICAgICA8dGQ+e2l0ZW0udHJhY2tfbmFtZX08L3RkPlxuICAgICAgICA8dGQ+e2Zvcm1hdChpdGVtLnBsYXllZF9hdCwgJ0QgTU1NIFlZWVksIGhoOm1tYScpfTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG5cbiAgICBjb25zdCBSZWNlbnRseVBsYXllZCA9ICgpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50bHktcGxheWVkXCI+XG4gICAgICAgIDxoMj5SZWNlbnQgVHJhY2tzPC9oMj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Tb25nIHRpdGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRpbWU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT57bXVzaWNIaXN0b3J5Lm1hcCgoZSwgaW5kZXgpID0+IFRhYmxlSXRlbShlLCBpbmRleCkpfTwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPlNwb3RpZnkgTGlzdGVuaW5nIEhpc3Rvcnk8L2gxPlxuICAgICAgICAgIDxwPlZpZXcgeW91ciBtdXNpYyBoaXN0b3J5IGluIHJlYWx0aW1lIHdpdGggU3BvdGlmeSBhbmQgUHVzaGVyPC9wPlxuXG4gICAgICAgICAge2Nvbm5lY3RTcG90aWZ5fVxuICAgICAgICAgIHttdXNpY0hpc3RvcnkubGVuZ3RoICE9PSAwID8gPFJlY2VudGx5UGxheWVkIC8+IDogbnVsbH1cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNvbnN0IEhpc3RvcnkgPSAoKSA9PiAoXG4vLyAgIDxTZWN0aW9uIGlkPVwiaGlzdG9yeVwiPlxuLy8gICAgIDxTZWN0aW9uRGl2aWRlciBkaXZpZGVyLz5cbi8vICAgICA8U2VjdGlvblRpdGxlPlNwb3RpZnkgTW9vZCBIaXN0b3J5PC9TZWN0aW9uVGl0bGU+XG4vLyAgICAgPFNlY3Rpb25UZXh0PlxuLy8gICAgICAgVmlldyB5b3VyIG11c2ljIGhpc3RvcnkgaW4gcmVhbHRpbWUgd2l0aCBTcG90aWZ5PGJyIC8+XG4vLyAgICAgICBSZWNlbnQgVHJhY2tzXG4vLyAgICAgICA8dGJvZHk+e211c2ljSGlzdG9yeS5tYXAoKGUsIGluZGV4KSA9PiBUYWJsZUl0ZW0oZSwgaW5kZXgpKX08L3Rib2R5PlxuLy8gICAgIDwvU2VjdGlvblRleHQ+XG4vLyAgIDwvU2VjdGlvbj5cbi8vICk7XG5cblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/History/History.js\n");

/***/ })

});