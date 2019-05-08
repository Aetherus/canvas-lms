'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewActivityIndicator = undefined;

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

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _dynamicUi = require('../../dynamic-ui');

var _Indicator = require('./Indicator');

var _Indicator2 = _interopRequireDefault(_Indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewActivityIndicator = exports.NewActivityIndicator = (_temp = _class = function (_Component) {
  _inherits(NewActivityIndicator, _Component);

  function NewActivityIndicator() {
    _classCallCheck(this, NewActivityIndicator);

    return _possibleConstructorReturn(this, (NewActivityIndicator.__proto__ || Object.getPrototypeOf(NewActivityIndicator)).apply(this, arguments));
  }

  _createClass(NewActivityIndicator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.registerAnimatable('new-activity-indicator', this, this.props.animatableIndex, this.props.itemIds);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.props.deregisterAnimatable('new-activity-indicator', this, this.props.itemIds);
      this.props.registerAnimatable('new-activity-indicator', this, newProps.animatableIndex, newProps.itemIds);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('new-activity-indicator', this, this.props.itemIds);
    }
  }, {
    key: 'getFocusable',
    value: function getFocusable() {
      return this.props.getFocusable ? this.props.getFocusable() : undefined;
    }
  }, {
    key: 'getScrollable',
    value: function getScrollable() {
      return this.indicatorElt;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var badgeMessage = (0, _formatMessage2.default)('New activity for {title}', { title: this.props.title });
      return _react2.default.createElement(_Indicator2.default, {
        indicatorRef: function indicatorRef(ref) {
          return _this2.indicatorElt = ref;
        },
        title: badgeMessage,
        variant: 'primary'
      });
    }
  }]);

  NewActivityIndicator.displayName = 'NewActivityIndicator'
  ;
  return NewActivityIndicator;
}(_react.Component), _class.propTypes = {
  title: _propTypes.string.isRequired,
  itemIds: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  animatableIndex: _propTypes.number,
  getFocusable: _propTypes.func
}, _class.defaultProps = {
  registerAnimatable: function registerAnimatable() {},
  deregisterAnimatable: function deregisterAnimatable() {}
}, _temp);
exports.default = (0, _dynamicUi.animatable)(NewActivityIndicator);