'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.animatable = animatable;

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
  return 'Animatable(' + WrappedComponent.displayName + ')';
}

// Components passed to registerAnimatable that the manager uses must provide this interface:
// - getFocusable() returns anything that has a `focus()` method, DOM element or otherwise
// - getScrollable() must return a DOM element
function animatable(WrappedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(Animatable, _React$Component);

    function Animatable() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Animatable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Animatable.__proto__ || Object.getPrototypeOf(Animatable)).call.apply(_ref, [this].concat(args))), _this), _this.registerAnimatable = function (type, component, index, componentIds) {
        // This should be required, but I don't want tests to have to muck with wrapping their stuff
        // in a DynamicUiProvider
        if (!_this.context.dynamicUiManager) return;
        _this.context.dynamicUiManager.registerAnimatable(type, component, index, componentIds);
      }, _this.deregisterAnimatable = function (type, component, componentIds) {
        // This should be required, but I don't want tests to have to muck with wrapping their stuff
        // in a DynamicUiProvider
        if (!_this.context.dynamicUiManager) return;
        _this.context.dynamicUiManager.deregisterAnimatable(type, component, componentIds);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Animatable, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, Object.assign({}, this.props, {
          registerAnimatable: this.registerAnimatable,
          deregisterAnimatable: this.deregisterAnimatable
        }));
      }
    }]);

    Animatable.displayName = 'Animatable'
    ;
    return Animatable;
  }(_react2.default.Component), _class.displayName = getDisplayName(WrappedComponent), _class.contextTypes = {
    dynamicUiManager: (0, _propTypes.shape)({
      registerAnimatable: _propTypes.func,
      deregisterAnimatable: _propTypes.func
    })
  }, _temp2;
}