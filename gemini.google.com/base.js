// Source: https://www.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.XLoDWcgivl0.2018.O/am=IzQIjIHA8RtBXwAIgGCAAQ/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk2UMgUOOi1APyiFDpe6HVnIQtoacg/ee=DGWCxb:CgYiQ;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.MJXKBJrmmqM.libheifWasm.O%3A%3BBardChatUi.N24wLsLvsh8.loadC2PAExtractorWasm.O%3A%3BBardChatUi.B93gspnpKWM.loadWasmSipCoca.O%3A%3B
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
      Uaa,
      cba,
      dba,
      eba,
      hba,
      kba,
      lba,
      qba,
      vba,
      tba,
      uba,
      Sba,
      Uba,
      Wba,
      Yba,
      Fc,
      eca,
      gca,
      kca,
      Fca,
      Gca,
      Hca,
      nd,
      Ica,
      Qca,
      Rca,
      td,
      Sca,
      Tca,
      dda,
      fda,
      gda,
      jda,
      qda,
      Dd,
      aaa,
      Hd,
      sda,
      tda,
      uda,
      Id,
      vda,
      xda,
      Jd,
      wda,
      yda,
      zda,
      Cda,
      Rda,
      Qda,
      Sda
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
    _.Va = function (a) {
      return a != null && a[_.Ta] === _.Ua
    }
    _.Ya = function (a, b) {
      return b === void 0
        ? a.kc !== _.Xa && !!(2 & (a.Lg[_.Qa] | 0))
        : !!(2 & b) && a.kc !== _.Xa
    }
    _.Gaa = function (a, b) {
      a.kc = b ? _.Xa : void 0
    }
    _.Haa = function (a) {
      return a
    }
    _.Za = function (a) {
      a.sAd = !0
      return a
    }
    _.fb = function (a) {
      var b = a
      if ((0, _.bb)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.db)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.eb
        ? BigInt(a)
        : a = Iaa(a)
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
    _.pb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.ob)(a)
        case 'string':
          return Taa.test(a)
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
    Uaa = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Oaa(a)
      return _.jb(_.gb, _.hb)
    }
    _.Vaa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) || (_.ib(a), a = _.Maa(_.gb, _.hb))
      return a
    }
    _.Waa = function (a) {
      a = (0, _.sb)(a)
      a >= 0 && (0, _.tb)(a) ? a = String(a) : (_.ib(a), a = _.jb(_.gb, _.hb))
      return a
    }
    _.Xaa = function (a) {
      return (0, _.tb)(a) ? _.fb(_.Vaa(a)) : _.fb(_.Waa(a))
    }
    _.Yaa = function (a) {
      var b = (0, _.sb)(Number(a))
      if ((0, _.tb)(b) && b >= 0) return String(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return Uaa(a)
    }
    _.Zaa = function (a) {
      var b = (0, _.sb)(Number(a))
      if ((0, _.tb)(b) && b >= 0) return _.fb(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Oa() ? _.fb((0, _.ub)(64, BigInt(a))) : _.fb(Uaa(a))
    }
    _.$aa = function (a) {
      const b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.fb((0, _.ub)(64, a))
      if (_.pb(a)) return b === 'string' ? _.Zaa(a) : _.Xaa(a)
    }
    _.vb = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.xb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.bba = function (a, b, c, d) {
      if (_.Va(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.yb] || (b[_.yb] = _.aba(b)) : new b()
          : void 0
      }
      c = a[_.Qa] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.Qa] = d)
      return new b(a)
    }
    _.aba = function (a) {
      a = new a()
      _.Sa(a.Lg)
      return a
    }
    cba = function (a) {
      return a
    }
    dba = function (a, b, c, d, e, f) {
      a = _.bba(a, d, c, f)
      e && (a = _.zb(a))
      return a
    }
    eba = function (a) {
      return [a, this.get(a)]
    }
    _.fba = function (a) {
      const b = _.Ab(_.Bb)
      return b ? a[b] : void 0
    }
    hba = function (a, b) {
      b < 100 || _.lb(gba, 1)
    }
    _.Cb = function (a, b, c, d) {
      const e = d !== void 0
      d = !!d
      var f = _.Ab(_.Bb), g
      !e && f && (g = a[f]) && g.ENa(hba)
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
        g = ((I = iba) != null ? I : _.Haa)(g - A, A, a, t, void 0) + A
      }
      b = void 0
      for (I = 0; I < h; I++) {
        let R = a[I]
        if (R != null && (R = c(R, d)) != null) {
          if (x && I >= g) {
            const ca = I - A
            var L = void 0
            ;((L = b) != null ? L : b = {})[ca] = R
          } else f[I] = R
        }
      }
      if (t) {
        for (let R in t) {
          L = t[R]
          if (L == null || (L = c(L, d)) == null) continue
          h = +R
          let ca
          if (x && !Number.isNaN(h) && (ca = h + A) < g) f[ca] = L
          else {
            let ea
            ;((ea = b) != null ? ea : b = {})[R] = L
          }
        }
      }
      b && (v ? f.push(b) : f[g] = b)
      e && _.Ab(_.Bb) && (a = _.fba(a)) && 'function' == typeof _.jba &&
        a instanceof _.jba && (f[_.Bb] = a.ha())
      return f
    }
    kba = function (a) {
      a[0] = _.Db(a[0])
      a[1] = _.Db(a[1])
      return a
    }
    _.Db = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.Eb)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            const b = a[_.Qa] | 0
            return a.length === 0 && b & 1 ? void 0 : _.Cb(a, b, _.Db)
          }
          if (_.Va(a)) return lba(a)
          if (a instanceof _.Fb) return _.Gb(a)
          if (a instanceof _.Ib) {
            return a = a.size !== 0 ? a.dZa(kba) : void 0, a
          }
          return
      }
      return a
    }
    _.oba = function (a, b) {
      if (b) {
        iba = b == null || b === _.Haa || b[mba] !== nba ? _.Haa : b
        try {
          return lba(a)
        } finally {
          iba = void 0
        }
      }
      return lba(a)
    }
    lba = function (a) {
      a = a.Lg
      return _.Cb(a, a[_.Qa] | 0, _.Db)
    }
    _.rba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('D')
        e = a[_.Qa] | 0
        if (pba && 1 & e) throw Error('E')
        2048 & e && !(2 & e) && qba()
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
    qba = function () {
      if (pba) throw Error('H')
      _.lb(sba, 5)
    }
    vba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.Qa] | 0
        return a.length === 0 && c & 1 ? void 0 : tba(a, c, b)
      }
      if (_.Va(a)) return uba(a)
      if (a instanceof _.Ib) {
        b = a.nY
        if (b & 2) return a
        if (!a.size) return
        c = _.Sa(a.dZa())
        if (a.A3) {
          for (a = 0; a < c.length; a++) {
            const d = c[a]
            let e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Va(e)
              ? e = uba(e)
              : Array.isArray(e)
              ? e = tba(e, e[_.Qa] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if (a instanceof _.Fb) return a
    }
    tba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.Jb(a, b, !1, c && !(b & 16))
        : (_.Ra(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.wba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Gaa(a, !0)
      a.sTa = _.Xa
      return a
    }
    uba = function (a) {
      const b = a.Lg, c = b[_.Qa] | 0
      return _.Ya(a, c) ? a : _.xba(a, b, c) ? _.wba(a, b) : _.Jb(b, c)
    }
    _.Jb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.Cb(a, b, vba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.Qa] = b
      return a
    }
    _.zb = function (a) {
      const b = a.Lg, c = b[_.Qa] | 0
      return _.Ya(a, c)
        ? _.xba(a, b, c) ? _.wba(a, b, !0) : new a.constructor(_.Jb(b, c, !1))
        : a
    }
    _.Kb = function (a) {
      if (a.kc !== _.Xa) return !1
      var b = a.Lg
      b = _.Jb(b, b[_.Qa] | 0)
      _.Ra(b, 2048)
      a.Lg = b
      _.Gaa(a, !1)
      a.sTa = void 0
      return !0
    }
    _.Mb = function (a) {
      if (!_.Kb(a) && _.Ya(a, a.Lg[_.Qa] | 0)) throw Error()
    }
    _.Nb = function (a, b) {
      b === void 0 && (b = a[_.Qa] | 0)
      b & 32 && !(b & 4096) && (a[_.Qa] = b | 4096)
    }
    _.xba = function (a, b, c) {
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
    _.yba = function (a, b, c, d, e, f, g, h, t) {
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
      2 & b || !(4096 & b || 16 & b) || _.Nb(c, d)
      return a
    }
    _.zba = function (a, b, c) {
      a = _.Rb(a, b, c)
      return Array.isArray(a) ? a : _.Sb
    }
    _.Aba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Pb = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Bba = function (a) {
      a = [...a]
      for (let b = 0; b < a.length; b++) {
        const c = a[b] = [...a[b]]
        Array.isArray(c[1]) && (c[1] = _.Sa(c[1]))
      }
      return _.Eaa(a)
    }
    _.Wb = function (a, b, c, d, e) {
      _.Mb(a)
      const f = a.Lg
      _.Ob(
        f,
        f[_.Qa] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Cba = function (a, b, c, d, e, f, g, h, t) {
      var v = _.Ya(a, c)
      f = v ? 1 : f
      h = !!h || f === 3
      v = t && !v
      ;(f === 2 || v) && _.Kb(a) && (b = a.Lg, c = b[_.Qa] | 0)
      a = _.zba(b, e, g)
      var x = a === _.Sb ? 7 : a[_.Qa] | 0, A = _.Aba(x, c)
      if (t = !(4 & A)) {
        var I = a, L = c
        const R = !!(2 & A)
        R && (L |= 2)
        let ca = !R, ea = !0, ka = 0, Ga = 0
        for (; ka < I.length; ka++) {
          const La = _.bba(I[ka], d, !1, L)
          if (La instanceof d) {
            if (!R) {
              const Wa = _.Ya(La)
              ca && (ca = !Wa)
              ea && (ea = Wa)
            }
            I[Ga++] = La
          }
        }
        Ga < ka && (I.length = Ga)
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
        _.Pb(A) && (a = [...a], A = _.Qb(A, c), c = _.Ob(b, c, e, a, g))
        d = a
        v = A
        for (x = 0; x < d.length; x++) {
          I = d[x], A = _.zb(I), I !== A && (d[x] = A)
        }
        v |= 8
        A = v = d.length ? v | 4096 : v & -4097
        a[_.Qa] = A
      }
      return a = _.yba(a, A, b, c, e, g, f, t, h)
    }
    _.Qb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Dba = function (a, b) {
      return _.Xb(b, `[${a.substring(4)}`)
    }
    _.Yb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Zb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        const d = arguments[b]
        _.Fa(d) ? _.Zb.apply(null, d) : _.Yb(d)
      }
    }
    _.$b = function () {
      this.bP = this.bP
      this.c$ = this.c$
    }
    _.bc = function (a, b) {
      _.ac.call(this, a ? a.type : '')
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
      this.Sh = null
      a && this.init(a, b)
    }
    _.Fba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Eba
      this.removed = this.Rea = !1
    }
    _.cc = function (a, b, c) {
      for (const d in a) b.call(c, a[d], d, a)
    }
    _.Gba = function (a, b, c) {
      const d = {}
      for (const e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Hba = function (a, b, c) {
      for (const d in a) if (b.call(c, a[d], d, a)) return !0
      return !1
    }
    _.dc = function (a) {
      const b = []
      let c = 0
      for (const d in a) b[c++] = a[d]
      return b
    }
    _.fc = function (a) {
      for (const b in a) return !1
      return !0
    }
    _.hc = function (a) {
      const b = {}
      for (const c in a) b[c] = a[c]
      return b
    }
    _.ic = function (a, b) {
      let c, d
      for (let e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (let f = 0; f < Iba.length; f++) {
          c = Iba[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
      }
    }
    _.Jba = function (a) {
      const b = arguments.length
      if (b == 1 && Array.isArray(arguments[0])) {
        return _.Jba.apply(null, arguments[0])
      }
      const c = {}
      for (let d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
    _.jc = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Lba = function (a) {
      if (_.kc) a(_.kc)
      else {
        let b
        ;((b = Kba) != null ? b : Kba = []).push(a)
      }
    }
    _.mc = function () {
      !_.kc && _.lc && _.Mba(_.lc())
      return _.kc
    }
    _.Mba = function (a) {
      _.kc = a
      let b
      ;(b = Kba) == null || b.forEach(_.Lba)
      Kba = void 0
    }
    _.nc = function (a) {
      _.kc && _.kc.tb(a)
    }
    _.oc = function () {
      _.kc && _.kc.Fa()
    }
    _.qc = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Nba] = a
    }
    _.rc = function () {
      _.$b.call(this)
      this.sP = new _.jc(this)
      this.yGc = this
      this.Hlb = null
    }
    _.tc = function (a, b) {
      let c = a
      b && (c = (0, _.sc)(a, b))
      c = _.tc.Rdc(c)
      _.tc.dCc
        ? setTimeout(c, 0)
        : (c = _.tc.L9c(c), _.tc.E_b || (_.tc.E_b = _.tc.YTc()), _.tc.E_b(c))
    }
    Sba = function () {
      let a
      for (; a = Oba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ha(b)
        }
        Pba(Qba, a)
      }
      Rba = !1
    }
    _.uc = function (a, b) {
      this.Ba = []
      this.lb = a
      this.Xa = b || null
      this.qa = this.ka = !1
      this.oa = void 0
      this.Pa = this.nb = this.Fa = !1
      this.Da = 0
      this.na = null
      this.wa = 0
    }
    _.vc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.wc = function (a, b) {
      this.width = a
      this.height = b
    }
    Uba = function () {
      let a = null
      if (!Tba) return a
      try {
        const b = (c) => c
        a = Tba.createPolicy('BardChatUi#html', {
          createHTML: b,
          createScript: b,
          createScriptURL: b,
        })
      } catch (b) {}
      return a
    }
    Wba = function () {
      Vba === void 0 && (Vba = Uba())
      return Vba
    }
    _.zc = function (a) {
      const b = Wba()
      a = b ? b.createScriptURL(a) : a
      return new _.xc(_.yc, a)
    }
    _.Xba = function (a) {
      return a instanceof _.xc
    }
    _.Ac = function (a) {
      if (_.Xba(a)) return a.ha
      throw Error('Z')
    }
    Yba = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.Bc = function (a) {
      return new _.Zba(_.yc, a)
    }
    _.Cc = function (a) {
      return a instanceof _.Zba
    }
    _.Dc = function (a) {
      if (_.Cc(a)) return a.ha
      throw Error('Z')
    }
    Fc = function (a) {
      return new Ec((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.Gc = function (a, b = $ba) {
      if (_.Cc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        const d = b[c]
        if (d instanceof Ec && d.im(a)) return _.Bc(a)
      }
    }
    _.Jc = function (a, b = $ba) {
      b = _.Gc(a, b)
      b === void 0 && _.aca(a.toString())
      return b || _.Ic
    }
    _.Kc = function (a) {
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
      if (!b) throw Error('Z')
      return _.Bc(URL.createObjectURL(a))
    }
    _.cca = function (a) {
      if (!bca) {
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
    eca = function (a) {
      const b = !dca.test(a)
      b && _.aca(a)
      if (!b) return a
    }
    _.Lc = function (a) {
      return a instanceof _.Zba ? _.Dc(a) : eca(a)
    }
    _.Mc = function (a, b) {
      b = _.Lc(b)
      b !== void 0 && (a.href = b)
    }
    _.Oc = function (a) {
      const b = Wba()
      a = b ? b.createHTML(a) : a
      return new _.Nc(_.yc, a)
    }
    _.fca = function (a) {
      return a instanceof _.Nc
    }
    _.Pc = function (a) {
      if (_.fca(a)) return a.ha
      throw Error('Z')
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
    _.Vc = function (a, b, c) {
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
          _.mb(b, void 0)
      }
    }
    _.Wc = function (a, b, c, d) {
      b = _.Lc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Yc = function (a) {
      return gca('script', a)
    }
    _.hca = function (a) {
      return gca('style', a)
    }
    gca = function (a, b = document) {
      let c
      const d = (c = b.querySelector) == null
        ? void 0
        : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Zc = function (a) {
      const b = Wba()
      a = b ? b.createScript(a) : a
      return new _.ica(_.yc, a)
    }
    _.jca = function (a) {
      return a instanceof _.ica
    }
    _.$c = function (a) {
      if (_.jca(a)) return a.ha
      throw Error('Z')
    }
    kca = function (a) {
      const b = _.Yc(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.ad = function (a, b, c) {
      a.textContent = _.$c(b)
      ;(c == null ? 0 : c.v6c) || kca(a)
    }
    _.bd = function (a, b, c) {
      a.src = _.Ac(b)
      ;(c == null ? 0 : c.v6c) || kca(a)
    }
    _.mca = function (a) {
      if (a instanceof _.lca) return a.ha
      throw Error('Z')
    }
    _.dd = function (a, b) {
      a.nodeType === 1 && _.nca(a)
      a.innerHTML = _.Pc(b)
    }
    _.ed = function (a, b, c, d) {
      if (a.length === 0) throw Error('Z')
      a = a.map((f) => _.mca(f))
      const e = c.toLowerCase()
      if (a.every((f) => e.indexOf(f) !== 0)) throw Error('$`' + c)
      b.setAttribute(c, d)
    }
    _.nca = function (a) {
      if (/^(script|style)$/i.test(a.tagName)) throw Error('Z')
    }
    _.qca = function (a, b, c) {
      if (_.Xba(b)) _.oca(a, b, c)
      else {
        if (pca.indexOf(c) === -1) throw Error('aa`' + c)
        b = _.Lc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.oca = function (a, b, c) {
      a.href = _.Ac(b).toString()
      a.rel = c
    }
    _.rca = function (a) {
      return 'function' == typeof _.fd && a instanceof _.fd
    }
    _.sca = function (a) {
      if (_.rca(a)) return a.ha
      throw Error('Z')
    }
    _.gd = function (a, b, c) {
      return a.parseFromString(_.Pc(b), c)
    }
    _.hd = function (a, b) {
      b = _.Lc(b)
      b !== void 0 && (a.href = b)
    }
    _.tca = function (a, b) {
      return a.createContextualFragment(_.Pc(b))
    }
    _.uca = function (a) {
      return _.Oc(a)
    }
    _.vca = function (a) {
      return _.zc(a)
    }
    _.id = function (a) {
      a = a[0].toLowerCase()
      return new _.lca(_.yc, a)
    }
    _.kd = function (a, b) {
      if (_.fca(a)) return a
      a = _.jd(String(a))
      if (b == null ? 0 : b.qCd) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.GUa) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.rCd) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.Oc(a)
    }
    _.jd = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.ld = function (a) {
      return _.wca('', a)
    }
    _.wca = function (a, b) {
      a = _.kd(a)
      return _.Oc(b.map((c) => _.Pc(_.kd(c))).join(_.Pc(a).toString()))
    }
    _.xca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.Oc(a)
    }
    _.Aca = function (a) {
      if (!yca.test(a)) throw Error('Z')
      if (zca.indexOf(a.toUpperCase()) !== -1) throw Error('Z')
    }
    _.md = function (a, b, c) {
      _.Aca(a)
      let d = `<${a}`
      b && (d += _.Bca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Cca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.ld(c.map((e) => _.fca(e) ? e : _.kd(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.Oc(d)
    }
    _.Bca = function (a) {
      var b = ''
      const c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!yca.test(d)) throw Error('Z')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('Z')
          Dca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.Cc(e)
              ? e.toString()
              : eca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.kd(String(e))}"`
          b += ' ' + e
        }
      }
      return b
    }
    _.Eca = function (a) {
      try {
        return new URL(a, window.document.baseURI)
      } catch (b) {
        return new URL('about:invalid')
      }
    }
    Fca = function (a, b) {
      const c = b.createRange()
      c.selectNode(b.body)
      a = _.Oc(a)
      return _.tca(c, a)
    }
    Gca = function (a) {
      a = a.nodeName
      return typeof a === 'string' ? a : 'FORM'
    }
    Hca = function (a) {
      a = a.nodeType
      return a === 1 || typeof a !== 'number'
    }
    nd = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Ica = function (a) {
      return a.parts.map((b) => {
        const c = b.QLa
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.pd = function (a) {
      return _.Jca.sanitize(a)
    }
    _.Kca = function (a) {
      const b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        MZa: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.qd = function (a, ...b) {
      if (b.length === 0) return _.zc(a[0])
      a[0].toLowerCase()
      let c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.zc(c)
    }
    _.rd = function (a, b) {
      a = _.Kca(_.Ac(a).toString())
      return _.Lca(a.MZa, a.params, a.fragment, b)
    }
    _.Lca = function (a, b, c, d) {
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
    _.Mca = function (a, b) {
      a = _.Kca(_.Ac(a).toString())
      const c = a.MZa.slice(-1) === '/' ? '' : '/'
      b = a.MZa + c + encodeURIComponent(b)
      return _.zc(b + a.params + a.fragment)
    }
    _.Nca = function (a) {
      a = _.$c(a).toString()
      return _.zc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.Oca = function (a, b) {
      let c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.Pca = function (a, b) {
      const c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    Qca = function (a, b) {
      var c = b || _.sd()
      const d = c.Gf()
      b = c.createElement('STYLE')
      const e = _.hca(d)
      e && b.setAttribute('nonce', e)
      b.type = 'text/css'
      c = c.getElementsByTagName('HEAD')[0]
      b.styleSheet
        ? b.styleSheet.cssText = a
        : (a = d.createTextNode(a), b.appendChild(a))
      c.appendChild(b)
      return b
    }
    Rca = function (a, b) {
      this.ha = a
      this.ka = b
    }
    td = function (a, b) {
      _.$b.call(this)
      this.ha = a
      this.qa = b
      this.oa = []
      this.ma = []
      this.na = []
    }
    Sca = function () {
      this.oa = this.qa = null
    }
    Tca = function (a = window) {
      return a.WIZ_global_data
    }
    _.Uca = function (a, b = window) {
      return (b = Tca(b)) && a in b ? b[a] : null
    }
    _.vd = function (a, b = window) {
      return new _.ud(a, _.Uca(a, b))
    }
    _.Vca = function (a, b, c, d, e, f, g) {
      let h = ''
      a && (h += a + ':')
      c && (h += '//', b && (h += b + '@'), h += c, d && (h += ':' + d))
      e && (h += e)
      f && (h += '?' + f)
      g && (h += '#' + g)
      return h
    }
    _.xd = function (a) {
      return a.match(Wca)
    }
    _.yd = function (a) {
      return a ? decodeURI(a) : a
    }
    _.zd = function (a, b) {
      return _.xd(b)[a] || null
    }
    _.Xca = function (a) {
      a = _.zd(1, a)
      !a && _.fa.self && _.fa.self.location &&
        (a = _.fa.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.Ad = function (a) {
      a = _.xd(a)
      return _.Vca(a[1], a[2], a[3], a[4])
    }
    _.Zca = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          const d = a[c].indexOf('=')
          let e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.Yca(f) : '')
        }
      }
    }
    _.$ca = function (a, b) {
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
    _.ada = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.ada(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.Bd(b)))
    }
    _.bda = function (a) {
      const b = []
      for (const c in a) _.ada(c, a[c], b)
      return b.join('&')
    }
    _.cda = function (a, b, c, d) {
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
    dda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        const b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    fda = function (a = '', b) {
      if (a && b) throw Error('ma')
      var c = ''
      const d = _.fa._F_jsUrl
      ;(a = b || dda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('na`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!eda(c)) throw Error('oa')
      return c
    }
    gda = function () {
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
    jda = function (a) {
      const { promise: b, resolve: c, reject: d } = gda()
      hda.set(a, { promise: b, resolve: c, reject: d })
      ida || (ida = [],
        queueMicrotask(() => {
          const e = [...ida]
          ida = null
          const f = _.mc().Da(e)
          for (const g of e) f[g].then(hda.get(g).resolve, hda.get(g).reject)
        }))
      ida.push(a)
      return b
    }
    _.nda = function () {
      if (kda) return lda
      kda = !0
      let a
      try {
        a = fda(_.fa._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      const b = mda(_.Cd(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Lba((d) => {
        for (const e of c) {
          const f = b[e]
          for (const g of Object.keys(f)) d.Sqa(e, g)
        }
      })
      return lda = !0
    }
    _.oda = function () {}
    qda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return pda[a]
    }
    Dd = function (a) {
      let b = 0, c = 0, d
      do d = qda(a), b |= (d & 31) << c, c += 5
      while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    _.rda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || ''
      let e = c.O5 || ''
      !c.gyd && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('va')
      }
      const f = c.aBd || _.Fd
      a = dda(a)
      b = new f(
        _.vca(fda('', a), {
          Zhb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.iFd || a && a.hasAttribute('crossorigin')
      a = c.Hxd || a && a.getAttribute('crossorigin')
      d && (b.wEa = d)
      a && (b.Lsa = a)
      c.vEa && (b.vEa = c.vEa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      const g = _.mc()
      g.oa = b
      g.m5b(!0)
      _.Gd = c.Xwd === 'BATCH' ? jda : (h) => Promise.resolve(g.load(h))
    }
    aaa = []
    sda = Object.create
    tda = Object.defineProperty
    uda = function (a) {
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
    Id = uda(this)
    vda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    Id.BigInt64Array && (vda.push('BigInt64'), vda.push('BigUint64'))
    xda = function (a, b) {
      if (b) {
        for (var c = 0; c < vda.length; c++) {
          wda(vda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    Jd = function (a, b) {
      b && wda(a, b)
    }
    wda = function (a, b) {
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
        tda(c, a, { configurable: !0, writable: !0, value: b })
    }
    yda = Object.setPrototypeOf
    zda = function (a, b) {
      a.prototype = sda(b.prototype)
      a.prototype.constructor = a
      yda(a, b)
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
    _.Kd = function (a) {
      return Cda(a())
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
    Rda = function () {
      return Qda
    }
    _.Ld = function () {
      return Rda
    }
    Qda = function (a) {
      return a
    }
    Sda = function (a) {
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
    var Tda = {},
      Uda = function () {
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
            var t = Tda[f]
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
          Uda = function () {}
        }
      },
      Vda = function (a) {
        var b = ['readystatechange']
        Uda()
        for (let c = 0; c < b.length; c++) {
          ;(Tda[b[c]] || (Tda[b[c]] = [])).push(a)
        }
      },
      Md = function (a, b) {
        wda(a, function (c) {
          return c && b(c)
        })
      },
      Wda = !1
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
        typeof c === 'function' && (Rda = c)
        return a
      }
      Wda = !0
      Qda = function (e) {
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
      b._JSC = Rda = function (e) {
        var f = (0, _.Ld)(e)
        return function (g, h) {
          return f(h)(g)
        }
      }
      return b
    })
    Wda && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var h = 0; h < e.length; h++) {
                var t = e[h], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Sda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              tda(g, 'name', { value: f.name }),
                tda(g, 'length', { value: f.length }),
                tda(g, 'toString', {
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
        Vda(function (e) {
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
      b.wrap = Sda
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
        Xda(this)
        Yda(b)
        var c = Zda(this, b)
        b = new Set(this)
        var d = c.Sqb
        c = c.eib
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    Jd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        Xda(this)
        Yda(b)
        var c = new Set(), d = Zda(this, b)
        b = d.Sqb
        d = d.eib
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var Yda = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      Zda = function (a, b) {
        if (a.size <= b.size) a = { Sqb: a.keys(), eib: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { Sqb: b, eib: a }
        }
        return a
      },
      Xda = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      $da = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    Jd('Array.prototype.at', function (a) {
      return a ? a : $da
    })
    xda('at', function (a) {
      return a ? a : $da
    })
    Jd('String.prototype.at', function (a) {
      return a ? a : $da
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
    var aea = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    Jd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return aea(this, b, c).v
      }
    })
    xda('findLast', function (a) {
      return a ? a : function (b, c) {
        return aea(this, b, c).v
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
      zda(a, Error)
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
    var Pd, Sd, cea, dea, eea
    _.bea = _.bea || {}
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
    Sd = function () {}
    Sd.get = function () {
      return null
    }
    _.Gd = null
    _.Od = function (a, b) {
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
    _.Td = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.Ud = function (a) {
      return Object.prototype.hasOwnProperty.call(a, cea) && a[cea] ||
        (a[cea] = ++dea)
    }
    cea = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    dea = 0
    eea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.sc = function (a, b, c) {
      _.sc = eea
      return _.sc.apply(null, arguments)
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
    _.fea = function (a, b, c) {
      _.Nd(a, b, c)
    }
    _.Ab = function (a) {
      return a
    }
    _.Xd = function (a, b) {
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
    _.Xd(_.da, Error)
    _.da.prototype.name = 'CustomError'
    var gea
    _.Xd(baa, _.da)
    baa.prototype.name = 'AssertionError'
    _.hea = typeof TextDecoder !== 'undefined'
    _.iea = typeof TextEncoder !== 'undefined'
    var Yd = !!(_.Qd[4] >> 22 & 1),
      jea = !!(_.Qd[4] >> 17 & 1),
      kea = !!(_.Qd[4] >> 24 & 1),
      lea = !!(_.Qd[4] & 512),
      mea = !!(_.Qd[4] >> 25 & 1),
      nea = !!(_.Qd[4] & 8192),
      oea = !!(_.Qd[4] & 32),
      pea = !!(_.Qd[4] >> 23 & 1)
    var pba
    _.faa = Yd ? kea : Pd(610401301, !1)
    _.qea = Yd ? lea : Pd(1331761403, !1)
    _.rea = Yd ? mea : Pd(651175828, !1)
    pba = Yd ? jea || !nea : Pd(748402147, !0)
    _.sea = Yd ? oea : Pd(861377723, !1)
    _.tea = Yd ? pea : Pd(861377724, !1)
    var uea
    uea = _.fa.navigator
    _.na = uea ? uea.userAgentData || null : null
    var vea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var wea = new class {
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
    var xea
    xea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        const a = this
        return _.Kd(function* () {
          if (ua(!0)) return new vea(yield wea.load())
          a.ha = !0
          return new vea(_.qaa())
        })
      }
    }
    _.yea = new xea()
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
    _.zea = function (a) {
      _.zea[' '](a)
      return a
    }
    _.zea[' '] = function () {}
    _.Aea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var Mea, Nea
    _.Bea = _.haa()
    _.ce = _.iaa()
    _.de = _.oa('Edge')
    _.fe = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.ge = _.caa('WebKit') && !_.oa('Edge')
    _.Cea = _.ge && _.oa('Mobile')
    _.he = _.wa()
    _.ie = _.oaa()
    _.Dea = _.naa() || _.paa()
    _.Eea = _.laa()
    _.Fea = _.maa()
    _.Gea = _.oa('iPad')
    _.Hea = _.oa('iPod')
    _.Iea = _.va()
    _.caa('KaiOS')
    var Jea = function () {
        const a = _.fa.document
        return a ? a.documentMode : void 0
      },
      Kea
    a: {
      let a = ''
      const b = function () {
        const c = _.ma()
        if (_.fe) return /rv:([^\);]+)(\)|;)/.exec(c)
        if (_.de) return /Edge\/([\d\.]+)/.exec(c)
        if (_.ce) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
        if (_.ge) return /WebKit\/(\S+)/.exec(c)
        if (_.Bea) return /(?:Version)[ \/]?(\S+)/.exec(c)
      }()
      b && (a = b ? b[1] : '')
      if (_.ce) {
        const c = Jea()
        if (c != null && c > parseFloat(a)) {
          Kea = String(c)
          break a
        }
      }
      Kea = a
    }
    _.Lea = Kea
    Mea = {}
    _.je = function (a) {
      return _.Aea(Mea, a, function () {
        return _.eaa(_.Lea, a) >= 0
      })
    }
    if (_.fa.document && _.ce) {
      var Oea = Jea()
      Nea = Oea ? Oea : parseInt(_.Lea, 10) || void 0
    } else Nea = void 0
    _.Pea = Nea
    var Qea, Rea, Sea, Tea, Uea, Vea
    _.ke = {}
    Qea = _.qa()
    Rea = vaa()
    Sea = _.oa('iPad')
    Tea = _.kaa()
    Uea = _.sa()
    Vea = waa()
    _.ke.ANDROID = Tea
    _.ke.yod = !1
    _.ke.zod = !1
    _.ke.Aod = !1
    _.ke.Bod = !1
    _.ke.Cod = !1
    _.ke.Dod = !1
    _.ke.CHROME = Uea
    _.ke.Gca = _.de
    _.ke.EX = Qea
    _.ke.Lxb = _.ce
    _.ke.K0a = Sea
    _.ke.L0a = Rea
    _.ke.r2a = _.Bea
    _.ke.LH = Vea
    _.ke.tAd = vaa
    _.ke.yAd = waa
    _.yaa = {}
    _.xaa = null
    var Caa, Aaa, Wea
    Caa = /[-_.]/g
    Aaa = { '-': '+', _: '/', '.': '=' }
    _.le = {}
    Wea = typeof structuredClone != 'undefined'
    var Xea
    _.pe = function (a) {
      return a ? new _.Fb(a, _.le) : _.ne()
    }
    _.ne = function () {
      return Xea || (Xea = new _.Fb(null, _.le))
    }
    _.Gb = function (a) {
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
    _.qe = function (a) {
      if (_.le !== _.le) throw Error('x')
      var b = a.ha
      b == null || _.Ma(b) ||
        (typeof b === 'string' ? b = _.Daa(b) : (_.nb(b), b = null))
      return b == null ? b : a.ha = b
    }
    _.Fb = class {
      isEmpty() {
        return this.ha == null
      }
      constructor(a, b) {
        if (b !== _.le) throw Error('x')
        this.ha = a
        if (a != null && a.length === 0) throw Error('w')
      }
    }
    var gba, sba, mba
    _.yb = Pa()
    _.Yea = Pa()
    _.Zea = Pa()
    _.Bb = Pa()
    _.$ea = Pa()
    gba = Pa()
    _.afa = Pa()
    sba = Pa()
    _.Ta = Pa('m_m', !0)
    mba = Pa()
    _.bfa = Pa()
    var cfa
    _.Qa = Pa('jas', !0)
    cfa = []
    cfa[_.Qa] = 7
    _.Sb = Object.freeze(cfa)
    var dfa
    _.Ua = {}
    _.Xa = {}
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
    var nba = {}
    _.gfa = _.Za((a) => a !== null && a !== void 0)
    var Iaa
    _.db = _.Za((a) => typeof a === 'number')
    _.hfa = _.Za((a) => Number.isFinite(a))
    _.bb = _.Za((a) => typeof a === 'string')
    Iaa = _.Za((a) => typeof a === 'boolean')
    _.ifa = _.Za((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.jfa = _.Za((a) => typeof a === 'function')
    _.kfa = _.Za((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.lfa = _.Za((a) => Array.isArray(a))
    _.eb = typeof _.fa.BigInt === 'function' &&
      typeof _.fa.BigInt(0) === 'bigint'
    var ofa, mfa, pfa, nfa
    _.Eb = _.Za((a) =>
      _.eb ? a >= mfa && a <= nfa : a[0] === '-' ? Jaa(a, ofa) : Jaa(a, pfa)
    )
    ofa = Number.MIN_SAFE_INTEGER.toString()
    mfa = _.eb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    pfa = Number.MAX_SAFE_INTEGER.toString()
    nfa = _.eb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.gb = 0
    _.hb = 0
    var Raa = void 0
    var Taa
    _.re = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.ub = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.tb = Number.isSafeInteger
    _.ob = Number.isFinite
    _.sb = Math.trunc
    Taa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var qfa, rfa
    qfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    rfa = function (a) {
      if (a.nY & 2) throw Error('C')
    }
    _.Ib = class extends qfa {
      constructor(a, b, c = cba, d = cba) {
        super()
        this.nY = a[_.Qa] | 0
        this.A3 = b
        this.Wxa = c
        this.aub = this.A3 ? dba : d
        for (let e = 0; e < a.length; e++) {
          const f = a[e], g = c(f[0], !1, !0)
          let h = f[1]
          b
            ? h === void 0 && (h = null)
            : h = d(f[1], !1, !0, void 0, void 0, this.nY)
          super.set(g, h)
        }
      }
      dZa(a) {
        return _.Eaa(Array.from(super.entries(), a))
      }
      clear() {
        rfa(this)
        super.clear()
      }
      delete(a) {
        rfa(this)
        return super.delete(this.Wxa(a, !0, !1))
      }
      entries() {
        if (this.A3) {
          var a = super.keys()
          a = new dfa(a, eba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.A3) {
          var a = super.keys()
          a = new dfa(a, _.Ib.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.A3
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        rfa(this)
        a = this.Wxa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.aub(b, !0, !0, this.A3, !1, this.nY))
      }
      Ybd(a) {
        const b = this.Wxa(a[0], !1, !0)
        a = a[1]
        a = this.A3
          ? a === void 0 ? null : a
          : this.aub(a, !1, !0, void 0, !1, this.nY)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.Wxa(a, !1, !1))
      }
      get(a) {
        a = this.Wxa(a, !1, !1)
        const b = super.get(a)
        if (b !== void 0) {
          var c = this.A3
          return c
            ? (c = this.aub(b, !1, !0, c, this.dJc, this.nY),
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
    var iba
    _.se = Wea ? structuredClone : (a) => _.Cb(a, 0, _.Db)
    _.sfa = _.fb(0)
    _.te = function (a, b, c, d, e) {
      b = _.Rb(a.Lg, b, c, e)
      if (b !== null || d && a.sTa !== _.Xa) return b
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
    _.Xb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('N')
      return new a(_.Faa(b))
    }
    _.l = class {
      constructor(a, b, c) {
        this.Lg = _.rba(a, b, c, 2048)
      }
      toJSON() {
        return _.oba(this)
      }
      serialize(a) {
        return JSON.stringify(_.oba(this, a))
      }
      clone() {
        const a = this.Lg, b = a[_.Qa] | 0
        return _.xba(this, a, b)
          ? _.wba(this, a, !0)
          : new this.constructor(_.Jb(a, b, !1))
      }
      isImmutable() {
        return _.Ya(this)
      }
    }
    _.l.prototype.W8 = _.aa(0)
    _.l.prototype[_.Ta] = _.Ua
    _.l.prototype.toString = function () {
      return this.Lg.toString()
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
          a((0, _.sc)(_.vfa[b].wrap, _.vfa[b]))
        }
      }
    }
    _.$b.prototype.bP = !1
    _.$b.prototype.isDisposed = function () {
      return this.bP
    }
    _.$b.prototype.dispose = function () {
      this.bP || (this.bP = !0, this.Cb())
    }
    _.$b.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.$b.prototype.Hb = function (a) {
      this.addOnDisposeCallback(_.Vd(_.Yb, a))
    }
    _.$b.prototype.addOnDisposeCallback = function (a, b) {
      this.bP
        ? b !== void 0 ? a.call(b) : a()
        : (this.c$ || (this.c$ = []), b && (a = a.bind(b)), this.c$.push(a))
    }
    _.$b.prototype.Cb = function () {
      if (this.c$) { for (; this.c$.length;) this.c$.shift()() }
    }
    _.ac = function (a, b) {
      this.type = 'function' == typeof _.yfa && a instanceof _.yfa
        ? String(a)
        : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.ac.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.ac.prototype.preventDefault = function () {
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
    _.Xd(_.bc, _.ac)
    _.bc.prototype.init = function (a, b) {
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
      this.Sh = a
      a.defaultPrevented && _.bc.Yb.preventDefault.call(this)
    }
    _.bc.prototype.stopPropagation = function () {
      _.bc.Yb.stopPropagation.call(this)
      this.Sh.stopPropagation
        ? this.Sh.stopPropagation()
        : this.Sh.cancelBubble = !0
    }
    _.bc.prototype.preventDefault = function () {
      _.bc.Yb.preventDefault.call(this)
      const a = this.Sh
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.bc.prototype.cva = _.aa(1)
    _.Bfa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.ue = function (a) {
      return !(!a || !a[_.Bfa])
    }
    var Eba = 0
    var Cfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Iba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.jc.prototype.add = function (a, b, c, d, e) {
      const f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      const g = Dfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Rea = !1))
        : (b = new _.Fba(b, this.src, f, !!d, e), b.Rea = c, a.push(b))
      return b
    }
    _.jc.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      const e = this.listeners[a]
      b = Dfa(e, b, c, d)
      return b > -1
        ? (Cfa(e[b]),
          _.Ba(e, b),
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
    _.jc.prototype.removeAll = function (a) {
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
    _.jc.prototype.u7 = _.aa(3)
    _.jc.prototype.nha = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      let e = -1
      a && (e = Dfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.jc.prototype.hasListener = function (a, b) {
      const c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Hba(this.listeners, function (f) {
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
    _.xe = function (a, b, c, d, e) {
      if (d && d.once) return _.we(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.xe(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.ue(a)
        ? a.listen(b, c, _.Td(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !1, d, e)
    }
    Jfa = function (a, b, c, d, e, f) {
      if (!b) throw Error('Q')
      const g = _.Td(e) ? !!e.capture : !!e
      let h = _.Ae(a)
      h || (a[Ffa] = h = new _.jc(a))
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
    _.we = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.we(a, b[f], c, d, e)
        return null
      }
      c = _.Ifa(c)
      return _.ue(a)
        ? a.We(b, c, _.Td(d) ? !!d.capture : !!d, e)
        : Jfa(a, b, c, !0, d, e)
    }
    _.Be = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Be(a, b[f], c, d, e)
      } else {d = _.Td(d) ? !!d.capture : !!d,
          c = _.Ifa(c),
          _.ue(a)
            ? a.Kf(b, c, d, e)
            : a && (a = _.Ae(a)) && (b = a.nha(b, c, d, e)) && _.Ee(b)}
    }
    _.Ee = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      const b = a.src
      if (_.ue(b)) return b.ZR(a)
      var c = a.type
      const d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Lfa(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      Hfa--
      ;(c = _.Ae(b))
        ? (Efa(c, a), c.ha == 0 && (c.src = null, b[Ffa] = null))
        : Cfa(a)
      return !0
    }
    Lfa = function (a) {
      return a in Gfa ? Gfa[a] : Gfa[a] = 'on' + a
    }
    _.Nfa = function (a, b) {
      const c = a.listener, d = a.handler || a.src
      a.Rea && _.Ee(a)
      return c.call(d, b)
    }
    Mfa = function (a, b) {
      return a.removed ? !0 : _.Nfa(a, new _.bc(b, this))
    }
    _.Ae = function (a) {
      a = a[Ffa]
      return a instanceof _.jc ? a : null
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
    var Kba
    _.Pfa = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('S`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Lba((e) => {
            e.Sqa(a.ha, d)
          })
        })
      }
    }
    _.Fe = class {
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
    _.Nba = Symbol('T')
    _.Xd(_.rc, _.$b)
    _.rc.prototype[_.Bfa] = !0
    _.k = _.rc.prototype
    _.k.FP = function () {
      return this.Hlb
    }
    _.k.Bo = function (a) {
      this.Hlb = a
    }
    _.k.addEventListener = function (a, b, c, d) {
      _.xe(this, a, b, c, d)
    }
    _.k.removeEventListener = function (a, b, c, d) {
      _.Be(this, a, b, c, d)
    }
    _.k.dispatchEvent = function (a) {
      var b, c = this.FP()
      if (c) { for (b = []; c; c = c.FP()) b.push(c) }
      c = this.yGc
      const d = a.type || a
      if (typeof a === 'string') a = new _.ac(a, c)
      else if (a instanceof _.ac) a.target = a.target || c
      else {
        var e = a
        a = new _.ac(d, c)
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
    _.k.Cb = function () {
      _.rc.Yb.Cb.call(this)
      this.removeAllListeners()
      this.Hlb = null
    }
    _.k.listen = function (a, b, c, d) {
      return this.sP.add(String(a), b, !1, c, d)
    }
    _.k.We = function (a, b, c, d) {
      return this.sP.add(String(a), b, !0, c, d)
    }
    _.k.Kf = function (a, b, c, d) {
      return this.sP.remove(String(a), b, c, d)
    }
    _.k.ZR = function (a) {
      return Efa(this.sP, a)
    }
    _.k.removeAllListeners = function (a) {
      return this.sP ? this.sP.removeAll(a) : 0
    }
    _.k.fireListeners = function (a, b, c) {
      a = this.sP.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      let d = !0
      for (let e = 0; e < a.length; ++e) {
        const f = a[e]
        if (f && !f.removed && f.capture == b) {
          const g = f.listener, h = f.handler || f.src
          f.Rea && this.ZR(f)
          d = g.call(h, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.k.u7 = _.aa(2)
    _.k.nha = function (a, b, c, d) {
      return this.sP.nha(String(a), b, c, d)
    }
    _.k.hasListener = function (a, b) {
      return this.sP.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.Ge =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Pba = function (a, b) {
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
    _.tc.L9c = _.Ge
    _.tc.dCc = !1
    _.tc.YTc = function () {
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
    _.tc.Rdc = (a) => a
    _.xfa(function (a) {
      _.tc.Rdc = a
    })
    var Rfa = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          const c = Qba.get()
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
      Qba = new Qfa(() => new Sfa(), (a) => a.reset()),
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
    var Tfa, Rba, Oba, Ufa
    Rba = !1
    Oba = new Rfa()
    _.He = (a, b) => {
      Tfa || Ufa()
      Rba || (Tfa(), Rba = !0)
      Oba.add(a, b)
    }
    Ufa = () => {
      const a = Promise.resolve(void 0)
      Tfa = () => {
        a.then(Sba)
      }
    }
    _.Ie = function () {}
    var Vfa = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var Wfa, Xfa, fga, cga, Zfa, kga, iga, gga, hga, lga, jga, mga
    _.Me = function (a) {
      this.ka = 0
      this.Ba = void 0
      this.oa = this.ma = this.na = null
      this.qa = this.wa = !1
      if (a != _.Ie) {
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
      Zfa(a, b, c, null) || _.He(_.Vd(b, a))
    }
    _.aga = function (a) {
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
            _.$fa(h, _.Vd(f, t), g)
          }
        } else b(e)
      })
    }
    _.Ne = function () {
      let a, b
      const c = new _.Me(function (d, e) {
        a = d
        b = e
      })
      return new bga(c, a, b)
    }
    _.Me.prototype.then = function (a, b, c) {
      return cga(
        this,
        (0, _.Ge)(typeof a === 'function' ? a : null),
        (0, _.Ge)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.Me.prototype.$goog_Thenable = !0
    var ega = function (a, b, c, d) {
      _.dga(a, _.Yfa(b || _.Ie, c || null, d))
    }
    _.Me.prototype.finally = function (a) {
      a = (0, _.Ge)(a)
      return new _.Me((b, c) => {
        ega(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.Me.prototype.ha = function (a, b) {
      return cga(this, null, (0, _.Ge)(a), b)
    }
    _.Me.prototype.catch = _.Me.prototype.ha
    _.Me.prototype.cancel = function (a) {
      if (this.ka == 0) {
        const b = new _.Pe(a)
        _.He(function () {
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
        } else _.Le(a, 3, b)
      }
    }
    _.dga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || iga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    cga = function (a, b, c, d) {
      const e = _.Yfa(null, null, null)
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
              t === void 0 && h instanceof _.Pe ? g(h) : f(t)
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
          Zfa(c, a.Ea, a.Fa, a) ||
          (a.Ba = c,
            a.ka = b,
            a.na = null,
            iga(a),
            b != 3 || c instanceof _.Pe || jga(a, c)))
    }
    Zfa = function (a, b, c, d) {
      if (a instanceof _.Me) return ega(a, b, c, d), !0
      if (Vfa(a)) return a.then(b, c, d), !0
      if (_.Td(a)) {
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
      a.wa || (a.wa = !0, _.He(a.Da, a))
    }
    gga = function (a) {
      let b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.Me.prototype.Da = function () {
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
      Pba(Xfa, b)
    }
    lga = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    jga = function (a, b) {
      a.qa = !0
      _.He(function () {
        a.qa && mga.call(null, b)
      })
    }
    mga = _.ha
    _.Pe = function (a) {
      _.da.call(this, a)
      this.ka = !1
    }
    _.Xd(_.Pe, _.da)
    _.Pe.prototype.name = 'cancel'
    var bga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var tga, sga, oga, pga
    _.uc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.uc && this.oa.cancel()
      else {
        if (this.na) {
          const b = this.na
          delete this.na
          a ? b.cancel(a) : (b.wa--, b.wa <= 0 && b.cancel())
        }
        this.lb ? this.lb.call(this.Xa, this) : this.Pa = !0
        this.ka || this.ha(new _.Qe(this))
      }
    }
    _.uc.prototype.Sa = function (a, b) {
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
          if (!a.Pa) throw new pga(a)
          a.Pa = !1
        }
      }
    _.uc.prototype.callback = function (a) {
      qga(this)
      nga(this, !0, a)
    }
    _.uc.prototype.ha = function (a) {
      qga(this)
      nga(this, !1, a)
    }
    _.Se = function (a, b, c) {
      return _.Re(a, b, null, c)
    }
    _.uc.prototype.finally = function (a) {
      return _.rga(
        new Promise((b, c) => {
          _.Re(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.Re = function (a, b, c, d) {
      const e = a.ka
      e ||
        (b === c ? b = c = (0, _.Ge)(b) : (b = (0, _.Ge)(b), c = (0, _.Ge)(c)))
      a.Ba.push([b, c, d])
      e && oga(a)
      return a
    }
    _.uc.prototype.then = function (a, b, c) {
      let d, e
      const f = new _.Me(function (g, h) {
        e = g
        d = h
      })
      _.Re(this, e, function (g) {
        g instanceof _.Qe ? f.cancel() : d(g)
        return sga
      }, this)
      return f.then(a, b, c)
    }
    _.uc.prototype.$goog_Thenable = !0
    _.uc.prototype.ma = _.aa(4)
    _.uc.prototype.isError = function (a) {
      return a instanceof Error
    }
    tga = function (a) {
      return _.be(a.Ba, function (b) {
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
        (g = (0, _.sc)(a.Sa, a, !0),
          d = (0, _.sc)(a.Sa, a, !1),
          b instanceof _.uc ? (_.Re(b, g, d), b.nb = !0) : b.then(g, d))
      c && (b = new vga(b), uga[b.ha] = b, a.Da = b.ha)
    }
    _.rga = function (a) {
      const b = new _.uc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    pga = function (a) {
      _.da.call(this)
      this.kA = a
    }
    _.Xd(pga, _.da)
    pga.prototype.message = 'Deferred has already fired'
    pga.prototype.name = 'AlreadyCalledError'
    _.Qe = function (a) {
      _.da.call(this)
      this.kA = a
    }
    _.Xd(_.Qe, _.da)
    _.Qe.prototype.message = 'Deferred was canceled'
    _.Qe.prototype.name = 'CanceledError'
    var vga = function (a) {
      this.ha = _.fa.setTimeout((0, _.sc)(this.throwError, this), 0)
      this.qP = a
    }
    vga.prototype.throwError = function () {
      delete uga[this.ha]
      throw this.qP
    }
    var uga = {}
    var yga, zga, Aga
    _.wga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Xa
      }
      return !1
    }
    _.Te = function (a) {
      for (; a.Xa;) a = a.Xa
      return a
    }
    yga = function (a) {
      var b = _.xga
      const c = []
      a = _.Te(a)
      let d
      a.rz[b] && (d = a.rz[b][0])
      d && c.push(d)
      a = a.Za || []
      for (let e = 0; e < a.length; e++) {
        a[e].rz[b] && (d = a[e].rz[b][0]), d && !_.za(c, d) && c.push(d)
      }
      return c
    }
    _.We = function (a, b) {
      for (var c = a; c; c = c.Xa) {
        if (c.isDisposed()) throw new _.tfa([b])
        if (c.rz[b]) return c.rz[b][0]
        if (c.uc[b]) break
      }
      if (c = a.wb[b]) {
        c = c(a)
        if (c == null) throw Error('W`' + b)
        _.Ue(a, b, c)
        return c
      }
      return null
    }
    _.Ue = function (a, b, c) {
      if (a.isDisposed()) _.Yb(c)
      else {
        a.rz[b] = [c, !0]
        var d = zga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Xb[b]
        b instanceof _.Fe && _.qc(b, c.constructor)
      }
    }
    zga = function (a, b, c) {
      const d = [], e = a.Qa[c]
      e && (_.saa(e, function (f) {
        _.wga(f.appContext, b) && (d.push(f.d), _.Da(e, f))
      }),
        e.length == 0 && delete a.Qa[c])
      return d
    }
    Aga = function (a, b) {
      a.Qa && _.cc(a.Qa, function (c, d, e) {
        _.saa(c, function (f) {
          f.appContext == b && _.Da(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.Xe = class extends _.$b {
      constructor() {
        super()
        this.rz = {}
        this.Xb = {}
        this.wb = {}
        this.Qa = {}
        this.Sa = {}
        this.uc = {}
        this.Ab = new _.rc()
        this.Zd = !0
        this.Xa = null
        const a = _.Te(this)
        this != a && (a.Za ? a.Za.push(this) : a.Za = [this])
      }
      get(a) {
        let b = _.We(this, a)
        if (b == null) throw Error('V`' + a)
        return b
      }
      Cb() {
        if (_.Te(this) == this) {
          var a = this.Za
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.Te(this).Za
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (const b in this.rz) {
          a = this.rz[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.rz = null
        this.Zd && this.Ab.dispose()
        Aga(this, this)
        this.Qa = null
        _.Yb(this.Fd)
        this.uc = this.Fd = null
        super.Cb()
      }
      Br() {
        return this.Ab
      }
    }
    _.Xe.prototype.Mb = _.aa(7)
    _.Xe.prototype.lb = _.aa(6)
    _.Xe.prototype.tb = _.aa(5)
    _.xga = new _.Fe('n73qwf', 'n73qwf')
    _.vc.prototype.clone = function () {
      return new _.vc(this.x, this.y)
    }
    _.vc.prototype.equals = function (a) {
      return a instanceof _.vc && _.Ye(this, a)
    }
    _.Ye = function (a, b) {
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
    _.Ze = function (a, b) {
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
    var Bga = globalThis.trustedTypes, Tba = Bga, Vba
    _.xc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    Yba((a) => a``) || Yba((a) => a`\0`) || Yba((a) => a`\n`) ||
      Yba((a) => a`\u0000`)
    _.Zba = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha
      }
    }
    _.Cga = _.Bc('about:blank')
    _.Ic = _.Bc('about:invalid#zClosurez')
    var Ec, $ba, bca, Dga, dca
    Ec = class {
      constructor(a) {
        this.im = a
      }
    }
    _.$e = {
      Oud: Fc('tel'),
      Qod: new Ec((a) => /^callto:\+?\d*$/i.test(a)),
      mud: new Ec((a) => a.indexOf('ssh://') === 0),
      Jtd: Fc('rtsp'),
      jjc: Fc('data'),
      Onc: Fc('http'),
      Pnc: Fc('https'),
      EXTENSION: new Ec((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      vmc: Fc('ftp'),
      qwc: new Ec((a) => /^[^:]*([/?#]|$)/.test(a)),
      Pqc: Fc('mailto'),
      Yrd: Fc('intent'),
      rsd: Fc('market'),
      bsd: Fc('itms'),
      csd: Fc('itms-appss'),
      dsd: Fc('itms-services'),
      Xpd: Fc('fb-messenger'),
      Kvd: Fc('whatsapp'),
      eud: new Ec((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      iud: Fc('sms'),
      Cvd: Fc('vnd.youtube'),
      zrd: Fc('googlehome'),
      Ard: Fc('googlehomesdk'),
      LINE: Fc('line'),
    }
    $ba = [_.$e.jjc, _.$e.Onc, _.$e.Pnc, _.$e.Pqc, _.$e.vmc, _.$e.qwc]
    bca = typeof URL === 'function'
    Dga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    dca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.aca = () => {}
    _.Nc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.af = new _.Nc(_.yc, Bga ? Bga.emptyHTML : '')
    _.Ega = {
      krd: 0,
      Ipd: 1,
      Jpd: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Tc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Ega[b]}`)
        this.type = a
        this.intent = b
        this.name = 'TypeCannotBeUsedWithIframeIntentError'
      }
    }
    _.ica = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.Fga = new _.ica(_.yc, Bga ? Bga.emptyScript : '')
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
    _.Bd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.Yca = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Gga = Math.random() * 2147483648 | 0
    _.bf = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var yca = /^[a-z][a-z\d-]*$/i,
      zca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Cca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Dca = ['action', 'formaction', 'href']
    _.Hga = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.Iga = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var Kga
    _.Jga = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    Kga = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { Wt: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { Wt: 1 }
        : { Wt: 0 }
    }
    _.cf = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.Lga = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var Mga =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      Nga = [
        ['A', new Map([['href', { Wt: 7 }]])],
        ['AREA', new Map([['href', { Wt: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            Wt: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { Wt: 5 }], ['srcset', { Wt: 6 }]])],
        ['IMG', new Map([['src', { Wt: 5 }], ['srcset', { Wt: 6 }]])],
        ['VIDEO', new Map([['src', { Wt: 5 }]])],
        ['AUDIO', new Map([['src', { Wt: 5 }]])],
      ],
      Oga =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      Pga = [
        ['dir', {
          Wt: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          Wt: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          Wt: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { Wt: 5 }],
        ['target', {
          Wt: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      Qga = new _.cf(new Set(Mga), new Map(Nga), new Set(Oga), new Map(Pga)),
      Rga = new _.cf(
        new Set(Mga.concat(['BUTTON', 'INPUT'])),
        new Map(Nga),
        new Set(Oga.concat(['class', 'id', 'name'])),
        new Map(Pga.concat([['style', { Wt: 1 }]])),
      ),
      Sga = new _.cf(
        new Set(
          Mga.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(Nga),
        new Set(
          Oga.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(Pga.concat([['style', { Wt: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var Tga
    _.Uga = function (a, b, c) {
      b = Fca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Hca(g)
          ? (g = Gca(g), g = g === null ? 2 : _.Jga(a.oa, g) ? 1 : 2)
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
        } else if (Hca(d)) g = Tga(a, d, c)
        else throw Error('Z')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    Tga = function (a, b, c) {
      const d = Gca(b)
      c = c.createElement(d)
      b = b.attributes
      for (const { name: h, value: t } of b) {
        var e = Kga(a.oa, h, d), f
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
          switch (e.Wt) {
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
                ? (e = { type: 2, attributeName: h, tNb: d },
                  f = _.Eca(t),
                  (e = a.ha(f, e)) && nd(c, h, e.toString()))
                : nd(c, h, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: h, tNb: d }
                f = []
                for (const v of t.split(',')) {
                  const [x, A] = v.trim().split(/\s+/, 2)
                  f.push({ url: x, QLa: A })
                }
                g = f
                f = { parts: [] }
                for (const v of g) {
                  g = _.Eca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), QLa: v.QLa })
                }
                nd(c, h, Ica(f))
              } else nd(c, h, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: h, tNb: d }
                f = _.Eca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.cca(e)
              e = f !== void 0 && Dga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              nd(c, h, e)
          }
        }
      }
      return c
    }
    _.Vga = class {
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
        return _.xca(_.Uga(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Jca = new _.Vga(Qga)
    _.Wga = new _.Vga(Rga)
    _.Xga = new _.Vga(Sga)
    _.Yga = function (a) {
      const b = new Map(a.ha.na)
      b.set('style', { Wt: 4 })
      a.ha = new _.cf(a.ha.oa, a.ha.ha, a.ha.ma, b, a.ha.ka)
      return a
    }
    _.df = function (a) {
      const b = new Set(a.ha.ma)
      b.add('class')
      a.ha = new _.cf(a.ha.oa, a.ha.ha, b, a.ha.na, a.ha.ka)
      return a
    }
    _.Zga = class {
      constructor() {
        this.na = !1
        this.ha = Qga
      }
    }
    _.ef = class extends _.Zga {
      build() {
        if (this.na) throw Error('ea')
        this.na = !0
        return new _.Vga(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var $ga, bha, nha, oha, pha
    _.sd = function (a) {
      return a ? new _.ff(_.gf(a)) : gea || (gea = new _.ff())
    }
    _.hf = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.jf = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.lf = function (a, b) {
      _.cc(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : $ga.hasOwnProperty(d)
          ? a.setAttribute($ga[d], c)
          : _.ia(d, 'aria-') || _.ia(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    $ga = {
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
    _.mf = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.wc(a.clientWidth, a.clientHeight)
    }
    _.nf = function (a) {
      return a ? a.defaultView : window
    }
    _.cha = function (a, b) {
      const c = b[1], d = _.aha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.lf(d, c))
      b.length > 2 && bha(a, d, b, 2)
      return d
    }
    bha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        const f = c[d]
        !_.Fa(f) || _.Td(f) && f.nodeType > 0
          ? e(f)
          : _.Zd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Ea(f)
              : f,
            e,
          )
      }
    }
    _.of = function (a) {
      return _.aha(document, a)
    }
    _.aha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.dha = function (a, b) {
      bha(_.gf(a), a, arguments, 1)
    }
    _.pf = function (a) {
      let b
      for (; b = a.firstChild;) a.removeChild(b)
    }
    _.eha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.fha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.gha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.qf = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.hha = function (a, b) {
      const c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.iha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.kha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.jha(a.firstChild, !0)
    }
    _.lha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.jha(a.nextSibling, !0)
    }
    _.mha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.jha(a.previousSibling, !1)
    }
    _.jha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.rf = function (a) {
      return _.Td(a) && a.nodeType == 1
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
    _.gf = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.uf = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.pf(a), a.appendChild(_.gf(a).createTextNode(String(b)))
    }
    nha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    oha = { IMG: ' ', BR: '\n' }
    _.qha = function (a) {
      return a.hasAttribute('tabindex') && pha(a)
    }
    _.vf = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.rha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || pha(a))
        : _.qha(a)
    }
    pha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.wf = function (a) {
      const b = []
      _.sha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.sha = function (a, b, c) {
      if (!(a.nodeName in nha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in oha) b.push(oha[a.nodeName])
        else for (a = a.firstChild; a;) _.sha(a, b, c), a = a.nextSibling
      }
    }
    _.ff = function (a) {
      this.Zk = a || _.fa.document || document
    }
    _.k = _.ff.prototype
    _.k.kb = _.sd
    _.k.Gf = function () {
      return this.Zk
    }
    _.k.Ya = function (a) {
      return _.hf(this.Zk, a)
    }
    _.k.$ = _.ff.prototype.Ya
    _.k.getElementsByTagName = function (a, b) {
      return (b || this.Zk).getElementsByTagName(String(a))
    }
    _.k.hE = _.aa(9)
    _.k.Ub = _.aa(11)
    _.k.rc = _.aa(13)
    _.k.setProperties = _.lf
    _.k.qj = function (a) {
      return _.mf(a || this.getWindow())
    }
    _.k.Eb = function (a, b, c) {
      return _.cha(this.Zk, arguments)
    }
    _.k.createElement = function (a) {
      return _.aha(this.Zk, a)
    }
    _.k.createTextNode = function (a) {
      return this.Zk.createTextNode(String(a))
    }
    _.k.getWindow = function () {
      return this.Zk.defaultView
    }
    _.k.un = _.aa(14)
    _.k.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.k.append = _.dha
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
    _.k.Pj = _.pf
    _.k.oUb = _.eha
    _.k.Owa = _.fha
    _.k.Nwa = _.gha
    _.k.removeNode = _.qf
    _.k.mnb = _.hha
    _.k.getChildren = _.iha
    _.k.hva = _.kha
    _.k.zcb = _.lha
    _.k.pRb = _.mha
    _.k.isElement = _.rf
    _.k.isWindow = function (a) {
      return _.Td(a) && a.window == a
    }
    _.k.pha = _.sf
    _.k.contains = _.tf
    _.k.Ecb = _.gf
    _.k.Ok = _.uf
    _.k.ww = _.vf
    _.k.ew = _.rha
    _.k.HP = _.wf
    Sd = Sd || {}
    var tha = function () {
      _.$b.call(this)
    }
    _.Xd(tha, _.$b)
    tha.prototype.initialize = function () {}
    Rca.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    Rca.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.xfa(function (a) {
      Rca.prototype.execute = a(Rca.prototype.execute)
    })
    Sd.f2a = Rca
    _.Xd(td, _.$b)
    td.prototype.wa = tha
    td.prototype.ka = null
    td.prototype.getId = function () {
      return this.qa
    }
    var uha = function (a, b, c) {
        a.oa.push(new Sd.f2a(b, c))
      },
      vha = function (a, b) {
        a.ma.push(new Sd.f2a(b, void 0))
      }
    td.prototype.isLoaded = function () {
      return !!this.ka
    }
    td.prototype.onLoad = function (a) {
      var b = new this.wa()
      b.initialize(a())
      this.ka = b
      b = (b = wha(this.na, a())) || wha(this.oa, a())
      b || (this.ma.length = 0)
      return b
    }
    td.prototype.onError = function (a) {
      ;(a = wha(this.ma, a)) && _.ha(Error('fa`' + a))
      this.na.length = 0
      this.oa.length = 0
    }
    var wha = function (a, b) {
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
    td.prototype.Cb = function () {
      td.Yb.Cb.call(this)
      _.Yb(this.ka)
    }
    Sd.e2a = td
    var xf = {
      ERROR: 'error',
      IDLE: 'idle',
      Hoa: 'active',
      bCc: 'userIdle',
      aCc: 'userActive',
    }
    _.k = Sca.prototype
    _.k.m5b = function () {}
    _.k.AWa = function () {}
    _.k.FBa = function () {}
    _.k.Sqa = function () {
      throw Error('ga')
    }
    _.k.KAa = function () {
      throw Error('ha')
    }
    _.k.hRb = function () {
      return this.qa
    }
    _.k.KBa = function (a) {
      this.qa = a
    }
    _.k.isActive = function () {
      return !1
    }
    _.k.bXb = function () {
      return !1
    }
    var xha, yha
    xha = function (a, b) {
      const c = b.styleSheets.length, d = Qca(a, new _.ff(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.xa(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    yha = function (a) {
      return _.ae(yga(a), (b) => b.Ecb())
    }
    _.zha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.fea('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.qa
            if (b) {
              if (b = yha(b), b.length == 0) xha(a, document)
              else for (let c of b) xha(a, c)
            } else xha(a, document)
          }
        })
      }
    }
    var Aha, Bha, Dha
    Aha = function (a) {
      throw Error('ia`' + a.ka)
    }
    Bha = function (a, b) {
      return new TypeError(
        'ja`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.zf = function (a) {
      const b = _.yf(a)
      b === null && Aha(a)
      return b
    }
    _.Af = function (a, b) {
      let c
      return (c = _.yf(a)) != null ? c : b
    }
    _.yf = function (a) {
      const b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Bha(a, 'string')
    }
    _.Cha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Bha(a, 'boolean')
    }
    _.Bf = function (a, b) {
      let c
      return (c = _.Cha(a)) != null ? c : b
    }
    _.Cf = function (a, b) {
      let c
      return (c = Dha(a)) != null ? c : b
    }
    Dha = function (a) {
      let b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        const c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Bha(a, 'number')
    }
    _.Fha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Eha(a, b)
    }
    _.Eha = function (a, b) {
      const c = a.ka + '['
      return Array.from(b, (d, e) => new _.ud(c + e + ']', d))
    }
    _.ud = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.zf(this) : _.Af(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Dha(this)
          b === null && Aha(this)
        } else b = _.Cf(this, a)
        return b
      }
      toString() {
        return _.zf(this)
      }
      enum(a, b) {
        let c = !0, d = void 0
        for (const e in a) {
          const f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Cf(this, b) : _.Af(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.Fha(this)
          b === null && Aha(this)
          return b
        }
        b = _.Fha(this)
        return b ==
            null
          ? a
          : b
      }
      object(a) {
        let b = this.ha
        if (b == null) return a === void 0 && Aha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          const c = this.ka + '.'
          for (const d in b) a[d] = new _.ud(c + d, b[d])
          return a
        }
        throw Bha(this, 'object')
      }
    }
    var Wca
    Wca = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.Gha = /#|$/
    var Hha,
      eda,
      Df,
      Kha,
      Uha,
      Lha,
      Tha,
      Vha,
      Wha,
      Xha,
      Yha,
      mda,
      Zha,
      Iha,
      Jha,
      $ha,
      aia
    _.Cd = function (a, b = !0) {
      const c = Hha(a), d = new Iha(), e = _.xd(c)[5]
      _.cc(Jha, function (g) {
        const h = e.match('/' + g + '=([^/]+)')
        h && Df(d, g, h[1])
      })
      let f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      Kha(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.zd(6, c)) && _.Zca(a, (g, h) => {
        d.ma[g] = h
      })
      return d
    }
    Hha = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    eda = function (a) {
      a = Hha(a)
      a = _.yd(_.zd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Df = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    Kha = function (a, b) {
      a.ka = b
    }
    Uha = function (a) {
      const b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      Lha(a)
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
          'd' in a.ha || Df(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.Ef(a, 'br') != '1' && _.Ef(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.Ef(a, 'rb') == '1' && c('rb'),
          _.Ef(a, 'zs') !== '0' && c('zs'),
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
    _.Ef = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    Lha = function (a) {
      a = _.Ef(a, 'md')
      return !!a && a !== '0'
    }
    Tha = function (a) {
      switch (_.Ef(a, 'wt')) {
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
        ? (b.sort(), Df(a, 'exm', b.join(',')))
        : Df(a, 'exm', null)
    }
    Wha = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Df(a, 'excm', b.join(',')))
        : Df(a, 'excm', null)
    }
    Xha = function (a) {
      return (a = _.Ef(a, 'm')) ? a.split(',') : []
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
      Df(a, 'ee', c.join(';'))
    }
    mda = function (a) {
      var b = _.Ef(a, 'ee')
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
    Iha = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + Uha(this)
        const b = _.bda(this.ma)
        let c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        const a = new Iha()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    Jha = {
      Itd: 'k',
      lpd: 'ck',
      Bsd: 'm',
      Rpd: 'exm',
      Ppd: 'excm',
      pod: 'am',
      vod: 'amc',
      ssd: 'mm',
      Ftd: 'rt',
      Qrd: 'd',
      Qpd: 'ed',
      lud: 'sv',
      qpd: 'deob',
      Pod: 'cb',
      Wod: 'ccb',
      cud: 'rs',
      Ptd: 'sdch',
      Xrd: 'im',
      rpd: 'dg',
      Mpd: 'br',
      Lpd: 'br-d',
      Npd: 'rb',
      Svd: 'zs',
      Lvd: 'wt',
      Wpd: 'ee',
      kud: 'sm',
      METADATA: 'md',
      Brd: 'gssmodulesetproto',
      zvd: 'ujg',
      yvd: 'sp',
      aud: 'slk',
      wpd: 'dti',
      asd: 'ic',
    }
    $ha = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    aia = RegExp('^[a-zA-Z0-9-_*]+$')
    var ida = null, hda = new Map()
    var kda = !1, lda = !1
    var bia = (a) => {
        a = a.clone()
        Zha(a)
        Df(a, 'dg', null)
        Df(a, 'd', '0')
        Vha(a, null)
        Wha(a, null)
        return a
      },
      cia = !0,
      dia = (a, b, { cssRowKey: c, O5: d, JZ: e, callback: f } = {}) => {
        if (b) { for (const g of b) if (!aia.test(g)) throw Error('ka`' + g) }
        Df(a, 'm', b.join(','))
        e && Yha(a, e)
        c && (Df(a, 'ck', c), d ? Df(a, 'rs', d) : cia && (cia = !1))
        if (f) {
          if (f != null && !$ha.test(f)) throw Error('la`' + f)
          Df(a, 'cb', f)
        }
        a = a.toString()
        _.ia(a, '/') && (a = _.Ad(document.location.href) + a)
        return _.zc(a)
      },
      eia = (
        a,
        b,
        { qnb: c = [], cssRowKey: d, O5: e, JZ: f, callback: g } = {},
      ) => {
        a = bia(a)
        Wha(a, c)
        return dia(a, b, { cssRowKey: d, O5: e, JZ: f, callback: g })
      },
      fia = (
        a,
        b,
        { rnb: c = [], qnb: d = [], cssRowKey: e, O5: f, JZ: g, callback: h } =
          {},
      ) => {
        a = bia(a)
        Df(a, 'd', '1')
        Vha(a, c)
        Wha(a, d)
        return dia(a, b, { cssRowKey: e, O5: f, JZ: g, callback: h })
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
    _.Xd(_.iia, _.oda)
    _.iia.prototype.HT = function () {
      return new XMLHttpRequest()
    }
    _.hia = new _.iia()
    var kia = function (a) {
        return jia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      jia = function (a) {
        const b = {}, c = b.wca ? b.wca.HT() : _.hia.HT()
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
              !(g = _.gia(c.status)) && (g = c.status === 0) &&
                (g = _.Xca(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new lia(c.status, a, c))
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
          b.Aw > 0 && (f = _.fa.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new mia(a, c))
          }, b.Aw))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.fa.clearTimeout(f),
              e(new Gf('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.Pe &&
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
    var lia = function (a, b, c) {
      Gf.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.Xd(lia, Gf)
    lia.prototype.name = 'XhrHttpError'
    var mia = function (a, b) {
      Gf.call(this, 'Request timed out', a, b)
    }
    _.Xd(mia, Gf)
    mia.prototype.name = 'XhrTimeoutError'
    var pia, ria, sia, tia, qia, yia, zia, via, uia, wia, xia
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
          const v = e.filter((x) => !_.mc().Mt(x).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && h()
        }
      b.forEach((v) => {
        v = _.mc().Mt(v)
        v.isLoaded() ? t() : (v.na.push(new Sd.f2a(t, void 0)), vha(v, t))
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
            eda(b) && !_.Cd(b).ka.endsWith('_/js/')
        ) {
          b = Xha(_.Cd(b))
          for (const c of b) a.Ea.includes(c) || a.Ea.push(c)
        }
      }
    }
    ria = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      qia(a, b, (g, h, t = h) => {
        a.Xa && f ? a.Za(g, h, d, e, t) : a.load(g, h, d, e, t, c)
      }, c) || d(-1)
    }
    sia = function (a, b) {
      return b.filter((c) => !a.ma[c])
    }
    tia = function (a, b, { JZ: c, onError: d, wka: e, hTc: f } = {}) {
      if (!b) throw Error('pa')
      if (a.lb) {
        for (const g of document.getElementsByTagName('style')) pia(a, g)
        for (const g of document.getElementsByTagName('link')) pia(a, g)
      }
      ria(a, sia(a, b), c, d, e, f)
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
        uia(
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
          h = via(a, g, d),
          t = _.Ac(h).toString()
        for (; t.length > a.vEa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.vEa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              h = via(a, g, d),
              t = _.Ac(h).toString()
          } else {return a.wa
              ? (a.wa = !1,
                a.ka = wia(a).then((v) => {
                  xia(a, v, d)
                }),
                qia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.wa ? c(h, g) : c(h, g, e === b.length ? b : [])
      }
      return !0
    }
    yia = function (a) {
      a.Qa || (a.Qa = !0, a.Da.sort())
      return a.Da
    }
    zia = function (a) {
      a = a.Ea
      a.sort()
      return a
    }
    via = function (a, b, c) {
      return a.wa
        ? fia(a.na, b, {
          cssRowKey: a.Sa,
          O5: a.Pa,
          JZ: c,
          rnb: yia(a),
          qnb: zia(a),
        })
        : eia(a.na, b, { cssRowKey: a.Sa, O5: a.Pa, rnb: yia(a), qnb: zia(a) })
    }
    _.Hf = function (a, b) {
      let c = []
      for (let d = 0; d < b.length; ++d) {
        const e = b[d]
        a.ma[e] && (delete a.ma[e], _.Da(a.Da, e), c.push(e))
      }
    }
    _.Aia = function (a, b, c, d, e, f, g = d) {
      a.qa = c
      a.Ba.insertBefore(c, a.Ba.firstChild)
      _.nia(c, d, () => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        f()
      }, (h) => {
        c.parentElement.removeChild(c)
        a.qa == c && (a.qa = null)
        _.Hf(a, h)
        a.ka
          ? a.ka.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    uia = function (a, b, c, d, e, f = {}) {
      const g = _.mc()
      for (let h of b) {
        b = g.Mt(h)
        if (f[h] || e && !e(b)) continue
        f[h] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[h] && (v = Object.keys(d[h]))
          t = t.concat(v)
        }
        uia(a, t, c, d, e, f)
        c(b)
      }
    }
    wia = function (a) {
      a = a.na.clone()
      Zha(a)
      Df(a, 'dg', null)
      Df(a, 'md', '1')
      return kia(a.toString())
    }
    xia = function (a, b, c) {
      _.mc().FBa((b || {}).moduleGraph)
      uia(a, yia(a), (d) => {
        _.oia(a, [d.getId()])
      }, c)
      a.ka = null
    }
    _.Fd = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.mb = a
        this.na = _.Cd(_.Ac(a).toString(), !0)
        this.Sa = b
        this.Pa = c
        this.wa = d
        this.ma = {}
        this.Da = []
        this.Qa = !0
        this.Ea = (a = _.Ef(this.na, 'excm')) ? a.split(',') : []
        this.lb = e
        this.wEa = !1
        this.Lsa = 'anonymous'
        this.vEa = 4043
        this.Ba = document.head || document.documentElement
        this.ka = this.qa = null
        this.ab = !0
        _.nda()
        this.logger = null
        _.oia(this, Xha(this.na))
        this.fetchPriority = void 0
        this.Xa = !1
        this.Fa()
      }
      Za() {
        _.Kd(function* () {
          throw Error('qa')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.Ac(a)
        var f = this.wEa, g = this.Lsa, h = this.fetchPriority
        const t = _.of('SCRIPT')
        _.bd(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        h && t.setAttribute('fetchpriority', h)
        _.oia(this, b)
        _.Aia(this, a, t, b, c, d, e)
      }
    }
    var pda = new Uint8Array(123)
    var Bia = []
    var Cia = function (a) {
        switch (a.type) {
          case If.Type.YCb:
            return 'Unauthorized'
          case If.Type.O_a:
            return 'Consecutive load failures'
          case If.Type.TIMEOUT:
            return 'Timed out'
          case If.Type.RAb:
            return 'Out of date module id'
          case If.Type.I0a:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      If = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.rnb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Cia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    Sd.Pz = If
    Sd.Pz.Type = { YCb: 0, O_a: 1, TIMEOUT: 2, RAb: 3, I0a: 4 }
    var Jf = function () {
      Sca.call(this)
      this.Za = null
      this.ka = {}
      this.na = []
      this.Ba = []
      this.ab = []
      this.ha = []
      this.Ea = []
      this.ma = {}
      this.mb = {}
      this.wa = this.Xa = new Sd.e2a([], '')
      this.ob = null
      this.Qa = new _.uc()
      this.uj = null
      this.wb =
        this.Lb =
        this.Ab =
        this.nb =
        this.lb =
          !1
    }
    _.Xd(Jf, Sca)
    var Dia = function (a, b) {
      _.da.call(this, `Error loading ${a}: ${b}`)
    }
    _.Xd(Dia, _.da)
    Jf.prototype.m5b = function (a) {
      this.lb = a
    }
    Jf.prototype.AWa = function (a) {
      this.nb = a
    }
    Jf.prototype.FBa = function (a, b) {
      if (!(this instanceof Jf)) this.FBa(a, b)
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
            Eia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            h++
          }
          this.Za = c
        } else if (a.startsWith('p$')) Fia(this, a)
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
            Eia(this, e, g)
          }
          this.Za = c
        }
        b && b.length
          ? (_.Ha(this.na, b), this.ob = _.raa(b))
          : this.Qa.ka || this.Qa.callback()
        Object.freeze(this.Za)
        Gia(this)
      }
    }
    var Fia = function (a, b) {
      var c = b.substring(2)
      for (b = 0; b < 64; b++) {
        pda[
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
      var t = 0, v = 0, x = b.pos, A = b.buf.indexOf('|', b.pos)
      b.pos = A + 1
      for (A = 0; A < d; A++) {
        var I = Dd(b), L = I & 2, R = I & 1
        I >>>= 2
        R
          ? (t += I >>> 1 ^ -(I & 1), I = 'sy' + t.toString(36))
          : (R = x, x += I, I = c.substring(R, x))
        f[A] = I
        L && (e[v++] = I)
      }
      e[v] = ''
      b.pos++
      v = d & -2
      c = d & 1
      for (t = 0; t < v; t += 2) {
        x = qda(b), h[t] = x & 7, h[t + 1] = x >>> 3 & 7
      }
      c && (c = qda(b), h[v] = c & 7)
      b.pos++
      for (v = 0; v < d; v++) h[v] === 7 && (h[v] = Dd(b))
      b.pos++
      v = 0
      for (c = 0; c < d; c++) {
        t = h[c]
        x = t === 0 ? Bia : Array(t)
        g[c] = x
        A = v
        for (L = 0; L < t; L++) A -= Dd(b), x[L] = e[A]
        e[v] === f[c] && v++
      }
      const { ids: ca, dependencies: ea } = { ids: f, dependencies: g }
      for (b = 0; b < ca.length; b++) Eia(a, ca[b], ea[b])
      a.Za = ca
    }
    _.k = Jf.prototype
    _.k.Mt = function (a) {
      return this.ka[a]
    }
    _.k.Sqa = function (a, b) {
      const c = this.Mt(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.k.KAa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (const c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.k.KBa = function (a) {
      Jf.Yb.KBa.call(this, a)
      Gia(this)
    }
    _.k.isActive = function () {
      return this.na.length > 0
    }
    _.k.bXb = function () {
      return this.Ea.length > 0
    }
    var Kf = function (a) {
        var b = a.Ab
        const c = a.isActive()
        c != b && (Hia(a, c ? xf.Hoa : xf.IDLE), a.Ab = c)
        b = a.bXb()
        b != a.Lb && (Hia(a, b ? xf.aCc : xf.bCc), a.Lb = b)
      },
      Eia = function (a, b, c) {
        a.ka[b]
          ? (a = a.ka[b].ha, a != c && a.splice(0, a.length, ...c))
          : a.ka[b] = new Sd.e2a(c, b)
      },
      Jia = function (a, b, c) {
        const d = []
        _.Ja(b, d)
        b = []
        const e = {}
        for (let f = 0; f < d.length; f++) {
          const g = d[f], h = a.Mt(g)
          if (!h) throw Error('ra`' + g)
          const t = new _.uc()
          e[g] = t
          h.isLoaded()
            ? t.callback(a.qa)
            : (Iia(a, g, h, !!c, t), a.Pa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.nb
            ? _.Se(a.Qa, (0, _.sc)(a.Sa, a, b))
            : a.na.length === 0
            ? a.Sa(b)
            : (a.ha.push(b), Kf(a)))
        return e
      },
      Iia = function (a, b, c, d, e) {
        uha(c, e.callback, e)
        vha(c, function (f) {
          e.ha(new Dia(b, f))
        })
        a.Pa(b) ? d && (Kia(a, b), Kf(a)) : d && Kia(a, b)
      }
    Jf.prototype.Sa = function (a, b = 0, c) {
      const d = Lia(this, a)
      this.nb ? _.Ha(this.na, d) : this.na = d
      this.Ba = this.lb ? a : _.Ea(d)
      Kf(this)
      if (d.length !== 0) {
        this.ab.push.apply(this.ab, d)
        a = this.oa
        if (!a) throw Error('sa')
        if (Object.keys(this.ma).length > 0 && !a.ab) throw Error('ta')
        tia(a, _.Ea(d), {
          JZ: this.ma,
          onError: (e, f, g) =>
            Mia(this, this.Ba, d, e != null ? e : void 0, f, b, !!g),
          zza: (0, _.sc)(this.Mb, this),
          hTc: !!c,
        })
      }
    }
    var Lia = function (a, b) {
        b = b.filter((d) =>
          a.ka[d].isLoaded()
            ? (_.fa.setTimeout(() => Error('ua`' + d), 0), !1)
            : !0
        )
        let c = []
        for (let d = 0; d < b.length; d++) c = c.concat(Nia(a, b[d]))
        _.Ja(c)
        return !a.lb && c.length > 1
          ? (b = c.shift(),
            a.ha = c.map(function (d) {
              return [d]
            }).concat(a.ha),
            [b])
          : c
      },
      Nia = function (a, b) {
        const c = _.Jba(a.ab), d = []
        c[b] || d.push(b)
        b = [b]
        for (let e = 0; e < b.length; e++) {
          const f = a.Mt(b[e]).ha
          for (let g = f.length - 1; g >= 0; g--) {
            const h = f[g]
            a.Mt(h).isLoaded() || c[h] || (d.push(h), b.push(h))
          }
        }
        d.reverse()
        _.Ja(d)
        return d
      },
      Gia = function (a) {
        if (a.wa == a.Xa) {
          a.wa = null
          const b = a.Xa.onLoad((0, _.sc)(a.hRb, a))
          b && b.length &&
            Oia(a, new Sd.Pz(Sd.Pz.Type.I0a, void 0, void 0, void 0, b[0]))
          Kf(a)
        }
      }
    Jf.prototype.Fa = function () {
      if (this.wa) {
        var a = this.wa.getId(), b = []
        if (this.ma[a]) {
          for (const c of Object.keys(this.ma[a])) {
            const d = this.Mt(c)
            d && !d.isLoaded() && (this.KAa(a, c), b.push(c))
          }
          this.Da(b)
        }
        this.isDisposed() ||
          ((b = this.ka[a].onLoad((0, _.sc)(this.hRb, this))) && b.length &&
            Oia(this, new Sd.Pz(Sd.Pz.Type.I0a, void 0, void 0, void 0, b[0])),
            _.Da(this.Ea, a),
            _.Da(this.na, a),
            this.na.length === 0 && Pia(this),
            this.ob && a == this.ob && (this.Qa.ka || this.Qa.callback()),
            Kf(this),
            this.wa = null)
      }
    }
    Jf.prototype.Pa = function (a) {
      if (_.za(this.na, a)) return !0
      for (let b = 0; b < this.ha.length; b++) {
        if (_.za(this.ha[b], a)) return !0
      }
      return !1
    }
    Jf.prototype.load = function (a, b) {
      return Jia(this, [a], b)[a]
    }
    Jf.prototype.Da = function (a) {
      return Jia(this, a)
    }
    var Kia = function (a, b) {
      _.za(a.Ea, b) || a.Ea.push(b)
    }
    Jf.prototype.tb = function (a) {
      this.wa && this.wa.getId() === 'synthetic_module_overhead' &&
        (this.Fa(), delete this.ka.synthetic_module_overhead)
      this.ka[a] && Qia(this, this.ka[a].ha || [], (b) => {
        b.ka = new tha()
        _.Da(this.na, b.getId())
      }, (b) => !b.isLoaded())
      this.wa = this.Mt(a)
    }
    var Mia = function (a, b, c, d, e, f = 0, g = !1) {
      const h = g ? 0 : f + 1
      f = _.Ea(c)
      a.Ba = b
      c.forEach(_.Vd(_.Da, a.ab), a)
      if (d == 401) Oia(a, new Sd.Pz(Sd.Pz.Type.YCb, d)), a.ha.length = 0
      else if (d == 410) Ria(a, new Sd.Pz(Sd.Pz.Type.RAb, d)), Pia(a)
      else if (h >= 3) Ria(a, new Sd.Pz(Sd.Pz.Type.O_a, d, f, e)), Pia(a)
      else {
        const t = d == 8001 || !1
        ;(c = Math.pow(h, 2) * 5E3)
          ? _.fa.setTimeout(() => {
            a.Sa(b, h, t)
          }, c)
          : a.Sa(b, h, t)
      }
    }
    Jf.prototype.Mb = function () {
      Ria(this, new Sd.Pz(Sd.Pz.Type.TIMEOUT))
      Pia(this)
    }
    var Ria = function (a, b) {
        a.Ba.length > 1
          ? a.ha = a.Ba.map(function (c) {
            return [c]
          }).concat(a.ha)
          : Oia(a, b)
      },
      Oia = function (a, b) {
        const c = a.Ba
        a.na.length = 0
        var d = []
        for (var e = 0; e < a.ha.length; e++) {
          var f = a.ha[e].filter(function (g) {
            const h = Nia(this, g)
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
        if (e = a.mb[xf.ERROR]) {
          for (f = 0; f < e.length; f++) {
            const g = e[f]
            for (let h = 0; h < d.length; h++) g(xf.ERROR, d[h], b)
          }
        }
        for (d = 0; d < c.length; d++) if (a.ka[c[d]]) a.ka[c[d]].onError(b)
        a.Ba.length = 0
        Kf(a)
      },
      Pia = function (a) {
        for (; a.ha.length;) {
          const b = a.ha.shift().filter(function (c) {
            return !this.Mt(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Sa(b)
            return
          }
        }
        Kf(a)
      },
      Hia = function (a, b) {
        a = a.mb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      Qia = function (a, b, c, d = () => !0, e = {}) {
        for (const f of b) {
          b = a.Mt(f),
            !e[f] && d(b) && (e[f] = !0, Qia(a, b.ha || [], c, d, e), c(b))
        }
      }
    Jf.prototype.dispose = function () {
      _.Zb(_.dc(this.ka), this.Xa)
      this.ka = {}
      this.na = []
      this.Ba = []
      this.Ea = []
      this.ha = []
      this.mb = {}
      this.wb = !0
    }
    Jf.prototype.isDisposed = function () {
      return this.wb
    }
    _.lc = function () {
      return new Jf()
    }
    var Sia, Tia, Wia, Xia, Yia, Zia, Uia, Via
    Sia = [5E3, 2E4]
    Tia = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.Fa()
    }
    Wia = function (a, b) {
      b = b.filter((c) => !a.Pa(c) && !a.Mt(c).isLoaded())
      b.length > 0 && (Uia(a, ...b), a.na.push(b), Via(a))
    }
    Xia = function (a, b) {
      return new _.Me((c, d) => {
        const e = a.Mt(b)
        e.isLoaded() ? c(a.qa) : (uha(e, () => {
          c(a.qa)
        }),
          vha(e, (f) => {
            let g = `Error loading ${b}: ${f}`
            f instanceof Sd.Pz && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    Yia = function (a, b, c, d = () => !0, e = {}) {
      for (const f of b) {
        b = a.Mt(f),
          !e[f] && d(b) && (e[f] = !0, Yia(a, b.ha || [], c, d, e), c(b))
      }
    }
    Zia = function (a, ...b) {
      b.forEach((c) => {
        delete a.Ba[c]
      })
    }
    Uia = function (a, ...b) {
      b.forEach((c) => {
        a.Ba[c] = !0
      })
    }
    Via = function (a) {
      for (; a.wa < a.Ea && a.na.length > 0;) {
        const b = a.na.shift().filter((c) => !a.Mt(c).isLoaded())
        if (b.length > 0) {
          a.wa++
          let c = () => {
            a.wa--
            Via(a)
            c = () => {}
          }
          _.aga(b.map((f) => Xia(a, f))).then(() => {
            c()
          })
          let d = 0
          const e = () => {
            if (Object.keys(a.ha).length > 0 && !a.oa.ab) throw Error('ta')
            tia(a.oa, b, {
              JZ: a.ha,
              onError: (f, g) => {
                const h = Sia[d++]
                h !== void 0
                  ? setTimeout(() => {
                    e()
                  }, h)
                  : (Zia(a, ...b),
                    c(),
                    b.forEach((t) => {
                      t = a.Mt(t)
                      if (!t.isLoaded()) {
                        t.onError(new Sd.Pz(Sd.Pz.Type.O_a, f, b, g))
                      }
                    }))
              },
            })
          }
          e()
        }
      }
    }
    _.$ia = class extends Sca {
      constructor() {
        super()
        this.ma = Object.create(null)
        this.Ba = Object.create(null)
        this.Ea = Infinity
        this.wa = 0
        this.na = []
        this.ha = Object.create(null)
        this.uj = null
        this.ka = this.Mt('{base}')
      }
      FBa() {
        Tia(this)
      }
      KBa(a) {
        super.KBa(a)
        Tia(this)
      }
      Mt(a) {
        let b = this.ma[a]
        b || (b = new Sd.e2a([], a), this.ma[a] = b)
        return b
      }
      Sqa(a, b) {
        this.Mt(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      KAa(a, b) {
        if (this.ha[a]) {
          delete this.ha[a][b]
          for (const c in this.ha[a]) return
          delete this.ha[a]
        }
      }
      Pa(a) {
        return !!this.Ba[a]
      }
      load(a) {
        Wia(this, [a])
        return Xia(this, a)
      }
      Da(a) {
        const b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = Xia(this, d), c.push(d))
        })
        Wia(this, c)
        return b
      }
      tb(a) {
        let b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.Fa()
        let c, d
        Yia(
          this,
          (d = (c = this.ma[a]) == null ? void 0 : c.ha) != null ? d : [],
          (e) => {
            e.ka = new tha()
          },
          (e) => !e.isLoaded(),
        )
        this.ka = this.Mt(a)
      }
      Fa() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (const c of Object.keys(this.ha[a])) {
              this.Mt(c).isLoaded() || (this.KAa(a, c), b.push(c))
            }
            this.Da(b)
          }
          this.ka.onLoad(() => this.qa)
          this.ka = null
          ;(!this.Pa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && delete this.ma[a]
          Zia(this, a)
        }
      }
      AWa(a) {
        this.Ea = a ? Infinity : 1
      }
    }
    var aja = new _.$ia()
    aja.AWa(!0)
    aja.KBa(new _.Xe())
    _.Mba(aja)
    ;(new _.zha(aja)).init()
    _.rda()
    var bja = _.Bf(_.vd('hxvedd'), !1)
    switch (_.Bf(_.vd('dLc0B'), !1) ? 2 : bja ? 1 : 0) {
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
      if (!_.kc) {
        if (!_.lc) return
        _.Mba(_.lc())
      }
      _.kc.FBa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
