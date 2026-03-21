// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.i2Bmqko61Wk.2018.O/am=IzQoiIHA-SP0BUAAgAEG/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk0aTUOw5oB9Oonr-3qwSE4DhawOTQ/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.MJXKBJrmmqM.libheifWasm.O%3A%3BBardChatUi.OX4Rko3b0Kk.loadC2PAExtractorWasm.O%3A%3BBardChatUi.GeJedyVCy5A.loadWasmSipCoca.O%3A%3B
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
      Kaa,
      Oaa,
      Vaa,
      dba,
      eba,
      fba,
      iba,
      mba,
      nba,
      sba,
      xba,
      vba,
      wba,
      Uba,
      Wba,
      Yba,
      $ba,
      Dc,
      gca,
      ica,
      mca,
      Vca,
      Wca,
      Xca,
      md,
      Yca,
      fda,
      gda,
      sd,
      hda,
      ida,
      tda,
      vda,
      wda,
      zda,
      Gda,
      Bd,
      aaa,
      Fd,
      Ida,
      Jda,
      Kda,
      Gd,
      Lda,
      Nda,
      Hd,
      Mda,
      Oda,
      Pda,
      Qda,
      Sda,
      Rda,
      Tda
    _.aa = function (a) {
      return function () {
        return aaa[a].apply(this, arguments)
      }
    }
    _.ba = function (a, b) {
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
        !(_.sa() || (_.pa() ? 0 : _.oa('Coast')) || _.haa() ||
          (_.pa() ? 0 : _.oa('Edge')) || _.jaa() ||
          (_.pa() ? _.gaa('Opera') : _.oa('OPR')) || _.qa() || _.oa('Silk') ||
          _.oa('Android'))
    }
    _.sa = function () {
      return _.pa()
        ? _.gaa('Chromium')
        : (_.oa('Chrome') || _.oa('CriOS')) && !(_.pa() ? 0 : _.oa('Edge')) ||
          _.oa('Silk')
    }
    _.kaa = function () {
      return _.oa('Android') && !(_.sa() || _.qa() || _.haa() || _.oa('Silk'))
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
    _.Ba = function (a, b) {
      _.za(a, b) || a.push(b)
    }
    _.Da = function (a, b) {
      b = _.ya(a, b)
      let c
      ;(c = b >= 0) && _.Ca(a, b)
      return c
    }
    _.Ca = function (a, b) {
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
    _.Ia = function (a, b, c) {
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
    _.Sa = function (a) {
      _.Ra(a, 34)
      return a
    }
    _.Faa = function (a) {
      _.Ra(a, 8192)
      return a
    }
    _.Gaa = function (a) {
      _.Ra(a, 32)
      return a
    }
    _.Va = function (a) {
      return a != null && a[_.Ta] === _.Ua
    }
    _.Xa = function (a, b) {
      return b === void 0
        ? a.kc !== _.Wa && !!(2 & (a.Kg[_.Qa] | 0))
        : !!(2 & b) && a.kc !== _.Wa
    }
    _.Haa = function (a, b) {
      a.kc = b ? _.Wa : void 0
    }
    _.Iaa = function (a) {
      return a
    }
    _.Ya = function (a) {
      a.Axd = !0
      return a
    }
    _.fb = function (a) {
      var b = a
      if ((0, _.cb)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.db)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.eb
        ? BigInt(a)
        : a = Jaa(a)
          ? a ? '1' : '0'
          : (0, _.cb)(a)
          ? a.trim() || '0'
          : String(a)
    }
    Kaa = function (a, b) {
      if (a.length > b.length) return !1
      if (a.length < b.length || a === b) return !0
      for (let c = 0; c < a.length; c++) {
        const d = a[c], e = b[c]
        if (d > e) return !1
        if (d < e) return !0
      }
    }
    _.Laa = function (a) {
      const b = a >>> 0
      _.gb = b
      _.hb = (a - b) / 4294967296 >>> 0
    }
    _.ib = function (a) {
      if (a < 0) {
        _.Laa(-a)
        const [b, c] = _.Maa(_.gb, _.hb)
        _.gb = b >>> 0
        _.hb = c >>> 0
      } else _.Laa(a)
    }
    _.Naa = function (a, b) {
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
            c = b + Oaa(c) + Oaa(a))}
      return c
    }
    Oaa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Paa = function (a) {
      if (a.length < 16) _.ib(Number(a))
      else if (_.Oa()) {
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
          const [d, e] = _.Maa(_.gb, _.hb)
          _.gb = d
          _.hb = e
        }
      }
    }
    _.Maa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Qaa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Raa = function () {
      const a = Error()
      _.Qaa(a, 'severity', 'incident')
      _.ha(a)
    }
    _.kb = function (a) {
      a = Error(a)
      _.Qaa(a, 'severity', 'warning')
      return a
    }
    _.lb = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Saa) != null ? c : Saa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Raa())
      }
    }
    _.mb = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Taa = function (a) {
      if (typeof a !== 'boolean') throw Error('B`' + _.nb(a) + '`' + a)
      return a
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
      _.Paa(a)
      return _.jb(_.gb, _.hb)
    }
    _.Waa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) || (_.ib(a), a = _.Naa(_.gb, _.hb))
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
      return _.Oa() ? _.fb((0, _.ub)(64, BigInt(a))) : _.fb(Vaa(a))
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
      _.Sa(a.Kg)
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
      const b = _.Ab(_.Bb)
      return b ? a[b] : void 0
    }
    iba = function (a, b) {
      b < 100 || _.lb(hba, 1)
    }
    _.lba = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.Ab(_.Bb), g
      !e && f && (g = a[f]) && g.cMa(iba)
      f = []
      var h = a.length
      let t
      g = 4294967295
      let v = !1
      const x = !!(b & 64), A = x ? b & 128 ? 0 : -1 : void 0
      if (
        !(b & 1 ||
          (t = h && a[h - 1],
            t != null && typeof t === 'object' && t.constructor === Object
              ? (h--, g = h)
              : t = void 0,
            !x || b & 128 || e))
      ) {
        v = !0
        var I
        g = ((I = jba) != null ? I : _.Iaa)(g - A, A, a, t, void 0) + A
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let S = a[I]
        if (S != null && (S = c(S, d)) != null) {
          if (x && I >= g) {
            const ca = I - A
            var L = void 0
            ;((L = b) != null ? L : b = {})[ca] = S
          } else f[I] = S
        }
      }
      if (t) {
        for (let S in t) {
          L = t[S]
          if (L == null || (L = c(L, d)) == null) continue
          h = +S
          let ca
          if (x && !Number.isNaN(h) && (ca = h + A) < g) f[ca] = L
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[S] = L
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.Ab(_.Bb) && (a = _.gba(a)) && 'function' == typeof _.kba &&
        a instanceof _.kba && (f[_.Bb] = a.ha())
      return f
    }
    mba = function (a) {
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
            return a.length === 0 && b & 1 ? void 0 : _.lba(a, b, _.Cb)
          }
          if (_.Va(a)) return nba(a)
          if ('function' == typeof _.Fb && a instanceof _.Fb) return a.BX()
          if (a instanceof _.Gb) {
            return a = a.size !== 0 ? a.wXa(mba) : void 0, a
          }
          return
      }
      return a
    }
    _.qba = function (a, b) {
      if (b) {
        jba = b == null || b === _.Iaa || b[oba] !== pba ? _.Iaa : b
        try {
          return nba(a)
        } finally {
          jba = void 0
        }
      }
      return nba(a)
    }
    nba = function (a) {
      a = a.Kg
      return _.lba(a, a[_.Qa] | 0, _.Cb)
    }
    _.tba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('D')
        e = a[_.Qa] | 0
        if (rba && 1 & e) throw Error('E')
        2048 & e && !(2 & e) && sba()
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
    sba = function () {
      if (rba) throw Error('H')
      _.lb(uba, 5)
    }
    xba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Qa] | 0
        return a.length === 0 && c & 1 ? void 0 : vba(a, c, b)
      }
      if (_.Va(a)) return wba(a)
      if (a instanceof _.Gb) {
        b = a.zX
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.wXa())
        if (a.E2) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Va(e)
              ? e = wba(e)
              : Array.isArray(e)
              ? e = vba(e, e[_.Qa] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if ('function' == typeof _.Fb && a instanceof _.Fb) return a
    }
    vba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.Hb(a, b, !1, c && !(b & 16))
        : (_.Ra(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.yba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Haa(a, !0)
      a.NRa = _.Wa
      return a
    }
    wba = function (a) {
      const b = a.Kg, c = b[_.Qa] | 0
      return _.Xa(a, c) ? a : _.zba(a, b, c) ? _.yba(a, b) : _.Hb(b, c)
    }
    _.Hb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.lba(a, b, xba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.yb = function (a) {
      const b = a.Kg, c = b[_.Qa] | 0
      return _.Xa(a, c)
        ? _.zba(a, b, c) ? _.yba(a, b, !0) : new a.constructor(_.Hb(b, c, !1))
        : a
    }
    _.Ib = function (a) {
      if (a.kc !== _.Wa) return !1
      var b = a.Kg
      b = _.Hb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Kg = b
      _.Haa(a, !1)
      a.NRa = void 0
      return !0
    }
    _.Jb = function (a) {
      if (!_.Ib(a) && _.Xa(a, a.Kg[_.Qa] | 0)) throw Error()
    }
    _.Lb = function (a, b) {
      b === void 0 && (b = a[_.Qa] | 0)
      b & 32 && !(b & 4096) && (a[_.Qa] = b | 4096)
    }
    _.zba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.Qa] = c | 2, _.Haa(a, !0), !0)
        : !1
    }
    _.Mb = function (a, b, c, d, e) {
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
    _.Aba = function (a, b, c, d, e, f, g, h, t) {
      let v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Nb(b) ||
          (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.Qa] = b),
            Object.freeze(a))
        : (g === 2 && _.Nb(b) &&
          (a = [...a], v = 0, b = _.Ob(b, d), d = _.Mb(c, d, e, a, f)),
          _.Nb(b) || (t || (b |= 16), b !== v && (a[_.Qa] = b)))
      2 & b || !(4096 & b || 16 & b) || _.Lb(c, d)
      return a
    }
    _.Bba = function (a, b, c) {
      a = _.Pb(a, b, c)
      return Array.isArray(a) ? a : _.Qb
    }
    _.Cba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Nb = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Dba = function (a) {
      a = [...a]
      for (let b = 0; b < a.length; b++) {
        const c = a[b] = [...a[b]]
        Array.isArray(c[1]) && (c[1] = _.Sa(c[1]))
      }
      return _.Faa(a)
    }
    _.Rb = function (a, b, c, d, e) {
      _.Jb(a)
      const f = a.Kg
      _.Mb(
        f,
        f[_.Qa] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Eba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.Xa(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.Ib(a) && (b = a.Kg, c = b[_.Qa] | 0)
      a = _.Bba(b, e, g)
      var x = a === _.Qb ? 7 : a[_.Qa] | 0, A = _.Cba(x, c)
      if (t = !(4 & A)) {
        var I = a, L = c
        const S = !!(2 & A)
        S && (L |= 2)
        let ca = !S, ea = !0, la = 0, Ja = 0
        for (; la < I.length; la++) {
          const Ka = _.cba(I[la], d, !1, L)
          if (Ka instanceof d) {
            if (!S) {
              const Za = _.Xa(Ka)
              ca && (ca = !Za)
              ea && (ea = Za)
            }
            I[Ja++] = Ka
          }
        }
        Ja < la && (I.length = Ja)
        A |= 4
        A = ea ? A & -4097 : A | 4096
        A = ca ? A | 8 : A & -9
      }
      A !== x && (a[_.Qa] = A, 2 & A && Object.freeze(a))
      if (
        v && !(8 & A ||
          !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & A || !(16 & A) && 32 & c)))
      ) {
        _.Nb(A) && (a = [...a], A = _.Ob(A, c), c = _.Mb(b, c, e, a, g))
        d = a
        v = A
        for (x = 0; x < d.length; x++) {
          I = d[x], A = _.yb(I), I !== A && (d[x] = A)
        }
        v |= 8
        A = v = d.length ? v | 4096 : v & -4097
        a[_.Qa] = A
      }
      return a = _.Aba(a, A, b, c, e, g, f, t, h)
    }
    _.Ob = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Fba = function (a, b) {
      return _.Tb(b, `[${a.substring(4)}`)
    }
    _.Vb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Wb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Fa(d) ? _.Wb.apply(null, d) : _.Vb(d)
      }
    }
    _.Yb = function () {
      this.AO = this.AO
      this.s9 = this.s9
    }
    _.ac = function (a, b) {
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
      this.Qh = null
      a && this.init(a, b)
    }
    _.Hba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Gba
      this.removed = this.Sda = !1
    }
    _.bc = function (a, b, c) {
      for (const d in a) b.call(c, a[d], d, a)
    }
    _.Iba = function (a, b, c) {
      const d = {}
      for (const e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Jba = function (a, b, c) {
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
    _.ec = function (a) {
      const b = {}
      for (const c in a) b[c] = a[c]
      return b
    }
    _.fc = function (a, b) {
      let c, d
      for (let e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (let f = 0; f < Kba.length; f++) {
          c = Kba[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      }
    }
    _.Lba = function (a) {
      const b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Lba.apply(null, arguments[0])
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
    _.Nba = function (a) {
      if (_.ic) a(_.ic)
      else {
        let b
        ;((b = Mba) != null ? b : Mba = []).push(a)
      }
    }
    _.kc = function () {
      !_.ic && _.jc && _.Oba(_.jc())
      return _.ic
    }
    _.Oba = function (a) {
      _.ic = a
      let b
      ;(b = Mba) == null || b.forEach(_.Nba)
      Mba = void 0
    }
    _.lc = function (a) {
      _.ic && _.ic.ub(a)
    }
    _.mc = function () {
      _.ic && _.ic.Fa()
    }
    _.nc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Pba] = a
    }
    _.oc = function () {
      _.Yb.call(this)
      this.QO = new _.hc(this)
      this.PDc = this
      this.bkb = null
    }
    _.rc = function (a, b) {
      let c = a
      b && (c = (0, _.qc)(a, b))
      c = _.rc.Gbc(c)
      _.rc.wzc
        ? setTimeout(c, 0)
        : (c = _.rc.U6c(c), _.rc.KYb || (_.rc.KYb = _.rc.pRc()), _.rc.KYb(c))
    }
    Uba = function () {
      let a
      for (; a = Qba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ha(b)
        }
        Rba(Sba, a)
      }
      Tba = !1
    }
    _.sc = function (a, b) {
      this.Ba = []
      this.mb = a
      this.Xa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Oa = this.nb = this.Fa = !1
      this.Da = 0
      this.na = null
      this.wa = 0
    }
    _.tc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.uc = function (a, b) {
      this.width = a
      this.height = b
    }
    Wba = function () {
      let a = null
      if (!Vba) return a
      try {
        const b = (c) => c
        a = Vba.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    Yba = function () {
      Xba === void 0 && (Xba = Wba())
      return Xba
    }
    _.xc = function (a) {
      const b = Yba()
      a = b ? b.createScriptURL(a) : a
      return new _.vc(_.wc, a)
    }
    _.Zba = function (a) {
      return a instanceof _.vc
    }
    _.yc = function (a) {
      if (_.Zba(a)) return a.ha
      throw Error('Z')
    }
    $ba = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.zc = function (a) {
      return new _.aca(_.wc, a)
    }
    _.Ac = function (a) {
      return a instanceof _.aca
    }
    _.Bc = function (a) {
      if (_.Ac(a)) return a.ha
      throw Error('Z')
    }
    Dc = function (a) {
      return new Cc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Fc = function (a, b = bca) {
      if (_.Ac(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Cc && d.Zl(a)) return _.zc(a)
      }
    }
    _.Hc = function (a, b = bca) {
      b = _.Fc(a, b)
      b === void 0 && _.cca(a.toString())
      return b || _.Gc
    }
    _.Ic = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.zc(URL.createObjectURL(a))
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
      return _.zc(URL.createObjectURL(a))
    }
    _.eca = function (a) {
      if (!dca) {
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
    gca = function (a) {
      const b = !fca.test(a)
      b && _.cca(a)
      if (!b) return a
    }
    _.Jc = function (a) {
      return a instanceof _.aca ? _.Bc(a) : gca(a)
    }
    _.Kc = function (a, b) {
      b = _.Jc(b)
      b !== void 0 && (a.href = b)
    }
    _.Mc = function (a) {
      const b = Yba()
      a = b ? b.createHTML(a) : a
      return new _.Lc(_.wc, a)
    }
    _.hca = function (a) {
      return a instanceof _.Lc
    }
    _.Nc = function (a) {
      if (_.hca(a)) return a.ha
      throw Error('Z')
    }
    _.Oc = function (a, b) {
      a.src = _.yc(b).toString()
    }
    _.Pc = function (a, b) {
      a.srcdoc = _.Nc(b)
    }
    _.Qc = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Sc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.vc) throw new _.Rc('TrustedResourceUrl', 0)
          _.Qc(a, [])
          b = _.Jc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.vc)) throw new _.Rc(typeof c, 1)
          _.Qc(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Oc(a, c)
          break
        case 2:
          if (c instanceof _.vc) throw new _.Rc('TrustedResourceUrl', 2)
          _.Qc(
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
    _.Tc = function (a, b, c, d) {
      b = _.Jc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Vc = function (a) {
      return ica('script', a)
    }
    _.jca = function (a) {
      return ica('style', a)
    }
    ica = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Xc = function (a) {
      const b = Yba()
      a = b ? b.createScript(a) : a
      return new _.kca(_.wc, a)
    }
    _.lca = function (a) {
      return a instanceof _.kca
    }
    _.Yc = function (a) {
      if (_.lca(a)) return a.ha
      throw Error('Z')
    }
    mca = function (a) {
      const b = _.Vc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.Zc = function (a, b, c) {
      a.textContent = _.Yc(b)
      ;(c == null ? 0 : c.F3c) || mca(a)
    }
    _.$c = function (a, b, c) {
      a.src = _.yc(b)
      ;(c == null ? 0 : c.F3c) || mca(a)
    }
    _.oca = function (a) {
      if (a instanceof _.nca) return a.ha
      throw Error('Z')
    }
    _.ad = function (a, b) {
      a.nodeType === 1 && _.pca(a)
      a.innerHTML = _.Nc(b)
    }
    _.bd = function (a, b, c, d) {
      if (a.length === 0) throw Error('Z')
      a = a.map((f) => _.oca(f))
      const e = c.toLowerCase()
      if (a.every((f) => e.indexOf(f) !== 0)) throw Error('$`' + c)
      b.setAttribute(c, d)
    }
    _.pca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('Z')
    }
    _.xca = function (a, b, c) {
      if (_.Zba(b)) _.qca(a, b, c)
      else {
        if (sca.indexOf(c) === -1) throw Error('aa`' + c)
        b = _.Jc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.qca = function (a, b, c) {
      a.href = _.yc(b).toString()
      a.rel = c
    }
    _.Hca = function (a) {
      return 'function' == typeof _.dd && a instanceof _.dd
    }
    _.Ica = function (a) {
      if (_.Hca(a)) return a.ha
      throw Error('Z')
    }
    _.ed = function (a, b, c) {
      return a.parseFromString(_.Nc(b), c)
    }
    _.fd = function (a, b) {
      b = _.Jc(b)
      b !== void 0 && (a.href = b)
    }
    _.Jca = function (a, b) {
      return a.createContextualFragment(_.Nc(b))
    }
    _.Kca = function (a) {
      return _.Mc(a)
    }
    _.Lca = function (a) {
      return _.xc(a)
    }
    _.gd = function (a) {
      a = a[0].toLowerCase()
      return new _.nca(_.wc, a)
    }
    _.id = function (a, b) {
      if (_.hca(a)) return a
      a = _.hd(String(a))
      if (b == null ? 0 : b.zzd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.bTa) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.Azd) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Mc(a)
    }
    _.hd = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.jd = function (a) {
      return _.Mca('', a)
    }
    _.Mca = function (a, b) {
      a = _.id(a)
      return _.Mc(b.map((c) => _.Nc(_.id(c))).join(_.Nc(a).toString()))
    }
    _.Nca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Mc(a)
    }
    _.Qca = function (a) {
      if (!Oca.test(a)) throw Error('Z')
      if (Pca.indexOf(a.toUpperCase()) !== -1) throw Error('Z')
    }
    _.kd = function (a, b, c) {
      _.Qca(a)
      let d = `<${a}`
      b && (d += _.Rca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Sca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.jd(c.map((e) => _.hca(e) ? e : _.id(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Mc(d)
    }
    _.Rca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Oca.test(d)) throw Error('Z')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('Z')
          Tca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.Ac(e)
              ? e.toString()
              : gca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.id(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Uca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Vca = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Mc(a)
      return _.Jca(c, a)
    }
    Wca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Xca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    md = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Yca = function (a) {
      return a.parts.map((b) => {
        const c = b.V7a
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.nd = function (a) {
      return _.Zca.sanitize(a)
    }
    _.$ca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        hYa: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.od = function (a, ...b) {
      if (b.length === 0) return _.xc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.xc(c)
    }
    _.pd = function (a, b) {
      a = _.$ca(_.yc(a).toString())
      return _.ada(a.hYa, a.params, a.fragment, b)
    }
    _.ada = function (a, b, c, d) {
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
      return _.xc(a + b + c)
    }
    _.bda = function (a, b) {
      a = _.$ca(_.yc(a).toString())
      const c = a.hYa.slice(-1) === '/' ? '' : '/'
      b = a.hYa + c + encodeURIComponent(b)
      return _.xc(b + a.params + a.fragment)
    }
    _.cda = function (a) {
      a = _.Yc(a).toString()
      return _.xc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.dda = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.eda = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    fda = function (a, b) {
      var c = b || _.qd()
      const d = c.Df()
      b = c.createElement('STYLE')
      const e = _.jca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    gda = function (a, b) {
      this.ha = a
      this.ka = b
    }
    sd = function (a, b) {
      _.Yb.call(this)
      this.ha = a
      this.qa = b
      this.oa = []
      this.ma = []
      this.na = []
    }
    hda = function () {
      this.oa = this.qa = null
    }
    ida = function (a = window) {
      return a.WIZ_global_data
    }
    _.jda = function (a, b = window) {
      return (b = ida(b)) && a in b ? b[a] : null
    }
    _.ud = function (a, b = window) {
      return new _.td(a, _.jda(a, b))
    }
    _.kda = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.vd = function (a) {
      return a.match(lda)
    }
    _.wd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.xd = function (a, b) {
      return _.vd(b)[a] || null
    }
    _.mda = function (a) {
      a = _.xd(1, a)
      !a && _.fa.self && _.fa.self.location &&
        (a = _.fa.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.yd = function (a) {
      a = _.vd(a)
      return _.kda(a[1], a[2], a[3], a[4])
    }
    _.oda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.nda(f) : '')
        }
      }
    }
    _.pda = function (a, b) {
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
    _.qda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.qda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.zd(b)))
    }
    _.rda = function (a) {
      const b = []
      for (const c in a) _.qda(c, a[c], b)
      return b.join('&')
    }
    _.sda = function (a, b, c, d) {
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
    tda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    vda = function (a = '', b) {
      if (a && b) throw Error('ma')
      var c = ''
      const d = _.fa._F_jsUrl
      ;(a = b || tda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('na`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!uda(c)) throw Error('oa')
      return c
    }
    wda = function () {
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
    zda = function (a) {
      const { promise: b, resolve: c, reject: d } = wda()
      xda.set(a, { promise: b, resolve: c, reject: d })
      yda || (yda = [],
        queueMicrotask(() => {
          const e = [...yda]
          yda = null
          const f = _.kc().Da(e)
          for (const g of e) f[g].then(xda.get(g).resolve, xda.get(g).reject)
        }))
      yda.push(a)
      return b
    }
    _.Dda = function () {
      if (Ada) return Bda
      Ada = !0
      let a
      try {
        a = vda(_.fa._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = Cda(_.Ad(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Nba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.Jpa(e, g)
        }
      })
      return Bda = !0
    }
    _.Eda = function () {}
    Gda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return Fda[a]
    }
    Bd = function (a) {
      let b = 0, c = 0, d
      do d = Gda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.Hda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.W4 || ''
      !c.lvd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('va')
      }
      const f = c.kyd || _.Dd
      a = tda(a)
      b = new f(
        _.Lca(vda('', a), {
          wgb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.mCd || a && a.hasAttribute('crossorigin')
      a = c.Mud || a && a.getAttribute('crossorigin')
      d && (b.aDa = d)
      a && (b.Era = a)
      c.ZCa && (b.ZCa = c.ZCa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.kc()
      g.oa = b
      g.l3b(!0)
      _.Ed = c.Ztd === 'BATCH' ? zda : (h) => Promise.resolve(g.load(h))
    }
    aaa = []
    Ida = Object.create
    Jda = Object.defineProperty
    Kda = function (a) {
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
    Gd = Kda(this)
    Lda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Gd.BigInt64Array && (Lda.push('BigInt64'), Lda.push('BigUint64'))
    Nda = function (a, b) {
      if (b) {
        for (var c = 0; c < Lda.length; c++) {
          Mda(Lda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Hd = function (a, b) {
      b && Mda(a, b)
    }
    Mda = function (a, b) {
      var c = Gd
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
        Jda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Oda = Object.setPrototypeOf
    Pda = function (a, b) {
      a.prototype = Ida(b.prototype)
      a.prototype.constructor = a
      Oda(a, b)
      a.Zb = b.prototype
    }
    Qda = function (a) {
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
      return Qda(a())
    }
    Hd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    Hd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (Fd = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(Gd.top) || b(Gd) || b({})
      return a || {}
    })
    Sda = function () {
      return Rda
    }
    _.Jd = function () {
      return Sda
    }
    Rda = function (a) {
      return a
    }
    Tda = function (a) {
      var b = Fd
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
    Hd('globalThis', function (a) {
      return a || Gd
    })
    Hd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    Hd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    Hd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    Hd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    Hd('Object.fromEntries', function (a) {
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
    Hd('String.prototype.replaceAll', function (a) {
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
    Hd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    Hd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    Hd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var Uda = {},
      Vda = function () {
        if (typeof Gd.EventTarget === 'function') {
          var a = Gd.EventTarget.prototype
        } else {for (
            a = Gd;
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
            var t = Uda[f]
            if (!t) return c.call(this, f, g, h)
            var v = g != null ? g : e, x = d.get(v)
            x || (x = new WeakMap(), d.set(v, x))
            var A = x.get(this)
            A || (A = {}, x.set(this, A))
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
                for (x = 0; x < t.length; x++) v = t[x](v, f, this)
                if (
                  h && Gd.AbortSignal && h.signal instanceof
                    Gd.AbortSignal
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
          Vda = function () {}
        }
      },
      Wda = function (a) {
        var b = ['readystatechange']
        Vda()
        for (let c = 0; c < b.length; c++) {
          ;(Uda[b[c]] || (Uda[b[c]] = [])).push(a)
        }
      },
      Kd = function (a, b) {
        Mda(a, function (c) {
          return c && b(c)
        })
      },
      Xda = !1
    Hd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.Jd = c)
        c = a._JSC
        typeof c === 'function' && (Sda = c)
        return a
      }
      Xda = !0
      Rda = function (e) {
        return e
      }
      var d = Fd
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
      b._JSC = Sda = function (e) {
        var f = (0, _.Jd)(e)
        return function (g, h) {
          return f(h)(g)
        }
      }
      return b
    })
    Xda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var h = 0; h < e.length; h++) {
                var t = e[h], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Tda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              Jda(g, 'name', { value: f.name }),
                Jda(g, 'length', { value: f.length }),
                Jda(g, 'toString', {
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
        Wda(function (e) {
          return function () {
            var f = Fd[0]
            try {
              return Fd[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              Fd[0] = f
            }
          }
        })
        return function () {
          c.set(this, Fd[0])
          return d.apply(this, arguments)
        }
      })
    }()
    Hd('Promise.prototype.finally', function (a) {
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
    Hd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        if (this == null) throw new TypeError('m`padStart')
        b -= this.length
        c = c !== void 0 ? String(c) : ' '
        return (b > 0 && c
          ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
          : '') + this
      }
    })
    Hd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = Fd
      b.wrap = Tda
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
    Hd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        Yda(this)
        Zda(b)
        var c = $da(this, b)
        b = new Set(this)
        var d = c.ppb
        c = c.Agb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Hd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Yda(this)
        Zda(b)
        var c = new Set(), d = $da(this, b)
        b = d.ppb
        d = d.Agb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var Zda = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      $da = function (a, b) {
        if (a.size <= b.size) a = { ppb: a.keys(), Agb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { ppb: b, Agb: a }
        }
        return a
      },
      Yda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      aea = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    Hd('Array.prototype.at', function (a) {
      return a ? a : aea
    })
    Nda('at', function (a) {
      return a ? a : aea
    })
    Hd('String.prototype.at', function (a) {
      return a ? a : aea
    })
    Hd('Array.prototype.flat', function (a) {
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
    Hd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    Hd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    Hd('Promise.allSettled', function (a) {
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
    Hd('String.prototype.matchAll', function (a) {
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
    var bea = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Hd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return bea(this, b, c).v
      }
    })
    Nda('findLast', function (a) {
      return a ? a : function (b, c) {
        return bea(this, b, c).v
      }
    })
    Hd('Promise.withResolvers', function (a) {
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
    Hd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Pda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    Hd('Promise.any', function (a) {
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
    var Nd, Rd, dea, eea, fea
    _.cea = _.cea || {}
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
    _.Pd = _.fa._F_toggles_default_BardChatUi || []
    Rd = function () {}
    Rd.get = function () {
      return null
    }
    _.Ed = null
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
    _.Sd = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.Td = function (a) {
      return Object.prototype.hasOwnProperty.call(a, dea) && a[dea] ||
        (a[dea] = ++eea)
    }
    dea = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    eea = 0
    fea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.qc = function (a, b, c) {
      _.qc = fea
      return _.qc.apply(null, arguments)
    }
    _.Ud = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.Vd = function () {
      return Date.now()
    }
    _.gea = function (a, b, c) {
      _.Ld(a, b, c)
    }
    _.Ab = function (a) {
      return a
    }
    _.Wd = function (a, b) {
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
    _.Wd(_.da, Error)
    _.da.prototype.name = 'CustomError'
    var hea
    _.Wd(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.iea = typeof TextDecoder !== 'undefined'
    _.jea = typeof TextEncoder !== 'undefined'
    var Xd = !!(_.Pd[4] >> 18 & 1),
      kea = !!(_.Pd[4] & 8192),
      lea = !!(_.Pd[4] >> 20 & 1),
      mea = !!(_.Pd[4] & 8),
      nea = !!(_.Pd[4] >> 21 & 1),
      oea = !!(_.Pd[4] & 256),
      pea = !!(_.Pd[3] >> 29 & 1),
      qea = !!(_.Pd[4] >> 19 & 1)
    var rba
    _.faa = Xd ? lea : Nd(610401301, !1)
    _.rea = Xd ? mea : Nd(1331761403, !1)
    _.sea = Xd ? nea : Nd(651175828, !1)
    rba = Xd ? kea || !oea : Nd(748402147, !0)
    _.tea = Xd ? pea : Nd(861377723, !1)
    _.uea = Xd ? qea : Nd(861377724, !1)
    var vea
    vea = _.fa.navigator
    _.na = vea ? vea.userAgentData || null : null
    var wea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var xea = new class {
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
    var yea
    yea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Id(function* () {
          if (ua(!0)) return new wea(yield xea.load())
          a.ha = !0
          return new wea(_.qaa())
        })
      }
    }
    _.zea = new yea()
    _.ya = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.Yd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Zd = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.$d = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.ae = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Aea = function (a) {
      _.Aea[' '](a)
      return a
    }
    _.Aea[' '] = function () {}
    _.Bea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Nea, Oea
    _.Cea = _.haa()
    _.be = _.iaa()
    _.de = _.oa('Edge')
    _.ee = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.fe = _.caa('WebKit') && !_.oa('Edge')
    _.Dea = _.fe && _.oa('Mobile')
    _.ge = _.wa()
    _.he = _.oaa()
    _.Eea = _.naa() || _.paa()
    _.Fea = _.laa()
    _.Gea = _.maa()
    _.Hea = _.oa('iPad')
    _.Iea = _.oa('iPod')
    _.Jea = _.va()
    _.caa('KaiOS')
    var Kea = function () {
        const a = _.fa.document
        return a ? a.documentMode : void 0
      },
      Lea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.ee) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.de) return /Edge\/([\d\.]+)/.exec(c)
        if (_.be) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.fe) return /WebKit\/(\S+)/.exec(c)
        if (_.Cea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.be) {
        const c = Kea()
        if (c != null && c > parseFloat(a)) {
          Lea = String(c)
          break a
        }
      }
      Lea = a
    }
    _.Mea = Lea
    Nea = {}
    _.ie = function (a) {
      return _.Bea(Nea, a, function () {
        return _.eaa(_.Mea, a) >= 0
      })
    }
    if (_.fa.document && _.be) {
      var Pea = Kea()
      Oea = Pea ? Pea : parseInt(_.Mea, 10) || void 0
    } else Oea = void 0
    _.Qea = Oea
    var Rea, Sea, Tea, Uea, Vea, Wea
    _.je = {}
    Rea = _.qa()
    Sea = vaa()
    Tea = _.oa('iPad')
    Uea = _.kaa()
    Vea = _.sa()
    Wea = waa()
    _.je.ANDROID = Uea
    _.je.yld = !1
    _.je.zld = !1
    _.je.Ald = !1
    _.je.Bld = !1
    _.je.Cld = !1
    _.je.Dld = !1
    _.je.CHROME = Vea
    _.je.Kba = _.de
    _.je.PW = Rea
    _.je.pwb = _.be
    _.je.b_a = Tea
    _.je.c_a = Sea
    _.je.H0a = _.Cea
    _.je.uH = Wea
    _.je.Bxd = vaa
    _.je.Gxd = waa
    _.yaa = {}
    _.xaa = null
    var Caa = /[-_.]/g,
      Aaa = { '-': '+', _: '/', '.': '=' },
      Xea = typeof structuredClone != 'undefined'
    var hba, uba, oba
    _.xb = Pa()
    _.Yea = Pa()
    _.Zea = Pa()
    _.Bb = Pa()
    _.$ea = Pa()
    hba = Pa()
    _.afa = Pa()
    uba = Pa()
    _.Ta = Pa('m_m', !0)
    oba = Pa()
    _.bfa = Pa()
    var cfa
    _.Qa = Pa('jas', !0)
    cfa = []
    cfa[_.Qa] = 7
    _.Qb = Object.freeze(cfa)
    var dfa
    _.Ua = {}
    _.Wa = {}
    dfa = class {
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
    _.efa = Object.freeze({})
    _.ffa = Object.freeze({})
    var pba = {}
    _.gfa = _.Ya((a) => a !== null && a !== void 0)
    var Jaa
    _.db = _.Ya((a) => typeof a === 'number')
    _.hfa = _.Ya((a) => Number.isFinite(a))
    _.cb = _.Ya((a) => typeof a === 'string')
    Jaa = _.Ya((a) => typeof a === 'boolean')
    _.ifa = _.Ya((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.jfa = _.Ya((a) => typeof a === 'function')
    _.kfa = _.Ya((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.lfa = _.Ya((a) => Array.isArray(a))
    _.eb = typeof _.fa.BigInt === 'function' &&
      typeof _.fa.BigInt(0) === 'bigint'
    var ofa, mfa, pfa, nfa
    _.Db = _.Ya((a) =>
      _.eb ? a >= mfa && a <= nfa : a[0] === '-' ? Kaa(a, ofa) : Kaa(a, pfa)
    )
    ofa = Number.MIN_SAFE_INTEGER.toString()
    mfa = _.eb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    pfa = Number.MAX_SAFE_INTEGER.toString()
    nfa = _.eb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.gb = 0
    _.hb = 0
    var Saa = void 0
    var Uaa
    _.ke = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.ub = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.tb = Number.isSafeInteger
    _.ob = Number.isFinite
    _.sb = Math.trunc
    Uaa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var qfa, rfa
    qfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    rfa = function (a) {
      if (a.zX & 2) throw Error('C')
    }
    _.Gb = class extends qfa {
      constructor(a, b, c = dba, d = dba) {
        super()
        this.zX = a[_.Qa] | 0
        this.E2 = b
        this.Jwa = c
        this.Dsb = this.E2 ? eba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.zX)
          super.set(g, h)
        }
      }
      wXa(a) {
        return _.Faa(Array.from(super.entries(), a))
      }
      clear() {
        rfa(this)
        super.clear()
      }
      delete(a) {
        rfa(this)
        return super.delete(this.Jwa(a, !0, !1))
      }
      entries() {
        if (this.E2) {
          var a = super.keys()
          a = new dfa(a, fba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.E2) {
          var a = super.keys()
          a = new dfa(a, _.Gb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.E2
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        rfa(this)
        a = this.Jwa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.Dsb(b, !0, !0, this.E2, !1, this.zX))
      }
      d$c(a) {
        const b = this.Jwa(a[0], !1, !0)
        a = a[1]
        a = this.E2
          ? a === void 0 ? null : a
          : this.Dsb(a, !1, !0, void 0, !1, this.zX)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.Jwa(a, !1, !1))
      }
      get(a) {
        a = this.Jwa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.E2
          return c
            ? (c = this.Dsb(b, !1, !0, c, this.xGc, this.zX),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.Gb.prototype.toJSON = void 0
    var jba
    _.me = Xea ? structuredClone : (a) => _.lba(a, 0, _.Cb)
    _.sfa = _.fb(0)
    _.ne = function (a, b, c, d, e) {
      b = _.Pb(a.Kg, b, c, e)
      if (b !== null || d && a.NRa !== _.Wa) return b
    }
    _.Pb = function (a, b, c, d) {
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
    _.Tb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('N')
      return new a(_.Gaa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Kg = _.tba(a, b, c, 2048)
      }
      toJSON() {
        return _.qba(this)
      }
      serialize(a) {
        return JSON.stringify(_.qba(this, a))
      }
      clone() {
        const a = this.Kg, b = a[_.Qa] | 0
        return _.zba(this, a, b)
          ? _.yba(this, a, !0)
          : new this.constructor(_.Hb(a, b, !1))
      }
      isImmutable() {
        return _.Xa(this)
      }
    }
    _.l.prototype.j8 = _.aa(0)
    _.l.prototype[_.Ta] = _.Ua
    _.l.prototype.toString = function () {
      return this.Kg.toString()
    }
    _.tfa = class extends _.da {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.ufa = []
    _.vfa = []
    _.wfa = !1
    _.xfa = function (a) {
      _.ufa[_.ufa.length] = a
      if (_.wfa) {
        for (let b = 0; b < _.vfa.length; b++) {
          a((0, _.qc)(_.vfa[b].wrap, _.vfa[b]))
        }
      }
    }
    _.Yb.prototype.AO = !1
    _.Yb.prototype.isDisposed = function () {
      return this.AO
    }
    _.Yb.prototype.dispose = function () {
      this.AO || (this.AO = !0, this.Db())
    }
    _.Yb.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Yb.prototype.Jb = function (a) {
      this.addOnDisposeCallback(_.Ud(_.Vb, a))
    }
    _.Yb.prototype.addOnDisposeCallback = function (a, b) {
      this.AO
        ? b !== void 0 ? a.call(b) : a()
        : (this.s9 || (this.s9 = []), b && (a = a.bind(b)), this.s9.push(a))
    }
    _.Yb.prototype.Db = function () {
      if (this.s9) { for (; this.s9.length;) this.s9.shift()() }
    }
    _.Zb = function (a, b) {
      this.type = 'function' == typeof _.yfa && a instanceof _.yfa
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
    var Afa
    _.zfa = !(!_.fa.navigator || !_.fa.navigator.maxTouchPoints)
    Afa = function () {
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
    _.Wd(_.ac, _.Zb)
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
        : (this.offsetX = _.fe || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.fe || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.ge ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.Qh = a
      a.defaultPrevented && _.ac.Zb.preventDefault.call(this)
    }
    _.ac.prototype.stopPropagation = function () {
      _.ac.Zb.stopPropagation.call(this)
      this.Qh.stopPropagation
        ? this.Qh.stopPropagation()
        : this.Qh.cancelBubble = !0
    }
    _.ac.prototype.preventDefault = function () {
      _.ac.Zb.preventDefault.call(this)
      const a = this.Qh
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.ac.prototype.Vta = _.aa(1)
    _.Bfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.oe = function (a) {
      return !(!a || !a[_.Bfa])
    }
    var Gba = 0
    var Cfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Kba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.hc.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = Dfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Sda = !1))
        : (b = new _.Hba(b, this.src, f, !!d, e), b.Sda = c, a.push(b))
      return b
    }
    _.hc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = Dfa(e, b, c, d)
      return b > -1
        ? (Cfa(e[b]),
          _.Ca(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Efa = function (a, b) {
      const c = b.type
      if (!(c in a.listeners)) return !1
      const d = _.Da(a.listeners[c], b)
      d &&
        (Cfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.hc.prototype.removeAll = function (a) {
      a = a && a.toString()
      let b = 0
      for (const c in this.listeners) {
        if (!a || c == a) {
          const d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Cfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.hc.prototype.I6 = _.aa(3)
    _.hc.prototype.uga = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = Dfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.hc.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Jba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Dfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
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
    _.qe = function (a, b, c, d, e) {
      if (d && d.once) return _.pe(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.qe(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.oe(a)
        ? a.listen(b, c, _.Sd(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !1, d, e)
    }
    Jfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('Q')
      const g = _.Sd(e) ? !!e.capture : !!e
      let h = _.re(a)
      h || (a[Ffa] = h = new _.hc(a))
      c = h.add(b, c, d, g, f)
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
      else throw Error('R')
      Hfa++
      return c
    }
    Kfa = function () {
      const a = Mfa,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.pe = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.pe(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.oe(a)
        ? a.Se(b, c, _.Sd(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !0, d, e)
    }
    _.ue = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.ue(a, b[f], c, d, e)
      } else {d = _.Sd(d) ? !!d.capture : !!d,
          c = _.Ifa(c),
          _.oe(a)
            ? a.Hf(b, c, d, e)
            : a && (a = _.re(a)) && (b = a.uga(b, c, d, e)) && _.ve(b)}
    }
    _.ve = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.oe(b)) return b.pR(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Lfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Hfa--
      ;(c = _.re(b))
        ? (Efa(c, a), c.ha == 0 && (c.src = null, b[Ffa] = null))
        : Cfa(a)
      return !0
    }
    Lfa = function (a) {
      return a in Gfa ? Gfa[a] : Gfa[a] = 'on' + a
    }
    _.Nfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.Sda && _.ve(a)
      return c.call(d, b)
    }
    Mfa = function (a, b) {
      return a.removed ? !0 : _.Nfa(a, new _.ac(b, this))
    }
    _.re = function (a) {
      a = a[Ffa]
      return a instanceof _.hc ? a : null
    }
    Ofa = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.Ifa = function (a) {
      if (typeof a === 'function') return a
      a[Ofa] || (a[Ofa] = function (b) {
        return a.handleEvent(b)
      })
      return a[Ofa]
    }
    _.xfa(function (a) {
      Mfa = a(Mfa)
    })
    var Mba
    _.Pfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('S`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Nba((e) => {
            e.Jpa(a.ha, d)
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
        _.Pfa(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Pba = Symbol('T')
    _.Wd(_.oc, _.Yb)
    _.oc.prototype[_.Bfa] = !0
    _.k = _.oc.prototype
    _.k.cP = function () {
      return this.bkb
    }
    _.k.ko = function (a) {
      this.bkb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.qe(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.ue(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.cP()
      if (c) { for (b = []; c; c = c.cP()) b.push(c) }
      c = this.PDc
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
      _.oc.Zb.Db.call(this)
      this.removeAllListeners()
      this.bkb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.QO.add(String(a), b, !1, c, d)
    }
    _.k.Se = function (a, b, c, d) {
      return this.QO.add(String(a), b, !0, c, d)
    }
    _.k.Hf = function (a, b, c, d) {
      return this.QO.remove(String(a), b, c, d)
    }
    _.k.pR = function (a) {
      return Efa(this.QO, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.QO ? this.QO.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.QO.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.Sda && this.pR(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.I6 = _.aa(2)
    _.k.uga = function (a, b, c, d) {
      return this.QO.uga(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.QO.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.ye =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Rba = function (a, b) {
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
          let a
          this.ka > 0
            ? (this.ka--, a = this.ha, this.ha = a.next, a.next = null)
            : a = this.ma()
          return a
        }
      }
    _.rc.U6c = _.ye
    _.rc.wzc = !1
    _.rc.pRc = function () {
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
    _.rc.Gbc = (a) => a
    _.xfa(function (a) {
      _.rc.Gbc = a
    })
    var Rfa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = Sba.get()
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
      Sba = new Qfa(() => new Sfa(), (a) => a.reset()),
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
    var Tfa, Tba, Qba, Ufa
    Tba = !1
    Qba = new Rfa()
    _.ze = (a, b) => {
      Tfa || Ufa()
      Tba || (Tfa(), Tba = !0)
      Qba.add(a, b)
    }
    Ufa = () => {
      const a = Promise.resolve(void 0)
      Tfa = () => {
        a.then(Uba)
      }
    }
    _.Ae = function () {}
    var Vfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Wfa, Xfa, fga, cga, Zfa, kga, iga, gga, hga, lga, jga, mga
    _.De = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.wa = !1
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
      const d = Xfa.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.$fa = function (a, b, c) {
      Zfa(a, b, c, null) || _.ze(_.Ud(b, a))
    }
    _.aga = function (a) {
      return new _.De(function (b, c) {
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
            _.$fa(h, _.Ud(f, t), g)
          }
        } else b(e)
      })
    }
    _.Ee = function () {
      let a, b
      const c = new _.De(function (d, e) {
        a = d
        b = e
      })
      return new bga(c, a, b)
    }
    _.De.prototype.then = function (a, b, c) {
      return cga(
        this,
        (0, _.ye)(typeof a === 'function' ? a : null),
        (0, _.ye)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.De.prototype.$goog_Thenable = !0
    var ega = function (a, b, c, d) {
      _.dga(a, _.Yfa(b || _.Ae, c || null, d))
    }
    _.De.prototype.finally = function (a) {
      a = (0, _.ye)(a)
      return new _.De((b, c) => {
        ega(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.De.prototype.ha = function (a, b) {
      return cga(this, null, (0, _.ye)(a), b)
    }
    _.De.prototype.catch = _.De.prototype.ha
    _.De.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Fe(a)
        _.ze(function () {
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
        } else _.Be(a, 3, b)
      }
    }
    _.dga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || iga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    cga = function (a, b, c, d) {
      const e = _.Yfa(null, null, null)
      e.child = new _.De(function (f, g) {
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
              t === void 0 && h instanceof _.Fe ? g(h) : f(t)
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
    _.De.prototype.Ea = function (a) {
      this.ka = 0
      _.Be(this, 2, a)
    }
    _.De.prototype.Fa = function (a) {
      this.ka = 0
      _.Be(this, 3, a)
    }
    _.Be = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('U')),
          a.ka = 1,
          Zfa(c, a.Ea, a.Fa, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            iga(a),
            b != 3 || c instanceof _.Fe || jga(a, c)))
    }
    Zfa = function (a, b, c, d) {
      if (a instanceof _.De) return ega(a, b, c, d), !0
      if (Vfa(a)) return a.then(b, c, d), !0
      if (_.Sd(a)) {
        try {
          const e = a.then
          if (typeof e === 'function') return kga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    kga = function (a, b, c, d, e) {
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
    iga = function (a) {
      a.wa || (a.wa = !0, _.ze(a.Da, a))
    }
    gga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.De.prototype.Da = function () {
      let a
      for (; a = gga(this);) hga(this, a, this.ka, this.Ba)
      this.wa = !1
    }
    hga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.qa; a = a.na) a.qa = !1 }
      if (b.child) b.child.na = null, lga(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : lga(b, c, d)
        } catch (e) {
          mga.call(null, e)
        }}
      Rba(Xfa, b)
    }
    lga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    jga = function (a, b) {
      a.qa = !0
      _.ze(function () {
        a.qa && mga.call(null, b)
      })
    }
    mga = _.ha
    _.Fe = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Wd(_.Fe, _.da)
    _.Fe.prototype.name = 'cancel'
    var bga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var tga, sga, oga, pga
    _.sc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.sc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.wa--, b.wa <= 0 && b.cancel())
        }
        this.mb ? this.mb.call(this.Xa, this) : this.Oa = !0
        this.ka || this.ha(new _.Ge(this))
      }
    }
    _.sc.prototype.Sa = function (a, b) {
      this.Fa = !1
      nga(this, a, b)
    }
    var nga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.qa = !b
        oga(a)
      },
      qga = function (a) {
        if (a.ka) {
          if (!a.Oa) throw new pga(a)
          a.Oa = !1
        }
      }
    _.sc.prototype.callback = function (a) {
      qga(this)
      nga(this, !0, a)
    }
    _.sc.prototype.ha = function (a) {
      qga(this)
      nga(this, !1, a)
    }
    _.Ke = function (a, b, c) {
      return _.He(a, b, null, c)
    }
    _.sc.prototype.finally = function (a) {
      return _.rga(
        new Promise((b, c) => {
          _.He(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.He = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.ye)(b) : (b = (0, _.ye)(b), c = (0, _.ye)(c)))
      a.Ba.push([b, c, d])
      e && oga(a)
      return a
    }
    _.sc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.De(function (g, h) {
        e = g
        d = h
      })
      _.He(this, e, function (g) {
        g instanceof _.Ge ? f.cancel() : d(g)
        return sga
      }, this)
      return f.then(a, b, c)
    }
    _.sc.prototype.$goog_Thenable = !0
    _.sc.prototype.ma = _.aa(4)
    _.sc.prototype.isError = function (a) {
      return a instanceof Error
    }
    tga = function (a) {
      return _.ae(a.Ba, function (b) {
        return typeof b[1] === 'function'
      })
    }
    sga = {}
    oga = function (a) {
      if (a.Da && a.ka && tga(a)) {
        var b = a.Da, c = uga[b]
        c && (_.fa.clearTimeout(c.ha), delete uga[b])
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
            var g = f.call(e || a.Xa, b)
            g === sga && (g = void 0)
            g !== void 0 &&
              (a.qa = a.qa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              Vfa(b) ||
              typeof _.fa.Promise === 'function' && b instanceof _.fa.Promise
            ) d = !0, a.Fa = !0
          } catch (t) {
            b = t, a.qa = !0, tga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.qc)(a.Sa, a, !0),
          d = (0, _.qc)(a.Sa, a, !1),
          b instanceof _.sc ? (_.He(b, g, d), b.nb = !0) : b.then(g, d))
      c && (b = new vga(b), uga[b.ha] = b, a.Da = b.ha)
    }
    _.rga = function (a) {
      const b = new _.sc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    pga = function (a) {
      _.da.call(this)
      this.Xz = a
    }
    _.Wd(pga, _.da)
    pga.prototype.message = 'Deferred has already fired'
    pga.prototype.name = 'AlreadyCalledError'
    _.Ge = function (a) {
      _.da.call(this)
      this.Xz = a
    }
    _.Wd(_.Ge, _.da)
    _.Ge.prototype.message = 'Deferred was canceled'
    _.Ge.prototype.name = 'CanceledError'
    var vga = function (a) {
      this.ha = _.fa.setTimeout((0, _.qc)(this.throwError, this), 0)
      this.OO = a
    }
    vga.prototype.throwError = function () {
      delete uga[this.ha]
      throw this.OO
    }
    var uga = {}
    var Fga, Gga, Hga
    _.Dga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Xa
      }
      return !1
    }
    _.Le = function (a) {
      for (; a.Xa;) a = a.Xa
      return a
    }
    Fga = function (a) {
      var b = _.Ega
      const c = []
      a = _.Le(a)
      let d
      a.fz[b] && (d = a.fz[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].fz[b] && (d = a[e].fz[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.Oe = function (a, b) {
      for (var c = a; c; c = c.Xa) {
        if (c.isDisposed()) throw new _.tfa([b])
        if (c.fz[b]) return c.fz[b][0]
        if (c.uc[b]) break
      }
      if (c = a.wb[b]) {
        c = c(a)
        if (c == null) throw Error('W`' + b)
        _.Ne(a, b, c)
        return c
      }
      return null
    }
    _.Ne = function (a, b, c) {
      if (a.isDisposed()) _.Vb(c)
      else {
        a.fz[b] = [c, !0]
        var d = Gga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Yb[b]
        b instanceof _.xe && _.nc(b, c.constructor)
      }
    }
    Gga = function (a, b, c) {
      const d = [], e = a.Qa[c]
      e && (_.saa(e, function (f) {
        _.Dga(f.appContext, b) && (d.push(f.d), _.Da(e, f))
      }),
        e.length == 0 && delete a.Qa[c])
      return d
    }
    Hga = function (a, b) {
      a.Qa && _.bc(a.Qa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Pe = class extends _.Yb {
      constructor() {
        super()
        this.fz = {}
        this.Yb = {}
        this.wb = {}
        this.Qa = {}
        this.Sa = {}
        this.uc = {}
        this.Bb = new _.oc()
        this.Yd = !0
        this.Xa = null
        const a = _.Le(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.Oe(this, a)
        if (b == null) throw Error('V`' + a)
        return b
      }
      Db() {
        if (_.Le(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Le(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.fz) {
          a = this.fz[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.fz = null
        this.Yd && this.Bb.dispose()
        Hga(this, this)
        this.Qa = null
        _.Vb(this.Ed)
        this.uc = this.Ed = null
        super.Db()
      }
      qr() {
        return this.Bb
      }
    }
    _.Pe.prototype.Nb = _.aa(7)
    _.Pe.prototype.mb = _.aa(6)
    _.Pe.prototype.ub = _.aa(5)
    _.Ega = new _.xe('n73qwf', 'n73qwf')
    _.tc.prototype.clone = function () {
      return new _.tc(this.x, this.y)
    }
    _.tc.prototype.equals = function (a) {
      return a instanceof _.tc && _.Qe(this, a)
    }
    _.Qe = function (a, b) {
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
    _.Re = function (a, b) {
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
    var Iga = globalThis.trustedTypes, Vba = Iga, Xba
    _.vc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    $ba((a) => a``) || $ba((a) => a`\0`) || $ba((a) => a`\n`) ||
      $ba((a) => a`\u0000`)
    _.aca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Jga = _.zc('about:blank')
    _.Gc = _.zc('about:invalid#zClosurez')
    var Cc, bca, dca, Kga, fca
    Cc = class {
      constructor(a) {
        this.Zl = a
      }
    }
    _.Te = {
      Rrd: Dc('tel'),
      Qld: new Cc((a) => /^callto:\+?\d*$/i.test(a)),
      prd: new Cc((a) => a.indexOf('ssh://') === 0),
      Mqd: Dc('rtsp'),
      Qgc: Dc('data'),
      rlc: Dc('http'),
      slc: Dc('https'),
      EXTENSION: new Cc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      Xjc: Dc('ftp'),
      Ltc: new Cc((a) => /^[^:]*([/?#]|$)/.test(a)),
      koc: Dc('mailto'),
      bpd: Dc('intent'),
      wpd: Dc('market'),
      epd: Dc('itms'),
      fpd: Dc('itms-appss'),
      hpd: Dc('itms-services'),
      Xmd: Dc('fb-messenger'),
      Msd: Dc('whatsapp'),
      grd: new Cc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      krd: Dc('sms'),
      Esd: Dc('vnd.youtube'),
      Cod: Dc('googlehome'),
      Dod: Dc('googlehomesdk'),
      LINE: Dc('line'),
    }
    bca = [_.Te.Qgc, _.Te.rlc, _.Te.slc, _.Te.koc, _.Te.Xjc, _.Te.Ltc]
    dca = typeof URL === 'function'
    Kga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    fca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.cca = () => {}
    _.Lc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Ue = new _.Lc(_.wc, Iga ? Iga.emptyHTML : '')
    _.Lga = {
      ood: 0,
      Imd: 1,
      Jmd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Rc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Lga[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.kca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Mga = new _.kca(_.wc, Iga ? Iga.emptyScript : '')
    _.nca = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    var sca =
      'alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource'
        .split(' ')
    _.zd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.nda = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Nga = Math.random() * 2147483648 | 0
    _.Ve = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Oca = /^[a-z][a-z\d-]*$/i,
      Pca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Sca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Tca = ['action', 'formaction', 'href']
    _.Oga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Pga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Rga
    _.Qga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Rga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Ot: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Ot: 1 }
        : { Ot: 0 }
    }
    _.Xe = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Sga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Tga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Uga = [
        ['A', new Map([['href', { Ot: 7 }]])],
        ['AREA', new Map([['href', { Ot: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Ot: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Ot: 5 }], ['srcset', { Ot: 6 }]])],
        ['IMG', new Map([['src', { Ot: 5 }], ['srcset', { Ot: 6 }]])],
        ['VIDEO', new Map([['src', { Ot: 5 }]])],
        ['AUDIO', new Map([['src', { Ot: 5 }]])],
      ],
      Vga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Wga = [
        ['dir', {
          Ot: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Ot: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Ot: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Ot: 5 }],
        ['target', {
          Ot: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Xga = new _.Xe(new Set(Tga), new Map(Uga), new Set(Vga), new Map(Wga)),
      Yga = new _.Xe(
        new Set(Tga.concat(['BUTTON', 'INPUT'])),
        new Map(Uga),
        new Set(Vga.concat(['class', 'id', 'name'])),
        new Map(Wga.concat([['style', { Ot: 1 }]])),
      ),
      Zga = new _.Xe(
        new Set(
          Tga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Uga),
        new Set(
          Vga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Wga.concat([['style', { Ot: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var $ga
    _.aha = function (a, b, c) {
      b = Vca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Xca(g)
          ? (g = Wca(g), g = g === null ? 2 : _.Qga(a.oa, g) ? 1 : 2)
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
        } else if (Xca(d)) g = $ga(a, d, c)
        else throw Error('Z')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    $ga = function (a, b, c) {
      const d = Wca(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Rga(a.oa, h, d), f
        a: {
          if (f = e.conditions) {
            for (const [v, x] of f) {
              f = x
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
          switch (e.Ot) {
            case 1:
              md(c, h, t)
              break
            case 2:
              throw Error()
            case 3:
              md(c, h, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), md(c, h, e)) : md(c, h, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: h, NLb: d },
                  f = _.Uca(t),
                  (e = a.ha(f, e)) && md(c, h, e.toString()))
                : md(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, NLb: d }
                f = []
                for (const v of t.split(',')) {
                  const [x, A] = v.trim().split(/\s+/, 2)
                  f.push({ url: x, V7a: A })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Uca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), V7a: v.V7a })
                }
                md(c, h, Yca(f))
              } else md(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, NLb: d }
                f = _.Uca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.eca(e)
              e = f !== void 0 && Kga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              md(c, h, e)
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
        return _.Nca(_.aha(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Zca = new _.bha(Xga)
    _.cha = new _.bha(Yga)
    _.dha = new _.bha(Zga)
    _.eha = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { Ot: 4 })
      a.ha = new _.Xe(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.Ye = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.Xe(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.fha = class {
      constructor() {
        this.na = !1
        this.ha = Xga
      }
    }
    _.Ze = class extends _.fha {
      build() {
        if (this.na) throw Error('ea')
        this.na = !0
        return new _.bha(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var gha, iha, uha, vha, wha
    _.qd = function (a) {
      return a ? new _.$e(_.af(a)) : hea || (hea = new _.$e())
    }
    _.bf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.cf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.df = function (a, b) {
      _.bc(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : gha.hasOwnProperty(d)
          ? a.setAttribute(gha[d], c)
          : _.ia(d, 'aria-') || _.ia(d, 'data-')
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
    _.ef = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.uc(a.clientWidth, a.clientHeight)
    }
    _.gf = function (a) {
      return a ? a.defaultView : window
    }
    _.jha = function (a, b) {
      const c = b[1], d = _.hha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.df(d, c))
      b.length > 2 && iha(a, d, b, 2)
      return d
    }
    iha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Fa(f) || _.Sd(f) && f.nodeType > 0
          ? e(f)
          : _.Yd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ea(f)
              : f,
            e,
          )
      }
    }
    _.hf = function (a) {
      return _.hha(document, a)
    }
    _.hha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.kha = function (a, b) {
      iha(_.af(a), a, arguments, 1)
    }
    _.jf = function (a) {
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
    _.kf = function (a) {
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
    _.lf = function (a) {
      return _.Sd(a) && a.nodeType == 1
    }
    _.mf = function (a) {
      return a.parentElement || null
    }
    _.nf = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.af = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.of = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.jf(a), a.appendChild(_.af(a).createTextNode(String(b)))
    }
    uha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    vha = { IMG: ' ', BR: '\n' }
    _.xha = function (a) {
      return a.hasAttribute('tabindex') && wha(a)
    }
    _.pf = function (a, b) {
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
    _.qf = function (a) {
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
    _.$e = function (a) {
      this.Vk = a || _.fa.document || document
    }
    _.k = _.$e.prototype
    _.k.kb = _.qd
    _.k.Df = function () {
      return this.Vk
    }
    _.k.Ya = function (a) {
      return _.bf(this.Vk, a)
    }
    _.k.$ = _.$e.prototype.Ya
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.Vk).getElementsByTagName(String(a))
    }
    _.k.SD = _.aa(9)
    _.k.Vb = _.aa(11)
    _.k.tc = _.aa(13)
    _.k.setProperties = _.df
    _.k.kj = function (a) {
      return _.ef(a || this.getWindow())
    }
    _.k.Fb = function (a, b, c) {
      return _.jha(this.Vk, arguments)
    }
    _.k.createElement = function (a) {
      return _.hha(this.Vk, a)
    }
    _.k.createTextNode = function (a) {
      return this.Vk.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.Vk.defaultView
    }
    _.k.hn = _.aa(14)
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
    _.k.Sj = _.jf
    _.k.ASb = _.lha
    _.k.Bva = _.mha
    _.k.Ava = _.nha
    _.k.removeNode = _.kf
    _.k.Klb = _.oha
    _.k.getChildren = _.pha
    _.k.Yta = _.rha
    _.k.Pab = _.sha
    _.k.GPb = _.tha
    _.k.isElement = _.lf
    _.k.isWindow = function (a) {
      return _.Sd(a) && a.window == a
    }
    _.k.wga = _.mf
    _.k.contains = _.nf
    _.k.Vab = _.af
    _.k.Lk = _.of
    _.k.hw = _.pf
    _.k.Vv = _.yha
    _.k.eP = _.qf
    Rd = Rd || {}
    var Aha = function () {
      _.Yb.call(this)
    }
    _.Wd(Aha, _.Yb)
    Aha.prototype.initialize = function () {}
    gda.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    gda.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.xfa(function (a) {
      gda.prototype.execute = a(gda.prototype.execute)
    })
    Rd.v0a = gda
    _.Wd(sd, _.Yb)
    sd.prototype.wa = Aha
    sd.prototype.ka = null
    sd.prototype.getId = function () {
      return this.qa
    }
    var Bha = function (a, b, c) {
        a.oa.push(new Rd.v0a(b, c))
      },
      Cha = function (a, b) {
        a.ma.push(new Rd.v0a(b, void 0))
      }
    sd.prototype.isLoaded = function () {
      return !!this.ka
    }
    sd.prototype.onLoad = function (a) {
      var b = new this.wa()
      b.initialize(a())
      this.ka = b
      b = (b = Dha(this.na, a())) || Dha(this.oa, a())
      b || (this.ma.length = 0)
      return b
    }
    sd.prototype.onError = function (a) {
      ;(a = Dha(this.ma, a)) && _.ha(Error('fa`' + a))
      this.na.length = 0
      this.oa.length = 0
    }
    var Dha = function (a, b) {
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
    sd.prototype.Db = function () {
      sd.Zb.Db.call(this)
      _.Vb(this.ka)
    }
    Rd.u0a = sd
    var rf = {
      ERROR: 'error',
      IDLE: 'idle',
      Ana: 'active',
      uzc: 'userIdle',
      tzc: 'userActive',
    }
    _.k = hda.prototype
    _.k.l3b = function () {}
    _.k.VUa = function () {}
    _.k.rAa = function () {}
    _.k.Jpa = function () {
      throw Error('ga')
    }
    _.k.zza = function () {
      throw Error('ha')
    }
    _.k.zPb = function () {
      return this.qa
    }
    _.k.wAa = function (a) {
      this.qa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.kVb = function () {
      return !1
    }
    var Eha, Fha
    Eha = function (a, b) {
      const c = b.styleSheets.length, d = fda(a, new _.$e(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Fha = function (a) {
      return _.$d(Fga(a), (b) => b.Vab())
    }
    _.Gha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.gea('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.qa
            if (b) {
              if (b = Fha(b), b.length == 0) Eha(a, document)
              else for (let c of b) Eha(a, c)
            } else Eha(a, document)
          }
        })
      }
    }
    var Hha, Iha, Kha
    Hha = function (a) {
      throw Error('ia`' + a.ka)
    }
    Iha = function (a, b) {
      return new TypeError(
        'ja`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.tf = function (a) {
      const b = _.sf(a)
      b === null && Hha(a)
      return b
    }
    _.uf = function (a, b) {
      let c
      return (c = _.sf(a)) != null ? c : b
    }
    _.sf = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Iha(a, 'string')
    }
    _.Jha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Iha(a, 'boolean')
    }
    _.vf = function (a, b) {
      let c
      return (c = _.Jha(a)) != null ? c : b
    }
    _.wf = function (a, b) {
      let c
      return (c = Kha(a)) != null ? c : b
    }
    Kha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Iha(a, 'number')
    }
    _.Mha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Lha(a, b)
    }
    _.Lha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.td(c + e + ']', d))
    }
    _.td = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.tf(this) : _.uf(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Kha(this)
          b === null && Hha(this)
        } else b = _.wf(this, a)
        return b
      }
      toString() {
        return _.tf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.wf(this, b) : _.uf(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Mha(this)
          b === null && Hha(this)
          return b
        }
        b = _.Mha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Hha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.td(c + d, b[d])
          return a
        }
        throw Iha(this, 'object')
      }
    }
    var lda
    lda = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Nha = /#|$/
    var Oha,
      uda,
      xf,
      Rha,
      Uha,
      Sha,
      Tha,
      Vha,
      Wha,
      Xha,
      Yha,
      Cda,
      Zha,
      Pha,
      Qha,
      $ha,
      aia
    _.Ad = function (a, b = !0) {
      const c = Oha(a), d = new Pha(), e = _.vd(c)[5]
      _.bc(Qha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && xf(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Rha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.xd(6, c)) && _.oda(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Oha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    uda = function (a) {
      a = Oha(a)
      a = _.wd(_.xd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    xf = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Rha = function (a, b) {
      a.ka = b
    }
    Uha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Sha(a)
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
          'd' in a.ha || xf(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.yf(a, 'br') != '1' && _.yf(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.yf(a, 'rb') == '1' && c('rb'),
          _.yf(a, 'zs') !== '0' && c('zs'),
          Tha(a) !== '' && c('wt'),
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
    _.yf = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Sha = function (a) {
      a = _.yf(a, 'md')
      return !!a && a !== '0'
    }
    Tha = function (a) {
      switch (_.yf(a, 'wt')) {
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
    Vha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), xf(a, 'exm', b.join(',')))
        : xf(a, 'exm', null)
    }
    Wha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), xf(a, 'excm', b.join(',')))
        : xf(a, 'excm', null)
    }
    Xha = function (a) {
      return (a = _.yf(a, 'm')) ? a.split(',') : []
    }
    Yha = function (a, b) {
      const c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          const e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      xf(a, 'ee', c.join(';'))
    }
    Cda = function (a) {
      var b = _.yf(a, 'ee')
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
    Zha = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    Pha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Uha(this)
        const b = _.rda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Pha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Qha = {
      Lqd: 'k',
      mmd: 'ck',
      Fpd: 'm',
      Rmd: 'exm',
      Pmd: 'excm',
      qld: 'am',
      wld: 'amc',
      xpd: 'mm',
      Iqd: 'rt',
      Tod: 'd',
      Qmd: 'ed',
      nrd: 'sv',
      rmd: 'deob',
      Pld: 'cb',
      Wld: 'ccb',
      erd: 'rs',
      Rqd: 'sdch',
      apd: 'im',
      smd: 'dg',
      Mmd: 'br',
      Lmd: 'br-d',
      Nmd: 'rb',
      Usd: 'zs',
      Nsd: 'wt',
      Wmd: 'ee',
      mrd: 'sm',
      METADATA: 'md',
      Eod: 'gssmodulesetproto',
      Bsd: 'ujg',
      Asd: 'sp',
      crd: 'slk',
      wmd: 'dti',
      dpd: 'ic',
    }
    $ha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    aia = RegExp('^[a-zA-Z0-9-_*]+$')
    var yda = null, xda = new Map()
    var Ada = !1, Bda = !1
    var bia = (a) => {
        a = a.clone()
        Zha(a)
        xf(a, 'dg', null)
        xf(a, 'd', '0')
        Vha(a, null)
        Wha(a, null)
        return a
      },
      cia = !0,
      dia = (a, b, { cssRowKey: c, W4: d, WY: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!aia.test(g)) throw Error('ka`' + g) }
        xf(a, 'm', b.join(','))
        e && Yha(a, e)
        c && (xf(a, 'ck', c), d ? xf(a, 'rs', d) : cia && (cia = !1))
        if (f) {
          if (f != null && !$ha.test(f)) throw Error('la`' + f)
          xf(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.yd(document.location.href) + a)
        return _.xc(a)
      },
      eia = (
        a,
        b,
        { Olb: c = [], cssRowKey: d, W4: e, WY: f, callback: g } = {},
      ) => {
        a = bia(a)
        Wha(a, c)
        return dia(a, b, { cssRowKey: d, W4: e, WY: f, callback: g })
      },
      fia = (
        a,
        b,
        { Plb: c = [], Olb: d = [], cssRowKey: e, W4: f, WY: g, callback: h } =
          {},
      ) => {
        a = bia(a)
        xf(a, 'd', '1')
        Vha(a, c)
        Wha(a, d)
        return dia(a, b, { cssRowKey: e, W4: f, WY: g, callback: h })
      }
    _.gia = function (a) {
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
    _.iia = function () {}
    _.Wd(_.iia, _.Eda)
    _.iia.prototype.VS = function () {
      return new XMLHttpRequest()
    }
    _.hia = new _.iia()
    var kia = function (a) {
        return jia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      jia = function (a) {
        const b = {}, c = b.Cba ? b.Cba.VS() : _.hia.VS()
        return (new _.De(function (d, e) {
          let f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Af('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.fa.clearTimeout(f)
              var g
              !(g = _.gia(c.status)) && (g = c.status === 0) &&
                (g = _.mda(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new lia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Af('Network error', a, c))
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
          b.lw > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new mia(a, c))
          }, b.lw))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new Af('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Fe &&
            c.abort()
          throw d
        })
      },
      Af = function (a, b, c) {
        _.da.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.Wd(Af, _.da)
    Af.prototype.name = 'XhrError'
    var lia = function (a, b, c) {
      Af.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Wd(lia, Af)
    lia.prototype.name = 'XhrHttpError'
    var mia = function (a, b) {
      Af.call(this, 'Request timed out', a, b)
    }
    _.Wd(mia, Af)
    mia.prototype.name = 'XhrTimeoutError'
    var pia, ria, sia, qia, xia, yia, uia, tia, via, wia
    _.nia = function (a, b, c, d, e = b) {
      let f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          h = () => {}
        },
        h = () => {
          g()
          const v = e.filter((x) => !_.kc().Dt(x).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.kc().Dt(v)
        v.isLoaded() ? t() : (v.na.push(new Rd.v0a(t, void 0)), Cha(v, t))
      })
      a.onload = () => h()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.oia = function (a, b) {
      let c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        const f = b[e]
        a.ma[f] || (a.ma[f] = !0, a.Da.push(f), c = !0, d.push(f))
      }
      c && (a.Qa = !1)
    }
    pia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            uda(b) && !_.Ad(b).ka.endsWith('_/js/')
        ) {
          b = Xha(_.Ad(b))
          for (const c of b) a.Ea.includes(c) || a.Ea.push(c)
        }
      }
    }
    ria = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      qia(a, b, (g, h, t = h) => {
        a.Xa && f ? a.ab(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    sia = function (a, b) {
      return b.filter((c) => !a.ma[c])
    }
    qia = function (a, b, c, d) {
      if (a.ka) {
        return a.ka.then(() => {
          qia(a, b, c, d)
        }),
          !0
      }
      if (!a.wa) {
        const f = []
        var e = Object.assign({}, a.ma)
        tia(
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
          h = uia(a, g, d),
          t = _.yc(h).toString()
        for (; t.length > a.ZCa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.ZCa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = uia(a, g, d),
              t = _.yc(h).toString()
          } else {return a.wa
              ? (a.wa = !1,
                a.ka = via(a).then((v) => {
                  wia(a, v, d)
                }),
                qia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.wa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    xia = function (a) {
      a.Qa || (a.Qa = !0, a.Da.sort())
      return a.Da
    }
    yia = function (a) {
      a = a.Ea
      a.sort()
      return a
    }
    uia = function (a, b, c) {
      return a.wa
        ? fia(a.na, b, {
          cssRowKey: a.Sa,
          W4: a.Oa,
          WY: c,
          Plb: xia(a),
          Olb: yia(a),
        })
        : eia(a.na, b, { cssRowKey: a.Sa, W4: a.Oa, Plb: xia(a), Olb: yia(a) })
    }
    _.Bf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.ma[e] && (delete a.ma[e], _.Da(a.Da, e), c.push(e))
      }
    }
    _.zia = function (a, b, c, d, e, f, g = d) {
      a.qa = c
      a.Ba.insertBefore(c, a.Ba.firstChild)
      _.nia(c, d, () => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        _.Bf(a, h)
        a.ka
          ? a.ka.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    tia = function (a, b, c, d, e, f = {}) {
      const g = _.kc()
      for (let h of b) {
        b = g.Dt(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        tia(a, t, c, d, e, f)
        c(b)
      }
    }
    via = function (a) {
      a = a.na.clone()
      Zha(a)
      xf(a, 'dg', null)
      xf(a, 'md', '1')
      return kia(a.toString())
    }
    wia = function (a, b, c) {
      _.kc().rAa((b || {}).moduleGraph)
      tia(a, xia(a), (d) => {
        _.oia(a, [d.getId()])
      }, c)
      a.ka = null
    }
    _.Dd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.mb = a
        this.na = _.Ad(_.yc(a).toString(), !0)
        this.Sa = b
        this.Oa = c
        this.wa = d
        this.ma = {}
        this.Da = []
        this.Qa = !0
        this.Ea = (a = _.yf(this.na, 'excm')) ? a.split(',') : []
        this.nb = e
        this.aDa = !1
        this.Era = 'anonymous'
        this.ZCa = 4043
        this.Ba = document.head || document.documentElement
        this.ka = this.qa = null
        this.ob = !0
        _.Dda()
        this.logger = null
        _.oia(this, Xha(this.na))
        this.fetchPriority = void 0
        this.Xa = !1
        this.Fa()
      }
      Za(a, b, { WY: c, onError: d, yja: e, zQc: f } = {}) {
        if (!a) throw Error('pa')
        if (this.nb) {
          for (const g of document.getElementsByTagName('style')) pia(this, g)
          for (const g of document.getElementsByTagName('link')) pia(this, g)
        }
        ria(this, sia(this, a), c, d, e, f)
      }
      ab() {
        _.Id(function* () {
          throw Error('qa')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.yc(a)
        var f = this.aDa, g = this.Era, h = this.fetchPriority
        const t = _.hf('SCRIPT')
        _.$c(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.oia(this, b)
        _.zia(this, a, t, b, c, d, e)
      }
    }
    var Fda = new Uint8Array(123)
    var Aia = []
    var Bia = function (a) {
        switch (a.type) {
          case Cf.Type.wBb:
            return 'Unauthorized'
          case Cf.Type.hZa:
            return 'Consecutive load failures'
          case Cf.Type.TIMEOUT:
            return 'Timed out'
          case Cf.Type.qzb:
            return 'Out of date module id'
          case Cf.Type.ZZa:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Cf = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.Plb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Bia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    Rd.Cz = Cf
    Rd.Cz.Type = { wBb: 0, hZa: 1, TIMEOUT: 2, qzb: 3, ZZa: 4 }
    var Df = function () {
      hda.call(this)
      this.Za = null
      this.ka = {}
      this.na = []
      this.wa = []
      this.ab = []
      this.ha = []
      this.Ea = []
      this.ma = {}
      this.ob = {}
      this.Ba = this.Sa = new Rd.u0a([], '')
      this.qb = null
      this.Qa = new _.sc()
      this.mj = null
      this.wb =
        this.Lb =
        this.Bb =
        this.nb =
        this.mb =
          !1
    }
    _.Wd(Df, hda)
    var Cia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Wd(Cia, _.da)
    Df.prototype.l3b = function (a) {
      this.mb = a
    }
    Df.prototype.VUa = function (a) {
      this.nb = a
    }
    Df.prototype.rAa = function (a, b) {
      if (!(this instanceof Df)) this.rAa(a, b)
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
                for (let x = 0; x < t.length; x++) {
                  v -= t[x].length === 0 ? 1 : Number(t[x]), t[x] = c[v]
                }
              }
              v = 0
              if (f.length === 0) v = 1
              else if (f.charAt(0) === '+' || f.charAt(0) === '-') v = Number(f)
              v !== 0 && (d += v, f = 'sy' + d.toString(36))
            }
            c.push(f)
            Dia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Za = c
        } else if (a.startsWith('p$')) Eia(this, a)
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
            Dia(this, e, g)
          }
          this.Za = c
        }
        b && b.length
          ? (_.Ha(this.na, b), this.qb = _.raa(b))
          : this.Qa.ka || this.Qa.callback()
        Object.freeze(this.Za)
        Fia(this)
      }
    }
    var Eia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        Fda[
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
      var t = 0, v = 0, x = b.pos, A = b.buf.indexOf('|', b.pos)
      b.pos = A + 1
      for (A = 0; A < d; A++) {
        var I = Bd(b), L = I & 2, S = I & 1
        I >>>= 2
        S
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (S = x, x += I, I = c.substring(S, x))
        f[A] = I
        L && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        x = Gda(b), h[t] = x & 7, h[t + 1] = x >>> 3 & 7
      }
      c && (c = Gda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Bd(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        x = t === 0 ? Aia : Array(t)
        g[c] = x
        A = v
        for (L = 0; L < t; L++) A -= Bd(b), x[L] = e[A]
        e[v] === f[c] && v++
      }
      const { ids: ca, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < ca.length; b++) Dia(a, ca[b], ea[b])
      a.Za = ca
    }
    _.k = Df.prototype
    _.k.Dt = function (a) {
      return this.ka[a]
    }
    _.k.Jpa = function (a, b) {
      const c = this.Dt(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.zza = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.wAa = function (a) {
      Df.Zb.wAa.call(this, a)
      Fia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.kVb = function () {
      return this.Ea.length > 0
    }
    var Ef = function (a) {
        var b = a.Bb
        const c = a.isActive()
        c != b && (Gia(a, c ? rf.Ana : rf.IDLE), a.Bb = c)
        b = a.kVb()
        b != a.Lb && (Gia(a, b ? rf.tzc : rf.uzc), a.Lb = b)
      },
      Dia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Rd.u0a(c, b)
      },
      Iia = function (a, b, c) {
        const d = []
        _.Ia(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Dt(g)
          if (!h) throw Error('ra`' + g)
          const t = new _.sc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.qa)
            : (Hia(a, g, h, !!c, t), a.Oa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.nb
            ? _.Ke(a.Qa, (0, _.qc)(a.Xa, a, b))
            : a.na.length === 0
            ? a.Xa(b)
            : (a.ha.push(b), Ef(a)))
        return e
      },
      Hia = function (a, b, c, d, e) {
        Bha(c, e.callback, e)
        Cha(c, function (f) {
          e.ha(new Cia(b, f))
        })
        a.Oa(b) ? d && (Jia(a, b), Ef(a)) : d && Jia(a, b)
      }
    Df.prototype.Xa = function (a, b = 0, c) {
      const d = Kia(this, a)
      this.nb ? _.Ha(this.na, d) : this.na = d
      this.wa = this.mb ? a : _.Ea(d)
      Ef(this)
      if (d.length !== 0) {
        this.ab.push.apply(this.ab, d)
        a = this.oa
        if (!a) throw Error('sa')
        if (Object.keys(this.ma).length > 0 && !a.ob) throw Error('ta')
        c = (0, _.qc)(a.Za, a, _.Ea(d), this.ka, {
          WY: this.ma,
          zQc: !!c,
          onError: (e, f, g = !1) =>
            Lia(this, this.wa, d, e != null ? e : void 0, f, b, g),
          nya: (0, _.qc)(this.Nb, this),
        })
        ;(a = Math.pow(b, 2) * 5E3) ? _.fa.setTimeout(c, a) : c()
      }
    }
    var Kia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('ua`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Mia(a, b[d]))
        _.Ia(c)
        return !a.mb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Mia = function (a, b) {
        const c = _.Lba(a.ab), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Dt(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Dt(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ia(d)
        return d
      },
      Fia = function (a) {
        if (a.Ba == a.Sa) {
          a.Ba = null
          const b = a.Sa.onLoad((0, _.qc)(a.zPb, a))
          b && b.length &&
            Nia(a, new Rd.Cz(Rd.Cz.Type.ZZa, void 0, void 0, void 0, b[0]))
          Ef(a)
        }
      }
    Df.prototype.Fa = function () {
      if (this.Ba) {
        var a = this.Ba.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Dt(c)
            d && !d.isLoaded() && (this.zza(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.qc)(this.zPb, this))) && b.length &&
            Nia(this, new Rd.Cz(Rd.Cz.Type.ZZa, void 0, void 0, void 0, b[0])),
            _.Da(this.Ea, a),
            _.Da(this.na, a),
            this.na.length === 0 && Oia(this),
            this.qb && a == this.qb && (this.Qa.ka || this.Qa.callback()),
            Ef(this),
            this.Ba = null)
      }
    }
    Df.prototype.Oa = function (a) {
      if (_.za(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.za(this.ha[b], a)) return !0
      }
      return !1
    }
    Df.prototype.load = function (a, b) {
      return Iia(this, [a], b)[a]
    }
    Df.prototype.Da = function (a) {
      return Iia(this, a)
    }
    var Jia = function (a, b) {
      _.za(a.Ea, b) || a.Ea.push(b)
    }
    Df.prototype.ub = function (a) {
      this.Ba && this.Ba.getId() === 'synthetic_module_overhead' &&
        (this.Fa(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Pia(this, this.ka[a].ha || [], (b) => {
        b.ka = new Aha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.Ba = this.Dt(a)
    }
    var Lia = function (a, b, c, d, e, f = 0, g = !1) {
      f = g ? 0 : f + 1
      g = _.Ea(c)
      a.wa = b
      c.forEach(_.Ud(_.Da, a.ab), a)
      d == 401
        ? (Nia(a, new Rd.Cz(Rd.Cz.Type.wBb, d)), a.ha.length = 0)
        : d == 410
        ? (Qia(a, new Rd.Cz(Rd.Cz.Type.qzb, d)), Oia(a))
        : f >= 3
        ? (Qia(a, new Rd.Cz(Rd.Cz.Type.hZa, d, g, e)), Oia(a))
        : a.Xa(a.wa, f, d == 8001 || !1)
    }
    Df.prototype.Nb = function () {
      Qia(this, new Rd.Cz(Rd.Cz.Type.TIMEOUT))
      Oia(this)
    }
    var Qia = function (a, b) {
        a.wa.length > 1
          ? a.ha = a.wa.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Nia(a, b)
      },
      Nia = function (a, b) {
        const c = a.wa
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Mia(this, g)
            return _.ae(c, function (t) {
              return _.za(h, t)
            })
          }, a)
          _.Ha(d, f)
        }
        for (e = 0; e < c.length; e++) _.Ba(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ha.length; f++) _.Da(a.ha[f], d[e])
          _.Da(a.Ea, d[e])
        }
        if (e = a.ob[rf.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(rf.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.wa.length = 0
        Ef(a)
      },
      Oia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Dt(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Xa(b)
            return
          }
        }
        Ef(a)
      },
      Gia = function (a, b) {
        a = a.ob[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Pia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Dt(f),
            !e[f] && d(b) && (e[f] = !0, Pia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Df.prototype.dispose = function () {
      _.Wb(_.cc(this.ka), this.Sa)
      this.ka = {}
      this.na = []
      this.wa = []
      this.Ea = []
      this.ha = []
      this.ob = {}
      this.wb = !0
    }
    Df.prototype.isDisposed = function () {
      return this.wb
    }
    _.jc = function () {
      return new Df()
    }
    var Ria, Sia, Via, Wia, Xia, Yia, Tia, Uia
    Ria = [5E3, 2E4]
    Sia = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Fa()
    }
    Via = function (a, b) {
      b = b.filter((c) => !a.Oa(c) && !a.Dt(c).isLoaded())
      b.length > 0 && (Tia(a, ...b), a.na.push(b), Uia(a))
    }
    Wia = function (a, b) {
      return new _.De((c, d) => {
        const e = a.Dt(b)
        e.isLoaded() ? c(a.qa) : (Bha(e, () => {
          c(a.qa)
        }),
          Cha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Rd.Cz && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Xia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Dt(f),
          !e[f] && d(b) && (e[f] = !0, Xia(a, b.ha || [], c, d, e), c(b))
      }
    }
    Yia = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Tia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Uia = function (a) {
      for (; a.wa < a.Ea && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Dt(c).isLoaded())
        if (b.length > 0) {
          a.wa++
          let c = () => {
            a.wa--
            Uia(a)
            c = () => {}
          }
          _.aga(b.map((f) => Wia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.oa.ob) throw Error('ta')
            a.oa.Za(b, a.ma, {
              WY: a.ha,
              onError: (f, g) => {
                const h = Ria[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (Yia(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Dt(t)
                      if (!t.isLoaded()) {
                        t.onError(new Rd.Cz(Rd.Cz.Type.hZa, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.Zia = class extends hda {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Ea = Infinity
        this.wa = 0
        this.na = []
        this.ha = Object.create(null)
        this.mj = null
        this.ka = this.Dt('{base}')
      }
      rAa() {
        Sia(this)
      }
      wAa(a) {
        super.wAa(a)
        Sia(this)
      }
      Dt(a) {
        let b = this.ma[a]
        b || (b = new Rd.u0a([], a), this.ma[a] = b)
        return b
      }
      Jpa(a, b) {
        this.Dt(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      zza(a, b) {
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
        Via(this, [a])
        return Wia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Wia(this, d), c.push(d))
        })
        Via(this, c)
        return b
      }
      ub(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Fa()
        let c, d
        Xia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new Aha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Dt(a)
      }
      Fa() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Dt(c).isLoaded() || (this.zza(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.qa)
          this.ka = null
          ;(!this.Oa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          Yia(this, a)
        }
      }
      VUa(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var $ia = new _.Zia()
    $ia.VUa(!0)
    $ia.wAa(new _.Pe())
    _.Oba($ia)
    ;(new _.Gha($ia)).init()
    _.Hda()
    _.vf(_.ud('dLc0B'), !1)
      ? (0, _.Ed)('bYMqif').then(() => {})
      : (0, _.Ed)('LQaXg').then(() => {})
    _._ModuleManager_initialize = function (a, b) {
      if (!_.ic) {
        if (!_.jc) return
        _.Oba(_.jc())
      }
      _.ic.rAa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
