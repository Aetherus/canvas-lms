'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusPriorItemOnDelete = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

var _util = require('../util');

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

var FocusPriorItemOnDelete = exports.FocusPriorItemOnDelete = function (_Animation) {
  _inherits(FocusPriorItemOnDelete, _Animation);

  function FocusPriorItemOnDelete() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FocusPriorItemOnDelete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FocusPriorItemOnDelete.__proto__ || Object.getPrototypeOf(FocusPriorItemOnDelete)).call.apply(_ref, [this].concat(args))), _this), _this.setItemFocusUniqueId = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FocusPriorItemOnDelete, [{
    key: 'uiWillUpdate',
    value: function uiWillUpdate() {
      var action = this.acceptedAction('DELETED_PLANNER_ITEM');
      var doomedItemComponentId = action.payload.uniqueId;
      var sortedItemComponents = this.registry().getAllItemsSorted();
      var doomedItemComponentIndex = sortedItemComponents.findIndex(function (c) {
        return c.componentIds[0] === doomedItemComponentId;
      });
      var priorComponentIndex = doomedItemComponentIndex - 1;
      this.setItemFocusUniqueId = priorComponentIndex >= 0 ? sortedItemComponents[priorComponentIndex].componentIds[0] : (0, _util.specialFallbackFocusId)('item');
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      var _this2 = this;

      var setItemFocusUniqueId = this.setItemFocusUniqueId;
      this.setItemFocusUniqueId = null;

      var itemComponentToFocus = this.registry().getComponent('item', setItemFocusUniqueId);
      if (itemComponentToFocus == null) return;
      // Use a non-zero timeout to work around bug INSTUI-1141 where the Tray
      // will steal focus back after a delete confirmation dialog.
      this.window().setTimeout(function () {
        _this2.animator().focusElement(itemComponentToFocus.component.getFocusable('delete'));
        _this2.animator().scrollTo(itemComponentToFocus.component.getScrollable(), _this2.stickyOffset());
      }, 250);
    }
  }]);

  return FocusPriorItemOnDelete;
}(_animation2.default);