webpackHotUpdate("static\\development\\pages\\campaigns\\requests\\indexRequests.js",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaing.js */ "./ethereum/campaing.js");
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ethereum_web3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ErrorForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ErrorForm */ "./components/ErrorForm.js");
/* harmony import */ var _SuccessForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SuccessForm */ "./components/SuccessForm.js");
/* harmony import */ var _ethereum_messagestrings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ethereum/messagestrings */ "./ethereum/messagestrings.js");


















var web3;

var RequestRow =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(RequestRow, _Component);

  function RequestRow() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      errorMessage: '',
      hash: '',
      confirmationNumber: 0,
      btnApproveLoading: false,
      btnFinalizeLoading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onApprove",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var campaign, accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13___default.a.web3Init();

              case 3:
                web3 = _context.sent;

                _this.setState({
                  btnApproveLoading: true,
                  errorMessage: ''
                });

                _context.next = 7;
                return _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12___default.a.campaignInit(_this.props.address);

              case 7:
                campaign = _context.sent;
                _context.next = 10;
                return web3.eth.getAccounts();

              case 10:
                accounts = _context.sent;
                _context.prev = 11;
                _context.next = 14;
                return campaign.methods.approveRequest(_this.props.id).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    hash: hash,
                    btnApproveLoading: false
                  });
                }).on('confirmation', function (confirmationNumber) {
                  _this.setState({
                    confirmationNumber: confirmationNumber
                  });

                  if (confirmationNumber == 1) {
                    _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
                  }
                }).on('error', function (error) {
                  _this.setState({
                    btnApproveLoading: false
                  });

                  if (error.message.includes('User denied transaction')) {
                    _this.setState({
                      errorMessage: _ethereum_messagestrings__WEBPACK_IMPORTED_MODULE_17__["messageStrings"].TXDENIED
                    });
                  } else {
                    _this.setState({
                      errorMessage: error.message
                    });
                  }
                });

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](11);

                _this.setState({
                  errorMessage: _context.t0.message,
                  btnApproveLoading: false
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onFinalize",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var campaign, accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13___default.a.web3Init();

              case 3:
                web3 = _context2.sent;

                _this.setState({
                  btnFinalizeLoading: true,
                  errorMessage: ''
                });

                _context2.next = 7;
                return _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_12___default.a.campaignInit(_this.props.address);

              case 7:
                campaign = _context2.sent;
                _context2.next = 10;
                return web3.eth.getAccounts();

              case 10:
                accounts = _context2.sent;
                _context2.prev = 11;
                _context2.next = 14;
                return campaign.methods.finalizeRequest(_this.props.id).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    hash: hash,
                    btnFinalizeLoading: false
                  });
                }).on('confirmation', function (confirmationNumber) {
                  _this.setState({
                    confirmationNumber: confirmationNumber
                  });

                  if (confirmationNumber == 1) {
                    _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].replaceRoute("/campaigns/".concat(_this.props.address, "/requests"));
                  }
                }).on('error', function (error) {
                  _this.setState({
                    btnFinalizeLoading: false
                  });

                  if (error.message.includes('User denied transaction')) {
                    _this.setState({
                      errorMessage: _ethereum_messagestrings__WEBPACK_IMPORTED_MODULE_17__["messageStrings"].TXDENIED
                    });
                  } else {
                    _this.setState({
                      errorMessage: error.message
                    });
                  }
                });

              case 14:
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](11);

                _this.setState({
                  errorMessage: _context2.t0.message,
                  btnFinalizeLoading: false
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[11, 16]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestRow, [{
    key: "FinalizerValidator",
    value: function FinalizerValidator() {
      if (!this.props.request.complete) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          loading: this.state.btnApproveLoading
        }, "Approve");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
          as: "p",
          color: "blue"
        }, "Finalized");
      }
    }
  }, {
    key: "ApprovedValidator",
    value: function () {
      var _ApprovedValidator = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13___default.a.web3Init();

              case 2:
                web3 = _context3.sent;
                _context3.next = 5;
                return web3.eth.getAccounts();

              case 5:
                accounts = _context3.sent;

                if (this.props.request.approvalsThisRequest(accounts[0])) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
                  color: "green",
                  basic: true,
                  onClick: this.onApprove,
                  loading: this.state.btnApproveLoading
                }, "Approve"));

              case 10:
                return _context3.abrupt("return", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  as: "p",
                  color: "blue"
                }, "Approved"));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ApprovedValidator() {
        return _ApprovedValidator.apply(this, arguments);
      }

      return ApprovedValidator;
    }()
  }, {
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", id, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", request.desciption, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", request.value, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", request.recipient, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", request.approvalCount, "/", approversCount, " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, " ", this.ApprovedValidator), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Cell, null, this.FinalizerValidator())));
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

RequestRow.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  request: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  approversCount: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=indexRequests.js.783f603f34507d1ad01a.hot-update.js.map