// Source: https://gemini.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.fU1rUvkAI08.2018.O/am=IxwExIAC2r-BIj4BQADAbwADAAAAAg/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk3F9Y_v9zCgftlG_Ck87aEv4kddrA/ee=DGWCxb:CgYiQ;NJ1rfe:yGfSdd;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.U2tXutzoHmQ.libheifWasm.O%3A%3BBardChatUi.V3tPtilmn28.loadWasmSipCoca.O%3A%3B
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
      La,
      Maa,
      Raa,
      $aa,
      iba,
      jba,
      kba,
      nba,
      rba,
      tba,
      yba,
      Dba,
      Bba,
      Cba,
      $ba,
      bca,
      dca,
      fca,
      wc,
      nca,
      rca,
      vca,
      Tca,
      Uca,
      Vca,
      Wc,
      Wca,
      dda,
      eda,
      ad,
      fda,
      gda,
      rda,
      tda,
      uda,
      xda,
      Fda,
      Gda,
      aaa,
      ld,
      Jda,
      Kda,
      Lda,
      md,
      Mda,
      Oda,
      nd,
      Nda,
      Pda,
      Qda,
      Rda,
      Tda,
      Sda,
      Uda
    _.aa = function (a) {
      return function () {
        return aaa[a].apply(this, arguments)
      }
    }
    _.da = function (a, b) {
      return aaa[a] = b
    }
    _.ea = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.ea)
      else {
        const c = Error().stack
        c && (this.stack = c)
      }
      a && (this.message = String(a))
      b !== void 0 && (this.cause = b)
      this.ka = !0
    }
    baa = function (a, b) {
      a = a.split('%s')
      let c = ''
      const d = a.length - 1
      for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s')
      _.ea.call(this, c + a[d])
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
      let c = 0
      a = String(a).trim().split('.')
      b = String(b).trim().split('.')
      const d = Math.max(a.length, b.length)
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
      if (!_.faa || !_.na) return !1
      for (let b = 0; b < _.na.brands.length; b++) {
        const { brand: c } = _.na.brands[b]
        if (c && _.la(c, a)) return !0
      }
      return !1
    }
    _.oa = function (a) {
      return _.la(_.ma(), a)
    }
    _.qa = function () {
      return _.faa ? !!_.na && _.na.brands.length > 0 : !1
    }
    _.haa = function () {
      return _.qa() ? !1 : _.oa('Opera')
    }
    _.iaa = function () {
      return _.qa() ? !1 : _.oa('Trident') || _.oa('MSIE')
    }
    _.jaa = function () {
      return _.qa() ? _.gaa('Microsoft Edge') : _.oa('Edg/')
    }
    _.kaa = function () {
      return _.oa('Firefox') || _.oa('FxiOS')
    }
    _.ra = function () {
      return _.oa('Safari') &&
        !(_.laa() || (_.qa() ? 0 : _.oa('Coast')) || _.haa() ||
          (_.qa() ? 0 : _.oa('Edge')) || _.jaa() ||
          (_.qa() ? _.gaa('Opera') : _.oa('OPR')) || _.kaa() || _.oa('Silk') ||
          _.oa('Android'))
    }
    _.laa = function () {
      return _.qa()
        ? _.gaa('Chromium')
        : (_.oa('Chrome') || _.oa('CriOS')) && !(_.qa() ? 0 : _.oa('Edge')) ||
          _.oa('Silk')
    }
    _.maa = function () {
      return _.oa('Android') && !(_.laa() || _.kaa() || _.haa() || _.oa('Silk'))
    }
    naa = function (a = !1) {
      return a || _.faa ? !!_.na && !!_.na.platform : !1
    }
    _.oaa = function () {
      return naa() ? _.na.platform === 'Android' : _.oa('Android')
    }
    _.paa = function () {
      return _.oa('iPhone') && !_.oa('iPod') && !_.oa('iPad')
    }
    _.sa = function () {
      return _.paa() || _.oa('iPad') || _.oa('iPod')
    }
    _.ta = function () {
      return naa() ? _.na.platform === 'macOS' : _.oa('Macintosh')
    }
    _.qaa = function () {
      return naa() ? _.na.platform === 'Linux' : _.oa('Linux')
    }
    _.raa = function () {
      return naa() ? _.na.platform === 'Windows' : _.oa('Windows')
    }
    _.saa = function () {
      return naa() ? _.na.platform === 'Chrome OS' : _.oa('CrOS')
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
      var d = a.length
      const e = typeof a === 'string' ? a.split('') : a
      for (--d; d >= 0; --d) d in e && b.call(c, e[d], d, a)
    }
    _.va = function (a, b, c) {
      b = _.waa(a, b, c)
      return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b]
    }
    _.waa = function (a, b, c) {
      const d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (let f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f
      return -1
    }
    _.xa = function (a, b) {
      return _.wa(a, b) >= 0
    }
    _.ya = function (a, b) {
      _.xa(a, b) || a.push(b)
    }
    _.Aa = function (a, b) {
      b = _.wa(a, b)
      let c
      ;(c = b >= 0) && _.za(a, b)
      return c
    }
    _.za = function (a, b) {
      Array.prototype.splice.call(a, b, 1)
    }
    _.Ba = function (a) {
      const b = a.length
      if (b > 0) {
        const c = Array(b)
        for (let d = 0; d < b; d++) c[d] = a[d]
        return c
      }
      return []
    }
    _.Da = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c]
        if (_.Ca(d)) {
          const e = a.length || 0, f = d.length || 0
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
      let e = d = 0
      const f = new Set()
      for (; e < a.length;) {
        const g = a[e++], m = c(g)
        f.has(m) || (f.add(m), b[d++] = g)
      }
      b.length = d
    }
    _.Ga = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    yaa = function () {
      return _.paa() || _.oa('iPod')
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
      const b = new Uint8Array(a.length)
      for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
      return b
    }
    _.Eaa = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Ha = function () {
      return typeof BigInt === 'function'
    }
    La = function (a, b = !1) {
      return b && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
    }
    _.Na = function (a, b) {
      a[_.Ma] |= b
    }
    _.Oa = function (a) {
      _.Na(a, 34)
      return a
    }
    _.Faa = function (a) {
      _.Na(a, 8192)
      return a
    }
    _.Gaa = function (a) {
      _.Na(a, 32)
      return a
    }
    _.Pa = function (a) {
      return a != null && a[_.Haa] === _.Iaa
    }
    _.Sa = function (a, b) {
      return b === void 0
        ? a.Kb !== _.Qa && !!(2 & (a.uh[_.Ma] | 0))
        : !!(2 & b) && a.Kb !== _.Qa
    }
    _.Jaa = function (a, b) {
      a.Kb = b ? _.Qa : void 0
    }
    _.Kaa = function (a) {
      return a
    }
    _.Ta = function (a) {
      a.IZd = !0
      return a
    }
    _.Ya = function (a) {
      var b = a
      if ((0, _.Ua)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.Va)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.Wa
        ? BigInt(a)
        : a = (0, _.Laa)(a)
          ? a ? '1' : '0'
          : (0, _.Ua)(a)
          ? a.trim() || '0'
          : String(a)
    }
    Maa = function (a, b) {
      if (a.length > b.length) return !1
      if (a.length < b.length || a === b) return !0
      for (let c = 0; c < a.length; c++) {
        const d = a[c], e = b[c]
        if (d > e) return !1
        if (d < e) return !0
      }
    }
    _.Naa = function (a) {
      const b = a >>> 0
      _.Za = b
      _.$a = (a - b) / 4294967296 >>> 0
    }
    _.ab = function (a) {
      if (a < 0) {
        _.Naa(-a)
        const [b, c] = _.Oaa(_.Za, _.$a)
        _.Za = b >>> 0
        _.$a = c >>> 0
      } else _.Naa(a)
    }
    _.Qaa = function (a, b) {
      const c = b * 4294967296 + (a >>> 0)
      return Number.isSafeInteger(c) ? c : _.Paa(a, b)
    }
    _.Paa = function (a, b) {
      b >>>= 0
      a >>>= 0
      if (b <= 2097151) { var c = '' + (4294967296 * b + a) }
      else {_.Ha()
          ? c = '' + (BigInt(b) << BigInt(32) | BigInt(a))
          : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7),
            c = b + Raa(c) + Raa(a))}
      return c
    }
    Raa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Saa = function (a) {
      if (a.length < 16) _.ab(Number(a))
      else if (_.Ha()) {
        a = BigInt(a),
          _.Za = Number(a & BigInt(4294967295)) >>> 0,
          _.$a = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.$a = _.Za = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.$a *= 1E6
          _.Za = _.Za * 1E6 + f
          _.Za >= 4294967296 &&
            (_.$a += Math.trunc(_.Za / 4294967296), _.$a >>>= 0, _.Za >>>= 0)
        }
        if (b) {
          const [d, e] = _.Oaa(_.Za, _.$a)
          _.Za = d
          _.$a = e
        }
      }
    }
    _.Oaa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Taa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Uaa = function () {
      const a = Error()
      _.Taa(a, 'severity', 'incident')
      _.ia(a)
    }
    _.cb = function (a) {
      a = Error(a)
      _.Taa(a, 'severity', 'warning')
      return a
    }
    _.Waa = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Vaa) != null ? c : Vaa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Uaa())
      }
    }
    _.db = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Yaa = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.Xaa(a) + '`' + a)
      return a
    }
    _.fb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.eb)(a)
        case 'string':
          return Zaa.test(a)
        default:
          return !1
      }
    }
    _.gb = function (a) {
      if (typeof a !== 'number') throw _.cb('int32')
      if (!(0, _.eb)(a)) throw _.cb('int32')
      return a | 0
    }
    _.ib = function (a) {
      if (a == null) return a
      if (typeof a === 'string' && a) a = +a
      else if (typeof a !== 'number') return
      return (0, _.eb)(a) ? a | 0 : void 0
    }
    $aa = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Saa(a)
      return _.Paa(_.Za, _.$a)
    }
    _.aba = function (a) {
      a = (0, _.jb)(a)
      a >= 0 && (0, _.kb)(a) || (_.ab(a), a = _.Qaa(_.Za, _.$a))
      return a
    }
    _.bba = function (a) {
      a = (0, _.jb)(a)
      a >= 0 && (0, _.kb)(a) ? a = String(a) : (_.ab(a), a = _.Paa(_.Za, _.$a))
      return a
    }
    _.cba = function (a) {
      return (0, _.kb)(a) ? _.Ya(_.aba(a)) : _.Ya(_.bba(a))
    }
    _.dba = function (a) {
      var b = (0, _.jb)(Number(a))
      if ((0, _.kb)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return $aa(a)
    }
    _.eba = function (a) {
      var b = (0, _.jb)(Number(a))
      if ((0, _.kb)(b) && b >= 0) return _.Ya(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Ha() ? _.Ya((0, _.lb)(64, BigInt(a))) : _.Ya($aa(a))
    }
    _.fba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.Ya((0, _.lb)(64, a))
      if (_.fb(a)) return b === 'string' ? _.eba(a) : _.cba(a)
    }
    _.mb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.nb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.hba = function (a, b, c, d) {
      if (_.Pa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.ob] || (b[_.ob] = _.gba(b)) : new b()
          : void 0
      }
      c = a[_.Ma] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Ma] = d)
      return new b(a)
    }
    _.gba = function (a) {
      a = new a()
      _.Oa(a.uh)
      return a
    }
    iba = function (a) {
      return a
    }
    jba = function (a, b, c, d, e, f) {
      a = _.hba(a, d, c, f)
      e && (a = _.pb(a))
      return a
    }
    kba = function (a) {
      return [a, this.get(a)]
    }
    _.lba = function (a) {
      const b = _.qb(_.rb)
      return b ? a[b] : void 0
    }
    nba = function (a, b) {
      b < 100 || _.Waa(mba, 1)
    }
    _.qba = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.qb(_.rb), g
      !e && f && (g = a[f]) && g.yWa(nba)
      f = []
      var m = a.length
      let t
      g = 4294967295
      let v = !1
      const z = !!(b & 64), C = z ? b & 128 ? 0 : -1 : void 0
      if (
        !(b & 1 ||
          (t = m && a[m - 1],
            t != null && typeof t === 'object' && t.constructor === Object
              ? (m--, g = m)
              : t = void 0,
            !z || b & 128 || e))
      ) {
        v = !0
        var I
        g = ((I = oba) != null ? I : _.Kaa)(g - C, C, a, t, void 0) + C
      }
      b = void 0
      for (I = 0; I < m; I++) {
        let S = a[I]
        if (S != null && (S = c(S, d)) != null) {
          if (z && I >= g) {
            const ba = I - C
            var M = void 0
            ;((M = b) != null ? M : b = {})[ba] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          M = t[S]
          if (M == null || (M = c(M, d)) == null) continue
          m = +S
          let ba
          if (z && !Number.isNaN(m) && (ba = m + C) < g) f[ba] = M
          else {
            let fa
            ;((fa = b) != null ? fa : b = {})[S] = M
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.qb(_.rb) && (a = _.lba(a)) && 'function' == typeof _.pba &&
        a instanceof _.pba && (f[_.rb] = a.ha())
      return f
    }
    rba = function (a) {
      a[0] = _.sb(a[0])
      a[1] = _.sb(a[1])
      return a
    }
    _.sb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.sba)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Ma] | 0
            return a.length === 0 && b & 1 ? void 0 : _.qba(a, b, _.sb)
          }
          if (_.Pa(a)) return tba(a)
          if (a instanceof _.tb) return _.ub(a)
          if (a instanceof _.wb) {
            return a = a.size !== 0 ? a.v8a(rba) : void 0, a
          }
          return
      }
      return a
    }
    _.wba = function (a, b) {
      if (b) {
        oba = b == null || b === _.Kaa || b[uba] !== vba ? _.Kaa : b
        try {
          return tba(a)
        } finally {
          oba = void 0
        }
      }
      return tba(a)
    }
    tba = function (a) {
      a = a.uh
      return _.qba(a, a[_.Ma] | 0, _.sb)
    }
    _.zba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.Ma] | 0
        if (xba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && yba()
        if (e & 256) throw Error('G')
        if (e & 64) return (e | d) !== e && (a[_.Ma] = e | d), a
        if (c && (e |= 128, c !== a[0])) throw Error('H')
        a: {
          c = a
          e |= 64
          var f = c.length
          if (f) {
            var g = f - 1
            const t = c[g]
            if (
              t != null && typeof t === 'object' && t.constructor === Object
            ) {
              b = e & 128 ? 0 : -1
              g -= b
              if (g >= 1024) throw Error('J')
              for (var m in t) {
                if (f = +m, f < g) {
                  c[
                    f +
                    b
                  ] = t[m], delete t[m]
                } else break
              }
              e = e & -16760833 | (g & 1023) << 14
              break a
            }
          }
          if (b) {
            m = Math.max(b, f - (e & 128 ? 0 : -1))
            if (m > 1024) throw Error('K')
            e = e & -16760833 | (m & 1023) << 14
          }
        }
      }
      a[_.Ma] = e | 64 | d
      return a
    }
    yba = function () {
      if (xba) throw Error('I')
      _.Waa(Aba, 5)
    }
    Dba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Ma] | 0
        return a.length === 0 && c & 1 ? void 0 : Bba(a, c, b)
      }
      if (_.Pa(a)) return Cba(a)
      if (a instanceof _.wb) {
        b = a.K2
        if (b & 2) return a
        if (!a.size) return
        c = _.Oa(a.v8a())
        if (a.J9) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Pa(e)
              ? e = Cba(e)
              : Array.isArray(e)
              ? e = Bba(e, e[_.Ma] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if (a instanceof _.tb) return a
    }
    Bba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.yb(a, b, !1, c && !(b & 16))
        : (_.Na(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.Eba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Jaa(a, !0)
      a.k2a = _.Qa
      return a
    }
    Cba = function (a) {
      const b = a.uh, c = b[_.Ma] | 0
      return _.Sa(a, c) ? a : _.Fba(a, b, c) ? _.Eba(a, b) : _.yb(b, c)
    }
    _.yb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.qba(a, b, Dba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Ma] = b
      return a
    }
    _.pb = function (a) {
      const b = a.uh, c = b[_.Ma] | 0
      return _.Sa(a, c)
        ? _.Fba(a, b, c) ? _.Eba(a, b, !0) : new a.constructor(_.yb(b, c, !1))
        : a
    }
    _.zb = function (a) {
      if (a.Kb !== _.Qa) return !1
      var b = a.uh
      b = _.yb(b, b[_.Ma] | 0)
      _.Na(b, 2048)
      a.uh = b
      _.Jaa(a, !1)
      a.k2a = void 0
      return !0
    }
    _.Ab = function (a) {
      if (!_.zb(a) && _.Sa(a, a.uh[_.Ma] | 0)) throw Error()
    }
    _.Bb = function (a, b) {
      b === void 0 && (b = a[_.Ma] | 0)
      b & 32 && !(b & 4096) && (a[_.Ma] = b | 4096)
    }
    _.Fba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Ma] = c | 2, _.Jaa(a, !0), !0)
        : !1
    }
    _.Cb = function (a, b, c, d, e) {
      const f = c + (e ? 0 : -1)
      var g = a.length - 1
      if (g >= 1 + (e ? 0 : -1) && f >= g) {
        const m = a[g]
        if (m != null && typeof m === 'object' && m.constructor === Object) {
          return m[c] = d, b
        }
      }
      if (f <= g) return a[f] = d, b
      if (d !== void 0) {
        let m
        g = ((m = b) != null ? m : b = a[_.Ma] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.Gba = function (a, b, c, d, e, f, g, m, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Db(b) ||
          (b |= !a.length || m && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Ma] = b),
            Object.freeze(a))
        : (g === 2 && _.Db(b) &&
          (a = [...a], v = 0, b = _.Eb(b, d), d = _.Cb(c, d, e, a, f)),
          _.Db(b) || (t || (b |= 16), b !== v && (a[_.Ma] = b)))
      2 & b || !(4096 & b || 16 & b) || _.Bb(c, d)
      return a
    }
    _.Hba = function (a, b, c) {
      a = _.Fb(a, b, c)
      return Array.isArray(a) ? a : _.Gb
    }
    _.Iba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Db = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Hb = function (a, b, c, d, e) {
      _.Ab(a)
      const f = a.uh
      _.Cb(
        f,
        f[_.Ma] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Jba = function (a, b, c, d, e, f, g, m, t) {
      var v = _.Sa(a, c)
      f = v ? 1 : f
      m = !!m || f === 3
      v = t && !v
      ;(f === 2 || v) && _.zb(a) && (b = a.uh, c = b[_.Ma] | 0)
      a = _.Hba(b, e, g)
      var z = a === _.Gb ? 7 : a[_.Ma] | 0, C = _.Iba(z, c)
      if (t = !(4 & C)) {
        var I = a, M = c
        const S = !!(2 & C)
        S && (M |= 2)
        let ba = !S, fa = !0, pa = 0, Ia = 0
        for (; pa < I.length; pa++) {
          const Ja = _.hba(I[pa], d, !1, M)
          if (Ja instanceof d) {
            if (!S) {
              const bb = _.Sa(Ja)
              ba && (ba = !bb)
              fa && (fa = bb)
            }
            I[Ia++] = Ja
          }
        }
        Ia < pa && (I.length = Ia)
        C |= 4
        C = fa ? C & -4097 : C | 4096
        C = ba ? C | 8 : C & -9
      }
      C !== z && (a[_.Ma] = C, 2 & C && Object.freeze(a))
      if (
        v && !(8 & C ||
          !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & C || !(16 & C) && 32 & c)))
      ) {
        _.Db(C) && (a = [...a], C = _.Eb(C, c), c = _.Cb(b, c, e, a, g))
        d = a
        v = C
        for (z = 0; z < d.length; z++) {
          I = d[z], C = _.pb(I), I !== C && (d[z] = C)
        }
        v |= 8
        C = v = d.length ? v | 4096 : v & -4097
        a[_.Ma] = C
      }
      return a = _.Gba(a, C, b, c, e, g, f, t, m)
    }
    _.Eb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Kba = function (a, b) {
      return _.Ib(b, `[${a.substring(4)}`)
    }
    _.Kb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Lb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Ca(d) ? _.Lb.apply(null, d) : _.Kb(d)
      }
    }
    _.Mb = function () {
      this.cT = this.cT
      this.pfa = this.pfa
    }
    _.Ob = function (a, b) {
      _.Nb.call(this, a ? a.type : '')
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
      this.Mi = null
      a && this.init(a, b)
    }
    _.Mba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Lba
      this.removed = this.nla = !1
    }
    _.Pb = function (a, b, c) {
      for (const d in a) b.call(c, a[d], d, a)
    }
    _.Nba = function (a, b, c) {
      const d = {}
      for (const e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Oba = function (a, b, c) {
      for (const d in a) if (b.call(c, a[d], d, a)) return !0
      return !1
    }
    _.Rb = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.Sb = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = d
      return b
    }
    _.Tb = function (a) {
      for (const b in a) return !1
      return !0
    }
    _.Ub = function (a) {
      const b = {}
      for (const c in a) b[c] = a[c]
      return b
    }
    _.Vb = function (a, b) {
      let c, d
      for (let e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (let f = 0; f < Pba.length; f++) {
          c = Pba[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      }
    }
    _.Qba = function (a) {
      const b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Qba.apply(null, arguments[0])
      }
      const c = {}
      for (let d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
    _.Wb = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Sba = function (a) {
      if (_.Xb) a(_.Xb)
      else {
        let b
        ;((b = Rba) != null ? b : Rba = []).push(a)
      }
    }
    _.Yb = function () {
      !_.Xb && _.Tba && _.Uba(_.Tba())
      return _.Xb
    }
    _.Uba = function (a) {
      _.Xb = a
      let b
      ;(b = Rba) == null || b.forEach(_.Sba)
      Rba = void 0
    }
    _.$b = function (a) {
      _.Xb && _.Xb.ub(a)
    }
    _.ac = function () {
      _.Xb && _.Xb.Ea()
    }
    _.bc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Vba] = a
    }
    _.cc = function () {
      _.Mb.call(this)
      this.wT = new _.Wb(this)
      this.i0c = this
      this.iyb = null
    }
    _.ec = function (a, b) {
      let c = a
      b && (c = (0, _.dc)(a, b))
      c = _.ec.rxc(c)
      _.ec.pWc
        ? setTimeout(c, 0)
        : (c = _.ec.bwd(c), _.ec.ngc || (_.ec.ngc = _.ec.zdd()), _.ec.ngc(c))
    }
    $ba = function () {
      let a
      for (; a = Wba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ia(b)
        }
        Xba(Yba, a)
      }
      Zba = !1
    }
    _.hc = function (a, b) {
      this.Ba = []
      this.lb = a
      this.Wa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.mb = this.Ea = !1
      this.Da = 0
      this.na = null
      this.Aa = 0
    }
    _.jc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.mc = function (a, b) {
      this.width = a
      this.height = b
    }
    bca = function () {
      let a = null
      if (!aca) return a
      try {
        const b = (c) => c
        a = aca.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    dca = function () {
      cca === void 0 && (cca = bca())
      return cca
    }
    _.pc = function (a) {
      const b = dca()
      a = b ? b.createScriptURL(a) : a
      return new _.nc(_.oc, a)
    }
    _.eca = function (a) {
      return a instanceof _.nc
    }
    _.qc = function (a) {
      if (_.eca(a)) return a.ha
      throw Error('$')
    }
    fca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.rc = function (a) {
      return new _.gca(_.oc, a)
    }
    _.tc = function (a) {
      return a instanceof _.gca
    }
    _.uc = function (a) {
      if (_.tc(a)) return a.ha
      throw Error('$')
    }
    wc = function (a) {
      return new vc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.xc = function (a, b = hca) {
      if (_.tc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof vc && d.Nj(a)) return _.rc(a)
      }
    }
    _.yc = function (a, b = hca) {
      b = _.xc(a, b)
      b === void 0 && _.ica(a.toString())
      return b || _.jca
    }
    _.zc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.rc(URL.createObjectURL(a))
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
      return _.rc(URL.createObjectURL(a))
    }
    _.lca = function (a) {
      if (!kca) {
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
    nca = function (a) {
      const b = !mca.test(a)
      b && _.ica(a)
      if (!b) return a
    }
    _.Ac = function (a) {
      return a instanceof _.gca ? _.uc(a) : nca(a)
    }
    _.Bc = function (a, b) {
      b = _.Ac(b)
      b !== void 0 && (a.href = b)
    }
    _.Dc = function (a) {
      const b = dca()
      a = b ? b.createHTML(a) : a
      return new _.Cc(_.oc, a)
    }
    _.oca = function (a) {
      return a instanceof _.Cc
    }
    _.Ec = function (a) {
      if (_.oca(a)) return a.ha
      throw Error('$')
    }
    _.Fc = function (a, b) {
      a.src = _.qc(b).toString()
    }
    _.pca = function (a, b) {
      a.srcdoc = _.Ec(b)
    }
    _.qca = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Hc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.nc) throw new _.Gc('TrustedResourceUrl', 0)
          _.qca(a, [])
          b = _.Ac(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.nc)) throw new _.Gc(typeof c, 1)
          _.qca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Fc(a, c)
          break
        case 2:
          if (c instanceof _.nc) throw new _.Gc('TrustedResourceUrl', 2)
          _.qca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.Ac(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.db(b, void 0)
      }
    }
    _.Ic = function (a, b, c, d) {
      b = _.Ac(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Jc = function (a) {
      return rca('script', a)
    }
    _.sca = function (a) {
      return rca('style', a)
    }
    rca = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Kc = function (a) {
      const b = dca()
      a = b ? b.createScript(a) : a
      return new _.tca(_.oc, a)
    }
    _.uca = function (a) {
      return a instanceof _.tca
    }
    _.Lc = function (a) {
      if (_.uca(a)) return a.ha
      throw Error('$')
    }
    vca = function (a) {
      const b = _.Jc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.wca = function (a, b, c) {
      a.textContent = _.Lc(b)
      ;(c == null ? 0 : c.xsd) || vca(a)
    }
    _.Mc = function (a, b, c) {
      a.src = _.qc(b)
      ;(c == null ? 0 : c.xsd) || vca(a)
    }
    _.yca = function (a) {
      if (a instanceof _.xca) return a.ha
      throw Error('$')
    }
    _.Nc = function (a, b) {
      a.nodeType === 1 && _.zca(a)
      a.innerHTML = _.Ec(b)
    }
    _.Oc = function (a, b, c, d) {
      if (a.length === 0) throw Error('$')
      a = a.map((f) => _.yca(f))
      const e = c.toLowerCase()
      if (a.every((f) => e.indexOf(f) !== 0)) throw Error('aa`' + c)
      b.setAttribute(c, d)
    }
    _.zca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('$')
    }
    _.Cca = function (a, b, c) {
      if (_.eca(b)) _.Aca(a, b, c)
      else {
        if (Bca.indexOf(c) === -1) throw Error('ba`' + c)
        b = _.Ac(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.Aca = function (a, b, c) {
      a.href = _.qc(b).toString()
      a.rel = c
    }
    _.Eca = function (a) {
      return 'function' == typeof _.Dca && a instanceof _.Dca
    }
    _.Fca = function (a) {
      if (_.Eca(a)) return a.ha
      throw Error('$')
    }
    _.Pc = function (a, b, c) {
      return a.parseFromString(_.Ec(b), c)
    }
    _.Qc = function (a, b) {
      b = _.Ac(b)
      b !== void 0 && (a.href = b)
    }
    _.Gca = function (a, b) {
      return a.createContextualFragment(_.Ec(b))
    }
    _.Hca = function (a) {
      return _.Dc(a)
    }
    _.Ica = function (a) {
      return _.pc(a)
    }
    _.Rc = function (a) {
      a = a[0].toLowerCase()
      return new _.xca(_.oc, a)
    }
    _.Uc = function (a, b) {
      if (_.oca(a)) return a
      a = _.Sc(String(a))
      if (b == null ? 0 : b.I0d) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.z3a) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.J0d) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Dc(a)
    }
    _.Sc = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.Kca = function (a) {
      return _.Jca('', a)
    }
    _.Jca = function (a, b) {
      a = _.Uc(a)
      return _.Dc(b.map((c) => _.Ec(_.Uc(c))).join(_.Ec(a).toString()))
    }
    _.Lca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Dc(a)
    }
    _.Oca = function (a) {
      if (!Mca.test(a)) throw Error('$')
      if (Nca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.Vc = function (a, b, c) {
      _.Oca(a)
      let d = `<${a}`
      b && (d += _.Pca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Qca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.Kca(c.map((e) => _.oca(e) ? e : _.Uc(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Dc(d)
    }
    _.Pca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Mca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Rca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.tc(e)
              ? e.toString()
              : nca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.Uc(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Sca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Tca = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Dc(a)
      return _.Gca(c, a)
    }
    Uca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Vca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    Wc = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Wca = function (a) {
      return a.parts.map((b) => {
        const c = b.AUa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.Xc = function (a) {
      return _.Xca.sanitize(a)
    }
    _.Yca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        h9a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.Yc = function (a, ...b) {
      if (b.length === 0) return _.pc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.pc(c)
    }
    _.Zc = function (a, b) {
      a = _.Yca(_.qc(a).toString())
      return _.Zca(a.h9a, a.params, a.fragment, b)
    }
    _.Zca = function (a, b, c, d) {
      function e(g, m) {
        g != null &&
          (Array.isArray(g)
            ? g.forEach((t) => e(t, m))
            : (b += f + encodeURIComponent(m) + '=' + encodeURIComponent(g),
              f = '&'))
      }
      let f = b.length ? '&' : '?'
      d.constructor === Object && (d = Object.entries(d))
      Array.isArray(d) ? d.forEach((g) => e(g[1], g[0])) : d.forEach(e)
      return _.pc(a + b + c)
    }
    _.$ca = function (a, b) {
      a = _.Yca(_.qc(a).toString())
      const c = a.h9a.slice(-1) === '/' ? '' : '/'
      b = a.h9a + c + encodeURIComponent(b)
      return _.pc(b + a.params + a.fragment)
    }
    _.ada = function (a) {
      a = _.Lc(a).toString()
      return _.pc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.bda = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.cda = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    dda = function (a, b) {
      var c = b || _.$c()
      const d = c.ag()
      b = c.createElement('STYLE')
      const e = _.sca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    eda = function (a, b) {
      this.ha = a
      this.ka = b
    }
    ad = function (a, b) {
      _.Mb.call(this)
      this.ha = a
      this.Aa = b
      this.qa = []
      this.na = []
      this.oa = []
    }
    fda = function () {
      this.qa = this.oa = null
    }
    gda = function (a = window) {
      return a.WIZ_global_data
    }
    _.hda = function (a, b = window) {
      return (b = gda(b)) && a in b ? b[a] : null
    }
    _.cd = function (a, b = window) {
      return new _.bd(a, _.hda(a, b))
    }
    _.ida = function (a, b, c, d, e, f, g) {
      let m = ''
      a && (m += a + ':')
      c && (m += '//', b && (m += b + '@'), m += c, d && (m += ':' + d))
      e && (m += e)
      f && (m += '?' + f)
      g && (m += '#' + g)
      return m
    }
    _.dd = function (a) {
      return a.match(jda)
    }
    _.ed = function (a) {
      return a ? decodeURI(a) : a
    }
    _.hd = function (a, b) {
      return _.dd(b)[a] || null
    }
    _.kda = function (a) {
      a = _.hd(1, a)
      !a && _.ha.self && _.ha.self.location &&
        (a = _.ha.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.id = function (a) {
      a = _.dd(a)
      return _.ida(a[1], a[2], a[3], a[4])
    }
    _.mda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.lda(f) : '')
        }
      }
    }
    _.nda = function (a, b) {
      if (!b) return a
      var c = a.indexOf('#')
      c < 0 && (c = a.length)
      let d = a.indexOf('?'), e
      d < 0 || d > c ? (d = c, e = '') : e = a.substring(d + 1, c)
      a = [a.slice(0, d), e, a.slice(c)]
      c = a[1]
      a[1] = b ? c ? c + '&' + b : b : c
      return a[0] + (a[1] ? '?' + a[1] : '') + a[2]
    }
    _.oda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.oda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.jd(b)))
    }
    _.pda = function (a) {
      const b = []
      for (const c in a) _.oda(c, a[c], b)
      return b.join('&')
    }
    _.qda = function (a, b, c, d) {
      const e = c.length
      for (; (b = a.indexOf(c, b)) >= 0 && b < d;) {
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
    rda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    tda = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      const d = _.ha._F_jsUrl
      ;(a = b || rda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!sda(c)) throw Error('pa')
      return c
    }
    uda = function () {
      let a, b
      return {
        promise: new Promise((c, d) => {
          a = c
          b = d
        }),
        resolve: a,
        reject: b,
      }
    }
    xda = function (a) {
      const { promise: b, resolve: c, reject: d } = uda()
      vda.set(a, { promise: b, resolve: c, reject: d })
      wda || (wda = [],
        queueMicrotask(() => {
          const e = [...wda]
          wda = null
          const f = _.Yb().Da(e)
          for (const g of e) f[g].then(vda.get(g).resolve, vda.get(g).reject)
        }))
      wda.push(a)
      return b
    }
    _.Cda = function () {
      if (yda) return zda
      yda = !0
      let a
      try {
        a = tda(_.ha._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = Ada(_.Bda(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Sba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.eya(e, g)
        }
      })
      return zda = !0
    }
    _.Dda = function () {}
    Fda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return Eda[a]
    }
    Gda = function (a) {
      let b = 0, c = 0, d
      do d = Fda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.Ida = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.Yaa || ''
      !c.wXd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('wa')
      }
      const f = c.q_d || _.Hda
      a = rda(a)
      b = new f(
        _.Ica(tda('', a), {
          Wtb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.v3d || a && a.hasAttribute('crossorigin')
      a = c.XWd || a && a.getAttribute('crossorigin')
      d && (b.OMa = d)
      a && (b.eAa = a)
      c.NMa && (b.NMa = c.NMa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.Yb()
      g.qa = b
      g.Lmc(!0)
      _.kd = c.mWd === 'BATCH' ? xda : (m) => Promise.resolve(g.load(m))
    }
    aaa = []
    Jda = Object.create
    Kda = Object.defineProperty
    Lda = function (a) {
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
    md = Lda(this)
    Mda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    md.BigInt64Array && (Mda.push('BigInt64'), Mda.push('BigUint64'))
    Oda = function (a, b) {
      if (b) {
        for (var c = 0; c < Mda.length; c++) {
          Nda(Mda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    nd = function (a, b) {
      b && Nda(a, b)
    }
    Nda = function (a, b) {
      var c = md
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
        Kda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Pda = Object.setPrototypeOf
    Qda = function (a, b) {
      a.prototype = Jda(b.prototype)
      a.prototype.constructor = a
      Pda(a, b)
      a.oc = b.prototype
    }
    Rda = function (a) {
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
    _.od = function (a) {
      return Rda(a())
    }
    nd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    nd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (ld = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(md.top) || b(md) || b({})
      return a || {}
    })
    Tda = function () {
      return Sda
    }
    _.pd = function () {
      return Tda
    }
    Sda = function (a) {
      return a
    }
    Uda = function (a) {
      var b = ld
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
    nd('globalThis', function (a) {
      return a || md
    })
    nd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    nd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    nd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    nd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    nd('Object.fromEntries', function (a) {
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
    nd('String.prototype.replaceAll', function (a) {
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
    nd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    nd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    nd('Promise.withResolvers', function (a) {
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
    nd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var Vda = {},
      Wda = function () {
        if (typeof md.EventTarget === 'function') {
          var a = md.EventTarget.prototype
        } else {for (
            a = md;
            a && !Object.prototype.hasOwnProperty.call(a, 'addEventListener');
          ) a = a.__proto__}
        if (a) {
          var b = a.removeEventListener,
            c = a.addEventListener,
            d = new WeakMap(),
            e = {}
          a.removeEventListener = function (f, g, m) {
            var t = d.get(g != null ? g : e)
            t = t && t.get(this)
            var v = !(typeof m === 'boolean' ? m : m && m.capture) + f
            t && t[v] && (g = t[v], delete t[v])
            return b.call(this, f, g, m)
          }
          a.addEventListener = function (f, g, m) {
            var t = Vda[f]
            if (!t) return c.call(this, f, g, m)
            var v = g != null ? g : e, z = d.get(v)
            z || (z = new WeakMap(), d.set(v, z))
            var C = z.get(this)
            C || (C = {}, z.set(this, C))
            var I = !(typeof m === 'boolean' ? m : m && m.capture) + f
            if (!C[I]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var M = g.handleEvent
                if (typeof M === 'function') return M.apply(g, arguments)
              })
              if (v) {
                m && m.once && (v = function (M) {
                  return function () {
                    if (typeof M !== 'function') throw Error('l`' + M)
                    delete C[I]
                    return M.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  m && md.AbortSignal && m.signal instanceof
                    md.AbortSignal
                ) {
                  if (m.signal.aborted) return
                  m.signal.addEventListener('abort', function () {
                    delete C[I]
                  }, { once: !0 })
                }
              }
              C[I] = v
              return c.call(this, f, v, m)
            }
          }
          Wda = function () {}
        }
      },
      Xda = function (a) {
        var b = ['readystatechange']
        Wda()
        for (let c = 0; c < b.length; c++) {
          ;(Vda[b[c]] || (Vda[b[c]] = [])).push(a)
        }
      },
      qd = function (a, b) {
        Nda(a, function (c) {
          return c && b(c)
        })
      },
      Yda = !1
    nd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.pd = c)
        c = a._JSC
        typeof c === 'function' && (Tda = c)
        return a
      }
      Yda = !0
      Sda = function (e) {
        return e
      }
      var d = ld
      d[0] = d[0] || []
      d[1] = d[1] || 0
      b.prototype.get = function () {
        return this.index in d[0] ? d[0][this.index] : this.defaultValue
      }
      b.prototype.run = function (e, f, g) {
        var m = d[0]
        ;(d[0] = m.slice())[this.index] = e
        try {
          return f.apply(null, Array.prototype.slice.call(arguments, 2))
        } finally {
          d[0] = m
        }
      }
      b['\u1d43\u1d9cstart'] = _.pd = function (e) {
        var f = d[0], g = e ? void 0 : d[0]
        return function (m) {
          return m
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
      b._JSC = Tda = function (e) {
        var f = (0, _.pd)(e)
        return function (g, m) {
          return f(m)(g)
        }
      }
      return b
    })
    Yda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var m = 0; m < e.length; m++) {
                var t = e[m], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Uda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              Kda(g, 'name', { value: f.name }),
                Kda(g, 'length', { value: f.length }),
                Kda(g, 'toString', {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return f.toString()
                  },
                })
            } catch (m) {}
            return g
          }
        },
        b = a(0)
      qd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      qd('queueMicrotask', b)
      qd('requestAnimationFrame', b)
      qd('requestIdleCallback', b)
      qd('setInterval', b)
      qd('setTimeout', b)
      qd('HTMLCanvasElement.prototype.toBlob', b)
      qd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      qd('FileSystemEntry.prototype.getParent', a(0, 1))
      qd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      qd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      qd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      qd('XMLHttpRequest.prototype.send', function (d) {
        Xda(function (e) {
          return function () {
            var f = ld[0]
            try {
              return ld[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              ld[0] = f
            }
          }
        })
        return function () {
          c.set(this, ld[0])
          return d.apply(this, arguments)
        }
      })
    }()
    nd('Promise.prototype.finally', function (a) {
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
    nd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    nd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = ld
      b.wrap = Uda
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
    nd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Zda(this)
        $da(b)
        var c = aea(this, b)
        b = new Set(this)
        var d = c.RDb
        c = c.cub
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    nd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Zda(this)
        $da(b)
        var c = new Set(), d = aea(this, b)
        b = d.RDb
        d = d.cub
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var $da = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      aea = function (a, b) {
        if (a.size <= b.size) a = { RDb: a.keys(), cub: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { RDb: b, cub: a }
        }
        return a
      },
      Zda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      bea = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    nd('Array.prototype.at', function (a) {
      return a ? a : bea
    })
    Oda('at', function (a) {
      return a ? a : bea
    })
    nd('String.prototype.at', function (a) {
      return a ? a : bea
    })
    nd('Array.prototype.flat', function (a) {
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
    nd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    nd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var cea = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    nd('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return cea(d, b, c)
      }
    })
    Oda('with', function (a) {
      return a ? a : function (b, c) {
        return cea(this.slice(), b, c)
      }
    })
    nd('Promise.allSettled', function (a) {
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
    nd('String.prototype.matchAll', function (a) {
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
    var dea = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    nd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return dea(this, b, c).v
      }
    })
    Oda('findLast', function (a) {
      return a ? a : function (b, c) {
        return dea(this, b, c).v
      }
    })
    nd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Qda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    nd('Promise.any', function (a) {
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
    _._DumpException = _._DumpException || function (a) {
      throw a
    }
    var td, wd, fea, gea, hea
    _.eea = _.eea || {}
    _.ha = this || self
    _.rd = function (a, b, c) {
      a = a.split('.')
      c = c || _.ha
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    td = function (a, b) {
      var c = _.sd('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.ud = _.ha._F_toggles_default_BardChatUi || []
    wd = function () {}
    wd.get = function () {
      return null
    }
    _.kd = null
    _.sd = function (a, b) {
      a = a.split('.')
      b = b || _.ha
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.Xaa = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ca = function (a) {
      var b = _.Xaa(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.xd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.yd = function (a) {
      return Object.prototype.hasOwnProperty.call(a, fea) && a[fea] ||
        (a[fea] = ++gea)
    }
    fea = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    gea = 0
    hea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.dc = function (a, b, c) {
      _.dc = hea
      return _.dc.apply(null, arguments)
    }
    _.Ad = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.Bd = function () {
      return Date.now()
    }
    _.iea = function (a, b, c) {
      _.rd(a, b, c)
    }
    _.qb = function (a) {
      return a
    }
    _.Cd = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.oc = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++
        ) g[m - 2] = arguments[m]
        return b.prototype[e].apply(d, g)
      }
    }
    _.Cd(_.ea, Error)
    _.ea.prototype.name = 'CustomError'
    var jea
    _.Cd(baa, _.ea)
    baa.prototype.name = 'AssertionError'
    _.kea = typeof TextDecoder !== 'undefined'
    _.lea = typeof TextEncoder !== 'undefined'
    var Dd = !!(_.ud[5] & 2048),
      mea = !!(_.ud[5] & 64),
      nea = !!(_.ud[5] & 8192),
      oea = !!(_.ud[4] >> 27 & 1),
      pea = !!(_.ud[5] >> 14 & 1),
      qea = !!(_.ud[5] & 2),
      rea = !!(_.ud[4] >> 22 & 1),
      sea = !!(_.ud[5] & 4096),
      tea = !!(_.ud[4] >> 23 & 1),
      uea = !!(_.ud[5] & 8)
    var vea, xba
    vea = td(1, !0)
    _.faa = Dd ? nea : td(610401301, !1)
    _.wea = Dd ? oea : td(1331761403, !1)
    _.xea = Dd ? pea : td(651175828, !1)
    xba = Dd ? mea || !qea : td(748402147, !0)
    _.yea = Dd ? rea : td(861377723, !1)
    _.zea = Dd ? mea || !sea : td(861377724, vea)
    _.Aea = Dd ? mea || !tea : td(869336904, vea)
    _.Bea = Dd ? mea || !uea : td(869336905, vea)
    var Cea
    Cea = _.ha.navigator
    _.na = Cea ? Cea.userAgentData || null : null
    var Dea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var Eea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        const a = this
        return _.od(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.od(function* () {
                  try {
                    const b = yield _.na.getHighEntropyValues([a.ka])
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
    var Fea
    Fea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.od(function* () {
          if (naa(!0)) return new Dea(yield Eea.load())
          a.ha = !0
          return new Dea(_.taa())
        })
      }
    }
    _.Gea = new Fea()
    _.wa = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Ed = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Gd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Hd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.Id = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Hea = function (a) {
      _.Hea[' '](a)
      return a
    }
    _.Hea[' '] = function () {}
    _.Iea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Uea, Vea
    _.Jea = _.haa()
    _.Jd = _.iaa()
    _.Kd = _.oa('Edge')
    _.Ld = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.Md = _.caa('WebKit') && !_.oa('Edge')
    _.Kea = _.Md && _.oa('Mobile')
    _.Nd = _.ta()
    _.Pd = _.raa()
    _.Lea = _.qaa() || _.saa()
    _.Mea = _.oaa()
    _.Nea = _.paa()
    _.Oea = _.oa('iPad')
    _.Pea = _.oa('iPod')
    _.Qea = _.sa()
    _.caa('KaiOS')
    var Rea = function () {
        const a = _.ha.document
        return a ? a.documentMode : void 0
      },
      Sea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.Ld) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.Kd) return /Edge\/([\d\.]+)/.exec(c)
        if (_.Jd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.Md) return /WebKit\/(\S+)/.exec(c)
        if (_.Jea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.Jd) {
        const c = Rea()
        if (c != null && c > parseFloat(a)) {
          Sea = String(c)
          break a
        }
      }
      Sea = a
    }
    _.Tea = Sea
    Uea = {}
    _.Qd = function (a) {
      return _.Iea(Uea, a, function () {
        return _.eaa(_.Tea, a) >= 0
      })
    }
    if (_.ha.document && _.Jd) {
      var Wea = Rea()
      Vea = Wea ? Wea : parseInt(_.Tea, 10) || void 0
    } else Vea = void 0
    _.Xea = Vea
    var Yea, Zea, $ea, afa, bfa, cfa
    _.Rd = {}
    Yea = _.kaa()
    Zea = yaa()
    $ea = _.oa('iPad')
    afa = _.maa()
    bfa = _.laa()
    cfa = zaa()
    _.Rd.ANDROID = afa
    _.Rd.rNd = !1
    _.Rd.sNd = !1
    _.Rd.tNd = !1
    _.Rd.uNd = !1
    _.Rd.vNd = !1
    _.Rd.wNd = !1
    _.Rd.CHROME = bfa
    _.Rd.Sia = _.Kd
    _.Rd.N1 = Yea
    _.Rd.YKb = _.Jd
    _.Rd.dab = $ea
    _.Rd.eab = Zea
    _.Rd.Kbb = _.Jea
    _.Rd.bL = cfa
    _.Rd.JZd = yaa
    _.Rd.OZd = zaa
    var Caa, Aaa, dfa
    Caa = /[-_.]/g
    Aaa = { '-': '+', _: '/', '.': '=' }
    _.Sd = {}
    dfa = typeof structuredClone != 'undefined'
    var efa
    _.Ud = function (a) {
      return a ? new _.tb(a, _.Sd) : _.Td()
    }
    _.Td = function () {
      return efa || (efa = new _.tb(null, _.Sd))
    }
    _.ub = function (a) {
      const b = a.ha
      if (b == null) a = ''
      else if (typeof b === 'string') a = b
      else {
        let c = '', d = 0
        const e = b.length - 10240
        for (; d < e;) {
          c += String.fromCharCode.apply(null, b.subarray(d, d += 10240))
        }
        c += String.fromCharCode.apply(null, d ? b.subarray(d) : b)
        a = a.ha = btoa(c)
      }
      return a
    }
    _.ffa = function (a) {
      if (_.Sd !== _.Sd) throw Error('y')
      var b = a.ha
      b == null || _.Eaa(b) ||
        (typeof b === 'string' ? b = _.Daa(b) : (_.Xaa(b), b = null))
      return b == null ? b : a.ha = b
    }
    _.tb = class {
      isEmpty() {
        return this.ha == null
      }
      constructor(a, b) {
        if (b !== _.Sd) throw Error('y')
        this.ha = a
        if (a != null && a.length === 0) throw Error('x')
      }
    }
    var mba, Aba, uba
    _.ob = La()
    _.gfa = La()
    _.hfa = La()
    _.rb = La()
    _.ifa = La()
    mba = La()
    _.jfa = La()
    Aba = La()
    _.Haa = La('m_m', !0)
    uba = La()
    _.kfa = La()
    var lfa
    _.Ma = La('jas', !0)
    lfa = []
    lfa[_.Ma] = 7
    _.Gb = Object.freeze(lfa)
    var mfa
    _.Iaa = {}
    _.Qa = {}
    mfa = class {
      constructor(a, b, c) {
        this.ha = a
        this.ka = b
        this.thisArg = c
      }
      next() {
        const a = this.ha.next()
        a.done || (a.value = this.ka.call(this.thisArg, a.value))
        return a
      }
      [Symbol.iterator]() {
        return this
      }
    }
    _.nfa = Object.freeze({})
    _.ofa = Object.freeze({})
    var vba = {}
    _.pfa = _.Ta((a) => a !== null && a !== void 0)
    _.Va = _.Ta((a) => typeof a === 'number')
    _.qfa = _.Ta((a) => Number.isFinite(a))
    _.Ua = _.Ta((a) => typeof a === 'string')
    _.Laa = _.Ta((a) => typeof a === 'boolean')
    _.rfa = _.Ta((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.sfa = _.Ta((a) => typeof a === 'function')
    _.tfa = _.Ta((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.ufa = _.Ta((a) => Array.isArray(a))
    _.Wa = typeof _.ha.BigInt === 'function' &&
      typeof _.ha.BigInt(0) === 'bigint'
    var xfa, vfa, yfa, wfa
    _.sba = _.Ta((a) =>
      _.Wa ? a >= vfa && a <= wfa : a[0] === '-' ? Maa(a, xfa) : Maa(a, yfa)
    )
    xfa = Number.MIN_SAFE_INTEGER.toString()
    vfa = _.Wa ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    yfa = Number.MAX_SAFE_INTEGER.toString()
    wfa = _.Wa ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.Za = 0
    _.$a = 0
    var Vaa = void 0
    var Zaa
    _.Vd = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.lb = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.kb = Number.isSafeInteger
    _.eb = Number.isFinite
    _.jb = Math.trunc
    Zaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var zfa, Afa
    zfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    Afa = function (a) {
      if (a.K2 & 2) throw Error('D')
    }
    _.wb = class extends zfa {
      constructor(a, b, c = iba, d = iba) {
        super()
        this.K2 = a[_.Ma] | 0
        this.J9 = b
        this.LFa = c
        this.dHb = this.J9 ? jba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let m = f[1]
          b
            ? m === void 0 && (m = null)
            : m = d(f[1], !1, !0, void 0, void 0, this.K2)
          super.set(g, m)
        }
      }
      v8a(a) {
        return _.Faa(Array.from(super.entries(), a))
      }
      clear() {
        Afa(this)
        super.clear()
      }
      delete(a) {
        Afa(this)
        return super.delete(this.LFa(a, !0, !1))
      }
      entries() {
        if (this.J9) {
          var a = super.keys()
          a = new mfa(a, kba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.J9) {
          var a = super.keys()
          a = new mfa(a, _.wb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.J9
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        Afa(this)
        a = this.LFa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.dHb(b, !0, !0, this.J9, !1, this.K2))
      }
      eAd(a) {
        const b = this.LFa(a[0], !1, !0)
        a = a[1]
        a = this.J9
          ? a === void 0 ? null : a
          : this.dHb(a, !1, !0, void 0, !1, this.K2)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.LFa(a, !1, !1))
      }
      get(a) {
        a = this.LFa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.J9
          return c
            ? (c = this.dHb(b, !1, !0, c, this.a3c, this.K2),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.wb.prototype.toJSON = void 0
    var oba
    _.Wd = dfa ? structuredClone : (a) => _.qba(a, 0, _.sb)
    _.Bfa = _.Ya(0)
    _.Xd = function (a, b, c, d, e) {
      b = _.Fb(a.uh, b, c, e)
      if (b !== null || d && a.k2a !== _.Qa) return b
    }
    _.Fb = function (a, b, c, d) {
      if (b === -1) return null
      const e = b + (c ? 0 : -1), f = a.length - 1
      let g, m
      if (!(f < 1 + (c ? 0 : -1))) {
        if (e >= f) {
          if (
            g = a[f],
              g != null && typeof g === 'object' && g.constructor === Object
          ) c = g[b], m = !0
          else if (e === f) c = g
          else return
        } else c = a[e]
        if (d && c != null) {
          d = d(c)
          if (d == null) return d
          if (!Object.is(d, c)) return m ? g[b] = d : a[e] = d, d
        }
        return c
      }
    }
    _.Ib = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Gaa(b))
    }
    _.k = class {
      constructor(a, b, c) {
        this.uh = _.zba(a, b, c, 2048)
      }
      toJSON() {
        return _.wba(this)
      }
      serialize(a) {
        return JSON.stringify(_.wba(this, a))
      }
      clone() {
        const a = this.uh, b = a[_.Ma] | 0
        return _.Fba(this, a, b)
          ? _.Eba(this, a, !0)
          : new this.constructor(_.yb(a, b, !1))
      }
      isImmutable() {
        return _.Sa(this)
      }
    }
    _.k.prototype.mea = _.aa(0)
    _.k.prototype[_.Haa] = _.Iaa
    _.k.prototype.toString = function () {
      return this.uh.toString()
    }
    _.Cfa = class extends _.ea {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.Dfa = []
    _.Efa = []
    _.Ffa = !1
    _.Gfa = function (a) {
      _.Dfa[_.Dfa.length] = a
      if (_.Ffa) {
        for (let b = 0; b < _.Efa.length; b++) {
          a((0, _.dc)(_.Efa[b].wrap, _.Efa[b]))
        }
      }
    }
    _.Mb.prototype.cT = !1
    _.Mb.prototype.isDisposed = function () {
      return this.cT
    }
    _.Mb.prototype.dispose = function () {
      this.cT || (this.cT = !0, this.Mb())
    }
    _.Mb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Mb.prototype.Qb = function (a) {
      this.addOnDisposeCallback(_.Ad(_.Kb, a))
    }
    _.Mb.prototype.addOnDisposeCallback = function (a, b) {
      this.cT
        ? b !== void 0 ? a.call(b) : a()
        : (this.pfa || (this.pfa = []), b && (a = a.bind(b)), this.pfa.push(a))
    }
    _.Mb.prototype.Mb = function () {
      if (this.pfa) { for (; this.pfa.length;) this.pfa.shift()() }
    }
    _.Nb = function (a, b) {
      this.type = 'function' == typeof _.Yd && a instanceof _.Yd ? String(a) : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Nb.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Nb.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var Ifa
    _.Hfa = !(!_.ha.navigator || !_.ha.navigator.maxTouchPoints)
    Ifa = function () {
      if (!_.ha.addEventListener || !Object.defineProperty) return !1
      var a = !1,
        b = Object.defineProperty({}, 'passive', {
          get: function () {
            a = !0
          },
        })
      try {
        const c = () => {}
        _.ha.addEventListener('test', c, b)
        _.ha.removeEventListener('test', c, b)
      } catch (c) {}
      return a
    }()
    _.Cd(_.Ob, _.Nb)
    _.Ob.prototype.init = function (a, b) {
      const c = this.type = a.type,
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
        : (this.offsetX = _.Md || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.Md || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.Nd ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.Mi = a
      a.defaultPrevented && _.Ob.oc.preventDefault.call(this)
    }
    _.Ob.prototype.stopPropagation = function () {
      _.Ob.oc.stopPropagation.call(this)
      this.Mi.stopPropagation
        ? this.Mi.stopPropagation()
        : this.Mi.cancelBubble = !0
    }
    _.Ob.prototype.preventDefault = function () {
      _.Ob.oc.preventDefault.call(this)
      const a = this.Mi
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.Ob.prototype.GCa = _.aa(1)
    _.Jfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.Zd = function (a) {
      return !(!a || !a[_.Jfa])
    }
    var Lba = 0
    var Kfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Pba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.Wb.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = Lfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.nla = !1))
        : (b = new _.Mba(b, this.src, f, !!d, e), b.nla = c, a.push(b))
      return b
    }
    _.Wb.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = Lfa(e, b, c, d)
      return b > -1
        ? (Kfa(e[b]),
          _.za(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Mfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Aa(a.listeners[c], b)
      d &&
        (Kfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.Wb.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Kfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.Wb.prototype.Rca = _.aa(3)
    _.Wb.prototype.Gna = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = Lfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.Wb.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Oba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Lfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var Nfa, Ofa, Pfa, Rfa, Sfa, Tfa, Ufa, Wfa
    Nfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Ofa = {}
    Pfa = 0
    _.ae = function (a, b, c, d, e) {
      if (d && d.once) return _.$d(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ae(a, b[f], c, d, e)
        return null
      }
      c = _.Qfa(c)
      return _.Zd(a)
        ? a.listen(b, c, _.xd(d) ? !!d.capture : !!d, e)
        : Rfa(a, b, c, !1, d, e)
    }
    Rfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      const g = _.xd(e) ? !!e.capture : !!e
      let m = _.be(a)
      m || (a[Nfa] = m = new _.Wb(a))
      c = m.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Sfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        Ifa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Tfa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      Pfa++
      return c
    }
    Sfa = function () {
      const a = Ufa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.$d = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.$d(a, b[f], c, d, e)
        return null
      }
      c = _.Qfa(c)
      return _.Zd(a)
        ? a.yf(b, c, _.xd(d) ? !!d.capture : !!d, e)
        : Rfa(a, b, c, !0, d, e)
    }
    _.ce = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ce(a, b[f], c, d, e)
      } else {d = _.xd(d) ? !!d.capture : !!d,
          c = _.Qfa(c),
          _.Zd(a)
            ? a.Og(b, c, d, e)
            : a && (a = _.be(a)) && (b = a.Gna(b, c, d, e)) && _.de(b)}
    }
    _.de = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.Zd(b)) return b.uW(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Tfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Pfa--
      ;(c = _.be(b))
        ? (Mfa(c, a), c.ha == 0 && (c.src = null, b[Nfa] = null))
        : Kfa(a)
      return !0
    }
    Tfa = function (a) {
      return a in Ofa ? Ofa[a] : Ofa[a] = 'on' + a
    }
    _.Vfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.nla && _.de(a)
      return c.call(d, b)
    }
    Ufa = function (a, b) {
      return a.removed ? !0 : _.Vfa(a, new _.Ob(b, this))
    }
    _.be = function (a) {
      a = a[Nfa]
      return a instanceof _.Wb ? a : null
    }
    Wfa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Qfa = function (a) {
      if (typeof a === 'function') return a
      a[Wfa] || (a[Wfa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Wfa]
    }
    _.Gfa(function (a) {
      Ufa = a(Ufa)
    })
    var Rba
    _.Xfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Sba((e) => {
            e.eya(a.ha, d)
          })
        })
      }
    }
    _.fe = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Xfa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Vba = Symbol('U')
    _.Cd(_.cc, _.Mb)
    _.cc.prototype[_.Jfa] = !0
    _.h = _.cc.prototype
    _.h.MT = function () {
      return this.iyb
    }
    _.h.bq = function (a) {
      this.iyb = a
    }
    _.h.addEventListener = function (a, b, c, d) {
      _.ae(this, a, b, c, d)
    }
    _.h.removeEventListener = function (a, b, c, d) {
      _.ce(this, a, b, c, d)
    }
    _.h.dispatchEvent = function (a) {
      var b, c = this.MT()
      if (c) { for (b = []; c; c = c.MT()) b.push(c) }
      c = this.i0c
      const d = a.type || a
      if (typeof a === 'string') a = new _.Nb(a, c)
      else if (a instanceof _.Nb) a.target = a.target || c
      else {
        var e = a
        a = new _.Nb(d, c)
        _.Vb(a, e)
      }
      e = !0
      let f, g
      if (b) {
        for (
          g = b.length - 1; !a.ka && g >= 0; g--
        ) f = a.currentTarget = b[g], e = f.fireListeners(d, !0, a) && e
      }
      a.ka ||
        (f = a.currentTarget = c,
          e = f.fireListeners(d, !0, a) && e,
          a.ka || (e = f.fireListeners(d, !1, a) && e))
      if (b) {
        for (g = 0; !a.ka && g < b.length; g++) {
          f = a.currentTarget = b[g], e = f.fireListeners(d, !1, a) && e
        }
      }
      return e
    }
    _.h.Mb = function () {
      _.cc.oc.Mb.call(this)
      this.removeAllListeners()
      this.iyb = null
    }
    _.h.listen = function (a, b, c, d) {
      return this.wT.add(String(a), b, !1, c, d)
    }
    _.h.yf = function (a, b, c, d) {
      return this.wT.add(String(a), b, !0, c, d)
    }
    _.h.Og = function (a, b, c, d) {
      return this.wT.remove(String(a), b, c, d)
    }
    _.h.uW = function (a) {
      return Mfa(this.wT, a)
    }
    _.h.removeAllListeners = function (a) {
      return this.wT ? this.wT.removeAll(a) : 0
    }
    _.h.fireListeners = function (a, b, c) {
      a = this.wT.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, m = f.handler || f.src
          f.nla && this.uW(f)
          d = g.call(m, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.h.Rca = _.aa(2)
    _.h.Gna = function (a, b, c, d) {
      return this.wT.Gna(String(a), b, c, d)
    }
    _.h.hasListener = function (a, b) {
      return this.wT.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.he =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Xba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Yfa = class {
        constructor(a, b) {
          this.ma = a
          this.na = b
          this.ka = 0
          this.ha = null
        }
        get() {
          let a
          this.ka > 0
            ? (this.ka--, a = this.ha, this.ha = a.next, a.next = null)
            : a = this.ma()
          return a
        }
      }
    _.ec.bwd = _.he
    _.ec.pWc = !1
    _.ec.zdd = function () {
      if (typeof MessageChannel !== 'undefined') {
        const a = new MessageChannel()
        let b = {}, c = b
        a.port1.onmessage = function () {
          if (b.next !== void 0) {
            b = b.next
            const d = b.cb
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
    _.ec.rxc = (a) => a
    _.Gfa(function (a) {
      _.ec.rxc = a
    })
    var Zfa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = Yba.get()
          c.set(a, b)
          this.ka ? this.ka.next = c : this.ha = c
          this.ka = c
        }
        remove() {
          let a = null
          this.ha &&
            (a = this.ha,
              this.ha = this.ha.next,
              this.ha || (this.ka = null),
              a.next = null)
          return a
        }
      },
      Yba = new Yfa(() => new $fa(), (a) => a.reset()),
      $fa = class {
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
    var aga, Zba, Wba, bga
    Zba = !1
    Wba = new Zfa()
    _.ie = (a, b) => {
      aga || bga()
      Zba || (aga(), Zba = !0)
      Wba.add(a, b)
    }
    bga = () => {
      const a = Promise.resolve(void 0)
      aga = () => {
        a.then($ba)
      }
    }
    _.je = function () {}
    var cga = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var dga, ega, nga, kga, gga, sga, qga, oga, pga, tga, rga, uga
    _.me = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.je) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.le(b, 2, c)
          }, function (c) {
            _.le(b, 3, c)
          })
        } catch (b) {
          _.le(this, 3, b)
        }
      }
    }
    dga = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    dga.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    ega = new Yfa(function () {
      return new dga()
    }, function (a) {
      a.reset()
    })
    _.fga = function (a, b, c) {
      const d = ega.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.hga = function (a, b, c) {
      gga(a, b, c, null) || _.ie(_.Ad(b, a))
    }
    _.iga = function (a) {
      return new _.me(function (b, c) {
        let d = a.length
        const e = []
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
            var m = a[t]
            _.hga(m, _.Ad(f, t), g)
          }
        } else b(e)
      })
    }
    _.ne = function () {
      let a, b
      const c = new _.me(function (d, e) {
        a = d
        b = e
      })
      return new jga(c, a, b)
    }
    _.me.prototype.then = function (a, b, c) {
      return kga(
        this,
        (0, _.he)(typeof a === 'function' ? a : null),
        (0, _.he)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.me.prototype.$goog_Thenable = !0
    var mga = function (a, b, c, d) {
      _.lga(a, _.fga(b || _.je, c || null, d))
    }
    _.me.prototype.finally = function (a) {
      a = (0, _.he)(a)
      return new _.me((b, c) => {
        mga(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.me.prototype.ha = function (a, b) {
      return kga(this, null, (0, _.he)(a), b)
    }
    _.me.prototype.catch = _.me.prototype.ha
    _.me.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.oe(a)
        _.ie(function () {
          nga(this, b)
        }, this)
      }
    }
    nga = function (a, b) {
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
              ? nga(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : oga(c),
                pga(c, e, 3, b)))
          }
          a.na = null
        } else _.le(a, 3, b)
      }
    }
    _.lga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || qga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    kga = function (a, b, c, d) {
      const e = _.fga(null, null, null)
      e.child = new _.me(function (f, g) {
        e.ka = b
          ? function (m) {
            try {
              const t = b.call(d, m)
              f(t)
            } catch (t) {
              g(t)
            }
          }
          : f
        e.ha = c
          ? function (m) {
            try {
              const t = c.call(d, m)
              t === void 0 && m instanceof _.oe ? g(m) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.lga(a, e)
      return e.child
    }
    _.me.prototype.Fa = function (a) {
      this.ka = 0
      _.le(this, 2, a)
    }
    _.me.prototype.Ea = function (a) {
      this.ka = 0
      _.le(this, 3, a)
    }
    _.le = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          gga(c, a.Fa, a.Ea, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            qga(a),
            b != 3 || c instanceof _.oe || rga(a, c)))
    }
    gga = function (a, b, c, d) {
      if (a instanceof _.me) return mga(a, b, c, d), !0
      if (cga(a)) return a.then(b, c, d), !0
      if (_.xd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return sga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    sga = function (a, b, c, d, e) {
      let f = !1
      const g = function (t) {
          f || (f = !0, c.call(e, t))
        },
        m = function (t) {
          f || (f = !0, d.call(e, t))
        }
      try {
        b.call(a, g, m)
      } catch (t) {
        m(t)
      }
    }
    qga = function (a) {
      a.Aa || (a.Aa = !0, _.ie(a.Da, a))
    }
    oga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.me.prototype.Da = function () {
      let a
      for (; a = oga(this);) pga(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    pga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, tga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : tga(b, c, d)
        } catch (e) {
          uga.call(null, e)
        }}
      Xba(ega, b)
    }
    tga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    rga = function (a, b) {
      a.qa = !0
      _.ie(function () {
        a.qa && uga.call(null, b)
      })
    }
    uga = _.ia
    _.oe = function (a) {
      _.ea.call(this, a)
      this.ka = !1
    }
    _.Cd(_.oe, _.ea)
    _.oe.prototype.name = 'cancel'
    var jga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var Bga, Aga, wga, xga
    _.hc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.hc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.lb ? this.lb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.pe(this))
      }
    }
    _.hc.prototype.Sa = function (a, b) {
      this.Ea = !1
      vga(this, a, b)
    }
    var vga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        wga(a)
      },
      yga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new xga(a)
          a.Oa = !1
        }
      }
    _.hc.prototype.callback = function (a) {
      yga(this)
      vga(this, !0, a)
    }
    _.hc.prototype.ha = function (a) {
      yga(this)
      vga(this, !1, a)
    }
    _.re = function (a, b, c) {
      return _.qe(a, b, null, c)
    }
    _.hc.prototype.finally = function (a) {
      return _.zga(
        new Promise((b, c) => {
          _.qe(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.qe = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.he)(b) : (b = (0, _.he)(b), c = (0, _.he)(c)))
      a.Ba.push([b, c, d])
      e && wga(a)
      return a
    }
    _.hc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.me(function (g, m) {
        e = g
        d = m
      })
      _.qe(this, e, function (g) {
        g instanceof _.pe ? f.cancel() : d(g)
        return Aga
      }, this)
      return f.then(a, b, c)
    }
    _.hc.prototype.$goog_Thenable = !0
    _.hc.prototype.ma = _.aa(4)
    _.hc.prototype.isError = function (a) {
      return a instanceof Error
    }
    Bga = function (a) {
      return _.Id(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    Aga = {}
    wga = function (a) {
      if (a.Da && a.ka && Bga(a)) {
        var b = a.Da, c = Cga[b]
        c && (_.ha.clearTimeout(c.ha), delete Cga[b])
        a.Da = 0
      }
      a.na && (a.na.Aa--, delete a.na)
      b = a.oa
      for (var d = c = !1; a.Ba.length && !a.Ea;) {
        var e = a.Ba.shift(), f = e[0]
        const m = e[1]
        e = e[2]
        if (f = a.qa ? m : f) {
          try {
            var g = f.call(e || a.Wa, b)
            g === Aga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              cga(b) ||
              typeof _.ha.Promise === 'function' && b instanceof _.ha.Promise
            ) d = !0, a.Ea = !0
          } catch (t) {
            b = t, a.qa = !0, Bga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.dc)(a.Sa, a, !0),
          d = (0, _.dc)(a.Sa, a, !1),
          b instanceof _.hc ? (_.qe(b, g, d), b.mb = !0) : b.then(g, d))
      c && (b = new Dga(b), Cga[b.ha] = b, a.Da = b.ha)
    }
    _.zga = function (a) {
      const b = new _.hc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    xga = function (a) {
      _.ea.call(this)
      this.yC = a
    }
    _.Cd(xga, _.ea)
    xga.prototype.message = 'Deferred has already fired'
    xga.prototype.name = 'AlreadyCalledError'
    _.pe = function (a) {
      _.ea.call(this)
      this.yC = a
    }
    _.Cd(_.pe, _.ea)
    _.pe.prototype.message = 'Deferred was canceled'
    _.pe.prototype.name = 'CanceledError'
    var Dga = function (a) {
      this.ha = _.ha.setTimeout((0, _.dc)(this.throwError, this), 0)
      this.uT = a
    }
    Dga.prototype.throwError = function () {
      delete Cga[this.ha]
      throw this.uT
    }
    var Cga = {}
    var Gga, Hga, Iga
    _.Ega = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Ya
      }
      return !1
    }
    _.se = function (a) {
      for (; a.Ya;) a = a.Ya
      return a
    }
    Gga = function (a) {
      var b = _.Fga
      const c = []
      a = _.se(a)
      let d
      a.BB[b] && (d = a.BB[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].BB[b] && (d = a[e].BB[b][0]), d && !_.xa(c, d) && c.push(d)
      }
      return c
    }
    _.ue = function (a, b) {
      for (var c = a; c; c = c.Ya) {
        if (c.isDisposed()) throw new _.Cfa([b])
        if (c.BB[b]) return c.BB[b][0]
        if (c.Gc[b]) break
      }
      if (c = a.Cb[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.te(a, b, c)
        return c
      }
      return null
    }
    _.te = function (a, b, c) {
      if (a.isDisposed()) _.Kb(c)
      else {
        a.BB[b] = [c, !0]
        var d = Hga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Uc[b]
        b instanceof _.fe && _.bc(b, c.constructor)
      }
    }
    Hga = function (a, b, c) {
      const d = [], e = a.Oa[c]
      e && (_.vaa(e, function (f) {
        _.Ega(f.appContext, b) && (d.push(f.d), _.Aa(e, f))
      }),
        e.length == 0 && delete a.Oa[c])
      return d
    }
    Iga = function (a, b) {
      a.Oa && _.Pb(a.Oa, function (c, d, e) {
        _.vaa(c, function (f) {
          f.appContext == b && _.Aa(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.ve = class extends _.Mb {
      constructor() {
        super()
        this.BB = {}
        this.Uc = {}
        this.Cb = {}
        this.Oa = {}
        this.Wa = {}
        this.Gc = {}
        this.Kb = new _.cc()
        this.Ce = !0
        this.Ya = null
        const a = _.se(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.ue(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Mb() {
        if (_.se(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.se(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.BB) {
          a = this.BB[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.BB = null
        this.Ce && this.Kb.dispose()
        Iga(this, this)
        this.Oa = null
        _.Kb(this.Be)
        this.Gc = this.Be = null
        super.Mb()
      }
      Ks() {
        return this.Kb
      }
    }
    _.ve.prototype.Sb = _.aa(7)
    _.ve.prototype.mb = _.aa(6)
    _.ve.prototype.yb = _.aa(5)
    _.Fga = new _.fe('n73qwf', 'n73qwf')
    _.jc.prototype.clone = function () {
      return new _.jc(this.x, this.y)
    }
    _.jc.prototype.equals = function (a) {
      return a instanceof _.jc && _.we(this, a)
    }
    _.we = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.h = _.jc.prototype
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
      a instanceof _.jc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.h.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.xe = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.h = _.mc.prototype
    _.h.clone = function () {
      return new _.mc(this.width, this.height)
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
    _.oc = {}
    var Jga = globalThis.trustedTypes, aca = Jga, cca
    _.nc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    fca((a) => a``) || fca((a) => a`\0`) || fca((a) => a`\n`) ||
      fca((a) => a`\u0000`)
    _.gca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Kga = _.rc('about:blank')
    _.jca = _.rc('about:invalid#zClosurez')
    var vc, hca, kca, Lga, mca
    vc = class {
      constructor(a) {
        this.Nj = a
      }
    }
    _.ye = {
      XTd: wc('tel'),
      LNd: new vc((a) => /^callto:\+?\d*$/i.test(a)),
      ATd: new vc((a) => a.indexOf('ssh://') === 0),
      YSd: wc('rtsp'),
      QCc: wc('data'),
      EHc: wc('http'),
      FHc: wc('https'),
      EXTENSION: new vc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      pGc: wc('ftp'),
      jQc: new vc((a) => /^[^:]*([/?#]|$)/.test(a)),
      AKc: wc('mailto'),
      iRd: wc('intent'),
      ARd: wc('market'),
      lRd: wc('itms'),
      mRd: wc('itms-appss'),
      nRd: wc('itms-services'),
      bPd: wc('fb-messenger'),
      VUd: wc('whatsapp'),
      sTd: new vc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      wTd: wc('sms'),
      MUd: wc('vnd.youtube'),
      IQd: wc('googlehome'),
      JQd: wc('googlehomesdk'),
      LINE: wc('line'),
    }
    hca = [_.ye.QCc, _.ye.EHc, _.ye.FHc, _.ye.AKc, _.ye.pGc, _.ye.jQc]
    kca = typeof URL === 'function'
    Lga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    mca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.ica = () => {}
    _.Cc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.ze = new _.Cc(_.oc, Jga ? Jga.emptyHTML : '')
    _.Mga = {
      sQd: 0,
      LOd: 1,
      MOd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Gc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Mga[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.tca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Nga = new _.tca(_.oc, Jga ? Jga.emptyScript : '')
    _.xca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var Bca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.jd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.lda = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Oga = Math.random() * 2147483648 | 0
    _.Pga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Mca = /^[a-z][a-z\d-]*$/i,
      Nca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Qca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Rca = ['action', 'formaction', 'href']
    _.Qga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Rga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Tga
    _.Sga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Tga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Xv: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Xv: 1 }
        : { Xv: 0 }
    }
    _.Ae = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Uga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Vga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Wga = [
        ['A', new Map([['href', { Xv: 7 }]])],
        ['AREA', new Map([['href', { Xv: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Xv: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Xv: 5 }], ['srcset', { Xv: 6 }]])],
        ['IMG', new Map([['src', { Xv: 5 }], ['srcset', { Xv: 6 }]])],
        ['VIDEO', new Map([['src', { Xv: 5 }]])],
        ['AUDIO', new Map([['src', { Xv: 5 }]])],
      ],
      Xga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Yga = [
        ['dir', {
          Xv: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Xv: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Xv: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Xv: 5 }],
        ['target', {
          Xv: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Zga = new _.Ae(new Set(Vga), new Map(Wga), new Set(Xga), new Map(Yga)),
      $ga = new _.Ae(
        new Set(Vga.concat(['BUTTON', 'INPUT'])),
        new Map(Wga),
        new Set(Xga.concat(['class', 'id', 'name'])),
        new Map(Yga.concat([['style', { Xv: 1 }]])),
      ),
      aha = new _.Ae(
        new Set(
          Vga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Wga),
        new Set(
          Xga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Yga.concat([['style', { Xv: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var bha
    _.cha = function (a, b, c) {
      b = Tca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Vca(g)
          ? (g = Uca(g), g = g === null ? 2 : _.Sga(a.oa, g) ? 1 : 2)
          : g = 2
        return g
      })
      var d = b.nextNode()
      const e = c.createDocumentFragment()
      let f = e
      for (; d !== null;) {
        let g
        if (d.nodeType === 3) {
          a.ma && f.nodeName === 'STYLE'
            ? (d = a.ma(d.data), g = a.createTextNode(d))
            : g = a.createTextNode(d.data)
        } else if (Vca(d)) g = bha(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    bha = function (a, b, c) {
      const d = Uca(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: m, value: t } of b) {
        var e = Tga(a.oa, m, d), f
        a: {
          if (f = e.conditions) {
            for (const [v, z] of f) {
              f = z
              let C
              var g = (C = b.getNamedItem(v)) == null ? void 0 : C.value
              if (g && !f.has(g)) {
                f = !1
                break a
              }
            }
          }
          f = !0
        }
        if (f) {
          switch (e.Xv) {
            case 1:
              Wc(c, m, t)
              break
            case 2:
              throw Error()
            case 3:
              Wc(c, m, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), Wc(c, m, e)) : Wc(c, m, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: m, h2b: d },
                  f = _.Sca(t),
                  (e = a.ha(f, e)) && Wc(c, m, e.toString()))
                : Wc(c, m, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: m, h2b: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, C] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, AUa: C })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Sca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), AUa: v.AUa })
                }
                Wc(c, m, Wca(f))
              } else Wc(c, m, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: m, h2b: d }
                f = _.Sca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.lca(e)
              e = f !== void 0 && Lga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              Wc(c, m, e)
          }
        }
      }
      return c
    }
    _.dha = class {
      constructor(a, b, c, d, e, f) {
        this.oa = a
        this.ma = b
        this.ka = c
        this.ha = d
        this.na = e
        this.qa = f
        this.changes = []
      }
      sanitize(a) {
        const b = document.implementation.createHTMLDocument('')
        return _.Lca(_.cha(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Xca = new _.dha(Zga)
    _.eha = new _.dha($ga)
    _.fha = new _.dha(aha)
    _.gha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { Xv: 4 })
      a.ha = new _.Ae(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.Be = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.Ae(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.hha = class {
      constructor() {
        this.na = !1
        this.ha = Zga
      }
    }
    _.Ce = class extends _.hha {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.dha(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var iha, kha, wha, xha, yha
    _.$c = function (a) {
      return a ? new _.De(_.Ee(a)) : jea || (jea = new _.De())
    }
    _.Fe = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.He = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.Ie = function (a, b) {
      _.Pb(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : iha.hasOwnProperty(d)
          ? a.setAttribute(iha[d], c)
          : _.ja(d, 'aria-') || _.ja(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    iha = {
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
    _.Je = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.mc(a.clientWidth, a.clientHeight)
    }
    _.Ke = function (a) {
      return a ? a.defaultView : window
    }
    _.lha = function (a, b) {
      const c = b[1], d = _.jha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.Ie(d, c))
      b.length > 2 && kha(a, d, b, 2)
      return d
    }
    kha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Ca(f) || _.xd(f) && f.nodeType > 0
          ? e(f)
          : _.Ed(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ba(f)
              : f,
            e,
          )
      }
    }
    _.Le = function (a) {
      return _.jha(document, a)
    }
    _.jha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.mha = function (a, b) {
      kha(_.Ee(a), a, arguments, 1)
    }
    _.Me = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.nha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.oha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.pha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.Oe = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.qha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.rha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.tha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.sha(a.firstChild, !0)
    }
    _.uha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.sha(a.nextSibling, !0)
    }
    _.vha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.sha(a.previousSibling, !1)
    }
    _.sha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.Re = function (a) {
      return _.xd(a) && a.nodeType == 1
    }
    _.Te = function (a) {
      return a.parentElement || null
    }
    _.Ue = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.Ee = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.Ve = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.Me(a), a.appendChild(_.Ee(a).createTextNode(String(b)))
    }
    wha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    xha = { IMG: ' ', BR: '\n' }
    _.zha = function (a) {
      return a.hasAttribute('tabindex') && yha(a)
    }
    _.We = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.Aha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || yha(a))
        : _.zha(a)
    }
    yha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.Xe = function (a) {
      const b = []
      _.Bha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.Bha = function (a, b, c) {
      if (!(a.nodeName in wha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in xha) b.push(xha[a.nodeName])
        else for (a = a.firstChild; a;) _.Bha(a, b, c), a = a.nextSibling
      }
    }
    _.De = function (a) {
      this.dm = a || _.ha.document || document
    }
    _.h = _.De.prototype
    _.h.kb = _.$c
    _.h.ag = function () {
      return this.dm
    }
    _.h.Xa = function (a) {
      return _.Fe(this.dm, a)
    }
    _.h.$ = _.De.prototype.Xa
    _.h.getElementsByTagName = function (a, b) {
      return (b || this.dm).getElementsByTagName(String(a))
    }
    _.h.SG = _.aa(9)
    _.h.Xb = _.aa(11)
    _.h.Ec = _.aa(13)
    _.h.setProperties = _.Ie
    _.h.ek = function (a) {
      return _.Je(a || this.getWindow())
    }
    _.h.Ob = function (a, b, c) {
      return _.lha(this.dm, arguments)
    }
    _.h.createElement = function (a) {
      return _.jha(this.dm, a)
    }
    _.h.createTextNode = function (a) {
      return this.dm.createTextNode(String(a))
    }
    _.h.getWindow = function () {
      return this.dm.defaultView
    }
    _.h.Pp = _.aa(14)
    _.h.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.h.append = _.mha
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
    _.h.Yk = _.Me
    _.h.L9b = _.nha
    _.h.vEa = _.oha
    _.h.uEa = _.pha
    _.h.removeNode = _.Oe
    _.h.Wzb = _.qha
    _.h.getChildren = _.rha
    _.h.OCa = _.tha
    _.h.Snb = _.uha
    _.h.A6b = _.vha
    _.h.isElement = _.Re
    _.h.isWindow = function (a) {
      return _.xd(a) && a.window == a
    }
    _.h.Ina = _.Te
    _.h.contains = _.Ue
    _.h.v6b = _.Ee
    _.h.Sl = _.Ve
    _.h.Ky = _.We
    _.h.Tp = _.Aha
    _.h.OT = _.Xe
    wd = wd || {}
    var Cha = function () {
      _.Mb.call(this)
    }
    _.Cd(Cha, _.Mb)
    Cha.prototype.initialize = function () {}
    eda.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    eda.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.Gfa(function (a) {
      eda.prototype.execute = a(eda.prototype.execute)
    })
    wd.Dbb = eda
    _.Cd(ad, _.Mb)
    ad.prototype.ma = null
    ad.prototype.Ba = Cha
    ad.prototype.ka = null
    ad.prototype.getId = function () {
      return this.Aa
    }
    var Dha = function (a, b, c) {
        a.qa.push(new wd.Dbb(b, c))
      },
      Eha = function (a, b) {
        a.na.push(new wd.Dbb(b, void 0))
      }
    ad.prototype.isLoaded = function () {
      return !!this.ka
    }
    ad.prototype.onLoad = function (a) {
      var b = new this.Ba()
      b.initialize(a())
      this.ka = b
      b = (b = Fha(this.oa, a())) || Fha(this.qa, a())
      b || (this.na.length = 0)
      return b
    }
    ad.prototype.onError = function (a) {
      ;(a = Fha(this.na, a)) && _.ia(Error('ga`' + a))
      this.oa.length = 0
      this.qa.length = 0
    }
    var Fha = function (a, b) {
      const c = []
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
    ad.prototype.Mb = function () {
      ad.oc.Mb.call(this)
      _.Kb(this.ka)
      this.ma = null
    }
    wd.Cbb = ad
    var Gha = {
      ERROR: 'error',
      IDLE: 'idle',
      vva: 'active',
      mWc: 'userIdle',
      lWc: 'userActive',
    }
    _.h = fda.prototype
    _.h.Lmc = function () {}
    _.h.G5a = function () {}
    _.h.FJa = function () {}
    _.h.eya = function () {
      throw Error('ha')
    }
    _.h.CIa = function () {
      throw Error('ia')
    }
    _.h.q6b = function () {
      return this.oa
    }
    _.h.LJa = function (a) {
      this.oa = a
    }
    _.h.isActive = function () {
      return !1
    }
    _.h.jcc = function () {
      return !1
    }
    var Hha, Iha
    Hha = function (a, b) {
      const c = b.styleSheets.length, d = dda(a, new _.De(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.va(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Iha = function (a) {
      return _.Hd(Gga(a), (b) => b.v6b())
    }
    _.Jha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.iea('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.oa
            if (b) {
              if (b = Iha(b), b.length == 0) Hha(a, document)
              else for (let c of b) Hha(a, c)
            } else Hha(a, document)
          }
        })
      }
    }
    var Kha, Lha, Nha
    Kha = function (a) {
      throw Error('ja`' + a.ka)
    }
    Lha = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.Ze = function (a) {
      const b = _.Ye(a)
      b === null && Kha(a)
      return b
    }
    _.af = function (a, b) {
      let c
      return (c = _.Ye(a)) != null ? c : b
    }
    _.Ye = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Lha(a, 'string')
    }
    _.Mha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Lha(a, 'boolean')
    }
    _.bf = function (a, b) {
      let c
      return (c = _.Mha(a)) != null ? c : b
    }
    _.cf = function (a, b) {
      let c
      return (c = Nha(a)) != null ? c : b
    }
    Nha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Lha(a, 'number')
    }
    _.Pha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Oha(a, b)
    }
    _.Oha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.bd(c + e + ']', d))
    }
    _.bd = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.Ze(this) : _.af(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Nha(this)
          b === null && Kha(this)
        } else b = _.cf(this, a)
        return b
      }
      toString() {
        return _.Ze(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.cf(this, b) : _.af(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Pha(this)
          b === null && Kha(this)
          return b
        }
        b = _.Pha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Kha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.bd(c + d, b[d])
          return a
        }
        throw Lha(this, 'object')
      }
    }
    var jda
    jda = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Uha = /#|$/
    var hia,
      sda,
      ef,
      kia,
      nia,
      lia,
      mia,
      oia,
      pia,
      qia,
      ria,
      Ada,
      sia,
      iia,
      jia,
      tia,
      uia
    _.Bda = function (a, b = !0) {
      const c = hia(a), d = new iia(), e = _.dd(c)[5]
      _.Pb(jia, function (g) {
        const m = e.match('/' + g + '=([^/]+)')
        m && ef(d, g, m[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      kia(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.hd(6, c)) && _.mda(a, (g, m) => {
        d.ma[g] = m
      })
      return d
    }
    hia = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    sda = function (a) {
      a = hia(a)
      a = _.ed(_.hd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    ef = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    kia = function (a, b) {
      a.ka = b
    }
    nia = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      lia(a)
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
          'd' in a.ha || ef(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.ff(a, 'br') != '1' && _.ff(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.ff(a, 'rb') == '1' && c('rb'),
          _.ff(a, 'zs') !== '0' && c('zs'),
          mia(a) !== '' && c('wt'),
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
    _.ff = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    lia = function (a) {
      a = _.ff(a, 'md')
      return !!a && a !== '0'
    }
    mia = function (a) {
      switch (_.ff(a, 'wt')) {
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
    oia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), ef(a, 'exm', b.join(',')))
        : ef(a, 'exm', null)
    }
    pia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), ef(a, 'excm', b.join(',')))
        : ef(a, 'excm', null)
    }
    qia = function (a) {
      return (a = _.ff(a, 'm')) ? a.split(',') : []
    }
    ria = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      ef(a, 'ee', c.join(';'))
    }
    Ada = function (a) {
      var b = _.ff(a, 'ee')
      if (!b) return {}
      a = {}
      b = b.split(';')
      for (const c of b) {
        const [d, e] = c.split(':')
        a[d] = {}
        for (const f of e.split(',')) a[d][f] = !0
      }
      return a
    }
    sia = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    iia = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + nia(this)
        const b = _.pda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new iia()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    jia = {
      XSd: 'k',
      qOd: 'ck',
      KRd: 'm',
      VOd: 'exm',
      TOd: 'excm',
      iNd: 'am',
      oNd: 'amc',
      BRd: 'mm',
      USd: 'rt',
      aRd: 'd',
      UOd: 'ed',
      zTd: 'sv',
      uOd: 'deob',
      JNd: 'cb',
      SNd: 'ccb',
      KNd: 'cbi',
      qTd: 'rs',
      eTd: 'sdch',
      hRd: 'im',
      vOd: 'dg',
      POd: 'br',
      OOd: 'br-d',
      QOd: 'rb',
      fVd: 'zs',
      XUd: 'wt',
      aPd: 'ee',
      yTd: 'sm',
      METADATA: 'md',
      KQd: 'gssmodulesetproto',
      JUd: 'ujg',
      IUd: 'sp',
      oTd: 'slk',
      zOd: 'dti',
      kRd: 'ic',
    }
    tia = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    uia = RegExp('^[a-zA-Z0-9-_*]+$')
    var wda = null, vda = new Map()
    var yda = !1, zda = !1
    var via = (a) => {
        a = a.clone()
        sia(a)
        ef(a, 'dg', null)
        ef(a, 'd', '0')
        oia(a, null)
        pia(a, null)
        return a
      },
      wia = !0,
      xia = (a, b, { cssRowKey: c, Yaa: d, C4: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!uia.test(g)) throw Error('la`' + g) }
        ef(a, 'm', b.join(','))
        e && ria(a, e)
        c && (ef(a, 'ck', c), d ? ef(a, 'rs', d) : wia && (wia = !1))
        if (f) {
          if (f != null && !tia.test(f)) throw Error('ma`' + f)
          ef(a, 'cb', f)
        }
        a = a.toString()
        _.ja(a, '/') && (a = _.id(document.location.href) + a)
        return _.pc(a)
      },
      yia = (
        a,
        b,
        { Zzb: c = [], cssRowKey: d, Yaa: e, C4: f, callback: g } = {},
      ) => {
        a = via(a)
        pia(a, c)
        return xia(a, b, { cssRowKey: d, Yaa: e, C4: f, callback: g })
      },
      zia = (
        a,
        b,
        { aAb: c = [], Zzb: d = [], cssRowKey: e, Yaa: f, C4: g, callback: m } =
          {},
      ) => {
        a = via(a)
        ef(a, 'd', '1')
        oia(a, c)
        pia(a, d)
        return xia(a, b, { cssRowKey: e, Yaa: f, C4: g, callback: m })
      }
    _.Aia = function (a) {
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
    _.Cia = function () {}
    _.Cd(_.Cia, _.Dda)
    _.Cia.prototype.jY = function () {
      return new XMLHttpRequest()
    }
    _.Bia = new _.Cia()
    var Eia = function (a) {
        return Dia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      Dia = function (a) {
        const b = {}, c = b.BW ? b.BW.jY() : _.Bia.jY()
        return (new _.me(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new gf('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.ha.clearTimeout(f)
              var g
              !(g = _.Aia(c.status)) && (g = c.status === 0) &&
                (g = _.kda(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new Fia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new gf('Network error', a, c))
          }
          if (b.headers) {
            for (let g in b.headers) {
              const m = b.headers[g]
              m != null && c.setRequestHeader(g, m)
            }
          }
          b.withCredentials && (c.withCredentials = b.withCredentials)
          b.responseType && (c.responseType = b.responseType)
          b.mimeType && c.overrideMimeType(b.mimeType)
          b.Ty > 0 && (f = _.ha.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new Gia(a, c))
          }, b.Ty))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.ha.clearTimeout(f),
              e(new gf('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.oe &&
            c.abort()
          throw d
        })
      },
      gf = function (a, b, c) {
        _.ea.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Cd(gf, _.ea)
    gf.prototype.name = 'XhrError'
    var Fia = function (a, b, c) {
      gf.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Cd(Fia, gf)
    Fia.prototype.name = 'XhrHttpError'
    var Gia = function (a, b) {
      gf.call(this, 'Request timed out', a, b)
    }
    _.Cd(Gia, gf)
    Gia.prototype.name = 'XhrTimeoutError'
    var Jia, Lia, Mia, Nia, Kia, Sia, Tia, Pia, Oia, Qia, Ria
    _.Hia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          m = () => {}
        },
        m = () => {
          g()
          const v = e.filter((z) => !_.Yb().Mv(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && m()
        }
      b.forEach((v) => {
        v = _.Yb().Mv(v)
        v.isLoaded() ? t() : (v.oa.push(new wd.Dbb(t, void 0)), Eha(v, t))
      })
      a.onload = () => m()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.Iia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.na[f] || (a.na[f] = !0, a.Fa.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    Jia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            sda(b) && !_.Bda(b).ka.endsWith('_/js/')
        ) {
          b = qia(_.Bda(b))
          for (const c of b) a.Qa.includes(c) || a.Qa.push(c)
        }
      }
    }
    Lia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      Kia(a, b, (g, m, t = m) => {
        a.Za && f ? a.ab(g, m, d, e, t) : a.load(g, m, d, e, t, c)
      }, c) || d(-1)
    }
    Mia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    Nia = function (a, b, c, { C4: d, onError: e, dra: f, Ecd: g } = {}) {
      a.Da = c
      if (!b) throw Error('qa')
      if (a.tb) {
        for (const m of document.getElementsByTagName('style')) Jia(a, m)
        for (const m of document.getElementsByTagName('link')) Jia(a, m)
      }
      Lia(a, Mia(a, b), d, e, f, g)
    }
    Kia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          Kia(a, b, c, d)
        }),
          !0
      }
      if (!a.qa) {
        const f = []
        var e = Object.assign({}, a.na)
        Oia(
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
          m = Pia(a, g, d),
          t = _.qc(m).toString()
        for (; t.length > a.NMa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.NMa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              m = Pia(a, g, d),
              t = _.qc(m).toString()
          } else {return a.qa
              ? (a.qa = !1,
                a.ma = Qia(a).then((v) => {
                  Ria(a, v, d)
                }),
                Kia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.qa ? c(m, g) : c(m, g, e === b.length ? b : [])
      }
      return !0
    }
    Sia = function (a) {
      a.Sa || (a.Sa = !0, a.Fa.sort())
      return a.Fa
    }
    Tia = function (a) {
      a = a.Qa
      a.sort()
      return a
    }
    Pia = function (a, b, c) {
      return a.qa
        ? zia(a.oa, b, {
          cssRowKey: a.Ya,
          Yaa: a.Wa,
          C4: c,
          aAb: Sia(a),
          Zzb: Tia(a),
        })
        : yia(a.oa, b, { cssRowKey: a.Ya, Yaa: a.Wa, aAb: Sia(a), Zzb: Tia(a) })
    }
    _.hf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.na[e] && (delete a.na[e], _.Aa(a.Fa, e), c.push(e))
      }
    }
    _.Uia = function (a, b, c, d, e, f, g = d) {
      a.Ba = c
      a.Ea.insertBefore(c, a.Ea.firstChild)
      _.Hia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        f()
      }, (m) => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        _.hf(a, m)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    Oia = function (a, b, c, d, e, f = {}) {
      const g = _.Yb()
      for (let m of b) {
        b = g.Mv(m)
        if (f[m] || e && !e(b)) continue
        f[m] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[m] && (v = Object.keys(d[m]))
          t = t.concat(v)
        }
        Oia(a, t, c, d, e, f)
        c(b)
      }
    }
    Qia = function (a) {
      a = a.oa.clone()
      sia(a)
      ef(a, 'dg', null)
      ef(a, 'md', '1')
      return Eia(a.toString())
    }
    Ria = function (a, b, c) {
      _.Yb().FJa((b || {}).moduleGraph)
      Oia(a, Sia(a), (d) => {
        _.Iia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.Hda = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.lb = a
        this.oa = _.Bda(_.qc(a).toString(), !0)
        this.Ya = b
        this.Wa = c
        this.qa = d
        this.na = {}
        this.Da = {}
        this.Fa = []
        this.Sa = !0
        this.Qa = (a = _.ff(this.oa, 'excm')) ? a.split(',') : []
        this.tb = e
        this.OMa = !1
        this.eAa = 'anonymous'
        this.NMa = 4043
        this.Ea = document.head || document.documentElement
        this.ma = this.Ba = null
        this.mb = !0
        _.Cda()
        this.logger = null
        _.Iia(this, qia(this.oa))
        this.fetchPriority = void 0
        this.Za = !1
        this.Oa()
      }
      ab() {
        _.od(function* () {
          throw Error('ra')
        })
      }
      Oa() {}
      load(a, b, c, d, e = b) {
        _.qc(a)
        var f = this.OMa, g = this.eAa, m = this.fetchPriority
        const t = _.Le('SCRIPT')
        _.Mc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        m && t.setAttribute('fetchpriority', m)
        _.Iia(this, b)
        _.Uia(this, a, t, b, c, d, e)
      }
    }
    var Eda = new Uint8Array(123)
    var Via = []
    var Xia = function (a) {
        switch (a.type) {
          case Wia.Type.NQb:
            return 'Unauthorized'
          case Wia.Type.i$a:
            return 'Consecutive load failures'
          case Wia.Type.TIMEOUT:
            return 'Timed out'
          case Wia.Type.zOb:
            return 'Out of date module id'
          case Wia.Type.bab:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Wia = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.aAb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Xia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    wd.YB = Wia
    wd.YB.Type = { NQb: 0, i$a: 1, TIMEOUT: 2, zOb: 3, bab: 4 }
    var kf = function () {
      fda.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Fa = []
      this.ma = {}
      this.ab = {}
      this.Aa = this.Wa = new wd.Cbb([], '')
      this.tb = null
      this.Qa = new _.hc()
      this.rk = null
      this.yb =
        this.Kb =
        this.Cb =
        this.mb =
        this.lb =
          !1
    }
    _.Cd(kf, fda)
    var Yia = function (a, b) {
      _.ea.call(this, `Error loading ${a}: ${b}`)
    }
    _.Cd(Yia, _.ea)
    kf.prototype.Lmc = function (a) {
      this.lb = a
    }
    kf.prototype.G5a = function (a) {
      this.mb = a
    }
    kf.prototype.FJa = function (a, b) {
      if (!(this instanceof kf)) this.FJa(a, b)
      else if (typeof a === 'string') {
        if (a.startsWith('d$')) {
          a = a.substring(2)
          for (var c = [], d = 0, e = a.indexOf('/'), f = 0, g = !1, m = 0;;) {
            var t = g ? a.substring(f) : a.substring(f, e)
            if (t.length === 0) d++, f = 'sy' + d.toString(36), t = []
            else {
              var v = t.indexOf(':')
              if (v < 0) f = t, t = []
              else if (v === t.length - 1) {
                f = t.substring(0, v), t = Array(c[m - 1])
              } else {
                f = t.substring(0, v)
                t = t.substring(v + 1).split(',')
                v = m
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
            Zia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            m++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) $ia(this, a)
        else {
          a = a.split('/')
          c = []
          for (d = 0; d < a.length; d++) {
            m = a[d].split(':')
            e = m[0]
            g = []
            if (m[1]) {
              for (g = m[1].split(','), m = 0; m < g.length; m++) {
                g[m] = c[parseInt(g[m], 36)]
              }
            }
            c.push(e)
            Zia(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Da(this.na, b), this.tb = _.uaa(b))
          : this.Qa.ka || this.Qa.callback()
        Object.freeze(this.Ya)
        aja(this)
      }
    }
    var $ia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        Eda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      Gda(b)
      const d = Gda(b)
      var e = Gda(b) + 1
      const f = Array(d), g = Array(d), m = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, C = b.buf.indexOf('|', b.pos)
      b.pos = C + 1
      for (C = 0; C < d; C++) {
        var I = Gda(b), M = I & 2, S = I & 1
        I >>>= 2
        S
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (S = z, z += I, I = c.substring(S, z))
        f[C] = I
        M && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        z = Fda(b), m[t] = z & 7, m[t + 1] = z >>> 3 & 7
      }
      c && (c = Fda(b), m[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) m[v] === 7 && (m[v] = Gda(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = m[c]
        z = t === 0 ? Via : Array(t)
        g[c] = z
        C = v
        for (M = 0; M < t; M++) C -= Gda(b), z[M] = e[C]
        e[v] === f[c] && v++
      }
      const { ids: ba, dependencies: fa } = { ids: f, dependencies: g }
      for (b = 0; b < ba.length; b++) Zia(a, ba[b], fa[b])
      a.Ya = ba
    }
    _.h = kf.prototype
    _.h.Mv = function (a) {
      return this.ka[a]
    }
    _.h.eya = function (a, b) {
      const c = this.Mv(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.h.CIa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.h.LJa = function (a) {
      kf.oc.LJa.call(this, a)
      aja(this)
    }
    _.h.isActive = function () {
      return this.na.length > 0
    }
    _.h.jcc = function () {
      return this.Fa.length > 0
    }
    var lf = function (a) {
        var b = a.Cb
        const c = a.isActive()
        c != b && (bja(a, c ? Gha.vva : Gha.IDLE), a.Cb = c)
        b = a.jcc()
        b != a.Kb && (bja(a, b ? Gha.lWc : Gha.mWc), a.Kb = b)
      },
      Zia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new wd.Cbb(c, b)
      },
      dja = function (a, b, c) {
        const d = []
        _.Ea(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], m = a.Mv(g)
          if (!m) throw Error('sa`' + g)
          const t = new _.hc()
          e[g] = t
          m.isLoaded()
            ? t.callback(a.oa)
            : (cja(a, g, m, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.mb
            ? _.re(a.Qa, (0, _.dc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), lf(a)))
        return e
      },
      cja = function (a, b, c, d, e) {
        Dha(c, e.callback, e)
        Eha(c, function (f) {
          e.ha(new Yia(b, f))
        })
        a.Oa(b) ? d && (eja(a, b), lf(a)) : d && eja(a, b)
      }
    kf.prototype.Sa = function (a, b = 0, c) {
      const d = fja(this, a)
      this.mb ? _.Da(this.na, d) : this.na = d
      this.Ba = this.lb ? a : _.Ba(d)
      lf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.qa
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.mb) throw Error('ua')
        Nia(a, _.Ba(d), this.ka, {
          C4: this.ma,
          onError: (e, f, g) =>
            gja(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          fra: (0, _.dc)(this.Lb, this),
          Ecd: !!c,
        })
      }
    }
    var fja = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.ha.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(hja(a, b[d]))
        _.Ea(c)
        return !a.lb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      hja = function (a, b) {
        const c = _.Qba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Mv(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const m = f[g]
            a.Mv(m).isLoaded() || c[m] || (d.push(m), b.push(m))
          }
        }
        d.reverse()
        _.Ea(d)
        return d
      },
      aja = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.dc)(a.q6b, a))
          b && b.length &&
            ija(a, new wd.YB(wd.YB.Type.bab, void 0, void 0, void 0, b[0]))
          lf(a)
        }
      }
    kf.prototype.Ea = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Mv(c)
            d && !d.isLoaded() && (this.CIa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.dc)(this.q6b, this))) && b.length &&
            ija(this, new wd.YB(wd.YB.Type.bab, void 0, void 0, void 0, b[0])),
            _.Aa(this.Fa, a),
            _.Aa(this.na, a),
            this.na.length === 0 && jja(this),
            this.tb && a == this.tb && (this.Qa.ka || this.Qa.callback()),
            lf(this),
            this.Aa = null)
      }
    }
    kf.prototype.Oa = function (a) {
      if (_.xa(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.xa(this.ha[b], a)) return !0
      }
      return !1
    }
    kf.prototype.load = function (a, b) {
      return dja(this, [a], b)[a]
    }
    kf.prototype.Da = function (a) {
      return dja(this, a)
    }
    var eja = function (a, b) {
      _.xa(a.Fa, b) || a.Fa.push(b)
    }
    kf.prototype.ub = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Ea(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && kja(this, this.ka[a].ha || [], (b) => {
        b.ka = new Cha()
        _.Aa(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.Mv(a)
    }
    var gja = function (a, b, c, d, e, f = 0, g = !1) {
      const m = g ? 0 : f + 1
      f = _.Ba(c)
      a.Ba = b
      c.forEach(_.Ad(_.Aa, a.Za), a)
      if (d == 401) ija(a, new wd.YB(wd.YB.Type.NQb, d)), a.ha.length = 0
      else if (d == 410) lja(a, new wd.YB(wd.YB.Type.zOb, d)), jja(a)
      else if (m >= 3) lja(a, new wd.YB(wd.YB.Type.i$a, d, f, e)), jja(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(m, 2) * 5E3)
          ? _.ha.setTimeout(() => {
            a.Sa(b, m, t)
          }, c)
          : a.Sa(b, m, t)
      }
    }
    kf.prototype.Lb = function () {
      lja(this, new wd.YB(wd.YB.Type.TIMEOUT))
      jja(this)
    }
    var lja = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : ija(a, b)
      },
      ija = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const m = hja(this, g)
            return _.Id(c, function (t) {
              return _.xa(m, t)
            })
          }, a)
          _.Da(d, f)
        }
        for (e = 0; e < c.length; e++) _.ya(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Aa(a.ha[f], d[e])
          _.Aa(a.Fa, d[e])
        }
        if (e = a.ab[Gha.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let m = 0; m < d.length; m++) g(Gha.ERROR, d[m], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        lf(a)
      },
      jja = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Mv(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        lf(a)
      },
      bja = function (a, b) {
        a = a.ab[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      kja = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Mv(f),
            !e[f] && d(b) && (e[f] = !0, kja(a, b.ha || [], c, d, e), c(b))
        }
      }
    kf.prototype.dispose = function () {
      _.Lb(_.Rb(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Fa = []
      this.ha = []
      this.ab = {}
      this.yb = !0
    }
    kf.prototype.isDisposed = function () {
      return this.yb
    }
    _.Tba = function () {
      return new kf()
    }
    var mja, nja, qja, rja, sja, tja, oja, pja
    mja = [5E3, 2E4]
    nja = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Ea()
    }
    qja = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Mv(c).isLoaded())
      b.length > 0 && (oja(a, ...b), a.na.push(b), pja(a))
    }
    rja = function (a, b) {
      return new _.me((c, d) => {
        const e = a.Mv(b)
        e.isLoaded() ? c(a.oa) : (Dha(e, () => {
          c(a.oa)
        }),
          Eha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof wd.YB && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    sja = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Mv(f),
          !e[f] && d(b) && (e[f] = !0, sja(a, b.ha || [], c, d, e), c(b))
      }
    }
    tja = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    oja = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    pja = function (a) {
      for (; a.Aa < a.Fa && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Mv(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            pja(a)
            c = () => {}
          }
          _.iga(b.map((f) => rja(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.qa.mb) throw Error('ua')
            Nia(a.qa, b, a.ma, {
              C4: a.ha,
              onError: (f, g) => {
                const m = mja[d++]
                m !== void 0
                  ? setTimeout(() => {
                    e()
                  }, m)
                  : (tja(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Mv(t)
                      if (!t.isLoaded()) {
                        t.onError(new wd.YB(wd.YB.Type.i$a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.uja = class extends fda {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Fa = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.rk = null
        this.ka = this.Mv('{base}')
      }
      FJa() {
        nja(this)
      }
      LJa(a) {
        super.LJa(a)
        nja(this)
      }
      Mv(a) {
        let b = this.ma[a]
        b || (b = new wd.Cbb([], a), this.ma[a] = b)
        return b
      }
      eya(a, b) {
        this.Mv(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      CIa(a, b) {
        if (this.ha[a]) {
          delete this.ha[a][b]
          for (const c in this.ha[a]) return
          delete this.ha[a]
        }
      }
      Oa(a) {
        return !!this.Ba[a]
      }
      load(a) {
        qja(this, [a])
        return rja(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = rja(this, d), c.push(d))
        })
        qja(this, c)
        return b
      }
      ub(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Ea()
        let c, d
        sja(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new Cha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Mv(a)
      }
      Ea() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Mv(c).isLoaded() || (this.CIa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.oa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          tja(this, a)
        }
      }
      G5a(a) {
        this.Fa = a ? Infinity : 1
      }
    }
    var vja = new _.uja()
    vja.G5a(!0)
    vja.LJa(new _.ve())
    _.Uba(vja)
    ;(new _.Jha(vja)).init()
    _.Ida()
    var wja = _.bf(_.cd('hxvedd'), !1), xja = _.bf(_.cd('dLc0B'), !1)
    if (_.bf(_.cd('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (xja ? 2 : wja ? 1 : 0) {
      case 2:
        ;(0, _.kd)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.kd)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.kd)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.Xb) {
        if (!_.Tba) return
        _.Uba(_.Tba())
      }
      _.Xb.FJa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
