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

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _CustomPropTypes = require('@instructure/ui-utils/lib/react/CustomPropTypes');

var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

var _Pill = require('@instructure/ui-elements/lib/components/Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._2FqVadK2FhTqaCX1a1MlS0 {\n  line-height: ' + theme.lineHeight + ';\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  text-align: inherit;\n}\n\n[dir="ltr"] ._2FqVadK2FhTqaCX1a1MlS0 {\n  text-align: inherit;\n}\n\n[dir="rtl"] ._2FqVadK2FhTqaCX1a1MlS0 {\n  text-align: inherit;\n}\n\n._3ak-TKbmnVi_nMFVhGqS77 {\n  display: inline-block;\n  vertical-align: middle;\n  margin: ' + theme.itemMargin + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_2FqVadK2FhTqaCX1a1MlS0',
  'item': '_3ak-TKbmnVi_nMFVhGqS77'
};
var BadgeList = (_temp = _class = function (_Component) {
  _inherits(BadgeList, _Component);

  function BadgeList() {
    _classCallCheck(this, BadgeList);

    return _possibleConstructorReturn(this, (BadgeList.__proto__ || Object.getPrototypeOf(BadgeList)).apply(this, arguments));
  }

  _createClass(BadgeList, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react.Children.map(this.props.children, function (child) {
        return _react2.default.createElement(
          'li',
          { key: child.key, className: styles.item },
          child
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: styles.root },
        this.renderChildren()
      );
    }
  }]);

  BadgeList.displayName = 'BadgeList'
  ;
  return BadgeList;
}(_react.Component), _class.propTypes = {
  children: _CustomPropTypes2.default.Children.oneOf([_Pill2.default])
}, _temp);
exports.default = (0, _lib2.default)(_theme2.default, styles)(BadgeList);