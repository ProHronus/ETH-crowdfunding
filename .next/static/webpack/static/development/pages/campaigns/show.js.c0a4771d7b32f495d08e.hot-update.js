webpackHotUpdate("static\\development\\pages\\campaigns\\show.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _messagestrings = __webpack_require__(/*! ./messagestrings */ "./ethereum/messagestrings.js");

var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");

//import React from 'react';
var web3;
var desiredNetwork = '4';
var initCount = 0;
var errorType;

function web3Init() {
  return _web3Init.apply(this, arguments);
}

function _web3Init() {
  _web3Init = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var provider;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window === 'undefined' || typeof window.ethereum === 'undefined')) {
              _context.next = 7;
              break;
            }

            provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/8b15c91a2edb4a25af067d0bbfec716d');
            web3 = new Web3(provider);
            errorType = _messagestrings.messageStrings.NOMETAMASK;
            return _context.abrupt("return", web3);

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return ethereum.enable();

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](7);
            console.log(_context.t0.message);

            if (_context.t0.message.includes('User denied')) {
              errorType = _messagestrings.messageStrings.AUTHDENIED;
            }

          case 16:
            web3 = new Web3(window['ethereum']);

            if (ethereum.networkVersion !== desiredNetwork) {
              errorType = _messagestrings.messageStrings.WRONGNETWORK;
            }

            return _context.abrupt("return", web3);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 12]]);
  }));
  return _web3Init.apply(this, arguments);
}

function isError() {
  return errorType;
}

module.exports = {
  web3Init: web3Init,
  isError: isError
};

/***/ })

})
//# sourceMappingURL=show.js.c0a4771d7b32f495d08e.hot-update.js.map