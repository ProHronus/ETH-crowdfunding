webpackHotUpdate("static\\development\\pages\\campaigns\\requests\\indexRequests.js",{

/***/ "./pages/campaigns/requests/indexRequests.js":
/*!***************************************************!*\
  !*** ./pages/campaigns/requests/indexRequests.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/layout.js */ "./components/layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/campaing.js */ "./ethereum/campaing.js");
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ethereum_web3__WEBPACK_IMPORTED_MODULE_15__);
















var web3;

var RequstIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(RequstIndex, _Component);

  function RequstIndex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequstIndex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(RequstIndex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequstIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkNetwork();
    }
  }, {
    key: "checkNetwork",
    value: function () {
      var _checkNetwork = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var errorMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default.a.web3Init();

              case 3:
                web3 = _context.sent;
                errorMessage = _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default.a.isError();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.setState({
                  errorMessage: _context.t0
                });

              case 10:
                if (errorMessage) {
                  this.setState({
                    errorMessage: errorMessage
                  });
                } else {
                  this.setState({
                    btnDisabled: false
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function checkNetwork() {
        return _checkNetwork.apply(this, arguments);
      }

      return checkNetwork;
    }()
  }, {
    key: "renderRows",
    value: function renderRows() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_RequestRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: index,
          id: index,
          approversCount: _this.props.approversCount,
          request: request,
          address: _this.props.address
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "List of Requests"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/campaigns/".concat(this.props.address)
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "Back"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests/new")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true
      }, "Add Request"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        celled: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Id"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Description"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Amount"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Reciepient"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Approvals"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Approve"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, null, "Finalize"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body, null, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(props) {
        var address, campaign, requestCount, approversCount, requestsRaw, requests;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                _context2.next = 3;
                return _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12___default.a.campaignInit(address);

              case 3:
                campaign = _context2.sent;
                _context2.next = 6;
                return campaign.methods.getRequestsCount().call();

              case 6:
                requestCount = +_context2.sent;
                _context2.next = 9;
                return campaign.methods.approversCount().call();

              case 9:
                approversCount = +_context2.sent;
                _context2.next = 12;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default.a.web3Init();

              case 12:
                web3 = _context2.sent;
                _context2.next = 15;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(Array(requestCount).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 15:
                requestsRaw = _context2.sent;
                requests = requestsRaw.map(function (element) {
                  element.approvalCount = element.approvalCount.toNumber();
                  element.value = web3.utils.fromWei(element.value.toString(), 'ether');
                  return element;
                });
                return _context2.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  approversCount: approversCount
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequstIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

RequstIndex.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
  requests: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object),
  approversCount: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RequstIndex);

/***/ })

})
//# sourceMappingURL=indexRequests.js.8dd3edaec7e7c04fcb80.hot-update.js.map