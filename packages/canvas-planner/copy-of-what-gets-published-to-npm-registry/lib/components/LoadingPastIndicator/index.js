'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Spinner = require('@instructure/ui-elements/lib/components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Text = require('@instructure/ui-elements/lib/components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _ErrorAlert = require('../ErrorAlert');

var _ErrorAlert2 = _interopRequireDefault(_ErrorAlert);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TV = function TV(props) {
  return _react2.default.createElement(
    'svg',
    Object.assign({
      width: '174',
      height: '157',
      viewBox: '0 0 174 157',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink'
    }, props),
    _react2.default.createElement(
      'title',
      null,
      'Group'
    ),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        d: 'M22.825.626c-5.66.289-11.32.656-16.981 1.101-1.655.131-3.16 1.588-3.347 3.242a360.003 360.003 0 0 0-1.313 65.64h21.64V.626z',
        id: 'a'
      }),
      _react2.default.createElement('path', {
        d: 'M1.184 70.61A360.003 360.003 0 0 1 2.497 4.968c.187-1.654 1.692-3.111 3.347-3.242 5.66-.445 11.32-.812 16.98-1.101v69.983H1.185z',
        id: 'c'
      }),
      _react2.default.createElement('path', {
        d: 'M21.825 20.315c-5.66-.29-11.32-.657-16.981-1.102-1.655-.132-3.16-1.588-3.347-3.243A363.483 363.483 0 0 1 .13.843h21.695v19.472z',
        id: 'e'
      }),
      _react2.default.createElement('path', {
        d: 'M.13.843C.48 5.885.935 10.928 1.497 15.97c.187 1.655 1.692 3.111 3.347 3.243 5.66.445 11.32.812 16.981 1.102V.843H.13z',
        id: 'g'
      }),
      _react2.default.createElement('path', {
        d: 'M.322 1.704A618.04 618.04 0 0 1 22.923.908v71.083H.323V1.704z',
        id: 'i'
      }),
      _react2.default.createElement('path', {
        d: 'M22.923.908a618.04 618.04 0 0 0-22.6.796v70.287h22.6V.908z',
        id: 'k'
      }),
      _react2.default.createElement('path', {
        d: 'M22.923 20.032A617.82 617.82 0 0 1 .8 19.262V.609h22.122v19.423z',
        id: 'm'
      }),
      _react2.default.createElement('path', {
        d: 'M.8 19.262c7.375.389 14.749.646 22.123.77V.61H.8v18.653z',
        id: 'o'
      }),
      _react2.default.createElement('path', {
        d: 'M.427.917A616.582 616.582 0 0 1 22.529.92v71.117H.427V.917z',
        id: 'q'
      }),
      _react2.default.createElement('path', {
        d: 'M22.53.921A616.644 616.644 0 0 0 .426.917v71.12h22.102V.922z',
        id: 's'
      }),
      _react2.default.createElement('path', {
        d: 'M22.367 20.022c-7.26.13-14.522.131-21.783.004V.99h21.784v19.033z',
        id: 'u'
      }),
      _react2.default.createElement('path', {
        d: 'M.585 20.026c7.26.127 14.521.126 21.783-.004V.989H.584v19.037z',
        id: 'w'
      }),
      _react2.default.createElement('path', {
        d: 'M.764.908a618.06 618.06 0 0 1 22.6.796v70.287H.765V.908z',
        id: 'y'
      }),
      _react2.default.createElement('path', {
        d: 'M23.365 1.704A618.078 618.078 0 0 0 .764.908v71.083h22.6V1.704z',
        id: 'A'
      }),
      _react2.default.createElement('path', {
        d: 'M22.885 19.262c-7.374.389-14.748.646-22.122.77V.61h22.122v18.653z',
        id: 'C'
      }),
      _react2.default.createElement('path', {
        d: 'M.763 20.032a617.846 617.846 0 0 0 22.122-.77V.609H.763v19.423z',
        id: 'E'
      }),
      _react2.default.createElement('path', {
        d: 'M.862.626c5.66.289 11.321.656 16.982 1.101 1.654.131 3.16 1.588 3.346 3.242a360.003 360.003 0 0 1 1.313 65.64H.862V.627z',
        id: 'G'
      }),
      _react2.default.createElement('path', {
        d: 'M22.503 70.61A360.003 360.003 0 0 0 21.19 4.969c-.186-1.654-1.692-3.111-3.346-3.242A621.172 621.172 0 0 0 .862.626V70.61h21.64z',
        id: 'I'
      }),
      _react2.default.createElement('path', {
        d: 'M22.557.843A363.483 363.483 0 0 1 21.19 15.97c-.186 1.655-1.692 3.111-3.346 3.243A620.62 620.62 0 0 1 .862 20.315V.843h21.695z',
        id: 'K'
      }),
      _react2.default.createElement('path', {
        d: 'M.862 20.315a620.62 620.62 0 0 0 16.982-1.102c1.654-.132 3.16-1.588 3.346-3.243A363.483 363.483 0 0 0 22.557.843H.862v19.472z',
        id: 'M'
      })
    ),
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M45.69 4.085l99.153 26.003',
        stroke: '#798792',
        strokeWidth: '2',
        strokeLinecap: 'round'
      }),
      _react2.default.createElement('path', {
        d: 'M44.842 8.137a4.136 4.136 0 1 1 2.099-8 4.136 4.136 0 0 1-2.1 8z',
        fill: '#798792'
      }),
      _react2.default.createElement('path', {
        d: 'M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039',
        fill: '#C0C6CB'
      }),
      _react2.default.createElement('path', {
        d: 'M158.684 41.088c0 13.276-10.763 24.039-24.04 24.039-13.275 0-24.038-10.763-24.038-24.04 0-13.275 10.763-24.038 24.039-24.038 13.276 0 24.039 10.763 24.039 24.039z',
        stroke: '#798792',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#C0C6CB',
        d: 'M14.448 155.088h144.396v-21H14.448z'
      }),
      _react2.default.createElement('path', {
        stroke: '#798792',
        strokeWidth: '2',
        d: 'M14.448 155.088h144.396v-21H14.448z'
      }),
      _react2.default.createElement('path', {
        d: 'M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264',
        fill: '#F4F5F6'
      }),
      _react2.default.createElement('path', {
        d: 'M164.844 143.351a1209.137 1209.137 0 0 1-155 0c-2.206-.144-4.266-2.057-4.571-4.264-4.672-34-4.672-68 0-102 .305-2.207 2.365-4.119 4.57-4.263a1208.773 1208.773 0 0 1 155 0c2.206.143 4.266 2.056 4.572 4.263 4.672 34 4.672 68 0 102-.306 2.207-2.365 4.12-4.571 4.264z',
        stroke: '#778690',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322',
        fill: '#F4F5F6'
      }),
      _react2.default.createElement('path', {
        d: 'M116.844 132.41a627.204 627.204 0 0 1-97 0c-2.205-.174-4.213-2.116-4.456-4.322a369.79 369.79 0 0 1 0-80c.243-2.206 2.25-4.149 4.456-4.323a627.453 627.453 0 0 1 97 0c2.205.174 4.212 2.118 4.455 4.323a369.79 369.79 0 0 1 0 80c-.243 2.206-2.25 4.148-4.455 4.322z',
        stroke: '#778690',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5',
        fill: '#75848F'
      }),
      _react2.default.createElement('path', {
        d: 'M162.844 63.588c0 8.008-6.492 14.5-14.5 14.5-8.01 0-14.5-6.492-14.5-14.5s6.49-14.5 14.5-14.5c8.008 0 14.5 6.492 14.5 14.5z',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0',
        fill: '#75848F'
      }),
      _react2.default.createElement('path', {
        d: 'M151.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0',
        fill: '#75848F'
      }),
      _react2.default.createElement('path', {
        d: 'M140.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0',
        fill: '#75848F'
      }),
      _react2.default.createElement('path', {
        d: 'M162.844 88.588a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-26.693-18.833l18.842-18.103m-13.299 23.871l18.841-18.103',
        stroke: '#3F5463',
        strokeWidth: '2'
      }),
      _react2.default.createElement('path', {
        d: 'M133.844 100.328h29m-29 5h29m-29 5h29m-29 5h29',
        stroke: '#3F5463',
        strokeWidth: '2',
        strokeLinecap: 'round'
      }),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(14 43.118)'
        },
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
          d: 'M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61',
          fill: '#95D4F5',
          mask: 'url(#b)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(14 43.118)'
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
          d: 'M21.8 70.61a1227.73 1227.73 0 0 1-21.782-.768A388.062 388.062 0 0 1 1.728.888 657.433 657.433 0 0 1 22.826-.47 687.486 687.486 0 0 0 21.8 70.61z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#d)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(15 112.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'f',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#e'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8',
          fill: '#E8ACDD',
          mask: 'url(#f)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(15 112.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'h',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#g'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.825 21.41A660.962 660.962 0 0 1 .728 20.051 390.33 390.33 0 0 1-.982.843c7.26.32 14.522.575 21.783.766.246 6.6.587 13.2 1.024 19.8z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#h)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(35 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'j',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#i'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14',
          fill: '#94E09E',
          mask: 'url(#j)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(35 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'l',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#k'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.585 71.991c-7.262-.063-14.522-.19-21.784-.382A687.486 687.486 0 0 1 1.825.53C8.856.19 15.89-.035 22.923-.148a2139.173 2139.173 0 0 0-.338 72.14z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#l)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(35 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'n',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#m'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096',
          fill: '#FEC19B',
          mask: 'url(#n)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(35 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'p',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#o'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.923 21.087a651.911 651.911 0 0 1-21.098-.678c-.436-6.6-.778-13.2-1.024-19.8C8.063.8 15.323.928 22.585.99c.08 6.699.194 13.398.338 20.096z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#p)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(57 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'r',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#q'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132',
          fill: '#F9979A',
          mask: 'url(#r)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(57 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 't',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#s'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.367 71.99c-7.26.063-14.52.064-21.782.001C.292 47.945.405 23.9.923-.148c7.032-.112 14.064-.11 21.097.005.531 24.044.646 48.088.347 72.132z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#t)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(57 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'v',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#u'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094',
          fill: '#95D4F5',
          mask: 'url(#v)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(57 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'x',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#w'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.02 21.083a656.57 656.57 0 0 1-21.098.004A2244.57 2244.57 0 0 1 .584.991c7.261.064 14.523.063 21.784-.002-.084 6.698-.2 13.396-.348 20.094z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#x)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(78 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'z',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#y'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08',
          fill: '#FEC19B',
          mask: 'url(#z)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(78 42.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'B',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#A'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M22.886 71.61c-7.261.19-14.521.317-21.783.381.292-24.046.179-48.092-.34-72.139 7.034.112 14.067.338 21.1.678a687.766 687.766 0 0 1 1.023 71.08z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#B)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(78 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'D',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#C'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8',
          fill: '#F9979A',
          mask: 'url(#D)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(78 113.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'F',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#E'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.862 20.41c-7.032.34-14.065.564-21.099.677.145-6.699.258-13.398.34-20.096C8.363.928 15.624.801 22.884.61c-.245 6.6-.586 13.2-1.023 19.8z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#F)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(99 43.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'H',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#G'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954',
          fill: '#E8ACDD',
          mask: 'url(#H)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(99 43.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'J',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#I'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M23.67 69.843c-7.261.319-14.522.575-21.784.767A686.946 686.946 0 0 0 .862-.47C7.895-.131 14.926.322 21.959.889a388.06 388.06 0 0 1 1.71 68.954z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#J)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(99 112.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'L',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#K'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209',
          fill: '#94E09E',
          mask: 'url(#L)'
        })
      ),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(99 112.118)'
        },
        _react2.default.createElement(
          'mask',
          {
            id: 'N',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#M'
          })
        ),
        _react2.default.createElement('path', {
          d: 'M21.959 20.052A657.303 657.303 0 0 1 .862 21.409c.437-6.6.779-13.2 1.024-19.8A1247.86 1247.86 0 0 0 23.67.844a391.449 391.449 0 0 1-1.711 19.209z',
          stroke: '#6D7A82',
          strokeWidth: '2',
          strokeLinecap: 'round',
          mask: 'url(#N)'
        })
      )
    )
  );
};

var LoadingPastIndicator = (_temp = _class = function (_Component) {
  _inherits(LoadingPastIndicator, _Component);

  function LoadingPastIndicator() {
    _classCallCheck(this, LoadingPastIndicator);

    return _possibleConstructorReturn(this, (LoadingPastIndicator.__proto__ || Object.getPrototypeOf(LoadingPastIndicator)).apply(this, arguments));
  }

  _createClass(LoadingPastIndicator, [{
    key: 'renderError',


    // Don't try to animate this component here. If we want this to animate, it should be coordinated
    // with other animations in the dynamic ui manager.

    value: function renderError() {
      if (this.props.loadingError) {
        // Show an Alert for the user, while including the underlying root cause error
        // in a hidden div in case we need to know what it was
        return _react2.default.createElement(
          'div',
          { style: { width: '50%', margin: '0 auto' } },
          _react2.default.createElement(
            _ErrorAlert2.default,
            { error: this.props.loadingError },
            (0, _formatMessage2.default)('Error loading past items')
          )
        );
      }
    }
  }, {
    key: 'renderNoMore',
    value: function renderNoMore() {
      if (this.props.allPastItemsLoaded) {
        return _react2.default.createElement(
          _View2.default,
          { as: 'div', padding: 'small', textAlign: 'center' },
          _react2.default.createElement(
            _View2.default,
            { display: 'block', margin: 'small' },
            _react2.default.createElement(TV, { role: 'img', 'aria-hidden': 'true' })
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'large', as: 'div' },
            (0, _formatMessage2.default)('Beginning of Your To-Do History')
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'medium', as: 'div' },
            (0, _formatMessage2.default)('You\'ve scrolled back to your very first To-Do!')
          )
        );
      }
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      if (this.props.loadingPast && !this.props.allPastItemsLoaded) {
        return _react2.default.createElement(
          _View2.default,
          { as: 'div', padding: 'small', textAlign: 'center' },
          _react2.default.createElement(_Spinner2.default, { size: 'small', margin: '0 x-small 0 0', title: (0, _formatMessage2.default)('Loading past items') }),
          _react2.default.createElement(
            _Text2.default,
            { size: 'small', color: 'secondary' },
            (0, _formatMessage2.default)('Loading past items')
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(elt) {
            _this2.rootDiv = elt;
          } },
        this.renderError(),
        this.renderNoMore(),
        this.renderLoading()
      );
    }
  }]);

  LoadingPastIndicator.displayName = 'LoadingPastIndicator'
  ;
  return LoadingPastIndicator;
}(_react.Component), _class.propTypes = {
  loadingPast: _propTypes2.default.bool, // actively loading?
  allPastItemsLoaded: _propTypes2.default.bool, // there are no more?
  loadingError: _propTypes2.default.string // message if there was an error attempting to loaad items
}, _class.defaultProps = {
  loadingPast: false,
  allPastItemsLoaded: false,
  loadingError: undefined }, _temp);
exports.default = LoadingPastIndicator;