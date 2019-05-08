'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grouping = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _lodash = require('lodash');

var _propTypes = require('prop-types');

var _plannerPropTypes = require('../plannerPropTypes');

var _theme = require('./theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _PlannerItem = require('../PlannerItem');

var _PlannerItem2 = _interopRequireDefault(_PlannerItem);

var _CompletedItemsFacade = require('../CompletedItemsFacade');

var _CompletedItemsFacade2 = _interopRequireDefault(_CompletedItemsFacade);

var _NotificationBadge = require('../NotificationBadge');

var _NotificationBadge2 = _interopRequireDefault(_NotificationBadge);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _statusUtils = require('../../utilities/statusUtils');

var _dynamicUi = require('../../dynamic-ui');

var _responsiviser = require('../responsiviser');

var _responsiviser2 = _interopRequireDefault(_responsiviser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  template: function template(theme) {
    var tmpl = function tmpl() {
      return '/*  imported from styles.css  */\n\n/* Variables are defined in ./theme.js */\n\n._3QtpfbioSh_uj3HrP1byoA {\n  font-family: ' + theme.fontFamily + ';\n  margin: ' + theme.margin + ';\n  border-color: ' + theme.groupColor + ';\n  color: ' + theme.groupColor + ';\n  line-height: ' + theme.lineHeight + ';\n  position: relative;\n  display: flex;\n}\n\n.KHg2uHV3SXPmVzwlUHN6V {\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  box-sizing: border-box;\n  text-align: center;\n  padding: ' + theme.titlePadding + ';\n  background-color: ' + theme.titleBackground + ';\n  text-transform: ' + theme.titleTextTransform + ';\n  -webkit-text-decoration: ' + theme.titleTextDecoration + ';\n          text-decoration: ' + theme.titleTextDecoration + ';\n  font-size: ' + theme.titleFontSize + ';\n  font-weight: ' + theme.titleFontWeight + ';\n  color: ' + theme.titleColor + ';\n\n  /* handle unusually long words that break the layout */\n  min-width: 1px;\n  overflow: hidden;\n  max-height: 3rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\n[dir="ltr"] .KHg2uHV3SXPmVzwlUHN6V {\n  text-align: center;\n}\n\n[dir="rtl"] .KHg2uHV3SXPmVzwlUHN6V {\n  text-align: center;\n}\n\n.KHg2uHV3SXPmVzwlUHN6V::after {\n    content: "";\n    width: 100%;\n    height: ' + theme.titleOverflowGradientHeight + ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ' + theme.titleBackground + ' 100%);\n  }\n\n._3uist9vW3ReIHic7SimdpQ {\n  position: relative;\n  display: flex;\n  flex: 0 0 ' + theme.heroWidth + ';\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  outline: none;\n  padding: ' + theme.heroPadding + ';\n  text-decoration: none;\n\n  /* handle long words that break layout */\n  min-width: 1px;\n}\n\n._3uist9vW3ReIHic7SimdpQ ._1TrwbQJoBOICz9n48D27Bw {\n    -webkit-text-decoration: ' + theme.heroLinkTextDecoration + ';\n            text-decoration: ' + theme.heroLinkTextDecoration + ';\n  }\n\n._3uist9vW3ReIHic7SimdpQ,\n._3o7RH-OINV2eD2VQII-HML {\n  border-bottom-inline-start-radius: ' + theme.heroBorderRadius + ';\n  border-top-inline-start-radius: ' + theme.heroBorderRadius + ';\n}\n\n[dir="ltr"] ._3uist9vW3ReIHic7SimdpQ,\n[dir="ltr"] ._3o7RH-OINV2eD2VQII-HML {\n  border-bottom-left-radius: ' + theme.heroBorderRadius + ';\n  border-top-left-radius: ' + theme.heroBorderRadius + ';\n}\n\n[dir="rtl"] ._3uist9vW3ReIHic7SimdpQ,\n[dir="rtl"] ._3o7RH-OINV2eD2VQII-HML {\n  border-bottom-right-radius: ' + theme.heroBorderRadius + ';\n  border-top-right-radius: ' + theme.heroBorderRadius + ';\n}\n\n._2VgeJ7VAbYpKUlENBAmGBY:focus,\n  ._2VgeJ7VAbYpKUlENBAmGBY:hover {\n    text-decoration: none;\n  }\n\n._2VgeJ7VAbYpKUlENBAmGBY:focus .KHg2uHV3SXPmVzwlUHN6V, ._2VgeJ7VAbYpKUlENBAmGBY:hover .KHg2uHV3SXPmVzwlUHN6V {\n      -webkit-text-decoration: ' + theme.titleTextDecorationHover + ';\n              text-decoration: ' + theme.titleTextDecorationHover + ';\n    }\n\n._3o7RH-OINV2eD2VQII-HML {\n  background-color: ' + theme.groupColor + ';\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n._3o7RH-OINV2eD2VQII-HML._2IeSbpEvEG__iPe1GlR8eH {\n    opacity: ' + theme.overlayOpacity + ';\n  }\n\n/* the <ol> */\n._1I6IwkaQfSP_vFZxPg07KX {\n  flex: 1;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border-top: ' + theme.borderTopWidth + ' solid;\n  border-color: ' + theme.groupColor + ';\n  color: ' + theme.groupColor + ';\n  min-width: 1px;\n}\n\n._3WF_d3aYUYQpWfxwebktZU._3QtpfbioSh_uj3HrP1byoA {\n    display: block;\n    margin: 0;\n  }\n\n._3WF_d3aYUYQpWfxwebktZU ._3uist9vW3ReIHic7SimdpQ, ._3WF_d3aYUYQpWfxwebktZU ._3o7RH-OINV2eD2VQII-HML {\n    border-radius: 0;\n    background-color: transparent;\n  }\n\n._3WF_d3aYUYQpWfxwebktZU ._3uist9vW3ReIHic7SimdpQ {\n    display: block;\n    flex: none;\n    min-height: unset;\n    line-height: 2rem;\n  }\n\n._3WF_d3aYUYQpWfxwebktZU .KHg2uHV3SXPmVzwlUHN6V {\n    font-size: ' + theme.titleFontSizeTablet + ';\n    -webkit-padding-start: 0;\n            padding-inline-start: 0;\n  }\n\n[dir="ltr"] ._3WF_d3aYUYQpWfxwebktZU .KHg2uHV3SXPmVzwlUHN6V {\n    padding-left: 0;\n  }\n\n[dir="rtl"] ._3WF_d3aYUYQpWfxwebktZU .KHg2uHV3SXPmVzwlUHN6V {\n    padding-right: 0;\n  }\n\n._3WF_d3aYUYQpWfxwebktZU ._1I6IwkaQfSP_vFZxPg07KX {\n    border-top-width: ' + theme.borderTopWidthTablet + ';\n  }\n';
    };

    return tmpl.call(theme, theme);
  },
  'root': '_3QtpfbioSh_uj3HrP1byoA',
  'title': 'KHg2uHV3SXPmVzwlUHN6V',
  'hero': '_3uist9vW3ReIHic7SimdpQ',
  'groupingName': '_1TrwbQJoBOICz9n48D27Bw',
  'overlay': '_3o7RH-OINV2eD2VQII-HML',
  'heroHover': '_2VgeJ7VAbYpKUlENBAmGBY',
  'withImage': '_2IeSbpEvEG__iPe1GlR8eH',
  'items': '_1I6IwkaQfSP_vFZxPg07KX',
  'medium': '_3WF_d3aYUYQpWfxwebktZU'
};
var Grouping = exports.Grouping = (_temp = _class = function (_Component) {
  _inherits(Grouping, _Component);

  function Grouping(props) {
    _classCallCheck(this, Grouping);

    var _this = _possibleConstructorReturn(this, (Grouping.__proto__ || Object.getPrototypeOf(Grouping)).call(this, props));

    _this.groupingLinkRef = function (link) {
      _this.groupingLink = link;
    };

    _this.getFocusable = function () {
      return _this.groupingLink;
    };

    _this.handleFacadeClick = function (e) {
      if (e) {
        e.preventDefault();
      }
      _this.setState(function () {
        return {
          showCompletedItems: true
        };
      }, function () {
        if (_this.groupingLink) _this.groupingLink.focus();
      });
    };

    _this.state = {
      showCompletedItems: false,
      badgeMap: _this.setupItemBadgeMap(props.items)
    };

    return _this;
  }

  _createClass(Grouping, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerAnimatable('group', this, this.props.animatableIndex, this.itemUniqueIds());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.props.deregisterAnimatable('group', this, this.itemUniqueIds());
      this.props.registerAnimatable('group', this, newProps.animatableIndex, this.itemUniqueIds(newProps));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.deregisterAnimatable('group', this, this.itemUniqueIds());
    }
  }, {
    key: 'itemUniqueIds',
    value: function itemUniqueIds() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.items.map(function (item) {
        return item.uniqueId;
      });
    }
  }, {
    key: 'setupItemBadgeMap',
    value: function setupItemBadgeMap(items) {
      var mapping = {};
      items.forEach(function (item) {
        var badges = (0, _statusUtils.getBadgesForItem)(item);
        if (badges.length) mapping[item.id] = badges;
      });
      return mapping;
    }
  }, {
    key: 'getScrollable',
    value: function getScrollable() {
      return this.groupingLink || this.plannerNoteHero;
    }
  }, {
    key: 'getLayout',
    value: function getLayout() {
      return this.props.responsiveSize;
    }
  }, {
    key: 'renderItemsAndFacade',
    value: function renderItemsAndFacade(items) {
      var _partition = (0, _lodash.partition)(items, function (item) {
        return item.completed && !item.show;
      }),
          _partition2 = _slicedToArray(_partition, 2),
          completedItems = _partition2[0],
          otherItems = _partition2[1];

      var itemsToRender = otherItems;
      if (this.state.showCompletedItems) {
        itemsToRender = items;
      }

      var componentsToRender = this.renderItems(itemsToRender);
      componentsToRender.push(this.renderFacade(completedItems, this.props.animatableIndex * 100 + itemsToRender.length + 1));
      return componentsToRender;
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      var _this2 = this;

      var showNotificationBadgeOnItem = this.getLayout() !== 'large';
      return items.map(function (item, itemIndex) {
        return _react2.default.createElement(
          'li',
          {
            className: styles.item,
            key: item.uniqueId
          },
          _react2.default.createElement(_PlannerItem2.default, {
            theme: {
              iconColor: _this2.props.color
            },
            color: _this2.props.color,
            completed: item.completed,
            overrideId: item.overrideId,
            id: item.id,
            uniqueId: item.uniqueId,
            animatableIndex: _this2.props.animatableIndex * 100 + itemIndex + 1,
            courseName: _this2.props.title,
            context: item.context || {},
            date: (0, _momentTimezone2.default)(item.date).tz(_this2.props.timeZone),
            associated_item: item.type,
            title: item.title,
            points: item.points,
            updateTodo: _this2.props.updateTodo,
            html_url: item.html_url,
            toggleCompletion: function toggleCompletion() {
              return _this2.props.toggleCompletion(item);
            },
            badges: _this2.state.badgeMap[item.id],
            details: item.details,
            toggleAPIPending: item.toggleAPIPending,
            status: item.status,
            newActivity: item.newActivity,
            allDay: item.allDay,
            showNotificationBadge: showNotificationBadgeOnItem,
            currentUser: _this2.props.currentUser,
            feedback: item.feedback
          })
        );
      });
    }
  }, {
    key: 'renderFacade',
    value: function renderFacade(completedItems, animatableIndex) {
      var showNotificationBadgeOnItem = this.getLayout() !== 'large';
      if (!this.state.showCompletedItems && completedItems.length > 0) {
        var missing = false;
        var newActivity = false;
        var completedItemIds = completedItems.map(function (item) {
          if ((0, _statusUtils.showPillForOverdueStatus)('missing', item)) missing = true;
          if (item.newActivity) newActivity = true;
          return item.uniqueId;
        });
        var notificationBadge = 'none';
        if (showNotificationBadgeOnItem) {
          if (newActivity) {
            notificationBadge = 'newActivity';
          } else if (missing) {
            notificationBadge = 'missing';
          }
        }

        return _react2.default.createElement(
          'li',
          {
            className: styles.item,
            key: 'completed'
          },
          _react2.default.createElement(_CompletedItemsFacade2.default, {
            onClick: this.handleFacadeClick,
            itemCount: completedItems.length,
            badges: (0, _statusUtils.getBadgesForItems)(completedItems),
            animatableIndex: animatableIndex,
            animatableItemIds: completedItemIds,
            notificationBadge: notificationBadge,
            theme: {
              labelColor: this.props.color
            }
          })
        );
      }
      return null;
    }
  }, {
    key: 'renderToDoText',
    value: function renderToDoText() {
      return (0, _formatMessage2.default)('To Do');
    }
  }, {
    key: 'renderNotificationBadge',
    value: function renderNotificationBadge() {
      // narrower layout puts the indicator next to the actual items
      if (this.getLayout() !== 'large') {
        return null;
      }

      var missing = false;
      var newItem = this.props.items.find(function (item) {
        if ((0, _statusUtils.showPillForOverdueStatus)('missing', item)) missing = true;
        return item.newActivity;
      });
      if (newItem || missing) {
        var IndicatorComponent = newItem ? _NotificationBadge.NewActivityIndicator : _NotificationBadge.MissingIndicator;
        var badgeMessage = this.props.title ? this.props.title : this.renderToDoText();
        return _react2.default.createElement(
          _NotificationBadge2.default,
          null,
          _react2.default.createElement(IndicatorComponent, {
            title: badgeMessage,
            itemIds: this.itemUniqueIds(),
            animatableIndex: this.props.animatableIndex,
            getFocusable: this.getFocusable })
        );
      } else {
        return _react2.default.createElement(_NotificationBadge2.default, null);
      }
    }

    // I wouldn't have broken the background and title apart, but wrapping them in a container span breaks styling

  }, {
    key: 'renderGroupLinkBackground',
    value: function renderGroupLinkBackground() {
      var _classnames;

      var clazz = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, styles.overlay, true), _defineProperty(_classnames, styles.withImage, this.props.image_url), _classnames));
      var style = this.getLayout() === 'large' ? { backgroundColor: this.props.color } : null;
      return _react2.default.createElement('span', { className: clazz, style: style });
    }
  }, {
    key: 'renderGroupLinkTitle',
    value: function renderGroupLinkTitle() {
      return _react2.default.createElement(
        'span',
        { className: styles.title },
        this.props.title || this.renderToDoText()
      );
    }
  }, {
    key: 'renderGroupLink',
    value: function renderGroupLink() {
      var _this3 = this;

      if (!this.props.title) {
        return _react2.default.createElement(
          'span',
          { className: styles.hero, ref: function ref(elt) {
              return _this3.plannerNoteHero = elt;
            } },
          this.renderGroupLinkBackground(),
          this.renderGroupLinkTitle()
        );
      }
      var style = this.getLayout() === 'large' ? { backgroundImage: 'url(' + (this.props.image_url || '') + ')' } : null;
      return _react2.default.createElement(
        'a',
        {
          href: this.props.url || "#",
          ref: this.groupingLinkRef,
          className: styles.hero + ' ' + styles.heroHover,
          style: style
        },
        this.renderGroupLinkBackground(),
        this.renderGroupLinkTitle()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(styles.root, styles[this.getLayout()], 'planner-grouping') },
        this.renderNotificationBadge(),
        this.renderGroupLink(),
        _react2.default.createElement(
          'ol',
          { className: styles.items, style: { borderColor: this.props.color } },
          this.renderItemsAndFacade(this.props.items)
        )
      );
    }
  }]);

  Grouping.displayName = 'Grouping'
  ;
  return Grouping;
}(_react.Component), _class.propTypes = {
  items: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_plannerPropTypes.itemShape)).isRequired,
  animatableIndex: _propTypes.number,
  title: _propTypes.string,
  color: _propTypes.string,
  image_url: _propTypes.string,
  timeZone: _propTypes.string.isRequired,
  url: _propTypes.string,
  toggleCompletion: _propTypes.func,
  updateTodo: _propTypes.func,
  registerAnimatable: _propTypes.func,
  deregisterAnimatable: _propTypes.func,
  currentUser: (0, _propTypes.shape)(_plannerPropTypes.userShape),
  responsiveSize: _plannerPropTypes.sizeShape
}, _class.defaultProps = {
  registerAnimatable: function registerAnimatable() {},
  deregisterAnimatable: function deregisterAnimatable() {},
  responsiveSize: 'large'
}, _temp);


var ResponsiveGrouping = (0, _responsiviser2.default)()(Grouping);

exports.default = (0, _dynamicUi.animatable)((0, _lib2.default)(_theme2.default, styles)(ResponsiveGrouping));