'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

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
exports.default = (0, _reduxActions.handleActions)({
  UPDATE_TODO: function UPDATE_TODO(state, action) {
    return (0, _lodash.cloneDeep)(action.payload);
  },
  OPEN_EDITING_PLANNER_ITEM: function OPEN_EDITING_PLANNER_ITEM(state, action) {
    return state.updateTodoItem ? state : { updateTodoItem: {} };
  },
  CLEAR_UPDATE_TODO: function CLEAR_UPDATE_TODO(state, action) {
    return {};
  }
}, {});