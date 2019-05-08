'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

var _daysUtils = require('../utilities/daysUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadingState(currentState, loadingState) {
  return Object.assign({}, currentState, {
    isLoading: false,
    loadingPast: false,
    loadingFuture: false,
    loadingError: undefined
  }, loadingState);
} /*
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

function findNextLink(state, action) {
  var response = action.payload.response;
  if (response == null) return null;

  var linkHeader = response.headers.link;
  if (linkHeader == null) return null;

  var parsedLinks = (0, _parseLinkHeader2.default)(linkHeader);
  if (parsedLinks == null) return null;

  if (parsedLinks.next == null) return null;
  return parsedLinks.next.url;
}

function getNextUrls(state, action) {
  var linkState = {};
  var nextLink = findNextLink(state, action);

  if (state.isLoading || state.loadingFuture) {
    linkState.futureNextUrl = nextLink;
    if (nextLink == null) linkState.allFutureItemsLoaded = true;
  }
  if (state.loadingPast) {
    linkState.pastNextUrl = nextLink;
    if (nextLink == null) linkState.allPastItemsLoaded = true;
  }

  return linkState;
}

function gotDaysSuccess(state, action) {
  var newState = { seekingNewActivity: false, plannerLoaded: true };
  newState.partialPastDays = (0, _daysUtils.purgeDuplicateDays)(state.partialPastDays, action.payload.internalDays);
  newState.partialFutureDays = (0, _daysUtils.purgeDuplicateDays)(state.partialFutureDays, action.payload.internalDays);
  return loadingState(state, newState);
}

function gotPartialPastDays(state, action) {
  var linkState = getNextUrls(state, action);
  return Object.assign({}, state, linkState, {
    partialPastDays: (0, _daysUtils.mergeDays)(state.partialPastDays, action.payload.internalDays)
  });
}

function gotPartialFutureDays(state, action) {
  var linkState = getNextUrls(state, action);
  return Object.assign({}, state, linkState, {
    partialFutureDays: (0, _daysUtils.mergeDays)(state.partialFutureDays, action.payload.internalDays)
  });
}

function gotItemsError(state, action) {
  var error = action.payload.message || action.payload;
  return loadingState(state, { loadingError: error });
}

exports.default = (0, _reduxActions.handleActions)({
  GOT_DAYS_SUCCESS: gotDaysSuccess,
  GOT_ITEMS_ERROR: gotItemsError,
  GOT_PARTIAL_PAST_DAYS: gotPartialPastDays,
  GOT_PARTIAL_FUTURE_DAYS: gotPartialFutureDays,
  START_LOADING_OPPORTUNITIES: function START_LOADING_OPPORTUNITIES(state, action) {
    return Object.assign({}, state, { loadingOpportunities: true });
  },
  START_LOADING_ITEMS: function START_LOADING_ITEMS(state, action) {
    return loadingState(state, { isLoading: true });
  },
  GETTING_PAST_ITEMS: function GETTING_PAST_ITEMS(state, action) {
    return loadingState(state, {
      loadingError: state.loadingError, // don't reset error until we're successful
      loadingPast: true,
      seekingNewActivity: action.payload.seekingNewActivity
    });
  },
  GETTING_FUTURE_ITEMS: function GETTING_FUTURE_ITEMS(state, action) {
    return loadingState(state, {
      loadingError: state.loadingError, // don't reset error until we're successful
      loadingFuture: true
    });
  },
  ALL_FUTURE_ITEMS_LOADED: function ALL_FUTURE_ITEMS_LOADED(state, action) {
    return loadingState(state, { allFutureItemsLoaded: true });
  },
  ALL_OPPORTUNITIES_LOADED: function ALL_OPPORTUNITIES_LOADED(state, action) {
    return Object.assign({}, state, { loadingOpportunities: false, allOpportunitiesLoaded: true });
  },
  ALL_PAST_ITEMS_LOADED: function ALL_PAST_ITEMS_LOADED(state, action) {
    return loadingState(state, { allPastItemsLoaded: true });
  },
  ADD_OPPORTUNITIES: function ADD_OPPORTUNITIES(state, action) {
    return Object.assign({}, state, { loadingOpportunities: false });
  },
  START_LOADING_GRADES_SAGA: function START_LOADING_GRADES_SAGA(state, action) {
    return Object.assign({}, state, { loadingGrades: true, gradesLoadingError: null });
  },
  GOT_GRADES_SUCCESS: function GOT_GRADES_SUCCESS(state, action) {
    return Object.assign({}, state, { loadingGrades: false, gradesLoaded: true, gradesLoadingError: null });
  },
  GOT_GRADES_ERROR: function GOT_GRADES_ERROR(state, action) {
    return Object.assign({}, state, { loadingGrades: false, gradesLoaded: false,
      gradesLoadingError: action.payload.message });
  }

}, loadingState({}, {
  plannerLoaded: false,
  allPastItemsLoaded: false,
  allFutureItemsLoaded: false,
  allOpportunitiesLoaded: false,
  loadingOpportunities: false,
  futureNextUrl: null,
  pastNextUrl: null,
  seekingNewActivity: false,
  partialPastDays: [],
  partialFutureDays: [],
  loadingGrades: false,
  gradesLoaded: false,
  gradesLoadingError: null
}));