'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToToday = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.scrollAndFocusTodayItem = scrollAndFocusTodayItem;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _formatMessage = require('format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

var _loadingActions = require('../../actions/loading-actions');

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

var ScrollToToday = exports.ScrollToToday = function (_Animation) {
  _inherits(ScrollToToday, _Animation);

  function ScrollToToday() {
    _classCallCheck(this, ScrollToToday);

    return _possibleConstructorReturn(this, (ScrollToToday.__proto__ || Object.getPrototypeOf(ScrollToToday)).apply(this, arguments));
  }

  _createClass(ScrollToToday, [{
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      var t = this.document().querySelector('.planner-today h2');
      if (t) {
        scrollAndFocusTodayItem(this.manager(), t);
      } else {
        this.animator().scrollToTop();
        this.store().dispatch((0, _loadingActions.loadPastUntilToday)());
      }
    }
  }]);

  return ScrollToToday;
}(_animation2.default);

function scrollAndFocusTodayItem(manager, todayElem) {
  var _findTodayOrNext = findTodayOrNext(manager.getRegistry()),
      component = _findTodayOrNext.component,
      isToday = _findTodayOrNext.isToday;

  if (component) {
    if (component.getScrollable()) {
      // scroll Today into view
      manager.getAnimator().scrollTo(todayElem, manager.totalOffset(), function () {
        // then, if necessary, scroll today's or next todo item into view but not all the way to the top
        manager.getAnimator().scrollTo(component.getScrollable(), manager.totalOffset() + todayElem.offsetHeight, function () {
          if (!isToday) {
            // tell the user where we wound up
            (0, _alertUtils.alert)((0, _formatMessage2.default)("Nothing planned today. Next item loaded."));
          }
          // finally, focus the item
          if (component.getFocusable()) {
            manager.getAnimator().focusElement(component.getFocusable());
          }
        });
      });
    }
  } else {
    // there's nothing to focus. leave focus on Today button
    manager.getAnimator().scrollTo(todayElem, this.manager().totalOffset());
  }
}

function findTodayOrNext(registry) {
  var today = (0, _momentTimezone2.default)().startOf('day');
  var todayOrNextItem = registry.getAllItemsSorted().find(function (item) {
    return item.component.props.date >= today;
  });
  var component = todayOrNextItem && todayOrNextItem.component;
  return { component: component, isToday: component.props.date.isSame(today, 'day') };
}