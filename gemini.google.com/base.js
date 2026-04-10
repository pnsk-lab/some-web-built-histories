// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.uDWQurqjXuE.2018.O/am=IxwExIBA-zcU-QQAAcA3wA/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk0tWuVi0rfLr46xSovbIhNDYjOAmA/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.gqyTk43N3o0.libheifWasm.O%3A%3BBardChatUi.FGkD3G0Fjv0.loadC2PAExtractorWasm.O%3A%3BBardChatUi.zU8GldEd29M.loadWasmSipCoca.O%3A%3B
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
      rd,
      Uca,
      Vca,
      fda,
      hda,
      ida,
      lda,
      sda,
      Ad,
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
    ua = function (a = !1) {
      return a || _.faa ? !!_.na && !!_.na.platform : !1
    }
    _.laa = function () {
      return ua() ? _.na.platform === 'Android' : _.oa('Android')
    }
    _.maa = function () {
      return _.oa('iPhone') && !_.oa('iPod') && !_.oa('iPad')
    }
    _.va = function () {
      return _.maa() || _.oa('iPad') || _.oa('iPod')
    }
    _.wa = function () {
      return ua() ? _.na.platform === 'macOS' : _.oa('Macintosh')
    }
    _.naa = function () {
      return ua() ? _.na.platform === 'Linux' : _.oa('Linux')
    }
    _.oaa = function () {
      return ua() ? _.na.platform === 'Windows' : _.oa('Windows')
    }
    _.paa = function () {
      return ua() ? _.na.platform === 'Chrome OS' : _.oa('CrOS')
    }
    _.qaa = function () {
      var a = _.ma(), b = ''
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
    _.Da = function (a, b) {
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
    _.Ia = function (a, b) {
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
      return _.sa() && !_.va()
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
      return a != null && a[_.Ta] === _.Va
    }
    _.Za = function (a, b) {
      return b === void 0
        ? a.Nb !== _.Ya && !!(2 & (a.Tg[_.Qa] | 0))
        : !!(2 & b) && a.Nb !== _.Ya
    }
    _.Gaa = function (a, b) {
      a.Nb = b ? _.Ya : void 0
    }
    _.Haa = function (a) {
      return a
    }
    _.$a = function (a) {
      a.kOd = !0
      return a
    }
    _.eb = function (a) {
      var b = a
      if ((0, _.ab)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.bb)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.db
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
      _.fb = b
      _.hb = (a - b) / 4294967296 >>> 0
    }
    _.ib = function (a) {
      if (a < 0) {
        _.Kaa(-a)
        const [b, c] = _.Laa(_.fb, _.hb)
        _.fb = b >>> 0
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
      if (a.length < 16) _.ib(Number(a))
      else if (_.Oa()) {
        a = BigInt(a),
          _.fb = Number(a & BigInt(4294967295)) >>> 0,
          _.hb = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.hb = _.fb = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.hb *= 1E6
          _.fb = _.fb * 1E6 + f
          _.fb >= 4294967296 &&
            (_.hb += Math.trunc(_.fb / 4294967296), _.hb >>>= 0, _.fb >>>= 0)
        }
        if (b) {
          const [d, e] = _.Laa(_.fb, _.hb)
          _.fb = d
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
      if (typeof a !== 'boolean') throw Error('B`' + _.nb(a) + '`' + a)
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
      return _.jb(_.fb, _.hb)
    }
    _.Waa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) || (_.ib(a), a = _.Maa(_.fb, _.hb))
      return a
    }
    _.Xaa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) ? a = String(a) : (_.ib(a), a = _.jb(_.fb, _.hb))
      return a
    }
    _.Yaa = function (a) {
      return (0, _.tb)(a) ? _.eb(_.Waa(a)) : _.eb(_.Xaa(a))
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
      if ((0, _.tb)(b) && b >= 0) return _.eb(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Oa() ? _.eb((0, _.ub)(64, BigInt(a))) : _.eb(Vaa(a))
    }
    _.aba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.eb((0, _.ub)(64, a))
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
      _.Sa(a.Tg)
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
      const b = _.zb(_.Ab)
      return b ? a[b] : void 0
    }
    iba = function (a, b) {
      b < 100 || _.lb(hba, 1)
    }
    _.Bb = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.zb(_.Ab), g
      !e && f && (g = a[f]) && g.ERa(iba)
      f = []
      var h = a.length
      let t
      g = 4294967295
      let v = !1
      const z = !!(b & 64), A = z ? b & 128 ? 0 : -1 : void 0
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
        g = ((I = jba) != null ? I : _.Haa)(g - A, A, a, t, void 0) + A
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let S = a[I]
        if (S != null && (S = c(S, d)) != null) {
          if (z && I >= g) {
            const Y = I - A
            var N = void 0
            ;((N = b) != null ? N : b = {})[Y] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          N = t[S]
          if (N == null || (N = c(N, d)) == null) continue
          h = +S
          let Y
          if (z && !Number.isNaN(h) && (Y = h + A) < g) f[Y] = N
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[S] = N
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.zb(_.Ab) && (a = _.gba(a)) && 'function' == typeof _.kba &&
        a instanceof _.kba && (f[_.Ab] = a.ha())
      return f
    }
    lba = function (a) {
      a[0] = _.Cb(a[0])
      a[1] = _.Cb(a[1])
      return a
    }
    _.Cb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.Db)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Qa] | 0
            return a.length === 0 && b & 1 ? void 0 : _.Bb(a, b, _.Cb)
          }
          if (_.Wa(a)) return mba(a)
          if (a instanceof _.Gb) return _.Hb(a)
          if (a instanceof _.Ib) {
            return a = a.size !== 0 ? a.c3a(lba) : void 0, a
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
      a = a.Tg
      return _.Bb(a, a[_.Qa] | 0, _.Cb)
    }
    _.sba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('D')
        e = a[_.Qa] | 0
        if (qba && 1 & e) throw Error('E')
        2048 & e && !(2 & e) && rba()
        if (e & 256) throw Error('F')
        if (e & 64) return (e | d) !== e && (a[_.Qa] = e | d), a
        if (c && (e |= 128, c !== a[0])) throw Error('G')
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
              if (g >= 1024) throw Error('I')
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
            if (h > 1024) throw Error('J')
            e = e & -16760833 | (h & 1023) << 14
          }
        }
      }
      a[_.Qa] = e | 64 | d
      return a
    }
    rba = function () {
      if (qba) throw Error('H')
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
        b = a.n_
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.c3a())
        if (a.l6) {
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
      a.gYa = _.Ya
      return a
    }
    vba = function (a) {
      const b = a.Tg, c = b[_.Qa] | 0
      return _.Za(a, c) ? a : _.yba(a, b, c) ? _.xba(a, b) : _.Jb(b, c)
    }
    _.Jb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Bb(a, b, wba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.yb = function (a) {
      const b = a.Tg, c = b[_.Qa] | 0
      return _.Za(a, c)
        ? _.yba(a, b, c) ? _.xba(a, b, !0) : new a.constructor(_.Jb(b, c, !1))
        : a
    }
    _.Kb = function (a) {
      if (a.Nb !== _.Ya) return !1
      var b = a.Tg
      b = _.Jb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Tg = b
      _.Gaa(a, !1)
      a.gYa = void 0
      return !0
    }
    _.Lb = function (a) {
      if (!_.Kb(a) && _.Za(a, a.Tg[_.Qa] | 0)) throw Error()
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
      a = _.Qb(a, b, c)
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
      const f = a.Tg
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
        _.Qb(b, h, e) != null &&
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
      ;(f === 2 || v) && _.Kb(a) && (b = a.Tg, c = b[_.Qa] | 0)
      a = _.Aba(b, e, g)
      var z = a === _.Sb ? 7 : a[_.Qa] | 0, A = _.Bba(z, c)
      if (t = !(4 & A)) {
        var I = a, N = c
        const S = !!(2 & A)
        S && (N |= 2)
        let Y = !S, ea = !0, ka = 0, Fa = 0
        for (; ka < I.length; ka++) {
          const Ha = _.cba(I[ka], d, !1, N)
          if (Ha instanceof d) {
            if (!S) {
              const Ua = _.Za(Ha)
              Y && (Y = !Ua)
              ea && (ea = Ua)
            }
            I[Fa++] = Ha
          }
        }
        Fa < ka && (I.length = Fa)
        A |= 4
        A = ea ? A & -4097 : A | 4096
        A = Y ? A | 8 : A & -9
      }
      A !== z && (a[_.Qa] = A, 2 & A && Object.freeze(a))
      if (
        v && !(8 & A || !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & A || !(16 & A) && 32 & c)))
      ) {
        _.Ob(A) && (a = [...a], A = _.Pb(A, c), c = _.Nb(b, c, e, a, g))
        d = a
        v = A
        for (z = 0; z < d.length; z++) {
          I = d[z], A = _.yb(I), I !== A && (d[z] = A)
        }
        v |= 8
        A = v = d.length ? v | 4096 : v & -4097
        a[_.Qa] = A
      }
      return a = _.zba(a, A, b, c, e, g, f, t, h)
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
    _.Wb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Ga(d) ? _.Wb.apply(null, d) : _.Vb(d)
      }
    }
    _.Xb = function () {
      this.PQ = this.PQ
      this.Tba = this.Tba
    }
    _.Zb = function (a, b) {
      _.Yb.call(this, a ? a.type : '')
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
      this.bi = null
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
      this.removed = this.Mha = !1
    }
    _.$b = function (a, b, c) {
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
    _.ac = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.cc = function (a) {
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
    _.kc = function () {
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
      _.ic && _.ic.qb(a)
    }
    _.nc = function () {
      _.ic && _.ic.Fa()
    }
    _.oc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Qba] = a
    }
    _.pc = function () {
      _.Xb.call(this)
      this.hR = new _.hc(this)
      this.MRc = this
      this.Srb = null
    }
    _.rc = function (a, b) {
      let c = a
      b && (c = (0, _.qc)(a, b))
      c = _.rc.yoc(c)
      _.rc.qNc
        ? setTimeout(c, 0)
        : (c = _.rc.Bld(c), _.rc.i9b || (_.rc.i9b = _.rc.Q4c()), _.rc.i9b(c))
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
      this.hb = a
      this.Wa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.lb = this.Fa = !1
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
      return new _.vc(_.xc, a)
    }
    _.$ba = function (a) {
      return a instanceof _.vc
    }
    _.zc = function (a) {
      if (_.$ba(a)) return a.ha
      throw Error('Z')
    }
    aca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.Ac = function (a) {
      return new _.bca(_.xc, a)
    }
    _.Bc = function (a) {
      return a instanceof _.bca
    }
    _.Cc = function (a) {
      if (_.Bc(a)) return a.ha
      throw Error('Z')
    }
    Ec = function (a) {
      return new Dc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Fc = function (a, b = cca) {
      if (_.Bc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Dc && d.Km(a)) return _.Ac(a)
      }
    }
    _.Ic = function (a, b = cca) {
      b = _.Fc(a, b)
      b === void 0 && _.dca(a.toString())
      return b || _.Gc
    }
    _.Jc = function (a) {
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
      if (!b) throw Error('Z')
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
    _.Kc = function (a) {
      return a instanceof _.bca ? _.Cc(a) : hca(a)
    }
    _.Lc = function (a, b) {
      b = _.Kc(b)
      b !== void 0 && (a.href = b)
    }
    _.Nc = function (a) {
      const b = Zba()
      a = b ? b.createHTML(a) : a
      return new _.Mc(_.xc, a)
    }
    _.ica = function (a) {
      return a instanceof _.Mc
    }
    _.Oc = function (a) {
      if (_.ica(a)) return a.ha
      throw Error('Z')
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
          b = _.Kc(c)
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
          b = _.Kc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.mb(b, void 0)
      }
    }
    _.Uc = function (a, b, c, d) {
      b = _.Kc(b)
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
      return new _.lca(_.xc, a)
    }
    _.mca = function (a) {
      return a instanceof _.lca
    }
    _.Xc = function (a) {
      if (_.mca(a)) return a.ha
      throw Error('Z')
    }
    nca = function (a) {
      const b = _.Vc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.Yc = function (a, b, c) {
      a.textContent = _.Xc(b)
      ;(c == null ? 0 : c.Thd) || nca(a)
    }
    _.Zc = function (a, b, c) {
      a.src = _.zc(b)
      ;(c == null ? 0 : c.Thd) || nca(a)
    }
    _.ad = function (a, b) {
      a.nodeType === 1 && _.oca(a)
      a.innerHTML = _.Oc(b)
    }
    _.oca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('Z')
    }
    _.rca = function (a, b, c) {
      if (_.$ba(b)) _.pca(a, b, c)
      else {
        if (qca.indexOf(c) === -1) throw Error('aa`' + c)
        b = _.Kc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.pca = function (a, b, c) {
      a.href = _.zc(b).toString()
      a.rel = c
    }
    _.sca = function (a) {
      return 'function' == typeof _.bd && a instanceof _.bd
    }
    _.tca = function (a) {
      if (_.sca(a)) return a.ha
      throw Error('Z')
    }
    _.dd = function (a, b, c) {
      return a.parseFromString(_.Oc(b), c)
    }
    _.ed = function (a, b) {
      b = _.Kc(b)
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
      return new _.xca(_.xc, a)
    }
    _.id = function (a, b) {
      if (_.ica(a)) return a
      a = _.hd(String(a))
      if (b == null ? 0 : b.dQd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.rZa) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.eQd) {
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
      if (!Aca.test(a)) throw Error('Z')
      if (Bca.indexOf(a.toUpperCase()) !== -1) throw Error('Z')
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
        if (!Aca.test(d)) throw Error('Z')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('Z')
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
        const c = b.KPa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.md = function (a) {
      return _.Lca.sanitize(a)
    }
    _.Mca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        P3a: b[0],
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
      return _.Nca(a.P3a, a.params, a.fragment, b)
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
      const c = a.P3a.slice(-1) === '/' ? '' : '/'
      b = a.P3a + c + encodeURIComponent(b)
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
      const d = c.Lf()
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
    rd = function (a, b) {
      _.Xb.call(this)
      this.ha = a
      this.Aa = b
      this.qa = []
      this.na = []
      this.oa = []
    }
    Uca = function () {
      this.oa = this.qa = null
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
      if (a && b) throw Error('ma')
      var c = ''
      const d = _.fa._F_jsUrl
      ;(a = b || fda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('na`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!gda(c)) throw Error('oa')
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
          const f = _.kc().Da(e)
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
          for (const g of Object.keys(f)) d.fua(e, g)
        }
      })
      return nda = !0
    }
    _.qda = function () {}
    sda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return rda[a]
    }
    Ad = function (a) {
      let b = 0, c = 0, d
      do d = sda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.tda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.A8 || ''
      !c.bMd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('va')
      }
      const f = c.ROd || _.Cd
      a = fda(a)
      b = new f(
        _.wca(hda('', a), {
          Tnb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.MSd || a && a.hasAttribute('crossorigin')
      a = c.DLd || a && a.getAttribute('crossorigin')
      d && (b.yIa = d)
      a && (b.fwa = a)
      c.xIa && (b.xIa = c.xIa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.kc()
      g.oa = b
      g.sec(!0)
      _.Dd = c.UKd === 'BATCH' ? lda : (h) => Promise.resolve(g.load(h))
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
            var A = z.get(this)
            A || (A = {}, z.set(this, A))
            var I = !(typeof h === 'boolean' ? h : h && h.capture) + f
            if (!A[I]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var N = g.handleEvent
                if (typeof N === 'function') return N.apply(g, arguments)
              })
              if (v) {
                h && h.once && (v = function (N) {
                  return function () {
                    if (typeof N !== 'function') throw Error('l`' + N)
                    delete A[I]
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
                    delete A[I]
                  }, { once: !0 })
                }
              }
              A[I] = v
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
        var d = c.oxb
        c = c.Ynb
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
        b = d.oxb
        d = d.Ynb
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
        if (a.size <= b.size) a = { oxb: a.keys(), Ynb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { oxb: b, Ynb: a }
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
        if (b instanceof RegExp && !b.global) throw new TypeError('r')
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
    var Oda = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Gd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return Oda(this, b, c).v
      }
    })
    zda('findLast', function (a) {
      return a ? a : function (b, c) {
        return Oda(this, b, c).v
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
    var Nd, Pd, Qda, Rda, Sda
    _.Pda = _.Pda || {}
    _.fa = this || self
    _.Kd = function (a, b, c) {
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
      return Object.prototype.hasOwnProperty.call(a, Qda) && a[Qda] ||
        (a[Qda] = ++Rda)
    }
    Qda = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    Rda = 0
    Sda = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.qc = function (a, b, c) {
      _.qc = Sda
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
    _.Tda = function (a, b, c) {
      _.Kd(a, b, c)
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
    var Uda
    _.Ud(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.Vda = typeof TextDecoder !== 'undefined'
    _.Wda = typeof TextEncoder !== 'undefined'
    var Vd = !!(_.Od[4] >> 29 & 1),
      Xda = !!(_.Od[4] >> 24 & 1),
      Yda = !!(_.Od[5] & 2),
      Zda = !!(_.Od[4] >> 16 & 1),
      $da = !!(_.Od[5] & 4),
      aea = !!(_.Od[4] >> 20 & 1),
      bea = !!(_.Od[4] & 4096),
      cea = !!(_.Od[5] & 1)
    var dea, qba
    dea = Nd(1, !0)
    _.faa = Vd ? Yda : Nd(610401301, !1)
    _.eea = Vd ? Zda : Nd(1331761403, !1)
    _.fea = Vd ? $da : Nd(651175828, !1)
    qba = Vd ? Xda || !aea : Nd(748402147, !0)
    _.gea = Vd ? bea : Nd(861377723, !1)
    _.hea = Vd ? Xda || !cea : Nd(861377724, dea)
    var iea
    iea = _.fa.navigator
    _.na = iea ? iea.userAgentData || null : null
    var jea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var kea = new class {
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
    var lea
    lea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Hd(function* () {
          if (ua(!0)) return new jea(yield kea.load())
          a.ha = !0
          return new jea(_.qaa())
        })
      }
    }
    _.mea = new lea()
    _.ya = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Wd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Xd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Yd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.$d = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.nea = function (a) {
      _.nea[' '](a)
      return a
    }
    _.nea[' '] = function () {}
    _.oea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Aea, Bea
    _.pea = _.haa()
    _.ae = _.iaa()
    _.be = _.oa('Edge')
    _.ce = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.de = _.caa('WebKit') && !_.oa('Edge')
    _.qea = _.de && _.oa('Mobile')
    _.ee = _.wa()
    _.fe = _.oaa()
    _.rea = _.naa() || _.paa()
    _.sea = _.laa()
    _.tea = _.maa()
    _.uea = _.oa('iPad')
    _.vea = _.oa('iPod')
    _.wea = _.va()
    _.caa('KaiOS')
    var xea = function () {
        const a = _.fa.document
        return a ? a.documentMode : void 0
      },
      yea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.ce) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.be) return /Edge\/([\d\.]+)/.exec(c)
        if (_.ae) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.de) return /WebKit\/(\S+)/.exec(c)
        if (_.pea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.ae) {
        const c = xea()
        if (c != null && c > parseFloat(a)) {
          yea = String(c)
          break a
        }
      }
      yea = a
    }
    _.zea = yea
    Aea = {}
    _.ge = function (a) {
      return _.oea(Aea, a, function () {
        return _.eaa(_.zea, a) >= 0
      })
    }
    if (_.fa.document && _.ae) {
      var Cea = xea()
      Bea = Cea ? Cea : parseInt(_.zea, 10) || void 0
    } else Bea = void 0
    _.Dea = Bea
    var Eea, Fea, Gea, Hea, Iea, Jea
    _.he = {}
    Eea = _.qa()
    Fea = vaa()
    Gea = _.oa('iPad')
    Hea = _.kaa()
    Iea = _.ra()
    Jea = waa()
    _.he.ANDROID = Hea
    _.he.eCd = !1
    _.he.fCd = !1
    _.he.gCd = !1
    _.he.hCd = !1
    _.he.iCd = !1
    _.he.jCd = !1
    _.he.CHROME = Iea
    _.he.wfa = _.be
    _.he.CZ = Eea
    _.he.oEb = _.ae
    _.he.M5a = Gea
    _.he.N5a = Fea
    _.he.A7a = _.pea
    _.he.iJ = Jea
    _.he.lOd = vaa
    _.he.pOd = waa
    _.yaa = {}
    _.xaa = null
    var Caa, Aaa, Kea
    Caa = /[-_.]/g
    Aaa = { '-': '+', _: '/', '.': '=' }
    _.je = {}
    Kea = typeof structuredClone != 'undefined'
    var Lea
    _.le = function (a) {
      return a ? new _.Gb(a, _.je) : _.ke()
    }
    _.ke = function () {
      return Lea || (Lea = new _.Gb(null, _.je))
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
    _.me = function (a) {
      if (_.je !== _.je) throw Error('x')
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
        if (b !== _.je) throw Error('x')
        this.ha = a
        if (a != null && a.length === 0) throw Error('w')
      }
    }
    var Cba, hba, tba, nba
    _.xb = Pa()
    Cba = Pa()
    _.Mea = Pa()
    _.Ab = Pa()
    _.Nea = Pa()
    hba = Pa()
    _.Oea = Pa()
    tba = Pa()
    _.Ta = Pa('m_m', !0)
    nba = Pa()
    _.Pea = Pa()
    var Qea
    _.Qa = Pa('jas', !0)
    Qea = []
    Qea[_.Qa] = 7
    _.Sb = Object.freeze(Qea)
    var Rea
    _.Va = {}
    _.Ya = {}
    Rea = class {
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
    _.Sea = Object.freeze({})
    _.Tea = Object.freeze({})
    var oba = {}
    _.Uea = _.$a((a) => a !== null && a !== void 0)
    _.bb = _.$a((a) => typeof a === 'number')
    _.Vea = _.$a((a) => Number.isFinite(a))
    _.ab = _.$a((a) => typeof a === 'string')
    _.Iaa = _.$a((a) => typeof a === 'boolean')
    _.Wea = _.$a((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.Xea = _.$a((a) => typeof a === 'function')
    _.Yea = _.$a((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.Zea = _.$a((a) => Array.isArray(a))
    _.db = typeof _.fa.BigInt === 'function' &&
      typeof _.fa.BigInt(0) === 'bigint'
    var bfa, $ea, cfa, afa
    _.Db = _.$a((a) =>
      _.db ? a >= $ea && a <= afa : a[0] === '-' ? Jaa(a, bfa) : Jaa(a, cfa)
    )
    bfa = Number.MIN_SAFE_INTEGER.toString()
    $ea = _.db ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    cfa = Number.MAX_SAFE_INTEGER.toString()
    afa = _.db ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.fb = 0
    _.hb = 0
    var Raa = void 0
    var Uaa
    _.ne = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.ub = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.tb = Number.isSafeInteger
    _.ob = Number.isFinite
    _.sb = Math.trunc
    Uaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var dfa, efa
    dfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    efa = function (a) {
      if (a.n_ & 2) throw Error('C')
    }
    _.Ib = class extends dfa {
      constructor(a, b, c = dba, d = dba) {
        super()
        this.n_ = a[_.Qa] | 0
        this.l6 = b
        this.ABa = c
        this.yAb = this.l6 ? eba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.n_)
          super.set(g, h)
        }
      }
      c3a(a) {
        return _.Eaa(Array.from(super.entries(), a))
      }
      clear() {
        efa(this)
        super.clear()
      }
      delete(a) {
        efa(this)
        return super.delete(this.ABa(a, !0, !1))
      }
      entries() {
        if (this.l6) {
          var a = super.keys()
          a = new Rea(a, fba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.l6) {
          var a = super.keys()
          a = new Rea(a, _.Ib.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.l6
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        efa(this)
        a = this.ABa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.yAb(b, !0, !0, this.l6, !1, this.n_))
      }
      opd(a) {
        const b = this.ABa(a[0], !1, !0)
        a = a[1]
        a = this.l6
          ? a === void 0 ? null : a
          : this.yAb(a, !1, !0, void 0, !1, this.n_)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.ABa(a, !1, !1))
      }
      get(a) {
        a = this.ABa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.l6
          return c
            ? (c = this.yAb(b, !1, !0, c, this.zUc, this.n_),
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
    _.oe = Kea ? structuredClone : (a) => _.Bb(a, 0, _.Cb)
    _.ffa = _.eb(0)
    _.pe = function (a, b, c, d, e) {
      b = _.Qb(a.Tg, b, c, e)
      if (b !== null || d && a.gYa !== _.Ya) return b
    }
    _.Qb = function (a, b, c, d) {
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
    _.re = function (a, b, c) {
      return _.qe(a, b) === c ? c : -1
    }
    _.qe = function (a, b, c) {
      a = a.Tg
      return _.Eba(_.Dba(a), a, void 0, b, c)
    }
    _.se = function (a, b, c, d) {
      return _.Taa(_.pe(a, b, c, d))
    }
    _.te = function (a, b, c, d) {
      return _.rb(_.pe(a, b, c, d))
    }
    _.ve = function (a, b, c = 0, d) {
      let e
      return (e = _.te(a, b, d)) != null ? e : c
    }
    _.Ub = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('N')
      return new a(_.Faa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Tg = _.sba(a, b, c, 2048)
      }
      toJSON() {
        return _.pba(this)
      }
      serialize(a) {
        return JSON.stringify(_.pba(this, a))
      }
      clone() {
        const a = this.Tg, b = a[_.Qa] | 0
        return _.yba(this, a, b)
          ? _.xba(this, a, !0)
          : new this.constructor(_.Jb(a, b, !1))
      }
      isImmutable() {
        return _.Za(this)
      }
    }
    _.l.prototype.Maa = _.ba(0)
    _.l.prototype[_.Ta] = _.Va
    _.l.prototype.toString = function () {
      return this.Tg.toString()
    }
    _.gfa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.hfa = []
    _.ifa = []
    _.jfa = !1
    _.kfa = function (a) {
      _.hfa[_.hfa.length] = a
      if (_.jfa) {
        for (let b = 0; b < _.ifa.length; b++) {
          a((0, _.qc)(_.ifa[b].wrap, _.ifa[b]))
        }
      }
    }
    _.Xb.prototype.PQ = !1
    _.Xb.prototype.isDisposed = function () {
      return this.PQ
    }
    _.Xb.prototype.dispose = function () {
      this.PQ || (this.PQ = !0, this.Fb())
    }
    _.Xb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Xb.prototype.Lb = function (a) {
      this.addOnDisposeCallback(_.Sd(_.Vb, a))
    }
    _.Xb.prototype.addOnDisposeCallback = function (a, b) {
      this.PQ
        ? b !== void 0 ? a.call(b) : a()
        : (this.Tba || (this.Tba = []), b && (a = a.bind(b)), this.Tba.push(a))
    }
    _.Xb.prototype.Fb = function () {
      if (this.Tba) { for (; this.Tba.length;) this.Tba.shift()() }
    }
    _.Yb = function (a, b) {
      this.type = 'function' == typeof _.lfa && a instanceof _.lfa
        ? String(a)
        : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Yb.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Yb.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var nfa
    _.mfa = !(!_.fa.navigator || !_.fa.navigator.maxTouchPoints)
    nfa = function () {
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
    _.Ud(_.Zb, _.Yb)
    _.Zb.prototype.init = function (a, b) {
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
        : (this.offsetX = _.de || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.de || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.ee ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.bi = a
      a.defaultPrevented && _.Zb.Yb.preventDefault.call(this)
    }
    _.Zb.prototype.stopPropagation = function () {
      _.Zb.Yb.stopPropagation.call(this)
      this.bi.stopPropagation
        ? this.bi.stopPropagation()
        : this.bi.cancelBubble = !0
    }
    _.Zb.prototype.preventDefault = function () {
      _.Zb.Yb.preventDefault.call(this)
      const a = this.bi
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.Zb.prototype.Eya = _.ba(1)
    _.ofa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.we = function (a) {
      return !(!a || !a[_.ofa])
    }
    var Hba = 0
    var pfa = function (a) {
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
      const g = qfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Mha = !1))
        : (b = new _.Iba(b, this.src, f, !!d, e), b.Mha = c, a.push(b))
      return b
    }
    _.hc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = qfa(e, b, c, d)
      return b > -1
        ? (pfa(e[b]),
          _.Ba(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var rfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Da(a.listeners[c], b)
      d &&
        (pfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.hc.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, pfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.hc.prototype.m$ = _.ba(3)
    _.hc.prototype.kka = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = qfa(a, b, c, d))
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
    var qfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var sfa, tfa, ufa, wfa, xfa, yfa, zfa, Bfa
    sfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    tfa = {}
    ufa = 0
    _.ye = function (a, b, c, d, e) {
      if (d && d.once) return _.xe(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ye(a, b[f], c, d, e)
        return null
      }
      c = _.vfa(c)
      return _.we(a)
        ? a.listen(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : wfa(a, b, c, !1, d, e)
    }
    wfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('Q')
      const g = _.Qd(e) ? !!e.capture : !!e
      let h = _.ze(a)
      h || (a[sfa] = h = new _.hc(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = xfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        nfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(yfa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('R')
      ufa++
      return c
    }
    xfa = function () {
      const a = zfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.xe = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.xe(a, b[f], c, d, e)
        return null
      }
      c = _.vfa(c)
      return _.we(a)
        ? a.hf(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : wfa(a, b, c, !0, d, e)
    }
    _.Ae = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Ae(a, b[f], c, d, e)
      } else {d = _.Qd(d) ? !!d.capture : !!d,
          c = _.vfa(c),
          _.we(a)
            ? a.Nf(b, c, d, e)
            : a && (a = _.ze(a)) && (b = a.kka(b, c, d, e)) && _.Ce(b)}
    }
    _.Ce = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.we(b)) return b.WT(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(yfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      ufa--
      ;(c = _.ze(b))
        ? (rfa(c, a), c.ha == 0 && (c.src = null, b[sfa] = null))
        : pfa(a)
      return !0
    }
    yfa = function (a) {
      return a in tfa ? tfa[a] : tfa[a] = 'on' + a
    }
    _.Afa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.Mha && _.Ce(a)
      return c.call(d, b)
    }
    zfa = function (a, b) {
      return a.removed ? !0 : _.Afa(a, new _.Zb(b, this))
    }
    _.ze = function (a) {
      a = a[sfa]
      return a instanceof _.hc ? a : null
    }
    Bfa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.vfa = function (a) {
      if (typeof a === 'function') return a
      a[Bfa] || (a[Bfa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Bfa]
    }
    _.kfa(function (a) {
      zfa = a(zfa)
    })
    var Nba
    _.Cfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('S`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Oba((e) => {
            e.fua(a.ha, d)
          })
        })
      }
    }
    _.De = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Cfa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Qba = Symbol('T')
    _.Ud(_.pc, _.Xb)
    _.pc.prototype[_.ofa] = !0
    _.k = _.pc.prototype
    _.k.tR = function () {
      return this.Srb
    }
    _.k.hp = function (a) {
      this.Srb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.ye(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.Ae(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.tR()
      if (c) { for (b = []; c; c = c.tR()) b.push(c) }
      c = this.MRc
      const d = a.type || a
      if (typeof a === 'string') a = new _.Yb(a, c)
      else if (a instanceof _.Yb) a.target = a.target || c
      else {
        var e = a
        a = new _.Yb(d, c)
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
      this.Srb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.hR.add(String(a), b, !1, c, d)
    }
    _.k.hf = function (a, b, c, d) {
      return this.hR.add(String(a), b, !0, c, d)
    }
    _.k.Nf = function (a, b, c, d) {
      return this.hR.remove(String(a), b, c, d)
    }
    _.k.WT = function (a) {
      return rfa(this.hR, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.hR ? this.hR.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.hR.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.Mha && this.WT(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.m$ = _.ba(2)
    _.k.kka = function (a, b, c, d) {
      return this.hR.kka(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.hR.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.Ee =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Sba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Dfa = class {
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
    _.rc.Bld = _.Ee
    _.rc.qNc = !1
    _.rc.Q4c = function () {
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
    _.rc.yoc = (a) => a
    _.kfa(function (a) {
      _.rc.yoc = a
    })
    var Efa = class {
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
      Tba = new Dfa(() => new Ffa(), (a) => a.reset()),
      Ffa = class {
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
    var Gfa, Uba, Rba, Hfa
    Uba = !1
    Rba = new Efa()
    _.Fe = (a, b) => {
      Gfa || Hfa()
      Uba || (Gfa(), Uba = !0)
      Rba.add(a, b)
    }
    Hfa = () => {
      const a = Promise.resolve(void 0)
      Gfa = () => {
        a.then(Vba)
      }
    }
    _.Ge = function () {}
    var Ifa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Jfa, Kfa, iga, Qfa, Mfa, nga, lga, jga, kga, oga, mga, pga
    _.Ke = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.Ge) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.He(b, 2, c)
          }, function (c) {
            _.He(b, 3, c)
          })
        } catch (b) {
          _.He(this, 3, b)
        }
      }
    }
    Jfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Jfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Kfa = new Dfa(function () {
      return new Jfa()
    }, function (a) {
      a.reset()
    })
    _.Lfa = function (a, b, c) {
      const d = Kfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.Nfa = function (a, b, c) {
      Mfa(a, b, c, null) || _.Fe(_.Sd(b, a))
    }
    _.Ofa = function (a) {
      return new _.Ke(function (b, c) {
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
            _.Nfa(h, _.Sd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Le = function () {
      let a, b
      const c = new _.Ke(function (d, e) {
        a = d
        b = e
      })
      return new Pfa(c, a, b)
    }
    _.Ke.prototype.then = function (a, b, c) {
      return Qfa(
        this,
        (0, _.Ee)(typeof a === 'function' ? a : null),
        (0, _.Ee)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Ke.prototype.$goog_Thenable = !0
    var Tfa = function (a, b, c, d) {
      _.Rfa(a, _.Lfa(b || _.Ge, c || null, d))
    }
    _.Ke.prototype.finally = function (a) {
      a = (0, _.Ee)(a)
      return new _.Ke((b, c) => {
        Tfa(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Ke.prototype.ha = function (a, b) {
      return Qfa(this, null, (0, _.Ee)(a), b)
    }
    _.Ke.prototype.catch = _.Ke.prototype.ha
    _.Ke.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Me(a)
        _.Fe(function () {
          iga(this, b)
        }, this)
      }
    }
    iga = function (a, b) {
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
              ? iga(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : jga(c),
                kga(c, e, 3, b)))
          }
          a.na = null
        } else _.He(a, 3, b)
      }
    }
    _.Rfa = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || lga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    Qfa = function (a, b, c, d) {
      const e = _.Lfa(null, null, null)
      e.child = new _.Ke(function (f, g) {
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
              t === void 0 && h instanceof _.Me ? g(h) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.Rfa(a, e)
      return e.child
    }
    _.Ke.prototype.Ea = function (a) {
      this.ka = 0
      _.He(this, 2, a)
    }
    _.Ke.prototype.Fa = function (a) {
      this.ka = 0
      _.He(this, 3, a)
    }
    _.He = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('U')),
          a.ka = 1,
          Mfa(c, a.Ea, a.Fa, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            lga(a),
            b != 3 || c instanceof _.Me || mga(a, c)))
    }
    Mfa = function (a, b, c, d) {
      if (a instanceof _.Ke) return Tfa(a, b, c, d), !0
      if (Ifa(a)) return a.then(b, c, d), !0
      if (_.Qd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return nga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    nga = function (a, b, c, d, e) {
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
    lga = function (a) {
      a.Aa || (a.Aa = !0, _.Fe(a.Da, a))
    }
    jga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Ke.prototype.Da = function () {
      let a
      for (; a = jga(this);) kga(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    kga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, oga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : oga(b, c, d)
        } catch (e) {
          pga.call(null, e)
        }}
      Sba(Kfa, b)
    }
    oga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    mga = function (a, b) {
      a.qa = !0
      _.Fe(function () {
        a.qa && pga.call(null, b)
      })
    }
    pga = _.ha
    _.Me = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Ud(_.Me, _.da)
    _.Me.prototype.name = 'cancel'
    var Pfa = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var wga, vga, rga, sga
    _.sc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.sc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.hb ? this.hb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.Pe(this))
      }
    }
    _.sc.prototype.Sa = function (a, b) {
      this.Fa = !1
      qga(this, a, b)
    }
    var qga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        rga(a)
      },
      tga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new sga(a)
          a.Oa = !1
        }
      }
    _.sc.prototype.callback = function (a) {
      tga(this)
      qga(this, !0, a)
    }
    _.sc.prototype.ha = function (a) {
      tga(this)
      qga(this, !1, a)
    }
    _.Re = function (a, b, c) {
      return _.Qe(a, b, null, c)
    }
    _.sc.prototype.finally = function (a) {
      return _.uga(
        new Promise((b, c) => {
          _.Qe(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.Qe = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.Ee)(b) : (b = (0, _.Ee)(b), c = (0, _.Ee)(c)))
      a.Ba.push([b, c, d])
      e && rga(a)
      return a
    }
    _.sc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Ke(function (g, h) {
        e = g
        d = h
      })
      _.Qe(this, e, function (g) {
        g instanceof _.Pe ? f.cancel() : d(g)
        return vga
      }, this)
      return f.then(a, b, c)
    }
    _.sc.prototype.$goog_Thenable = !0
    _.sc.prototype.ma = _.ba(4)
    _.sc.prototype.isError = function (a) {
      return a instanceof Error
    }
    wga = function (a) {
      return _.$d(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    vga = {}
    rga = function (a) {
      if (a.Da && a.ka && wga(a)) {
        var b = a.Da, c = xga[b]
        c && (_.fa.clearTimeout(c.ha), delete xga[b])
        a.Da = 0
      }
      a.na && (a.na.Aa--, delete a.na)
      b = a.oa
      for (var d = c = !1; a.Ba.length && !a.Fa;) {
        var e = a.Ba.shift(), f = e[0]
        const h = e[1]
        e = e[2]
        if (f = a.qa ? h : f) {
          try {
            var g = f.call(e || a.Wa, b)
            g === vga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Ifa(b) ||
              typeof _.fa.Promise === 'function' && b instanceof _.fa.Promise
            ) d = !0, a.Fa = !0
          } catch (t) {
            b = t, a.qa = !0, wga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.qc)(a.Sa, a, !0),
          d = (0, _.qc)(a.Sa, a, !1),
          b instanceof _.sc ? (_.Qe(b, g, d), b.lb = !0) : b.then(g, d))
      c && (b = new yga(b), xga[b.ha] = b, a.Da = b.ha)
    }
    _.uga = function (a) {
      const b = new _.sc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    sga = function (a) {
      _.da.call(this)
      this.lB = a
    }
    _.Ud(sga, _.da)
    sga.prototype.message = 'Deferred has already fired'
    sga.prototype.name = 'AlreadyCalledError'
    _.Pe = function (a) {
      _.da.call(this)
      this.lB = a
    }
    _.Ud(_.Pe, _.da)
    _.Pe.prototype.message = 'Deferred was canceled'
    _.Pe.prototype.name = 'CanceledError'
    var yga = function (a) {
      this.ha = _.fa.setTimeout((0, _.qc)(this.throwError, this), 0)
      this.fR = a
    }
    yga.prototype.throwError = function () {
      delete xga[this.ha]
      throw this.fR
    }
    var xga = {}
    var Bga, Cga, Dga
    _.zga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Wa
      }
      return !1
    }
    _.Ue = function (a) {
      for (; a.Wa;) a = a.Wa
      return a
    }
    Bga = function (a) {
      var b = _.Aga
      const c = []
      a = _.Ue(a)
      let d
      a.rA[b] && (d = a.rA[b][0])
      d && c.push(d)
      a = a.Ya || []
      for (let e = 0; e < a.length; e++) {
        a[e].rA[b] && (d = a[e].rA[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.Xe = function (a, b) {
      for (var c = a; c; c = c.Wa) {
        if (c.isDisposed()) throw new _.gfa([b])
        if (c.rA[b]) return c.rA[b][0]
        if (c.wc[b]) break
      }
      if (c = a.ub[b]) {
        c = c(a)
        if (c == null) throw Error('W`' + b)
        _.Ve(a, b, c)
        return c
      }
      return null
    }
    _.Ve = function (a, b, c) {
      if (a.isDisposed()) _.Vb(c)
      else {
        a.rA[b] = [c, !0]
        var d = Cga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Wb[b]
        b instanceof _.De && _.oc(b, c.constructor)
      }
    }
    Cga = function (a, b, c) {
      const d = [], e = a.Pa[c]
      e && (_.saa(e, function (f) {
        _.zga(f.appContext, b) && (d.push(f.d), _.Da(e, f))
      }),
        e.length == 0 && delete a.Pa[c])
      return d
    }
    Dga = function (a, b) {
      a.Pa && _.$b(a.Pa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Ye = class extends _.Xb {
      constructor() {
        super()
        this.rA = {}
        this.Wb = {}
        this.ub = {}
        this.Pa = {}
        this.Sa = {}
        this.wc = {}
        this.yb = new _.pc()
        this.Qd = !0
        this.Wa = null
        const a = _.Ue(this)
        this != a && (a.Ya ? a.Ya.push(this) : a.Ya = [this])
      }
      get(a) {
        let b = _.Xe(this, a)
        if (b == null) throw Error('V`' + a)
        return b
      }
      Fb() {
        if (_.Ue(this) == this) {
          var a = this.Ya
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Ue(this).Ya
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.rA) {
          a = this.rA[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.rA = null
        this.Qd && this.yb.dispose()
        Dga(this, this)
        this.Pa = null
        _.Vb(this.be)
        this.wc = this.be = null
        super.Fb()
      }
      Ds() {
        return this.yb
      }
    }
    _.Ye.prototype.Nb = _.ba(7)
    _.Ye.prototype.hb = _.ba(6)
    _.Ye.prototype.qb = _.ba(5)
    _.Aga = new _.De('n73qwf', 'n73qwf')
    _.tc.prototype.clone = function () {
      return new _.tc(this.x, this.y)
    }
    _.tc.prototype.equals = function (a) {
      return a instanceof _.tc && _.$e(this, a)
    }
    _.$e = function (a, b) {
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
    _.af = function (a, b) {
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
    _.xc = {}
    var Ega = globalThis.trustedTypes, Wba = Ega, Yba
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
    _.Fga = _.Ac('about:blank')
    _.Gc = _.Ac('about:invalid#zClosurez')
    var Dc, cca, eca, Gga, gca
    Dc = class {
      constructor(a) {
        this.Km = a
      }
    }
    _.bf = {
      JId: Ec('tel'),
      zCd: new Dc((a) => /^callto:\+?\d*$/i.test(a)),
      lId: new Dc((a) => a.indexOf('ssh://') === 0),
      JHd: Ec('rtsp'),
      Utc: Ec('data'),
      Hyc: Ec('http'),
      Iyc: Ec('https'),
      EXTENSION: new Dc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      nxc: Ec('ftp'),
      AHc: new Dc((a) => /^[^:]*([/?#]|$)/.test(a)),
      MBc: Ec('mailto'),
      TFd: Ec('intent'),
      lGd: Ec('market'),
      WFd: Ec('itms'),
      XFd: Ec('itms-appss'),
      YFd: Ec('itms-services'),
      ODd: Ec('fb-messenger'),
      HJd: Ec('whatsapp'),
      dId: new Dc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      hId: Ec('sms'),
      yJd: Ec('vnd.youtube'),
      tFd: Ec('googlehome'),
      uFd: Ec('googlehomesdk'),
      LINE: Ec('line'),
    }
    cca = [_.bf.Utc, _.bf.Hyc, _.bf.Iyc, _.bf.MBc, _.bf.nxc, _.bf.AHc]
    eca = typeof URL === 'function'
    Gga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
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
    _.cf = new _.Mc(_.xc, Ega ? Ega.emptyHTML : '')
    _.Hga = {
      eFd: 0,
      yDd: 1,
      zDd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Sc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Hga[b]}`)
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
    _.Iga = new _.lca(_.xc, Ega ? Ega.emptyScript : '')
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
    _.Jga = Math.random() * 2147483648 | 0
    _.df = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Aca = /^[a-z][a-z\d-]*$/i,
      Bca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Eca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Fca = ['action', 'formaction', 'href']
    _.Kga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Lga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Nga
    _.Mga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Nga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Tu: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Tu: 1 }
        : { Tu: 0 }
    }
    _.ef = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Oga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Pga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Qga = [
        ['A', new Map([['href', { Tu: 7 }]])],
        ['AREA', new Map([['href', { Tu: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Tu: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Tu: 5 }], ['srcset', { Tu: 6 }]])],
        ['IMG', new Map([['src', { Tu: 5 }], ['srcset', { Tu: 6 }]])],
        ['VIDEO', new Map([['src', { Tu: 5 }]])],
        ['AUDIO', new Map([['src', { Tu: 5 }]])],
      ],
      Rga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Sga = [
        ['dir', {
          Tu: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Tu: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Tu: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Tu: 5 }],
        ['target', {
          Tu: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Tga = new _.ef(new Set(Pga), new Map(Qga), new Set(Rga), new Map(Sga)),
      Uga = new _.ef(
        new Set(Pga.concat(['BUTTON', 'INPUT'])),
        new Map(Qga),
        new Set(Rga.concat(['class', 'id', 'name'])),
        new Map(Sga.concat([['style', { Tu: 1 }]])),
      ),
      Vga = new _.ef(
        new Set(
          Pga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Qga),
        new Set(
          Rga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Sga.concat([['style', { Tu: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Wga
    _.Xga = function (a, b, c) {
      b = Hca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Jca(g)
          ? (g = Ica(g), g = g === null ? 2 : _.Mga(a.oa, g) ? 1 : 2)
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
        else throw Error('Z')
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
        var e = Nga(a.oa, h, d), f
        a: {
          if (f = e.conditions) {
            for (const [v, z] of f) {
              f = z
              let A
              var g = (A = b.getNamedItem(v)) == null ? void 0 : A.value
              if (g && !f.has(g)) {
                f = !1
                break a
              }
            }
          }
          f = !0
        }
        if (f) {
          switch (e.Tu) {
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
                ? (e = { type: 2, attributeName: h, jVb: d },
                  f = _.Gca(t),
                  (e = a.ha(f, e)) && ld(c, h, e.toString()))
                : ld(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, jVb: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, A] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, KPa: A })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Gca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), KPa: v.KPa })
                }
                ld(c, h, Kca(f))
              } else ld(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, jVb: d }
                f = _.Gca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.fca(e)
              e = f !== void 0 && Gga.indexOf(f.toLowerCase()) !== -1
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
      b.set('style', { Tu: 4 })
      a.ha = new _.ef(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.ff = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.ef(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.bha = class {
      constructor() {
        this.na = !1
        this.ha = Tga
      }
    }
    _.gf = class extends _.bha {
      build() {
        if (this.na) throw Error('ea')
        this.na = !0
        return new _.Yga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var cha, eha, qha, rha, sha
    _.pd = function (a) {
      return a ? new _.hf(_.jf(a)) : Uda || (Uda = new _.hf())
    }
    _.kf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.lf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.mf = function (a, b) {
      _.$b(b, function (c, d) {
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
    _.nf = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.uc(a.clientWidth, a.clientHeight)
    }
    _.of = function (a) {
      return a ? a.defaultView : window
    }
    _.fha = function (a, b) {
      const c = b[1], d = _.dha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.mf(d, c))
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
          : _.Wd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ea(f)
              : f,
            e,
          )
      }
    }
    _.pf = function (a) {
      return _.dha(document, a)
    }
    _.dha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.gha = function (a, b) {
      eha(_.jf(a), a, arguments, 1)
    }
    _.rf = function (a) {
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
    _.sf = function (a) {
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
    _.tf = function (a) {
      return _.Qd(a) && a.nodeType == 1
    }
    _.vf = function (a) {
      return a.parentElement || null
    }
    _.wf = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.jf = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.xf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.rf(a), a.appendChild(_.jf(a).createTextNode(String(b)))
    }
    qha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    rha = { IMG: ' ', BR: '\n' }
    _.tha = function (a) {
      return a.hasAttribute('tabindex') && sha(a)
    }
    _.yf = function (a, b) {
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
    _.zf = function (a) {
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
    _.hf = function (a) {
      this.zl = a || _.fa.document || document
    }
    _.k = _.hf.prototype
    _.k.kb = _.pd
    _.k.Lf = function () {
      return this.zl
    }
    _.k.Xa = function (a) {
      return _.kf(this.zl, a)
    }
    _.k.$ = _.hf.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.zl).getElementsByTagName(String(a))
    }
    _.k.kF = _.ba(9)
    _.k.Tb = _.ba(11)
    _.k.rc = _.ba(13)
    _.k.setProperties = _.mf
    _.k.xj = function (a) {
      return _.nf(a || this.getWindow())
    }
    _.k.Hb = function (a, b, c) {
      return _.fha(this.zl, arguments)
    }
    _.k.createElement = function (a) {
      return _.dha(this.zl, a)
    }
    _.k.createTextNode = function (a) {
      return this.zl.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.zl.defaultView
    }
    _.k.ho = _.ba(14)
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
    _.k.kk = _.rf
    _.k.i2b = _.hha
    _.k.qAa = _.iha
    _.k.pAa = _.jha
    _.k.removeNode = _.sf
    _.k.wtb = _.kha
    _.k.getChildren = _.lha
    _.k.Jya = _.nha
    _.k.bib = _.oha
    _.k.yZb = _.pha
    _.k.isElement = _.tf
    _.k.isWindow = function (a) {
      return _.Qd(a) && a.window == a
    }
    _.k.mka = _.vf
    _.k.contains = _.wf
    _.k.gib = _.jf
    _.k.jl = _.xf
    _.k.Ax = _.yf
    _.k.ix = _.uha
    _.k.vR = _.zf
    Pd = Pd || {}
    var wha = function () {
      _.Xb.call(this)
    }
    _.Ud(wha, _.Xb)
    wha.prototype.initialize = function () {}
    Tca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Tca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.kfa(function (a) {
      Tca.prototype.execute = a(Tca.prototype.execute)
    })
    Pd.n7a = Tca
    _.Ud(rd, _.Xb)
    rd.prototype.ma = null
    rd.prototype.Ba = wha
    rd.prototype.ka = null
    rd.prototype.getId = function () {
      return this.Aa
    }
    var xha = function (a, b, c) {
        a.qa.push(new Pd.n7a(b, c))
      },
      yha = function (a, b) {
        a.na.push(new Pd.n7a(b, void 0))
      }
    rd.prototype.isLoaded = function () {
      return !!this.ka
    }
    rd.prototype.onLoad = function (a) {
      var b = new this.Ba()
      b.initialize(a())
      this.ka = b
      b = (b = zha(this.oa, a())) || zha(this.qa, a())
      b || (this.na.length = 0)
      return b
    }
    rd.prototype.onError = function (a) {
      ;(a = zha(this.na, a)) && _.ha(Error('fa`' + a))
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
    rd.prototype.Fb = function () {
      rd.Yb.Fb.call(this)
      _.Vb(this.ka)
      this.ma = null
    }
    Pd.m7a = rd
    var Af = {
      ERROR: 'error',
      IDLE: 'idle',
      Nra: 'active',
      oNc: 'userIdle',
      nNc: 'userActive',
    }
    _.k = Uca.prototype
    _.k.sec = function () {}
    _.k.u0a = function () {}
    _.k.CFa = function () {}
    _.k.fua = function () {
      throw Error('ga')
    }
    _.k.zEa = function () {
      throw Error('ha')
    }
    _.k.lZb = function () {
      return this.qa
    }
    _.k.JFa = function (a) {
      this.qa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.u5b = function () {
      return !1
    }
    var Aha, Bha
    Aha = function (a, b) {
      const c = b.styleSheets.length, d = Sca(a, new _.hf(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Bha = function (a) {
      return _.Yd(Bga(a), (b) => b.gib())
    }
    _.Cha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Tda('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.qa
            if (b) {
              if (b = Bha(b), b.length == 0) Aha(a, document)
              else for (let c of b) Aha(a, c)
            } else Aha(a, document)
          }
        })
      }
    }
    var Dha, Eha, Gha
    Dha = function (a) {
      throw Error('ia`' + a.ka)
    }
    Eha = function (a, b) {
      return new TypeError(
        'ja`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.Cf = function (a) {
      const b = _.Bf(a)
      b === null && Dha(a)
      return b
    }
    _.Df = function (a, b) {
      let c
      return (c = _.Bf(a)) != null ? c : b
    }
    _.Bf = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Eha(a, 'string')
    }
    _.Fha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Eha(a, 'boolean')
    }
    _.Ef = function (a, b) {
      let c
      return (c = _.Fha(a)) != null ? c : b
    }
    _.Ff = function (a, b) {
      let c
      return (c = Gha(a)) != null ? c : b
    }
    Gha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Eha(a, 'number')
    }
    _.Iha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Hha(a, b)
    }
    _.Hha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.sd(c + e + ']', d))
    }
    _.sd = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.Cf(this) : _.Df(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Gha(this)
          b === null && Dha(this)
        } else b = _.Ff(this, a)
        return b
      }
      toString() {
        return _.Cf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Ff(this, b) : _.Df(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Iha(this)
          b === null && Dha(this)
          return b
        }
        b = _.Iha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Dha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.sd(c + d, b[d])
          return a
        }
        throw Eha(this, 'object')
      }
    }
    var Yca
    Yca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Jha = /#|$/
    var Kha,
      gda,
      Gf,
      Nha,
      Qha,
      Oha,
      Pha,
      Rha,
      Sha,
      Tha,
      Uha,
      oda,
      Vha,
      Lha,
      Mha,
      Wha,
      Xha
    _.zd = function (a, b = !0) {
      const c = Kha(a), d = new Lha(), e = _.ud(c)[5]
      _.$b(Mha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && Gf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Nha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.wd(6, c)) && _.ada(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Kha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    gda = function (a) {
      a = Kha(a)
      a = _.vd(_.wd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Gf = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Nha = function (a, b) {
      a.ka = b
    }
    Qha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Oha(a)
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
          'd' in a.ha || Gf(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Hf(a, 'br') != '1' && _.Hf(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Hf(a, 'rb') == '1' && c('rb'),
          _.Hf(a, 'zs') !== '0' && c('zs'),
          Pha(a) !== '' && c('wt'),
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
    _.Hf = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Oha = function (a) {
      a = _.Hf(a, 'md')
      return !!a && a !== '0'
    }
    Pha = function (a) {
      switch (_.Hf(a, 'wt')) {
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
    Rha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Gf(a, 'exm', b.join(',')))
        : Gf(a, 'exm', null)
    }
    Sha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Gf(a, 'excm', b.join(',')))
        : Gf(a, 'excm', null)
    }
    Tha = function (a) {
      return (a = _.Hf(a, 'm')) ? a.split(',') : []
    }
    Uha = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      Gf(a, 'ee', c.join(';'))
    }
    oda = function (a) {
      var b = _.Hf(a, 'ee')
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
    Vha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Lha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Qha(this)
        const b = _.dda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Lha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Mha = {
      IHd: 'k',
      dDd: 'ck',
      vGd: 'm',
      IDd: 'exm',
      GDd: 'excm',
      VBd: 'am',
      bCd: 'amc',
      mGd: 'mm',
      FHd: 'rt',
      LFd: 'd',
      HDd: 'ed',
      kId: 'sv',
      hDd: 'deob',
      xCd: 'cb',
      FCd: 'ccb',
      yCd: 'cbi',
      bId: 'rs',
      PHd: 'sdch',
      SFd: 'im',
      iDd: 'dg',
      CDd: 'br',
      BDd: 'br-d',
      DDd: 'rb',
      RJd: 'zs',
      JJd: 'wt',
      NDd: 'ee',
      jId: 'sm',
      METADATA: 'md',
      vFd: 'gssmodulesetproto',
      vJd: 'ujg',
      uJd: 'sp',
      ZHd: 'slk',
      mDd: 'dti',
      VFd: 'ic',
    }
    Wha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    Xha = RegExp('^[a-zA-Z0-9-_*]+$')
    var kda = null, jda = new Map()
    var mda = !1, nda = !1
    var Yha = (a) => {
        a = a.clone()
        Vha(a)
        Gf(a, 'dg', null)
        Gf(a, 'd', '0')
        Rha(a, null)
        Sha(a, null)
        return a
      },
      Zha = !0,
      $ha = (a, b, { cssRowKey: c, A8: d, Q0: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!Xha.test(g)) throw Error('ka`' + g) }
        Gf(a, 'm', b.join(','))
        e && Uha(a, e)
        c && (Gf(a, 'ck', c), d ? Gf(a, 'rs', d) : Zha && (Zha = !1))
        if (f) {
          if (f != null && !Wha.test(f)) throw Error('la`' + f)
          Gf(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.xd(document.location.href) + a)
        return _.yc(a)
      },
      aia = (
        a,
        b,
        { ztb: c = [], cssRowKey: d, A8: e, Q0: f, callback: g } = {},
      ) => {
        a = Yha(a)
        Sha(a, c)
        return $ha(a, b, { cssRowKey: d, A8: e, Q0: f, callback: g })
      },
      bia = (
        a,
        b,
        { Atb: c = [], ztb: d = [], cssRowKey: e, A8: f, Q0: g, callback: h } =
          {},
      ) => {
        a = Yha(a)
        Gf(a, 'd', '1')
        Rha(a, c)
        Sha(a, d)
        return $ha(a, b, { cssRowKey: e, A8: f, Q0: g, callback: h })
      }
    _.cia = function (a) {
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
    _.eia = function () {}
    _.Ud(_.eia, _.qda)
    _.eia.prototype.JV = function () {
      return new XMLHttpRequest()
    }
    _.dia = new _.eia()
    var gia = function (a) {
        return fia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      fia = function (a) {
        const b = {}, c = b.mfa ? b.mfa.JV() : _.dia.JV()
        return (new _.Ke(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new If('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.fa.clearTimeout(f)
              var g
              !(g = _.cia(c.status)) && (g = c.status === 0) &&
                (g = _.Zca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new hia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new If('Network error', a, c))
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
          b.Ex > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new iia(a, c))
          }, b.Ex))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new If('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Me &&
            c.abort()
          throw d
        })
      },
      If = function (a, b, c) {
        _.da.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Ud(If, _.da)
    If.prototype.name = 'XhrError'
    var hia = function (a, b, c) {
      If.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Ud(hia, If)
    hia.prototype.name = 'XhrHttpError'
    var iia = function (a, b) {
      If.call(this, 'Request timed out', a, b)
    }
    _.Ud(iia, If)
    iia.prototype.name = 'XhrTimeoutError'
    var lia, nia, oia, pia, mia, uia, via, ria, qia, sia, tia
    _.jia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((z) => !_.kc().Eu(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.kc().Eu(v)
        v.isLoaded() ? t() : (v.oa.push(new Pd.n7a(t, void 0)), yha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.kia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.na[f] || (a.na[f] = !0, a.Ea.push(f), c = !0, d.push(f))
      }
      c && (a.Sa = !1)
    }
    lia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            gda(b) && !_.zd(b).ka.endsWith('_/js/')
        ) {
          b = Tha(_.zd(b))
          for (const c of b) a.Pa.includes(c) || a.Pa.push(c)
        }
      }
    }
    nia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      mia(a, b, (g, h, t = h) => {
        a.Za && f ? a.mb(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    oia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    pia = function (a, b, c, { Q0: d, onError: e, Gna: f, X3c: g } = {}) {
      a.Da = c
      if (!b) throw Error('pa')
      if (a.ob) {
        for (const h of document.getElementsByTagName('style')) lia(a, h)
        for (const h of document.getElementsByTagName('link')) lia(a, h)
      }
      nia(a, oia(a, b), d, e, f, g)
    }
    mia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          mia(a, b, c, d)
        }),
          !0
      }
      if (!a.qa) {
        const f = []
        var e = Object.assign({}, a.na)
        qia(
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
          h = ria(a, g, d),
          t = _.zc(h).toString()
        for (; t.length > a.xIa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.xIa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = ria(a, g, d),
              t = _.zc(h).toString()
          } else {return a.qa
              ? (a.qa = !1,
                a.ma = sia(a).then((v) => {
                  tia(a, v, d)
                }),
                mia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.qa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    uia = function (a) {
      a.Sa || (a.Sa = !0, a.Ea.sort())
      return a.Ea
    }
    via = function (a) {
      a = a.Pa
      a.sort()
      return a
    }
    ria = function (a, b, c) {
      return a.qa
        ? bia(a.oa, b, {
          cssRowKey: a.Ya,
          A8: a.Wa,
          Q0: c,
          Atb: uia(a),
          ztb: via(a),
        })
        : aia(a.oa, b, { cssRowKey: a.Ya, A8: a.Wa, Atb: uia(a), ztb: via(a) })
    }
    _.Jf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.na[e] && (delete a.na[e], _.Da(a.Ea, e), c.push(e))
      }
    }
    _.wia = function (a, b, c, d, e, f, g = d) {
      a.Ba = c
      a.Fa.insertBefore(c, a.Fa.firstChild)
      _.jia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.Ba == c && (a.Ba = null)
        _.Jf(a, h)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    qia = function (a, b, c, d, e, f = {}) {
      const g = _.kc()
      for (let h of b) {
        b = g.Eu(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        qia(a, t, c, d, e, f)
        c(b)
      }
    }
    sia = function (a) {
      a = a.oa.clone()
      Vha(a)
      Gf(a, 'dg', null)
      Gf(a, 'md', '1')
      return gia(a.toString())
    }
    tia = function (a, b, c) {
      _.kc().CFa((b || {}).moduleGraph)
      qia(a, uia(a), (d) => {
        _.kia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.Cd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.lb = a
        this.oa = _.zd(_.zc(a).toString(), !0)
        this.Ya = b
        this.Wa = c
        this.qa = d
        this.na = {}
        this.Da = {}
        this.Ea = []
        this.Sa = !0
        this.Pa = (a = _.Hf(this.oa, 'excm')) ? a.split(',') : []
        this.ob = e
        this.yIa = !1
        this.fwa = 'anonymous'
        this.xIa = 4043
        this.Fa = document.head || document.documentElement
        this.ma = this.Ba = null
        this.hb = !0
        _.pda()
        this.logger = null
        _.kia(this, Tha(this.oa))
        this.fetchPriority = void 0
        this.Za = !1
        this.Oa()
      }
      mb() {
        _.Hd(function* () {
          throw Error('qa')
        })
      }
      Oa() {}
      load(a, b, c, d, e = b) {
        _.zc(a)
        var f = this.yIa, g = this.fwa, h = this.fetchPriority
        const t = _.pf('SCRIPT')
        _.Zc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.kia(this, b)
        _.wia(this, a, t, b, c, d, e)
      }
    }
    var rda = new Uint8Array(123)
    var xia = []
    var yia = function (a) {
        switch (a.type) {
          case Kf.Type.RJb:
            return 'Unauthorized'
          case Kf.Type.S4a:
            return 'Consecutive load failures'
          case Kf.Type.TIMEOUT:
            return 'Timed out'
          case Kf.Type.GHb:
            return 'Out of date module id'
          case Kf.Type.K5a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Kf = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.Atb = c
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
    Pd.NA = Kf
    Pd.NA.Type = { RJb: 0, S4a: 1, TIMEOUT: 2, GHb: 3, K5a: 4 }
    var Lf = function () {
      Uca.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Ea = []
      this.ma = {}
      this.mb = {}
      this.Aa = this.Wa = new Pd.m7a([], '')
      this.ob = null
      this.Pa = new _.sc()
      this.Ij = null
      this.ub =
        this.Eb =
        this.yb =
        this.lb =
        this.hb =
          !1
    }
    _.Ud(Lf, Uca)
    var zia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Ud(zia, _.da)
    Lf.prototype.sec = function (a) {
      this.hb = a
    }
    Lf.prototype.u0a = function (a) {
      this.lb = a
    }
    Lf.prototype.CFa = function (a, b) {
      if (!(this instanceof Lf)) this.CFa(a, b)
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
            Aia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) Bia(this, a)
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
            Aia(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Ia(this.na, b), this.ob = _.raa(b))
          : this.Pa.ka || this.Pa.callback()
        Object.freeze(this.Ya)
        Cia(this)
      }
    }
    var Bia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        rda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      Ad(b)
      const d = Ad(b)
      var e = Ad(b) + 1
      const f = Array(d), g = Array(d), h = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, A = b.buf.indexOf('|', b.pos)
      b.pos = A + 1
      for (A = 0; A < d; A++) {
        var I = Ad(b), N = I & 2, S = I & 1
        I >>>= 2
        S
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (S = z, z += I, I = c.substring(S, z))
        f[A] = I
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
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Ad(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        z = t === 0 ? xia : Array(t)
        g[c] = z
        A = v
        for (N = 0; N < t; N++) A -= Ad(b), z[N] = e[A]
        e[v] === f[c] && v++
      }
      const { ids: Y, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < Y.length; b++) Aia(a, Y[b], ea[b])
      a.Ya = Y
    }
    _.k = Lf.prototype
    _.k.Eu = function (a) {
      return this.ka[a]
    }
    _.k.fua = function (a, b) {
      const c = this.Eu(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.zEa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.JFa = function (a) {
      Lf.Yb.JFa.call(this, a)
      Cia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.u5b = function () {
      return this.Ea.length > 0
    }
    var Mf = function (a) {
        var b = a.yb
        const c = a.isActive()
        c != b && (Dia(a, c ? Af.Nra : Af.IDLE), a.yb = c)
        b = a.u5b()
        b != a.Eb && (Dia(a, b ? Af.nNc : Af.oNc), a.Eb = b)
      },
      Aia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Pd.m7a(c, b)
      },
      Fia = function (a, b, c) {
        const d = []
        _.Ja(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Eu(g)
          if (!h) throw Error('ra`' + g)
          const t = new _.sc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.qa)
            : (Eia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.lb
            ? _.Re(a.Pa, (0, _.qc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Mf(a)))
        return e
      },
      Eia = function (a, b, c, d, e) {
        xha(c, e.callback, e)
        yha(c, function (f) {
          e.ha(new zia(b, f))
        })
        a.Oa(b) ? d && (Gia(a, b), Mf(a)) : d && Gia(a, b)
      }
    Lf.prototype.Sa = function (a, b = 0, c) {
      const d = Hia(this, a)
      this.lb ? _.Ia(this.na, d) : this.na = d
      this.Ba = this.hb ? a : _.Ea(d)
      Mf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.oa
        if (!a) throw Error('sa')
        if (Object.keys(this.ma).length > 0 && !a.hb) throw Error('ta')
        pia(a, _.Ea(d), this.ka, {
          Q0: this.ma,
          onError: (e, f, g) =>
            Iia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          oDa: (0, _.qc)(this.Nb, this),
          X3c: !!c,
        })
      }
    }
    var Hia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('ua`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Jia(a, b[d]))
        _.Ja(c)
        return !a.hb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Jia = function (a, b) {
        const c = _.Mba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Eu(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Eu(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ja(d)
        return d
      },
      Cia = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.qc)(a.lZb, a))
          b && b.length &&
            Kia(a, new Pd.NA(Pd.NA.Type.K5a, void 0, void 0, void 0, b[0]))
          Mf(a)
        }
      }
    Lf.prototype.Fa = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Eu(c)
            d && !d.isLoaded() && (this.zEa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.qc)(this.lZb, this))) && b.length &&
            Kia(this, new Pd.NA(Pd.NA.Type.K5a, void 0, void 0, void 0, b[0])),
            _.Da(this.Ea, a),
            _.Da(this.na, a),
            this.na.length === 0 && Lia(this),
            this.ob && a == this.ob && (this.Pa.ka || this.Pa.callback()),
            Mf(this),
            this.Aa = null)
      }
    }
    Lf.prototype.Oa = function (a) {
      if (_.za(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.za(this.ha[b], a)) return !0
      }
      return !1
    }
    Lf.prototype.load = function (a, b) {
      return Fia(this, [a], b)[a]
    }
    Lf.prototype.Da = function (a) {
      return Fia(this, a)
    }
    var Gia = function (a, b) {
      _.za(a.Ea, b) || a.Ea.push(b)
    }
    Lf.prototype.qb = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Fa(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Mia(this, this.ka[a].ha || [], (b) => {
        b.ka = new wha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.Eu(a)
    }
    var Iia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ea(c)
      a.Ba = b
      c.forEach(_.Sd(_.Da, a.Za), a)
      if (d == 401) Kia(a, new Pd.NA(Pd.NA.Type.RJb, d)), a.ha.length = 0
      else if (d == 410) Nia(a, new Pd.NA(Pd.NA.Type.GHb, d)), Lia(a)
      else if (h >= 3) Nia(a, new Pd.NA(Pd.NA.Type.S4a, d, f, e)), Lia(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.fa.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    Lf.prototype.Nb = function () {
      Nia(this, new Pd.NA(Pd.NA.Type.TIMEOUT))
      Lia(this)
    }
    var Nia = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Kia(a, b)
      },
      Kia = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Jia(this, g)
            return _.$d(c, function (t) {
              return _.za(h, t)
            })
          }, a)
          _.Ia(d, f)
        }
        for (e = 0; e < c.length; e++) _.Aa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Da(a.ha[f], d[e])
          _.Da(a.Ea, d[e])
        }
        if (e = a.mb[Af.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(Af.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Mf(a)
      },
      Lia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Eu(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Mf(a)
      },
      Dia = function (a, b) {
        a = a.mb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Mia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Eu(f),
            !e[f] && d(b) && (e[f] = !0, Mia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Lf.prototype.dispose = function () {
      _.Wb(_.ac(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Ea = []
      this.ha = []
      this.mb = {}
      this.ub = !0
    }
    Lf.prototype.isDisposed = function () {
      return this.ub
    }
    _.jc = function () {
      return new Lf()
    }
    var Oia, Pia, Sia, Tia, Uia, Via, Qia, Ria
    Oia = [5E3, 2E4]
    Pia = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Fa()
    }
    Sia = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Eu(c).isLoaded())
      b.length > 0 && (Qia(a, ...b), a.na.push(b), Ria(a))
    }
    Tia = function (a, b) {
      return new _.Ke((c, d) => {
        const e = a.Eu(b)
        e.isLoaded() ? c(a.qa) : (xha(e, () => {
          c(a.qa)
        }),
          yha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Pd.NA && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Uia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Eu(f),
          !e[f] && d(b) && (e[f] = !0, Uia(a, b.ha || [], c, d, e), c(b))
      }
    }
    Via = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Qia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Ria = function (a) {
      for (; a.Aa < a.Ea && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Eu(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            Ria(a)
            c = () => {}
          }
          _.Ofa(b.map((f) => Tia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.oa.hb) throw Error('ta')
            pia(a.oa, b, a.ma, {
              Q0: a.ha,
              onError: (f, g) => {
                const h = Oia[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (Via(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Eu(t)
                      if (!t.isLoaded()) {
                        t.onError(new Pd.NA(Pd.NA.Type.S4a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.Wia = class extends Uca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Ea = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Ij = null
        this.ka = this.Eu('{base}')
      }
      CFa() {
        Pia(this)
      }
      JFa(a) {
        super.JFa(a)
        Pia(this)
      }
      Eu(a) {
        let b = this.ma[a]
        b || (b = new Pd.m7a([], a), this.ma[a] = b)
        return b
      }
      fua(a, b) {
        this.Eu(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      zEa(a, b) {
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
        Sia(this, [a])
        return Tia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Tia(this, d), c.push(d))
        })
        Sia(this, c)
        return b
      }
      qb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Fa()
        let c, d
        Uia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new wha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Eu(a)
      }
      Fa() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Eu(c).isLoaded() || (this.zEa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.qa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          Via(this, a)
        }
      }
      u0a(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var Xia = new _.Wia()
    Xia.u0a(!0)
    Xia.JFa(new _.Ye())
    _.Pba(Xia)
    ;(new _.Cha(Xia)).init()
    _.tda()
    var Yia = _.Ef(_.td('hxvedd'), !1), Zia = _.Ef(_.td('dLc0B'), !1)
    if (_.Ef(_.td('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (Zia ? 2 : Yia ? 1 : 0) {
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
      _.ic.CFa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
