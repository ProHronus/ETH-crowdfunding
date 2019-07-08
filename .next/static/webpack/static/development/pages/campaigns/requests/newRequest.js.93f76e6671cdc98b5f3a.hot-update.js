webpackHotUpdate("static\\development\\pages\\campaigns\\requests\\newRequest.js",{

/***/ "./pages/campaigns/requests/newRequest.js":
/*!************************************************!*\
  !*** ./pages/campaigns/requests/newRequest.js ***!
  \************************************************/
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
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/layout.js */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ethereum/campaing.js */ "./ethereum/campaing.js");
/* harmony import */ var _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ethereum_web3__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_ErrorForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/ErrorForm */ "./components/ErrorForm.js");
/* harmony import */ var _components_SuccessForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/SuccessForm */ "./components/SuccessForm.js");
/* harmony import */ var _ethereum_messagestrings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../ethereum/messagestrings */ "./ethereum/messagestrings.js");
/* harmony import */ var _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/valueValidation */ "./components/valueValidation.js");





















var NewRequest =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NewRequest, _Component);

  function NewRequest() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NewRequest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(NewRequest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      etherValue: '',
      description: '',
      recipient: '',
      hash: '',
      confirmationNumber: 0,
      etherValueValid: false,
      walletAddressValid: false,
      isConfirmed: false,
      btnLoading: false,
      btnDisabled: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUserInput",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, inputValueType) {
        var value, valueValid;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = event.target.value;
                _context.t0 = inputValueType;
                _context.next = _context.t0 === _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].ETHER ? 4 : _context.t0 === _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].WALLETADDRESS ? 14 : 23;
                break;

              case 4:
                _this.setState({
                  etherValue: value
                });

                valueValid = Object(_components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["isValueValid"])(value, _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].ETHER);

                if (!valueValid) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return _this.setState({
                  errorMessage: '',
                  etherValueValid: true
                });

              case 9:
                _context.next = 13;
                break;

              case 11:
                _context.next = 13;
                return _this.setState({
                  errorMessage: 'The Ether value is invalid',
                  etherValueValid: false
                });

              case 13:
                return _context.abrupt("break", 23);

              case 14:
                _this.setState({
                  recipient: value
                });

                valueValid = Object(_components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["isValueValid"])(value, _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].WALLETADDRESS);

                if (!valueValid) {
                  _context.next = 21;
                  break;
                }

                _context.next = 19;
                return _this.setState({
                  errorMessage: '',
                  walletAddressValid: true
                });

              case 19:
                _context.next = 23;
                break;

              case 21:
                _context.next = 23;
                return _this.setState({
                  errorMessage: 'The wallet address is invalid',
                  walletAddressValid: false
                });

              case 23:
                if (!(_this.state.etherValueValid && _this.state.walletAddressValid)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 26;
                return _this.setState({
                  btnDisabled: false
                });

              case 26:
                _context.next = 30;
                break;

              case 28:
                _context.next = 30;
                return _this.setState({
                  btnDisabled: true
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var campaign, web3, _this$state, description, value, recipient, accounts;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  btnLoading: true,
                  errorMessage: ''
                });

                _context2.next = 4;
                return _ethereum_campaing_js__WEBPACK_IMPORTED_MODULE_14___default.a.campaignInit(_this.props.address);

              case 4:
                campaign = _context2.sent;
                _context2.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15___default.a.web3Init();

              case 7:
                web3 = _context2.sent;
                _this$state = _this.state, description = _this$state.description, value = _this$state.etherValue, recipient = _this$state.recipient;
                _context2.prev = 9;
                _context2.next = 12;
                return web3.eth.getAccounts();

              case 12:
                accounts = _context2.sent;
                campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({
                  from: accounts[0]
                }).on('transactionHash', function (hash) {
                  _this.setState({
                    hash: hash
                  });

                  _this.setState({
                    btnLoading: false
                  });
                }).on('confirmation', function (confirmationNumber) {
                  _this.setState({
                    confirmationNumber: confirmationNumber
                  });

                  if (confirmationNumber - 3) {
                    _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute("/campaigns/".concat(_this.props.address, "/requests"));
                  }
                }).on('error', function (error) {
                  _this.setState({
                    btnLoading: false
                  });

                  if (error.message.includes('User denied transaction')) {
                    _this.setState({
                      errorMessage: _ethereum_messagestrings__WEBPACK_IMPORTED_MODULE_18__["messageStrings"].TXDENIED
                    });
                  } else {
                    _this.setState({
                      errorMessage: error.message
                    });
                  }
                });
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](9);

                _this.setState({
                  errorMessage: _context2.t0.message
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 16]]);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NewRequest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Create a new request"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        warning: !!this.state.hash
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Description"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this2.setState({
            description: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Value in Ether"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Input, {
        value: this.state.etherValue,
        onChange: function onChange(e) {
          return _this2.handleUserInput(e, _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].ETHER);
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Recipient"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Input, {
        value: this.state.recipient,
        onChange: function onChange(e) {
          return _this2.handleUserInput(e, _components_valueValidation__WEBPACK_IMPORTED_MODULE_19__["valueType"].WALLETADDRESS);
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests")
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "Back"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true,
        disabled: this.state.btnDisabled,
        loading: this.state.btnLoading
      }, "Create"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ErrorForm__WEBPACK_IMPORTED_MODULE_16__["ErrorForm"], {
        message: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SuccessForm__WEBPACK_IMPORTED_MODULE_17__["SuccessForm"], {
        hash: this.state.hash,
        confirmationNumber: this.state.confirmationNumber
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", {
                  address: props.query.address
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NewRequest;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

NewRequest.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NewRequest);

/***/ })

})
//# sourceMappingURL=newRequest.js.93f76e6671cdc98b5f3a.hot-update.js.map