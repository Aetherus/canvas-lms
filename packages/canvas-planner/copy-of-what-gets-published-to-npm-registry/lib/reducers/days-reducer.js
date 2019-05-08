'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

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

function deletedPlannerItem(state, action) {
  if (action.error) return state;
  return (0, _daysUtils.deleteItemFromDays)(state, action.payload);
}

exports.default = (0, _reduxActions.handleActions)({
  GOT_DAYS_SUCCESS: function GOT_DAYS_SUCCESS(state, action) {
    return (0, _daysUtils.mergeDays)(state, action.payload.internalDays);
  },
  DELETED_PLANNER_ITEM: deletedPlannerItem
}, []);