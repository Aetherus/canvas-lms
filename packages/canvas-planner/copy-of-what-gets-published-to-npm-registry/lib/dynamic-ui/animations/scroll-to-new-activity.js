'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToNewActivity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

var _loadingActions = require('../../actions/loading-actions');

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

var ScrollToNewActivity = exports.ScrollToNewActivity = function (_Animation) {
  _inherits(ScrollToNewActivity, _Animation);

  function ScrollToNewActivity() {
    _classCallCheck(this, ScrollToNewActivity);

    return _possibleConstructorReturn(this, (ScrollToNewActivity.__proto__ || Object.getPrototypeOf(ScrollToNewActivity)).apply(this, arguments));
  }

  _createClass(ScrollToNewActivity, [{
    key: 'fixedElement',
    value: function fixedElement() {
      return this.app().fixedElementForItemScrolling();
    }
  }, {
    key: 'findNaiAboveScreen',
    value: function findNaiAboveScreen() {
      var _this2 = this;

      var nais = this.registry().getAllNewActivityIndicatorsSorted();
      return nais.reverse().find(function (indicator) {
        return _this2.animator().isAboveScreen(indicator.component.getScrollable(), _this2.manager().totalOffset());
      });
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      var nai = this.findNaiAboveScreen();
      if (nai) {
        this.maintainViewportPositionOfFixedElement();
        this.animator().focusElement(nai.component.getFocusable());
        this.animator().scrollTo(nai.component.getScrollable(), this.manager().totalOffset());
      } else {
        this.animator().scrollToTop();
        this.store().dispatch((0, _loadingActions.loadPastUntilNewActivity)());
      }
    }
  }]);

  return ScrollToNewActivity;
}(_animation2.default);