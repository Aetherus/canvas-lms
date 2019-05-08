'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opportunities = exports.OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /*
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

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _dynamicUi = require('../../dynamic-ui');

var _util = require('../../dynamic-ui/util');

var _scopeTab = require('@instructure/ui-a11y/lib/utils/scopeTab');

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _Opportunity = require('../Opportunity');

var _Opportunity2 = _interopRequireDefault(_Opportunity);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _IconX = require('@instructure/ui-icons/lib/Line/IconX');

var _IconX2 = _interopRequireDefault(_IconX);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n.TNpmezrFL-I7mk5hp7HZY {\n  padding: ' + theme.padding + ';\n  max-height: 36rem;\n  overflow: auto;\n  box-sizing: border-box;\n  width: 20rem;\n  max-width: 100%;\n  line-height: ' + theme.lineHeight + ';\n}\n\n._3vaFMXYIJaMN7DTb1jfZgU {\n  border-bottom: ' + theme.borderBottom + ';\n  text-align: center;\n  margin-bottom: 0.25rem;\n}\n\n[dir="ltr"] ._3vaFMXYIJaMN7DTb1jfZgU {\n  text-align: center;\n}\n\n[dir="rtl"] ._3vaFMXYIJaMN7DTb1jfZgU {\n  text-align: center;\n}\n\n._2kKV_3Xoc-TsIWwSkpLa1m {\n  list-style-type: none;\n  color: ' + theme.color + ';\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n._1bRXm5GX7MyGcRJ6iQ7GV4 {\n  margin: 0;\n  padding: 0;\n}\n\n._1bRXm5GX7MyGcRJ6iQ7GV4:not(:last-of-type) {\n    margin-bottom: ' + theme.itemMargin + ';\n  }\n\n._1bRXm5GX7MyGcRJ6iQ7GV4:not(:first-of-type) {\n    border-top: ' + theme.borderWidth + ' ' + theme.borderStyle + ' ' + theme.borderColor + ';\n    padding-top: ' + theme.itemPadding + ';\n  }\n\n\n._3a0JISxjU4hc5z3IENOlgN {\n  text-align: center;\n}\n\n\n[dir="ltr"] ._3a0JISxjU4hc5z3IENOlgN {\n  text-align: center;\n}\n\n\n[dir="rtl"] ._3a0JISxjU4hc5z3IENOlgN {\n  text-align: center;\n}\n\n._2KgasCyM7nL15sKbfdDFi1 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n._1XC6UBJ-NrvjZ3AJy0TO5G {\n  /* using !important to override Inst-UI rule that usually makes sense, but makes the X look too big here */\n  font-size: ' + theme.closeButtonIconSize + ' !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.__V9mOgUnaL9qgCAENoNI {\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  -webkit-margin-end: .5rem;\n          margin-inline-end: .5rem;\n}\n\n[dir="ltr"] .__V9mOgUnaL9qgCAENoNI {\n  margin-right: .5rem;\n}\n\n[dir="rtl"] .__V9mOgUnaL9qgCAENoNI {\n  margin-left: .5rem;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': 'TNpmezrFL-I7mk5hp7HZY',
  'header': '_3vaFMXYIJaMN7DTb1jfZgU',
  'list': '_2kKV_3Xoc-TsIWwSkpLa1m',
  'item': '_1bRXm5GX7MyGcRJ6iQ7GV4',
  'loading': '_3a0JISxjU4hc5z3IENOlgN',
  'closeButtonContainer': '_2KgasCyM7nL15sKbfdDFi1',
  'closeButtonIcon': '_1XC6UBJ-NrvjZ3AJy0TO5G',
  'closeButtonText': '__V9mOgUnaL9qgCAENoNI'
};
var OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID = exports.OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID = (0, _util.specialFallbackFocusId)('opportunity');

var Opportunities = exports.Opportunities = (_temp2 = _class = function (_Component) {
  _inherits(Opportunities, _Component);

  function Opportunities() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Opportunities);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Opportunities.__proto__ || Object.getPrototypeOf(Opportunities)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (event) {
      if (event.keyCode === _keycode2.default.codes.tab) {
        (0, _scopeTab2.default)(_this._content, event);
      }

      if (event.keyCode === _keycode2.default.codes.escape) {
        event.preventDefault();
        _this.props.togglePopover();
      }
    }, _this.courseAttr = function (id, attr) {
      var course = _this.props.courses.find(function (c) {
        return c.id === id;
      }) || {};
      return course[attr];
    }, _this.renderOpportunity = function () {
      return _this.props.opportunities.map(function (opportunity, oppIndex) {
        return _react2.default.createElement(
          'li',
          { key: opportunity.id, className: styles.item },
          _react2.default.createElement(_Opportunity2.default, {
            id: opportunity.id,
            dueAt: opportunity.due_at,
            points: opportunity.points_possible,
            courseName: _this.courseAttr(opportunity.course_id, 'shortName'),
            opportunityTitle: opportunity.name,
            timeZone: _this.props.timeZone,
            dismiss: _this.props.dismiss,
            plannerOverride: opportunity.planner_override,
            url: opportunity.html_url,
            animatableIndex: oppIndex
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Opportunities, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.registerAnimatable('opportunity', this, -1, [OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID]);
      setTimeout(function () {
        // eslint-disable-next-line react/no-find-dom-node
        var closeButtonRef = (0, _reactDom.findDOMNode)(_this2.closeButton);
        closeButtonRef.focus();
      }, 200);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('opportunity', this, [OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID]);
    }
  }, {
    key: 'getFocusable',
    value: function getFocusable() {
      return this.closeButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          id: 'opportunities_parent',
          className: styles.root,
          onKeyDown: this.handleKeyDown,
          ref: function ref(c) {
            _this3._content = c;
          },
          style: { maxHeight: this.props.maxHeight }
        },
        _react2.default.createElement(
          'div',
          { className: styles.header },
          _react2.default.createElement(
            _Button2.default,
            {
              variant: 'link',
              title: (0, _formatMessage2.default)('Close opportunities popover'),
              ref: function ref(btnRef) {
                _this3.closeButton = btnRef;
              },
              onClick: this.props.togglePopover
            },
            _react2.default.createElement(
              'div',
              { className: styles.closeButtonContainer },
              _react2.default.createElement(
                'span',
                { className: styles.closeButtonText },
                (0, _formatMessage2.default)('Close')
              ),
              _react2.default.createElement(_IconX2.default, { className: styles.closeButtonIcon })
            )
          )
        ),
        _react2.default.createElement(
          'ol',
          { className: styles.list },
          this.props.opportunities.length ? this.renderOpportunity() : (0, _formatMessage2.default)('Nothing new needs attention.')
        )
      );
    }
  }]);

  Opportunities.displayName = 'Opportunities'
  ;
  return Opportunities;
}(_react.Component), _class.propTypes = {
  opportunities: _propTypes.array.isRequired,
  timeZone: _propTypes.string.isRequired,
  courses: _propTypes.array.isRequired,
  dismiss: _propTypes.func.isRequired,
  togglePopover: _propTypes.func.isRequired,
  maxHeight: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]),
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func
}, _class.defaultProps = {
  maxHeight: 'none',
  registerAnimatable: function registerAnimatable() {},
  deregisterAnimatable: function deregisterAnimatable() {}
}, _temp2);
exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(Opportunities));