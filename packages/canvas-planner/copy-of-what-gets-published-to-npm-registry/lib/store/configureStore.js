'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _dynamicUi = require('../dynamic-ui');

var _sagas = require('../actions/sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

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
function configureStore(uiManager, defaultState) {
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var middlewares = [_reduxThunk2.default, _reduxPromise2.default, sagaMiddleware, (0, _dynamicUi.createDynamicUiMiddleware)(uiManager)];

  var store = (0, _redux.createStore)(_reducers2.default, defaultState, (0, _developmentOnly.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middlewares)));
  sagaMiddleware.run(_sagas2.default);
  return store;
}