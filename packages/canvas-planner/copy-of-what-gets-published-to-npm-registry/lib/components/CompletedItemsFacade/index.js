'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompletedItemsFacade = undefined;

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

var _ToggleDetails = require('@instructure/ui-toggle-details/lib/components/ToggleDetails');

var _ToggleDetails2 = _interopRequireDefault(_ToggleDetails);

var _Pill = require('@instructure/ui-elements/lib/components/Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _BadgeList = require('../BadgeList');

var _BadgeList2 = _interopRequireDefault(_BadgeList);

var _NotificationBadge = require('../NotificationBadge');

var _NotificationBadge2 = _interopRequireDefault(_NotificationBadge);

var _propTypes = require('prop-types');

var _plannerPropTypes = require('../plannerPropTypes');

var _dynamicUi = require('../../dynamic-ui');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n._2OronMNUtz6SJGMGhkSZFg {\n  display: flex;\n  flex:1;\n  align-items: center;\n  font-family: ' + theme.fontFamily + ';\n  color: ' + theme.color + ';\n  box-sizing: border-box;\n  padding: ' + theme.padding + ';\n  border-bottom: ' + theme.borderWidth + ' solid ' + theme.borderColor + ';\n}\n\n._1hRrm3Q2t5HSpUPIQpRWZl {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n[dir="ltr"] ._1hRrm3Q2t5HSpUPIQpRWZl {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n[dir="rtl"] ._1hRrm3Q2t5HSpUPIQpRWZl {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n._3Fov3bBDTM5jnfQQWmNehM {\n  -webkit-margin-start: ' + theme.gutterWidth + ';\n          margin-inline-start: ' + theme.gutterWidth + ';\n}\n\n[dir="ltr"] ._3Fov3bBDTM5jnfQQWmNehM {\n  margin-left: ' + theme.gutterWidth + ';\n}\n\n[dir="rtl"] ._3Fov3bBDTM5jnfQQWmNehM {\n  margin-right: ' + theme.gutterWidth + ';\n}\n\n._3PrXm6s4X0ywWGVZWlnyby {\n  flex: 0 0 50%;\n  margin-bottom: 0;\n  -webkit-margin-start: ' + theme.gutterWidth + ';\n          margin-inline-start: ' + theme.gutterWidth + ';\n  box-sizing: border-box;\n  min-width: 1px;\n}\n\n[dir="ltr"] ._3PrXm6s4X0ywWGVZWlnyby {\n  margin-left: ' + theme.gutterWidth + ';\n}\n\n[dir="rtl"] ._3PrXm6s4X0ywWGVZWlnyby {\n  margin-right: ' + theme.gutterWidth + ';\n}\n\n.NLHQpvl2imL4w3NePd1gv {\n  flex: 1 0;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  min-width: 1px;\n  text-align: end;\n}\n\n[dir="ltr"] .NLHQpvl2imL4w3NePd1gv {\n  text-align: right;\n}\n\n[dir="rtl"] .NLHQpvl2imL4w3NePd1gv {\n  text-align: left;\n}\n\n._1hRrm3Q2t5HSpUPIQpRWZl + ._3PrXm6s4X0ywWGVZWlnyby {\n  -webkit-margin-start: calc(' + theme.gutterWidth + ' - ' + theme.buttonPadding + ' - ' + theme.activityIndicatorWidth + ');\n          margin-inline-start: calc(' + theme.gutterWidth + ' - ' + theme.buttonPadding + ' - ' + theme.activityIndicatorWidth + ');\n}\n\n[dir="ltr"] ._1hRrm3Q2t5HSpUPIQpRWZl + ._3PrXm6s4X0ywWGVZWlnyby {\n  margin-left: calc(' + theme.gutterWidth + ' - ' + theme.buttonPadding + ' - ' + theme.activityIndicatorWidth + ');\n}\n\n[dir="rtl"] ._1hRrm3Q2t5HSpUPIQpRWZl + ._3PrXm6s4X0ywWGVZWlnyby {\n  margin-right: calc(' + theme.gutterWidth + ' - ' + theme.buttonPadding + ' - ' + theme.activityIndicatorWidth + ');\n}\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_2OronMNUtz6SJGMGhkSZFg',
  'activityIndicator': '_1hRrm3Q2t5HSpUPIQpRWZl',
  'showLabel': '_3Fov3bBDTM5jnfQQWmNehM',
  'contentPrimary': '_3PrXm6s4X0ywWGVZWlnyby',
  'contentSecondary': 'NLHQpvl2imL4w3NePd1gv'
};
var CompletedItemsFacade = exports.CompletedItemsFacade = (_temp2 = _class = function (_Component) {
  _inherits(CompletedItemsFacade, _Component);

  function CompletedItemsFacade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CompletedItemsFacade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CompletedItemsFacade.__proto__ || Object.getPrototypeOf(CompletedItemsFacade)).call.apply(_ref, [this].concat(args))), _this), _this.getFocusable = function () {
      return _this.buttonRef;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CompletedItemsFacade, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerAnimatable('item', this, this.props.animatableIndex, this.props.animatableItemIds);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.props.deregisterAnimatable('item', this, this.props.animatableItemIds);
      this.props.registerAnimatable('item', this, newProps.animatableIndex, newProps.animatableItemIds);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('item', this, this.props.animatableItemIds);
    }
  }, {
    key: 'getScrollable',
    value: function getScrollable() {
      return this.rootDiv;
    }
  }, {
    key: 'renderBadges',
    value: function renderBadges() {
      if (this.props.badges.length) {
        return _react2.default.createElement(
          _BadgeList2.default,
          null,
          this.props.badges.map(function (b) {
            return _react2.default.createElement(_Pill2.default, {
              key: b.id,
              text: b.text,
              variant: b.variant });
          })
        );
      }
      return null;
    }
  }, {
    key: 'renderNotificationBadge',
    value: function renderNotificationBadge() {
      if (this.props.notificationBadge === 'none') return null;

      var isNewItem = this.props.notificationBadge === 'newActivity';
      var IndicatorComponent = isNewItem ? _NotificationBadge.NewActivityIndicator : _NotificationBadge.MissingIndicator;
      var badgeMessage = (0, _formatMessage2.default)('{items} completed {items, plural,=1 {item} other {items}}', { items: this.props.itemCount });
      return _react2.default.createElement(
        _NotificationBadge2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: styles.activityIndicator },
          _react2.default.createElement(IndicatorComponent, {
            title: badgeMessage,
            itemIds: this.props.animatableItemIds,
            animatableIndex: this.props.animatableIndex,
            getFocusable: this.getFocusable })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var theme = this.theme ? {
        textColor: this.theme.labelColor,
        iconColor: this.theme.labelColor,
        iconMargin: this.theme.gutterWidth
      } : null;
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles.root, 'planner-completed-items'), ref: function ref(elt) {
            return _this2.rootDiv = elt;
          } },
        this.renderNotificationBadge(),
        _react2.default.createElement(
          'div',
          { className: styles.contentPrimary },
          _react2.default.createElement(
            _ToggleDetails2.default,
            {
              ref: function ref(_ref2) {
                return _this2.buttonRef = _ref2;
              },
              onToggle: this.props.onClick,
              summary: (0, _formatMessage2.default)('{\n                  count, plural,\n                  one {Show # completed item}\n                  other {Show # completed items}\n                }', { count: this.props.itemCount }),
              theme: theme
            },
            'ToggleDetails requires a child'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles.contentSecondary },
          this.renderBadges()
        )
      );
    }
  }]);

  CompletedItemsFacade.displayName = 'CompletedItemsFacade'
  ;
  return CompletedItemsFacade;
}(_react.Component), _class.propTypes = {
  onClick: _propTypes.func.isRequired,
  itemCount: _propTypes.number.isRequired,
  badges: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_plannerPropTypes.badgeShape)),
  animatableIndex: _propTypes.number,
  animatableItemIds: (0, _propTypes.arrayOf)(_propTypes.string),
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  notificationBadge: (0, _propTypes.oneOf)(['none', 'newActivity', 'missing'])
}, _class.defaultProps = {
  badges: [],
  registerAnimatable: function registerAnimatable() {},
  deregisterAnimatable: function deregisterAnimatable() {},
  notificationBadge: 'none'
}, _temp2);
exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(CompletedItemsFacade));