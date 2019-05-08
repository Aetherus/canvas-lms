'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('@instructure/ui-elements/lib/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _List = require('@instructure/ui-elements/lib/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@instructure/ui-elements/lib/components/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _IconAssignment = require('@instructure/ui-icons/lib/Line/IconAssignment');

var _IconAssignment2 = _interopRequireDefault(_IconAssignment);

var _IconQuiz = require('@instructure/ui-icons/lib/Line/IconQuiz');

var _IconQuiz2 = _interopRequireDefault(_IconQuiz);

var _IconAnnouncement = require('@instructure/ui-icons/lib/Line/IconAnnouncement');

var _IconAnnouncement2 = _interopRequireDefault(_IconAnnouncement);

var _IconDiscussion = require('@instructure/ui-icons/lib/Line/IconDiscussion');

var _IconDiscussion2 = _interopRequireDefault(_IconDiscussion);

var _IconNoteLight = require('@instructure/ui-icons/lib/Line/IconNoteLight');

var _IconNoteLight2 = _interopRequireDefault(_IconNoteLight);

var _IconCalendarMonth = require('@instructure/ui-icons/lib/Line/IconCalendarMonth');

var _IconCalendarMonth2 = _interopRequireDefault(_IconCalendarMonth);

var _IconMsWord = require('@instructure/ui-icons/lib/Line/IconMsWord');

var _IconMsWord2 = _interopRequireDefault(_IconMsWord);

var _IconX = require('@instructure/ui-icons/lib/Line/IconX');

var _IconX2 = _interopRequireDefault(_IconX);

var _dateUtils = require('../../utilities/dateUtils');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var getIconComponent = function getIconComponent(itemType) {
  switch (itemType) {
    case 'Assignment':
      return _react2.default.createElement(_IconAssignment2.default, { label: (0, _formatMessage2.default)('Assignment'), className: 'ToDoSidebarItem__Icon' });
    case 'Quiz':
      return _react2.default.createElement(_IconQuiz2.default, { label: (0, _formatMessage2.default)('Quiz'), className: 'ToDoSidebarItem__Icon' });
    case 'Discussion':
      return _react2.default.createElement(_IconDiscussion2.default, { label: (0, _formatMessage2.default)('Discussion'), className: 'ToDoSidebarItem__Icon' });
    case 'Announcement':
      return _react2.default.createElement(_IconAnnouncement2.default, { label: (0, _formatMessage2.default)('Announcement'), className: 'ToDoSidebarItem__Icon' });
    case 'Calendar Event':
      return _react2.default.createElement(_IconCalendarMonth2.default, { label: (0, _formatMessage2.default)('Calendar Event'), className: 'ToDoSidebarItem__Icon' });
    case 'Page':
      return _react2.default.createElement(_IconMsWord2.default, { label: (0, _formatMessage2.default)('Page'), className: 'ToDoSidebarItem__Icon' });
    default:
      return _react2.default.createElement(_IconNoteLight2.default, { label: (0, _formatMessage2.default)('To Do'), className: 'ToDoSidebarItem__Icon' });
  }
};

var getContextShortName = function getContextShortName(courses, courseId) {
  var course = courses.find(function (x) {
    return x.id === courseId;
  });
  return course ? course.shortName : '';
};

var ToDoItem = function (_React$Component) {
  _inherits(ToDoItem, _React$Component);

  function ToDoItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToDoItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToDoItem.__proto__ || Object.getPrototypeOf(ToDoItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.handleDismissClick(_this.props.item);
    }, _this.getInformationRow = function (dueAt, points) {
      var toDisplay = [];
      if (points) {
        toDisplay.push(_react2.default.createElement(
          _ListItem2.default,
          { key: 'points' },
          (0, _formatMessage2.default)('{numPoints} points', { numPoints: points })
        ));
      }

      toDisplay.push(_react2.default.createElement(
        _ListItem2.default,
        { key: 'date' },
        (0, _dateUtils.formatDateAtTimeWithoutYear)(dueAt, _this.props.timeZone)
      ));
      return toDisplay;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToDoItem, [{
    key: 'focus',
    value: function focus() {
      var focusable = this.linkRef || this.buttonRef;
      if (focusable) focusable.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var title = _react2.default.createElement(
        _Text2.default,
        { size: 'small', lineHeight: 'fit' },
        this.props.item.title
      );
      var titleComponent = this.props.item.html_url ? _react2.default.createElement(
        _Link2.default,
        { linkRef: function linkRef(elt) {
            _this2.linkRef = elt;
          }, href: this.props.item.html_url },
        title
      ) : _react2.default.createElement(
        _Text2.default,
        null,
        title
      );

      return _react2.default.createElement(
        'div',
        { className: 'ToDoSidebarItem' },
        getIconComponent(this.props.item.type),
        _react2.default.createElement(
          'div',
          { className: 'ToDoSidebarItem__Info' },
          _react2.default.createElement(
            'div',
            { className: 'ToDoSidebarItem__Title' },
            titleComponent
          ),
          _react2.default.createElement(
            _Text2.default,
            { color: 'secondary', size: 'small', weight: 'bold', lineHeight: 'fit' },
            getContextShortName(this.props.courses, this.props.item.course_id)
          ),
          _react2.default.createElement(
            _List2.default,
            { variant: 'inline', delimiter: 'pipe', size: 'small' },
            this.getInformationRow(this.props.item.date, this.props.item.points)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ToDoSidebarItem__Close' },
          _react2.default.createElement(
            _Button2.default,
            {
              variant: 'icon',
              size: 'small',
              onClick: this.handleClick,
              buttonRef: function buttonRef(elt) {
                _this2.buttonRef = elt;
              },
              'aria-label': (0, _formatMessage2.default)('Dismiss {itemTitle}', { itemTitle: this.props.item.title })
            },
            _react2.default.createElement(_IconX2.default, { className: 'ToDoSidebarItem__CloseIcon' })
          )
        )
      );
    }
  }]);

  ToDoItem.displayName = 'ToDoItem'
  ;
  return ToDoItem;
}(_react2.default.Component);

exports.default = ToDoItem;


ToDoItem.propTypes = {
  item: (0, _propTypes.shape)({
    title: _propTypes.string,
    html_url: _propTypes.string,
    type: _propTypes.string,
    course_id: _propTypes.string,
    date: _propTypes.object, // moment
    points: _propTypes.number
  }),
  courses: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  handleDismissClick: _propTypes.func.isRequired,
  timeZone: _propTypes.string,
  locale: _propTypes.string
};