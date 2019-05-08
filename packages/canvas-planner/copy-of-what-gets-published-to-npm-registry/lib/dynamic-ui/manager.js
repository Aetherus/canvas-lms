'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicUiManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
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

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

var _animatableRegistry = require('./animatable-registry');

var _animator = require('./animator');

var _animationCollection = require('./animation-collection');

var _util = require('./util');

var _daysUtils = require('../utilities/daysUtils');

var _alertUtils = require('../utilities/alertUtils');

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DynamicUiManager = exports.DynamicUiManager = (_temp = _class = function () {
  function DynamicUiManager() {
    var _this = this;

    var optsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DynamicUiManager);

    this.registerAnimatable = function (type, component, index, componentIds) {
      _this.animatableRegistry.register(type, component, index, componentIds);
    };

    this.deregisterAnimatable = function (type, component, componentIds) {
      _this.animatableRegistry.deregister(type, component, componentIds);
    };

    this.preTriggerUpdates = function () {
      if (_this.plannerActive()) _this.animationCollection.uiWillUpdate();
    };

    this.triggerUpdates = function (additionalOffset) {
      if (additionalOffset != null) _this.additionalOffset = additionalOffset;

      if (_this.plannerActive()) _this.animationCollection.uiDidUpdate();

      var animationPlan = _this.animationPlan;
      if (!animationPlan.ready) return;

      if (_this.animationPlan.focusOpportunity) {
        _this.triggerFocusOpportunity();
      }

      _this.clearAnimationPlan();
    };

    this.handleAction = function (action) {
      if (_this.plannerActive()) _this.animationCollection.acceptAction(action);

      var handlerSuffix = _changeCase2.default.pascal(action.type);
      var handlerName = 'handle' + handlerSuffix;
      var handler = _this[handlerName];
      if (handler) handler(action);
    };

    this.alertLoading = function () {
      (0, _alertUtils.srAlert)((0, _formatMessage2.default)('loading'));
    };

    this.handleStartLoadingItems = this.alertLoading;
    this.handleGettingFutureItems = this.alertLoading;
    this.handleGettingPastItems = this.alertLoading;

    this.handleGotDaysSuccess = function (action) {
      var newDays = action.payload.internalDays;
      var newItems = (0, _daysUtils.daysToItems)(newDays);
      (0, _alertUtils.srAlert)((0, _formatMessage2.default)('Loaded { count, plural,\n        =0 {# items}\n        one {# item}\n        other {# items}\n      }', { count: newItems.length }));
    };

    this.handleStartLoadingGradesSaga = function (action) {
      (0, _alertUtils.srAlert)((0, _formatMessage2.default)('Loading Grades'));
    };

    this.handleGotGradesSuccess = function (action) {
      (0, _alertUtils.srAlert)((0, _formatMessage2.default)('Grades Loaded'));
    };

    this.handleDismissedOpportunity = function (action) {
      var doomedComponentId = action.payload.plannable_id;
      _this.planDeletedComponent('opportunity', doomedComponentId);
    };

    var opts = Object.assign({}, DynamicUiManager.defaultOptions, optsParam);
    this.plannerActive = opts.plannerActive;
    this.animator = opts.animator;
    this.document = opts.document;
    this.animatableRegistry = new _animatableRegistry.AnimatableRegistry();
    this.animationCollection = new _animationCollection.AnimationCollection(this, opts.actionsToAnimations);
    this.animationPlan = {};
    this.stickyOffset = 0;
    this.additionalOffset = 0;
  }

  _createClass(DynamicUiManager, [{
    key: 'setStickyOffset',
    value: function setStickyOffset(offset) {
      this.stickyOffset = offset;
    }
  }, {
    key: 'getStickyOffset',
    value: function getStickyOffset() {
      return this.stickyOffset;
    }
  }, {
    key: 'setStore',
    value: function setStore(store) {
      this.store = store;
    }
  }, {
    key: 'setApp',
    value: function setApp(app) {
      this.app = app;
    }
  }, {
    key: 'totalOffset',
    value: function totalOffset() {
      return this.stickyOffset + this.additionalOffset;
    }
  }, {
    key: 'focusFallback',
    value: function focusFallback(type) {
      var component = this.animatableRegistry.getComponent(type, (0, _util.specialFallbackFocusId)(type));
      if (component) this.animator.focusElement(component.component.getFocusable());
    }
  }, {
    key: 'getRegistry',
    value: function getRegistry() {
      return this.animatableRegistry;
    }
  }, {
    key: 'getAnimator',
    value: function getAnimator() {
      return this.animator;
    }
  }, {
    key: 'getStore',
    value: function getStore() {
      return this.store;
    }
  }, {
    key: 'getApp',
    value: function getApp() {
      return this.app;
    }
  }, {
    key: 'getDocument',
    value: function getDocument() {
      return this.document;
    }
  }, {
    key: 'clearAnimationPlan',
    value: function clearAnimationPlan() {
      this.animationPlan = this.animationPlan.nextAnimationPlan || {};
    }
  }, {
    key: 'uiStateUnchanged',
    value: function uiStateUnchanged(action) {
      // pretend there was a ui update so the animations can respond to actions that don't change
      // the redux state.
      if (this.plannerActive()) {
        this.animationCollection.uiWillUpdate();
        this.animationCollection.uiDidUpdate();
      }
    }
  }, {
    key: 'triggerFocusOpportunity',
    value: function triggerFocusOpportunity() {
      var oppToFocus = this.animatableRegistry.getComponent('opportunity', this.animationPlan.focusOpportunity);
      if (oppToFocus == null) return;
      this.animator.focusElement(oppToFocus.component.getFocusable(this.animationPlan.trigger));
    }
  }, {
    key: 'handleScrollPositionChange',
    value: function handleScrollPositionChange() {
      // if the button is not being shown, don't show it until an nai is
      // actually above the window, not just under the header. This prevents
      // bouncing of the button visibility that happens as we scroll to new
      // activity because showing and hiding the button changes the document
      // height, which changes the scroll position.
      var naiThreshold = this.stickyOffset;
      if (!this.store.getState().ui.naiAboveScreen) {
        naiThreshold = 0;
      }

      var newActivityIndicators = this.animatableRegistry.getAllNewActivityIndicatorsSorted();
      var naiAboveScreen = false;
      if (newActivityIndicators.length > 0) {
        var naiScrollable = newActivityIndicators[0].component.getScrollable();
        naiAboveScreen = naiScrollable.getBoundingClientRect().top < naiThreshold;
      }

      // just to make sure we avoid dispatching on every scroll position change
      if (this.store.getState().ui.naiAboveScreen !== naiAboveScreen) {
        this.store.dispatch((0, _actions.setNaiAboveScreen)(naiAboveScreen));
      }
    }
  }, {
    key: 'planDeletedComponent',


    // Note that this is actually called before reducers and therefore before the doomed item has
    // actually been removed from the state.
    value: function planDeletedComponent(doomedComponentType, doomedComponentId) {
      var sortedComponents = this.sortedComponentsFor(doomedComponentType);
      var doomedComponentIndex = sortedComponents.findIndex(function (c) {
        return c.componentIds[0] === doomedComponentId;
      });
      var newComponentIndex = this.findFocusIndexAfterDelete(sortedComponents, doomedComponentIndex);
      var animationPlanFocusField = _changeCase2.default.camelCase('focus-' + doomedComponentType);
      if (newComponentIndex != null) {
        this.animationPlan[animationPlanFocusField] = sortedComponents[newComponentIndex].componentIds[0];
      } else {
        this.animationPlan[animationPlanFocusField] = (0, _util.specialFallbackFocusId)(doomedComponentType);
      }
      this.animationPlan.trigger = 'delete';
      this.animationPlan.ready = true;
    }
  }, {
    key: 'sortedComponentsFor',
    value: function sortedComponentsFor(componentType) {
      switch (componentType) {
        case 'item':
          return this.animatableRegistry.getAllItemsSorted();
        case 'opportunity':
          return this.animatableRegistry.getAllOpportunitiesSorted();
        default:
          throw new Error('unrecognized deleted component type: ' + componentType);
      }
    }

    // Note that this finds the new focusable index at its current position, not at its new position
    // after the doomed item is removed. This allows retrieval of the new focusable before the doomed
    // item is removed.

  }, {
    key: 'findFocusIndexAfterDelete',
    value: function findFocusIndexAfterDelete(sortedFocusables, doomedFocusableIndex) {
      var newFocusableIndex = doomedFocusableIndex - 1;
      if (newFocusableIndex < 0) return null;
      return newFocusableIndex;
    }
  }], [{
    key: 'expectedActionsFor',
    value: function expectedActionsFor(animationClass) {
      return _animationCollection.AnimationCollection.expectedActionsFor(animationClass);
    }

    // If you want to register a fallback focus component when all the things in a list are deleted,
    // register that component with a -1 index and a special unique componentId that looks like
    // this: `~~~${registryName}-fallback-focus~~~` where registryName is one of the
    // AnimatableRegistry collections.

  }]);

  return DynamicUiManager;
}(), _class.defaultOptions = {
  plannerActive: function plannerActive() {
    return false;
  },
  animator: new _animator.Animator(),
  document: document,
  actionsToAnimations: _animationCollection.AnimationCollection.actionsToAnimations
}, _temp);