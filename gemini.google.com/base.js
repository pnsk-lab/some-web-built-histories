// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.MCY_3qhlFr4.2018.O/am=IxwExICA9m8o4hMABAC_AQY/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk1w-1iF8Ee4GKI7HH6U3EEZnM99Tw/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.gqyTk43N3o0.libheifWasm.O%3A%3BBardChatUi.W10YmzJiu-Q.loadWasmSipCoca.O%3A%3B
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
      ta,
      vaa,
      waa,
      Baa,
      Oa,
      Jaa,
      Naa,
      Vaa,
      dba,
      eba,
      fba,
      iba,
      lba,
      mba,
      rba,
      wba,
      uba,
      vba,
      Vba,
      Xba,
      Zba,
      aca,
      Ec,
      hca,
      jca,
      nca,
      Hca,
      Ica,
      Jca,
      ld,
      Kca,
      Sca,
      Tca,
      qd,
      Uca,
      Vca,
      fda,
      hda,
      ida,
      lda,
      sda,
      Bd,
      aaa,
      Ed,
      uda,
      vda,
      wda,
      Fd,
      xda,
      zda,
      Gd,
      yda,
      Ada,
      Bda,
      Cda,
      Eda,
      Dda,
      Fda
    _.ba = function (a) {
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
      _.da.call(this, c + a[d])
    }
    _.ha = function (a) {
      _.fa.setTimeout(() => {
        throw a
      }, 0)
    }
    _.ia = function (a, b) {
      return a.lastIndexOf(b, 0) == 0
    }
    _.ja = function (a) {
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
      var a = _.fa.navigator
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
    _.pa = function () {
      return _.faa ? !!_.na && _.na.brands.length > 0 : !1
    }
    _.haa = function () {
      return _.pa() ? !1 : _.oa('Opera')
    }
    _.iaa = function () {
      return _.pa() ? !1 : _.oa('Trident') || _.oa('MSIE')
    }
    _.jaa = function () {
      return _.pa() ? _.gaa('Microsoft Edge') : _.oa('Edg/')
    }
    _.qa = function () {
      return _.oa('Firefox') || _.oa('FxiOS')
    }
    _.sa = function () {
      return _.oa('Safari') &&
        !(_.ra() || (_.pa() ? 0 : _.oa('Coast')) || _.haa() ||
          (_.pa() ? 0 : _.oa('Edge')) || _.jaa() ||
          (_.pa() ? _.gaa('Opera') : _.oa('OPR')) || _.qa() || _.oa('Silk') ||
          _.oa('Android'))
    }
    _.ra = function () {
      return _.pa()
        ? _.gaa('Chromium')
        : (_.oa('Chrome') || _.oa('CriOS')) && !(_.pa() ? 0 : _.oa('Edge')) ||
          _.oa('Silk')
    }
    _.kaa = function () {
      return _.oa('Android') && !(_.ra() || _.qa() || _.haa() || _.oa('Silk'))
    }
    ta = function (a = !1) {
      return a || _.faa ? !!_.na && !!_.na.platform : !1
    }
    _.laa = function () {
      return ta() ? _.na.platform === 'Android' : _.oa('Android')
    }
    _.maa = function () {
      return _.oa('iPhone') && !_.oa('iPod') && !_.oa('iPad')
    }
    _.ua = function () {
      return _.maa() || _.oa('iPad') || _.oa('iPod')
    }
    _.va = function () {
      return ta() ? _.na.platform === 'macOS' : _.oa('Macintosh')
    }
    _.naa = function () {
      return ta() ? _.na.platform === 'Linux' : _.oa('Linux')
    }
    _.oaa = function () {
      return ta() ? _.na.platform === 'Windows' : _.oa('Windows')
    }
    _.paa = function () {
      return ta() ? _.na.platform === 'Chrome OS' : _.oa('CrOS')
    }
    _.qaa = function () {
      var a = _.ma(), b = ''
      _.oaa()
        ? (b = /Windows (?:NT|Phone) ([0-9.]+)/,
          b = (a = b.exec(a)) ? a[1] : '0.0')
        : _.ua()
        ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
          b = (a = b.exec(a)) && a[1].replace(/_/g, '.'))
        : _.va()
        ? (b = /Mac OS X ([0-9_.]+)/,
          b = (a = b.exec(a)) ? a[1].replace(/_/g, '.') : '10')
        : _.caa('KaiOS')
        ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1])
        : _.laa()
        ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1])
        : _.paa() &&
          (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            b = (a = b.exec(a)) && a[1])
      return b || ''
    }
    _.raa = function (a) {
      return a[a.length - 1]
    }
    _.saa = function (a, b, c) {
      var d = a.length
      const e = typeof a === 'string' ? a.split('') : a
      for (--d; d >= 0; --d) d in e && b.call(c, e[d], d, a)
    }
    _.xa = function (a, b, c) {
      b = _.taa(a, b, c)
      return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b]
    }
    _.taa = function (a, b, c) {
      const d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (let f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f
      return -1
    }
    _.za = function (a, b) {
      return _.ya(a, b) >= 0
    }
    _.Aa = function (a, b) {
      _.za(a, b) || a.push(b)
    }
    _.Ca = function (a, b) {
      b = _.ya(a, b)
      let c
      ;(c = b >= 0) && _.Ba(a, b)
      return c
    }
    _.Ba = function (a, b) {
      Array.prototype.splice.call(a, b, 1)
    }
    _.Ea = function (a) {
      const b = a.length
      if (b > 0) {
        const c = Array(b)
        for (let d = 0; d < b; d++) c[d] = a[d]
        return c
      }
      return []
    }
    _.Ha = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c]
        if (_.Ga(d)) {
          const e = a.length || 0, f = d.length || 0
          a.length = e + f
          for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
      }
    }
    _.uaa = function (a, b, c) {
      return arguments.length <= 2
        ? Array.prototype.slice.call(a, b)
        : Array.prototype.slice.call(a, b, c)
    }
    _.Ja = function (a, b, c) {
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
    _.La = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    vaa = function () {
      return _.maa() || _.oa('iPod')
    }
    waa = function () {
      return _.sa() && !_.ua()
    }
    _.zaa = function () {
      if (!_.xaa) {
        _.xaa = {}
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            .split(''),
          b = ['+/=', '+/', '-_=', '-_.', '-_']
        for (let c = 0; c < 5; c++) {
          const d = a.concat(b[c].split(''))
          _.yaa[c] = d
          for (let e = 0; e < d.length; e++) {
            const f = d[e]
            _.xaa[f] === void 0 && (_.xaa[f] = e)
          }
        }
      }
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
    _.Ma = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Na = function () {
      return typeof BigInt === 'function'
    }
    Oa = function (a, b = !1) {
      return b && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
    }
    _.Ra = function (a, b) {
      a[_.Qa] |= b
    }
    _.Sa = function (a) {
      _.Ra(a, 34)
      return a
    }
    _.Eaa = function (a) {
      _.Ra(a, 8192)
      return a
    }
    _.Faa = function (a) {
      _.Ra(a, 32)
      return a
    }
    _.Wa = function (a) {
      return a != null && a[_.Ta] === _.Ua
    }
    _.Za = function (a, b) {
      return b === void 0
        ? a.Eb !== _.Xa && !!(2 & (a.Yg[_.Qa] | 0))
        : !!(2 & b) && a.Eb !== _.Xa
    }
    _.Gaa = function (a, b) {
      a.Eb = b ? _.Xa : void 0
    }
    _.Haa = function (a) {
      return a
    }
    _.$a = function (a) {
      a.ERd = !0
      return a
    }
    _.db = function (a) {
      var b = a
      if ((0, _.ab)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.bb)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.cb
        ? BigInt(a)
        : a = (0, _.Iaa)(a)
          ? a ? '1' : '0'
          : (0, _.ab)(a)
          ? a.trim() || '0'
          : String(a)
    }
    Jaa = function (a, b) {
      if (a.length > b.length) return !1
      if (a.length < b.length || a === b) return !0
      for (let c = 0; c < a.length; c++) {
        const d = a[c], e = b[c]
        if (d > e) return !1
        if (d < e) return !0
      }
    }
    _.Kaa = function (a) {
      const b = a >>> 0
      _.eb = b
      _.hb = (a - b) / 4294967296 >>> 0
    }
    _.ib = function (a) {
      if (a < 0) {
        _.Kaa(-a)
        const [b, c] = _.Laa(_.eb, _.hb)
        _.eb = b >>> 0
        _.hb = c >>> 0
      } else _.Kaa(a)
    }
    _.Maa = function (a, b) {
      const c = b * 4294967296 + (a >>> 0)
      return Number.isSafeInteger(c) ? c : _.jb(a, b)
    }
    _.jb = function (a, b) {
      b >>>= 0
      a >>>= 0
      if (b <= 2097151) { var c = '' + (4294967296 * b + a) }
      else {_.Na()
          ? c = '' + (BigInt(b) << BigInt(32) | BigInt(a))
          : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7),
            c = b + Naa(c) + Naa(a))}
      return c
    }
    Naa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Oaa = function (a) {
      if (a.length < 16) _.ib(Number(a))
      else if (_.Na()) {
        a = BigInt(a),
          _.eb = Number(a & BigInt(4294967295)) >>> 0,
          _.hb = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.hb = _.eb = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.hb *= 1E6
          _.eb = _.eb * 1E6 + f
          _.eb >= 4294967296 &&
            (_.hb += Math.trunc(_.eb / 4294967296), _.hb >>>= 0, _.eb >>>= 0)
        }
        if (b) {
          const [d, e] = _.Laa(_.eb, _.hb)
          _.eb = d
          _.hb = e
        }
      }
    }
    _.Laa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Paa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Qaa = function () {
      const a = Error()
      _.Paa(a, 'severity', 'incident')
      _.ha(a)
    }
    _.kb = function (a) {
      a = Error(a)
      _.Paa(a, 'severity', 'warning')
      return a
    }
    _.lb = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Raa) != null ? c : Raa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Qaa())
      }
    }
    _.mb = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Saa = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.nb(a) + '`' + a)
      return a
    }
    _.Taa = function (a) {
      if (a == null || typeof a === 'boolean') return a
      if (typeof a === 'number') return !!a
    }
    _.pb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.ob)(a)
        case 'string':
          return Uaa.test(a)
        default:
          return !1
      }
    }
    _.qb = function (a) {
      if (typeof a !== 'number') throw _.kb('int32')
      if (!(0, _.ob)(a)) throw _.kb('int32')
      return a | 0
    }
    _.rb = function (a) {
      if (a == null) return a
      if (typeof a === 'string' && a) a = +a
      else if (typeof a !== 'number') return
      return (0, _.ob)(a) ? a | 0 : void 0
    }
    Vaa = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Oaa(a)
      return _.jb(_.eb, _.hb)
    }
    _.Waa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) || (_.ib(a), a = _.Maa(_.eb, _.hb))
      return a
    }
    _.Xaa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) ? a = String(a) : (_.ib(a), a = _.jb(_.eb, _.hb))
      return a
    }
    _.Yaa = function (a) {
      return (0, _.tb)(a) ? _.db(_.Waa(a)) : _.db(_.Xaa(a))
    }
    _.Zaa = function (a) {
      var b = (0, _.sb)(Number(a))
      if ((0, _.tb)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return Vaa(a)
    }
    _.$aa = function (a) {
      var b = (0, _.sb)(Number(a))
      if ((0, _.tb)(b) && b >= 0) return _.db(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Na() ? _.db((0, _.ub)(64, BigInt(a))) : _.db(Vaa(a))
    }
    _.aba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.db((0, _.ub)(64, a))
      if (_.pb(a)) return b === 'string' ? _.$aa(a) : _.Yaa(a)
    }
    _.vb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.wb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.cba = function (a, b, c, d) {
      if (_.Wa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.xb] || (b[_.xb] = _.bba(b)) : new b()
          : void 0
      }
      c = a[_.Qa] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Qa] = d)
      return new b(a)
    }
    _.bba = function (a) {
      a = new a()
      _.Sa(a.Yg)
      return a
    }
    dba = function (a) {
      return a
    }
    eba = function (a, b, c, d, e, f) {
      a = _.cba(a, d, c, f)
      e && (a = _.yb(a))
      return a
    }
    fba = function (a) {
      return [a, this.get(a)]
    }
    _.gba = function (a) {
      const b = _.zb(_.Bb)
      return b ? a[b] : void 0
    }
    iba = function (a, b) {
      b < 100 || _.lb(hba, 1)
    }
    _.Db = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.zb(_.Bb), g
      !e && f && (g = a[f]) && g.tSa(iba)
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
        g = ((I = jba) != null ? I : _.Haa)(g - B, B, a, t, void 0) + B
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let S = a[I]
        if (S != null && (S = c(S, d)) != null) {
          if (z && I >= g) {
            const Z = I - B
            var N = void 0
            ;((N = b) != null ? N : b = {})[Z] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          N = t[S]
          if (N == null || (N = c(N, d)) == null) continue
          h = +S
          let Z
          if (z && !Number.isNaN(h) && (Z = h + B) < g) f[Z] = N
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[S] = N
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.zb(_.Bb) && (a = _.gba(a)) && 'function' == typeof _.kba &&
        a instanceof _.kba && (f[_.Bb] = a.ha())
      return f
    }
    lba = function (a) {
      a[0] = _.Eb(a[0])
      a[1] = _.Eb(a[1])
      return a
    }
    _.Eb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.Fb)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Qa] | 0
            return a.length === 0 && b & 1 ? void 0 : _.Db(a, b, _.Eb)
          }
          if (_.Wa(a)) return mba(a)
          if (a instanceof _.Gb) return _.Hb(a)
          if (a instanceof _.Ib) {
            return a = a.size !== 0 ? a.X3a(lba) : void 0, a
          }
          return
      }
      return a
    }
    _.pba = function (a, b) {
      if (b) {
        jba = b == null || b === _.Haa || b[nba] !== oba ? _.Haa : b
        try {
          return mba(a)
        } finally {
          jba = void 0
        }
      }
      return mba(a)
    }
    mba = function (a) {
      a = a.Yg
      return _.Db(a, a[_.Qa] | 0, _.Eb)
    }
    _.sba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.Qa] | 0
        if (qba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && rba()
        if (e & 256) throw Error('G')
        if (e & 64) return (e | d) !== e && (a[_.Qa] = e | d), a
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
      a[_.Qa] = e | 64 | d
      return a
    }
    rba = function () {
      if (qba) throw Error('I')
      _.lb(tba, 5)
    }
    wba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Qa] | 0
        return a.length === 0 && c & 1 ? void 0 : uba(a, c, b)
      }
      if (_.Wa(a)) return vba(a)
      if (a instanceof _.Ib) {
        b = a.n0
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.X3a())
        if (a.h7) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Wa(e)
              ? e = vba(e)
              : Array.isArray(e)
              ? e = uba(e, e[_.Qa] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if (a instanceof _.Gb) return a
    }
    uba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.Jb(a, b, !1, c && !(b & 16))
        : (_.Ra(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.xba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Gaa(a, !0)
      a.WYa = _.Xa
      return a
    }
    vba = function (a) {
      const b = a.Yg, c = b[_.Qa] | 0
      return _.Za(a, c) ? a : _.yba(a, b, c) ? _.xba(a, b) : _.Jb(b, c)
    }
    _.Jb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Db(a, b, wba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.yb = function (a) {
      const b = a.Yg, c = b[_.Qa] | 0
      return _.Za(a, c)
        ? _.yba(a, b, c) ? _.xba(a, b, !0) : new a.constructor(_.Jb(b, c, !1))
        : a
    }
    _.Kb = function (a) {
      if (a.Eb !== _.Xa) return !1
      var b = a.Yg
      b = _.Jb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Yg = b
      _.Gaa(a, !1)
      a.WYa = void 0
      return !0
    }
    _.Lb = function (a) {
      if (!_.Kb(a) && _.Za(a, a.Yg[_.Qa] | 0)) throw Error()
    }
    _.Mb = function (a, b) {
      b === void 0 && (b = a[_.Qa] | 0)
      b & 32 && !(b & 4096) && (a[_.Qa] = b | 4096)
    }
    _.yba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Qa] = c | 2, _.Gaa(a, !0), !0)
        : !1
    }
    _.Nb = function (a, b, c, d, e) {
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
        g = ((h = b) != null ? h : b = a[_.Qa] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.zba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Ob(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Qa] = b),
            Object.freeze(a))
        : (g === 2 && _.Ob(b) &&
          (a = [...a], v = 0, b = _.Pb(b, d), d = _.Nb(c, d, e, a, f)),
          _.Ob(b) || (t || (b |= 16), b !== v && (a[_.Qa] = b)))
      2 & b || !(4096 & b || 16 & b) || _.Mb(c, d)
      return a
    }
    _.Aba = function (a, b, c) {
      a = _.Rb(a, b, c)
      return Array.isArray(a) ? a : _.Sb
    }
    _.Bba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Ob = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Tb = function (a, b, c, d, e) {
      _.Lb(a)
      const f = a.Yg
      _.Nb(
        f,
        f[_.Qa] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Dba = function (a) {
      let b
      return (b = a[Cba]) != null ? b : a[Cba] = new Map()
    }
    _.Eba = function (a, b, c, d, e) {
      let f = a.get(d)
      if (f != null) return f
      f = 0
      for (let g = 0; g < d.length; g++) {
        const h = d[g]
        _.Rb(b, h, e) != null &&
          (f !== 0 && (c = _.Nb(b, c, f, void 0, e)), f = h)
      }
      a.set(d, f)
      return f
    }
    _.Fba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.Za(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.Kb(a) && (b = a.Yg, c = b[_.Qa] | 0)
      a = _.Aba(b, e, g)
      var z = a === _.Sb ? 7 : a[_.Qa] | 0, B = _.Bba(z, c)
      if (t = !(4 & B)) {
        var I = a, N = c
        const S = !!(2 & B)
        S && (N |= 2)
        let Z = !S, ea = !0, ka = 0, Fa = 0
        for (; ka < I.length; ka++) {
          const Ia = _.cba(I[ka], d, !1, N)
          if (Ia instanceof d) {
            if (!S) {
              const Va = _.Za(Ia)
              Z && (Z = !Va)
              ea && (ea = Va)
            }
            I[Fa++] = Ia
          }
        }
        Fa < ka && (I.length = Fa)
        B |= 4
        B = ea ? B & -4097 : B | 4096
        B = Z ? B | 8 : B & -9
      }
      B !== z && (a[_.Qa] = B, 2 & B && Object.freeze(a))
      if (
        v && !(8 & B || !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & B || !(16 & B) && 32 & c)))
      ) {
        _.Ob(B) && (a = [...a], B = _.Pb(B, c), c = _.Nb(b, c, e, a, g))
        d = a
        v = B
        for (z = 0; z < d.length; z++) {
          I = d[z], B = _.yb(I), I !== B && (d[z] = B)
        }
        v |= 8
        B = v = d.length ? v | 4096 : v & -4097
        a[_.Qa] = B
      }
      return a = _.zba(a, B, b, c, e, g, f, t, h)
    }
    _.Pb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Gba = function (a, b) {
      return _.Ub(b, `[${a.substring(4)}`)
    }
    _.Vb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Xb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Ga(d) ? _.Xb.apply(null, d) : _.Vb(d)
      }
    }
    _.Yb = function () {
      this.xR = this.xR
      this.Cca = this.Cca
    }
    _.$b = function (a, b) {
      _.Zb.call(this, a ? a.type : '')
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
      this.hi = null
      a && this.init(a, b)
    }
    _.Iba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Hba
      this.removed = this.uia = !1
    }
    _.ac = function (a, b, c) {
      for (const d in a) b.call(c, a[d], d, a)
    }
    _.Jba = function (a, b, c) {
      const d = {}
      for (const e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Kba = function (a, b, c) {
      for (const d in a) if (b.call(c, a[d], d, a)) return !0
      return !1
    }
    _.cc = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.dc = function (a) {
      for (const b in a) return !1
      return !0
    }
    _.ec = function (a, b) {
      let c, d
      for (let e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (let f = 0; f < Lba.length; f++) {
          c = Lba[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      }
    }
    _.Mba = function (a) {
      const b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Mba.apply(null, arguments[0])
      }
      const c = {}
      for (let d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
    _.hc = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Oba = function (a) {
      if (_.ic) a(_.ic)
      else {
        let b
        ;((b = Nba) != null ? b : Nba = []).push(a)
      }
    }
    _.lc = function () {
      !_.ic && _.jc && _.Pba(_.jc())
      return _.ic
    }
    _.Pba = function (a) {
      _.ic = a
      let b
      ;(b = Nba) == null || b.forEach(_.Oba)
      Nba = void 0
    }
    _.mc = function (a) {
      _.ic && _.ic.rb(a)
    }
    _.nc = function () {
      _.ic && _.ic.Ea()
    }
    _.oc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Qba] = a
    }
    _.pc = function () {
      _.Yb.call(this)
      this.RR = new _.hc(this)
      this.mUc = this
      this.Wsb = null
    }
    _.rc = function (a, b) {
      let c = a
      b && (c = (0, _.qc)(a, b))
      c = _.rc.Pqc(c)
      _.rc.PPc
        ? setTimeout(c, 0)
        : (c = _.rc.Kod(c), _.rc.eac || (_.rc.eac = _.rc.E7c()), _.rc.eac(c))
    }
    Vba = function () {
      let a
      for (; a = Rba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ha(b)
        }
        Sba(Tba, a)
      }
      Uba = !1
    }
    _.sc = function (a, b) {
      this.Ba = []
      this.nb = a
      this.Wa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.lb = this.Ea = !1
      this.Da = 0
      this.na = null
      this.Aa = 0
    }
    _.tc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.uc = function (a, b) {
      this.width = a
      this.height = b
    }
    Xba = function () {
      let a = null
      if (!Wba) return a
      try {
        const b = (c) => c
        a = Wba.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    Zba = function () {
      Yba === void 0 && (Yba = Xba())
      return Yba
    }
    _.yc = function (a) {
      const b = Zba()
      a = b ? b.createScriptURL(a) : a
      return new _.vc(_.wc, a)
    }
    _.$ba = function (a) {
      return a instanceof _.vc
    }
    _.zc = function (a) {
      if (_.$ba(a)) return a.ha
      throw Error('$')
    }
    aca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.Ac = function (a) {
      return new _.bca(_.wc, a)
    }
    _.Bc = function (a) {
      return a instanceof _.bca
    }
    _.Cc = function (a) {
      if (_.Bc(a)) return a.ha
      throw Error('$')
    }
    Ec = function (a) {
      return new Dc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Fc = function (a, b = cca) {
      if (_.Bc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Dc && d.Jm(a)) return _.Ac(a)
      }
    }
    _.Hc = function (a, b = cca) {
      b = _.Fc(a, b)
      b === void 0 && _.dca(a.toString())
      return b || _.Gc
    }
    _.Ic = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.Ac(URL.createObjectURL(a))
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
      return _.Ac(URL.createObjectURL(a))
    }
    _.fca = function (a) {
      if (!eca) {
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
    hca = function (a) {
      const b = !gca.test(a)
      b && _.dca(a)
      if (!b) return a
    }
    _.Jc = function (a) {
      return a instanceof _.bca ? _.Cc(a) : hca(a)
    }
    _.Lc = function (a, b) {
      b = _.Jc(b)
      b !== void 0 && (a.href = b)
    }
    _.Nc = function (a) {
      const b = Zba()
      a = b ? b.createHTML(a) : a
      return new _.Mc(_.wc, a)
    }
    _.ica = function (a) {
      return a instanceof _.Mc
    }
    _.Oc = function (a) {
      if (_.ica(a)) return a.ha
      throw Error('$')
    }
    _.Pc = function (a, b) {
      a.src = _.zc(b).toString()
    }
    _.Qc = function (a, b) {
      a.srcdoc = _.Oc(b)
    }
    _.Rc = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Tc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.vc) throw new _.Sc('TrustedResourceUrl', 0)
          _.Rc(a, [])
          b = _.Jc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.vc)) throw new _.Sc(typeof c, 1)
          _.Rc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Pc(a, c)
          break
        case 2:
          if (c instanceof _.vc) throw new _.Sc('TrustedResourceUrl', 2)
          _.Rc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.Jc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.mb(b, void 0)
      }
    }
    _.Uc = function (a, b, c, d) {
      b = _.Jc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Vc = function (a) {
      return jca('script', a)
    }
    _.kca = function (a) {
      return jca('style', a)
    }
    jca = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Wc = function (a) {
      const b = Zba()
      a = b ? b.createScript(a) : a
      return new _.lca(_.wc, a)
    }
    _.mca = function (a) {
      return a instanceof _.lca
    }
    _.Xc = function (a) {
      if (_.mca(a)) return a.ha
      throw Error('$')
    }
    nca = function (a) {
      const b = _.Vc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.Yc = function (a, b, c) {
      a.textContent = _.Xc(b)
      ;(c == null ? 0 : c.dld) || nca(a)
    }
    _.Zc = function (a, b, c) {
      a.src = _.zc(b)
      ;(c == null ? 0 : c.dld) || nca(a)
    }
    _.ad = function (a, b) {
      a.nodeType === 1 && _.oca(a)
      a.innerHTML = _.Oc(b)
    }
    _.oca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('$')
    }
    _.rca = function (a, b, c) {
      if (_.$ba(b)) _.pca(a, b, c)
      else {
        if (qca.indexOf(c) === -1) throw Error('ba`' + c)
        b = _.Jc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.pca = function (a, b, c) {
      a.href = _.zc(b).toString()
      a.rel = c
    }
    _.sca = function (a) {
      return 'function' == typeof _.cd && a instanceof _.cd
    }
    _.tca = function (a) {
      if (_.sca(a)) return a.ha
      throw Error('$')
    }
    _.dd = function (a, b, c) {
      return a.parseFromString(_.Oc(b), c)
    }
    _.fd = function (a, b) {
      b = _.Jc(b)
      b !== void 0 && (a.href = b)
    }
    _.uca = function (a, b) {
      return a.createContextualFragment(_.Oc(b))
    }
    _.vca = function (a) {
      return _.Nc(a)
    }
    _.wca = function (a) {
      return _.yc(a)
    }
    _.gd = function (a) {
      a = a[0].toLowerCase()
      return new _.xca(_.wc, a)
    }
    _.id = function (a, b) {
      if (_.ica(a)) return a
      a = _.hd(String(a))
      if (b == null ? 0 : b.xTd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.k_a) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.yTd) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Nc(a)
    }
    _.hd = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.jd = function (a) {
      return _.yca('', a)
    }
    _.yca = function (a, b) {
      a = _.id(a)
      return _.Nc(b.map((c) => _.Oc(_.id(c))).join(_.Oc(a).toString()))
    }
    _.zca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Nc(a)
    }
    _.Cca = function (a) {
      if (!Aca.test(a)) throw Error('$')
      if (Bca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.kd = function (a, b, c) {
      _.Cca(a)
      let d = `<${a}`
      b && (d += _.Dca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Eca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.jd(c.map((e) => _.ica(e) ? e : _.id(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Nc(d)
    }
    _.Dca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Aca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Fca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.Bc(e)
              ? e.toString()
              : hca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.id(String(e))}"`
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
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Nc(a)
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
    ld = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Kca = function (a) {
      return a.parts.map((b) => {
        const c = b.yQa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.md = function (a) {
      return _.Lca.sanitize(a)
    }
    _.Mca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        J4a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.nd = function (a, ...b) {
      if (b.length === 0) return _.yc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.yc(c)
    }
    _.od = function (a, b) {
      a = _.Mca(_.zc(a).toString())
      return _.Nca(a.J4a, a.params, a.fragment, b)
    }
    _.Nca = function (a, b, c, d) {
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
      return _.yc(a + b + c)
    }
    _.Oca = function (a, b) {
      a = _.Mca(_.zc(a).toString())
      const c = a.J4a.slice(-1) === '/' ? '' : '/'
      b = a.J4a + c + encodeURIComponent(b)
      return _.yc(b + a.params + a.fragment)
    }
    _.Pca = function (a) {
      a = _.Xc(a).toString()
      return _.yc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.Qca = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.Rca = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    Sca = function (a, b) {
      var c = b || _.pd()
      const d = c.Of()
      b = c.createElement('STYLE')
      const e = _.kca(d)
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
    qd = function (a, b) {
      _.Yb.call(this)
      this.ha = a
      this.Aa = b
      this.qa = []
      this.na = []
      this.oa = []
    }
    Uca = function () {
      this.qa = this.oa = null
    }
    Vca = function (a = window) {
      return a.WIZ_global_data
    }
    _.Wca = function (a, b = window) {
      return (b = Vca(b)) && a in b ? b[a] : null
    }
    _.td = function (a, b = window) {
      return new _.sd(a, _.Wca(a, b))
    }
    _.Xca = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.ud = function (a) {
      return a.match(Yca)
    }
    _.vd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.wd = function (a, b) {
      return _.ud(b)[a] || null
    }
    _.Zca = function (a) {
      a = _.wd(1, a)
      !a && _.fa.self && _.fa.self.location &&
        (a = _.fa.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.xd = function (a) {
      a = _.ud(a)
      return _.Xca(a[1], a[2], a[3], a[4])
    }
    _.ada = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
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
      let d = a.indexOf('?'), e
      d < 0 || d > c ? (d = c, e = '') : e = a.substring(d + 1, c)
      a = [a.slice(0, d), e, a.slice(c)]
      c = a[1]
      a[1] = b ? c ? c + '&' + b : b : c
      return a[0] + (a[1] ? '?' + a[1] : '') + a[2]
    }
    _.cda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.cda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.yd(b)))
    }
    _.dda = function (a) {
      const b = []
      for (const c in a) _.cda(c, a[c], b)
      return b.join('&')
    }
    _.eda = function (a, b, c, d) {
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
    fda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    hda = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      const d = _.fa._F_jsUrl
      ;(a = b || fda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!gda(c)) throw Error('pa')
      return c
    }
    ida = function () {
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
    lda = function (a) {
      const { promise: b, resolve: c, reject: d } = ida()
      jda.set(a, { promise: b, resolve: c, reject: d })
      kda || (kda = [],
        queueMicrotask(() => {
          const e = [...kda]
          kda = null
          const f = _.lc().Da(e)
          for (const g of e) f[g].then(jda.get(g).resolve, jda.get(g).reject)
        }))
      kda.push(a)
      return b
    }
    _.pda = function () {
      if (mda) return nda
      mda = !0
      let a
      try {
        a = hda(_.fa._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = oda(_.zd(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Oba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.Oua(e, g)
        }
      })
      return nda = !0
    }
    _.qda = function () {}
    sda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return rda[a]
    }
    Bd = function (a) {
      let b = 0, c = 0, d
      do d = sda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.tda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.t9 || ''
      !c.wPd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('wa')
      }
      const f = c.lSd || _.Cd
      a = fda(a)
      b = new f(
        _.wca(hda('', a), {
          bpb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.hWd || a && a.hasAttribute('crossorigin')
      a = c.YOd || a && a.getAttribute('crossorigin')
      d && (b.jJa = d)
      a && (b.Pwa = a)
      c.iJa && (b.iJa = c.iJa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.lc()
      g.qa = b
      g.rgc(!0)
      _.Dd = c.pOd === 'BATCH' ? lda : (h) => Promise.resolve(g.load(h))
    }
    aaa = []
    uda = Object.create
    vda = Object.defineProperty
    wda = function (a) {
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
    Fd = wda(this)
    xda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Fd.BigInt64Array && (xda.push('BigInt64'), xda.push('BigUint64'))
    zda = function (a, b) {
      if (b) {
        for (var c = 0; c < xda.length; c++) {
          yda(xda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Gd = function (a, b) {
      b && yda(a, b)
    }
    yda = function (a, b) {
      var c = Fd
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
        vda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Ada = Object.setPrototypeOf
    Bda = function (a, b) {
      a.prototype = uda(b.prototype)
      a.prototype.constructor = a
      Ada(a, b)
      a.Yb = b.prototype
    }
    Cda = function (a) {
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
    _.Hd = function (a) {
      return Cda(a())
    }
    Gd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    Gd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (Ed = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(Fd.top) || b(Fd) || b({})
      return a || {}
    })
    Eda = function () {
      return Dda
    }
    _.Id = function () {
      return Eda
    }
    Dda = function (a) {
      return a
    }
    Fda = function (a) {
      var b = Ed
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
    Gd('globalThis', function (a) {
      return a || Fd
    })
    Gd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    Gd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    Gd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    Gd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    Gd('Object.fromEntries', function (a) {
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
    Gd('String.prototype.replaceAll', function (a) {
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
    Gd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    Gd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    Gd('Promise.withResolvers', function (a) {
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
    Gd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var Gda = {},
      Hda = function () {
        if (typeof Fd.EventTarget === 'function') {
          var a = Fd.EventTarget.prototype
        } else {for (
            a = Fd;
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
            var t = Gda[f]
            if (!t) return c.call(this, f, g, h)
            var v = g != null ? g : e, z = d.get(v)
            z || (z = new WeakMap(), d.set(v, z))
            var B = z.get(this)
            B || (B = {}, z.set(this, B))
            var I = !(typeof h === 'boolean' ? h : h && h.capture) + f
            if (!B[I]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var N = g.handleEvent
                if (typeof N === 'function') return N.apply(g, arguments)
              })
              if (v) {
                h && h.once && (v = function (N) {
                  return function () {
                    if (typeof N !== 'function') throw Error('l`' + N)
                    delete B[I]
                    return N.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  h && Fd.AbortSignal && h.signal instanceof
                    Fd.AbortSignal
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
          Hda = function () {}
        }
      },
      Ida = function (a) {
        var b = ['readystatechange']
        Hda()
        for (let c = 0; c < b.length; c++) {
          ;(Gda[b[c]] || (Gda[b[c]] = [])).push(a)
        }
      },
      Jd = function (a, b) {
        yda(a, function (c) {
          return c && b(c)
        })
      },
      Jda = !1
    Gd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.Id = c)
        c = a._JSC
        typeof c === 'function' && (Eda = c)
        return a
      }
      Jda = !0
      Dda = function (e) {
        return e
      }
      var d = Ed
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
      b['\u1d43\u1d9cstart'] = _.Id = function (e) {
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
      b._JSC = Eda = function (e) {
        var f = (0, _.Id)(e)
        return function (g, h) {
          return f(h)(g)
        }
      }
      return b
    })
    Jda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var h = 0; h < e.length; h++) {
                var t = e[h], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Fda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              vda(g, 'name', { value: f.name }),
                vda(g, 'length', { value: f.length }),
                vda(g, 'toString', {
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
      Jd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      Jd('queueMicrotask', b)
      Jd('requestAnimationFrame', b)
      Jd('requestIdleCallback', b)
      Jd('setInterval', b)
      Jd('setTimeout', b)
      Jd('HTMLCanvasElement.prototype.toBlob', b)
      Jd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      Jd('FileSystemEntry.prototype.getParent', a(0, 1))
      Jd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      Jd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      Jd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      Jd('XMLHttpRequest.prototype.send', function (d) {
        Ida(function (e) {
          return function () {
            var f = Ed[0]
            try {
              return Ed[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              Ed[0] = f
            }
          }
        })
        return function () {
          c.set(this, Ed[0])
          return d.apply(this, arguments)
        }
      })
    }()
    Gd('Promise.prototype.finally', function (a) {
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
    Gd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    Gd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = Ed
      b.wrap = Fda
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
    Gd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Kda(this)
        Lda(b)
        var c = Mda(this, b)
        b = new Set(this)
        var d = c.tyb
        c = c.hpb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Gd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Kda(this)
        Lda(b)
        var c = new Set(), d = Mda(this, b)
        b = d.tyb
        d = d.hpb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var Lda = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      Mda = function (a, b) {
        if (a.size <= b.size) a = { tyb: a.keys(), hpb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { tyb: b, hpb: a }
        }
        return a
      },
      Kda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      Nda = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    Gd('Array.prototype.at', function (a) {
      return a ? a : Nda
    })
    zda('at', function (a) {
      return a ? a : Nda
    })
    Gd('String.prototype.at', function (a) {
      return a ? a : Nda
    })
    Gd('Array.prototype.flat', function (a) {
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
    Gd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    Gd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var Oda = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    Gd('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return Oda(d, b, c)
      }
    })
    zda('with', function (a) {
      return a ? a : function (b, c) {
        return Oda(this.slice(), b, c)
      }
    })
    Gd('Promise.allSettled', function (a) {
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
    Gd('String.prototype.matchAll', function (a) {
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
    var Pda = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Gd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return Pda(this, b, c).v
      }
    })
    zda('findLast', function (a) {
      return a ? a : function (b, c) {
        return Pda(this, b, c).v
      }
    })
    Gd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Bda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    Gd('Promise.any', function (a) {
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
    var Nd, Pd, Rda, Sda, Tda
    _.Qda = _.Qda || {}
    _.fa = this || self
    _.Ld = function (a, b, c) {
      a = a.split('.')
      c = c || _.fa
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    Nd = function (a, b) {
      var c = _.Md('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.Od = _.fa._F_toggles_default_BardChatUi || []
    Pd = function () {}
    Pd.get = function () {
      return null
    }
    _.Dd = null
    _.Md = function (a, b) {
      a = a.split('.')
      b = b || _.fa
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.nb = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ga = function (a) {
      var b = _.nb(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.Qd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.Rd = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Rda) && a[Rda] ||
        (a[Rda] = ++Sda)
    }
    Rda = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    Sda = 0
    Tda = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.qc = function (a, b, c) {
      _.qc = Tda
      return _.qc.apply(null, arguments)
    }
    _.Sd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.Td = function () {
      return Date.now()
    }
    _.Uda = function (a, b, c) {
      _.Ld(a, b, c)
    }
    _.zb = function (a) {
      return a
    }
    _.Ud = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Yb = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++
        ) g[h - 2] = arguments[h]
        return b.prototype[e].apply(d, g)
      }
    }
    _.Ud(_.da, Error)
    _.da.prototype.name = 'CustomError'
    var Vda
    _.Ud(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.Wda = typeof TextDecoder !== 'undefined'
    _.Xda = typeof TextEncoder !== 'undefined'
    var Yda = !!(_.Od[5] & 4),
      Zda = !!(_.Od[4] >> 27 & 1),
      $da = !!(_.Od[5] & 16),
      aea = !!(_.Od[4] >> 19 & 1),
      bea = !!(_.Od[5] & 32),
      cea = !!(_.Od[4] >> 23 & 1),
      dea = !!(_.Od[4] >> 15 & 1),
      eea = !!(_.Od[5] & 8)
    var fea, qba
    fea = Nd(1, !0)
    _.faa = Yda ? $da : Nd(610401301, !1)
    _.gea = Yda ? aea : Nd(1331761403, !1)
    _.hea = Yda ? bea : Nd(651175828, !1)
    qba = Yda ? Zda || !cea : Nd(748402147, !0)
    _.iea = Yda ? dea : Nd(861377723, !1)
    _.jea = Yda ? Zda || !eea : Nd(861377724, fea)
    var kea
    kea = _.fa.navigator
    _.na = kea ? kea.userAgentData || null : null
    var lea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var mea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        const a = this
        return _.Hd(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.Hd(function* () {
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
    var nea
    nea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Hd(function* () {
          if (ta(!0)) return new lea(yield mea.load())
          a.ha = !0
          return new lea(_.qaa())
        })
      }
    }
    _.oea = new nea()
    _.ya = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Vd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Wd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Xd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.Zd = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.pea = function (a) {
      _.pea[' '](a)
      return a
    }
    _.pea[' '] = function () {}
    _.qea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Cea, Dea
    _.rea = _.haa()
    _.$d = _.iaa()
    _.ae = _.oa('Edge')
    _.be = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.ce = _.caa('WebKit') && !_.oa('Edge')
    _.sea = _.ce && _.oa('Mobile')
    _.de = _.va()
    _.ee = _.oaa()
    _.tea = _.naa() || _.paa()
    _.uea = _.laa()
    _.vea = _.maa()
    _.wea = _.oa('iPad')
    _.xea = _.oa('iPod')
    _.yea = _.ua()
    _.caa('KaiOS')
    var zea = function () {
        const a = _.fa.document
        return a ? a.documentMode : void 0
      },
      Aea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.be) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.ae) return /Edge\/([\d\.]+)/.exec(c)
        if (_.$d) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.ce) return /WebKit\/(\S+)/.exec(c)
        if (_.rea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.$d) {
        const c = zea()
        if (c != null && c > parseFloat(a)) {
          Aea = String(c)
          break a
        }
      }
      Aea = a
    }
    _.Bea = Aea
    Cea = {}
    _.fe = function (a) {
      return _.qea(Cea, a, function () {
        return _.eaa(_.Bea, a) >= 0
      })
    }
    if (_.fa.document && _.$d) {
      var Eea = zea()
      Dea = Eea ? Eea : parseInt(_.Bea, 10) || void 0
    } else Dea = void 0
    _.Fea = Dea
    var Gea, Hea, Iea, Jea, Kea, Lea
    _.ge = {}
    Gea = _.qa()
    Hea = vaa()
    Iea = _.oa('iPad')
    Jea = _.kaa()
    Kea = _.ra()
    Lea = waa()
    _.ge.ANDROID = Jea
    _.ge.AFd = !1
    _.ge.BFd = !1
    _.ge.CFd = !1
    _.ge.DFd = !1
    _.ge.EFd = !1
    _.ge.FFd = !1
    _.ge.CHROME = Kea
    _.ge.Zfa = _.ae
    _.ge.C_ = Gea
    _.ge.vFb = _.$d
    _.ge.H6a = Iea
    _.ge.I6a = Hea
    _.ge.v8a = _.rea
    _.ge.MJ = Lea
    _.ge.FRd = vaa
    _.ge.JRd = waa
    _.yaa = {}
    _.xaa = null
    var Caa, Aaa, Mea
    Caa = /[-_.]/g
    Aaa = { '-': '+', _: '/', '.': '=' }
    _.ie = {}
    Mea = typeof structuredClone != 'undefined'
    var Nea
    _.ke = function (a) {
      return a ? new _.Gb(a, _.ie) : _.je()
    }
    _.je = function () {
      return Nea || (Nea = new _.Gb(null, _.ie))
    }
    _.Hb = function (a) {
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
    _.Oea = function (a) {
      if (_.ie !== _.ie) throw Error('y')
      var b = a.ha
      b == null || _.Ma(b) ||
        (typeof b === 'string' ? b = _.Daa(b) : (_.nb(b), b = null))
      return b == null ? b : a.ha = b
    }
    _.Gb = class {
      isEmpty() {
        return this.ha == null
      }
      constructor(a, b) {
        if (b !== _.ie) throw Error('y')
        this.ha = a
        if (a != null && a.length === 0) throw Error('x')
      }
    }
    var Cba, hba, tba, nba
    _.xb = Oa()
    Cba = Oa()
    _.Pea = Oa()
    _.Bb = Oa()
    _.Qea = Oa()
    hba = Oa()
    _.Rea = Oa()
    tba = Oa()
    _.Ta = Oa('m_m', !0)
    nba = Oa()
    _.Sea = Oa()
    var Tea
    _.Qa = Oa('jas', !0)
    Tea = []
    Tea[_.Qa] = 7
    _.Sb = Object.freeze(Tea)
    var Uea
    _.Ua = {}
    _.Xa = {}
    Uea = class {
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
    _.Vea = Object.freeze({})
    _.Wea = Object.freeze({})
    var oba = {}
    _.Xea = _.$a((a) => a !== null && a !== void 0)
    _.bb = _.$a((a) => typeof a === 'number')
    _.Yea = _.$a((a) => Number.isFinite(a))
    _.ab = _.$a((a) => typeof a === 'string')
    _.Iaa = _.$a((a) => typeof a === 'boolean')
    _.Zea = _.$a((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.$ea = _.$a((a) => typeof a === 'function')
    _.afa = _.$a((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.bfa = _.$a((a) => Array.isArray(a))
    _.cb = typeof _.fa.BigInt === 'function' &&
      typeof _.fa.BigInt(0) === 'bigint'
    var efa, cfa, ffa, dfa
    _.Fb = _.$a((a) =>
      _.cb ? a >= cfa && a <= dfa : a[0] === '-' ? Jaa(a, efa) : Jaa(a, ffa)
    )
    efa = Number.MIN_SAFE_INTEGER.toString()
    cfa = _.cb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    ffa = Number.MAX_SAFE_INTEGER.toString()
    dfa = _.cb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.eb = 0
    _.hb = 0
    var Raa = void 0
    var Uaa
    _.le = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.ub = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.tb = Number.isSafeInteger
    _.ob = Number.isFinite
    _.sb = Math.trunc
    Uaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var gfa, hfa
    gfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    hfa = function (a) {
      if (a.n0 & 2) throw Error('D')
    }
    _.Ib = class extends gfa {
      constructor(a, b, c = dba, d = dba) {
        super()
        this.n0 = a[_.Qa] | 0
        this.h7 = b
        this.iCa = c
        this.DBb = this.h7 ? eba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.n0)
          super.set(g, h)
        }
      }
      X3a(a) {
        return _.Eaa(Array.from(super.entries(), a))
      }
      clear() {
        hfa(this)
        super.clear()
      }
      delete(a) {
        hfa(this)
        return super.delete(this.iCa(a, !0, !1))
      }
      entries() {
        if (this.h7) {
          var a = super.keys()
          a = new Uea(a, fba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.h7) {
          var a = super.keys()
          a = new Uea(a, _.Ib.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.h7
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        hfa(this)
        a = this.iCa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.DBb(b, !0, !0, this.h7, !1, this.n0))
      }
      ysd(a) {
        const b = this.iCa(a[0], !1, !0)
        a = a[1]
        a = this.h7
          ? a === void 0 ? null : a
          : this.DBb(a, !1, !0, void 0, !1, this.n0)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.iCa(a, !1, !1))
      }
      get(a) {
        a = this.iCa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.h7
          return c
            ? (c = this.DBb(b, !1, !0, c, this.cXc, this.n0),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.Ib.prototype.toJSON = void 0
    var jba
    _.me = Mea ? structuredClone : (a) => _.Db(a, 0, _.Eb)
    _.ifa = _.db(0)
    _.ne = function (a, b, c, d, e) {
      b = _.Rb(a.Yg, b, c, e)
      if (b !== null || d && a.WYa !== _.Xa) return b
    }
    _.Rb = function (a, b, c, d) {
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
    _.pe = function (a, b, c) {
      return _.oe(a, b) === c ? c : -1
    }
    _.oe = function (a, b, c) {
      a = a.Yg
      return _.Eba(_.Dba(a), a, void 0, b, c)
    }
    _.qe = function (a, b, c, d) {
      return _.Taa(_.ne(a, b, c, d))
    }
    _.re = function (a, b, c, d) {
      return _.rb(_.ne(a, b, c, d))
    }
    _.te = function (a, b, c = 0, d) {
      let e
      return (e = _.re(a, b, d)) != null ? e : c
    }
    _.Ub = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Faa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Yg = _.sba(a, b, c, 2048)
      }
      toJSON() {
        return _.pba(this)
      }
      serialize(a) {
        return JSON.stringify(_.pba(this, a))
      }
      clone() {
        const a = this.Yg, b = a[_.Qa] | 0
        return _.yba(this, a, b)
          ? _.xba(this, a, !0)
          : new this.constructor(_.Jb(a, b, !1))
      }
      isImmutable() {
        return _.Za(this)
      }
    }
    _.l.prototype.zba = _.ba(0)
    _.l.prototype[_.Ta] = _.Ua
    _.l.prototype.toString = function () {
      return this.Yg.toString()
    }
    _.jfa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.kfa = []
    _.lfa = []
    _.mfa = !1
    _.nfa = function (a) {
      _.kfa[_.kfa.length] = a
      if (_.mfa) {
        for (let b = 0; b < _.lfa.length; b++) {
          a((0, _.qc)(_.lfa[b].wrap, _.lfa[b]))
        }
      }
    }
    _.Yb.prototype.xR = !1
    _.Yb.prototype.isDisposed = function () {
      return this.xR
    }
    _.Yb.prototype.dispose = function () {
      this.xR || (this.xR = !0, this.Fb())
    }
    _.Yb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Yb.prototype.Lb = function (a) {
      this.addOnDisposeCallback(_.Sd(_.Vb, a))
    }
    _.Yb.prototype.addOnDisposeCallback = function (a, b) {
      this.xR
        ? b !== void 0 ? a.call(b) : a()
        : (this.Cca || (this.Cca = []), b && (a = a.bind(b)), this.Cca.push(a))
    }
    _.Yb.prototype.Fb = function () {
      if (this.Cca) { for (; this.Cca.length;) this.Cca.shift()() }
    }
    _.Zb = function (a, b) {
      this.type = 'function' == typeof _.ofa && a instanceof _.ofa
        ? String(a)
        : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Zb.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Zb.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var qfa
    _.pfa = !(!_.fa.navigator || !_.fa.navigator.maxTouchPoints)
    qfa = function () {
      if (!_.fa.addEventListener || !Object.defineProperty) return !1
      var a = !1,
        b = Object.defineProperty({}, 'passive', {
          get: function () {
            a = !0
          },
        })
      try {
        const c = () => {}
        _.fa.addEventListener('test', c, b)
        _.fa.removeEventListener('test', c, b)
      } catch (c) {}
      return a
    }()
    _.Ud(_.$b, _.Zb)
    _.$b.prototype.init = function (a, b) {
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
        : (this.offsetX = _.ce || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.ce || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.de ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.hi = a
      a.defaultPrevented && _.$b.Yb.preventDefault.call(this)
    }
    _.$b.prototype.stopPropagation = function () {
      _.$b.Yb.stopPropagation.call(this)
      this.hi.stopPropagation
        ? this.hi.stopPropagation()
        : this.hi.cancelBubble = !0
    }
    _.$b.prototype.preventDefault = function () {
      _.$b.Yb.preventDefault.call(this)
      const a = this.hi
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.$b.prototype.oza = _.ba(1)
    _.rfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.ue = function (a) {
      return !(!a || !a[_.rfa])
    }
    var Hba = 0
    var sfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Lba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.hc.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = tfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.uia = !1))
        : (b = new _.Iba(b, this.src, f, !!d, e), b.uia = c, a.push(b))
      return b
    }
    _.hc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = tfa(e, b, c, d)
      return b > -1
        ? (sfa(e[b]),
          _.Ba(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var ufa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Ca(a.listeners[c], b)
      d &&
        (sfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.hc.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, sfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.hc.prototype.Z$ = _.ba(3)
    _.hc.prototype.Uka = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = tfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.hc.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Kba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var tfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var vfa, wfa, xfa, zfa, Afa, Bfa, Cfa, Efa
    vfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    wfa = {}
    xfa = 0
    _.we = function (a, b, c, d, e) {
      if (d && d.once) return _.ve(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.we(a, b[f], c, d, e)
        return null
      }
      c = _.yfa(c)
      return _.ue(a)
        ? a.listen(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : zfa(a, b, c, !1, d, e)
    }
    zfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      const g = _.Qd(e) ? !!e.capture : !!e
      let h = _.xe(a)
      h || (a[vfa] = h = new _.hc(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Afa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        qfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Bfa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      xfa++
      return c
    }
    Afa = function () {
      const a = Cfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.ve = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ve(a, b[f], c, d, e)
        return null
      }
      c = _.yfa(c)
      return _.ue(a)
        ? a.jf(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : zfa(a, b, c, !0, d, e)
    }
    _.ye = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ye(a, b[f], c, d, e)
      } else {d = _.Qd(d) ? !!d.capture : !!d,
          c = _.yfa(c),
          _.ue(a)
            ? a.Sf(b, c, d, e)
            : a && (a = _.xe(a)) && (b = a.Uka(b, c, d, e)) && _.ze(b)}
    }
    _.ze = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.ue(b)) return b.JU(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Bfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      xfa--
      ;(c = _.xe(b))
        ? (ufa(c, a), c.ha == 0 && (c.src = null, b[vfa] = null))
        : sfa(a)
      return !0
    }
    Bfa = function (a) {
      return a in wfa ? wfa[a] : wfa[a] = 'on' + a
    }
    _.Dfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.uia && _.ze(a)
      return c.call(d, b)
    }
    Cfa = function (a, b) {
      return a.removed ? !0 : _.Dfa(a, new _.$b(b, this))
    }
    _.xe = function (a) {
      a = a[vfa]
      return a instanceof _.hc ? a : null
    }
    Efa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.yfa = function (a) {
      if (typeof a === 'function') return a
      a[Efa] || (a[Efa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Efa]
    }
    _.nfa(function (a) {
      Cfa = a(Cfa)
    })
    var Nba
    _.Ffa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Oba((e) => {
            e.Oua(a.ha, d)
          })
        })
      }
    }
    _.Ae = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Ffa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Qba = Symbol('U')
    _.Ud(_.pc, _.Yb)
    _.pc.prototype[_.rfa] = !0
    _.k = _.pc.prototype
    _.k.gS = function () {
      return this.Wsb
    }
    _.k.qp = function (a) {
      this.Wsb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.we(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.ye(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.gS()
      if (c) { for (b = []; c; c = c.gS()) b.push(c) }
      c = this.mUc
      const d = a.type || a
      if (typeof a === 'string') a = new _.Zb(a, c)
      else if (a instanceof _.Zb) a.target = a.target || c
      else {
        var e = a
        a = new _.Zb(d, c)
        _.ec(a, e)
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
    _.k.Fb = function () {
      _.pc.Yb.Fb.call(this)
      this.removeAllListeners()
      this.Wsb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.RR.add(String(a), b, !1, c, d)
    }
    _.k.jf = function (a, b, c, d) {
      return this.RR.add(String(a), b, !0, c, d)
    }
    _.k.Sf = function (a, b, c, d) {
      return this.RR.remove(String(a), b, c, d)
    }
    _.k.JU = function (a) {
      return ufa(this.RR, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.RR ? this.RR.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.RR.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.uia && this.JU(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.Z$ = _.ba(2)
    _.k.Uka = function (a, b, c, d) {
      return this.RR.Uka(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.RR.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.Be =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Sba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Gfa = class {
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
    _.rc.Kod = _.Be
    _.rc.PPc = !1
    _.rc.E7c = function () {
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
        _.fa.setTimeout(a, 0)
      }
    }
    _.rc.Pqc = (a) => a
    _.nfa(function (a) {
      _.rc.Pqc = a
    })
    var Hfa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = Tba.get()
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
      Tba = new Gfa(() => new Ifa(), (a) => a.reset()),
      Ifa = class {
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
    var Jfa, Uba, Rba, Kfa
    Uba = !1
    Rba = new Hfa()
    _.Ce = (a, b) => {
      Jfa || Kfa()
      Uba || (Jfa(), Uba = !0)
      Rba.add(a, b)
    }
    Kfa = () => {
      const a = Promise.resolve(void 0)
      Jfa = () => {
        a.then(Vba)
      }
    }
    _.Ee = function () {}
    var Lfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Mfa, Nfa, Wfa, Tfa, Pfa, aga, Zfa, Xfa, Yfa, bga, $fa, cga
    _.Ge = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.Ee) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.Fe(b, 2, c)
          }, function (c) {
            _.Fe(b, 3, c)
          })
        } catch (b) {
          _.Fe(this, 3, b)
        }
      }
    }
    Mfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Mfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Nfa = new Gfa(function () {
      return new Mfa()
    }, function (a) {
      a.reset()
    })
    _.Ofa = function (a, b, c) {
      const d = Nfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.Qfa = function (a, b, c) {
      Pfa(a, b, c, null) || _.Ce(_.Sd(b, a))
    }
    _.Rfa = function (a) {
      return new _.Ge(function (b, c) {
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
            _.Qfa(h, _.Sd(f, t), g)
          }
        } else b(e)
      })
    }
    _.He = function () {
      let a, b
      const c = new _.Ge(function (d, e) {
        a = d
        b = e
      })
      return new Sfa(c, a, b)
    }
    _.Ge.prototype.then = function (a, b, c) {
      return Tfa(
        this,
        (0, _.Be)(typeof a === 'function' ? a : null),
        (0, _.Be)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Ge.prototype.$goog_Thenable = !0
    var Vfa = function (a, b, c, d) {
      _.Ufa(a, _.Ofa(b || _.Ee, c || null, d))
    }
    _.Ge.prototype.finally = function (a) {
      a = (0, _.Be)(a)
      return new _.Ge((b, c) => {
        Vfa(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Ge.prototype.ha = function (a, b) {
      return Tfa(this, null, (0, _.Be)(a), b)
    }
    _.Ge.prototype.catch = _.Ge.prototype.ha
    _.Ge.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Ke(a)
        _.Ce(function () {
          Wfa(this, b)
        }, this)
      }
    }
    Wfa = function (a, b) {
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
              ? Wfa(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : Xfa(c),
                Yfa(c, e, 3, b)))
          }
          a.na = null
        } else _.Fe(a, 3, b)
      }
    }
    _.Ufa = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || Zfa(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    Tfa = function (a, b, c, d) {
      const e = _.Ofa(null, null, null)
      e.child = new _.Ge(function (f, g) {
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
              t === void 0 && h instanceof _.Ke ? g(h) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.Ufa(a, e)
      return e.child
    }
    _.Ge.prototype.Fa = function (a) {
      this.ka = 0
      _.Fe(this, 2, a)
    }
    _.Ge.prototype.Ea = function (a) {
      this.ka = 0
      _.Fe(this, 3, a)
    }
    _.Fe = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          Pfa(c, a.Fa, a.Ea, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            Zfa(a),
            b != 3 || c instanceof _.Ke || $fa(a, c)))
    }
    Pfa = function (a, b, c, d) {
      if (a instanceof _.Ge) return Vfa(a, b, c, d), !0
      if (Lfa(a)) return a.then(b, c, d), !0
      if (_.Qd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return aga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    aga = function (a, b, c, d, e) {
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
    Zfa = function (a) {
      a.Aa || (a.Aa = !0, _.Ce(a.Da, a))
    }
    Xfa = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Ge.prototype.Da = function () {
      let a
      for (; a = Xfa(this);) Yfa(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    Yfa = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, bga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : bga(b, c, d)
        } catch (e) {
          cga.call(null, e)
        }}
      Sba(Nfa, b)
    }
    bga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    $fa = function (a, b) {
      a.qa = !0
      _.Ce(function () {
        a.qa && cga.call(null, b)
      })
    }
    cga = _.ha
    _.Ke = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Ud(_.Ke, _.da)
    _.Ke.prototype.name = 'cancel'
    var Sfa = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var jga, iga, ega, fga
    _.sc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.sc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.nb ? this.nb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.Le(this))
      }
    }
    _.sc.prototype.Sa = function (a, b) {
      this.Ea = !1
      dga(this, a, b)
    }
    var dga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        ega(a)
      },
      gga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new fga(a)
          a.Oa = !1
        }
      }
    _.sc.prototype.callback = function (a) {
      gga(this)
      dga(this, !0, a)
    }
    _.sc.prototype.ha = function (a) {
      gga(this)
      dga(this, !1, a)
    }
    _.Pe = function (a, b, c) {
      return _.Ne(a, b, null, c)
    }
    _.sc.prototype.finally = function (a) {
      return _.hga(
        new Promise((b, c) => {
          _.Ne(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.Ne = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.Be)(b) : (b = (0, _.Be)(b), c = (0, _.Be)(c)))
      a.Ba.push([b, c, d])
      e && ega(a)
      return a
    }
    _.sc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Ge(function (g, h) {
        e = g
        d = h
      })
      _.Ne(this, e, function (g) {
        g instanceof _.Le ? f.cancel() : d(g)
        return iga
      }, this)
      return f.then(a, b, c)
    }
    _.sc.prototype.$goog_Thenable = !0
    _.sc.prototype.ma = _.ba(4)
    _.sc.prototype.isError = function (a) {
      return a instanceof Error
    }
    jga = function (a) {
      return _.Zd(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    iga = {}
    ega = function (a) {
      if (a.Da && a.ka && jga(a)) {
        var b = a.Da, c = kga[b]
        c && (_.fa.clearTimeout(c.ha), delete kga[b])
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
            g === iga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Lfa(b) ||
              typeof _.fa.Promise === 'function' && b instanceof _.fa.Promise
            ) d = !0, a.Ea = !0
          } catch (t) {
            b = t, a.qa = !0, jga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.qc)(a.Sa, a, !0),
          d = (0, _.qc)(a.Sa, a, !1),
          b instanceof _.sc ? (_.Ne(b, g, d), b.lb = !0) : b.then(g, d))
      c && (b = new lga(b), kga[b.ha] = b, a.Da = b.ha)
    }
    _.hga = function (a) {
      const b = new _.sc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    fga = function (a) {
      _.da.call(this)
      this.AB = a
    }
    _.Ud(fga, _.da)
    fga.prototype.message = 'Deferred has already fired'
    fga.prototype.name = 'AlreadyCalledError'
    _.Le = function (a) {
      _.da.call(this)
      this.AB = a
    }
    _.Ud(_.Le, _.da)
    _.Le.prototype.message = 'Deferred was canceled'
    _.Le.prototype.name = 'CanceledError'
    var lga = function (a) {
      this.ha = _.fa.setTimeout((0, _.qc)(this.throwError, this), 0)
      this.PR = a
    }
    lga.prototype.throwError = function () {
      delete kga[this.ha]
      throw this.PR
    }
    var kga = {}
    var oga, pga, qga
    _.mga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Ya
      }
      return !1
    }
    _.Qe = function (a) {
      for (; a.Ya;) a = a.Ya
      return a
    }
    oga = function (a) {
      var b = _.nga
      const c = []
      a = _.Qe(a)
      let d
      a.JA[b] && (d = a.JA[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].JA[b] && (d = a[e].JA[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.Ve = function (a, b) {
      for (var c = a; c; c = c.Ya) {
        if (c.isDisposed()) throw new _.jfa([b])
        if (c.JA[b]) return c.JA[b][0]
        if (c.Hc[b]) break
      }
      if (c = a.yb[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.Ue(a, b, c)
        return c
      }
      return null
    }
    _.Ue = function (a, b, c) {
      if (a.isDisposed()) _.Vb(c)
      else {
        a.JA[b] = [c, !0]
        var d = pga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.wc[b]
        b instanceof _.Ae && _.oc(b, c.constructor)
      }
    }
    pga = function (a, b, c) {
      const d = [], e = a.Oa[c]
      e && (_.saa(e, function (f) {
        _.mga(f.appContext, b) && (d.push(f.d), _.Ca(e, f))
      }),
        e.length == 0 && delete a.Oa[c])
      return d
    }
    qga = function (a, b) {
      a.Oa && _.ac(a.Oa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Ca(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Xe = class extends _.Yb {
      constructor() {
        super()
        this.JA = {}
        this.wc = {}
        this.yb = {}
        this.Oa = {}
        this.Wa = {}
        this.Hc = {}
        this.Eb = new _.pc()
        this.ie = !0
        this.Ya = null
        const a = _.Qe(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.Ve(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Fb() {
        if (_.Qe(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Qe(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.JA) {
          a = this.JA[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.JA = null
        this.ie && this.Eb.dispose()
        qga(this, this)
        this.Oa = null
        _.Vb(this.Qd)
        this.Hc = this.Qd = null
        super.Fb()
      }
      Qs() {
        return this.Eb
      }
    }
    _.Xe.prototype.Pb = _.ba(7)
    _.Xe.prototype.lb = _.ba(6)
    _.Xe.prototype.wb = _.ba(5)
    _.nga = new _.Ae('n73qwf', 'n73qwf')
    _.tc.prototype.clone = function () {
      return new _.tc(this.x, this.y)
    }
    _.tc.prototype.equals = function (a) {
      return a instanceof _.tc && _.Ye(this, a)
    }
    _.Ye = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.k = _.tc.prototype
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
      a instanceof _.tc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.k.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.Ze = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.k = _.uc.prototype
    _.k.clone = function () {
      return new _.uc(this.width, this.height)
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
    _.wc = {}
    var rga = globalThis.trustedTypes, Wba = rga, Yba
    _.vc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    aca((a) => a``) || aca((a) => a`\0`) || aca((a) => a`\n`) ||
      aca((a) => a`\u0000`)
    _.bca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.sga = _.Ac('about:blank')
    _.Gc = _.Ac('about:invalid#zClosurez')
    var Dc, cca, eca, tga, gca
    Dc = class {
      constructor(a) {
        this.Jm = a
      }
    }
    _.$e = {
      eMd: Ec('tel'),
      VFd: new Dc((a) => /^callto:\+?\d*$/i.test(a)),
      GLd: new Dc((a) => a.indexOf('ssh://') === 0),
      fLd: Ec('rtsp'),
      owc: Ec('data'),
      aBc: Ec('http'),
      bBc: Ec('https'),
      EXTENSION: new Dc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      Izc: Ec('ftp'),
      XJc: new Dc((a) => /^[^:]*([/?#]|$)/.test(a)),
      gEc: Ec('mailto'),
      pJd: Ec('intent'),
      HJd: Ec('market'),
      sJd: Ec('itms'),
      tJd: Ec('itms-appss'),
      uJd: Ec('itms-services'),
      kHd: Ec('fb-messenger'),
      cNd: Ec('whatsapp'),
      yLd: new Dc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      CLd: Ec('sms'),
      TMd: Ec('vnd.youtube'),
      PId: Ec('googlehome'),
      QId: Ec('googlehomesdk'),
      LINE: Ec('line'),
    }
    cca = [_.$e.owc, _.$e.aBc, _.$e.bBc, _.$e.gEc, _.$e.Izc, _.$e.XJc]
    eca = typeof URL === 'function'
    tga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    gca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.dca = () => {}
    _.Mc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.af = new _.Mc(_.wc, rga ? rga.emptyHTML : '')
    _.uga = {
      AId: 0,
      UGd: 1,
      VGd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Sc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.uga[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.lca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.vga = new _.lca(_.wc, rga ? rga.emptyScript : '')
    _.xca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var qca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.yd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.$ca = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.wga = Math.random() * 2147483648 | 0
    _.xga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Aca = /^[a-z][a-z\d-]*$/i,
      Bca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Eca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Fca = ['action', 'formaction', 'href']
    _.yga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.zga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Bga
    _.Aga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Bga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { kv: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { kv: 1 }
        : { kv: 0 }
    }
    _.bf = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Cga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Ega =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Qga = [
        ['A', new Map([['href', { kv: 7 }]])],
        ['AREA', new Map([['href', { kv: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            kv: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { kv: 5 }], ['srcset', { kv: 6 }]])],
        ['IMG', new Map([['src', { kv: 5 }], ['srcset', { kv: 6 }]])],
        ['VIDEO', new Map([['src', { kv: 5 }]])],
        ['AUDIO', new Map([['src', { kv: 5 }]])],
      ],
      Rga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Sga = [
        ['dir', {
          kv: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          kv: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          kv: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { kv: 5 }],
        ['target', {
          kv: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Tga = new _.bf(new Set(Ega), new Map(Qga), new Set(Rga), new Map(Sga)),
      Uga = new _.bf(
        new Set(Ega.concat(['BUTTON', 'INPUT'])),
        new Map(Qga),
        new Set(Rga.concat(['class', 'id', 'name'])),
        new Map(Sga.concat([['style', { kv: 1 }]])),
      ),
      Vga = new _.bf(
        new Set(
          Ega.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Qga),
        new Set(
          Rga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Sga.concat([['style', { kv: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Wga
    _.Xga = function (a, b, c) {
      b = Hca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Jca(g)
          ? (g = Ica(g), g = g === null ? 2 : _.Aga(a.oa, g) ? 1 : 2)
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
        } else if (Jca(d)) g = Wga(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    Wga = function (a, b, c) {
      const d = Ica(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Bga(a.oa, h, d), f
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
          switch (e.kv) {
            case 1:
              ld(c, h, t)
              break
            case 2:
              throw Error()
            case 3:
              ld(c, h, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), ld(c, h, e)) : ld(c, h, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: h, HWb: d },
                  f = _.Gca(t),
                  (e = a.ha(f, e)) && ld(c, h, e.toString()))
                : ld(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, HWb: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, B] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, yQa: B })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Gca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), yQa: v.yQa })
                }
                ld(c, h, Kca(f))
              } else ld(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, HWb: d }
                f = _.Gca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.fca(e)
              e = f !== void 0 && tga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              ld(c, h, e)
          }
        }
      }
      return c
    }
    _.Yga = class {
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
        return _.zca(_.Xga(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Lca = new _.Yga(Tga)
    _.Zga = new _.Yga(Uga)
    _.$ga = new _.Yga(Vga)
    _.aha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { kv: 4 })
      a.ha = new _.bf(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.cf = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.bf(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.bha = class {
      constructor() {
        this.na = !1
        this.ha = Tga
      }
    }
    _.df = class extends _.bha {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.Yga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var cha, eha, qha, rha, sha
    _.pd = function (a) {
      return a ? new _.ef(_.ff(a)) : Vda || (Vda = new _.ef())
    }
    _.gf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.hf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.jf = function (a, b) {
      _.ac(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : cha.hasOwnProperty(d)
          ? a.setAttribute(cha[d], c)
          : _.ia(d, 'aria-') || _.ia(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    cha = {
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
    _.kf = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.uc(a.clientWidth, a.clientHeight)
    }
    _.lf = function (a) {
      return a ? a.defaultView : window
    }
    _.fha = function (a, b) {
      const c = b[1], d = _.dha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.jf(d, c))
      b.length > 2 && eha(a, d, b, 2)
      return d
    }
    eha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Ga(f) || _.Qd(f) && f.nodeType > 0
          ? e(f)
          : _.Vd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ea(f)
              : f,
            e,
          )
      }
    }
    _.mf = function (a) {
      return _.dha(document, a)
    }
    _.dha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.gha = function (a, b) {
      eha(_.ff(a), a, arguments, 1)
    }
    _.nf = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.hha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.iha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.jha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.of = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.kha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.lha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.nha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.mha(a.firstChild, !0)
    }
    _.oha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.mha(a.nextSibling, !0)
    }
    _.pha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.mha(a.previousSibling, !1)
    }
    _.mha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.rf = function (a) {
      return _.Qd(a) && a.nodeType == 1
    }
    _.sf = function (a) {
      return a.parentElement || null
    }
    _.tf = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.ff = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.uf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.nf(a), a.appendChild(_.ff(a).createTextNode(String(b)))
    }
    qha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    rha = { IMG: ' ', BR: '\n' }
    _.tha = function (a) {
      return a.hasAttribute('tabindex') && sha(a)
    }
    _.vf = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.uha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || sha(a))
        : _.tha(a)
    }
    sha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.wf = function (a) {
      const b = []
      _.vha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.vha = function (a, b, c) {
      if (!(a.nodeName in qha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in rha) b.push(rha[a.nodeName])
        else for (a = a.firstChild; a;) _.vha(a, b, c), a = a.nextSibling
      }
    }
    _.ef = function (a) {
      this.xl = a || _.fa.document || document
    }
    _.k = _.ef.prototype
    _.k.kb = _.pd
    _.k.Of = function () {
      return this.xl
    }
    _.k.Xa = function (a) {
      return _.gf(this.xl, a)
    }
    _.k.$ = _.ef.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.xl).getElementsByTagName(String(a))
    }
    _.k.yF = _.ba(9)
    _.k.Ub = _.ba(11)
    _.k.tc = _.ba(13)
    _.k.setProperties = _.jf
    _.k.Cj = function (a) {
      return _.kf(a || this.getWindow())
    }
    _.k.Ib = function (a, b, c) {
      return _.fha(this.xl, arguments)
    }
    _.k.createElement = function (a) {
      return _.dha(this.xl, a)
    }
    _.k.createTextNode = function (a) {
      return this.xl.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.xl.defaultView
    }
    _.k.qo = _.ba(14)
    _.k.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.k.append = _.gha
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
    _.k.nk = _.nf
    _.k.T3b = _.hha
    _.k.aBa = _.iha
    _.k.ZAa = _.jha
    _.k.removeNode = _.of
    _.k.Bub = _.kha
    _.k.getChildren = _.lha
    _.k.tza = _.nha
    _.k.fjb = _.oha
    _.k.f0b = _.pha
    _.k.isElement = _.rf
    _.k.isWindow = function (a) {
      return _.Qd(a) && a.window == a
    }
    _.k.Wka = _.sf
    _.k.contains = _.tf
    _.k.kjb = _.ff
    _.k.jl = _.uf
    _.k.Kx = _.vf
    _.k.wx = _.uha
    _.k.iS = _.wf
    Pd = Pd || {}
    var wha = function () {
      _.Yb.call(this)
    }
    _.Ud(wha, _.Yb)
    wha.prototype.initialize = function () {}
    Tca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Tca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.nfa(function (a) {
      Tca.prototype.execute = a(Tca.prototype.execute)
    })
    Pd.i8a = Tca
    _.Ud(qd, _.Yb)
    qd.prototype.ma = null
    qd.prototype.Ba = wha
    qd.prototype.ka = null
    qd.prototype.getId = function () {
      return this.Aa
    }
    var xha = function (a, b, c) {
        a.qa.push(new Pd.i8a(b, c))
      },
      yha = function (a, b) {
        a.na.push(new Pd.i8a(b, void 0))
      }
    qd.prototype.isLoaded = function () {
      return !!this.ka
    }
    qd.prototype.onLoad = function (a) {
      var b = new this.Ba()
      b.initialize(a())
      this.ka = b
      b = (b = zha(this.oa, a())) || zha(this.qa, a())
      b || (this.na.length = 0)
      return b
    }
    qd.prototype.onError = function (a) {
      ;(a = zha(this.na, a)) && _.ha(Error('ga`' + a))
      this.oa.length = 0
      this.qa.length = 0
    }
    var zha = function (a, b) {
      const c = []
      for (let d = 0; d < a.length; d++) {
        try {
          a[d].execute(b)
        } catch (e) {
          _.ha(e), c.push(e)
        }
      }
      a.length = 0
      return c.length ? c : null
    }
    qd.prototype.Fb = function () {
      qd.Yb.Fb.call(this)
      _.Vb(this.ka)
      this.ma = null
    }
    Pd.h8a = qd
    var Aha = {
      ERROR: 'error',
      IDLE: 'idle',
      xsa: 'active',
      NPc: 'userIdle',
      MPc: 'userActive',
    }
    _.k = Uca.prototype
    _.k.rgc = function () {}
    _.k.s1a = function () {}
    _.k.jGa = function () {}
    _.k.Oua = function () {
      throw Error('ha')
    }
    _.k.cFa = function () {
      throw Error('ia')
    }
    _.k.S_b = function () {
      return this.oa
    }
    _.k.qGa = function (a) {
      this.oa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.l7b = function () {
      return !1
    }
    var Bha, Cha
    Bha = function (a, b) {
      const c = b.styleSheets.length, d = Sca(a, new _.ef(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Cha = function (a) {
      return _.Xd(oga(a), (b) => b.kjb())
    }
    _.Dha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Uda('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.oa
            if (b) {
              if (b = Cha(b), b.length == 0) Bha(a, document)
              else for (let c of b) Bha(a, c)
            } else Bha(a, document)
          }
        })
      }
    }
    var Eha, Fha, Hha
    Eha = function (a) {
      throw Error('ja`' + a.ka)
    }
    Fha = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.yf = function (a) {
      const b = _.xf(a)
      b === null && Eha(a)
      return b
    }
    _.zf = function (a, b) {
      let c
      return (c = _.xf(a)) != null ? c : b
    }
    _.xf = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Fha(a, 'string')
    }
    _.Gha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Fha(a, 'boolean')
    }
    _.Af = function (a, b) {
      let c
      return (c = _.Gha(a)) != null ? c : b
    }
    _.Bf = function (a, b) {
      let c
      return (c = Hha(a)) != null ? c : b
    }
    Hha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Fha(a, 'number')
    }
    _.Jha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Iha(a, b)
    }
    _.Iha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.sd(c + e + ']', d))
    }
    _.sd = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.yf(this) : _.zf(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Hha(this)
          b === null && Eha(this)
        } else b = _.Bf(this, a)
        return b
      }
      toString() {
        return _.yf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Bf(this, b) : _.zf(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Jha(this)
          b === null && Eha(this)
          return b
        }
        b = _.Jha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Eha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.sd(c + d, b[d])
          return a
        }
        throw Fha(this, 'object')
      }
    }
    var Yca
    Yca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Kha = /#|$/
    var Lha,
      gda,
      Cf,
      Oha,
      Rha,
      Pha,
      Qha,
      Sha,
      Tha,
      Uha,
      Vha,
      oda,
      Wha,
      Mha,
      Nha,
      Xha,
      Yha
    _.zd = function (a, b = !0) {
      const c = Lha(a), d = new Mha(), e = _.ud(c)[5]
      _.ac(Nha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && Cf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Oha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.wd(6, c)) && _.ada(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Lha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    gda = function (a) {
      a = Lha(a)
      a = _.vd(_.wd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Cf = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Oha = function (a, b) {
      a.ka = b
    }
    Rha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Pha(a)
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
          'd' in a.ha || Cf(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Df(a, 'br') != '1' && _.Df(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Df(a, 'rb') == '1' && c('rb'),
          _.Df(a, 'zs') !== '0' && c('zs'),
          Qha(a) !== '' && c('wt'),
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
    _.Df = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Pha = function (a) {
      a = _.Df(a, 'md')
      return !!a && a !== '0'
    }
    Qha = function (a) {
      switch (_.Df(a, 'wt')) {
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
    Sha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Cf(a, 'exm', b.join(',')))
        : Cf(a, 'exm', null)
    }
    Tha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Cf(a, 'excm', b.join(',')))
        : Cf(a, 'excm', null)
    }
    Uha = function (a) {
      return (a = _.Df(a, 'm')) ? a.split(',') : []
    }
    Vha = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      Cf(a, 'ee', c.join(';'))
    }
    oda = function (a) {
      var b = _.Df(a, 'ee')
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
    Wha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Mha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Rha(this)
        const b = _.dda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Mha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Nha = {
      eLd: 'k',
      zGd: 'ck',
      RJd: 'm',
      eHd: 'exm',
      cHd: 'excm',
      rFd: 'am',
      xFd: 'amc',
      IJd: 'mm',
      bLd: 'rt',
      hJd: 'd',
      dHd: 'ed',
      FLd: 'sv',
      DGd: 'deob',
      TFd: 'cb',
      bGd: 'ccb',
      UFd: 'cbi',
      wLd: 'rs',
      kLd: 'sdch',
      oJd: 'im',
      EGd: 'dg',
      YGd: 'br',
      XGd: 'br-d',
      ZGd: 'rb',
      mNd: 'zs',
      eNd: 'wt',
      jHd: 'ee',
      ELd: 'sm',
      METADATA: 'md',
      RId: 'gssmodulesetproto',
      QMd: 'ujg',
      PMd: 'sp',
      uLd: 'slk',
      IGd: 'dti',
      rJd: 'ic',
    }
    Xha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    Yha = RegExp('^[a-zA-Z0-9-_*]+$')
    var kda = null, jda = new Map()
    var mda = !1, nda = !1
    var Zha = (a) => {
        a = a.clone()
        Wha(a)
        Cf(a, 'dg', null)
        Cf(a, 'd', '0')
        Sha(a, null)
        Tha(a, null)
        return a
      },
      $ha = !0,
      aia = (a, b, { cssRowKey: c, t9: d, a2: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!Yha.test(g)) throw Error('la`' + g) }
        Cf(a, 'm', b.join(','))
        e && Vha(a, e)
        c && (Cf(a, 'ck', c), d ? Cf(a, 'rs', d) : $ha && ($ha = !1))
        if (f) {
          if (f != null && !Xha.test(f)) throw Error('ma`' + f)
          Cf(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.xd(document.location.href) + a)
        return _.yc(a)
      },
      bia = (
        a,
        b,
        { Fub: c = [], cssRowKey: d, t9: e, a2: f, callback: g } = {},
      ) => {
        a = Zha(a)
        Tha(a, c)
        return aia(a, b, { cssRowKey: d, t9: e, a2: f, callback: g })
      },
      cia = (
        a,
        b,
        { Gub: c = [], Fub: d = [], cssRowKey: e, t9: f, a2: g, callback: h } =
          {},
      ) => {
        a = Zha(a)
        Cf(a, 'd', '1')
        Sha(a, c)
        Tha(a, d)
        return aia(a, b, { cssRowKey: e, t9: f, a2: g, callback: h })
      }
    _.dia = function (a) {
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
    _.fia = function () {}
    _.Ud(_.fia, _.qda)
    _.fia.prototype.xW = function () {
      return new XMLHttpRequest()
    }
    _.eia = new _.fia()
    var hia = function (a) {
        return gia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      gia = function (a) {
        const b = {}, c = b.SU ? b.SU.xW() : _.eia.xW()
        return (new _.Ge(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Ef('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.fa.clearTimeout(f)
              var g
              !(g = _.dia(c.status)) && (g = c.status === 0) &&
                (g = _.Zca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new iia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Ef('Network error', a, c))
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
          b.Px > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new jia(a, c))
          }, b.Px))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new Ef('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Ke &&
            c.abort()
          throw d
        })
      },
      Ef = function (a, b, c) {
        _.da.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Ud(Ef, _.da)
    Ef.prototype.name = 'XhrError'
    var iia = function (a, b, c) {
      Ef.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Ud(iia, Ef)
    iia.prototype.name = 'XhrHttpError'
    var jia = function (a, b) {
      Ef.call(this, 'Request timed out', a, b)
    }
    _.Ud(jia, Ef)
    jia.prototype.name = 'XhrTimeoutError'
    var mia, oia, pia, qia, nia, via, wia, sia, ria, tia, uia
    _.kia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((z) => !_.lc().Ru(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.lc().Ru(v)
        v.isLoaded() ? t() : (v.oa.push(new Pd.i8a(t, void 0)), yha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.lia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.na[f] || (a.na[f] = !0, a.Fa.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    mia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            gda(b) && !_.zd(b).ka.endsWith('_/js/')
        ) {
          b = Uha(_.zd(b))
          for (const c of b) a.Pa.includes(c) || a.Pa.push(c)
        }
      }
    }
    oia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      nia(a, b, (g, h, t = h) => {
        a.Za && f ? a.ab(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    pia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    qia = function (a, b, c, { a2: d, onError: e, toa: f, K6c: g } = {}) {
      a.Da = c
      if (!b) throw Error('qa')
      if (a.mb) {
        for (const h of document.getElementsByTagName('style')) mia(a, h)
        for (const h of document.getElementsByTagName('link')) mia(a, h)
      }
      oia(a, pia(a, b), d, e, f, g)
    }
    nia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          nia(a, b, c, d)
        }),
          !0
      }
      if (!a.qa) {
        const f = []
        var e = Object.assign({}, a.na)
        ria(
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
          h = sia(a, g, d),
          t = _.zc(h).toString()
        for (; t.length > a.iJa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.iJa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = sia(a, g, d),
              t = _.zc(h).toString()
          } else {return a.qa
              ? (a.qa = !1,
                a.ma = tia(a).then((v) => {
                  uia(a, v, d)
                }),
                nia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.qa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    via = function (a) {
      a.Sa || (a.Sa = !0, a.Fa.sort())
      return a.Fa
    }
    wia = function (a) {
      a = a.Pa
      a.sort()
      return a
    }
    sia = function (a, b, c) {
      return a.qa
        ? cia(a.oa, b, {
          cssRowKey: a.Ya,
          t9: a.Wa,
          a2: c,
          Gub: via(a),
          Fub: wia(a),
        })
        : bia(a.oa, b, { cssRowKey: a.Ya, t9: a.Wa, Gub: via(a), Fub: wia(a) })
    }
    _.Ff = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.na[e] && (delete a.na[e], _.Ca(a.Fa, e), c.push(e))
      }
    }
    _.xia = function (a, b, c, d, e, f, g = d) {
      a.Ba = c
      a.Ea.insertBefore(c, a.Ea.firstChild)
      _.kia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        _.Ff(a, h)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    ria = function (a, b, c, d, e, f = {}) {
      const g = _.lc()
      for (let h of b) {
        b = g.Ru(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        ria(a, t, c, d, e, f)
        c(b)
      }
    }
    tia = function (a) {
      a = a.oa.clone()
      Wha(a)
      Cf(a, 'dg', null)
      Cf(a, 'md', '1')
      return hia(a.toString())
    }
    uia = function (a, b, c) {
      _.lc().jGa((b || {}).moduleGraph)
      ria(a, via(a), (d) => {
        _.lia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.Cd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.nb = a
        this.oa = _.zd(_.zc(a).toString(), !0)
        this.Ya = b
        this.Wa = c
        this.qa = d
        this.na = {}
        this.Da = {}
        this.Fa = []
        this.Sa = !0
        this.Pa = (a = _.Df(this.oa, 'excm')) ? a.split(',') : []
        this.mb = e
        this.jJa = !1
        this.Pwa = 'anonymous'
        this.iJa = 4043
        this.Ea = document.head || document.documentElement
        this.ma = this.Ba = null
        this.lb = !0
        _.pda()
        this.logger = null
        _.lia(this, Uha(this.oa))
        this.fetchPriority = void 0
        this.Za = !1
        this.Oa()
      }
      ab() {
        _.Hd(function* () {
          throw Error('ra')
        })
      }
      Oa() {}
      load(a, b, c, d, e = b) {
        _.zc(a)
        var f = this.jJa, g = this.Pwa, h = this.fetchPriority
        const t = _.mf('SCRIPT')
        _.Zc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.lia(this, b)
        _.xia(this, a, t, b, c, d, e)
      }
    }
    var rda = new Uint8Array(123)
    var yia = []
    var Aia = function (a) {
        switch (a.type) {
          case zia.Type.dLb:
            return 'Unauthorized'
          case zia.Type.M5a:
            return 'Consecutive load failures'
          case zia.Type.TIMEOUT:
            return 'Timed out'
          case zia.Type.NIb:
            return 'Out of date module id'
          case zia.Type.F6a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      zia = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.Gub = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Aia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    Pd.gB = zia
    Pd.gB.Type = { dLb: 0, M5a: 1, TIMEOUT: 2, NIb: 3, F6a: 4 }
    var Gf = function () {
      Uca.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Fa = []
      this.ma = {}
      this.ab = {}
      this.Aa = this.Wa = new Pd.h8a([], '')
      this.mb = null
      this.Pa = new _.sc()
      this.Oj = null
      this.wb =
        this.Eb =
        this.yb =
        this.lb =
        this.nb =
          !1
    }
    _.Ud(Gf, Uca)
    var Bia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Ud(Bia, _.da)
    Gf.prototype.rgc = function (a) {
      this.nb = a
    }
    Gf.prototype.s1a = function (a) {
      this.lb = a
    }
    Gf.prototype.jGa = function (a, b) {
      if (!(this instanceof Gf)) this.jGa(a, b)
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
            Cia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) Dia(this, a)
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
            Cia(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Ha(this.na, b), this.mb = _.raa(b))
          : this.Pa.ka || this.Pa.callback()
        Object.freeze(this.Ya)
        Eia(this)
      }
    }
    var Dia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        rda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      Bd(b)
      const d = Bd(b)
      var e = Bd(b) + 1
      const f = Array(d), g = Array(d), h = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, B = b.buf.indexOf('|', b.pos)
      b.pos = B + 1
      for (B = 0; B < d; B++) {
        var I = Bd(b), N = I & 2, S = I & 1
        I >>>= 2
        S
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (S = z, z += I, I = c.substring(S, z))
        f[B] = I
        N && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        z = sda(b), h[t] = z & 7, h[t + 1] = z >>> 3 & 7
      }
      c && (c = sda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Bd(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        z = t === 0 ? yia : Array(t)
        g[c] = z
        B = v
        for (N = 0; N < t; N++) B -= Bd(b), z[N] = e[B]
        e[v] === f[c] && v++
      }
      const { ids: Z, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < Z.length; b++) Cia(a, Z[b], ea[b])
      a.Ya = Z
    }
    _.k = Gf.prototype
    _.k.Ru = function (a) {
      return this.ka[a]
    }
    _.k.Oua = function (a, b) {
      const c = this.Ru(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.cFa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.qGa = function (a) {
      Gf.Yb.qGa.call(this, a)
      Eia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.l7b = function () {
      return this.Fa.length > 0
    }
    var Hf = function (a) {
        var b = a.yb
        const c = a.isActive()
        c != b && (Fia(a, c ? Aha.xsa : Aha.IDLE), a.yb = c)
        b = a.l7b()
        b != a.Eb && (Fia(a, b ? Aha.MPc : Aha.NPc), a.Eb = b)
      },
      Cia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Pd.h8a(c, b)
      },
      Hia = function (a, b, c) {
        const d = []
        _.Ja(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Ru(g)
          if (!h) throw Error('sa`' + g)
          const t = new _.sc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.oa)
            : (Gia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.lb
            ? _.Pe(a.Pa, (0, _.qc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Hf(a)))
        return e
      },
      Gia = function (a, b, c, d, e) {
        xha(c, e.callback, e)
        yha(c, function (f) {
          e.ha(new Bia(b, f))
        })
        a.Oa(b) ? d && (Iia(a, b), Hf(a)) : d && Iia(a, b)
      }
    Gf.prototype.Sa = function (a, b = 0, c) {
      const d = Jia(this, a)
      this.lb ? _.Ha(this.na, d) : this.na = d
      this.Ba = this.nb ? a : _.Ea(d)
      Hf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.qa
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.lb) throw Error('ua')
        qia(a, _.Ea(d), this.ka, {
          a2: this.ma,
          onError: (e, f, g) =>
            Kia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          UDa: (0, _.qc)(this.Mb, this),
          K6c: !!c,
        })
      }
    }
    var Jia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Lia(a, b[d]))
        _.Ja(c)
        return !a.nb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Lia = function (a, b) {
        const c = _.Mba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Ru(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Ru(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ja(d)
        return d
      },
      Eia = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.qc)(a.S_b, a))
          b && b.length &&
            Mia(a, new Pd.gB(Pd.gB.Type.F6a, void 0, void 0, void 0, b[0]))
          Hf(a)
        }
      }
    Gf.prototype.Ea = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Ru(c)
            d && !d.isLoaded() && (this.cFa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.qc)(this.S_b, this))) && b.length &&
            Mia(this, new Pd.gB(Pd.gB.Type.F6a, void 0, void 0, void 0, b[0])),
            _.Ca(this.Fa, a),
            _.Ca(this.na, a),
            this.na.length === 0 && Nia(this),
            this.mb && a == this.mb && (this.Pa.ka || this.Pa.callback()),
            Hf(this),
            this.Aa = null)
      }
    }
    Gf.prototype.Oa = function (a) {
      if (_.za(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.za(this.ha[b], a)) return !0
      }
      return !1
    }
    Gf.prototype.load = function (a, b) {
      return Hia(this, [a], b)[a]
    }
    Gf.prototype.Da = function (a) {
      return Hia(this, a)
    }
    var Iia = function (a, b) {
      _.za(a.Fa, b) || a.Fa.push(b)
    }
    Gf.prototype.rb = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Ea(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Oia(this, this.ka[a].ha || [], (b) => {
        b.ka = new wha()
        _.Ca(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.Ru(a)
    }
    var Kia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ea(c)
      a.Ba = b
      c.forEach(_.Sd(_.Ca, a.Za), a)
      if (d == 401) Mia(a, new Pd.gB(Pd.gB.Type.dLb, d)), a.ha.length = 0
      else if (d == 410) Pia(a, new Pd.gB(Pd.gB.Type.NIb, d)), Nia(a)
      else if (h >= 3) Pia(a, new Pd.gB(Pd.gB.Type.M5a, d, f, e)), Nia(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.fa.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    Gf.prototype.Mb = function () {
      Pia(this, new Pd.gB(Pd.gB.Type.TIMEOUT))
      Nia(this)
    }
    var Pia = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Mia(a, b)
      },
      Mia = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Lia(this, g)
            return _.Zd(c, function (t) {
              return _.za(h, t)
            })
          }, a)
          _.Ha(d, f)
        }
        for (e = 0; e < c.length; e++) _.Aa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Ca(a.ha[f], d[e])
          _.Ca(a.Fa, d[e])
        }
        if (e = a.ab[Aha.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(Aha.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Hf(a)
      },
      Nia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Ru(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Hf(a)
      },
      Fia = function (a, b) {
        a = a.ab[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Oia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Ru(f),
            !e[f] && d(b) && (e[f] = !0, Oia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Gf.prototype.dispose = function () {
      _.Xb(_.cc(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Fa = []
      this.ha = []
      this.ab = {}
      this.wb = !0
    }
    Gf.prototype.isDisposed = function () {
      return this.wb
    }
    _.jc = function () {
      return new Gf()
    }
    var Qia, Ria, Uia, Via, Wia, Xia, Sia, Tia
    Qia = [5E3, 2E4]
    Ria = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Ea()
    }
    Uia = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Ru(c).isLoaded())
      b.length > 0 && (Sia(a, ...b), a.na.push(b), Tia(a))
    }
    Via = function (a, b) {
      return new _.Ge((c, d) => {
        const e = a.Ru(b)
        e.isLoaded() ? c(a.oa) : (xha(e, () => {
          c(a.oa)
        }),
          yha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Pd.gB && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Wia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Ru(f),
          !e[f] && d(b) && (e[f] = !0, Wia(a, b.ha || [], c, d, e), c(b))
      }
    }
    Xia = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Sia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Tia = function (a) {
      for (; a.Aa < a.Fa && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Ru(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            Tia(a)
            c = () => {}
          }
          _.Rfa(b.map((f) => Via(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.qa.lb) throw Error('ua')
            qia(a.qa, b, a.ma, {
              a2: a.ha,
              onError: (f, g) => {
                const h = Qia[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (Xia(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Ru(t)
                      if (!t.isLoaded()) {
                        t.onError(new Pd.gB(Pd.gB.Type.M5a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.Yia = class extends Uca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Fa = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Oj = null
        this.ka = this.Ru('{base}')
      }
      jGa() {
        Ria(this)
      }
      qGa(a) {
        super.qGa(a)
        Ria(this)
      }
      Ru(a) {
        let b = this.ma[a]
        b || (b = new Pd.h8a([], a), this.ma[a] = b)
        return b
      }
      Oua(a, b) {
        this.Ru(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      cFa(a, b) {
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
        Uia(this, [a])
        return Via(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Via(this, d), c.push(d))
        })
        Uia(this, c)
        return b
      }
      rb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Ea()
        let c, d
        Wia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new wha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Ru(a)
      }
      Ea() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Ru(c).isLoaded() || (this.cFa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.oa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          Xia(this, a)
        }
      }
      s1a(a) {
        this.Fa = a ? Infinity : 1
      }
    }
    var Zia = new _.Yia()
    Zia.s1a(!0)
    Zia.qGa(new _.Xe())
    _.Pba(Zia)
    ;(new _.Dha(Zia)).init()
    _.tda()
    var $ia = _.Af(_.td('hxvedd'), !1), aja = _.Af(_.td('dLc0B'), !1)
    if (_.Af(_.td('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (aja ? 2 : $ia ? 1 : 0) {
      case 2:
        ;(0, _.Dd)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.Dd)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.Dd)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.ic) {
        if (!_.jc) return
        _.Pba(_.jc())
      }
      _.ic.jGa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
