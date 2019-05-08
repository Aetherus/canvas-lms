'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opportunity = undefined;

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

var _dynamicUi = require('../../dynamic-ui');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _dateUtils = require('../../utilities/dateUtils');

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('@instructure/ui-elements/lib/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Pill = require('@instructure/ui-elements/lib/components/Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _PresentationContent = require('@instructure/ui-a11y/lib/components/PresentationContent');

var _PresentationContent2 = _interopRequireDefault(_PresentationContent);

var _ScreenReaderContent = require('@instructure/ui-a11y/lib/components/ScreenReaderContent');

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _IconX = require('@instructure/ui-icons/lib/Line/IconX');

var _IconX2 = _interopRequireDefault(_IconX);

var _propTypes = require('prop-types');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n.k1IBsv01BYTGyMQAD0DtF {\n  position: relative;\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n  padding: ' + theme.padding + ';\n  box-sizing: border-box;\n  line-height: ' + theme.lineHeight + ';\n}\n\n._27rEjvHTJMb8fZZg8ylIiU {\n  max-width: 16.5rem;\n}\n._39T9_baQLUcoiMhCaVk2Jy {\n  box-sizing: border-box;\n  min-width: 1px;\n  flex: 1;\n  padding-top: ' + theme.namePaddingTop + ';\n  text-transform: uppercase;\n  letter-spacing: 0.0625rem;\n  color: ' + theme.secondaryColor + ';\n  font-size: ' + theme.nameFontSize + ';\n}\n\n._1A7mEH5aLSzSm3ixuH0uc2 {\n  margin-bottom: ' + theme.titleMargin + ';\n}\n\n.KzAjdfx30TvJ8-fD-RLsD {\n  position: absolute;\n  top: 0;\n  offset-inline-end: 0;\n}\n\n[dir="ltr"] .KzAjdfx30TvJ8-fD-RLsD {\n  right: 0;\n}\n\n[dir="rtl"] .KzAjdfx30TvJ8-fD-RLsD {\n  left: 0;\n}\n\n._39T9_baQLUcoiMhCaVk2Jy,\n._1A7mEH5aLSzSm3ixuH0uc2 {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\n._3hJn4Oxq7Xb7wKDrvQF3Ei {\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  -webkit-padding-end: ' + theme.footerPadding + ';\n          padding-inline-end: ' + theme.footerPadding + ';\n}\n\n[dir="ltr"] ._3hJn4Oxq7Xb7wKDrvQF3Ei {\n  padding-right: ' + theme.footerPadding + ';\n}\n\n[dir="rtl"] ._3hJn4Oxq7Xb7wKDrvQF3Ei {\n  padding-left: ' + theme.footerPadding + ';\n}\n\n._1rS7LOfpO2bFe5OUWGuzJz {\n  box-sizing: border-box;\n  min-width: 1px;\n  flex-grow: 1;\n  -webkit-padding-end: ' + theme.statusPadding + ';\n          padding-inline-end: ' + theme.statusPadding + ';\n}\n\n[dir="ltr"] ._1rS7LOfpO2bFe5OUWGuzJz {\n  padding-right: ' + theme.statusPadding + ';\n}\n\n[dir="rtl"] ._1rS7LOfpO2bFe5OUWGuzJz {\n  padding-left: ' + theme.statusPadding + ';\n}\n\n._1PBaBJvwxUD-GI1pm3lNrw {\n  box-sizing: border-box;\n  min-width: 1px;\n  flex-shrink: 0;\n  text-align: end;\n  color: ' + theme.secondaryColor + ';\n  text-transform: uppercase;\n  font-size: ' + theme.pointsFontSize + ';\n  line-height: ' + theme.pointsLineHeight + ';\n}\n\n[dir="ltr"] ._1PBaBJvwxUD-GI1pm3lNrw {\n  text-align: right;\n}\n\n[dir="rtl"] ._1PBaBJvwxUD-GI1pm3lNrw {\n  text-align: left;\n}\n\n._3_CRIMWzMIazsSInps5Uf7 {\n  display: block;\n  font-size: ' + theme.pointsNumberFontSize + ';\n}\n\n._1GJ5LbmxRfiCsCSI-GxKOP {\n  margin-top: ' + theme.dueMargin + ';\n  font-size: ' + theme.dueFontSize + ';\n  color: ' + theme.secondaryColor + ';\n}\n\n._3O7op95oWBQy39Er1IK4VB {\n  font-weight: ' + theme.dueTextFontWeight + ';\n}\n\n\n\n._2Mz_hvphbuoOhlBj80ybUJ {\n  font-size: ' + theme.closeButtonIconSize + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': 'k1IBsv01BYTGyMQAD0DtF',
  'oppNameAndTitle': '_27rEjvHTJMb8fZZg8ylIiU',
  'oppName': '_39T9_baQLUcoiMhCaVk2Jy',
  'title': '_1A7mEH5aLSzSm3ixuH0uc2',
  'close': 'KzAjdfx30TvJ8-fD-RLsD',
  'footer': '_3hJn4Oxq7Xb7wKDrvQF3Ei',
  'status': '_1rS7LOfpO2bFe5OUWGuzJz',
  'points': '_1PBaBJvwxUD-GI1pm3lNrw',
  'pointsNumber': '_3_CRIMWzMIazsSInps5Uf7',
  'due': '_1GJ5LbmxRfiCsCSI-GxKOP',
  'dueText': '_3O7op95oWBQy39Er1IK4VB',
  'closeButtonIcon': '_2Mz_hvphbuoOhlBj80ybUJ'
};
var Opportunity = exports.Opportunity = (_temp = _class = function (_Component) {
  _inherits(Opportunity, _Component);

  function Opportunity(props) {
    _classCallCheck(this, Opportunity);

    var _this = _possibleConstructorReturn(this, (Opportunity.__proto__ || Object.getPrototypeOf(Opportunity)).call(this, props));

    _this.linkRef = function (ref) {
      _this.link = ref;
    };

    var tzMomentizedDate = _momentTimezone2.default.tz(props.dueAt, props.timeZone);
    _this.fullDate = (0, _dateUtils.getFullDateAndTime)(tzMomentizedDate);
    return _this;
  }

  _createClass(Opportunity, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerAnimatable('opportunity', this, this.props.animatableIndex, [this.props.id]);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.props.deregisterAnimatable('opportunity', this, [this.props.id]);
      this.props.registerAnimatable('opportunity', this, newProps.animatableIndex, [newProps.id]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('opportunity', this, [this.props.id]);
    }
  }, {
    key: 'getFocusable',
    value: function getFocusable() {
      return this.link;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: styles.root },
        _react2.default.createElement(
          'div',
          { className: styles.oppNameAndTitle },
          _react2.default.createElement(
            'div',
            { className: styles.oppName },
            this.props.courseName
          ),
          _react2.default.createElement(
            'div',
            { className: styles.title },
            _react2.default.createElement(
              _Link2.default,
              { href: this.props.url, ref: this.linkRef },
              this.props.opportunityTitle
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles.footer },
          _react2.default.createElement(
            'div',
            { className: styles.status },
            _react2.default.createElement(_Pill2.default, { text: (0, _formatMessage2.default)('Missing'), variant: 'danger' }),
            _react2.default.createElement(
              'div',
              { className: styles.due },
              _react2.default.createElement(
                'span',
                { className: styles.dueText },
                (0, _formatMessage2.default)('Due:')
              ),
              ' ',
              this.fullDate
            )
          ),
          _react2.default.createElement(
            'div',
            { className: styles.points },
            _react2.default.createElement(
              _ScreenReaderContent2.default,
              null,
              (0, _formatMessage2.default)("{points} points", { points: this.props.points })
            ),
            _react2.default.createElement(
              _PresentationContent2.default,
              null,
              _react2.default.createElement(
                'span',
                { className: styles.pointsNumber },
                this.props.points
              ),
              (0, _formatMessage2.default)("points")
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles.close },
          _react2.default.createElement(
            _Button2.default,
            {
              onClick: function onClick() {
                return _this2.props.dismiss(_this2.props.id, _this2.props.plannerOverride);
              },
              variant: 'icon',
              size: 'small'
            },
            _react2.default.createElement(_IconX2.default, {
              className: styles.closeButtonIcon,
              title: (0, _formatMessage2.default)("Dismiss {opportunityName}", { opportunityName: this.props.opportunityTitle })
            })
          )
        )
      );
    }
  }]);

  Opportunity.displayName = 'Opportunity'
  ;
  return Opportunity;
}(_react.Component), _class.propTypes = {
  id: _propTypes.string.isRequired,
  dueAt: _propTypes.string.isRequired,
  points: _propTypes.number,
  courseName: _propTypes.string.isRequired,
  opportunityTitle: _propTypes.string.isRequired,
  timeZone: _propTypes.string.isRequired,
  url: _propTypes.string.isRequired,
  dismiss: _propTypes.func.isRequired,
  plannerOverride: _propTypes.object,
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  animatableIndex: _propTypes.number
}, _class.defaultProps = {
  registerAnimatable: function registerAnimatable() {},
  deregisterAnimatable: function deregisterAnimatable() {}
}, _temp);
exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(Opportunity));