'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;

var _color = require('@instructure/ui-themeable/lib/utils/color');

function generator(_ref) {
  var borders = _ref.borders,
      colors = _ref.colors,
      typography = _ref.typography,
      spacing = _ref.spacing;

  return {
    fontSize: typography.fontSizeXSmall,
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightNormal,
    color: colors.white,
    background: colors.brand,
    backgroundHover: (0, _color.darken)(colors.brand, 5),
    padding: '0 ' + spacing.small,
    textTransform: 'uppercase',
    lineHeight: spacing.medium,
    iconMargin: spacing.xxSmall,
    hasIconRightPadding: spacing.xSmall,
    borderRadius: borders.radiusMedium,
    focusRingWidth: borders.widthSmall,
    focusRingColor: colors.brand
  };
} /*
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


generator.canvas = function (variables) {
  return {
    background: variables["ic-brand-primary"],
    backgroundHover: (0, _color.darken)(variables["ic-brand-primary"], 5),
    focusRingColor: variables["ic-brand-primary"]
  };
};