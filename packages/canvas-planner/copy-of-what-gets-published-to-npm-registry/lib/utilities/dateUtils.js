'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToday = isToday;
exports.isInFuture = isInFuture;
exports.isTodayOrBefore = isTodayOrBefore;
exports.isInMomentRange = isInMomentRange;
exports.getFriendlyDate = getFriendlyDate;
exports.getFullDate = getFullDate;
exports.getShortDate = getShortDate;
exports.getFullDateAndTime = getFullDateAndTime;
exports.formatDateAtTimeWithoutYear = formatDateAtTimeWithoutYear;
exports.formatDayKey = formatDayKey;
exports.getFirstLoadedMoment = getFirstLoadedMoment;
exports.getLastLoadedMoment = getLastLoadedMoment;
exports.isMidnight = isMidnight;
exports.makeEndOfDayIfMidnight = makeEndOfDayIfMidnight;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _timezone = require('timezone');

var _timezone2 = _interopRequireDefault(_timezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTodaysDetails() {
  var today = (0, _momentTimezone2.default)();
  var yesterday = today.clone().subtract(1, 'days');
  var tomorrow = today.clone().add(1, 'days');

  return { today: today, yesterday: yesterday, tomorrow: tomorrow };
}

// NOTE: Canvas monkey-patches the timezone package to support the Canvas localized formats, and
// we're counting on that behavior in this file. The version of the timezone package that planner
// has in its package.json must stay in sync with package.json in Canvas so we don't lose the
// monkey-patch. The reason we're doing this is because moment.js doesn't support the format that we
// want to use in the todo sidebar, and Intl.DateTimeFormat doesn't support timezones in IE11. Using
// the formatter from Canvas seemed like the best remaining option.
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


function isSpecialDay(date) {
  var _getTodaysDetails = getTodaysDetails(),
      today = _getTodaysDetails.today,
      yesterday = _getTodaysDetails.yesterday,
      tomorrow = _getTodaysDetails.tomorrow;

  var momentizedDate = new _momentTimezone2.default(date);

  var specialDates = [today, yesterday, tomorrow];
  return specialDates.some(function (sd) {
    return sd.isSame(momentizedDate, 'day');
  });
}

function isToday(date) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _momentTimezone2.default)();

  var momentizedDate = new _momentTimezone2.default(date);
  return today.isSame(momentizedDate, 'day');
}

function isInFuture(date) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _momentTimezone2.default)();

  var momentizedDate = new _momentTimezone2.default(date);
  return momentizedDate.isAfter(today, 'day');
}

function isTodayOrBefore(date) {
  var today = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _momentTimezone2.default)();

  var momentizedDate = new _momentTimezone2.default(date);
  return momentizedDate.isBefore(today, 'day') || momentizedDate.isSame(today, 'day');
  // moment.isSameOrBefore isn't available until moment 2.11, but until we get off
  // all of ui-core, it ends up pulling in an earlier version.
  //return momentizedDate.isSameOrBefore(today, 'day');
}

// determines if the checkMoment falls on or inbetween the firstMoment and the lastMoment
function isInMomentRange(checkMoment, firstMoment, lastMoment) {
  var isOnOrAfterFirst = checkMoment.isAfter(firstMoment) || checkMoment.isSame(firstMoment);
  var isOnOrBeforeLast = checkMoment.isBefore(lastMoment) || checkMoment.isSame(lastMoment);
  return isOnOrAfterFirst && isOnOrBeforeLast;
}

/**
* Given a date (in any format that moment will digest)
* it will return a string indicating Today, Tomorrow, Yesterday
* or the day of the week if it doesn't fit in any of those categories
*/
function getFriendlyDate(date) {
  var _getTodaysDetails2 = getTodaysDetails(),
      today = _getTodaysDetails2.today,
      yesterday = _getTodaysDetails2.yesterday,
      tomorrow = _getTodaysDetails2.tomorrow;

  var momentizedDate = new _momentTimezone2.default(date);

  if (isToday(date, today)) {
    return (0, _formatMessage2.default)('Today');
  } else if (yesterday.isSame(momentizedDate, 'day')) {
    return (0, _formatMessage2.default)('Yesterday');
  } else if (tomorrow.isSame(momentizedDate, 'day')) {
    return (0, _formatMessage2.default)('Tomorrow');
  } else {
    return momentizedDate.format('dddd');
  }
}

function getFullDate(date) {
  if (isSpecialDay(date)) {
    return (0, _momentTimezone2.default)(date).format('dddd, MMMM D');
  } else {
    return (0, _momentTimezone2.default)(date).format('MMMM D, YYYY');
  }
}

function getShortDate(date) {
  return (0, _momentTimezone2.default)(date).format('MMMM D');
}

function getFullDateAndTime(date) {
  var _getTodaysDetails3 = getTodaysDetails(),
      today = _getTodaysDetails3.today,
      yesterday = _getTodaysDetails3.yesterday,
      tomorrow = _getTodaysDetails3.tomorrow;

  var momentizedDate = new _momentTimezone2.default(date);

  if (isToday(date, today)) {
    return (0, _formatMessage2.default)('Today at {date}', { date: momentizedDate.format('LT') });
  } else if (yesterday.isSame(momentizedDate, 'day')) {
    return (0, _formatMessage2.default)('Yesterday at {date}', { date: momentizedDate.format('LT') });
  } else if (tomorrow.isSame(momentizedDate, 'day')) {
    return (0, _formatMessage2.default)('Tomorrow at {date}', { date: momentizedDate.format('LT') });
  } else {
    return (0, _formatMessage2.default)('{date} at {time}', { date: momentizedDate.format('LL'), time: momentizedDate.format('LT') });
  }
}

// NOTE: this is where we're using a canvas specific format from the monkey-patched timezone
// package. See comment above on the timezone package import.
function formatDateAtTimeWithoutYear(date, timeZone) {
  // fancy conversion so we can support both Date and moment objects
  date = new Date(date.toISOString());

  // If  we're not in canvas, then there's no monkey-patch. Use a fallback in the test environment.
  if (process.env.NODE_ENV === 'test' && !_timezone2.default.format) {
    return (0, _momentTimezone2.default)(date).format('lll'); // includes the year, unfortunately
  } else {
    return _timezone2.default.format(date, 'date.formats.date_at_time', timeZone);
  }
}

function formatDayKey(date) {
  return (0, _momentTimezone2.default)(date, _momentTimezone2.default.ISO_8601).format('YYYY-MM-DD');
}

function getFirstLoadedMoment(days, timeZone) {
  if (!days.length) return (0, _momentTimezone2.default)().tz(timeZone).startOf('day');
  var firstLoadedDay = days[0];
  var firstLoadedItem = firstLoadedDay[1][0];
  if (firstLoadedItem) return firstLoadedItem.dateBucketMoment.clone();
  return _momentTimezone2.default.tz(firstLoadedDay[0], timeZone).startOf('day');
}

function getLastLoadedMoment(days, timeZone) {
  if (!days.length) return (0, _momentTimezone2.default)().tz(timeZone).startOf('day');
  var lastLoadedDay = days[days.length - 1];
  var loadedItem = lastLoadedDay[1][0];
  if (loadedItem) return loadedItem.dateBucketMoment.clone();
  return _momentTimezone2.default.tz(lastLoadedDay[0], timeZone).startOf('day');
}

// datetime: iso8601 string or moment
// timeZone: user's timeZone
// returns: true if datetime is at midnight in the timeZone
function isMidnight(datetime, timeZone) {
  if (typeof datetime === 'string') datetime = (0, _momentTimezone2.default)(datetime);
  var localDay = (0, _momentTimezone2.default)(datetime).tz(timeZone);
  return localDay.hours() === 0 && localDay.minutes() === 0 && localDay.seconds() === 0;
}

// if incoming datetime is at midnight user's time, convert to 11:59pm
// datetime: moment or iso8601 string
// timeZone: user's timeZone
// returns: moment of the result
function makeEndOfDayIfMidnight(datetime, timeZone) {
  datetime = (0, _momentTimezone2.default)(datetime);
  if (isMidnight(datetime, timeZone)) {
    return (0, _momentTimezone2.default)(datetime).tz(timeZone).endOf('day');
  }
  return datetime;
}