// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.HIU1PSnl1Bk.2018.O/am=IxwExICAxm8o4hMABAC_AQY/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk1WCgzoAWtFzSASbTPo5YQHgmaBTg/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.zClqao_bE8I.libheifWasm.O%3A%3BBardChatUi.H7dRGcXM25M.loadWasmSipCoca.O%3A%3B
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
      ua,
      vaa,
      waa,
      Baa,
      Pa,
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
      Fc,
      hca,
      jca,
      nca,
      Ica,
      Jca,
      Kca,
      ld,
      Lca,
      Tca,
      Uca,
      qd,
      Vca,
      Wca,
      gda,
      ida,
      jda,
      mda,
      uda,
      vda,
      aaa,
      Bd,
      yda,
      zda,
      Ada,
      Cd,
      Bda,
      Dda,
      Dd,
      Cda,
      Eda,
      Fda,
      Gda,
      Ida,
      Hda,
      Jda
    _.ca = function (a) {
      return function () {
        return aaa[a].apply(this, arguments)
      }
    }
    _.da = function (a, b) {
      return aaa[a] = b
    }
    _.fa = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.fa)
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
      _.fa.call(this, c + a[d])
    }
    _.ia = function (a) {
      _.ha.setTimeout(() => {
        throw a
      }, 0)
    }
    _.ja = function (a, b) {
      return a.lastIndexOf(b, 0) == 0
    }
    _.la = function (a) {
      return /^[\s\xa0]*$/.test(a)
    }
    _.ma = function (a, b) {
      return a.indexOf(b) != -1
    }
    _.caa = function (a) {
      return _.ma(_.na().toLowerCase(), a.toLowerCase())
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
    _.na = function () {
      var a = _.ha.navigator
      return a && (a = a.userAgent) ? a : ''
    }
    _.gaa = function (a) {
      if (!_.faa || !_.oa) return !1
      for (let b = 0; b < _.oa.brands.length; b++) {
        const { brand: c } = _.oa.brands[b]
        if (c && _.ma(c, a)) return !0
      }
      return !1
    }
    _.pa = function (a) {
      return _.ma(_.na(), a)
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
    _.ra = function () {
      return _.pa('Firefox') || _.pa('FxiOS')
    }
    _.ta = function () {
      return _.pa('Safari') &&
        !(_.sa() || (_.qa() ? 0 : _.pa('Coast')) || _.haa() ||
          (_.qa() ? 0 : _.pa('Edge')) || _.jaa() ||
          (_.qa() ? _.gaa('Opera') : _.pa('OPR')) || _.ra() || _.pa('Silk') ||
          _.pa('Android'))
    }
    _.sa = function () {
      return _.qa()
        ? _.gaa('Chromium')
        : (_.pa('Chrome') || _.pa('CriOS')) && !(_.qa() ? 0 : _.pa('Edge')) ||
          _.pa('Silk')
    }
    _.kaa = function () {
      return _.pa('Android') && !(_.sa() || _.ra() || _.haa() || _.pa('Silk'))
    }
    ua = function (a = !1) {
      return a || _.faa ? !!_.oa && !!_.oa.platform : !1
    }
    _.laa = function () {
      return ua() ? _.oa.platform === 'Android' : _.pa('Android')
    }
    _.maa = function () {
      return _.pa('iPhone') && !_.pa('iPod') && !_.pa('iPad')
    }
    _.va = function () {
      return _.maa() || _.pa('iPad') || _.pa('iPod')
    }
    _.wa = function () {
      return ua() ? _.oa.platform === 'macOS' : _.pa('Macintosh')
    }
    _.naa = function () {
      return ua() ? _.oa.platform === 'Linux' : _.pa('Linux')
    }
    _.oaa = function () {
      return ua() ? _.oa.platform === 'Windows' : _.pa('Windows')
    }
    _.paa = function () {
      return ua() ? _.oa.platform === 'Chrome OS' : _.pa('CrOS')
    }
    _.qaa = function () {
      var a = _.na(), b = ''
      _.oaa()
        ? (b = /Windows (?:NT|Phone) ([0-9.]+)/,
          b = (a = b.exec(a)) ? a[1] : '0.0')
        : _.va()
        ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
          b = (a = b.exec(a)) && a[1].replace(/_/g, '.'))
        : _.wa()
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
    _.ya = function (a, b, c) {
      b = _.taa(a, b, c)
      return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b]
    }
    _.taa = function (a, b, c) {
      const d = a.length, e = typeof a === 'string' ? a.split('') : a
      for (let f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f
      return -1
    }
    _.Aa = function (a, b) {
      return _.za(a, b) >= 0
    }
    _.Ba = function (a, b) {
      _.Aa(a, b) || a.push(b)
    }
    _.Da = function (a, b) {
      b = _.za(a, b)
      let c
      ;(c = b >= 0) && _.Ca(a, b)
      return c
    }
    _.Ca = function (a, b) {
      Array.prototype.splice.call(a, b, 1)
    }
    _.Ga = function (a) {
      const b = a.length
      if (b > 0) {
        const c = Array(b)
        for (let d = 0; d < b; d++) c[d] = a[d]
        return c
      }
      return []
    }
    _.Ja = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c]
        if (_.Ha(d)) {
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
    _.La = function (a, b, c) {
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
    _.Ma = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    vaa = function () {
      return _.maa() || _.pa('iPod')
    }
    waa = function () {
      return _.ta() && !_.va()
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
    _.Na = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Oa = function () {
      return typeof BigInt === 'function'
    }
    Pa = function (a, b = !1) {
      return b && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
    }
    _.Sa = function (a, b) {
      a[_.Ra] |= b
    }
    _.Ta = function (a) {
      _.Sa(a, 34)
      return a
    }
    _.Eaa = function (a) {
      _.Sa(a, 8192)
      return a
    }
    _.Faa = function (a) {
      _.Sa(a, 32)
      return a
    }
    _.Xa = function (a) {
      return a != null && a[_.Ua] === _.Wa
    }
    _.$a = function (a, b) {
      return b === void 0
        ? a.Eb !== _.Za && !!(2 & (a.Zg[_.Ra] | 0))
        : !!(2 & b) && a.Eb !== _.Za
    }
    _.Gaa = function (a, b) {
      a.Eb = b ? _.Za : void 0
    }
    _.Haa = function (a) {
      return a
    }
    _.ab = function (a) {
      a.gSd = !0
      return a
    }
    _.eb = function (a) {
      var b = a
      if ((0, _.bb)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.cb)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.db
        ? BigInt(a)
        : a = (0, _.Iaa)(a)
          ? a ? '1' : '0'
          : (0, _.bb)(a)
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
      _.fb = b
      _.ib = (a - b) / 4294967296 >>> 0
    }
    _.jb = function (a) {
      if (a < 0) {
        _.Kaa(-a)
        const [b, c] = _.Laa(_.fb, _.ib)
        _.fb = b >>> 0
        _.ib = c >>> 0
      } else _.Kaa(a)
    }
    _.Maa = function (a, b) {
      const c = b * 4294967296 + (a >>> 0)
      return Number.isSafeInteger(c) ? c : _.kb(a, b)
    }
    _.kb = function (a, b) {
      b >>>= 0
      a >>>= 0
      if (b <= 2097151) { var c = '' + (4294967296 * b + a) }
      else {_.Oa()
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
      if (a.length < 16) _.jb(Number(a))
      else if (_.Oa()) {
        a = BigInt(a),
          _.fb = Number(a & BigInt(4294967295)) >>> 0,
          _.ib = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.ib = _.fb = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.ib *= 1E6
          _.fb = _.fb * 1E6 + f
          _.fb >= 4294967296 &&
            (_.ib += Math.trunc(_.fb / 4294967296), _.ib >>>= 0, _.fb >>>= 0)
        }
        if (b) {
          const [d, e] = _.Laa(_.fb, _.ib)
          _.fb = d
          _.ib = e
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
      _.ia(a)
    }
    _.lb = function (a) {
      a = Error(a)
      _.Paa(a, 'severity', 'warning')
      return a
    }
    _.mb = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Raa) != null ? c : Raa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Qaa())
      }
    }
    _.nb = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Saa = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.ob(a) + '`' + a)
      return a
    }
    _.Taa = function (a) {
      if (a == null || typeof a === 'boolean') return a
      if (typeof a === 'number') return !!a
    }
    _.qb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.pb)(a)
        case 'string':
          return Uaa.test(a)
        default:
          return !1
      }
    }
    _.rb = function (a) {
      if (typeof a !== 'number') throw _.lb('int32')
      if (!(0, _.pb)(a)) throw _.lb('int32')
      return a | 0
    }
    _.sb = function (a) {
      if (a == null) return a
      if (typeof a === 'string' && a) a = +a
      else if (typeof a !== 'number') return
      return (0, _.pb)(a) ? a | 0 : void 0
    }
    Vaa = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Oaa(a)
      return _.kb(_.fb, _.ib)
    }
    _.Waa = function (a) {
      a = (0, _.tb)(a)
      a >= 0 && (0, _.ub)(a) || (_.jb(a), a = _.Maa(_.fb, _.ib))
      return a
    }
    _.Xaa = function (a) {
      a = (0, _.tb)(a)
      a >= 0 && (0, _.ub)(a) ? a = String(a) : (_.jb(a), a = _.kb(_.fb, _.ib))
      return a
    }
    _.Yaa = function (a) {
      return (0, _.ub)(a) ? _.eb(_.Waa(a)) : _.eb(_.Xaa(a))
    }
    _.Zaa = function (a) {
      var b = (0, _.tb)(Number(a))
      if ((0, _.ub)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return Vaa(a)
    }
    _.$aa = function (a) {
      var b = (0, _.tb)(Number(a))
      if ((0, _.ub)(b) && b >= 0) return _.eb(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Oa() ? _.eb((0, _.vb)(64, BigInt(a))) : _.eb(Vaa(a))
    }
    _.aba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.eb((0, _.vb)(64, a))
      if (_.qb(a)) return b === 'string' ? _.$aa(a) : _.Yaa(a)
    }
    _.wb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.xb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.cba = function (a, b, c, d) {
      if (_.Xa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.yb] || (b[_.yb] = _.bba(b)) : new b()
          : void 0
      }
      c = a[_.Ra] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Ra] = d)
      return new b(a)
    }
    _.bba = function (a) {
      a = new a()
      _.Ta(a.Zg)
      return a
    }
    dba = function (a) {
      return a
    }
    eba = function (a, b, c, d, e, f) {
      a = _.cba(a, d, c, f)
      e && (a = _.zb(a))
      return a
    }
    fba = function (a) {
      return [a, this.get(a)]
    }
    _.gba = function (a) {
      const b = _.Ab(_.Bb)
      return b ? a[b] : void 0
    }
    iba = function (a, b) {
      b < 100 || _.mb(hba, 1)
    }
    _.Db = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.Ab(_.Bb), g
      !e && f && (g = a[f]) && g.JSa(iba)
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
            const aa = I - B
            var N = void 0
            ;((N = b) != null ? N : b = {})[aa] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          N = t[S]
          if (N == null || (N = c(N, d)) == null) continue
          h = +S
          let aa
          if (z && !Number.isNaN(h) && (aa = h + B) < g) f[aa] = N
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[S] = N
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.Ab(_.Bb) && (a = _.gba(a)) && 'function' == typeof _.kba &&
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
            const b = a[_.Ra] | 0
            return a.length === 0 && b & 1 ? void 0 : _.Db(a, b, _.Eb)
          }
          if (_.Xa(a)) return mba(a)
          if (a instanceof _.Hb) return _.Ib(a)
          if (a instanceof _.Jb) {
            return a = a.size !== 0 ? a.q4a(lba) : void 0, a
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
      a = a.Zg
      return _.Db(a, a[_.Ra] | 0, _.Eb)
    }
    _.sba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.Ra] | 0
        if (qba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && rba()
        if (e & 256) throw Error('G')
        if (e & 64) return (e | d) !== e && (a[_.Ra] = e | d), a
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
      a[_.Ra] = e | 64 | d
      return a
    }
    rba = function () {
      if (qba) throw Error('I')
      _.mb(tba, 5)
    }
    wba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Ra] | 0
        return a.length === 0 && c & 1 ? void 0 : uba(a, c, b)
      }
      if (_.Xa(a)) return vba(a)
      if (a instanceof _.Jb) {
        b = a.t0
        if (b & 2) return a
        if (!a.size) return
        c = _.Ta(a.q4a())
        if (a.m7) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Xa(e)
              ? e = vba(e)
              : Array.isArray(e)
              ? e = uba(e, e[_.Ra] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if (a instanceof _.Hb) return a
    }
    uba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.Kb(a, b, !1, c && !(b & 16))
        : (_.Sa(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.xba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Gaa(a, !0)
      a.pZa = _.Za
      return a
    }
    vba = function (a) {
      const b = a.Zg, c = b[_.Ra] | 0
      return _.$a(a, c) ? a : _.yba(a, b, c) ? _.xba(a, b) : _.Kb(b, c)
    }
    _.Kb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Db(a, b, wba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Ra] = b
      return a
    }
    _.zb = function (a) {
      const b = a.Zg, c = b[_.Ra] | 0
      return _.$a(a, c)
        ? _.yba(a, b, c) ? _.xba(a, b, !0) : new a.constructor(_.Kb(b, c, !1))
        : a
    }
    _.Lb = function (a) {
      if (a.Eb !== _.Za) return !1
      var b = a.Zg
      b = _.Kb(b, b[_.Ra] | 0)
      _.Sa(b, 2048)
      a.Zg = b
      _.Gaa(a, !1)
      a.pZa = void 0
      return !0
    }
    _.Mb = function (a) {
      if (!_.Lb(a) && _.$a(a, a.Zg[_.Ra] | 0)) throw Error()
    }
    _.Nb = function (a, b) {
      b === void 0 && (b = a[_.Ra] | 0)
      b & 32 && !(b & 4096) && (a[_.Ra] = b | 4096)
    }
    _.yba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Ra] = c | 2, _.Gaa(a, !0), !0)
        : !1
    }
    _.Ob = function (a, b, c, d, e) {
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
        g = ((h = b) != null ? h : b = a[_.Ra] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.zba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Pb(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Ra] = b),
            Object.freeze(a))
        : (g === 2 && _.Pb(b) &&
          (a = [...a], v = 0, b = _.Rb(b, d), d = _.Ob(c, d, e, a, f)),
          _.Pb(b) || (t || (b |= 16), b !== v && (a[_.Ra] = b)))
      2 & b || !(4096 & b || 16 & b) || _.Nb(c, d)
      return a
    }
    _.Aba = function (a, b, c) {
      a = _.Sb(a, b, c)
      return Array.isArray(a) ? a : _.Tb
    }
    _.Bba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Pb = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Vb = function (a, b, c, d, e) {
      _.Mb(a)
      const f = a.Zg
      _.Ob(
        f,
        f[_.Ra] | 0,
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
        _.Sb(b, h, e) != null &&
          (f !== 0 && (c = _.Ob(b, c, f, void 0, e)), f = h)
      }
      a.set(d, f)
      return f
    }
    _.Fba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.$a(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.Lb(a) && (b = a.Zg, c = b[_.Ra] | 0)
      a = _.Aba(b, e, g)
      var z = a === _.Tb ? 7 : a[_.Ra] | 0, B = _.Bba(z, c)
      if (t = !(4 & B)) {
        var I = a, N = c
        const S = !!(2 & B)
        S && (N |= 2)
        let aa = !S, ea = !0, ka = 0, Fa = 0
        for (; ka < I.length; ka++) {
          const Ia = _.cba(I[ka], d, !1, N)
          if (Ia instanceof d) {
            if (!S) {
              const Va = _.$a(Ia)
              aa && (aa = !Va)
              ea && (ea = Va)
            }
            I[Fa++] = Ia
          }
        }
        Fa < ka && (I.length = Fa)
        B |= 4
        B = ea ? B & -4097 : B | 4096
        B = aa ? B | 8 : B & -9
      }
      B !== z && (a[_.Ra] = B, 2 & B && Object.freeze(a))
      if (
        v && !(8 & B ||
          !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & B || !(16 & B) && 32 & c)))
      ) {
        _.Pb(B) && (a = [...a], B = _.Rb(B, c), c = _.Ob(b, c, e, a, g))
        d = a
        v = B
        for (z = 0; z < d.length; z++) {
          I = d[z], B = _.zb(I), I !== B && (d[z] = B)
        }
        v |= 8
        B = v = d.length ? v | 4096 : v & -4097
        a[_.Ra] = B
      }
      return a = _.zba(a, B, b, c, e, g, f, t, h)
    }
    _.Rb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Gba = function (a, b) {
      return _.Wb(b, `[${a.substring(4)}`)
    }
    _.Xb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Yb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Ha(d) ? _.Yb.apply(null, d) : _.Xb(d)
      }
    }
    _.Zb = function () {
      this.GR = this.GR
      this.Ica = this.Ica
    }
    _.ac = function (a, b) {
      _.$b.call(this, a ? a.type : '')
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
      this.ki = null
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
      this.removed = this.Cia = !1
    }
    _.bc = function (a, b, c) {
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
    _.dc = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.ec = function (a) {
      for (const b in a) return !1
      return !0
    }
    _.hc = function (a, b) {
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
    _.ic = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Oba = function (a) {
      if (_.jc) a(_.jc)
      else {
        let b
        ;((b = Nba) != null ? b : Nba = []).push(a)
      }
    }
    _.mc = function () {
      !_.jc && _.lc && _.Pba(_.lc())
      return _.jc
    }
    _.Pba = function (a) {
      _.jc = a
      let b
      ;(b = Nba) == null || b.forEach(_.Oba)
      Nba = void 0
    }
    _.nc = function (a) {
      _.jc && _.jc.rb(a)
    }
    _.oc = function () {
      _.jc && _.jc.Ea()
    }
    _.pc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Qba] = a
    }
    _.qc = function () {
      _.Zb.call(this)
      this.ZR = new _.ic(this)
      this.IUc = this
      this.ntb = null
    }
    _.tc = function (a, b) {
      let c = a
      b && (c = (0, _.sc)(a, b))
      c = _.tc.mrc(c)
      _.tc.lQc
        ? setTimeout(c, 0)
        : (c = _.tc.kpd(c), _.tc.Cac || (_.tc.Cac = _.tc.Y7c()), _.tc.Cac(c))
    }
    Vba = function () {
      let a
      for (; a = Rba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ia(b)
        }
        Sba(Tba, a)
      }
      Uba = !1
    }
    _.uc = function (a, b) {
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
    _.vc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.wc = function (a, b) {
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
    _.zc = function (a) {
      const b = Zba()
      a = b ? b.createScriptURL(a) : a
      return new _.xc(_.yc, a)
    }
    _.$ba = function (a) {
      return a instanceof _.xc
    }
    _.Ac = function (a) {
      if (_.$ba(a)) return a.ha
      throw Error('$')
    }
    aca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.Bc = function (a) {
      return new _.bca(_.yc, a)
    }
    _.Cc = function (a) {
      return a instanceof _.bca
    }
    _.Dc = function (a) {
      if (_.Cc(a)) return a.ha
      throw Error('$')
    }
    Fc = function (a) {
      return new Ec((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Gc = function (a, b = cca) {
      if (_.Cc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Ec && d.Nm(a)) return _.Bc(a)
      }
    }
    _.Ic = function (a, b = cca) {
      b = _.Gc(a, b)
      b === void 0 && _.dca(a.toString())
      return b || _.Hc
    }
    _.Jc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.Bc(URL.createObjectURL(a))
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
      return _.Bc(URL.createObjectURL(a))
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
    _.Lc = function (a) {
      return a instanceof _.bca ? _.Dc(a) : hca(a)
    }
    _.Mc = function (a, b) {
      b = _.Lc(b)
      b !== void 0 && (a.href = b)
    }
    _.Oc = function (a) {
      const b = Zba()
      a = b ? b.createHTML(a) : a
      return new _.Nc(_.yc, a)
    }
    _.ica = function (a) {
      return a instanceof _.Nc
    }
    _.Pc = function (a) {
      if (_.ica(a)) return a.ha
      throw Error('$')
    }
    _.Qc = function (a, b) {
      a.src = _.Ac(b).toString()
    }
    _.Rc = function (a, b) {
      a.srcdoc = _.Pc(b)
    }
    _.Sc = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Uc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.xc) throw new _.Tc('TrustedResourceUrl', 0)
          _.Sc(a, [])
          b = _.Lc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.xc)) throw new _.Tc(typeof c, 1)
          _.Sc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Qc(a, c)
          break
        case 2:
          if (c instanceof _.xc) throw new _.Tc('TrustedResourceUrl', 2)
          _.Sc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.Lc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.nb(b, void 0)
      }
    }
    _.Vc = function (a, b, c, d) {
      b = _.Lc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Wc = function (a) {
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
    _.Xc = function (a) {
      const b = Zba()
      a = b ? b.createScript(a) : a
      return new _.lca(_.yc, a)
    }
    _.mca = function (a) {
      return a instanceof _.lca
    }
    _.Yc = function (a) {
      if (_.mca(a)) return a.ha
      throw Error('$')
    }
    nca = function (a) {
      const b = _.Wc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.Zc = function (a, b, c) {
      a.textContent = _.Yc(b)
      ;(c == null ? 0 : c.Cld) || nca(a)
    }
    _.ad = function (a, b, c) {
      a.src = _.Ac(b)
      ;(c == null ? 0 : c.Cld) || nca(a)
    }
    _.cd = function (a, b) {
      a.nodeType === 1 && _.oca(a)
      a.innerHTML = _.Pc(b)
    }
    _.oca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('$')
    }
    _.rca = function (a, b, c) {
      if (_.$ba(b)) _.pca(a, b, c)
      else {
        if (qca.indexOf(c) === -1) throw Error('ba`' + c)
        b = _.Lc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.pca = function (a, b, c) {
      a.href = _.Ac(b).toString()
      a.rel = c
    }
    _.sca = function (a) {
      return 'function' == typeof _.dd && a instanceof _.dd
    }
    _.tca = function (a) {
      if (_.sca(a)) return a.ha
      throw Error('$')
    }
    _.fd = function (a, b, c) {
      return a.parseFromString(_.Pc(b), c)
    }
    _.gd = function (a, b) {
      b = _.Lc(b)
      b !== void 0 && (a.href = b)
    }
    _.uca = function (a, b) {
      return a.createContextualFragment(_.Pc(b))
    }
    _.vca = function (a) {
      return _.Oc(a)
    }
    _.wca = function (a) {
      return _.zc(a)
    }
    _.hd = function (a) {
      a = a[0].toLowerCase()
      return new _.xca(_.yc, a)
    }
    _.jd = function (a, b) {
      if (_.ica(a)) return a
      a = _.id(String(a))
      if (b == null ? 0 : b.ZTd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.D_a) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.aUd) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Oc(a)
    }
    _.id = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.zca = function (a) {
      return _.yca('', a)
    }
    _.yca = function (a, b) {
      a = _.jd(a)
      return _.Oc(b.map((c) => _.Pc(_.jd(c))).join(_.Pc(a).toString()))
    }
    _.Aca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Oc(a)
    }
    _.Dca = function (a) {
      if (!Bca.test(a)) throw Error('$')
      if (Cca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.kd = function (a, b, c) {
      _.Dca(a)
      let d = `<${a}`
      b && (d += _.Eca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Fca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.zca(c.map((e) => _.ica(e) ? e : _.jd(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Oc(d)
    }
    _.Eca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Bca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Gca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.Cc(e)
              ? e.toString()
              : hca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.jd(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Hca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Ica = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Oc(a)
      return _.uca(c, a)
    }
    Jca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Kca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    ld = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Lca = function (a) {
      return a.parts.map((b) => {
        const c = b.NQa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.md = function (a) {
      return _.Mca.sanitize(a)
    }
    _.Nca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        b5a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.nd = function (a, ...b) {
      if (b.length === 0) return _.zc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.zc(c)
    }
    _.od = function (a, b) {
      a = _.Nca(_.Ac(a).toString())
      return _.Oca(a.b5a, a.params, a.fragment, b)
    }
    _.Oca = function (a, b, c, d) {
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
      return _.zc(a + b + c)
    }
    _.Pca = function (a, b) {
      a = _.Nca(_.Ac(a).toString())
      const c = a.b5a.slice(-1) === '/' ? '' : '/'
      b = a.b5a + c + encodeURIComponent(b)
      return _.zc(b + a.params + a.fragment)
    }
    _.Qca = function (a) {
      a = _.Yc(a).toString()
      return _.zc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.Rca = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.Sca = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    Tca = function (a, b) {
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
    Uca = function (a, b) {
      this.ha = a
      this.ka = b
    }
    qd = function (a, b) {
      _.Zb.call(this)
      this.ha = a
      this.Aa = b
      this.qa = []
      this.na = []
      this.oa = []
    }
    Vca = function () {
      this.qa = this.oa = null
    }
    Wca = function (a = window) {
      return a.WIZ_global_data
    }
    _.Xca = function (a, b = window) {
      return (b = Wca(b)) && a in b ? b[a] : null
    }
    _.td = function (a, b = window) {
      return new _.sd(a, _.Xca(a, b))
    }
    _.Yca = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.ud = function (a) {
      return a.match(Zca)
    }
    _.vd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.wd = function (a, b) {
      return _.ud(b)[a] || null
    }
    _.$ca = function (a) {
      a = _.wd(1, a)
      !a && _.ha.self && _.ha.self.location &&
        (a = _.ha.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.xd = function (a) {
      a = _.ud(a)
      return _.Yca(a[1], a[2], a[3], a[4])
    }
    _.bda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.ada(f) : '')
        }
      }
    }
    _.cda = function (a, b) {
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
    _.dda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.dda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.zd(b)))
    }
    _.eda = function (a) {
      const b = []
      for (const c in a) _.dda(c, a[c], b)
      return b.join('&')
    }
    _.fda = function (a, b, c, d) {
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
    gda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    ida = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      const d = _.ha._F_jsUrl
      ;(a = b || gda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!hda(c)) throw Error('pa')
      return c
    }
    jda = function () {
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
    mda = function (a) {
      const { promise: b, resolve: c, reject: d } = jda()
      kda.set(a, { promise: b, resolve: c, reject: d })
      lda || (lda = [],
        queueMicrotask(() => {
          const e = [...lda]
          lda = null
          const f = _.mc().Da(e)
          for (const g of e) f[g].then(kda.get(g).resolve, kda.get(g).reject)
        }))
      lda.push(a)
      return b
    }
    _.rda = function () {
      if (nda) return oda
      nda = !0
      let a
      try {
        a = ida(_.ha._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = pda(_.qda(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Oba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.Yua(e, g)
        }
      })
      return oda = !0
    }
    _.sda = function () {}
    uda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return tda[a]
    }
    vda = function (a) {
      let b = 0, c = 0, d
      do d = uda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.xda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.y9 || ''
      !c.YPd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('wa')
      }
      const f = c.NSd || _.wda
      a = gda(a)
      b = new f(
        _.wca(ida('', a), {
          qpb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.JWd || a && a.hasAttribute('crossorigin')
      a = c.APd || a && a.getAttribute('crossorigin')
      d && (b.uJa = d)
      a && (b.Zwa = a)
      c.tJa && (b.tJa = c.tJa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.mc()
      g.qa = b
      g.Ngc(!0)
      _.Ad = c.ROd === 'BATCH' ? mda : (h) => Promise.resolve(g.load(h))
    }
    aaa = []
    yda = Object.create
    zda = Object.defineProperty
    Ada = function (a) {
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
    Cd = Ada(this)
    Bda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Cd.BigInt64Array && (Bda.push('BigInt64'), Bda.push('BigUint64'))
    Dda = function (a, b) {
      if (b) {
        for (var c = 0; c < Bda.length; c++) {
          Cda(Bda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Dd = function (a, b) {
      b && Cda(a, b)
    }
    Cda = function (a, b) {
      var c = Cd
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
        zda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Eda = Object.setPrototypeOf
    Fda = function (a, b) {
      a.prototype = yda(b.prototype)
      a.prototype.constructor = a
      Eda(a, b)
      a.Zb = b.prototype
    }
    Gda = function (a) {
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
    _.Ed = function (a) {
      return Gda(a())
    }
    Dd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    Dd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (Bd = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(Cd.top) || b(Cd) || b({})
      return a || {}
    })
    Ida = function () {
      return Hda
    }
    _.Fd = function () {
      return Ida
    }
    Hda = function (a) {
      return a
    }
    Jda = function (a) {
      var b = Bd
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
    Dd('globalThis', function (a) {
      return a || Cd
    })
    Dd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    Dd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    Dd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    Dd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    Dd('Object.fromEntries', function (a) {
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
    Dd('String.prototype.replaceAll', function (a) {
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
    Dd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    Dd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    Dd('Promise.withResolvers', function (a) {
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
    Dd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var Kda = {},
      Lda = function () {
        if (typeof Cd.EventTarget === 'function') {
          var a = Cd.EventTarget.prototype
        } else {for (
            a = Cd;
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
            var t = Kda[f]
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
                  h && Cd.AbortSignal && h.signal instanceof
                    Cd.AbortSignal
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
          Lda = function () {}
        }
      },
      Mda = function (a) {
        var b = ['readystatechange']
        Lda()
        for (let c = 0; c < b.length; c++) {
          ;(Kda[b[c]] || (Kda[b[c]] = [])).push(a)
        }
      },
      Gd = function (a, b) {
        Cda(a, function (c) {
          return c && b(c)
        })
      },
      Nda = !1
    Dd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.Fd = c)
        c = a._JSC
        typeof c === 'function' && (Ida = c)
        return a
      }
      Nda = !0
      Hda = function (e) {
        return e
      }
      var d = Bd
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
      b['\u1d43\u1d9cstart'] = _.Fd = function (e) {
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
      b._JSC = Ida = function (e) {
        var f = (0, _.Fd)(e)
        return function (g, h) {
          return f(h)(g)
        }
      }
      return b
    })
    Nda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var h = 0; h < e.length; h++) {
                var t = e[h], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Jda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              zda(g, 'name', { value: f.name }),
                zda(g, 'length', { value: f.length }),
                zda(g, 'toString', {
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
      Gd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      Gd('queueMicrotask', b)
      Gd('requestAnimationFrame', b)
      Gd('requestIdleCallback', b)
      Gd('setInterval', b)
      Gd('setTimeout', b)
      Gd('HTMLCanvasElement.prototype.toBlob', b)
      Gd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      Gd('FileSystemEntry.prototype.getParent', a(0, 1))
      Gd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      Gd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      Gd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      Gd('XMLHttpRequest.prototype.send', function (d) {
        Mda(function (e) {
          return function () {
            var f = Bd[0]
            try {
              return Bd[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              Bd[0] = f
            }
          }
        })
        return function () {
          c.set(this, Bd[0])
          return d.apply(this, arguments)
        }
      })
    }()
    Dd('Promise.prototype.finally', function (a) {
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
    Dd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    Dd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = Bd
      b.wrap = Jda
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
    Dd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Oda(this)
        Pda(b)
        var c = Qda(this, b)
        b = new Set(this)
        var d = c.Nyb
        c = c.wpb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Dd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Oda(this)
        Pda(b)
        var c = new Set(), d = Qda(this, b)
        b = d.Nyb
        d = d.wpb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var Pda = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      Qda = function (a, b) {
        if (a.size <= b.size) a = { Nyb: a.keys(), wpb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { Nyb: b, wpb: a }
        }
        return a
      },
      Oda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      Rda = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    Dd('Array.prototype.at', function (a) {
      return a ? a : Rda
    })
    Dda('at', function (a) {
      return a ? a : Rda
    })
    Dd('String.prototype.at', function (a) {
      return a ? a : Rda
    })
    Dd('Array.prototype.flat', function (a) {
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
    Dd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    Dd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var Sda = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    Dd('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return Sda(d, b, c)
      }
    })
    Dda('with', function (a) {
      return a ? a : function (b, c) {
        return Sda(this.slice(), b, c)
      }
    })
    Dd('Promise.allSettled', function (a) {
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
    Dd('String.prototype.matchAll', function (a) {
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
    var Tda = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Dd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return Tda(this, b, c).v
      }
    })
    Dda('findLast', function (a) {
      return a ? a : function (b, c) {
        return Tda(this, b, c).v
      }
    })
    Dd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Fda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    Dd('Promise.any', function (a) {
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
    var Jd, Md, Vda, Wda, Xda
    _.Uda = _.Uda || {}
    _.ha = this || self
    _.Hd = function (a, b, c) {
      a = a.split('.')
      c = c || _.ha
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    Jd = function (a, b) {
      var c = _.Id('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.Ld = _.ha._F_toggles_default_BardChatUi || []
    Md = function () {}
    Md.get = function () {
      return null
    }
    _.Ad = null
    _.Id = function (a, b) {
      a = a.split('.')
      b = b || _.ha
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.ob = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ha = function (a) {
      var b = _.ob(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.Nd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.Od = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Vda) && a[Vda] ||
        (a[Vda] = ++Wda)
    }
    Vda = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    Wda = 0
    Xda = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.sc = function (a, b, c) {
      _.sc = Xda
      return _.sc.apply(null, arguments)
    }
    _.Pd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.Qd = function () {
      return Date.now()
    }
    _.Yda = function (a, b, c) {
      _.Hd(a, b, c)
    }
    _.Ab = function (a) {
      return a
    }
    _.Rd = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Zb = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++
        ) g[h - 2] = arguments[h]
        return b.prototype[e].apply(d, g)
      }
    }
    _.Rd(_.fa, Error)
    _.fa.prototype.name = 'CustomError'
    var Zda
    _.Rd(baa, _.fa)
    baa.prototype.name = 'AssertionError'
    _.$da = typeof TextDecoder !== 'undefined'
    _.aea = typeof TextEncoder !== 'undefined'
    var bea = !!(_.Ld[5] & 4),
      cea = !!(_.Ld[4] >> 27 & 1),
      dea = !!(_.Ld[5] & 16),
      eea = !!(_.Ld[4] >> 19 & 1),
      fea = !!(_.Ld[5] & 32),
      gea = !!(_.Ld[4] >> 23 & 1),
      hea = !!(_.Ld[4] >> 15 & 1),
      iea = !!(_.Ld[5] & 8)
    var jea, qba
    jea = Jd(1, !0)
    _.faa = bea ? dea : Jd(610401301, !1)
    _.kea = bea ? eea : Jd(1331761403, !1)
    _.lea = bea ? fea : Jd(651175828, !1)
    qba = bea ? cea || !gea : Jd(748402147, !0)
    _.mea = bea ? hea : Jd(861377723, !1)
    _.nea = bea ? cea || !iea : Jd(861377724, jea)
    var oea
    oea = _.ha.navigator
    _.oa = oea ? oea.userAgentData || null : null
    var pea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var qea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        const a = this
        return _.Ed(function* () {
          if (_.oa) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.Ed(function* () {
                  try {
                    const b = yield _.oa.getHighEntropyValues([a.ka])
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
    var rea
    rea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Ed(function* () {
          if (ua(!0)) return new pea(yield qea.load())
          a.ha = !0
          return new pea(_.qaa())
        })
      }
    }
    _.sea = new rea()
    _.za = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Sd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Td = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Ud = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.Vd = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.tea = function (a) {
      _.tea[' '](a)
      return a
    }
    _.tea[' '] = function () {}
    _.uea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Gea, Hea
    _.vea = _.haa()
    _.Wd = _.iaa()
    _.Xd = _.pa('Edge')
    _.Yd = _.pa('Gecko') && !(_.caa('WebKit') && !_.pa('Edge')) &&
      !(_.pa('Trident') || _.pa('MSIE')) && !_.pa('Edge')
    _.Zd = _.caa('WebKit') && !_.pa('Edge')
    _.wea = _.Zd && _.pa('Mobile')
    _.$d = _.wa()
    _.be = _.oaa()
    _.xea = _.naa() || _.paa()
    _.yea = _.laa()
    _.zea = _.maa()
    _.Aea = _.pa('iPad')
    _.Bea = _.pa('iPod')
    _.Cea = _.va()
    _.caa('KaiOS')
    var Dea = function () {
        const a = _.ha.document
        return a ? a.documentMode : void 0
      },
      Eea
    a: {
      let a = ''
      const b = function () {
        const c = _.na()
        if (_.Yd) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.Xd) return /Edge\/([\d\.]+)/.exec(c)
        if (_.Wd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.Zd) return /WebKit\/(\S+)/.exec(c)
        if (_.vea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.Wd) {
        const c = Dea()
        if (c != null && c > parseFloat(a)) {
          Eea = String(c)
          break a
        }
      }
      Eea = a
    }
    _.Fea = Eea
    Gea = {}
    _.ce = function (a) {
      return _.uea(Gea, a, function () {
        return _.eaa(_.Fea, a) >= 0
      })
    }
    if (_.ha.document && _.Wd) {
      var Iea = Dea()
      Hea = Iea ? Iea : parseInt(_.Fea, 10) || void 0
    } else Hea = void 0
    _.Jea = Hea
    var Kea, Lea, Mea, Nea, Oea, Pea
    _.de = {}
    Kea = _.ra()
    Lea = vaa()
    Mea = _.pa('iPad')
    Nea = _.kaa()
    Oea = _.sa()
    Pea = waa()
    _.de.ANDROID = Nea
    _.de.cGd = !1
    _.de.dGd = !1
    _.de.eGd = !1
    _.de.fGd = !1
    _.de.gGd = !1
    _.de.hGd = !1
    _.de.CHROME = Oea
    _.de.hga = _.Xd
    _.de.H_ = Kea
    _.de.QFb = _.Wd
    _.de.Z6a = Mea
    _.de.a7a = Lea
    _.de.J8a = _.vea
    _.de.QJ = Pea
    _.de.hSd = vaa
    _.de.lSd = waa
    _.yaa = {}
    _.xaa = null
    var Caa, Aaa, Qea
    Caa = /[-_.]/g
    Aaa = { '-': '+', _: '/', '.': '=' }
    _.ee = {}
    Qea = typeof structuredClone != 'undefined'
    var Rea
    _.ge = function (a) {
      return a ? new _.Hb(a, _.ee) : _.fe()
    }
    _.fe = function () {
      return Rea || (Rea = new _.Hb(null, _.ee))
    }
    _.Ib = function (a) {
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
    _.Sea = function (a) {
      if (_.ee !== _.ee) throw Error('y')
      var b = a.ha
      b == null || _.Na(b) ||
        (typeof b === 'string' ? b = _.Daa(b) : (_.ob(b), b = null))
      return b == null ? b : a.ha = b
    }
    _.Hb = class {
      isEmpty() {
        return this.ha == null
      }
      constructor(a, b) {
        if (b !== _.ee) throw Error('y')
        this.ha = a
        if (a != null && a.length === 0) throw Error('x')
      }
    }
    var Cba, hba, tba, nba
    _.yb = Pa()
    Cba = Pa()
    _.Tea = Pa()
    _.Bb = Pa()
    _.Uea = Pa()
    hba = Pa()
    _.Vea = Pa()
    tba = Pa()
    _.Ua = Pa('m_m', !0)
    nba = Pa()
    _.Wea = Pa()
    var Xea
    _.Ra = Pa('jas', !0)
    Xea = []
    Xea[_.Ra] = 7
    _.Tb = Object.freeze(Xea)
    var Yea
    _.Wa = {}
    _.Za = {}
    Yea = class {
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
    _.Zea = Object.freeze({})
    _.$ea = Object.freeze({})
    var oba = {}
    _.afa = _.ab((a) => a !== null && a !== void 0)
    _.cb = _.ab((a) => typeof a === 'number')
    _.bfa = _.ab((a) => Number.isFinite(a))
    _.bb = _.ab((a) => typeof a === 'string')
    _.Iaa = _.ab((a) => typeof a === 'boolean')
    _.cfa = _.ab((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.dfa = _.ab((a) => typeof a === 'function')
    _.efa = _.ab((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.ffa = _.ab((a) => Array.isArray(a))
    _.db = typeof _.ha.BigInt === 'function' &&
      typeof _.ha.BigInt(0) === 'bigint'
    var ifa, gfa, jfa, hfa
    _.Fb = _.ab((a) =>
      _.db ? a >= gfa && a <= hfa : a[0] === '-' ? Jaa(a, ifa) : Jaa(a, jfa)
    )
    ifa = Number.MIN_SAFE_INTEGER.toString()
    gfa = _.db ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    jfa = Number.MAX_SAFE_INTEGER.toString()
    hfa = _.db ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.fb = 0
    _.ib = 0
    var Raa = void 0
    var Uaa
    _.he = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.vb = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.ub = Number.isSafeInteger
    _.pb = Number.isFinite
    _.tb = Math.trunc
    Uaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var kfa, lfa
    kfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    lfa = function (a) {
      if (a.t0 & 2) throw Error('D')
    }
    _.Jb = class extends kfa {
      constructor(a, b, c = dba, d = dba) {
        super()
        this.t0 = a[_.Ra] | 0
        this.m7 = b
        this.tCa = c
        this.YBb = this.m7 ? eba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.t0)
          super.set(g, h)
        }
      }
      q4a(a) {
        return _.Eaa(Array.from(super.entries(), a))
      }
      clear() {
        lfa(this)
        super.clear()
      }
      delete(a) {
        lfa(this)
        return super.delete(this.tCa(a, !0, !1))
      }
      entries() {
        if (this.m7) {
          var a = super.keys()
          a = new Yea(a, fba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.m7) {
          var a = super.keys()
          a = new Yea(a, _.Jb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.m7
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        lfa(this)
        a = this.tCa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.YBb(b, !0, !0, this.m7, !1, this.t0))
      }
      Zsd(a) {
        const b = this.tCa(a[0], !1, !0)
        a = a[1]
        a = this.m7
          ? a === void 0 ? null : a
          : this.YBb(a, !1, !0, void 0, !1, this.t0)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.tCa(a, !1, !1))
      }
      get(a) {
        a = this.tCa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.m7
          return c
            ? (c = this.YBb(b, !1, !0, c, this.yXc, this.t0),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.Jb.prototype.toJSON = void 0
    var jba
    _.je = Qea ? structuredClone : (a) => _.Db(a, 0, _.Eb)
    _.mfa = _.eb(0)
    _.ke = function (a, b, c, d, e) {
      b = _.Sb(a.Zg, b, c, e)
      if (b !== null || d && a.pZa !== _.Za) return b
    }
    _.Sb = function (a, b, c, d) {
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
    _.me = function (a, b, c) {
      return _.le(a, b) === c ? c : -1
    }
    _.le = function (a, b, c) {
      a = a.Zg
      return _.Eba(_.Dba(a), a, void 0, b, c)
    }
    _.ne = function (a, b, c, d) {
      return _.Taa(_.ke(a, b, c, d))
    }
    _.oe = function (a, b, c, d) {
      return _.sb(_.ke(a, b, c, d))
    }
    _.pe = function (a, b, c = 0, d) {
      let e
      return (e = _.oe(a, b, d)) != null ? e : c
    }
    _.Wb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Faa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Zg = _.sba(a, b, c, 2048)
      }
      toJSON() {
        return _.pba(this)
      }
      serialize(a) {
        return JSON.stringify(_.pba(this, a))
      }
      clone() {
        const a = this.Zg, b = a[_.Ra] | 0
        return _.yba(this, a, b)
          ? _.xba(this, a, !0)
          : new this.constructor(_.Kb(a, b, !1))
      }
      isImmutable() {
        return _.$a(this)
      }
    }
    _.l.prototype.Eba = _.ca(0)
    _.l.prototype[_.Ua] = _.Wa
    _.l.prototype.toString = function () {
      return this.Zg.toString()
    }
    _.nfa = class extends _.fa {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.ofa = []
    _.pfa = []
    _.qfa = !1
    _.rfa = function (a) {
      _.ofa[_.ofa.length] = a
      if (_.qfa) {
        for (let b = 0; b < _.pfa.length; b++) {
          a((0, _.sc)(_.pfa[b].wrap, _.pfa[b]))
        }
      }
    }
    _.Zb.prototype.GR = !1
    _.Zb.prototype.isDisposed = function () {
      return this.GR
    }
    _.Zb.prototype.dispose = function () {
      this.GR || (this.GR = !0, this.Fb())
    }
    _.Zb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Zb.prototype.Lb = function (a) {
      this.addOnDisposeCallback(_.Pd(_.Xb, a))
    }
    _.Zb.prototype.addOnDisposeCallback = function (a, b) {
      this.GR
        ? b !== void 0 ? a.call(b) : a()
        : (this.Ica || (this.Ica = []), b && (a = a.bind(b)), this.Ica.push(a))
    }
    _.Zb.prototype.Fb = function () {
      if (this.Ica) { for (; this.Ica.length;) this.Ica.shift()() }
    }
    _.$b = function (a, b) {
      this.type = 'function' == typeof _.sfa && a instanceof _.sfa
        ? String(a)
        : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.$b.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.$b.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var ufa
    _.tfa = !(!_.ha.navigator || !_.ha.navigator.maxTouchPoints)
    ufa = function () {
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
    _.Rd(_.ac, _.$b)
    _.ac.prototype.init = function (a, b) {
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
        : (this.offsetX = _.Zd || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.Zd || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.$d ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.ki = a
      a.defaultPrevented && _.ac.Zb.preventDefault.call(this)
    }
    _.ac.prototype.stopPropagation = function () {
      _.ac.Zb.stopPropagation.call(this)
      this.ki.stopPropagation
        ? this.ki.stopPropagation()
        : this.ki.cancelBubble = !0
    }
    _.ac.prototype.preventDefault = function () {
      _.ac.Zb.preventDefault.call(this)
      const a = this.ki
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.ac.prototype.zza = _.ca(1)
    _.vfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.qe = function (a) {
      return !(!a || !a[_.vfa])
    }
    var Hba = 0
    var wfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Lba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.ic.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = xfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Cia = !1))
        : (b = new _.Iba(b, this.src, f, !!d, e), b.Cia = c, a.push(b))
      return b
    }
    _.ic.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = xfa(e, b, c, d)
      return b > -1
        ? (wfa(e[b]),
          _.Ca(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var yfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Da(a.listeners[c], b)
      d &&
        (wfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.ic.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, wfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.ic.prototype.eaa = _.ca(3)
    _.ic.prototype.cla = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = xfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.ic.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Kba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var xfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var zfa, Afa, Bfa, Dfa, Efa, Ffa, Gfa, Ifa
    zfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Afa = {}
    Bfa = 0
    _.se = function (a, b, c, d, e) {
      if (d && d.once) return _.re(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.se(a, b[f], c, d, e)
        return null
      }
      c = _.Cfa(c)
      return _.qe(a)
        ? a.listen(b, c, _.Nd(d) ? !!d.capture : !!d, e)
        : Dfa(a, b, c, !1, d, e)
    }
    Dfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      const g = _.Nd(e) ? !!e.capture : !!e
      let h = _.ue(a)
      h || (a[zfa] = h = new _.ic(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Efa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        ufa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Ffa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      Bfa++
      return c
    }
    Efa = function () {
      const a = Gfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.re = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.re(a, b[f], c, d, e)
        return null
      }
      c = _.Cfa(c)
      return _.qe(a)
        ? a.jf(b, c, _.Nd(d) ? !!d.capture : !!d, e)
        : Dfa(a, b, c, !0, d, e)
    }
    _.ve = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ve(a, b[f], c, d, e)
      } else {d = _.Nd(d) ? !!d.capture : !!d,
          c = _.Cfa(c),
          _.qe(a)
            ? a.Sf(b, c, d, e)
            : a && (a = _.ue(a)) && (b = a.cla(b, c, d, e)) && _.we(b)}
    }
    _.we = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.qe(b)) return b.QU(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Ffa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Bfa--
      ;(c = _.ue(b))
        ? (yfa(c, a), c.ha == 0 && (c.src = null, b[zfa] = null))
        : wfa(a)
      return !0
    }
    Ffa = function (a) {
      return a in Afa ? Afa[a] : Afa[a] = 'on' + a
    }
    _.Hfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.Cia && _.we(a)
      return c.call(d, b)
    }
    Gfa = function (a, b) {
      return a.removed ? !0 : _.Hfa(a, new _.ac(b, this))
    }
    _.ue = function (a) {
      a = a[zfa]
      return a instanceof _.ic ? a : null
    }
    Ifa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Cfa = function (a) {
      if (typeof a === 'function') return a
      a[Ifa] || (a[Ifa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Ifa]
    }
    _.rfa(function (a) {
      Gfa = a(Gfa)
    })
    var Nba
    _.Jfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Oba((e) => {
            e.Yua(a.ha, d)
          })
        })
      }
    }
    _.xe = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Jfa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Qba = Symbol('U')
    _.Rd(_.qc, _.Zb)
    _.qc.prototype[_.vfa] = !0
    _.k = _.qc.prototype
    _.k.pS = function () {
      return this.ntb
    }
    _.k.yp = function (a) {
      this.ntb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.se(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.ve(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.pS()
      if (c) { for (b = []; c; c = c.pS()) b.push(c) }
      c = this.IUc
      const d = a.type || a
      if (typeof a === 'string') a = new _.$b(a, c)
      else if (a instanceof _.$b) a.target = a.target || c
      else {
        var e = a
        a = new _.$b(d, c)
        _.hc(a, e)
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
      _.qc.Zb.Fb.call(this)
      this.removeAllListeners()
      this.ntb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.ZR.add(String(a), b, !1, c, d)
    }
    _.k.jf = function (a, b, c, d) {
      return this.ZR.add(String(a), b, !0, c, d)
    }
    _.k.Sf = function (a, b, c, d) {
      return this.ZR.remove(String(a), b, c, d)
    }
    _.k.QU = function (a) {
      return yfa(this.ZR, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.ZR ? this.ZR.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.ZR.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.Cia && this.QU(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.eaa = _.ca(2)
    _.k.cla = function (a, b, c, d) {
      return this.ZR.cla(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.ZR.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.ye =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Sba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Kfa = class {
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
    _.tc.kpd = _.ye
    _.tc.lQc = !1
    _.tc.Y7c = function () {
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
    _.tc.mrc = (a) => a
    _.rfa(function (a) {
      _.tc.mrc = a
    })
    var Lfa = class {
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
      Tba = new Kfa(() => new Mfa(), (a) => a.reset()),
      Mfa = class {
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
    var Nfa, Uba, Rba, Ofa
    Uba = !1
    Rba = new Lfa()
    _.ze = (a, b) => {
      Nfa || Ofa()
      Uba || (Nfa(), Uba = !0)
      Rba.add(a, b)
    }
    Ofa = () => {
      const a = Promise.resolve(void 0)
      Nfa = () => {
        a.then(Vba)
      }
    }
    _.Ae = function () {}
    var Pfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Qfa, Rfa, $fa, Xfa, Tfa, ega, cga, aga, bga, fga, dga, gga
    _.Ce = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.Ae) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.Be(b, 2, c)
          }, function (c) {
            _.Be(b, 3, c)
          })
        } catch (b) {
          _.Be(this, 3, b)
        }
      }
    }
    Qfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Qfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Rfa = new Kfa(function () {
      return new Qfa()
    }, function (a) {
      a.reset()
    })
    _.Sfa = function (a, b, c) {
      const d = Rfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.Ufa = function (a, b, c) {
      Tfa(a, b, c, null) || _.ze(_.Pd(b, a))
    }
    _.Vfa = function (a) {
      return new _.Ce(function (b, c) {
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
            _.Ufa(h, _.Pd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Ee = function () {
      let a, b
      const c = new _.Ce(function (d, e) {
        a = d
        b = e
      })
      return new Wfa(c, a, b)
    }
    _.Ce.prototype.then = function (a, b, c) {
      return Xfa(
        this,
        (0, _.ye)(typeof a === 'function' ? a : null),
        (0, _.ye)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Ce.prototype.$goog_Thenable = !0
    var Zfa = function (a, b, c, d) {
      _.Yfa(a, _.Sfa(b || _.Ae, c || null, d))
    }
    _.Ce.prototype.finally = function (a) {
      a = (0, _.ye)(a)
      return new _.Ce((b, c) => {
        Zfa(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Ce.prototype.ha = function (a, b) {
      return Xfa(this, null, (0, _.ye)(a), b)
    }
    _.Ce.prototype.catch = _.Ce.prototype.ha
    _.Ce.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Ge(a)
        _.ze(function () {
          $fa(this, b)
        }, this)
      }
    }
    $fa = function (a, b) {
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
              ? $fa(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : aga(c),
                bga(c, e, 3, b)))
          }
          a.na = null
        } else _.Be(a, 3, b)
      }
    }
    _.Yfa = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || cga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    Xfa = function (a, b, c, d) {
      const e = _.Sfa(null, null, null)
      e.child = new _.Ce(function (f, g) {
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
              t === void 0 && h instanceof _.Ge ? g(h) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.Yfa(a, e)
      return e.child
    }
    _.Ce.prototype.Fa = function (a) {
      this.ka = 0
      _.Be(this, 2, a)
    }
    _.Ce.prototype.Ea = function (a) {
      this.ka = 0
      _.Be(this, 3, a)
    }
    _.Be = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          Tfa(c, a.Fa, a.Ea, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            cga(a),
            b != 3 || c instanceof _.Ge || dga(a, c)))
    }
    Tfa = function (a, b, c, d) {
      if (a instanceof _.Ce) return Zfa(a, b, c, d), !0
      if (Pfa(a)) return a.then(b, c, d), !0
      if (_.Nd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return ega(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    ega = function (a, b, c, d, e) {
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
    cga = function (a) {
      a.Aa || (a.Aa = !0, _.ze(a.Da, a))
    }
    aga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Ce.prototype.Da = function () {
      let a
      for (; a = aga(this);) bga(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    bga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, fga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : fga(b, c, d)
        } catch (e) {
          gga.call(null, e)
        }}
      Sba(Rfa, b)
    }
    fga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    dga = function (a, b) {
      a.qa = !0
      _.ze(function () {
        a.qa && gga.call(null, b)
      })
    }
    gga = _.ia
    _.Ge = function (a) {
      _.fa.call(this, a)
      this.ka = !1
    }
    _.Rd(_.Ge, _.fa)
    _.Ge.prototype.name = 'cancel'
    var Wfa = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var nga, mga, iga, jga
    _.uc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.uc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.nb ? this.nb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.Ie(this))
      }
    }
    _.uc.prototype.Sa = function (a, b) {
      this.Ea = !1
      hga(this, a, b)
    }
    var hga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        iga(a)
      },
      kga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new jga(a)
          a.Oa = !1
        }
      }
    _.uc.prototype.callback = function (a) {
      kga(this)
      hga(this, !0, a)
    }
    _.uc.prototype.ha = function (a) {
      kga(this)
      hga(this, !1, a)
    }
    _.Me = function (a, b, c) {
      return _.Je(a, b, null, c)
    }
    _.uc.prototype.finally = function (a) {
      return _.lga(
        new Promise((b, c) => {
          _.Je(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.Je = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.ye)(b) : (b = (0, _.ye)(b), c = (0, _.ye)(c)))
      a.Ba.push([b, c, d])
      e && iga(a)
      return a
    }
    _.uc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Ce(function (g, h) {
        e = g
        d = h
      })
      _.Je(this, e, function (g) {
        g instanceof _.Ie ? f.cancel() : d(g)
        return mga
      }, this)
      return f.then(a, b, c)
    }
    _.uc.prototype.$goog_Thenable = !0
    _.uc.prototype.ma = _.ca(4)
    _.uc.prototype.isError = function (a) {
      return a instanceof Error
    }
    nga = function (a) {
      return _.Vd(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    mga = {}
    iga = function (a) {
      if (a.Da && a.ka && nga(a)) {
        var b = a.Da, c = oga[b]
        c && (_.ha.clearTimeout(c.ha), delete oga[b])
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
            g === mga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Pfa(b) ||
              typeof _.ha.Promise === 'function' && b instanceof _.ha.Promise
            ) d = !0, a.Ea = !0
          } catch (t) {
            b = t, a.qa = !0, nga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.sc)(a.Sa, a, !0),
          d = (0, _.sc)(a.Sa, a, !1),
          b instanceof _.uc ? (_.Je(b, g, d), b.lb = !0) : b.then(g, d))
      c && (b = new pga(b), oga[b.ha] = b, a.Da = b.ha)
    }
    _.lga = function (a) {
      const b = new _.uc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    jga = function (a) {
      _.fa.call(this)
      this.HB = a
    }
    _.Rd(jga, _.fa)
    jga.prototype.message = 'Deferred has already fired'
    jga.prototype.name = 'AlreadyCalledError'
    _.Ie = function (a) {
      _.fa.call(this)
      this.HB = a
    }
    _.Rd(_.Ie, _.fa)
    _.Ie.prototype.message = 'Deferred was canceled'
    _.Ie.prototype.name = 'CanceledError'
    var pga = function (a) {
      this.ha = _.ha.setTimeout((0, _.sc)(this.throwError, this), 0)
      this.XR = a
    }
    pga.prototype.throwError = function () {
      delete oga[this.ha]
      throw this.XR
    }
    var oga = {}
    var sga, tga, uga
    _.qga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Ya
      }
      return !1
    }
    _.Ne = function (a) {
      for (; a.Ya;) a = a.Ya
      return a
    }
    sga = function (a) {
      var b = _.rga
      const c = []
      a = _.Ne(a)
      let d
      a.NA[b] && (d = a.NA[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].NA[b] && (d = a[e].NA[b][0]), d && !_.Aa(c, d) && c.push(d)
      }
      return c
    }
    _.Qe = function (a, b) {
      for (var c = a; c; c = c.Ya) {
        if (c.isDisposed()) throw new _.nfa([b])
        if (c.NA[b]) return c.NA[b][0]
        if (c.Hc[b]) break
      }
      if (c = a.yb[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.Oe(a, b, c)
        return c
      }
      return null
    }
    _.Oe = function (a, b, c) {
      if (a.isDisposed()) _.Xb(c)
      else {
        a.NA[b] = [c, !0]
        var d = tga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.wc[b]
        b instanceof _.xe && _.pc(b, c.constructor)
      }
    }
    tga = function (a, b, c) {
      const d = [], e = a.Oa[c]
      e && (_.saa(e, function (f) {
        _.qga(f.appContext, b) && (d.push(f.d), _.Da(e, f))
      }),
        e.length == 0 && delete a.Oa[c])
      return d
    }
    uga = function (a, b) {
      a.Oa && _.bc(a.Oa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Re = class extends _.Zb {
      constructor() {
        super()
        this.NA = {}
        this.wc = {}
        this.yb = {}
        this.Oa = {}
        this.Wa = {}
        this.Hc = {}
        this.Eb = new _.qc()
        this.ie = !0
        this.Ya = null
        const a = _.Ne(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.Qe(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Fb() {
        if (_.Ne(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Ne(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.NA) {
          a = this.NA[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.NA = null
        this.ie && this.Eb.dispose()
        uga(this, this)
        this.Oa = null
        _.Xb(this.Qd)
        this.Hc = this.Qd = null
        super.Fb()
      }
      Ss() {
        return this.Eb
      }
    }
    _.Re.prototype.Pb = _.ca(7)
    _.Re.prototype.lb = _.ca(6)
    _.Re.prototype.wb = _.ca(5)
    _.rga = new _.xe('n73qwf', 'n73qwf')
    _.vc.prototype.clone = function () {
      return new _.vc(this.x, this.y)
    }
    _.vc.prototype.equals = function (a) {
      return a instanceof _.vc && _.Te(this, a)
    }
    _.Te = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.k = _.vc.prototype
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
      a instanceof _.vc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.k.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.Ve = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.k = _.wc.prototype
    _.k.clone = function () {
      return new _.wc(this.width, this.height)
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
    _.yc = {}
    var vga = globalThis.trustedTypes, Wba = vga, Yba
    _.xc = class {
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
    _.wga = _.Bc('about:blank')
    _.Hc = _.Bc('about:invalid#zClosurez')
    var Ec, cca, eca, xga, gca
    Ec = class {
      constructor(a) {
        this.Nm = a
      }
    }
    _.We = {
      GMd: Fc('tel'),
      xGd: new Ec((a) => /^callto:\+?\d*$/i.test(a)),
      iMd: new Ec((a) => a.indexOf('ssh://') === 0),
      HLd: Fc('rtsp'),
      Kwc: Fc('data'),
      wBc: Fc('http'),
      xBc: Fc('https'),
      EXTENSION: new Ec((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      eAc: Fc('ftp'),
      sKc: new Ec((a) => /^[^:]*([/?#]|$)/.test(a)),
      CEc: Fc('mailto'),
      RJd: Fc('intent'),
      jKd: Fc('market'),
      UJd: Fc('itms'),
      VJd: Fc('itms-appss'),
      WJd: Fc('itms-services'),
      MHd: Fc('fb-messenger'),
      ENd: Fc('whatsapp'),
      aMd: new Ec((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      eMd: Fc('sms'),
      vNd: Fc('vnd.youtube'),
      rJd: Fc('googlehome'),
      sJd: Fc('googlehomesdk'),
      LINE: Fc('line'),
    }
    cca = [_.We.Kwc, _.We.wBc, _.We.xBc, _.We.CEc, _.We.eAc, _.We.sKc]
    eca = typeof URL === 'function'
    xga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    gca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.dca = () => {}
    _.Nc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Ye = new _.Nc(_.yc, vga ? vga.emptyHTML : '')
    _.yga = {
      cJd: 0,
      wHd: 1,
      xHd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Tc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.yga[b]}`)
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
    _.zga = new _.lca(_.yc, vga ? vga.emptyScript : '')
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
    _.zd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.ada = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Aga = Math.random() * 2147483648 | 0
    _.Bga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Bca = /^[a-z][a-z\d-]*$/i,
      Cca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Fca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Gca = ['action', 'formaction', 'href']
    _.Cga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Dga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Fga
    _.Ega = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Fga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { nv: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { nv: 1 }
        : { nv: 0 }
    }
    _.Ze = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Gga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Iga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Uga = [
        ['A', new Map([['href', { nv: 7 }]])],
        ['AREA', new Map([['href', { nv: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            nv: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { nv: 5 }], ['srcset', { nv: 6 }]])],
        ['IMG', new Map([['src', { nv: 5 }], ['srcset', { nv: 6 }]])],
        ['VIDEO', new Map([['src', { nv: 5 }]])],
        ['AUDIO', new Map([['src', { nv: 5 }]])],
      ],
      Vga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Wga = [
        ['dir', {
          nv: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          nv: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          nv: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { nv: 5 }],
        ['target', {
          nv: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Xga = new _.Ze(new Set(Iga), new Map(Uga), new Set(Vga), new Map(Wga)),
      Yga = new _.Ze(
        new Set(Iga.concat(['BUTTON', 'INPUT'])),
        new Map(Uga),
        new Set(Vga.concat(['class', 'id', 'name'])),
        new Map(Wga.concat([['style', { nv: 1 }]])),
      ),
      Zga = new _.Ze(
        new Set(
          Iga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Uga),
        new Set(
          Vga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Wga.concat([['style', { nv: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var $ga
    _.aha = function (a, b, c) {
      b = Ica(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Kca(g)
          ? (g = Jca(g), g = g === null ? 2 : _.Ega(a.oa, g) ? 1 : 2)
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
        } else if (Kca(d)) g = $ga(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    $ga = function (a, b, c) {
      const d = Jca(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Fga(a.oa, h, d), f
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
          switch (e.nv) {
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
                ? (e = { type: 2, attributeName: h, fXb: d },
                  f = _.Hca(t),
                  (e = a.ha(f, e)) && ld(c, h, e.toString()))
                : ld(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, fXb: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, B] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, NQa: B })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Hca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), NQa: v.NQa })
                }
                ld(c, h, Lca(f))
              } else ld(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, fXb: d }
                f = _.Hca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.fca(e)
              e = f !== void 0 && xga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              ld(c, h, e)
          }
        }
      }
      return c
    }
    _.bha = class {
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
        return _.Aca(_.aha(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Mca = new _.bha(Xga)
    _.cha = new _.bha(Yga)
    _.dha = new _.bha(Zga)
    _.eha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { nv: 4 })
      a.ha = new _.Ze(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.$e = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.Ze(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.fha = class {
      constructor() {
        this.na = !1
        this.ha = Xga
      }
    }
    _.af = class extends _.fha {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.bha(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var gha, iha, uha, vha, wha
    _.pd = function (a) {
      return a ? new _.bf(_.cf(a)) : Zda || (Zda = new _.bf())
    }
    _.df = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.ef = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.ff = function (a, b) {
      _.bc(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : gha.hasOwnProperty(d)
          ? a.setAttribute(gha[d], c)
          : _.ja(d, 'aria-') || _.ja(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    gha = {
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
    _.gf = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.wc(a.clientWidth, a.clientHeight)
    }
    _.hf = function (a) {
      return a ? a.defaultView : window
    }
    _.jha = function (a, b) {
      const c = b[1], d = _.hha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.ff(d, c))
      b.length > 2 && iha(a, d, b, 2)
      return d
    }
    iha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Ha(f) || _.Nd(f) && f.nodeType > 0
          ? e(f)
          : _.Sd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ga(f)
              : f,
            e,
          )
      }
    }
    _.jf = function (a) {
      return _.hha(document, a)
    }
    _.hha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.kha = function (a, b) {
      iha(_.cf(a), a, arguments, 1)
    }
    _.kf = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.lha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.mha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.nha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.lf = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.oha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.pha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.rha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.qha(a.firstChild, !0)
    }
    _.sha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.qha(a.nextSibling, !0)
    }
    _.tha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.qha(a.previousSibling, !1)
    }
    _.qha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.mf = function (a) {
      return _.Nd(a) && a.nodeType == 1
    }
    _.nf = function (a) {
      return a.parentElement || null
    }
    _.of = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.cf = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.rf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.kf(a), a.appendChild(_.cf(a).createTextNode(String(b)))
    }
    uha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    vha = { IMG: ' ', BR: '\n' }
    _.xha = function (a) {
      return a.hasAttribute('tabindex') && wha(a)
    }
    _.sf = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.yha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || wha(a))
        : _.xha(a)
    }
    wha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.tf = function (a) {
      const b = []
      _.zha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.zha = function (a, b, c) {
      if (!(a.nodeName in uha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in vha) b.push(vha[a.nodeName])
        else for (a = a.firstChild; a;) _.zha(a, b, c), a = a.nextSibling
      }
    }
    _.bf = function (a) {
      this.Al = a || _.ha.document || document
    }
    _.k = _.bf.prototype
    _.k.kb = _.pd
    _.k.Of = function () {
      return this.Al
    }
    _.k.Xa = function (a) {
      return _.df(this.Al, a)
    }
    _.k.$ = _.bf.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.Al).getElementsByTagName(String(a))
    }
    _.k.FF = _.ca(9)
    _.k.Ub = _.ca(11)
    _.k.tc = _.ca(13)
    _.k.setProperties = _.ff
    _.k.Ej = function (a) {
      return _.gf(a || this.getWindow())
    }
    _.k.Ib = function (a, b, c) {
      return _.jha(this.Al, arguments)
    }
    _.k.createElement = function (a) {
      return _.hha(this.Al, a)
    }
    _.k.createTextNode = function (a) {
      return this.Al.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.Al.defaultView
    }
    _.k.yo = _.ca(14)
    _.k.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.k.append = _.kha
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
    _.k.vk = _.kf
    _.k.s4b = _.lha
    _.k.kBa = _.mha
    _.k.jBa = _.nha
    _.k.removeNode = _.lf
    _.k.Vub = _.oha
    _.k.getChildren = _.pha
    _.k.Eza = _.rha
    _.k.tjb = _.sha
    _.k.E0b = _.tha
    _.k.isElement = _.mf
    _.k.isWindow = function (a) {
      return _.Nd(a) && a.window == a
    }
    _.k.fla = _.nf
    _.k.contains = _.of
    _.k.yjb = _.cf
    _.k.nl = _.rf
    _.k.Nx = _.sf
    _.k.yx = _.yha
    _.k.rS = _.tf
    Md = Md || {}
    var Aha = function () {
      _.Zb.call(this)
    }
    _.Rd(Aha, _.Zb)
    Aha.prototype.initialize = function () {}
    Uca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Uca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.rfa(function (a) {
      Uca.prototype.execute = a(Uca.prototype.execute)
    })
    Md.x8a = Uca
    _.Rd(qd, _.Zb)
    qd.prototype.ma = null
    qd.prototype.Ba = Aha
    qd.prototype.ka = null
    qd.prototype.getId = function () {
      return this.Aa
    }
    var Bha = function (a, b, c) {
        a.qa.push(new Md.x8a(b, c))
      },
      Cha = function (a, b) {
        a.na.push(new Md.x8a(b, void 0))
      }
    qd.prototype.isLoaded = function () {
      return !!this.ka
    }
    qd.prototype.onLoad = function (a) {
      var b = new this.Ba()
      b.initialize(a())
      this.ka = b
      b = (b = Dha(this.oa, a())) || Dha(this.qa, a())
      b || (this.na.length = 0)
      return b
    }
    qd.prototype.onError = function (a) {
      ;(a = Dha(this.na, a)) && _.ia(Error('ga`' + a))
      this.oa.length = 0
      this.qa.length = 0
    }
    var Dha = function (a, b) {
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
    qd.prototype.Fb = function () {
      qd.Zb.Fb.call(this)
      _.Xb(this.ka)
      this.ma = null
    }
    Md.w8a = qd
    var Eha = {
      ERROR: 'error',
      IDLE: 'idle',
      Hsa: 'active',
      jQc: 'userIdle',
      iQc: 'userActive',
    }
    _.k = Vca.prototype
    _.k.Ngc = function () {}
    _.k.L1a = function () {}
    _.k.tGa = function () {}
    _.k.Yua = function () {
      throw Error('ha')
    }
    _.k.nFa = function () {
      throw Error('ia')
    }
    _.k.r0b = function () {
      return this.oa
    }
    _.k.AGa = function (a) {
      this.oa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.I7b = function () {
      return !1
    }
    var Fha, Gha
    Fha = function (a, b) {
      const c = b.styleSheets.length, d = Tca(a, new _.bf(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.ya(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Gha = function (a) {
      return _.Ud(sga(a), (b) => b.yjb())
    }
    _.Hha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Yda('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.oa
            if (b) {
              if (b = Gha(b), b.length == 0) Fha(a, document)
              else for (let c of b) Fha(a, c)
            } else Fha(a, document)
          }
        })
      }
    }
    var Iha, Jha, Lha
    Iha = function (a) {
      throw Error('ja`' + a.ka)
    }
    Jha = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.vf = function (a) {
      const b = _.uf(a)
      b === null && Iha(a)
      return b
    }
    _.wf = function (a, b) {
      let c
      return (c = _.uf(a)) != null ? c : b
    }
    _.uf = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Jha(a, 'string')
    }
    _.Kha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Jha(a, 'boolean')
    }
    _.xf = function (a, b) {
      let c
      return (c = _.Kha(a)) != null ? c : b
    }
    _.yf = function (a, b) {
      let c
      return (c = Lha(a)) != null ? c : b
    }
    Lha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Jha(a, 'number')
    }
    _.Nha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Mha(a, b)
    }
    _.Mha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.sd(c + e + ']', d))
    }
    _.sd = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.vf(this) : _.wf(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Lha(this)
          b === null && Iha(this)
        } else b = _.yf(this, a)
        return b
      }
      toString() {
        return _.vf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.yf(this, b) : _.wf(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Nha(this)
          b === null && Iha(this)
          return b
        }
        b = _.Nha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Iha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.sd(c + d, b[d])
          return a
        }
        throw Jha(this, 'object')
      }
    }
    var Zca
    Zca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Oha = /#|$/
    var Pha,
      hda,
      zf,
      Sha,
      Vha,
      Tha,
      Uha,
      Wha,
      Xha,
      Yha,
      Zha,
      pda,
      $ha,
      Qha,
      Rha,
      aia,
      bia
    _.qda = function (a, b = !0) {
      const c = Pha(a), d = new Qha(), e = _.ud(c)[5]
      _.bc(Rha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && zf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Sha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.wd(6, c)) && _.bda(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Pha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    hda = function (a) {
      a = Pha(a)
      a = _.vd(_.wd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    zf = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Sha = function (a, b) {
      a.ka = b
    }
    Vha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Tha(a)
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
          'd' in a.ha || zf(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Af(a, 'br') != '1' && _.Af(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Af(a, 'rb') == '1' && c('rb'),
          _.Af(a, 'zs') !== '0' && c('zs'),
          Uha(a) !== '' && c('wt'),
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
    _.Af = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Tha = function (a) {
      a = _.Af(a, 'md')
      return !!a && a !== '0'
    }
    Uha = function (a) {
      switch (_.Af(a, 'wt')) {
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
    Wha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), zf(a, 'exm', b.join(',')))
        : zf(a, 'exm', null)
    }
    Xha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), zf(a, 'excm', b.join(',')))
        : zf(a, 'excm', null)
    }
    Yha = function (a) {
      return (a = _.Af(a, 'm')) ? a.split(',') : []
    }
    Zha = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      zf(a, 'ee', c.join(';'))
    }
    pda = function (a) {
      var b = _.Af(a, 'ee')
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
    $ha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Qha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Vha(this)
        const b = _.eda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Qha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Rha = {
      GLd: 'k',
      bHd: 'ck',
      tKd: 'm',
      GHd: 'exm',
      EHd: 'excm',
      TFd: 'am',
      ZFd: 'amc',
      kKd: 'mm',
      DLd: 'rt',
      JJd: 'd',
      FHd: 'ed',
      hMd: 'sv',
      fHd: 'deob',
      vGd: 'cb',
      DGd: 'ccb',
      wGd: 'cbi',
      YLd: 'rs',
      MLd: 'sdch',
      QJd: 'im',
      gHd: 'dg',
      AHd: 'br',
      zHd: 'br-d',
      BHd: 'rb',
      ONd: 'zs',
      GNd: 'wt',
      LHd: 'ee',
      gMd: 'sm',
      METADATA: 'md',
      tJd: 'gssmodulesetproto',
      sNd: 'ujg',
      rNd: 'sp',
      WLd: 'slk',
      kHd: 'dti',
      TJd: 'ic',
    }
    aia = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    bia = RegExp('^[a-zA-Z0-9-_*]+$')
    var lda = null, kda = new Map()
    var nda = !1, oda = !1
    var cia = (a) => {
        a = a.clone()
        $ha(a)
        zf(a, 'dg', null)
        zf(a, 'd', '0')
        Wha(a, null)
        Xha(a, null)
        return a
      },
      dia = !0,
      eia = (a, b, { cssRowKey: c, y9: d, i2: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!bia.test(g)) throw Error('la`' + g) }
        zf(a, 'm', b.join(','))
        e && Zha(a, e)
        c && (zf(a, 'ck', c), d ? zf(a, 'rs', d) : dia && (dia = !1))
        if (f) {
          if (f != null && !aia.test(f)) throw Error('ma`' + f)
          zf(a, 'cb', f)
        }
        a = a.toString()
        _.ja(a, '/') && (a = _.xd(document.location.href) + a)
        return _.zc(a)
      },
      fia = (
        a,
        b,
        { Zub: c = [], cssRowKey: d, y9: e, i2: f, callback: g } = {},
      ) => {
        a = cia(a)
        Xha(a, c)
        return eia(a, b, { cssRowKey: d, y9: e, i2: f, callback: g })
      },
      gia = (
        a,
        b,
        { avb: c = [], Zub: d = [], cssRowKey: e, y9: f, i2: g, callback: h } =
          {},
      ) => {
        a = cia(a)
        zf(a, 'd', '1')
        Wha(a, c)
        Xha(a, d)
        return eia(a, b, { cssRowKey: e, y9: f, i2: g, callback: h })
      }
    _.hia = function (a) {
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
    _.jia = function () {}
    _.Rd(_.jia, _.sda)
    _.jia.prototype.FW = function () {
      return new XMLHttpRequest()
    }
    _.iia = new _.jia()
    var lia = function (a) {
        return kia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      kia = function (a) {
        const b = {}, c = b.YU ? b.YU.FW() : _.iia.FW()
        return (new _.Ce(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Bf('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.ha.clearTimeout(f)
              var g
              !(g = _.hia(c.status)) && (g = c.status === 0) &&
                (g = _.$ca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new mia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Bf('Network error', a, c))
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
          b.Sx > 0 && (f = _.ha.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new nia(a, c))
          }, b.Sx))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.ha.clearTimeout(f),
              e(new Bf('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Ge &&
            c.abort()
          throw d
        })
      },
      Bf = function (a, b, c) {
        _.fa.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Rd(Bf, _.fa)
    Bf.prototype.name = 'XhrError'
    var mia = function (a, b, c) {
      Bf.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Rd(mia, Bf)
    mia.prototype.name = 'XhrHttpError'
    var nia = function (a, b) {
      Bf.call(this, 'Request timed out', a, b)
    }
    _.Rd(nia, Bf)
    nia.prototype.name = 'XhrTimeoutError'
    var qia, sia, tia, uia, ria, zia, Aia, wia, via, xia, yia
    _.oia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((z) => !_.mc().Tu(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.mc().Tu(v)
        v.isLoaded() ? t() : (v.oa.push(new Md.x8a(t, void 0)), Cha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.pia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.na[f] || (a.na[f] = !0, a.Fa.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    qia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            hda(b) && !_.qda(b).ka.endsWith('_/js/')
        ) {
          b = Yha(_.qda(b))
          for (const c of b) a.Pa.includes(c) || a.Pa.push(c)
        }
      }
    }
    sia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      ria(a, b, (g, h, t = h) => {
        a.Za && f ? a.ab(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    tia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    uia = function (a, b, c, { i2: d, onError: e, Coa: f, e7c: g } = {}) {
      a.Da = c
      if (!b) throw Error('qa')
      if (a.mb) {
        for (const h of document.getElementsByTagName('style')) qia(a, h)
        for (const h of document.getElementsByTagName('link')) qia(a, h)
      }
      sia(a, tia(a, b), d, e, f, g)
    }
    ria = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          ria(a, b, c, d)
        }),
          !0
      }
      if (!a.qa) {
        const f = []
        var e = Object.assign({}, a.na)
        via(
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
          h = wia(a, g, d),
          t = _.Ac(h).toString()
        for (; t.length > a.tJa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.tJa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = wia(a, g, d),
              t = _.Ac(h).toString()
          } else {return a.qa
              ? (a.qa = !1,
                a.ma = xia(a).then((v) => {
                  yia(a, v, d)
                }),
                ria(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.qa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    zia = function (a) {
      a.Sa || (a.Sa = !0, a.Fa.sort())
      return a.Fa
    }
    Aia = function (a) {
      a = a.Pa
      a.sort()
      return a
    }
    wia = function (a, b, c) {
      return a.qa
        ? gia(a.oa, b, {
          cssRowKey: a.Ya,
          y9: a.Wa,
          i2: c,
          avb: zia(a),
          Zub: Aia(a),
        })
        : fia(a.oa, b, { cssRowKey: a.Ya, y9: a.Wa, avb: zia(a), Zub: Aia(a) })
    }
    _.Cf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.na[e] && (delete a.na[e], _.Da(a.Fa, e), c.push(e))
      }
    }
    _.Bia = function (a, b, c, d, e, f, g = d) {
      a.Ba = c
      a.Ea.insertBefore(c, a.Ea.firstChild)
      _.oia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        _.Cf(a, h)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    via = function (a, b, c, d, e, f = {}) {
      const g = _.mc()
      for (let h of b) {
        b = g.Tu(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        via(a, t, c, d, e, f)
        c(b)
      }
    }
    xia = function (a) {
      a = a.oa.clone()
      $ha(a)
      zf(a, 'dg', null)
      zf(a, 'md', '1')
      return lia(a.toString())
    }
    yia = function (a, b, c) {
      _.mc().tGa((b || {}).moduleGraph)
      via(a, zia(a), (d) => {
        _.pia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.wda = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.nb = a
        this.oa = _.qda(_.Ac(a).toString(), !0)
        this.Ya = b
        this.Wa = c
        this.qa = d
        this.na = {}
        this.Da = {}
        this.Fa = []
        this.Sa = !0
        this.Pa = (a = _.Af(this.oa, 'excm')) ? a.split(',') : []
        this.mb = e
        this.uJa = !1
        this.Zwa = 'anonymous'
        this.tJa = 4043
        this.Ea = document.head || document.documentElement
        this.ma = this.Ba = null
        this.lb = !0
        _.rda()
        this.logger = null
        _.pia(this, Yha(this.oa))
        this.fetchPriority = void 0
        this.Za = !1
        this.Oa()
      }
      ab() {
        _.Ed(function* () {
          throw Error('ra')
        })
      }
      Oa() {}
      load(a, b, c, d, e = b) {
        _.Ac(a)
        var f = this.uJa, g = this.Zwa, h = this.fetchPriority
        const t = _.jf('SCRIPT')
        _.ad(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.pia(this, b)
        _.Bia(this, a, t, b, c, d, e)
      }
    }
    var tda = new Uint8Array(123)
    var Cia = []
    var Eia = function (a) {
        switch (a.type) {
          case Dia.Type.BLb:
            return 'Unauthorized'
          case Dia.Type.e6a:
            return 'Consecutive load failures'
          case Dia.Type.TIMEOUT:
            return 'Timed out'
          case Dia.Type.lJb:
            return 'Out of date module id'
          case Dia.Type.X6a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Dia = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.avb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Eia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    Md.lB = Dia
    Md.lB.Type = { BLb: 0, e6a: 1, TIMEOUT: 2, lJb: 3, X6a: 4 }
    var Df = function () {
      Vca.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Fa = []
      this.ma = {}
      this.ab = {}
      this.Aa = this.Wa = new Md.w8a([], '')
      this.mb = null
      this.Pa = new _.uc()
      this.Qj = null
      this.wb =
        this.Eb =
        this.yb =
        this.lb =
        this.nb =
          !1
    }
    _.Rd(Df, Vca)
    var Fia = function (a, b) {
      _.fa.call(this, `Error loading ${a}: ${b}`)
    }
    _.Rd(Fia, _.fa)
    Df.prototype.Ngc = function (a) {
      this.nb = a
    }
    Df.prototype.L1a = function (a) {
      this.lb = a
    }
    Df.prototype.tGa = function (a, b) {
      if (!(this instanceof Df)) this.tGa(a, b)
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
            Gia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) Hia(this, a)
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
            Gia(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Ja(this.na, b), this.mb = _.raa(b))
          : this.Pa.ka || this.Pa.callback()
        Object.freeze(this.Ya)
        Iia(this)
      }
    }
    var Hia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        tda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      vda(b)
      const d = vda(b)
      var e = vda(b) + 1
      const f = Array(d), g = Array(d), h = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, B = b.buf.indexOf('|', b.pos)
      b.pos = B + 1
      for (B = 0; B < d; B++) {
        var I = vda(b), N = I & 2, S = I & 1
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
        z = uda(b), h[t] = z & 7, h[t + 1] = z >>> 3 & 7
      }
      c && (c = uda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = vda(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        z = t === 0 ? Cia : Array(t)
        g[c] = z
        B = v
        for (N = 0; N < t; N++) B -= vda(b), z[N] = e[B]
        e[v] === f[c] && v++
      }
      const { ids: aa, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < aa.length; b++) Gia(a, aa[b], ea[b])
      a.Ya = aa
    }
    _.k = Df.prototype
    _.k.Tu = function (a) {
      return this.ka[a]
    }
    _.k.Yua = function (a, b) {
      const c = this.Tu(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.nFa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.AGa = function (a) {
      Df.Zb.AGa.call(this, a)
      Iia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.I7b = function () {
      return this.Fa.length > 0
    }
    var Ef = function (a) {
        var b = a.yb
        const c = a.isActive()
        c != b && (Jia(a, c ? Eha.Hsa : Eha.IDLE), a.yb = c)
        b = a.I7b()
        b != a.Eb && (Jia(a, b ? Eha.iQc : Eha.jQc), a.Eb = b)
      },
      Gia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Md.w8a(c, b)
      },
      Lia = function (a, b, c) {
        const d = []
        _.La(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Tu(g)
          if (!h) throw Error('sa`' + g)
          const t = new _.uc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.oa)
            : (Kia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.lb
            ? _.Me(a.Pa, (0, _.sc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Ef(a)))
        return e
      },
      Kia = function (a, b, c, d, e) {
        Bha(c, e.callback, e)
        Cha(c, function (f) {
          e.ha(new Fia(b, f))
        })
        a.Oa(b) ? d && (Mia(a, b), Ef(a)) : d && Mia(a, b)
      }
    Df.prototype.Sa = function (a, b = 0, c) {
      const d = Nia(this, a)
      this.lb ? _.Ja(this.na, d) : this.na = d
      this.Ba = this.nb ? a : _.Ga(d)
      Ef(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.qa
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.lb) throw Error('ua')
        uia(a, _.Ga(d), this.ka, {
          i2: this.ma,
          onError: (e, f, g) =>
            Oia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          fEa: (0, _.sc)(this.Mb, this),
          e7c: !!c,
        })
      }
    }
    var Nia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.ha.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Pia(a, b[d]))
        _.La(c)
        return !a.nb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Pia = function (a, b) {
        const c = _.Mba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Tu(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Tu(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.La(d)
        return d
      },
      Iia = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.sc)(a.r0b, a))
          b && b.length &&
            Qia(a, new Md.lB(Md.lB.Type.X6a, void 0, void 0, void 0, b[0]))
          Ef(a)
        }
      }
    Df.prototype.Ea = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Tu(c)
            d && !d.isLoaded() && (this.nFa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.sc)(this.r0b, this))) && b.length &&
            Qia(this, new Md.lB(Md.lB.Type.X6a, void 0, void 0, void 0, b[0])),
            _.Da(this.Fa, a),
            _.Da(this.na, a),
            this.na.length === 0 && Ria(this),
            this.mb && a == this.mb && (this.Pa.ka || this.Pa.callback()),
            Ef(this),
            this.Aa = null)
      }
    }
    Df.prototype.Oa = function (a) {
      if (_.Aa(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.Aa(this.ha[b], a)) return !0
      }
      return !1
    }
    Df.prototype.load = function (a, b) {
      return Lia(this, [a], b)[a]
    }
    Df.prototype.Da = function (a) {
      return Lia(this, a)
    }
    var Mia = function (a, b) {
      _.Aa(a.Fa, b) || a.Fa.push(b)
    }
    Df.prototype.rb = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Ea(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Sia(this, this.ka[a].ha || [], (b) => {
        b.ka = new Aha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.Tu(a)
    }
    var Oia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ga(c)
      a.Ba = b
      c.forEach(_.Pd(_.Da, a.Za), a)
      if (d == 401) Qia(a, new Md.lB(Md.lB.Type.BLb, d)), a.ha.length = 0
      else if (d == 410) Tia(a, new Md.lB(Md.lB.Type.lJb, d)), Ria(a)
      else if (h >= 3) Tia(a, new Md.lB(Md.lB.Type.e6a, d, f, e)), Ria(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.ha.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    Df.prototype.Mb = function () {
      Tia(this, new Md.lB(Md.lB.Type.TIMEOUT))
      Ria(this)
    }
    var Tia = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Qia(a, b)
      },
      Qia = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Pia(this, g)
            return _.Vd(c, function (t) {
              return _.Aa(h, t)
            })
          }, a)
          _.Ja(d, f)
        }
        for (e = 0; e < c.length; e++) _.Ba(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Da(a.ha[f], d[e])
          _.Da(a.Fa, d[e])
        }
        if (e = a.ab[Eha.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(Eha.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Ef(a)
      },
      Ria = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Tu(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Ef(a)
      },
      Jia = function (a, b) {
        a = a.ab[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Sia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Tu(f),
            !e[f] && d(b) && (e[f] = !0, Sia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Df.prototype.dispose = function () {
      _.Yb(_.dc(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Fa = []
      this.ha = []
      this.ab = {}
      this.wb = !0
    }
    Df.prototype.isDisposed = function () {
      return this.wb
    }
    _.lc = function () {
      return new Df()
    }
    var Uia, Via, Yia, Zia, $ia, aja, Wia, Xia
    Uia = [5E3, 2E4]
    Via = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Ea()
    }
    Yia = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Tu(c).isLoaded())
      b.length > 0 && (Wia(a, ...b), a.na.push(b), Xia(a))
    }
    Zia = function (a, b) {
      return new _.Ce((c, d) => {
        const e = a.Tu(b)
        e.isLoaded() ? c(a.oa) : (Bha(e, () => {
          c(a.oa)
        }),
          Cha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Md.lB && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    $ia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Tu(f),
          !e[f] && d(b) && (e[f] = !0, $ia(a, b.ha || [], c, d, e), c(b))
      }
    }
    aja = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Wia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Xia = function (a) {
      for (; a.Aa < a.Fa && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Tu(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            Xia(a)
            c = () => {}
          }
          _.Vfa(b.map((f) => Zia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.qa.lb) throw Error('ua')
            uia(a.qa, b, a.ma, {
              i2: a.ha,
              onError: (f, g) => {
                const h = Uia[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (aja(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Tu(t)
                      if (!t.isLoaded()) {
                        t.onError(new Md.lB(Md.lB.Type.e6a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.bja = class extends Vca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Fa = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Qj = null
        this.ka = this.Tu('{base}')
      }
      tGa() {
        Via(this)
      }
      AGa(a) {
        super.AGa(a)
        Via(this)
      }
      Tu(a) {
        let b = this.ma[a]
        b || (b = new Md.w8a([], a), this.ma[a] = b)
        return b
      }
      Yua(a, b) {
        this.Tu(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      nFa(a, b) {
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
        Yia(this, [a])
        return Zia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Zia(this, d), c.push(d))
        })
        Yia(this, c)
        return b
      }
      rb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Ea()
        let c, d
        $ia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new Aha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Tu(a)
      }
      Ea() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Tu(c).isLoaded() || (this.nFa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.oa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          aja(this, a)
        }
      }
      L1a(a) {
        this.Fa = a ? Infinity : 1
      }
    }
    var cja = new _.bja()
    cja.L1a(!0)
    cja.AGa(new _.Re())
    _.Pba(cja)
    ;(new _.Hha(cja)).init()
    _.xda()
    var dja = _.xf(_.td('hxvedd'), !1), eja = _.xf(_.td('dLc0B'), !1)
    if (_.xf(_.td('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (eja ? 2 : dja ? 1 : 0) {
      case 2:
        ;(0, _.Ad)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.Ad)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.Ad)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.jc) {
        if (!_.lc) return
        _.Pba(_.lc())
      }
      _.jc.tGa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
