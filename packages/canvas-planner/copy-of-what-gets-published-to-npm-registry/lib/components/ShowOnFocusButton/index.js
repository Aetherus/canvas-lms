'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ScreenReaderContent = require('@instructure/ui-a11y/lib/components/ScreenReaderContent');

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._3sfSQlqwNYaCykaCMecPTp {\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_3sfSQlqwNYaCykaCMecPTp'
};
var ShowOnFocusButton = (_temp = _class = function (_Component) {
  _inherits(ShowOnFocusButton, _Component);

  function ShowOnFocusButton(props) {
    _classCallCheck(this, ShowOnFocusButton);

    var _this = _possibleConstructorReturn(this, (ShowOnFocusButton.__proto__ || Object.getPrototypeOf(ShowOnFocusButton)).call(this, props));

    _this.handleFocus = function (e) {
      _this.setState({
        visible: true
      }, function () {
        // eslint-disable-next-line react/no-find-dom-node
        (0, _reactDom.findDOMNode)(_this.btnRef).focus();
      });
    };

    _this.handleBlur = function (e) {
      _this.setState({
        visible: false
      });
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ShowOnFocusButton, [{
    key: 'renderButton',
    value: function renderButton() {
      var _this2 = this;

      var _props = this.props,
          buttonProps = _props.buttonProps,
          children = _props.children;

      return _react2.default.createElement(
        _Button2.default,
        Object.assign({
          variant: 'link',
          buttonRef: function buttonRef(btn) {
            _this2.btnRef = btn;_this2.props.buttonRef(btn);
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, buttonProps),
        children
      );
    }
  }, {
    key: 'renderInvisibleButton',
    value: function renderInvisibleButton() {
      var srProps = this.props.srProps;

      return _react2.default.createElement(
        _ScreenReaderContent2.default,
        srProps,
        this.renderButton()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.visible) {
        return this.renderButton();
      } else {
        return this.renderInvisibleButton();
      }
    }
  }]);

  ShowOnFocusButton.displayName = 'ShowOnFocusButton'
  ;
  return ShowOnFocusButton;
}(_react.Component), _class.propTypes = {
  buttonProps: _propTypes.object,
  srProps: _propTypes.object,
  children: _propTypes.node.isRequired,
  buttonRef: _propTypes.func
}, _class.defaultProps = {
  buttonRef: function buttonRef() {}
}, _temp);
exports.default = (0, _lib2.default)(_theme2.default, styles)(ShowOnFocusButton);