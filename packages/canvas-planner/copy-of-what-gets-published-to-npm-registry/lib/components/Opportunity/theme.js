"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generator;
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
function generator(_ref) {
  var colors = _ref.colors,
      spacing = _ref.spacing,
      typography = _ref.typography;

  return {
    lineHeight: typography.lineHeightCondensed,
    fontSize: typography.fontSizeMedium,
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightNormal,
    color: colors.licorice,
    secondaryColor: colors.slate,
    background: colors.white,
    namePaddingTop: spacing.xxSmall,
    nameFontSize: typography.fontSizeSmall,
    statusPadding: spacing.small,
    dueFontSize: typography.fontSizeXSmall,
    dueMargin: spacing.xxSmall,
    dueTextFontWeight: typography.fontWeightBold,
    footerPadding: spacing.xSmall,
    pointsFontSize: typography.fontSizeXSmall,
    pointsNumberFontSize: typography.fontSizeLarge,
    pointsLineHeight: typography.lineHeightFit,
    titleMargin: spacing.xSmall,
    closeButtonIconSize: typography.fontSizeSmall
  };
}