'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPastUntilToday = exports.loadPastUntilNewActivity = exports.scrollIntoPastAction = exports.gotPartialPastDays = exports.gotPartialFutureDays = exports.gotDaysSuccess = exports.gettingPastItems = exports.startLoadingPastUntilTodaySaga = exports.gotGradesError = exports.gotGradesSuccess = exports.startLoadingGradesSaga = exports.startLoadingPastUntilNewActivitySaga = exports.startLoadingFutureSaga = exports.startLoadingPastSaga = exports.gotItemsError = exports.allPastItemsLoaded = exports.allFutureItemsLoaded = exports.gettingFutureItems = exports.foundFirstNewActivityDate = exports.continueLoadingInitialItems = exports.startLoadingItems = undefined;
exports.gotItemsSuccess = gotItemsSuccess;
exports.getFirstNewActivityDate = getFirstNewActivityDate;
exports.getPlannerItems = getPlannerItems;
exports.loadFutureItems = loadFutureItems;
exports.scrollIntoPast = scrollIntoPast;
exports.loadPastButtonClicked = loadPastButtonClicked;
exports.sendFetchRequest = sendFetchRequest;

var _reduxActions = require('redux-actions');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _apiUtils = require('../utilities/apiUtils');

var _alertUtils = require('../utilities/alertUtils');

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _daysUtils = require('../utilities/daysUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
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

var _createActions = (0, _reduxActions.createActions)('START_LOADING_ITEMS', 'CONTINUE_LOADING_INITIAL_ITEMS', 'FOUND_FIRST_NEW_ACTIVITY_DATE', 'GETTING_FUTURE_ITEMS', 'ALL_FUTURE_ITEMS_LOADED', 'ALL_PAST_ITEMS_LOADED', 'GOT_ITEMS_ERROR', 'START_LOADING_PAST_SAGA', 'START_LOADING_FUTURE_SAGA', 'START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA', 'START_LOADING_GRADES_SAGA', 'GOT_GRADES_SUCCESS', 'GOT_GRADES_ERROR', 'START_LOADING_PAST_UNTIL_TODAY_SAGA'),
    startLoadingItems = _createActions.startLoadingItems,
    continueLoadingInitialItems = _createActions.continueLoadingInitialItems,
    foundFirstNewActivityDate = _createActions.foundFirstNewActivityDate,
    gettingFutureItems = _createActions.gettingFutureItems,
    allFutureItemsLoaded = _createActions.allFutureItemsLoaded,
    allPastItemsLoaded = _createActions.allPastItemsLoaded,
    gotItemsError = _createActions.gotItemsError,
    startLoadingPastSaga = _createActions.startLoadingPastSaga,
    startLoadingFutureSaga = _createActions.startLoadingFutureSaga,
    startLoadingPastUntilNewActivitySaga = _createActions.startLoadingPastUntilNewActivitySaga,
    startLoadingGradesSaga = _createActions.startLoadingGradesSaga,
    gotGradesSuccess = _createActions.gotGradesSuccess,
    gotGradesError = _createActions.gotGradesError,
    startLoadingPastUntilTodaySaga = _createActions.startLoadingPastUntilTodaySaga;

exports.startLoadingItems = startLoadingItems;
exports.continueLoadingInitialItems = continueLoadingInitialItems;
exports.foundFirstNewActivityDate = foundFirstNewActivityDate;
exports.gettingFutureItems = gettingFutureItems;
exports.allFutureItemsLoaded = allFutureItemsLoaded;
exports.allPastItemsLoaded = allPastItemsLoaded;
exports.gotItemsError = gotItemsError;
exports.startLoadingPastSaga = startLoadingPastSaga;
exports.startLoadingFutureSaga = startLoadingFutureSaga;
exports.startLoadingPastUntilNewActivitySaga = startLoadingPastUntilNewActivitySaga;
exports.startLoadingGradesSaga = startLoadingGradesSaga;
exports.gotGradesSuccess = gotGradesSuccess;
exports.gotGradesError = gotGradesError;
exports.startLoadingPastUntilTodaySaga = startLoadingPastUntilTodaySaga;
var gettingPastItems = exports.gettingPastItems = (0, _reduxActions.createAction)('GETTING_PAST_ITEMS', function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { seekingNewActivity: false };

  return opts;
});

var gotDaysSuccess = exports.gotDaysSuccess = (0, _reduxActions.createAction)('GOT_DAYS_SUCCESS', function (newDays, response) {
  return { internalDays: newDays, response: response };
});

function gotItemsSuccess(newItems, response) {
  return gotDaysSuccess((0, _daysUtils.itemsToDays)(newItems), response);
}

var gotPartialFutureDays = exports.gotPartialFutureDays = (0, _reduxActions.createAction)('GOT_PARTIAL_FUTURE_DAYS', function (newDays, response) {
  return { internalDays: newDays, response: response };
});

var gotPartialPastDays = exports.gotPartialPastDays = (0, _reduxActions.createAction)('GOT_PARTIAL_PAST_DAYS', function (newDays, response) {
  return { internalDays: newDays, response: response };
});

function getFirstNewActivityDate(fromMoment) {
  // We are requesting ascending order and only grabbing the first item,
  // specifically so we know what the very oldest new activity is
  return function (dispatch, getState) {
    fromMoment = fromMoment.clone().subtract(6, 'months');
    return _axios2.default.get('api/v1/planner/items', { params: {
        start_date: fromMoment.toISOString(),
        filter: 'new_activity',
        order: 'asc'
      } }).then(function (response) {
      if (response.data.length) {
        var first = (0, _apiUtils.transformApiToInternalItem)(response.data[0], getState().courses, getState().groups, getState().timeZone);
        dispatch(foundFirstNewActivityDate(first.dateBucketMoment));
      }
    }).catch(function () {
      return (0, _alertUtils.alert)((0, _formatMessage2.default)('Failed to get new activity'), true);
    });
  };
}

function getPlannerItems(fromMoment) {
  return function (dispatch, getState) {
    dispatch(startLoadingItems());
    dispatch(continueLoadingInitialItems()); // a start counts as a continue for the ContinueInitialLoad animation
    dispatch(getFirstNewActivityDate(fromMoment));
    dispatch(startLoadingFutureSaga());
  };
}

function loadFutureItems() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loadMoreButtonClicked: false };

  return function (dispatch, getState) {
    if (getState().loading.allFutureItemsLoaded) return;
    dispatch(gettingFutureItems(opts));
    dispatch(startLoadingFutureSaga());
  };
}

var scrollIntoPastAction = exports.scrollIntoPastAction = (0, _reduxActions.createAction)('SCROLL_INTO_PAST');

function loadPastItems(byScrolling) {
  return function (dispatch, getState) {
    if (getState().loading.allPastItemsLoaded) return;
    if (byScrolling) dispatch(scrollIntoPastAction());
    dispatch(gettingPastItems({
      seekingNewActivity: false
    }));
    dispatch(startLoadingPastSaga());
  };
}

function scrollIntoPast() {
  return loadPastItems(true);
}

function loadPastButtonClicked() {
  return loadPastItems(false);
}

var loadPastUntilNewActivity = exports.loadPastUntilNewActivity = function loadPastUntilNewActivity() {
  return function (dispatch, getState) {
    dispatch(gettingPastItems({
      seekingNewActivity: true
    }));
    dispatch(startLoadingPastUntilNewActivitySaga());
    return 'loadPastUntilNewActivity'; // for testing
  };
};

var loadPastUntilToday = exports.loadPastUntilToday = function loadPastUntilToday() {
  return function (dispatch, getState) {
    dispatch(gettingPastItems({
      seekingNewActivity: false
    }));
    dispatch(startLoadingPastUntilTodaySaga());
    return 'loadPastUntilToday'; // for testing
  };
};

function sendFetchRequest(loadingOptions) {
  return _axios2.default.get.apply(_axios2.default, _toConsumableArray(fetchParams(loadingOptions))).then(function (response) {
    return handleFetchResponse(loadingOptions, response);
  })
  // no .catch: it's up to the sagas to handle errors
  ;
}

function fetchParams(loadingOptions) {
  var timeParam = 'start_date';
  var linkField = 'futureNextUrl';
  if (loadingOptions.intoThePast) {
    timeParam = 'end_date';
    linkField = 'pastNextUrl';
  }
  var nextPageUrl = loadingOptions.getState().loading[linkField];
  if (nextPageUrl) {
    return [nextPageUrl, {}];
  } else {
    var params = _defineProperty({}, timeParam, loadingOptions.fromMoment.toISOString());
    if (loadingOptions.intoThePast) {
      params.order = 'desc';
    }
    return ['/api/v1/planner/items', { params: params }];
  }
}

function handleFetchResponse(loadingOptions, response) {
  var transformedItems = transformItems(loadingOptions, response.data);
  return { response: response, transformedItems: transformedItems };
}

function transformItems(loadingOptions, items) {
  return items.map(function (item) {
    return (0, _apiUtils.transformApiToInternalItem)(item, loadingOptions.getState().courses, loadingOptions.getState().groups, loadingOptions.getState().timeZone);
  });
}