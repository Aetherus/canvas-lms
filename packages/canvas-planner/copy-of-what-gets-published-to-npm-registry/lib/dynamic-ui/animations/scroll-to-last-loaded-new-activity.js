'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToLastLoadedNewActivity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _animation = require('../animation');

var _animation2 = _interopRequireDefault(_animation);

var _daysUtils = require('../../utilities/daysUtils');

var _statusUtils = require('../../utilities/statusUtils');

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

var ScrollToLastLoadedNewActivity = exports.ScrollToLastLoadedNewActivity = function (_Animation) {
  _inherits(ScrollToLastLoadedNewActivity, _Animation);

  function ScrollToLastLoadedNewActivity() {
    _classCallCheck(this, ScrollToLastLoadedNewActivity);

    return _possibleConstructorReturn(this, (ScrollToLastLoadedNewActivity.__proto__ || Object.getPrototypeOf(ScrollToLastLoadedNewActivity)).apply(this, arguments));
  }

  _createClass(ScrollToLastLoadedNewActivity, [{
    key: 'fixedElement',
    value: function fixedElement() {
      return this.app().fixedElementForItemScrolling();
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      var gotDaysAction = this.acceptedAction('GOT_DAYS_SUCCESS');
      var newDays = gotDaysAction.payload.internalDays;
      var newItems = (0, _daysUtils.daysToItems)(newDays);
      var newActivityItems = newItems.filter(function (item) {
        return (0, _statusUtils.isNewActivityItem)(item);
      });
      var newActivityItemIds = newActivityItems.map(function (item) {
        return item.uniqueId;
      });
      if (newActivityItemIds.length === 0) return;

      var _registry$getLastComp = this.registry().getLastComponent('day', newActivityItemIds),
          newActivityDayComponentIds = _registry$getLastComp.componentIds;
      // only want groups in the day that have new activity items


      newActivityDayComponentIds = _lodash2.default.intersection(newActivityDayComponentIds, newActivityItemIds);

      var _registry$getLastComp2 = this.registry().getLastComponent('new-activity-indicator', newActivityDayComponentIds),
          newActivityIndicator = _registry$getLastComp2.component;

      this.maintainViewportPositionOfFixedElement();
      this.animator().focusElement(newActivityIndicator.getFocusable());
      this.animator().scrollTo(newActivityIndicator.getScrollable(), this.manager().totalOffset());
    }
  }]);

  return ScrollToLastLoadedNewActivity;
}(_animation2.default);