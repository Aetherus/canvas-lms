'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformApiToInternalItem = transformApiToInternalItem;
exports.transformPlannerNoteApiToInternalItem = transformPlannerNoteApiToInternalItem;
exports.transformInternalToApiItem = transformInternalToApiItem;
exports.transformInternalToApiOverride = transformInternalToApiOverride;
exports.transformApiToInternalGrade = transformApiToInternalGrade;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dateUtils = require('./dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItemDetailsFromPlannable = function getItemDetailsFromPlannable(apiResponse, timeZone) {
  var plannable = apiResponse.plannable,
      plannable_type = apiResponse.plannable_type,
      planner_override = apiResponse.planner_override;

  var plannableId = plannable.id || plannable.page_id;
  var markedComplete = planner_override;

  var details = {
    course_id: plannable.course_id,
    title: plannable.name || plannable.title,
    completed: markedComplete != null ? markedComplete.marked_complete : apiResponse.submissions && (apiResponse.submissions.submitted || apiResponse.submissions.excused || apiResponse.submissions.graded),
    points: plannable.points_possible,
    html_url: plannable.html_url,
    overrideId: planner_override && planner_override.id,
    overrideAssignId: plannable.assignment_id,
    id: plannableId,
    uniqueId: plannable_type + '-' + plannableId
  };

  details.feedback = apiResponse.submissions ? apiResponse.submissions.feedback : undefined;

  if (plannable_type === 'discussion_topic' || plannable_type === 'announcement') {
    details.unread_count = plannable.unread_count;
  }

  if (plannable_type === 'planner_note') {
    details.details = plannable.details;
  }

  if (plannable_type === 'calendar_event') {
    details.allDay = plannable.all_day;
  }

  return details;
}; /*
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


var TYPE_MAPPING = {
  quiz: "Quiz",
  discussion_topic: "Discussion",
  assignment: "Assignment",
  wiki_page: "Page",
  announcement: "Announcement",
  planner_note: "To Do",
  calendar_event: "Calendar Event"
};

var getItemType = function getItemType(plannableType) {
  return TYPE_MAPPING[plannableType];
};

var getApiItemType = function getApiItemType(overrideType) {
  return _lodash2.default.findKey(TYPE_MAPPING, _lodash2.default.partial(_lodash2.default.isEqual, overrideType));
};

/**
* Translates the API data to the format the planner expects
**/
function transformApiToInternalItem(apiResponse, courses, groups, timeZone) {
  if (timeZone == null) throw new Error('timezone is required when interpreting api data in transformApiToInternalItem');

  var contextInfo = {};
  var context_type = apiResponse.context_type + '';
  var contextId = apiResponse[context_type.toLowerCase() + '_id'];
  if (context_type === 'Course') {
    var course = courses.find(function (c) {
      return c.id === contextId;
    });
    contextInfo.context = getCourseContext(course);
  } else if (context_type === 'Group') {
    var group = groups.find(function (g) {
      return g.id === contextId;
    }) || { name: "Unknown Group", color: "#666666", url: undefined };
    contextInfo.context = getGroupContext(apiResponse, group);
  }
  var details = getItemDetailsFromPlannable(apiResponse, timeZone);

  // Standardize 00:00:00 date to 11:59PM on the current day to make due date less confusing
  var plannableDate = (0, _dateUtils.makeEndOfDayIfMidnight)(apiResponse.plannable_date, timeZone);

  if (!contextInfo.context && apiResponse.plannable_type === 'planner_note' && details.course_id) {
    var _course = courses.find(function (c) {
      return c.id === details.course_id;
    });
    contextInfo.context = getCourseContext(_course);
  }

  if (details.unread_count) {
    apiResponse.submissions = apiResponse.submissions || {};
    apiResponse.submissions.unread_count = details.unread_count;
  }
  return Object.assign({}, contextInfo, {
    id: apiResponse.plannable_id,
    dateBucketMoment: _momentTimezone2.default.tz(plannableDate, timeZone).startOf('day'),
    type: getItemType(apiResponse.plannable_type),
    status: apiResponse.submissions,
    newActivity: apiResponse.new_activity,
    toggleAPIPending: false,
    date: plannableDate
  }, details);
}

/**
 * This takes the response from creating a new planner note aka To Do and puts it in the internal
 * format.
 */
function transformPlannerNoteApiToInternalItem(plannerItemApiResponse, courses, timeZone) {
  var plannerNote = plannerItemApiResponse;
  var context = {};
  if (plannerNote.course_id) {
    var course = courses.find(function (c) {
      return c.id === plannerNote.course_id;
    });
    context = getCourseContext(course);
  }
  return {
    id: plannerNote.id,
    uniqueId: 'planner_note-' + plannerNote.id,
    dateBucketMoment: _momentTimezone2.default.tz(plannerNote.todo_date, timeZone),
    type: 'To Do',
    status: false,
    course_id: plannerNote.course_id,
    context: context,
    title: plannerNote.title,
    date: _momentTimezone2.default.tz(plannerNote.todo_date, timeZone),
    details: plannerNote.details,
    completed: false
  };
}

/**
* Turn internal item format into data the API can consume for save actions
*/
function transformInternalToApiItem(internalItem) {
  var contextInfo = {};
  if (internalItem.context) {
    contextInfo.context_type = internalItem.context.type || 'Course';
    contextInfo[contextInfo.context_type.toLowerCase() + '_id'] = internalItem.context.id;
  }
  return Object.assign({
    id: internalItem.id
  }, contextInfo, {
    todo_date: internalItem.date,
    title: internalItem.title,
    details: internalItem.details
  });
}

function transformInternalToApiOverride(internalItem, userId) {
  var type = getApiItemType(internalItem.type);
  var id = internalItem.id;
  if (internalItem.overrideAssignId) {
    type = 'assignment';
    id = internalItem.overrideAssignId;
  }
  return {
    id: internalItem.overrideId,
    plannable_id: id,
    plannable_type: type,
    user_id: userId,
    marked_complete: internalItem.completed
  };
}

function transformApiToInternalGrade(apiResult) {
  // Grades are the same across all enrollments, just look at first one
  var courseId = apiResult.id;
  var hasGradingPeriods = apiResult.has_grading_periods;
  var enrollment = apiResult.enrollments[0];
  var score = enrollment.computed_current_score;
  var grade = enrollment.computed_current_grade;
  if (hasGradingPeriods) {
    score = enrollment.current_period_computed_current_score;
    grade = enrollment.current_period_computed_current_grade;
  }
  return { courseId: courseId, hasGradingPeriods: hasGradingPeriods, grade: grade, score: score };
}

function getCourseContext(course) {
  // shouldn't happen, but if the course data is missing, skip it.
  // this has the effect of a planner note showing up as a vanilla todo not associated with a course
  if (!course) return undefined;
  return {
    type: 'Course',
    id: course.id,
    title: course.shortName,
    image_url: course.image,
    inform_students_of_overdue_submissions: course.informStudentsOfOverdueSubmissions,
    color: course.color,
    url: course.href
  };
}

function getGroupContext(apiResponse, group) {
  if (!group) return undefined;
  return {
    type: apiResponse.context_type,
    id: group.id,
    title: group.name,
    image_url: undefined,
    inform_students_of_overdue_submissions: false, // group items don't have submissions
    color: group.color,
    url: group.url
  };
}