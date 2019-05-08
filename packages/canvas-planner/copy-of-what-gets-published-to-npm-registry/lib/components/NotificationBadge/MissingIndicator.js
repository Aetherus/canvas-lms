'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MissingIndicator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _formatMessage = require('../../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _Indicator = require('./Indicator');

var _Indicator2 = _interopRequireDefault(_Indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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

function MissingIndicator(props) {
  var badgeMessage = (0, _formatMessage2.default)('Missing items for {title}', { title: props.title });
  return _react2.default.createElement(_Indicator2.default, {
    title: badgeMessage,
    variant: 'danger'
  });
}

MissingIndicator.propTypes = {
  title: _propTypes.string.isRequired
};