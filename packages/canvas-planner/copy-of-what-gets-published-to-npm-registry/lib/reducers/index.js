'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = finalReducer;

var _redux = require('redux');

var _reduxActions = require('redux-actions');

var _daysReducer = require('./days-reducer');

var _daysReducer2 = _interopRequireDefault(_daysReducer);

var _loadingReducer = require('./loading-reducer');

var _loadingReducer2 = _interopRequireDefault(_loadingReducer);

var _coursesReducer = require('./courses-reducer');

var _coursesReducer2 = _interopRequireDefault(_coursesReducer);

var _groupsReducer = require('./groups-reducer');

var _groupsReducer2 = _interopRequireDefault(_groupsReducer);

var _opportunitiesReducer = require('./opportunities-reducer');

var _opportunitiesReducer2 = _interopRequireDefault(_opportunitiesReducer);

var _todoReducer = require('./todo-reducer');

var _todoReducer2 = _interopRequireDefault(_todoReducer);

var _uiReducer = require('./ui-reducer');

var _uiReducer2 = _interopRequireDefault(_uiReducer);

var _saveItemReducer = require('./save-item-reducer');

var _saveItemReducer2 = _interopRequireDefault(_saveItemReducer);

var _sidebarReducer = require('./sidebar-reducer');

var _sidebarReducer2 = _interopRequireDefault(_sidebarReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = (0, _reduxActions.handleAction)('INITIAL_OPTIONS', function (state, action) {
  return action.payload.locale;
}, 'en'); /*
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


var timeZone = (0, _reduxActions.handleAction)('INITIAL_OPTIONS', function (state, action) {
  return action.payload.timeZone;
}, 'UTC');

var currentUser = (0, _reduxActions.handleAction)('INITIAL_OPTIONS', function (state, action) {
  return action.payload.currentUser;
}, {});

var firstNewActivityDate = (0, _reduxActions.handleAction)('FOUND_FIRST_NEW_ACTIVITY_DATE', function (state, action) {
  return action.payload.clone();
}, null);

var combinedReducers = (0, _redux.combineReducers)({
  courses: _coursesReducer2.default,
  groups: _groupsReducer2.default,
  locale: locale,
  timeZone: timeZone,
  currentUser: currentUser,
  days: _daysReducer2.default,
  loading: _loadingReducer2.default,
  firstNewActivityDate: firstNewActivityDate,
  opportunities: _opportunitiesReducer2.default,
  todo: _todoReducer2.default,
  ui: _uiReducer2.default,
  sidebar: _sidebarReducer2.default
});

function finalReducer(state, action) {
  var nextState = (0, _saveItemReducer2.default)(state, action);
  return combinedReducers(nextState, action);
}