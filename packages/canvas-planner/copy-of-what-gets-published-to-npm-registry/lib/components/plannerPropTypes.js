'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedbackShape = exports.statusShape = exports.sizeShape = exports.opportunityShape = exports.itemShape = exports.courseShape = exports.badgeShape = exports.userShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userShape = exports.userShape = {
  id: _propTypes2.default.string,
  displayName: _propTypes2.default.string,
  avatarUrl: _propTypes2.default.string,
  color: _propTypes2.default.string
}; /*
    * Copyright (C) 2018 - present Instructure, Inc.
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

var badgeShape = exports.badgeShape = {
  text: _propTypes2.default.string,
  variant: _propTypes2.default.string
};

var courseShape = exports.courseShape = {
  id: _propTypes2.default.string,
  longName: _propTypes2.default.string
};

var itemShape = exports.itemShape = {
  context: _propTypes2.default.shape({
    inform_students_of_overdue_submissions: _propTypes2.default.bool
  })
};

var opportunityShape = exports.opportunityShape = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  nextUrl: _propTypes2.default.string
};

var sizeShape = exports.sizeShape = _propTypes2.default.oneOf(['medium', 'large']);

var statusShape = exports.statusShape = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
  excused: _propTypes2.default.bool,
  graded: _propTypes2.default.bool,
  has_feedback: _propTypes2.default.bool,
  late: _propTypes2.default.bool,
  missing: _propTypes2.default.bool,
  needs_grading: _propTypes2.default.bool,
  submitted: _propTypes2.default.bool
})]);

var feedbackShape = exports.feedbackShape = {
  author_avatar_url: _propTypes2.default.string,
  author_name: _propTypes2.default.string,
  comment: _propTypes2.default.string
};

exports.default = {
  badgeShape: badgeShape,
  userShape: userShape,
  courseShape: courseShape,
  itemShape: itemShape,
  opportunityShape: opportunityShape,
  sizeShape: sizeShape,
  statusShape: statusShape,
  feedbackShape: feedbackShape
};