"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
exports.alert = alert;
exports.srAlert = srAlert;
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
var visualSuccessFunc = null;
var visualErrorFunc = null;
var srAlertFunc = null;

function initialize(_ref) {
  var _ref$visualSuccessCal = _ref.visualSuccessCallback,
      visualSuccessCallback = _ref$visualSuccessCal === undefined ? visualSuccessFunc : _ref$visualSuccessCal,
      _ref$visualErrorCallb = _ref.visualErrorCallback,
      visualErrorCallback = _ref$visualErrorCallb === undefined ? visualErrorFunc : _ref$visualErrorCallb,
      _ref$srAlertCallback = _ref.srAlertCallback,
      srAlertCallback = _ref$srAlertCallback === undefined ? srAlertFunc : _ref$srAlertCallback;

  visualSuccessFunc = visualSuccessCallback;
  visualErrorFunc = visualErrorCallback;
  srAlertFunc = srAlertCallback;
}

function alert(message) {
  var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isError) {
    visualErrorFunc(message);
  } else {
    visualSuccessFunc(message);
  }
}

function srAlert(message) {
  srAlertFunc(message);
}