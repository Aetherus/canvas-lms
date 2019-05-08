'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlannerItem = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Checkbox = require('@instructure/ui-forms/lib/components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Link = require('@instructure/ui-elements/lib/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _ScreenReaderContent = require('@instructure/ui-a11y/lib/components/ScreenReaderContent');

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _PresentationContent = require('@instructure/ui-a11y/lib/components/PresentationContent');

var _PresentationContent2 = _interopRequireDefault(_PresentationContent);

var _Pill = require('@instructure/ui-elements/lib/components/Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _Avatar = require('@instructure/ui-elements/lib/components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _IconAssignment = require('@instructure/ui-icons/lib/Line/IconAssignment');

var _IconAssignment2 = _interopRequireDefault(_IconAssignment);

var _IconQuiz = require('@instructure/ui-icons/lib/Line/IconQuiz');

var _IconQuiz2 = _interopRequireDefault(_IconQuiz);

var _IconAnnouncement = require('@instructure/ui-icons/lib/Line/IconAnnouncement');

var _IconAnnouncement2 = _interopRequireDefault(_IconAnnouncement);

var _IconDiscussion = require('@instructure/ui-icons/lib/Line/IconDiscussion');

var _IconDiscussion2 = _interopRequireDefault(_IconDiscussion);

var _IconCalendarMonth = require('@instructure/ui-icons/lib/Line/IconCalendarMonth');

var _IconCalendarMonth2 = _interopRequireDefault(_IconCalendarMonth);

var _IconMsWord = require('@instructure/ui-icons/lib/Line/IconMsWord');

var _IconMsWord2 = _interopRequireDefault(_IconMsWord);

var _NotificationBadge = require('../NotificationBadge');

var _NotificationBadge2 = _interopRequireDefault(_NotificationBadge);

var _BadgeList = require('../BadgeList');

var _BadgeList2 = _interopRequireDefault(_BadgeList);

var _responsiviser = require('../responsiviser');

var _responsiviser2 = _interopRequireDefault(_responsiviser);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _propTypes = require('prop-types');

var _plannerPropTypes = require('../plannerPropTypes');

var _statusUtils = require('../../utilities/statusUtils');

var _reactMomentProptypes = require('react-moment-proptypes');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _dynamicUi = require('../../dynamic-ui');

var _ApplyTheme = require('@instructure/ui-themeable/lib/components/ApplyTheme');

var _ApplyTheme2 = _interopRequireDefault(_ApplyTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._3Rv2uTWmX8tBxU7A7k0UKX {\n  font-family: ' + theme.fontFamily + ';\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n  border-bottom: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n  flex: 1;\n  display: flex;\n  align-items: center;\n  color: ' + theme.color + ';\n  line-height: ' + theme.lineHeight + ';\n}\n\n._3LOHnP4LqnkPZQACe_geG0,\n._3k0mL4PT4j2mLsNQNBiG7y,\n._3bDS-jBzP9ycvqeafWRHfy,\n.O1l7eWr3447S4l2tgZGLr {\n  box-sizing: border-box;\n}\n\n._3LOHnP4LqnkPZQACe_geG0 {\n  width: 1.375rem;\n  -webkit-margin-start: ' + theme.gutterWidth + ';\n          margin-inline-start: ' + theme.gutterWidth + ';\n}\n\n[dir="ltr"] ._3LOHnP4LqnkPZQACe_geG0 {\n  margin-left: ' + theme.gutterWidth + ';\n}\n\n[dir="rtl"] ._3LOHnP4LqnkPZQACe_geG0 {\n  margin-right: ' + theme.gutterWidth + ';\n}\n\n.epI5VaVEa_EQZNXgFM_q4 {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n[dir="ltr"] .epI5VaVEa_EQZNXgFM_q4 {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n[dir="rtl"] .epI5VaVEa_EQZNXgFM_q4 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.epI5VaVEa_EQZNXgFM_q4 + ._3LOHnP4LqnkPZQACe_geG0 {\n  -webkit-margin-start: calc(' + theme.gutterWidth + ' - ' + theme.activityIndicatorWidth + ');\n          margin-inline-start: calc(' + theme.gutterWidth + ' - ' + theme.activityIndicatorWidth + ')\n}\n\n[dir="ltr"] .epI5VaVEa_EQZNXgFM_q4 + ._3LOHnP4LqnkPZQACe_geG0 {\n  margin-left: calc(' + theme.gutterWidth + ' - ' + theme.activityIndicatorWidth + ')\n}\n\n[dir="rtl"] .epI5VaVEa_EQZNXgFM_q4 + ._3LOHnP4LqnkPZQACe_geG0 {\n  margin-right: calc(' + theme.gutterWidth + ' - ' + theme.activityIndicatorWidth + ')\n}\n\n._3bDS-jBzP9ycvqeafWRHfy {\n  color: ' + theme.iconColor + ';\n  margin: 0 ' + theme.gutterWidth + ';\n}\n\n._3bDS-jBzP9ycvqeafWRHfy > svg { /* stylelint-disable-line selector-no-type */\n    display: block;\n  }\n\n._3k0mL4PT4j2mLsNQNBiG7y {\n  /* adjust margin so <Avatar size="small"> fits in same space as the icon */\n  margin: 0 calc(' + theme.gutterWidth + ' - ((1em*2.5) - ' + theme.iconFontSize + ')/2);\n}\n\n.O1l7eWr3447S4l2tgZGLr {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n  min-width: 1px;\n}\n.kq2zdz_Kqk5dVBG9PKRkQ {\n  display: flex;\n  flex: 1 0;\n  align-items: center;\n  min-width: 1px;\n  min-height: 2.5rem; /* or ie11 smashes it down */\n}\n\n._1HxziPhcKNDaBCCWQPQgtY {\n  flex: 0 0 50%;\n  margin-bottom: 0;\n  box-sizing: border-box;\n\n  min-width: 1px;\n}\n\n._1qh6-Zq_V-y5rmTe6UCE9j {\n  flex: 0 0 50%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 1px;\n}\n\n._3DTKkg9zQZy1pBHkKs0BNi {\n  box-sizing: border-box;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  margin-bottom: ' + theme.typeMargin + ';\n}\n\n._3wQmJqzfUdHtYqyODqQIN9 {\n  box-sizing: border-box;\n  line-height: ' + theme.titleLineHeight + ';\n}\n\n._3DTKkg9zQZy1pBHkKs0BNi,\n._3wQmJqzfUdHtYqyODqQIN9 {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\n._2mBfnAHLeZ7hHUVapVMzT4 {\n  box-sizing: border-box;\n  text-align: end;\n  flex: 0 0 7rem;\n  min-width: 1px;\n  -webkit-padding-start: ' + theme.metricsPadding + ';\n          padding-inline-start: ' + theme.metricsPadding + ';\n}\n\n[dir="ltr"] ._2mBfnAHLeZ7hHUVapVMzT4 {\n  text-align: right;\n  padding-left: ' + theme.metricsPadding + ';\n}\n\n[dir="rtl"] ._2mBfnAHLeZ7hHUVapVMzT4 {\n  text-align: left;\n  padding-right: ' + theme.metricsPadding + ';\n}\n\n._2EsTQewRgWbo1vQqj2Vr2M,\n._23ex2Z4zaW6-efi9tDRc1S {\n  box-sizing: border-box;\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  line-height: 1;\n  white-space: nowrap;\n}\n\n.l7ONEXQEVkSzNx9uxwVp_ {\n  flex: 1;\n  text-align: end;\n  min-width: 1px;\n}\n\n[dir="ltr"] .l7ONEXQEVkSzNx9uxwVp_ {\n  text-align: right;\n}\n\n[dir="rtl"] .l7ONEXQEVkSzNx9uxwVp_ {\n  text-align: left;\n}\n\n.ujqeadJG9QG1LJZkp1nmF {\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n}\n\n/* height of the avater, so ie11 doesn\'t squish it */\n\n.ujqeadJG9QG1LJZkp1nmF .E2smZ9QD-teGNZtFDtkps {\n    flex-shrink: 0;\n    -webkit-margin-end: ' + theme.gutterWidth + ';\n            margin-inline-end: ' + theme.gutterWidth + ';\n  }\n\n[dir="ltr"] .ujqeadJG9QG1LJZkp1nmF .E2smZ9QD-teGNZtFDtkps {\n    margin-right: ' + theme.gutterWidth + ';\n  }\n\n[dir="rtl"] .ujqeadJG9QG1LJZkp1nmF .E2smZ9QD-teGNZtFDtkps {\n    margin-left: ' + theme.gutterWidth + ';\n  }\n\n.ujqeadJG9QG1LJZkp1nmF ._1TQ0mFd9F5dL8_Fgf9vUEG {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n.EGvGKNZxKRS9in-YyLdZY ._3wQmJqzfUdHtYqyODqQIN9 {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    -webkit-padding-end: 0.5rem;\n            padding-inline-end: 0.5rem;\n  }\n\n[dir="ltr"] .EGvGKNZxKRS9in-YyLdZY ._3wQmJqzfUdHtYqyODqQIN9 {\n    padding-right: 0.5rem;\n  }\n\n[dir="rtl"] .EGvGKNZxKRS9in-YyLdZY ._3wQmJqzfUdHtYqyODqQIN9 {\n    padding-left: 0.5rem;\n  }\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_3Rv2uTWmX8tBxU7A7k0UKX',
  'completed': '_3LOHnP4LqnkPZQACe_geG0',
  'avatar': '_3k0mL4PT4j2mLsNQNBiG7y',
  'icon': '_3bDS-jBzP9ycvqeafWRHfy',
  'layout': 'O1l7eWr3447S4l2tgZGLr',
  'activityIndicator': 'epI5VaVEa_EQZNXgFM_q4',
  'innerLayout': 'kq2zdz_Kqk5dVBG9PKRkQ',
  'details': '_1HxziPhcKNDaBCCWQPQgtY',
  'secondary': '_1qh6-Zq_V-y5rmTe6UCE9j',
  'type': '_3DTKkg9zQZy1pBHkKs0BNi',
  'title': '_3wQmJqzfUdHtYqyODqQIN9',
  'metrics': '_2mBfnAHLeZ7hHUVapVMzT4',
  'due': '_2EsTQewRgWbo1vQqj2Vr2M',
  'score': '_23ex2Z4zaW6-efi9tDRc1S',
  'badges': 'l7ONEXQEVkSzNx9uxwVp_',
  'feedback': 'ujqeadJG9QG1LJZkp1nmF',
  'feedbackAvatar': 'E2smZ9QD-teGNZtFDtkps',
  'feedbackComment': '_1TQ0mFd9F5dL8_Fgf9vUEG',
  'medium': 'EGvGKNZxKRS9in-YyLdZY'
};
var PlannerItem = exports.PlannerItem = (_temp = _class = function (_Component) {
  _inherits(PlannerItem, _Component);

  function PlannerItem(props) {
    _classCallCheck(this, PlannerItem);

    var _this = _possibleConstructorReturn(this, (PlannerItem.__proto__ || Object.getPrototypeOf(PlannerItem)).call(this, props));

    _this.toDoLinkClick = function (e) {
      e.preventDefault();
      _this.props.updateTodo({ updateTodoItem: Object.assign({}, _this.props) });
    };

    _this.registerRootDivRef = function (elt) {
      _this.rootDivRef = elt;
    };

    _this.registerFocusElementRef = function (elt) {
      _this.checkboxRef = elt;
    };

    _this.getFocusable = function (which) {
      return which === 'update' || which === 'delete' ? _this.itemLink : _this.checkboxRef;
    };

    _this.renderDateField = function () {
      if (_this.props.date) {
        if (_this.hasDueTime()) {
          return (0, _formatMessage2.default)('DUE: {date}', { date: _this.props.date.format("LT") });
        }
        return _this.props.allDay === true ? (0, _formatMessage2.default)('All Day') : _this.props.date.format("LT");
      }
      return null;
    };

    _this.renderIcon = function () {
      var currentUser = _this.props.currentUser || {};

      switch (_this.props.associated_item) {
        case "Assignment":
          return _react2.default.createElement(_IconAssignment2.default, null);
        case "Quiz":
          return _react2.default.createElement(_IconQuiz2.default, null);
        case "Discussion":
          return _react2.default.createElement(_IconDiscussion2.default, null);
        case "Announcement":
          return _react2.default.createElement(_IconAnnouncement2.default, null);
        case "Calendar Event":
          return _react2.default.createElement(_IconCalendarMonth2.default, null);
        case "Page":
          return _react2.default.createElement(_IconMsWord2.default, null);
        default:
          return _react2.default.createElement(_Avatar2.default, { name: currentUser.displayName || '?', src: currentUser.avatarUrl, size: 'small' });
      }
    };

    _this.renderBadges = function () {
      if (_this.props.badges.length) {
        return _react2.default.createElement(
          _BadgeList2.default,
          null,
          _this.props.badges.map(function (b) {
            return _react2.default.createElement(_Pill2.default, {
              key: b.id,
              text: b.text,
              variant: b.variant
            });
          })
        );
      }
      return null;
    };

    _this.renderItemMetrics = function () {
      return _react2.default.createElement(
        'div',
        { className: styles.secondary },
        _react2.default.createElement(
          'div',
          { className: styles.badges },
          _this.renderBadges()
        ),
        _react2.default.createElement(
          'div',
          { className: styles.metrics },
          _this.props.points ? _react2.default.createElement(
            'div',
            { className: styles.score },
            _react2.default.createElement(
              _Text2.default,
              { color: 'secondary' },
              _react2.default.createElement(
                _Text2.default,
                { size: 'large' },
                _this.props.points
              ),
              _react2.default.createElement(
                _Text2.default,
                { size: 'x-small' },
                '\xA0',
                _this.props.points ? (0, _formatMessage2.default)('pts') : null
              )
            )
          ) : null,
          _react2.default.createElement(
            'div',
            { className: styles.due },
            _react2.default.createElement(
              _Text2.default,
              { color: 'secondary', size: 'x-small' },
              _react2.default.createElement(
                _PresentationContent2.default,
                null,
                _this.renderDateField()
              )
            )
          )
        )
      );
    };

    _this.renderType = function () {
      if (!_this.props.associated_item) {
        return (0, _formatMessage2.default)('{course} TO DO', { course: _this.props.courseName || '' });
      } else {
        return (_this.props.courseName || '') + ' ' + _this.props.associated_item;
      }
    };

    _this.renderItemDetails = function () {
      return _react2.default.createElement(
        'div',
        { className: styles.details },
        _react2.default.createElement(
          'div',
          { className: styles.type },
          _react2.default.createElement(
            _Text2.default,
            { size: 'x-small', color: 'secondary' },
            _this.renderType()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles.title, style: { position: 'relative' } },
          _react2.default.createElement(
            _Link2.default,
            Object.assign({
              linkRef: function linkRef(link) {
                _this.itemLink = link;
              }
            }, _this.props.associated_item === "To Do" ? { onClick: _this.toDoLinkClick } : {}, {
              href: _this.props.html_url || "#" }),
            _react2.default.createElement(
              _ScreenReaderContent2.default,
              null,
              _this.linkLabel()
            ),
            _react2.default.createElement(
              _PresentationContent2.default,
              null,
              _react2.default.createElement(
                _Text2.default,
                { color: 'primary' },
                _this.props.title
              )
            )
          )
        )
      );
    };

    _this.getCheckboxTheme = function () {
      return {
        checkedBackground: _this.props.color,
        checkedBorderColor: _this.props.color,
        borderColor: _this.props.color,
        hoverBorderColor: _this.props.color
      };
    };

    _this.state = {
      completed: props.completed
    };
    return _this;
  }

  _createClass(PlannerItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerAnimatable('item', this, this.props.animatableIndex, [this.props.uniqueId]);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.props.deregisterAnimatable('item', this, [this.props.uniqueId]);
      this.props.registerAnimatable('item', this, nextProps.animatableIndex, [nextProps.uniqueId]);
      this.setState({
        completed: nextProps.completed
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('item', this, [this.props.uniqueId]);
    }
  }, {
    key: 'getScrollable',
    value: function getScrollable() {
      return this.rootDivRef;
    }
  }, {
    key: 'getLayout',
    value: function getLayout() {
      return this.props.responsiveSize;
    }
  }, {
    key: 'hasDueTime',
    value: function hasDueTime() {
      return this.props.date && !(this.props.associated_item === "Announcement" || this.props.associated_item === "Calendar Event");
    }
  }, {
    key: 'assignmentType',
    value: function assignmentType() {
      return this.props.associated_item ? this.props.associated_item : (0, _formatMessage2.default)('Task');
    }
  }, {
    key: 'linkLabel',
    value: function linkLabel() {
      var assignmentType = this.assignmentType();
      var datetimeformat = this.props.allDay === true ? 'LL' : 'LLLL';
      var params = {
        assignmentType: assignmentType,
        title: this.props.title,
        datetime: this.props.date ? this.props.date.format(datetimeformat) : null
      };

      if (this.props.date) {
        if (this.hasDueTime()) {
          return (0, _formatMessage2.default)('{assignmentType} {title}, due {datetime}.', params);
        }
        if (this.props.allDay === true) {
          return (0, _formatMessage2.default)('{assignmentType} {title}, on {datetime}.', params);
        }
        return (0, _formatMessage2.default)('{assignmentType} {title}, at {datetime}.', params);
      }
      return (0, _formatMessage2.default)('{assignmentType} {title}.', params);
    }
  }, {
    key: 'renderNotificationBadge',
    value: function renderNotificationBadge() {
      if (!this.props.showNotificationBadge) {
        return null;
      }

      var newItem = this.props.newActivity;
      var missing = false;
      if ((0, _statusUtils.showPillForOverdueStatus)('missing', { status: this.props.status, context: this.props.context })) {
        missing = true;
      }

      if (newItem || missing) {
        var IndicatorComponent = newItem ? _NotificationBadge.NewActivityIndicator : _NotificationBadge.MissingIndicator;
        return _react2.default.createElement(
          _NotificationBadge2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: styles.activityIndicator },
            _react2.default.createElement(IndicatorComponent, {
              title: this.props.title,
              itemIds: [this.props.uniqueId],
              animatableIndex: this.props.animatableIndex,
              getFocusable: this.getFocusable })
          )
        );
      } else {
        return _react2.default.createElement(_NotificationBadge2.default, null);
      }
    }
  }, {
    key: 'renderFeedback',
    value: function renderFeedback() {
      var feedback = this.props.feedback;
      if (feedback) {
        return _react2.default.createElement(
          'div',
          { className: styles.feedback },
          _react2.default.createElement(
            'span',
            { className: styles.feedbackAvatar },
            _react2.default.createElement(_Avatar2.default, { name: feedback.author_name || '?', src: feedback.author_avatar_url, size: 'small' })
          ),
          _react2.default.createElement(
            'span',
            { className: styles.feedbackComment },
            _react2.default.createElement(
              _Text2.default,
              { fontStyle: 'italic' },
              feedback.comment
            )
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var assignmentType = this.assignmentType();
      var checkboxLabel = this.state.completed ? (0, _formatMessage2.default)('{assignmentType} {title} is marked as done.', { assignmentType: assignmentType, title: this.props.title }) : (0, _formatMessage2.default)('{assignmentType} {title} is not marked as done.', { assignmentType: assignmentType, title: this.props.title });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.root, styles[this.getLayout()], 'planner-item'), ref: this.registerRootDivRef },
        this.renderNotificationBadge(),
        _react2.default.createElement(
          'div',
          { className: styles.completed },
          _react2.default.createElement(
            _ApplyTheme2.default,
            { theme: _defineProperty({}, _Checkbox.CheckboxFacade.theme, this.getCheckboxTheme()) },
            _react2.default.createElement(_Checkbox2.default, {
              ref: this.registerFocusElementRef,
              label: _react2.default.createElement(
                _ScreenReaderContent2.default,
                null,
                checkboxLabel
              ),
              checked: this.props.toggleAPIPending ? !this.state.completed : this.state.completed,
              onChange: this.props.toggleCompletion,
              disabled: this.props.toggleAPIPending
            })
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: this.props.associated_item === 'To Do' ? styles.avatar : styles.icon,
            style: { color: this.props.color },
            'aria-hidden': 'true'
          },
          this.renderIcon()
        ),
        _react2.default.createElement(
          'div',
          { className: styles.layout },
          _react2.default.createElement(
            'div',
            { className: styles.innerLayout },
            this.renderItemDetails(),
            this.renderItemMetrics()
          ),
          this.renderFeedback()
        )
      );
    }
  }]);

  PlannerItem.displayName = 'PlannerItem'
  ;
  return PlannerItem;
}(_react.Component), _class.propTypes = {
  color: _propTypes.string,
  id: _propTypes.string.isRequired,
  uniqueId: _propTypes.string.isRequired,
  animatableIndex: _propTypes.number,
  title: _propTypes.string.isRequired,
  points: _propTypes.number,
  date: _reactMomentProptypes.momentObj,
  details: _propTypes.string,
  courseName: _propTypes.string,
  completed: _propTypes.bool,
  overrideId: _propTypes.string,
  associated_item: _propTypes.string,
  context: _propTypes.object,
  html_url: _propTypes.string,
  toggleCompletion: _propTypes.func,
  updateTodo: _propTypes.func.isRequired,
  badges: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_plannerPropTypes.badgeShape)),
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  toggleAPIPending: _propTypes.bool,
  status: _plannerPropTypes.statusShape,
  newActivity: _propTypes.bool,
  showNotificationBadge: _propTypes.bool,
  currentUser: (0, _propTypes.shape)(_plannerPropTypes.userShape),
  responsiveSize: _plannerPropTypes.sizeShape,
  allDay: _propTypes.bool,
  feedback: (0, _propTypes.shape)(_plannerPropTypes.feedbackShape)
}, _class.defaultProps = {
  badges: [],
  responsiveSize: 'large',
  allDay: false
}, _temp);


var ResponsivePlannerItem = (0, _responsiviser2.default)()(PlannerItem);
exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(ResponsivePlannerItem));