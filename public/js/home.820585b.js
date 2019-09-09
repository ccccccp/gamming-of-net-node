(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 455:
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

var _reactRouterDom = __webpack_require__(107);

var _LeftNav = __webpack_require__(459);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _frameModules = __webpack_require__(108);

var _frameModules2 = _interopRequireDefault(_frameModules);

var _Preview = __webpack_require__(461);

var _Preview2 = _interopRequireDefault(_Preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (0, _reactRouterDom.withRouter)(_class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            console.log("rendeee", this.props);
            var id = this.props.match.params.id;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: _frameModules2.default["app-left"] },
                    _react2.default.createElement(_LeftNav2.default, { match: this.props.match })
                ),
                _react2.default.createElement(
                    'div',
                    { className: _frameModules2.default["app-section"] },
                    _react2.default.createElement(_Preview2.default, { id: id })
                ),
                _react2.default.createElement('div', { className: _frameModules2.default["app-right"] })
            );
        }
    }]);

    return _default;
}(_react.Component)) || _class;

exports.default = _default;

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(162);

var _redux = __webpack_require__(52);

var _reactRouterDom = __webpack_require__(107);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _leftNav = __webpack_require__(460);

var _leftNav2 = _interopRequireDefault(_leftNav);

var _LeftNavRedux = __webpack_require__(166);

var navListActions = _interopRequireWildcard(_LeftNavRedux);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_dec = (0, _reactRedux.connect)(function (state) {
    return _extends({}, state.nav);
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(navListActions, dispatch));
}), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    }

    _createClass(_default, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.loadNav();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                loading = _props.loading,
                error = _props.error,
                navData = _props.navData;

            return _react2.default.createElement(
                'div',
                { className: _leftNav2.default['left-nav'] },
                loading ? _react2.default.createElement(
                    'a',
                    null,
                    '\u5BFC\u822A\u52A0\u8F7D\u4E2D...'
                ) : error ? _react2.default.createElement(
                    'a',
                    null,
                    '\u9996\u9875'
                ) : Array.isArray(navData) && navData.map(function (nav) {
                    return _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { key: nav.name, to: '/preview/' + nav.name },
                        nav.text
                    );
                })
            );
        }
    }]);

    return _default;
}(_react.Component), _class2.defaultProps = {
    navData: []
}, _class2.propTypes = {
    loadNav: _propTypes2.default.func,
    loading: _propTypes2.default.bool,
    error: _propTypes2.default.bool,
    navData: _propTypes2.default.array
}, _temp)) || _class);

exports.default = _default;

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"left-nav":"left-nav-1034688b","active":"active-10588bf4"};

/***/ }),

/***/ 461:
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

var _redux = __webpack_require__(52);

var _reactRedux = __webpack_require__(162);

var _PreviewList = __webpack_require__(462);

var _PreviewList2 = _interopRequireDefault(_PreviewList);

var _LeftNav = __webpack_require__(459);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _HomeRedux = __webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
    return { prevList: state.home.prevList };
}, function (dispatch) {
    return _extends({}, (0, _redux.bindActionCreators)(_HomeRedux.prevListActions, dispatch));
}), _dec(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var id = this.props.id || 0;
            this.props.loadArticles({ id: id });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.id != nextProps.id) {
                this.props.loadArticles({ id: nextProps.id });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_PreviewList2.default, _extends({
                history: this.props.history
            }, this.props.prevList));
        }
    }]);

    return Home;
}(_react.Component)) || _class);
exports.default = Home;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PreviewItem = __webpack_require__(463);

var _PreviewItem2 = _interopRequireDefault(_PreviewItem);

var _previewList = __webpack_require__(464);

var _previewList2 = _interopRequireDefault(_previewList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewList = (_temp = _class = function (_Component) {
    _inherits(PreviewList, _Component);

    function PreviewList() {
        _classCallCheck(this, PreviewList);

        return _possibleConstructorReturn(this, (PreviewList.__proto__ || Object.getPrototypeOf(PreviewList)).apply(this, arguments));
    }

    _createClass(PreviewList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                loading = _props.loading,
                error = _props.error,
                articleList = _props.articleList;

            console.log(this.props);
            if (error) {
                return _react2.default.createElement(
                    'div',
                    null,
                    '\u5217\u8868\u83B7\u53D6\u5931\u8D25'
                );
            }
            if (loading) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'loading...'
                );
            }
            return _react2.default.createElement(
                'div',
                { className: _previewList2.default["preview-list-container"] },
                articleList.map(function (article, i) {
                    return _react2.default.createElement(_PreviewItem2.default, _extends({}, article, { key: article.id }));
                })
            );
        }
    }]);

    return PreviewList;
}(_react.Component), _class.propTypes = {
    loading: _propTypes2.default.bool,
    error: _propTypes2.default.bool,
    articleList: _propTypes2.default.arrayOf(_propTypes2.default.object)
}, _class.defaultProps = {
    articleList: []
}, _temp);
exports.default = PreviewList;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (_temp = _class = function (_PureComponent) {
    _inherits(Preview, _PureComponent);

    function Preview() {
        _classCallCheck(this, Preview);

        return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
    }

    _createClass(Preview, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                date = _props.date,
                desc = _props.desc,
                id = _props.id,
                link = _props.link;

            return _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/detail/' + link, className: 'article-preview-item' },
                _react2.default.createElement(
                    'h1',
                    { className: 'title' },
                    title
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'desc' },
                    desc
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'bottom' },
                    _react2.default.createElement(
                        'span',
                        { className: 'date' },
                        date
                    )
                )
            );
        }
    }]);

    return Preview;
}(_react.PureComponent), _class.proptypes = {
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired, //文章标题
    date: _propTypes2.default.string, //文章日期
    desc: _propTypes2.default.string //文章描述
}, _temp);
exports.default = Preview;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"preview-list-container":"preview-list-container-cbd16118"};

/***/ })

}]);