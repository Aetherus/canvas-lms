'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusItemOnSave = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _alertUtils = require('../../utilities/alertUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var FocusItemOnSave = exports.FocusItemOnSave = function (_Animation) {
  _inherits(FocusItemOnSave, _Animation);

  function FocusItemOnSave() {
    _classCallCheck(this, FocusItemOnSave);

    return _possibleConstructorReturn(this, (FocusItemOnSave.__proto__ || Object.getPrototypeOf(FocusItemOnSave)).apply(this, arguments));
  }

  _createClass(FocusItemOnSave, [{
    key: 'fixedElement',
    value: function fixedElement() {
      return this.app().fixedElementForItemScrolling();
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      var action = this.acceptedAction('SAVED_PLANNER_ITEM');
      var savedItemUniqueId = action.payload.item.uniqueId;
      var itemComponentToFocus = this.registry().getComponent('item', savedItemUniqueId);
      if (itemComponentToFocus != null) {
        if (!action.payload.wasToggled) {
          this.animator().focusElement(itemComponentToFocus.component.getFocusable('update'));
        }
        this.maintainViewportPositionOfFixedElement();
        this.animator().scrollTo(itemComponentToFocus.component.getScrollable(), this.stickyOffset());
      } else {
        (0, _alertUtils.alert)((0, _formatMessage2.default)('Success: To Do created'));
      }
    }
  }]);

  return FocusItemOnSave;
}(_animation2.default);