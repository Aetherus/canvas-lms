'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarCompleteItem = exports.sidebarLoadInitialItems = exports.sidebarLoadNextItems = exports.sidebarAllItemsLoaded = exports.sidebarItemsLoadingFailed = exports.sidebarItemsLoaded = exports.sidebarItemsLoading = undefined;

var _reduxActions = require('redux-actions');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

var _actions = require('../actions');

var _apiUtils = require('../utilities/apiUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createActions = (0, _reduxActions.createActions)('SIDEBAR_ITEMS_LOADING', 'SIDEBAR_ITEMS_LOADED', 'SIDEBAR_ITEMS_LOADING_FAILED', 'SIDEBAR_ALL_ITEMS_LOADED'),
    sidebarItemsLoading = _createActions.sidebarItemsLoading,
    sidebarItemsLoaded = _createActions.sidebarItemsLoaded,
    sidebarItemsLoadingFailed = _createActions.sidebarItemsLoadingFailed,
    sidebarAllItemsLoaded = _createActions.sidebarAllItemsLoaded; /*
                                                                   * Copyright (C) 2017 - present Instructure, Inc.
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

exports.sidebarItemsLoading = sidebarItemsLoading;
exports.sidebarItemsLoaded = sidebarItemsLoaded;
exports.sidebarItemsLoadingFailed = sidebarItemsLoadingFailed;
exports.sidebarAllItemsLoaded = sidebarAllItemsLoaded;
var sidebarLoadNextItems = exports.sidebarLoadNextItems = function sidebarLoadNextItems() {
  return function (dispatch, getState) {
    if (!getState().sidebar.loaded && getState().sidebar.nextUrl) {
      dispatch(sidebarItemsLoading());
      _axios2.default.get(getState().sidebar.nextUrl, { params: {
          order: 'asc'
        } }).then(function (response) {
        var linkHeader = (0, _parseLinkHeader2.default)(response.headers.link);
        var transformedItems = response.data.map(function (item) {
          return (0, _apiUtils.transformApiToInternalItem)(item, getState().courses, getState().groups, getState().timeZone);
        });
        if (linkHeader && linkHeader.next) {
          dispatch(sidebarItemsLoaded({ items: transformedItems, nextUrl: linkHeader.next.url }));
          dispatch(sidebarLoadNextItems());
        } else {
          dispatch(sidebarItemsLoaded({ items: transformedItems, nextUrl: null }));
          dispatch(sidebarAllItemsLoaded());
        }
      }).catch(function (response) {
        return dispatch(sidebarItemsLoadingFailed(response));
      });
    }
  };
};

var sidebarLoadInitialItems = exports.sidebarLoadInitialItems = function sidebarLoadInitialItems(currentMoment) {
  return function (dispatch, getState) {
    var firstMomentDate = currentMoment.clone().subtract(2, 'weeks');
    var lastMomentDate = currentMoment.clone().add(2, 'weeks');
    dispatch(sidebarItemsLoading({ firstMoment: firstMomentDate, lastMoment: lastMomentDate }));
    _axios2.default.get('/api/v1/planner/items', { params: {
        start_date: firstMomentDate.toISOString(),
        end_date: lastMomentDate.toISOString(),
        order: 'asc'
      } }).then(function (response) {
      var linkHeader = (0, _parseLinkHeader2.default)(response.headers.link);
      var transformedItems = response.data.map(function (item) {
        return (0, _apiUtils.transformApiToInternalItem)(item, getState().courses, getState().groups, getState().timeZone);
      });
      if (linkHeader && linkHeader.next) {
        dispatch(sidebarItemsLoaded({ items: transformedItems, nextUrl: linkHeader.next.url }));
        dispatch(sidebarLoadNextItems());
      } else {
        dispatch(sidebarItemsLoaded({ items: transformedItems, nextUrl: null }));
        dispatch(sidebarAllItemsLoaded());
      }
    }).catch(function (response) {
      return dispatch(sidebarItemsLoadingFailed(response));
    });
  };
};

var sidebarCompleteItem = exports.sidebarCompleteItem = function sidebarCompleteItem(item) {
  return (0, _actions.togglePlannerItemCompletion)(item);
};