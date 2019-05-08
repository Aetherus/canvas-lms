'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatMessage = require('../format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _indexLocales = require('./indexLocales');

var _indexLocales2 = _interopRequireDefault(_indexLocales);

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
exports.default = {
  init: function init(locale) {
    document.documentElement.lang = locale;
    _formatMessage2.default.setup({
      locale: locale,
      missingTranslation: 'ignore',
      translations: _indexLocales2.default,
      generateId: require('format-message-generate-id/underscored_crc32')
    });
  }
};