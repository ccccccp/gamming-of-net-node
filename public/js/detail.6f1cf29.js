(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(162);

var _redux = __webpack_require__(52);

var _DetailRedux = __webpack_require__(165);

var _Detail = __webpack_require__(465);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailPage = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        detailData: state.detail.detailData
    };
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(_DetailRedux.detailDataAction, dispatch));
}), _dec(_class = function (_Component) {
    _inherits(DetailPage, _Component);

    function DetailPage() {
        _classCallCheck(this, DetailPage);

        return _possibleConstructorReturn(this, (DetailPage.__proto__ || Object.getPrototypeOf(DetailPage)).apply(this, arguments));
    }

    _createClass(DetailPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var id = this.props.match.params.id;
            this.props.loadDetail({ id: id });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$detailData = this.props.detailData,
                loading = _props$detailData.loading,
                error = _props$detailData.error;

            if (loading) {
                return _react2.default.createElement(
                    'div',
                    null,
                    '\u6587\u7AE0\u6B63\u5728\u52A0\u8F7D\u4E2D........'
                );
            }
            if (error) {
                return _react2.default.createElement(
                    'div',
                    null,
                    '\u6587\u7AE0\u52A0\u8F7D\u5931\u8D25!!'
                );
            }
            return _react2.default.createElement(_Detail2.default, this.props.detailData.detailData);
        }
    }]);

    return DetailPage;
}(_react.Component)) || _class);
exports.default = DetailPage;

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _detail = __webpack_require__(466);

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var maxHeight = 1000;
var DetailTop = (_temp = _class = function (_Component) {
    _inherits(DetailTop, _Component);

    function DetailTop(props) {
        _classCallCheck(this, DetailTop);

        var _this = _possibleConstructorReturn(this, (DetailTop.__proto__ || Object.getPrototypeOf(DetailTop)).call(this, props));

        _this.state = {
            detailStyle: {},
            hasShowMore: false
        };

        _this.createMarkup = _this.createMarkup.bind(_this);
        _this.handleShowMore = _this.handleShowMore.bind(_this);
        return _this;
    }

    _createClass(DetailTop, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.refs.detailHtml.offsetHeight);
            if (this.refs.detailHtml.offsetHeight > 1000) {
                this.setState({
                    hasShowMore: true,
                    detailStyle: {
                        height: 1000
                    }
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.createMarkup("");
        }
    }, {
        key: 'createMarkup',
        value: function createMarkup(__html) {
            return { __html: __html };
        }
    }, {
        key: 'handleShowMore',
        value: function handleShowMore() {
            this.setState({
                detailStyle: {
                    height: "auto"
                },
                hasShowMore: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                detailTitle = _props.detailTitle,
                detailTime = _props.detailTime,
                readNumber = _props.readNumber,
                detailContent = _props.detailContent;
            var _state = this.state,
                detailStyle = _state.detailStyle,
                hasShowMore = _state.hasShowMore;

            return _react2.default.createElement(
                'div',
                { className: _detail2.default['detail-container'] },
                _react2.default.createElement(
                    'div',
                    { className: _detail2.default["main"] },
                    _react2.default.createElement(
                        'div',
                        { className: _detail2.default["detail-top"] },
                        _react2.default.createElement(
                            'h2',
                            { className: _detail2.default["detail-title"] },
                            detailTitle
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _detail2.default["tips"] },
                            _react2.default.createElement(
                                'span',
                                { classname: _detail2.default["detail-time"] },
                                detailTime
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: _detail2.default["read-number"] },
                                readNumber
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _detail2.default["detail-content"] },
                        _react2.default.createElement('div', { className: _detail2.default["detail-html"],
                            ref: 'detailHtml',
                            style: detailStyle,
                            dangerouslySetInnerHTML: this.createMarkup(detailContent) }),
                        hasShowMore && _react2.default.createElement(
                            'div',
                            { className: _detail2.default["show-more"] },
                            _react2.default.createElement(
                                'a',
                                { onClick: this.handleShowMore },
                                '\u9605\u8BFB\u5168\u6587'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'aside',
                    null,
                    'right'
                )
            );
        }
    }]);

    return DetailTop;
}(_react.Component), _class.propTypes = {
    detailTitle: _propTypes2.default.string,
    detailTime: _propTypes2.default.string,
    readNumber: _propTypes2.default.string,
    detailContent: _propTypes2.default.string
}, _class.defaultProps = {
    detailTitle: '',
    detailTime: '',
    readNumber: '',
    detailContent: ''
}, _temp);
exports.default = DetailTop;

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"detail-container":"detail-container-c4907858","main":"main-2688c60d","detail-top":"detail-top-5e89bf21","detail-title":"detail-title-366350a7","tips":"tips-0fda6727","detail-content":"detail-content-fb33d8ac","detail-html":"detail-html-c1322472","show-more":"show-more-329aeac6"};

/***/ })

}]);