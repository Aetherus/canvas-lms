'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRegistryEntry = mockRegistryEntry;
exports.mockApp = mockApp;
exports.mockDocument = mockDocument;
exports.mockComponent = mockComponent;
exports.mockRegistry = mockRegistry;
exports.mockAnimator = mockAnimator;
exports.mockStore = mockStore;
exports.mockManager = mockManager;
exports.createAnimation = createAnimation;

var _manager = require('../../manager');

function mockRegistryEntry(ids, name, date) {
  return {
    componentIds: ids,
    component: mockComponent(name, date)
  };
} /*
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

function mockApp() {
  return {
    fixedElementForItemScrolling: jest.fn()
  };
}

function mockDocument() {
  return {
    activeElement: 'active-element',
    querySelector: jest.fn(),
    body: {}
  };
}

function mockComponent(name, date) {
  return {
    getFocusable: jest.fn(function () {
      return name + '-focusable';
    }),
    getScrollable: jest.fn(function () {
      return name + '-scrollable';
    }),
    props: { date: date }
  };
}

function mockRegistry() {
  return {
    getComponent: jest.fn(),
    getLastComponent: jest.fn(),
    getAllNewActivityIndicatorsSorted: jest.fn(),
    getAllItemsSorted: jest.fn()
  };
}

function mockAnimator() {
  return {
    getWindow: jest.fn(function () {
      return window;
    }),
    focusElement: jest.fn(),
    elementPositionMemo: jest.fn(),
    maintainViewportPositionFromMemo: jest.fn(),
    scrollTo: jest.fn(),
    scrollToTop: jest.fn(),
    isAboveScreen: jest.fn(),
    isBelowScreen: jest.fn(),
    isOnScreen: jest.fn(),
    isOffScreen: jest.fn()
  };
}

function mockStore() {
  return {
    getState: jest.fn(),
    dispatch: jest.fn()
  };
}

function mockManager() {
  return {
    registry: mockRegistry(),
    animator: mockAnimator(),
    store: mockStore(),
    app: mockApp(),
    document: mockDocument(),

    getRegistry: function getRegistry() {
      return this.registry;
    },
    getAnimator: function getAnimator() {
      return this.animator;
    },
    getStore: function getStore() {
      return this.store;
    },
    getApp: function getApp() {
      return this.app;
    },
    getDocument: function getDocument() {
      return this.document;
    },
    getStickyOffset: function getStickyOffset() {
      return 34;
    },
    totalOffset: function totalOffset() {
      return 42;
    }
  };
}

function createAnimation(AnimationClass) {
  var manager = mockManager();
  var expectedActions = _manager.DynamicUiManager.expectedActionsFor(AnimationClass);
  var animation = new AnimationClass(expectedActions, manager);
  return Object.assign({ animation: animation, manager: manager }, manager);
}