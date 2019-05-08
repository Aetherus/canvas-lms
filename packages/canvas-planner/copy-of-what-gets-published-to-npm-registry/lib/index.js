'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;
exports.render = render;
exports.renderHeader = renderHeader;
exports.renderToDoSidebar = renderToDoSidebar;
exports.default = loadPlannerDashboard;

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _PlannerApp = require('./components/PlannerApp');

var _PlannerApp2 = _interopRequireDefault(_PlannerApp);

var _PlannerHeader = require('./components/PlannerHeader');

var _PlannerHeader2 = _interopRequireDefault(_PlannerHeader);

var _ToDoSidebar = require('./components/ToDoSidebar');

var _ToDoSidebar2 = _interopRequireDefault(_ToDoSidebar);

var _ApplyTheme = require('@instructure/ui-themeable/lib/components/ApplyTheme');

var _ApplyTheme2 = _interopRequireDefault(_ApplyTheme);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _actions = require('./actions');

var _scrollUtils = require('./utilities/scrollUtils');

var _alertUtils = require('./utilities/alertUtils');

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _dynamicUi = require('./dynamic-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  locale: 'en',
  timeZone: _momentTimezone2.default.tz.guess(),
  currentUser: {},
  theme: 'canvas',
  courses: [],
  groups: [],
  stickyOffset: 0,
  stickyZIndex: 5
}; /*
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

// runtimes and polyfills that need to be imported first


var externalPlannerActive = void 0;
var plannerActive = function plannerActive() {
  return externalPlannerActive ? externalPlannerActive() : false;
};

var dynamicUiManager = new _dynamicUi.DynamicUiManager({ plannerActive: plannerActive });
var store = exports.store = (0, _configureStore2.default)(dynamicUiManager);

function handleScrollIntoPastAttempt() {
  if (!plannerActive()) return;
  if (!store.getState().loading.loadingPast && !store.getState().loading.loadingFuture && !store.getState().loading.allPastItemsLoaded) {
    store.dispatch((0, _actions.scrollIntoPast)());
  }
}

function handleScrollIntoFutureAttempt() {
  if (!plannerActive()) return;
  if (!store.getState().loading.loadingPast && !store.getState().loading.loadingFuture && !store.getState().loading.allFutureItemsLoaded) {
    store.dispatch((0, _actions.loadFutureItems)());
  }
}

function externalFocusableWrapper(externalFallbackFocusable) {
  return {
    getFocusable: function getFocusable() {
      return externalFallbackFocusable;
    },
    getScrollable: function getScrollable() {
      return externalFallbackFocusable;
    }
  };
}

function render(element, options) {
  // Using this pattern because default params don't merge objects
  var opts = Object.assign({}, defaultOptions, options);
  _i18n2.default.init(opts.locale);
  _momentTimezone2.default.locale(opts.locale);
  _momentTimezone2.default.tz.setDefault(opts.timeZone);
  dynamicUiManager.setStickyOffset(opts.stickyOffset);
  dynamicUiManager.registerAnimatable('item', externalFocusableWrapper(options.externalFallbackFocusable), -1, [(0, _dynamicUi.specialFallbackFocusId)('item')]);
  (0, _scrollUtils.registerScrollEvents)({
    scrollIntoPast: handleScrollIntoPastAttempt,
    scrollIntoFuture: handleScrollIntoFutureAttempt,
    scrollPositionChange: function scrollPositionChange(pos) {
      return dynamicUiManager.handleScrollPositionChange(pos);
    }
  });
  if (!opts.flashAlertFunctions) {
    throw new Error('You must provide callbacks to handle flash messages');
  }
  (0, _alertUtils.initialize)(opts.flashAlertFunctions);

  store.dispatch((0, _actions.initialOptions)(opts));
  store.dispatch((0, _actions.getPlannerItems)(_momentTimezone2.default.tz(opts.timeZone).startOf('day')));

  _reactDom2.default.render(applyTheme(_react2.default.createElement(
    _dynamicUi.DynamicUiProvider,
    { manager: dynamicUiManager },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_PlannerApp2.default, {
        appRef: function appRef(app) {
          return dynamicUiManager.setApp(app);
        },
        stickyOffset: opts.stickyOffset,
        changeToDashboardCardView: opts.changeToDashboardCardView,
        plannerActive: plannerActive,
        currentUser: opts.currentUser,
        focusFallback: function focusFallback() {
          return dynamicUiManager.focusFallback('item');
        }
      })
    )
  ), opts.theme), element);
}

// This method allows you to render the header items into a separate DOM node
function renderHeader(element, auxElement, options) {
  // Using this pattern because default params don't merge objects
  var opts = Object.assign({}, defaultOptions, options);
  _reactDom2.default.render(applyTheme(_react2.default.createElement(
    _dynamicUi.DynamicUiProvider,
    { manager: dynamicUiManager },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_PlannerHeader2.default, {
        stickyZIndex: opts.stickyZIndex,
        timeZone: opts.timeZone,
        locale: opts.locale,
        ariaHideElement: opts.ariaHideElement,
        auxElement: auxElement
      })
    )
  ), opts.theme), element);
}

// This method allows you to render the To Do Sidebar into a separate DOM node
function renderToDoSidebar(element) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_ToDoSidebar2.default, { courses: window.ENV.STUDENT_PLANNER_COURSES, timeZone: ENV.TIMEZONE, locale: ENV.LOCALE })
  ), element);
}

function applyTheme(el, theme) {
  return theme ? _react2.default.createElement(
    _ApplyTheme2.default,
    {
      theme: _ApplyTheme2.default.generateTheme(theme.key),
      immutable: theme.accessible
    },
    el
  ) : el;
}

function loadPlannerDashboard(_ref) {
  var changeToCardView = _ref.changeToCardView,
      getActiveApp = _ref.getActiveApp,
      flashError = _ref.flashError,
      flashMessage = _ref.flashMessage,
      srFlashMessage = _ref.srFlashMessage,
      externalFallbackFocusable = _ref.externalFallbackFocusable,
      env = _ref.env;

  var element = document.getElementById('dashboard-planner');
  var headerElement = document.getElementById('dashboard-planner-header');
  var headerAuxElement = document.getElementById('dashboard-planner-header-aux');
  var stickyElement = document.getElementById('dashboard_header_container');
  var courses = env.STUDENT_PLANNER_COURSES.map(function (dc) {
    return Object.assign({}, dc, {
      color: env.PREFERENCES.custom_colors[dc.assetString]
    });
  });

  var groups = env.STUDENT_PLANNER_GROUPS ? env.STUDENT_PLANNER_GROUPS.map(function (dg) {
    return Object.assign({}, dg, {
      color: env.PREFERENCES.custom_colors[dg.assetString] || '#666666'
    });
  }) : [];

  var stickyElementRect = stickyElement.getBoundingClientRect();
  var stickyOffset = stickyElementRect.bottom - stickyElementRect.top + 24;
  externalPlannerActive = function externalPlannerActive() {
    return getActiveApp() === 'planner';
  };

  var options = {
    flashAlertFunctions: {
      visualErrorCallback: flashError,
      visualSuccessCallback: flashMessage,
      srAlertCallback: srFlashMessage
    },
    externalFallbackFocusable: externalFallbackFocusable,
    locale: env.LOCALE,
    timeZone: env.TIMEZONE,
    currentUser: {
      id: env.current_user.id,
      displayName: env.current_user.display_name,
      avatarUrl: env.current_user.avatar_image_url,
      color: env.PREFERENCES.custom_colors['user_' + env.current_user.id]
    },
    ariaHideElement: document.getElementById('application'),
    theme: '',
    stickyZIndex: 3,
    stickyOffset: stickyOffset,
    courses: courses,
    groups: groups,
    changeToDashboardCardView: changeToCardView
  };

  if (element) {
    render(element, options);
  }

  if (headerElement) {
    renderHeader(headerElement, headerAuxElement, options);
  }
}