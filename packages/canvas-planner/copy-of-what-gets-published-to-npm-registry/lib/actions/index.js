'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePlannerItemCompletion = exports.cancelEditingPlannerItem = exports.canceledEditingPlannerItem = exports.deletePlannerItem = exports.savePlannerItem = exports.dismissOpportunity = exports.getInitialOpportunities = exports.getNextOpportunities = exports.scrollToToday = exports.scrollToNewActivity = exports.setNaiAboveScreen = exports.openEditingPlannerItem = exports.clearUpdateTodo = exports.updateTodo = exports.deletedPlannerItem = exports.deletingPlannerItem = exports.dismissedOpportunity = exports.savedPlannerItem = exports.savingPlannerItem = exports.allOpportunitiesLoaded = exports.startDismissingOpportunity = exports.startLoadingOpportunities = exports.addOpportunities = exports.initialOptions = undefined;

var _loadingActions = require('./loading-actions');

Object.keys(_loadingActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loadingActions[key];
    }
  });
});

var _sidebarActions = require('./sidebar-actions');

Object.keys(_sidebarActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sidebarActions[key];
    }
  });
});

var _reduxActions = require('redux-actions');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _configureAxios = require('../utilities/configureAxios');

var _configureAxios2 = _interopRequireDefault(_configureAxios);

var _alertUtils = require('../utilities/alertUtils');

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

var _dateUtils = require('../utilities/dateUtils');

var _apiUtils = require('../utilities/apiUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
(0, _configureAxios2.default)(_axios2.default);

var _createActions = (0, _reduxActions.createActions)('INITIAL_OPTIONS', 'ADD_OPPORTUNITIES', 'START_LOADING_OPPORTUNITIES', 'START_DISMISSING_OPPORTUNITY', 'ALL_OPPORTUNITIES_LOADED', 'SAVING_PLANNER_ITEM', 'SAVED_PLANNER_ITEM', 'DISMISSED_OPPORTUNITY', 'DELETING_PLANNER_ITEM', 'DELETED_PLANNER_ITEM', 'UPDATE_TODO', 'CLEAR_UPDATE_TODO', 'OPEN_EDITING_PLANNER_ITEM', 'SET_NAI_ABOVE_SCREEN', 'SCROLL_TO_NEW_ACTIVITY', 'SCROLL_TO_TODAY'),
    initialOptions = _createActions.initialOptions,
    addOpportunities = _createActions.addOpportunities,
    startLoadingOpportunities = _createActions.startLoadingOpportunities,
    startDismissingOpportunity = _createActions.startDismissingOpportunity,
    allOpportunitiesLoaded = _createActions.allOpportunitiesLoaded,
    savingPlannerItem = _createActions.savingPlannerItem,
    savedPlannerItem = _createActions.savedPlannerItem,
    dismissedOpportunity = _createActions.dismissedOpportunity,
    deletingPlannerItem = _createActions.deletingPlannerItem,
    deletedPlannerItem = _createActions.deletedPlannerItem,
    updateTodo = _createActions.updateTodo,
    clearUpdateTodo = _createActions.clearUpdateTodo,
    openEditingPlannerItem = _createActions.openEditingPlannerItem,
    setNaiAboveScreen = _createActions.setNaiAboveScreen,
    scrollToNewActivity = _createActions.scrollToNewActivity,
    scrollToToday = _createActions.scrollToToday;

exports.initialOptions = initialOptions;
exports.addOpportunities = addOpportunities;
exports.startLoadingOpportunities = startLoadingOpportunities;
exports.startDismissingOpportunity = startDismissingOpportunity;
exports.allOpportunitiesLoaded = allOpportunitiesLoaded;
exports.savingPlannerItem = savingPlannerItem;
exports.savedPlannerItem = savedPlannerItem;
exports.dismissedOpportunity = dismissedOpportunity;
exports.deletingPlannerItem = deletingPlannerItem;
exports.deletedPlannerItem = deletedPlannerItem;
exports.updateTodo = updateTodo;
exports.clearUpdateTodo = clearUpdateTodo;
exports.openEditingPlannerItem = openEditingPlannerItem;
exports.setNaiAboveScreen = setNaiAboveScreen;
exports.scrollToNewActivity = scrollToNewActivity;
exports.scrollToToday = scrollToToday;


function saveExistingPlannerItem(apiItem) {
  return (0, _axios2.default)({
    method: 'put',
    url: 'api/v1/planner_notes/' + apiItem.id,
    data: apiItem
  });
}

function saveNewPlannerItem(apiItem) {
  return (0, _axios2.default)({
    method: 'post',
    url: 'api/v1/planner_notes',
    data: apiItem
  });
}

var getNextOpportunities = exports.getNextOpportunities = function getNextOpportunities() {
  return function (dispatch, getState) {
    dispatch(startLoadingOpportunities());
    if (getState().opportunities.nextUrl) {
      (0, _axios2.default)({
        method: 'get',
        url: getState().opportunities.nextUrl
      }).then(function (response) {
        if ((0, _parseLinkHeader2.default)(response.headers.link).next) {
          dispatch(addOpportunities({ items: response.data, nextUrl: (0, _parseLinkHeader2.default)(response.headers.link).next.url }));
        } else {
          dispatch(addOpportunities({ items: response.data, nextUrl: null }));
        }
      }).catch(function () {
        return (0, _alertUtils.alert)((0, _formatMessage2.default)('Failed to load opportunities'), true);
      });
    } else {
      dispatch(allOpportunitiesLoaded());
    }
  };
};

var getInitialOpportunities = exports.getInitialOpportunities = function getInitialOpportunities() {
  return function (dispatch, getState) {
    dispatch(startLoadingOpportunities());

    (0, _axios2.default)({
      method: 'get',
      url: getState().opportunities.nextUrl || '/api/v1/users/self/missing_submissions?include[]=planner_overrides&filter[]=submittable'
    }).then(function (response) {
      if ((0, _parseLinkHeader2.default)(response.headers.link).next) {
        dispatch(addOpportunities({ items: response.data, nextUrl: (0, _parseLinkHeader2.default)(response.headers.link).next.url }));
      } else {
        dispatch(addOpportunities({ items: response.data, nextUrl: null }));
      }
    }).catch(function () {
      return (0, _alertUtils.alert)((0, _formatMessage2.default)('Failed to load opportunities'), true);
    });
  };
};

var dismissOpportunity = exports.dismissOpportunity = function dismissOpportunity(id, plannerOverride) {
  return function (dispatch, getState) {
    dispatch(startDismissingOpportunity(id));
    var apiOverride = Object.assign({}, plannerOverride);
    apiOverride.dismissed = true;
    apiOverride.plannable_id = id;
    apiOverride.plannable_type = 'assignment';
    var promise = apiOverride.id ? saveExistingPlannerOverride(apiOverride) : saveNewPlannerOverride(apiOverride);
    promise = promise.then(function (response) {
      dispatch(dismissedOpportunity(response.data));

      // TODO: When splitting into dismissed not dismissed tabs this needs to change
      if (!getState().loading.allOpportunitiesLoaded && !getState().loading.loadingOpportunities && getState().opportunities.items.filter(function (opp) {
        return opp.planner_override && !opp.planner_override.dismissed;
      }).length < 10) dispatch(getNextOpportunities());
    }).catch(function (error) {
      (0, _alertUtils.alert)((0, _formatMessage2.default)('An error occurred attempting to dismiss the opportunity.'), true);
    });
    return promise;
  };
};

var savePlannerItem = exports.savePlannerItem = function savePlannerItem(plannerItem) {
  return function (dispatch, getState) {
    plannerItem.date = (0, _dateUtils.makeEndOfDayIfMidnight)(plannerItem.date, getState().timeZone);
    plannerItem.date = plannerItem.date.toISOString();

    var isNewItem = !plannerItem.id;
    var overrideData = getOverrideDataOnItem(plannerItem);
    dispatch(savingPlannerItem({ item: plannerItem, isNewItem: isNewItem }));
    var apiItem = (0, _apiUtils.transformInternalToApiItem)(plannerItem);
    var promise = isNewItem ? saveNewPlannerItem(apiItem) : saveExistingPlannerItem(apiItem);
    promise = promise.then(function (response) {
      var apiItem = (0, _apiUtils.transformPlannerNoteApiToInternalItem)(response.data, getState().courses, getState().timeZone);
      return {
        item: updateOverrideDataOnItem(apiItem, overrideData),
        isNewItem: isNewItem
      };
    }).catch(function () {
      return (0, _alertUtils.alert)((0, _formatMessage2.default)('Failed to save to do'), true);
    });
    dispatch(clearUpdateTodo());
    dispatch(savedPlannerItem(promise));
    return promise;
  };
};

var deletePlannerItem = exports.deletePlannerItem = function deletePlannerItem(plannerItem) {
  return function (dispatch, getState) {
    dispatch(deletingPlannerItem(plannerItem));
    var promise = (0, _axios2.default)({
      method: 'delete',
      url: 'api/v1/planner_notes/' + plannerItem.id
    }).then(function (response) {
      return (0, _apiUtils.transformPlannerNoteApiToInternalItem)(response.data, getState().courses, getState().timeZone);
    }).catch(function () {
      return (0, _alertUtils.alert)((0, _formatMessage2.default)('Failed to delete to do'), true);
    });
    dispatch(clearUpdateTodo());
    dispatch(deletedPlannerItem(promise));
    return promise;
  };
};

var canceledEditingPlannerItem = exports.canceledEditingPlannerItem = (0, _reduxActions.createAction)('CANCELED_EDITING_PLANNER_ITEM');

var cancelEditingPlannerItem = exports.cancelEditingPlannerItem = function cancelEditingPlannerItem() {
  return function (dispatch, getState) {
    dispatch(clearUpdateTodo());
    dispatch(canceledEditingPlannerItem());
  };
};

function saveExistingPlannerOverride(apiOverride) {
  return (0, _axios2.default)({
    method: 'put',
    url: 'api/v1/planner/overrides/' + apiOverride.id,
    data: apiOverride
  });
}

function saveNewPlannerOverride(apiOverride) {
  return (0, _axios2.default)({
    method: 'post',
    url: 'api/v1/planner/overrides',
    data: apiOverride
  });
}

var togglePlannerItemCompletion = exports.togglePlannerItemCompletion = function togglePlannerItemCompletion(plannerItem) {
  return function (dispatch, getState) {
    var savingItem = Object.assign({}, plannerItem, { toggleAPIPending: true, show: true });
    dispatch(savingPlannerItem({ item: savingItem, isNewItem: false, wasToggled: true }));
    var apiOverride = (0, _apiUtils.transformInternalToApiOverride)(plannerItem, getState().currentUser.id);
    apiOverride.marked_complete = !apiOverride.marked_complete;
    var promise = apiOverride.id ? saveExistingPlannerOverride(apiOverride) : saveNewPlannerOverride(apiOverride);
    promise = promise.then(function (response) {
      return {
        item: updateOverrideDataOnItem(plannerItem, response.data),
        isNewItem: false,
        wasToggled: true
      };
    }).catch(function (response) {
      (0, _alertUtils.alert)((0, _formatMessage2.default)('Unable to mark as complete.'), true);
      return {
        item: plannerItem,
        isNewItem: false,
        wasToggled: true
      };
    });
    dispatch(savedPlannerItem(promise));
    return promise;
  };
};

function updateOverrideDataOnItem(plannerItem, apiOverride) {
  var updatedItem = Object.assign({}, plannerItem);
  updatedItem.overrideId = apiOverride.id;
  updatedItem.completed = apiOverride.marked_complete;
  updatedItem.show = true;
  return updatedItem;
}

function getOverrideDataOnItem(plannerItem) {
  return {
    id: plannerItem.overrideId,
    marked_complete: plannerItem.completed
  };
}