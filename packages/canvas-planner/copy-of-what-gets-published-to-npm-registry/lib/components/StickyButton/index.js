'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _propTypes = require('prop-types');

var _IconArrowUp = require('@instructure/ui-icons/lib/Solid/IconArrowUp');

var _IconArrowUp2 = _interopRequireDefault(_IconArrowUp);

var _IconArrowDown = require('@instructure/ui-icons/lib/Line/IconArrowDown');

var _IconArrowDown2 = _interopRequireDefault(_IconArrowDown);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._189S4Xv08h4aicDTAhi1_6 {\n  box-sizing: border-box;\n  display: block;\n  border: none;\n  color: ' + theme.color + ';\n  background-color: ' + theme.background + ';\n  padding: 0;\n  font-size: ' + theme.fontSize + ';\n  font-weight: ' + theme.fontWeight + ';\n  font-family: ' + theme.fontFamily + ';\n  text-transform: ' + theme.textTransform + ';\n  line-height: ' + theme.lineHeight + ';\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  touch-action: manipulation;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  transition: background-color 0.2s;\n  outline: none;\n  overflow: visible;\n  border-bottom-left-radius: ' + theme.borderRadius + ';\n  border-bottom-right-radius: ' + theme.borderRadius + ';\n  position: fixed;\n}\n\n  ._189S4Xv08h4aicDTAhi1_6::before {\n    content: "";\n    box-sizing: border-box;\n    width: calc(100% + 0.5rem);\n    height: calc(100% + 0.5rem);\n    border: ' + theme.focusRingWidth + ' solid ' + theme.focusRingColor + ';\n    position: absolute;\n    top: -0.25rem;\n    /* the placement and radii are symetrical, so no need to replace left/right with start/end */\n    left: -0.25rem;\n    border-bottom-left-radius: ' + theme.borderRadius + ';\n    border-bottom-right-radius: ' + theme.borderRadius + ';\n    transform: scale(0.25);\n    opacity: 0;\n    transition: all 0.2s ease-out;\n  }\n\n  ._189S4Xv08h4aicDTAhi1_6:focus::before {\n      opacity: 1;\n      transform: scale(1);\n    }\n\n  ._189S4Xv08h4aicDTAhi1_6:focus,\n  ._189S4Xv08h4aicDTAhi1_6:hover {\n    background-color: ' + theme.backgroundHover + ';\n  }\n\n  ._189S4Xv08h4aicDTAhi1_6:focus .T1QK-Xe4wfnq61uDz72Mp, ._189S4Xv08h4aicDTAhi1_6:hover .T1QK-Xe4wfnq61uDz72Mp {\n      transform: translate3d(0, -0.0625rem, 0) scale(1.2);\n    }\n\n  ._189S4Xv08h4aicDTAhi1_6[aria-disabled] {\n    cursor: not-allowed;\n    pointer-events: none;\n    opacity: 0.5;\n  }\n\n.T1QK-Xe4wfnq61uDz72Mp {\n  display: block;\n  font-size: 0.75rem;\n  -webkit-margin-start: ' + theme.iconMargin + ';\n          margin-inline-start: ' + theme.iconMargin + ';\n  transform: translate3d(0, -0.0625rem, 0);\n  transition: all 0.2s;\n}\n\n[dir="ltr"] .T1QK-Xe4wfnq61uDz72Mp {\n  margin-left: ' + theme.iconMargin + ';\n}\n\n[dir="rtl"] .T1QK-Xe4wfnq61uDz72Mp {\n  margin-right: ' + theme.iconMargin + ';\n}\n\n._40R2HgaUXYZnaJ0e0cacS .u6k0pEU3xDC86WktXnk3O, ._3JHbLSS-R1vk5j36qIKebN .u6k0pEU3xDC86WktXnk3O {\n    -webkit-padding-end: ' + theme.hasIconRightPadding + ';\n            padding-inline-end: ' + theme.hasIconRightPadding + ';\n  }\n\n[dir="ltr"] ._40R2HgaUXYZnaJ0e0cacS .u6k0pEU3xDC86WktXnk3O,\n[dir="ltr"] ._3JHbLSS-R1vk5j36qIKebN .u6k0pEU3xDC86WktXnk3O {\n    padding-right: ' + theme.hasIconRightPadding + ';\n  }\n\n[dir="rtl"] ._40R2HgaUXYZnaJ0e0cacS .u6k0pEU3xDC86WktXnk3O,\n[dir="rtl"] ._3JHbLSS-R1vk5j36qIKebN .u6k0pEU3xDC86WktXnk3O {\n    padding-left: ' + theme.hasIconRightPadding + ';\n  }\n\n.u6k0pEU3xDC86WktXnk3O {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: ' + theme.padding + ';\n}\n\n._3o2Gvk4hKu9VYHM6E04Vjw {\n  offset-inline-start: 0;\n  top: 100%;\n  position: absolute;\n}\n\n[dir="ltr"] ._3o2Gvk4hKu9VYHM6E04Vjw {\n  left: 0;\n}\n\n[dir="rtl"] ._3o2Gvk4hKu9VYHM6E04Vjw {\n  right: 0;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_189S4Xv08h4aicDTAhi1_6',
  'icon': 'T1QK-Xe4wfnq61uDz72Mp',
  'direction--up': '_40R2HgaUXYZnaJ0e0cacS',
  'layout': 'u6k0pEU3xDC86WktXnk3O',
  'direction--down': '_3JHbLSS-R1vk5j36qIKebN',
  'newActivityButton': '_3o2Gvk4hKu9VYHM6E04Vjw'
};
var StickyButton = (_temp2 = _class = function (_Component) {
  _inherits(StickyButton, _Component);

  function StickyButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StickyButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StickyButton.__proto__ || Object.getPrototypeOf(StickyButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;


      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
      } else if (typeof onClick === 'function') {
        onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StickyButton, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var direction = this.props.direction;

      if (direction === 'up') {
        return _react2.default.createElement(_IconArrowUp2.default, { className: styles.icon });
      } else if (direction === 'down') {
        return _react2.default.createElement(_IconArrowDown2.default, { className: styles.icon });
      } else {
        return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classes;

      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          hidden = _props.hidden,
          direction = _props.direction,
          zIndex = _props.zIndex;


      var classes = (_classes = {}, _defineProperty(_classes, styles.root, true), _defineProperty(_classes, styles['direction--' + direction], direction !== 'none'), _classes);

      var style = {
        zIndex: zIndex ? zIndex : null
      };

      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          onClick: this.handleClick,
          className: (0, _classnames2.default)(classes, styles.newActivityButton),
          style: style,
          'aria-disabled': disabled ? 'true' : null,
          'aria-hidden': hidden ? 'true' : null,
          ref: this.props.buttonRef
        },
        _react2.default.createElement(
          'span',
          { className: styles.layout },
          children,
          this.renderIcon()
        )
      );
    }
  }]);

  StickyButton.displayName = 'StickyButton'
  ;
  return StickyButton;
}(_react.Component), _class.propTypes = {
  children: _propTypes.node.isRequired,
  onClick: _propTypes.func,
  disabled: _propTypes.bool,
  hidden: _propTypes.bool,
  direction: (0, _propTypes.oneOf)(['none', 'up', 'down']),
  className: _propTypes.string,
  zIndex: _propTypes.number,
  buttonRef: _propTypes.func
}, _class.defaultProps = {
  direction: 'none',
  offset: '0',
  className: ''
}, _temp2);
exports.default = (0, _lib2.default)(_theme2.default, styles)(StickyButton);