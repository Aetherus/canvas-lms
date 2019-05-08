'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicUiProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
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

var _propTypes = require('prop-types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uiManagerShape = (0, _propTypes.shape)({
  handleAction: _propTypes.func.isRequired,
  registerAnimatable: _propTypes.func.isRequired,
  deregisterAnimatable: _propTypes.func.isRequired,
  preTriggerUpdates: _propTypes.func.isRequired,
  triggerUpdates: _propTypes.func.isRequired
});

var DynamicUiProvider = exports.DynamicUiProvider = (_temp = _class = function (_Component) {
  _inherits(DynamicUiProvider, _Component);

  function DynamicUiProvider(props, context) {
    _classCallCheck(this, DynamicUiProvider);

    var _this = _possibleConstructorReturn(this, (DynamicUiProvider.__proto__ || Object.getPrototypeOf(DynamicUiProvider)).call(this, props, context));

    _this.manager = props.manager;
    return _this;
  }

  _createClass(DynamicUiProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dynamicUiManager: this.manager
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  DynamicUiProvider.displayName = 'DynamicUiProvider'
  ;
  return DynamicUiProvider;
}(_react.Component), _class.propTypes = {
  manager: uiManagerShape.isRequired,
  children: _propTypes.element.isRequired
}, _class.childContextTypes = {
  dynamicUiManager: uiManagerShape
}, _temp);