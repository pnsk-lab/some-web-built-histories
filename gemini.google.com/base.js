// Source: https://gemini.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.HEfSv6YXgmM.2018.O/am=IxwExIACtH8DRXwCgASA3wAG/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk0lArF3aYIPyI3M1P0P3KoW_8y3sA/ee=DGWCxb:CgYiQ;NJ1rfe:yGfSdd;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.7tAkwFiHxy0.libheifWasm.O%3A%3BBardChatUi.TZ6mcPFqeSw.loadWasmSipCoca.O%3A%3B
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
      Eaa,
      La,
      Paa,
      Uaa,
      dba,
      mba,
      nba,
      oba,
      rba,
      vba,
      xba,
      Cba,
      Hba,
      Fba,
      Gba,
      gca,
      ica,
      kca,
      mca,
      uc,
      uca,
      yca,
      Cca,
      Zca,
      $ca,
      ada,
      Tc,
      bda,
      jda,
      kda,
      Yc,
      lda,
      mda,
      xda,
      zda,
      Ada,
      Dda,
      Lda,
      Mda,
      aaa,
      id,
      Pda,
      Qda,
      Rda,
      jd,
      Sda,
      Uda,
      kd,
      Tda,
      Vda,
      Wda,
      Xda,
      Zda,
      Yda,
      $da
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
    _.ua = function (a, b, c) {
      b = _.waa(a, b, c)
      return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b]
    }
    _.waa = function (a, b, c) {
      const d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (let f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f
      return -1
    }
    _.wa = function (a, b) {
      return _.va(a, b) >= 0
    }
    _.ya = function (a, b) {
      _.wa(a, b) || a.push(b)
    }
    _.Aa = function (a, b) {
      b = _.va(a, b)
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
    _.Fa = function (a, b, c) {
      b = b || a
      var d = (g) => g
      c = c || d
      let e = d = 0
      const f = new Set()
      for (; e < a.length;) {
        const g = a[e++], h = c(g)
        f.has(h) || (f.add(h), b[d++] = g)
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
    _.Caa = function () {
      if (!_.Aaa) {
        _.Aaa = {}
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            .split(''),
          b = ['+/=', '+/', '-_=', '-_.', '-_']
        for (let c = 0; c < 5; c++) {
          const d = a.concat(b[c].split(''))
          _.Baa[c] = d
          for (let e = 0; e < d.length; e++) {
            const f = d[e]
            _.Aaa[f] === void 0 && (_.Aaa[f] = e)
          }
        }
      }
    }
    Eaa = function (a) {
      return Daa[a] || ''
    }
    _.Gaa = function (a) {
      a = Faa.test(a) ? a.replace(Faa, Eaa) : a
      a = atob(a)
      const b = new Uint8Array(a.length)
      for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
      return b
    }
    _.Haa = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Ia = function () {
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
    _.Iaa = function (a) {
      _.Na(a, 8192)
      return a
    }
    _.Jaa = function (a) {
      _.Na(a, 32)
      return a
    }
    _.Pa = function (a) {
      return a != null && a[_.Kaa] === _.Laa
    }
    _.Sa = function (a, b) {
      return b === void 0
        ? a.Ib !== _.Ra && !!(2 & (a.kh[_.Ma] | 0))
        : !!(2 & b) && a.Ib !== _.Ra
    }
    _.Maa = function (a, b) {
      a.Ib = b ? _.Ra : void 0
    }
    _.Naa = function (a) {
      return a
    }
    _.Ta = function (a) {
      a.wYd = !0
      return a
    }
    _.Ya = function (a) {
      var b = a
      if ((0, _.Ua)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.Va)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.Xa
        ? BigInt(a)
        : a = (0, _.Oaa)(a)
          ? a ? '1' : '0'
          : (0, _.Ua)(a)
          ? a.trim() || '0'
          : String(a)
    }
    Paa = function (a, b) {
      if (a.length > b.length) return !1
      if (a.length < b.length || a === b) return !0
      for (let c = 0; c < a.length; c++) {
        const d = a[c], e = b[c]
        if (d > e) return !1
        if (d < e) return !0
      }
    }
    _.Qaa = function (a) {
      const b = a >>> 0
      _.Za = b
      _.$a = (a - b) / 4294967296 >>> 0
    }
    _.bb = function (a) {
      if (a < 0) {
        _.Qaa(-a)
        const [b, c] = _.Raa(_.Za, _.$a)
        _.Za = b >>> 0
        _.$a = c >>> 0
      } else _.Qaa(a)
    }
    _.Taa = function (a, b) {
      const c = b * 4294967296 + (a >>> 0)
      return Number.isSafeInteger(c) ? c : _.Saa(a, b)
    }
    _.Saa = function (a, b) {
      b >>>= 0
      a >>>= 0
      if (b <= 2097151) { var c = '' + (4294967296 * b + a) }
      else {_.Ia()
          ? c = '' + (BigInt(b) << BigInt(32) | BigInt(a))
          : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7),
            c = b + Uaa(c) + Uaa(a))}
      return c
    }
    Uaa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Vaa = function (a) {
      if (a.length < 16) _.bb(Number(a))
      else if (_.Ia()) {
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
          const [d, e] = _.Raa(_.Za, _.$a)
          _.Za = d
          _.$a = e
        }
      }
    }
    _.Raa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Waa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Xaa = function () {
      const a = Error()
      _.Waa(a, 'severity', 'incident')
      _.ia(a)
    }
    _.cb = function (a) {
      a = Error(a)
      _.Waa(a, 'severity', 'warning')
      return a
    }
    _.Zaa = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Yaa) != null ? c : Yaa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Xaa())
      }
    }
    _.db = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.aba = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.$aa(a) + '`' + a)
      return a
    }
    _.bba = function (a) {
      if (a == null || typeof a === 'boolean') return a
      if (typeof a === 'number') return !!a
    }
    _.fb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.eb)(a)
        case 'string':
          return cba.test(a)
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
    dba = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Vaa(a)
      return _.Saa(_.Za, _.$a)
    }
    _.eba = function (a) {
      a = (0, _.jb)(a)
      a >= 0 && (0, _.kb)(a) || (_.bb(a), a = _.Taa(_.Za, _.$a))
      return a
    }
    _.fba = function (a) {
      a = (0, _.jb)(a)
      a >= 0 && (0, _.kb)(a) ? a = String(a) : (_.bb(a), a = _.Saa(_.Za, _.$a))
      return a
    }
    _.gba = function (a) {
      return (0, _.kb)(a) ? _.Ya(_.eba(a)) : _.Ya(_.fba(a))
    }
    _.hba = function (a) {
      var b = (0, _.jb)(Number(a))
      if ((0, _.kb)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return dba(a)
    }
    _.iba = function (a) {
      var b = (0, _.jb)(Number(a))
      if ((0, _.kb)(b) && b >= 0) return _.Ya(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Ia() ? _.Ya((0, _.lb)(64, BigInt(a))) : _.Ya(dba(a))
    }
    _.jba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.Ya((0, _.lb)(64, a))
      if (_.fb(a)) return b === 'string' ? _.iba(a) : _.gba(a)
    }
    _.mb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.nb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.lba = function (a, b, c, d) {
      if (_.Pa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.ob] || (b[_.ob] = _.kba(b)) : new b()
          : void 0
      }
      c = a[_.Ma] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Ma] = d)
      return new b(a)
    }
    _.kba = function (a) {
      a = new a()
      _.Oa(a.kh)
      return a
    }
    mba = function (a) {
      return a
    }
    nba = function (a, b, c, d, e, f) {
      a = _.lba(a, d, c, f)
      e && (a = _.pb(a))
      return a
    }
    oba = function (a) {
      return [a, this.get(a)]
    }
    _.pba = function (a) {
      const b = _.qb(_.rb)
      return b ? a[b] : void 0
    }
    rba = function (a, b) {
      b < 100 || _.Zaa(qba, 1)
    }
    _.uba = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.qb(_.rb), g
      !e && f && (g = a[f]) && g.vVa(rba)
      f = []
      var h = a.length
      let t
      g = 4294967295
      let v = !1
      const z = !!(b & 64), B = z ? b & 128 ? 0 : -1 : void 0
      if (
        !(b & 1 ||
          (t = h && a[h - 1],
            t != null && typeof t === 'object' && t.constructor === Object
              ? (h--, g = h)
              : t = void 0,
            !z || b & 128 || e))
      ) {
        v = !0
        var I
        g = ((I = sba) != null ? I : _.Naa)(g - B, B, a, t, void 0) + B
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let S = a[I]
        if (S != null && (S = c(S, d)) != null) {
          if (z && I >= g) {
            const ba = I - B
            var M = void 0
            ;((M = b) != null ? M : b = {})[ba] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          M = t[S]
          if (M == null || (M = c(M, d)) == null) continue
          h = +S
          let ba
          if (z && !Number.isNaN(h) && (ba = h + B) < g) f[ba] = M
          else {
            let fa
            ;((fa = b) != null ? fa : b = {})[S] = M
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.qb(_.rb) && (a = _.pba(a)) && 'function' == typeof _.tba &&
        a instanceof _.tba && (f[_.rb] = a.ha())
      return f
    }
    vba = function (a) {
      a[0] = _.sb(a[0])
      a[1] = _.sb(a[1])
      return a
    }
    _.sb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.wba)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Ma] | 0
            return a.length === 0 && b & 1 ? void 0 : _.uba(a, b, _.sb)
          }
          if (_.Pa(a)) return xba(a)
          if (a instanceof _.tb) return _.ub(a)
          if (a instanceof _.vb) {
            return a = a.size !== 0 ? a.l7a(vba) : void 0, a
          }
          return
      }
      return a
    }
    _.Aba = function (a, b) {
      if (b) {
        sba = b == null || b === _.Naa || b[yba] !== zba ? _.Naa : b
        try {
          return xba(a)
        } finally {
          sba = void 0
        }
      }
      return xba(a)
    }
    xba = function (a) {
      a = a.kh
      return _.uba(a, a[_.Ma] | 0, _.sb)
    }
    _.Dba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.Ma] | 0
        if (Bba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && Cba()
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
              for (var h in t) {
                if (f = +h, f < g) {
                  c[
                    f +
                    b
                  ] = t[h], delete t[h]
                } else break
              }
              e = e & -16760833 | (g & 1023) << 14
              break a
            }
          }
          if (b) {
            h = Math.max(b, f - (e & 128 ? 0 : -1))
            if (h > 1024) throw Error('K')
            e = e & -16760833 | (h & 1023) << 14
          }
        }
      }
      a[_.Ma] = e | 64 | d
      return a
    }
    Cba = function () {
      if (Bba) throw Error('I')
      _.Zaa(Eba, 5)
    }
    Hba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Ma] | 0
        return a.length === 0 && c & 1 ? void 0 : Fba(a, c, b)
      }
      if (_.Pa(a)) return Gba(a)
      if (a instanceof _.vb) {
        b = a.b2
        if (b & 2) return a
        if (!a.size) return
        c = _.Oa(a.l7a())
        if (a.V8) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Pa(e)
              ? e = Gba(e)
              : Array.isArray(e)
              ? e = Fba(e, e[_.Ma] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if (a instanceof _.tb) return a
    }
    Fba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.yb(a, b, !1, c && !(b & 16))
        : (_.Na(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.Iba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Maa(a, !0)
      a.c1a = _.Ra
      return a
    }
    Gba = function (a) {
      const b = a.kh, c = b[_.Ma] | 0
      return _.Sa(a, c) ? a : _.Jba(a, b, c) ? _.Iba(a, b) : _.yb(b, c)
    }
    _.yb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.uba(a, b, Hba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Ma] = b
      return a
    }
    _.pb = function (a) {
      const b = a.kh, c = b[_.Ma] | 0
      return _.Sa(a, c)
        ? _.Jba(a, b, c) ? _.Iba(a, b, !0) : new a.constructor(_.yb(b, c, !1))
        : a
    }
    _.zb = function (a) {
      if (a.Ib !== _.Ra) return !1
      var b = a.kh
      b = _.yb(b, b[_.Ma] | 0)
      _.Na(b, 2048)
      a.kh = b
      _.Maa(a, !1)
      a.c1a = void 0
      return !0
    }
    _.Ab = function (a) {
      if (!_.zb(a) && _.Sa(a, a.kh[_.Ma] | 0)) throw Error()
    }
    _.Bb = function (a, b) {
      b === void 0 && (b = a[_.Ma] | 0)
      b & 32 && !(b & 4096) && (a[_.Ma] = b | 4096)
    }
    _.Jba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Ma] = c | 2, _.Maa(a, !0), !0)
        : !1
    }
    _.Cb = function (a, b, c, d, e) {
      const f = c + (e ? 0 : -1)
      var g = a.length - 1
      if (g >= 1 + (e ? 0 : -1) && f >= g) {
        const h = a[g]
        if (h != null && typeof h === 'object' && h.constructor === Object) {
          return h[c] = d, b
        }
      }
      if (f <= g) return a[f] = d, b
      if (d !== void 0) {
        let h
        g = ((h = b) != null ? h : b = a[_.Ma] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.Kba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Db(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
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
    _.Lba = function (a, b, c) {
      a = _.Fb(a, b, c)
      return Array.isArray(a) ? a : _.Gb
    }
    _.Mba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Db = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Hb = function (a, b, c, d, e) {
      _.Ab(a)
      const f = a.kh
      _.Cb(
        f,
        f[_.Ma] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Oba = function (a) {
      let b
      return (b = a[Nba]) != null ? b : a[Nba] = new Map()
    }
    _.Pba = function (a, b, c, d, e) {
      let f = a.get(d)
      if (f != null) return f
      f = 0
      for (let g = 0; g < d.length; g++) {
        const h = d[g]
        _.Fb(b, h, e) != null &&
          (f !== 0 && (c = _.Cb(b, c, f, void 0, e)), f = h)
      }
      a.set(d, f)
      return f
    }
    _.Qba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.Sa(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.zb(a) && (b = a.kh, c = b[_.Ma] | 0)
      a = _.Lba(b, e, g)
      var z = a === _.Gb ? 7 : a[_.Ma] | 0, B = _.Mba(z, c)
      if (t = !(4 & B)) {
        var I = a, M = c
        const S = !!(2 & B)
        S && (M |= 2)
        let ba = !S, fa = !0, pa = 0, Ha = 0
        for (; pa < I.length; pa++) {
          const Ja = _.lba(I[pa], d, !1, M)
          if (Ja instanceof d) {
            if (!S) {
              const ab = _.Sa(Ja)
              ba && (ba = !ab)
              fa && (fa = ab)
            }
            I[Ha++] = Ja
          }
        }
        Ha < pa && (I.length = Ha)
        B |= 4
        B = fa ? B & -4097 : B | 4096
        B = ba ? B | 8 : B & -9
      }
      B !== z && (a[_.Ma] = B, 2 & B && Object.freeze(a))
      if (
        v && !(8 & B ||
          !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & B || !(16 & B) && 32 & c)))
      ) {
        _.Db(B) && (a = [...a], B = _.Eb(B, c), c = _.Cb(b, c, e, a, g))
        d = a
        v = B
        for (z = 0; z < d.length; z++) {
          I = d[z], B = _.pb(I), I !== B && (d[z] = B)
        }
        v |= 8
        B = v = d.length ? v | 4096 : v & -4097
        a[_.Ma] = B
      }
      return a = _.Kba(a, B, b, c, e, g, f, t, h)
    }
    _.Eb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Rba = function (a, b) {
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
      this.BS = this.BS
      this.yea = this.yea
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
      this.Ci = null
      a && this.init(a, b)
    }
    _.Tba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Sba
      this.removed = this.tka = !1
    }
    _.Pb = function (a, b, c) {
      for (const d in a) b.call(c, a[d], d, a)
    }
    _.Uba = function (a, b, c) {
      const d = {}
      for (const e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Vba = function (a, b, c) {
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
      for (const b in a) return !1
      return !0
    }
    _.Tb = function (a, b) {
      let c, d
      for (let e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (let f = 0; f < Wba.length; f++) {
          c = Wba[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      }
    }
    _.Xba = function (a) {
      const b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Xba.apply(null, arguments[0])
      }
      const c = {}
      for (let d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
    _.Ub = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Zba = function (a) {
      if (_.Vb) a(_.Vb)
      else {
        let b
        ;((b = Yba) != null ? b : Yba = []).push(a)
      }
    }
    _.Wb = function () {
      !_.Vb && _.$ba && _.aca(_.$ba())
      return _.Vb
    }
    _.aca = function (a) {
      _.Vb = a
      let b
      ;(b = Yba) == null || b.forEach(_.Zba)
      Yba = void 0
    }
    _.Xb = function (a) {
      _.Vb && _.Vb.tb(a)
    }
    _.Yb = function () {
      _.Vb && _.Vb.Ea()
    }
    _.$b = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.bca] = a
    }
    _.ac = function () {
      _.Mb.call(this)
      this.XS = new _.Ub(this)
      this.m_c = this
      this.Owb = null
    }
    _.cc = function (a, b) {
      let c = a
      b && (c = (0, _.bc)(a, b))
      c = _.cc.iwc(c)
      _.cc.sVc
        ? setTimeout(c, 0)
        : (c = _.cc.Wud(c), _.cc.nfc || (_.cc.nfc = _.cc.wcd()), _.cc.nfc(c))
    }
    gca = function () {
      let a
      for (; a = cca.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ia(b)
        }
        dca(eca, a)
      }
      fca = !1
    }
    _.ec = function (a, b) {
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
    _.fc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.hc = function (a, b) {
      this.width = a
      this.height = b
    }
    ica = function () {
      let a = null
      if (!hca) return a
      try {
        const b = (c) => c
        a = hca.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    kca = function () {
      jca === void 0 && (jca = ica())
      return jca
    }
    _.nc = function (a) {
      const b = kca()
      a = b ? b.createScriptURL(a) : a
      return new _.jc(_.mc, a)
    }
    _.lca = function (a) {
      return a instanceof _.jc
    }
    _.oc = function (a) {
      if (_.lca(a)) return a.ha
      throw Error('$')
    }
    mca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.pc = function (a) {
      return new _.nca(_.mc, a)
    }
    _.qc = function (a) {
      return a instanceof _.nca
    }
    _.rc = function (a) {
      if (_.qc(a)) return a.ha
      throw Error('$')
    }
    uc = function (a) {
      return new tc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.vc = function (a, b = oca) {
      if (_.qc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof tc && d.Gj(a)) return _.pc(a)
      }
    }
    _.wc = function (a, b = oca) {
      b = _.vc(a, b)
      b === void 0 && _.pca(a.toString())
      return b || _.qca
    }
    _.xc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.pc(URL.createObjectURL(a))
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
      return _.pc(URL.createObjectURL(a))
    }
    _.sca = function (a) {
      if (!rca) {
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
    uca = function (a) {
      const b = !tca.test(a)
      b && _.pca(a)
      if (!b) return a
    }
    _.yc = function (a) {
      return a instanceof _.nca ? _.rc(a) : uca(a)
    }
    _.zc = function (a, b) {
      b = _.yc(b)
      b !== void 0 && (a.href = b)
    }
    _.Bc = function (a) {
      const b = kca()
      a = b ? b.createHTML(a) : a
      return new _.Ac(_.mc, a)
    }
    _.vca = function (a) {
      return a instanceof _.Ac
    }
    _.Cc = function (a) {
      if (_.vca(a)) return a.ha
      throw Error('$')
    }
    _.Dc = function (a, b) {
      a.src = _.oc(b).toString()
    }
    _.wca = function (a, b) {
      a.srcdoc = _.Cc(b)
    }
    _.xca = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Fc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.jc) throw new _.Ec('TrustedResourceUrl', 0)
          _.xca(a, [])
          b = _.yc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.jc)) throw new _.Ec(typeof c, 1)
          _.xca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Dc(a, c)
          break
        case 2:
          if (c instanceof _.jc) throw new _.Ec('TrustedResourceUrl', 2)
          _.xca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.yc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.db(b, void 0)
      }
    }
    _.Gc = function (a, b, c, d) {
      b = _.yc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Hc = function (a) {
      return yca('script', a)
    }
    _.zca = function (a) {
      return yca('style', a)
    }
    yca = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Ic = function (a) {
      const b = kca()
      a = b ? b.createScript(a) : a
      return new _.Aca(_.mc, a)
    }
    _.Bca = function (a) {
      return a instanceof _.Aca
    }
    _.Jc = function (a) {
      if (_.Bca(a)) return a.ha
      throw Error('$')
    }
    Cca = function (a) {
      const b = _.Hc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.Dca = function (a, b, c) {
      a.textContent = _.Jc(b)
      ;(c == null ? 0 : c.srd) || Cca(a)
    }
    _.Kc = function (a, b, c) {
      a.src = _.oc(b)
      ;(c == null ? 0 : c.srd) || Cca(a)
    }
    _.Lc = function (a, b) {
      a.nodeType === 1 && _.Eca(a)
      a.innerHTML = _.Cc(b)
    }
    _.Eca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('$')
    }
    _.Hca = function (a, b, c) {
      if (_.lca(b)) _.Fca(a, b, c)
      else {
        if (Gca.indexOf(c) === -1) throw Error('ba`' + c)
        b = _.yc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.Fca = function (a, b, c) {
      a.href = _.oc(b).toString()
      a.rel = c
    }
    _.Jca = function (a) {
      return 'function' == typeof _.Ica && a instanceof _.Ica
    }
    _.Kca = function (a) {
      if (_.Jca(a)) return a.ha
      throw Error('$')
    }
    _.Mc = function (a, b, c) {
      return a.parseFromString(_.Cc(b), c)
    }
    _.Nc = function (a, b) {
      b = _.yc(b)
      b !== void 0 && (a.href = b)
    }
    _.Lca = function (a, b) {
      return a.createContextualFragment(_.Cc(b))
    }
    _.Mca = function (a) {
      return _.Bc(a)
    }
    _.Nca = function (a) {
      return _.nc(a)
    }
    _.Oc = function (a) {
      a = a[0].toLowerCase()
      return new _.Oca(_.mc, a)
    }
    _.Rc = function (a, b) {
      if (_.vca(a)) return a
      a = _.Pc(String(a))
      if (b == null ? 0 : b.s_d) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.q2a) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.t_d) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Bc(a)
    }
    _.Pc = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.Qca = function (a) {
      return _.Pca('', a)
    }
    _.Pca = function (a, b) {
      a = _.Rc(a)
      return _.Bc(b.map((c) => _.Cc(_.Rc(c))).join(_.Cc(a).toString()))
    }
    _.Rca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Bc(a)
    }
    _.Uca = function (a) {
      if (!Sca.test(a)) throw Error('$')
      if (Tca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.Sc = function (a, b, c) {
      _.Uca(a)
      let d = `<${a}`
      b && (d += _.Vca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Wca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.Qca(c.map((e) => _.vca(e) ? e : _.Rc(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Bc(d)
    }
    _.Vca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Sca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Xca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.qc(e)
              ? e.toString()
              : uca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.Rc(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Yca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Zca = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Bc(a)
      return _.Lca(c, a)
    }
    $ca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    ada = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    Tc = function (a, b, c) {
      a.setAttribute(b, c)
    }
    bda = function (a) {
      return a.parts.map((b) => {
        const c = b.yTa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.Uc = function (a) {
      return _.cda.sanitize(a)
    }
    _.dda = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        W7a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.Vc = function (a, ...b) {
      if (b.length === 0) return _.nc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.nc(c)
    }
    _.Wc = function (a, b) {
      a = _.dda(_.oc(a).toString())
      return _.eda(a.W7a, a.params, a.fragment, b)
    }
    _.eda = function (a, b, c, d) {
      function e(g, h) {
        g != null &&
          (Array.isArray(g)
            ? g.forEach((t) => e(t, h))
            : (b += f + encodeURIComponent(h) + '=' + encodeURIComponent(g),
              f = '&'))
      }
      let f = b.length ? '&' : '?'
      d.constructor === Object && (d = Object.entries(d))
      Array.isArray(d) ? d.forEach((g) => e(g[1], g[0])) : d.forEach(e)
      return _.nc(a + b + c)
    }
    _.fda = function (a, b) {
      a = _.dda(_.oc(a).toString())
      const c = a.W7a.slice(-1) === '/' ? '' : '/'
      b = a.W7a + c + encodeURIComponent(b)
      return _.nc(b + a.params + a.fragment)
    }
    _.gda = function (a) {
      a = _.Jc(a).toString()
      return _.nc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.hda = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.ida = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    jda = function (a, b) {
      var c = b || _.Xc()
      const d = c.Vf()
      b = c.createElement('STYLE')
      const e = _.zca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    kda = function (a, b) {
      this.ha = a
      this.ka = b
    }
    Yc = function (a, b) {
      _.Mb.call(this)
      this.ha = a
      this.Aa = b
      this.qa = []
      this.na = []
      this.oa = []
    }
    lda = function () {
      this.qa = this.oa = null
    }
    mda = function (a = window) {
      return a.WIZ_global_data
    }
    _.nda = function (a, b = window) {
      return (b = mda(b)) && a in b ? b[a] : null
    }
    _.$c = function (a, b = window) {
      return new _.Zc(a, _.nda(a, b))
    }
    _.oda = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.ad = function (a) {
      return a.match(pda)
    }
    _.bd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.cd = function (a, b) {
      return _.ad(b)[a] || null
    }
    _.qda = function (a) {
      a = _.cd(1, a)
      !a && _.ha.self && _.ha.self.location &&
        (a = _.ha.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.dd = function (a) {
      a = _.ad(a)
      return _.oda(a[1], a[2], a[3], a[4])
    }
    _.sda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.rda(f) : '')
        }
      }
    }
    _.tda = function (a, b) {
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
    _.uda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.uda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.ed(b)))
    }
    _.vda = function (a) {
      const b = []
      for (const c in a) _.uda(c, a[c], b)
      return b.join('&')
    }
    _.wda = function (a, b, c, d) {
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
    xda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    zda = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      const d = _.ha._F_jsUrl
      ;(a = b || xda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!yda(c)) throw Error('pa')
      return c
    }
    Ada = function () {
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
    Dda = function (a) {
      const { promise: b, resolve: c, reject: d } = Ada()
      Bda.set(a, { promise: b, resolve: c, reject: d })
      Cda || (Cda = [],
        queueMicrotask(() => {
          const e = [...Cda]
          Cda = null
          const f = _.Wb().Da(e)
          for (const g of e) f[g].then(Bda.get(g).resolve, Bda.get(g).reject)
        }))
      Cda.push(a)
      return b
    }
    _.Ida = function () {
      if (Eda) return Fda
      Eda = !0
      let a
      try {
        a = zda(_.ha._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = Gda(_.Hda(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Zba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.jxa(e, g)
        }
      })
      return Fda = !0
    }
    _.Jda = function () {}
    Lda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return Kda[a]
    }
    Mda = function (a) {
      let b = 0, c = 0, d
      do d = Lda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.Oda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.haa || ''
      !c.jWd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('wa')
      }
      const f = c.eZd || _.Nda
      a = xda(a)
      b = new f(
        _.Nca(zda('', a), {
          Fsb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.e2d || a && a.hasAttribute('crossorigin')
      a = c.KVd || a && a.getAttribute('crossorigin')
      d && (b.QLa = d)
      a && (b.jza = a)
      c.PLa && (b.PLa = c.PLa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.Wb()
      g.qa = b
      g.Flc(!0)
      _.hd = c.bVd === 'BATCH' ? Dda : (h) => Promise.resolve(g.load(h))
    }
    aaa = []
    Pda = Object.create
    Qda = Object.defineProperty
    Rda = function (a) {
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
    jd = Rda(this)
    Sda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    jd.BigInt64Array && (Sda.push('BigInt64'), Sda.push('BigUint64'))
    Uda = function (a, b) {
      if (b) {
        for (var c = 0; c < Sda.length; c++) {
          Tda(Sda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    kd = function (a, b) {
      b && Tda(a, b)
    }
    Tda = function (a, b) {
      var c = jd
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
        Qda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Vda = Object.setPrototypeOf
    Wda = function (a, b) {
      a.prototype = Pda(b.prototype)
      a.prototype.constructor = a
      Vda(a, b)
      a.kc = b.prototype
    }
    Xda = function (a) {
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
    _.ld = function (a) {
      return Xda(a())
    }
    kd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    kd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (id = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(jd.top) || b(jd) || b({})
      return a || {}
    })
    Zda = function () {
      return Yda
    }
    _.md = function () {
      return Zda
    }
    Yda = function (a) {
      return a
    }
    $da = function (a) {
      var b = id
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
    kd('globalThis', function (a) {
      return a || jd
    })
    kd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    kd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    kd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    kd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    kd('Object.fromEntries', function (a) {
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
    kd('String.prototype.replaceAll', function (a) {
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
    kd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    kd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    kd('Promise.withResolvers', function (a) {
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
    kd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var aea = {},
      bea = function () {
        if (typeof jd.EventTarget === 'function') {
          var a = jd.EventTarget.prototype
        } else {for (
            a = jd;
            a && !Object.prototype.hasOwnProperty.call(a, 'addEventListener');
          ) a = a.__proto__}
        if (a) {
          var b = a.removeEventListener,
            c = a.addEventListener,
            d = new WeakMap(),
            e = {}
          a.removeEventListener = function (f, g, h) {
            var t = d.get(g != null ? g : e)
            t = t && t.get(this)
            var v = !(typeof h === 'boolean' ? h : h && h.capture) + f
            t && t[v] && (g = t[v], delete t[v])
            return b.call(this, f, g, h)
          }
          a.addEventListener = function (f, g, h) {
            var t = aea[f]
            if (!t) return c.call(this, f, g, h)
            var v = g != null ? g : e, z = d.get(v)
            z || (z = new WeakMap(), d.set(v, z))
            var B = z.get(this)
            B || (B = {}, z.set(this, B))
            var I = !(typeof h === 'boolean' ? h : h && h.capture) + f
            if (!B[I]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var M = g.handleEvent
                if (typeof M === 'function') return M.apply(g, arguments)
              })
              if (v) {
                h && h.once && (v = function (M) {
                  return function () {
                    if (typeof M !== 'function') throw Error('l`' + M)
                    delete B[I]
                    return M.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  h && jd.AbortSignal && h.signal instanceof
                    jd.AbortSignal
                ) {
                  if (h.signal.aborted) return
                  h.signal.addEventListener('abort', function () {
                    delete B[I]
                  }, { once: !0 })
                }
              }
              B[I] = v
              return c.call(this, f, v, h)
            }
          }
          bea = function () {}
        }
      },
      cea = function (a) {
        var b = ['readystatechange']
        bea()
        for (let c = 0; c < b.length; c++) {
          ;(aea[b[c]] || (aea[b[c]] = [])).push(a)
        }
      },
      nd = function (a, b) {
        Tda(a, function (c) {
          return c && b(c)
        })
      },
      dea = !1
    kd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.md = c)
        c = a._JSC
        typeof c === 'function' && (Zda = c)
        return a
      }
      dea = !0
      Yda = function (e) {
        return e
      }
      var d = id
      d[0] = d[0] || []
      d[1] = d[1] || 0
      b.prototype.get = function () {
        return this.index in d[0] ? d[0][this.index] : this.defaultValue
      }
      b.prototype.run = function (e, f, g) {
        var h = d[0]
        ;(d[0] = h.slice())[this.index] = e
        try {
          return f.apply(null, Array.prototype.slice.call(arguments, 2))
        } finally {
          d[0] = h
        }
      }
      b['\u1d43\u1d9cstart'] = _.md = function (e) {
        var f = d[0], g = e ? void 0 : d[0]
        return function (h) {
          return h
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
      b._JSC = Zda = function (e) {
        var f = (0, _.md)(e)
        return function (g, h) {
          return f(h)(g)
        }
      }
      return b
    })
    dea && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var h = 0; h < e.length; h++) {
                var t = e[h], v = arguments[t]
                typeof v === 'function' && (arguments[t] = $da(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              Qda(g, 'name', { value: f.name }),
                Qda(g, 'length', { value: f.length }),
                Qda(g, 'toString', {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return f.toString()
                  },
                })
            } catch (h) {}
            return g
          }
        },
        b = a(0)
      nd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      nd('queueMicrotask', b)
      nd('requestAnimationFrame', b)
      nd('requestIdleCallback', b)
      nd('setInterval', b)
      nd('setTimeout', b)
      nd('HTMLCanvasElement.prototype.toBlob', b)
      nd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      nd('FileSystemEntry.prototype.getParent', a(0, 1))
      nd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      nd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      nd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      nd('XMLHttpRequest.prototype.send', function (d) {
        cea(function (e) {
          return function () {
            var f = id[0]
            try {
              return id[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              id[0] = f
            }
          }
        })
        return function () {
          c.set(this, id[0])
          return d.apply(this, arguments)
        }
      })
    }()
    kd('Promise.prototype.finally', function (a) {
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
    kd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    kd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = id
      b.wrap = $da
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
    kd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        eea(this)
        fea(b)
        var c = gea(this, b)
        b = new Set(this)
        var d = c.tCb
        c = c.Msb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    kd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        eea(this)
        fea(b)
        var c = new Set(), d = gea(this, b)
        b = d.tCb
        d = d.Msb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var fea = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      gea = function (a, b) {
        if (a.size <= b.size) a = { tCb: a.keys(), Msb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { tCb: b, Msb: a }
        }
        return a
      },
      eea = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      hea = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    kd('Array.prototype.at', function (a) {
      return a ? a : hea
    })
    Uda('at', function (a) {
      return a ? a : hea
    })
    kd('String.prototype.at', function (a) {
      return a ? a : hea
    })
    kd('Array.prototype.flat', function (a) {
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
    kd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    kd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var iea = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    kd('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return iea(d, b, c)
      }
    })
    Uda('with', function (a) {
      return a ? a : function (b, c) {
        return iea(this.slice(), b, c)
      }
    })
    kd('Promise.allSettled', function (a) {
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
    kd('String.prototype.matchAll', function (a) {
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
    var jea = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    kd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return jea(this, b, c).v
      }
    })
    Uda('findLast', function (a) {
      return a ? a : function (b, c) {
        return jea(this, b, c).v
      }
    })
    kd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Wda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    kd('Promise.any', function (a) {
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
    var qd, sd, lea, mea, nea
    _.kea = _.kea || {}
    _.ha = this || self
    _.od = function (a, b, c) {
      a = a.split('.')
      c = c || _.ha
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    qd = function (a, b) {
      var c = _.pd('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.rd = _.ha._F_toggles_default_BardChatUi || []
    sd = function () {}
    sd.get = function () {
      return null
    }
    _.hd = null
    _.pd = function (a, b) {
      a = a.split('.')
      b = b || _.ha
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.$aa = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ca = function (a) {
      var b = _.$aa(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.td = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.ud = function (a) {
      return Object.prototype.hasOwnProperty.call(a, lea) && a[lea] ||
        (a[lea] = ++mea)
    }
    lea = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    mea = 0
    nea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.bc = function (a, b, c) {
      _.bc = nea
      return _.bc.apply(null, arguments)
    }
    _.wd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.xd = function () {
      return Date.now()
    }
    _.oea = function (a, b, c) {
      _.od(a, b, c)
    }
    _.qb = function (a) {
      return a
    }
    _.zd = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.kc = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++
        ) g[h - 2] = arguments[h]
        return b.prototype[e].apply(d, g)
      }
    }
    _.zd(_.ea, Error)
    _.ea.prototype.name = 'CustomError'
    var pea
    _.zd(baa, _.ea)
    baa.prototype.name = 'AssertionError'
    _.qea = typeof TextDecoder !== 'undefined'
    _.rea = typeof TextEncoder !== 'undefined'
    var Ad = !!(_.rd[5] & 4096),
      sea = !!(_.rd[5] & 128),
      tea = !!(_.rd[5] >> 14 & 1),
      uea = !!(_.rd[4] >> 28 & 1),
      vea = !!(_.rd[5] >> 15 & 1),
      wea = !!(_.rd[5] & 4),
      xea = !!(_.rd[4] >> 23 & 1),
      yea = !!(_.rd[5] & 8192),
      zea = !!(_.rd[4] >> 24 & 1),
      Aea = !!(_.rd[5] & 16)
    var Bea, Bba
    Bea = qd(1, !0)
    _.faa = Ad ? tea : qd(610401301, !1)
    _.Cea = Ad ? uea : qd(1331761403, !1)
    _.Dea = Ad ? vea : qd(651175828, !1)
    Bba = Ad ? sea || !wea : qd(748402147, !0)
    _.Eea = Ad ? xea : qd(861377723, !1)
    _.Fea = Ad ? sea || !yea : qd(861377724, Bea)
    _.Gea = Ad ? zea : qd(869336904, !1)
    _.Hea = Ad ? Aea : qd(869336905, !1)
    var Iea
    Iea = _.ha.navigator
    _.na = Iea ? Iea.userAgentData || null : null
    var Jea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var Kea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        const a = this
        return _.ld(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.ld(function* () {
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
    var Lea
    Lea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.ld(function* () {
          if (naa(!0)) return new Jea(yield Kea.load())
          a.ha = !0
          return new Jea(_.taa())
        })
      }
    }
    _.Mea = new Lea()
    _.va = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Bd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Cd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Dd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.Ed = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Nea = function (a) {
      _.Nea[' '](a)
      return a
    }
    _.Nea[' '] = function () {}
    _.Oea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var $ea, afa
    _.Pea = _.haa()
    _.Gd = _.iaa()
    _.Hd = _.oa('Edge')
    _.Id = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.Jd = _.caa('WebKit') && !_.oa('Edge')
    _.Qea = _.Jd && _.oa('Mobile')
    _.Kd = _.ta()
    _.Ld = _.raa()
    _.Rea = _.qaa() || _.saa()
    _.Sea = _.oaa()
    _.Tea = _.paa()
    _.Uea = _.oa('iPad')
    _.Vea = _.oa('iPod')
    _.Wea = _.sa()
    _.caa('KaiOS')
    var Xea = function () {
        const a = _.ha.document
        return a ? a.documentMode : void 0
      },
      Yea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.Id) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.Hd) return /Edge\/([\d\.]+)/.exec(c)
        if (_.Gd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.Jd) return /WebKit\/(\S+)/.exec(c)
        if (_.Pea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.Gd) {
        const c = Xea()
        if (c != null && c > parseFloat(a)) {
          Yea = String(c)
          break a
        }
      }
      Yea = a
    }
    _.Zea = Yea
    $ea = {}
    _.Md = function (a) {
      return _.Oea($ea, a, function () {
        return _.eaa(_.Zea, a) >= 0
      })
    }
    if (_.ha.document && _.Gd) {
      var bfa = Xea()
      afa = bfa ? bfa : parseInt(_.Zea, 10) || void 0
    } else afa = void 0
    _.cfa = afa
    var dfa, efa, ffa, gfa, hfa, ifa
    _.Nd = {}
    dfa = _.kaa()
    efa = yaa()
    ffa = _.oa('iPad')
    gfa = _.maa()
    hfa = _.laa()
    ifa = zaa()
    _.Nd.ANDROID = gfa
    _.Nd.hMd = !1
    _.Nd.iMd = !1
    _.Nd.jMd = !1
    _.Nd.kMd = !1
    _.Nd.lMd = !1
    _.Nd.mMd = !1
    _.Nd.CHROME = hfa
    _.Nd.aia = _.Hd
    _.Nd.e1 = dfa
    _.Nd.xJb = _.Gd
    _.Nd.R9a = ffa
    _.Nd.S9a = efa
    _.Nd.Dab = _.Pea
    _.Nd.HK = ifa
    _.Nd.xYd = yaa
    _.Nd.CYd = zaa
    _.Baa = {}
    _.Aaa = null
    var Faa, Daa, jfa
    Faa = /[-_.]/g
    Daa = { '-': '+', _: '/', '.': '=' }
    _.Od = {}
    jfa = typeof structuredClone != 'undefined'
    var kfa
    _.Rd = function (a) {
      return a ? new _.tb(a, _.Od) : _.Qd()
    }
    _.Qd = function () {
      return kfa || (kfa = new _.tb(null, _.Od))
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
    _.lfa = function (a) {
      if (_.Od !== _.Od) throw Error('y')
      var b = a.ha
      b == null || _.Haa(b) ||
        (typeof b === 'string' ? b = _.Gaa(b) : (_.$aa(b), b = null))
      return b == null ? b : a.ha = b
    }
    _.tb = class {
      isEmpty() {
        return this.ha == null
      }
      constructor(a, b) {
        if (b !== _.Od) throw Error('y')
        this.ha = a
        if (a != null && a.length === 0) throw Error('x')
      }
    }
    var Nba, qba, Eba, yba
    _.ob = La()
    Nba = La()
    _.mfa = La()
    _.rb = La()
    _.nfa = La()
    qba = La()
    _.ofa = La()
    Eba = La()
    _.Kaa = La('m_m', !0)
    yba = La()
    _.pfa = La()
    var qfa
    _.Ma = La('jas', !0)
    qfa = []
    qfa[_.Ma] = 7
    _.Gb = Object.freeze(qfa)
    var rfa
    _.Laa = {}
    _.Ra = {}
    rfa = class {
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
    _.sfa = Object.freeze({})
    _.tfa = Object.freeze({})
    var zba = {}
    _.ufa = _.Ta((a) => a !== null && a !== void 0)
    _.Va = _.Ta((a) => typeof a === 'number')
    _.vfa = _.Ta((a) => Number.isFinite(a))
    _.Ua = _.Ta((a) => typeof a === 'string')
    _.Oaa = _.Ta((a) => typeof a === 'boolean')
    _.wfa = _.Ta((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.xfa = _.Ta((a) => typeof a === 'function')
    _.yfa = _.Ta((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.zfa = _.Ta((a) => Array.isArray(a))
    _.Xa = typeof _.ha.BigInt === 'function' &&
      typeof _.ha.BigInt(0) === 'bigint'
    var Cfa, Afa, Dfa, Bfa
    _.wba = _.Ta((a) =>
      _.Xa ? a >= Afa && a <= Bfa : a[0] === '-' ? Paa(a, Cfa) : Paa(a, Dfa)
    )
    Cfa = Number.MIN_SAFE_INTEGER.toString()
    Afa = _.Xa ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    Dfa = Number.MAX_SAFE_INTEGER.toString()
    Bfa = _.Xa ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.Za = 0
    _.$a = 0
    var Yaa = void 0
    var cba
    _.Sd = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.lb = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.kb = Number.isSafeInteger
    _.eb = Number.isFinite
    _.jb = Math.trunc
    cba = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var Efa, Ffa
    Efa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    Ffa = function (a) {
      if (a.b2 & 2) throw Error('D')
    }
    _.vb = class extends Efa {
      constructor(a, b, c = mba, d = mba) {
        super()
        this.b2 = a[_.Ma] | 0
        this.V8 = b
        this.REa = c
        this.GFb = this.V8 ? nba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.b2)
          super.set(g, h)
        }
      }
      l7a(a) {
        return _.Iaa(Array.from(super.entries(), a))
      }
      clear() {
        Ffa(this)
        super.clear()
      }
      delete(a) {
        Ffa(this)
        return super.delete(this.REa(a, !0, !1))
      }
      entries() {
        if (this.V8) {
          var a = super.keys()
          a = new rfa(a, oba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.V8) {
          var a = super.keys()
          a = new rfa(a, _.vb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.V8
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        Ffa(this)
        a = this.REa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.GFb(b, !0, !0, this.V8, !1, this.b2))
      }
      Syd(a) {
        const b = this.REa(a[0], !1, !0)
        a = a[1]
        a = this.V8
          ? a === void 0 ? null : a
          : this.GFb(a, !1, !0, void 0, !1, this.b2)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.REa(a, !1, !1))
      }
      get(a) {
        a = this.REa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.V8
          return c
            ? (c = this.GFb(b, !1, !0, c, this.d2c, this.b2),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.vb.prototype.toJSON = void 0
    var sba
    _.Td = jfa ? structuredClone : (a) => _.uba(a, 0, _.sb)
    _.Gfa = _.Ya(0)
    _.Ud = function (a, b, c, d, e) {
      b = _.Fb(a.kh, b, c, e)
      if (b !== null || d && a.c1a !== _.Ra) return b
    }
    _.Fb = function (a, b, c, d) {
      if (b === -1) return null
      const e = b + (c ? 0 : -1), f = a.length - 1
      let g, h
      if (!(f < 1 + (c ? 0 : -1))) {
        if (e >= f) {
          if (
            g = a[f],
              g != null && typeof g === 'object' && g.constructor === Object
          ) c = g[b], h = !0
          else if (e === f) c = g
          else return
        } else c = a[e]
        if (d && c != null) {
          d = d(c)
          if (d == null) return d
          if (!Object.is(d, c)) return h ? g[b] = d : a[e] = d, d
        }
        return c
      }
    }
    _.Wd = function (a, b, c) {
      return _.Vd(a, b) === c ? c : -1
    }
    _.Vd = function (a, b, c) {
      a = a.kh
      return _.Pba(_.Oba(a), a, void 0, b, c)
    }
    _.Xd = function (a, b, c, d) {
      return _.bba(_.Ud(a, b, c, d))
    }
    _.Yd = function (a, b, c, d) {
      return _.ib(_.Ud(a, b, c, d))
    }
    _.Zd = function (a, b, c = 0, d) {
      let e
      return (e = _.Yd(a, b, d)) != null ? e : c
    }
    _.Ib = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Jaa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.kh = _.Dba(a, b, c, 2048)
      }
      toJSON() {
        return _.Aba(this)
      }
      serialize(a) {
        return JSON.stringify(_.Aba(this, a))
      }
      clone() {
        const a = this.kh, b = a[_.Ma] | 0
        return _.Jba(this, a, b)
          ? _.Iba(this, a, !0)
          : new this.constructor(_.yb(a, b, !1))
      }
      isImmutable() {
        return _.Sa(this)
      }
    }
    _.l.prototype.wda = _.aa(0)
    _.l.prototype[_.Kaa] = _.Laa
    _.l.prototype.toString = function () {
      return this.kh.toString()
    }
    _.Hfa = class extends _.ea {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.Ifa = []
    _.Jfa = []
    _.Kfa = !1
    _.Lfa = function (a) {
      _.Ifa[_.Ifa.length] = a
      if (_.Kfa) {
        for (let b = 0; b < _.Jfa.length; b++) {
          a((0, _.bc)(_.Jfa[b].wrap, _.Jfa[b]))
        }
      }
    }
    _.Mb.prototype.BS = !1
    _.Mb.prototype.isDisposed = function () {
      return this.BS
    }
    _.Mb.prototype.dispose = function () {
      this.BS || (this.BS = !0, this.Lb())
    }
    _.Mb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Mb.prototype.Pb = function (a) {
      this.addOnDisposeCallback(_.wd(_.Kb, a))
    }
    _.Mb.prototype.addOnDisposeCallback = function (a, b) {
      this.BS
        ? b !== void 0 ? a.call(b) : a()
        : (this.yea || (this.yea = []), b && (a = a.bind(b)), this.yea.push(a))
    }
    _.Mb.prototype.Lb = function () {
      if (this.yea) { for (; this.yea.length;) this.yea.shift()() }
    }
    _.Nb = function (a, b) {
      this.type = 'function' == typeof _.$d && a instanceof _.$d ? String(a) : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Nb.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Nb.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var Nfa
    _.Mfa = !(!_.ha.navigator || !_.ha.navigator.maxTouchPoints)
    Nfa = function () {
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
    _.zd(_.Ob, _.Nb)
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
        : (this.offsetX = _.Jd || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.Jd || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.Kd ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.Ci = a
      a.defaultPrevented && _.Ob.kc.preventDefault.call(this)
    }
    _.Ob.prototype.stopPropagation = function () {
      _.Ob.kc.stopPropagation.call(this)
      this.Ci.stopPropagation
        ? this.Ci.stopPropagation()
        : this.Ci.cancelBubble = !0
    }
    _.Ob.prototype.preventDefault = function () {
      _.Ob.kc.preventDefault.call(this)
      const a = this.Ci
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.Ob.prototype.PBa = _.aa(1)
    _.Ofa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.ae = function (a) {
      return !(!a || !a[_.Ofa])
    }
    var Sba = 0
    var Pfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Wba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.Ub.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = Qfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.tka = !1))
        : (b = new _.Tba(b, this.src, f, !!d, e), b.tka = c, a.push(b))
      return b
    }
    _.Ub.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = Qfa(e, b, c, d)
      return b > -1
        ? (Pfa(e[b]),
          _.za(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Rfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Aa(a.listeners[c], b)
      d &&
        (Pfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.Ub.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Pfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.Ub.prototype.Yba = _.aa(3)
    _.Ub.prototype.Rma = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = Qfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.Ub.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Vba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Qfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var Sfa, Tfa, Ufa, Wfa, Xfa, Yfa, Zfa, aga
    Sfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Tfa = {}
    Ufa = 0
    _.ce = function (a, b, c, d, e) {
      if (d && d.once) return _.be(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ce(a, b[f], c, d, e)
        return null
      }
      c = _.Vfa(c)
      return _.ae(a)
        ? a.listen(b, c, _.td(d) ? !!d.capture : !!d, e)
        : Wfa(a, b, c, !1, d, e)
    }
    Wfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      const g = _.td(e) ? !!e.capture : !!e
      let h = _.de(a)
      h || (a[Sfa] = h = new _.Ub(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Xfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        Nfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Yfa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      Ufa++
      return c
    }
    Xfa = function () {
      const a = Zfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.be = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.be(a, b[f], c, d, e)
        return null
      }
      c = _.Vfa(c)
      return _.ae(a)
        ? a.tf(b, c, _.td(d) ? !!d.capture : !!d, e)
        : Wfa(a, b, c, !0, d, e)
    }
    _.fe = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.fe(a, b[f], c, d, e)
      } else {d = _.td(d) ? !!d.capture : !!d,
          c = _.Vfa(c),
          _.ae(a)
            ? a.Lg(b, c, d, e)
            : a && (a = _.de(a)) && (b = a.Rma(b, c, d, e)) && _.he(b)}
    }
    _.he = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.ae(b)) return b.bW(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Yfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Ufa--
      ;(c = _.de(b))
        ? (Rfa(c, a), c.ha == 0 && (c.src = null, b[Sfa] = null))
        : Pfa(a)
      return !0
    }
    Yfa = function (a) {
      return a in Tfa ? Tfa[a] : Tfa[a] = 'on' + a
    }
    _.$fa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.tka && _.he(a)
      return c.call(d, b)
    }
    Zfa = function (a, b) {
      return a.removed ? !0 : _.$fa(a, new _.Ob(b, this))
    }
    _.de = function (a) {
      a = a[Sfa]
      return a instanceof _.Ub ? a : null
    }
    aga = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Vfa = function (a) {
      if (typeof a === 'function') return a
      a[aga] || (a[aga] = function (b) {
        return a.handleEvent(b)
      })
      return a[aga]
    }
    _.Lfa(function (a) {
      Zfa = a(Zfa)
    })
    var Yba
    _.bga = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Zba((e) => {
            e.jxa(a.ha, d)
          })
        })
      }
    }
    _.ie = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.bga(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.bca = Symbol('U')
    _.zd(_.ac, _.Mb)
    _.ac.prototype[_.Ofa] = !0
    _.k = _.ac.prototype
    _.k.lT = function () {
      return this.Owb
    }
    _.k.Xp = function (a) {
      this.Owb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.ce(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.fe(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.lT()
      if (c) { for (b = []; c; c = c.lT()) b.push(c) }
      c = this.m_c
      const d = a.type || a
      if (typeof a === 'string') a = new _.Nb(a, c)
      else if (a instanceof _.Nb) a.target = a.target || c
      else {
        var e = a
        a = new _.Nb(d, c)
        _.Tb(a, e)
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
    _.k.Lb = function () {
      _.ac.kc.Lb.call(this)
      this.removeAllListeners()
      this.Owb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.XS.add(String(a), b, !1, c, d)
    }
    _.k.tf = function (a, b, c, d) {
      return this.XS.add(String(a), b, !0, c, d)
    }
    _.k.Lg = function (a, b, c, d) {
      return this.XS.remove(String(a), b, c, d)
    }
    _.k.bW = function (a) {
      return Rfa(this.XS, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.XS ? this.XS.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.XS.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.tka && this.bW(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.Yba = _.aa(2)
    _.k.Rma = function (a, b, c, d) {
      return this.XS.Rma(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.XS.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.je =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var dca = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      cga = class {
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
    _.cc.Wud = _.je
    _.cc.sVc = !1
    _.cc.wcd = function () {
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
    _.cc.iwc = (a) => a
    _.Lfa(function (a) {
      _.cc.iwc = a
    })
    var dga = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = eca.get()
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
      eca = new cga(() => new ega(), (a) => a.reset()),
      ega = class {
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
    var fga, fca, cca, gga
    fca = !1
    cca = new dga()
    _.ke = (a, b) => {
      fga || gga()
      fca || (fga(), fca = !0)
      cca.add(a, b)
    }
    gga = () => {
      const a = Promise.resolve(void 0)
      fga = () => {
        a.then(gca)
      }
    }
    _.le = function () {}
    var hga = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var iga, jga, sga, pga, lga, xga, vga, tga, uga, yga, wga, zga
    _.ne = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.le) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.me(b, 2, c)
          }, function (c) {
            _.me(b, 3, c)
          })
        } catch (b) {
          _.me(this, 3, b)
        }
      }
    }
    iga = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    iga.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    jga = new cga(function () {
      return new iga()
    }, function (a) {
      a.reset()
    })
    _.kga = function (a, b, c) {
      const d = jga.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.mga = function (a, b, c) {
      lga(a, b, c, null) || _.ke(_.wd(b, a))
    }
    _.nga = function (a) {
      return new _.ne(function (b, c) {
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
            var h = a[t]
            _.mga(h, _.wd(f, t), g)
          }
        } else b(e)
      })
    }
    _.pe = function () {
      let a, b
      const c = new _.ne(function (d, e) {
        a = d
        b = e
      })
      return new oga(c, a, b)
    }
    _.ne.prototype.then = function (a, b, c) {
      return pga(
        this,
        (0, _.je)(typeof a === 'function' ? a : null),
        (0, _.je)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.ne.prototype.$goog_Thenable = !0
    var rga = function (a, b, c, d) {
      _.qga(a, _.kga(b || _.le, c || null, d))
    }
    _.ne.prototype.finally = function (a) {
      a = (0, _.je)(a)
      return new _.ne((b, c) => {
        rga(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.ne.prototype.ha = function (a, b) {
      return pga(this, null, (0, _.je)(a), b)
    }
    _.ne.prototype.catch = _.ne.prototype.ha
    _.ne.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.qe(a)
        _.ke(function () {
          sga(this, b)
        }, this)
      }
    }
    sga = function (a, b) {
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
              ? sga(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : tga(c),
                uga(c, e, 3, b)))
          }
          a.na = null
        } else _.me(a, 3, b)
      }
    }
    _.qga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || vga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    pga = function (a, b, c, d) {
      const e = _.kga(null, null, null)
      e.child = new _.ne(function (f, g) {
        e.ka = b
          ? function (h) {
            try {
              const t = b.call(d, h)
              f(t)
            } catch (t) {
              g(t)
            }
          }
          : f
        e.ha = c
          ? function (h) {
            try {
              const t = c.call(d, h)
              t === void 0 && h instanceof _.qe ? g(h) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.qga(a, e)
      return e.child
    }
    _.ne.prototype.Fa = function (a) {
      this.ka = 0
      _.me(this, 2, a)
    }
    _.ne.prototype.Ea = function (a) {
      this.ka = 0
      _.me(this, 3, a)
    }
    _.me = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          lga(c, a.Fa, a.Ea, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            vga(a),
            b != 3 || c instanceof _.qe || wga(a, c)))
    }
    lga = function (a, b, c, d) {
      if (a instanceof _.ne) return rga(a, b, c, d), !0
      if (hga(a)) return a.then(b, c, d), !0
      if (_.td(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return xga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    xga = function (a, b, c, d, e) {
      let f = !1
      const g = function (t) {
          f || (f = !0, c.call(e, t))
        },
        h = function (t) {
          f || (f = !0, d.call(e, t))
        }
      try {
        b.call(a, g, h)
      } catch (t) {
        h(t)
      }
    }
    vga = function (a) {
      a.Aa || (a.Aa = !0, _.ke(a.Da, a))
    }
    tga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.ne.prototype.Da = function () {
      let a
      for (; a = tga(this);) uga(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    uga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, yga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : yga(b, c, d)
        } catch (e) {
          zga.call(null, e)
        }}
      dca(jga, b)
    }
    yga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    wga = function (a, b) {
      a.qa = !0
      _.ke(function () {
        a.qa && zga.call(null, b)
      })
    }
    zga = _.ia
    _.qe = function (a) {
      _.ea.call(this, a)
      this.ka = !1
    }
    _.zd(_.qe, _.ea)
    _.qe.prototype.name = 'cancel'
    var oga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var Gga, Fga, Bga, Cga
    _.ec.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.ec && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.lb ? this.lb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.re(this))
      }
    }
    _.ec.prototype.Sa = function (a, b) {
      this.Ea = !1
      Aga(this, a, b)
    }
    var Aga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        Bga(a)
      },
      Dga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new Cga(a)
          a.Oa = !1
        }
      }
    _.ec.prototype.callback = function (a) {
      Dga(this)
      Aga(this, !0, a)
    }
    _.ec.prototype.ha = function (a) {
      Dga(this)
      Aga(this, !1, a)
    }
    _.te = function (a, b, c) {
      return _.se(a, b, null, c)
    }
    _.ec.prototype.finally = function (a) {
      return _.Ega(
        new Promise((b, c) => {
          _.se(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.se = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.je)(b) : (b = (0, _.je)(b), c = (0, _.je)(c)))
      a.Ba.push([b, c, d])
      e && Bga(a)
      return a
    }
    _.ec.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.ne(function (g, h) {
        e = g
        d = h
      })
      _.se(this, e, function (g) {
        g instanceof _.re ? f.cancel() : d(g)
        return Fga
      }, this)
      return f.then(a, b, c)
    }
    _.ec.prototype.$goog_Thenable = !0
    _.ec.prototype.ma = _.aa(4)
    _.ec.prototype.isError = function (a) {
      return a instanceof Error
    }
    Gga = function (a) {
      return _.Ed(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    Fga = {}
    Bga = function (a) {
      if (a.Da && a.ka && Gga(a)) {
        var b = a.Da, c = Hga[b]
        c && (_.ha.clearTimeout(c.ha), delete Hga[b])
        a.Da = 0
      }
      a.na && (a.na.Aa--, delete a.na)
      b = a.oa
      for (var d = c = !1; a.Ba.length && !a.Ea;) {
        var e = a.Ba.shift(), f = e[0]
        const h = e[1]
        e = e[2]
        if (f = a.qa ? h : f) {
          try {
            var g = f.call(e || a.Wa, b)
            g === Fga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              hga(b) ||
              typeof _.ha.Promise === 'function' && b instanceof _.ha.Promise
            ) d = !0, a.Ea = !0
          } catch (t) {
            b = t, a.qa = !0, Gga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.bc)(a.Sa, a, !0),
          d = (0, _.bc)(a.Sa, a, !1),
          b instanceof _.ec ? (_.se(b, g, d), b.mb = !0) : b.then(g, d))
      c && (b = new Iga(b), Hga[b.ha] = b, a.Da = b.ha)
    }
    _.Ega = function (a) {
      const b = new _.ec()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    Cga = function (a) {
      _.ea.call(this)
      this.oC = a
    }
    _.zd(Cga, _.ea)
    Cga.prototype.message = 'Deferred has already fired'
    Cga.prototype.name = 'AlreadyCalledError'
    _.re = function (a) {
      _.ea.call(this)
      this.oC = a
    }
    _.zd(_.re, _.ea)
    _.re.prototype.message = 'Deferred was canceled'
    _.re.prototype.name = 'CanceledError'
    var Iga = function (a) {
      this.ha = _.ha.setTimeout((0, _.bc)(this.throwError, this), 0)
      this.VS = a
    }
    Iga.prototype.throwError = function () {
      delete Hga[this.ha]
      throw this.VS
    }
    var Hga = {}
    var Lga, Mga, Nga
    _.Jga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Ya
      }
      return !1
    }
    _.ue = function (a) {
      for (; a.Ya;) a = a.Ya
      return a
    }
    Lga = function (a) {
      var b = _.Kga
      const c = []
      a = _.ue(a)
      let d
      a.vB[b] && (d = a.vB[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].vB[b] && (d = a[e].vB[b][0]), d && !_.wa(c, d) && c.push(d)
      }
      return c
    }
    _.we = function (a, b) {
      for (var c = a; c; c = c.Ya) {
        if (c.isDisposed()) throw new _.Hfa([b])
        if (c.vB[b]) return c.vB[b][0]
        if (c.Dc[b]) break
      }
      if (c = a.Bb[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.ve(a, b, c)
        return c
      }
      return null
    }
    _.ve = function (a, b, c) {
      if (a.isDisposed()) _.Kb(c)
      else {
        a.vB[b] = [c, !0]
        var d = Mga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Rc[b]
        b instanceof _.ie && _.$b(b, c.constructor)
      }
    }
    Mga = function (a, b, c) {
      const d = [], e = a.Oa[c]
      e && (_.vaa(e, function (f) {
        _.Jga(f.appContext, b) && (d.push(f.d), _.Aa(e, f))
      }),
        e.length == 0 && delete a.Oa[c])
      return d
    }
    Nga = function (a, b) {
      a.Oa && _.Pb(a.Oa, function (c, d, e) {
        _.vaa(c, function (f) {
          f.appContext == b && _.Aa(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.xe = class extends _.Mb {
      constructor() {
        super()
        this.vB = {}
        this.Rc = {}
        this.Bb = {}
        this.Oa = {}
        this.Wa = {}
        this.Dc = {}
        this.Ib = new _.ac()
        this.ze = !0
        this.Ya = null
        const a = _.ue(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.we(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Lb() {
        if (_.ue(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.ue(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.vB) {
          a = this.vB[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.vB = null
        this.ze && this.Ib.dispose()
        Nga(this, this)
        this.Oa = null
        _.Kb(this.ye)
        this.Dc = this.ye = null
        super.Lb()
      }
      zs() {
        return this.Ib
      }
    }
    _.xe.prototype.Rb = _.aa(7)
    _.xe.prototype.mb = _.aa(6)
    _.xe.prototype.wb = _.aa(5)
    _.Kga = new _.ie('n73qwf', 'n73qwf')
    _.fc.prototype.clone = function () {
      return new _.fc(this.x, this.y)
    }
    _.fc.prototype.equals = function (a) {
      return a instanceof _.fc && _.ye(this, a)
    }
    _.ye = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.k = _.fc.prototype
    _.k.ceil = function () {
      this.x = Math.ceil(this.x)
      this.y = Math.ceil(this.y)
      return this
    }
    _.k.floor = function () {
      this.x = Math.floor(this.x)
      this.y = Math.floor(this.y)
      return this
    }
    _.k.round = function () {
      this.x = Math.round(this.x)
      this.y = Math.round(this.y)
      return this
    }
    _.k.translate = function (a, b) {
      a instanceof _.fc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.k.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.ze = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.k = _.hc.prototype
    _.k.clone = function () {
      return new _.hc(this.width, this.height)
    }
    _.k.area = function () {
      return this.width * this.height
    }
    _.k.perimeter = function () {
      return (this.width + this.height) * 2
    }
    _.k.aspectRatio = function () {
      return this.width / this.height
    }
    _.k.isEmpty = function () {
      return !this.area()
    }
    _.k.ceil = function () {
      this.width = Math.ceil(this.width)
      this.height = Math.ceil(this.height)
      return this
    }
    _.k.floor = function () {
      this.width = Math.floor(this.width)
      this.height = Math.floor(this.height)
      return this
    }
    _.k.round = function () {
      this.width = Math.round(this.width)
      this.height = Math.round(this.height)
      return this
    }
    _.k.scale = function (a, b) {
      this.width *= a
      this.height *= typeof b === 'number' ? b : a
      return this
    }
    _.mc = {}
    var Oga = globalThis.trustedTypes, hca = Oga, jca
    _.jc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    mca((a) => a``) || mca((a) => a`\0`) || mca((a) => a`\n`) ||
      mca((a) => a`\u0000`)
    _.nca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Pga = _.pc('about:blank')
    _.qca = _.pc('about:invalid#zClosurez')
    var tc, oca, rca, Qga, tca
    tc = class {
      constructor(a) {
        this.Gj = a
      }
    }
    _.Ae = {
      MSd: uc('tel'),
      BMd: new tc((a) => /^callto:\+?\d*$/i.test(a)),
      oSd: new tc((a) => a.indexOf('ssh://') === 0),
      MRd: uc('rtsp'),
      HBc: uc('data'),
      xGc: uc('http'),
      yGc: uc('https'),
      EXTENSION: new tc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      gFc: uc('ftp'),
      nPc: new tc((a) => /^[^:]*([/?#]|$)/.test(a)),
      xJc: uc('mailto'),
      WPd: uc('intent'),
      oQd: uc('market'),
      ZPd: uc('itms'),
      aQd: uc('itms-appss'),
      bQd: uc('itms-services'),
      RNd: uc('fb-messenger'),
      KTd: uc('whatsapp'),
      gSd: new tc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      kSd: uc('sms'),
      BTd: uc('vnd.youtube'),
      wPd: uc('googlehome'),
      xPd: uc('googlehomesdk'),
      LINE: uc('line'),
    }
    oca = [_.Ae.HBc, _.Ae.xGc, _.Ae.yGc, _.Ae.xJc, _.Ae.gFc, _.Ae.nPc]
    rca = typeof URL === 'function'
    Qga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    tca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.pca = () => {}
    _.Ac = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Be = new _.Ac(_.mc, Oga ? Oga.emptyHTML : '')
    _.Rga = {
      hPd: 0,
      BNd: 1,
      CNd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Ec = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Rga[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.Aca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Sga = new _.Aca(_.mc, Oga ? Oga.emptyScript : '')
    _.Oca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var Gca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.ed = function (a) {
      return encodeURIComponent(String(a))
    }
    _.rda = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Tga = Math.random() * 2147483648 | 0
    _.Uga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Sca = /^[a-z][a-z\d-]*$/i,
      Tca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Wca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Xca = ['action', 'formaction', 'href']
    _.Vga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Wga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Yga
    _.Xga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Yga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Iv: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Iv: 1 }
        : { Iv: 0 }
    }
    _.Ce = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Zga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var $ga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      aha = [
        ['A', new Map([['href', { Iv: 7 }]])],
        ['AREA', new Map([['href', { Iv: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Iv: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Iv: 5 }], ['srcset', { Iv: 6 }]])],
        ['IMG', new Map([['src', { Iv: 5 }], ['srcset', { Iv: 6 }]])],
        ['VIDEO', new Map([['src', { Iv: 5 }]])],
        ['AUDIO', new Map([['src', { Iv: 5 }]])],
      ],
      bha =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      cha = [
        ['dir', {
          Iv: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Iv: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Iv: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Iv: 5 }],
        ['target', {
          Iv: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      dha = new _.Ce(new Set($ga), new Map(aha), new Set(bha), new Map(cha)),
      eha = new _.Ce(
        new Set($ga.concat(['BUTTON', 'INPUT'])),
        new Map(aha),
        new Set(bha.concat(['class', 'id', 'name'])),
        new Map(cha.concat([['style', { Iv: 1 }]])),
      ),
      fha = new _.Ce(
        new Set(
          $ga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(aha),
        new Set(
          bha.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(cha.concat([['style', { Iv: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var gha
    _.hha = function (a, b, c) {
      b = Zca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : ada(g)
          ? (g = $ca(g), g = g === null ? 2 : _.Xga(a.oa, g) ? 1 : 2)
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
        } else if (ada(d)) g = gha(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    gha = function (a, b, c) {
      const d = $ca(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Yga(a.oa, h, d), f
        a: {
          if (f = e.conditions) {
            for (const [v, z] of f) {
              f = z
              let B
              var g = (B = b.getNamedItem(v)) == null ? void 0 : B.value
              if (g && !f.has(g)) {
                f = !1
                break a
              }
            }
          }
          f = !0
        }
        if (f) {
          switch (e.Iv) {
            case 1:
              Tc(c, h, t)
              break
            case 2:
              throw Error()
            case 3:
              Tc(c, h, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), Tc(c, h, e)) : Tc(c, h, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: h, A0b: d },
                  f = _.Yca(t),
                  (e = a.ha(f, e)) && Tc(c, h, e.toString()))
                : Tc(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, A0b: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, B] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, yTa: B })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Yca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), yTa: v.yTa })
                }
                Tc(c, h, bda(f))
              } else Tc(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, A0b: d }
                f = _.Yca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.sca(e)
              e = f !== void 0 && Qga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              Tc(c, h, e)
          }
        }
      }
      return c
    }
    _.iha = class {
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
        return _.Rca(_.hha(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.cda = new _.iha(dha)
    _.jha = new _.iha(eha)
    _.kha = new _.iha(fha)
    _.lha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { Iv: 4 })
      a.ha = new _.Ce(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.De = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.Ce(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.mha = class {
      constructor() {
        this.na = !1
        this.ha = dha
      }
    }
    _.Ee = class extends _.mha {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.iha(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var nha, pha, Bha, Cha, Dha
    _.Xc = function (a) {
      return a ? new _.Fe(_.Ge(a)) : pea || (pea = new _.Fe())
    }
    _.Ie = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.Je = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.Ke = function (a, b) {
      _.Pb(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : nha.hasOwnProperty(d)
          ? a.setAttribute(nha[d], c)
          : _.ja(d, 'aria-') || _.ja(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    nha = {
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
    _.Le = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.hc(a.clientWidth, a.clientHeight)
    }
    _.Me = function (a) {
      return a ? a.defaultView : window
    }
    _.qha = function (a, b) {
      const c = b[1], d = _.oha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.Ke(d, c))
      b.length > 2 && pha(a, d, b, 2)
      return d
    }
    pha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Ca(f) || _.td(f) && f.nodeType > 0
          ? e(f)
          : _.Bd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ba(f)
              : f,
            e,
          )
      }
    }
    _.Ne = function (a) {
      return _.oha(document, a)
    }
    _.oha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.rha = function (a, b) {
      pha(_.Ge(a), a, arguments, 1)
    }
    _.Qe = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.sha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.tha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.uha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.Se = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.vha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.wha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.yha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.xha(a.firstChild, !0)
    }
    _.zha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.xha(a.nextSibling, !0)
    }
    _.Aha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.xha(a.previousSibling, !1)
    }
    _.xha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.Ue = function (a) {
      return _.td(a) && a.nodeType == 1
    }
    _.Ve = function (a) {
      return a.parentElement || null
    }
    _.We = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.Ge = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.Xe = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.Qe(a), a.appendChild(_.Ge(a).createTextNode(String(b)))
    }
    Bha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    Cha = { IMG: ' ', BR: '\n' }
    _.Iha = function (a) {
      return a.hasAttribute('tabindex') && Dha(a)
    }
    _.Ye = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.Wha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || Dha(a))
        : _.Iha(a)
    }
    Dha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.$e = function (a) {
      const b = []
      _.Xha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.Xha = function (a, b, c) {
      if (!(a.nodeName in Bha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in Cha) b.push(Cha[a.nodeName])
        else for (a = a.firstChild; a;) _.Xha(a, b, c), a = a.nextSibling
      }
    }
    _.Fe = function (a) {
      this.Tl = a || _.ha.document || document
    }
    _.k = _.Fe.prototype
    _.k.kb = _.Xc
    _.k.Vf = function () {
      return this.Tl
    }
    _.k.Xa = function (a) {
      return _.Ie(this.Tl, a)
    }
    _.k.$ = _.Fe.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.Tl).getElementsByTagName(String(a))
    }
    _.k.vG = _.aa(9)
    _.k.Vb = _.aa(11)
    _.k.Bc = _.aa(13)
    _.k.setProperties = _.Ke
    _.k.Uj = function (a) {
      return _.Le(a || this.getWindow())
    }
    _.k.Nb = function (a, b, c) {
      return _.qha(this.Tl, arguments)
    }
    _.k.createElement = function (a) {
      return _.oha(this.Tl, a)
    }
    _.k.createTextNode = function (a) {
      return this.Tl.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.Tl.defaultView
    }
    _.k.Np = _.aa(14)
    _.k.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.k.append = _.rha
    _.k.canHaveChildren = function (a) {
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
    _.k.Pk = _.Qe
    _.k.O8b = _.sha
    _.k.DDa = _.tha
    _.k.CDa = _.uha
    _.k.removeNode = _.Se
    _.k.Byb = _.vha
    _.k.getChildren = _.wha
    _.k.WBa = _.yha
    _.k.Mmb = _.zha
    _.k.X4b = _.Aha
    _.k.isElement = _.Ue
    _.k.isWindow = function (a) {
      return _.td(a) && a.window == a
    }
    _.k.Tma = _.Ve
    _.k.contains = _.We
    _.k.R4b = _.Ge
    _.k.Jl = _.Xe
    _.k.yy = _.Ye
    _.k.Qp = _.Wha
    _.k.nT = _.$e
    sd = sd || {}
    var Yha = function () {
      _.Mb.call(this)
    }
    _.zd(Yha, _.Mb)
    Yha.prototype.initialize = function () {}
    kda.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    kda.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.Lfa(function (a) {
      kda.prototype.execute = a(kda.prototype.execute)
    })
    sd.qab = kda
    _.zd(Yc, _.Mb)
    Yc.prototype.ma = null
    Yc.prototype.Ba = Yha
    Yc.prototype.ka = null
    Yc.prototype.getId = function () {
      return this.Aa
    }
    var Zha = function (a, b, c) {
        a.qa.push(new sd.qab(b, c))
      },
      $ha = function (a, b) {
        a.na.push(new sd.qab(b, void 0))
      }
    Yc.prototype.isLoaded = function () {
      return !!this.ka
    }
    Yc.prototype.onLoad = function (a) {
      var b = new this.Ba()
      b.initialize(a())
      this.ka = b
      b = (b = aia(this.oa, a())) || aia(this.qa, a())
      b || (this.na.length = 0)
      return b
    }
    Yc.prototype.onError = function (a) {
      ;(a = aia(this.na, a)) && _.ia(Error('ga`' + a))
      this.oa.length = 0
      this.qa.length = 0
    }
    var aia = function (a, b) {
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
    Yc.prototype.Lb = function () {
      Yc.kc.Lb.call(this)
      _.Kb(this.ka)
      this.ma = null
    }
    sd.pab = Yc
    var bia = {
      ERROR: 'error',
      IDLE: 'idle',
      Lua: 'active',
      pVc: 'userIdle',
      oVc: 'userActive',
    }
    _.k = lda.prototype
    _.k.Flc = function () {}
    _.k.C4a = function () {}
    _.k.KIa = function () {}
    _.k.jxa = function () {
      throw Error('ha')
    }
    _.k.IHa = function () {
      throw Error('ia')
    }
    _.k.J4b = function () {
      return this.oa
    }
    _.k.QIa = function (a) {
      this.oa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.nbc = function () {
      return !1
    }
    var cia, dia
    cia = function (a, b) {
      const c = b.styleSheets.length, d = jda(a, new _.Fe(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.ua(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    dia = function (a) {
      return _.Dd(Lga(a), (b) => b.R4b())
    }
    _.eia = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.oea('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.oa
            if (b) {
              if (b = dia(b), b.length == 0) cia(a, document)
              else for (let c of b) cia(a, c)
            } else cia(a, document)
          }
        })
      }
    }
    var fia, gia, iia
    fia = function (a) {
      throw Error('ja`' + a.ka)
    }
    gia = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.bf = function (a) {
      const b = _.af(a)
      b === null && fia(a)
      return b
    }
    _.df = function (a, b) {
      let c
      return (c = _.af(a)) != null ? c : b
    }
    _.af = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw gia(a, 'string')
    }
    _.hia = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw gia(a, 'boolean')
    }
    _.ef = function (a, b) {
      let c
      return (c = _.hia(a)) != null ? c : b
    }
    _.ff = function (a, b) {
      let c
      return (c = iia(a)) != null ? c : b
    }
    iia = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw gia(a, 'number')
    }
    _.kia = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.jia(a, b)
    }
    _.jia = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.Zc(c + e + ']', d))
    }
    _.Zc = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.bf(this) : _.df(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = iia(this)
          b === null && fia(this)
        } else b = _.ff(this, a)
        return b
      }
      toString() {
        return _.bf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.ff(this, b) : _.df(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.kia(this)
          b === null && fia(this)
          return b
        }
        b = _.kia(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && fia(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.Zc(c + d, b[d])
          return a
        }
        throw gia(this, 'object')
      }
    }
    var pda
    pda = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.lia = /#|$/
    var mia,
      yda,
      gf,
      pia,
      sia,
      qia,
      ria,
      tia,
      uia,
      via,
      wia,
      Gda,
      xia,
      nia,
      oia,
      yia,
      zia
    _.Hda = function (a, b = !0) {
      const c = mia(a), d = new nia(), e = _.ad(c)[5]
      _.Pb(oia, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && gf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      pia(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.cd(6, c)) && _.sda(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    mia = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    yda = function (a) {
      a = mia(a)
      a = _.bd(_.cd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    gf = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    pia = function (a, b) {
      a.ka = b
    }
    sia = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      qia(a)
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
          'd' in a.ha || gf(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.jf(a, 'br') != '1' && _.jf(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.jf(a, 'rb') == '1' && c('rb'),
          _.jf(a, 'zs') !== '0' && c('zs'),
          ria(a) !== '' && c('wt'),
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
    _.jf = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    qia = function (a) {
      a = _.jf(a, 'md')
      return !!a && a !== '0'
    }
    ria = function (a) {
      switch (_.jf(a, 'wt')) {
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
    tia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), gf(a, 'exm', b.join(',')))
        : gf(a, 'exm', null)
    }
    uia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), gf(a, 'excm', b.join(',')))
        : gf(a, 'excm', null)
    }
    via = function (a) {
      return (a = _.jf(a, 'm')) ? a.split(',') : []
    }
    wia = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      gf(a, 'ee', c.join(';'))
    }
    Gda = function (a) {
      var b = _.jf(a, 'ee')
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
    xia = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    nia = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + sia(this)
        const b = _.vda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new nia()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    oia = {
      LRd: 'k',
      gNd: 'ck',
      yQd: 'm',
      LNd: 'exm',
      JNd: 'excm',
      YLd: 'am',
      eMd: 'amc',
      pQd: 'mm',
      IRd: 'rt',
      OPd: 'd',
      KNd: 'ed',
      nSd: 'sv',
      kNd: 'deob',
      zMd: 'cb',
      IMd: 'ccb',
      AMd: 'cbi',
      eSd: 'rs',
      SRd: 'sdch',
      VPd: 'im',
      lNd: 'dg',
      FNd: 'br',
      ENd: 'br-d',
      GNd: 'rb',
      UTd: 'zs',
      MTd: 'wt',
      QNd: 'ee',
      mSd: 'sm',
      METADATA: 'md',
      yPd: 'gssmodulesetproto',
      yTd: 'ujg',
      xTd: 'sp',
      cSd: 'slk',
      pNd: 'dti',
      YPd: 'ic',
    }
    yia = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    zia = RegExp('^[a-zA-Z0-9-_*]+$')
    var Cda = null, Bda = new Map()
    var Eda = !1, Fda = !1
    var Aia = (a) => {
        a = a.clone()
        xia(a)
        gf(a, 'dg', null)
        gf(a, 'd', '0')
        tia(a, null)
        uia(a, null)
        return a
      },
      Bia = !0,
      Cia = (a, b, { cssRowKey: c, haa: d, U3: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!zia.test(g)) throw Error('la`' + g) }
        gf(a, 'm', b.join(','))
        e && wia(a, e)
        c && (gf(a, 'ck', c), d ? gf(a, 'rs', d) : Bia && (Bia = !1))
        if (f) {
          if (f != null && !yia.test(f)) throw Error('ma`' + f)
          gf(a, 'cb', f)
        }
        a = a.toString()
        _.ja(a, '/') && (a = _.dd(document.location.href) + a)
        return _.nc(a)
      },
      Dia = (
        a,
        b,
        { Eyb: c = [], cssRowKey: d, haa: e, U3: f, callback: g } = {},
      ) => {
        a = Aia(a)
        uia(a, c)
        return Cia(a, b, { cssRowKey: d, haa: e, U3: f, callback: g })
      },
      Eia = (
        a,
        b,
        { Fyb: c = [], Eyb: d = [], cssRowKey: e, haa: f, U3: g, callback: h } =
          {},
      ) => {
        a = Aia(a)
        gf(a, 'd', '1')
        tia(a, c)
        uia(a, d)
        return Cia(a, b, { cssRowKey: e, haa: f, U3: g, callback: h })
      }
    _.Fia = function (a) {
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
    _.Hia = function () {}
    _.zd(_.Hia, _.Jda)
    _.Hia.prototype.QX = function () {
      return new XMLHttpRequest()
    }
    _.Gia = new _.Hia()
    var Jia = function (a) {
        return Iia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      Iia = function (a) {
        const b = {}, c = b.iW ? b.iW.QX() : _.Gia.QX()
        return (new _.ne(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new kf('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.ha.clearTimeout(f)
              var g
              !(g = _.Fia(c.status)) && (g = c.status === 0) &&
                (g = _.qda(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new Kia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new kf('Network error', a, c))
          }
          if (b.headers) {
            for (let g in b.headers) {
              const h = b.headers[g]
              h != null && c.setRequestHeader(g, h)
            }
          }
          b.withCredentials && (c.withCredentials = b.withCredentials)
          b.responseType && (c.responseType = b.responseType)
          b.mimeType && c.overrideMimeType(b.mimeType)
          b.Dy > 0 && (f = _.ha.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new Lia(a, c))
          }, b.Dy))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.ha.clearTimeout(f),
              e(new kf('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.qe &&
            c.abort()
          throw d
        })
      },
      kf = function (a, b, c) {
        _.ea.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.zd(kf, _.ea)
    kf.prototype.name = 'XhrError'
    var Kia = function (a, b, c) {
      kf.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.zd(Kia, kf)
    Kia.prototype.name = 'XhrHttpError'
    var Lia = function (a, b) {
      kf.call(this, 'Request timed out', a, b)
    }
    _.zd(Lia, kf)
    Lia.prototype.name = 'XhrTimeoutError'
    var Oia, Qia, Ria, Sia, Pia, Xia, Yia, Uia, Tia, Via, Wia
    _.Mia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((z) => !_.Wb().vv(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.Wb().vv(v)
        v.isLoaded() ? t() : (v.oa.push(new sd.qab(t, void 0)), $ha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.Nia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.na[f] || (a.na[f] = !0, a.Fa.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    Oia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            yda(b) && !_.Hda(b).ka.endsWith('_/js/')
        ) {
          b = via(_.Hda(b))
          for (const c of b) a.Qa.includes(c) || a.Qa.push(c)
        }
      }
    }
    Qia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      Pia(a, b, (g, h, t = h) => {
        a.Za && f ? a.ab(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    Ria = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    Sia = function (a, b, c, { U3: d, onError: e, rqa: f, Bbd: g } = {}) {
      a.Da = c
      if (!b) throw Error('qa')
      if (a.rb) {
        for (const h of document.getElementsByTagName('style')) Oia(a, h)
        for (const h of document.getElementsByTagName('link')) Oia(a, h)
      }
      Qia(a, Ria(a, b), d, e, f, g)
    }
    Pia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          Pia(a, b, c, d)
        }),
          !0
      }
      if (!a.qa) {
        const f = []
        var e = Object.assign({}, a.na)
        Tia(
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
          h = Uia(a, g, d),
          t = _.oc(h).toString()
        for (; t.length > a.PLa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.PLa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = Uia(a, g, d),
              t = _.oc(h).toString()
          } else {return a.qa
              ? (a.qa = !1,
                a.ma = Via(a).then((v) => {
                  Wia(a, v, d)
                }),
                Pia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.qa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    Xia = function (a) {
      a.Sa || (a.Sa = !0, a.Fa.sort())
      return a.Fa
    }
    Yia = function (a) {
      a = a.Qa
      a.sort()
      return a
    }
    Uia = function (a, b, c) {
      return a.qa
        ? Eia(a.oa, b, {
          cssRowKey: a.Ya,
          haa: a.Wa,
          U3: c,
          Fyb: Xia(a),
          Eyb: Yia(a),
        })
        : Dia(a.oa, b, { cssRowKey: a.Ya, haa: a.Wa, Fyb: Xia(a), Eyb: Yia(a) })
    }
    _.lf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.na[e] && (delete a.na[e], _.Aa(a.Fa, e), c.push(e))
      }
    }
    _.Zia = function (a, b, c, d, e, f, g = d) {
      a.Ba = c
      a.Ea.insertBefore(c, a.Ea.firstChild)
      _.Mia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        _.lf(a, h)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    Tia = function (a, b, c, d, e, f = {}) {
      const g = _.Wb()
      for (let h of b) {
        b = g.vv(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        Tia(a, t, c, d, e, f)
        c(b)
      }
    }
    Via = function (a) {
      a = a.oa.clone()
      xia(a)
      gf(a, 'dg', null)
      gf(a, 'md', '1')
      return Jia(a.toString())
    }
    Wia = function (a, b, c) {
      _.Wb().KIa((b || {}).moduleGraph)
      Tia(a, Xia(a), (d) => {
        _.Nia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.Nda = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.lb = a
        this.oa = _.Hda(_.oc(a).toString(), !0)
        this.Ya = b
        this.Wa = c
        this.qa = d
        this.na = {}
        this.Da = {}
        this.Fa = []
        this.Sa = !0
        this.Qa = (a = _.jf(this.oa, 'excm')) ? a.split(',') : []
        this.rb = e
        this.QLa = !1
        this.jza = 'anonymous'
        this.PLa = 4043
        this.Ea = document.head || document.documentElement
        this.ma = this.Ba = null
        this.mb = !0
        _.Ida()
        this.logger = null
        _.Nia(this, via(this.oa))
        this.fetchPriority = void 0
        this.Za = !1
        this.Oa()
      }
      ab() {
        _.ld(function* () {
          throw Error('ra')
        })
      }
      Oa() {}
      load(a, b, c, d, e = b) {
        _.oc(a)
        var f = this.QLa, g = this.jza, h = this.fetchPriority
        const t = _.Ne('SCRIPT')
        _.Kc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.Nia(this, b)
        _.Zia(this, a, t, b, c, d, e)
      }
    }
    var Kda = new Uint8Array(123)
    var $ia = []
    var bja = function (a) {
        switch (a.type) {
          case aja.Type.hPb:
            return 'Unauthorized'
          case aja.Type.V8a:
            return 'Consecutive load failures'
          case aja.Type.TIMEOUT:
            return 'Timed out'
          case aja.Type.QMb:
            return 'Out of date module id'
          case aja.Type.P9a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      aja = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.Fyb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${bja(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    sd.QB = aja
    sd.QB.Type = { hPb: 0, V8a: 1, TIMEOUT: 2, QMb: 3, P9a: 4 }
    var mf = function () {
      lda.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Fa = []
      this.ma = {}
      this.ab = {}
      this.Aa = this.Wa = new sd.pab([], '')
      this.rb = null
      this.Qa = new _.ec()
      this.fk = null
      this.wb =
        this.Ib =
        this.Bb =
        this.mb =
        this.lb =
          !1
    }
    _.zd(mf, lda)
    var cja = function (a, b) {
      _.ea.call(this, `Error loading ${a}: ${b}`)
    }
    _.zd(cja, _.ea)
    mf.prototype.Flc = function (a) {
      this.lb = a
    }
    mf.prototype.C4a = function (a) {
      this.mb = a
    }
    mf.prototype.KIa = function (a, b) {
      if (!(this instanceof mf)) this.KIa(a, b)
      else if (typeof a === 'string') {
        if (a.startsWith('d$')) {
          a = a.substring(2)
          for (var c = [], d = 0, e = a.indexOf('/'), f = 0, g = !1, h = 0;;) {
            var t = g ? a.substring(f) : a.substring(f, e)
            if (t.length === 0) d++, f = 'sy' + d.toString(36), t = []
            else {
              var v = t.indexOf(':')
              if (v < 0) f = t, t = []
              else if (v === t.length - 1) {
                f = t.substring(0, v), t = Array(c[h - 1])
              } else {
                f = t.substring(0, v)
                t = t.substring(v + 1).split(',')
                v = h
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
            dja(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) eja(this, a)
        else {
          a = a.split('/')
          c = []
          for (d = 0; d < a.length; d++) {
            h = a[d].split(':')
            e = h[0]
            g = []
            if (h[1]) {
              for (g = h[1].split(','), h = 0; h < g.length; h++) {
                g[h] = c[parseInt(g[h], 36)]
              }
            }
            c.push(e)
            dja(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Da(this.na, b), this.rb = _.uaa(b))
          : this.Qa.ka || this.Qa.callback()
        Object.freeze(this.Ya)
        fja(this)
      }
    }
    var eja = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        Kda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      Mda(b)
      const d = Mda(b)
      var e = Mda(b) + 1
      const f = Array(d), g = Array(d), h = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, B = b.buf.indexOf('|', b.pos)
      b.pos = B + 1
      for (B = 0; B < d; B++) {
        var I = Mda(b), M = I & 2, S = I & 1
        I >>>= 2
        S
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (S = z, z += I, I = c.substring(S, z))
        f[B] = I
        M && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        z = Lda(b), h[t] = z & 7, h[t + 1] = z >>> 3 & 7
      }
      c && (c = Lda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Mda(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        z = t === 0 ? $ia : Array(t)
        g[c] = z
        B = v
        for (M = 0; M < t; M++) B -= Mda(b), z[M] = e[B]
        e[v] === f[c] && v++
      }
      const { ids: ba, dependencies: fa } = { ids: f, dependencies: g }
      for (b = 0; b < ba.length; b++) dja(a, ba[b], fa[b])
      a.Ya = ba
    }
    _.k = mf.prototype
    _.k.vv = function (a) {
      return this.ka[a]
    }
    _.k.jxa = function (a, b) {
      const c = this.vv(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.IHa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.QIa = function (a) {
      mf.kc.QIa.call(this, a)
      fja(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.nbc = function () {
      return this.Fa.length > 0
    }
    var nf = function (a) {
        var b = a.Bb
        const c = a.isActive()
        c != b && (gja(a, c ? bia.Lua : bia.IDLE), a.Bb = c)
        b = a.nbc()
        b != a.Ib && (gja(a, b ? bia.oVc : bia.pVc), a.Ib = b)
      },
      dja = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new sd.pab(c, b)
      },
      ija = function (a, b, c) {
        const d = []
        _.Fa(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.vv(g)
          if (!h) throw Error('sa`' + g)
          const t = new _.ec()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.oa)
            : (hja(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.mb
            ? _.te(a.Qa, (0, _.bc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), nf(a)))
        return e
      },
      hja = function (a, b, c, d, e) {
        Zha(c, e.callback, e)
        $ha(c, function (f) {
          e.ha(new cja(b, f))
        })
        a.Oa(b) ? d && (jja(a, b), nf(a)) : d && jja(a, b)
      }
    mf.prototype.Sa = function (a, b = 0, c) {
      const d = kja(this, a)
      this.mb ? _.Da(this.na, d) : this.na = d
      this.Ba = this.lb ? a : _.Ba(d)
      nf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.qa
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.mb) throw Error('ua')
        Sia(a, _.Ba(d), this.ka, {
          U3: this.ma,
          onError: (e, f, g) =>
            lja(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          sqa: (0, _.bc)(this.Jb, this),
          Bbd: !!c,
        })
      }
    }
    var kja = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.ha.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(mja(a, b[d]))
        _.Fa(c)
        return !a.lb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      mja = function (a, b) {
        const c = _.Xba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.vv(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.vv(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Fa(d)
        return d
      },
      fja = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.bc)(a.J4b, a))
          b && b.length &&
            nja(a, new sd.QB(sd.QB.Type.P9a, void 0, void 0, void 0, b[0]))
          nf(a)
        }
      }
    mf.prototype.Ea = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.vv(c)
            d && !d.isLoaded() && (this.IHa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.bc)(this.J4b, this))) && b.length &&
            nja(this, new sd.QB(sd.QB.Type.P9a, void 0, void 0, void 0, b[0])),
            _.Aa(this.Fa, a),
            _.Aa(this.na, a),
            this.na.length === 0 && oja(this),
            this.rb && a == this.rb && (this.Qa.ka || this.Qa.callback()),
            nf(this),
            this.Aa = null)
      }
    }
    mf.prototype.Oa = function (a) {
      if (_.wa(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.wa(this.ha[b], a)) return !0
      }
      return !1
    }
    mf.prototype.load = function (a, b) {
      return ija(this, [a], b)[a]
    }
    mf.prototype.Da = function (a) {
      return ija(this, a)
    }
    var jja = function (a, b) {
      _.wa(a.Fa, b) || a.Fa.push(b)
    }
    mf.prototype.tb = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Ea(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && pja(this, this.ka[a].ha || [], (b) => {
        b.ka = new Yha()
        _.Aa(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.vv(a)
    }
    var lja = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ba(c)
      a.Ba = b
      c.forEach(_.wd(_.Aa, a.Za), a)
      if (d == 401) nja(a, new sd.QB(sd.QB.Type.hPb, d)), a.ha.length = 0
      else if (d == 410) qja(a, new sd.QB(sd.QB.Type.QMb, d)), oja(a)
      else if (h >= 3) qja(a, new sd.QB(sd.QB.Type.V8a, d, f, e)), oja(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.ha.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    mf.prototype.Jb = function () {
      qja(this, new sd.QB(sd.QB.Type.TIMEOUT))
      oja(this)
    }
    var qja = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : nja(a, b)
      },
      nja = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = mja(this, g)
            return _.Ed(c, function (t) {
              return _.wa(h, t)
            })
          }, a)
          _.Da(d, f)
        }
        for (e = 0; e < c.length; e++) _.ya(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Aa(a.ha[f], d[e])
          _.Aa(a.Fa, d[e])
        }
        if (e = a.ab[bia.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(bia.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        nf(a)
      },
      oja = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.vv(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        nf(a)
      },
      gja = function (a, b) {
        a = a.ab[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      pja = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.vv(f),
            !e[f] && d(b) && (e[f] = !0, pja(a, b.ha || [], c, d, e), c(b))
        }
      }
    mf.prototype.dispose = function () {
      _.Lb(_.Rb(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Fa = []
      this.ha = []
      this.ab = {}
      this.wb = !0
    }
    mf.prototype.isDisposed = function () {
      return this.wb
    }
    _.$ba = function () {
      return new mf()
    }
    var rja, sja, vja, wja, xja, yja, tja, uja
    rja = [5E3, 2E4]
    sja = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Ea()
    }
    vja = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.vv(c).isLoaded())
      b.length > 0 && (tja(a, ...b), a.na.push(b), uja(a))
    }
    wja = function (a, b) {
      return new _.ne((c, d) => {
        const e = a.vv(b)
        e.isLoaded() ? c(a.oa) : (Zha(e, () => {
          c(a.oa)
        }),
          $ha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof sd.QB && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    xja = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.vv(f),
          !e[f] && d(b) && (e[f] = !0, xja(a, b.ha || [], c, d, e), c(b))
      }
    }
    yja = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    tja = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    uja = function (a) {
      for (; a.Aa < a.Fa && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.vv(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            uja(a)
            c = () => {}
          }
          _.nga(b.map((f) => wja(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.qa.mb) throw Error('ua')
            Sia(a.qa, b, a.ma, {
              U3: a.ha,
              onError: (f, g) => {
                const h = rja[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (yja(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.vv(t)
                      if (!t.isLoaded()) {
                        t.onError(new sd.QB(sd.QB.Type.V8a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.zja = class extends lda {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Fa = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.fk = null
        this.ka = this.vv('{base}')
      }
      KIa() {
        sja(this)
      }
      QIa(a) {
        super.QIa(a)
        sja(this)
      }
      vv(a) {
        let b = this.ma[a]
        b || (b = new sd.pab([], a), this.ma[a] = b)
        return b
      }
      jxa(a, b) {
        this.vv(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      IHa(a, b) {
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
        vja(this, [a])
        return wja(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = wja(this, d), c.push(d))
        })
        vja(this, c)
        return b
      }
      tb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Ea()
        let c, d
        xja(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new Yha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.vv(a)
      }
      Ea() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.vv(c).isLoaded() || (this.IHa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.oa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          yja(this, a)
        }
      }
      C4a(a) {
        this.Fa = a ? Infinity : 1
      }
    }
    var Aja = new _.zja()
    Aja.C4a(!0)
    Aja.QIa(new _.xe())
    _.aca(Aja)
    ;(new _.eia(Aja)).init()
    _.Oda()
    var Bja = _.ef(_.$c('hxvedd'), !1), Cja = _.ef(_.$c('dLc0B'), !1)
    if (_.ef(_.$c('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (Cja ? 2 : Bja ? 1 : 0) {
      case 2:
        ;(0, _.hd)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.hd)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.hd)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.Vb) {
        if (!_.$ba) return
        _.aca(_.$ba())
      }
      _.Vb.KIa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
