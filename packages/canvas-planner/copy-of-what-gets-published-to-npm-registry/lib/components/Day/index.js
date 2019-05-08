'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Day = undefined;

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

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Heading = require('@instructure/ui-elements/lib/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _propTypes = require('prop-types');

var _plannerPropTypes = require('../plannerPropTypes');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _dateUtils = require('../../utilities/dateUtils');

var _Grouping = require('../Grouping');

var _Grouping2 = _interopRequireDefault(_Grouping);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _dynamicUi = require('../../dynamic-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._1XW2h0xjBptQaE8Dpogfxs {\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n  line-height: ' + theme.lineHeight + ';\n\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n\n  margin-top: ' + theme.marginTop + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1XW2h0xjBptQaE8Dpogfxs'
};
var Day = exports.Day = (_temp = _class = function (_Component) {
  _inherits(Day, _Component);

  function Day(props) {
    _classCallCheck(this, Day);

    var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

    var tzMomentizedDate = _momentTimezone2.default.tz(props.day, props.timeZone);
    _this.friendlyName = (0, _dateUtils.getFriendlyDate)(tzMomentizedDate);
    _this.fullDate = (0, _dateUtils.getFullDate)(tzMomentizedDate);
    return _this;
  }

  _createClass(Day, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerAnimatable('day', this, this.props.animatableIndex, this.itemUniqueIds());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.props.deregisterAnimatable('day', this, this.itemUniqueIds());
      this.props.registerAnimatable('day', this, nextProps.animatableIndex, this.itemUniqueIds(nextProps));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('day', this, this.itemUniqueIds());
    }
  }, {
    key: 'itemUniqueIds',
    value: function itemUniqueIds() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.itemsForDay.map(function (item) {
        return item.uniqueId;
      });
    }
  }, {
    key: 'hasItems',
    value: function hasItems() {
      return this.props.itemsForDay && this.props.itemsForDay.length > 0;
    }
  }, {
    key: 'renderGrouping',
    value: function renderGrouping(groupKey, groupItems, index) {
      var courseInfo = groupItems[0].context || {};
      var groupColor = (courseInfo.color ? courseInfo.color : this.props.currentUser.color) || null;
      return _react2.default.createElement(_Grouping2.default, {
        title: courseInfo.title,
        image_url: courseInfo.image_url,
        color: groupColor,
        timeZone: this.props.timeZone,
        updateTodo: this.props.updateTodo,
        items: groupItems,
        animatableIndex: this.props.animatableIndex * 100 + index + 1,
        url: courseInfo.url,
        key: groupKey,
        theme: {
          titleColor: groupColor
        },
        toggleCompletion: this.props.toggleCompletion,
        currentUser: this.props.currentUser
      });
    }
  }, {
    key: 'renderGroupings',
    value: function renderGroupings() {
      var groupings = [];
      var currGroupItems = void 0;
      var currGroupKey = void 0;
      var nItems = this.props.itemsForDay.length;

      for (var i = 0; i < nItems; ++i) {
        var item = this.props.itemsForDay[i];
        var groupKey = item.context && item.context.id ? '' + item.context.type + item.context.id : 'Notes';
        if (groupKey !== currGroupKey) {
          if (currGroupKey) {
            // emit the grouping we've been working
            groupings.push(this.renderGrouping(currGroupKey, currGroupItems, groupings.length));
          }
          // start new grouping
          currGroupKey = groupKey;
          currGroupItems = [item];
        } else {
          currGroupItems.push(item);
        }
      }
      // the last groupings// emit the grouping we've been working
      groupings.push(this.renderGrouping(currGroupKey, currGroupItems, groupings.length));
      return groupings;
    }
  }, {
    key: 'render',
    value: function render() {
      var thisIsToday = (0, _dateUtils.isToday)(this.props.day);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.root, 'planner-day', { 'planner-today': thisIsToday }) },
        _react2.default.createElement(
          _Heading2.default,
          {
            border: this.hasItems() ? 'none' : 'bottom'
          },
          _react2.default.createElement(
            _Text2.default,
            {
              as: 'div',
              transform: 'uppercase',
              lineHeight: 'condensed',
              size: thisIsToday ? 'large' : 'medium'
            },
            this.friendlyName
          ),
          _react2.default.createElement(
            _Text2.default,
            {
              as: 'div',
              lineHeight: 'condensed'
            },
            this.fullDate
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this.hasItems() ? this.renderGroupings() : _react2.default.createElement(
            _View2.default,
            {
              textAlign: 'center',
              display: 'block',
              margin: 'small 0 0 0'
            },
            (0, _formatMessage2.default)('Nothing Planned Yet')
          )
        )
      );
    }
  }]);

  Day.displayName = 'Day'
  ;
  return Day;
}(_react.Component), _class.propTypes = {
  day: _propTypes.string.isRequired,
  itemsForDay: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_plannerPropTypes.itemShape)),
  animatableIndex: _propTypes.number,
  timeZone: _propTypes.string.isRequired,
  toggleCompletion: _propTypes.func,
  updateTodo: _propTypes.func,
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  currentUser: (0, _propTypes.shape)(_plannerPropTypes.userShape)
}, _class.defaultProps = {
  animatableIndex: 0
}, _temp);
exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(Day));