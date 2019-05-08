'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatableRegistry = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimatableRegistry = exports.AnimatableRegistry = function () {
  function AnimatableRegistry() {
    _classCallCheck(this, AnimatableRegistry);

    this.registries = {
      day: {},
      group: {},
      item: {},
      opportunity: {},
      'new-activity-indicator': {}
    };
  }

  _createClass(AnimatableRegistry, [{
    key: 'validateType',
    value: function validateType(type) {
      var registryTypes = Object.keys(this.registries);
      if (!registryTypes.find(function (t) {
        return t === type;
      })) {
        throw new Error('invalid registry type ' + type);
      }
    }
  }, {
    key: 'register',
    value: function register(type, component, index, componentIds) {
      this.validateType(type);
      var registry = this.registries[type];
      componentIds.forEach(function (componentId) {
        return registry[componentId] = { component: component, index: index, componentIds: componentIds };
      });
    }
  }, {
    key: 'deregister',
    value: function deregister(type, component, componentIds) {
      this.validateType(type);
      var registry = this.registries[type];
      componentIds.forEach(function (componentId) {
        if (registry[componentId].component === component) {
          delete registry[componentId];
        }
      });
    }
  }, {
    key: 'getComponent',
    value: function getComponent(type, componentId) {
      this.validateType(type);
      return this.registries[type][componentId];
    }
  }, {
    key: 'getFirstComponent',
    value: function getFirstComponent(type, componentIds) {
      this.validateType(type);
      var registry = this.registries[type];
      var minItemId = _lodash2.default.minBy(componentIds, function (componentId) {
        return registry[componentId].index;
      });
      return registry[minItemId];
    }
  }, {
    key: 'getLastComponent',
    value: function getLastComponent(type, componentIds) {
      this.validateType(type);
      var registry = this.registries[type];
      var maxItemId = _lodash2.default.maxBy(componentIds, function (componentId) {
        return registry[componentId].index;
      });
      return registry[maxItemId];
    }
  }, {
    key: 'getUniqSortedComponents',
    value: function getUniqSortedComponents(type, componentIds) {
      var _this = this;

      this.validateType(type);
      var components = componentIds.map(function (componentId) {
        return _this.registries[type][componentId];
      });
      return _lodash2.default.chain(components).sortBy('index').sortedUniqBy('index').value();
    }

    // Gets all non-negative indexed components from the given registry in indexed order. Negative
    // indexed components are special and are not returned by this method. This method only makes
    // sense for days and opportunities since groups and items are nested components and will have
    // duplicate indexes registered (with different ids).

  }, {
    key: 'getSortedComponents',
    value: function getSortedComponents(type) {
      this.validateType(type);
      return _lodash2.default.chain(this.registries[type]).values().sortBy('index').sortedUniqBy('index').filter(function (entryValue) {
        return entryValue.index >= 0;
      }).value();
    }
  }, {
    key: 'getAllGroupsSorted',
    value: function getAllGroupsSorted() {
      var _this2 = this;

      // get list of days sorted as they appear in the interface.
      var sortedDays = this.getSortedComponents('day');
      // get sorted groups for each sorted day, then flatten into one list of interface sorted groups.
      var sortedGroups = _lodash2.default.flatMap(sortedDays, function (day) {
        return _this2.getUniqSortedComponents('group', day.componentIds);
      });
      return sortedGroups;
    }

    // gets all items that are displayed in the interface in interface sorted order.

  }, {
    key: 'getAllItemsSorted',
    value: function getAllItemsSorted() {
      var _this3 = this;

      var sortedGroups = this.getAllGroupsSorted();
      // get sorted items for each group, then flatten into one list of interface sorted items
      var sortedItems = _lodash2.default.flatMap(sortedGroups, function (group) {
        return _this3.getUniqSortedComponents('item', group.componentIds);
      });
      return sortedItems;
    }

    // gets indexed opportunities in interface order.

  }, {
    key: 'getAllOpportunitiesSorted',
    value: function getAllOpportunitiesSorted() {
      return this.getSortedComponents('opportunity');
    }
  }, {
    key: 'getAllNewActivityIndicatorsSorted',
    value: function getAllNewActivityIndicatorsSorted() {
      var _this4 = this;

      var sortedGroups = this.getAllGroupsSorted();
      var sortedNewActivityIndicators = _lodash2.default.chain(sortedGroups).flatMap(function (group) {
        return _this4.getUniqSortedComponents('new-activity-indicator', group.componentIds);
      })
      // not every group has a new activity indicator, so remove the undefined components
      .filter(function (nai) {
        return nai != null;
      }).value();
      return sortedNewActivityIndicators;
    }
  }]);

  return AnimatableRegistry;
}();