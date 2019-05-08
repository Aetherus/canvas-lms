'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnFocusOnCancelEditing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

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

var ReturnFocusOnCancelEditing = exports.ReturnFocusOnCancelEditing = function (_Animation) {
  _inherits(ReturnFocusOnCancelEditing, _Animation);

  function ReturnFocusOnCancelEditing() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReturnFocusOnCancelEditing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReturnFocusOnCancelEditing.__proto__ || Object.getPrototypeOf(ReturnFocusOnCancelEditing)).call.apply(_ref, [this].concat(args))), _this), _this.savedActiveElement = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReturnFocusOnCancelEditing, [{
    key: 'fixedElement',
    value: function fixedElement() {
      return this.app().fixedElementForItemScrolling();
    }

    // Using this function to record the current focus when the tray opens,
    // because uiWillUpdate only happens after the tray is canceled and the
    // focus has changed.

  }, {
    key: 'shouldAcceptOpenEditingPlannerItem',
    value: function shouldAcceptOpenEditingPlannerItem(action) {
      this.savedActiveElement = this.document().activeElement;
      // there is no focus if focus is on the body
      if (this.savedActiveElement === this.document().body) this.savedActiveElement = null;
      return true;
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      // Need to maintain the viewport position to work around a chome bug that
      // will scroll the viewport to the top of the page when focusing an
      // element in the header, like the plus button.
      this.maintainViewportPositionOfFixedElement();
      if (this.savedActiveElement != null) {
        this.animator().focusElement(this.savedActiveElement);

        // if the focused item is in the header, don't try to scroll it below
        // the header.
        var header = this.document().querySelector('#dashboard_header_container');
        var savedActiveElementInHeader = header && header.contains(this.savedActiveElement);
        if (!savedActiveElementInHeader) {
          this.animator().scrollTo(this.savedActiveElement, this.stickyOffset());
        }
      }
    }
  }]);

  return ReturnFocusOnCancelEditing;
}(_animation2.default);