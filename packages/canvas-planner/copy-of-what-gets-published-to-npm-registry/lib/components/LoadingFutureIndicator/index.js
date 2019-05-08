'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /*
                     * Copyright (C) 2017 - present Instructure, Inc.
                     *
                     * This file is part of Canvas.
                     *
                     * Canvas is free software: you can redistribute it and/or modify it under
                     * the terms of the GNU Affero General Public License as published by the Free
                     * Software Foundation, version 3 of the License.
                     *
                     * Canvas is distributed in the hope that they will be useful, but WITHOUT ANY
                     * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
                     * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
                     * details.
                     *
                     * You should have received a copy of the GNU Affero General Public License along
                     * with this program. If not, see <http://www.gnu.org/licenses/>.
                     */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Spinner = require('@instructure/ui-elements/lib/components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ErrorAlert = require('../ErrorAlert');

var _ErrorAlert2 = _interopRequireDefault(_ErrorAlert);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingFutureIndicator = (_temp2 = _class = function (_Component) {
  _inherits(LoadingFutureIndicator, _Component);

  function LoadingFutureIndicator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoadingFutureIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadingFutureIndicator.__proto__ || Object.getPrototypeOf(LoadingFutureIndicator)).call.apply(_ref, [this].concat(args))), _this), _this.handleLoadMoreButton = function () {
      _this.props.onLoadMore({ loadMoreButtonClicked: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoadingFutureIndicator, [{
    key: 'renderLoadMore',
    value: function renderLoadMore() {
      if (!this.props.loadingFuture && !this.props.allFutureItemsLoaded) {
        return _react2.default.createElement(
          _Button2.default,
          { variant: 'link', onClick: this.handleLoadMoreButton },
          (0, _formatMessage2.default)('Load more')
        );
      }
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      if (this.props.loadingError) {
        // Show an Alert for the user, while including the underlying root cause error
        // in a hidden div in case we need to know what it was
        return _react2.default.createElement(
          'div',
          { style: { width: '50%', margin: '0 auto' } },
          _react2.default.createElement(
            _ErrorAlert2.default,
            { error: this.props.loadingError },
            (0, _formatMessage2.default)('Error loading more items')
          )
        );
      }
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      if (this.props.loadingFuture && !this.props.allFutureItemsLoaded) {
        return _react2.default.createElement(
          _View2.default,
          null,
          _react2.default.createElement(_Spinner2.default, { size: 'small', margin: '0 x-small 0 0', title: (0, _formatMessage2.default)('Loading...') }),
          _react2.default.createElement(
            _Text2.default,
            { size: 'small', color: 'secondary' },
            (0, _formatMessage2.default)('Loading...')
          )
        );
      }
    }
  }, {
    key: 'renderEverythingLoaded',
    value: function renderEverythingLoaded() {
      if (this.props.allFutureItemsLoaded) {
        return _react2.default.createElement(
          _Text2.default,
          { color: 'secondary', size: 'small' },
          (0, _formatMessage2.default)('All items loaded')
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _View2.default,
          { as: 'div', padding: 'x-large', textAlign: 'center' },
          this.renderError(),
          this.renderLoadMore(),
          this.renderLoading(),
          this.renderEverythingLoaded()
        )
      );
    }
  }]);

  LoadingFutureIndicator.displayName = 'LoadingFutureIndicator'
  ;
  return LoadingFutureIndicator;
}(_react.Component), _class.propTypes = {
  loadingFuture: _propTypes.bool,
  allFutureItemsLoaded: _propTypes.bool,
  onLoadMore: _propTypes.func,
  loadingError: _propTypes.string,
  plannerActive: _propTypes.func
}, _class.defaultProps = {
  loadingFuture: false,
  allFutureItemsLoaded: false,
  onLoadMore: function onLoadMore() {},
  loadingError: undefined,
  plannerActive: function plannerActive() {
    return false;
  }
}, _temp2);
exports.default = LoadingFutureIndicator;