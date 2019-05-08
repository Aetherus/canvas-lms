'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToDoSidebar = undefined;

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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _List = require('@instructure/ui-elements/lib/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@instructure/ui-elements/lib/components/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _View = require('@instructure/ui-layout/lib/components/View');

var _View2 = _interopRequireDefault(_View);

var _Spinner = require('@instructure/ui-elements/lib/components/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('@instructure/ui-buttons/lib/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

var _ToDoItem = require('./ToDoItem');

var _ToDoItem2 = _interopRequireDefault(_ToDoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDoSidebar = exports.ToDoSidebar = (_temp = _class = function (_Component) {
  _inherits(ToDoSidebar, _Component);

  function ToDoSidebar() {
    _classCallCheck(this, ToDoSidebar);

    var _this = _possibleConstructorReturn(this, (ToDoSidebar.__proto__ || Object.getPrototypeOf(ToDoSidebar)).call(this));

    _this.showMoreTodos = function () {
      _this.setState({ showTodos: true });
    };

    _this.state = { showTodos: false };
    _this.dismissedItemIndex = null;
    _this.titleFocus = null;
    return _this;
  }

  _createClass(ToDoSidebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.sidebarLoadInitialItems(_momentTimezone2.default.tz(this.props.timeZone).startOf('day'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.dismissedItemIndex != null) {
        var previousIndex = this.dismissedItemIndex - 1;
        this.dismissedItemIndex = null;
        if (previousIndex >= 0) {
          this.todoItemComponents[previousIndex].focus();
        } else {
          this.titleFocus.focus();
        }
      }
    }
  }, {
    key: 'handleDismissClick',
    value: function handleDismissClick(itemIndex, item) {
      var _this2 = this;

      this.dismissedItemIndex = itemIndex;
      this.props.sidebarCompleteItem(item).catch(function () {
        _this2.dismissedItemIndex = null;
      });
    }
  }, {
    key: 'renderShowMoreTodos',
    value: function renderShowMoreTodos(items) {
      if (items.length > 5 && !this.state.showTodos) {
        var number = items.length - 5;
        return _react2.default.createElement(
          _Button2.default,
          { variant: 'link', onClick: this.showMoreTodos },
          (0, _formatMessage2.default)("{number} More...", { number: number })
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.loading) {
        return _react2.default.createElement(
          _View2.default,
          { as: 'div', textAlign: 'center' },
          _react2.default.createElement(_Spinner2.default, { title: (0, _formatMessage2.default)('To Do Items Loading'), size: 'small' })
        );
      }

      var completedFilter = function completedFilter(item) {
        if (!item) return false;
        return !item.completed;
      };

      var filteredTodos = this.props.items.filter(completedFilter);
      var visibleTodos = this.state.showTodos ? filteredTodos : filteredTodos.slice(0, 5);

      this.todoItemComponents = [];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'todo-list-header' },
          _react2.default.createElement(
            'span',
            { tabIndex: '-1', ref: function ref(elt) {
                _this3.titleFocus = elt;
              } },
            (0, _formatMessage2.default)('To Do')
          )
        ),
        _react2.default.createElement(
          _List2.default,
          { variant: 'unstyled' },
          visibleTodos.map(function (item, itemIndex) {
            return _react2.default.createElement(
              _ListItem2.default,
              { key: item.uniqueId },
              _react2.default.createElement(_ToDoItem2.default, {
                ref: function ref(component) {
                  _this3.todoItemComponents[itemIndex] = component;
                },
                item: item,
                courses: _this3.props.courses,
                handleDismissClick: function handleDismissClick() {
                  return _this3.handleDismissClick(itemIndex, item);
                },
                locale: _this3.props.locale,
                timeZone: _this3.props.timeZone
              })
            );
          })
        ),
        this.renderShowMoreTodos(filteredTodos)
      );
    }
  }]);

  ToDoSidebar.displayName = 'ToDoSidebar'
  ;
  return ToDoSidebar;
}(_react.Component), _class.propTypes = {
  sidebarLoadInitialItems: _propTypes.func.isRequired,
  sidebarCompleteItem: _propTypes.func.isRequired,
  items: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  loading: _propTypes.bool,
  courses: (0, _propTypes.arrayOf)(_propTypes.object).isRequired,
  timeZone: _propTypes.string,
  locale: _propTypes.string
}, _class.defaultProps = {
  loading: false,
  timeZone: _momentTimezone2.default.tz.guess(),
  locale: 'en'
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    items: state.sidebar.items,
    loading: state.sidebar.loading
  };
};
var mapDispatchToProps = { sidebarLoadInitialItems: _actions.sidebarLoadInitialItems, sidebarCompleteItem: _actions.sidebarCompleteItem };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ToDoSidebar);