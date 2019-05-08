'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
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

function generator(_ref) {
  var colors = _ref.colors;

  return {
    courseColor: colors.brand
  };
}

generator['canvas-a11y'] = generator['modern-a11y'] = function (_ref2) {
  var colors = _ref2.colors;

  return {
    courseColor: colors.licorice
  };
};

generator.canvas = function (variables) {
  return {
    courseColor: variables["ic-brand-primary"]
  };
};