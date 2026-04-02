// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.mefVdATwPTQ.2018.O/am=IxwExEDg-o0gXwAQAHgDGA/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk32tlND6Nd2yD9J1cWmGjuBqUPm-w/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.gqyTk43N3o0.libheifWasm.O%3A%3BBardChatUi.MCwOlqDzAks.loadC2PAExtractorWasm.O%3A%3BBardChatUi.EnCeXRWxvN8.loadWasmSipCoca.O%3A%3B
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
      Maa,
      Qaa,
      Taa,
      Yaa,
      gba,
      hba,
      iba,
      lba,
      oba,
      pba,
      uba,
      zba,
      xba,
      yba,
      Zba,
      aca,
      cca,
      eca,
      Hc,
      lca,
      nca,
      rca,
      Lca,
      Mca,
      Nca,
      nd,
      Oca,
      Wca,
      Xca,
      td,
      Yca,
      Zca,
      jda,
      lda,
      mda,
      pda,
      wda,
      Dd,
      aaa,
      Hd,
      yda,
      zda,
      Ada,
      Id,
      Bda,
      Dda,
      Jd,
      Cda,
      Eda,
      Fda,
      Gda,
      Ida,
      Hda,
      Jda
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
    _.ka = function (a, b) {
      return a.indexOf(b) != -1
    }
    _.caa = function (a) {
      return _.ka(_.ma().toLowerCase(), a.toLowerCase())
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
        if (c && _.ka(c, a)) return !0
      }
      return !1
    }
    _.oa = function (a) {
      return _.ka(_.ma(), a)
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
    _.ta = function () {
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
    _.Ha = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c]
        if (_.Fa(d)) {
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
    _.Ka = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    vaa = function () {
      return _.maa() || _.oa('iPod')
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
    _.Ma = function (a) {
      return a != null && a instanceof Uint8Array
    }
    _.Eaa = function (a, b) {
      const c = a.length
      if (c !== b.length) return !1
      for (let d = 0; d < c; d++) if (a[d] !== b[d]) return !1
      return !0
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
    _.Faa = function (a) {
      if (4 & a) return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }
    _.Sa = function (a) {
      _.Ra(a, 34)
      return a
    }
    _.Gaa = function (a) {
      _.Ra(a, 8192)
      return a
    }
    _.Haa = function (a) {
      _.Ra(a, 32)
      return a
    }
    _.Va = function (a) {
      return a != null && a[_.Ta] === _.Ua
    }
    _.Za = function (a, b) {
      return b === void 0
        ? a.Nb !== _.Ya && !!(2 & (a.Og[_.Qa] | 0))
        : !!(2 & b) && a.Nb !== _.Ya
    }
    _.Iaa = function (a, b) {
      a.Nb = b ? _.Ya : void 0
    }
    _.$a = function (a, b) {
      if (typeof b !== 'number' || b < 0 || b >= a.length) throw Error()
    }
    _.Jaa = function (a, b) {
      if (typeof b !== 'number' || b < 0 || b > a.length) throw Error()
    }
    _.Kaa = function (a) {
      return a
    }
    _.ab = function (a) {
      a.kHd = !0
      return a
    }
    _.gb = function (a) {
      var b = a
      if ((0, _.db)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.eb)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.fb
        ? BigInt(a)
        : a = (0, _.Laa)(a)
          ? a ? '1' : '0'
          : (0, _.db)(a)
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
      _.hb = b
      _.ib = (a - b) / 4294967296 >>> 0
    }
    _.jb = function (a) {
      if (a < 0) {
        _.Naa(-a)
        const [b, c] = _.Oaa(_.hb, _.ib)
        _.hb = b >>> 0
        _.ib = c >>> 0
      } else _.Naa(a)
    }
    _.Paa = function (a, b) {
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
            c = b + Qaa(c) + Qaa(a))}
      return c
    }
    Qaa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Raa = function (a) {
      if (a.length < 16) _.jb(Number(a))
      else if (_.Oa()) {
        a = BigInt(a),
          _.hb = Number(a & BigInt(4294967295)) >>> 0,
          _.ib = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.ib = _.hb = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.ib *= 1E6
          _.hb = _.hb * 1E6 + f
          _.hb >= 4294967296 &&
            (_.ib += Math.trunc(_.hb / 4294967296), _.ib >>>= 0, _.hb >>>= 0)
        }
        if (b) {
          const [d, e] = _.Oaa(_.hb, _.ib)
          _.hb = d
          _.ib = e
        }
      }
    }
    _.Oaa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Saa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    Taa = function () {
      const a = Error()
      _.Saa(a, 'severity', 'incident')
      _.ha(a)
    }
    _.lb = function (a) {
      a = Error(a)
      _.Saa(a, 'severity', 'warning')
      return a
    }
    _.mb = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Uaa) != null ? c : Uaa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, Taa())
      }
    }
    _.nb = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Vaa = function (a) {
      if (typeof a !== 'boolean') throw Error('B`' + _.ob(a) + '`' + a)
      return a
    }
    _.Waa = function (a) {
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
          return Xaa.test(a)
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
    Yaa = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Raa(a)
      return _.kb(_.hb, _.ib)
    }
    _.Zaa = function (a) {
      a = (0, _.tb)(a)
      a >= 0 && (0, _.ub)(a) || (_.jb(a), a = _.Paa(_.hb, _.ib))
      return a
    }
    _.$aa = function (a) {
      a = (0, _.tb)(a)
      a >= 0 && (0, _.ub)(a) ? a = String(a) : (_.jb(a), a = _.kb(_.hb, _.ib))
      return a
    }
    _.aba = function (a) {
      return (0, _.ub)(a) ? _.gb(_.Zaa(a)) : _.gb(_.$aa(a))
    }
    _.bba = function (a) {
      var b = (0, _.tb)(Number(a))
      if ((0, _.ub)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return Yaa(a)
    }
    _.cba = function (a) {
      var b = (0, _.tb)(Number(a))
      if ((0, _.ub)(b) && b >= 0) return _.gb(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Oa() ? _.gb((0, _.vb)(64, BigInt(a))) : _.gb(Yaa(a))
    }
    _.dba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.gb((0, _.vb)(64, a))
      if (_.qb(a)) return b === 'string' ? _.cba(a) : _.aba(a)
    }
    _.wb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.xb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.fba = function (a, b, c, d) {
      if (_.Va(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.yb] || (b[_.yb] = _.eba(b)) : new b()
          : void 0
      }
      c = a[_.Qa] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Qa] = d)
      return new b(a)
    }
    _.eba = function (a) {
      a = new a()
      _.Sa(a.Og)
      return a
    }
    gba = function (a) {
      return a
    }
    hba = function (a, b, c, d, e, f) {
      a = _.fba(a, d, c, f)
      e && (a = _.zb(a))
      return a
    }
    iba = function (a) {
      return [a, this.get(a)]
    }
    _.jba = function (a) {
      const b = _.Bb(_.Cb)
      return b ? a[b] : void 0
    }
    lba = function (a, b) {
      b < 100 || _.mb(kba, 1)
    }
    _.Eb = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.Bb(_.Cb), g
      !e && f && (g = a[f]) && g.APa(lba)
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
        g = ((I = mba) != null ? I : _.Kaa)(g - A, A, a, t, void 0) + A
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let R = a[I]
        if (R != null && (R = c(R, d)) != null) {
          if (z && I >= g) {
            const ba = I - A
            var L = void 0
            ;((L = b) != null ? L : b = {})[ba] = R
          } else f[I] = R
        }
      }
      if (t) {
        for (let R in t) {
          L = t[R]
          if (L == null || (L = c(L, d)) == null) continue
          h = +R
          let ba
          if (z && !Number.isNaN(h) && (ba = h + A) < g) f[ba] = L
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[R] = L
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.Bb(_.Cb) && (a = _.jba(a)) && 'function' == typeof _.nba &&
        a instanceof _.nba && (f[_.Cb] = a.ha())
      return f
    }
    oba = function (a) {
      a[0] = _.Fb(a[0])
      a[1] = _.Fb(a[1])
      return a
    }
    _.Fb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.Gb)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Qa] | 0
            return a.length === 0 && b & 1 ? void 0 : _.Eb(a, b, _.Fb)
          }
          if (_.Va(a)) return pba(a)
          if ('function' == typeof _.Hb && a instanceof _.Hb) return a.XT()
          if (a instanceof _.Ib) {
            return a = a.size !== 0 ? a.A0a(oba) : void 0, a
          }
          return
      }
      return a
    }
    _.sba = function (a, b) {
      if (b) {
        mba = b == null || b === _.Kaa || b[qba] !== rba ? _.Kaa : b
        try {
          return pba(a)
        } finally {
          mba = void 0
        }
      }
      return pba(a)
    }
    pba = function (a) {
      a = a.Og
      return _.Eb(a, a[_.Qa] | 0, _.Fb)
    }
    _.vba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('D')
        e = a[_.Qa] | 0
        if (tba && 1 & e) throw Error('E')
        2048 & e && !(2 & e) && uba()
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
    uba = function () {
      if (tba) throw Error('H')
      _.mb(wba, 5)
    }
    zba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Qa] | 0
        return a.length === 0 && c & 1 ? void 0 : xba(a, c, b)
      }
      if (_.Va(a)) return yba(a)
      if (a instanceof _.Ib) {
        b = a.jZ
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.A0a())
        if (a.R4) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Va(e)
              ? e = yba(e)
              : Array.isArray(e)
              ? e = xba(e, e[_.Qa] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if ('function' == typeof _.Hb && a instanceof _.Hb) return a
    }
    xba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.Jb(a, b, !1, c && !(b & 16))
        : (_.Ra(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.Aba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Iaa(a, !0)
      a.CVa = _.Ya
      return a
    }
    yba = function (a) {
      const b = a.Og, c = b[_.Qa] | 0
      return _.Za(a, c) ? a : _.Bba(a, b, c) ? _.Aba(a, b) : _.Jb(b, c)
    }
    _.Jb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Eb(a, b, zba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.zb = function (a) {
      const b = a.Og, c = b[_.Qa] | 0
      return _.Za(a, c)
        ? _.Bba(a, b, c) ? _.Aba(a, b, !0) : new a.constructor(_.Jb(b, c, !1))
        : a
    }
    _.Kb = function (a) {
      if (a.Nb !== _.Ya) return !1
      var b = a.Og
      b = _.Jb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Og = b
      _.Iaa(a, !1)
      a.CVa = void 0
      return !0
    }
    _.Lb = function (a) {
      if (!_.Kb(a) && _.Za(a, a.Og[_.Qa] | 0)) throw Error()
    }
    _.Nb = function (a, b) {
      b === void 0 && (b = a[_.Qa] | 0)
      b & 32 && !(b & 4096) && (a[_.Qa] = b | 4096)
    }
    _.Bba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Qa] = c | 2, _.Iaa(a, !0), !0)
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
        g = ((h = b) != null ? h : b = a[_.Qa] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.Rb = function (a, b, c, d, e, f, g) {
      let h = a.Og, t = h[_.Qa] | 0
      d = _.Za(a, t) ? 1 : d
      e = !!e || d === 3
      d === 2 && _.Kb(a) && (h = a.Og, t = h[_.Qa] | 0)
      let v = _.Cba(h, b, g), z = v === _.Pb ? 7 : v[_.Qa] | 0, A = _.Dba(z, t)
      var I = A
      4 & I
        ? f == null
          ? a = !1
          : (!e && f === 0 && (512 & I || 1024 & I) &&
            (a.constructor[Eba] = (a.constructor[Eba] | 0) + 1) < 5 && Taa(),
            a = f === 0 ? !1 : !(f & I))
        : a = !0
      if (a) {
        4 & A && (v = [...v], z = 0, A = _.Qb(A, t), t = _.Ob(h, t, b, v, g))
        let L = I = 0
        for (; I < v.length; I++) {
          const R = c(v[I])
          R != null && (v[L++] = R)
        }
        L < I && (v.length = L)
        c = (A | 4) & -513
        A = c &= -1025
        f && (A |= f)
        A &= -4097
      }
      A !== z && (v[_.Qa] = A, 2 & A && Object.freeze(v))
      return v = _.Fba(v, A, h, t, b, g, d, a, e)
    }
    _.Fba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Sb(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Qa] = b),
            Object.freeze(a))
        : (g === 2 && _.Sb(b) &&
          (a = [...a], v = 0, b = _.Qb(b, d), d = _.Ob(c, d, e, a, f)),
          _.Sb(b) || (t || (b |= 16), b !== v && (a[_.Qa] = b)))
      2 & b || !(4096 & b || 16 & b) || _.Nb(c, d)
      return a
    }
    _.Cba = function (a, b, c) {
      a = _.Tb(a, b, c)
      return Array.isArray(a) ? a : _.Pb
    }
    _.Dba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Sb = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Gba = function (a) {
      a = [...a]
      for (let b = 0; b < a.length; b++) {
        const c = a[b] = [...a[b]]
        Array.isArray(c[1]) && (c[1] = _.Sa(c[1]))
      }
      return _.Gaa(a)
    }
    _.Ub = function (a, b, c, d, e) {
      _.Lb(a)
      const f = a.Og
      _.Ob(
        f,
        f[_.Qa] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Iba = function (a) {
      let b
      return (b = a[Hba]) != null ? b : a[Hba] = new Map()
    }
    _.Jba = function (a, b, c, d, e) {
      let f = a.get(d)
      if (f != null) return f
      f = 0
      for (let g = 0; g < d.length; g++) {
        const h = d[g]
        _.Tb(b, h, e) != null &&
          (f !== 0 && (c = _.Ob(b, c, f, void 0, e)), f = h)
      }
      a.set(d, f)
      return f
    }
    _.Qb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Vb = function (a, b, c, d, e, f, g, h, t, v) {
      _.Lb(a)
      b = _.Rb(a, b, f, 2, !0, void 0, g)
      let z
      f = (z = _.Faa(b === _.Pb ? 7 : b[_.Qa] | 0)) != null ? z : 1024
      if (t) {
        if (Array.isArray(d)) {
          for (e = d.length, h = 0; h < e; h++) b.push(c(d[h], f))
        } else for (const A of d) b.push(c(A, f))
      } else {h && v
          ? (e != null || (e = b.length - 1), _.$a(b, e), b.splice(e, h))
          : (h && _.Jaa(b, e),
            e != void 0 ? b.splice(e, h, c(d, f)) : b.push(c(d, f)))}
      return a
    }
    _.Kba = function (a, b) {
      return _.Wb(b, `[${a.substring(4)}`)
    }
    _.Xb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.$b = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Fa(d) ? _.$b.apply(null, d) : _.Xb(d)
      }
    }
    _.ac = function () {
      this.OP = this.OP
      this.maa = this.maa
    }
    _.dc = function (a, b) {
      _.cc.call(this, a ? a.type : '')
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
      this.Uh = null
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
      this.removed = this.bga = !1
    }
    _.ec = function (a, b, c) {
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
    _.fc = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.hc = function (a) {
      for (const b in a) return !1
      return !0
    }
    _.ic = function (a, b) {
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
    _.kc = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Sba = function (a) {
      if (_.lc) a(_.lc)
      else {
        let b
        ;((b = Rba) != null ? b : Rba = []).push(a)
      }
    }
    _.nc = function () {
      !_.lc && _.mc && _.Tba(_.mc())
      return _.lc
    }
    _.Tba = function (a) {
      _.lc = a
      let b
      ;(b = Rba) == null || b.forEach(_.Sba)
      Rba = void 0
    }
    _.oc = function (a) {
      _.lc && _.lc.qb(a)
    }
    _.pc = function () {
      _.lc && _.lc.Fa()
    }
    _.qc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Uba] = a
    }
    _.rc = function () {
      _.ac.call(this)
      this.gQ = new _.kc(this)
      this.pMc = this
      this.Eob = null
    }
    _.uc = function (a, b) {
      let c = a
      b && (c = (0, _.tc)(a, b))
      c = _.uc.rjc(c)
      _.uc.SHc
        ? setTimeout(c, 0)
        : (c = _.uc.jfd(c), _.uc.E4b || (_.uc.E4b = _.uc.c_c()), _.uc.E4b(c))
    }
    Zba = function () {
      let a
      for (; a = Vba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ha(b)
        }
        Wba(Xba, a)
      }
      Yba = !1
    }
    _.vc = function (a, b) {
      this.Ba = []
      this.kb = a
      this.Wa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.mb = this.Fa = !1
      this.Da = 0
      this.na = null
      this.wa = 0
    }
    _.wc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.xc = function (a, b) {
      this.width = a
      this.height = b
    }
    aca = function () {
      let a = null
      if (!$ba) return a
      try {
        const b = (c) => c
        a = $ba.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    cca = function () {
      bca === void 0 && (bca = aca())
      return bca
    }
    _.Ac = function (a) {
      const b = cca()
      a = b ? b.createScriptURL(a) : a
      return new _.yc(_.zc, a)
    }
    _.dca = function (a) {
      return a instanceof _.yc
    }
    _.Bc = function (a) {
      if (_.dca(a)) return a.ha
      throw Error('Z')
    }
    eca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.Cc = function (a) {
      return new _.fca(_.zc, a)
    }
    _.Dc = function (a) {
      return a instanceof _.fca
    }
    _.Ec = function (a) {
      if (_.Dc(a)) return a.ha
      throw Error('Z')
    }
    Hc = function (a) {
      return new Fc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Ic = function (a, b = gca) {
      if (_.Dc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Fc && d.ym(a)) return _.Cc(a)
      }
    }
    _.Kc = function (a, b = gca) {
      b = _.Ic(a, b)
      b === void 0 && _.hca(a.toString())
      return b || _.Jc
    }
    _.Lc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.Cc(URL.createObjectURL(a))
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
      return _.Cc(URL.createObjectURL(a))
    }
    _.jca = function (a) {
      if (!ica) {
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
    lca = function (a) {
      const b = !kca.test(a)
      b && _.hca(a)
      if (!b) return a
    }
    _.Mc = function (a) {
      return a instanceof _.fca ? _.Ec(a) : lca(a)
    }
    _.Nc = function (a, b) {
      b = _.Mc(b)
      b !== void 0 && (a.href = b)
    }
    _.Pc = function (a) {
      const b = cca()
      a = b ? b.createHTML(a) : a
      return new _.Oc(_.zc, a)
    }
    _.mca = function (a) {
      return a instanceof _.Oc
    }
    _.Qc = function (a) {
      if (_.mca(a)) return a.ha
      throw Error('Z')
    }
    _.Rc = function (a, b) {
      a.src = _.Bc(b).toString()
    }
    _.Sc = function (a, b) {
      a.srcdoc = _.Qc(b)
    }
    _.Tc = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Vc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.yc) throw new _.Uc('TrustedResourceUrl', 0)
          _.Tc(a, [])
          b = _.Mc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.yc)) throw new _.Uc(typeof c, 1)
          _.Tc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Rc(a, c)
          break
        case 2:
          if (c instanceof _.yc) throw new _.Uc('TrustedResourceUrl', 2)
          _.Tc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.Mc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.nb(b, void 0)
      }
    }
    _.Wc = function (a, b, c, d) {
      b = _.Mc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Xc = function (a) {
      return nca('script', a)
    }
    _.oca = function (a) {
      return nca('style', a)
    }
    nca = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Yc = function (a) {
      const b = cca()
      a = b ? b.createScript(a) : a
      return new _.pca(_.zc, a)
    }
    _.qca = function (a) {
      return a instanceof _.pca
    }
    _.ad = function (a) {
      if (_.qca(a)) return a.ha
      throw Error('Z')
    }
    rca = function (a) {
      const b = _.Xc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.bd = function (a, b, c) {
      a.textContent = _.ad(b)
      ;(c == null ? 0 : c.Nbd) || rca(a)
    }
    _.cd = function (a, b, c) {
      a.src = _.Bc(b)
      ;(c == null ? 0 : c.Nbd) || rca(a)
    }
    _.dd = function (a, b) {
      a.nodeType === 1 && _.sca(a)
      a.innerHTML = _.Qc(b)
    }
    _.sca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('Z')
    }
    _.vca = function (a, b, c) {
      if (_.dca(b)) _.tca(a, b, c)
      else {
        if (uca.indexOf(c) === -1) throw Error('aa`' + c)
        b = _.Mc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.tca = function (a, b, c) {
      a.href = _.Bc(b).toString()
      a.rel = c
    }
    _.wca = function (a) {
      return 'function' == typeof _.ed && a instanceof _.ed
    }
    _.xca = function (a) {
      if (_.wca(a)) return a.ha
      throw Error('Z')
    }
    _.fd = function (a, b, c) {
      return a.parseFromString(_.Qc(b), c)
    }
    _.gd = function (a, b) {
      b = _.Mc(b)
      b !== void 0 && (a.href = b)
    }
    _.yca = function (a, b) {
      return a.createContextualFragment(_.Qc(b))
    }
    _.zca = function (a) {
      return _.Pc(a)
    }
    _.Aca = function (a) {
      return _.Ac(a)
    }
    _.hd = function (a) {
      a = a[0].toLowerCase()
      return new _.Bca(_.zc, a)
    }
    _.kd = function (a, b) {
      if (_.mca(a)) return a
      a = _.jd(String(a))
      if (b == null ? 0 : b.hJd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.RWa) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.iJd) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Pc(a)
    }
    _.jd = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.ld = function (a) {
      return _.Cca('', a)
    }
    _.Cca = function (a, b) {
      a = _.kd(a)
      return _.Pc(b.map((c) => _.Qc(_.kd(c))).join(_.Qc(a).toString()))
    }
    _.Dca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Pc(a)
    }
    _.Gca = function (a) {
      if (!Eca.test(a)) throw Error('Z')
      if (Fca.indexOf(a.toUpperCase()) !== -1) throw Error('Z')
    }
    _.md = function (a, b, c) {
      _.Gca(a)
      let d = `<${a}`
      b && (d += _.Hca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Ica.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.ld(c.map((e) => _.mca(e) ? e : _.kd(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Pc(d)
    }
    _.Hca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Eca.test(d)) throw Error('Z')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('Z')
          Jca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.Dc(e)
              ? e.toString()
              : lca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.kd(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Kca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Lca = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Pc(a)
      return _.yca(c, a)
    }
    Mca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Nca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    nd = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Oca = function (a) {
      return a.parts.map((b) => {
        const c = b.JNa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.pd = function (a) {
      return _.Pca.sanitize(a)
    }
    _.Qca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        l1a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.qd = function (a, ...b) {
      if (b.length === 0) return _.Ac(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.Ac(c)
    }
    _.rd = function (a, b) {
      a = _.Qca(_.Bc(a).toString())
      return _.Rca(a.l1a, a.params, a.fragment, b)
    }
    _.Rca = function (a, b, c, d) {
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
      return _.Ac(a + b + c)
    }
    _.Sca = function (a, b) {
      a = _.Qca(_.Bc(a).toString())
      const c = a.l1a.slice(-1) === '/' ? '' : '/'
      b = a.l1a + c + encodeURIComponent(b)
      return _.Ac(b + a.params + a.fragment)
    }
    _.Tca = function (a) {
      a = _.ad(a).toString()
      return _.Ac(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.Uca = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.Vca = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    Wca = function (a, b) {
      var c = b || _.sd()
      const d = c.Ff()
      b = c.createElement('STYLE')
      const e = _.oca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    Xca = function (a, b) {
      this.ha = a
      this.ka = b
    }
    td = function (a, b) {
      _.ac.call(this)
      this.ha = a
      this.qa = b
      this.oa = []
      this.ma = []
      this.na = []
    }
    Yca = function () {
      this.oa = this.qa = null
    }
    Zca = function (a = window) {
      return a.WIZ_global_data
    }
    _.$ca = function (a, b = window) {
      return (b = Zca(b)) && a in b ? b[a] : null
    }
    _.vd = function (a, b = window) {
      return new _.ud(a, _.$ca(a, b))
    }
    _.ada = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.wd = function (a) {
      return a.match(bda)
    }
    _.xd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.zd = function (a, b) {
      return _.wd(b)[a] || null
    }
    _.cda = function (a) {
      a = _.zd(1, a)
      !a && _.fa.self && _.fa.self.location &&
        (a = _.fa.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.Ad = function (a) {
      a = _.wd(a)
      return _.ada(a[1], a[2], a[3], a[4])
    }
    _.eda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.dda(f) : '')
        }
      }
    }
    _.fda = function (a, b) {
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
    _.gda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.gda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.Bd(b)))
    }
    _.hda = function (a) {
      const b = []
      for (const c in a) _.gda(c, a[c], b)
      return b.join('&')
    }
    _.ida = function (a, b, c, d) {
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
    jda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    lda = function (a = '', b) {
      if (a && b) throw Error('ma')
      var c = ''
      const d = _.fa._F_jsUrl
      ;(a = b || jda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('na`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!kda(c)) throw Error('oa')
      return c
    }
    mda = function () {
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
    pda = function (a) {
      const { promise: b, resolve: c, reject: d } = mda()
      nda.set(a, { promise: b, resolve: c, reject: d })
      oda || (oda = [],
        queueMicrotask(() => {
          const e = [...oda]
          oda = null
          const f = _.nc().Da(e)
          for (const g of e) f[g].then(nda.get(g).resolve, nda.get(g).reject)
        }))
      oda.push(a)
      return b
    }
    _.tda = function () {
      if (qda) return rda
      qda = !0
      let a
      try {
        a = lda(_.fa._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = sda(_.Cd(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Sba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.dsa(e, g)
        }
      })
      return rda = !0
    }
    _.uda = function () {}
    wda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return vda[a]
    }
    Dd = function (a) {
      let b = 0, c = 0, d
      do d = wda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.xda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.d7 || ''
      !c.aFd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('va')
      }
      const f = c.SHd || _.Fd
      a = jda(a)
      b = new f(
        _.Aca(lda('', a), {
          Mkb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.RLd || a && a.hasAttribute('crossorigin')
      a = c.CEd || a && a.getAttribute('crossorigin')
      d && (b.jGa = d)
      a && (b.cua = a)
      c.iGa && (b.iGa = c.iGa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.nc()
      g.oa = b
      g.A$b(!0)
      _.Gd = c.TDd === 'BATCH' ? pda : (h) => Promise.resolve(g.load(h))
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
    Id = Ada(this)
    Bda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Id.BigInt64Array && (Bda.push('BigInt64'), Bda.push('BigUint64'))
    Dda = function (a, b) {
      if (b) {
        for (var c = 0; c < Bda.length; c++) {
          Cda(Bda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Jd = function (a, b) {
      b && Cda(a, b)
    }
    Cda = function (a, b) {
      var c = Id
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
      a.Xb = b.prototype
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
    _.Kd = function (a) {
      return Gda(a())
    }
    Jd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    Jd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (Hd = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(Id.top) || b(Id) || b({})
      return a || {}
    })
    Ida = function () {
      return Hda
    }
    _.Ld = function () {
      return Ida
    }
    Hda = function (a) {
      return a
    }
    Jda = function (a) {
      var b = Hd
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
    Jd('globalThis', function (a) {
      return a || Id
    })
    Jd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    Jd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    Jd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    Jd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    Jd('Object.fromEntries', function (a) {
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
    Jd('String.prototype.replaceAll', function (a) {
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
    Jd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    Jd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    Jd('Array.prototype.flatMap', function (a) {
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
        if (typeof Id.EventTarget === 'function') {
          var a = Id.EventTarget.prototype
        } else {for (
            a = Id;
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
            var A = z.get(this)
            A || (A = {}, z.set(this, A))
            var I = !(typeof h === 'boolean' ? h : h && h.capture) + f
            if (!A[I]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var L = g.handleEvent
                if (typeof L === 'function') return L.apply(g, arguments)
              })
              if (v) {
                h && h.once && (v = function (L) {
                  return function () {
                    if (typeof L !== 'function') throw Error('l`' + L)
                    delete A[I]
                    return L.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  h && Id.AbortSignal && h.signal instanceof
                    Id.AbortSignal
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
      Md = function (a, b) {
        Cda(a, function (c) {
          return c && b(c)
        })
      },
      Nda = !1
    Jd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.Ld = c)
        c = a._JSC
        typeof c === 'function' && (Ida = c)
        return a
      }
      Nda = !0
      Hda = function (e) {
        return e
      }
      var d = Hd
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
      b['\u1d43\u1d9cstart'] = _.Ld = function (e) {
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
        var f = (0, _.Ld)(e)
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
      Md('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      Md('queueMicrotask', b)
      Md('requestAnimationFrame', b)
      Md('requestIdleCallback', b)
      Md('setInterval', b)
      Md('setTimeout', b)
      Md('HTMLCanvasElement.prototype.toBlob', b)
      Md('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      Md('FileSystemEntry.prototype.getParent', a(0, 1))
      Md('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      Md('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      Md('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      Md('XMLHttpRequest.prototype.send', function (d) {
        Mda(function (e) {
          return function () {
            var f = Hd[0]
            try {
              return Hd[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              Hd[0] = f
            }
          }
        })
        return function () {
          c.set(this, Hd[0])
          return d.apply(this, arguments)
        }
      })
    }()
    Jd('Promise.prototype.finally', function (a) {
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
    Jd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    Jd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = Hd
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
    Jd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Oda(this)
        Pda(b)
        var c = Qda(this, b)
        b = new Set(this)
        var d = c.Ptb
        c = c.Rkb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Jd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Oda(this)
        Pda(b)
        var c = new Set(), d = Qda(this, b)
        b = d.Ptb
        d = d.Rkb
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
        if (a.size <= b.size) a = { Ptb: a.keys(), Rkb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { Ptb: b, Rkb: a }
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
    Jd('Array.prototype.at', function (a) {
      return a ? a : Rda
    })
    Dda('at', function (a) {
      return a ? a : Rda
    })
    Jd('String.prototype.at', function (a) {
      return a ? a : Rda
    })
    Jd('Array.prototype.flat', function (a) {
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
    Jd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    Jd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    Jd('Promise.allSettled', function (a) {
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
    Jd('String.prototype.matchAll', function (a) {
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
    var Sda = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Jd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return Sda(this, b, c).v
      }
    })
    Dda('findLast', function (a) {
      return a ? a : function (b, c) {
        return Sda(this, b, c).v
      }
    })
    Jd('Promise.withResolvers', function (a) {
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
    Jd('AggregateError', function (a) {
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
    Jd('Promise.any', function (a) {
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
    var Pd, Rd, Uda, Vda, Wda
    _.Tda = _.Tda || {}
    _.fa = this || self
    _.Nd = function (a, b, c) {
      a = a.split('.')
      c = c || _.fa
      for (var d; a.length && (d = a.shift());) {
        a.length || b === void 0
          ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
          : c[d] = b
      }
    }
    Pd = function (a, b) {
      var c = _.Od('WIZ_global_data.oxN3nb')
      a = c && c[a]
      return a != null ? a : b
    }
    _.Qd = _.fa._F_toggles_default_BardChatUi || []
    Rd = function () {}
    Rd.get = function () {
      return null
    }
    _.Gd = null
    _.Od = function (a, b) {
      a = a.split('.')
      b = b || _.fa
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.ob = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Fa = function (a) {
      var b = _.ob(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.Sd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.Td = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Uda) && a[Uda] ||
        (a[Uda] = ++Vda)
    }
    Uda = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    Vda = 0
    Wda = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.tc = function (a, b, c) {
      _.tc = Wda
      return _.tc.apply(null, arguments)
    }
    _.Vd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.Wd = function () {
      return Date.now()
    }
    _.Xda = function (a, b, c) {
      _.Nd(a, b, c)
    }
    _.Bb = function (a) {
      return a
    }
    _.Xd = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Xb = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++
        ) g[h - 2] = arguments[h]
        return b.prototype[e].apply(d, g)
      }
    }
    _.Xd(_.da, Error)
    _.da.prototype.name = 'CustomError'
    var Yda
    _.Xd(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.Zda = typeof TextDecoder !== 'undefined'
    _.$da = typeof TextEncoder !== 'undefined'
    var Yd = !!(_.Qd[4] >> 26 & 1),
      aea = !!(_.Qd[4] >> 21 & 1),
      bea = !!(_.Qd[4] >> 28 & 1),
      cea = !!(_.Qd[4] & 8192),
      dea = !!(_.Qd[4] >> 29 & 1),
      eea = !!(_.Qd[4] >> 17 & 1),
      fea = !!(_.Qd[4] & 512),
      gea = !!(_.Qd[4] >> 27 & 1)
    var hea, tba
    hea = Pd(1, !0)
    _.faa = Yd ? bea : Pd(610401301, !1)
    _.iea = Yd ? cea : Pd(1331761403, !1)
    _.jea = Yd ? dea : Pd(651175828, !1)
    tba = Yd ? aea || !eea : Pd(748402147, !0)
    _.mea = Yd ? fea : Pd(861377723, !1)
    _.zea = Yd ? aea || !gea : Pd(861377724, hea)
    var Aea
    Aea = _.fa.navigator
    _.na = Aea ? Aea.userAgentData || null : null
    var Bea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var Cea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        const a = this
        return _.Kd(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.Kd(function* () {
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
    var Dea
    Dea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Kd(function* () {
          if (ua(!0)) return new Bea(yield Cea.load())
          a.ha = !0
          return new Bea(_.qaa())
        })
      }
    }
    _.Eea = new Dea()
    _.ya = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Zd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.$d = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.ae = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.be = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Fea = function (a) {
      _.Fea[' '](a)
      return a
    }
    _.Fea[' '] = function () {}
    _.Gea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Sea, Tea
    _.Hea = _.haa()
    _.ce = _.iaa()
    _.de = _.oa('Edge')
    _.ee = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.ge = _.caa('WebKit') && !_.oa('Edge')
    _.Iea = _.ge && _.oa('Mobile')
    _.he = _.wa()
    _.ie = _.oaa()
    _.Jea = _.naa() || _.paa()
    _.Kea = _.laa()
    _.Lea = _.maa()
    _.Mea = _.oa('iPad')
    _.Nea = _.oa('iPod')
    _.Oea = _.va()
    _.caa('KaiOS')
    var Pea = function () {
        const a = _.fa.document
        return a ? a.documentMode : void 0
      },
      Qea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.ee) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.de) return /Edge\/([\d\.]+)/.exec(c)
        if (_.ce) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.ge) return /WebKit\/(\S+)/.exec(c)
        if (_.Hea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.ce) {
        const c = Pea()
        if (c != null && c > parseFloat(a)) {
          Qea = String(c)
          break a
        }
      }
      Qea = a
    }
    _.Rea = Qea
    Sea = {}
    _.je = function (a) {
      return _.Gea(Sea, a, function () {
        return _.eaa(_.Rea, a) >= 0
      })
    }
    if (_.fa.document && _.ce) {
      var Uea = Pea()
      Tea = Uea ? Uea : parseInt(_.Rea, 10) || void 0
    } else Tea = void 0
    _.Vea = Tea
    var Wea, Xea, Yea, Zea, $ea, afa
    _.ke = {}
    Wea = _.qa()
    Xea = vaa()
    Yea = _.oa('iPad')
    Zea = _.kaa()
    $ea = _.ra()
    afa = waa()
    _.ke.ANDROID = Zea
    _.ke.wvd = !1
    _.ke.xvd = !1
    _.ke.yvd = !1
    _.ke.zvd = !1
    _.ke.Avd = !1
    _.ke.Bvd = !1
    _.ke.CHROME = $ea
    _.ke.Kda = _.de
    _.ke.zY = Wea
    _.ke.QAb = _.ce
    _.ke.l3a = Yea
    _.ke.m3a = Xea
    _.ke.T4a = _.Hea
    _.ke.pI = afa
    _.ke.lHd = vaa
    _.ke.qHd = waa
    _.yaa = {}
    _.xaa = null
    var Caa = /[-_.]/g,
      Aaa = { '-': '+', _: '/', '.': '=' },
      bfa = typeof structuredClone != 'undefined'
    var Hba, Eba, kba, wba, qba
    _.yb = Pa()
    Hba = Pa()
    Eba = Pa()
    _.Cb = Pa()
    _.cfa = Pa()
    kba = Pa()
    _.dfa = Pa()
    wba = Pa()
    _.Ta = Pa('m_m', !0)
    qba = Pa()
    _.efa = Pa()
    var ffa
    _.Qa = Pa('jas', !0)
    ffa = []
    ffa[_.Qa] = 7
    _.Pb = Object.freeze(ffa)
    var gfa
    _.Ua = {}
    _.Ya = {}
    gfa = class {
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
    _.hfa = Object.freeze({})
    _.ifa = Object.freeze({})
    var rba = {}
    _.jfa = _.ab((a) => a !== null && a !== void 0)
    _.eb = _.ab((a) => typeof a === 'number')
    _.kfa = _.ab((a) => Number.isFinite(a))
    _.db = _.ab((a) => typeof a === 'string')
    _.Laa = _.ab((a) => typeof a === 'boolean')
    _.lfa = _.ab((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.mfa = _.ab((a) => typeof a === 'function')
    _.nfa = _.ab((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.ofa = _.ab((a) => Array.isArray(a))
    _.fb = typeof _.fa.BigInt === 'function' &&
      typeof _.fa.BigInt(0) === 'bigint'
    var rfa, pfa, sfa, qfa
    _.Gb = _.ab((a) =>
      _.fb ? a >= pfa && a <= qfa : a[0] === '-' ? Maa(a, rfa) : Maa(a, sfa)
    )
    rfa = Number.MIN_SAFE_INTEGER.toString()
    pfa = _.fb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    sfa = Number.MAX_SAFE_INTEGER.toString()
    qfa = _.fb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.hb = 0
    _.ib = 0
    var Uaa = void 0
    var Xaa
    _.le = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.vb = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.ub = Number.isSafeInteger
    _.pb = Number.isFinite
    _.tb = Math.trunc
    Xaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var tfa, ufa
    tfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    ufa = function (a) {
      if (a.jZ & 2) throw Error('C')
    }
    _.Ib = class extends tfa {
      constructor(a, b, c = gba, d = gba) {
        super()
        this.jZ = a[_.Qa] | 0
        this.R4 = b
        this.Bza = c
        this.gxb = this.R4 ? hba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.jZ)
          super.set(g, h)
        }
      }
      A0a(a) {
        return _.Gaa(Array.from(super.entries(), a))
      }
      clear() {
        ufa(this)
        super.clear()
      }
      delete(a) {
        ufa(this)
        return super.delete(this.Bza(a, !0, !1))
      }
      entries() {
        if (this.R4) {
          var a = super.keys()
          a = new gfa(a, iba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.R4) {
          var a = super.keys()
          a = new gfa(a, _.Ib.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.R4
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        ufa(this)
        a = this.Bza(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.gxb(b, !0, !0, this.R4, !1, this.jZ))
      }
      Oid(a) {
        const b = this.Bza(a[0], !1, !0)
        a = a[1]
        a = this.R4
          ? a === void 0 ? null : a
          : this.gxb(a, !1, !0, void 0, !1, this.jZ)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.Bza(a, !1, !1))
      }
      get(a) {
        a = this.Bza(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.R4
          return c
            ? (c = this.gxb(b, !1, !0, c, this.VOc, this.jZ),
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
    var mba
    _.me = bfa ? structuredClone : (a) => _.Eb(a, 0, _.Fb)
    _.vfa = _.gb(0)
    _.ne = function (a, b, c, d, e) {
      b = _.Tb(a.Og, b, c, e)
      if (b !== null || d && a.CVa !== _.Ya) return b
    }
    _.Tb = function (a, b, c, d) {
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
      a = a.Og
      return _.Jba(_.Iba(a), a, void 0, b, c)
    }
    _.se = function (a, b, c, d) {
      return _.Waa(_.ne(a, b, c, d))
    }
    _.te = function (a, b, c, d) {
      return _.sb(_.ne(a, b, c, d))
    }
    _.ue = function (a, b, c = 0, d) {
      let e
      return (e = _.te(a, b, d)) != null ? e : c
    }
    _.Wb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('N')
      return new a(_.Haa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Og = _.vba(a, b, c, 2048)
      }
      toJSON() {
        return _.sba(this)
      }
      serialize(a) {
        return JSON.stringify(_.sba(this, a))
      }
      clone() {
        const a = this.Og, b = a[_.Qa] | 0
        return _.Bba(this, a, b)
          ? _.Aba(this, a, !0)
          : new this.constructor(_.Jb(a, b, !1))
      }
      isImmutable() {
        return _.Za(this)
      }
    }
    _.l.prototype.i$ = _.aa(0)
    _.l.prototype[_.Ta] = _.Ua
    _.l.prototype.toString = function () {
      return this.Og.toString()
    }
    _.wfa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.xfa = []
    _.yfa = []
    _.zfa = !1
    _.Afa = function (a) {
      _.xfa[_.xfa.length] = a
      if (_.zfa) {
        for (let b = 0; b < _.yfa.length; b++) {
          a((0, _.tc)(_.yfa[b].wrap, _.yfa[b]))
        }
      }
    }
    _.ac.prototype.OP = !1
    _.ac.prototype.isDisposed = function () {
      return this.OP
    }
    _.ac.prototype.dispose = function () {
      this.OP || (this.OP = !0, this.Bb())
    }
    _.ac.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.ac.prototype.Jb = function (a) {
      this.addOnDisposeCallback(_.Vd(_.Xb, a))
    }
    _.ac.prototype.addOnDisposeCallback = function (a, b) {
      this.OP
        ? b !== void 0 ? a.call(b) : a()
        : (this.maa || (this.maa = []), b && (a = a.bind(b)), this.maa.push(a))
    }
    _.ac.prototype.Bb = function () {
      if (this.maa) { for (; this.maa.length;) this.maa.shift()() }
    }
    _.cc = function (a, b) {
      this.type = 'function' == typeof _.Bfa && a instanceof _.Bfa
        ? String(a)
        : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.cc.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.cc.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var Dfa
    _.Cfa = !(!_.fa.navigator || !_.fa.navigator.maxTouchPoints)
    Dfa = function () {
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
    _.Xd(_.dc, _.cc)
    _.dc.prototype.init = function (a, b) {
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
        : (this.offsetX = _.ge || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.ge || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.he ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.Uh = a
      a.defaultPrevented && _.dc.Xb.preventDefault.call(this)
    }
    _.dc.prototype.stopPropagation = function () {
      _.dc.Xb.stopPropagation.call(this)
      this.Uh.stopPropagation
        ? this.Uh.stopPropagation()
        : this.Uh.cancelBubble = !0
    }
    _.dc.prototype.preventDefault = function () {
      _.dc.Xb.preventDefault.call(this)
      const a = this.Uh
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.dc.prototype.Cwa = _.aa(1)
    _.Efa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.ve = function (a) {
      return !(!a || !a[_.Efa])
    }
    var Lba = 0
    var Ffa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Pba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.kc.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = Gfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.bga = !1))
        : (b = new _.Mba(b, this.src, f, !!d, e), b.bga = c, a.push(b))
      return b
    }
    _.kc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = Gfa(e, b, c, d)
      return b > -1
        ? (Ffa(e[b]),
          _.Ba(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Hfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Da(a.listeners[c], b)
      d &&
        (Ffa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.kc.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Ffa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.kc.prototype.K8 = _.aa(3)
    _.kc.prototype.xia = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = Gfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.kc.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Oba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Gfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var Ifa, Jfa, Kfa, Mfa, Nfa, Ofa, Pfa, Rfa
    Ifa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Jfa = {}
    Kfa = 0
    _.Be = function (a, b, c, d, e) {
      if (d && d.once) return _.we(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Be(a, b[f], c, d, e)
        return null
      }
      c = _.Lfa(c)
      return _.ve(a)
        ? a.listen(b, c, _.Sd(d) ? !!d.capture : !!d, e)
        : Mfa(a, b, c, !1, d, e)
    }
    Mfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('Q')
      const g = _.Sd(e) ? !!e.capture : !!e
      let h = _.Ce(a)
      h || (a[Ifa] = h = new _.kc(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Nfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        Dfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Ofa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('R')
      Kfa++
      return c
    }
    Nfa = function () {
      const a = Pfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.we = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.we(a, b[f], c, d, e)
        return null
      }
      c = _.Lfa(c)
      return _.ve(a)
        ? a.Ve(b, c, _.Sd(d) ? !!d.capture : !!d, e)
        : Mfa(a, b, c, !0, d, e)
    }
    _.De = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.De(a, b[f], c, d, e)
      } else {d = _.Sd(d) ? !!d.capture : !!d,
          c = _.Lfa(c),
          _.ve(a)
            ? a.Jf(b, c, d, e)
            : a && (a = _.Ce(a)) && (b = a.xia(b, c, d, e)) && _.Ee(b)}
    }
    _.Ee = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.ve(b)) return b.RS(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Ofa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Kfa--
      ;(c = _.Ce(b))
        ? (Hfa(c, a), c.ha == 0 && (c.src = null, b[Ifa] = null))
        : Ffa(a)
      return !0
    }
    Ofa = function (a) {
      return a in Jfa ? Jfa[a] : Jfa[a] = 'on' + a
    }
    _.Qfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.bga && _.Ee(a)
      return c.call(d, b)
    }
    Pfa = function (a, b) {
      return a.removed ? !0 : _.Qfa(a, new _.dc(b, this))
    }
    _.Ce = function (a) {
      a = a[Ifa]
      return a instanceof _.kc ? a : null
    }
    Rfa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Lfa = function (a) {
      if (typeof a === 'function') return a
      a[Rfa] || (a[Rfa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Rfa]
    }
    _.Afa(function (a) {
      Pfa = a(Pfa)
    })
    var Rba
    _.Sfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('S`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Sba((e) => {
            e.dsa(a.ha, d)
          })
        })
      }
    }
    _.Ge = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.Sfa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Uba = Symbol('T')
    _.Xd(_.rc, _.ac)
    _.rc.prototype[_.Efa] = !0
    _.k = _.rc.prototype
    _.k.rQ = function () {
      return this.Eob
    }
    _.k.Ko = function (a) {
      this.Eob = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.Be(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.De(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.rQ()
      if (c) { for (b = []; c; c = c.rQ()) b.push(c) }
      c = this.pMc
      const d = a.type || a
      if (typeof a === 'string') a = new _.cc(a, c)
      else if (a instanceof _.cc) a.target = a.target || c
      else {
        var e = a
        a = new _.cc(d, c)
        _.ic(a, e)
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
    _.k.Bb = function () {
      _.rc.Xb.Bb.call(this)
      this.removeAllListeners()
      this.Eob = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.gQ.add(String(a), b, !1, c, d)
    }
    _.k.Ve = function (a, b, c, d) {
      return this.gQ.add(String(a), b, !0, c, d)
    }
    _.k.Jf = function (a, b, c, d) {
      return this.gQ.remove(String(a), b, c, d)
    }
    _.k.RS = function (a) {
      return Hfa(this.gQ, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.gQ ? this.gQ.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.gQ.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.bga && this.RS(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.K8 = _.aa(2)
    _.k.xia = function (a, b, c, d) {
      return this.gQ.xia(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.gQ.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.He =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Wba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Tfa = class {
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
    _.uc.jfd = _.He
    _.uc.SHc = !1
    _.uc.c_c = function () {
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
    _.uc.rjc = (a) => a
    _.Afa(function (a) {
      _.uc.rjc = a
    })
    var Ufa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = Xba.get()
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
      Xba = new Tfa(() => new Vfa(), (a) => a.reset()),
      Vfa = class {
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
    var Wfa, Yba, Vba, Xfa
    Yba = !1
    Vba = new Ufa()
    _.Je = (a, b) => {
      Wfa || Xfa()
      Yba || (Wfa(), Yba = !0)
      Vba.add(a, b)
    }
    Xfa = () => {
      const a = Promise.resolve(void 0)
      Wfa = () => {
        a.then(Zba)
      }
    }
    _.Ke = function () {}
    var Yfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Zfa, $fa, iga, fga, bga, nga, lga, jga, kga, oga, mga, pga
    _.Me = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.wa = !1
      if (a != _.Ke) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.Le(b, 2, c)
          }, function (c) {
            _.Le(b, 3, c)
          })
        } catch (b) {
          _.Le(this, 3, b)
        }
      }
    }
    Zfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Zfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    $fa = new Tfa(function () {
      return new Zfa()
    }, function (a) {
      a.reset()
    })
    _.aga = function (a, b, c) {
      const d = $fa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.cga = function (a, b, c) {
      bga(a, b, c, null) || _.Je(_.Vd(b, a))
    }
    _.dga = function (a) {
      return new _.Me(function (b, c) {
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
            _.cga(h, _.Vd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Oe = function () {
      let a, b
      const c = new _.Me(function (d, e) {
        a = d
        b = e
      })
      return new ega(c, a, b)
    }
    _.Me.prototype.then = function (a, b, c) {
      return fga(
        this,
        (0, _.He)(typeof a === 'function' ? a : null),
        (0, _.He)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Me.prototype.$goog_Thenable = !0
    var hga = function (a, b, c, d) {
      _.gga(a, _.aga(b || _.Ke, c || null, d))
    }
    _.Me.prototype.finally = function (a) {
      a = (0, _.He)(a)
      return new _.Me((b, c) => {
        hga(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Me.prototype.ha = function (a, b) {
      return fga(this, null, (0, _.He)(a), b)
    }
    _.Me.prototype.catch = _.Me.prototype.ha
    _.Me.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Qe(a)
        _.Je(function () {
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
        } else _.Le(a, 3, b)
      }
    }
    _.gga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || lga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    fga = function (a, b, c, d) {
      const e = _.aga(null, null, null)
      e.child = new _.Me(function (f, g) {
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
              t === void 0 && h instanceof _.Qe ? g(h) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.gga(a, e)
      return e.child
    }
    _.Me.prototype.Ea = function (a) {
      this.ka = 0
      _.Le(this, 2, a)
    }
    _.Me.prototype.Fa = function (a) {
      this.ka = 0
      _.Le(this, 3, a)
    }
    _.Le = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('U')),
          a.ka = 1,
          bga(c, a.Ea, a.Fa, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            lga(a),
            b != 3 || c instanceof _.Qe || mga(a, c)))
    }
    bga = function (a, b, c, d) {
      if (a instanceof _.Me) return hga(a, b, c, d), !0
      if (Yfa(a)) return a.then(b, c, d), !0
      if (_.Sd(a)) {
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
      a.wa || (a.wa = !0, _.Je(a.Da, a))
    }
    jga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Me.prototype.Da = function () {
      let a
      for (; a = jga(this);) kga(this, a, this.ka, this.Ba)
      this.wa = !1
    }
    kga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, oga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : oga(b, c, d)
        } catch (e) {
          pga.call(null, e)
        }}
      Wba($fa, b)
    }
    oga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    mga = function (a, b) {
      a.qa = !0
      _.Je(function () {
        a.qa && pga.call(null, b)
      })
    }
    pga = _.ha
    _.Qe = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Xd(_.Qe, _.da)
    _.Qe.prototype.name = 'cancel'
    var ega = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var wga, vga, rga, sga
    _.vc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.vc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.wa--, b.wa <= 0 && b.cancel())
        }
        this.kb ? this.kb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.Re(this))
      }
    }
    _.vc.prototype.Sa = function (a, b) {
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
    _.vc.prototype.callback = function (a) {
      tga(this)
      qga(this, !0, a)
    }
    _.vc.prototype.ha = function (a) {
      tga(this)
      qga(this, !1, a)
    }
    _.Te = function (a, b, c) {
      return _.Se(a, b, null, c)
    }
    _.vc.prototype.finally = function (a) {
      return _.uga(
        new Promise((b, c) => {
          _.Se(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.Se = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.He)(b) : (b = (0, _.He)(b), c = (0, _.He)(c)))
      a.Ba.push([b, c, d])
      e && rga(a)
      return a
    }
    _.vc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Me(function (g, h) {
        e = g
        d = h
      })
      _.Se(this, e, function (g) {
        g instanceof _.Re ? f.cancel() : d(g)
        return vga
      }, this)
      return f.then(a, b, c)
    }
    _.vc.prototype.$goog_Thenable = !0
    _.vc.prototype.ma = _.aa(4)
    _.vc.prototype.isError = function (a) {
      return a instanceof Error
    }
    wga = function (a) {
      return _.be(a.Ba, function (b) {
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
      a.na && (a.na.wa--, delete a.na)
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
              Yfa(b) ||
              typeof _.fa.Promise === 'function' && b instanceof _.fa.Promise
            ) d = !0, a.Fa = !0
          } catch (t) {
            b = t, a.qa = !0, wga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.tc)(a.Sa, a, !0),
          d = (0, _.tc)(a.Sa, a, !1),
          b instanceof _.vc ? (_.Se(b, g, d), b.mb = !0) : b.then(g, d))
      c && (b = new yga(b), xga[b.ha] = b, a.Da = b.ha)
    }
    _.uga = function (a) {
      const b = new _.vc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    sga = function (a) {
      _.da.call(this)
      this.AA = a
    }
    _.Xd(sga, _.da)
    sga.prototype.message = 'Deferred has already fired'
    sga.prototype.name = 'AlreadyCalledError'
    _.Re = function (a) {
      _.da.call(this)
      this.AA = a
    }
    _.Xd(_.Re, _.da)
    _.Re.prototype.message = 'Deferred was canceled'
    _.Re.prototype.name = 'CanceledError'
    var yga = function (a) {
      this.ha = _.fa.setTimeout((0, _.tc)(this.throwError, this), 0)
      this.eQ = a
    }
    yga.prototype.throwError = function () {
      delete xga[this.ha]
      throw this.eQ
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
    _.Ve = function (a) {
      for (; a.Wa;) a = a.Wa
      return a
    }
    Bga = function (a) {
      var b = _.Aga
      const c = []
      a = _.Ve(a)
      let d
      a.Gz[b] && (d = a.Gz[b][0])
      d && c.push(d)
      a = a.Ya || []
      for (let e = 0; e < a.length; e++) {
        a[e].Gz[b] && (d = a[e].Gz[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.Xe = function (a, b) {
      for (var c = a; c; c = c.Wa) {
        if (c.isDisposed()) throw new _.wfa([b])
        if (c.Gz[b]) return c.Gz[b][0]
        if (c.tc[b]) break
      }
      if (c = a.ub[b]) {
        c = c(a)
        if (c == null) throw Error('W`' + b)
        _.We(a, b, c)
        return c
      }
      return null
    }
    _.We = function (a, b, c) {
      if (a.isDisposed()) _.Xb(c)
      else {
        a.Gz[b] = [c, !0]
        var d = Cga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Yb[b]
        b instanceof _.Ge && _.qc(b, c.constructor)
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
      a.Pa && _.ec(a.Pa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Ye = class extends _.ac {
      constructor() {
        super()
        this.Gz = {}
        this.Yb = {}
        this.ub = {}
        this.Pa = {}
        this.Sa = {}
        this.tc = {}
        this.yb = new _.rc()
        this.Ld = !0
        this.Wa = null
        const a = _.Ve(this)
        this != a && (a.Ya ? a.Ya.push(this) : a.Ya = [this])
      }
      get(a) {
        let b = _.Xe(this, a)
        if (b == null) throw Error('V`' + a)
        return b
      }
      Bb() {
        if (_.Ve(this) == this) {
          var a = this.Ya
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Ve(this).Ya
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.Gz) {
          a = this.Gz[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.Gz = null
        this.Ld && this.yb.dispose()
        Dga(this, this)
        this.Pa = null
        _.Xb(this.Qd)
        this.tc = this.Qd = null
        super.Bb()
      }
      Nr() {
        return this.yb
      }
    }
    _.Ye.prototype.Nb = _.aa(7)
    _.Ye.prototype.kb = _.aa(6)
    _.Ye.prototype.qb = _.aa(5)
    _.Aga = new _.Ge('n73qwf', 'n73qwf')
    _.wc.prototype.clone = function () {
      return new _.wc(this.x, this.y)
    }
    _.wc.prototype.equals = function (a) {
      return a instanceof _.wc && _.Ze(this, a)
    }
    _.Ze = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.k = _.wc.prototype
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
      a instanceof _.wc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.k.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.$e = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.k = _.xc.prototype
    _.k.clone = function () {
      return new _.xc(this.width, this.height)
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
    _.zc = {}
    var Ega = globalThis.trustedTypes, $ba = Ega, bca
    _.yc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    eca((a) => a``) || eca((a) => a`\0`) || eca((a) => a`\n`) ||
      eca((a) => a`\u0000`)
    _.fca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Fga = _.Cc('about:blank')
    _.Jc = _.Cc('about:invalid#zClosurez')
    var Fc, gca, ica, Gga, kca
    Fc = class {
      constructor(a) {
        this.ym = a
      }
    }
    _.af = {
      NBd: Hc('tel'),
      Rvd: new Fc((a) => /^callto:\+?\d*$/i.test(a)),
      lBd: new Fc((a) => a.indexOf('ssh://') === 0),
      IAd: Hc('rtsp'),
      Goc: Hc('data'),
      ytc: Hc('http'),
      ztc: Hc('https'),
      EXTENSION: new Fc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      Xrc: Hc('ftp'),
      eCc: new Fc((a) => /^[^:]*([/?#]|$)/.test(a)),
      wwc: Hc('mailto'),
      Yyd: Hc('intent'),
      pzd: Hc('market'),
      bzd: Hc('itms'),
      czd: Hc('itms-appss'),
      dzd: Hc('itms-services'),
      Wwd: Hc('fb-messenger'),
      JCd: Hc('whatsapp'),
      dBd: new Fc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      hBd: Hc('sms'),
      BCd: Hc('vnd.youtube'),
      zyd: Hc('googlehome'),
      Ayd: Hc('googlehomesdk'),
      LINE: Hc('line'),
    }
    gca = [_.af.Goc, _.af.ytc, _.af.ztc, _.af.wwc, _.af.Xrc, _.af.eCc]
    ica = typeof URL === 'function'
    Gga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    kca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.hca = () => {}
    _.Oc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.bf = new _.Oc(_.zc, Ega ? Ega.emptyHTML : '')
    _.Hga = {
      lyd: 0,
      Hwd: 1,
      Iwd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Uc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Hga[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.pca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Iga = new _.pca(_.zc, Ega ? Ega.emptyScript : '')
    _.Bca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var uca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.Bd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.dda = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Jga = Math.random() * 2147483648 | 0
    _.cf = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Eca = /^[a-z][a-z\d-]*$/i,
      Fca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Ica = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Jca = ['action', 'formaction', 'href']
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
        ? { ju: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { ju: 1 }
        : { ju: 0 }
    }
    _.df = class {
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
        ['A', new Map([['href', { ju: 7 }]])],
        ['AREA', new Map([['href', { ju: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            ju: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { ju: 5 }], ['srcset', { ju: 6 }]])],
        ['IMG', new Map([['src', { ju: 5 }], ['srcset', { ju: 6 }]])],
        ['VIDEO', new Map([['src', { ju: 5 }]])],
        ['AUDIO', new Map([['src', { ju: 5 }]])],
      ],
      Rga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Sga = [
        ['dir', {
          ju: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          ju: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          ju: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { ju: 5 }],
        ['target', {
          ju: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Tga = new _.df(new Set(Pga), new Map(Qga), new Set(Rga), new Map(Sga)),
      Uga = new _.df(
        new Set(Pga.concat(['BUTTON', 'INPUT'])),
        new Map(Qga),
        new Set(Rga.concat(['class', 'id', 'name'])),
        new Map(Sga.concat([['style', { ju: 1 }]])),
      ),
      Vga = new _.df(
        new Set(
          Pga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Qga),
        new Set(
          Rga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Sga.concat([['style', { ju: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Wga
    _.Xga = function (a, b, c) {
      b = Lca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Nca(g)
          ? (g = Mca(g), g = g === null ? 2 : _.Mga(a.oa, g) ? 1 : 2)
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
        } else if (Nca(d)) g = Wga(a, d, c)
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
      const d = Mca(b)
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
          switch (e.ju) {
            case 1:
              nd(c, h, t)
              break
            case 2:
              throw Error()
            case 3:
              nd(c, h, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), nd(c, h, e)) : nd(c, h, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: h, gRb: d },
                  f = _.Kca(t),
                  (e = a.ha(f, e)) && nd(c, h, e.toString()))
                : nd(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, gRb: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, A] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, JNa: A })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Kca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), JNa: v.JNa })
                }
                nd(c, h, Oca(f))
              } else nd(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, gRb: d }
                f = _.Kca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.jca(e)
              e = f !== void 0 && Gga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              nd(c, h, e)
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
        return _.Dca(_.Xga(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Pca = new _.Yga(Tga)
    _.Zga = new _.Yga(Uga)
    _.$ga = new _.Yga(Vga)
    _.aha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { ju: 4 })
      a.ha = new _.df(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.ef = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.df(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.bha = class {
      constructor() {
        this.na = !1
        this.ha = Tga
      }
    }
    _.ff = class extends _.bha {
      build() {
        if (this.na) throw Error('ea')
        this.na = !0
        return new _.Yga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var cha, eha, qha, rha, sha
    _.sd = function (a) {
      return a ? new _.hf(_.jf(a)) : Yda || (Yda = new _.hf())
    }
    _.kf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.lf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.mf = function (a, b) {
      _.ec(b, function (c, d) {
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
      return new _.xc(a.clientWidth, a.clientHeight)
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
        !_.Fa(f) || _.Sd(f) && f.nodeType > 0
          ? e(f)
          : _.Zd(
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
    _.qf = function (a) {
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
    _.rf = function (a) {
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
    _.sf = function (a) {
      return _.Sd(a) && a.nodeType == 1
    }
    _.tf = function (a) {
      return a.parentElement || null
    }
    _.uf = function (a, b) {
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
    _.vf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.qf(a), a.appendChild(_.jf(a).createTextNode(String(b)))
    }
    qha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    rha = { IMG: ' ', BR: '\n' }
    _.tha = function (a) {
      return a.hasAttribute('tabindex') && sha(a)
    }
    _.wf = function (a, b) {
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
    _.xf = function (a) {
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
      this.jl = a || _.fa.document || document
    }
    _.k = _.hf.prototype
    _.k.hb = _.sd
    _.k.Ff = function () {
      return this.jl
    }
    _.k.Xa = function (a) {
      return _.kf(this.jl, a)
    }
    _.k.$ = _.hf.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.jl).getElementsByTagName(String(a))
    }
    _.k.DE = _.aa(9)
    _.k.Ub = _.aa(11)
    _.k.qc = _.aa(13)
    _.k.setProperties = _.mf
    _.k.xj = function (a) {
      return _.nf(a || this.getWindow())
    }
    _.k.Eb = function (a, b, c) {
      return _.fha(this.jl, arguments)
    }
    _.k.createElement = function (a) {
      return _.dha(this.jl, a)
    }
    _.k.createTextNode = function (a) {
      return this.jl.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.jl.defaultView
    }
    _.k.Dn = _.aa(14)
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
    _.k.Tj = _.qf
    _.k.WYb = _.hha
    _.k.qya = _.iha
    _.k.pya = _.jha
    _.k.removeNode = _.rf
    _.k.iqb = _.kha
    _.k.getChildren = _.lha
    _.k.Hwa = _.nha
    _.k.jfb = _.oha
    _.k.pVb = _.pha
    _.k.isElement = _.sf
    _.k.isWindow = function (a) {
      return _.Sd(a) && a.window == a
    }
    _.k.yia = _.tf
    _.k.contains = _.uf
    _.k.ofb = _.jf
    _.k.Pk = _.vf
    _.k.Hw = _.wf
    _.k.qw = _.uha
    _.k.tQ = _.xf
    Rd = Rd || {}
    var wha = function () {
      _.ac.call(this)
    }
    _.Xd(wha, _.ac)
    wha.prototype.initialize = function () {}
    Xca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Xca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.Afa(function (a) {
      Xca.prototype.execute = a(Xca.prototype.execute)
    })
    Rd.H4a = Xca
    _.Xd(td, _.ac)
    td.prototype.wa = wha
    td.prototype.ka = null
    td.prototype.getId = function () {
      return this.qa
    }
    var xha = function (a, b, c) {
        a.oa.push(new Rd.H4a(b, c))
      },
      yha = function (a, b) {
        a.ma.push(new Rd.H4a(b, void 0))
      }
    td.prototype.isLoaded = function () {
      return !!this.ka
    }
    td.prototype.onLoad = function (a) {
      var b = new this.wa()
      b.initialize(a())
      this.ka = b
      b = (b = zha(this.na, a())) || zha(this.oa, a())
      b || (this.ma.length = 0)
      return b
    }
    td.prototype.onError = function (a) {
      ;(a = zha(this.ma, a)) && _.ha(Error('fa`' + a))
      this.na.length = 0
      this.oa.length = 0
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
    td.prototype.Bb = function () {
      td.Xb.Bb.call(this)
      _.Xb(this.ka)
    }
    Rd.G4a = td
    var yf = {
      ERROR: 'error',
      IDLE: 'idle',
      Npa: 'active',
      QHc: 'userIdle',
      PHc: 'userActive',
    }
    _.k = Yca.prototype
    _.k.A$b = function () {}
    _.k.WYa = function () {}
    _.k.oDa = function () {}
    _.k.dsa = function () {
      throw Error('ga')
    }
    _.k.rCa = function () {
      throw Error('ha')
    }
    _.k.cVb = function () {
      return this.qa
    }
    _.k.vDa = function (a) {
      this.qa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.W0b = function () {
      return !1
    }
    var Aha, Bha
    Aha = function (a, b) {
      const c = b.styleSheets.length, d = Wca(a, new _.hf(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Bha = function (a) {
      return _.ae(Bga(a), (b) => b.ofb())
    }
    _.Cha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Xda('_F_installCss', (a) => {
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
    _.Af = function (a) {
      const b = _.zf(a)
      b === null && Dha(a)
      return b
    }
    _.Bf = function (a, b) {
      let c
      return (c = _.zf(a)) != null ? c : b
    }
    _.zf = function (a) {
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
    _.Cf = function (a, b) {
      let c
      return (c = _.Fha(a)) != null ? c : b
    }
    _.Df = function (a, b) {
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
      return Array.from(b, (d, e) => new _.ud(c + e + ']', d))
    }
    _.ud = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.Af(this) : _.Bf(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Gha(this)
          b === null && Dha(this)
        } else b = _.Df(this, a)
        return b
      }
      toString() {
        return _.Af(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Df(this, b) : _.Bf(this, b))
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
          for (const d in b) a[d] = new _.ud(c + d, b[d])
          return a
        }
        throw Eha(this, 'object')
      }
    }
    var bda
    bda = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Jha = /#|$/
    var Kha,
      kda,
      Ef,
      Nha,
      Qha,
      Oha,
      Pha,
      Rha,
      Sha,
      Tha,
      Uha,
      sda,
      Vha,
      Lha,
      Mha,
      Wha,
      Xha
    _.Cd = function (a, b = !0) {
      const c = Kha(a), d = new Lha(), e = _.wd(c)[5]
      _.ec(Mha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && Ef(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Nha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.zd(6, c)) && _.eda(a, (g, h) => {
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
    kda = function (a) {
      a = Kha(a)
      a = _.xd(_.zd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Ef = function (a, b, c) {
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
          'd' in a.ha || Ef(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Ff(a, 'br') != '1' && _.Ff(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Ff(a, 'rb') == '1' && c('rb'),
          _.Ff(a, 'zs') !== '0' && c('zs'),
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
    _.Ff = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Oha = function (a) {
      a = _.Ff(a, 'md')
      return !!a && a !== '0'
    }
    Pha = function (a) {
      switch (_.Ff(a, 'wt')) {
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
        ? (b.sort(), Ef(a, 'exm', b.join(',')))
        : Ef(a, 'exm', null)
    }
    Sha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Ef(a, 'excm', b.join(',')))
        : Ef(a, 'excm', null)
    }
    Tha = function (a) {
      return (a = _.Ff(a, 'm')) ? a.split(',') : []
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
      Ef(a, 'ee', c.join(';'))
    }
    sda = function (a) {
      var b = _.Ff(a, 'ee')
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
        const b = _.hda(this.ma)
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
      HAd: 'k',
      mwd: 'ck',
      zzd: 'm',
      Qwd: 'exm',
      Owd: 'excm',
      nvd: 'am',
      tvd: 'amc',
      qzd: 'mm',
      EAd: 'rt',
      Qyd: 'd',
      Pwd: 'ed',
      kBd: 'sv',
      qwd: 'deob',
      Pvd: 'cb',
      Xvd: 'ccb',
      Qvd: 'cbi',
      bBd: 'rs',
      OAd: 'sdch',
      Xyd: 'im',
      rwd: 'dg',
      Lwd: 'br',
      Kwd: 'br-d',
      Mwd: 'rb',
      RCd: 'zs',
      KCd: 'wt',
      Vwd: 'ee',
      jBd: 'sm',
      METADATA: 'md',
      Byd: 'gssmodulesetproto',
      yCd: 'ujg',
      xCd: 'sp',
      ZAd: 'slk',
      vwd: 'dti',
      azd: 'ic',
    }
    Wha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    Xha = RegExp('^[a-zA-Z0-9-_*]+$')
    var oda = null, nda = new Map()
    var qda = !1, rda = !1
    var Yha = (a) => {
        a = a.clone()
        Vha(a)
        Ef(a, 'dg', null)
        Ef(a, 'd', '0')
        Rha(a, null)
        Sha(a, null)
        return a
      },
      Zha = !0,
      $ha = (a, b, { cssRowKey: c, d7: d, I_: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!Xha.test(g)) throw Error('ka`' + g) }
        Ef(a, 'm', b.join(','))
        e && Uha(a, e)
        c && (Ef(a, 'ck', c), d ? Ef(a, 'rs', d) : Zha && (Zha = !1))
        if (f) {
          if (f != null && !Wha.test(f)) throw Error('la`' + f)
          Ef(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.Ad(document.location.href) + a)
        return _.Ac(a)
      },
      aia = (
        a,
        b,
        { lqb: c = [], cssRowKey: d, d7: e, I_: f, callback: g } = {},
      ) => {
        a = Yha(a)
        Sha(a, c)
        return $ha(a, b, { cssRowKey: d, d7: e, I_: f, callback: g })
      },
      bia = (
        a,
        b,
        { mqb: c = [], lqb: d = [], cssRowKey: e, d7: f, I_: g, callback: h } =
          {},
      ) => {
        a = Yha(a)
        Ef(a, 'd', '1')
        Rha(a, c)
        Sha(a, d)
        return $ha(a, b, { cssRowKey: e, d7: f, I_: g, callback: h })
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
    _.Xd(_.eia, _.uda)
    _.eia.prototype.CU = function () {
      return new XMLHttpRequest()
    }
    _.dia = new _.eia()
    var gia = function (a) {
        return fia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      fia = function (a) {
        const b = {}, c = b.Bda ? b.Bda.CU() : _.dia.CU()
        return (new _.Me(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Gf('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.fa.clearTimeout(f)
              var g
              !(g = _.cia(c.status)) && (g = c.status === 0) &&
                (g = _.cda(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new hia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Gf('Network error', a, c))
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
          b.Mw > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new iia(a, c))
          }, b.Mw))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new Gf('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Qe &&
            c.abort()
          throw d
        })
      },
      Gf = function (a, b, c) {
        _.da.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Xd(Gf, _.da)
    Gf.prototype.name = 'XhrError'
    var hia = function (a, b, c) {
      Gf.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Xd(hia, Gf)
    hia.prototype.name = 'XhrHttpError'
    var iia = function (a, b) {
      Gf.call(this, 'Request timed out', a, b)
    }
    _.Xd(iia, Gf)
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
          const v = e.filter((z) => !_.nc().Yt(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.nc().Yt(v)
        v.isLoaded() ? t() : (v.na.push(new Rd.H4a(t, void 0)), yha(v, t))
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
        a.ma[f] || (a.ma[f] = !0, a.Da.push(f), c = !0, d.push(f))
      }
      c && (a.Pa = !1)
    }
    lia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            kda(b) && !_.Cd(b).ka.endsWith('_/js/')
        ) {
          b = Tha(_.Cd(b))
          for (const c of b) a.Ea.includes(c) || a.Ea.push(c)
        }
      }
    }
    nia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      mia(a, b, (g, h, t = h) => {
        a.Wa && f ? a.Ya(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    oia = function (a, b) {
      return b.filter((c) => !a.ma[c])
    }
    pia = function (a, b, { I_: c, onError: d, Mla: e, gZc: f } = {}) {
      if (!b) throw Error('pa')
      if (a.kb) {
        for (const g of document.getElementsByTagName('style')) lia(a, g)
        for (const g of document.getElementsByTagName('link')) lia(a, g)
      }
      nia(a, oia(a, b), c, d, e, f)
    }
    mia = function (a, b, c, d) {
      if (a.ka) {
        return a.ka.then(() => {
          mia(a, b, c, d)
        }),
          !0
      }
      if (!a.wa) {
        const f = []
        var e = Object.assign({}, a.ma)
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
          t = _.Bc(h).toString()
        for (; t.length > a.iGa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.iGa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = ria(a, g, d),
              t = _.Bc(h).toString()
          } else {return a.wa
              ? (a.wa = !1,
                a.ka = sia(a).then((v) => {
                  tia(a, v, d)
                }),
                mia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.wa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    uia = function (a) {
      a.Pa || (a.Pa = !0, a.Da.sort())
      return a.Da
    }
    via = function (a) {
      a = a.Ea
      a.sort()
      return a
    }
    ria = function (a, b, c) {
      return a.wa
        ? bia(a.na, b, {
          cssRowKey: a.Sa,
          d7: a.Oa,
          I_: c,
          mqb: uia(a),
          lqb: via(a),
        })
        : aia(a.na, b, { cssRowKey: a.Sa, d7: a.Oa, mqb: uia(a), lqb: via(a) })
    }
    _.If = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.ma[e] && (delete a.ma[e], _.Da(a.Da, e), c.push(e))
      }
    }
    _.wia = function (a, b, c, d, e, f, g = d) {
      a.qa = c
      a.Ba.insertBefore(c, a.Ba.firstChild)
      _.jia(c, d, () => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        _.If(a, h)
        a.ka
          ? a.ka.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    qia = function (a, b, c, d, e, f = {}) {
      const g = _.nc()
      for (let h of b) {
        b = g.Yt(h)
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
      a = a.na.clone()
      Vha(a)
      Ef(a, 'dg', null)
      Ef(a, 'md', '1')
      return gia(a.toString())
    }
    tia = function (a, b, c) {
      _.nc().oDa((b || {}).moduleGraph)
      qia(a, uia(a), (d) => {
        _.kia(a, [d.getId()])
      }, c)
      a.ka = null
    }
    _.Fd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.lb = a
        this.na = _.Cd(_.Bc(a).toString(), !0)
        this.Sa = b
        this.Oa = c
        this.wa = d
        this.ma = {}
        this.Da = []
        this.Pa = !0
        this.Ea = (a = _.Ff(this.na, 'excm')) ? a.split(',') : []
        this.kb = e
        this.jGa = !1
        this.cua = 'anonymous'
        this.iGa = 4043
        this.Ba = document.head || document.documentElement
        this.ka = this.qa = null
        this.Za = !0
        _.tda()
        this.logger = null
        _.kia(this, Tha(this.na))
        this.fetchPriority = void 0
        this.Wa = !1
        this.Fa()
      }
      Ya() {
        _.Kd(function* () {
          throw Error('qa')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.Bc(a)
        var f = this.jGa, g = this.cua, h = this.fetchPriority
        const t = _.pf('SCRIPT')
        _.cd(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.kia(this, b)
        _.wia(this, a, t, b, c, d, e)
      }
    }
    var vda = new Uint8Array(123)
    var xia = []
    var yia = function (a) {
        switch (a.type) {
          case Jf.Type.kGb:
            return 'Unauthorized'
          case Jf.Type.o2a:
            return 'Consecutive load failures'
          case Jf.Type.TIMEOUT:
            return 'Timed out'
          case Jf.Type.fEb:
            return 'Out of date module id'
          case Jf.Type.j3a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Jf = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.mqb = c
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
    Rd.fA = Jf
    Rd.fA.Type = { kGb: 0, o2a: 1, TIMEOUT: 2, fEb: 3, j3a: 4 }
    var Kf = function () {
      Yca.call(this)
      this.Ya = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Za = []
      this.ha = []
      this.Ea = []
      this.ma = {}
      this.lb = {}
      this.wa = this.Wa = new Rd.G4a([], '')
      this.ob = null
      this.Pa = new _.vc()
      this.Aj = null
      this.ub =
        this.Db =
        this.yb =
        this.mb =
        this.kb =
          !1
    }
    _.Xd(Kf, Yca)
    var zia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Xd(zia, _.da)
    Kf.prototype.A$b = function (a) {
      this.kb = a
    }
    Kf.prototype.WYa = function (a) {
      this.mb = a
    }
    Kf.prototype.oDa = function (a, b) {
      if (!(this instanceof Kf)) this.oDa(a, b)
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
          ? (_.Ha(this.na, b), this.ob = _.raa(b))
          : this.Pa.ka || this.Pa.callback()
        Object.freeze(this.Ya)
        Cia(this)
      }
    }
    var Bia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        vda[
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
            .charCodeAt(b)
        ] = b
      }
      b = { buf: c, pos: 0 }
      Dd(b)
      const d = Dd(b)
      var e = Dd(b) + 1
      const f = Array(d), g = Array(d), h = Array(d)
      e = Array(e)
      var t = 0, v = 0, z = b.pos, A = b.buf.indexOf('|', b.pos)
      b.pos = A + 1
      for (A = 0; A < d; A++) {
        var I = Dd(b), L = I & 2, R = I & 1
        I >>>= 2
        R
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (R = z, z += I, I = c.substring(R, z))
        f[A] = I
        L && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        z = wda(b), h[t] = z & 7, h[t + 1] = z >>> 3 & 7
      }
      c && (c = wda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Dd(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        z = t === 0 ? xia : Array(t)
        g[c] = z
        A = v
        for (L = 0; L < t; L++) A -= Dd(b), z[L] = e[A]
        e[v] === f[c] && v++
      }
      const { ids: ba, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < ba.length; b++) Aia(a, ba[b], ea[b])
      a.Ya = ba
    }
    _.k = Kf.prototype
    _.k.Yt = function (a) {
      return this.ka[a]
    }
    _.k.dsa = function (a, b) {
      const c = this.Yt(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.rCa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.vDa = function (a) {
      Kf.Xb.vDa.call(this, a)
      Cia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.W0b = function () {
      return this.Ea.length > 0
    }
    var Nf = function (a) {
        var b = a.yb
        const c = a.isActive()
        c != b && (Dia(a, c ? yf.Npa : yf.IDLE), a.yb = c)
        b = a.W0b()
        b != a.Db && (Dia(a, b ? yf.PHc : yf.QHc), a.Db = b)
      },
      Aia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Rd.G4a(c, b)
      },
      Mia = function (a, b, c) {
        const d = []
        _.Ja(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Yt(g)
          if (!h) throw Error('ra`' + g)
          const t = new _.vc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.qa)
            : (Eia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.mb
            ? _.Te(a.Pa, (0, _.tc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Nf(a)))
        return e
      },
      Eia = function (a, b, c, d, e) {
        xha(c, e.callback, e)
        yha(c, function (f) {
          e.ha(new zia(b, f))
        })
        a.Oa(b) ? d && (Nia(a, b), Nf(a)) : d && Nia(a, b)
      }
    Kf.prototype.Sa = function (a, b = 0, c) {
      const d = Oia(this, a)
      this.mb ? _.Ha(this.na, d) : this.na = d
      this.Ba = this.kb ? a : _.Ea(d)
      Nf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.oa
        if (!a) throw Error('sa')
        if (Object.keys(this.ma).length > 0 && !a.Za) throw Error('ta')
        pia(a, _.Ea(d), {
          I_: this.ma,
          onError: (e, f, g) =>
            Pia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          hBa: (0, _.tc)(this.Nb, this),
          gZc: !!c,
        })
      }
    }
    var Oia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('ua`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Qia(a, b[d]))
        _.Ja(c)
        return !a.kb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Qia = function (a, b) {
        const c = _.Qba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Yt(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Yt(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ja(d)
        return d
      },
      Cia = function (a) {
        if (a.wa == a.Wa) {
          a.wa = null
          const b = a.Wa.onLoad((0, _.tc)(a.cVb, a))
          b && b.length &&
            Ria(a, new Rd.fA(Rd.fA.Type.j3a, void 0, void 0, void 0, b[0]))
          Nf(a)
        }
      }
    Kf.prototype.Fa = function () {
      if (this.wa) {
        var a = this.wa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Yt(c)
            d && !d.isLoaded() && (this.rCa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.tc)(this.cVb, this))) && b.length &&
            Ria(this, new Rd.fA(Rd.fA.Type.j3a, void 0, void 0, void 0, b[0])),
            _.Da(this.Ea, a),
            _.Da(this.na, a),
            this.na.length === 0 && Sia(this),
            this.ob && a == this.ob && (this.Pa.ka || this.Pa.callback()),
            Nf(this),
            this.wa = null)
      }
    }
    Kf.prototype.Oa = function (a) {
      if (_.za(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.za(this.ha[b], a)) return !0
      }
      return !1
    }
    Kf.prototype.load = function (a, b) {
      return Mia(this, [a], b)[a]
    }
    Kf.prototype.Da = function (a) {
      return Mia(this, a)
    }
    var Nia = function (a, b) {
      _.za(a.Ea, b) || a.Ea.push(b)
    }
    Kf.prototype.qb = function (a) {
      this.wa && this.wa.getId() === 'synthetic_module_overhead' &&
        (this.Fa(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Tia(this, this.ka[a].ha || [], (b) => {
        b.ka = new wha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.wa = this.Yt(a)
    }
    var Pia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ea(c)
      a.Ba = b
      c.forEach(_.Vd(_.Da, a.Za), a)
      if (d == 401) Ria(a, new Rd.fA(Rd.fA.Type.kGb, d)), a.ha.length = 0
      else if (d == 410) Uia(a, new Rd.fA(Rd.fA.Type.fEb, d)), Sia(a)
      else if (h >= 3) Uia(a, new Rd.fA(Rd.fA.Type.o2a, d, f, e)), Sia(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.fa.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    Kf.prototype.Nb = function () {
      Uia(this, new Rd.fA(Rd.fA.Type.TIMEOUT))
      Sia(this)
    }
    var Uia = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Ria(a, b)
      },
      Ria = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Qia(this, g)
            return _.be(c, function (t) {
              return _.za(h, t)
            })
          }, a)
          _.Ha(d, f)
        }
        for (e = 0; e < c.length; e++) _.Aa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Da(a.ha[f], d[e])
          _.Da(a.Ea, d[e])
        }
        if (e = a.lb[yf.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(yf.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Nf(a)
      },
      Sia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Yt(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Nf(a)
      },
      Dia = function (a, b) {
        a = a.lb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Tia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Yt(f),
            !e[f] && d(b) && (e[f] = !0, Tia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Kf.prototype.dispose = function () {
      _.$b(_.fc(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Ea = []
      this.ha = []
      this.lb = {}
      this.ub = !0
    }
    Kf.prototype.isDisposed = function () {
      return this.ub
    }
    _.mc = function () {
      return new Kf()
    }
    var Via, Wia, Zia, $ia, aja, bja, Xia, Yia
    Via = [5E3, 2E4]
    Wia = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Fa()
    }
    Zia = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Yt(c).isLoaded())
      b.length > 0 && (Xia(a, ...b), a.na.push(b), Yia(a))
    }
    $ia = function (a, b) {
      return new _.Me((c, d) => {
        const e = a.Yt(b)
        e.isLoaded() ? c(a.qa) : (xha(e, () => {
          c(a.qa)
        }),
          yha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Rd.fA && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    aja = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Yt(f),
          !e[f] && d(b) && (e[f] = !0, aja(a, b.ha || [], c, d, e), c(b))
      }
    }
    bja = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Xia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Yia = function (a) {
      for (; a.wa < a.Ea && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Yt(c).isLoaded())
        if (b.length > 0) {
          a.wa++
          let c = () => {
            a.wa--
            Yia(a)
            c = () => {}
          }
          _.dga(b.map((f) => $ia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.oa.Za) throw Error('ta')
            pia(a.oa, b, {
              I_: a.ha,
              onError: (f, g) => {
                const h = Via[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (bja(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Yt(t)
                      if (!t.isLoaded()) {
                        t.onError(new Rd.fA(Rd.fA.Type.o2a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.cja = class extends Yca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Ea = Infinity
        this.wa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Aj = null
        this.ka = this.Yt('{base}')
      }
      oDa() {
        Wia(this)
      }
      vDa(a) {
        super.vDa(a)
        Wia(this)
      }
      Yt(a) {
        let b = this.ma[a]
        b || (b = new Rd.G4a([], a), this.ma[a] = b)
        return b
      }
      dsa(a, b) {
        this.Yt(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      rCa(a, b) {
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
        Zia(this, [a])
        return $ia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = $ia(this, d), c.push(d))
        })
        Zia(this, c)
        return b
      }
      qb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Fa()
        let c, d
        aja(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new wha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Yt(a)
      }
      Fa() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Yt(c).isLoaded() || (this.rCa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.qa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          bja(this, a)
        }
      }
      WYa(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var dja = new _.cja()
    dja.WYa(!0)
    dja.vDa(new _.Ye())
    _.Tba(dja)
    ;(new _.Cha(dja)).init()
    _.xda()
    var eja = _.Cf(_.vd('hxvedd'), !1)
    switch (_.Cf(_.vd('dLc0B'), !1) ? 2 : eja ? 1 : 0) {
      case 2:
        ;(0, _.Gd)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.Gd)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.Gd)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.lc) {
        if (!_.mc) return
        _.Tba(_.mc())
      }
      _.lc.oDa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
