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

var _Heading = require('@instructure/ui-elements/lib/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Link = require('@instructure/ui-elements/lib/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesertSvg = function DesertSvg(props) {
  return _react2.default.createElement(
    'svg',
    Object.assign({
      width: '465',
      height: '220',
      viewBox: '0 0 465 220',
      xmlns: 'http://www.w3.org/2000/svg'
    }, props),
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(0 1)',
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M169.49 68.72c1.255-7.153-3.504-13.976-10.65-15.27v-1a10.5 10.5 0 0 0-20.08-4.29 19.505 19.505 0 0 0-27.14 7.47 13.253 13.253 0 0 0-11.487 2.34A13.257 13.257 0 0 0 95 68.51v.21h74.49zm76.65 10c-1.012-5.78 2.836-11.29 8.61-12.33v-.78a8.48 8.48 0 0 1 16.22-3.47 15.76 15.76 0 0 1 21.93 6c3.22-.867 6.66-.182 9.304 1.852a10.696 10.696 0 0 1 4.176 8.518v.17l-60.24.04z',
        fill: '#E6E9EB',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M285 153.84l5-11.77c.098-.23.15-.48.15-.73v-37.51c0-.523.217-1.024.6-1.38l10-9.39h-11.56c-.767 0-1.507.28-2.08.79l-4.32 3.84a3.13 3.13 0 0 0-1 2.34v39.85a3.764 3.764 0 0 1-1.45 3l-4.8 3.74-7 13.94-12.54 7.81-7 1.13a3.772 3.772 0 0 0-2.84 2.19l-3.34 7.56h56.86l-16.36-11.59a3.76 3.76 0 0 1-1.41-4.21l3.09-9.61z',
        fill: '#FEBD96',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M348.51 106.4l1.32-6.2c.127-.6.537-1.1 1.1-1.34l13.57-5.8h-19.16a3.12 3.12 0 0 0-3.12 3.12v12.42l5.32-.92c.498-.26.854-.73.97-1.28z',
        fill: '#FEC3A0',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M76.71 179.25v-.47l-6.88-11.92c-.12-.212-.28-.4-.47-.55l-3.68-2.86a1.888 1.888 0 0 1-.44-.49l-1.89-3c-.19-.3-.29-.646-.29-1v-54.7c0-.802.255-1.584.73-2.23l9.62-13.12H61.07A3.767 3.767 0 0 0 58.41 90l-3.82 3.82a3.768 3.768 0 0 0-1.1 2.66v67.2a1.88 1.88 0 0 1-1 1.65L27 179.25h49.71z',
        fill: '#FEBD96',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M138.39 103.42l-1.77 3.58a3.74 3.74 0 0 0-.4 1.68V156h3.09a1.88 1.88 0 0 0 1.88-1.88v-42.39c0-.465.17-.914.48-1.26l7.57-8.43a3.747 3.747 0 0 0-2.17-.7h-5.31a3.76 3.76 0 0 0-3.37 2.08z',
        fill: '#FEC3A0',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M242.82 179.25l3.34-7.56a3.772 3.772 0 0 1 2.84-2.19l7-1.13 12.51-7.84 7-13.94 4.8-3.74a3.767 3.767 0 0 0 1.45-3V100a3.123 3.123 0 0 1 1-2.34l4.32-3.84a3.127 3.127 0 0 1 2.08-.79h41.37a3.121 3.121 0 0 1 2.8 1.73l2.28 4.56c.218.435.33.914.33 1.4v7.85a3.118 3.118 0 0 0 4.64 2.73 3.121 3.121 0 0 0 1.61-2.73V96.19a3.12 3.12 0 0 1 3.12-3.12h24.37c.63 0 1.22.314 1.57.84l3.3 4.94c.2.296.31.643.32 1v54.88a1.881 1.881 0 0 0 1.51 1.85l4.88 1a1.88 1.88 0 0 1 1 .51l5.58 5.58c.18.18.394.324.63.42l14.24 5.72 27.8 9.43M0 179.25h464.98m-437.98 0l25.52-13.92a1.88 1.88 0 0 0 1-1.65v-67.2c0-.997.396-1.954 1.1-2.66L58.41 90a3.768 3.768 0 0 1 2.66-1.1h44.5c1.323 0 2.55.695 3.23 1.83l5.6 9.33c.353.586.54 1.256.54 1.94v36.83a1.88 1.88 0 0 0 1.88 1.88H122a3.771 3.771 0 0 1 3.5 2.38l4.61 11.69c.283.718.978 1.19 1.75 1.19h4.34v-47.3a3.773 3.773 0 0 1 .4-1.68l1.77-3.55a3.771 3.771 0 0 1 3.37-2.08h5.31a3.77 3.77 0 0 1 3.61 2.68l1.45 4.82c.105.35.16.714.16 1.08v33.51a3.769 3.769 0 0 0 1.77 3.19l4.66 2.91 11.65 5.45c.266.124.5.31.68.54l8.19 10.42c.24.305.568.53.94.64l14.29 4.25 4.42 8.43',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M316.37 213.87l-2.03-4.93-4.58-11.08 1.17-14.96 7.43-10.57 6.11-5.98m-6.11 5.98l5.67-.94m-8.94 5.58l-2.1-4'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M310.33 190.56l4.76-8.12 4.06-2.24m-8.6 7.56l-3.57-5.87m6.9 2.61l4.51.31m-4.56 22.91l3.83-14.91 7.92-10.75 8.79-5.6 6.86-2.64 2.94-5.32m-33.24 32.19l-4.78-.82m8.19 9.07l10.42 2.9 10.34 4.03 9.79-3.98 8.2-4.07'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M336.54 175.63l-.36-3.94 3.84-4.96M327 181.15l-.03-4.74 2.58-4.88 1.88-3.35m-14.55 27.66l-3.23-3.3m1.78 8.97l4.38-4.28 6.98-3.84 7.06-6.92m-13.41 2.57l5.32-.07 2.86-2.8m3.65-8.37l5.35 1.99 4.14-1.05m-27.1 25.76l9.58.27 11.28 1.84 11.81-4.68 5.9-7.09 4.94-5.26'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M323.3 195.31l3.56 1.38 6.81.26 4.13-6.44 2.79-6.23 6.46-4.14 2.02-4.16'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M329.48 190.75l2.04-4.98 2.3-4.38m-11.07 29.89l5.44-2.47 3.19 1.85m12.01 1.84l1.59-3.99 5.71-3.15 2.75-3.91 3.35-2.07m-29.49 13.45l1.32 4.45m-7.71-12.6l3.16-3.1 7.54 1.03 5.84-1.8 3.85-1.68 4-6 3.5-8.54 3.63-2.35 3.37.62m-18 7.65l2.81-.35 3.66-3.58'
      }),
      _react2.default.createElement('path', {
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round',
        d: 'M337.45 200.81l.85-4.74 3.36-3.3m4.22-1.06l3.66-.65 2.86-2.8 2.76.17m-19.64 18.18l3.97 2.99m5.86-6.88l1.1-3.37 2.34-4.68m4.44.17l4.83.56'
      }),
      _react2.default.createElement('path', {
        d: 'M238.52 91.16c-5.346 0-9.68 4.334-9.68 9.68v17.35c0 5.42-7 10.75-14.19 13.61v-90c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68V111c-7.22-2.86-14.2-8.19-14.2-13.62V69.6c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68v27.77c0 10.1 5.81 19.49 16.35 26.45a55.48 55.48 0 0 0 17.2 7.43v58.67h19.2l.15-37.85a55.456 55.456 0 0 0 17.2-7.43c10.55-7 16.35-16.35 16.35-26.44v-17.36c0-5.338-4.322-9.67-9.66-9.68z',
        fill: '#FFF',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M195.29 189.92v-58.67a55.48 55.48 0 0 1-17.2-7.43c-10.55-7-16.35-16.35-16.35-26.45V69.6c0-5.346 4.334-9.68 9.68-9.68-4.89 0-4.57 10.06-4.57 10.06v27.75c0 9.75 11.57 23.13 28.45 27.4V41.84a9.682 9.682 0 0 1 9.7-9.68c-5.18 0-4.64 8.75-4.64 8.75v149l-5.07.01z',
        fill: '#99E1A2',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M238.52 91.16c-5.346 0-9.68 4.334-9.68 9.68v17.35c0 5.42-7 10.75-14.19 13.61v-90c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68V111c-7.22-2.86-14.2-8.19-14.2-13.62V69.6c0-5.346-4.334-9.68-9.68-9.68s-9.68 4.334-9.68 9.68v27.77c0 10.1 5.81 19.49 16.35 26.45a55.48 55.48 0 0 0 17.2 7.43v58.67h19.2l.15-37.85a55.456 55.456 0 0 0 17.2-7.43c10.55-7 16.35-16.35 16.35-26.44v-17.36c0-5.338-4.322-9.67-9.66-9.68z',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M410.38 128.64a5.64 5.64 0 0 1 5.64 5.64v10.11c0 3.16 4.06 6.26 8.27 7.93v-52.4a5.64 5.64 0 0 1 11.27 0v40.27c4.21-1.67 8.27-4.77 8.27-7.93v-16.17a5.64 5.64 0 1 1 11.27 0v16.17c0 5.88-3.38 11.35-9.52 15.4a32.298 32.298 0 0 1-10 4.33v30.88h-11.3v-18.76a32.287 32.287 0 0 1-10-4.33c-6.14-4.05-9.52-9.52-9.52-15.4v-10.1a5.64 5.64 0 0 1 5.62-5.64z',
        fill: '#FFF',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M424.28 182.87v-18.76a32.298 32.298 0 0 1-10-4.33c-6.14-4.05-9.52-8.47-9.52-14.35v-10.52a5.64 5.64 0 0 1 5.64-5.64c-2.85 0-2.66 5.86-2.66 5.86v10.51c0 5.68 6.74 12.42 16.57 14.9V99.92a5.64 5.64 0 0 1 5.64-5.64c-3 0-2.7 5.1-2.7 5.1v83.16l-2.97.33z',
        fill: '#99E1A2',
        fillRule: 'nonzero'
      }),
      _react2.default.createElement('path', {
        d: 'M410.38 128.64a5.64 5.64 0 0 1 5.64 5.64v10.11c0 3.16 4.06 6.26 8.27 7.93v-52.4a5.64 5.64 0 0 1 11.27 0v40.27c4.21-1.67 8.27-4.77 8.27-7.93v-16.17a5.64 5.64 0 1 1 11.27 0v16.17c0 5.88-3.38 11.35-9.52 15.4a32.298 32.298 0 0 1-10 4.33v30.88h-11.3v-18.76a32.287 32.287 0 0 1-10-4.33c-6.14-4.05-9.52-9.52-9.52-15.4v-10.1a5.64 5.64 0 0 1 5.62-5.64z',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('circle', {
        stroke: '#CED3D7',
        strokeWidth: '2',
        cx: '360.58',
        cy: '18.96',
        r: '11.35'
      }),
      _react2.default.createElement('path', {
        d: 'M360.58 30.31v7.6m0-37.91v7.6m6.51 20.66l4.36 6.23M349.71 3.43l4.36 6.23m17.18 13.18l7.14 2.6m-35.62-12.97l7.14 2.6m21.64.95l7.34-1.97m-36.62 9.81l7.34-1.96m18.27-11.64l4.89-5.82M348.4 33.48l4.88-5.83',
        stroke: '#CED3D7',
        strokeWidth: '2',
        strokeLinecap: 'round'
      }),
      _react2.default.createElement('path', {
        d: 'M431.69 53.54A8.71 8.71 0 0 0 419 46.93a13.85 13.85 0 0 0-24.63 2 15.39 15.39 0 0 0-18.49 20.42H447a24.004 24.004 0 0 0-15.31-15.81z',
        fill: '#E6E9EB',
        fillRule: 'nonzero'
      })
    )
  );
}; // Currently uses react-svg-loader

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._3E4KD1mJbfPg3VZ9YPSgzD {\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n}\n\n._3R-Eua0gXup93yk3KW78NA {\n  display: block;\n  transform: scale(1.4);\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  text-align: center;\n  padding: ' + theme.smallSpacing + ';\n  margin-top: ' + theme.xxLargeSpacing + ';\n  margin-bottom: ' + theme.largeSpacing + ';\n}\n\n[dir="ltr"] ._3R-Eua0gXup93yk3KW78NA {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n[dir="rtl"] ._3R-Eua0gXup93yk3KW78NA {\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n}\n\n.ly4JxRL7Ww60_jXFJfDJl {\n  text-align: center;\n  vertical-align: middle;\n}\n\n[dir="ltr"] .ly4JxRL7Ww60_jXFJfDJl {\n  text-align: center;\n}\n\n[dir="rtl"] .ly4JxRL7Ww60_jXFJfDJl {\n  text-align: center;\n}\n\n._3bOSgvGxDmPkwCcYmSyW19 {\n  text-align: center;\n  vertical-align: middle;\n  padding: 16px;\n  font-weight: ' + theme.lightWeight + ';\n}\n\n[dir="ltr"] ._3bOSgvGxDmPkwCcYmSyW19 {\n  text-align: center;\n}\n\n[dir="rtl"] ._3bOSgvGxDmPkwCcYmSyW19 {\n  text-align: center;\n}\n\n._3R5WH3jskQLNv1bUE-h1ww {\n  padding: 12px;\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_3E4KD1mJbfPg3VZ9YPSgzD',
  'desert': '_3R-Eua0gXup93yk3KW78NA',
  'subtitlebox': 'ly4JxRL7Ww60_jXFJfDJl',
  'title': '_3bOSgvGxDmPkwCcYmSyW19',
  'subtitle': '_3R5WH3jskQLNv1bUE-h1ww'
};
var PlannerEmptyState = (_temp2 = _class = function (_Component) {
  _inherits(PlannerEmptyState, _Component);

  function PlannerEmptyState() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlannerEmptyState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlannerEmptyState.__proto__ || Object.getPrototypeOf(PlannerEmptyState)).call.apply(_ref, [this].concat(args))), _this), _this.handleDashboardCardLinkClick = function () {
      if (_this.props.changeToDashboardCardView) {
        _this.props.changeToDashboardCardView();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlannerEmptyState, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.root, 'planner-empty-state') },
        _react2.default.createElement(DesertSvg, { className: styles.desert, 'aria-hidden': 'true' }),
        _react2.default.createElement(
          'div',
          { className: styles.title },
          _react2.default.createElement(
            _Heading2.default,
            null,
            (0, _formatMessage2.default)("No Due Dates Assigned")
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles.subtitlebox },
          _react2.default.createElement(
            'div',
            { className: styles.subtitle },
            (0, _formatMessage2.default)("Looks like there isn't anything here")
          ),
          _react2.default.createElement(
            _Link2.default,
            { onClick: this.handleDashboardCardLinkClick },
            (0, _formatMessage2.default)("Go to Dashboard Card View")
          )
        )
      );
    }
  }]);

  PlannerEmptyState.displayName = 'PlannerEmptyState'
  ;
  return PlannerEmptyState;
}(_react.Component), _class.propTypes = {
  changeToDashboardCardView: _propTypes.func
}, _temp2);
exports.default = (0, _lib2.default)(_theme2.default, styles)(PlannerEmptyState);