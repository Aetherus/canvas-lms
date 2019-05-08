'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GradesDisplay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
                    * Copyright (C) 2018 - present Instructure, Inc.
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

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _propTypes = require('prop-types');

var _plannerPropTypes = require('../plannerPropTypes');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _ErrorAlert = require('../ErrorAlert');

var _ErrorAlert2 = _interopRequireDefault(_ErrorAlert);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Heading = require('@instructure/ui-elements/lib/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Link = require('@instructure/ui-elements/lib/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Spinner = require('@instructure/ui-elements/lib/components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._38PQMEBxyVEeJlPIQAFnFl {\n  border-bottom-color: ' + theme.courseColor + '\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'course': '_38PQMEBxyVEeJlPIQAFnFl'
};
var GradesDisplay = exports.GradesDisplay = (_temp = _class = function (_React$Component) {
  _inherits(GradesDisplay, _React$Component);

  function GradesDisplay() {
    _classCallCheck(this, GradesDisplay);

    return _possibleConstructorReturn(this, (GradesDisplay.__proto__ || Object.getPrototypeOf(GradesDisplay)).apply(this, arguments));
  }

  _createClass(GradesDisplay, [{
    key: 'scoreString',
    value: function scoreString(score) {
      var fixedScore = parseFloat(score);
      if (isNaN(fixedScore)) return (0, _formatMessage2.default)('No Grade');
      return fixedScore.toFixed(2) + '%';
    }
  }, {
    key: 'renderSpinner',
    value: function renderSpinner() {
      return _react2.default.createElement(
        _View2.default,
        {
          as: 'div',
          textAlign: 'center',
          margin: '0 0 large 0'
        },
        _react2.default.createElement(_Spinner2.default, {
          title: (0, _formatMessage2.default)("Grades are loading"),
          size: 'small'
        })
      );
    }
  }, {
    key: 'renderCaveat',
    value: function renderCaveat() {
      if (this.props.loading) return;
      if (this.props.courses.some(function (course) {
        return course.hasGradingPeriods;
      })) {
        return _react2.default.createElement(
          _View2.default,
          { as: 'div', textAlign: 'center' },
          _react2.default.createElement(
            _Text2.default,
            { size: 'x-small', fontStyle: 'italic' },
            (0, _formatMessage2.default)('*Only most recent grading period shown.')
          )
        );
      }
    }
  }, {
    key: 'renderGrades',
    value: function renderGrades() {
      var _this2 = this;

      if (this.props.loadingError) return;
      return this.props.courses.map(function (course) {
        var courseNameStyles = {
          borderBottom: 'solid thin',
          borderBottomColor: course.color
        };

        return _react2.default.createElement(
          _View2.default,
          { key: course.id, as: 'div',
            margin: '0 0 large 0'
          },
          _react2.default.createElement(
            'div',
            { className: styles.course, style: courseNameStyles },
            _react2.default.createElement(
              _Link2.default,
              { href: course.href },
              _react2.default.createElement(
                _Text2.default,
                { color: 'primary', size: 'small', transform: 'uppercase' },
                course.shortName
              )
            )
          ),
          _react2.default.createElement(
            _Text2.default,
            { as: 'div', size: 'large', weight: 'light' },
            _this2.scoreString(course.score)
          )
        );
      });
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      if (this.props.loadingError) {
        return _react2.default.createElement(
          _ErrorAlert2.default,
          { error: this.props.loadingError },
          (0, _formatMessage2.default)('Error loading grades')
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _View2.default,
        null,
        this.renderError(),
        _react2.default.createElement(
          _View2.default,
          { textAlign: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { level: 'h2', margin: '0 0 large 0' },
            _react2.default.createElement(
              _Text2.default,
              { size: 'medium', weight: 'bold' },
              (0, _formatMessage2.default)('My Grades')
            )
          )
        ),
        this.props.loading ? this.renderSpinner() : this.renderGrades(),
        this.renderCaveat()
      );
    }
  }]);

  GradesDisplay.displayName = 'GradesDisplay'
  ;
  return GradesDisplay;
}(_react2.default.Component), _class.propTypes = {
  loading: _propTypes.bool,
  loadingError: _propTypes.string,
  courses: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_plannerPropTypes.courseShape)).isRequired
}, _class.defaultProps = {
  loading: false
}, _temp);
exports.default = (0, _lib2.default)(_theme2.default, styles)(GradesDisplay);