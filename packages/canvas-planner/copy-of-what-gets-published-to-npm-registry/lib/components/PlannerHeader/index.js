'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifierPlannerHeader = exports.ThemedPlannerHeader = exports.PlannerHeader = undefined;

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


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CloseButton = require('@instructure/ui-buttons/lib/components/CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _ScreenReaderContent = require('@instructure/ui-a11y/lib/components/ScreenReaderContent');

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Portal = require('@instructure/ui-portal/lib/components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _IconPlus = require('@instructure/ui-icons/lib/Line/IconPlus');

var _IconPlus2 = _interopRequireDefault(_IconPlus);

var _IconAlerts = require('@instructure/ui-icons/lib/Line/IconAlerts');

var _IconAlerts2 = _interopRequireDefault(_IconAlerts);

var _IconGradebook = require('@instructure/ui-icons/lib/Line/IconGradebook');

var _IconGradebook2 = _interopRequireDefault(_IconGradebook);

var _Popover = require('@instructure/ui-overlays/lib/components/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UpdateItemTray = require('../UpdateItemTray');

var _UpdateItemTray2 = _interopRequireDefault(_UpdateItemTray);

var _Tray = require('@instructure/ui-overlays/lib/components/Tray');

var _Tray2 = _interopRequireDefault(_Tray);

var _Badge = require('@instructure/ui-elements/lib/components/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Opportunities = require('../Opportunities');

var _Opportunities2 = _interopRequireDefault(_Opportunities);

var _GradesDisplay = require('../GradesDisplay');

var _GradesDisplay2 = _interopRequireDefault(_GradesDisplay);

var _StickyButton = require('../StickyButton');

var _StickyButton2 = _interopRequireDefault(_StickyButton);

var _actions = require('../../actions');

var _plannerPropTypes = require('../plannerPropTypes');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _dynamicUi = require('../../dynamic-ui');

var _dateUtils = require('../../utilities/dateUtils');

var _reactMomentProptypes = require('react-moment-proptypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n.S00PYzdLZt5SiHWV-o71u {\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': 'S00PYzdLZt5SiHWV-o71u'
};
var PlannerHeader = exports.PlannerHeader = (_temp = _class = function (_Component) {
  _inherits(PlannerHeader, _Component);

  function PlannerHeader(props) {
    _classCallCheck(this, PlannerHeader);

    var _this = _possibleConstructorReturn(this, (PlannerHeader.__proto__ || Object.getPrototypeOf(PlannerHeader)).call(this, props));

    _this.handleSavePlannerItem = function (plannerItem) {
      _this.toggleUpdateItemTray();
      _this.props.savePlannerItem(plannerItem);
    };

    _this.isOpportunityVisible = function (opportunity) {
      if (_this.state.dismissedTabSelected) {
        return opportunity.planner_override ? opportunity.planner_override.dismissed : false;
      } else {
        return opportunity.planner_override ? !opportunity.planner_override.dismissed : true;
      }
    };

    _this.handleDeletePlannerItem = function (plannerItem) {
      _this.toggleUpdateItemTray();
      _this.props.deletePlannerItem(plannerItem);
    };

    _this.handleToggleTray = function () {
      if (_this.state.trayOpen) _this.props.cancelEditingPlannerItem();
      _this.toggleUpdateItemTray();
    };

    _this.toggleAriaHiddenStuff = function (hide) {
      if (hide) {
        _this.props.ariaHideElement.setAttribute('aria-hidden', 'true');
      } else {
        _this.props.ariaHideElement.removeAttribute('aria-hidden');
      }
    };

    _this.toggleUpdateItemTray = function () {
      _this.setUpdateItemTray(!_this.state.trayOpen);
    };

    _this.toggleGradesTray = function () {
      if (!_this.state.gradesTrayOpen && !_this.props.loading.loadingGrades && !_this.props.loading.gradesLoaded) {
        _this.props.startLoadingGradesSaga();
      }
      _this.setState({ gradesTrayOpen: !_this.state.gradesTrayOpen });
    };

    _this.handleTodayClick = function () {
      if (_this.props.scrollToToday) {
        _this.props.scrollToToday();
      }
    };

    _this.handleNewActivityClick = function () {
      _this.props.scrollToNewActivity();
    };

    _this.closeOpportunitiesDropdown = function () {
      _this._doToggleOpportunitiesDropdown(false);
    };

    _this.openOpportunitiesDropdown = function () {
      _this._doToggleOpportunitiesDropdown(true);
    };

    _this.toggleOpportunitiesDropdown = function () {
      _this._doToggleOpportunitiesDropdown(!_this.state.opportunitiesOpen);
    };

    _this.opportunityTitle = function () {
      return (0, _formatMessage2.default)('{\n        count, plural,\n        =0 {# opportunities}\n        one {# opportunity}\n        other {# opportunities}\n      }', { count: _this.state.opportunities.length });
    };

    _this.getTrayLabel = function () {
      if (_this.props.todo.updateTodoItem && _this.props.todo.updateTodoItem.title) {
        return (0, _formatMessage2.default)('Edit {title}', { title: _this.props.todo.updateTodoItem.title });
      }
      return (0, _formatMessage2.default)("Add To Do");
    };

    _this.state = {
      opportunities: props.opportunities.items,
      trayOpen: false,
      gradesTrayOpen: false,
      opportunitiesOpen: false,
      dismissedTabSelected: false
    };
    return _this;
  }

  _createClass(PlannerHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getInitialOpportunities();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var opportunities = nextProps.opportunities.items.filter(function (opportunity) {
        return _this2.isOpportunityVisible(opportunity);
      });

      if (!nextProps.loading.allOpportunitiesLoaded && !nextProps.loading.loadingOpportunities) {
        nextProps.getNextOpportunities();
      }

      this.setUpdateItemTray(!!nextProps.todo.updateTodoItem);
      this.setState({ opportunities: opportunities });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.props.preTriggerDynamicUiUpdates();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.todo.updateTodoItem) {
        this.toggleAriaHiddenStuff(this.state.trayOpen);
      }
      this.props.triggerDynamicUiUpdates();
    }
  }, {
    key: 'setUpdateItemTray',
    value: function setUpdateItemTray(trayOpen) {
      var _this3 = this;

      if (trayOpen && this.props.openEditingPlannerItem) {
        this.props.openEditingPlannerItem();
      }
      this.setState({ trayOpen: trayOpen }, function () {
        _this3.toggleAriaHiddenStuff(_this3.state.trayOpen);
      });
    }
  }, {
    key: '_doToggleOpportunitiesDropdown',
    value: function _doToggleOpportunitiesDropdown(openOrClosed) {
      var _this4 = this;

      this.setState({ opportunitiesOpen: !!openOrClosed }, function () {
        _this4.toggleAriaHiddenStuff(_this4.state.opportunitiesOpen);
        _this4.opportunitiesButton.focus();
      });
    }
  }, {
    key: 'getPopupVerticalRoom',


    // Size the opportunities popover so that it fits on the screen under the trigger button
    value: function getPopupVerticalRoom() {
      var trigger = this.opportunitiesHtmlButton;
      if (trigger) {
        var buffer = 30;
        var minRoom = 250;
        var rect = trigger.getBoundingClientRect();
        var offset = rect.top + rect.height;
        return Math.max(window.innerHeight - offset - buffer, minRoom);
      }
      return 'none';
    }
  }, {
    key: 'newActivityAboveView',
    value: function newActivityAboveView() {
      if (this.props.loading.isLoading) return false;
      if (!this.props.firstNewActivityDate) return false;

      var firstLoadedMoment = (0, _dateUtils.getFirstLoadedMoment)(this.props.days, this.props.timeZone);
      var firstNewActivityLoaded = firstLoadedMoment.isSame(this.props.firstNewActivityDate) || firstLoadedMoment.isBefore(this.props.firstNewActivityDate);
      return !(firstNewActivityLoaded && !this.props.ui.naiAboveScreen);
    }
  }, {
    key: 'renderNewActivity',
    value: function renderNewActivity() {
      var _this5 = this;

      return _react2.default.createElement(
        _Portal2.default,
        { mountNode: this.props.auxElement, open: this.newActivityAboveView() },
        _react2.default.createElement(
          _StickyButton2.default,
          {
            direction: 'up',
            hidden: true,
            onClick: this.handleNewActivityClick,
            zIndex: this.props.stickyZIndex,
            buttonRef: function buttonRef(ref) {
              return _this5.newActivityButtonRef = ref;
            },
            className: 'StickyButton-styles__newActivityButton'
          },
          (0, _formatMessage2.default)("New Activity")
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var verticalRoom = this.getPopupVerticalRoom();

      return _react2.default.createElement(
        'div',
        { className: styles.root },
        _react2.default.createElement(
          _Button2.default,
          {
            id: 'planner-today-btn',
            variant: 'light',
            margin: '0 medium 0 0',
            onClick: this.handleTodayClick
          },
          (0, _formatMessage2.default)("Today")
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            variant: 'icon',
            margin: '0 medium 0 0',
            onClick: this.handleToggleTray,
            ref: function ref(b) {
              _this6.addNoteBtn = b;
            }
          },
          _react2.default.createElement(_IconPlus2.default, null),
          _react2.default.createElement(
            _ScreenReaderContent2.default,
            null,
            (0, _formatMessage2.default)("Add To Do")
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            variant: 'icon',
            margin: '0 medium 0 0',
            onClick: this.toggleGradesTray
          },
          _react2.default.createElement(_IconGradebook2.default, null),
          _react2.default.createElement(
            _ScreenReaderContent2.default,
            null,
            (0, _formatMessage2.default)("Show My Grades")
          )
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            onDismiss: this.closeOpportunitiesDropdown,
            show: this.state.opportunitiesOpen,
            on: 'click',
            constrain: 'none',
            placement: 'bottom end'
          },
          _react2.default.createElement(
            _Popover.PopoverTrigger,
            null,
            _react2.default.createElement(
              _Button2.default,
              {
                onClick: this.toggleOpportunitiesDropdown,
                variant: 'icon',
                margin: '0 medium 0 0',
                ref: function ref(b) {
                  _this6.opportunitiesButton = b;
                },
                buttonRef: function buttonRef(b) {
                  _this6.opportunitiesHtmlButton = b;
                }
              },
              _react2.default.createElement(
                _Badge2.default,
                this.props.loading.allOpportunitiesLoaded && this.state.opportunities.length ? { count: this.state.opportunities.length } : {},
                _react2.default.createElement(_IconAlerts2.default, null),
                _react2.default.createElement(
                  _ScreenReaderContent2.default,
                  null,
                  this.opportunityTitle()
                )
              )
            )
          ),
          _react2.default.createElement(
            _Popover.PopoverContent,
            null,
            _react2.default.createElement(_Opportunities2.default, {
              togglePopover: this.closeOpportunitiesDropdown,
              opportunities: this.state.opportunities,
              courses: this.props.courses,
              timeZone: this.props.timeZone,
              dismiss: this.props.dismissOpportunity,
              maxHeight: verticalRoom
            })
          )
        ),
        _react2.default.createElement(
          _Tray2.default,
          {
            closeButtonLabel: (0, _formatMessage2.default)("Close"),
            open: this.state.trayOpen,
            label: this.getTrayLabel(),
            placement: 'end',
            shouldContainFocus: true,
            shouldReturnFocus: false,
            applicationElement: function applicationElement() {
              return document.getElementById('application');
            },
            onDismiss: this.handleToggleTray
          },
          _react2.default.createElement(_UpdateItemTray2.default, {
            locale: this.props.locale,
            timeZone: this.props.timeZone,
            noteItem: this.props.todo.updateTodoItem,
            onSavePlannerItem: this.handleSavePlannerItem,
            onDeletePlannerItem: this.handleDeletePlannerItem,
            courses: this.props.courses
          })
        ),
        _react2.default.createElement(
          _Tray2.default,
          {
            label: (0, _formatMessage2.default)('My Grades'),
            open: this.state.gradesTrayOpen,
            placement: 'end',
            shouldContainFocus: true,
            shouldReturnFocus: true,
            onDismiss: this.toggleGradesTray
          },
          _react2.default.createElement(
            _View2.default,
            { as: 'div', padding: 'large large medium' },
            _react2.default.createElement(
              _CloseButton2.default,
              { placement: 'start', variant: 'icon', onClick: this.toggleGradesTray },
              (0, _formatMessage2.default)("Close")
            ),
            _react2.default.createElement(_GradesDisplay2.default, {
              courses: this.props.courses,
              loading: this.props.loading.loadingGrades,
              loadingError: this.props.loading.gradesLoadingError
            })
          )
        ),
        this.renderNewActivity()
      );
    }
  }]);

  PlannerHeader.displayName = 'PlannerHeader'
  ;
  return PlannerHeader;
}(_react.Component), _class.propTypes = {
  courses: _propTypes2.default.arrayOf(_propTypes2.default.shape(_plannerPropTypes.courseShape)).isRequired,
  addDay: _propTypes2.default.func,
  savePlannerItem: _propTypes2.default.func.isRequired,
  deletePlannerItem: _propTypes2.default.func.isRequired,
  cancelEditingPlannerItem: _propTypes2.default.func,
  openEditingPlannerItem: _propTypes2.default.func,
  triggerDynamicUiUpdates: _propTypes2.default.func,
  preTriggerDynamicUiUpdates: _propTypes2.default.func,
  scrollToToday: _propTypes2.default.func,
  scrollToNewActivity: _propTypes2.default.func,
  locale: _propTypes2.default.string.isRequired,
  timeZone: _propTypes2.default.string.isRequired,
  opportunities: _propTypes2.default.shape(_plannerPropTypes.opportunityShape).isRequired,
  getInitialOpportunities: _propTypes2.default.func.isRequired,
  getNextOpportunities: _propTypes2.default.func.isRequired,
  dismissOpportunity: _propTypes2.default.func.isRequired,
  clearUpdateTodo: _propTypes2.default.func.isRequired,
  startLoadingGradesSaga: _propTypes2.default.func.isRequired,
  firstNewActivityDate: _reactMomentProptypes.momentObj,
  days: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([/* date */_propTypes2.default.string, _propTypes2.default.arrayOf( /* items */_propTypes2.default.object)]))),
  ui: _propTypes2.default.shape({
    naiAboveScreen: _propTypes2.default.bool
  }),
  todo: _propTypes2.default.shape({
    updateTodoItem: _propTypes2.default.shape({
      title: _propTypes2.default.string
    })
  }),
  stickyZIndex: _propTypes2.default.number,
  loading: _propTypes2.default.shape({
    isLoading: _propTypes2.default.bool,
    allPastItemsLoaded: _propTypes2.default.bool,
    allFutureItemsLoaded: _propTypes2.default.bool,
    allOpportunitiesLoaded: _propTypes2.default.bool,
    loadingOpportunities: _propTypes2.default.bool,
    setFocusAfterLoad: _propTypes2.default.bool,
    firstNewDayKey: _propTypes2.default.object,
    futureNextUrl: _propTypes2.default.string,
    pastNextUrl: _propTypes2.default.string,
    seekingNewActivity: _propTypes2.default.bool,
    loadingGrades: _propTypes2.default.bool,
    gradesLoaded: _propTypes2.default.bool,
    gradesLoadingError: _propTypes2.default.string
  }).isRequired,
  ariaHideElement: _propTypes2.default.instanceOf(Element).isRequired,
  auxElement: _propTypes2.default.instanceOf(Element).isRequired
}, _class.defaultProps = {
  triggerDynamicUiUpdates: function triggerDynamicUiUpdates() {},
  preTriggerDynamicUiUpdates: function preTriggerDynamicUiUpdates() {},
  stickyZIndex: 0
}, _temp);
var ThemedPlannerHeader = exports.ThemedPlannerHeader = (0, _lib2.default)(_theme2.default, styles)(PlannerHeader);
var NotifierPlannerHeader = exports.NotifierPlannerHeader = (0, _dynamicUi.notifier)(ThemedPlannerHeader);

var mapStateToProps = function mapStateToProps(_ref) {
  var opportunities = _ref.opportunities,
      loading = _ref.loading,
      courses = _ref.courses,
      todo = _ref.todo,
      days = _ref.days,
      timeZone = _ref.timeZone,
      ui = _ref.ui,
      firstNewActivityDate = _ref.firstNewActivityDate;
  return { opportunities: opportunities, loading: loading, courses: courses, todo: todo, days: days, timeZone: timeZone, ui: ui, firstNewActivityDate: firstNewActivityDate };
};
var mapDispatchToProps = {
  addDay: _actions.addDay, savePlannerItem: _actions.savePlannerItem, deletePlannerItem: _actions.deletePlannerItem, cancelEditingPlannerItem: _actions.cancelEditingPlannerItem, openEditingPlannerItem: _actions.openEditingPlannerItem,
  getInitialOpportunities: _actions.getInitialOpportunities, getNextOpportunities: _actions.getNextOpportunities, dismissOpportunity: _actions.dismissOpportunity, clearUpdateTodo: _actions.clearUpdateTodo,
  startLoadingGradesSaga: _actions.startLoadingGradesSaga, scrollToToday: _actions.scrollToToday, scrollToNewActivity: _actions.scrollToNewActivity
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NotifierPlannerHeader);