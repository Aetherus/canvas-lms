'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergePastItemsForToday = exports.mergePastItemsForNewActivity = exports.mergePastItems = exports.mergeFutureItems = undefined;

var _loadingActions = require('./loading-actions.js');

var LA = _interopRequireWildcard(_loadingActions);

var _statusUtils = require('../utilities/statusUtils');

var _daysUtils = require('../utilities/daysUtils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mergeFutureItems = exports.mergeFutureItems = function mergeFutureItems(newFutureItems, response) {
  return function (dispatch, getState) {
    dispatch(LA.gotPartialFutureDays((0, _daysUtils.itemsToDays)(newFutureItems), response));
    var state = getState();
    var completeDays = extractCompleteDays(state.loading.partialFutureDays, state.loading.allFutureItemsLoaded, 'asc');
    return mergeCompleteDays(completeDays, dispatch, state.loading.allFutureItemsLoaded, response);
  };
}; /*
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

var mergePastItems = exports.mergePastItems = function mergePastItems(newPastItems, response) {
  return function (dispatch, getState) {
    dispatch(LA.gotPartialPastDays((0, _daysUtils.itemsToDays)(newPastItems), response));
    var state = getState();
    var completeDays = extractCompleteDays(state.loading.partialPastDays, state.loading.allPastItemsLoaded, 'desc');
    return mergeCompleteDays(completeDays, dispatch, state.loading.allPastItemsLoaded, response);
  };
};

function mergePastItemsFor(foundPredicate, newPastItems, response, dispatch, getState) {
  dispatch(LA.gotPartialPastDays((0, _daysUtils.itemsToDays)(newPastItems), response));
  var state = getState();
  var completeDays = extractCompleteDays(state.loading.partialPastDays, state.loading.allPastItemsLoaded, 'desc');
  if (foundPredicate(completeDays) || state.loading.allPastItemsLoaded) {
    return mergeCompleteDays(completeDays, dispatch, state.loading.allPastItemsLoaded, response);
  }
  return false;
}

var mergePastItemsForNewActivity = exports.mergePastItemsForNewActivity = function mergePastItemsForNewActivity(newPastItems, response) {
  return function (dispatch, getState) {
    return mergePastItemsFor(_statusUtils.anyNewActivityDays, newPastItems, response, dispatch, getState);
  };
};

var mergePastItemsForToday = exports.mergePastItemsForToday = function mergePastItemsForToday(newPastItems, response) {
  return function (dispatch, getState) {
    return mergePastItemsFor(_statusUtils.didWeFindToday, newPastItems, response, dispatch, getState);
  };
};

function mergeCompleteDays(completeDays, dispatch, allItemsLoaded, response) {
  if (completeDays.length || allItemsLoaded) {
    dispatch(LA.gotDaysSuccess(completeDays, response));
    return true;
  }
  return false;
}

function extractCompleteDays(daysArray, everythingCompleted, direction) {
  var partialDays = daysArray.slice();
  if (direction === 'desc') partialDays.reverse();
  if (everythingCompleted) return partialDays;
  var completeDays = partialDays.slice(0, -1);
  return completeDays;
}