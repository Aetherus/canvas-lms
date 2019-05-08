'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Watches for changes in the match state of a media-query
var MediaQueryWatcher = function () {
  function MediaQueryWatcher() {
    _classCallCheck(this, MediaQueryWatcher);

    this.size = 'large';
    this.interestedParties = [];
  }

  _createClass(MediaQueryWatcher, [{
    key: 'setup',


    // initialize the mediaQueryList with our media-query of interest
    value: function setup() {
      var _this = this;

      if (!window.matchMedia) return; // or unit tests fail
      this.mediaQueryList = window.matchMedia('(max-width: 56em)'); // ==896px. hard-code query for now
      this.size = this.mediaQueryList.matches ? 'medium' : 'large';

      // some browsers support mediaQueryList.onchange. Use it if we can
      if ('onchange' in this.mediaQueryList) {
        this.mediaQueryList.onchange = function (event) {
          _this.onChangeSize(event);
        };
      } else {
        // add a window.resize event handler. When the user stops
        // resizing for 100ms, check the state of the mediaQueryList's
        // match state.
        this.handleResize = function () {
          window.clearTimeout(_this.resizeTimer);
          _this.resizeTimer = window.setTimeout(function () {
            _this.resizeTimer = 0;
            _this.onChangeSize(_this.mediaQueryList);
          }, 100);
        };
        this.elementResizeListener = window.addEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'teardown',
    value: function teardown() {
      if ('onchange' in this.mediaQueryList) {
        this.mediaQueryList.onchange = null;
      } else {
        window.clearTimeout(this.resizeTimer);
        window.removeEventListener('resize', this.handleResize);
      }
    }
    // add a component that's interested in being notified when the media-query
    // match state changes

  }, {
    key: 'add',
    value: function add(interestedParty) {
      if (!this.mediaQueryList) {
        this.setup();
      }
      this.interestedParties.push(interestedParty);
      return this.size;
    }
    // remove a component that's no longer interested

  }, {
    key: 'remove',
    value: function remove(interestedParty) {
      var i = this.interestedParties.indexOf(interestedParty);
      this.interestedParties.splice(i, 1);
      if (this.mediaQueryList && this.interestedParties.length === 0) {
        this.teardown();
        this.mediaQueryList = null;
      }
    }
    // tell everyone that's interested something has changed

  }, {
    key: 'notifyAll',
    value: function notifyAll() {
      var _this2 = this;

      this.interestedParties.forEach(function (g) {
        g.onChangeSize({ size: _this2.size });
      });
    }
    // we just noticed a change in media-query match state

  }, {
    key: 'onChangeSize',
    value: function onChangeSize(event) {
      var newSize = event.matches ? 'medium' : 'large';
      if (newSize !== this.size) {
        this.size = newSize;
        this.notifyAll();
      }
    }
  }]);

  return MediaQueryWatcher;
}();

// take any react component have it respond to media query state
// e.g.  const ResponsiveFoo = responsiviser()(Foo)
// The media query is currently hard-coded to deal with medium v. large
// rendering of Grouping, but could be extended to have a map of
// MediaQueryWatchers for each one. We'll add that complication if it
// ever becomes necessary.
// This has the advantage over instui Responsive in that it only requires
// one listener and has interested parties register to be notified of
// a change in state.


function responsiviser() {
  return function (ComposedComponent) {
    var _class2, _temp;

    var ResponsiveComponent = (_temp = _class2 = function (_React$Component) {
      _inherits(ResponsiveComponent, _React$Component);

      _createClass(ResponsiveComponent, null, [{
        key: 'name',
        value: function name() {
          return 'Responsive' + ComposedComponent.displayName;
        }
      }]);

      function ResponsiveComponent(props) {
        _classCallCheck(this, ResponsiveComponent);

        var _this3 = _possibleConstructorReturn(this, (ResponsiveComponent.__proto__ || Object.getPrototypeOf(ResponsiveComponent)).call(this, props));

        var size = responsiviser.mqwatcher.add(_this3);
        _this3.state = {
          size: size
        };
        return _this3;
      }

      _createClass(ResponsiveComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          responsiviser.mqwatcher.remove(this);
        }
      }, {
        key: 'onChangeSize',
        value: function onChangeSize(event) {
          this.setState({ size: event.size });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, Object.assign({}, this.props, { responsiveSize: this.state.size }));
        }
      }]);

      ResponsiveComponent.displayName = 'ResponsiveComponent'
      ;
      return ResponsiveComponent;
    }(_react2.default.Component), _class2.propTypes = Object.assign({}, ComposedComponent.propTypes), _class2.defaultProps = ComposedComponent.defaultProps ? Object.assign({}, ComposedComponent.defaultProps) : null, _temp);

    ResponsiveComponent.displayName = ResponsiveComponent.name();
    return ResponsiveComponent;
  };
}
responsiviser.mqwatcher = new MediaQueryWatcher(); // create the one and only one (for now)


exports.default = responsiviser;