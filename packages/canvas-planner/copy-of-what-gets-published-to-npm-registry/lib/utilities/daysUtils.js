'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewItemsIntoDays = mergeNewItemsIntoDays;
exports.mergeNewItemsIntoDaysHash = mergeNewItemsIntoDaysHash;
exports.mergeDaysIntoDaysHash = mergeDaysIntoDaysHash;
exports.mergeDays = mergeDays;
exports.mergeDaysHashes = mergeDaysHashes;
exports.itemsToDaysHash = itemsToDaysHash;
exports.daysToDaysHash = daysToDaysHash;
exports.daysHashToDays = daysHashToDays;
exports.itemsToDays = itemsToDays;
exports.daysToItems = daysToItems;
exports.mergeItems = mergeItems;
exports.findItemInDays = findItemInDays;
exports.deleteItemFromDaysAt = deleteItemFromDaysAt;
exports.deleteItemFromDays = deleteItemFromDays;
exports.purgeDuplicateDays = purgeDuplicateDays;
exports.groupAndSortDayItems = groupAndSortDayItems;
exports.orderItemsByTimeAndTitle = orderItemsByTimeAndTitle;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dateUtils = require('./dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
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

function mergeNewItemsIntoDays(days, newItems) {
  var daysHash = daysToDaysHash(days);
  var mergedDaysHash = mergeNewItemsIntoDaysHash(daysHash, newItems);
  return daysHashToDays(mergedDaysHash);
}

function mergeNewItemsIntoDaysHash(daysHash, newItems) {
  var newDaysHash = itemsToDaysHash(newItems);
  var mergedDaysHash = mergeDaysHashes(daysHash, newDaysHash);
  return mergedDaysHash;
}

function mergeDaysIntoDaysHash(oldDaysHash, newDays) {
  return mergeDaysHashes(oldDaysHash, daysToDaysHash(newDays));
}

function mergeDays(oldDays, newDays) {
  var oldDaysHash = daysToDaysHash(oldDays);
  var newDaysHash = daysToDaysHash(newDays);
  var mergedDaysHash = mergeDaysHashes(oldDaysHash, newDaysHash);
  return daysHashToDays(mergedDaysHash);
}

function mergeDaysHashes(oldDaysHash, newDaysHash) {
  oldDaysHash = Object.assign({}, oldDaysHash);
  var mergedDaysHash = _lodash2.default.mergeWith(oldDaysHash, newDaysHash, function (oldDayItems, newDayItems) {
    if (oldDayItems == null) oldDayItems = [];
    // this is only called when necessary to merge new items into old items.
    // that way we avoid sorting items that have already been sorted.
    return mergeItems(oldDayItems, newDayItems);
  });
  return mergedDaysHash;
}

function itemsToDaysHash(items) {
  return _lodash2.default.groupBy(items, function (item) {
    return (0, _dateUtils.formatDayKey)(item.dateBucketMoment);
  });
}

function daysToDaysHash(days) {
  return _lodash2.default.fromPairs(days);
}

function daysHashToDays(days) {
  return _lodash2.default.chain(days).toPairs().filter(function (d) {
    return d[1] && d[1].length;
  }) // discard any day with no items
  .sortBy(_lodash2.default.head).value();
}

function itemsToDays(items) {
  return daysHashToDays(itemsToDaysHash(items));
}

function daysToItems(days) {
  return days.reduce(function (memo, day) {
    return [].concat(_toConsumableArray(memo), _toConsumableArray(day[1]));
  }, []);
}

function mergeItems(oldItems, newItems) {
  var newItemsMap = new Map(newItems.map(function (item) {
    return [item.uniqueId, item];
  }));
  var oldItemsMerged = oldItems.map(function (oldItem) {
    var newItem = newItemsMap.get(oldItem.uniqueId);
    if (newItem) {
      newItemsMap.delete(newItem.uniqueId);
      return newItem;
    } else {
      return oldItem;
    }
  });
  var resultingItems = oldItemsMerged.concat([].concat(_toConsumableArray(newItemsMap.values())));
  // mergeItems is only called as needed to merge new items into old items,
  // so sorting here is ok and won't wind up sorting every day on every merge.
  return groupAndSortDayItems(resultingItems);
}

// returns {dayIndex, itemIndex, item}. Both indexes are -1 and item is undefined if the item isn't found.
function findItemInDays(days, uniqueId) {
  var dayIndex = -1;
  var itemIndex = -1;
  if (uniqueId !== undefined) {
    dayIndex = days.findIndex(function (day) {
      var items = day[1];
      itemIndex = items.findIndex(function (itemToCheck) {
        return itemToCheck.uniqueId === uniqueId;
      });
      return itemIndex !== -1;
    });
  }
  var item = dayIndex !== -1 ? days[dayIndex][1][itemIndex] : undefined;
  return { dayIndex: dayIndex, itemIndex: itemIndex, item: item };
}

function deleteItemFromDaysAt(days, dayIndex, itemIndex) {
  var oldItems = days[dayIndex][1];
  var newItems = oldItems.filter(function (_, index) {
    return index !== itemIndex;
  });
  if (newItems.length === 0) {
    return days.filter(function (_, index) {
      return index !== dayIndex;
    });
  } else {
    var newDay = days[dayIndex].slice(0); // copy
    newDay[1] = newItems;
    var newDays = days.slice(0);
    newDays[dayIndex] = newDay;
    return newDays;
  }
}

function deleteItemFromDays(days, doomedItem) {
  var _findItemInDays = findItemInDays(days, doomedItem.uniqueId),
      dayIndex = _findItemInDays.dayIndex,
      itemIndex = _findItemInDays.itemIndex;

  if (dayIndex === -1 || itemIndex === -1) return days;
  return deleteItemFromDaysAt(days, dayIndex, itemIndex);
}

function purgeDuplicateDays(oldDays, newDays) {
  var purgedDaysHash = daysToDaysHash(oldDays);
  newDays.forEach(function (day) {
    delete purgedDaysHash[day[0]];
  });
  return daysHashToDays(purgedDaysHash);
}

// sort the items:
// First by grouping (alpha by course or group title, followed by the Notes (aka To Dos)
// Then by due-time for each item w/in the grouping.
function groupAndSortDayItems(items) {
  return items.sort(orderItems);
}

// ----- grouping and sorting helpers -----
var cmpopts = { numeric: true };
var locale = window.ENV && window.ENV.LOCALE || 'en';

// order items by their grouping
function getItemGroupTitle(item) {
  if (item.context && item.context.id) {
    // edited items have an empty context, so look for the id too
    return item.context.title || '' + item.context.type + item.context.id;
  }
  return 'Notes';
}

function orderItemsByGrouping(a, b) {
  var namea = getItemGroupTitle(a);
  var nameb = getItemGroupTitle(b);
  if (namea.localeCompare(nameb, locale, cmpopts) === 0) return 0;
  if (namea === 'Notes') return 1;
  if (nameb === 'Notes') return -1;
  return namea.localeCompare(nameb, locale, cmpopts);
}

// order items by time, then title
function orderItemsByTimeAndTitle(a, b) {
  if (a.date.valueOf() === b.date.valueOf()) {
    return a.title.localeCompare(b.title, locale, cmpopts);
  }
  return a.date < b.date ? -1 : 1;
}

// order items
function orderItems(a, b) {
  var order = orderItemsByGrouping(a, b);
  if (order === 0) {
    order = orderItemsByTimeAndTitle(a, b);
  }
  return order;
}