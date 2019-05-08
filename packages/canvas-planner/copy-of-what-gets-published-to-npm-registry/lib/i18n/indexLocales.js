'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flipMessage = require('./flip-message');

var _ar = require('../../config/locales/ar.json');

var _ar2 = _interopRequireDefault(_ar);

var _bg = require('../../config/locales/bg.json');

var _bg2 = _interopRequireDefault(_bg);

var _cs = require('../../config/locales/cs.json');

var _cs2 = _interopRequireDefault(_cs);

var _da = require('../../config/locales/da.json');

var _da2 = _interopRequireDefault(_da);

var _de = require('../../config/locales/de.json');

var _de2 = _interopRequireDefault(_de);

var _el = require('../../config/locales/el.json');

var _el2 = _interopRequireDefault(_el);

var _en_AU = require('../../config/locales/en_AU.json');

var _en_AU2 = _interopRequireDefault(_en_AU);

var _en_GB = require('../../config/locales/en_GB.json');

var _en_GB2 = _interopRequireDefault(_en_GB);

var _en = require('../../config/locales/en.json');

var _en2 = _interopRequireDefault(_en);

var _es = require('../../config/locales/es.json');

var _es2 = _interopRequireDefault(_es);

var _fa_IR = require('../../config/locales/fa_IR.json');

var _fa_IR2 = _interopRequireDefault(_fa_IR);

var _fr_CA = require('../../config/locales/fr_CA.json');

var _fr_CA2 = _interopRequireDefault(_fr_CA);

var _fr = require('../../config/locales/fr.json');

var _fr2 = _interopRequireDefault(_fr);

var _he = require('../../config/locales/he.json');

var _he2 = _interopRequireDefault(_he);

var _ht = require('../../config/locales/ht.json');

var _ht2 = _interopRequireDefault(_ht);

var _hu = require('../../config/locales/hu.json');

var _hu2 = _interopRequireDefault(_hu);

var _hy = require('../../config/locales/hy.json');

var _hy2 = _interopRequireDefault(_hy);

var _it = require('../../config/locales/it.json');

var _it2 = _interopRequireDefault(_it);

var _ja = require('../../config/locales/ja.json');

var _ja2 = _interopRequireDefault(_ja);

var _ko = require('../../config/locales/ko.json');

var _ko2 = _interopRequireDefault(_ko);

var _mi = require('../../config/locales/mi.json');

var _mi2 = _interopRequireDefault(_mi);

var _nl = require('../../config/locales/nl.json');

var _nl2 = _interopRequireDefault(_nl);

var _nn = require('../../config/locales/nn.json');

var _nn2 = _interopRequireDefault(_nn);

var _no = require('../../config/locales/no.json');

var _no2 = _interopRequireDefault(_no);

var _pl = require('../../config/locales/pl.json');

var _pl2 = _interopRequireDefault(_pl);

var _pt_BR = require('../../config/locales/pt_BR.json');

var _pt_BR2 = _interopRequireDefault(_pt_BR);

var _pt = require('../../config/locales/pt.json');

var _pt2 = _interopRequireDefault(_pt);

var _ro = require('../../config/locales/ro.json');

var _ro2 = _interopRequireDefault(_ro);

var _ru = require('../../config/locales/ru.json');

var _ru2 = _interopRequireDefault(_ru);

var _sq = require('../../config/locales/sq.json');

var _sq2 = _interopRequireDefault(_sq);

var _sr = require('../../config/locales/sr.json');

var _sr2 = _interopRequireDefault(_sr);

var _sv = require('../../config/locales/sv.json');

var _sv2 = _interopRequireDefault(_sv);

var _tr = require('../../config/locales/tr.json');

var _tr2 = _interopRequireDefault(_tr);

var _uk_UA = require('../../config/locales/uk_UA.json');

var _uk_UA2 = _interopRequireDefault(_uk_UA);

var _vi = require('../../config/locales/vi.json');

var _vi2 = _interopRequireDefault(_vi);

var _zh = require('../../config/locales/zh.json');

var _zh2 = _interopRequireDefault(_zh);

var _zh_HK = require('../../config/locales/zh_HK.json');

var _zh_HK2 = _interopRequireDefault(_zh_HK);

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
  enflip: (0, _flipMessage.flipAll)(_en2.default), ar: _ar2.default, bg: _bg2.default, cs: _cs2.default, da: _da2.default, de: _de2.default, el: _el2.default, 'en-AU': _en_AU2.default, 'en-GB': _en_GB2.default, en: _en2.default,
  es: _es2.default, 'fa-IR': _fa_IR2.default, 'fr-CA': _fr_CA2.default, fr: _fr2.default, he: _he2.default, ht: _ht2.default, hu: _hu2.default, hy: _hy2.default, it: _it2.default, ja: _ja2.default, ko: _ko2.default, mi: _mi2.default, nl: _nl2.default, nn: _nn2.default,
  nb: _no2.default, pl: _pl2.default, 'pt-BR': _pt_BR2.default, pt: _pt2.default, ro: _ro2.default, ru: _ru2.default, sq: _sq2.default, sr: _sr2.default, sv: _sv2.default, tr: _tr2.default, 'uk-UA': _uk_UA2.default, vi: _vi2.default,
  'zh-Hans': _zh2.default, 'zh-Hant': _zh_HK2.default
};