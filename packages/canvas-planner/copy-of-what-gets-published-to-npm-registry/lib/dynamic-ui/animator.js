'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animator = exports.Animator = function () {
  function Animator() {
    var _this = this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Animator);

    this.animationQueue = [];
    this.fixedElement = null;
    this.fixedElementsInitialPositionInViewport = null;

    this.runAnimationQueue = function () {
      while (_this.animationQueue.length) {
        var animationFn = _this.animationQueue.shift();
        animationFn();
      }
    };

    Object.assign(this, {
      velocity: _velocityAnimate2.default,
      document: document,
      window: window
    }, opts);
  }

  _createClass(Animator, [{
    key: 'getWindow',


    // Get the window registered with this animator. Mostly for testing.
    value: function getWindow() {
      return this.window;
    }
  }, {
    key: 'focusElement',
    value: function focusElement(elt) {
      // focusing an element causes it to scroll into view, so do the focus first so it doesn't
      // override maintaining the viewport position.
      if (!elt) console.error(elt + ' passed to Animator#focusElement');else this.queueAnimation(function () {
        return elt.focus();
      }, 'unshift');
    }
  }, {
    key: 'elementPositionMemo',
    value: function elementPositionMemo(elt) {
      return {
        element: elt,
        rect: elt.getBoundingClientRect()
      };
    }

    // Based on this formula:
    // element's position in the viewport + the window's scroll position === the element's position in the document
    // so if we want the scroll position that will maintain the element in it's current viewport position,
    // window scroll position = element's current document position - element's initial viewport position

  }, {
    key: 'maintainViewportPositionFromMemo',
    value: function maintainViewportPositionFromMemo(elt, memo) {
      var _this2 = this;

      this.queueAnimation(function () {
        var fixedElementsInitialPositionInViewport = memo.rect.top;
        var fixedElementsNewPositionInViewport = elt.getBoundingClientRect().top;
        var documentPositionInViewport = _this2.document.documentElement.getBoundingClientRect().top;
        var fixedElementsPositionInDocument = fixedElementsNewPositionInViewport - documentPositionInViewport;
        var newWindowScrollPosition = fixedElementsPositionInDocument - fixedElementsInitialPositionInViewport;
        _this2.window.scroll(0, newWindowScrollPosition);
      }, 'push');
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(elt, offset, onComplete) {
      var _this3 = this;

      this.queueAnimation(function () {
        if (_this3.isOffScreen(elt, offset)) {
          _this3.velocity(elt, 'scroll', { offset: -offset, duration: 1000, easing: 'ease-in-out', complete: onComplete });
        } else {
          // even though we didn't need to run the animation, execute the onComplete callback
          onComplete && onComplete();
        }
      });
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      this.scrollTo(document.documentElement, 0);
    }
  }, {
    key: 'queueAnimation',
    value: function queueAnimation(fn) {
      var pushType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';

      this.animationQueue[pushType](fn);
      this.window.requestAnimationFrame(this.runAnimationQueue);
    }
  }, {
    key: 'isAboveScreen',
    value: function isAboveScreen(elt, offset) {
      return elt.getBoundingClientRect().top < offset;
    }
  }, {
    key: 'isBelowScreen',
    value: function isBelowScreen(elt) {
      // clientHeight is rounded to an integer, while the rect is a more precise
      // float. Add some padding so we err on the side of loading too much.
      // Also, Canvas's footer makes the document always at least as tall as
      // the viewport.
      var doc = this.window.document.documentElement;
      return elt.getBoundingClientRect().bottom + 2 > doc.clientHeight;
    }
  }, {
    key: 'isOnScreen',
    value: function isOnScreen(elt, offset) {
      return !this.isOffScreen(elt, offset);
    }
  }, {
    key: 'isOffScreen',
    value: function isOffScreen(elt, offset) {
      return this.isAboveScreen(elt, offset) || this.isBelowScreen(elt);
    }
  }]);

  return Animator;
}();