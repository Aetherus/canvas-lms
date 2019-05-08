'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

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


function setOpportunityState(state, action) {
  // merge payload into state, ignoring duplicates
  // this approach favors the existing item over the new
  var opportunities = [].concat(_toConsumableArray(state.items)).concat(action.payload.items.filter(function (payitem) {
    return state.items.findIndex(function (stateitem) {
      return stateitem.id === payitem.id;
    }) < 0;
  }));
  return {
    items: opportunities,
    nextUrl: action.payload.nextUrl
  };
}

exports.default = (0, _reduxActions.handleActions)({
  ADD_OPPORTUNITIES: setOpportunityState,
  DISMISSED_OPPORTUNITY: function DISMISSED_OPPORTUNITY(state, action) {
    var stateCopy = (0, _lodash.cloneDeep)(state);
    var dismissedOpportunity = stateCopy.items.find(function (opportunity) {
      return opportunity.id === action.payload.plannable_id + "";
    });
    if (dismissedOpportunity.planner_override) {
      dismissedOpportunity.planner_override.dismissed = action.payload.dismissed;
    } else {
      dismissedOpportunity.planner_override = action.payload;
    }
    return stateCopy;
  }
}, {
  items: [],
  nextUrl: null
});