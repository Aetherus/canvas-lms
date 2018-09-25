/*
 * Copyright (C) 2014 - present Instructure, Inc.
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

import $ from 'jquery'
import LoginFormSwitcher from '../login/LoginFormSwitcher'
import 'login'

const switcher = new LoginFormSwitcher(
    $('#login_form'),
    $('#forgot_password_form')
  )

$('.forgot_password_link').click((event) => {
  event.preventDefault()
  return switcher.switchToForgotPassword()
})

$('.login_link').click((event) => {
  event.preventDefault()
  return switcher.switchToLogin()
})

$('.sjtu-tab').on('click', function(event) {
  var contentId = event.target.dataset.content;
  var $content = $(contentId);
  $content.show();
  $content.siblings('.sjtu-login-form').hide();
  $(event.target).addClass('sjtu-active');
  $(event.target).siblings('.sjtu-tab').removeClass('sjtu-active');
});
