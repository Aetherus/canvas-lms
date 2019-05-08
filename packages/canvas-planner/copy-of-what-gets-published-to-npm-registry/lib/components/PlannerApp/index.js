'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlannerApp = undefined;

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
                    * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
                    * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
                    * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
                    * details.
                    *
                    * You should have received a copy of the GNU Affero General Public License along
                    * with this program. If not, see <http://www.gnu.org/licenses/>.
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _reactRedux = require('react-redux');

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Spinner = require('@instructure/ui-elements/lib/components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _propTypes = require('prop-types');

var _reactMomentProptypes = require('react-moment-proptypes');

var _plannerPropTypes = require('../plannerPropTypes');

var _Day = require('../Day');

var _Day2 = _interopRequireDefault(_Day);

var _EmptyDays = require('../EmptyDays');

var _EmptyDays2 = _interopRequireDefault(_EmptyDays);

var _ShowOnFocusButton = require('../ShowOnFocusButton');

var _ShowOnFocusButton2 = _interopRequireDefault(_ShowOnFocusButton);

var _LoadingFutureIndicator = require('../LoadingFutureIndicator');

var _LoadingFutureIndicator2 = _interopRequireDefault(_LoadingFutureIndicator);

var _LoadingPastIndicator = require('../LoadingPastIndicator');

var _LoadingPastIndicator2 = _interopRequireDefault(_LoadingPastIndicator);

var _PlannerEmptyState = require('../PlannerEmptyState');

var _PlannerEmptyState2 = _interopRequireDefault(_PlannerEmptyState);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _actions = require('../../actions');

var _dynamicUi = require('../../dynamic-ui');

var _daysUtils = require('../../utilities/daysUtils');

var _dateUtils = require('../../utilities/dateUtils');

var _animator = require('../../dynamic-ui/animator');

var _responsiviser = require('../responsiviser');

var _responsiviser2 = _interopRequireDefault(_responsiviser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlannerApp = exports.PlannerApp = (_temp = _class = function (_Component) {
  _inherits(PlannerApp, _Component);

  function PlannerApp(props) {
    _classCallCheck(this, PlannerApp);

    var _this = _possibleConstructorReturn(this, (PlannerApp.__proto__ || Object.getPrototypeOf(PlannerApp)).call(this, props));

    _this.fixedElementRef = function (elt) {
      _this.fixedElement = elt;
    };

    _this.resizeTimer = 0;

    _this.onResize = function (event) {
      if (_this.resizeTimer === 0) {
        _this.resizeTimer = window.setTimeout(function () {
          _this.resizeTimer = 0;
        }, 1000);
        _this.beforeLayoutChange();
      }
    };

    _this.afterLayoutChange = function () {
      if (_this.fixedResponsiveMemo) {
        _this.animator.maintainViewportPositionFromMemo(_this.fixedResponsiveMemo.element, _this.fixedResponsiveMemo);
        _this.fixedResponsiveMemo = null;
      }
    };

    _this.animator = null;
    _this._plannerElem = null;
    _this.fixedResponsiveMemo = null;
    return _this;
  }

  _createClass(PlannerApp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.appRef(this);
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.props.allPastItemsLoaded === false && nextProps.allPastItemsLoaded === true) {
        if (this.loadPriorButton === document.activeElement) {
          this.props.focusFallback();
        }
      }
      this.props.preTriggerDynamicUiUpdates();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var additionalOffset = this.newActivityButtonRef ? this.newActivityButtonRef.getBoundingClientRect().height : 0;
      this.props.triggerDynamicUiUpdates(additionalOffset);
      if (this.props.responsiveSize !== prevProps.responsiveSize) {
        this.afterLayoutChange();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.appRef(null);
      window.removeEventListenet('resize', this.onResize, false);
    }
  }, {
    key: 'fixedElementForItemScrolling',
    value: function fixedElementForItemScrolling() {
      return this.fixedElement;
    }

    // when the planner changes layout, its contents move and the user gets lost.
    // let's help with that.

    // First, when the user starts to resize the window, call beforeLayoutChange

  }, {
    key: 'beforeLayoutChange',


    // before we tell the responsive elements the size has changed, find the first
    // visible day or grouping and remember its position.
    value: function beforeLayoutChange() {
      function findFirstVisible(selector) {
        var list = plannerTop.querySelectorAll(selector);
        var elem = Array.prototype.find.call(list, function (el) {
          return el.getBoundingClientRect().top > 0;
        });
        return elem;
      }
      var plannerTop = this._plannerElem || document;
      var fixedResponsiveElem = findFirstVisible('.planner-day, .planner-grouping, .planner-empty-days');
      if (fixedResponsiveElem) {
        if (!this.animator) this.animator = new _animator.Animator();
        this.fixedResponsiveMemo = this.animator.elementPositionMemo(fixedResponsiveElem);
      }
    }
    // after the re-layout, put the cached element back to where it was

  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      return _react2.default.createElement(
        _View2.default,
        {
          display: 'block',
          padding: 'xx-large medium',
          textAlign: 'center'
        },
        _react2.default.createElement(_Spinner2.default, {
          title: (0, _formatMessage2.default)('Loading planner items'),
          size: 'medium'
        })
      );
    }
  }, {
    key: 'renderLoadingPast',
    value: function renderLoadingPast() {
      return _react2.default.createElement(_LoadingPastIndicator2.default, {
        loadingPast: this.props.loadingPast,
        allPastItemsLoaded: this.props.allPastItemsLoaded,
        loadingError: this.props.loadingError });
    }
  }, {
    key: 'renderLoadMore',
    value: function renderLoadMore() {
      if (this.props.isLoading || this.props.loadingPast) return;
      return _react2.default.createElement(_LoadingFutureIndicator2.default, {
        loadingFuture: this.props.loadingFuture,
        allFutureItemsLoaded: this.props.allFutureItemsLoaded,
        loadingError: this.props.loadingError,
        onLoadMore: this.props.loadFutureItems,
        plannerActive: this.props.plannerActive });
    }
  }, {
    key: 'renderLoadPastButton',
    value: function renderLoadPastButton() {
      var _this2 = this;

      if (this.props.allPastItemsLoaded) return;
      return _react2.default.createElement(
        _View2.default,
        { as: 'div', textAlign: 'center' },
        _react2.default.createElement(
          _ShowOnFocusButton2.default,
          {
            buttonRef: function buttonRef(ref) {
              return _this2.loadPriorButton = ref;
            },
            buttonProps: {
              onClick: this.props.loadPastButtonClicked
            }
          },
          (0, _formatMessage2.default)('Load prior dates')
        )
      );
    }
  }, {
    key: 'renderNoAssignments',
    value: function renderNoAssignments() {
      return _react2.default.createElement(_PlannerEmptyState2.default, { changeToDashboardCardView: this.props.changeToDashboardCardView });
    }

    // starting at firstEmptyDay, and ending on of before lastDay
    // return the number of days with no items

  }, {
    key: 'countEmptyDays',
    value: function countEmptyDays(dayHash, firstEmptyDay, lastDay) {
      var trialDay = firstEmptyDay.clone();
      var trialDayKey = (0, _dateUtils.formatDayKey)(trialDay);
      var numEmptyDays = 0;
      while ((!dayHash[trialDayKey] || dayHash[trialDayKey].length === 0) && (trialDay.isSame(lastDay) || trialDay.isBefore(lastDay))) {
        ++numEmptyDays;
        trialDay.add(1, 'days');
        trialDayKey = (0, _dateUtils.formatDayKey)(trialDay);
      }
      return numEmptyDays;
    }

    // return a sigle <Day> with items
    // advances workingDay to the next day

  }, {
    key: 'renderOneDay',
    value: function renderOneDay(workingDay, workingDayKey, dayItems, dayIndex) {
      var day = _react2.default.createElement(_Day2.default, {
        timeZone: this.props.timeZone,
        day: workingDayKey,
        itemsForDay: dayItems,
        animatableIndex: dayIndex,
        key: workingDayKey,
        toggleCompletion: this.props.togglePlannerItemCompletion,
        updateTodo: this.props.updateTodo,
        currentUser: this.props.currentUser
      });
      workingDay.add(1, 'days');
      return day;
    }

    // return an array of empty <Day> objects
    // advances workingDay to the day after the empty series of days

  }, {
    key: 'renderEmptyDays',
    value: function renderEmptyDays(numEmptyDays, workingDay, dayIndex) {
      var children = [];
      for (var i = 0; i < numEmptyDays; ++i) {
        var workingDayKey = (0, _dateUtils.formatDayKey)(workingDay);
        children.push(this.renderOneDay(workingDay, workingDayKey, [], dayIndex++));
      }
      return children;
    }

    // return an <EmptyDays> for the given number of days, starting at workingDay
    // advances workingDay to the day after the empty series of days

  }, {
    key: 'renderEmptyDayStretch',
    value: function renderEmptyDayStretch(numEmptyDays, workingDay, dayIndex) {
      var workingDayKey = (0, _dateUtils.formatDayKey)(workingDay); // starting day key
      workingDay.add(numEmptyDays - 1, 'days'); // ending day
      var endingDayKey = (0, _dateUtils.formatDayKey)(workingDay); // ending day key
      var child = _react2.default.createElement(_EmptyDays2.default, {
        timeZone: this.props.timeZone,
        day: workingDayKey,
        endday: endingDayKey,
        animatableIndex: dayIndex++,
        key: workingDayKey,
        updateTodo: this.props.updateTodo,
        currentUser: this.props.currentUser
      });
      workingDay.add(1, 'days'); // step to the next day
      return child;
    }

    // in the past, we only render Days that have items
    // the past starts on workingDay (presumably the first planner item we have),
    // and ends on lastDay.
    // advances workingDay to the day after lastDay

  }, {
    key: 'renderPast',
    value: function renderPast(workingDay, lastDay, dayHash, dayIndex) {
      var children = [];
      while (workingDay.isSame(lastDay) || workingDay.isBefore(lastDay)) {
        var workingDayKey = (0, _dateUtils.formatDayKey)(workingDay);
        var dayItems = dayHash[workingDayKey];
        if (dayItems && dayItems.length > 0) {
          children.push(this.renderOneDay(workingDay, workingDayKey, dayItems, dayIndex++));
        } else {
          workingDay.add(1, 'day');
        }
      }
      return children;
    }

    // in the present, render every day, no matter what
    // the present starts at workingDay, ends on lastDay
    // advances workingDay to the day after lastDay

  }, {
    key: 'renderPresent',
    value: function renderPresent(workingDay, lastDay, dayHash, dayIndex) {
      var children = [];
      while (workingDay.isSame(lastDay) || workingDay.isBefore(lastDay)) {
        var workingDayKey = (0, _dateUtils.formatDayKey)(workingDay);
        var dayItems = dayHash[workingDayKey] || [];
        children.push(this.renderOneDay(workingDay, workingDayKey, dayItems, dayIndex++));
      }
      return children;
    }

    // in the future, render stretches of 3 days together
    // the future starts at workindDay, ends on lastDay
    // advances workingDay to the day after lastDay

  }, {
    key: 'renderFuture',
    value: function renderFuture(workingDay, lastDay, dayHash, dayIndex) {
      var children = [];
      while (workingDay.isSame(lastDay) || workingDay.isBefore(lastDay)) {
        var workingDayKey = (0, _dateUtils.formatDayKey)(workingDay);
        var dayItems = dayHash[workingDayKey];
        if (dayItems && dayItems.length > 0) {
          children.push(this.renderOneDay(workingDay, workingDayKey, dayItems, dayIndex++));
        } else {
          var numEmptyDays = this.countEmptyDays(dayHash, workingDay, lastDay);
          if (numEmptyDays < 3) {
            children.splice.apply(children, [children.length, 0].concat(_toConsumableArray(this.renderEmptyDays(numEmptyDays, workingDay, dayIndex))));
            dayIndex += numEmptyDays;
          } else {
            children.push(this.renderEmptyDayStretch(numEmptyDays, workingDay, dayIndex));
            ++dayIndex;
          }
        }
      }
      return children;
    }

    // starting at the date of the first props.days, and
    // ending at the last props.days (or today, whichever is later)
    // step a day at a time.
    // if the day is before yesterday, emit a <Day> only it if it has items
    // always render yesterday, today, and tomorrow
    // starting with the day after tomorrow:
    //    if a day has items, emit a <Day>
    //    if we find a string of < 3 empty days, emit a <Day> for each
    //    if we find a string of 3 or more empty days, emit an <EmptyDays> for the interval

  }, {
    key: 'renderDays',
    value: function renderDays() {
      var children = [];
      var workingDay = _momentTimezone2.default.tz(this.props.days[0][0], this.props.timeZone);
      var lastDay = _momentTimezone2.default.tz(this.props.days[this.props.days.length - 1][0], this.props.timeZone);
      var today = _momentTimezone2.default.tz(this.props.timeZone).startOf('day');
      var tomorrow = today.clone().add(1, 'day');
      var dayBeforeYesterday = today.clone().add(-2, 'day');
      if (lastDay.isBefore(today)) lastDay = today;
      // We don't want to render an empty tomorrow if we don't know it's actually empty.
      // It might just not be loaded yet. If so, sneak it back to today so it isn't displayed.
      if (tomorrow.isAfter(lastDay)) tomorrow = today;
      var dayHash = (0, _daysUtils.daysToDaysHash)(this.props.days);
      var dayIndex = 1;

      var pastChildren = this.renderPast(workingDay, dayBeforeYesterday, dayHash, dayIndex);
      dayIndex += pastChildren.length;
      children.splice.apply(children, [children.length, 0].concat(_toConsumableArray(pastChildren)));

      var presentChildren = this.renderPresent(workingDay, tomorrow, dayHash, dayIndex);
      dayIndex += presentChildren.length;
      children.splice.apply(children, [children.length, 0].concat(_toConsumableArray(presentChildren)));

      var futureChildren = this.renderFuture(workingDay, lastDay, dayHash, dayIndex);
      children.splice.apply(children, [children.length, 0].concat(_toConsumableArray(futureChildren)));
      return children;
    }
  }, {
    key: 'renderBody',
    value: function renderBody(children, classes) {
      var _this3 = this;

      var loading = this.props.loadingPast || this.props.loadingFuture || this.props.isLoading;
      if (children.length === 0 && !loading) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          this.renderLoadPastButton(),
          this.renderNoAssignments()
        );
      }

      return _react2.default.createElement(
        'div',
        { className: classes, ref: function ref(el) {
            return _this3._plannerElem = el;
          } },
        this.renderLoadPastButton(),
        this.renderLoadingPast(),
        children,
        _react2.default.createElement('div', { id: 'planner-app-fixed-element', ref: this.fixedElementRef }),
        this.renderLoadMore()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var clazz = (0, _classnames2.default)('PlannerApp', this.props.responsiveSize);
      var children = [];
      if (this.props.isLoading) {
        children = this.renderLoading();
      } else if (this.props.days.length > 0) {
        children = this.renderDays();
      }
      return this.renderBody(children, clazz);
    }
  }]);

  PlannerApp.displayName = 'PlannerApp'
  ;
  return PlannerApp;
}(_react.Component), _class.propTypes = {
  days: (0, _propTypes.arrayOf)((0, _propTypes.arrayOf)((0, _propTypes.oneOfType)([/* date */_propTypes.string, (0, _propTypes.arrayOf)( /* items */_propTypes.object)]))),
  timeZone: _propTypes.string,
  isLoading: _propTypes.bool,
  loadingPast: _propTypes.bool,
  loadingError: _propTypes.string,
  allPastItemsLoaded: _propTypes.bool,
  loadingFuture: _propTypes.bool,
  allFutureItemsLoaded: _propTypes.bool,
  loadPastButtonClicked: _propTypes.func,
  loadPastUntilNewActivity: _propTypes.func,
  loadFutureItems: _propTypes.func,
  stickyOffset: _propTypes.number, // in pixels
  changeToDashboardCardView: _propTypes.func,
  togglePlannerItemCompletion: _propTypes.func,
  updateTodo: _propTypes.func,
  triggerDynamicUiUpdates: _propTypes.func,
  preTriggerDynamicUiUpdates: _propTypes.func,
  plannerActive: _propTypes.func,
  ui: (0, _propTypes.shape)({
    naiAboveScreen: _propTypes.bool
  }),
  currentUser: (0, _propTypes.shape)(_plannerPropTypes.userShape),
  responsiveSize: _plannerPropTypes.sizeShape,
  appRef: _propTypes.func,
  focusFallback: _propTypes.func
}, _class.defaultProps = {
  isLoading: false,
  stickyOffset: 0,
  triggerDynamicUiUpdates: function triggerDynamicUiUpdates() {},
  preTriggerDynamicUiUpdates: function preTriggerDynamicUiUpdates() {},
  plannerActive: function plannerActive() {
    return false;
  },
  responsiveSize: 'large',
  appRef: function appRef() {},
  focusFallback: function focusFallback() {}
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    days: state.days,
    isLoading: state.loading.isLoading,
    loadingPast: state.loading.loadingPast,
    allPastItemsLoaded: state.loading.allPastItemsLoaded,
    loadingFuture: state.loading.loadingFuture,
    allFutureItemsLoaded: state.loading.allFutureItemsLoaded,
    loadingError: state.loading.loadingError,
    timeZone: state.timeZone,
    ui: state.ui
  };
};

var ResponsivePlannerApp = (0, _responsiviser2.default)()(PlannerApp);
var mapDispatchToProps = { loadFutureItems: _actions.loadFutureItems, loadPastButtonClicked: _actions.loadPastButtonClicked, loadPastUntilNewActivity: _actions.loadPastUntilNewActivity, togglePlannerItemCompletion: _actions.togglePlannerItemCompletion, updateTodo: _actions.updateTodo };
exports.default = (0, _dynamicUi.notifier)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ResponsivePlannerApp));