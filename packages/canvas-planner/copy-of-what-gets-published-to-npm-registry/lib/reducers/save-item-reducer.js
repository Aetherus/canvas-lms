'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = savePlannerItem;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _daysUtils = require('../utilities/daysUtils');

var _dateUtils = require('../utilities/dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This algorithm divides the timeline into 5 sections:
// distant past: we haven't started loading this yet.
// near past: we've started loading this (state.loading.partialPastDays)
// loaded: the days we're currently showing (state.days)
// near future: we've started loading these dates (state.loading.partialFutureDays)
// distant future: we haven't started loading this yet.
// The timeline looks like this:
//
//   ^
//   |                              ^ distant past
//  --- first partial past date   --|--
//   |                              \
//  --- last partial past date       } near past range
//   |                              /
//  --- first loaded day          --|--
//   |                              \
//   |                               } loaded range
//   |                              /
//  --- last loaded day           --|--
//   |                              \
//  --- first partial future date    } near future range
//   |                              /
//  --- last partial future date  --|--
//   |                              v  distant future
//   v
//
// * If a saved item's date falls into the loaded range, we should display it immediately.
// * If a saved item's date falls into the distant past or distant future, we can alert and not
// add it to anything because we know it would be loaded on further page loads.
// * If a saved item falls into the near past or near future, we need to alert and add it to the
// corresponding partially loaded days because in this case it's possible the item would have
// appeared on a page that has already been loaded. If so, we can't count on it being loaded on
// further paging, so we need to add it in memory, even if it won't be immediately displayed.
//
// We also add the item to the partially loaded dates even if we know the saved item's date is
// complete because we want to have consistent behavior based on the state the user can see. If
// the item falls into the loaded range then they can expect it to be displayed. If it's not in
// the loaded range, they will get an alert instead. This means the partially loaded days can have
// multiple dates, which otherwise doesn't happen, but this works fine.

function momentForDayAtIndex(state, days, dayIndex) {
  if (dayIndex < 0) dayIndex = days.length + dayIndex;
  var day = days[dayIndex];
  if (day === undefined) return _momentTimezone2.default.invalid();
  return _momentTimezone2.default.tz(day[0], state.timeZone);
} /*
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

function itemInRange(firstDayMoment, lastDayMoment, item) {
  return (0, _dateUtils.isInMomentRange)(item.date, firstDayMoment, lastDayMoment);
}

// The loaded range is a special case because the range of the days array can extend to infinity
// if all days in that direction are loaded (allFutureItemsLoaded or allPastItemsLoaded).
function itemDateIsLoaded(state, item) {
  var firstDayMoment = void 0,
      lastDayMoment = void 0;
  var itemMoment = item.dateBucketMoment.clone().startOf('day');
  if (state.days.length === 0) {
    // If state.days is empty then there is no loaded range for a new item to fall
    // into, but we still want to add the item if all[Future/Past]ItemsLoaded, or if it falls on
    // today. In this case, pretend that today is present in the days array so today is in range.
    var today = _momentTimezone2.default.tz(state.timeZone).startOf('day');
    firstDayMoment = lastDayMoment = today;
  } else {
    firstDayMoment = momentForDayAtIndex(state, state.days, 0);
    lastDayMoment = momentForDayAtIndex(state, state.days, -1);
  }

  var isFirstOrAfter = state.loading.allPastItemsLoaded || itemMoment.isSame(firstDayMoment) || itemMoment.isAfter(firstDayMoment);

  var isLastOrBefore = state.loading.allFutureItemsLoaded || itemMoment.isSame(lastDayMoment) || itemMoment.isBefore(lastDayMoment);

  return isFirstOrAfter && isLastOrBefore;
}

function itemIsInNearPast(state, item) {
  var firstDayInPartialPastDays = momentForDayAtIndex(state, state.loading.partialPastDays, 0);
  var firstDayInDays = momentForDayAtIndex(state, state.days, 0);
  return itemInRange(firstDayInPartialPastDays, firstDayInDays, item);
}

function itemIsInNearFuture(state, item) {
  var lastDayInDays = momentForDayAtIndex(state, state.days, -1);
  var lastDayInPartialFutureDays = momentForDayAtIndex(state, state.loading.partialFutureDays, -1);
  return itemInRange(lastDayInDays, lastDayInPartialFutureDays, item);
}

function savePlannerItem(state, action) {
  if (!state) return undefined; // leave it to other reducers to generate initial state
  if (action.type !== 'SAVED_PLANNER_ITEM') return state;
  if (action.error) return state;
  // Save actions from the todo sidebar that happen before the planner is loaded will mess up its
  // initial state, so we ignore them.
  if (!state.loading.plannerLoaded) return state;

  var item = action.payload.item;
  if (itemDateIsLoaded(state, item)) {
    var _findItemInDays = (0, _daysUtils.findItemInDays)(state.days, item.uniqueId),
        dayIndex = _findItemInDays.dayIndex,
        itemIndex = _findItemInDays.itemIndex,
        oldItem = _findItemInDays.item;

    var nextDays = state.days;
    if (oldItem && !oldItem.dateBucketMoment.isSame(item.dateBucketMoment)) {
      nextDays = (0, _daysUtils.deleteItemFromDaysAt)(state.days, dayIndex, itemIndex);
    }
    return Object.assign({}, state, { days: (0, _daysUtils.mergeNewItemsIntoDays)(nextDays, [item]) });
  } else if (itemIsInNearPast(state, item)) {
    var _nextDays = (0, _daysUtils.deleteItemFromDays)(state.days, item);
    var nextPartial = (0, _daysUtils.mergeNewItemsIntoDays)(state.loading.partialPastDays, [item]);
    return Object.assign({}, state, { days: _nextDays, loading: Object.assign({}, state.loading, { partialPastDays: nextPartial }) });
  } else if (itemIsInNearFuture(state, item)) {
    var _nextDays2 = (0, _daysUtils.deleteItemFromDays)(state.days, item);
    var _nextPartial = (0, _daysUtils.mergeNewItemsIntoDays)(state.loading.partialFutureDays, [item]);
    return Object.assign({}, state, { days: _nextDays2, loading: Object.assign({}, state.loading, { partialFutureDays: _nextPartial }) });
  } else {
    // item is in distant past or distant future
    var _nextDays3 = (0, _daysUtils.deleteItemFromDays)(state.days, item);
    if (_nextDays3 === state.days) return state;
    return Object.assign({}, state, { days: _nextDays3 });
  }
}