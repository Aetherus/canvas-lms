'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _reduxActions = require('redux-actions');

var _redux = require('redux');

var _dateUtils = require('../utilities/dateUtils');

var _daysUtils = require('../utilities/daysUtils');

/*
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

var items = (0, _reduxActions.handleActions)({
  SIDEBAR_ITEMS_LOADED: function SIDEBAR_ITEMS_LOADED(state, action) {
    var newState = state.concat(action.payload.items);
    sortItems(newState);
    return newState;
  },
  DELETED_PLANNER_ITEM: deleteItem
}, []);

function deleteItem(state, action) {
  var doomedIndex = state.findIndex(function (item) {
    return item.uniqueId === action.payload.uniqueId;
  });
  if (doomedIndex > -1) {
    var newState = state.slice();
    newState.splice(doomedIndex, 1);
    return newState;
  }
  return state;
}

var nextUrl = (0, _reduxActions.handleActions)({
  SIDEBAR_ITEMS_LOADED: function SIDEBAR_ITEMS_LOADED(state, action) {
    return action.payload.nextUrl;
  }
}, null);

var loading = (0, _reduxActions.handleActions)({
  SIDEBAR_ITEMS_LOADING: function SIDEBAR_ITEMS_LOADING() {
    return true;
  },
  SIDEBAR_ALL_ITEMS_LOADED: function SIDEBAR_ALL_ITEMS_LOADED() {
    return false;
  },
  SIDEBAR_ITEMS_LOADING_FAILED: function SIDEBAR_ITEMS_LOADING_FAILED() {
    return false;
  }
}, false);

var loaded = (0, _reduxActions.handleActions)({
  SIDEBAR_ALL_ITEMS_LOADED: function SIDEBAR_ALL_ITEMS_LOADED() {
    return true;
  }
}, false);

var range = (0, _reduxActions.handleActions)({
  SIDEBAR_ITEMS_LOADING: function SIDEBAR_ITEMS_LOADING(state, action) {
    if (action.payload) return Object.assign({}, state, action.payload);else return state;
  }
}, {});

var combinedReducer = (0, _redux.combineReducers)({
  items: items,
  loading: loading,
  nextUrl: nextUrl,
  loaded: loaded,
  range: range
});

function sortItems(items) {
  return items.sort(_daysUtils.orderItemsByTimeAndTitle);
}

function savedItemReducer(state, action) {
  if (!state) return undefined;
  if (!state.loaded || action.type !== 'SAVED_PLANNER_ITEM') return state;

  var newItem = action.payload.item;
  var newItems = state.items.slice();
  var changed = false;
  var oldItemIndex = state.items.findIndex(function (item) {
    return item.uniqueId === newItem.uniqueId;
  });
  if (oldItemIndex > -1) {
    newItems.splice(oldItemIndex, 1);
    changed = true;
  }
  if ((0, _dateUtils.isInMomentRange)(newItem.date, state.range.firstMoment, state.range.lastMoment)) {
    newItems.push(newItem);
    sortItems(newItems);
    changed = true;
  }
  return changed ? Object.assign({}, state, { items: newItems }) : state;
}

function reducer(state, action) {
  var newState = savedItemReducer(state, action);
  newState = combinedReducer(newState, action);
  return newState;
}