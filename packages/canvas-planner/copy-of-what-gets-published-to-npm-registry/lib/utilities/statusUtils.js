'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNewActivityItem = isNewActivityItem;
exports.anyNewActivity = anyNewActivity;
exports.anyNewActivityDays = anyNewActivityDays;
exports.didWeFindToday = didWeFindToday;
exports.showPillForOverdueStatus = showPillForOverdueStatus;
exports.getBadgesForItem = getBadgesForItem;
exports.getBadgesForItems = getBadgesForItems;

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _dateUtils = require('./dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
var PILL_MAPPING = {
  'missing': function missing() {
    return { id: 'missing', text: (0, _formatMessage2.default)('Missing'), variant: 'danger' };
  },
  'late': function late() {
    return { id: 'late', text: (0, _formatMessage2.default)('Late'), variant: 'danger' };
  },
  'graded': function graded() {
    return { id: 'graded', text: (0, _formatMessage2.default)('Graded') };
  },
  'excused': function excused() {
    return { id: 'excused', text: (0, _formatMessage2.default)('Excused') };
  },
  'submitted': function submitted() {
    return { id: 'submitted', text: (0, _formatMessage2.default)('Submitted') };
  },
  'new_grades': function new_grades() {
    return { id: 'new_grades', text: (0, _formatMessage2.default)('Graded') };
  },
  'new_feedback': function new_feedback() {
    return { id: 'new_feedback', text: (0, _formatMessage2.default)('Feedback') };
  },
  'new_replies': function new_replies() {
    return { id: 'new_replies', text: (0, _formatMessage2.default)('Replies') };
  }
};

function isNewActivityItem(item) {
  return item.newActivity;
}

function anyNewActivity(items) {
  return items && items.some(isNewActivityItem);
}

function anyNewActivityDays(days) {
  return days.some(function (day) {
    return anyNewActivity(day[1]);
  });
}

function didWeFindToday(days) {
  return days.some(function (day) {
    return (0, _dateUtils.isTodayOrBefore)(day[0]);
  });
}

function showPillForOverdueStatus(status, item) {
  if (!['late', 'missing'].includes(status)) {
    throw new Error('Expected status to be \'late\' or \'missing\', but it was ' + status);
  }
  return !!item.context && !!item.status && item.status[status];
}

/**
* Returns an array of pill objects that the particular item
* qualifies to have
*/
function getBadgesForItem(item) {
  var badges = [];
  if (item.status) {
    badges = Object.keys(item.status).filter(function (key, index, all) {
      return item.status.graded && key === 'submitted' ? false : true;
    }) // if graded, ignore submitted
    .filter(function (key) {
      var validKeyPresent = item.status[key] && PILL_MAPPING.hasOwnProperty(key);

      if (!validKeyPresent) {
        return false;
      } else if (['late', 'missing'].includes(key)) {
        return showPillForOverdueStatus(key, item);
      }

      return true;
    }).map(function (a) {
      return PILL_MAPPING[a]();
    });

    if (item.status.unread_count) {
      badges.push(PILL_MAPPING.new_replies());
    }
    if (item.newActivity && item.status.has_feedback) {
      badges.push(PILL_MAPPING.new_feedback());
    }
  }

  return badges;
}

/**
* Returns an array of pill objects that the items qualify to have
*/
function getBadgesForItems(items) {
  var badges = [];
  if (items.some(function (i) {
    return i.status && i.newActivity && i.status.graded;
  })) {
    badges.push(PILL_MAPPING.new_grades());
  }
  if (items.some(showPillForOverdueStatus.bind(this, 'missing'))) {
    badges.push(PILL_MAPPING.missing());
  } else if (items.some(showPillForOverdueStatus.bind(this, 'late'))) {
    badges.push(PILL_MAPPING.late());
  }
  if (items.some(function (i) {
    return i.status && i.newActivity && i.status.has_feedback;
  })) {
    badges.push(PILL_MAPPING.new_feedback());
  }
  if (items.some(function (i) {
    return i.status && i.status.unread_count;
  })) {
    badges.push(PILL_MAPPING.new_replies());
  }
  return badges;
}