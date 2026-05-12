// Source: https://gemini.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.z1wFPH2lwQg.2018.O/am=IQyExIAF9DeAIj4BAAAA_AYYAAAAEAI/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk2PaeWBbdEIoLAcf16SqWRMQi5Trg/ee=DGWCxb:CgYiQ;NJ1rfe:yGfSdd;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.dqySX6qLyOs.libheifWasm.O%3A%3BBardChatUi.rKd2S_4-8J8.loadWasmSipCoca.O%3A%3B
'use strict'
this.default_BardChatUi = this.default_BardChatUi || {}
;(function (_) {
  var window = this
  try {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
    */
    /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
    */
    /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
    */
    var baa,
      daa,
      naa,
      yaa,
      zaa,
      Baa,
      Ga,
      Naa,
      Waa,
      Xaa,
      Yaa,
      aba,
      eba,
      gba,
      lba,
      qba,
      oba,
      pba,
      Oba,
      Qba,
      Sba,
      Uba,
      ec,
      bca,
      fca,
      jca,
      Hca,
      Ica,
      Jca,
      Ic,
      Kca,
      Sca,
      Tca,
      Nc,
      Uca,
      Vca,
      fda,
      hda,
      ida,
      lda,
      tda,
      uda,
      aaa,
      Xc,
      xda,
      yda,
      zda,
      Yc,
      Ada,
      Cda,
      Zc,
      Bda,
      Dda,
      Eda,
      Fda,
      Hda,
      Gda,
      Ida
    _.aa = function (a) {
      return function () {
        return aaa[a].apply(this, arguments)
      }
    }
    _.ca = function (a, b) {
      return aaa[a] = b
    }
    _.da = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.da)
      else {
        let c = Error().stack
        c && (this.stack = c)
      }
      a && (this.message = String(a))
      b !== void 0 && (this.cause = b)
      this.ka = !0
    }
    baa = function (a, b) {
      a = a.split('%s')
      var c = '', d = a.length - 1
      for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s')
      _.da.call(this, c + a[d])
    }
    _.ia = function (a) {
      _.ha.setTimeout(() => {
        throw a
      }, 0)
    }
    _.ja = function (a, b) {
      return a.lastIndexOf(b, 0) == 0
    }
    _.ka = function (a) {
      return /^[\s\xa0]*$/.test(a)
    }
    _.la = function (a, b) {
      return a.indexOf(b) != -1
    }
    _.caa = function (a) {
      return _.la(_.ma().toLowerCase(), a.toLowerCase())
    }
    _.eaa = function (a, b) {
      var c = 0
      a = String(a).trim().split('.')
      b = String(b).trim().split('.')
      var d = Math.max(a.length, b.length)
      for (let g = 0; c == 0 && g < d; g++) {
        var e = a[g] || '', f = b[g] || ''
        do {
          e = /(\d*)(\D*)(.*)/.exec(e) || ['', '', '', '']
          f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', '']
          if (e[0].length == 0 && f[0].length == 0) break
          c =
            daa(
              e[1].length == 0 ? 0 : parseInt(e[1], 10),
              f[1].length == 0 ? 0 : parseInt(f[1], 10),
            ) || daa(e[2].length == 0, f[2].length == 0) || daa(e[2], f[2])
          e = e[3]
          f = f[3]
        } while (c == 0)
      }
      return c
    }
    daa = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    }
    _.ma = function () {
      var a = _.ha.navigator
      return a && (a = a.userAgent) ? a : ''
    }
    _.gaa = function (a) {
      if (!_.faa || !_.oa) return !1
      for (let b = 0; b < _.oa.brands.length; b++) {
        let { brand: c } = _.oa.brands[b]
        if (c && _.la(c, a)) return !0
      }
      return !1
    }
    _.pa = function (a) {
      return _.la(_.ma(), a)
    }
    _.qa = function () {
      return _.faa ? !!_.oa && _.oa.brands.length > 0 : !1
    }
    _.haa = function () {
      return _.qa() ? !1 : _.pa('Opera')
    }
    _.iaa = function () {
      return _.qa() ? !1 : _.pa('Trident') || _.pa('MSIE')
    }
    _.jaa = function () {
      return _.qa() ? _.gaa('Microsoft Edge') : _.pa('Edg/')
    }
    _.kaa = function () {
      return _.pa('Firefox') || _.pa('FxiOS')
    }
    _.ra = function () {
      return _.pa('Safari') &&
        !(_.laa() || (_.qa() ? 0 : _.pa('Coast')) || _.haa() ||
          (_.qa() ? 0 : _.pa('Edge')) || _.jaa() ||
          (_.qa() ? _.gaa('Opera') : _.pa('OPR')) || _.kaa() || _.pa('Silk') ||
          _.pa('Android'))
    }
    _.laa = function () {
      return _.qa()
        ? _.gaa('Chromium')
        : (_.pa('Chrome') || _.pa('CriOS')) && !(_.qa() ? 0 : _.pa('Edge')) ||
          _.pa('Silk')
    }
    _.maa = function () {
      return _.pa('Android') && !(_.laa() || _.kaa() || _.haa() || _.pa('Silk'))
    }
    naa = function (a = !1) {
      return a || _.faa ? !!_.oa && !!_.oa.platform : !1
    }
    _.oaa = function () {
      return naa() ? _.oa.platform === 'Android' : _.pa('Android')
    }
    _.paa = function () {
      return _.pa('iPhone') && !_.pa('iPod') && !_.pa('iPad')
    }
    _.sa = function () {
      return _.paa() || _.pa('iPad') || _.pa('iPod')
    }
    _.ta = function () {
      return naa() ? _.oa.platform === 'macOS' : _.pa('Macintosh')
    }
    _.qaa = function () {
      return naa() ? _.oa.platform === 'Linux' : _.pa('Linux')
    }
    _.raa = function () {
      return naa() ? _.oa.platform === 'Windows' : _.pa('Windows')
    }
    _.saa = function () {
      return naa() ? _.oa.platform === 'Chrome OS' : _.pa('CrOS')
    }
    _.taa = function () {
      var a = _.ma(), b = ''
      _.raa()
        ? (b = /Windows (?:NT|Phone) ([0-9.]+)/,
          b = (a = b.exec(a)) ? a[1] : '0.0')
        : _.sa()
        ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
          b = (a = b.exec(a)) && a[1].replace(/_/g, '.'))
        : _.ta()
        ? (b = /Mac OS X ([0-9_.]+)/,
          b = (a = b.exec(a)) ? a[1].replace(/_/g, '.') : '10')
        : _.caa('KaiOS')
        ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1])
        : _.oaa()
        ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1])
        : _.saa() &&
          (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            b = (a = b.exec(a)) && a[1])
      return b || ''
    }
    _.uaa = function (a) {
      return a[a.length - 1]
    }
    _.vaa = function (a, b, c) {
      var d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (--d; d >= 0; --d) d in e && b.call(c, e[d], d, a)
    }
    _.ua = function (a, b, c) {
      b = _.waa(a, b, c)
      return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b]
    }
    _.waa = function (a, b, c) {
      var d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (let f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f
      return -1
    }
    _.wa = function (a, b) {
      return _.va(a, b) >= 0
    }
    _.xa = function (a, b) {
      _.wa(a, b) || a.push(b)
    }
    _.Aa = function (a, b) {
      b = _.va(a, b)
      var c
      ;(c = b >= 0) && _.ya(a, b)
      return c
    }
    _.ya = function (a, b) {
      Array.prototype.splice.call(a, b, 1)
    }
    _.Ba = function (a) {
      var b = a.length
      if (b > 0) {
        let c = Array(b)
        for (let d = 0; d < b; d++) c[d] = a[d]
        return c
      }
      return []
    }
    _.Da = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        let d = arguments[c]
        if (_.Ca(d)) {
          let e = a.length || 0, f = d.length || 0
          a.length = e + f
          for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
      }
    }
    _.xaa = function (a, b, c) {
      return arguments.length <= 2
        ? Array.prototype.slice.call(a, b)
        : Array.prototype.slice.call(a, b, c)
    }
    _.Ea = function (a, b, c) {
      b = b || a
      var d = (g) => g
      c = c || d
      for (var e = d = 0, f = new Set(); e < a.length;) {
        let g = a[e++], p = c(g)
        f.has(p) || (f.add(p), b[d++] = g)
      }
      b.length = d
    }
    _.Fa = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    yaa = function () {
      return _.paa() || _.pa('iPod')
    }
    zaa = function () {
      return _.ra() && !_.sa()
    }
    Baa = function (a) {
      return Aaa[a] || ''
    }
    _.Daa = function (a) {
      a = Caa.test(a) ? a.replace(Caa, Baa) : a
      a = atob(a)
      var b = new Uint8Array(a.length)
      for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
      return b
    }
    _.Eaa = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Faa = function (a, b) {
      var c = a.length
      if (c !== b.length) return !1
      for (let d = 0; d < c; d++) if (a[d] !== b[d]) return !1
      return !0
    }
    Ga = function (a, b = !1) {
      return b && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
    }
    _.La = function (a, b) {
      a[_.Ka] |= b
    }
    _.Na = function (a) {
      _.La(a, 34)
      return a
    }
    _.Gaa = function (a) {
      _.La(a, 8192)
      return a
    }
    _.Haa = function (a) {
      _.La(a, 32)
      return a
    }
    _.Oa = function (a) {
      return a != null && a[_.Iaa] === _.Jaa
    }
    _.Qa = function (a, b) {
      return b === void 0
        ? a.Rb !== _.Pa && !!(2 & (a.Zh[_.Ka] | 0))
        : !!(2 & b) && a.Rb !== _.Pa
    }
    _.Kaa = function (a, b) {
      a.Rb = b ? _.Pa : void 0
    }
    _.Laa = function (a) {
      return a
    }
    _.Ra = function (a) {
      a.lje = !0
      return a
    }
    _.Va = function (a) {
      var b = a
      if ((0, _.Sa)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.Ta)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.Ua
        ? BigInt(a)
        : a = (0, _.Maa)(a)
          ? a ? '1' : '0'
          : (0, _.Sa)(a)
          ? a.trim() || '0'
          : String(a)
    }
    Naa = function (a, b) {
      if (a.length > b.length) return !1
      if (a.length < b.length || a === b) return !0
      for (let c = 0; c < a.length; c++) {
        let d = a[c], e = b[c]
        if (d > e) return !1
        if (d < e) return !0
      }
    }
    _.Oaa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Paa = function () {
      var a = Error()
      _.Oaa(a, 'severity', 'incident')
      _.ia(a)
    }
    _.Raa = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Qaa) != null ? c : Qaa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Paa())
      }
    }
    _.Wa = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Taa = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.Saa(a) + '`' + a)
      return a
    }
    _.Ya = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.ab = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.Vaa = function (a, b, c, d) {
      if (_.Oa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.bb] || (b[_.bb] = _.Uaa(b)) : new b()
          : void 0
      }
      c = a[_.Ka] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Ka] = d)
      return new b(a)
    }
    _.Uaa = function (a) {
      a = new a()
      _.Na(a.Zh)
      return a
    }
    Waa = function (a) {
      return a
    }
    Xaa = function (a, b, c, d, e, f) {
      a = _.Vaa(a, d, c, f)
      e && (a = _.cb(a))
      return a
    }
    Yaa = function (a) {
      return [a, this.get(a)]
    }
    _.Zaa = function (a) {
      var b = _.db(_.eb)
      return b ? a[b] : void 0
    }
    aba = function (a, b) {
      b < 100 || _.Raa($aa, 1)
    }
    _.dba = function (a, b, c, d) {
      var e = d !== void 0
      d = !!d
      var f = _.db(_.eb), g
      !e && f && (g = a[f]) && g.Y3a(aba)
      f = []
      var p = a.length
      g = 4294967295
      var t = !1, v = !!(b & 64), z = v ? b & 128 ? 0 : -1 : void 0
      if (!(b & 1)) {
        var D = p && a[p - 1]
        D != null && typeof D === 'object' && D.constructor === Object
          ? (p--, g = p)
          : D = void 0
        if (v && !(b & 128) && !e) {
          t = !0
          var J
          g = ((J = _.bba) != null ? J : _.Laa)(g - z, z, a, D, void 0) + z
        }
      }
      b = void 0
      for (J = 0; J < p; J++) {
        let S = a[J]
        if (S != null && (S = c(S, d)) != null) {
          if (v && J >= g) {
            let ba = J - z
            var M = void 0
            ;((M = b) != null ? M : b = {})[ba] = S
          } else f[J] = S
        }
      }
      if (D) {
        for (let S in D) {
          M = D[S]
          if (M == null || (M = c(M, d)) == null) continue
          p = +S
          let ba
          if (v && !Number.isNaN(p) && (ba = p + z) < g) f[ba] = M
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[S] = M
          }
        }
      }
      b && (t ? f.push(b) : f[g] = b)
      e && _.db(_.eb) && (a = _.Zaa(a)) && 'function' == typeof _.cba &&
        a instanceof _.cba && (f[_.eb] = a.ha())
      return f
    }
    eba = function (a) {
      a[0] = _.fb(a[0])
      a[1] = _.fb(a[1])
      return a
    }
    _.fb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.fba)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            let b = a[_.Ka] | 0
            return a.length === 0 && b & 1 ? void 0 : _.dba(a, b, _.fb)
          }
          if (_.Oa(a)) return gba(a)
          if ('function' == typeof _.gb && a instanceof _.gb) return a.mW()
          if (a instanceof _.hb) {
            return a = a.size !== 0 ? a.bhb(eba) : void 0, a
          }
          return
      }
      return a
    }
    _.jba = function (a, b) {
      if (b) {
        _.bba = b == null || b === _.Laa || b[hba] !== iba ? _.Laa : b
        try {
          return gba(a)
        } finally {
          _.bba = void 0
        }
      }
      return gba(a)
    }
    gba = function (a) {
      a = a.Zh
      return _.dba(a, a[_.Ka] | 0, _.fb)
    }
    _.mba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.Ka] | 0
        if (kba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && lba()
        if (e & 256) throw Error('G')
        if (e & 64) return (e | d) !== e && (a[_.Ka] = e | d), a
        if (c && (e |= 128, c !== a[0])) throw Error('H')
        a: {
          c = a
          e |= 64
          var f = c.length
          if (f) {
            var g = f - 1
            let t = c[g]
            if (
              t != null && typeof t === 'object' && t.constructor === Object
            ) {
              b = e & 128 ? 0 : -1
              g -= b
              if (g >= 1024) throw Error('J')
              for (var p in t) {
                if (f = +p, f < g) {
                  c[
                    f +
                    b
                  ] = t[p], delete t[p]
                } else break
              }
              e = e & -16760833 | (g & 1023) << 14
              break a
            }
          }
          if (b) {
            p = Math.max(b, f - (e & 128 ? 0 : -1))
            if (p > 1024) throw Error('K')
            e = e & -16760833 | (p & 1023) << 14
          }
        }
      }
      a[_.Ka] = e | 64 | d
      return a
    }
    lba = function () {
      if (kba) throw Error('I')
      _.Raa(nba, 5)
    }
    qba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Ka] | 0
        return a.length === 0 && c & 1 ? void 0 : oba(a, c, b)
      }
      if (_.Oa(a)) return pba(a)
      if (a instanceof _.hb) {
        b = a.X7
        if (b & 2) return a
        if (!a.size) return
        c = _.Na(a.bhb())
        if (a.Tda) {
          for (a = 0; a < c.length; a++) {
            let d = c[a], e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Oa(e)
              ? e = pba(e)
              : Array.isArray(e)
              ? e = oba(e, e[_.Ka] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if ('function' == typeof _.gb && a instanceof _.gb) return a
    }
    oba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.ib(a, b, !1, c && !(b & 16))
        : (_.La(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.rba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Kaa(a, !0)
      a.pab = _.Pa
      return a
    }
    pba = function (a) {
      var b = a.Zh, c = b[_.Ka] | 0
      return _.Qa(a, c) ? a : _.sba(a, b, c) ? _.rba(a, b) : _.ib(b, c)
    }
    _.ib = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.dba(a, b, qba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Ka] = b
      return a
    }
    _.cb = function (a) {
      var b = a.Zh, c = b[_.Ka] | 0
      return _.Qa(a, c)
        ? _.sba(a, b, c) ? _.rba(a, b, !0) : new a.constructor(_.ib(b, c, !1))
        : a
    }
    _.jb = function (a) {
      if (a.Rb !== _.Pa) return !1
      var b = a.Zh
      b = _.ib(b, b[_.Ka] | 0)
      _.La(b, 2048)
      a.Zh = b
      _.Kaa(a, !1)
      a.pab = void 0
      return !0
    }
    _.kb = function (a) {
      if (!_.jb(a) && _.Qa(a, a.Zh[_.Ka] | 0)) throw Error()
    }
    _.mb = function (a, b) {
      b === void 0 && (b = a[_.Ka] | 0)
      b & 32 && !(b & 4096) && (a[_.Ka] = b | 4096)
    }
    _.sba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Ka] = c | 2, _.Kaa(a, !0), !0)
        : !1
    }
    _.nb = function (a, b, c, d, e) {
      var f = c + (e ? 0 : -1), g = a.length - 1
      if (g >= 1 + (e ? 0 : -1) && f >= g) {
        let p = a[g]
        if (p != null && typeof p === 'object' && p.constructor === Object) {
          return p[c] = d, b
        }
      }
      if (f <= g) return a[f] = d, b
      if (d !== void 0) {
        let p
        g = ((p = b) != null ? p : b = a[_.Ka] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.tba = function (a, b, c, d, e, f, g, p, t) {
      var v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.ob(b) ||
          (b |= !a.length || p && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Ka] = b),
            Object.freeze(a))
        : (g === 2 && _.ob(b) &&
          (a = [...a], v = 0, b = _.qb(b, d), d = _.nb(c, d, e, a, f)),
          _.ob(b) || (t || (b |= 16), b !== v && (a[_.Ka] = b)))
      2 & b || !(4096 & b || 16 & b) || _.mb(c, d)
      return a
    }
    _.uba = function (a, b, c) {
      a = _.rb(a, b, c)
      return Array.isArray(a) ? a : _.sb
    }
    _.vba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.ob = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.wba = function (a) {
      a = [...a]
      for (let b = 0; b < a.length; b++) {
        let c = a[b] = [...a[b]]
        Array.isArray(c[1]) && (c[1] = _.Na(c[1]))
      }
      return _.Gaa(a)
    }
    _.ub = function (a, b, c, d, e) {
      _.kb(a)
      var f = a.Zh
      _.nb(
        f,
        f[_.Ka] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.xba = function (a, b, c, d, e, f, g, p, t) {
      var v = _.Qa(a, c)
      f = v ? 1 : f
      p = !!p || f === 3
      v = t && !v
      ;(f === 2 || v) && _.jb(a) && (b = a.Zh, c = b[_.Ka] | 0)
      a = _.uba(b, e, g)
      var z = a === _.sb ? 7 : a[_.Ka] | 0, D = _.vba(z, c)
      if (t = !(4 & D)) {
        var J = a, M = c
        let S = !!(2 & D)
        S && (M |= 2)
        let ba = !S, ea = !0, na = 0, Ja = 0
        for (; na < J.length; na++) {
          let Ia = _.Vaa(J[na], d, !1, M)
          if (Ia instanceof d) {
            if (!S) {
              let Za = _.Qa(Ia)
              ba && (ba = !Za)
              ea && (ea = Za)
            }
            J[Ja++] = Ia
          }
        }
        Ja < na && (J.length = Ja)
        D |= 4
        D = ea ? D & -4097 : D | 4096
        D = ba ? D | 8 : D & -9
      }
      D !== z && (a[_.Ka] = D, 2 & D && Object.freeze(a))
      if (
        v && !(8 & D || !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & D || !(16 & D) && 32 & c)))
      ) {
        _.ob(D) && (a = [...a], D = _.qb(D, c), c = _.nb(b, c, e, a, g))
        d = a
        v = D
        for (z = 0; z < d.length; z++) {
          J = d[z], D = _.cb(J), J !== D && (d[z] = D)
        }
        v |= 8
        D = v = d.length ? v | 4096 : v & -4097
        a[_.Ka] = D
      }
      return a = _.tba(a, D, b, c, e, g, f, t, p)
    }
    _.qb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.yba = function (a, b) {
      return _.vb(b, `[${a.substring(4)}`)
    }
    _.wb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.yb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        let d = arguments[b]
        _.Ca(d) ? _.yb.apply(null, d) : _.wb(d)
      }
    }
    _.zb = function () {
      this.XW = this.XW
      this.kla = this.kla
    }
    _.Bb = function (a, b) {
      _.Ab.call(this, a ? a.type : '')
      this.relatedTarget = this.currentTarget = this.target = null
      this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
        this.offsetY =
        this.offsetX =
          0
      this.key = ''
      this.charCode = this.keyCode = 0
      this.metaKey =
        this.shiftKey =
        this.altKey =
        this.ctrlKey =
          !1
      this.state = null
      this.oa = !1
      this.pointerId = 0
      this.pointerType = ''
      this.timeStamp = 0
      this.oj = null
      a && this.init(a, b)
    }
    _.Aba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++zba
      this.removed = this.Dra = !1
    }
    _.Cb = function (a, b, c) {
      for (let d in a) b.call(c, a[d], d, a)
    }
    _.Bba = function (a, b, c) {
      var d = {}
      for (let e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Cba = function (a, b, c) {
      for (let d in a) if (b.call(c, a[d], d, a)) return !0
      return !1
    }
    _.Db = function (a) {
      var b = [], c = 0
      for (let d in a) b[c++] = a[d]
      return b
    }
    _.Eb = function (a) {
      var b = [], c = 0
      for (let d in a) b[c++] = d
      return b
    }
    _.Fb = function (a) {
      for (let b in a) return !1
      return !0
    }
    _.Gb = function (a) {
      var b = {}
      for (let c in a) b[c] = a[c]
      return b
    }
    _.Hb = function (a, b) {
      for (let e = 1; e < arguments.length; e++) {
        var c = arguments[e]
        for (d in c) a[d] = c[d]
        for (let f = 0; f < Dba.length; f++) {
          var d = Dba[f]
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
      }
    }
    _.Eba = function (a) {
      var b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Eba.apply(null, arguments[0])
      }
      var c = {}
      for (let d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
    _.Ib = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Gba = function (a) {
      if (_.Jb) a(_.Jb)
      else {
        let b
        ;((b = Fba) != null ? b : Fba = []).push(a)
      }
    }
    _.Kb = function () {
      !_.Jb && _.Hba && _.Iba(_.Hba())
      return _.Jb
    }
    _.Iba = function (a) {
      _.Jb = a
      var b
      ;(b = Fba) == null || b.forEach(_.Gba)
      Fba = void 0
    }
    _.Lb = function (a) {
      _.Jb && _.Jb.Db(a)
    }
    _.Mb = function () {
      _.Jb && _.Jb.lca()
    }
    _.Nb = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Jba] = a
    }
    _.Ob = function () {
      _.zb.call(this)
      this.uX = new _.Ib(this)
      this.Tgd = this
      this.YIb = null
    }
    _.Qb = function (a, b) {
      var c = a
      b && (c = (0, _.Pb)(a, b))
      c = _.Qb.TMc(c)
      _.Qb.Rbd
        ? setTimeout(c, 0)
        : (c = _.Qb.OPd(c), _.Qb.svc || (_.Qb.svc = _.Qb.swd()), _.Qb.svc(c))
    }
    Oba = function () {
      for (var a; a = Kba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ia(b)
        }
        Lba(Mba, a)
      }
      Nba = !1
    }
    _.Rb = function (a, b) {
      this.Da = []
      this.nb = a
      this.Wa = b || null
      this.va = this.ka = !1
      this.oa = void 0
      this.Ua = this.ub = this.Ja = !1
      this.Ea = 0
      this.na = null
      this.Ba = 0
    }
    _.Sb = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.Tb = function (a, b) {
      this.width = a
      this.height = b
    }
    Qba = function () {
      var a = null
      if (!Pba) return a
      try {
        let b = (c) => c
        a = Pba.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    Sba = function () {
      Rba === void 0 && (Rba = Qba())
      return Rba
    }
    _.Xb = function (a) {
      var b = Sba()
      a = b ? b.createScriptURL(a) : a
      return new _.Vb(_.Wb, a)
    }
    _.Tba = function (a) {
      return a instanceof _.Vb
    }
    _.Zb = function (a) {
      if (_.Tba(a)) return a.ha
      throw Error('$')
    }
    Uba = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.$b = function (a) {
      return new _.Vba(_.Wb, a)
    }
    _.ac = function (a) {
      return a instanceof _.Vba
    }
    _.bc = function (a) {
      if (_.ac(a)) return a.ha
      throw Error('$')
    }
    ec = function (a) {
      return new cc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.fc = function (a, b = Wba) {
      if (_.ac(a)) return a
      for (let c = 0; c < b.length; ++c) {
        let d = b[c]
        if (d instanceof cc && d.Cj(a)) return _.$b(a)
      }
    }
    _.jc = function (a, b = Wba) {
      b = _.fc(a, b)
      b === void 0 && _.Xba(a.toString())
      return b || _.Yba
    }
    _.kc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.$b(URL.createObjectURL(a))
      b = a.type
      b.toLowerCase() === 'application/octet-stream'
        ? b = !0
        : (b = b.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
          b = (b == null ? void 0 : b.length) === 2 &&
            (/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i
              .test(b[1]) ||
              /^video\/(?:3gpp|avi|mpeg|mpg|mp4|ogg|webm|x-flv|x-matroska|quicktime|x-ms-wmv)$/i
                .test(b[1]) ||
              /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i
                .test(b[1]) ||
              /^font\/[\w-]+$/i.test(b[1])))
      if (!b) throw Error('$')
      return _.$b(URL.createObjectURL(a))
    }
    _.$ba = function (a) {
      if (!Zba) {
        a: {
          var b = document.createElement('a')
          try {
            b.href = a
          } catch (c) {
            a = void 0
            break a
          }
          a = b.protocol
          a = a === ':' || a === '' ? 'https:' : a
        }
        return a
      }
      try {
        b = new URL(a)
      } catch (c) {
        return 'https:'
      }
      return b.protocol
    }
    bca = function (a) {
      var b = !aca.test(a)
      b && _.Xba(a)
      if (!b) return a
    }
    _.lc = function (a) {
      return a instanceof _.Vba ? _.bc(a) : bca(a)
    }
    _.nc = function (a, b) {
      b = _.lc(b)
      b !== void 0 && (a.href = b)
    }
    _.pc = function (a) {
      var b = Sba()
      a = b ? b.createHTML(a) : a
      return new _.oc(_.Wb, a)
    }
    _.cca = function (a) {
      return a instanceof _.oc
    }
    _.qc = function (a) {
      if (_.cca(a)) return a.ha
      throw Error('$')
    }
    _.rc = function (a, b) {
      a.src = _.Zb(b).toString()
    }
    _.dca = function (a, b) {
      a.srcdoc = _.qc(b)
    }
    _.eca = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.tc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.Vb) throw new _.sc('TrustedResourceUrl', 0)
          _.eca(a, [])
          b = _.lc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.Vb)) throw new _.sc(typeof c, 1)
          _.eca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.rc(a, c)
          break
        case 2:
          if (c instanceof _.Vb) throw new _.sc('TrustedResourceUrl', 2)
          _.eca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.lc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.Wa(b, void 0)
      }
    }
    _.uc = function (a, b, c, d) {
      b = _.lc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.vc = function (a) {
      return fca('script', a)
    }
    _.gca = function (a) {
      return fca('style', a)
    }
    fca = function (a, b = document) {
      var c,
        d = (c = b.querySelector) == null ? void 0 : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.wc = function (a) {
      var b = Sba()
      a = b ? b.createScript(a) : a
      return new _.hca(_.Wb, a)
    }
    _.ica = function (a) {
      return a instanceof _.hca
    }
    _.xc = function (a) {
      if (_.ica(a)) return a.ha
      throw Error('$')
    }
    jca = function (a) {
      var b = _.vc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.kca = function (a, b, c) {
      a.textContent = _.xc(b)
      ;(c == null ? 0 : c.cMd) || jca(a)
    }
    _.yc = function (a, b, c) {
      a.src = _.Zb(b)
      ;(c == null ? 0 : c.cMd) || jca(a)
    }
    _.mca = function (a) {
      if (a instanceof _.lca) return a.ha
      throw Error('$')
    }
    _.zc = function (a, b) {
      a.nodeType === 1 && _.nca(a)
      a.innerHTML = _.qc(b)
    }
    _.Ac = function (a, b, c, d) {
      if (a.length === 0) throw Error('$')
      a = a.map((f) => _.mca(f))
      var e = c.toLowerCase()
      if (a.every((f) => e.indexOf(f) !== 0)) throw Error('aa`' + c)
      b.setAttribute(c, d)
    }
    _.nca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('$')
    }
    _.qca = function (a, b, c) {
      if (_.Tba(b)) _.oca(a, b, c)
      else {
        if (pca.indexOf(c) === -1) throw Error('ba`' + c)
        b = _.lc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.oca = function (a, b, c) {
      a.href = _.Zb(b).toString()
      a.rel = c
    }
    _.sca = function (a) {
      return 'function' == typeof _.rca && a instanceof _.rca
    }
    _.tca = function (a) {
      if (_.sca(a)) return a.ha
      throw Error('$')
    }
    _.Bc = function (a, b, c) {
      return a.parseFromString(_.qc(b), c)
    }
    _.Cc = function (a, b) {
      b = _.lc(b)
      b !== void 0 && (a.href = b)
    }
    _.uca = function (a, b) {
      return a.createContextualFragment(_.qc(b))
    }
    _.vca = function (a) {
      return _.pc(a)
    }
    _.wca = function (a) {
      return _.Xb(a)
    }
    _.Dc = function (a) {
      a = a[0].toLowerCase()
      return new _.lca(_.Wb, a)
    }
    _.Gc = function (a, b) {
      if (_.cca(a)) return a
      a = _.Ec(String(a))
      if (b == null ? 0 : b.fle) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.Kbb) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.gle) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.pc(a)
    }
    _.Ec = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.yca = function (a) {
      return _.xca('', a)
    }
    _.xca = function (a, b) {
      a = _.Gc(a)
      return _.pc(b.map((c) => _.qc(_.Gc(c))).join(_.qc(a).toString()))
    }
    _.zca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.pc(a)
    }
    _.Cca = function (a) {
      if (!Aca.test(a)) throw Error('$')
      if (Bca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.Hc = function (a, b, c) {
      _.Cca(a)
      var d = `<${a}`
      b && (d += _.Dca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Eca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.yca(c.map((e) => _.cca(e) ? e : _.Gc(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.pc(d)
    }
    _.Dca = function (a) {
      var b = '', c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Aca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Fca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.ac(e)
              ? e.toString()
              : bca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.Gc(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Gca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Hca = function (a, b) {
      var c = b.createRange()
      c.selectNode(b.body)
      a = _.pc(a)
      return _.uca(c, a)
    }
    Ica = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Jca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    Ic = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Kca = function (a) {
      return a.parts.map((b) => {
        var c = b.O1a
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.Jc = function (a) {
      return _.Lca.sanitize(a)
    }
    _.Mca = function (a) {
      var b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        Thb: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.Kc = function (a, ...b) {
      if (b.length === 0) return _.Xb(a[0])
      a[0].toLowerCase()
      var c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.Xb(c)
    }
    _.Lc = function (a, b) {
      a = _.Mca(_.Zb(a).toString())
      return _.Nca(a.Thb, a.params, a.fragment, b)
    }
    _.Nca = function (a, b, c, d) {
      function e(g, p) {
        g != null &&
          (Array.isArray(g)
            ? g.forEach((t) => e(t, p))
            : (b += f + encodeURIComponent(p) + '=' + encodeURIComponent(g),
              f = '&'))
      }
      var f = b.length ? '&' : '?'
      d.constructor === Object && (d = Object.entries(d))
      Array.isArray(d) ? d.forEach((g) => e(g[1], g[0])) : d.forEach(e)
      return _.Xb(a + b + c)
    }
    _.Oca = function (a, b) {
      a = _.Mca(_.Zb(a).toString())
      var c = a.Thb.slice(-1) === '/' ? '' : '/'
      b = a.Thb + c + encodeURIComponent(b)
      return _.Xb(b + a.params + a.fragment)
    }
    _.Pca = function (a) {
      a = _.xc(a).toString()
      return _.Xb(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.Qca = function (a, b) {
      var c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.Rca = function (a, b) {
      var c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    Sca = function (a, b) {
      var c = b || _.Mc(), d = c.Fg()
      b = c.createElement('STYLE')
      var e = _.gca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    Tca = function (a, b) {
      this.ha = a
      this.ka = b
    }
    Nc = function (a, b) {
      _.zb.call(this)
      this.na = a
      this.oa = b
      this.ma = []
      this.ha = []
      this.ka = []
    }
    Uca = function () {
      this.Ba = this.va = null
    }
    Vca = function (a = window) {
      return a.WIZ_global_data
    }
    _.Wca = function (a, b = window) {
      return (b = Vca(b)) && a in b ? b[a] : null
    }
    _.Pc = function (a, b = window) {
      return new _.Oc(a, _.Wca(a, b))
    }
    _.Xca = function (a, b, c, d, e, f, g) {
      var p = ''
      a && (p += a + ':')
      c && (p += '//', b && (p += b + '@'), p += c, d && (p += ':' + d))
      e && (p += e)
      f && (p += '?' + f)
      g && (p += '#' + g)
      return p
    }
    _.Qc = function (a) {
      return a.match(Yca)
    }
    _.Sc = function (a) {
      return a ? decodeURI(a) : a
    }
    _.Tc = function (a, b) {
      return _.Qc(b)[a] || null
    }
    _.Zca = function (a) {
      a = _.Tc(1, a)
      !a && _.ha.self && _.ha.self.location &&
        (a = _.ha.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.Uc = function (a) {
      a = _.Qc(a)
      return _.Xca(a[1], a[2], a[3], a[4])
    }
    _.ada = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          let d = a[c].indexOf('='), e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.$ca(f) : '')
        }
      }
    }
    _.bda = function (a, b) {
      if (!b) return a
      var c = a.indexOf('#')
      c < 0 && (c = a.length)
      var d = a.indexOf('?')
      if (d < 0 || d > c) {
        d = c
        var e = ''
      } else e = a.substring(d + 1, c)
      a = [a.slice(0, d), e, a.slice(c)]
      c = a[1]
      a[1] = b ? c ? c + '&' + b : b : c
      return a[0] + (a[1] ? '?' + a[1] : '') + a[2]
    }
    _.cda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.cda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.Vc(b)))
    }
    _.dda = function (a) {
      var b = []
      for (let c in a) _.cda(c, a[c], b)
      return b.join('&')
    }
    _.eda = function (a, b, c, d) {
      for (var e = c.length; (b = a.indexOf(c, b)) >= 0 && b < d;) {
        var f = a.charCodeAt(b - 1)
        if (f == 38 || f == 63) {
          if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) {
            return b
          }
        }
        b += e + 1
      }
      return -1
    }
    fda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        let b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    hda = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      var d = _.ha._F_jsUrl
      ;(a = b || fda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!gda(c)) throw Error('pa')
      return c
    }
    ida = function () {
      var a, b
      return {
        promise: new Promise((c, d) => {
          a = c
          b = d
        }),
        resolve: a,
        reject: b,
      }
    }
    lda = function (a) {
      var { promise: b, resolve: c, reject: d } = ida()
      jda.set(a, { promise: b, resolve: c, reject: d })
      kda || (kda = [],
        queueMicrotask(() => {
          var e = [...kda]
          kda = null
          var f = _.Kb().Fa(e)
          for (let g of e) f[g].then(jda.get(g).resolve, jda.get(g).reject)
        }))
      kda.push(a)
      return b
    }
    _.qda = function () {
      if (mda) return nda
      mda = !0
      try {
        var a = hda(_.ha._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      var b = oda(_.pda(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Gba((d) => {
        for (let e of c) {
          let f = b[e]
          for (let g of Object.keys(f)) d.fFa(e, g)
        }
      })
      return nda = !0
    }
    _.rda = function () {}
    tda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return sda[a]
    }
    uda = function (a) {
      var b = 0, c = 0
      do {
        var d = tda(a)
        b |= (d & 31) << c
        c += 5
      } while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.wda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || '', e = c.pga || ''
      !c.Xge && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('xa')
      }
      var f = c.Sje || _.vda
      a = fda(a)
      b = new f(
        _.wca(hda('', a), {
          QEb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.Yne || a && a.hasAttribute('crossorigin')
      a = c.yge || a && a.getAttribute('crossorigin')
      d && (b.MUa = d)
      a &&
        (b.kHa = a)
      c.LUa && (b.LUa = c.LUa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      var g = _.Kb()
      g.Ba = b
      g.hCc(!0)
      _.Wc = c.Ofe === 'BATCH' ? lda : (p) => Promise.resolve(g.load(p))
    }
    aaa = []
    xda = Object.create
    yda = Object.defineProperty
    zda = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ]
      for (var b = 0; b < a.length; ++b) {
        var c = a[b]
        if (c && c.Math == Math) return c
      }
      throw Error('a')
    }
    Yc = zda(this)
    Ada = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Yc.BigInt64Array && (Ada.push('BigInt64'), Ada.push('BigUint64'))
    Cda = function (a, b) {
      if (b) {
        for (var c = 0; c < Ada.length; c++) {
          Bda(Ada[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Zc = function (a, b) {
      b && Bda(a, b)
    }
    Bda = function (a, b) {
      var c = Yc
      a = a.split('.')
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d]
        if (!(e in c)) return
        c = c[e]
      }
      a = a[a.length - 1]
      d = c[a]
      b = b(d)
      b != d && b != null &&
        yda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Dda = Object.setPrototypeOf
    Eda = function (a, b) {
      a.prototype = xda(b.prototype)
      a.prototype.constructor = a
      Dda(a, b)
      a.Cc = b.prototype
    }
    Fda = function (a) {
      function b(d) {
        return a.next(d)
      }
      function c(d) {
        return a.throw(d)
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
      })
    }
    _.$c = function (a) {
      return Fda(a())
    }
    Zc('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    Zc('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (Xc = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(Yc.top) || b(Yc) || b({})
      return a || {}
    })
    Hda = function () {
      return Gda
    }
    _.ad = function () {
      return Hda
    }
    Gda = function (a) {
      return a
    }
    Ida = function (a) {
      var b = Xc
      if (!b[0]) return a
      var c = b[0]
      return function () {
        var d = b[0]
        b[0] = c
        try {
          return a.apply(this, arguments)
        } finally {
          b[0] = d
        }
      }
    }
    Zc('globalThis', function (a) {
      return a || Yc
    })
    Zc('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    Zc('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    Zc('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    Zc('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    Zc('Object.fromEntries', function (a) {
      return a ? a : function (b) {
        var c = {}
        if (!(Symbol.iterator in b)) throw new TypeError('i`' + b)
        b = b[Symbol.iterator].call(b)
        for (var d = b.next(); !d.done; d = b.next()) {
          d = d.value
          if (Object(d) !== d) throw new TypeError('j')
          c[d[0]] = d[1]
        }
        return c
      }
    })
    Zc('String.prototype.replaceAll', function (a) {
      return a ? a : function (b, c) {
        if (b instanceof RegExp && !b.global) throw new TypeError('k')
        return b instanceof RegExp
          ? this.replace(b, c)
          : this.replace(
            new RegExp(
              String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
                .replace(/\x08/g, '\\x08'),
              'g',
            ),
            c,
          )
      }
    })
    Zc('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    Zc('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    Zc('Promise.withResolvers', function (a) {
      return a ? a : function () {
        var b, c
        return {
          promise: new Promise(function (d, e) {
            b = d
            c = e
          }),
          resolve: b,
          reject: c,
        }
      }
    })
    Zc('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var Jda = {},
      Kda = function () {
        if (typeof Yc.EventTarget === 'function') {
          var a = Yc.EventTarget.prototype
        } else {for (
            a = Yc;
            a && !Object.prototype.hasOwnProperty.call(a, 'addEventListener');
          ) a = a.__proto__}
        if (a) {
          var b = a.removeEventListener,
            c = a.addEventListener,
            d = new WeakMap(),
            e = {}
          a.removeEventListener = function (f, g, p) {
            var t = d.get(g != null ? g : e)
            t = t && t.get(this)
            var v = !(typeof p === 'boolean' ? p : p && p.capture) + f
            t && t[v] && (g = t[v], delete t[v])
            return b.call(this, f, g, p)
          }
          a.addEventListener = function (f, g, p) {
            var t = Jda[f]
            if (!t) return c.call(this, f, g, p)
            var v = g != null ? g : e, z = d.get(v)
            z || (z = new WeakMap(), d.set(v, z))
            var D = z.get(this)
            D || (D = {}, z.set(this, D))
            var J = !(typeof p === 'boolean' ? p : p && p.capture) + f
            if (!D[J]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var M = g.handleEvent
                if (typeof M === 'function') return M.apply(g, arguments)
              })
              if (v) {
                p && p.once && (v = function (M) {
                  return function () {
                    if (typeof M !== 'function') throw Error('l`' + M)
                    delete D[J]
                    return M.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  p && Yc.AbortSignal && p.signal instanceof
                    Yc.AbortSignal
                ) {
                  if (p.signal.aborted) return
                  p.signal.addEventListener('abort', function () {
                    delete D[J]
                  }, { once: !0 })
                }
              }
              D[J] = v
              return c.call(this, f, v, p)
            }
          }
          Kda = function () {}
        }
      },
      Lda = function (a) {
        var b = ['readystatechange']
        Kda()
        for (let c = 0; c < b.length; c++) {
          ;(Jda[b[c]] || (Jda[b[c]] = [])).push(a)
        }
      },
      bd = function (a, b) {
        Bda(a, function (c) {
          return c && b(c)
        })
      },
      Mda = !1
    Zc('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.ad = c)
        c = a._JSC
        typeof c === 'function' && (Hda = c)
        return a
      }
      Mda = !0
      Gda = function (e) {
        return e
      }
      var d = Xc
      d[0] = d[0] || []
      d[1] = d[1] || 0
      b.prototype.get = function () {
        return this.index in d[0] ? d[0][this.index] : this.defaultValue
      }
      b.prototype.run = function (e, f, g) {
        var p = d[0]
        ;(d[0] = p.slice())[this.index] = e
        try {
          return f.apply(null, Array.prototype.slice.call(arguments, 2))
        } finally {
          d[0] = p
        }
      }
      b['\u1d43\u1d9cstart'] = _.ad = function (e) {
        var f = d[0], g = e ? void 0 : d[0]
        return function (p) {
          return p
            ? function (t) {
              g = g || d[0]
              d[0] = f
              return t
            }
            : function (t) {
              g && (d[0] = g, g = void 0)
              return t
            }
        }
      }
      b._JSC = Hda = function (e) {
        var f = (0, _.ad)(e)
        return function (g, p) {
          return f(p)(g)
        }
      }
      return b
    })
    Mda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var p = 0; p < e.length; p++) {
                var t = e[p], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Ida(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              yda(g, 'name', { value: f.name }),
                yda(g, 'length', { value: f.length }),
                yda(g, 'toString', {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return f.toString()
                  },
                })
            } catch (p) {}
            return g
          }
        },
        b = a(0)
      bd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      bd('queueMicrotask', b)
      bd('requestAnimationFrame', b)
      bd('requestIdleCallback', b)
      bd('setInterval', b)
      bd('setTimeout', b)
      bd('HTMLCanvasElement.prototype.toBlob', b)
      bd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      bd('FileSystemEntry.prototype.getParent', a(0, 1))
      bd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      bd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      bd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      bd('XMLHttpRequest.prototype.send', function (d) {
        Lda(function (e) {
          return function () {
            var f = Xc[0]
            try {
              return Xc[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              Xc[0] = f
            }
          }
        })
        return function () {
          c.set(this, Xc[0])
          return d.apply(this, arguments)
        }
      })
    }()
    Zc('Promise.prototype.finally', function (a) {
      return a ? a : function (b) {
        return this.then(function (c) {
          return Promise.resolve(b()).then(function () {
            return c
          })
        }, function (c) {
          return Promise.resolve(b()).then(function () {
            throw c
          })
        })
      }
    })
    Zc('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    Zc('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = Xc
      b.wrap = Ida
      b.prototype.run = function (d) {
        var e = c[0]
        c[0] = this.ha
        try {
          return d.apply(null, Array.prototype.slice.call(arguments, 1))
        } finally {
          c[0] = e
        }
      }
      return b
    })
    Zc('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Nda(this)
        Oda(b)
        var c = Pda(this, b)
        b = new Set(this)
        var d = c.dPb
        c = c.XEb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Zc('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Nda(this)
        Oda(b)
        var c = new Set(), d = Pda(this, b)
        b = d.dPb
        d = d.XEb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var Oda = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      Pda = function (a, b) {
        if (a.size <= b.size) a = { dPb: a.keys(), XEb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { dPb: b, XEb: a }
        }
        return a
      },
      Nda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      Qda = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    Zc('Array.prototype.at', function (a) {
      return a ? a : Qda
    })
    Cda('at', function (a) {
      return a ? a : Qda
    })
    Zc('String.prototype.at', function (a) {
      return a ? a : Qda
    })
    Zc('Array.prototype.flat', function (a) {
      return a ? a : function (b) {
        b = b === void 0 ? 1 : b
        var c = []
        Array.prototype.forEach.call(this, function (d) {
          Array.isArray(d) && b > 0
            ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d))
            : c.push(d)
        })
        return c
      }
    })
    Zc('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    Zc('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var Rda = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    Zc('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return Rda(d, b, c)
      }
    })
    Cda('with', function (a) {
      return a ? a : function (b, c) {
        return Rda(this.slice(), b, c)
      }
    })
    Zc('Promise.allSettled', function (a) {
      function b(d) {
        return { status: 'fulfilled', value: d }
      }
      function c(d) {
        return { status: 'rejected', reason: d }
      }
      return a ? a : function (d) {
        var e = this
        d = Array.from(d, function (f) {
          return e.resolve(f).then(b, c)
        })
        return e.all(d)
      }
    })
    Zc('String.prototype.matchAll', function (a) {
      return a ? a : function (b) {
        if (b instanceof RegExp && !b.global) throw new TypeError('s')
        var c = new RegExp(b, b instanceof RegExp ? void 0 : 'g'),
          d = this,
          e = !1,
          f = {
            next: function () {
              if (e) return { value: void 0, done: !0 }
              var g = c.exec(d)
              if (!g) return e = !0, { value: void 0, done: !0 }
              g[0] === '' && (c.lastIndex += 1)
              return { value: g, done: !1 }
            },
          }
        f[Symbol.iterator] = function () {
          return f
        }
        return f
      }
    })
    var Sda = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Zc('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return Sda(this, b, c).v
      }
    })
    Cda('findLast', function (a) {
      return a ? a : function (b, c) {
        return Sda(this, b, c).v
      }
    })
    Zc('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Eda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    Zc('Promise.any', function (a) {
      return a ? a : function (b) {
        b = b instanceof Array ? b : Array.from(b)
        return Promise.all(b.map(function (c) {
          return Promise.resolve(c).then(function (d) {
            throw d
          }, function (d) {
            return d
          })
        })).then(function (c) {
          throw new AggregateError(c, 'All promises were rejected')
        }, function (c) {
          return c
        })
      }
    })
    Zc('Array.prototype.toSorted', function (a) {
      return a ? a : function (b) {
        return Array.from(this).sort(b)
      }
    })
    Cda('toSorted', function (a) {
      return a ? a : function (b) {
        return this.slice().sort(b)
      }
    })
    _._DumpException = _._DumpException || function (a) {
      throw a
    }
    var ed, gd, Uda, Vda, Wda
    _.Tda = _.Tda || {}
    _.ha = this || self
    _.cd = function (a, b, c) {
      a = a.split('.')
      c = c || _.ha
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    ed = function (a, b) {
      var c = _.dd('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.fd = _.ha._F_toggles_default_BardChatUi || []
    gd = function () {}
    gd.get = function () {
      return null
    }
    _.Wc = null
    _.dd = function (a, b) {
      a = a.split('.')
      b = b || _.ha
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.Saa = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ca = function (a) {
      var b = _.Saa(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.hd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.id = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Uda) && a[Uda] ||
        (a[Uda] = ++Vda)
    }
    Uda = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    Vda = 0
    Wda = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.Pb = function (a, b, c) {
      _.Pb = Wda
      return _.Pb.apply(null, arguments)
    }
    _.jd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.kd = function () {
      return Date.now()
    }
    _.Xda = function (a, b, c) {
      _.cd(a, b, c)
    }
    _.db = function (a) {
      return a
    }
    _.od = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Cc = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), p = 2; p < arguments.length; p++
        ) g[p - 2] = arguments[p]
        return b.prototype[e].apply(d, g)
      }
    }
    _.od(_.da, Error)
    _.da.prototype.name = 'CustomError'
    var Yda
    _.od(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.Zda = typeof TextDecoder !== 'undefined'
    _.$da = typeof TextEncoder !== 'undefined'
    var pd = !!(_.fd[5] >> 16 & 1),
      aea = !!(_.fd[5] & 2048),
      bea = !!(_.fd[5] >> 18 & 1),
      cea = !!(_.fd[5] & 1),
      dea = !!(_.fd[5] >> 19 & 1),
      eea = !!(_.fd[5] & 16),
      fea = !!(_.fd[4] >> 25 & 1),
      gea = !!(_.fd[5] >> 17 & 1),
      hea = !!(_.fd[4] >> 26 & 1),
      iea = !!(_.fd[5] & 64),
      jea = !!(_.fd[5] >> 20 & 1),
      kea = !!(_.fd[5] & 512),
      lea = !!(_.fd[5] & 1024)
    var mea, kba, uea, vea
    mea = ed(1, !0)
    _.faa = pd ? bea : ed(610401301, !1)
    _.nea = pd ? cea : ed(1331761403, !1)
    _.oea = pd ? dea : ed(651175828, !1)
    kba = pd ? aea || !eea : ed(748402147, !0)
    _.pea = pd ? fea : ed(861377723, !1)
    _.qea = pd ? aea || !gea : ed(861377724, mea)
    _.rea = pd ? aea || !hea : ed(869336904, mea)
    _.sea = pd ? aea || !iea : ed(869336905, mea)
    _.tea = pd ? jea : ed(1675845485, !1)
    uea = pd ? kea : ed(907842688, !1)
    vea = pd ? lea : ed(909324564, !1)
    var wea
    wea = _.ha.navigator
    _.oa = wea ? wea.userAgentData || null : null
    var xea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var yea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        var a = this
        return _.$c(function* () {
          if (_.oa) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.$c(function* () {
                  try {
                    let b = yield _.oa.getHighEntropyValues([a.ka])
                    a.ma = b[a.ka]
                    return a.ma
                  } finally {
                    a.na = !1
                  }
                }))()),
              yield a.ha
          }
        })
      }
    }('platformVersion')
    var zea
    zea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        var a = this
        return _.$c(function* () {
          if (naa(!0)) return new xea(yield yea.load())
          a.ha = !0
          return new xea(_.taa())
        })
      }
    }
    _.Aea = new zea()
    _.va = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.qd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.rd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.sd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.td = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Bea = function (a) {
      _.Bea[' '](a)
      return a
    }
    _.Bea[' '] = function () {}
    _.Cea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Oea, Pea
    _.Dea = _.haa()
    _.ud = _.iaa()
    _.vd = _.pa('Edge')
    _.wd = _.pa('Gecko') && !(_.caa('WebKit') && !_.pa('Edge')) &&
      !(_.pa('Trident') || _.pa('MSIE')) && !_.pa('Edge')
    _.xd = _.caa('WebKit') && !_.pa('Edge')
    _.Eea = _.xd && _.pa('Mobile')
    _.yd = _.ta()
    _.Ad = _.raa()
    _.Fea = _.qaa() || _.saa()
    _.Gea = _.oaa()
    _.Hea = _.paa()
    _.Iea = _.pa('iPad')
    _.Jea = _.pa('iPod')
    _.Kea = _.sa()
    _.caa('KaiOS')
    var Lea = function () {
        var a = _.ha.document
        return a ? a.documentMode : void 0
      },
      Mea
    a: {
      let a = '',
        b = function () {
          var c = _.ma()
          if (_.wd) return /rv:([^\);]+)(\)|;)/.exec(c)
          if (_.vd) return /Edge\/([\d\.]+)/.exec(c)
          if (_.ud) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
          if (_.xd) return /WebKit\/(\S+)/.exec(c)
          if (_.Dea) return /(?:Version)[ \/]?(\S+)/.exec(c)
        }()
      b && (a = b ? b[1] : '')
      if (_.ud) {
        let c = Lea()
        if (c != null && c > parseFloat(a)) {
          Mea = String(c)
          break a
        }
      }
      Mea = a
    }
    _.Nea = Mea
    Oea = {}
    _.Cd = function (a) {
      return _.Cea(Oea, a, function () {
        return _.eaa(_.Nea, a) >= 0
      })
    }
    if (_.ha.document && _.ud) {
      var Qea = Lea()
      Pea = Qea ? Qea : parseInt(_.Nea, 10) || void 0
    } else Pea = void 0
    _.Rea = Pea
    var Sea, Tea, Uea, Vea, Wea, Xea
    _.Dd = {}
    Sea = _.kaa()
    Tea = yaa()
    Uea = _.pa('iPad')
    Vea = _.maa()
    Wea = _.laa()
    Xea = zaa()
    _.Dd.ANDROID = Vea
    _.Dd.c7d = !1
    _.Dd.d7d = !1
    _.Dd.e7d = !1
    _.Dd.f7d = !1
    _.Dd.g7d = !1
    _.Dd.h7d = !1
    _.Dd.CHROME = Wea
    _.Dd.bpa = _.vd
    _.Dd.f7 = Sea
    _.Dd.cXb = _.ud
    _.Dd.bkb = Uea
    _.Dd.ckb = Tea
    _.Dd.Olb = _.Dea
    _.Dd.iO = Xea
    _.Dd.mje = yaa
    _.Dd.rje = zaa
    var Caa = /[-_.]/g,
      Aaa = { '-': '+', _: '/', '.': '=' },
      Yea = typeof structuredClone != 'undefined'
    var $aa, nba, hba
    _.bb = Ga()
    _.Zea = Ga()
    _.$ea = Ga()
    _.eb = Ga()
    _.afa = Ga()
    $aa = Ga()
    _.bfa = Ga()
    nba = Ga()
    _.Iaa = Ga('m_m', !0)
    hba = Ga()
    _.cfa = Ga()
    var dfa
    _.Ka = Ga('jas', !0)
    dfa = []
    dfa[_.Ka] = 7
    _.sb = Object.freeze(dfa)
    var efa
    _.Jaa = {}
    _.Pa = {}
    efa = class {
      constructor(a, b, c) {
        this.ha = a
        this.ka = b
        this.thisArg = c
      }
      next() {
        var a = this.ha.next()
        a.done || (a.value = this.ka.call(this.thisArg, a.value))
        return a
      }
      [Symbol.iterator]() {
        return this
      }
    }
    _.ffa = Object.freeze({})
    _.gfa = Object.freeze({})
    var iba = {}
    _.hfa = _.Ra((a) => a !== null && a !== void 0)
    _.Ta = _.Ra((a) => typeof a === 'number')
    _.ifa = _.Ra((a) => Number.isFinite(a))
    _.Sa = _.Ra((a) => typeof a === 'string')
    _.Maa = _.Ra((a) => typeof a === 'boolean')
    _.jfa = _.Ra((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.kfa = _.Ra((a) => typeof a === 'function')
    _.lfa = _.Ra((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.mfa = _.Ra((a) => Array.isArray(a))
    _.Ua = typeof _.ha.BigInt === 'function' &&
      typeof _.ha.BigInt(0) === 'bigint'
    var pfa, nfa, qfa, ofa
    _.fba = _.Ra((a) =>
      _.Ua ? a >= nfa && a <= ofa : a[0] === '-' ? Naa(a, pfa) : Naa(a, qfa)
    )
    pfa = Number.MIN_SAFE_INTEGER.toString()
    nfa = _.Ua ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    qfa = Number.MAX_SAFE_INTEGER.toString()
    ofa = _.Ua ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    var Qaa = void 0
    _.Ed = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.Fd = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.Gd = Number.isSafeInteger
    _.Hd = Number.isFinite
    _.Id = Math.trunc
    var rfa, sfa
    rfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    sfa = function (a) {
      if (a.X7 & 2) throw Error('D')
    }
    _.hb = class extends rfa {
      constructor(a, b, c = Waa, d = Waa) {
        super()
        this.X7 = a[_.Ka] | 0
        this.Tda = b
        this.gNa = c
        this.GSb = this.Tda ? Xaa : d
        for (let e = 0; e < a.length; e++) {
          let f = a[e], g = c(f[0], !1, !0), p = f[1]
          b
            ? p === void 0 && (p = null)
            : p = d(f[1], !1, !0, void 0, void 0, this.X7)
          super.set(g, p)
        }
      }
      bhb(a) {
        return _.Gaa(Array.from(super.entries(), a))
      }
      clear() {
        sfa(this)
        super.clear()
      }
      delete(a) {
        sfa(this)
        return super.delete(this.gNa(a, !0, !1))
      }
      entries() {
        if (this.Tda) {
          var a = super.keys()
          a = new efa(a, Yaa, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.Tda) {
          var a = super.keys()
          a = new efa(a, _.hb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.Tda
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        sfa(this)
        a = this.gNa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.GSb(b, !0, !0, this.Tda, !1, this.X7))
      }
      XTd(a) {
        var b = this.gNa(a[0], !1, !0)
        a = a[1]
        a = this.Tda
          ? a === void 0 ? null : a
          : this.GSb(a, !1, !0, void 0, !1, this.X7)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.gNa(a, !1, !1))
      }
      get(a) {
        a = this.gNa(a, !1, !1)
        var b = super.get(a)
        if (b !== void 0) {
          var c = this.Tda
          return c
            ? (c = this.GSb(b, !1, !0, c, this.Yjd, this.X7),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.hb.prototype.toJSON = void 0
    _.Jd = Yea ? structuredClone : (a) => _.dba(a, 0, _.fb)
    _.tfa = _.Va(0)
    _.rb = function (a, b, c, d) {
      if (b === -1) return null
      var e = b + (c ? 0 : -1), f = a.length - 1
      if (!(f < 1 + (c ? 0 : -1))) {
        if (e >= f) {
          var g = a[f]
          if (g != null && typeof g === 'object' && g.constructor === Object) {
            c = g[b]
            var p = !0
          } else if (e === f) c = g
          else return
        } else c = a[e]
        if (d && c != null) {
          d = d(c)
          if (d == null) return d
          if (!Object.is(d, c)) return p ? g[b] = d : a[e] = d, d
        }
        return c
      }
    }
    _.vb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Haa(b))
    }
    _.k = class {
      constructor(a, b, c) {
        this.Zh = _.mba(a, b, c, 2048)
      }
      toJSON() {
        return _.jba(this)
      }
      serialize(a) {
        return JSON.stringify(_.jba(this, a))
      }
      clone() {
        var a = this.Zh, b = a[_.Ka] | 0
        return _.sba(this, a, b)
          ? _.rba(this, a, !0)
          : new this.constructor(_.ib(a, b, !1))
      }
      isImmutable() {
        return _.Qa(this)
      }
    }
    _.k.prototype.Rja = _.aa(0)
    _.k.prototype[_.Iaa] = _.Jaa
    _.k.prototype.toString = function () {
      return this.Zh.toString()
    }
    _.ufa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.vfa = []
    _.wfa = []
    _.xfa = !1
    _.yfa = function (a) {
      _.vfa[_.vfa.length] = a
      if (_.xfa) {
        for (let b = 0; b < _.wfa.length; b++) {
          a((0, _.Pb)(_.wfa[b].wrap, _.wfa[b]))
        }
      }
    }
    _.zb.prototype.XW = !1
    _.zb.prototype.isDisposed = function () {
      return this.XW
    }
    _.zb.prototype.dispose = function () {
      this.XW || (this.XW = !0, this.Tb())
    }
    _.zb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.zb.prototype.Yb = function (a) {
      this.addOnDisposeCallback(_.jd(_.wb, a))
    }
    _.zb.prototype.addOnDisposeCallback = function (a, b) {
      this.XW
        ? b !== void 0 ? a.call(b) : a()
        : (this.kla || (this.kla = []), b && (a = a.bind(b)), this.kla.push(a))
    }
    _.zb.prototype.Tb = function () {
      if (this.kla) { for (; this.kla.length;) this.kla.shift()() }
    }
    _.Ab = function (a, b) {
      this.type = 'function' == typeof _.Kd && a instanceof _.Kd ? String(a) : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Ab.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Ab.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var Afa
    _.zfa = !(!_.ha.navigator || !_.ha.navigator.maxTouchPoints)
    Afa = function () {
      if (!_.ha.addEventListener || !Object.defineProperty) return !1
      var a = !1,
        b = Object.defineProperty({}, 'passive', {
          get: function () {
            a = !0
          },
        })
      try {
        let c = () => {}
        _.ha.addEventListener('test', c, b)
        _.ha.removeEventListener('test', c, b)
      } catch (c) {}
      return a
    }()
    _.od(_.Bb, _.Ab)
    _.Bb.prototype.init = function (a, b) {
      var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null
      this.target = a.target || a.srcElement
      this.currentTarget = b
      b = a.relatedTarget
      b ||
        (c == 'mouseover'
          ? b = a.fromElement
          : c == 'mouseout' && (b = a.toElement))
      this.relatedTarget = b
      d
        ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX,
          this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY,
          this.screenX = d.screenX || 0,
          this.screenY = d.screenY || 0)
        : (this.offsetX = _.xd || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.xd || a.offsetY !== void 0 ? a.offsetY : a.layerY,
          this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
          this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
          this.screenX = a.screenX || 0,
          this.screenY = a.screenY || 0)
      this.button = a.button
      this.keyCode = a.keyCode || 0
      this.key = a.key || ''
      this.charCode = a.charCode || (c == 'keypress' ? a.keyCode : 0)
      this.ctrlKey = a.ctrlKey
      this.altKey = a.altKey
      this.shiftKey = a.shiftKey
      this.metaKey = a.metaKey
      this.oa = _.yd ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.oj = a
      a.defaultPrevented && _.Bb.Cc.preventDefault.call(this)
    }
    _.Bb.prototype.stopPropagation = function () {
      _.Bb.Cc.stopPropagation.call(this)
      this.oj.stopPropagation
        ? this.oj.stopPropagation()
        : this.oj.cancelBubble = !0
    }
    _.Bb.prototype.preventDefault = function () {
      _.Bb.Cc.preventDefault.call(this)
      var a = this.oj
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.Bb.prototype.w4a = _.aa(1)
    _.Bfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.Ld = function (a) {
      return !(!a || !a[_.Bfa])
    }
    var zba = 0
    var Cfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Dba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.Ib.prototype.add = function (a, b, c, d, e) {
      var f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      var g = Dfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Dra = !1))
        : (b = new _.Aba(b, this.src, f, !!d, e), b.Dra = c, a.push(b))
      return b
    }
    _.Ib.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      var e = this.listeners[a]
      b = Dfa(e, b, c, d)
      return b > -1
        ? (Cfa(e[b]),
          _.ya(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Efa = function (a, b) {
      var c = b.type
      if (!(c in a.listeners)) return !1
      var d = _.Aa(a.listeners[c], b)
      d &&
        (Cfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.Ib.prototype.removeAll = function (a) {
      a = a && a.toString()
      var b = 0
      for (let c in this.listeners) {
        if (!a || c == a) {
          let d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Cfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.Ib.prototype.sia = _.aa(3)
    _.Ib.prototype.iua = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      var e = -1
      a && (e = Dfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.Ib.prototype.hasListener = function (a, b) {
      var c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Cba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Dfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        let f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var Ffa, Gfa, Hfa, Jfa, Kfa, Lfa, Mfa, Ofa
    Ffa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Gfa = {}
    Hfa = 0
    _.Nd = function (a, b, c, d, e) {
      if (d && d.once) return _.Md(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Nd(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.Ld(a)
        ? a.listen(b, c, _.hd(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !1, d, e)
    }
    Jfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      var g = _.hd(e) ? !!e.capture : !!e, p = _.Od(a)
      p || (a[Ffa] = p = new _.Ib(a))
      c = p.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Kfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        Afa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Lfa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      Hfa++
      return c
    }
    Kfa = function () {
      var a = Mfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.Md = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Md(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.Ld(a)
        ? a.Mf(b, c, _.hd(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !0, d, e)
    }
    _.Pd = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Pd(a, b[f], c, d, e)
      } else {d = _.hd(d) ? !!d.capture : !!d,
          c = _.Ifa(c),
          _.Ld(a)
            ? a.kh(b, c, d, e)
            : a && (a = _.Od(a)) && (b = a.iua(b, c, d, e)) && _.Qd(b)}
    }
    _.Qd = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      var b = a.src
      if (_.Ld(b)) return b.JN(a)
      var c = a.type, d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Lfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Hfa--
      ;(c = _.Od(b))
        ? (Efa(c, a), c.ha == 0 && (c.src = null, b[Ffa] = null))
        : Cfa(a)
      return !0
    }
    Lfa = function (a) {
      return a in Gfa ? Gfa[a] : Gfa[a] = 'on' + a
    }
    _.Nfa = function (a, b) {
      var c = a.listener, d = a.handler || a.src
      a.Dra && _.Qd(a)
      return c.call(d, b)
    }
    Mfa = function (a, b) {
      return a.removed ? !0 : _.Nfa(a, new _.Bb(b, this))
    }
    _.Od = function (a) {
      a = a[Ffa]
      return a instanceof _.Ib ? a : null
    }
    Ofa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Ifa = function (a) {
      if (typeof a === 'function') return a
      a[Ofa] || (a[Ofa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Ofa]
    }
    _.yfa(function (a) {
      Mfa = a(Mfa)
    })
    var Fba
    _.Pfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Gba((e) => {
            e.fFa(a.ha, d)
          })
        })
      }
    }
    _.Rd = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Pfa(this, c, d)
      }
      toString() {
        return this.ma
      }
      iT() {
        return this.ka
      }
    }
    _.Jba = Symbol('U')
    _.od(_.Ob, _.zb)
    _.Ob.prototype[_.Bfa] = !0
    _.h = _.Ob.prototype
    _.h.GX = function () {
      return this.YIb
    }
    _.h.Ur = function (a) {
      this.YIb = a
    }
    _.h.addEventListener = function (a, b, c, d) {
      _.Nd(this, a, b, c, d)
    }
    _.h.removeEventListener = function (a, b, c, d) {
      _.Pd(this, a, b, c, d)
    }
    _.h.dispatchEvent = function (a) {
      var b, c = this.GX()
      if (c) { for (b = []; c; c = c.GX()) b.push(c) }
      c = this.Tgd
      var d = a.type || a
      if (typeof a === 'string') a = new _.Ab(a, c)
      else if (a instanceof _.Ab) a.target = a.target || c
      else {
        var e = a
        a = new _.Ab(d, c)
        _.Hb(a, e)
      }
      e = !0
      var f
      if (b) {
        for (f = b.length - 1; !a.ka && f >= 0; f--) {
          var g = a.currentTarget = b[f]
          e = g.Hta(d, !0, a) && e
        }
      }
      a.ka ||
        (g = a.currentTarget = c,
          e = g.Hta(d, !0, a) && e,
          a.ka || (e = g.Hta(d, !1, a) && e))
      if (b) {
        for (f = 0; !a.ka && f < b.length; f++) {
          g = a.currentTarget = b[f], e = g.Hta(d, !1, a) && e
        }
      }
      return e
    }
    _.h.Tb = function () {
      _.Ob.Cc.Tb.call(this)
      this.removeAllListeners()
      this.YIb = null
    }
    _.h.listen = function (a, b, c, d) {
      return this.uX.add(String(a), b, !1, c, d)
    }
    _.h.Mf = function (a, b, c, d) {
      return this.uX.add(String(a), b, !0, c, d)
    }
    _.h.kh = function (a, b, c, d) {
      return this.uX.remove(String(a), b, c, d)
    }
    _.h.JN = function (a) {
      return Efa(this.uX, a)
    }
    _.h.removeAllListeners = function (a) {
      return this.uX ? this.uX.removeAll(a) : 0
    }
    _.h.Hta = function (a, b, c) {
      a = this.uX.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      var d = !0
      for (let e = 0; e < a.length; ++e) {
        let f = a[e]
        if (f && !f.removed && f.capture == b) {
          let g = f.listener, p = f.handler || f.src
          f.Dra && this.JN(f)
          d = g.call(p, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.h.sia = _.aa(2)
    _.h.iua = function (a, b, c, d) {
      return this.uX.iua(String(a), b, c, d)
    }
    _.h.hasListener = function (a, b) {
      return this.uX.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.Sd =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Lba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Qfa = class {
        constructor(a, b) {
          this.ma = a
          this.na = b
          this.ka = 0
          this.ha = null
        }
        get() {
          if (this.ka > 0) {
            this.ka--
            var a = this.ha
            this.ha = a.next
            a.next = null
          } else a = this.ma()
          return a
        }
      }
    _.Qb.OPd = _.Sd
    _.Qb.Rbd = !1
    _.Qb.swd = function () {
      if (typeof MessageChannel !== 'undefined') {
        let a = new MessageChannel(), b = {}, c = b
        a.port1.onmessage = function () {
          if (b.next !== void 0) {
            b = b.next
            let d = b.cb
            b.cb = null
            d()
          }
        }
        return function (d) {
          c.next = { cb: d }
          c = c.next
          a.port2.postMessage(0)
        }
      }
      return function (a) {
        _.ha.setTimeout(a, 0)
      }
    }
    _.Qb.TMc = (a) => a
    _.yfa(function (a) {
      _.Qb.TMc = a
    })
    var Rfa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          var c = Mba.get()
          c.set(a, b)
          this.ka ? this.ka.next = c : this.ha = c
          this.ka = c
        }
        remove() {
          var a = null
          this.ha &&
            (a = this.ha,
              this.ha = this.ha.next,
              this.ha || (this.ka = null),
              a.next = null)
          return a
        }
      },
      Mba = new Qfa(() => new Sfa(), (a) => a.reset()),
      Sfa = class {
        constructor() {
          this.next = this.scope = this.fn = null
        }
        set(a, b) {
          this.fn = a
          this.scope = b
          this.next = null
        }
        reset() {
          this.next = this.scope = this.fn = null
        }
      }
    var Tfa, Nba, Kba, Ufa
    Nba = !1
    Kba = new Rfa()
    _.Td = (a, b) => {
      Tfa || Ufa()
      Nba || (Tfa(), Nba = !0)
      Kba.add(a, b)
    }
    Ufa = () => {
      var a = Promise.resolve(void 0)
      Tfa = () => {
        a.then(Oba)
      }
    }
    _.Ud = function () {}
    var Vfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Wfa, Xfa, fga, cga, Zfa, kga, iga, gga, hga, lga, jga, mga
    _.Xd = function (a) {
      this.ka = 0
      this.Da = void 0
      this.oa = this.ma = this.na = null
      this.va = this.Ba = !1
      if (a != _.Ud) {
        try {
          let b = this
          a.call(void 0, function (c) {
            _.Wd(b, 2, c)
          }, function (c) {
            _.Wd(b, 3, c)
          })
        } catch (b) {
          _.Wd(this, 3, b)
        }
      }
    }
    Wfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Wfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Xfa = new Qfa(function () {
      return new Wfa()
    }, function (a) {
      a.reset()
    })
    _.Yfa = function (a, b, c) {
      var d = Xfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.$fa = function (a, b, c) {
      Zfa(a, b, c, null) || _.Td(_.jd(b, a))
    }
    _.aga = function (a) {
      return new _.Xd(function (b, c) {
        var d = a.length, e = []
        if (d) {
          var f = function (t, v) {
              d--
              e[t] = v
              d == 0 && b(e)
            },
            g = function (t) {
              c(t)
            }
          for (let t = 0; t < a.length; t++) {
            var p = a[t]
            _.$fa(p, _.jd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Zd = function () {
      var a,
        b,
        c = new _.Xd(function (d, e) {
          a = d
          b = e
        })
      return new bga(c, a, b)
    }
    _.Xd.prototype.then = function (a, b, c) {
      return cga(
        this,
        (0, _.Sd)(typeof a === 'function' ? a : null),
        (0, _.Sd)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Xd.prototype.$goog_Thenable = !0
    var ega = function (a, b, c, d) {
      _.dga(a, _.Yfa(b || _.Ud, c || null, d))
    }
    _.Xd.prototype.finally = function (a) {
      a = (0, _.Sd)(a)
      return new _.Xd((b, c) => {
        ega(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Xd.prototype.ha = function (a, b) {
      return cga(this, null, (0, _.Sd)(a), b)
    }
    _.Xd.prototype.catch = _.Xd.prototype.ha
    _.Xd.prototype.cancel = function (a) {
      if (this.ka == 0) {
        let b = new _.$d(a)
        _.Td(function () {
          fga(this, b)
        }, this)
      }
    }
    fga = function (a, b) {
      if (a.ka == 0) {
        if (a.na) {
          var c = a.na
          if (c.ma) {
            var d = 0, e = null, f = null
            for (
              let g = c.ma;
              g && (g.always || (d++, g.child == a && (e = g), !(e && d > 1)));
              g = g.next
            ) e || (f = g)
            e && (c.ka == 0 && d == 1
              ? fga(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : gga(c),
                hga(c, e, 3, b)))
          }
          a.na = null
        } else _.Wd(a, 3, b)
      }
    }
    _.dga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || iga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    cga = function (a, b, c, d) {
      var e = _.Yfa(null, null, null)
      e.child = new _.Xd(function (f, g) {
        e.ka = b
          ? function (p) {
            try {
              let t = b.call(d, p)
              f(t)
            } catch (t) {
              g(t)
            }
          }
          : f
        e.ha = c
          ? function (p) {
            try {
              let t = c.call(d, p)
              t === void 0 && p instanceof _.$d ? g(p) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.dga(a, e)
      return e.child
    }
    _.Xd.prototype.Fa = function (a) {
      this.ka = 0
      _.Wd(this, 2, a)
    }
    _.Xd.prototype.Ja = function (a) {
      this.ka = 0
      _.Wd(this, 3, a)
    }
    _.Wd = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          Zfa(c, a.Fa, a.Ja, a) ||
          (a.Da = c,
            a.ka = b,
            a.na = null,
            iga(a),
            b != 3 || c instanceof _.$d || jga(a, c)))
    }
    Zfa = function (a, b, c, d) {
      if (a instanceof _.Xd) return ega(a, b, c, d), !0
      if (Vfa(a)) return a.then(b, c, d), !0
      if (_.hd(a)) {
        try {
          let e = a.then
          if (typeof e === 'function') return kga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    kga = function (a, b, c, d, e) {
      var f = !1,
        g = function (t) {
          f || (f = !0, c.call(e, t))
        },
        p = function (t) {
          f || (f = !0, d.call(e, t))
        }
      try {
        b.call(a, g, p)
      } catch (t) {
        p(t)
      }
    }
    iga = function (a) {
      a.Ba || (a.Ba = !0, _.Td(a.Ea, a))
    }
    gga = function (a) {
      var b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Xd.prototype.Ea = function () {
      for (var a; a = gga(this);) hga(this, a, this.ka, this.Da)
      this.Ba = !1
    }
    hga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.va; a = a.na) a.va = !1 }
      if (b.child) b.child.na = null, lga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : lga(b, c, d)
        } catch (e) {
          mga.call(null, e)
        }}
      Lba(Xfa, b)
    }
    lga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    jga = function (a, b) {
      a.va = !0
      _.Td(function () {
        a.va && mga.call(null, b)
      })
    }
    mga = _.ia
    _.$d = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.od(_.$d, _.da)
    _.$d.prototype.name = 'cancel'
    var bga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var tga, sga, oga, pga
    _.Rb.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.Rb && this.oa.cancel()
      else {
        if (this.na) {
          let b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Ba--, b.Ba <= 0 && b.cancel())
        }
        this.nb ? this.nb.call(this.Wa, this) : this.Ua = !0
        this.ka || this.ha(new _.ae(this))
      }
    }
    _.Rb.prototype.Sa = function (a, b) {
      this.Ja = !1
      nga(this, a, b)
    }
    var nga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.va = !b
        oga(a)
      },
      qga = function (a) {
        if (a.ka) {
          if (!a.Ua) throw new pga(a)
          a.Ua = !1
        }
      }
    _.Rb.prototype.callback = function (a) {
      qga(this)
      nga(this, !0, a)
    }
    _.Rb.prototype.ha = function (a) {
      qga(this)
      nga(this, !1, a)
    }
    _.ce = function (a, b, c) {
      return _.be(a, b, null, c)
    }
    _.Rb.prototype.finally = function (a) {
      return _.rga(
        new Promise((b, c) => {
          _.be(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.be = function (a, b, c, d) {
      var e = a.ka
      e ||
        (b === c ? b = c = (0, _.Sd)(b) : (b = (0, _.Sd)(b), c = (0, _.Sd)(c)))
      a.Da.push([b, c, d])
      e && oga(a)
      return a
    }
    _.Rb.prototype.then = function (a, b, c) {
      var d,
        e,
        f = new _.Xd(function (g, p) {
          e = g
          d = p
        })
      _.be(this, e, function (g) {
        g instanceof _.ae ? f.cancel() : d(g)
        return sga
      }, this)
      return f.then(a, b, c)
    }
    _.Rb.prototype.$goog_Thenable = !0
    _.Rb.prototype.ma = _.aa(4)
    _.Rb.prototype.isError = function (a) {
      return a instanceof Error
    }
    tga = function (a) {
      return _.td(a.Da, function (b) {
        return typeof b[1] === 'function'
      })
    }
    sga = {}
    oga = function (a) {
      if (a.Ea && a.ka && tga(a)) {
        var b = a.Ea, c = uga[b]
        c && (_.ha.clearTimeout(c.ha), delete uga[b])
        a.Ea = 0
      }
      a.na && (a.na.Ba--, delete a.na)
      b = a.oa
      for (var d = c = !1; a.Da.length && !a.Ja;) {
        var e = a.Da.shift(), f = e[0]
        let p = e[1]
        e = e[2]
        if (f = a.va ? p : f) {
          try {
            var g = f.call(e || a.Wa, b)
            g === sga && (g = void 0)
            g !== void 0 &&
              (a.va = a.va && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Vfa(b) ||
              typeof _.ha.Promise === 'function' && b instanceof _.ha.Promise
            ) d = !0, a.Ja = !0
          } catch (t) {
            b = t, a.va = !0, tga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.Pb)(a.Sa, a, !0),
          d = (0, _.Pb)(a.Sa, a, !1),
          b instanceof _.Rb ? (_.be(b, g, d), b.ub = !0) : b.then(g, d))
      c && (b = new vga(b), uga[b.ha] = b, a.Ea = b.ha)
    }
    _.rga = function (a) {
      var b = new _.Rb()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    pga = function (a) {
      _.da.call(this)
      this.Uga = a
    }
    _.od(pga, _.da)
    pga.prototype.message = 'Deferred has already fired'
    pga.prototype.name = 'AlreadyCalledError'
    _.ae = function (a) {
      _.da.call(this)
      this.Uga = a
    }
    _.od(_.ae, _.da)
    _.ae.prototype.message = 'Deferred was canceled'
    _.ae.prototype.name = 'CanceledError'
    var vga = function (a) {
      this.ha = _.ha.setTimeout((0, _.Pb)(this.throwError, this), 0)
      this.sX = a
    }
    vga.prototype.throwError = function () {
      delete uga[this.ha]
      throw this.sX
    }
    var uga = {}
    var yga, zga, Aga
    _.wga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Za
      }
      return !1
    }
    _.de = function (a) {
      for (; a.Za;) a = a.Za
      return a
    }
    yga = function (a) {
      var b = _.xga, c = []
      a = _.de(a)
      var d
      a.rD[b] && (d = a.rD[b][0])
      d && c.push(d)
      a = a.hb || []
      for (let e = 0; e < a.length; e++) {
        a[e].rD[b] && (d = a[e].rD[b][0]), d && !_.wa(c, d) && c.push(d)
      }
      return c
    }
    _.fe = function (a, b) {
      for (var c = a; c; c = c.Za) {
        if (c.isDisposed()) throw new _.ufa([b])
        if (c.rD[b]) return c.rD[b][0]
        if (c.od[b]) break
      }
      if (c = a.Lb[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.ee(a, b, c)
        return c
      }
      return null
    }
    _.ee = function (a, b, c) {
      if (a.isDisposed()) _.wb(c)
      else {
        a.rD[b] = [c, !0]
        var d = zga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.zc[b]
        b instanceof _.Rd && _.Nb(b, c.constructor)
      }
    }
    zga = function (a, b, c) {
      var d = [], e = a.Ua[c]
      e && (_.vaa(e, function (f) {
        _.wga(f.appContext, b) && (d.push(f.d), _.Aa(e, f))
      }),
        e.length == 0 && delete a.Ua[c])
      return d
    }
    Aga = function (a, b) {
      a.Ua && _.Cb(a.Ua, function (c, d, e) {
        _.vaa(c, function (f) {
          f.appContext == b && _.Aa(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.ge = class extends _.zb {
      constructor() {
        super()
        this.rD = {}
        this.zc = {}
        this.Lb = {}
        this.Ua = {}
        this.Wa = {}
        this.od = {}
        this.Rb = new _.Ob()
        this.Me = !0
        this.Za = null
        var a = _.de(this)
        this != a && (a.hb ? a.hb.push(this) : a.hb = [this])
      }
      get(a) {
        var b = _.fe(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Tb() {
        if (_.de(this) == this) {
          var a = this.hb
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.de(this).hb
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (let b in this.rD) {
          a = this.rD[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.rD = null
        this.Me && this.Rb.dispose()
        Aga(this, this)
        this.Ua = null
        _.wb(this.Ee)
        this.od = this.Ee = null
        super.Tb()
      }
      uu() {
        return this.Rb
      }
    }
    _.ge.prototype.Wb = _.aa(7)
    _.ge.prototype.ub = _.aa(6)
    _.ge.prototype.Gb = _.aa(5)
    _.xga = new _.Rd('n73qwf', 'n73qwf')
    _.Sb.prototype.clone = function () {
      return new _.Sb(this.x, this.y)
    }
    _.Sb.prototype.equals = function (a) {
      return a instanceof _.Sb && _.he(this, a)
    }
    _.he = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.h = _.Sb.prototype
    _.h.ceil = function () {
      this.x = Math.ceil(this.x)
      this.y = Math.ceil(this.y)
      return this
    }
    _.h.floor = function () {
      this.x = Math.floor(this.x)
      this.y = Math.floor(this.y)
      return this
    }
    _.h.round = function () {
      this.x = Math.round(this.x)
      this.y = Math.round(this.y)
      return this
    }
    _.h.translate = function (a, b) {
      a instanceof _.Sb
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.h.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.ie = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.h = _.Tb.prototype
    _.h.clone = function () {
      return new _.Tb(this.width, this.height)
    }
    _.h.area = function () {
      return this.width * this.height
    }
    _.h.perimeter = function () {
      return (this.width + this.height) * 2
    }
    _.h.aspectRatio = function () {
      return this.width / this.height
    }
    _.h.isEmpty = function () {
      return !this.area()
    }
    _.h.ceil = function () {
      this.width = Math.ceil(this.width)
      this.height = Math.ceil(this.height)
      return this
    }
    _.h.floor = function () {
      this.width = Math.floor(this.width)
      this.height = Math.floor(this.height)
      return this
    }
    _.h.round = function () {
      this.width = Math.round(this.width)
      this.height = Math.round(this.height)
      return this
    }
    _.h.scale = function (a, b) {
      this.width *= a
      this.height *= typeof b === 'number' ? b : a
      return this
    }
    _.Wb = {}
    var Bga = globalThis.trustedTypes, Pba = Bga, Rba
    _.Vb = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    Uba((a) => a``) || Uba((a) => a`\0`) || Uba((a) => a`\n`) ||
      Uba((a) => a`\u0000`)
    _.Vba = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Cga = _.$b('about:blank')
    _.Yba = _.$b('about:invalid#zClosurez')
    var cc, Wba, Zba, Dga, aca
    cc = class {
      constructor(a) {
        this.Cj = a
      }
    }
    _.je = {
      pde: ec('tel'),
      y7d: new cc((a) => /^callto:\+?\d*$/i.test(a)),
      Rce: new cc((a) => a.indexOf('ssh://') === 0),
      jce: ec('rtsp'),
      sSc: ec('data'),
      DXc: ec('http'),
      EXc: ec('https'),
      EXTENSION: new cc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      aWc: ec('ftp'),
      i5c: new cc((a) => /^[^:]*([/?#]|$)/.test(a)),
      K_c: ec('mailto'),
      cae: ec('intent'),
      uae: ec('market'),
      fae: ec('itms'),
      gae: ec('itms-appss'),
      hae: ec('itms-services'),
      S8d: ec('fb-messenger'),
      yee: ec('whatsapp'),
      Jce: new cc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      Nce: ec('sms'),
      oee: ec('vnd.youtube'),
      E$d: ec('googlehome'),
      F$d: ec('googlehomesdk'),
      LINE: ec('line'),
    }
    Wba = [_.je.sSc, _.je.DXc, _.je.EXc, _.je.K_c, _.je.aWc, _.je.i5c]
    Zba = typeof URL === 'function'
    Dga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    aca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.Xba = () => {}
    _.oc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.ke = new _.oc(_.Wb, Bga ? Bga.emptyHTML : '')
    _.Ega = {
      o$d: 0,
      C8d: 1,
      D8d: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.sc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Ega[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.hca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Fga = new _.hca(_.Wb, Bga ? Bga.emptyScript : '')
    _.lca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var pca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.Vc = function (a) {
      return encodeURIComponent(String(a))
    }
    _.$ca = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Gga = Math.random() * 2147483648 | 0
    _.Hga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Aca = /^[a-z][a-z\d-]*$/i,
      Bca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Eca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Fca = ['action', 'formaction', 'href']
    _.Iga = function (a, b) {
      var c = `{_safevalues_format_marker_:${a.ha.size}_${
        Math.random().toString(36).slice(2)
      }}`
      a.ha.set(_.Gc(c).toString(), b)
      return c
    }
    _.le = class {
      constructor() {
        this.ha = new Map()
      }
      format(a) {
        var b = _.Gc('_safevalues_format_marker_:').toString()
        a = _.Gc(a).toString().replace(
          new RegExp(`\\{${b}[\\w&#;]+\\}`, 'g'),
          (c) => {
            var d
            if (d = this.ha.get(c)) {
              c = ''
              switch (d.type) {
                case 'html':
                  c = d.html
                  break
                case 'startTag':
                  c = `<${d.tagName}${d.attributes}>`
                  break
                case 'endTag':
                  c = `</${d.tagName}>`
              }
              d = c
            } else d = c
            return d
          },
        )
        return _.pc(a)
      }
      text(a) {
        return _.Iga(this, { type: 'html', html: _.Gc(a).toString() })
      }
    }
    _.le.prototype.uE = _.aa(9)
    _.le.prototype.Xy = _.aa(8)
    _.Jga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Kga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Mga
    _.Lga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Mga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Lx: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Lx: 1 }
        : { Lx: 0 }
    }
    _.me = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Nga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Oga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Pga = [
        ['A', new Map([['href', { Lx: 7 }]])],
        ['AREA', new Map([['href', { Lx: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Lx: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Lx: 5 }], ['srcset', { Lx: 6 }]])],
        ['IMG', new Map([['src', { Lx: 5 }], ['srcset', { Lx: 6 }]])],
        ['VIDEO', new Map([['src', { Lx: 5 }]])],
        ['AUDIO', new Map([['src', { Lx: 5 }]])],
      ],
      Qga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Rga = [
        ['dir', {
          Lx: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Lx: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Lx: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Lx: 5 }],
        ['target', {
          Lx: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Sga = new _.me(new Set(Oga), new Map(Pga), new Set(Qga), new Map(Rga)),
      Tga = new _.me(
        new Set(Oga.concat(['BUTTON', 'INPUT'])),
        new Map(Pga),
        new Set(Qga.concat(['class', 'id', 'name'])),
        new Map(Rga.concat([['style', { Lx: 1 }]])),
      ),
      Uga = new _.me(
        new Set(
          Oga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Pga),
        new Set(
          Qga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Rga.concat([['style', { Lx: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Vga
    _.Wga = function (a, b, c) {
      b = Hca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Jca(g)
          ? (g = Ica(g), g = g === null ? 2 : _.Lga(a.oa, g) ? 1 : 2)
          : g = 2
        return g
      })
      for (
        var d = b.nextNode(), e = c.createDocumentFragment(), f = e; d !== null;
      ) {
        let g
        if (d.nodeType === 3) {
          a.ma && f.nodeName === 'STYLE'
            ? (d = a.ma(d.data), g = a.createTextNode(d))
            : g = a.createTextNode(d.data)
        } else if (Jca(d)) g = Vga(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    Vga = function (a, b, c) {
      var d = Ica(b)
      c = c.createElement(d)
      b = b.attributes
      for (let { name: p, value: t } of b) {
        var e = Mga(a.oa, p, d), f
        a: {
          if (f = e.conditions) {
            for (let [v, z] of f) {
              f = z
              let D
              var g = (D = b.getNamedItem(v)) == null ? void 0 : D.value
              if (g && !f.has(g)) {
                f = !1
                break a
              }
            }
          }
          f = !0
        }
        if (f) {
          switch (e.Lx) {
            case 1:
              Ic(c, p, t)
              break
            case 2:
              throw Error()
            case 3:
              Ic(c, p, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), Ic(c, p, e)) : Ic(c, p, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: p, Oec: d },
                  f = _.Gca(t),
                  (e = a.ha(f, e)) && Ic(c, p, e.toString()))
                : Ic(c, p, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: p, Oec: d }
                f = []
                for (let v of t.split(',')) {
                  let [z, D] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, O1a: D })
                }
                g = f
                f = { parts: [] }
                for (let v of g) {
                  g = _.Gca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), O1a: v.O1a })
                }
                Ic(c, p, Kca(f))
              } else Ic(c, p, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: p, Oec: d }
                f = _.Gca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.$ba(e)
              e = f !== void 0 && Dga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              Ic(c, p, e)
          }
        }
      }
      return c
    }
    _.Xga = class {
      constructor(a, b, c, d, e, f) {
        this.oa = a
        this.ma = b
        this.ka = c
        this.ha = d
        this.na = e
        this.va = f
        this.changes = []
      }
      sanitize(a) {
        var b = document.implementation.createHTMLDocument('')
        return _.zca(_.Wga(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Lca = new _.Xga(Sga)
    _.Yga = new _.Xga(Tga)
    _.Zga = new _.Xga(Uga)
    _.$ga = class {
      constructor() {
        this.na = !1
        this.ha = Sga
      }
    }
    _.oe = class extends _.$ga {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.Xga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var aha, cha, oha, pha, qha
    _.Mc = function (a) {
      return a ? new _.pe(_.qe(a)) : Yda || (Yda = new _.pe())
    }
    _.re = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.se = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.te = function (a, b) {
      _.Cb(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : aha.hasOwnProperty(d)
          ? a.setAttribute(aha[d], c)
          : _.ja(d, 'aria-') || _.ja(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    aha = {
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      colspan: 'colSpan',
      frameborder: 'frameBorder',
      height: 'height',
      maxlength: 'maxLength',
      nonce: 'nonce',
      role: 'role',
      rowspan: 'rowSpan',
      type: 'type',
      usemap: 'useMap',
      valign: 'vAlign',
      width: 'width',
    }
    _.ue = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.Tb(a.clientWidth, a.clientHeight)
    }
    _.ve = function (a) {
      return a ? a.defaultView : window
    }
    _.dha = function (a, b) {
      var c = b[1], d = _.bha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.te(d, c))
      b.length > 2 && cha(a, d, b, 2)
      return d
    }
    cha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        let f = c[d]
        !_.Ca(f) || _.hd(f) && f.nodeType > 0
          ? e(f)
          : _.qd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ba(f)
              : f,
            e,
          )
      }
    }
    _.we = function (a) {
      return _.bha(document, a)
    }
    _.bha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.eha = function (a, b) {
      cha(_.qe(a), a, arguments, 1)
    }
    _.xe = function (a) {
      for (var b; b = a.firstChild;) a.removeChild(b)
    }
    _.fha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.gha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.hha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.ye = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.iha = function (a, b) {
      var c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.jha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.lha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.kha(a.firstChild, !0)
    }
    _.mha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.kha(a.nextSibling, !0)
    }
    _.nha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.kha(a.previousSibling, !1)
    }
    _.kha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.Be = function (a) {
      return _.hd(a) && a.nodeType == 1
    }
    _.Ce = function (a) {
      return a.parentElement || null
    }
    _.De = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.qe = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.Ee = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.xe(a), a.appendChild(_.qe(a).createTextNode(String(b)))
    }
    oha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    pha = { IMG: ' ', BR: '\n' }
    _.rha = function (a) {
      return a.hasAttribute('tabindex') && qha(a)
    }
    _.Fe = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.sha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || qha(a))
        : _.rha(a)
    }
    qha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.Ge = function (a) {
      var b = []
      _.tha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.tha = function (a, b, c) {
      if (!(a.nodeName in oha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in pha) b.push(pha[a.nodeName])
        else for (a = a.firstChild; a;) _.tha(a, b, c), a = a.nextSibling
      }
    }
    _.pe = function (a) {
      this.Cn = a || _.ha.document || document
    }
    _.h = _.pe.prototype
    _.h.tb = _.Mc
    _.h.Fg = function () {
      return this.Cn
    }
    _.h.Ya = function (a) {
      return _.re(this.Cn, a)
    }
    _.h.$ = _.pe.prototype.Ya
    _.h.getElementsByTagName = function (a, b) {
      return (b || this.Cn).getElementsByTagName(String(a))
    }
    _.h.dJ = _.aa(11)
    _.h.qc = _.aa(13)
    _.h.Rc = _.aa(15)
    _.h.setProperties = _.te
    _.h.Mk = function (a) {
      return _.ue(a || this.getWindow())
    }
    _.h.Vb = function (a, b, c) {
      return _.dha(this.Cn, arguments)
    }
    _.h.createElement = function (a) {
      return _.bha(this.Cn, a)
    }
    _.h.createTextNode = function (a) {
      return this.Cn.createTextNode(String(a))
    }
    _.h.getWindow = function () {
      return this.Cn.defaultView
    }
    _.h.Sq = _.aa(16)
    _.h.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.h.append = _.eha
    _.h.canHaveChildren = function (a) {
      if (a.nodeType != 1) return !1
      switch (a.tagName) {
        case 'APPLET':
        case 'AREA':
        case 'BASE':
        case 'BR':
        case 'COL':
        case 'COMMAND':
        case 'EMBED':
        case 'FRAME':
        case 'HR':
        case 'IMG':
        case 'INPUT':
        case 'IFRAME':
        case 'ISINDEX':
        case 'KEYGEN':
        case 'LINK':
        case 'NOFRAMES':
        case 'NOSCRIPT':
        case 'META':
        case 'OBJECT':
        case 'PARAM':
        case 'SCRIPT':
        case 'SOURCE':
        case 'STYLE':
        case 'TRACK':
        case 'WBR':
          return !1
      }
      return !0
    }
    _.h.im = _.xe
    _.h.enc = _.fha
    _.h.KLa = _.gha
    _.h.JLa = _.hha
    _.h.removeNode = _.ye
    _.h.QKb = _.iha
    _.h.getChildren = _.jha
    _.h.fKa = _.lha
    _.h.Gyb = _.mha
    _.h.Bjc = _.nha
    _.h.isElement = _.Be
    _.h.isWindow = function (a) {
      return _.hd(a) && a.window == a
    }
    _.h.kua = _.Ce
    _.h.contains = _.De
    _.h.wjc = _.qe
    _.h.nn = _.Ee
    _.h.nA = _.Fe
    _.h.Wq = _.sha
    _.h.HX = _.Ge
    gd = gd || {}
    var uha = function () {
      _.zb.call(this)
    }
    _.od(uha, _.zb)
    uha.prototype.initialize = function () {}
    Tca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Tca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.yfa(function (a) {
      Tca.prototype.execute = a(Tca.prototype.execute)
    })
    gd.Ilb = Tca
    _.od(Nc, _.zb)
    _.h = Nc.prototype
    _.h.Wya = null
    _.h.xKd = uha
    _.h.T$a = null
    _.h.iT = function () {
      return this.na
    }
    _.h.getId = function () {
      return this.oa
    }
    var vha = function (a, b, c) {
        a.ma.push(new gd.Ilb(b, c))
      },
      wha = function (a, b) {
        a.ha.push(new gd.Ilb(b, void 0))
      }
    Nc.prototype.isLoaded = function () {
      return !!this.T$a
    }
    Nc.prototype.lca = function () {
      this.T$a = new uha()
    }
    Nc.prototype.onLoad = function (a) {
      var b = new this.xKd()
      b.initialize(a())
      this.T$a = b
      b = (b = xha(this.ka, a())) || xha(this.ma, a())
      b || (this.ha.length = 0)
      return b
    }
    Nc.prototype.onError = function (a) {
      ;(a = xha(this.ha, a)) && _.ia(Error('ga`' + a))
      this.ka.length = 0
      this.ma.length = 0
    }
    var xha = function (a, b) {
      var c = []
      for (let d = 0; d < a.length; d++) {
        try {
          a[d].execute(b)
        } catch (e) {
          _.ia(e), c.push(e)
        }
      }
      a.length = 0
      return c.length ? c : null
    }
    Nc.prototype.Tb = function () {
      Nc.Cc.Tb.call(this)
      _.wb(this.T$a)
      this.Wya = null
    }
    gd.uXa = Nc
    var yha = {
      ERROR: 'error',
      IDLE: 'idle',
      C_: 'active',
      Obd: 'userIdle',
      Nbd: 'userActive',
    }
    _.h = Uca.prototype
    _.h.hCc = function () {}
    _.h.beb = function () {}
    _.h.xRa = function () {}
    _.h.fFa = function () {
      throw Error('ha')
    }
    _.h.lQa = function () {
      throw Error('ia')
    }
    _.h.rjc = function () {
      return this.va
    }
    _.h.FRa = function (a) {
      this.va = a
    }
    _.h.isActive = function () {
      return !1
    }
    _.h.Uqc = function () {
      return !1
    }
    var zha, Aha
    zha = function (a, b) {
      var c = b.styleSheets.length, d = Sca(a, new _.pe(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.ua(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Aha = function (a) {
      return _.sd(yga(a), (b) => b.wjc())
    }
    _.Bha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Xda('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.va
            if (b) {
              if (b = Aha(b), b.length == 0) zha(a, document)
              else for (let c of b) zha(a, c)
            } else zha(a, document)
          }
        })
      }
    }
    var Cha, Dha, Fha
    Cha = function (a) {
      throw Error('ja`' + a.ka)
    }
    Dha = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.Ie = function (a) {
      var b = _.He(a)
      b === null && Cha(a)
      return b
    }
    _.Je = function (a, b) {
      var c
      return (c = _.He(a)) != null ? c : b
    }
    _.He = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Dha(a, 'string')
    }
    _.Eha = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Dha(a, 'boolean')
    }
    _.Ke = function (a, b) {
      var c
      return (c = _.Eha(a)) != null ? c : b
    }
    _.Le = function (a, b) {
      var c
      return (c = Fha(a)) != null ? c : b
    }
    Fha = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        let c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Dha(a, 'number')
    }
    _.Hha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Gha(a, b)
    }
    _.Gha = function (a, b) {
      var c = a.ka + '['
      return Array.from(b, (d, e) => new _.Oc(c + e + ']', d))
    }
    _.Oc = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.Ie(this) : _.Je(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Fha(this)
          b === null && Cha(this)
        } else b = _.Le(this, a)
        return b
      }
      toString() {
        return _.Ie(this)
      }
      enum(a, b) {
        var c = !0, d = void 0
        for (let e in a) {
          let f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Le(this, b) : _.Je(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Hha(this)
          b === null && Cha(this)
          return b
        }
        b = _.Hha(this)
        return b == null ? a : b
      }
      object(a) {
        var b = this.ha
        if (b == null) return a === void 0 && Cha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          let c = this.ka + '.'
          for (let d in b) a[d] = new _.Oc(c + d, b[d])
          return a
        }
        throw Dha(this, 'object')
      }
    }
    var Yca
    Yca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Iha = /#|$/
    var Jha,
      gda,
      Me,
      Mha,
      Pha,
      Nha,
      Oha,
      Qha,
      Rha,
      Sha,
      Tha,
      oda,
      Uha,
      Kha,
      Lha,
      Vha,
      Wha
    _.pda = function (a, b = !0) {
      var c = Jha(a), d = new Kha(), e = _.Qc(c)[5]
      _.Cb(Lha, function (g) {
        var p = e.match('/' + g + '=([^/]+)')
        p && Me(d, g, p[1])
      })
      var f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Mha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.Tc(6, c)) && _.ada(a, (g, p) => {
        d.ma[g] = p
      })
      return d
    }
    Jha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    gda = function (a) {
      a = Jha(a)
      a = _.Sc(_.Tc(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Me = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Mha = function (a, b) {
      a.ka = b
    }
    Pha = function (a) {
      var b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Nha(a)
        ? (c('md'),
          c('k'),
          c('ck'),
          c('am'),
          c('rs'),
          c('gssmodulesetproto'),
          c('slk'),
          c('dti'))
        : (c('sdch'),
          c('k'),
          c('ck'),
          c('am'),
          c('amc'),
          c('rt'),
          'd' in a.ha || Me(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Ne(a, 'br') != '1' && _.Ne(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Ne(a, 'rb') == '1' && c('rb'),
          _.Ne(a, 'zs') !== '0' && c('zs'),
          Oha(a) !== '' && c('wt'),
          c('gssmodulesetproto'),
          c('ujg'),
          c('sp'),
          c('rs'),
          c('cb'),
          c('ccb'),
          c('ee'),
          c('slk'),
          c('dti'),
          c('ic'),
          c('m'))
      return b.join('/')
    }
    _.Ne = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Nha = function (a) {
      a = _.Ne(a, 'md')
      return !!a && a !== '0'
    }
    Oha = function (a) {
      switch (_.Ne(a, 'wt')) {
        case '0':
          return '0'
        case '1':
          return '1'
        case '2':
          return '2'
        default:
          return ''
      }
    }
    Qha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Me(a, 'exm', b.join(',')))
        : Me(a, 'exm', null)
    }
    Rha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Me(a, 'excm', b.join(',')))
        : Me(a, 'excm', null)
    }
    Sha = function (a) {
      return (a = _.Ne(a, 'm')) ? a.split(',') : []
    }
    Tha = function (a, b) {
      var c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          var e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      Me(a, 'ee', c.join(';'))
    }
    oda = function (a) {
      var b = _.Ne(a, 'ee')
      if (!b) return {}
      a = {}
      b = b.split(';')
      for (let c of b) {
        let [d, e] = c.split(':')
        a[d] = {}
        for (let f of e.split(',')) a[d][f] = !0
      }
      return a
    }
    Uha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Kha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Pha(this), b = _.dda(this.ma), c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        var a = new Kha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Lha = {
      ice: 'k',
      e8d: 'ck',
      Fae: 'm',
      M8d: 'exm',
      K8d: 'excm',
      S6d: 'am',
      Z6d: 'amc',
      wae: 'mm',
      ece: 'rt',
      U$d: 'd',
      L8d: 'ed',
      Qce: 'sv',
      i8d: 'deob',
      w7d: 'cb',
      F7d: 'ccb',
      x7d: 'cbi',
      Hce: 'rs',
      pce: 'sdch',
      bae: 'im',
      j8d: 'dg',
      G8d: 'br',
      F8d: 'br-d',
      H8d: 'rb',
      Iee: 'zs',
      Aee: 'wt',
      R8d: 'ee',
      Pce: 'sm',
      METADATA: 'md',
      G$d: 'gssmodulesetproto',
      kee: 'ujg',
      jee: 'sp',
      Fce: 'slk',
      p8d: 'dti',
      eae: 'ic',
    }
    Vha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    Wha = RegExp('^[a-zA-Z0-9-_*]+$')
    var kda = null, jda = new Map()
    var mda = !1, nda = !1
    var Xha = (a) => {
        a = a.clone()
        Uha(a)
        Me(a, 'dg', null)
        Me(a, 'd', '0')
        Qha(a, null)
        Rha(a, null)
        return a
      },
      Yha = !0,
      Zha = (a, b, { cssRowKey: c, pga: d, K9: e, callback: f } = {}) => {
        if (b) { for (let g of b) if (!Wha.test(g)) throw Error('la`' + g) }
        Me(a, 'm', b.join(','))
        e && Tha(a, e)
        c && (Me(a, 'ck', c), d ? Me(a, 'rs', d) : Yha && (Yha = !1))
        if (f) {
          if (f != null && !Vha.test(f)) throw Error('ma`' + f)
          Me(a, 'cb', f)
        }
        a = a.toString()
        _.ja(a, '/') && (a = _.Uc(document.location.href) + a)
        return _.Xb(a)
      },
      $ha = (
        a,
        b,
        { TKb: c = [], cssRowKey: d, pga: e, K9: f, callback: g } = {},
      ) => {
        a = Xha(a)
        Rha(a, c)
        return Zha(a, b, { cssRowKey: d, pga: e, K9: f, callback: g })
      },
      aia = (
        a,
        b,
        { UKb: c = [], TKb: d = [], cssRowKey: e, pga: f, K9: g, callback: p } =
          {},
      ) => {
        a = Xha(a)
        Me(a, 'd', '1')
        Qha(a, c)
        Rha(a, d)
        return Zha(a, b, { cssRowKey: e, pga: f, K9: g, callback: p })
      }
    _.bia = function (a) {
      switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          return !0
        default:
          return !1
      }
    }
    _.dia = function () {}
    _.od(_.dia, _.rda)
    _.dia.prototype.BS = function () {
      return new XMLHttpRequest()
    }
    _.cia = new _.dia()
    var fia = function (a) {
        return eia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      eia = function (a) {
        var b = {}, c = b.x_ ? b.x_.BS() : _.cia.BS()
        return (new _.Xd(function (d, e) {
          var f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Oe('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.ha.clearTimeout(f)
              var g
              !(g = _.bia(c.status)) && (g = c.status === 0) &&
                (g = _.Zca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new gia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Oe('Network error', a, c))
          }
          if (b.headers) {
            for (let g in b.headers) {
              let p = b.headers[g]
              p != null && c.setRequestHeader(g, p)
            }
          }
          b.withCredentials && (c.withCredentials = b.withCredentials)
          b.responseType && (c.responseType = b.responseType)
          b.mimeType && c.overrideMimeType(b.mimeType)
          b.dz > 0 && (f = _.ha.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new hia(a, c))
          }, b.dz))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.ha.clearTimeout(f),
              e(new Oe('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.$d &&
            c.abort()
          throw d
        })
      },
      Oe = function (a, b, c) {
        _.da.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.od(Oe, _.da)
    Oe.prototype.name = 'XhrError'
    var gia = function (a, b, c) {
      Oe.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.od(gia, Oe)
    gia.prototype.name = 'XhrHttpError'
    var hia = function (a, b) {
      Oe.call(this, 'Request timed out', a, b)
    }
    _.od(hia, Oe)
    hia.prototype.name = 'XhrTimeoutError'
    var kia, mia, nia, oia, lia, tia, uia, qia, pia, ria, sia
    _.iia = function (a, b, c, d, e = b) {
      var f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          p = () => {}
        },
        p = () => {
          g()
          var v = e.filter((z) => !_.Kb().qx(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && p()
        }
      b.forEach((v) => {
        v = _.Kb().qx(v)
        v.isLoaded() ? t() : (v.ka.push(new gd.Ilb(t, void 0)), wha(v, t))
      })
      a.onload = () => p()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.jia = function (a, b) {
      var c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        let f = b[e]
        a.na[f] || (a.na[f] = !0, a.Ja.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    kia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            gda(b) && !_.pda(b).ka.endsWith('_/js/')
        ) {
          b = Sha(_.pda(b))
          for (let c of b) a.Ua.includes(c) || a.Ua.push(c)
        }
      }
    }
    mia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      lia(a, b, (g, p, t = p) => {
        a.hb && f ? a.kb(g, p, d, e, t) : a.load(g, p, d, e, t, c)
      }, c) || d(-1)
    }
    nia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    oia = function (a, b, c, { K9: d, onError: e, Nxa: f, rvd: g } = {}) {
      a.Ea = c
      if (!b) throw Error('qa')
      if (a.Eb) {
        for (let p of document.getElementsByTagName('style')) kia(a, p)
        for (let p of document.getElementsByTagName('link')) kia(a, p)
      }
      mia(a, nia(a, b), d, e, f, g)
    }
    lia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          lia(a, b, c, d)
        }),
          !0
      }
      if (!a.va) {
        let f = []
        var e = Object.assign({}, a.na)
        pia(
          a,
          b,
          (g) => {
            f.push(g.getId())
          },
          d,
          (g) => !g.isLoaded(),
          e,
        )
        b = f
      }
      for (e = 0; e < b.length;) {
        let f = b.length - e,
          g = e == 0 ? b : b.slice(e, b.length),
          p = qia(a, g, d),
          t = _.Zb(p).toString()
        for (; t.length > a.LUa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.LUa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              p = qia(a, g, d),
              t = _.Zb(p).toString()
          } else {return a.va
              ? (a.va = !1,
                a.ma = ria(a).then((v) => {
                  sia(a, v, d)
                }),
                lia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.va ? c(p, g) : c(p, g, e === b.length ? b : [])
      }
      return !0
    }
    tia = function (a) {
      a.Sa || (a.Sa = !0, a.Ja.sort())
      return a.Ja
    }
    uia = function (a) {
      a = a.Ua
      a.sort()
      return a
    }
    qia = function (a, b, c) {
      return a.va
        ? aia(a.oa, b, {
          cssRowKey: a.Za,
          pga: a.Wa,
          K9: c,
          UKb: tia(a),
          TKb: uia(a),
        })
        : $ha(a.oa, b, { cssRowKey: a.Za, pga: a.Wa, UKb: tia(a), TKb: uia(a) })
    }
    _.Pe = function (a, b) {
      var c = []
      for (let d = 0; d < b.length; ++d) {
        let e = b[d]
        a.na[e] && (delete a.na[e], _.Aa(a.Ja, e), c.push(e))
      }
    }
    _.via = function (a, b, c, d, e, f, g = d) {
      a.Da = c
      a.Pa.insertBefore(c, a.Pa.firstChild)
      _.iia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Da == c && (a.Da = null)
        f()
      }, (p) => {
        c.parentElement.removeChild(c)
        a.Da == c && (a.Da = null)
        _.Pe(a, p)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    pia = function (a, b, c, d, e, f = {}) {
      var g = _.Kb()
      for (let p of b) {
        b = g.qx(p)
        if (f[p] || e && !e(b)) continue
        f[p] = !0
        let t = b.iT() || []
        if (d) {
          let v = []
          d[p] && (v = Object.keys(d[p]))
          t = t.concat(v)
        }
        pia(a, t, c, d, e, f)
        c(b)
      }
    }
    ria = function (a) {
      a = a.oa.clone()
      Uha(a)
      Me(a, 'dg', null)
      Me(a, 'md', '1')
      return fia(a.toString())
    }
    sia = function (a, b, c) {
      _.Kb().xRa((b || {}).moduleGraph)
      pia(a, tia(a), (d) => {
        _.jia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.vda = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.nb = a
        this.oa = _.pda(_.Zb(a).toString(), !0)
        this.Za = b
        this.Wa = c
        this.va = d
        this.na = {}
        this.Ea = uea ? new Map() : {}
        this.Ja = []
        this.Sa = !0
        this.Ua = (a = _.Ne(this.oa, 'excm')) ? a.split(',') : []
        this.Eb = e
        this.MUa = !1
        this.kHa = 'anonymous'
        this.LUa = 4043
        this.Pa = document.head || document.documentElement
        this.ma = this.Da = null
        this.ub = !0
        _.qda()
        this.logger = null
        _.jia(this, Sha(this.oa))
        this.fetchPriority = void 0
        this.hb = !1
        this.Fa()
      }
      kb() {
        _.$c(function* () {
          throw Error('ra')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.Zb(a)
        var f = this.MUa,
          g = this.kHa,
          p = this.fetchPriority,
          t = _.we('SCRIPT')
        _.yc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        p && t.setAttribute('fetchpriority', p)
        _.jia(this, b)
        _.via(this, a, t, b, c, d, e)
      }
    }
    var sda = new Uint8Array(123)
    var wia = []
    var yia = function (a) {
        switch (a.type) {
          case xia.Type.o2b:
            return 'Unauthorized'
          case xia.Type.djb:
            return 'Consecutive load failures'
          case xia.Type.TIMEOUT:
            return 'Timed out'
          case xia.Type.z_b:
            return 'Out of date module id'
          case xia.Type.Zjb:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      xia = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.UKb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${yia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    gd.PD = xia
    gd.PD.Type = { o2b: 0, djb: 1, TIMEOUT: 2, z_b: 3, Zjb: 4 }
    var Re = function () {
      Uca.call(this)
      this.Za = null
      this.ha = uea ? new Map() : {}
      this.na = []
      this.Ea = []
      this.oa = vea ? new Set() : []
      this.ka = []
      this.Ja = []
      this.ma = {}
      this.hb = {}
      this.Da = this.Pa = new gd.uXa([], '')
      this.ub = null
      this.Ua = new _.Rb()
      this.Wk = null
      this.Eb =
        this.Lb =
        this.Gb =
        this.nb =
        this.kb =
          !1
    }
    _.od(Re, Uca)
    var zia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.od(zia, _.da)
    var Aia = function (a, b) {
      return a.ha instanceof Map ? a.ha.get(b) : a.ha[b]
    }
    Re.prototype.hCc = function (a) {
      this.kb = a
    }
    Re.prototype.beb = function (a) {
      this.nb = a
    }
    Re.prototype.xRa = function (a, b) {
      if (!(this instanceof Re)) this.xRa(a, b)
      else if (typeof a === 'string') {
        if (a.startsWith('d$')) {
          a = a.substring(2)
          for (var c = [], d = 0, e = a.indexOf('/'), f = 0, g = !1, p = 0;;) {
            var t = g ? a.substring(f) : a.substring(f, e)
            if (t.length === 0) d++, f = 'sy' + d.toString(36), t = []
            else {
              var v = t.indexOf(':')
              if (v < 0) f = t, t = []
              else if (v === t.length - 1) {
                f = t.substring(0, v), t = Array(c[p - 1])
              } else {
                f = t.substring(0, v)
                t = t.substring(v + 1).split(',')
                v = p
                for (let z = 0; z < t.length; z++) {
                  v -= t[z].length === 0 ? 1 : Number(t[z]), t[z] = c[v]
                }
              }
              v = 0
              if (f.length === 0) v = 1
              else if (f.charAt(0) === '+' || f.charAt(0) === '-') v = Number(f)
              v !== 0 && (d += v, f = 'sy' + d.toString(36))
            }
            c.push(f)
            Bia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            p++
          }
          this.Za = c
        } else if (a.startsWith('p$')) Cia(this, a)
        else {
          a = a.split('/')
          c = []
          for (d = 0; d < a.length; d++) {
            p = a[d].split(':')
            e = p[0]
            g = []
            if (p[1]) {
              for (g = p[1].split(','), p = 0; p < g.length; p++) {
                g[p] = c[parseInt(g[p], 36)]
              }
            }
            c.push(e)
            Bia(this, e, g)
          }
          this.Za = c
        }
        b && b.length
          ? (_.Da(this.na, b), this.ub = _.uaa(b))
          : this.Ua.ka || this.Ua.callback()
        Object.freeze(this.Za)
        Dia(this)
      }
    }
    var Cia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        sda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      uda(b)
      var d = uda(b), e = uda(b) + 1, f = Array(d), g = Array(d), p = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, D = b.buf.indexOf('|', b.pos)
      b.pos = D + 1
      for (D = 0; D < d; D++) {
        var J = uda(b), M = J & 2, S = J & 1
        J >>>= 2
        S
          ? (t += J >>> 1 ^ -(J & 1), J = 'sy' + t.toString(36))
          : (S = z, z += J, J = c.substring(S, z))
        f[D] = J
        M && (e[v++] = J)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        z = tda(b), p[t] = z & 7, p[t + 1] = z >>> 3 & 7
      }
      c && (c = tda(b), p[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) p[v] === 7 && (p[v] = uda(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = p[c]
        z = t === 0 ? wia : Array(t)
        g[c] = z
        D = v
        for (M = 0; M < t; M++) D -= uda(b), z[M] = e[D]
        e[v] === f[c] && v++
      }
      var { ids: ba, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < ba.length; b++) Bia(a, ba[b], ea[b])
      a.Za = ba
    }
    _.h = Re.prototype
    _.h.qx = function (a) {
      return Aia(this, a)
    }
    _.h.fFa = function (a, b) {
      var c = this.qx(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.h.lQa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (let c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.h.FRa = function (a) {
      Re.Cc.FRa.call(this, a)
      Dia(this)
    }
    _.h.isActive = function () {
      return this.na.length > 0
    }
    _.h.Uqc = function () {
      return this.Ja.length > 0
    }
    var Se = function (a) {
        var b = a.Gb, c = a.isActive()
        c != b && (Eia(a, c ? yha.C_ : yha.IDLE), a.Gb = c)
        b = a.Uqc()
        b != a.Lb && (Eia(a, b ? yha.Nbd : yha.Obd), a.Lb = b)
      },
      Bia = function (a, b, c) {
        var d = Aia(a, b)
        d
          ? a.ha instanceof Map
            ? d.na = c
            : (a = d.iT(), a != c && a.splice(0, a.length, ...c))
          : (c = new gd.uXa(c, b),
            a.ha instanceof Map ? a.ha.set(b, c) : a.ha[b] = c)
      },
      Gia = function (a, b, c) {
        var d = []
        _.Ea(b, d)
        b = []
        var e = {}
        for (let f = 0; f < d.length; f++) {
          let g = d[f], p = a.qx(g)
          if (!p) throw Error('sa`' + g)
          let t = new _.Rb()
          e[g] = t
          p.isLoaded()
            ? t.callback(a.va)
            : (Fia(a, g, p, !!c, t), a.Sa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.nb
            ? _.ce(a.Ua, (0, _.Pb)(a.Wa, a, b))
            : a.na.length === 0
            ? a.Wa(b)
            : (a.ka.push(b), Se(a)))
        return e
      },
      Fia = function (a, b, c, d, e) {
        vha(c, e.callback, e)
        wha(c, function (f) {
          e.ha(new zia(b, f))
        })
        a.Sa(b) ? d && (Hia(a, b), Se(a)) : d && Hia(a, b)
      }
    Re.prototype.Wa = function (a, b = 0, c) {
      var d = Iia(this, a)
      this.nb ? _.Da(this.na, d) : this.na = d
      this.Ea = this.kb ? a : _.Ba(d)
      Se(this)
      if (d.length !== 0) {
        if (this.oa instanceof Set) { for (let e of d) this.oa.add(e) }
        else this.oa.push.apply(this.oa, d)
        a = this.Ba
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.ub) throw Error('ua')
        oia(a, _.Ba(d), this.ha, {
          K9: this.ma,
          onError: (e, f, g) =>
            Jia(this, this.Ea, d, e != null ? e : void 0, f, b, !!g),
          Oxa: (0, _.Pb)(this.Rb, this),
          rvd: !!c,
        })
      }
    }
    var Iia = function (a, b) {
        b = b.filter((d) =>
          Aia(a, d).isLoaded()
            ? (_.ha.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        var c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Kia(a, b[d]))
        _.Ea(c)
        return !a.kb && c.length > 1
          ? (b = c.shift(),
            a.ka = c.map(function (d) {
              return [d]
            }).concat(a.ka),
            [b])
          : c
      },
      Kia = function (a, b) {
        var c = a.oa instanceof Set ? a.oa : _.Eba(a.oa), d = []
        ;(c instanceof Set ? c.has(b) : c[b]) || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          let f = a.qx(b[e]).iT()
          for (let g = f.length - 1; g >= 0; g--) {
            let p = f[g]
            a.qx(p).isLoaded() || (c instanceof
                Set
              ? c.has(p)
              : c[p]) ||
              (d.push(p), b.push(p))
          }
        }
        d.reverse()
        _.Ea(d)
        return d
      },
      Dia = function (a) {
        if (a.Da == a.Pa) {
          a.Da = null
          let b = a.Pa.onLoad((0, _.Pb)(a.rjc, a))
          b && b.length &&
            Lia(a, new gd.PD(gd.PD.Type.Zjb, void 0, void 0, void 0, b[0]))
          Se(a)
        }
      }
    Re.prototype.lca = function () {
      if (this.Da) {
        var a = this.Da.getId(), b = []
        if (this.ma[a]) {
          for (let c of Object.keys(this.ma[a])) {
            let d = this.qx(c)
            d && !d.isLoaded() && (this.lQa(a, c), b.push(c))
          }
          this.Fa(b)
        }
        this.isDisposed() ||
          ((b = Aia(this, a).onLoad((0, _.Pb)(this.rjc, this))) && b.length &&
            Lia(this, new gd.PD(gd.PD.Type.Zjb, void 0, void 0, void 0, b[0])),
            _.Aa(this.Ja, a),
            _.Aa(this.na, a),
            this.na.length === 0 && Mia(this),
            this.ub && a == this.ub && (this.Ua.ka || this.Ua.callback()),
            Se(this),
            this.Da = null)
      }
    }
    Re.prototype.Sa = function (a) {
      if (_.wa(this.na, a)) return !0
      for (let b = 0; b < this.ka.length; b++) {
        if (_.wa(this.ka[b], a)) return !0
      }
      return !1
    }
    Re.prototype.load = function (a, b) {
      return Gia(this, [a], b)[a]
    }
    Re.prototype.Fa = function (a) {
      return Gia(this, a)
    }
    var Hia = function (a, b) {
      _.wa(a.Ja, b) || a.Ja.push(b)
    }
    Re.prototype.Db = function (a) {
      this.Da && this.Da.getId() === 'synthetic_module_overhead' &&
        (this.lca(),
          this.ha instanceof Map
            ? this.ha.delete('synthetic_module_overhead')
            : delete this.ha.synthetic_module_overhead)
      var b = Aia(this, a)
      b && (b = b.iT() || [],
        Nia(this, b, (c) => {
          c.lca()
          _.Aa(this.na, c.getId())
        }, (c) => !c.isLoaded()))
      this.Da = this.qx(a)
    }
    var Jia = function (a, b, c, d, e, f = 0, g = !1) {
      var p = g ? 0 : f + 1
      f = _.Ba(c)
      a.Ea = b
      if (a.oa instanceof Set) { for (let t of c) a.oa.delete(t) }
      else c.forEach(_.jd(_.Aa, a.oa), a)
      if (d == 401) Lia(a, new gd.PD(gd.PD.Type.o2b, d)), a.ka.length = 0
      else if (d == 410) Oia(a, new gd.PD(gd.PD.Type.z_b, d)), Mia(a)
      else if (p >= 3) Oia(a, new gd.PD(gd.PD.Type.djb, d, f, e)), Mia(a)
      else {
        let t = d == 8001 || !1
        ;(c = Math.pow(p, 2) * 5E3)
          ? _.ha.setTimeout(() => {
            a.Wa(b, p, t)
          }, c)
          : a.Wa(b, p, t)
      }
    }
    Re.prototype.Rb = function () {
      Oia(this, new gd.PD(gd.PD.Type.TIMEOUT))
      Mia(this)
    }
    var Oia = function (a, b) {
        a.Ea.length > 1
          ? a.ka = a.Ea.map(function (c) {
            return [c]
          }).concat(a.ka)
          : Lia(a, b)
      },
      Lia = function (a, b) {
        var c = a.Ea
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ka.length; e++) {
          var f = a.ka[e].filter(function (g) {
            var p = Kia(this, g)
            return _.td(c, function (t) {
              return _.wa(p, t)
            })
          }, a)
          _.Da(d, f)
        }
        for (e = 0; e < c.length; e++) _.xa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ka.length; f++) _.Aa(a.ka[f], d[e])
          _.Aa(a.Ja, d[e])
        }
        if (e = a.hb[yha.ERROR]) {
          for (f = 0; f < e.length; f++) {
            let g = e[f]
            for (let p = 0; p < d.length; p++) g(yha.ERROR, d[p], b)
          }
        }
        for (d = 0; d < c.length; d++) if (e = Aia(a, c[d])) e.onError(b)
        a.Ea.length = 0
        Se(a)
      },
      Mia = function (a) {
        for (; a.ka.length;) {
          let b = a.ka.shift().filter(function (c) {
            return !this.qx(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Wa(b)
            return
          }
        }
        Se(a)
      },
      Eia = function (a, b) {
        a = a.hb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Nia = function (a, b, c, d = () => !0, e = {}) {
        for (let f of b) {
          b = a.qx(f),
            !e[f] && d(b) && (e[f] = !0, Nia(a, b.iT() || [], c, d, e), c(b))
        }
      }
    Re.prototype.dispose = function () {
      this.ha instanceof Map
        ? (_.yb(Array.from(this.ha.values()), this.Pa), this.ha.clear())
        : (_.yb(_.Db(this.ha), this.Pa), this.ha = {})
      this.na = []
      this.Ea = []
      this.Ja = []
      this.ka = []
      this.hb = {}
      this.Eb = !0
    }
    Re.prototype.isDisposed = function () {
      return this.Eb
    }
    _.Hba = function () {
      return new Re()
    }
    var Pia, Qia, Tia, Uia, Via, Wia, Ria, Sia
    Pia = [5E3, 2E4]
    Qia = function (a) {
      a.ma && a.ma.getId() == '{base}' && a.lca()
    }
    Tia = function (a, b) {
      b = b.filter((c) => !a.Sa(c) && !a.qx(c).isLoaded())
      b.length > 0 && (Ria(a, ...b), a.na.push(b), Sia(a))
    }
    Uia = function (a, b) {
      return new _.Xd((c, d) => {
        var e = a.qx(b)
        e.isLoaded() ? c(a.va) : (vha(e, () => {
          c(a.va)
        }),
          wha(e, (f) => {
            var g = `Error loading ${b}: ${f}`
            f instanceof gd.PD && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Via = function (a, b, c, d = () => !0, e = {}) {
      for (let f of b) {
        b = a.qx(f),
          !e[f] && d(b) && (e[f] = !0, Via(a, b.iT() || [], c, d, e), c(b))
      }
    }
    Wia = function (a, ...b) {
      b.forEach((c) => {
        delete a.Da[c]
      })
    }
    Ria = function (a, ...b) {
      b.forEach((c) => {
        a.Da[c] = !0
      })
    }
    Sia = function (a) {
      for (; a.oa < a.Ea && a.na.length > 0;) {
        let b = a.na.shift().filter((c) => !a.qx(c).isLoaded())
        if (b.length > 0) {
          a.oa++
          let c = () => {
            a.oa--
            Sia(a)
            c = () => {}
          }
          _.aga(b.map((f) => Uia(a, f))).then(() => {
            c()
          })
          let d = 0,
            e = () => {
              if (Object.keys(a.ka).length > 0 && !a.Ba.ub) throw Error('ua')
              oia(a.Ba, b, a.ha, {
                K9: a.ka,
                onError: (f, g) => {
                  var p = Pia[d++]
                  p !== void 0
                    ? setTimeout(() => {
                      e()
                    }, p)
                    : (Wia(a, ...b),
                      c(),
                      b.forEach((t) => {
                        t = a.qx(t)
                        if (!t.isLoaded()) {
                          t.onError(new gd.PD(gd.PD.Type.djb, f, b, g))
                        }
                      }))
                },
              })
            }
          e()
        }
      }
    }
    _.Xia = class extends Uca {
      constructor() {
        super()
        this.ha = uea ? new Map() : Object.create(null)
        this.Da = Object.create(null)
        this.Ea = Infinity
        this.oa = 0
        this.na = []
        this.ka = Object.create(null)
        this.Wk = null
        this.ma = this.qx('{base}')
      }
      xRa() {
        Qia(this)
      }
      FRa(a) {
        super.FRa(a)
        Qia(this)
      }
      qx(a) {
        if (this.ha instanceof Map) {
          var b = this.ha.get(a)
          b || (b = new gd.uXa([], a), this.ha.set(a, b))
          return b
        }
        b = this.ha[a]
        b || (b = new gd.uXa([], a), this.ha[a] = b)
        return b
      }
      fFa(a, b) {
        this.qx(a).isLoaded()
          ? this.load(b)
          : (this.ka[a] || (this.ka[a] = {}), this.ka[a][b] = !0)
      }
      lQa(a, b) {
        if (this.ka[a]) {
          delete this.ka[a][b]
          for (let c in this.ka[a]) return
          delete this.ka[a]
        }
      }
      Sa(a) {
        return !!this.Da[a]
      }
      load(a) {
        Tia(this, [a])
        return Uia(this, a)
      }
      Fa(a) {
        var b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Uia(this, d), c.push(d))
        })
        Tia(this, c)
        return b
      }
      Db(a) {
        var b
        ;((b = this.ma) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.lca()
        b = this.ha instanceof Map ? this.ha.get(a) : this.ha[a]
        var c
        Via(
          this,
          (c = b == null ? void 0 : b.iT()) != null ? c : [],
          (d) => d.lca(),
          (d) => !d.isLoaded(),
        )
        this.ma = this.qx(a)
      }
      lca() {
        if (this.ma) {
          var a = this.ma.getId(), b = []
          if (this.ka[a]) {
            for (let c of Object.keys(this.ka[a])) {
              this.qx(c).isLoaded() || (this.lQa(a, c), b.push(c))
            }
            this.Fa(b)
          }
          this.ma.onLoad(() => this.va)
          this.ma = null
          if (
            !this.Sa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead'
          ) this.ha instanceof Map ? this.ha.delete(a) : delete this.ha[a]
          Wia(this, a)
        }
      }
      beb(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var Yia = new _.Xia()
    Yia.beb(!0)
    Yia.FRa(new _.ge())
    _.Iba(Yia)
    ;(new _.Bha(Yia)).init()
    _.wda()
    var Zia = _.Ke(_.Pc('hxvedd'), !1), $ia = _.Ke(_.Pc('dLc0B'), !1)
    if (_.Ke(_.Pc('KUmoDd'), !1)) {
      let a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (let b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch ($ia ? 2 : Zia ? 1 : 0) {
      case 2:
        ;(0, _.Wc)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.Wc)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.Wc)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.Jb) {
        if (!_.Hba) return
        _.Iba(_.Hba())
      }
      _.Jb.xRa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
