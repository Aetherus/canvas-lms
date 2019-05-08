'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.notifier = notifier;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

function getDisplayName(WrappedComponent) {
  return 'Notifier(' + WrappedComponent.displayName + ')';
}

function notifier(WrappedComponent) {
  var _class, _temp2, _initialiseProps;

  return _temp2 = _class = function (_React$Component) {
    _inherits(Notifier, _React$Component);

    function Notifier() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Notifier);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notifier.__proto__ || Object.getPrototypeOf(Notifier)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Notifier, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, Object.assign({}, this.props, {
          triggerDynamicUiUpdates: this.triggerUpdates,
          preTriggerDynamicUiUpdates: this.preTriggerUpdates
        }));
      }
    }]);

    Notifier.displayName = 'Notifier'
    ;
    return Notifier;
  }(_react2.default.Component), _class.displayName = getDisplayName(WrappedComponent), _class.contextTypes = {
    dynamicUiManager: (0, _propTypes.shape)({
      triggerUpdates: _propTypes.func,
      preTriggerUpdates: _propTypes.func
    })
  }, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.preTriggerUpdates = function () {
      if (_this2.context.dynamicUiManager) {
        var _context$dynamicUiMan;

        (_context$dynamicUiMan = _this2.context.dynamicUiManager).preTriggerUpdates.apply(_context$dynamicUiMan, arguments);
      }
    };

    this.triggerUpdates = function () {
      if (_this2.context.dynamicUiManager) {
        var _context$dynamicUiMan2;

        (_context$dynamicUiMan2 = _this2.context.dynamicUiManager).triggerUpdates.apply(_context$dynamicUiMan2, arguments);
      }
    };
  }, _temp2;
}