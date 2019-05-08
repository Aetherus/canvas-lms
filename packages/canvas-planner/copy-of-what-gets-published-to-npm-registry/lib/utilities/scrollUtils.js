'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerScrollEvents = registerScrollEvents;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function isScrollPositionAtTop(wind) {
  return wind.pageYOffset === 0;
}

function isScrollPositionAtBottom(wind) {
  var doc = wind.document.documentElement;
  var docBottom = doc.getBoundingClientRect().bottom;
  var clientHeight = doc.clientHeight;
  // clientHeight is rounded to an integer, while the rect is a more precise
  // float. This means sometimes bottom is greater than the clientHeight
  // because clientHeight has been rounded off. Also, there appears to be
  // a bug with chrome when zoomed out and this will be off by more than
  // half a pixel. So to fix this, we'll pad the clientHeight just a little
  // so things will work when we're near the bottom.

  return docBottom <= clientHeight + 2;
}

function isWheelUpEvent(e) {
  return e.deltaY < 0;
}

function isWheelDownEvent(e) {
  return e.deltaY > 0;
}

function handleScrollAttempt(cb, e) {
  e.preventDefault();
  cb();
}

function handleWindowWheel(pastCb, futureCb, wind, e) {
  if (isScrollPositionAtTop(wind) && isWheelUpEvent(e)) {
    handleScrollAttempt(pastCb, e);
  } else if (isScrollPositionAtBottom(wind) && isWheelDownEvent(e)) {
    handleScrollAttempt(futureCb, e);
  }
}

// User drags a finger down the screen to scroll up.
// When she gets to the top, and keeps on pulling down, call the callback
// and vice versa
var ongoingTouch = null;
function handleTouchStart(e) {
  if (ongoingTouch === null) {
    ongoingTouch = e.changedTouches[0];
  }
}

function handleWindowTouchMove(pastCb, futureCb, wind, e) {
  if (!ongoingTouch) return;
  var thisTouch = e.changedTouches[ongoingTouch.identifier];
  if (!thisTouch) return;
  if (isScrollPositionAtTop(wind) && thisTouch.screenY - ongoingTouch.screenY > 3) {
    pastCb();
  } else if (isScrollPositionAtBottom(wind) && thisTouch.screenY - ongoingTouch.screenY < -3) {
    futureCb();
  }
}
function handleTouchEnd(e) {
  ongoingTouch = null;
}

var ScrollHandler = function ScrollHandler(scrollCb, wind) {
  var _this = this;

  _classCallCheck(this, ScrollHandler);

  this.mostRecentScrollPosition = 0;
  this.callbackThrottle = false;

  this.throttledScrollEvent = function () {
    try {
      _this.scrollCb(_this.mostRecentScrollPosition);
    } finally {
      _this.callbackThrottle = false;
    }
  };

  this.handleScrollEvent = function () {
    _this.mostRecentScrollPosition = _this.wind.pageYOffset;
    if (!_this.callbackThrottle) {
      _this.callbackThrottle = true;
      _this.wind.setTimeout(_this.throttledScrollEvent, 0);
    }
  };

  this.scrollCb = scrollCb;
  this.wind = wind;
  wind.addEventListener('scroll', this.handleScrollEvent);
};

function registerScrollEvents(_ref) {
  var scrollIntoPastCb = _ref.scrollIntoPast,
      scrollIntoFutureCb = _ref.scrollIntoFuture,
      scrollCb = _ref.scrollPositionChange,
      wind = _ref.window;

  wind = wind || window;
  var boundWindowWheel = handleWindowWheel.bind(undefined, scrollIntoPastCb, scrollIntoFutureCb, wind);
  wind.addEventListener('wheel', boundWindowWheel);

  wind.addEventListener('touchstart', handleTouchStart);
  wind.addEventListener('touchend', handleTouchEnd);
  var boundTouchMove = handleWindowTouchMove.bind(undefined, scrollIntoPastCb, scrollIntoFutureCb, wind);
  wind.addEventListener('touchmove', boundTouchMove);

  new ScrollHandler(scrollCb, wind);
}