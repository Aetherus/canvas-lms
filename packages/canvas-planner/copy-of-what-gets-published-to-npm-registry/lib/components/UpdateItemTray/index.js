'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateItemTray = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps; /*
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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _FormFieldGroup = require('@instructure/ui-forms/lib/components/FormFieldGroup');

var _FormFieldGroup2 = _interopRequireDefault(_FormFieldGroup);

var _ScreenReaderContent = require('@instructure/ui-a11y/lib/components/ScreenReaderContent');

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextInput = require('@instructure/ui-forms/lib/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Select = require('@instructure/ui-forms/lib/components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _TextArea = require('@instructure/ui-forms/lib/components/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _DateTimeInput = require('@instructure/ui-forms/lib/components/DateTimeInput');

var _DateTimeInput2 = _interopRequireDefault(_DateTimeInput);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _plannerPropTypes = require('../plannerPropTypes');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._1AO5l477fvfOHAoCMaydv9 {\n  background: ' + theme.background + ';\n  width: 19rem;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1AO5l477fvfOHAoCMaydv9'
};
var UpdateItemTray = exports.UpdateItemTray = (_temp = _class = function (_Component) {
  _inherits(UpdateItemTray, _Component);

  function UpdateItemTray(props) {
    _classCallCheck(this, UpdateItemTray);

    var _this = _possibleConstructorReturn(this, (UpdateItemTray.__proto__ || Object.getPrototypeOf(UpdateItemTray)).call(this, props));

    _initialiseProps.call(_this);

    var updates = _this.getNoteUpdates(props);
    _this.state = {
      updates: updates,
      titleMessages: [],
      dateMessages: []
    };
    return _this;
  }

  _createClass(UpdateItemTray, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!_lodash2.default.isEqual(this.props.noteItem, nextProps.noteItem)) {
        var updates = this.getNoteUpdates(nextProps);
        this.setState({ updates: updates }, this.updateMessages);
      }
    }
  }, {
    key: 'editingExistingNote',
    value: function editingExistingNote() {
      return this.props.noteItem && this.props.noteItem.uniqueId;
    }
  }, {
    key: 'getNoteUpdates',
    value: function getNoteUpdates(props) {
      var updates = _lodash2.default.cloneDeep(props.noteItem) || {};
      if (updates.context) {
        updates.courseId = updates.context.id;
        delete updates.context;
      }
      if (!updates.date) {
        updates.date = _momentTimezone2.default.tz(props.timeZone).endOf('day');
      }
      return updates;
    }
  }, {
    key: 'invalidDateTimeMessage',
    value: function invalidDateTimeMessage(rawDateValue, rawTimeValue) {
      var errmsg = void 0;
      if (rawDateValue) {
        errmsg = (0, _formatMessage2.default)("#{date} is not a valid date.", { date: rawDateValue });
      } else {
        errmsg = (0, _formatMessage2.default)('You must provide a date and time.');
      }
      return errmsg;
    }
    // separating the function from the bound callback is necessary so I can spy
    // on invalidDateTimeMessage in unit tests.

  }, {
    key: 'findCurrentValue',
    value: function findCurrentValue(field) {
      return this.state.updates[field] || '';
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      if (this.state.updates.title && this.state.updates.date && this.state.updates.date.isValid()) {
        return this.state.updates.title.replace(/\s/g, '').length > 0;
      }
      return false;
    }
  }, {
    key: 'renderDeleteButton',
    value: function renderDeleteButton() {
      if (!this.editingExistingNote()) return;
      return _react2.default.createElement(
        _Button2.default,
        {
          variant: 'light',
          margin: '0 x-small 0 0',
          onClick: this.handleDeleteClick },
        (0, _formatMessage2.default)("Delete")
      );
    }
  }, {
    key: 'renderSaveButton',
    value: function renderSaveButton() {
      return _react2.default.createElement(
        _Button2.default,
        {
          variant: 'primary',
          margin: '0 0 0 x-small',
          disabled: !this.isValid(),
          onClick: this.handleSave
        },
        (0, _formatMessage2.default)("Save")
      );
    }
  }, {
    key: 'renderTitleInput',
    value: function renderTitleInput() {
      var value = this.findCurrentValue('title');
      return _react2.default.createElement(_TextInput2.default, {
        label: (0, _formatMessage2.default)("Title"),
        value: value,
        messages: this.state.titleMessages,
        onChange: this.handleTitleChange
      });
    }
  }, {
    key: 'renderDateInput',
    value: function renderDateInput() {
      var datevalue = this.state.updates.date && this.state.updates.date.isValid() ? this.state.updates.date.toISOString() : undefined;
      return _react2.default.createElement(_DateTimeInput2.default, {
        required: true,
        description: _react2.default.createElement(
          _ScreenReaderContent2.default,
          null,
          (0, _formatMessage2.default)("The date and time this to do is due")
        ),
        messages: this.state.dateMessages,
        dateLabel: (0, _formatMessage2.default)("Date"),
        dateNextLabel: (0, _formatMessage2.default)("Next Month"),
        datePreviousLabel: (0, _formatMessage2.default)("Previous Month"),
        timeLabel: (0, _formatMessage2.default)("Time"),
        timeStep: 30,
        locale: this.props.locale,
        timezone: this.props.timeZone,
        value: datevalue,
        layout: 'stacked',
        onChange: this.handleDateChange,
        invalidDateTimeMessage: this.onInvalidDateTimeMessage
      });
    }
  }, {
    key: 'renderCourseSelect',
    value: function renderCourseSelect() {
      var noneOption = {
        value: "none",
        label: (0, _formatMessage2.default)("Optional: Add Course")
      };
      var courseOptions = (this.props.courses || []).map(function (course) {
        return {
          value: course.id,
          label: course.longName
        };
      });

      var courseId = this.findCurrentValue('courseId');
      var selectedOption = courseId ? courseOptions.find(function (o) {
        return o.value === courseId;
      }) : noneOption;

      return _react2.default.createElement(
        _Select2.default,
        {
          label: (0, _formatMessage2.default)("Course"),
          selectedOption: selectedOption,
          onChange: this.handleCourseIdChange
        },
        [noneOption].concat(_toConsumableArray(courseOptions)).map(function (props) {
          return _react2.default.createElement(
            'option',
            { key: props.value, value: props.value },
            props.label
          );
        })
      );
    }
  }, {
    key: 'renderDetailsInput',
    value: function renderDetailsInput() {
      var _this2 = this;

      var value = this.findCurrentValue('details');
      return _react2.default.createElement(_TextArea2.default, {
        label: (0, _formatMessage2.default)("Details"),
        height: '10rem',
        autoGrow: false,
        value: value,
        onChange: function onChange(e) {
          return _this2.handleChange('details', e.target.value);
        }
      });
    }
  }, {
    key: 'renderTrayHeader',
    value: function renderTrayHeader() {
      if (this.editingExistingNote()) {
        return _react2.default.createElement(
          'h2',
          null,
          (0, _formatMessage2.default)('Edit {title}', { title: this.props.noteItem.title })
        );
      } else {
        return _react2.default.createElement(
          'h2',
          null,
          (0, _formatMessage2.default)("Add To Do")
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.root },
        _react2.default.createElement(
          _View2.default,
          {
            as: 'div',
            padding: 'large medium medium'
          },
          _react2.default.createElement(
            _FormFieldGroup2.default,
            {
              rowSpacing: 'small',
              description: _react2.default.createElement(
                _ScreenReaderContent2.default,
                null,
                this.renderTrayHeader()
              )
            },
            this.renderTitleInput(),
            this.renderDateInput(),
            this.renderCourseSelect(),
            this.renderDetailsInput()
          ),
          _react2.default.createElement(
            _View2.default,
            { as: 'div', margin: 'small 0 0', textAlign: 'end' },
            this.renderDeleteButton(),
            this.renderSaveButton()
          )
        )
      );
    }
  }]);

  UpdateItemTray.displayName = 'UpdateItemTray'
  ;
  return UpdateItemTray;
}(_react.Component), _class.propTypes = {
  courses: _propTypes2.default.arrayOf(_propTypes2.default.shape(_plannerPropTypes.courseShape)).isRequired,
  noteItem: _propTypes2.default.object,
  onSavePlannerItem: _propTypes2.default.func.isRequired,
  onDeletePlannerItem: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string.isRequired,
  timeZone: _propTypes2.default.string.isRequired
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.updateMessages = function () {
    if (!_this3.state.updates.date) {
      _this3.setState({ dateMessages: [{ type: 'error', text: (0, _formatMessage2.default)('Date is required') }] });
    } else {
      _this3.setState({ dateMessages: [] });
    }
  };

  this.handleSave = function () {
    var updates = Object.assign({}, _this3.state.updates);
    if (updates.courseId) {
      updates.context = { id: updates.courseId };
    } else {
      updates.context = { id: null };
    }
    updates.date = updates.date.toISOString();
    delete updates.courseId;
    _this3.props.onSavePlannerItem(updates);
  };

  this.handleChange = function (field, value) {
    _this3.setState({
      updates: Object.assign({}, _this3.state.updates, _defineProperty({}, field, value))
    }, _this3.updateMessages);
  };

  this.handleCourseIdChange = function (e, option) {
    if (!option) return;
    var value = option.value;
    if (value === 'none') value = undefined;
    _this3.handleChange('courseId', value);
  };

  this.handleTitleChange = function (e) {
    var value = e.target.value;
    if (value === '') {
      _this3.setState({
        titleMessages: [{ type: 'error', text: (0, _formatMessage2.default)('title is required') }]
      });
    } else {
      _this3.setState({ titleMessages: [] });
    }
    _this3.handleChange('title', value);
  };

  this.handleDateChange = function (e, isoDate) {
    var value = isoDate || '';
    _this3.handleChange('date', _momentTimezone2.default.tz(value, _this3.props.timeZone));
  };

  this.onInvalidDateTimeMessage = this.invalidDateTimeMessage.bind(this);

  this.handleDeleteClick = function () {
    // eslint-disable-next-line no-restricted-globals
    if (confirm((0, _formatMessage2.default)('Are you sure you want to delete this planner item?'))) {
      _this3.props.onDeletePlannerItem(_this3.props.noteItem);
    }
  };
}, _temp);
exports.default = (0, _lib2.default)(_theme2.default, styles)(UpdateItemTray);