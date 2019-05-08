'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = allSagas;
exports.loadPastSaga = loadPastSaga;
exports.loadFutureSaga = loadFutureSaga;
exports.loadPastUntilNewActivitySaga = loadPastUntilNewActivitySaga;
exports.loadGradesSaga = loadGradesSaga;
exports.loadPastUntilTodaySaga = loadPastUntilTodaySaga;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _parseLinkHeader = require('parse-link-header');

var _parseLinkHeader2 = _interopRequireDefault(_parseLinkHeader);

var _effects = require('redux-saga/effects');

var _dateUtils = require('../utilities/dateUtils');

var _apiUtils = require('../utilities/apiUtils');

var _loadingActions = require('./loading-actions');

var _sagaActions = require('./saga-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(allSagas),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchForSagas),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(loadingLoop),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(loadPastSaga),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(loadFutureSaga),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(loadPastUntilNewActivitySaga),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(loadGradesSaga),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(loadPastUntilTodaySaga); /*
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

function allSagas() {
  return regeneratorRuntime.wrap(function allSagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.call)(watchForSagas)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function watchForSagas() {
  return regeneratorRuntime.wrap(function watchForSagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeEvery)('START_LOADING_PAST_SAGA', loadPastSaga);

        case 2:
          _context2.next = 4;
          return (0, _effects.takeEvery)('START_LOADING_FUTURE_SAGA', loadFutureSaga);

        case 4:
          _context2.next = 6;
          return (0, _effects.takeEvery)('START_LOADING_PAST_UNTIL_NEW_ACTIVITY_SAGA', loadPastUntilNewActivitySaga);

        case 6:
          _context2.next = 8;
          return (0, _effects.takeEvery)('START_LOADING_GRADES_SAGA', loadGradesSaga);

        case 8:
          _context2.next = 10;
          return (0, _effects.takeEvery)('START_LOADING_PAST_UNTIL_TODAY_SAGA', loadPastUntilTodaySaga);

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// fromMomentFunction: function
//   arg: currentState
//   returns: the fromMoment that should be passed to the fetch request
// actionCreator: function
//   arg: transformedItems - an array of new items to merge into the state
//   arg: response - the response of the fetch
//   returns: an action that returns a thunk.
//     The thunk should return:
//        true if the conditions were met and we can stop loading items
//        false if the new items did not meet the conditions and we should load more items
// opts: for sendFetchRequest
//   intoThePast
function loadingLoop(fromMomentFunction, actionCreator, opts) {
  var currentState, getState, continueLoading, fromMoment, loadingOptions, _ref, transformedItems, response, thunk;

  return regeneratorRuntime.wrap(function loadingLoop$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          currentState = null;

          getState = function getState() {
            return currentState;
          }; // don't want create a new function inside a loop


          continueLoading = true;

        case 4:
          if (!continueLoading) {
            _context3.next = 23;
            break;
          }

          _context3.next = 7;
          return (0, _effects.select)();

        case 7:
          currentState = _context3.sent;
          fromMoment = fromMomentFunction(currentState);
          loadingOptions = Object.assign({ fromMoment: fromMoment, getState: getState }, opts);
          _context3.next = 12;
          return (0, _effects.call)(_loadingActions.sendFetchRequest, loadingOptions);

        case 12:
          _ref = _context3.sent;
          transformedItems = _ref.transformedItems;
          response = _ref.response;
          _context3.next = 17;
          return (0, _effects.call)(actionCreator, transformedItems, response);

        case 17:
          thunk = _context3.sent;
          _context3.next = 20;
          return (0, _effects.put)(thunk);

        case 20:
          continueLoading = !_context3.sent;
          _context3.next = 4;
          break;

        case 23:
          _context3.next = 30;
          break;

        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 29;
          return (0, _effects.put)((0, _loadingActions.gotItemsError)(_context3.t0));

        case 29:
          throw _context3.t0;

        case 30:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 25]]);
}

function loadPastSaga() {
  return regeneratorRuntime.wrap(function loadPastSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(loadingLoop(fromMomentPast, _sagaActions.mergePastItems, { intoThePast: true }), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function loadFutureSaga() {
  return regeneratorRuntime.wrap(function loadFutureSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.delegateYield(loadingLoop(fromMomentFuture, _sagaActions.mergeFutureItems, { intoThePast: false }), 't0', 1);

        case 1:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function loadPastUntilNewActivitySaga() {
  return regeneratorRuntime.wrap(function loadPastUntilNewActivitySaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.delegateYield(loadingLoop(fromMomentPast, _sagaActions.mergePastItemsForNewActivity, { intoThePast: true }), 't0', 1);

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function loadGradesSaga() {
  var _this = this;

  var loadingOptions;
  return regeneratorRuntime.wrap(function loadGradesSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          loadingOptions = {
            params: {
              include: ['total_scores', 'current_grading_period_scores'],
              enrollment_type: 'student',
              enrollment_state: 'active'
            }
          };
          _context8.prev = 1;
          return _context8.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loadingUrl, gradesData, response, links;
            return regeneratorRuntime.wrap(function _callee$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    // exhaust pagination because we really do need all the grades.
                    loadingUrl = '/api/v1/users/self/courses';
                    gradesData = {};

                  case 2:
                    if (!(loadingUrl != null)) {
                      _context7.next = 11;
                      break;
                    }

                    _context7.next = 5;
                    return (0, _effects.call)(_axios2.default.get, loadingUrl, loadingOptions);

                  case 5:
                    response = _context7.sent;

                    response.data.forEach(function (apiData) {
                      var internalGrade = (0, _apiUtils.transformApiToInternalGrade)(apiData);
                      gradesData[internalGrade.courseId] = internalGrade;
                    });

                    links = (0, _parseLinkHeader2.default)(response.headers.link);

                    loadingUrl = links && links.next ? links.next.url : null;
                    _context7.next = 2;
                    break;

                  case 11:
                    _context7.next = 13;
                    return (0, _effects.put)((0, _loadingActions.gotGradesSuccess)(gradesData));

                  case 13:
                  case 'end':
                    return _context7.stop();
                }
              }
            }, _callee, _this);
          })(), 't0', 3);

        case 3:
          _context8.next = 10;
          break;

        case 5:
          _context8.prev = 5;
          _context8.t1 = _context8['catch'](1);
          _context8.next = 9;
          return (0, _effects.put)((0, _loadingActions.gotGradesError)(_context8.t1));

        case 9:
          throw _context8.t1;

        case 10:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked7, this, [[1, 5]]);
}

function loadPastUntilTodaySaga() {
  return regeneratorRuntime.wrap(function loadPastUntilTodaySaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.delegateYield(loadingLoop(fromMomentPast, _sagaActions.mergePastItemsForToday, { intoThePast: true }), 't0', 1);

        case 1:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked8, this);
}

function fromMomentPast(state) {
  return (0, _dateUtils.getFirstLoadedMoment)(state.days, state.timeZone);
}

function fromMomentFuture(state) {
  var lastMoment = (0, _dateUtils.getLastLoadedMoment)(state.days, state.timeZone);
  if (state.days.length) lastMoment.add(1, 'days');
  return lastMoment;
}