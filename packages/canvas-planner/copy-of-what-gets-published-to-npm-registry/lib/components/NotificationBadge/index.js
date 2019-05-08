'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationBadge = exports.NewActivityIndicator = exports.MissingIndicator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
                    * Copyright (C) 2018 - present Instructure, Inc.
                    *
                    * This file is part of Canvas.
                    *
                    * Canvas is free software: you can redistribute it and/or modify it under
                    * the terms of the GNU Affero General Public License as published by the Free
                    * Software Foundation, version 3 of the License.
                    *
                    * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
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

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _MissingIndicator = require('./MissingIndicator');

var _MissingIndicator2 = _interopRequireDefault(_MissingIndicator);

var _NewActivityIndicator = require('./NewActivityIndicator');

var _NewActivityIndicator2 = _interopRequireDefault(_NewActivityIndicator);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._2brV8hVEiVqDJB7U2yiEwx {\n}\n\n._2X4v6JLTinTZsM21KMB8KI {\n  width: ' + theme.activityIndicatorWidth + ';\n  padding: ' + theme.activityIndicatorPadding + ';\n}\n\n._2X4v6JLTinTZsM21KMB8KI.zx6ecZjVi5QofE-llz76x {\n    background: transparent;\n    width: auto;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n    position: static;\n    display: flex;\n    top: auto;\n    right: auto;\n    z-index: 1;\n    border-radius: 0;\n  };\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_2brV8hVEiVqDJB7U2yiEwx',
  'activityIndicator': '_2X4v6JLTinTZsM21KMB8KI',
  'hasBadge': 'zx6ecZjVi5QofE-llz76x'
};
var NotificationBadge = (_temp = _class = function (_React$Component) {
  _inherits(NotificationBadge, _React$Component);

  function NotificationBadge() {
    _classCallCheck(this, NotificationBadge);

    return _possibleConstructorReturn(this, (NotificationBadge.__proto__ || Object.getPrototypeOf(NotificationBadge)).apply(this, arguments));
  }

  _createClass(NotificationBadge, [{
    key: 'render',
    value: function render() {
      var _activityIndicatorCla;

      var indicator = this.props.children ? _react2.default.Children.only(this.props.children) : null;

      var activityIndicatorClasses = (_activityIndicatorCla = {}, _defineProperty(_activityIndicatorCla, styles.activityIndicator, true), _defineProperty(_activityIndicatorCla, styles.hasBadge, indicator != null), _activityIndicatorCla);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(activityIndicatorClasses) },
        indicator
      );
    }
  }]);

  NotificationBadge.displayName = 'NotificationBadge'
  ;
  return NotificationBadge;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.element
}, _temp);

var ThemeableNotificationBadge = (0, _lib2.default)(_theme2.default, styles)(NotificationBadge);

exports.MissingIndicator = _MissingIndicator2.default;
exports.NewActivityIndicator = _NewActivityIndicator2.default;
exports.NotificationBadge = NotificationBadge;
exports.default = ThemeableNotificationBadge;