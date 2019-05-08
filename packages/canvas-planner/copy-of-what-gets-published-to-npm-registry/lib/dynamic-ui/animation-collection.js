'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationCollection = undefined;

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

var _animations = require('./animations');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimationCollection = exports.AnimationCollection = (_temp = _class = function () {
  function AnimationCollection(manager, actionsToAnimations) {
    var _this = this;

    _classCallCheck(this, AnimationCollection);

    this.animations = [];

    actionsToAnimations.forEach(function (_ref) {
      var expectedEvents = _ref.expected,
          AnimationClass = _ref.animation;

      _this.animations.push(new AnimationClass(expectedEvents, manager));
    });
  }

  _createClass(AnimationCollection, [{
    key: 'acceptAction',
    value: function acceptAction(action) {
      this.animations.forEach(function (animation) {
        animation.acceptAction(action);
      });
    }
  }, {
    key: 'uiWillUpdate',
    value: function uiWillUpdate() {
      this.animations.forEach(function (animation) {
        if (animation.isReady()) animation.invokeUiWillUpdate();
      });
    }
  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {
      this.animations.forEach(function (animation) {
        if (animation.isReady()) {
          animation.invokeUiDidUpdate();
        }
      });
    }
  }], [{
    key: 'expectedActionsFor',
    value: function expectedActionsFor(animationClass) {
      var mapping = AnimationCollection.actionsToAnimations.find(function (entry) {
        return entry.animation === animationClass;
      });
      return mapping.expected;
    }
  }]);

  return AnimationCollection;
}(), _class.actionsToAnimations = [{
  expected: ['CONTINUE_LOADING_INITIAL_ITEMS', 'START_LOADING_FUTURE_SAGA', 'GOT_DAYS_SUCCESS'],
  animation: _animations.ContinueInitialLoad
}, {
  expected: ['SCROLL_TO_NEW_ACTIVITY'],
  animation: _animations.ScrollToNewActivity
}, {
  expected: ['START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA', 'GOT_DAYS_SUCCESS'],
  animation: _animations.ScrollToLastLoadedNewActivity
}, {
  expected: ['SCROLL_INTO_PAST', 'START_LOADING_PAST_SAGA', 'GOT_DAYS_SUCCESS'],
  animation: _animations.MaintainScrollPositionWhenScrollingIntoThePast
}, {
  expected: ['GETTING_FUTURE_ITEMS', // checks if the load more button was initiator of this action
  'GOT_DAYS_SUCCESS'],
  animation: _animations.FocusPriorItemOnLoadMore
}, {
  expected: ['SAVED_PLANNER_ITEM'],
  animation: _animations.FocusItemOnSave
}, {
  expected: ['OPEN_EDITING_PLANNER_ITEM', 'CANCELED_EDITING_PLANNER_ITEM'],
  animation: _animations.ReturnFocusOnCancelEditing
}, {
  expected: ['DELETED_PLANNER_ITEM'],
  animation: _animations.FocusPriorItemOnDelete
},

// animations for the future. no, the format doesn't match.
// [['DISMISSED_OPPORTUNITY',
// ], SetDismissedOpportunityFocus],

{
  expected: ['SCROLL_TO_TODAY'],
  animation: _animations.ScrollToToday
}, {
  expected: ['START_LOADING_PAST_UNTIL_TODAY_SAGA', 'GOT_DAYS_SUCCESS'],
  animation: _animations.ScrollToLoadedToday
}], _temp);