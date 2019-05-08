'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (C) 2018 - present Instructure, Inc.
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

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
  function Animation(expectedActions, manager) {
    _classCallCheck(this, Animation);

    this.acceptedActions = {};
    this.expectedActions = [];
    this.executing = false;

    if (expectedActions.length === 0) {
      throw new Error('There must be at least one expected action');
    }
    this.expectedActions = expectedActions;
    this._manager = manager;
  }

  //----------------------
  // Overriddable methods
  //----------------------

  // You can create custom methods to determine if an action will be accepted.
  // This lets you write custom logic to determine whether an action meets this
  // animation's criteria. Prefix the method with `shouldAccept`. For example:
  // shouldAcceptGotDaysSuccess(action) {
  //   // custom logic
  //   // return result of custom logic
  // }
  // This will only be invoked if the action is in the list of expected actions.

  // Called to determine if this animation is ready to execute. By default an
  // animation is ready if all of its expected actions have been accepted. You
  // can overwrite this to perform your own readiness logic.


  _createClass(Animation, [{
    key: 'isReady',
    value: function isReady() {
      return this.acceptedActionsLength() === this.expectedActions.length;
    }

    // Override this to do something before the DOM updates. Only called if
    // `isReady` returned true.

  }, {
    key: 'uiWillUpdate',
    value: function uiWillUpdate() {}

    // Override this to do something after the DOM updates. Only called if
    // `isReady` returned true. After this returns, the accepted actions will
    // be cleared.

  }, {
    key: 'uiDidUpdate',
    value: function uiDidUpdate() {}

    // Override this to enable calling `this.maintainViewportPositionOfFixedElement`

  }, {
    key: 'fixedElement',
    value: function fixedElement() {
      return null;
    }

    //------------------------------------
    // Interface methods: Do not override
    //------------------------------------

    // Convenience method for using the animator's maintainViewportPositionFromMemo
    // method. Implement fixedElement to use this.

  }, {
    key: 'maintainViewportPositionOfFixedElement',
    value: function maintainViewportPositionOfFixedElement() {
      var fixedElement = this.fixedElement();
      if (fixedElement && this.fixedElementPositionMemo) {
        this.animator().maintainViewportPositionFromMemo(fixedElement, this.fixedElementPositionMemo);
        this.fixedElementPositionMemo = null;
      }
    }

    // Used by the manager to feed actions to the animations

  }, {
    key: 'acceptAction',
    value: function acceptAction(action) {
      var expectedActionIndex = this.expectedActions.indexOf(action.type);
      // we don't expect this action at all
      if (expectedActionIndex === -1) return false;
      // we expect this action, but not until prior actions have been accepted.
      if (expectedActionIndex > this.acceptedActionsLength()) return false;

      var acceptsName = 'shouldAccept' + _changeCase2.default.pascal(action.type);
      var accepted = this[acceptsName] ? this[acceptsName](action) : true;
      if (accepted) {
        this.removeAcceptedActionsAfter(expectedActionIndex);
        this.acceptedActions[action.type] = action;
      }
      return accepted;
    }

    // The manager should call these lifecycle methods instead of calling the virtual methods directly.

  }, {
    key: 'invokeUiWillUpdate',
    value: function invokeUiWillUpdate() {
      if (this.executing) return;
      this.executing = true;

      var fixedElement = this.fixedElement();
      if (fixedElement) this.fixedElementPositionMemo = this.animator().elementPositionMemo(fixedElement);

      this.uiWillUpdate();
      this.executing = false;
    }

    // The manager should call these lifecycle methods instead of calling the virtual methods directly.

  }, {
    key: 'invokeUiDidUpdate',
    value: function invokeUiDidUpdate() {
      if (this.executing) return;
      this.executing = true;
      this.uiDidUpdate();
      this.reset();
      this.executing = false;
    }

    // Get the accepted action of the specified type.

  }, {
    key: 'acceptedAction',
    value: function acceptedAction(actionType) {
      if (!this.isExpectedAction(actionType)) {
        throw new Error('ERROR: ' + this.constructor.name + ' tried to access unexpected action \'' + actionType + '\'');
      }

      var action = this.acceptedActions[actionType];
      if (!action) {
        throw new Error('ERROR: ' + this.constructor.name + ' tried to retrieve action \'' + actionType + '\' before it was accepted');
      }

      return action;
    }

    // remove all accepted actions

  }, {
    key: 'reset',
    value: function reset() {
      this.acceptedActions = {};
      this.fixedElementPositionMemo = null;
    }

    // access to all the different objects an animation could need.

  }, {
    key: 'manager',
    value: function manager() {
      return this._manager;
    }
  }, {
    key: 'registry',
    value: function registry() {
      return this.manager().getRegistry();
    }
  }, {
    key: 'animator',
    value: function animator() {
      return this.manager().getAnimator();
    }
  }, {
    key: 'store',
    value: function store() {
      return this.manager().getStore();
    }
  }, {
    key: 'app',
    value: function app() {
      return this.manager().getApp();
    }
  }, {
    key: 'document',
    value: function document() {
      return this.manager().getDocument();
    }
  }, {
    key: 'window',
    value: function window() {
      return this.animator().getWindow();
    }
  }, {
    key: 'stickyOffset',
    value: function stickyOffset() {
      return this.manager().getStickyOffset();
    }
  }, {
    key: 'totalOffset',
    value: function totalOffset() {
      return this.manager().totalOffset();
    }
    //------------------------------------------------------------------
    // Implementation methods: do not use or override the methods below
    //------------------------------------------------------------------

    // Maps action types to the entire accepted action.


    // Array of action types this animation can accept.


    // If an animation dispatches an action, this prevents it from invoking itself again.

  }, {
    key: 'isExpectedAction',
    value: function isExpectedAction(actionType) {
      return this.expectedActions.includes(actionType);
    }
  }, {
    key: 'removeAcceptedActionsAfter',
    value: function removeAcceptedActionsAfter(actionIndex) {
      for (var i = actionIndex; i < this.expectedActions.length; ++i) {
        delete this.acceptedActions[this.expectedActions[i]];
      }
    }
  }, {
    key: 'acceptedActionsLength',
    value: function acceptedActionsLength() {
      return Object.keys(this.acceptedActions).length;
    }
  }]);

  return Animation;
}();

exports.default = Animation;