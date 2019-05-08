'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyDays = undefined;

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

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('@instructure/ui-themeable/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Heading = require('@instructure/ui-elements/lib/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _propTypes = require('prop-types');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _dateUtils = require('../../utilities/dateUtils');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._1B338NhmQjJo5_5LoRKVC3 {\n  position: relative;\n\n  font-size: ' + theme.fontSize + ';\n  font-family: ' + theme.fontFamily + ';\n  font-weight: ' + theme.fontWeight + ';\n  line-height: ' + theme.lineHeight + ';\n\n  color: ' + theme.color + ';\n  background: ' + theme.background + ';\n\n  margin-top: ' + theme.marginTop + ';\n  border-bottom-width: ' + theme.borderWidth + ';\n  border-bottom-style: solid;\n}\n\n._3-0yMyRk6BbwZYQojV0zFS {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction:column;\n  justify-content: center;\n  align-items: center;\n}\n\n._2m6cBvC1Dk_bif9w77oELC {\n  padding-top: ' + theme.paddingWidth + ';\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_1B338NhmQjJo5_5LoRKVC3',
  'nothingPlannedContainer': '_3-0yMyRk6BbwZYQojV0zFS',
  'nothingPlanned': '_2m6cBvC1Dk_bif9w77oELC'
};

var GroupedDates = function GroupedDates(props) {
  return _react2.default.createElement(
    'svg',
    Object.assign({
      viewBox: '0 0 907 155',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink'
    }, props),
    _react2.default.createElement(
      'title',
      null,
      'Nothing Planned'
    ),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'a',
        d: 'M0 155h906.934V.53H0z'
      }),
      _react2.default.createElement('path', {
        id: 'c',
        d: 'M0 20.299V.389h60.079V20.3z'
      })
    ),
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M555.847.977s12.627 2.763 15.348 17.622c0 0 8.79-8.81 22.937-5.71M586.655 30.033s9.718.942 13.089 11.843c0 0 5.805-7.394 16.692-6.335M524.082 9.733s9.763.14 14.02 10.726c0 0 5.175-7.847 16.114-7.688',
        stroke: '#231F20',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#67C1F0',
        d: 'M175.898 126.104h42.195l-21.097-62.596z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M175.898 126.104h42.195l-21.097-62.596z'
      }),
      _react2.default.createElement('path', {
        d: 'M196.996 82.564v70.691M206.372 110.49l-9.376 8.512',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#67C1F0',
        d: 'M254.73 136.103h42.195l-21.097-84.88z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M254.73 136.103h42.195l-21.097-84.88z'
      }),
      _react2.default.createElement('path', {
        d: 'M275.828 80.54v72.716M283.641 118.203l-7.813 5.158M263.3 101.624l12.527 13.59',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        stroke: '#C0C6CB',
        strokeWidth: '2',
        d: 'M583.588 153.028L723.433 15.083l56.422 54.285'
      }),
      _react2.default.createElement('path', {
        stroke: '#C0C6CB',
        strokeWidth: '2',
        d: 'M685.627 152.88l129.11-116.62 52.09 45.893'
      }),
      _react2.default.createElement('path', {
        fill: '#9BE1A4',
        d: 'M857.589 113.192h48.093L881.636 7.272z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M857.589 113.192h48.093L881.636 7.272z'
      }),
      _react2.default.createElement('path', {
        d: 'M881.635 41.305V153.81M872.082 82.37l8.596 8.143M890.053 60.063l-8.418 11.507',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#67C1F0',
        d: 'M827.092 126.14h42.196L848.19 63.545z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M827.092 126.14h42.196L848.19 63.545z'
      }),
      _react2.default.createElement('path', {
        d: 'M848.19 82.601v70.69M857.567 110.527l-9.377 8.512',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(0 -.53)'
        },
        _react2.default.createElement('path', {
          d: 'M889.994 146.914c0 4.212-3.431 7.642-7.65 7.642h-16.02v-.782h16.02a6.86 6.86 0 0 0 6.868-6.86 6.862 6.862 0 0 0-7.65-6.82 6.335 6.335 0 0 0-.226-.759c.336-.047.672-.07 1.008-.07 4.219 0 7.65 3.43 7.65 7.65z',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M882.343 140.046a6.862 6.862 0 0 1 6.869 6.868 6.86 6.86 0 0 1-6.869 6.861h-16.019l.095-.782h15.924c3.36 0 6.088-2.726 6.088-6.079a6.09 6.09 0 0 0-6.713-6.056 6.4 6.4 0 0 0-.155-.765 6.5 6.5 0 0 1 .78-.047',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M881.562 140.093c.07.25.117.508.156.766-.25.031-.5.07-.742.125l-.094-.39-.086-.376c.25-.055.508-.102.766-.125',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M881.531 144.391c.195-.72.289-1.47.289-2.22 0-.445-.031-.883-.102-1.312a6.088 6.088 0 0 1 6.712 6.055 6.087 6.087 0 0 1-6.087 6.08h-15.924l.015-.172 10.424-9.151 3.915.517h.008l.75.203z',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M881.562 140.093c-.258.023-.516.07-.766.125l-.17-.758c.233-.054.475-.1.71-.125.093.25.164.5.226.758',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M881.718 140.859c.07.43.103.867.103 1.312 0 .75-.095 1.5-.29 2.22l-.75-.203a7.836 7.836 0 0 0 .258-2.017c0-.54-.054-1.07-.156-1.578l.093.39c.242-.054.492-.093.742-.124',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M880.883 140.593a8.035 8.035 0 0 1-.102 3.595h-.007l-.75-.204a7.105 7.105 0 0 0 .101-3.18l.664-.578c.039.117.063.242.094.367',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M880.789 140.218h.008l.086.375c-.032-.125-.055-.25-.094-.367v-.008zM880.773 144.188l-3.915-.517 3.267-2.867a7.12 7.12 0 0 1-.102 3.18l.75.204zM873.193 135.1c3.423 0 6.291 2.453 6.932 5.704l-3.267 2.867-9.689-1.265a6.064 6.064 0 0 0-1.032-.578c.18-3.744 3.275-6.728 7.056-6.728',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M876.858 143.671l-10.424 9.15 1.07-9.134.547-.555a6.008 6.008 0 0 0-.882-.727l9.69 1.266z',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M880.625 139.46l.172.758h-.008a7.833 7.833 0 0 0-7.596-5.9c-4.117 0-7.493 3.172-7.821 7.212a6.48 6.48 0 0 0-.766-.187c.415-4.368 4.11-7.806 8.587-7.806 3.767 0 6.979 2.43 8.143 5.798-.234.023-.477.07-.711.125',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M873.193 135.1c-3.78 0-6.876 2.984-7.056 6.728a4.814 4.814 0 0 0-.765-.297c.328-4.04 3.704-7.212 7.821-7.212a7.834 7.834 0 0 1 7.596 5.899v.008l-.664.578c-.64-3.251-3.509-5.704-6.932-5.704',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          d: 'M867.505 143.687l-1.07 9.135-.196.172h-2.86a5.11 5.11 0 0 1-5.102-5.103 5.11 5.11 0 0 1 5.103-5.102 5.08 5.08 0 0 1 3.578 1.454l.547-.556z',
          fill: '#9BE1A4'
        }),
        _react2.default.createElement('path', {
          d: 'M867.169 142.406l-1.82-.234h.78c0-.118 0-.235.009-.344.359.156.703.35 1.03.578',
          fill: '#231F20'
        }),
        _react2.default.createElement('path', {
          fill: '#9BE1A4',
          d: 'M866.434 152.822l-.016.172h-.179z'
        }),
        _react2.default.createElement('path', {
          fill: '#231F20',
          d: 'M866.419 152.994l-.094.78v-.78z'
        }),
        _react2.default.createElement(
          'mask',
          {
            id: 'b',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#a'
          })
        ),
        _react2.default.createElement('path', {
          fill: '#231F20',
          mask: 'url(#b)',
          d: 'M865.348 154.556h.977v-.781h-.977zM866.325 152.994v.78h-.977l.891-.78z'
        }),
        _react2.default.createElement('path', {
          fill: '#231F20',
          mask: 'url(#b)',
          d: 'M866.239 152.994l-.891.78v-.78zM866.138 141.827c-.009.11-.009.227-.009.345h-.78c0-.22.007-.43.022-.642.259.078.517.172.767.297'
        }),
        _react2.default.createElement('path', {
          d: 'M865.372 141.53a8.428 8.428 0 0 0-.023.642h-.602c-.062-.024-.117-.032-.18-.047 0-.266.016-.524.039-.781.258.046.516.109.766.187',
          fill: '#231F20',
          mask: 'url(#b)'
        }),
        _react2.default.createElement('path', {
          d: 'M865.348 142.171l1.82.234c.313.211.61.453.883.727l-.547.555a5.811 5.811 0 0 0-2.758-1.516h.602zM864.747 142.171h-.18v-.047c.063.016.118.024.18.047',
          fill: '#231F20',
          mask: 'url(#b)'
        }),
        _react2.default.createElement('path', {
          d: 'M864.567 142.171h.18a5.816 5.816 0 0 1 2.758 1.516l-.547.555a5.085 5.085 0 0 0-3.578-1.454 5.11 5.11 0 0 0-5.103 5.103 5.108 5.108 0 0 0 5.103 5.102h1.968v.782h-1.96a5.89 5.89 0 0 1-5.893-5.884 5.89 5.89 0 0 1 5.892-5.884c.407 0 .797.04 1.18.117v.047z',
          fill: '#231F20',
          mask: 'url(#b)'
        }),
        _react2.default.createElement('path', {
          d: 'M863.38 154.556a6.671 6.671 0 0 1-6.666-6.665c0-3.672 2.993-6.665 6.666-6.665.414 0 .828.039 1.227.117-.024.258-.04.516-.04.781a5.864 5.864 0 0 0-1.18-.117c-3.25 0-5.892 2.634-5.892 5.884a5.89 5.89 0 0 0 5.893 5.884h1.96v.781h-1.968z',
          fill: '#231F20',
          mask: 'url(#b)'
        })
      ),
      _react2.default.createElement('path', {
        stroke: '#C0C6CB',
        strokeWidth: '2',
        d: 'M681.72 56.228l21.53 9.872 17.28-9.872 25.697 7.422 19.97-7.422M797.635 51.707l24.215 6.618 8.334-6.618'
      }),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(0 70.47)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'd',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#c'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M50.582 20.299H9.498C4.274 20.299 0 16.025 0 10.8v-.914C0 4.664 4.274.39 9.498.39h41.084c5.224 0 9.497 4.274 9.497 9.497v.914c0 5.224-4.273 9.498-9.497 9.498',
          fill: '#E5E7E9',
          mask: 'url(#d)'
        })
      ),
      _react2.default.createElement('path', {
        d: 'M48.657 67.596c-.886 0-1.749.101-2.577.292v.014c-1.438-5.648-6.556-9.825-12.651-9.825-7.209 0-13.053 5.844-13.053 13.054l3.586 2.524a9.756 9.756 0 0 0-6.85-2.796c-5.407 0-9.79 4.383-9.79 9.79 0 5.407 4.383 9.791 9.79 9.791h31.545c6.309 0 11.422-5.114 11.422-11.422 0-6.308-5.113-11.422-11.422-11.422',
        fill: '#E5E7E9'
      }),
      _react2.default.createElement('path', {
        d: 'M39.017 77.802c0 6.98 5.658 12.638 12.638 12.638 6.98 0 12.637-5.658 12.637-12.638 0-6.98-5.658-12.638-12.637-12.638-6.98 0-12.638 5.659-12.638 12.638',
        fill: '#E5E7E9'
      }),
      _react2.default.createElement('path', {
        fill: '#9BE1A4',
        d: 'M49.312 112.638h42.195L70.41 27.757z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M49.312 112.638h42.195L70.41 27.757z'
      }),
      _react2.default.createElement('path', {
        d: 'M78.223 94.737l-7.813 5.159M57.883 78.158l12.526 13.59',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M191.11 22.787c0-11.456 9.287-20.743 20.743-20.743 11.457 0 20.744 9.287 20.744 20.743 0 1.845-.24 3.633-.693 5.335M196.81 26.797a15.506 15.506 0 0 0-10.886-4.442c-8.592 0-15.557 6.965-15.557 15.558s6.965 15.558 15.557 15.558h50.128',
        stroke: '#C0C6CB',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M231.957 17.634a18.244 18.244 0 0 1 4.096-.465c10.024 0 18.15 8.128 18.15 18.152 0 10.023-8.126 18.15-18.15 18.15h-5.186',
        stroke: '#C0C6CB',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#9BE1A4',
        d: 'M148.903 112.638h48.093L172.949 6.718z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M148.903 112.638h48.093L172.949 6.718z'
      }),
      _react2.default.createElement('path', {
        d: 'M172.949 40.75v112.506M70 55v99M161.052 81.817l8.596 8.142M181.368 59.509l-8.42 11.507',
        stroke: '#0E1D25',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#FDBD99',
        d: 'M69.629 126.292l-10.331 2.735 4.067 2.735z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M69.629 126.292l-10.331 2.735 4.067 2.735z'
      }),
      _react2.default.createElement('path', {
        fill: '#FDBD99',
        d: 'M172.949 128.448l2.949 9.772 3.516-4.114z'
      }),
      _react2.default.createElement('path', {
        stroke: '#231F20',
        strokeWidth: '2',
        d: 'M172.949 128.448l2.949 9.772 3.516-4.114z'
      }),
      _react2.default.createElement('path', {
        d: 'M155.5 130.98a6.355 6.355 0 1 1-12.71 0 6.355 6.355 0 0 1 12.71 0',
        fill: '#C0C6CB'
      }),
      _react2.default.createElement('path', {
        d: 'M155.5 130.98a6.355 6.355 0 1 1-12.71 0 6.355 6.355 0 0 1 12.71 0z',
        stroke: '#C0C6CB',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M72.962 125.51s16.2 19.926 44.332 20.708c28.13.782 52.319-18.935 52.319-18.935s-41.38 8.006-51.538 7.22c-10.158-.787-45.113-8.992-45.113-8.992',
        fill: '#FDBD99'
      }),
      _react2.default.createElement('path', {
        d: 'M72.962 125.51s16.2 19.926 44.332 20.708c28.13.782 52.319-18.935 52.319-18.935s-41.38 8.006-51.538 7.22c-10.158-.787-45.113-8.992-45.113-8.992z',
        stroke: '#231F20',
        strokeWidth: '2'
      })
    )
  );
};

var EmptyDays = exports.EmptyDays = (_temp = _class = function (_Component) {
  _inherits(EmptyDays, _Component);

  function EmptyDays() {
    _classCallCheck(this, EmptyDays);

    return _possibleConstructorReturn(this, (EmptyDays.__proto__ || Object.getPrototypeOf(EmptyDays)).apply(this, arguments));
  }

  _createClass(EmptyDays, [{
    key: 'renderDate',
    value: function renderDate(start, end) {
      var dateString = void 0;
      dateString = (0, _formatMessage2.default)('{startDate} to {endDate}', {
        startDate: (0, _dateUtils.getShortDate)(start),
        endDate: (0, _dateUtils.getShortDate)(end)
      });
      return _react2.default.createElement(
        _Text2.default,
        { as: 'div', lineHeight: 'condensed' },
        dateString
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var now = _momentTimezone2.default.tz(this.props.timeZone);
      var start = _momentTimezone2.default.tz(this.props.day, this.props.timeZone).startOf('day');
      var end = _momentTimezone2.default.tz(this.props.endday, this.props.timeZone).endOf('day');
      var includesToday = (now.isSame(start, 'day') || now.isAfter(start, 'day')) && (now.isSame(end, 'day') || now.isBefore(end, 'day'));

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.root, 'planner-empty-days', { 'planner-today': includesToday }) },
        _react2.default.createElement(
          _Heading2.default,
          { border: 'bottom' },
          this.renderDate(start, end)
        ),
        _react2.default.createElement(
          _View2.default,
          { as: 'div', padding: 'small 0 0 0' },
          _react2.default.createElement(GroupedDates, { role: 'img', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'div',
            { className: styles.nothingPlannedContainer },
            _react2.default.createElement(
              'div',
              { className: styles.nothingPlanned },
              _react2.default.createElement(
                _Text2.default,
                { size: 'large' },
                (0, _formatMessage2.default)('Nothing Planned Yet')
              )
            )
          )
        )
      );
    }
  }]);

  EmptyDays.displayName = 'EmptyDays'
  ;
  return EmptyDays;
}(_react.Component), _class.propTypes = {
  day: _propTypes.string.isRequired,
  endday: _propTypes.string.isRequired,
  timeZone: _propTypes.string.isRequired
}, _temp);
exports.default = (0, _lib2.default)(_theme2.default, styles)(EmptyDays);