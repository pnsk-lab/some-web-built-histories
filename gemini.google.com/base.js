// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.70rBwEp3gnc.2018.O/am=IxwExIBA6zcE-QQAAYA3wA/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk3ISfekcHzC1Q8HttrMYDmkZmdPpA/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.gqyTk43N3o0.libheifWasm.O%3A%3BBardChatUi.SFkkvnboRCM.loadC2PAExtractorWasm.O%3A%3BBardChatUi.EBsT_8qxFvQ.loadWasmSipCoca.O%3A%3B
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
    _.Ga = function (a, b) {
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
    _.Ka = function (a, b, c) {
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
    _.Na = function () {
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
    _.Va = function (a) {
      return a != null && a[_.Ta] === _.Ua
    }
    _.Za = function (a, b) {
      return b === void 0
        ? a.Nb !== _.Ya && !!(2 & (a.Sg[_.Qa] | 0))
        : !!(2 & b) && a.Nb !== _.Ya
    }
    _.Gaa = function (a, b) {
      a.Nb = b ? _.Ya : void 0
    }
    _.Haa = function (a) {
      return a
    }
    _.$a = function (a) {
      a.RLd = !0
      return a
    }
    _.fb = function (a) {
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
      _.gb = b
      _.hb = (a - b) / 4294967296 >>> 0
    }
    _.ib = function (a) {
      if (a < 0) {
        _.Kaa(-a)
        const [b, c] = _.Laa(_.gb, _.hb)
        _.gb = b >>> 0
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
          _.gb = Number(a & BigInt(4294967295)) >>> 0,
          _.hb = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        const b = +(a[0] === '-')
        _.hb = _.gb = 0
        const c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          const f = Number(a.slice(d, e))
          _.hb *= 1E6
          _.gb = _.gb * 1E6 + f
          _.gb >= 4294967296 &&
            (_.hb += Math.trunc(_.gb / 4294967296), _.hb >>>= 0, _.gb >>>= 0)
        }
        if (b) {
          const [d, e] = _.Laa(_.gb, _.hb)
          _.gb = d
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
      return _.jb(_.gb, _.hb)
    }
    _.Waa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) || (_.ib(a), a = _.Maa(_.gb, _.hb))
      return a
    }
    _.Xaa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) ? a = String(a) : (_.ib(a), a = _.jb(_.gb, _.hb))
      return a
    }
    _.Yaa = function (a) {
      return (0, _.tb)(a) ? _.fb(_.Waa(a)) : _.fb(_.Xaa(a))
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
      if ((0, _.tb)(b) && b >= 0) return _.fb(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Na() ? _.fb((0, _.ub)(64, BigInt(a))) : _.fb(Vaa(a))
    }
    _.aba = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.fb((0, _.ub)(64, a))
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
      if (_.Va(a)) return a
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
      _.Sa(a.Sg)
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
    _.Cb = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.zb(_.Ab), g
      !e && f && (g = a[f]) && g.cRa(iba)
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
        let R = a[I]
        if (R != null && (R = c(R, d)) != null) {
          if (z && I >= g) {
            const aa = I - A
            var M = void 0
            ;((M = b) != null ? M : b = {})[aa] = R
          } else f[I] = R
        }
      }
      if (t) {
        for (let R in t) {
          M = t[R]
          if (M == null || (M = c(M, d)) == null) continue
          h = +R
          let aa
          if (z && !Number.isNaN(h) && (aa = h + A) < g) f[aa] = M
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[R] = M
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.zb(_.Ab) && (a = _.gba(a)) && 'function' == typeof _.kba &&
        a instanceof _.kba && (f[_.Ab] = a.ha())
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
            return a.length === 0 && b & 1 ? void 0 : _.Cb(a, b, _.Eb)
          }
          if (_.Va(a)) return mba(a)
          if (a instanceof _.Gb) return _.Hb(a)
          if (a instanceof _.Ib) {
            return a = a.size !== 0 ? a.o2a(lba) : void 0, a
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
      a = a.Sg
      return _.Cb(a, a[_.Qa] | 0, _.Eb)
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
      if (_.Va(a)) return vba(a)
      if (a instanceof _.Ib) {
        b = a.a_
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.o2a())
        if (a.U5) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Va(e)
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
      a.rXa = _.Ya
      return a
    }
    vba = function (a) {
      const b = a.Sg, c = b[_.Qa] | 0
      return _.Za(a, c) ? a : _.yba(a, b, c) ? _.xba(a, b) : _.Jb(b, c)
    }
    _.Jb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Cb(a, b, wba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.yb = function (a) {
      const b = a.Sg, c = b[_.Qa] | 0
      return _.Za(a, c)
        ? _.yba(a, b, c) ? _.xba(a, b, !0) : new a.constructor(_.Jb(b, c, !1))
        : a
    }
    _.Kb = function (a) {
      if (a.Nb !== _.Ya) return !1
      var b = a.Sg
      b = _.Jb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Sg = b
      _.Gaa(a, !1)
      a.rXa = void 0
      return !0
    }
    _.Lb = function (a) {
      if (!_.Kb(a) && _.Za(a, a.Sg[_.Qa] | 0)) throw Error()
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
    _.zba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Pb(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Qa] = b),
            Object.freeze(a))
        : (g === 2 && _.Pb(b) &&
          (a = [...a], v = 0, b = _.Qb(b, d), d = _.Ob(c, d, e, a, f)),
          _.Pb(b) || (t || (b |= 16), b !== v && (a[_.Qa] = b)))
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
    _.Pb = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Tb = function (a, b, c, d, e) {
      _.Lb(a)
      const f = a.Sg
      _.Ob(
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
          (f !== 0 && (c = _.Ob(b, c, f, void 0, e)), f = h)
      }
      a.set(d, f)
      return f
    }
    _.Fba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.Za(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.Kb(a) && (b = a.Sg, c = b[_.Qa] | 0)
      a = _.Aba(b, e, g)
      var z = a === _.Sb ? 7 : a[_.Qa] | 0, A = _.Bba(z, c)
      if (t = !(4 & A)) {
        var I = a, M = c
        const R = !!(2 & A)
        R && (M |= 2)
        let aa = !R, ea = !0, la = 0, Ha = 0
        for (; la < I.length; la++) {
          const Ia = _.cba(I[la], d, !1, M)
          if (Ia instanceof d) {
            if (!R) {
              const Wa = _.Za(Ia)
              aa && (aa = !Wa)
              ea && (ea = Wa)
            }
            I[Ha++] = Ia
          }
        }
        Ha < la && (I.length = Ha)
        A |= 4
        A = ea ? A & -4097 : A | 4096
        A = aa ? A | 8 : A & -9
      }
      A !== z && (a[_.Qa] = A, 2 & A && Object.freeze(a))
      if (
        v && !(8 & A ||
          !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & A || !(16 & A) && 32 & c)))
      ) {
        _.Pb(A) && (a = [...a], A = _.Qb(A, c), c = _.Ob(b, c, e, a, g))
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
    _.Qb = function (a, b) {
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
        _.Fa(d) ? _.Xb.apply(null, d) : _.Vb(d)
      }
    }
    _.Yb = function () {
      this.xQ = this.xQ
      this.uba = this.uba
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
      this.Xh = null
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
      this.removed = this.kha = !1
    }
    _.cc = function (a, b, c) {
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
    _.fc = function (a, b) {
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
      _.ic && _.ic.Fa()
    }
    _.oc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Qba] = a
    }
    _.pc = function () {
      _.Yb.call(this)
      this.PQ = new _.hc(this)
      this.VPc = this
      this.Sqb = null
    }
    _.rc = function (a, b) {
      let c = a
      b && (c = (0, _.qc)(a, b))
      c = _.rc.Nmc(c)
      _.rc.ALc
        ? setTimeout(c, 0)
        : (c = _.rc.mjd(c), _.rc.M7b || (_.rc.M7b = _.rc.L2c()), _.rc.M7b(c))
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
      this.kb = a
      this.Wa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.mb = this.Fa = !1
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
      return new _.wc(_.xc, a)
    }
    _.$ba = function (a) {
      return a instanceof _.wc
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
    _.Gc = function (a, b = cca) {
      if (_.Bc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Dc && d.Cm(a)) return _.Ac(a)
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
          if (c instanceof _.wc) throw new _.Sc('TrustedResourceUrl', 0)
          _.Rc(a, [])
          b = _.Kc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.wc)) throw new _.Sc(typeof c, 1)
          _.Rc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Pc(a, c)
          break
        case 2:
          if (c instanceof _.wc) throw new _.Sc('TrustedResourceUrl', 2)
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
      ;(c == null ? 0 : c.Gfd) || nca(a)
    }
    _.Zc = function (a, b, c) {
      a.src = _.zc(b)
      ;(c == null ? 0 : c.Gfd) || nca(a)
    }
    _.$c = function (a, b) {
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
      return 'function' == typeof _.cd && a instanceof _.cd
    }
    _.tca = function (a) {
      if (_.sca(a)) return a.ha
      throw Error('Z')
    }
    _.dd = function (a, b, c) {
      return a.parseFromString(_.Oc(b), c)
    }
    _.fd = function (a, b) {
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
      if (b == null ? 0 : b.LNd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.EYa) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.MNd) {
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
        const c = b.iPa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.md = function (a) {
      return _.Lca.sanitize(a)
    }
    _.Mca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        Z2a: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.od = function (a, ...b) {
      if (b.length === 0) return _.yc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.yc(c)
    }
    _.pd = function (a, b) {
      a = _.Mca(_.zc(a).toString())
      return _.Nca(a.Z2a, a.params, a.fragment, b)
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
      const c = a.Z2a.slice(-1) === '/' ? '' : '/'
      b = a.Z2a + c + encodeURIComponent(b)
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
      var c = b || _.qd()
      const d = c.If()
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
      _.Yb.call(this)
      this.ha = a
      this.qa = b
      this.oa = []
      this.ma = []
      this.na = []
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
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.zd(b)))
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
      const b = oda(_.Ad(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Oba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.sta(e, g)
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
      let e = c.e8 || ''
      !c.JJd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('va')
      }
      const f = c.yMd || _.Cd
      a = fda(a)
      b = new f(
        _.wca(hda('', a), {
          Wmb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.wQd || a && a.hasAttribute('crossorigin')
      a = c.lJd || a && a.getAttribute('crossorigin')
      d && (b.NHa = d)
      a && (b.sva = a)
      c.MHa && (b.MHa = c.MHa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.lc()
      g.oa = b
      g.Scc(!0)
      _.Dd = c.CId === 'BATCH' ? lda : (h) => Promise.resolve(g.load(h))
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
    _.Id = function (a) {
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
    _.Jd = function () {
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
                var M = g.handleEvent
                if (typeof M === 'function') return M.apply(g, arguments)
              })
              if (v) {
                h && h.once && (v = function (M) {
                  return function () {
                    if (typeof M !== 'function') throw Error('l`' + M)
                    delete A[I]
                    return M.apply(this, arguments)
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
      Kd = function (a, b) {
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
        typeof c === 'function' && (_.Jd = c)
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
      b['\u1d43\u1d9cstart'] = _.Jd = function (e) {
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
        var f = (0, _.Jd)(e)
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
      Kd('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      Kd('queueMicrotask', b)
      Kd('requestAnimationFrame', b)
      Kd('requestIdleCallback', b)
      Kd('setInterval', b)
      Kd('setTimeout', b)
      Kd('HTMLCanvasElement.prototype.toBlob', b)
      Kd('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      Kd('FileSystemEntry.prototype.getParent', a(0, 1))
      Kd('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      Kd('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      Kd('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      Kd('XMLHttpRequest.prototype.send', function (d) {
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
        var d = c.nwb
        c = c.bnb
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
        b = d.nwb
        d = d.bnb
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
        if (a.size <= b.size) a = { nwb: a.keys(), bnb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { nwb: b, bnb: a }
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
    _.Fa = function (a) {
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
        return _.Id(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.Id(function* () {
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
        return _.Id(function* () {
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
    _.Xd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Yd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Zd = function (a, b, c) {
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
    _.he.Izd = !1
    _.he.Jzd = !1
    _.he.Kzd = !1
    _.he.Lzd = !1
    _.he.Mzd = !1
    _.he.Nzd = !1
    _.he.CHROME = Iea
    _.he.Uea = _.be
    _.he.oZ = Eea
    _.he.mDb = _.ae
    _.he.V4a = Gea
    _.he.W4a = Fea
    _.he.H6a = _.pea
    _.he.RI = Jea
    _.he.SLd = vaa
    _.he.WLd = waa
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
    _.Ua = {}
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
    _.Fb = _.$a((a) =>
      _.db ? a >= $ea && a <= afa : a[0] === '-' ? Jaa(a, bfa) : Jaa(a, cfa)
    )
    bfa = Number.MIN_SAFE_INTEGER.toString()
    $ea = _.db ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    cfa = Number.MAX_SAFE_INTEGER.toString()
    afa = _.db ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.gb = 0
    _.hb = 0
    var Raa = void 0
    var Uaa
    _.ne = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.ub = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.tb = Number.isSafeInteger
    _.ob = Number.isFinite
    _.sb = Math.trunc
    Uaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var dfa, kfa
    dfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    kfa = function (a) {
      if (a.a_ & 2) throw Error('C')
    }
    _.Ib = class extends dfa {
      constructor(a, b, c = dba, d = dba) {
        super()
        this.a_ = a[_.Qa] | 0
        this.U5 = b
        this.OAa = c
        this.Azb = this.U5 ? eba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.a_)
          super.set(g, h)
        }
      }
      o2a(a) {
        return _.Eaa(Array.from(super.entries(), a))
      }
      clear() {
        kfa(this)
        super.clear()
      }
      delete(a) {
        kfa(this)
        return super.delete(this.OAa(a, !0, !1))
      }
      entries() {
        if (this.U5) {
          var a = super.keys()
          a = new Rea(a, fba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.U5) {
          var a = super.keys()
          a = new Rea(a, _.Ib.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.U5
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        kfa(this)
        a = this.OAa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.Azb(b, !0, !0, this.U5, !1, this.a_))
      }
      Mmd(a) {
        const b = this.OAa(a[0], !1, !0)
        a = a[1]
        a = this.U5
          ? a === void 0 ? null : a
          : this.Azb(a, !1, !0, void 0, !1, this.a_)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.OAa(a, !1, !1))
      }
      get(a) {
        a = this.OAa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.U5
          return c
            ? (c = this.Azb(b, !1, !0, c, this.CSc, this.a_),
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
    _.oe = Kea ? structuredClone : (a) => _.Cb(a, 0, _.Eb)
    _.lfa = _.fb(0)
    _.pe = function (a, b, c, d, e) {
      b = _.Rb(a.Sg, b, c, e)
      if (b !== null || d && a.rXa !== _.Ya) return b
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
    _.se = function (a, b, c) {
      return _.re(a, b) === c ? c : -1
    }
    _.re = function (a, b, c) {
      a = a.Sg
      return _.Eba(_.Dba(a), a, void 0, b, c)
    }
    _.te = function (a, b, c, d) {
      return _.Taa(_.pe(a, b, c, d))
    }
    _.ue = function (a, b, c, d) {
      return _.rb(_.pe(a, b, c, d))
    }
    _.ve = function (a, b, c = 0, d) {
      let e
      return (e = _.ue(a, b, d)) != null ? e : c
    }
    _.Ub = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('N')
      return new a(_.Faa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Sg = _.sba(a, b, c, 2048)
      }
      toJSON() {
        return _.pba(this)
      }
      serialize(a) {
        return JSON.stringify(_.pba(this, a))
      }
      clone() {
        const a = this.Sg, b = a[_.Qa] | 0
        return _.yba(this, a, b)
          ? _.xba(this, a, !0)
          : new this.constructor(_.Jb(a, b, !1))
      }
      isImmutable() {
        return _.Za(this)
      }
    }
    _.l.prototype.naa = _.ba(0)
    _.l.prototype[_.Ta] = _.Ua
    _.l.prototype.toString = function () {
      return this.Sg.toString()
    }
    _.mfa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.nfa = []
    _.ofa = []
    _.pfa = !1
    _.qfa = function (a) {
      _.nfa[_.nfa.length] = a
      if (_.pfa) {
        for (let b = 0; b < _.ofa.length; b++) {
          a((0, _.qc)(_.ofa[b].wrap, _.ofa[b]))
        }
      }
    }
    _.Yb.prototype.xQ = !1
    _.Yb.prototype.isDisposed = function () {
      return this.xQ
    }
    _.Yb.prototype.dispose = function () {
      this.xQ || (this.xQ = !0, this.Db())
    }
    _.Yb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Yb.prototype.Lb = function (a) {
      this.addOnDisposeCallback(_.Sd(_.Vb, a))
    }
    _.Yb.prototype.addOnDisposeCallback = function (a, b) {
      this.xQ
        ? b !== void 0 ? a.call(b) : a()
        : (this.uba || (this.uba = []), b && (a = a.bind(b)), this.uba.push(a))
    }
    _.Yb.prototype.Db = function () {
      if (this.uba) { for (; this.uba.length;) this.uba.shift()() }
    }
    _.Zb = function (a, b) {
      this.type = 'function' == typeof _.rfa && a instanceof _.rfa
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
    var tfa
    _.sfa = !(!_.fa.navigator || !_.fa.navigator.maxTouchPoints)
    tfa = function () {
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
      this.Xh = a
      a.defaultPrevented && _.$b.Yb.preventDefault.call(this)
    }
    _.$b.prototype.stopPropagation = function () {
      _.$b.Yb.stopPropagation.call(this)
      this.Xh.stopPropagation
        ? this.Xh.stopPropagation()
        : this.Xh.cancelBubble = !0
    }
    _.$b.prototype.preventDefault = function () {
      _.$b.Yb.preventDefault.call(this)
      const a = this.Xh
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.$b.prototype.Qxa = _.ba(1)
    _.ufa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.xe = function (a) {
      return !(!a || !a[_.ufa])
    }
    var Hba = 0
    var vfa = function (a) {
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
      const g = wfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.kha = !1))
        : (b = new _.Iba(b, this.src, f, !!d, e), b.kha = c, a.push(b))
      return b
    }
    _.hc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = wfa(e, b, c, d)
      return b > -1
        ? (vfa(e[b]),
          _.Ba(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var xfa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Da(a.listeners[c], b)
      d &&
        (vfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.hc.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, vfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.hc.prototype.R9 = _.ba(3)
    _.hc.prototype.Ija = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = wfa(a, b, c, d))
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
    var wfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var yfa, zfa, Afa, Cfa, Dfa, Efa, Ffa, Hfa
    yfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    zfa = {}
    Afa = 0
    _.ze = function (a, b, c, d, e) {
      if (d && d.once) return _.ye(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ze(a, b[f], c, d, e)
        return null
      }
      c = _.Bfa(c)
      return _.xe(a)
        ? a.listen(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : Cfa(a, b, c, !1, d, e)
    }
    Cfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('Q')
      const g = _.Qd(e) ? !!e.capture : !!e
      let h = _.Ae(a)
      h || (a[yfa] = h = new _.hc(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = Dfa()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        tfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(Efa(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('R')
      Afa++
      return c
    }
    Dfa = function () {
      const a = Ffa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.ye = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ye(a, b[f], c, d, e)
        return null
      }
      c = _.Bfa(c)
      return _.xe(a)
        ? a.Ze(b, c, _.Qd(d) ? !!d.capture : !!d, e)
        : Cfa(a, b, c, !0, d, e)
    }
    _.Ee = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Ee(a, b[f], c, d, e)
      } else {d = _.Qd(d) ? !!d.capture : !!d,
          c = _.Bfa(c),
          _.xe(a)
            ? a.Mf(b, c, d, e)
            : a && (a = _.Ae(a)) && (b = a.Ija(b, c, d, e)) && _.Fe(b)}
    }
    _.Fe = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.xe(b)) return b.BT(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Efa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Afa--
      ;(c = _.Ae(b))
        ? (xfa(c, a), c.ha == 0 && (c.src = null, b[yfa] = null))
        : vfa(a)
      return !0
    }
    Efa = function (a) {
      return a in zfa ? zfa[a] : zfa[a] = 'on' + a
    }
    _.Gfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.kha && _.Fe(a)
      return c.call(d, b)
    }
    Ffa = function (a, b) {
      return a.removed ? !0 : _.Gfa(a, new _.$b(b, this))
    }
    _.Ae = function (a) {
      a = a[yfa]
      return a instanceof _.hc ? a : null
    }
    Hfa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Bfa = function (a) {
      if (typeof a === 'function') return a
      a[Hfa] || (a[Hfa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Hfa]
    }
    _.qfa(function (a) {
      Ffa = a(Ffa)
    })
    var Nba
    _.Ifa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('S`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Oba((e) => {
            e.sta(a.ha, d)
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
        _.Ifa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Qba = Symbol('T')
    _.Ud(_.pc, _.Yb)
    _.pc.prototype[_.ufa] = !0
    _.k = _.pc.prototype
    _.k.bR = function () {
      return this.Sqb
    }
    _.k.To = function (a) {
      this.Sqb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.ze(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.Ee(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.bR()
      if (c) { for (b = []; c; c = c.bR()) b.push(c) }
      c = this.VPc
      const d = a.type || a
      if (typeof a === 'string') a = new _.Zb(a, c)
      else if (a instanceof _.Zb) a.target = a.target || c
      else {
        var e = a
        a = new _.Zb(d, c)
        _.fc(a, e)
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
    _.k.Db = function () {
      _.pc.Yb.Db.call(this)
      this.removeAllListeners()
      this.Sqb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.PQ.add(String(a), b, !1, c, d)
    }
    _.k.Ze = function (a, b, c, d) {
      return this.PQ.add(String(a), b, !0, c, d)
    }
    _.k.Mf = function (a, b, c, d) {
      return this.PQ.remove(String(a), b, c, d)
    }
    _.k.BT = function (a) {
      return xfa(this.PQ, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.PQ ? this.PQ.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.PQ.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.kha && this.BT(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.R9 = _.ba(2)
    _.k.Ija = function (a, b, c, d) {
      return this.PQ.Ija(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.PQ.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.He =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Sba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      Jfa = class {
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
    _.rc.mjd = _.He
    _.rc.ALc = !1
    _.rc.L2c = function () {
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
    _.rc.Nmc = (a) => a
    _.qfa(function (a) {
      _.rc.Nmc = a
    })
    var Kfa = class {
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
      Tba = new Jfa(() => new Lfa(), (a) => a.reset()),
      Lfa = class {
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
    var Mfa, Uba, Rba, Nfa
    Uba = !1
    Rba = new Kfa()
    _.Ie = (a, b) => {
      Mfa || Nfa()
      Uba || (Mfa(), Uba = !0)
      Rba.add(a, b)
    }
    Nfa = () => {
      const a = Promise.resolve(void 0)
      Mfa = () => {
        a.then(Vba)
      }
    }
    _.Ke = function () {}
    var Ofa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Pfa, Qfa, Zfa, Wfa, Sfa, dga, bga, $fa, aga, ega, cga, fga
    _.Ne = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.Aa = !1
      if (a != _.Ke) {
        try {
          const b = this
          a.call(void 0, function (c) {
            _.Me(b, 2, c)
          }, function (c) {
            _.Me(b, 3, c)
          })
        } catch (b) {
          _.Me(this, 3, b)
        }
      }
    }
    Pfa = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Pfa.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    Qfa = new Jfa(function () {
      return new Pfa()
    }, function (a) {
      a.reset()
    })
    _.Rfa = function (a, b, c) {
      const d = Qfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.Tfa = function (a, b, c) {
      Sfa(a, b, c, null) || _.Ie(_.Sd(b, a))
    }
    _.Ufa = function (a) {
      return new _.Ne(function (b, c) {
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
            _.Tfa(h, _.Sd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Pe = function () {
      let a, b
      const c = new _.Ne(function (d, e) {
        a = d
        b = e
      })
      return new Vfa(c, a, b)
    }
    _.Ne.prototype.then = function (a, b, c) {
      return Wfa(
        this,
        (0, _.He)(typeof a === 'function' ? a : null),
        (0, _.He)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Ne.prototype.$goog_Thenable = !0
    var Yfa = function (a, b, c, d) {
      _.Xfa(a, _.Rfa(b || _.Ke, c || null, d))
    }
    _.Ne.prototype.finally = function (a) {
      a = (0, _.He)(a)
      return new _.Ne((b, c) => {
        Yfa(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Ne.prototype.ha = function (a, b) {
      return Wfa(this, null, (0, _.He)(a), b)
    }
    _.Ne.prototype.catch = _.Ne.prototype.ha
    _.Ne.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Qe(a)
        _.Ie(function () {
          Zfa(this, b)
        }, this)
      }
    }
    Zfa = function (a, b) {
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
              ? Zfa(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : $fa(c),
                aga(c, e, 3, b)))
          }
          a.na = null
        } else _.Me(a, 3, b)
      }
    }
    _.Xfa = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || bga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    Wfa = function (a, b, c, d) {
      const e = _.Rfa(null, null, null)
      e.child = new _.Ne(function (f, g) {
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
      _.Xfa(a, e)
      return e.child
    }
    _.Ne.prototype.Ea = function (a) {
      this.ka = 0
      _.Me(this, 2, a)
    }
    _.Ne.prototype.Fa = function (a) {
      this.ka = 0
      _.Me(this, 3, a)
    }
    _.Me = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('U')),
          a.ka = 1,
          Sfa(c, a.Ea, a.Fa, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            bga(a),
            b != 3 || c instanceof _.Qe || cga(a, c)))
    }
    Sfa = function (a, b, c, d) {
      if (a instanceof _.Ne) return Yfa(a, b, c, d), !0
      if (Ofa(a)) return a.then(b, c, d), !0
      if (_.Qd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return dga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    dga = function (a, b, c, d, e) {
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
    bga = function (a) {
      a.Aa || (a.Aa = !0, _.Ie(a.Da, a))
    }
    $fa = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Ne.prototype.Da = function () {
      let a
      for (; a = $fa(this);) aga(this, a, this.ka, this.Ba)
      this.Aa = !1
    }
    aga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, ega(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : ega(b, c, d)
        } catch (e) {
          fga.call(null, e)
        }}
      Sba(Qfa, b)
    }
    ega = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    cga = function (a, b) {
      a.qa = !0
      _.Ie(function () {
        a.qa && fga.call(null, b)
      })
    }
    fga = _.ha
    _.Qe = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Ud(_.Qe, _.da)
    _.Qe.prototype.name = 'cancel'
    var Vfa = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var mga, lga, hga, iga
    _.sc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.sc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Aa--, b.Aa <= 0 && b.cancel())
        }
        this.kb ? this.kb.call(this.Wa, this) : this.Oa = !0
        this.ka || this.ha(new _.Re(this))
      }
    }
    _.sc.prototype.Sa = function (a, b) {
      this.Fa = !1
      gga(this, a, b)
    }
    var gga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        hga(a)
      },
      jga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new iga(a)
          a.Oa = !1
        }
      }
    _.sc.prototype.callback = function (a) {
      jga(this)
      gga(this, !0, a)
    }
    _.sc.prototype.ha = function (a) {
      jga(this)
      gga(this, !1, a)
    }
    _.Te = function (a, b, c) {
      return _.Se(a, b, null, c)
    }
    _.sc.prototype.finally = function (a) {
      return _.kga(
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
      e && hga(a)
      return a
    }
    _.sc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Ne(function (g, h) {
        e = g
        d = h
      })
      _.Se(this, e, function (g) {
        g instanceof _.Re ? f.cancel() : d(g)
        return lga
      }, this)
      return f.then(a, b, c)
    }
    _.sc.prototype.$goog_Thenable = !0
    _.sc.prototype.ma = _.ba(4)
    _.sc.prototype.isError = function (a) {
      return a instanceof Error
    }
    mga = function (a) {
      return _.$d(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    lga = {}
    hga = function (a) {
      if (a.Da && a.ka && mga(a)) {
        var b = a.Da, c = nga[b]
        c && (_.fa.clearTimeout(c.ha), delete nga[b])
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
            g === lga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Ofa(b) ||
              typeof _.fa.Promise === 'function' && b instanceof _.fa.Promise
            ) d = !0, a.Fa = !0
          } catch (t) {
            b = t, a.qa = !0, mga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.qc)(a.Sa, a, !0),
          d = (0, _.qc)(a.Sa, a, !1),
          b instanceof _.sc ? (_.Se(b, g, d), b.mb = !0) : b.then(g, d))
      c && (b = new oga(b), nga[b.ha] = b, a.Da = b.ha)
    }
    _.kga = function (a) {
      const b = new _.sc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    iga = function (a) {
      _.da.call(this)
      this.XA = a
    }
    _.Ud(iga, _.da)
    iga.prototype.message = 'Deferred has already fired'
    iga.prototype.name = 'AlreadyCalledError'
    _.Re = function (a) {
      _.da.call(this)
      this.XA = a
    }
    _.Ud(_.Re, _.da)
    _.Re.prototype.message = 'Deferred was canceled'
    _.Re.prototype.name = 'CanceledError'
    var oga = function (a) {
      this.ha = _.fa.setTimeout((0, _.qc)(this.throwError, this), 0)
      this.NQ = a
    }
    oga.prototype.throwError = function () {
      delete nga[this.ha]
      throw this.NQ
    }
    var nga = {}
    var rga, sga, tga
    _.pga = function (a, b) {
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
    rga = function (a) {
      var b = _.qga
      const c = []
      a = _.Ve(a)
      let d
      a.gA[b] && (d = a.gA[b][0])
      d && c.push(d)
      a = a.Ya || []
      for (let e = 0; e < a.length; e++) {
        a[e].gA[b] && (d = a[e].gA[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.Xe = function (a, b) {
      for (var c = a; c; c = c.Wa) {
        if (c.isDisposed()) throw new _.mfa([b])
        if (c.gA[b]) return c.gA[b][0]
        if (c.wc[b]) break
      }
      if (c = a.wb[b]) {
        c = c(a)
        if (c == null) throw Error('W`' + b)
        _.We(a, b, c)
        return c
      }
      return null
    }
    _.We = function (a, b, c) {
      if (a.isDisposed()) _.Vb(c)
      else {
        a.gA[b] = [c, !0]
        var d = sga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Wb[b]
        b instanceof _.Ge && _.oc(b, c.constructor)
      }
    }
    sga = function (a, b, c) {
      const d = [], e = a.Pa[c]
      e && (_.saa(e, function (f) {
        _.pga(f.appContext, b) && (d.push(f.d), _.Da(e, f))
      }),
        e.length == 0 && delete a.Pa[c])
      return d
    }
    tga = function (a, b) {
      a.Pa && _.cc(a.Pa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Ye = class extends _.Yb {
      constructor() {
        super()
        this.gA = {}
        this.Wb = {}
        this.wb = {}
        this.Pa = {}
        this.Sa = {}
        this.wc = {}
        this.yb = new _.pc()
        this.Od = !0
        this.Wa = null
        const a = _.Ve(this)
        this != a && (a.Ya ? a.Ya.push(this) : a.Ya = [this])
      }
      get(a) {
        let b = _.Xe(this, a)
        if (b == null) throw Error('V`' + a)
        return b
      }
      Db() {
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
        for (const b in this.gA) {
          a = this.gA[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.gA = null
        this.Od && this.yb.dispose()
        tga(this, this)
        this.Pa = null
        _.Vb(this.Zd)
        this.wc = this.Zd = null
        super.Db()
      }
      ws() {
        return this.yb
      }
    }
    _.Ye.prototype.Nb = _.ba(7)
    _.Ye.prototype.kb = _.ba(6)
    _.Ye.prototype.rb = _.ba(5)
    _.qga = new _.Ge('n73qwf', 'n73qwf')
    _.tc.prototype.clone = function () {
      return new _.tc(this.x, this.y)
    }
    _.tc.prototype.equals = function (a) {
      return a instanceof _.tc && _.Ze(this, a)
    }
    _.Ze = function (a, b) {
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
    _.$e = function (a, b) {
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
    var uga = globalThis.trustedTypes, Wba = uga, Yba
    _.wc = class {
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
    _.vga = _.Ac('about:blank')
    _.Hc = _.Ac('about:invalid#zClosurez')
    var Dc, cca, eca, wga, gca
    Dc = class {
      constructor(a) {
        this.Cm = a
      }
    }
    _.af = {
      rGd: Ec('tel'),
      dAd: new Dc((a) => /^callto:\+?\d*$/i.test(a)),
      PFd: new Dc((a) => a.indexOf('ssh://') === 0),
      nFd: Ec('rtsp'),
      jsc: Ec('data'),
      Ywc: Ec('http'),
      Zwc: Ec('https'),
      EXTENSION: new Dc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      Fvc: Ec('ftp'),
      IFc: new Dc((a) => /^[^:]*([/?#]|$)/.test(a)),
      Vzc: Ec('mailto'),
      xDd: Ec('intent'),
      PDd: Ec('market'),
      ADd: Ec('itms'),
      BDd: Ec('itms-appss'),
      CDd: Ec('itms-services'),
      sBd: Ec('fb-messenger'),
      pHd: Ec('whatsapp'),
      HFd: new Dc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      LFd: Ec('sms'),
      gHd: Ec('vnd.youtube'),
      XCd: Ec('googlehome'),
      YCd: Ec('googlehomesdk'),
      LINE: Ec('line'),
    }
    cca = [_.af.jsc, _.af.Ywc, _.af.Zwc, _.af.Vzc, _.af.Fvc, _.af.IFc]
    eca = typeof URL === 'function'
    wga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
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
    _.bf = new _.Mc(_.xc, uga ? uga.emptyHTML : '')
    _.xga = {
      ICd: 0,
      cBd: 1,
      dBd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Sc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.xga[b]}`)
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
    _.yga = new _.lca(_.xc, uga ? uga.emptyScript : '')
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
    _.$ca = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.zga = Math.random() * 2147483648 | 0
    _.cf = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Aca = /^[a-z][a-z\d-]*$/i,
      Bca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Eca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Fca = ['action', 'formaction', 'href']
    _.Aga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Bga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Dga
    _.Cga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Dga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Ju: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Ju: 1 }
        : { Ju: 0 }
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
    _.Ega = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Fga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Gga = [
        ['A', new Map([['href', { Ju: 7 }]])],
        ['AREA', new Map([['href', { Ju: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Ju: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Ju: 5 }], ['srcset', { Ju: 6 }]])],
        ['IMG', new Map([['src', { Ju: 5 }], ['srcset', { Ju: 6 }]])],
        ['VIDEO', new Map([['src', { Ju: 5 }]])],
        ['AUDIO', new Map([['src', { Ju: 5 }]])],
      ],
      Hga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Iga = [
        ['dir', {
          Ju: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Ju: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Ju: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Ju: 5 }],
        ['target', {
          Ju: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Jga = new _.df(new Set(Fga), new Map(Gga), new Set(Hga), new Map(Iga)),
      Kga = new _.df(
        new Set(Fga.concat(['BUTTON', 'INPUT'])),
        new Map(Gga),
        new Set(Hga.concat(['class', 'id', 'name'])),
        new Map(Iga.concat([['style', { Ju: 1 }]])),
      ),
      Lga = new _.df(
        new Set(
          Fga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Gga),
        new Set(
          Hga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Iga.concat([['style', { Ju: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Mga
    _.Nga = function (a, b, c) {
      b = Hca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Jca(g)
          ? (g = Ica(g), g = g === null ? 2 : _.Cga(a.oa, g) ? 1 : 2)
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
        } else if (Jca(d)) g = Mga(a, d, c)
        else throw Error('Z')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    Mga = function (a, b, c) {
      const d = Ica(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Dga(a.oa, h, d), f
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
          switch (e.Ju) {
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
                ? (e = { type: 2, attributeName: h, RTb: d },
                  f = _.Gca(t),
                  (e = a.ha(f, e)) && ld(c, h, e.toString()))
                : ld(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, RTb: d }
                f = []
                for (const v of t.split(',')) {
                  const [z, A] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, iPa: A })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Gca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), iPa: v.iPa })
                }
                ld(c, h, Kca(f))
              } else ld(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, RTb: d }
                f = _.Gca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.fca(e)
              e = f !== void 0 && wga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              ld(c, h, e)
          }
        }
      }
      return c
    }
    _.Oga = class {
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
        return _.zca(_.Nga(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Lca = new _.Oga(Jga)
    _.Pga = new _.Oga(Kga)
    _.Qga = new _.Oga(Lga)
    _.Rga = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { Ju: 4 })
      a.ha = new _.df(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.ff = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.df(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.Sga = class {
      constructor() {
        this.na = !1
        this.ha = Jga
      }
    }
    _.hf = class extends _.Sga {
      build() {
        if (this.na) throw Error('ea')
        this.na = !0
        return new _.Oga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var Tga, Vga, gha, hha, iha
    _.qd = function (a) {
      return a ? new _.jf(_.lf(a)) : Uda || (Uda = new _.jf())
    }
    _.mf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.nf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.of = function (a, b) {
      _.cc(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : Tga.hasOwnProperty(d)
          ? a.setAttribute(Tga[d], c)
          : _.ia(d, 'aria-') || _.ia(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    Tga = {
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
    _.pf = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.uc(a.clientWidth, a.clientHeight)
    }
    _.qf = function (a) {
      return a ? a.defaultView : window
    }
    _.Wga = function (a, b) {
      const c = b[1], d = _.Uga(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.of(d, c))
      b.length > 2 && Vga(a, d, b, 2)
      return d
    }
    Vga = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Fa(f) || _.Qd(f) && f.nodeType > 0
          ? e(f)
          : _.Xd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ea(f)
              : f,
            e,
          )
      }
    }
    _.rf = function (a) {
      return _.Uga(document, a)
    }
    _.Uga = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.Xga = function (a, b) {
      Vga(_.lf(a), a, arguments, 1)
    }
    _.sf = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.Yga = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.Zga = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.$ga = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.tf = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.aha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.bha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.dha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.cha(a.firstChild, !0)
    }
    _.eha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.cha(a.nextSibling, !0)
    }
    _.fha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.cha(a.previousSibling, !1)
    }
    _.cha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.uf = function (a) {
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
    _.lf = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.xf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.sf(a), a.appendChild(_.lf(a).createTextNode(String(b)))
    }
    gha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    hha = { IMG: ' ', BR: '\n' }
    _.jha = function (a) {
      return a.hasAttribute('tabindex') && iha(a)
    }
    _.yf = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.kha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || iha(a))
        : _.jha(a)
    }
    iha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.zf = function (a) {
      const b = []
      _.lha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.lha = function (a, b, c) {
      if (!(a.nodeName in gha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in hha) b.push(hha[a.nodeName])
        else for (a = a.firstChild; a;) _.lha(a, b, c), a = a.nextSibling
      }
    }
    _.jf = function (a) {
      this.rl = a || _.fa.document || document
    }
    _.k = _.jf.prototype
    _.k.hb = _.qd
    _.k.If = function () {
      return this.rl
    }
    _.k.Xa = function (a) {
      return _.mf(this.rl, a)
    }
    _.k.$ = _.jf.prototype.Xa
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.rl).getElementsByTagName(String(a))
    }
    _.k.XE = _.ba(9)
    _.k.Ub = _.ba(11)
    _.k.rc = _.ba(13)
    _.k.setProperties = _.of
    _.k.tj = function (a) {
      return _.pf(a || this.getWindow())
    }
    _.k.Hb = function (a, b, c) {
      return _.Wga(this.rl, arguments)
    }
    _.k.createElement = function (a) {
      return _.Uga(this.rl, a)
    }
    _.k.createTextNode = function (a) {
      return this.rl.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.rl.defaultView
    }
    _.k.Sn = _.ba(14)
    _.k.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.k.append = _.Xga
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
    _.k.dk = _.sf
    _.k.R0b = _.Yga
    _.k.Bza = _.Zga
    _.k.Aza = _.$ga
    _.k.removeNode = _.tf
    _.k.usb = _.aha
    _.k.getChildren = _.bha
    _.k.Vxa = _.dha
    _.k.jhb = _.eha
    _.k.gYb = _.fha
    _.k.isElement = _.uf
    _.k.isWindow = function (a) {
      return _.Qd(a) && a.window == a
    }
    _.k.Jja = _.vf
    _.k.contains = _.wf
    _.k.ohb = _.lf
    _.k.Vk = _.xf
    _.k.lx = _.yf
    _.k.Rw = _.kha
    _.k.dR = _.zf
    Pd = Pd || {}
    var mha = function () {
      _.Yb.call(this)
    }
    _.Ud(mha, _.Yb)
    mha.prototype.initialize = function () {}
    Tca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Tca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.qfa(function (a) {
      Tca.prototype.execute = a(Tca.prototype.execute)
    })
    Pd.v6a = Tca
    _.Ud(rd, _.Yb)
    rd.prototype.Aa = mha
    rd.prototype.ka = null
    rd.prototype.getId = function () {
      return this.qa
    }
    var nha = function (a, b, c) {
        a.oa.push(new Pd.v6a(b, c))
      },
      oha = function (a, b) {
        a.ma.push(new Pd.v6a(b, void 0))
      }
    rd.prototype.isLoaded = function () {
      return !!this.ka
    }
    rd.prototype.onLoad = function (a) {
      var b = new this.Aa()
      b.initialize(a())
      this.ka = b
      b = (b = pha(this.na, a())) || pha(this.oa, a())
      b || (this.ma.length = 0)
      return b
    }
    rd.prototype.onError = function (a) {
      ;(a = pha(this.ma, a)) && _.ha(Error('fa`' + a))
      this.na.length = 0
      this.oa.length = 0
    }
    var pha = function (a, b) {
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
    rd.prototype.Db = function () {
      rd.Yb.Db.call(this)
      _.Vb(this.ka)
    }
    Pd.u6a = rd
    var Af = {
      ERROR: 'error',
      IDLE: 'idle',
      cra: 'active',
      yLc: 'userIdle',
      xLc: 'userActive',
    }
    _.k = Uca.prototype
    _.k.Scc = function () {}
    _.k.I_a = function () {}
    _.k.OEa = function () {}
    _.k.sta = function () {
      throw Error('ga')
    }
    _.k.LDa = function () {
      throw Error('ha')
    }
    _.k.UXb = function () {
      return this.qa
    }
    _.k.VEa = function (a) {
      this.qa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.b4b = function () {
      return !1
    }
    var qha, rha
    qha = function (a, b) {
      const c = b.styleSheets.length, d = Sca(a, new _.jf(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    rha = function (a) {
      return _.Zd(rga(a), (b) => b.ohb())
    }
    _.sha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.Tda('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.qa
            if (b) {
              if (b = rha(b), b.length == 0) qha(a, document)
              else for (let c of b) qha(a, c)
            } else qha(a, document)
          }
        })
      }
    }
    var tha, uha, wha
    tha = function (a) {
      throw Error('ia`' + a.ka)
    }
    uha = function (a, b) {
      return new TypeError(
        'ja`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.Cf = function (a) {
      const b = _.Bf(a)
      b === null && tha(a)
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
      throw uha(a, 'string')
    }
    _.vha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw uha(a, 'boolean')
    }
    _.Ef = function (a, b) {
      let c
      return (c = _.vha(a)) != null ? c : b
    }
    _.Ff = function (a, b) {
      let c
      return (c = wha(a)) != null ? c : b
    }
    wha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw uha(a, 'number')
    }
    _.yha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.xha(a, b)
    }
    _.xha = function (a, b) {
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
          var b = wha(this)
          b === null && tha(this)
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
          var b = _.yha(this)
          b === null && tha(this)
          return b
        }
        b = _.yha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && tha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.sd(c + d, b[d])
          return a
        }
        throw uha(this, 'object')
      }
    }
    var Yca
    Yca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.zha = /#|$/
    var Aha,
      gda,
      Gf,
      Dha,
      Gha,
      Eha,
      Fha,
      Hha,
      Iha,
      Jha,
      Kha,
      oda,
      Lha,
      Bha,
      Cha,
      Mha,
      Nha
    _.Ad = function (a, b = !0) {
      const c = Aha(a), d = new Bha(), e = _.ud(c)[5]
      _.cc(Cha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && Gf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Dha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.wd(6, c)) && _.ada(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Aha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    gda = function (a) {
      a = Aha(a)
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
    Dha = function (a, b) {
      a.ka = b
    }
    Gha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Eha(a)
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
          Fha(a) !== '' && c('wt'),
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
    Eha = function (a) {
      a = _.Hf(a, 'md')
      return !!a && a !== '0'
    }
    Fha = function (a) {
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
    Hha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Gf(a, 'exm', b.join(',')))
        : Gf(a, 'exm', null)
    }
    Iha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Gf(a, 'excm', b.join(',')))
        : Gf(a, 'excm', null)
    }
    Jha = function (a) {
      return (a = _.Hf(a, 'm')) ? a.split(',') : []
    }
    Kha = function (a, b) {
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
    Lha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Bha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Gha(this)
        const b = _.dda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Bha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Cha = {
      mFd: 'k',
      HAd: 'ck',
      ZDd: 'm',
      mBd: 'exm',
      kBd: 'excm',
      zzd: 'am',
      Fzd: 'amc',
      QDd: 'mm',
      jFd: 'rt',
      pDd: 'd',
      lBd: 'ed',
      OFd: 'sv',
      LAd: 'deob',
      bAd: 'cb',
      jAd: 'ccb',
      cAd: 'cbi',
      FFd: 'rs',
      tFd: 'sdch',
      wDd: 'im',
      MAd: 'dg',
      gBd: 'br',
      fBd: 'br-d',
      hBd: 'rb',
      zHd: 'zs',
      rHd: 'wt',
      rBd: 'ee',
      NFd: 'sm',
      METADATA: 'md',
      ZCd: 'gssmodulesetproto',
      dHd: 'ujg',
      cHd: 'sp',
      DFd: 'slk',
      QAd: 'dti',
      zDd: 'ic',
    }
    Mha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    Nha = RegExp('^[a-zA-Z0-9-_*]+$')
    var kda = null, jda = new Map()
    var mda = !1, nda = !1
    var Oha = (a) => {
        a = a.clone()
        Lha(a)
        Gf(a, 'dg', null)
        Gf(a, 'd', '0')
        Hha(a, null)
        Iha(a, null)
        return a
      },
      Pha = !0,
      Qha = (a, b, { cssRowKey: c, e8: d, D0: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!Nha.test(g)) throw Error('ka`' + g) }
        Gf(a, 'm', b.join(','))
        e && Kha(a, e)
        c && (Gf(a, 'ck', c), d ? Gf(a, 'rs', d) : Pha && (Pha = !1))
        if (f) {
          if (f != null && !Mha.test(f)) throw Error('la`' + f)
          Gf(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.xd(document.location.href) + a)
        return _.yc(a)
      },
      Rha = (
        a,
        b,
        { xsb: c = [], cssRowKey: d, e8: e, D0: f, callback: g } = {},
      ) => {
        a = Oha(a)
        Iha(a, c)
        return Qha(a, b, { cssRowKey: d, e8: e, D0: f, callback: g })
      },
      Sha = (
        a,
        b,
        { ysb: c = [], xsb: d = [], cssRowKey: e, e8: f, D0: g, callback: h } =
          {},
      ) => {
        a = Oha(a)
        Gf(a, 'd', '1')
        Hha(a, c)
        Iha(a, d)
        return Qha(a, b, { cssRowKey: e, e8: f, D0: g, callback: h })
      }
    _.Tha = function (a) {
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
    _.Vha = function () {}
    _.Ud(_.Vha, _.qda)
    _.Vha.prototype.rV = function () {
      return new XMLHttpRequest()
    }
    _.Uha = new _.Vha()
    var Xha = function (a) {
        return Wha(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      Wha = function (a) {
        const b = {}, c = b.Mea ? b.Mea.rV() : _.Uha.rV()
        return (new _.Ne(function (d, e) {
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
              !(g = _.Tha(c.status)) && (g = c.status === 0) &&
                (g = _.Zca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new Yha(c.status, a, c))
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
          b.ux > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new Zha(a, c))
          }, b.ux))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new If('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Qe &&
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
    var Yha = function (a, b, c) {
      If.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Ud(Yha, If)
    Yha.prototype.name = 'XhrHttpError'
    var Zha = function (a, b) {
      If.call(this, 'Request timed out', a, b)
    }
    _.Ud(Zha, If)
    Zha.prototype.name = 'XhrTimeoutError'
    var bia, dia, eia, fia, cia, kia, lia, hia, gia, iia, jia
    _.$ha = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((z) => !_.lc().xu(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.lc().xu(v)
        v.isLoaded() ? t() : (v.na.push(new Pd.v6a(t, void 0)), oha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.aia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.ma[f] || (a.ma[f] = !0, a.Da.push(f), c = !0, d.push(f))
      }
      c && (a.Pa = !1)
    }
    bia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            gda(b) && !_.Ad(b).ka.endsWith('_/js/')
        ) {
          b = Jha(_.Ad(b))
          for (const c of b) a.Ea.includes(c) || a.Ea.push(c)
        }
      }
    }
    dia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      cia(a, b, (g, h, t = h) => {
        a.Wa && f ? a.Ya(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    eia = function (a, b) {
      return b.filter((c) => !a.ma[c])
    }
    fia = function (a, b, { D0: c, onError: d, bna: e, Q1c: f } = {}) {
      if (!b) throw Error('pa')
      if (a.kb) {
        for (const g of document.getElementsByTagName('style')) bia(a, g)
        for (const g of document.getElementsByTagName('link')) bia(a, g)
      }
      dia(a, eia(a, b), c, d, e, f)
    }
    cia = function (a, b, c, d) {
      if (a.ka) {
        return a.ka.then(() => {
          cia(a, b, c, d)
        }),
          !0
      }
      if (!a.Aa) {
        const f = []
        var e = Object.assign({}, a.ma)
        gia(
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
          h = hia(a, g, d),
          t = _.zc(h).toString()
        for (; t.length > a.MHa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.MHa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = hia(a, g, d),
              t = _.zc(h).toString()
          } else {return a.Aa
              ? (a.Aa = !1,
                a.ka = iia(a).then((v) => {
                  jia(a, v, d)
                }),
                cia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.Aa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    kia = function (a) {
      a.Pa || (a.Pa = !0, a.Da.sort())
      return a.Da
    }
    lia = function (a) {
      a = a.Ea
      a.sort()
      return a
    }
    hia = function (a, b, c) {
      return a.Aa
        ? Sha(a.na, b, {
          cssRowKey: a.Sa,
          e8: a.Oa,
          D0: c,
          ysb: kia(a),
          xsb: lia(a),
        })
        : Rha(a.na, b, { cssRowKey: a.Sa, e8: a.Oa, ysb: kia(a), xsb: lia(a) })
    }
    _.Jf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.ma[e] && (delete a.ma[e], _.Da(a.Da, e), c.push(e))
      }
    }
    _.mia = function (a, b, c, d, e, f, g = d) {
      a.qa = c
      a.Ba.insertBefore(c, a.Ba.firstChild)
      _.$ha(c, d, () => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        _.Jf(a, h)
        a.ka
          ? a.ka.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    gia = function (a, b, c, d, e, f = {}) {
      const g = _.lc()
      for (let h of b) {
        b = g.xu(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        gia(a, t, c, d, e, f)
        c(b)
      }
    }
    iia = function (a) {
      a = a.na.clone()
      Lha(a)
      Gf(a, 'dg', null)
      Gf(a, 'md', '1')
      return Xha(a.toString())
    }
    jia = function (a, b, c) {
      _.lc().OEa((b || {}).moduleGraph)
      gia(a, kia(a), (d) => {
        _.aia(a, [d.getId()])
      }, c)
      a.ka = null
    }
    _.Cd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.lb = a
        this.na = _.Ad(_.zc(a).toString(), !0)
        this.Sa = b
        this.Oa = c
        this.Aa = d
        this.ma = {}
        this.Da = []
        this.Pa = !0
        this.Ea = (a = _.Hf(this.na, 'excm')) ? a.split(',') : []
        this.kb = e
        this.NHa = !1
        this.sva = 'anonymous'
        this.MHa = 4043
        this.Ba = document.head || document.documentElement
        this.ka = this.qa = null
        this.Za = !0
        _.pda()
        this.logger = null
        _.aia(this, Jha(this.na))
        this.fetchPriority = void 0
        this.Wa = !1
        this.Fa()
      }
      Ya() {
        _.Id(function* () {
          throw Error('qa')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.zc(a)
        var f = this.NHa, g = this.sva, h = this.fetchPriority
        const t = _.rf('SCRIPT')
        _.Zc(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.aia(this, b)
        _.mia(this, a, t, b, c, d, e)
      }
    }
    var rda = new Uint8Array(123)
    var nia = []
    var oia = function (a) {
        switch (a.type) {
          case Kf.Type.FIb:
            return 'Unauthorized'
          case Kf.Type.b4a:
            return 'Consecutive load failures'
          case Kf.Type.TIMEOUT:
            return 'Timed out'
          case Kf.Type.DGb:
            return 'Out of date module id'
          case Kf.Type.T4a:
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
          this.ysb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${oia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    Pd.CA = Kf
    Pd.CA.Type = { FIb: 0, b4a: 1, TIMEOUT: 2, DGb: 3, T4a: 4 }
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
      this.lb = {}
      this.Aa = this.Wa = new Pd.u6a([], '')
      this.ob = null
      this.Pa = new _.sc()
      this.Cj = null
      this.wb =
        this.Cb =
        this.yb =
        this.mb =
        this.kb =
          !1
    }
    _.Ud(Lf, Uca)
    var pia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Ud(pia, _.da)
    Lf.prototype.Scc = function (a) {
      this.kb = a
    }
    Lf.prototype.I_a = function (a) {
      this.mb = a
    }
    Lf.prototype.OEa = function (a, b) {
      if (!(this instanceof Lf)) this.OEa(a, b)
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
            qia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Ya = c
        } else if (a.startsWith('p$')) ria(this, a)
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
            qia(this, e, g)
          }
          this.Ya = c
        }
        b && b.length
          ? (_.Ga(this.na, b), this.ob = _.raa(b))
          : this.Pa.ka || this.Pa.callback()
        Object.freeze(this.Ya)
        sia(this)
      }
    }
    var ria = function (a, b) {
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
      var t = 0, v = 0, z = b.pos, A = b.buf.indexOf('|', b.pos)
      b.pos = A + 1
      for (A = 0; A < d; A++) {
        var I = Bd(b), M = I & 2, R = I & 1
        I >>>= 2
        R
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (R = z, z += I, I = c.substring(R, z))
        f[A] = I
        M && (e[v++] = I)
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
        z = t === 0 ? nia : Array(t)
        g[c] = z
        A = v
        for (M = 0; M < t; M++) A -= Bd(b), z[M] = e[A]
        e[v] === f[c] && v++
      }
      const { ids: aa, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < aa.length; b++) qia(a, aa[b], ea[b])
      a.Ya = aa
    }
    _.k = Lf.prototype
    _.k.xu = function (a) {
      return this.ka[a]
    }
    _.k.sta = function (a, b) {
      const c = this.xu(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.LDa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.VEa = function (a) {
      Lf.Yb.VEa.call(this, a)
      sia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.b4b = function () {
      return this.Ea.length > 0
    }
    var Nf = function (a) {
        var b = a.yb
        const c = a.isActive()
        c != b && (tia(a, c ? Af.cra : Af.IDLE), a.yb = c)
        b = a.b4b()
        b != a.Cb && (tia(a, b ? Af.xLc : Af.yLc), a.Cb = b)
      },
      qia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Pd.u6a(c, b)
      },
      via = function (a, b, c) {
        const d = []
        _.Ka(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.xu(g)
          if (!h) throw Error('ra`' + g)
          const t = new _.sc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.qa)
            : (uia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.mb
            ? _.Te(a.Pa, (0, _.qc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Nf(a)))
        return e
      },
      uia = function (a, b, c, d, e) {
        nha(c, e.callback, e)
        oha(c, function (f) {
          e.ha(new pia(b, f))
        })
        a.Oa(b) ? d && (wia(a, b), Nf(a)) : d && wia(a, b)
      }
    Lf.prototype.Sa = function (a, b = 0, c) {
      const d = xia(this, a)
      this.mb ? _.Ga(this.na, d) : this.na = d
      this.Ba = this.kb ? a : _.Ea(d)
      Nf(this)
      if (d.length !== 0) {
        this.Za.push.apply(this.Za, d)
        a = this.oa
        if (!a) throw Error('sa')
        if (Object.keys(this.ma).length > 0 && !a.Za) throw Error('ta')
        fia(a, _.Ea(d), {
          D0: this.ma,
          onError: (e, f, g) =>
            yia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          BCa: (0, _.qc)(this.Nb, this),
          Q1c: !!c,
        })
      }
    }
    var xia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('ua`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(zia(a, b[d]))
        _.Ka(c)
        return !a.kb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      zia = function (a, b) {
        const c = _.Mba(a.Za), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.xu(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.xu(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ka(d)
        return d
      },
      sia = function (a) {
        if (a.Aa == a.Wa) {
          a.Aa = null
          const b = a.Wa.onLoad((0, _.qc)(a.UXb, a))
          b && b.length &&
            Aia(a, new Pd.CA(Pd.CA.Type.T4a, void 0, void 0, void 0, b[0]))
          Nf(a)
        }
      }
    Lf.prototype.Fa = function () {
      if (this.Aa) {
        var a = this.Aa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.xu(c)
            d && !d.isLoaded() && (this.LDa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.qc)(this.UXb, this))) && b.length &&
            Aia(this, new Pd.CA(Pd.CA.Type.T4a, void 0, void 0, void 0, b[0])),
            _.Da(this.Ea, a),
            _.Da(this.na, a),
            this.na.length === 0 && Bia(this),
            this.ob && a == this.ob && (this.Pa.ka || this.Pa.callback()),
            Nf(this),
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
      return via(this, [a], b)[a]
    }
    Lf.prototype.Da = function (a) {
      return via(this, a)
    }
    var wia = function (a, b) {
      _.za(a.Ea, b) || a.Ea.push(b)
    }
    Lf.prototype.rb = function (a) {
      this.Aa && this.Aa.getId() === 'synthetic_module_overhead' &&
        (this.Fa(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Cia(this, this.ka[a].ha || [], (b) => {
        b.ka = new mha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Aa = this.xu(a)
    }
    var yia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ea(c)
      a.Ba = b
      c.forEach(_.Sd(_.Da, a.Za), a)
      if (d == 401) Aia(a, new Pd.CA(Pd.CA.Type.FIb, d)), a.ha.length = 0
      else if (d == 410) Dia(a, new Pd.CA(Pd.CA.Type.DGb, d)), Bia(a)
      else if (h >= 3) Dia(a, new Pd.CA(Pd.CA.Type.b4a, d, f, e)), Bia(a)
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
      Dia(this, new Pd.CA(Pd.CA.Type.TIMEOUT))
      Bia(this)
    }
    var Dia = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Aia(a, b)
      },
      Aia = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = zia(this, g)
            return _.$d(c, function (t) {
              return _.za(h, t)
            })
          }, a)
          _.Ga(d, f)
        }
        for (e = 0; e < c.length; e++) _.Aa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Da(a.ha[f], d[e])
          _.Da(a.Ea, d[e])
        }
        if (e = a.lb[Af.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(Af.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Nf(a)
      },
      Bia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.xu(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Nf(a)
      },
      tia = function (a, b) {
        a = a.lb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Cia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.xu(f),
            !e[f] && d(b) && (e[f] = !0, Cia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Lf.prototype.dispose = function () {
      _.Xb(_.dc(this.ka), this.Wa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Ea = []
      this.ha = []
      this.lb = {}
      this.wb = !0
    }
    Lf.prototype.isDisposed = function () {
      return this.wb
    }
    _.jc = function () {
      return new Lf()
    }
    var Eia, Fia, Iia, Jia, Kia, Lia, Gia, Hia
    Eia = [5E3, 2E4]
    Fia = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Fa()
    }
    Iia = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.xu(c).isLoaded())
      b.length > 0 && (Gia(a, ...b), a.na.push(b), Hia(a))
    }
    Jia = function (a, b) {
      return new _.Ne((c, d) => {
        const e = a.xu(b)
        e.isLoaded() ? c(a.qa) : (nha(e, () => {
          c(a.qa)
        }),
          oha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Pd.CA && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Kia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.xu(f),
          !e[f] && d(b) && (e[f] = !0, Kia(a, b.ha || [], c, d, e), c(b))
      }
    }
    Lia = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Gia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Hia = function (a) {
      for (; a.Aa < a.Ea && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.xu(c).isLoaded())
        if (b.length > 0) {
          a.Aa++
          let c = () => {
            a.Aa--
            Hia(a)
            c = () => {}
          }
          _.Ufa(b.map((f) => Jia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.oa.Za) throw Error('ta')
            fia(a.oa, b, {
              D0: a.ha,
              onError: (f, g) => {
                const h = Eia[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (Lia(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.xu(t)
                      if (!t.isLoaded()) {
                        t.onError(new Pd.CA(Pd.CA.Type.b4a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.Mia = class extends Uca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Ea = Infinity
        this.Aa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Cj = null
        this.ka = this.xu('{base}')
      }
      OEa() {
        Fia(this)
      }
      VEa(a) {
        super.VEa(a)
        Fia(this)
      }
      xu(a) {
        let b = this.ma[a]
        b || (b = new Pd.u6a([], a), this.ma[a] = b)
        return b
      }
      sta(a, b) {
        this.xu(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      LDa(a, b) {
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
        Iia(this, [a])
        return Jia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Jia(this, d), c.push(d))
        })
        Iia(this, c)
        return b
      }
      rb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Fa()
        let c, d
        Kia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new mha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.xu(a)
      }
      Fa() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.xu(c).isLoaded() || (this.LDa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.qa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          Lia(this, a)
        }
      }
      I_a(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var Nia = new _.Mia()
    Nia.I_a(!0)
    Nia.VEa(new _.Ye())
    _.Pba(Nia)
    ;(new _.sha(Nia)).init()
    _.tda()
    var Oia = _.Ef(_.td('hxvedd'), !1), Pia = _.Ef(_.td('dLc0B'), !1)
    if (_.Ef(_.td('KUmoDd'), !1)) {
      const a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (const b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (Pia ? 2 : Oia ? 1 : 0) {
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
      _.ic.OEa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
