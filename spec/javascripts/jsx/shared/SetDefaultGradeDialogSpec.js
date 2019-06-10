/*
 * Copyright (C) 2015 - present Instructure, Inc.
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

import {waitFor} from '../support/Waiters'

import SetDefaultGradeDialog from 'compiled/shared/SetDefaultGradeDialog'

import 'jst/SetDefaultGradeDialog'
import 'jst/_grading_box'

const assignment = Object.freeze({
  id: '2',
  points_possible: 10,
  name: 'an Assignment',
  grading_type: 'points'
})

function closeDialog() {
  Array.from(document.querySelectorAll('button'))
    .find(node => node.innerText === 'close')
    .click()
}

QUnit.module('SetDefaultGradeDialog', () => {
  let dialog

  test('#gradeIsExcused returns true if grade is EX', function() {
    dialog = new SetDefaultGradeDialog({assignment})
    dialog.show()
    deepEqual(dialog.gradeIsExcused('EX'), true)
    deepEqual(dialog.gradeIsExcused('ex'), true)
    deepEqual(dialog.gradeIsExcused('eX'), true)
    deepEqual(dialog.gradeIsExcused('Ex'), true)
    closeDialog()
  })

  test('#gradeIsExcused returns false if grade is not EX', function() {
    dialog = new SetDefaultGradeDialog({assignment})
    dialog.show()
    deepEqual(dialog.gradeIsExcused('14'), false)
    deepEqual(dialog.gradeIsExcused('F'), false)
    // this test documents that we do not consider 'excused' to return true
    deepEqual(dialog.gradeIsExcused('excused'), false)
    closeDialog()
  })

  test('#show text', function() {
    dialog = new SetDefaultGradeDialog({assignment})
    dialog.show()
    ok(document.getElementById('default_grade_description').innerText.includes('same grade'))
    closeDialog()
  })

  test('#show changes text for grading percent', function() {
    const percentAssignmentParams = {...assignment, grading_type: 'percent'}
    dialog = new SetDefaultGradeDialog({assignment: percentAssignmentParams})
    dialog.show()
    ok(
      document.getElementById('default_grade_description').innerText.includes('same percent grade')
    )
    closeDialog()
  })

  QUnit.module('submit behaviors', submitBehaviorHooks => {
    const context_id = '1'
    let alert
    let server
    let publishStub

    function clickSetDefaultGrade() {
      Array.from(document.querySelectorAll('button[role="button"]'))
        .find(node => node.innerText === 'Set Default Grade')
        .click()
    }

    function respondWithPayload(payload) {
      server.respondWith('POST', `/courses/${context_id}/gradebook/update_submission`, [
        200,
        {'Content-Type': 'application/json'},
        JSON.stringify(payload)
      ])
    }

    submitBehaviorHooks.beforeEach(() => {
      server = sinon.createFakeServer({respondImmediately: true})
      alert = sinon.spy()
      publishStub = sinon.stub($, 'publish')
    })

    submitBehaviorHooks.afterEach(() => {
      publishStub.restore()
      server.restore()
    })

    test('submit reports number of students', async () => {
      const payload = [
        {submission: {id: '11', assignment_id: '2', user_id: '3'}},
        {submission: {id: '22', assignment_id: '2', user_id: '4'}}
      ]
      respondWithPayload(payload)
      const students = [{id: '3'}, {id: '4'}]
      dialog = new SetDefaultGradeDialog({assignment, students, context_id, alert})
      dialog.show()
      await waitFor(() => document.getElementById('set_default_grade_form'))
      clickSetDefaultGrade()
      await waitFor(() => !document.getElementById('set_default_grade_form'))
      const {
        firstCall: {
          args: [message]
        }
      } = alert
      strictEqual(message, '2 Student scores updated')
    })

    test('submit reports number of students when api includes duplicates due to group assignments', async () => {
      const payload = [
        {submission: {id: '11', assignment_id: '2', user_id: '3'}},
        {submission: {id: '22', assignment_id: '2', user_id: '4'}},
        {submission: {id: '33', assignment_id: '2', user_id: '5'}},
        {submission: {id: '44', assignment_id: '2', user_id: '6'}}
      ]
      respondWithPayload(payload)
      const students = [{id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
      // adjust page size so that we generate two requests
      dialog = new SetDefaultGradeDialog({assignment, students, context_id, page_size: 2, alert})
      dialog.show()
      await waitFor(() => document.getElementById('set_default_grade_form'))
      clickSetDefaultGrade()
      await waitFor(() => !document.getElementById('set_default_grade_form'))
      const {
        firstCall: {
          args: [message]
        }
      } = alert
      strictEqual(message, '4 Student scores updated')
    })
  })
})
