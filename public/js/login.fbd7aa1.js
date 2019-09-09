(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _fetchGet = __webpack_require__(163);

var _fetchGet2 = _interopRequireDefault(_fetchGet);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (0, _reactRouterDom.withRouter)(_class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleSubmit = function () {
      console.log("登录");
      var _this$state = _this.state,
          username = _this$state.username,
          password = _this$state.password;

      (0, _fetchGet2.default)("/api2/login", {
        username: username,
        password: password
      }).then(function (res) {
        if (res.errcode === 0) {
          alert("登录成功");
          setTimeout(function () {
            console.log(_this.props.history.replace("/"));
          }, 2000);
        } else {
          alert("请检查用户名密码");
        }
      }).catch(function (e) {
        console.log(e);
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Login, [{
    key: 'handleFormChange',
    value: function handleFormChange(name, val) {
      this.setState(_defineProperty({}, name, val));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          _state$username = _state.username,
          username = _state$username === undefined ? '' : _state$username,
          _state$password = _state.password,
          password = _state$password === undefined ? '' : _state$password;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement(
                'span',
                null,
                '\u7528\u6237\u540D\uFF1A'
              ),
              _react2.default.createElement('input', { type: 'text', value: username, onChange: function onChange(e) {
                  return _this2.handleFormChange("username", e.target.value);
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement(
                'span',
                null,
                '\u5BC6\u7801\uFF1A'
              ),
              _react2.default.createElement('input', { type: 'password', value: password, onChange: function onChange(e) {
                  return _this2.handleFormChange("password", e.target.value);
                } })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { onClick: this.handleSubmit, value: '\u767B\u5F55' })
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component)) || _class;

exports.default = Login;

/***/ })

}]);