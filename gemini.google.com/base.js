// Source: https://gemini.gstatic.com/_/mss/boq-bard-web/_/js/k=boq-bard-web.BardChatUi.en_US.KBdUoRR3v6Y.2018.O/am=IQCExAAF9Bt04QkGQIDjNcADAAAACAE/d=1/excm=_b/ed=1/dg=0/br=1/wt=2/ujg=1/rs=AL3bBk0Iv5L17jHc75IkQkV_xIXOw0Dulw/ee=DGWCxb:CgYiQ;NJ1rfe:yGfSdd;Pjplud:PoEs9b;QGR0gd:Mlhmy;ScI3Yc:e7Hzgb;YIZmRd:A1yn5d;cEt90b:ws9Tlc;dowIGb:ebZ3mb;wNp4Gc:k56rsf/dti=1/m=_b?wli=BardChatUi.f4DRTqgiV6A.libheifWasm.O%3A%3BBardChatUi.c9CD2XtFE3k.loadWasmSipCoca.O%3A%3B
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
      Ha,
      Naa,
      Saa,
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
      rc,
      nca,
      rca,
      vca,
      Tca,
      Uca,
      Vca,
      Rc,
      Wca,
      dda,
      eda,
      Wc,
      gda,
      hda,
      sda,
      uda,
      vda,
      yda,
      Gda,
      Hda,
      Lda,
      aaa,
      fd,
      Oda,
      Pda,
      Qda,
      gd,
      Rda,
      Tda,
      hd,
      Sda,
      Uda,
      Vda,
      Wda,
      Yda,
      Xda,
      Zda
    _.aa = function (a) {
      return function () {
        return aaa[a].apply(this, arguments)
      }
    }
    _.ba = function (a, b) {
      return aaa[a] = b
    }
    _.ca = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, _.ca)
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
      _.ca.call(this, c + a[d])
    }
    _.ia = function (a) {
      _.ea.setTimeout(() => {
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
      var a = _.ea.navigator
      return a && (a = a.userAgent) ? a : ''
    }
    _.gaa = function (a) {
      if (!_.faa || !_.na) return !1
      for (let b = 0; b < _.na.brands.length; b++) {
        let { brand: c } = _.na.brands[b]
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
    _.kaa = function () {
      return _.oa('Firefox') || _.oa('FxiOS')
    }
    _.ra = function () {
      return _.oa('Safari') &&
        !(_.laa() || (_.pa() ? 0 : _.oa('Coast')) || _.haa() ||
          (_.pa() ? 0 : _.oa('Edge')) || _.jaa() ||
          (_.pa() ? _.gaa('Opera') : _.oa('OPR')) || _.kaa() || _.oa('Silk') ||
          _.oa('Android'))
    }
    _.laa = function () {
      return _.pa()
        ? _.gaa('Chromium')
        : (_.oa('Chrome') || _.oa('CriOS')) && !(_.pa() ? 0 : _.oa('Edge')) ||
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
    _.za = function (a, b) {
      b = _.va(a, b)
      var c
      ;(c = b >= 0) && _.ya(a, b)
      return c
    }
    _.ya = function (a, b) {
      Array.prototype.splice.call(a, b, 1)
    }
    _.Aa = function (a) {
      var b = a.length
      if (b > 0) {
        let c = Array(b)
        for (let d = 0; d < b; d++) c[d] = a[d]
        return c
      }
      return []
    }
    _.Ca = function (a, b) {
      for (let c = 1; c < arguments.length; c++) {
        let d = arguments[c]
        if (_.Ba(d)) {
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
    _.Ga = function () {
      return typeof BigInt === 'function'
    }
    Ha = function (a, b = !1) {
      return b && Symbol.for && a
        ? Symbol.for(a)
        : a != null
        ? Symbol(a)
        : Symbol()
    }
    _.Ma = function (a, b) {
      a[_.La] |= b
    }
    _.Oa = function (a) {
      _.Ma(a, 34)
      return a
    }
    _.Gaa = function (a) {
      _.Ma(a, 8192)
      return a
    }
    _.Haa = function (a) {
      _.Ma(a, 32)
      return a
    }
    _.Pa = function (a) {
      return a != null && a[_.Iaa] === _.Jaa
    }
    _.Ra = function (a, b) {
      return b === void 0
        ? a.Tb !== _.Qa && !!(2 & (a.ji[_.La] | 0))
        : !!(2 & b) && a.Tb !== _.Qa
    }
    _.Kaa = function (a, b) {
      a.Tb = b ? _.Qa : void 0
    }
    _.Laa = function (a) {
      return a
    }
    _.Sa = function (a) {
      a.xre = !0
      return a
    }
    _.Wa = function (a) {
      var b = a
      if ((0, _.Ta)(b)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b))
      } else if ((0, _.Ua)(b) && !Number.isSafeInteger(b)) {
        throw Error(String(b))
      }
      return _.Va
        ? BigInt(a)
        : a = (0, _.Maa)(a)
          ? a ? '1' : '0'
          : (0, _.Ta)(a)
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
    _.Oaa = function (a) {
      var b = a >>> 0
      _.Ya = b
      _.Za = (a - b) / 4294967296 >>> 0
    }
    _.$a = function (a) {
      if (a < 0) {
        _.Oaa(-a)
        let [b, c] = _.Paa(_.Ya, _.Za)
        _.Ya = b >>> 0
        _.Za = c >>> 0
      } else _.Oaa(a)
    }
    _.Raa = function (a, b) {
      var c = b * 4294967296 + (a >>> 0)
      return Number.isSafeInteger(c) ? c : _.Qaa(a, b)
    }
    _.Qaa = function (a, b) {
      b >>>= 0
      a >>>= 0
      if (b <= 2097151) { var c = '' + (4294967296 * b + a) }
      else {_.Ga()
          ? c = '' + (BigInt(b) << BigInt(32) | BigInt(a))
          : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7),
            c = b + Saa(c) + Saa(a))}
      return c
    }
    Saa = function (a) {
      a = String(a)
      return '0000000'.slice(a.length) + a
    }
    _.Taa = function (a) {
      if (a.length < 16) _.$a(Number(a))
      else if (_.Ga()) {
        a = BigInt(a),
          _.Ya = Number(a & BigInt(4294967295)) >>> 0,
          _.Za = Number(a >> BigInt(32) & BigInt(4294967295))
      } else {
        let b = +(a[0] === '-')
        _.Za = _.Ya = 0
        let c = a.length
        for (let d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
          let f = Number(a.slice(d, e))
          _.Za *= 1E6
          _.Ya = _.Ya * 1E6 + f
          _.Ya >= 4294967296 &&
            (_.Za += Math.trunc(_.Ya / 4294967296), _.Za >>>= 0, _.Ya >>>= 0)
        }
        if (b) {
          let [d, e] = _.Paa(_.Ya, _.Za)
          _.Ya = d
          _.Za = e
        }
      }
    }
    _.Paa = function (a, b) {
      b = ~b
      a ? a = ~a + 1 : b += 1
      return [a, b]
    }
    _.Uaa = function (a, b, c) {
      a.__closure__error__context__984382 ||
        (a.__closure__error__context__984382 = {})
      a.__closure__error__context__984382[b] = c
    }
    _.Vaa = function () {
      var a = Error()
      _.Uaa(a, 'severity', 'incident')
      _.ia(a)
    }
    _.Xaa = function (a, b) {
      if (a != null) {
        var c
        var d = (c = Waa) != null ? c : Waa = {}
        c = d[a] || 0
        c >= b || (d[a] = c + 1, _.Vaa())
      }
    }
    _.bb = function (a, b = `unexpected value ${a}!`) {
      throw Error(b)
    }
    _.Zaa = function (a) {
      if (typeof a !== 'boolean') throw Error('C`' + _.Yaa(a) + '`' + a)
      return a
    }
    _.eb = function (a) {
      switch (typeof a) {
        case 'bigint':
          return !0
        case 'number':
          return (0, _.db)(a)
        case 'string':
          return $aa.test(a)
        default:
          return !1
      }
    }
    _.aba = function (a) {
      if (a[0] === '-') { var b = !1 }
      else {b = a.length,
          b = b < 20 ? !0 : b === 20 && a <= '18446744073709551615'}
      if (b) return a
      _.Taa(a)
      return _.Qaa(_.Ya, _.Za)
    }
    _.bba = function (a) {
      a = (0, _.fb)(a)
      a >= 0 && (0, _.gb)(a) || (_.$a(a), a = _.Raa(_.Ya, _.Za))
      return a
    }
    _.cba = function (a) {
      a = (0, _.fb)(a)
      a >= 0 && (0, _.gb)(a) ? a = String(a) : (_.$a(a), a = _.Qaa(_.Ya, _.Za))
      return a
    }
    _.dba = function (a) {
      return (0, _.gb)(a) ? _.Wa(_.bba(a)) : _.Wa(_.cba(a))
    }
    _.eba = function (a) {
      var b = (0, _.fb)(Number(a))
      if ((0, _.gb)(b) && b >= 0) return _.Wa(b)
      b = a.indexOf('.')
      b !== -1 && (a = a.substring(0, b))
      return _.Ga() ? _.Wa((0, _.hb)(64, BigInt(a))) : _.Wa(_.aba(a))
    }
    _.fba = function (a) {
      var b = typeof a
      if (a == null) return a
      if (b === 'bigint') return _.Wa((0, _.hb)(64, a))
      if (_.eb(a)) return b === 'string' ? _.eba(a) : _.dba(a)
    }
    _.ib = function (a) {
      if (typeof a !== 'string') throw Error()
      return a
    }
    _.kb = function (a) {
      return a == null || typeof a === 'string' ? a : void 0
    }
    _.hba = function (a, b, c, d) {
      if (_.Pa(a)) return a
      if (!Array.isArray(a)) {
        return c
          ? d & 2 ? b[_.lb] || (b[_.lb] = _.gba(b)) : new b()
          : void 0
      }
      c = a[_.La] | 0
      d = c | d & 32 | d & 2
      d !== c && (a[_.La] = d)
      return new b(a)
    }
    _.gba = function (a) {
      a = new a()
      _.Oa(a.ji)
      return a
    }
    iba = function (a) {
      return a
    }
    jba = function (a, b, c, d, e, f) {
      a = _.hba(a, d, c, f)
      e && (a = _.mb(a))
      return a
    }
    kba = function (a) {
      return [a, this.get(a)]
    }
    _.lba = function (a) {
      var b = _.nb(_.ob)
      return b ? a[b] : void 0
    }
    nba = function (a, b) {
      b < 100 || _.Xaa(mba, 1)
    }
    _.qba = function (a, b, c, d) {
      var e = d !== void 0
      d = !!d
      var f = _.nb(_.ob), g
      !e && f && (g = a[f]) && g.T7a(nba)
      f = []
      var p = a.length
      g = 4294967295
      var t = !1, v = !!(b & 64), z = v ? b & 128 ? 0 : -1 : void 0
      if (!(b & 1)) {
        var B = p && a[p - 1]
        B != null && typeof B === 'object' && B.constructor === Object
          ? (p--, g = p)
          : B = void 0
        if (v && !(b & 128) && !e) {
          t = !0
          var J
          g = ((J = _.oba) != null ? J : _.Laa)(g - z, z, a, B, void 0) + z
        }
      }
      b = void 0
      for (J = 0; J < p; J++) {
        let S = a[J]
        if (S != null && (S = c(S, d)) != null) {
          if (v && J >= g) {
            let da = J - z
            var O = void 0
            ;((O = b) != null ? O : b = {})[da] = S
          } else f[J] = S
        }
      }
      if (B) {
        for (let S in B) {
          O = B[S]
          if (O == null || (O = c(O, d)) == null) continue
          p = +S
          let da
          if (v && !Number.isNaN(p) && (da = p + z) < g) f[da] = O
          else {
            let ha
            ;((ha = b) != null ? ha : b = {})[S] = O
          }
        }
      }
      b && (t ? f.push(b) : f[g] = b)
      e && _.nb(_.ob) && (a = _.lba(a)) && 'function' == typeof _.pba &&
        a instanceof _.pba && (f[_.ob] = a.ha())
      return f
    }
    rba = function (a) {
      a[0] = _.pb(a[0])
      a[1] = _.pb(a[1])
      return a
    }
    _.pb = function (a) {
      switch (typeof a) {
        case 'number':
          return Number.isFinite(a) ? a : '' + a
        case 'bigint':
          return (0, _.sba)(a) ? Number(a) : '' + a
        case 'boolean':
          return a ? 1 : 0
        case 'object':
          if (Array.isArray(a)) {
            let b = a[_.La] | 0
            return a.length === 0 && b & 1 ? void 0 : _.qba(a, b, _.pb)
          }
          if (_.Pa(a)) return tba(a)
          if ('function' == typeof _.sb && a instanceof _.sb) return a.hM()
          if (a instanceof _.tb) {
            return a = a.size !== 0 ? a.xlb(rba) : void 0, a
          }
          return
      }
      return a
    }
    _.wba = function (a, b) {
      if (b) {
        _.oba = b == null || b === _.Laa || b[uba] !== vba ? _.Laa : b
        try {
          return tba(a)
        } finally {
          _.oba = void 0
        }
      }
      return tba(a)
    }
    tba = function (a) {
      a = a.ji
      return _.qba(a, a[_.La] | 0, _.pb)
    }
    _.zba = function (a, b, c, d = 0) {
      if (a == null) {
        var e = 32
        c ? (a = [c], e |= 128) : a = []
        b && (e = e & -16760833 | (b & 1023) << 14)
      } else {
        if (!Array.isArray(a)) throw Error('E')
        e = a[_.La] | 0
        if (xba && 1 & e) throw Error('F')
        2048 & e && !(2 & e) && yba()
        if (e & 256) throw Error('G')
        if (e & 64) return (e | d) !== e && (a[_.La] = e | d), a
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
      a[_.La] = e | 64 | d
      return a
    }
    yba = function () {
      if (xba) throw Error('I')
      _.Xaa(Aba, 5)
    }
    Dba = function (a, b) {
      if (typeof a !== 'object') return a
      if (Array.isArray(a)) {
        var c = a[_.La] | 0
        return a.length === 0 && c & 1 ? void 0 : Bba(a, c, b)
      }
      if (_.Pa(a)) return Cba(a)
      if (a instanceof _.tb) {
        b = a.V9
        if (b & 2) return a
        if (!a.size) return
        c = _.Oa(a.xlb())
        if (a.Tfa) {
          for (a = 0; a < c.length; a++) {
            let d = c[a], e = d[1]
            e == null || typeof e !== 'object'
              ? e = void 0
              : _.Pa(e)
              ? e = Cba(e)
              : Array.isArray(e)
              ? e = Bba(e, e[_.La] | 0, !!(b & 32))
              : e = void 0
            d[1] = e
          }
        }
        return c
      }
      if ('function' == typeof _.sb && a instanceof _.sb) return a
    }
    Bba = function (a, b, c) {
      if (b & 2) return a
      !c || 4096 & b || 16 & b
        ? a = _.vb(a, b, !1, c && !(b & 16))
        : (_.Ma(a, 34), b & 4 && Object.freeze(a))
      return a
    }
    _.Eba = function (a, b, c) {
      a = new a.constructor(b)
      c && _.Kaa(a, !0)
      a.seb = _.Qa
      return a
    }
    Cba = function (a) {
      var b = a.ji, c = b[_.La] | 0
      return _.Ra(a, c) ? a : _.Fba(a, b, c) ? _.Eba(a, b) : _.vb(b, c)
    }
    _.vb = function (a, b, c, d) {
      d != null || (d = !!(34 & b))
      a = _.qba(a, b, Dba, d)
      d = 32
      c && (d |= 2)
      b = b & 16769217 | d
      a[_.La] = b
      return a
    }
    _.mb = function (a) {
      var b = a.ji, c = b[_.La] | 0
      return _.Ra(a, c)
        ? _.Fba(a, b, c) ? _.Eba(a, b, !0) : new a.constructor(_.vb(b, c, !1))
        : a
    }
    _.wb = function (a) {
      if (a.Tb !== _.Qa) return !1
      var b = a.ji
      b = _.vb(b, b[_.La] | 0)
      _.Ma(b, 2048)
      a.ji = b
      _.Kaa(a, !1)
      a.seb = void 0
      return !0
    }
    _.xb = function (a) {
      if (!_.wb(a) && _.Ra(a, a.ji[_.La] | 0)) throw Error()
    }
    _.yb = function (a, b) {
      b === void 0 && (b = a[_.La] | 0)
      b & 32 && !(b & 4096) && (a[_.La] = b | 4096)
    }
    _.Fba = function (a, b, c) {
      return c & 2
        ? !0
        : c & 32 && !(c & 4096)
        ? (b[_.La] = c | 2, _.Kaa(a, !0), !0)
        : !1
    }
    _.zb = function (a, b, c, d, e) {
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
        g = ((p = b) != null ? p : b = a[_.La] | 0) >> 14 & 1023 || 536870912
        c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : a[f] = d
      }
      return b
    }
    _.Gba = function (a, b, c, d, e, f, g, p, t) {
      var v = b
      g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d)
        ? _.Ab(b) ||
          (b |= !a.length || p && !(4096 & b) || 32 & d && !(4096 & b || 16 & b)
            ? 2
            : 256,
            b !== v && (a[_.La] = b),
            Object.freeze(a))
        : (g === 2 && _.Ab(b) &&
          (a = [...a], v = 0, b = _.Bb(b, d), d = _.zb(c, d, e, a, f)),
          _.Ab(b) || (t || (b |= 16), b !== v && (a[_.La] = b)))
      2 & b || !(4096 & b || 16 & b) || _.yb(c, d)
      return a
    }
    _.Hba = function (a, b, c) {
      a = _.Cb(a, b, c)
      return Array.isArray(a) ? a : _.Db
    }
    _.Iba = function (a, b) {
      2 & b && (a |= 2)
      return a | 1
    }
    _.Ab = function (a) {
      return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    _.Jba = function (a) {
      a = [...a]
      for (let b = 0; b < a.length; b++) {
        let c = a[b] = [...a[b]]
        Array.isArray(c[1]) && (c[1] = _.Oa(c[1]))
      }
      return _.Gaa(a)
    }
    _.Eb = function (a, b, c, d, e) {
      _.xb(a)
      var f = a.ji
      _.zb(
        f,
        f[_.La] | 0,
        b,
        (d === '0' ? Number(c) === 0 : c === d) ? void 0 : c,
        e,
      )
      return a
    }
    _.Kba = function (a, b, c, d, e, f, g, p, t) {
      var v = _.Ra(a, c)
      f = v ? 1 : f
      p = !!p || f === 3
      v = t && !v
      ;(f === 2 || v) && _.wb(a) && (b = a.ji, c = b[_.La] | 0)
      a = _.Hba(b, e, g)
      var z = a === _.Db ? 7 : a[_.La] | 0, B = _.Iba(z, c)
      if (t = !(4 & B)) {
        var J = a, O = c
        let S = !!(2 & B)
        S && (O |= 2)
        let da = !S, ha = !0, qa = 0, Ia = 0
        for (; qa < J.length; qa++) {
          let Ka = _.hba(J[qa], d, !1, O)
          if (Ka instanceof d) {
            if (!S) {
              let Xa = _.Ra(Ka)
              da && (da = !Xa)
              ha && (ha = Xa)
            }
            J[Ia++] = Ka
          }
        }
        Ia < qa && (J.length = Ia)
        B |= 4
        B = ha ? B & -4097 : B | 4096
        B = da ? B | 8 : B & -9
      }
      B !== z && (a[_.La] = B, 2 & B && Object.freeze(a))
      if (
        v && !(8 & B || !a.length &&
            (f === 1 || (f !== 4 ? 0 : 2 & B || !(16 & B) && 32 & c)))
      ) {
        _.Ab(B) && (a = [...a], B = _.Bb(B, c), c = _.zb(b, c, e, a, g))
        d = a
        v = B
        for (z = 0; z < d.length; z++) {
          J = d[z], B = _.mb(J), J !== B && (d[z] = B)
        }
        v |= 8
        B = v = d.length ? v | 4096 : v & -4097
        a[_.La] = B
      }
      return a = _.Gba(a, B, b, c, e, g, f, t, p)
    }
    _.Bb = function (a, b) {
      return a = (2 & b ? a | 2 : a & -3) & -273
    }
    _.Lba = function (a, b) {
      return _.Fb(b, `[${a.substring(4)}`)
    }
    _.Gb = function (a) {
      a && typeof a.dispose == 'function' && a.dispose()
    }
    _.Hb = function (a) {
      for (let b = 0, c = arguments.length; b < c; ++b) {
        let d = arguments[b]
        _.Ba(d) ? _.Hb.apply(null, d) : _.Gb(d)
      }
    }
    _.Ib = function () {
      this.uY = this.uY
      this.kna = this.kna
    }
    _.Kb = function (a, b) {
      _.Jb.call(this, a ? a.type : '')
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
      this.vj = null
      a && this.init(a, b)
    }
    _.Nba = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.handler = e
      this.key = ++Mba
      this.removed = this.Wta = !1
    }
    _.Lb = function (a, b, c) {
      for (let d in a) b.call(c, a[d], d, a)
    }
    _.Oba = function (a, b, c) {
      var d = {}
      for (let e in a) d[e] = b.call(c, a[e], e, a)
      return d
    }
    _.Pba = function (a, b, c) {
      for (let d in a) if (b.call(c, a[d], d, a)) return !0
      return !1
    }
    _.Mb = function (a) {
      var b = [], c = 0
      for (let d in a) b[c++] = a[d]
      return b
    }
    _.Nb = function (a) {
      var b = [], c = 0
      for (let d in a) b[c++] = d
      return b
    }
    _.Ob = function (a) {
      for (let b in a) return !1
      return !0
    }
    _.Pb = function (a) {
      var b = {}
      for (let c in a) b[c] = a[c]
      return b
    }
    _.Qb = function (a, b) {
      for (let e = 1; e < arguments.length; e++) {
        var c = arguments[e]
        for (d in c) a[d] = c[d]
        for (let f = 0; f < Qba.length; f++) {
          var d = Qba[f]
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
      }
    }
    _.Rb = function (a) {
      this.src = a
      this.listeners = {}
      this.ha = 0
    }
    _.Sba = function (a) {
      if (_.Sb) a(_.Sb)
      else {
        let b
        ;((b = Rba) != null ? b : Rba = []).push(a)
      }
    }
    _.Tb = function () {
      !_.Sb && _.Tba && _.Uba(_.Tba())
      return _.Sb
    }
    _.Uba = function (a) {
      _.Sb = a
      var b
      ;(b = Rba) == null || b.forEach(_.Sba)
      Rba = void 0
    }
    _.Ub = function (a) {
      _.Sb && _.Sb.Fb(a)
    }
    _.Vb = function () {
      _.Sb && _.Sb.jea()
    }
    _.Wb = function (a, b) {
      b.hasOwnProperty('displayName') || (b.displayName = a.toString())
      b[_.Vba] = a
    }
    _.Xb = function () {
      _.Ib.call(this)
      this.RY = new _.Rb(this)
      this.hod = this
      this.mOb = null
    }
    _.Zb = function (a, b) {
      var c = a
      b && (c = (0, _.Yb)(a, b))
      c = _.Zb.dTc(c)
      _.Zb.Wid
        ? setTimeout(c, 0)
        : (c = _.Zb.pXd(c), _.Zb.vBc || (_.Zb.vBc = _.Zb.CDd()), _.Zb.vBc(c))
    }
    $ba = function () {
      for (var a; a = Wba.remove();) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          _.ia(b)
        }
        Xba(Yba, a)
      }
      Zba = !1
    }
    _.cc = function (a, b) {
      this.Da = []
      this.mb = a
      this.Xa = b || null
      this.wa = this.ka = !1
      this.oa = void 0
      this.Va = this.tb = this.Ma = !1
      this.Ea = 0
      this.na = null
      this.Ba = 0
    }
    _.dc = function (a, b) {
      this.x = a !== void 0 ? a : 0
      this.y = b !== void 0 ? b : 0
    }
    _.ec = function (a, b) {
      this.width = a
      this.height = b
    }
    bca = function () {
      var a = null
      if (!aca) return a
      try {
        let b = (c) => c
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
    _.kc = function (a) {
      var b = dca()
      a = b ? b.createScriptURL(a) : a
      return new _.fc(_.ic, a)
    }
    _.eca = function (a) {
      return a instanceof _.fc
    }
    _.lc = function (a) {
      if (_.eca(a)) return a.ha
      throw Error('$')
    }
    fca = function (a) {
      return a.toString().indexOf('`') === -1
    }
    _.mc = function (a) {
      return new _.gca(_.ic, a)
    }
    _.nc = function (a) {
      return a instanceof _.gca
    }
    _.oc = function (a) {
      if (_.nc(a)) return a.ha
      throw Error('$')
    }
    rc = function (a) {
      return new qc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ':')
    }
    _.sc = function (a, b = hca) {
      if (_.nc(a)) return a
      for (let c = 0; c < b.length; ++c) {
        let d = b[c]
        if (d instanceof qc && d.ij(a)) return _.mc(a)
      }
    }
    _.tc = function (a, b = hca) {
      b = _.sc(a, b)
      b === void 0 && _.ica(a.toString())
      return b || _.jca
    }
    _.uc = function (a) {
      var b = window
      if (
        typeof MediaSource !== 'undefined' && a instanceof MediaSource ||
        typeof b.ManagedMediaSource !== 'undefined' &&
          a instanceof b.ManagedMediaSource
      ) return _.mc(URL.createObjectURL(a))
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
      return _.mc(URL.createObjectURL(a))
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
      var b = !mca.test(a)
      b && _.ica(a)
      if (!b) return a
    }
    _.vc = function (a) {
      return a instanceof _.gca ? _.oc(a) : nca(a)
    }
    _.wc = function (a, b) {
      b = _.vc(b)
      b !== void 0 && (a.href = b)
    }
    _.yc = function (a) {
      var b = dca()
      a = b ? b.createHTML(a) : a
      return new _.xc(_.ic, a)
    }
    _.oca = function (a) {
      return a instanceof _.xc
    }
    _.zc = function (a) {
      if (_.oca(a)) return a.ha
      throw Error('$')
    }
    _.Ac = function (a, b) {
      a.src = _.lc(b).toString()
    }
    _.pca = function (a, b) {
      a.srcdoc = _.zc(b)
    }
    _.qca = function (a, b) {
      a.setAttribute('sandbox', '')
      for (let c = 0; c < b.length; c++) {
        a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
      }
    }
    _.Cc = function (a, b, c) {
      a.removeAttribute('srcdoc')
      switch (b) {
        case 0:
          if (c instanceof _.fc) throw new _.Bc('TrustedResourceUrl', 0)
          _.qca(a, [])
          b = _.vc(c)
          b !== void 0 && (a.src = b)
          break
        case 1:
          if (!(c instanceof _.fc)) throw new _.Bc(typeof c, 1)
          _.qca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          _.Ac(a, c)
          break
        case 2:
          if (c instanceof _.fc) throw new _.Bc('TrustedResourceUrl', 2)
          _.qca(
            a,
            'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
              .split(' '),
          )
          b = _.vc(c)
          b !== void 0 && (a.src = b)
          break
        default:
          _.bb(b, void 0)
      }
    }
    _.Dc = function (a, b, c, d) {
      b = _.vc(b)
      return b !== void 0 ? a.open(b, c, d) : null
    }
    _.Ec = function (a) {
      return rca('script', a)
    }
    _.sca = function (a) {
      return rca('style', a)
    }
    rca = function (a, b = document) {
      var c,
        d = (c = b.querySelector) == null ? void 0 : c.call(b, `${a}[nonce]`)
      return d == null ? '' : d.nonce || d.getAttribute('nonce') || ''
    }
    _.Fc = function (a) {
      var b = dca()
      a = b ? b.createScript(a) : a
      return new _.tca(_.ic, a)
    }
    _.uca = function (a) {
      return a instanceof _.tca
    }
    _.Hc = function (a) {
      if (_.uca(a)) return a.ha
      throw Error('$')
    }
    vca = function (a) {
      var b = _.Ec(a.ownerDocument)
      b && a.setAttribute('nonce', b)
    }
    _.wca = function (a, b, c) {
      a.textContent = _.Hc(b)
      ;(c == null ? 0 : c.uTd) || vca(a)
    }
    _.Ic = function (a, b, c) {
      a.src = _.lc(b)
      ;(c == null ? 0 : c.uTd) || vca(a)
    }
    _.yca = function (a) {
      if (a instanceof _.xca) return a.ha
      throw Error('$')
    }
    _.Jc = function (a, b) {
      a.nodeType === 1 && _.zca(a)
      a.innerHTML = _.zc(b)
    }
    _.Kc = function (a, b, c, d) {
      if (a.length === 0) throw Error('$')
      a = a.map((f) => _.yca(f))
      var e = c.toLowerCase()
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
        b = _.vc(b)
        b !== void 0 && (a.href = b, a.rel = c)
      }
    }
    _.Aca = function (a, b, c) {
      a.href = _.lc(b).toString()
      a.rel = c
    }
    _.Eca = function (a) {
      return 'function' == typeof _.Dca && a instanceof _.Dca
    }
    _.Fca = function (a) {
      if (_.Eca(a)) return a.ha
      throw Error('$')
    }
    _.Lc = function (a, b, c) {
      return a.parseFromString(_.zc(b), c)
    }
    _.Mc = function (a, b) {
      b = _.vc(b)
      b !== void 0 && (a.href = b)
    }
    _.Gca = function (a, b) {
      return a.createContextualFragment(_.zc(b))
    }
    _.Hca = function (a) {
      return _.yc(a)
    }
    _.Ica = function (a) {
      return _.kc(a)
    }
    _.Nc = function (a) {
      a = a[0].toLowerCase()
      return new _.xca(_.ic, a)
    }
    _.Pc = function (a, b) {
      if (_.oca(a)) return a
      a = _.Oc(String(a))
      if (b == null ? 0 : b.Ate) a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;')
      if (b == null ? 0 : b.Ofb) a = a.replace(/(\r\n|\n|\r)/g, '<br>')
      if (b == null ? 0 : b.Bte) {
        a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')
      }
      return _.yc(a)
    }
    _.Oc = function (a) {
      return a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g,
        '&gt;',
      ).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    _.Kca = function (a) {
      return _.Jca('', a)
    }
    _.Jca = function (a, b) {
      a = _.Pc(a)
      return _.yc(b.map((c) => _.zc(_.Pc(c))).join(_.zc(a).toString()))
    }
    _.Lca = function (a, b) {
      b.appendChild(a)
      a = (new XMLSerializer()).serializeToString(b)
      a = a.slice(a.indexOf('>') + 1, a.lastIndexOf('</'))
      return _.yc(a)
    }
    _.Oca = function (a) {
      if (!Mca.test(a)) throw Error('$')
      if (Nca.indexOf(a.toUpperCase()) !== -1) throw Error('$')
    }
    _.Qc = function (a, b, c) {
      _.Oca(a)
      var d = `<${a}`
      b && (d += _.Pca(b))
      Array.isArray(c) || (c = c === void 0 ? [] : [c])
      Qca.indexOf(a.toUpperCase()) !== -1
        ? d += '>'
        : (b = _.Kca(c.map((e) => _.oca(e) ? e : _.Pc(String(e)))),
          d += '>' + b.toString() + '</' + a + '>')
      return _.yc(d)
    }
    _.Pca = function (a) {
      var b = '', c = Object.keys(a)
      for (let f = 0; f < c.length; f++) {
        var d = c[f], e = a[d]
        if (!Mca.test(d)) throw Error('$')
        if (e !== void 0 && e !== null) {
          if (/^on./i.test(d)) throw Error('$')
          Rca.indexOf(d.toLowerCase()) !== -1 &&
            (e = _.nc(e)
              ? e.toString()
              : nca(String(e)) || 'about:invalid#zClosurez')
          e = `${d}="${_.Pc(String(e))}"`
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
      var c = b.createRange()
      c.selectNode(b.body)
      a = _.yc(a)
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
    Rc = function (a, b, c) {
      a.setAttribute(b, c)
    }
    Wca = function (a) {
      return a.parts.map((b) => {
        var c = b.y5a
        return `${b.url}${c ? ` ${c}` : ''}`
      }).join(' , ')
    }
    _.Sc = function (a) {
      return _.Xca.sanitize(a)
    }
    _.Yca = function (a) {
      var b = a.split(/[?#]/), c = /[?]/.test(a) ? '?' + b[1] : ''
      return {
        tmb: b[0],
        params: c,
        fragment: /[#]/.test(a) ? '#' + (c ? b[2] : b[1]) : '',
      }
    }
    _.Tc = function (a, ...b) {
      if (b.length === 0) return _.kc(a[0])
      a[0].toLowerCase()
      var c = a[0]
      for (let d = 0; d < b.length; d++) {
        c += encodeURIComponent(b[d]) + a[d + 1]
      }
      return _.kc(c)
    }
    _.Uc = function (a, b) {
      a = _.Yca(_.lc(a).toString())
      return _.Zca(a.tmb, a.params, a.fragment, b)
    }
    _.Zca = function (a, b, c, d) {
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
      return _.kc(a + b + c)
    }
    _.$ca = function (a, b) {
      a = _.Yca(_.lc(a).toString())
      var c = a.tmb.slice(-1) === '/' ? '' : '/'
      b = a.tmb + c + encodeURIComponent(b)
      return _.kc(b + a.params + a.fragment)
    }
    _.ada = function (a) {
      a = _.Hc(a).toString()
      return _.kc(
        URL.createObjectURL(new Blob([a], { type: 'text/javascript' })),
      )
    }
    _.bda = function (a, b) {
      var c, d
      return Math.random() <
        ((d = (c = a.samplingRate) != null ? c : b) != null ? d : 0)
    }
    _.cda = function (a, b) {
      var c = new XMLHttpRequest()
      c.open('POST', a)
      c.setRequestHeader('Content-Type', 'application/json')
      c.send(b)
    }
    dda = function (a, b) {
      var c = b || _.Vc(), d = c.Og()
      b = c.createElement('STYLE')
      var e = _.sca(d)
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
    Wc = function (a, b) {
      _.Ib.call(this)
      this.ha = a
      this.Ba = b
      this.na = fda ? null : []
      this.ka = fda ? null : []
      this.ma = fda ? null : []
      this.Da = !1
    }
    gda = function () {
      this.Ba = this.wa = null
    }
    hda = function (a = window) {
      return a.WIZ_global_data
    }
    _.ida = function (a, b = window) {
      return (b = hda(b)) && a in b ? b[a] : null
    }
    _.Yc = function (a, b = window) {
      return new _.Xc(a, _.ida(a, b))
    }
    _.jda = function (a, b, c, d, e, f, g) {
      var p = ''
      a && (p += a + ':')
      c && (p += '//', b && (p += b + '@'), p += c, d && (p += ':' + d))
      e && (p += e)
      f && (p += '?' + f)
      g && (p += '#' + g)
      return p
    }
    _.Zc = function (a) {
      return a.match(kda)
    }
    _.ad = function (a) {
      return a ? decodeURI(a) : a
    }
    _.bd = function (a, b) {
      return _.Zc(b)[a] || null
    }
    _.lda = function (a) {
      a = _.bd(1, a)
      !a && _.ea.self && _.ea.self.location &&
        (a = _.ea.self.location.protocol.slice(0, -1))
      return a ? a.toLowerCase() : ''
    }
    _.cd = function (a) {
      a = _.Zc(a)
      return _.jda(a[1], a[2], a[3], a[4])
    }
    _.nda = function (a, b) {
      if (a) {
        a = a.split('&')
        for (let c = 0; c < a.length; c++) {
          let d = a[c].indexOf('='), e, f = null
          d >= 0
            ? (e = a[c].substring(0, d), f = a[c].substring(d + 1))
            : e = a[c]
          b(e, f ? _.mda(f) : '')
        }
      }
    }
    _.oda = function (a, b) {
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
    _.pda = function (a, b, c) {
      if (Array.isArray(b)) {
        for (let d = 0; d < b.length; d++) _.pda(a, String(b[d]), c)
      } else b != null && c.push(a + (b === '' ? '' : '=' + _.dd(b)))
    }
    _.qda = function (a) {
      var b = []
      for (let c in a) _.pda(c, a[c], b)
      return b.join('&')
    }
    _.rda = function (a, b, c, d) {
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
    sda = function (a) {
      if (
        typeof document !== 'undefined' && document &&
        document.getElementById && (a = document.getElementById(a))
      ) {
        let b = a.tagName.toUpperCase()
        if (b == 'SCRIPT' || b == 'LINK') return a
      }
      return null
    }
    uda = function (a = '', b) {
      if (a && b) throw Error('na')
      var c = ''
      var d = _.ea._F_jsUrl
      ;(a = b || sda(a)) && (c = a.src ? a.src : a.getAttribute('href'))
      if (d && c) {
        if (d != c) throw Error('oa`' + d + '`' + c)
        c = d
      } else c = d || c
      if (!tda(c)) throw Error('pa')
      return c
    }
    vda = function () {
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
    yda = function (a) {
      var { promise: b, resolve: c, reject: d } = vda()
      wda.set(a, { promise: b, resolve: c, reject: d })
      xda || (xda = [],
        queueMicrotask(() => {
          var e = [...xda]
          xda = null
          var f = _.Tb().Ea(e)
          for (let g of e) f[g].then(wda.get(g).resolve, wda.get(g).reject)
        }))
      xda.push(a)
      return b
    }
    _.Dda = function () {
      if (zda) return Ada
      zda = !0
      try {
        var a = uda(_.ea._F_jsUrl ? '' : 'base-js')
      } catch (d) {
        return !1
      }
      var b = Bda(_.Cda(a)), c = Object.keys(b)
      if (c.length === 0) return !1
      _.Sba((d) => {
        for (let e of c) {
          let f = b[e]
          for (let g of Object.keys(f)) d.bIa(e, g)
        }
      })
      return Ada = !0
    }
    _.Eda = function () {}
    Gda = function (a) {
      a = a.buf.charCodeAt(a.pos++)
      return Fda[a]
    }
    Hda = function (a) {
      var b = 0, c = 0
      do {
        var d = Gda(a)
        b |= (d & 31) << c
        c += 5
      } while (d & 32)
      return b < 0 ? b + 4294967296 : b
    }
    Lda = function (a, b) {
      if (!Ida) {
        for (var c = 0; c < 64; c++) {
          Fda[
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
              .charCodeAt(c)
          ] = c
        }
        Jda && (Ida = !0)
      }
      a = { buf: a, pos: b || 0 }
      Hda(a)
      b = Hda(a)
      var d = Hda(a) + 1
      c = Array(b)
      var e = Array(b), f = Array(b)
      d = Array(d)
      var g = 0, p = 0, t = a.buf, v = a.pos, z = a.buf.indexOf('|', a.pos)
      a.pos = z + 1
      for (z = 0; z < b; z++) {
        var B = Hda(a), J = B & 2, O = B & 1
        B >>>= 2
        O
          ? (g += B >>> 1 ^ -(B & 1), B = 'sy' + g.toString(36))
          : (O = v, v += B, B = t.substring(O, v))
        c[z] = B
        J && (d[p++] = B)
      }
      d[p] = ''
      a.pos++
      p = b & -2
      g = b & 1
      for (t = 0; t < p; t += 2) {
        v = Gda(a), f[t] = v & 7, f[t + 1] = v >>> 3 & 7
      }
      g && (g = Gda(a), f[p] = g & 7)
      a.pos++
      for (p = 0; p < b; p++) f[p] === 7 && (f[p] = Hda(a))
      a.pos++
      p = 0
      for (g = 0; g < b; g++) {
        t = f[g]
        v = t === 0 ? Kda : Array(t)
        e[g] = v
        z = p
        for (J = 0; J < t; J++) z -= Hda(a), v[J] = d[z]
        d[p] === c[g] && p++
      }
      return { ids: c, dependencies: e }
    }
    _.Nda = function (a = 'base-js', b = !1) {
      var c = {}, d = c.cssRowKey || '', e = c.ria || ''
      !c.jpe && !d && window && window._F_cssRowKey &&
        (d = window._F_cssRowKey,
          !e && window._F_combinedSignature &&
          (e = window._F_combinedSignature))
      if (!c.cssRowKey && d && typeof window._F_installCss !== 'function') {
        throw Error('xa')
      }
      var f = c.fse || _.Mda
      a = sda(a)
      b = new f(
        _.Ica(uda('', a), {
          VJb: 'base-js url is generated from ModulesetsUrlBuilder',
        }),
        d,
        e,
        !0,
        b,
      )
      d = c.zwe || a && a.hasAttribute('crossorigin')
      a = c.Joe || a && a.getAttribute('crossorigin')
      d && (b.pYa = d)
      a &&
        (b.hKa = a)
      c.oYa && (b.oYa = c.oYa)
      c.fetchPriority && (b.fetchPriority = c.fetchPriority)
      var g = _.Tb()
      g.Ba = b
      g.iIc(!0)
      _.ed = c.Yne === 'BATCH' ? yda : (p) => Promise.resolve(g.load(p))
    }
    aaa = []
    Oda = Object.create
    Pda = Object.defineProperty
    Qda = function (a) {
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
    gd = Qda(this)
    Rda = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64'
      .split(' ')
    gd.BigInt64Array && (Rda.push('BigInt64'), Rda.push('BigUint64'))
    Tda = function (a, b) {
      if (b) {
        for (var c = 0; c < Rda.length; c++) {
          Sda(Rda[c] + 'Array.prototype.' + a, b)
        }
      }
    }
    hd = function (a, b) {
      b && Sda(a, b)
    }
    Sda = function (a, b) {
      var c = gd
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
        Pda(c, a, { configurable: !0, writable: !0, value: b })
    }
    Uda = Object.setPrototypeOf
    Vda = function (a, b) {
      a.prototype = Oda(b.prototype)
      a.prototype.constructor = a
      Uda(a, b)
      a.Hc = b.prototype
    }
    Wda = function (a) {
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
    _.id = function (a) {
      return Wda(a())
    }
    hd('Symbol.asyncIterator', function (a) {
      return a ? a : Symbol('c')
    })
    hd('AsyncContext', function (a) {
      function b(c) {
        try {
          return c && (fd = c['A\u1d9cstate'] || (c['A\u1d9cstate'] = []))
        } catch (d) {}
      }
      b(gd.top) || b(gd) || b({})
      return a || {}
    })
    Yda = function () {
      return Xda
    }
    _.jd = function () {
      return Yda
    }
    Xda = function (a) {
      return a
    }
    Zda = function (a) {
      var b = fd
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
    hd('globalThis', function (a) {
      return a || gd
    })
    hd('Symbol.dispose', function (a) {
      return a ? a : Symbol('h')
    })
    hd('Object.values', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d])
        return c
      }
    })
    hd('Object.entries', function (a) {
      return a ? a : function (b) {
        var c = [], d
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]])
        }
        return c
      }
    })
    hd('Array.prototype.values', function (a) {
      return a ? a : function () {
        return this[Symbol.iterator]()
      }
    })
    hd('Object.fromEntries', function (a) {
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
    hd('String.prototype.replaceAll', function (a) {
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
    hd('String.prototype.trimLeft', function (a) {
      function b() {
        return this.replace(/^[\s\xa0]+/, '')
      }
      return a || b
    })
    hd('String.prototype.trimStart', function (a) {
      return a || String.prototype.trimLeft
    })
    hd('Promise.withResolvers', function (a) {
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
    hd('Array.prototype.flatMap', function (a) {
      return a ? a : function (b, c) {
        var d = []
        Array.prototype.forEach.call(this, function (e, f) {
          e = b.call(c, e, f, this)
          Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
        })
        return d
      }
    })
    var $da = {},
      aea = function () {
        if (typeof gd.EventTarget === 'function') {
          var a = gd.EventTarget.prototype
        } else {for (
            a = gd;
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
            var t = $da[f]
            if (!t) return c.call(this, f, g, p)
            var v = g != null ? g : e, z = d.get(v)
            z || (z = new WeakMap(), d.set(v, z))
            var B = z.get(this)
            B || (B = {}, z.set(this, B))
            var J = !(typeof p === 'boolean' ? p : p && p.capture) + f
            if (!B[J]) {
              ;(v = g) && typeof v === 'object' && (v = function () {
                var O = g.handleEvent
                if (typeof O === 'function') return O.apply(g, arguments)
              })
              if (v) {
                p && p.once && (v = function (O) {
                  return function () {
                    if (typeof O !== 'function') throw Error('l`' + O)
                    delete B[J]
                    return O.apply(this, arguments)
                  }
                }(v))
                for (z = 0; z < t.length; z++) v = t[z](v, f, this)
                if (
                  p && gd.AbortSignal && p.signal instanceof
                    gd.AbortSignal
                ) {
                  if (p.signal.aborted) return
                  p.signal.addEventListener('abort', function () {
                    delete B[J]
                  }, { once: !0 })
                }
              }
              B[J] = v
              return c.call(this, f, v, p)
            }
          }
          aea = function () {}
        }
      },
      bea = function (a) {
        var b = ['readystatechange']
        aea()
        for (let c = 0; c < b.length; c++) {
          ;($da[b[c]] || ($da[b[c]] = [])).push(a)
        }
      },
      ld = function (a, b) {
        Sda(a, function (c) {
          return c && b(c)
        })
      },
      cea = !1
    hd('AsyncContext.Variable', function (a) {
      function b(e) {
        this.name = e && e.name || ''
        this.index = d[1]++
        this.defaultValue = e ? e.defaultValue : void 0
      }
      if (a) {
        var c = a['\u1d43\u1d9cstart']
        typeof c === 'function' && (_.jd = c)
        c = a._JSC
        typeof c === 'function' && (Yda = c)
        return a
      }
      cea = !0
      Xda = function (e) {
        return e
      }
      var d = fd
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
      b['\u1d43\u1d9cstart'] = _.jd = function (e) {
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
      b._JSC = Yda = function (e) {
        var f = (0, _.jd)(e)
        return function (g, p) {
          return f(p)(g)
        }
      }
      return b
    })
    cea && function () {
      var a = function (d) {
          var e = arguments
          return function (f) {
            function g() {
              for (var p = 0; p < e.length; p++) {
                var t = e[p], v = arguments[t]
                typeof v === 'function' && (arguments[t] = Zda(v))
              }
              return f.apply(this, arguments)
            }
            if (!f) return f
            try {
              Pda(g, 'name', { value: f.name }),
                Pda(g, 'length', { value: f.length }),
                Pda(g, 'toString', {
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
      ld('Promise', function (d) {
        var e = d.prototype
        e.then = a(0, 1)(e.then)
        e.catch = b(e.catch)
        e.finally = b(e.finally)
        return d
      })
      ld('queueMicrotask', b)
      ld('requestAnimationFrame', b)
      ld('requestIdleCallback', b)
      ld('setInterval', b)
      ld('setTimeout', b)
      ld('HTMLCanvasElement.prototype.toBlob', b)
      ld('BaseAudioContext.prototype.decodeAudioData', a(1, 2))
      ld('FileSystemEntry.prototype.getParent', a(0, 1))
      ld('FileSystemDirectoryEntry.prototype.getFile', a(2, 3))
      ld('FileSystemDirectoryReader.prototype.readEntries', a(0, 1))
      ld('FileSystemFileEntry.prototype.file', a(0, 1))
      var c = new WeakMap()
      ld('XMLHttpRequest.prototype.send', function (d) {
        bea(function (e) {
          return function () {
            var f = fd[0]
            try {
              return fd[0] = c.get(this) || f, e.apply(this, arguments)
            } finally {
              fd[0] = f
            }
          }
        })
        return function () {
          c.set(this, fd[0])
          return d.apply(this, arguments)
        }
      })
    }()
    hd('Promise.prototype.finally', function (a) {
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
    var dea = function (a) {
        if (a == null) throw new TypeError('m`padStart')
        return a + ''
      },
      eea = function (a, b) {
        a = a !== void 0 ? String(a) : ' '
        return b > 0 && a
          ? a.repeat(Math.ceil(b / a.length)).substring(0, b)
          : ''
      }
    hd('String.prototype.padStart', function (a) {
      return a ? a : function (b, c) {
        var d = dea(this)
        return eea(c, b - d.length) + d
      }
    })
    hd('AsyncContext.Snapshot', function (a) {
      function b() {
        this.ha = c[0]
      }
      if (a) return a
      var c = fd
      b.wrap = Zda
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
    hd('Set.prototype.difference', function (a) {
      return a ? a : function (b) {
        fea(this)
        gea(b)
        var c = hea(this, b)
        b = new Set(this)
        var d = c.vUb
        c = c.cKb
        for (var e = d.next(); !e.done;) {
          c.has(e.value) && b.delete(e.value), e = d.next()
        }
        return b
      }
    })
    hd('Set.prototype.intersection', function (a) {
      return a ? a : function (b) {
        fea(this)
        gea(b)
        var c = new Set(), d = hea(this, b)
        b = d.vUb
        d = d.cKb
        for (var e = b.next(); !e.done;) {
          d.has(e.value) && c.add(e.value), e = b.next()
        }
        return c
      }
    })
    var gea = function (a) {
        if (
          typeof a !== 'object' || a === null || typeof a.size !== 'number' ||
          a.size < 0 || typeof a.keys !== 'function' ||
          typeof a.has !== 'function'
        ) throw new TypeError('o')
      },
      hea = function (a, b) {
        if (a.size <= b.size) a = { vUb: a.keys(), cKb: b }
        else {
          b = b.keys()
          if (
            typeof b !== 'object' || b === null || typeof b.next !== 'function'
          ) throw new TypeError('p')
          a = { vUb: b, cKb: a }
        }
        return a
      },
      fea = function (a) {
        if (!(a instanceof Set)) throw new TypeError('q')
      },
      iea = function (a) {
        a = Math.trunc(a) || 0
        a < 0 && (a += this.length)
        if (!(a < 0 || a >= this.length)) return this[a]
      }
    hd('Array.prototype.at', function (a) {
      return a ? a : iea
    })
    Tda('at', function (a) {
      return a ? a : iea
    })
    hd('String.prototype.at', function (a) {
      return a ? a : iea
    })
    hd('Array.prototype.flat', function (a) {
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
    hd('String.prototype.trimRight', function (a) {
      function b() {
        return this.replace(/[\s\xa0]+$/, '')
      }
      return a || b
    })
    hd('String.prototype.trimEnd', function (a) {
      return a || String.prototype.trimRight
    })
    var jea = function (a, b, c) {
      var d = Number(b)
      d = isNaN(d) || d == 0 ? 0 : Math.trunc(d)
      d < 0 && (d += a.length)
      if (d < 0 || d >= a.length) throw new RangeError('r`' + b)
      a[d] = c
      return a
    }
    hd('Array.prototype.with', function (a) {
      return a ? a : function (b, c) {
        var d = Array.from(this)
        return jea(d, b, c)
      }
    })
    Tda('with', function (a) {
      return a ? a : function (b, c) {
        return jea(this.slice(), b, c)
      }
    })
    hd('Promise.allSettled', function (a) {
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
    hd('String.prototype.matchAll', function (a) {
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
    var kea = function (a, b, c) {
      a instanceof String && (a = String(a))
      for (var d = a.length - 1; d >= 0; d--) {
        var e = a[d]
        if (b.call(c, e, d, a)) return { i: d, v: e }
      }
      return { i: -1, v: void 0 }
    }
    hd('Array.prototype.findLast', function (a) {
      return a ? a : function (b, c) {
        return kea(this, b, c).v
      }
    })
    Tda('findLast', function (a) {
      return a ? a : function (b, c) {
        return kea(this, b, c).v
      }
    })
    hd('String.prototype.padEnd', function (a) {
      return a ? a : function (b, c) {
        var d = dea(this)
        return d + eea(c, b - d.length)
      }
    })
    hd('AggregateError', function (a) {
      if (a) return a
      a = function (b, c) {
        c = Error(c)
        'stack' in c && (this.stack = c.stack)
        this.errors = b
        this.message = c.message
      }
      Vda(a, Error)
      a.prototype.name = 'AggregateError'
      return a
    })
    hd('Promise.any', function (a) {
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
    hd('Array.prototype.toSorted', function (a) {
      return a ? a : function (b) {
        return Array.from(this).sort(b)
      }
    })
    Tda('toSorted', function (a) {
      return a ? a : function (b) {
        return this.slice().sort(b)
      }
    })
    _._DumpException = _._DumpException || function (a) {
      throw a
    }
    var qd, sd, mea, nea, oea
    _.lea = _.lea || {}
    _.ea = this || self
    _.od = function (a, b, c) {
      a = a.split('.')
      c = c || _.ea
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
    _.rd = _.ea._F_toggles_default_BardChatUi || []
    sd = function () {}
    sd.get = function () {
      return null
    }
    _.ed = null
    _.pd = function (a, b) {
      a = a.split('.')
      b = b || _.ea
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null
      return b
    }
    _.Yaa = function (a) {
      var b = typeof a
      return b != 'object' ? b : a ? Array.isArray(a) ? 'array' : b : 'null'
    }
    _.Ba = function (a) {
      var b = _.Yaa(a)
      return b == 'array' || b == 'object' && typeof a.length == 'number'
    }
    _.td = function (a) {
      var b = typeof a
      return b == 'object' && a != null || b == 'function'
    }
    _.ud = function (a) {
      return Object.prototype.hasOwnProperty.call(a, mea) && a[mea] ||
        (a[mea] = ++nea)
    }
    mea = 'closure_uid_' + (Math.random() * 1E9 >>> 0)
    nea = 0
    oea = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    _.Yb = function (a, b, c) {
      _.Yb = oea
      return _.Yb.apply(null, arguments)
    }
    _.vd = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    }
    _.wd = function () {
      return Date.now()
    }
    _.pea = function (a, b, c) {
      _.od(a, b, c)
    }
    _.nb = function (a) {
      return a
    }
    _.xd = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Hc = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), p = 2; p < arguments.length; p++
        ) g[p - 2] = arguments[p]
        return b.prototype[e].apply(d, g)
      }
    }
    _.xd(_.ca, Error)
    _.ca.prototype.name = 'CustomError'
    var qea
    _.xd(baa, _.ca)
    baa.prototype.name = 'AssertionError'
    _.rea = typeof TextDecoder !== 'undefined'
    _.sea = typeof TextEncoder !== 'undefined'
    var yd = !!(_.rd[5] >> 15 & 1),
      tea = !!(_.rd[5] & 1024),
      uea = !!(_.rd[5] >> 17 & 1),
      vea = !!(_.rd[4] >> 26 & 1),
      wea = !!(_.rd[5] >> 18 & 1),
      xea = !!(_.rd[5] & 1),
      yea = !!(_.rd[4] >> 21 & 1),
      zea = !!(_.rd[5] >> 16 & 1),
      Aea = !!(_.rd[4] >> 22 & 1),
      Bea = !!(_.rd[5] & 4),
      Cea = !!(_.rd[5] >> 19 & 1),
      Dea = !!(_.rd[5] & 128),
      Eea = !!(_.rd[5] & 64),
      Fea = !!(_.rd[5] & 16)
    var Gea, xba, fda, Oea, Jda
    Gea = qd(1, !0)
    _.faa = yd ? uea : qd(610401301, !1)
    _.Hea = yd ? vea : qd(1331761403, !1)
    _.Iea = yd ? wea : qd(651175828, !1)
    xba = yd ? tea || !xea : qd(748402147, !0)
    _.Jea = yd ? yea : qd(861377723, !1)
    _.Kea = yd ? tea || !zea : qd(861377724, Gea)
    _.Lea = yd ? tea || !Aea : qd(869336904, Gea)
    _.Mea = yd ? tea || !Bea : qd(869336905, Gea)
    _.Nea = yd ? tea || !Cea : qd(1675845485, Gea)
    fda = yd ? Dea : qd(919444824, !1)
    Oea = yd ? Eea : qd(916544035, !1)
    Jda = yd ? Fea : qd(482019471, !1)
    var Pea
    Pea = _.ea.navigator
    _.na = Pea ? Pea.userAgentData || null : null
    var Qea = class {
      constructor(a) {
        this.ha = a
      }
    }
    var Rea = new class {
      constructor(a) {
        this.ka = a
        this.ha = this.ma = void 0
        this.na = !1
      }
      load() {
        var a = this
        return _.id(function* () {
          if (_.na) {
            return a.ha || (a.na = !0,
              a.ha = (() =>
                _.id(function* () {
                  try {
                    let b = yield _.na.getHighEntropyValues([a.ka])
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
    var Sea
    Sea = class {
      constructor() {
        this.ha = !1
      }
      load() {
        var a = this
        return _.id(function* () {
          if (naa(!0)) return new Qea(yield Rea.load())
          a.ha = !0
          return new Qea(_.taa())
        })
      }
    }
    _.Tea = new Sea()
    _.va = function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
    }
    _.zd = function (a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    }
    _.Ad = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0)
    }
    _.Bd = function (a, b, c) {
      return Array.prototype.map.call(a, b, c)
    }
    _.Cd = function (a, b) {
      return Array.prototype.some.call(a, b, void 0)
    }
    _.Uea = function (a) {
      _.Uea[' '](a)
      return a
    }
    _.Uea[' '] = function () {}
    _.Vea = function (a, b, c, d) {
      d = d ? d(b) : b
      return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    }
    var gfa, hfa
    _.Wea = _.haa()
    _.Ed = _.iaa()
    _.Fd = _.oa('Edge')
    _.Gd = _.oa('Gecko') && !(_.caa('WebKit') && !_.oa('Edge')) &&
      !(_.oa('Trident') || _.oa('MSIE')) && !_.oa('Edge')
    _.Id = _.caa('WebKit') && !_.oa('Edge')
    _.Xea = _.Id && _.oa('Mobile')
    _.Jd = _.ta()
    _.Kd = _.raa()
    _.Yea = _.qaa() || _.saa()
    _.Zea = _.oaa()
    _.$ea = _.paa()
    _.afa = _.oa('iPad')
    _.bfa = _.oa('iPod')
    _.cfa = _.sa()
    _.caa('KaiOS')
    var dfa = function () {
        var a = _.ea.document
        return a ? a.documentMode : void 0
      },
      efa
    a: {
      let a = '',
        b = function () {
          var c = _.ma()
          if (_.Gd) return /rv:([^\);]+)(\)|;)/.exec(c)
          if (_.Fd) return /Edge\/([\d\.]+)/.exec(c)
          if (_.Ed) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c)
          if (_.Id) return /WebKit\/(\S+)/.exec(c)
          if (_.Wea) return /(?:Version)[ \/]?(\S+)/.exec(c)
        }()
      b && (a = b ? b[1] : '')
      if (_.Ed) {
        let c = dfa()
        if (c != null && c > parseFloat(a)) {
          efa = String(c)
          break a
        }
      }
      efa = a
    }
    _.ffa = efa
    gfa = {}
    _.Ld = function (a) {
      return _.Vea(gfa, a, function () {
        return _.eaa(_.ffa, a) >= 0
      })
    }
    if (_.ea.document && _.Ed) {
      var ifa = dfa()
      hfa = ifa ? ifa : parseInt(_.ffa, 10) || void 0
    } else hfa = void 0
    _.jfa = hfa
    var kfa, lfa, mfa, nfa, ofa, pfa
    _.Nd = {}
    kfa = _.kaa()
    lfa = yaa()
    mfa = _.oa('iPad')
    nfa = _.maa()
    ofa = _.laa()
    pfa = zaa()
    _.Nd.ANDROID = nfa
    _.Nd.Lde = !1
    _.Nd.Mde = !1
    _.Nd.Nde = !1
    _.Nd.Ode = !1
    _.Nd.Pde = !1
    _.Nd.Qde = !1
    _.Nd.CHROME = ofa
    _.Nd.jra = _.Fd
    _.Nd.Y8 = kfa
    _.Nd.z1b = _.Ed
    _.Nd.Dob = mfa
    _.Nd.Eob = lfa
    _.Nd.Dqb = _.Wea
    _.Nd.sP = pfa
    _.Nd.yre = yaa
    _.Nd.Dre = zaa
    var Caa = /[-_.]/g,
      Aaa = { '-': '+', _: '/', '.': '=' },
      qfa = typeof structuredClone != 'undefined'
    var mba, Aba, uba
    _.lb = Ha()
    _.rfa = Ha()
    _.sfa = Ha()
    _.ob = Ha()
    _.tfa = Ha()
    mba = Ha()
    _.ufa = Ha()
    Aba = Ha()
    _.Iaa = Ha('m_m', !0)
    uba = Ha()
    _.vfa = Ha()
    var wfa
    _.La = Ha('jas', !0)
    wfa = []
    wfa[_.La] = 7
    _.Db = Object.freeze(wfa)
    var xfa
    _.Jaa = {}
    _.Qa = {}
    xfa = class {
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
    _.yfa = Object.freeze({})
    _.zfa = Object.freeze({})
    var vba = {}
    _.Afa = _.Sa((a) => a !== null && a !== void 0)
    _.Ua = _.Sa((a) => typeof a === 'number')
    _.Bfa = _.Sa((a) => Number.isFinite(a))
    _.Ta = _.Sa((a) => typeof a === 'string')
    _.Maa = _.Sa((a) => typeof a === 'boolean')
    _.Cfa = _.Sa((a) =>
      a != null && typeof a === 'object' && typeof a.then === 'function'
    )
    _.Dfa = _.Sa((a) => typeof a === 'function')
    _.Efa = _.Sa((a) =>
      !!a && (typeof a === 'object' || typeof a === 'function')
    )
    _.Ffa = _.Sa((a) => Array.isArray(a))
    _.Va = typeof _.ea.BigInt === 'function' &&
      typeof _.ea.BigInt(0) === 'bigint'
    var Ifa, Gfa, Jfa, Hfa
    _.sba = _.Sa((a) =>
      _.Va ? a >= Gfa && a <= Hfa : a[0] === '-' ? Naa(a, Ifa) : Naa(a, Jfa)
    )
    Ifa = Number.MIN_SAFE_INTEGER.toString()
    Gfa = _.Va ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
    Jfa = Number.MAX_SAFE_INTEGER.toString()
    Hfa = _.Va ? BigInt(Number.MAX_SAFE_INTEGER) : void 0
    _.Ya = 0
    _.Za = 0
    var Waa = void 0
    var $aa
    _.Od = typeof BigInt === 'function' ? BigInt.asIntN : void 0
    _.hb = typeof BigInt === 'function' ? BigInt.asUintN : void 0
    _.gb = Number.isSafeInteger
    _.db = Number.isFinite
    _.fb = Math.trunc
    $aa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/
    var Kfa, Lfa
    Kfa = (() =>
      class extends Map {
        constructor() {
          super()
        }
      })()
    Lfa = function (a) {
      if (a.V9 & 2) throw Error('D')
    }
    _.tb = class extends Kfa {
      constructor(a, b, c = iba, d = iba) {
        super()
        this.V9 = a[_.La] | 0
        this.Tfa = b
        this.FQa = c
        this.SXb = this.Tfa ? jba : d
        for (let e = 0; e < a.length; e++) {
          let f = a[e], g = c(f[0], !1, !0), p = f[1]
          b
            ? p === void 0 && (p = null)
            : p = d(f[1], !1, !0, void 0, void 0, this.V9)
          super.set(g, p)
        }
      }
      xlb(a) {
        return _.Gaa(Array.from(super.entries(), a))
      }
      clear() {
        Lfa(this)
        super.clear()
      }
      delete(a) {
        Lfa(this)
        return super.delete(this.FQa(a, !0, !1))
      }
      entries() {
        if (this.Tfa) {
          var a = super.keys()
          a = new xfa(a, kba, this)
        } else a = super.entries()
        return a
      }
      values() {
        if (this.Tfa) {
          var a = super.keys()
          a = new xfa(a, _.tb.prototype.get, this)
        } else a = super.values()
        return a
      }
      forEach(a, b) {
        this.Tfa
          ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e)
          })
          : super.forEach(a, b)
      }
      set(a, b) {
        Lfa(this)
        a = this.FQa(a, !0, !1)
        return a == null
          ? this
          : b == null
          ? (super.delete(a), this)
          : super.set(a, this.SXb(b, !0, !0, this.Tfa, !1, this.V9))
      }
      C0d(a) {
        var b = this.FQa(a[0], !1, !0)
        a = a[1]
        a = this.Tfa
          ? a === void 0 ? null : a
          : this.SXb(a, !1, !0, void 0, !1, this.V9)
        super.set(b, a)
      }
      has(a) {
        return super.has(this.FQa(a, !1, !1))
      }
      get(a) {
        a = this.FQa(a, !1, !1)
        var b = super.get(a)
        if (b !== void 0) {
          var c = this.Tfa
          return c
            ? (c = this.SXb(b, !1, !0, c, this.krd, this.V9),
              c !== b && super.set(a, c),
              c)
            : b
        }
      }
      [Symbol.iterator]() {
        return this.entries()
      }
    }
    _.tb.prototype.toJSON = void 0
    _.Pd = qfa ? structuredClone : (a) => _.qba(a, 0, _.pb)
    _.Mfa = _.Wa(0)
    _.Qd = {}
    _.Rd = function (a, b, c, d, e) {
      b = _.Cb(a.ji, b, c, e)
      if (b !== null || d && a.seb !== _.Qa) return b
    }
    _.Cb = function (a, b, c, d) {
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
    _.Fb = function (a, b) {
      if (b == null || b == '') return new a()
      b = JSON.parse(b)
      if (!Array.isArray(b)) throw Error('O')
      return new a(_.Haa(b))
    }
    _.k = class {
      constructor(a, b, c) {
        this.ji = _.zba(a, b, c, 2048)
      }
      toJSON() {
        return _.wba(this)
      }
      serialize(a) {
        return JSON.stringify(_.wba(this, a))
      }
      clone() {
        var a = this.ji, b = a[_.La] | 0
        return _.Fba(this, a, b)
          ? _.Eba(this, a, !0)
          : new this.constructor(_.vb(a, b, !1))
      }
      isImmutable() {
        return _.Ra(this)
      }
    }
    _.k.prototype.Rla = _.aa(0)
    _.k.prototype[_.Iaa] = _.Jaa
    _.k.prototype.toString = function () {
      return this.ji.toString()
    }
    _.Nfa = class extends _.ca {
      constructor(a) {
        super()
        this.message = 'AppContext is disposed, cannot get ' + a.join(', ') +
          '.'
      }
    }
    _.Ofa = []
    _.Pfa = []
    _.Qfa = !1
    _.Rfa = function (a) {
      _.Ofa[_.Ofa.length] = a
      if (_.Qfa) {
        for (let b = 0; b < _.Pfa.length; b++) {
          a((0, _.Yb)(_.Pfa[b].wrap, _.Pfa[b]))
        }
      }
    }
    _.Ib.prototype.uY = !1
    _.Ib.prototype.isDisposed = function () {
      return this.uY
    }
    _.Ib.prototype.dispose = function () {
      this.uY || (this.uY = !0, this.Wb())
    }
    _.Ib.prototype[Symbol.dispose] = function () {
      this.dispose()
    }
    _.Ib.prototype.hc = function (a) {
      this.addOnDisposeCallback(_.vd(_.Gb, a))
    }
    _.Ib.prototype.addOnDisposeCallback = function (a, b) {
      this.uY
        ? b !== void 0 ? a.call(b) : a()
        : (this.kna || (this.kna = []), b && (a = a.bind(b)), this.kna.push(a))
    }
    _.Ib.prototype.Wb = function () {
      if (this.kna) { for (; this.kna.length;) this.kna.shift()() }
    }
    _.Jb = function (a, b) {
      this.type = 'function' == typeof _.Sd && a instanceof _.Sd ? String(a) : a
      this.currentTarget = this.target = b
      this.defaultPrevented = this.ka = !1
    }
    _.Jb.prototype.stopPropagation = function () {
      this.ka = !0
    }
    _.Jb.prototype.preventDefault = function () {
      this.defaultPrevented = !0
    }
    var Tfa
    _.Sfa = !(!_.ea.navigator || !_.ea.navigator.maxTouchPoints)
    Tfa = function () {
      if (!_.ea.addEventListener || !Object.defineProperty) return !1
      var a = !1,
        b = Object.defineProperty({}, 'passive', {
          get: function () {
            a = !0
          },
        })
      try {
        let c = () => {}
        _.ea.addEventListener('test', c, b)
        _.ea.removeEventListener('test', c, b)
      } catch (c) {}
      return a
    }()
    _.xd(_.Kb, _.Jb)
    _.Kb.prototype.init = function (a, b) {
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
        : (this.offsetX = _.Id || a.offsetX !== void 0 ? a.offsetX : a.layerX,
          this.offsetY = _.Id || a.offsetY !== void 0 ? a.offsetY : a.layerY,
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
      this.oa = _.Jd ? a.metaKey : a.ctrlKey
      this.pointerId = a.pointerId || 0
      this.pointerType = a.pointerType
      this.state = a.state
      this.timeStamp = a.timeStamp
      this.vj = a
      a.defaultPrevented && _.Kb.Hc.preventDefault.call(this)
    }
    _.Kb.prototype.stopPropagation = function () {
      _.Kb.Hc.stopPropagation.call(this)
      this.vj.stopPropagation
        ? this.vj.stopPropagation()
        : this.vj.cancelBubble = !0
    }
    _.Kb.prototype.preventDefault = function () {
      _.Kb.Hc.preventDefault.call(this)
      var a = this.vj
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    _.Kb.prototype.s8a = _.aa(1)
    _.Ufa = 'closure_listenable_' + (Math.random() * 1E6 | 0)
    _.Td = function (a) {
      return !(!a || !a[_.Ufa])
    }
    var Mba = 0
    var Vfa = function (a) {
      a.removed = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.handler = null
    }
    var Qba =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ')
    _.Rb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString()
      a = this.listeners[f]
      a || (a = this.listeners[f] = [], this.ha++)
      var g = Wfa(a, b, d, e)
      g > -1
        ? (b = a[g], c || (b.Wta = !1))
        : (b = new _.Nba(b, this.src, f, !!d, e), b.Wta = c, a.push(b))
      return b
    }
    _.Rb.prototype.remove = function (a, b, c, d) {
      a = a.toString()
      if (!(a in this.listeners)) return !1
      var e = this.listeners[a]
      b = Wfa(e, b, c, d)
      return b > -1
        ? (Vfa(e[b]),
          _.ya(e, b),
          e.length == 0 && (delete this.listeners[a], this.ha--),
          !0)
        : !1
    }
    var Xfa = function (a, b) {
      var c = b.type
      if (!(c in a.listeners)) return !1
      var d = _.za(a.listeners[c], b)
      d &&
        (Vfa(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.ha--))
      return d
    }
    _.Rb.prototype.removeAll = function (a) {
      a = a && a.toString()
      var b = 0
      for (let c in this.listeners) {
        if (!a || c == a) {
          let d = this.listeners[c]
          for (let e = 0; e < d.length; e++) ++b, Vfa(d[e])
          delete this.listeners[c]
          this.ha--
        }
      }
      return b
    }
    _.Rb.prototype.ska = _.aa(3)
    _.Rb.prototype.Awa = function (a, b, c, d) {
      a = this.listeners[a.toString()]
      var e = -1
      a && (e = Wfa(a, b, c, d))
      return e > -1 ? a[e] : null
    }
    _.Rb.prototype.hasListener = function (a, b) {
      var c = a !== void 0, d = c ? a.toString() : '', e = b !== void 0
      return _.Pba(this.listeners, function (f) {
        for (let g = 0; g < f.length; ++g) {
          if (!(c && f[g].type != d || e && f[g].capture != b)) return !0
        }
        return !1
      })
    }
    var Wfa = function (a, b, c, d) {
      for (let e = 0; e < a.length; ++e) {
        let f = a[e]
        if (
          !f.removed && f.listener == b && f.capture == !!c && f.handler == d
        ) return e
      }
      return -1
    }
    var Yfa, Zfa, $fa, bga, cga, dga, ega, gga
    Yfa = 'closure_lm_' + (Math.random() * 1E6 | 0)
    Zfa = {}
    $fa = 0
    _.Vd = function (a, b, c, d, e) {
      if (d && d.once) return _.Ud(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Vd(a, b[f], c, d, e)
        return null
      }
      c = _.aga(c)
      return _.Td(a)
        ? a.listen(b, c, _.td(d) ? !!d.capture : !!d, e)
        : bga(a, b, c, !1, d, e)
    }
    bga = function (a, b, c, d, e, f) {
      if (!b) throw Error('R')
      var g = _.td(e) ? !!e.capture : !!e, p = _.Wd(a)
      p || (a[Yfa] = p = new _.Rb(a))
      c = p.add(b, c, d, g, f)
      if (c.proxy) return c
      d = cga()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener) {
        Tfa || (e = g),
          e === void 0 && (e = !1),
          a.addEventListener(b.toString(), d, e)
      } else if (a.attachEvent) a.attachEvent(dga(b.toString()), d)
      else if (a.addListener && a.removeListener) a.addListener(d)
      else throw Error('S')
      $fa++
      return c
    }
    cga = function () {
      var a = ega,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    }
    _.Ud = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Ud(a, b[f], c, d, e)
        return null
      }
      c = _.aga(c)
      return _.Td(a)
        ? a.Uf(b, c, _.td(d) ? !!d.capture : !!d, e)
        : bga(a, b, c, !0, d, e)
    }
    _.Xd = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (let f = 0; f < b.length; f++) _.Xd(a, b[f], c, d, e)
      } else {d = _.td(d) ? !!d.capture : !!d,
          c = _.aga(c),
          _.Td(a)
            ? a.xh(b, c, d, e)
            : a && (a = _.Wd(a)) && (b = a.Awa(b, c, d, e)) && _.Yd(b)}
    }
    _.Yd = function (a) {
      if (typeof a === 'number' || !a || a.removed) return !1
      var b = a.src
      if (_.Td(b)) return b.UO(a)
      var c = a.type, d = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(dga(c), d)
        : b.addListener && b.removeListener && b.removeListener(d)
      $fa--
      ;(c = _.Wd(b))
        ? (Xfa(c, a), c.ha == 0 && (c.src = null, b[Yfa] = null))
        : Vfa(a)
      return !0
    }
    dga = function (a) {
      return a in Zfa ? Zfa[a] : Zfa[a] = 'on' + a
    }
    _.fga = function (a, b) {
      var c = a.listener, d = a.handler || a.src
      a.Wta && _.Yd(a)
      return c.call(d, b)
    }
    ega = function (a, b) {
      return a.removed ? !0 : _.fga(a, new _.Kb(b, this))
    }
    _.Wd = function (a) {
      a = a[Yfa]
      return a instanceof _.Rb ? a : null
    }
    gga = '__closure_events_fn_' + (Math.random() * 1E9 >>> 0)
    _.aga = function (a) {
      if (typeof a === 'function') return a
      a[gga] || (a[gga] = function (b) {
        return a.handleEvent(b)
      })
      return a[gga]
    }
    _.Rfa(function (a) {
      ega = a(ega)
    })
    var Rba
    _.hga = function (a, b, c = !1) {
      a.ka = a.ka.concat(b)
      if (c) {
        if (!a.ha) throw Error('T`' + a.ma)
        b.map((d) => d.ha).forEach((d) => {
          _.Sba((e) => {
            e.bIa(a.ha, d)
          })
        })
      }
    }
    _.Zd = class {
      constructor(a, b, c, d = !1) {
        c = c || []
        this.ma = a
        this.ha = b || null
        this.ka = []
        _.hga(this, c, d)
      }
      toString() {
        return this.ma
      }
    }
    _.Vba = Symbol('U')
    _.xd(_.Xb, _.Ib)
    _.Xb.prototype[_.Ufa] = !0
    _.h = _.Xb.prototype
    _.h.eZ = function () {
      return this.mOb
    }
    _.h.Es = function (a) {
      this.mOb = a
    }
    _.h.addEventListener = function (a, b, c, d) {
      _.Vd(this, a, b, c, d)
    }
    _.h.removeEventListener = function (a, b, c, d) {
      _.Xd(this, a, b, c, d)
    }
    _.h.dispatchEvent = function (a) {
      var b, c = this.eZ()
      if (c) { for (b = []; c; c = c.eZ()) b.push(c) }
      c = this.hod
      var d = a.type || a
      if (typeof a === 'string') a = new _.Jb(a, c)
      else if (a instanceof _.Jb) a.target = a.target || c
      else {
        var e = a
        a = new _.Jb(d, c)
        _.Qb(a, e)
      }
      e = !0
      var f
      if (b) {
        for (f = b.length - 1; !a.ka && f >= 0; f--) {
          var g = a.currentTarget = b[f]
          e = g.cwa(d, !0, a) && e
        }
      }
      a.ka ||
        (g = a.currentTarget = c,
          e = g.cwa(d, !0, a) && e,
          a.ka || (e = g.cwa(d, !1, a) && e))
      if (b) {
        for (f = 0; !a.ka && f < b.length; f++) {
          g = a.currentTarget = b[f], e = g.cwa(d, !1, a) && e
        }
      }
      return e
    }
    _.h.Wb = function () {
      _.Xb.Hc.Wb.call(this)
      this.removeAllListeners()
      this.mOb = null
    }
    _.h.listen = function (a, b, c, d) {
      return this.RY.add(String(a), b, !1, c, d)
    }
    _.h.Uf = function (a, b, c, d) {
      return this.RY.add(String(a), b, !0, c, d)
    }
    _.h.xh = function (a, b, c, d) {
      return this.RY.remove(String(a), b, c, d)
    }
    _.h.UO = function (a) {
      return Xfa(this.RY, a)
    }
    _.h.removeAllListeners = function (a) {
      return this.RY ? this.RY.removeAll(a) : 0
    }
    _.h.cwa = function (a, b, c) {
      a = this.RY.listeners[String(a)]
      if (!a) return !0
      a = a.concat()
      var d = !0
      for (let e = 0; e < a.length; ++e) {
        let f = a[e]
        if (f && !f.removed && f.capture == b) {
          let g = f.listener, p = f.handler || f.src
          f.Wta && this.UO(f)
          d = g.call(p, c) !== !1 && d
        }
      }
      return d && !c.defaultPrevented
    }
    _.h.ska = _.aa(2)
    _.h.Awa = function (a, b, c, d) {
      return this.RY.Awa(String(a), b, c, d)
    }
    _.h.hasListener = function (a, b) {
      return this.RY.hasListener(a !== void 0 ? String(a) : void 0, b)
    }
    _.ae =
      typeof AsyncContext !== 'undefined' &&
        typeof AsyncContext.Snapshot === 'function'
        ? (a) => a && AsyncContext.Snapshot.wrap(a)
        : (a) => a
    var Xba = function (a, b) {
        a.na(b)
        a.ka < 100 && (a.ka++, b.next = a.ha, a.ha = b)
      },
      iga = class {
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
    _.Zb.pXd = _.ae
    _.Zb.Wid = !1
    _.Zb.CDd = function () {
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
        _.ea.setTimeout(a, 0)
      }
    }
    _.Zb.dTc = (a) => a
    _.Rfa(function (a) {
      _.Zb.dTc = a
    })
    var jga = class {
        constructor() {
          this.ka = this.ha = null
        }
        add(a, b) {
          var c = Yba.get()
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
      Yba = new iga(() => new kga(), (a) => a.reset()),
      kga = class {
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
    var lga, Zba, Wba, mga
    Zba = !1
    Wba = new jga()
    _.be = (a, b) => {
      lga || mga()
      Zba || (lga(), Zba = !0)
      Wba.add(a, b)
    }
    mga = () => {
      var a = Promise.resolve(void 0)
      lga = () => {
        a.then($ba)
      }
    }
    _.ce = function () {}
    var nga = function (a) {
      if (!a) return !1
      try {
        return !!a.$goog_Thenable
      } catch (b) {
        return !1
      }
    }
    var oga, pga, yga, vga, rga, Dga, Bga, zga, Aga, Ega, Cga, Fga
    _.ee = function (a) {
      this.ka = 0
      this.Da = void 0
      this.oa = this.ma = this.na = null
      this.wa = this.Ba = !1
      if (a != _.ce) {
        try {
          let b = this
          a.call(void 0, function (c) {
            _.de(b, 2, c)
          }, function (c) {
            _.de(b, 3, c)
          })
        } catch (b) {
          _.de(this, 3, b)
        }
      }
    }
    oga = function () {
      this.next =
        this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    oga.prototype.reset = function () {
      this.context =
        this.ha =
        this.ka =
        this.child =
          null
      this.always = !1
    }
    pga = new iga(function () {
      return new oga()
    }, function (a) {
      a.reset()
    })
    _.qga = function (a, b, c) {
      var d = pga.get()
      d.ka = a
      d.ha = b
      d.context = c
      return d
    }
    _.sga = function (a, b, c) {
      rga(a, b, c, null) || _.be(_.vd(b, a))
    }
    _.tga = function (a) {
      return new _.ee(function (b, c) {
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
            _.sga(p, _.vd(f, t), g)
          }
        } else b(e)
      })
    }
    _.fe = function () {
      var a,
        b,
        c = new _.ee(function (d, e) {
          a = d
          b = e
        })
      return new uga(c, a, b)
    }
    _.ee.prototype.then = function (a, b, c) {
      return vga(
        this,
        (0, _.ae)(typeof a === 'function' ? a : null),
        (0, _.ae)(typeof b === 'function' ? b : null),
        c,
      )
    }
    _.ee.prototype.$goog_Thenable = !0
    var xga = function (a, b, c, d) {
      _.wga(a, _.qga(b || _.ce, c || null, d))
    }
    _.ee.prototype.finally = function (a) {
      a = (0, _.ae)(a)
      return new _.ee((b, c) => {
        xga(this, (d) => {
          a()
          b(d)
        }, (d) => {
          a()
          c(d)
        })
      })
    }
    _.ee.prototype.ha = function (a, b) {
      return vga(this, null, (0, _.ae)(a), b)
    }
    _.ee.prototype.catch = _.ee.prototype.ha
    _.ee.prototype.cancel = function (a) {
      if (this.ka == 0) {
        let b = new _.ge(a)
        _.be(function () {
          yga(this, b)
        }, this)
      }
    }
    yga = function (a, b) {
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
              ? yga(c, b)
              : (f
                ? (d = f, d.next == c.oa && (c.oa = d), d.next = d.next.next)
                : zga(c),
                Aga(c, e, 3, b)))
          }
          a.na = null
        } else _.de(a, 3, b)
      }
    }
    _.wga = function (a, b) {
      a.ma || a.ka != 2 && a.ka != 3 || Bga(a)
      a.oa ? a.oa.next = b : a.ma = b
      a.oa = b
    }
    vga = function (a, b, c, d) {
      var e = _.qga(null, null, null)
      e.child = new _.ee(function (f, g) {
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
              t === void 0 && p instanceof _.ge ? g(p) : f(t)
            } catch (t) {
              g(t)
            }
          }
          : g
      })
      e.child.na = a
      _.wga(a, e)
      return e.child
    }
    _.ee.prototype.Fa = function (a) {
      this.ka = 0
      _.de(this, 2, a)
    }
    _.ee.prototype.Ma = function (a) {
      this.ka = 0
      _.de(this, 3, a)
    }
    _.de = function (a, b, c) {
      a.ka == 0 &&
        (a === c && (b = 3, c = new TypeError('V')),
          a.ka = 1,
          rga(c, a.Fa, a.Ma, a) ||
          (a.Da = c,
            a.ka = b,
            a.na = null,
            Bga(a),
            b != 3 || c instanceof _.ge || Cga(a, c)))
    }
    rga = function (a, b, c, d) {
      if (a instanceof _.ee) return xga(a, b, c, d), !0
      if (nga(a)) return a.then(b, c, d), !0
      if (_.td(a)) {
        try {
          let e = a.then
          if (typeof e === 'function') return Dga(a, e, b, c, d), !0
        } catch (e) {
          return c.call(d, e), !0
        }
      }
      return !1
    }
    Dga = function (a, b, c, d, e) {
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
    Bga = function (a) {
      a.Ba || (a.Ba = !0, _.be(a.Ea, a))
    }
    zga = function (a) {
      var b = null
      a.ma && (b = a.ma, a.ma = b.next, b.next = null)
      a.ma || (a.oa = null)
      return b
    }
    _.ee.prototype.Ea = function () {
      for (var a; a = zga(this);) Aga(this, a, this.ka, this.Da)
      this.Ba = !1
    }
    Aga = function (a, b, c, d) {
      if (c == 3 && b.ha && !b.always) { for (; a && a.wa; a = a.na) a.wa = !1 }
      if (b.child) b.child.na = null, Ega(b, c, d)
      else {try {
          b.always ? b.ka.call(b.context) : Ega(b, c, d)
        } catch (e) {
          Fga.call(null, e)
        }}
      Xba(pga, b)
    }
    Ega = function (a, b, c) {
      b == 2 ? a.ka.call(a.context, c) : a.ha && a.ha.call(a.context, c)
    }
    Cga = function (a, b) {
      a.wa = !0
      _.be(function () {
        a.wa && Fga.call(null, b)
      })
    }
    Fga = _.ia
    _.ge = function (a) {
      _.ca.call(this, a)
      this.ka = !1
    }
    _.xd(_.ge, _.ca)
    _.ge.prototype.name = 'cancel'
    var uga = function (a, b, c) {
      this.promise = a
      this.resolve = b
      this.reject = c
    }
    var Mga, Lga, Hga, Iga
    _.cc.prototype.cancel = function (a) {
      if (this.ka) this.oa instanceof _.cc && this.oa.cancel()
      else {
        if (this.na) {
          let b = this.na
          delete this.na
          a ? b.cancel(a) : (b.Ba--, b.Ba <= 0 && b.cancel())
        }
        this.mb ? this.mb.call(this.Xa, this) : this.Va = !0
        this.ka || this.ha(new _.he(this))
      }
    }
    _.cc.prototype.Ua = function (a, b) {
      this.Ma = !1
      Gga(this, a, b)
    }
    var Gga = function (a, b, c) {
        a.ka = !0
        a.oa = c
        a.wa = !b
        Hga(a)
      },
      Jga = function (a) {
        if (a.ka) {
          if (!a.Va) throw new Iga(a)
          a.Va = !1
        }
      }
    _.cc.prototype.callback = function (a) {
      Jga(this)
      Gga(this, !0, a)
    }
    _.cc.prototype.ha = function (a) {
      Jga(this)
      Gga(this, !1, a)
    }
    _.je = function (a, b, c) {
      return _.ie(a, b, null, c)
    }
    _.cc.prototype.finally = function (a) {
      return _.Kga(
        new Promise((b, c) => {
          _.ie(this, (d) => {
            a()
            b(d)
          }, (d) => {
            a()
            c(d)
          })
        }),
      )
    }
    _.ie = function (a, b, c, d) {
      var e = a.ka
      e ||
        (b === c ? b = c = (0, _.ae)(b) : (b = (0, _.ae)(b), c = (0, _.ae)(c)))
      a.Da.push([b, c, d])
      e && Hga(a)
      return a
    }
    _.cc.prototype.then = function (a, b, c) {
      var d,
        e,
        f = new _.ee(function (g, p) {
          e = g
          d = p
        })
      _.ie(this, e, function (g) {
        g instanceof _.he ? f.cancel() : d(g)
        return Lga
      }, this)
      return f.then(a, b, c)
    }
    _.cc.prototype.$goog_Thenable = !0
    _.cc.prototype.ma = _.aa(4)
    _.cc.prototype.isError = function (a) {
      return a instanceof Error
    }
    Mga = function (a) {
      return _.Cd(a.Da, function (b) {
        return typeof b[1] === 'function'
      })
    }
    Lga = {}
    Hga = function (a) {
      if (a.Ea && a.ka && Mga(a)) {
        var b = a.Ea, c = Nga[b]
        c && (_.ea.clearTimeout(c.ha), delete Nga[b])
        a.Ea = 0
      }
      a.na && (a.na.Ba--, delete a.na)
      b = a.oa
      for (var d = c = !1; a.Da.length && !a.Ma;) {
        var e = a.Da.shift(), f = e[0]
        let p = e[1]
        e = e[2]
        if (f = a.wa ? p : f) {
          try {
            var g = f.call(e || a.Xa, b)
            g === Lga && (g = void 0)
            g !== void 0 &&
              (a.wa = a.wa && (g == b || a.isError(g)), a.oa = b = g)
            if (
              nga(b) ||
              typeof _.ea.Promise === 'function' && b instanceof _.ea.Promise
            ) d = !0, a.Ma = !0
          } catch (t) {
            b = t, a.wa = !0, Mga(a) || (c = !0)
          }
        }
      }
      a.oa = b
      d &&
        (g = (0, _.Yb)(a.Ua, a, !0),
          d = (0, _.Yb)(a.Ua, a, !1),
          b instanceof _.cc ? (_.ie(b, g, d), b.tb = !0) : b.then(g, d))
      c && (b = new Oga(b), Nga[b.ha] = b, a.Ea = b.ha)
    }
    _.Kga = function (a) {
      var b = new _.cc()
      a.then(function (c) {
        b.callback(c)
      }, function (c) {
        b.ha(c)
      })
      return b
    }
    Iga = function (a) {
      _.ca.call(this)
      this.Uia = a
    }
    _.xd(Iga, _.ca)
    Iga.prototype.message = 'Deferred has already fired'
    Iga.prototype.name = 'AlreadyCalledError'
    _.he = function (a) {
      _.ca.call(this)
      this.Uia = a
    }
    _.xd(_.he, _.ca)
    _.he.prototype.message = 'Deferred was canceled'
    _.he.prototype.name = 'CanceledError'
    var Oga = function (a) {
      this.ha = _.ea.setTimeout((0, _.Yb)(this.throwError, this), 0)
      this.PY = a
    }
    Oga.prototype.throwError = function () {
      delete Nga[this.ha]
      throw this.PY
    }
    var Nga = {}
    var Rga, Sga, Tga
    _.Pga = function (a, b) {
      for (; a;) {
        if (a == b) return !0
        a = a.Za
      }
      return !1
    }
    _.ke = function (a) {
      for (; a.Za;) a = a.Za
      return a
    }
    Rga = function (a) {
      var b = _.Qga, c = []
      a = _.ke(a)
      var d
      a.iE[b] && (d = a.iE[b][0])
      d && c.push(d)
      a = a.kb || []
      for (let e = 0; e < a.length; e++) {
        a[e].iE[b] && (d = a[e].iE[b][0]), d && !_.wa(c, d) && c.push(d)
      }
      return c
    }
    _.me = function (a, b) {
      for (var c = a; c; c = c.Za) {
        if (c.isDisposed()) throw new _.Nfa([b])
        if (c.iE[b]) return c.iE[b][0]
        if (c.Bd[b]) break
      }
      if (c = a.Ob[b]) {
        c = c(a)
        if (c == null) throw Error('X`' + b)
        _.le(a, b, c)
        return c
      }
      return null
    }
    _.le = function (a, b, c) {
      if (a.isDisposed()) _.Gb(c)
      else {
        a.iE[b] = [c, !0]
        var d = Sga(a, a, b)
        for (let e = 0; e < d.length; e++) d[e].callback(null)
        delete a.Fc[b]
        b instanceof _.Zd && _.Wb(b, c.constructor)
      }
    }
    Sga = function (a, b, c) {
      var d = [], e = a.Va[c]
      e && (_.vaa(e, function (f) {
        _.Pga(f.appContext, b) && (d.push(f.d), _.za(e, f))
      }),
        e.length == 0 && delete a.Va[c])
      return d
    }
    Tga = function (a, b) {
      a.Va && _.Lb(a.Va, function (c, d, e) {
        _.vaa(c, function (f) {
          f.appContext == b && _.za(c, f)
        })
        c.length == 0 && delete e[d]
      })
    }
    _.ne = class extends _.Ib {
      constructor() {
        super()
        this.iE = {}
        this.Fc = {}
        this.Ob = {}
        this.Va = {}
        this.Xa = {}
        this.Bd = {}
        this.Tb = new _.Xb()
        this.Ff = !0
        this.Za = null
        var a = _.ke(this)
        this != a && (a.kb ? a.kb.push(this) : a.kb = [this])
      }
      get(a) {
        var b = _.me(this, a)
        if (b == null) throw Error('W`' + a)
        return b
      }
      Wb() {
        if (_.ke(this) == this) {
          var a = this.kb
          if (a) { for (; a.length;) a[0].dispose() }
        } else {
          a = _.ke(this).kb
          for (let b = 0; b < a.length; b++) {
            if (a[b] == this) {
              a.splice(b, 1)
              break
            }
          }
        }
        for (let b in this.iE) {
          a = this.iE[b], a[1] && a[0].dispose && a[0].dispose()
        }
        this.iE = null
        this.Ff && this.Tb.dispose()
        Tga(this, this)
        this.Va = null
        _.Gb(this.Ke)
        this.Bd = this.Ke = null
        super.Wb()
      }
      Ku() {
        return this.Tb
      }
    }
    _.ne.prototype.Xb = _.aa(7)
    _.ne.prototype.tb = _.aa(6)
    _.ne.prototype.Lb = _.aa(5)
    _.Qga = new _.Zd('n73qwf', 'n73qwf')
    _.dc.prototype.clone = function () {
      return new _.dc(this.x, this.y)
    }
    _.dc.prototype.equals = function (a) {
      return a instanceof _.dc && _.oe(this, a)
    }
    _.oe = function (a, b) {
      return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }
    _.h = _.dc.prototype
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
      a instanceof _.dc
        ? (this.x += a.x, this.y += a.y)
        : (this.x += Number(a), typeof b === 'number' && (this.y += b))
      return this
    }
    _.h.scale = function (a, b) {
      this.x *= a
      this.y *= typeof b === 'number' ? b : a
      return this
    }
    _.pe = function (a, b) {
      return a == b
        ? !0
        : a && b
        ? a.width == b.width && a.height == b.height
        : !1
    }
    _.h = _.ec.prototype
    _.h.clone = function () {
      return new _.ec(this.width, this.height)
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
    _.ic = {}
    var Uga = globalThis.trustedTypes, aca = Uga, cca
    _.fc = class {
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
    _.Vga = _.mc('about:blank')
    _.jca = _.mc('about:invalid#zClosurez')
    var qc, hca, kca, Wga, mca
    qc = class {
      constructor(a) {
        this.ij = a
      }
    }
    _.qe = {
      wle: rc('tel'),
      iee: new qc((a) => /^callto:\+?\d*$/i.test(a)),
      Wke: new qc((a) => a.indexOf('ssh://') === 0),
      nke: rc('rtsp'),
      PYc: rc('data'),
      S2c: rc('http'),
      T2c: rc('https'),
      EXTENSION: new qc((a) =>
        a.indexOf('chrome-extension://') === 0 ||
        a.indexOf('moz-extension://') === 0 ||
        a.indexOf('ms-browser-extension://') === 0 ||
        a.indexOf('safari-web-extension://') === 0
      ),
      r1c: rc('ftp'),
      Nad: new qc((a) => /^[^:]*([/?#]|$)/.test(a)),
      Z5c: rc('mailto'),
      Zhe: rc('intent'),
      vie: rc('market'),
      cie: rc('itms'),
      eie: rc('itms-appss'),
      fie: rc('itms-services'),
      Ife: rc('fb-messenger'),
      Dme: rc('whatsapp'),
      Oke: new qc((a) => a.indexOf('sip:') === 0 || a.indexOf('sips:') === 0),
      Ske: rc('sms'),
      vme: rc('vnd.youtube'),
      Ahe: rc('googlehome'),
      Bhe: rc('googlehomesdk'),
      LINE: rc('line'),
    }
    hca = [_.qe.PYc, _.qe.S2c, _.qe.T2c, _.qe.Z5c, _.qe.r1c, _.qe.Nad]
    kca = typeof URL === 'function'
    Wga = ['data:', 'http:', 'https:', 'mailto:', 'ftp:']
    mca = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
    _.ica = () => {}
    _.xc = class {
      constructor(a, b) {
        this.ha = b
      }
      toString() {
        return this.ha + ''
      }
    }
    _.te = new _.xc(_.ic, Uga ? Uga.emptyHTML : '')
    _.Xga = {
      jhe: 0,
      sfe: 1,
      tfe: 2,
      0: 'FORMATTED_HTML_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    }
    _.Bc = class extends Error {
      constructor(a, b) {
        super(`${a} cannot be used with intent ${_.Xga[b]}`)
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
    _.Yga = new _.tca(_.ic, Uga ? Uga.emptyScript : '')
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
    _.dd = function (a) {
      return encodeURIComponent(String(a))
    }
    _.mda = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '))
    }
    _.Zga = Math.random() * 2147483648 | 0
    _.$ga = function (a) {
      return String(a).replace(/([A-Z])/g, '-$1').toLowerCase()
    }
    var Mca = /^[a-z][a-z\d-]*$/i,
      Nca =
        'APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE'
          .split(' '),
      Qca = 'AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR'
        .split(' '),
      Rca = ['action', 'formaction', 'href']
    _.aha = function (a, b) {
      var c = `{_safevalues_format_marker_:${a.ha.size}_${
        Math.random().toString(36).slice(2)
      }}`
      a.ha.set(_.Pc(c).toString(), b)
      return c
    }
    _.ue = class {
      constructor() {
        this.ha = new Map()
      }
      format(a) {
        var b = _.Pc('_safevalues_format_marker_:').toString()
        a = _.Pc(a).toString().replace(
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
        return _.yc(a)
      }
      text(a) {
        return _.aha(this, { type: 'html', html: _.Pc(a).toString() })
      }
    }
    _.ue.prototype.pF = _.aa(9)
    _.ue.prototype.Iz = _.aa(8)
    _.bha = new Set(
      'accent-color align-content align-items align-self alignment-baseline all appearance aspect-ratio backdrop-filter backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-position-x background-position-y background-repeat background-size block-size border border-block border-block-color border-block-end border-block-end-color border-block-end-style border-block-end-width border-block-start border-block-start-color border-block-start-style border-block-start-width border-block-style border-block-width border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-end-end-radius border-end-start-radius border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-inline border-inline-color border-inline-end border-inline-end-color border-inline-end-style border-inline-end-width border-inline-start border-inline-start-color border-inline-start-style border-inline-start-width border-inline-style border-inline-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-start-end-radius border-start-start-radius border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-shadow box-sizing caption-side caret-color clear clip clip-path clip-rule color color-interpolation color-interpolation-filters color-scheme column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns contain contain-intrinsic-block-size contain-intrinsic-height contain-intrinsic-inline-size contain-intrinsic-size contain-intrinsic-width content content-visibility counter-increment counter-reset counter-set cx cy d display dominant-baseline empty-cells field-sizing fill fill-opacity fill-rule filter flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float flood-color flood-opacity font font-family font-feature-settings font-kerning font-optical-sizing font-palette font-size font-size-adjust font-stretch font-style font-synthesis font-synthesis-small-caps font-synthesis-style font-synthesis-weight font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-emoji font-variant-ligatures font-variant-numeric font-variant-position font-variation-settings font-weight forced-color-adjust gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows height hyphenate-character hyphenate-limit-chars hyphens image-orientation image-rendering inline-size inset inset-area inset-block inset-block-end inset-block-start inset-inline inset-inline-end inset-inline-start isolation justify-content justify-items justify-self left letter-spacing lighting-color line-break line-clamp line-gap-override line-height list-style list-style-image list-style-position list-style-type margin margin-block margin-block-end margin-block-start margin-bottom margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top marker marker-end marker-mid marker-start mask mask-clip mask-composite mask-image mask-mode mask-origin mask-position mask-repeat mask-size mask-type max-block-size max-height max-inline-size max-width min-block-size min-height min-inline-size min-width mix-blend-mode object-fit object-position object-view-box opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-anchor overflow-block overflow-clip-margin overflow-inline overflow-wrap overflow-x overflow-y padding padding-block padding-block-end padding-block-start padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top paint-order perspective perspective-origin place-content place-items place-self position quotes r resize right rotate row-gap ruby-align ruby-position rx ry scale shape-image-threshold shape-margin shape-outside shape-rendering stop-color stop-opacity stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width tab-size table-layout text-align text-align-last text-anchor text-autospace text-box-edge text-box-trim text-combine-upright text-decoration text-decoration-color text-decoration-line text-decoration-skip-ink text-decoration-style text-decoration-thickness text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-indent text-orientation text-overflow text-rendering text-shadow text-size-adjust text-spacing text-spacing-trim text-transform text-underline-offset text-underline-position text-wrap top transform transform-box transform-origin transform-style translate unicode-bidi vector-effect vertical-align visibility white-space white-space-collapse widows width will-change word-break word-spacing word-wrap writing-mode x y z-index zoom animation animation-composition animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-range animation-range-end animation-range-start animation-timeline animation-timing-function offset offset-anchor offset-distance offset-path offset-position offset-rotate transition transition-behavior transition-delay transition-duration transition-property transition-timing-function'
        .split(' '),
    )
    _.cha = new Set(
      'alpha cubic-bezier linear-gradient matrix perspective radial-gradient rect repeating-linear-gradient repeating-radial-gradient rgb rgba rotate rotate3d rotatex rotatey rotatez scale scale3d scalex scaley scalez skew skewx skewy steps translate translate3d translatex translatey translatez url'
        .split(' '),
    )
    var eha
    _.dha = function (a, b) {
      return b !== 'FORM' && (a.oa.has(b) || a.ha.has(b))
    }
    eha = function (a, b, c) {
      c = a.ha.get(c)
      return (c == null ? 0 : c.has(b))
        ? c.get(b)
        : a.ma.has(b)
        ? { By: 1 }
        : (c = a.na.get(b))
        ? c
        : a.ka && [...a.ka].some((d) => b.indexOf(d) === 0)
        ? { By: 1 }
        : { By: 0 }
    }
    _.ve = class {
      constructor(a, b, c, d, e) {
        this.oa = a
        this.ha = b
        this.ma = c
        this.na = d
        this.ka = e
      }
    }
    _.fha = new Set(
      'ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH'
        .split(' '),
    )
    var gha =
        'ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT'
          .split(' '),
      hha = [
        ['A', new Map([['href', { By: 7 }]])],
        ['AREA', new Map([['href', { By: 7 }]])],
        [
          'LINK',
          new Map([['href', {
            By: 5,
            conditions: new Map([[
              'rel',
              new Set(
                'alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource'
                  .split(' '),
              ),
            ]]),
          }]]),
        ],
        ['SOURCE', new Map([['src', { By: 5 }], ['srcset', { By: 6 }]])],
        ['IMG', new Map([['src', { By: 5 }], ['srcset', { By: 6 }]])],
        ['VIDEO', new Map([['src', { By: 5 }]])],
        ['AUDIO', new Map([['src', { By: 5 }]])],
      ],
      iha =
        'title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref'
          .split(' '),
      jha = [
        ['dir', {
          By: 3,
          conditions: new Map([['dir', new Set(['auto', 'ltr', 'rtl'])]]),
        }],
        ['async', {
          By: 3,
          conditions: new Map([['async', new Set(['async'])]]),
        }],
        ['loading', {
          By: 3,
          conditions: new Map([['loading', new Set(['eager', 'lazy'])]]),
        }],
        ['poster', { By: 5 }],
        ['target', {
          By: 3,
          conditions: new Map([['target', new Set(['_self', '_blank'])]]),
        }],
      ],
      kha = new _.ve(new Set(gha), new Map(hha), new Set(iha), new Map(jha)),
      lha = new _.ve(
        new Set(gha.concat(['BUTTON', 'INPUT'])),
        new Map(hha),
        new Set(iha.concat(['class', 'id', 'name'])),
        new Map(jha.concat([['style', { By: 1 }]])),
      ),
      mha = new _.ve(
        new Set(
          gha.concat('STYLE TITLE INPUT TEXTAREA BUTTON LABEL'.split(' ')),
        ),
        new Map(hha),
        new Set(
          iha.concat(['class', 'id', 'tabindex', 'contenteditable', 'name']),
        ),
        new Map(jha.concat([['style', { By: 1 }]])),
        new Set(['data-', 'aria-']),
      )
    var nha
    _.oha = function (a, b, c) {
      b = Tca(b, c)
      b = document.createTreeWalker(b, 5, (g) => {
        g.nodeType === 3
          ? g = 1
          : Vca(g)
          ? (g = Uca(g), g = g === null ? 2 : _.dha(a.oa, g) ? 1 : 2)
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
        } else if (Vca(d)) g = nha(a, d, c)
        else throw Error('$')
        f.appendChild(g)
        if (d = b.firstChild()) f = g
        else {for (; !(d = b.nextSibling()) && (d = b.parentNode());) {
            f = f.parentNode
          }}
      }
      return e
    }
    nha = function (a, b, c) {
      var d = Uca(b)
      c = c.createElement(d)
      b = b.attributes
      for (let { name: p, value: t } of b) {
        var e = eha(a.oa, p, d), f
        a: {
          if (f = e.conditions) {
            for (let [v, z] of f) {
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
          switch (e.By) {
            case 1:
              Rc(c, p, t)
              break
            case 2:
              throw Error()
            case 3:
              Rc(c, p, t.toLowerCase())
              break
            case 4:
              a.ka ? (e = a.ka(t), Rc(c, p, e)) : Rc(c, p, t)
              break
            case 5:
              a.ha
                ? (e = { type: 2, attributeName: p, Nkc: d },
                  f = _.Sca(t),
                  (e = a.ha(f, e)) && Rc(c, p, e.toString()))
                : Rc(c, p, t)
              break
            case 6:
              if (a.ha) {
                e = { type: 2, attributeName: p, Nkc: d }
                f = []
                for (let v of t.split(',')) {
                  let [z, B] = v.trim().split(/\s+/, 2)
                  f.push({ url: z, y5a: B })
                }
                g = f
                f = { parts: [] }
                for (let v of g) {
                  g = _.Sca(v.url),
                    (g = a.ha(g, e)) &&
                    f.parts.push({ url: g.toString(), y5a: v.y5a })
                }
                Rc(c, p, Wca(f))
              } else Rc(c, p, t)
              break
            case 7:
              e = t
              if (a.na) {
                e = { type: 2, attributeName: p, Nkc: d }
                f = _.Sca(t)
                e = a.na(f, e)
                if (e === null) break
                e = e.toString()
              }
              f = _.lca(e)
              e = f !== void 0 && Wga.indexOf(f.toLowerCase()) !== -1
                ? e
                : 'about:invalid#zClosurez'
              Rc(c, p, e)
          }
        }
      }
      return c
    }
    _.pha = class {
      constructor(a, b, c, d, e, f) {
        this.oa = a
        this.ma = b
        this.ka = c
        this.ha = d
        this.na = e
        this.wa = f
        this.changes = []
      }
      sanitize(a) {
        var b = document.implementation.createHTMLDocument('')
        return _.Lca(_.oha(this, a, b), b.body)
      }
      createTextNode(a) {
        return document.createTextNode(a)
      }
    }
    _.Xca = new _.pha(kha)
    _.qha = new _.pha(lha)
    _.rha = new _.pha(mha)
    _.sha = class {
      constructor() {
        this.na = !1
        this.ha = kha
      }
    }
    _.we = class extends _.sha {
      build() {
        if (this.na) throw Error('fa')
        this.na = !0
        return new _.pha(this.ha, void 0, void 0, this.ka, this.ma)
      }
    }
    var tha, vha, Hha, Iha, Jha
    _.Vc = function (a) {
      return a ? new _.xe(_.ye(a)) : qea || (qea = new _.xe())
    }
    _.ze = function (a, b) {
      return typeof b === 'string' ? a.getElementById(b) : b
    }
    _.Ae = function (a, b) {
      return (b || document).getElementsByTagName(String(a))
    }
    _.Be = function (a, b) {
      _.Lb(b, function (c, d) {
        d == 'style'
          ? a.style.cssText = c
          : d == 'class'
          ? a.className = c
          : d == 'for'
          ? a.htmlFor = c
          : tha.hasOwnProperty(d)
          ? a.setAttribute(tha[d], c)
          : _.ja(d, 'aria-') || _.ja(d, 'data-')
          ? a.setAttribute(d, c)
          : a[d] = c
      })
    }
    tha = {
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
    _.Ce = function (a) {
      a = (a || window).document
      a = a.compatMode == 'CSS1Compat' ? a.documentElement : a.body
      return new _.ec(a.clientWidth, a.clientHeight)
    }
    _.De = function (a) {
      return a ? a.defaultView : window
    }
    _.wha = function (a, b) {
      var c = b[1], d = _.uha(a, String(b[0]))
      c &&
        (typeof c === 'string'
          ? d.className = c
          : Array.isArray(c)
          ? d.className = c.join(' ')
          : _.Be(d, c))
      b.length > 2 && vha(a, d, b, 2)
      return d
    }
    vha = function (a, b, c, d) {
      function e(f) {
        f && b.appendChild(typeof f === 'string' ? a.createTextNode(f) : f)
      }
      for (; d < c.length; d++) {
        let f = c[d]
        !_.Ba(f) || _.td(f) && f.nodeType > 0
          ? e(f)
          : _.zd(
            f && typeof f.length == 'number' && typeof f.item == 'function'
              ? _.Aa(f)
              : f,
            e,
          )
      }
    }
    _.Ee = function (a) {
      return _.uha(document, a)
    }
    _.uha = function (a, b) {
      b = String(b)
      a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
      return a.createElement(b)
    }
    _.xha = function (a, b) {
      vha(_.ye(a), a, arguments, 1)
    }
    _.Fe = function (a) {
      for (var b; b = a.firstChild;) a.removeChild(b)
    }
    _.yha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b)
    }
    _.zha = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    _.Aha = function (a, b, c) {
      a.insertBefore(b, a.childNodes[c] || null)
    }
    _.Ge = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    _.Bha = function (a, b) {
      var c = b.parentNode
      c && c.replaceChild(a, b)
    }
    _.Cha = function (a) {
      return a.children != void 0
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
          return b.nodeType == 1
        })
    }
    _.Eha = function (a) {
      return a.firstElementChild !== void 0
        ? a.firstElementChild
        : _.Dha(a.firstChild, !0)
    }
    _.Fha = function (a) {
      return a.nextElementSibling !== void 0
        ? a.nextElementSibling
        : _.Dha(a.nextSibling, !0)
    }
    _.Gha = function (a) {
      return a.previousElementSibling !== void 0
        ? a.previousElementSibling
        : _.Dha(a.previousSibling, !1)
    }
    _.Dha = function (a, b) {
      for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling
      return a
    }
    _.Ie = function (a) {
      return _.td(a) && a.nodeType == 1
    }
    _.Je = function (a) {
      return a.parentElement || null
    }
    _.Le = function (a, b) {
      if (!a || !b) return !1
      if (a.contains && b.nodeType == 1) return a == b || a.contains(b)
      if (typeof a.compareDocumentPosition != 'undefined') {
        return a == b || !!(a.compareDocumentPosition(b) & 16)
      }
      for (; b && a != b;) b = b.parentNode
      return b == a
    }
    _.ye = function (a) {
      return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    _.Me = function (a, b) {
      if ('textContent' in a) a.textContent = b
      else if (a.nodeType == 3) a.data = String(b)
      else if (a.firstChild && a.firstChild.nodeType == 3) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild)
        a.firstChild.data = String(b)
      } else _.Fe(a), a.appendChild(_.ye(a).createTextNode(String(b)))
    }
    Hha = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
    Iha = { IMG: ' ', BR: '\n' }
    _.Kha = function (a) {
      return a.hasAttribute('tabindex') && Jha(a)
    }
    _.Ne = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute('tabIndex'))
    }
    _.Lha = function (a) {
      return a.tagName == 'A' && a.hasAttribute('href') ||
          a.tagName == 'INPUT' || a.tagName == 'TEXTAREA' ||
          a.tagName == 'SELECT' || a.tagName == 'BUTTON'
        ? !a.disabled && (!a.hasAttribute('tabindex') || Jha(a))
        : _.Kha(a)
    }
    Jha = function (a) {
      a = a.tabIndex
      return typeof a === 'number' && a >= 0 && a < 32768
    }
    _.Oe = function (a) {
      var b = []
      _.Mha(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      a != ' ' && (a = a.replace(/^\s*/, ''))
      return a
    }
    _.Mha = function (a, b, c) {
      if (!(a.nodeName in Hha)) {
        if (a.nodeType == 3) {
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        } else if (a.nodeName in Iha) b.push(Iha[a.nodeName])
        else for (a = a.firstChild; a;) _.Mha(a, b, c), a = a.nextSibling
      }
    }
    _.xe = function (a) {
      this.io = a || _.ea.document || document
    }
    _.h = _.xe.prototype
    _.h.ob = _.Vc
    _.h.Og = function () {
      return this.io
    }
    _.h.Ya = function (a) {
      return _.ze(this.io, a)
    }
    _.h.$ = _.xe.prototype.Ya
    _.h.getElementsByTagName = function (a, b) {
      return (b || this.io).getElementsByTagName(String(a))
    }
    _.h.ZJ = _.aa(11)
    _.h.vc = _.aa(13)
    _.h.Xc = _.aa(15)
    _.h.setProperties = _.Be
    _.h.Zk = function (a) {
      return _.Ce(a || this.getWindow())
    }
    _.h.Yb = function (a, b, c) {
      return _.wha(this.io, arguments)
    }
    _.h.createElement = function (a) {
      return _.uha(this.io, a)
    }
    _.h.createTextNode = function (a) {
      return this.io.createTextNode(String(a))
    }
    _.h.getWindow = function () {
      return this.io.defaultView
    }
    _.h.xr = _.aa(16)
    _.h.appendChild = function (a, b) {
      a.appendChild(b)
    }
    _.h.append = _.xha
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
    _.h.Cl = _.Fe
    _.h.wtc = _.yha
    _.h.aPa = _.zha
    _.h.ZOa = _.Aha
    _.h.removeNode = _.Ge
    _.h.dQb = _.Bha
    _.h.getChildren = _.Cha
    _.h.pNa = _.Eha
    _.h.BDb = _.Fha
    _.h.Epc = _.Gha
    _.h.isElement = _.Ie
    _.h.isWindow = function (a) {
      return _.td(a) && a.window == a
    }
    _.h.Ewa = _.Je
    _.h.contains = _.Le
    _.h.P8a = _.ye
    _.h.zm = _.Me
    _.h.YA = _.Ne
    _.h.Cr = _.Lha
    _.h.dK = _.Oe
    sd = sd || {}
    var Nha = function () {
      _.Ib.call(this)
    }
    _.xd(Nha, _.Ib)
    Nha.prototype.initialize = function () {}
    eda.prototype.execute = function (a) {
      this.ha && (this.ha.call(this.ka || null, a), this.ha = this.ka = null)
    }
    eda.prototype.abort = function () {
      this.ka = this.ha = null
    }
    _.Rfa(function (a) {
      eda.prototype.execute = a(eda.prototype.execute)
    })
    sd.vqb = eda
    _.xd(Wc, _.Ib)
    Wc.prototype.wa = null
    Wc.prototype.Ea = Nha
    Wc.prototype.oa = null
    Wc.prototype.getId = function () {
      return this.Ba
    }
    var Oha = function (a, b, c) {
        a.na || (a.na = [])
        a.na.push(new sd.vqb(b, c))
      },
      Pha = function (a, b) {
        a.ka || (a.ka = [])
        a.ka.push(new sd.vqb(b, void 0))
      }
    Wc.prototype.isLoaded = function () {
      return !!this.oa
    }
    Wc.prototype.jea = function () {
      this.oa = new Nha()
    }
    Wc.prototype.onLoad = function (a) {
      var b = new this.Ea()
      b.initialize(a())
      this.oa = b
      if (this.ma && (b = Qha(this.ma, a()))) return b
      if (this.na && (a = Qha(this.na, a()))) return a
      this.ka && (this.ka.length = 0)
      return null
    }
    Wc.prototype.onError = function (a) {
      this.ka && (a = Qha(this.ka, a)) && _.ia(Error('ga`' + a))
      this.ma && (this.ma.length = 0)
      this.na && (this.na.length = 0)
    }
    var Qha = function (a, b) {
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
    Wc.prototype.Wb = function () {
      Wc.Hc.Wb.call(this)
      _.Gb(this.oa)
      this.wa = null
    }
    sd.uqb = Wc
    var Rha = {
      ERROR: 'error',
      IDLE: 'idle',
      dX: 'active',
      Tid: 'userIdle',
      Sid: 'userActive',
    }
    _.h = gda.prototype
    _.h.iIc = function () {}
    _.h.oib = function () {}
    _.h.eVa = function () {}
    _.h.bIa = function () {
      throw Error('ha')
    }
    _.h.QTa = function () {
      throw Error('ia')
    }
    _.h.upc = function () {
      return this.wa
    }
    _.h.nVa = function (a) {
      this.wa = a
    }
    _.h.isActive = function () {
      return !1
    }
    _.h.exc = function () {
      return !1
    }
    var Sha, Tha
    Sha = function (a, b) {
      var c = b.styleSheets.length, d = dda(a, new _.xe(b))
      d.setAttribute('data-late-css', '')
      b.styleSheets.length == c + 1 &&
        _.ua(b.styleSheets, (e) => (e.ownerNode || e.owningElement) == d)
    }
    Tha = function (a) {
      return _.Bd(Rga(a), (b) => b.P8a())
    }
    _.Uha = class {
      constructor(a) {
        this.ha = a
      }
      init() {
        _.pea('_F_installCss', (a) => {
          if (a) {
            var b = this.ha.wa
            if (b) {
              if (b = Tha(b), b.length == 0) Sha(a, document)
              else for (let c of b) Sha(a, c)
            } else Sha(a, document)
          }
        })
      }
    }
    var Vha, Wha, Yha
    Vha = function (a) {
      throw Error('ja`' + a.ka)
    }
    Wha = function (a, b) {
      return new TypeError(
        'ka`' + b + '`' + a.ka + '`' + a.ha + '`' + typeof a.ha,
      )
    }
    _.Qe = function (a) {
      var b = _.Pe(a)
      b === null && Vha(a)
      return b
    }
    _.Re = function (a, b) {
      var c
      return (c = _.Pe(a)) != null ? c : b
    }
    _.Pe = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'string') return b
      throw Wha(a, 'string')
    }
    _.Xha = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'boolean') return b
      if (typeof b === 'string') {
        b = b.toLowerCase()
        if (b === 'true' || b === '1') return !0
        if (b === 'false' || b === '0') return !1
      }
      throw Wha(a, 'boolean')
    }
    _.Se = function (a, b) {
      var c
      return (c = _.Xha(a)) != null ? c : b
    }
    _.Te = function (a, b) {
      var c
      return (c = Yha(a)) != null ? c : b
    }
    Yha = function (a) {
      var b = a.ha
      if (b == null) return null
      if (typeof b === 'number') return b
      if (typeof b === 'string') {
        let c = Number(b)
        if (!isNaN(c) && (c !== 0 || b.trim().length !== 0)) return c
      }
      throw Wha(a, 'number')
    }
    _.$ha = function (a) {
      var b = a.ha
      if (b == null) return null
      Array.isArray(b) ||
        (typeof b !== 'string'
          ? b = [b]
          : (b = b.trim(),
            b = b == '' ? [] : b.split(',').map((c) => c.trim())))
      return _.Zha(a, b)
    }
    _.Zha = function (a, b) {
      var c = a.ka + '['
      return Array.from(b, (d, e) => new _.Xc(c + e + ']', d))
    }
    _.Xc = class {
      constructor(a, b) {
        this.ka = a
        this.ha = b
      }
      string(a) {
        return arguments.length == 0 ? _.Qe(this) : _.Re(this, a)
      }
      number(a) {
        if (arguments.length == 0) {
          var b = Yha(this)
          b === null && Vha(this)
        } else b = _.Te(this, a)
        return b
      }
      toString() {
        return _.Qe(this)
      }
      enum(a, b) {
        var c = !0, d = void 0
        for (let e in a) {
          let f = a[e]
          c &&
            (c = !1, d = typeof f === 'number' ? _.Te(this, b) : _.Re(this, b))
          if (f == d) return d
        }
        JSON.stringify(a)
        return d
      }
      array(a) {
        if (arguments.length == 0) {
          var b = _.$ha(this)
          b === null && Vha(this)
          return b
        }
        b = _.$ha(this)
        return b == null ? a : b
      }
      object(a) {
        var b = this.ha
        if (b == null) return a === void 0 && Vha(this), a
        if (typeof b === 'object' && b.constructor === Object) {
          a = {}
          let c = this.ka + '.'
          for (let d in b) a[d] = new _.Xc(c + d, b[d])
          return a
        }
        throw Wha(this, 'object')
      }
    }
    var kda
    kda = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    )
    _.aia = /#|$/
    var bia,
      tda,
      Ve,
      eia,
      hia,
      fia,
      gia,
      iia,
      jia,
      kia,
      lia,
      Bda,
      mia,
      cia,
      dia,
      nia,
      oia
    _.Cda = function (a, b = !0) {
      var c = bia(a), d = new cia(), e = _.Zc(c)[5]
      _.Lb(dia, function (g) {
        var p = e.match('/' + g + '=([^/]+)')
        p && Ve(d, g, p[1])
      })
      var f = ''
      f = a.indexOf('_/ss/') != -1 ? '_/ss/' : '_/js/'
      eia(d, a.substr(0, a.indexOf(f) + f.length))
      if (!b) return d
      ;(a = _.bd(6, c)) && _.nda(a, (g, p) => {
        d.ma[g] = p
      })
      return d
    }
    bia = function (a) {
      return a.startsWith(
          'https://uberproxy-pen-redirect.corp.google.com/uberproxy/pen?url=',
        )
        ? a.substr(65)
        : a
    }
    tda = function (a) {
      a = bia(a)
      a = _.ad(_.bd(5, a))
      return a === null
        ? !1
        : RegExp('(/_/js/)|(/_/ss/)', 'g').test(a)
        ? /\/k=/.test(a)
        : !1
    }
    Ve = function (a, b, c) {
      c ? a.ha[b] = c : delete a.ha[b]
    }
    eia = function (a, b) {
      a.ka = b
    }
    hia = function (a) {
      var b = [],
        c = (d) => {
          a.ha[d] !== void 0 && b.push(d + '=' + a.ha[d])
        }
      fia(a)
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
          'd' in a.ha || Ve(a, 'd', '0'),
          c('d'),
          c('exm'),
          c('excm'),
          (a.ha.excm || a.ha.exm) && b.push('ed=1'),
          c('im'),
          c('dg'),
          c('sm'),
          _.We(a, 'br') != '1' && _.We(a, 'br') != '0' || c('br'),
          c('br-d'),
          _.We(a, 'rb') == '1' && c('rb'),
          _.We(a, 'zs') !== '0' && c('zs'),
          gia(a) !== '' && c('wt'),
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
    _.We = function (a, b) {
      return a.ha[b] ? a.ha[b] : null
    }
    fia = function (a) {
      a = _.We(a, 'md')
      return !!a && a !== '0'
    }
    gia = function (a) {
      switch (_.We(a, 'wt')) {
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
    iia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Ve(a, 'exm', b.join(',')))
        : Ve(a, 'exm', null)
    }
    jia = function (a, b) {
      b && b.length > 0
        ? (b.sort(), Ve(a, 'excm', b.join(',')))
        : Ve(a, 'excm', null)
    }
    kia = function (a) {
      return (a = _.We(a, 'm')) ? a.split(',') : []
    }
    lia = function (a, b) {
      var c = Object.keys(b).filter((d) => !!Object.keys(b[d]).length).map(
        (d) => {
          var e = Object.keys(b[d])
          e.length > 1 && e.sort()
          return d + ':' + e.join(',')
        },
      )
      c.sort()
      Ve(a, 'ee', c.join(';'))
    }
    Bda = function (a) {
      var b = _.We(a, 'ee')
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
    mia = function (a) {
      delete a.ha.m
      delete a.ha.exm
      delete a.ha.ed
    }
    cia = class {
      constructor() {
        this.ha = {}
        this.ka = ''
        this.ma = {}
      }
      toString() {
        var a = this.ka + hia(this), b = _.qda(this.ma), c = ''
        b != '' && (c = '?' + b)
        return a + c
      }
      clone() {
        var a = new cia()
        a.ha = Object.assign({}, this.ha)
        a.ka = this.ka
        a.ma = Object.assign({}, this.ma)
        return a
      }
    }
    dia = {
      mke: 'k',
      Tee: 'ck',
      Gie: 'm',
      Cfe: 'exm',
      Afe: 'excm',
      Bde: 'am',
      Ide: 'amc',
      xie: 'mm',
      hke: 'rt',
      Rhe: 'd',
      Bfe: 'ed',
      Vke: 'sv',
      Yee: 'deob',
      gee: 'cb',
      pee: 'ccb',
      hee: 'cbi',
      Mke: 'rs',
      tke: 'sdch',
      Yhe: 'im',
      Zee: 'dg',
      wfe: 'br',
      vfe: 'br-d',
      xfe: 'rb',
      Nme: 'zs',
      Fme: 'wt',
      Hfe: 'ee',
      Uke: 'sm',
      METADATA: 'md',
      Che: 'gssmodulesetproto',
      rme: 'ujg',
      qme: 'sp',
      Kke: 'slk',
      ffe: 'dti',
      bie: 'ic',
    }
    nia = RegExp('^(gapi\\.)?loaded(_g|_h)?(_[0-9a-z]+)+$')
    oia = RegExp('^[a-zA-Z0-9-_*]+$')
    var xda = null, wda = new Map()
    var zda = !1, Ada = !1
    var pia = (a) => {
        a = a.clone()
        mia(a)
        Ve(a, 'dg', null)
        Ve(a, 'd', '0')
        iia(a, null)
        jia(a, null)
        return a
      },
      qia = !0,
      ria = (a, b, { cssRowKey: c, ria: d, Jaa: e, callback: f } = {}) => {
        if (b) { for (let g of b) if (!oia.test(g)) throw Error('la`' + g) }
        Ve(a, 'm', b.join(','))
        e && lia(a, e)
        c && (Ve(a, 'ck', c), d ? Ve(a, 'rs', d) : qia && (qia = !1))
        if (f) {
          if (f != null && !nia.test(f)) throw Error('ma`' + f)
          Ve(a, 'cb', f)
        }
        a = a.toString()
        _.ja(a, '/') && (a = _.cd(document.location.href) + a)
        return _.kc(a)
      },
      sia = (
        a,
        b,
        { gQb: c = [], cssRowKey: d, ria: e, Jaa: f, callback: g } = {},
      ) => {
        a = pia(a)
        jia(a, c)
        return ria(a, b, { cssRowKey: d, ria: e, Jaa: f, callback: g })
      },
      tia = (
        a,
        b,
        {
          hQb: c = [],
          gQb: d = [],
          cssRowKey: e,
          ria: f,
          Jaa: g,
          callback: p,
        } = {},
      ) => {
        a = pia(a)
        Ve(a, 'd', '1')
        iia(a, c)
        jia(a, d)
        return ria(a, b, { cssRowKey: e, ria: f, Jaa: g, callback: p })
      }
    _.uia = function (a) {
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
    _.wia = function () {}
    _.xd(_.wia, _.Eda)
    _.wia.prototype.bQ = function () {
      return new XMLHttpRequest()
    }
    _.via = new _.wia()
    var yia = function (a) {
        return xia(a).then(function (b) {
          return JSON.parse(b.responseText)
        })
      },
      xia = function (a) {
        var b = {}, c = b.l1 ? b.l1.bQ() : _.via.bQ()
        return (new _.ee(function (d, e) {
          var f
          try {
            c.open('GET', a, !0)
          } catch (g) {
            e(new Xe('Error opening XHR: ' + g.message, a, c))
          }
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              _.ea.clearTimeout(f)
              var g
              !(g = _.uia(c.status)) && (g = c.status === 0) &&
                (g = _.lda(a), g = !(g == 'http' || g == 'https' || g == ''))
              g ? d(c) : e(new zia(c.status, a, c))
            }
          }
          c.onerror = function () {
            e(new Xe('Network error', a, c))
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
          b.Ky > 0 && (f = _.ea.setTimeout(function () {
            c.onreadystatechange = () => {}
            c.abort()
            e(new Aia(a, c))
          }, b.Ky))
          try {
            c.send(null)
          } catch (g) {
            c.onreadystatechange = () => {},
              _.ea.clearTimeout(f),
              e(new Xe('Error sending XHR: ' + g.message, a, c))
          }
        })).ha(function (d) {
          d instanceof _.ge &&
            c.abort()
          throw d
        })
      },
      Xe = function (a, b, c) {
        _.ca.call(this, a + ', url=' + b)
        this.url = b
        this.xhr = c
      }
    _.xd(Xe, _.ca)
    Xe.prototype.name = 'XhrError'
    var zia = function (a, b, c) {
      Xe.call(this, 'Request Failed, status=' + a, b, c)
      this.status = a
    }
    _.xd(zia, Xe)
    zia.prototype.name = 'XhrHttpError'
    var Aia = function (a, b) {
      Xe.call(this, 'Request timed out', a, b)
    }
    _.xd(Aia, Xe)
    Aia.prototype.name = 'XhrTimeoutError'
    var Dia, Fia, Gia, Hia, Eia, Mia, Nia, Jia, Iia, Kia, Lia
    _.Bia = function (a, b, c, d, e = b) {
      var f = b.length,
        g = () => {
          f = 0
          a.onload = null
          a.onerror = null
          p = () => {}
        },
        p = () => {
          g()
          var v = e.filter((z) => !_.Tb().Zx(z).isLoaded())
          v.length !== 0
            ? d(v, `Response was successful but was missing module(s) ${v}.`)
            : c()
        },
        t = () => {
          f--
          f == 0 && p()
        }
      b.forEach((v) => {
        v = _.Tb().Zx(v)
        v.isLoaded()
          ? t()
          : (v.ma || (v.ma = []), v.ma.push(new sd.vqb(t, void 0)), Pha(v, t))
      })
      a.onload = () => p()
      a.onerror = () => {
        g()
        d(b)
      }
    }
    _.Cia = function (a, b) {
      var c = !1, d = []
      for (let e = 0; e < b.length; ++e) {
        let f = b[e]
        a.na[f] || (a.na[f] = !0, a.Ma.push(f), c = !0, d.push(f))
      }
      c && (a.Ua = !1)
    }
    Dia = function (a, b) {
      if (b.href || b.getAttribute('data-href')) {
        if (
          b = b.href || b.getAttribute('data-href'),
            tda(b) && !_.Cda(b).ka.endsWith('_/js/')
        ) {
          b = kia(_.Cda(b))
          for (let c of b) a.Va.includes(c) || a.Va.push(c)
        }
      }
    }
    Fia = function (a, b, c, d = () => {}, e = () => {}, f = !1) {
      Eia(a, b, (g, p, t = p) => {
        a.kb && f ? a.lb(g, p, d, e, t) : a.load(g, p, d, e, t, c)
      }, c) || d(-1)
    }
    Gia = function (a, b) {
      return b.filter((c) => !a.na[c])
    }
    Hia = function (a, b, c, { Jaa: d, onError: e, vAa: f, CCd: g } = {}) {
      a.Ea = c
      if (!b) throw Error('qa')
      if (a.Gb) {
        for (let p of document.getElementsByTagName('style')) Dia(a, p)
        for (let p of document.getElementsByTagName('link')) Dia(a, p)
      }
      Fia(a, Gia(a, b), d, e, f, g)
    }
    Eia = function (a, b, c, d) {
      if (a.ma) {
        return a.ma.then(() => {
          Eia(a, b, c, d)
        }),
          !0
      }
      if (!a.wa) {
        let f = []
        var e = Object.assign({}, a.na)
        Iia(
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
          p = Jia(a, g, d),
          t = _.lc(p).toString()
        for (; t.length > a.oYa;) {
          if (f > 1) {
            f -= Math.ceil((t.length - a.oYa) / 6),
              f = Math.max(f, 1),
              g = b.slice(e, e + f),
              p = Jia(a, g, d),
              t = _.lc(p).toString()
          } else {return a.wa
              ? (a.wa = !1,
                a.ma = Kia(a).then((v) => {
                  Lia(a, v, d)
                }),
                Eia(a, b.slice(e), c, d))
              : !1}
        }
        e += f
        a.wa ? c(p, g) : c(p, g, e === b.length ? b : [])
      }
      return !0
    }
    Mia = function (a) {
      a.Ua || (a.Ua = !0, a.Ma.sort())
      return a.Ma
    }
    Nia = function (a) {
      a = a.Va
      a.sort()
      return a
    }
    Jia = function (a, b, c) {
      return a.wa
        ? tia(a.oa, b, {
          cssRowKey: a.Za,
          ria: a.Xa,
          Jaa: c,
          hQb: Mia(a),
          gQb: Nia(a),
        })
        : sia(a.oa, b, { cssRowKey: a.Za, ria: a.Xa, hQb: Mia(a), gQb: Nia(a) })
    }
    _.Ye = function (a, b) {
      var c = []
      for (let d = 0; d < b.length; ++d) {
        let e = b[d]
        a.na[e] && (delete a.na[e], _.za(a.Ma, e), c.push(e))
      }
    }
    _.Oia = function (a, b, c, d, e, f, g = d) {
      a.Da = c
      a.Pa.insertBefore(c, a.Pa.firstChild)
      _.Bia(c, d, () => {
        c.parentElement.removeChild(c)
        a.Da == c && (a.Da = null)
        f()
      }, (p) => {
        c.parentElement.removeChild(c)
        a.Da == c && (a.Da = null)
        _.Ye(a, p)
        a.ma
          ? a.ma.then(() => {
            e(-1, b)
          })
          : e(-1, b)
      }, g)
    }
    Iia = function (a, b, c, d, e, f = {}) {
      var g = _.Tb()
      for (let p of b) {
        b = g.Zx(p)
        if (f[p] || e && !e(b)) continue
        f[p] = !0
        let t = b.ha || []
        if (d) {
          let v = []
          d[p] && (v = Object.keys(d[p]))
          t = t.concat(v)
        }
        Iia(a, t, c, d, e, f)
        c(b)
      }
    }
    Kia = function (a) {
      a = a.oa.clone()
      mia(a)
      Ve(a, 'dg', null)
      Ve(a, 'md', '1')
      return yia(a.toString())
    }
    Lia = function (a, b, c) {
      _.Tb().eVa((b || {}).moduleGraph)
      Iia(a, Mia(a), (d) => {
        _.Cia(a, [d.getId()])
      }, c)
      a.ma = null
    }
    _.Mda = class {
      constructor(a, b, c, d = !1, e = !1) {
        this.mb = a
        this.oa = _.Cda(_.lc(a).toString(), !0)
        this.Za = b
        this.Xa = c
        this.wa = d
        this.na = {}
        this.Ea = new Map()
        this.Ma = []
        this.Ua = !0
        this.Va = (a = _.We(this.oa, 'excm')) ? a.split(',') : []
        this.Gb = e
        this.pYa = !1
        this.hKa = 'anonymous'
        this.oYa = 4043
        this.Pa = document.head || document.documentElement
        this.ma = this.Da = null
        this.tb = !0
        _.Dda()
        this.logger = null
        _.Cia(this, kia(this.oa))
        this.fetchPriority = void 0
        this.kb = !1
        this.Fa()
      }
      lb() {
        _.id(function* () {
          throw Error('ra')
        })
      }
      Fa() {}
      load(a, b, c, d, e = b) {
        _.lc(a)
        var f = this.pYa,
          g = this.hKa,
          p = this.fetchPriority,
          t = _.Ee('SCRIPT')
        _.Ic(t, a)
        f && (t.crossOrigin = g)
        t.async = !1
        p && t.setAttribute('fetchpriority', p)
        _.Cia(this, b)
        _.Oia(this, a, t, b, c, d, e)
      }
    }
    var Fda = new Uint8Array(123), Ida = !1
    var Kda = []
    var Qia = function (a) {
        switch (a.type) {
          case Pia.Type.d8b:
            return 'Unauthorized'
          case Pia.Type.Cnb:
            return 'Consecutive load failures'
          case Pia.Type.TIMEOUT:
            return 'Timed out'
          case Pia.Type.f5b:
            return 'Out of date module id'
          case Pia.Type.Bob:
            return 'Init error'
          default:
            return `Unknown failure type ${a.type}`
        }
      },
      Pia = class extends Error {
        constructor(a, b, c, d, e) {
          super()
          this.name = 'ModuleLoadFailure'
          this.type = a
          this.status = b
          this.hQb = c
          this.url = d
          this.cause = e
          this.message = this.toString()
        }
        toString() {
          return `${Qia(this)} (${
            this.status !=
                void 0
              ? this.status
              : '?'
          })`
        }
      }
    sd.OE = Pia
    sd.OE.Type = { d8b: 0, Cnb: 1, TIMEOUT: 2, f5b: 3, Bob: 4 }
    var Ze = function () {
      gda.call(this)
      this.Za = null
      this.na = new Map()
      this.ha = Oea ? new Set() : []
      this.Da = []
      this.kb = new Set()
      this.ka = []
      this.Fa = []
      this.ma = {}
      this.lb = {}
      this.oa = this.Ua = new sd.uqb([], '')
      this.tb = null
      this.Ma = new _.cc()
      this.Al = null
      this.Gb =
        this.Ob =
        this.Lb =
        this.Xa =
        this.mb =
          !1
    }
    _.xd(Ze, gda)
    var Ria = function (a, b) {
      _.ca.call(this, `Error loading ${a}: ${b}`)
    }
    _.xd(Ria, _.ca)
    Ze.prototype.iIc = function (a) {
      this.mb = a
    }
    Ze.prototype.oib = function (a) {
      this.Xa = a
    }
    Ze.prototype.eVa = function (a, b) {
      if (!(this instanceof Ze)) this.eVa(a, b)
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
            Sia(this, f, t)
            if (g) break
            f = e + 1
            e = a.indexOf('/', f)
            e === -1 && (g = !0)
            p++
          }
          this.Za = c
        } else if (a.startsWith('p$')) Tia(this, a)
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
            Sia(this, e, g)
          }
          this.Za = c
        }
        if (b && b.length) {
          if (this.ha instanceof Set) { for (let z of b) this.ha.add(z) }
          else _.Ca(this.ha, b)
          this.tb = _.uaa(b)
        } else this.Ma.ka || this.Ma.callback()
        Object.freeze(this.Za)
        Uia(this)
      }
    }
    var Tia = function (a, b) {
      var { ids: c, dependencies: d } = Jda ? Lda(b, 2) : Lda(b.substring(2))
      for (b = 0; b < c.length; b++) Sia(a, c[b], d[b])
      a.Za = c
    }
    _.h = Ze.prototype
    _.h.Zx = function (a) {
      return this.na.get(a)
    }
    _.h.bIa = function (a, b) {
      var c = this.Zx(a)
      c && c.isLoaded()
        ? this.load(b)
        : (this.ma[a] || (this.ma[a] = {}), this.ma[a][b] = !0)
    }
    _.h.QTa = function (a, b) {
      if (this.ma[a]) {
        delete this.ma[a][b]
        for (let c in this.ma[a]) return
        delete this.ma[a]
      }
    }
    _.h.nVa = function (a) {
      Ze.Hc.nVa.call(this, a)
      Uia(this)
    }
    _.h.isActive = function () {
      return (this.ha instanceof Set ? this.ha.size : this.ha.length) > 0
    }
    _.h.exc = function () {
      return this.Fa.length > 0
    }
    var $e = function (a) {
        var b = a.Lb, c = a.isActive()
        c != b && (Via(a, c ? Rha.dX : Rha.IDLE), a.Lb = c)
        b = a.exc()
        b != a.Ob && (Via(a, b ? Rha.Sid : Rha.Tid), a.Ob = b)
      },
      Sia = function (a, b, c) {
        var d = a.na.get(b)
        d ? d.ha = c : a.na.set(b, new sd.uqb(c, b))
      },
      Xia = function (a, b, c) {
        var d = []
        _.Ea(b, d)
        b = []
        var e = {}
        for (let f = 0; f < d.length; f++) {
          let g = d[f], p = a.Zx(g)
          if (!p) throw Error('sa`' + g)
          let t = new _.cc()
          e[g] = t
          p.isLoaded()
            ? t.callback(a.wa)
            : (Wia(a, g, p, !!c, t), a.Pa(g) || b.push(g))
        }
        b.length > 0 &&
          (a.Xa
            ? _.je(a.Ma, (0, _.Yb)(a.Va, a, b))
            : (a.ha instanceof Set ? a.ha.size : a.ha.length) === 0
            ? a.Va(b)
            : (a.ka.push(b), $e(a)))
        return e
      },
      Wia = function (a, b, c, d, e) {
        Oha(c, e.callback, e)
        Pha(c, function (f) {
          e.ha(new Ria(b, f))
        })
        a.Pa(b) ? d && (Yia(a, b), $e(a)) : d && Yia(a, b)
      }
    Ze.prototype.Va = function (a, b = 0, c) {
      var d = Zia(this, a)
      if (this.ha instanceof Set) {
        if (this.Xa) {
          for (let e of d) this.ha.add(e)
        } else this.ha = new Set(d)
      } else this.Xa ? _.Ca(this.ha, d) : this.ha = d
      this.Da = this.mb ? a : _.Aa(d)
      $e(this)
      if (d.length !== 0) {
        for (let e of d) this.kb.add(e)
        a = this.Ba
        if (!a) throw Error('ta')
        if (Object.keys(this.ma).length > 0 && !a.tb) throw Error('ua')
        Hia(a, _.Aa(d), this.na, {
          Jaa: this.ma,
          onError: (e, f, g) =>
            $ia(this, this.Da, d, e != null ? e : void 0, f, b, !!g),
          wAa: (0, _.Yb)(this.Tb, this),
          CCd: !!c,
        })
      }
    }
    var Zia = function (a, b) {
        b = b.filter((d) =>
          a.na.get(d).isLoaded()
            ? (_.ea.setTimeout(() => Error('va`' + d), 0), !1)
            : !0
        )
        var c = []
        for (let d = 0; d < b.length; d++) c = c.concat(aja(a, b[d]))
        _.Ea(c)
        return !a.mb && c.length > 1
          ? (b = c.shift(),
            a.ka = c.map(function (d) {
              return [d]
            }).concat(a.ka),
            [b])
          : c
      },
      aja = function (a, b) {
        var c = []
        a.kb.has(b) || c.push(b)
        b = [b]
        for (let d = 0; d < b.length; d++) {
          let e = a.Zx(b[d]).ha
          for (let f = e.length - 1; f >= 0; f--) {
            let g = e[f]
            a.Zx(g).isLoaded() || a.kb.has(g) || (c.push(g), b.push(g))
          }
        }
        c.reverse()
        _.Ea(c)
        return c
      },
      Uia = function (a) {
        if (a.oa == a.Ua) {
          a.oa = null
          let b = a.Ua.onLoad((0, _.Yb)(a.upc, a))
          b && b.length &&
            bja(a, new sd.OE(sd.OE.Type.Bob, void 0, void 0, void 0, b[0]))
          $e(a)
        }
      }
    Ze.prototype.jea = function () {
      if (this.oa) {
        var a = this.oa.getId(), b = []
        if (this.ma[a]) {
          for (let c of Object.keys(this.ma[a])) {
            let d = this.Zx(c)
            d && !d.isLoaded() && (this.QTa(a, c), b.push(c))
          }
          this.Ea(b)
        }
        this.isDisposed() ||
          ((b = this.na.get(a).onLoad((0, _.Yb)(this.upc, this))) && b.length &&
            bja(this, new sd.OE(sd.OE.Type.Bob, void 0, void 0, void 0, b[0])),
            _.za(this.Fa, a),
            this.ha instanceof Set ? this.ha.delete(a) : _.za(this.ha, a),
            (this.ha instanceof Set ? this.ha.size : this.ha.length) !== 0 ||
            cja(this),
            this.tb && a == this.tb && (this.Ma.ka ||
              this.Ma.callback()),
            $e(this),
            this.oa = null)
      }
    }
    Ze.prototype.Pa = function (a) {
      if (this.ha instanceof Set ? this.ha.has(a) : _.wa(this.ha, a)) return !0
      for (let b = 0; b < this.ka.length; b++) {
        if (_.wa(this.ka[b], a)) return !0
      }
      return !1
    }
    Ze.prototype.load = function (a, b) {
      return Xia(this, [a], b)[a]
    }
    Ze.prototype.Ea = function (a) {
      return Xia(this, a)
    }
    var Yia = function (a, b) {
      _.wa(a.Fa, b) || a.Fa.push(b)
    }
    Ze.prototype.Fb = function (a) {
      this.oa && this.oa.getId() === 'synthetic_module_overhead' &&
        (this.jea(), this.na.delete('synthetic_module_overhead'))
      var b = this.na.get(a)
      b && dja(this, b.ha || [], (c) => {
        c.jea()
        this.ha instanceof Set
          ? this.ha.delete(c.getId())
          : _.za(this.ha, c.getId())
      }, (c) => !c.isLoaded())
      this.oa = this.Zx(a)
      this.oa.Da = !0
    }
    var $ia = function (a, b, c, d, e, f = 0, g = !1) {
      var p = g ? 0 : f + 1
      f = _.Aa(c)
      a.Da = b
      for (let t of c) a.kb.delete(t)
      if (d == 401) bja(a, new sd.OE(sd.OE.Type.d8b, d)), a.ka.length = 0
      else if (d == 410) eja(a, new sd.OE(sd.OE.Type.f5b, d)), cja(a)
      else if (p >= 3) eja(a, new sd.OE(sd.OE.Type.Cnb, d, f, e)), cja(a)
      else {
        let t = d == 8001 || !1
        ;(c = Math.pow(p, 2) * 5E3)
          ? _.ea.setTimeout(() => {
            a.Va(b, p, t)
          }, c)
          : a.Va(b, p, t)
      }
    }
    Ze.prototype.Tb = function () {
      eja(this, new sd.OE(sd.OE.Type.TIMEOUT))
      cja(this)
    }
    var eja = function (a, b) {
        a.Da.length > 1
          ? a.ka = a.Da.map(function (c) {
            return [c]
          }).concat(a.ka)
          : bja(a, b)
      },
      bja = function (a, b) {
        var c = a.Da
        a.ha instanceof Set ? a.ha.clear() : a.ha.length = 0
        var d = []
        for (var e = 0; e < a.ka.length; e++) {
          var f = a.ka[e].filter(function (g) {
            var p = aja(this, g)
            return _.Cd(c, function (t) {
              return _.wa(p, t)
            })
          }, a)
          _.Ca(d, f)
        }
        for (e = 0; e < c.length; e++) _.xa(d, c[e])
        for (e = 0; e < d.length; e++) {
          for (f = 0; f < a.ka.length; f++) _.za(a.ka[f], d[e])
          _.za(a.Fa, d[e])
        }
        if (e = a.lb[Rha.ERROR]) {
          for (f = 0; f < e.length; f++) {
            let g = e[f]
            for (let p = 0; p < d.length; p++) g(Rha.ERROR, d[p], b)
          }
        }
        for (d = 0; d < c.length; d++) if (e = a.na.get(c[d])) e.onError(b)
        a.Da.length = 0
        $e(a)
      },
      cja = function (a) {
        for (; a.ka.length;) {
          let b = a.ka.shift().filter(function (c) {
            return !this.Zx(c).isLoaded()
          }, a)
          if (b.length > 0) {
            a.Va(b)
            return
          }
        }
        $e(a)
      },
      Via = function (a, b) {
        a = a.lb[b]
        for (let c = 0; a && c < a.length; c++) a[c](b)
      },
      dja = function (a, b, c, d = () => !0, e = {}) {
        for (let f of b) {
          b = a.Zx(f),
            !e[f] && d(b) && (e[f] = !0, dja(a, b.ha || [], c, d, e), c(b))
        }
      }
    Ze.prototype.dispose = function () {
      _.Hb(Array.from(this.na.values()), this.Ua)
      this.na.clear()
      this.ha instanceof Set ? this.ha.clear() : this.ha = []
      this.Da = []
      this.Fa = []
      this.ka = []
      this.lb = {}
      this.Gb = !0
    }
    Ze.prototype.isDisposed = function () {
      return this.Gb
    }
    _.Tba = function () {
      return new Ze()
    }
    var fja, gja, jja, kja, lja, mja, hja, ija
    fja = [5E3, 2E4]
    gja = function (a) {
      a.ka && a.ka.getId() == '{base}' && a.jea()
    }
    jja = function (a, b) {
      b = b.filter((c) => !a.Pa(c) && !a.Zx(c).isLoaded())
      b.length > 0 && (hja(a, ...b), a.na.push(b), ija(a))
    }
    kja = function (a, b) {
      return new _.ee((c, d) => {
        var e = a.Zx(b)
        e.isLoaded() ? c(a.wa) : (Oha(e, () => {
          c(a.wa)
        }),
          Pha(e, (f) => {
            var g = `Error loading ${b}: ${f}`
            f instanceof sd.OE && f.url &&
              (g = `${g}, requested url: ${f.url.toString()}`)
            d(Error(g))
          }))
      })
    }
    lja = function (a, b, c, d = () => !0, e = {}) {
      for (let f of b) {
        b = a.Zx(f),
          !e[f] && d(b) && (e[f] = !0, lja(a, b.ha || [], c, d, e), c(b))
      }
    }
    mja = function (a, ...b) {
      b.forEach((c) => {
        delete a.Da[c]
      })
    }
    hja = function (a, ...b) {
      b.forEach((c) => {
        a.Da[c] = !0
      })
    }
    ija = function (a) {
      for (; a.oa < a.Fa && a.na.length > 0;) {
        let b = a.na.shift().filter((c) => !a.Zx(c).isLoaded())
        if (b.length > 0) {
          a.oa++
          let c = () => {
            a.oa--
            ija(a)
            c = () => {}
          }
          _.tga(b.map((f) => kja(a, f))).then(() => {
            c()
          })
          let d = 0,
            e = () => {
              if (Object.keys(a.ha).length > 0 && !a.Ba.tb) throw Error('ua')
              Hia(a.Ba, b, a.ma, {
                Jaa: a.ha,
                onError: (f, g) => {
                  var p = fja[d++]
                  p !== void 0
                    ? setTimeout(() => {
                      e()
                    }, p)
                    : (mja(a, ...b),
                      c(),
                      b.forEach((t) => {
                        t = a.Zx(t)
                        if (!t.isLoaded()) {
                          t.onError(new sd.OE(sd.OE.Type.Cnb, f, b, g))
                        }
                      }))
                },
              })
            }
          e()
        }
      }
    }
    _.nja = class extends gda {
      constructor() {
        super()
        this.ma = new Map()
        this.Da = Object.create(null)
        this.Fa = Infinity
        this.oa = 0
        this.na = []
        this.ha = Object.create(null)
        this.Al = null
        this.ka = this.Zx('{base}')
      }
      eVa() {
        gja(this)
      }
      nVa(a) {
        super.nVa(a)
        gja(this)
      }
      Zx(a) {
        var b = this.ma.get(a)
        b || (b = new sd.uqb([], a), this.ma.set(a, b))
        return b
      }
      bIa(a, b) {
        this.Zx(a).isLoaded()
          ? this.load(b)
          : (this.ha[a] || (this.ha[a] = {}), this.ha[a][b] = !0)
      }
      QTa(a, b) {
        if (this.ha[a]) {
          delete this.ha[a][b]
          for (let c in this.ha[a]) return
          delete this.ha[a]
        }
      }
      Pa(a) {
        return !!this.Da[a]
      }
      load(a) {
        jja(this, [a])
        return kja(this, a)
      }
      Ea(a) {
        var b = Object.create(null), c = []
        a.forEach((d) => {
          b[d] || (b[d] = kja(this, d), c.push(d))
        })
        jja(this, c)
        return b
      }
      Fb(a) {
        var b
        ;((b = this.ka) == null ? void 0 : b.getId()) ===
            'synthetic_module_overhead' && this.jea()
        b = this.ma.get(a)
        var c
        lja(
          this,
          (c = b == null ? void 0 : b.ha) != null ? c : [],
          (d) => d.jea(),
          (d) => !d.isLoaded(),
        )
        this.ka = this.Zx(a)
      }
      jea() {
        if (this.ka) {
          var a = this.ka.getId(), b = []
          if (this.ha[a]) {
            for (let c of Object.keys(this.ha[a])) {
              this.Zx(c).isLoaded() || (this.QTa(a, c), b.push(c))
            }
            this.Ea(b)
          }
          this.ka.onLoad(() => this.wa)
          this.ka = null
          ;(!this.Pa(a) && /^sy[0-9a-z]{0,4}$/.test(a) ||
            a === 'synthetic_module_overhead') && this.ma.delete(a)
          mja(this, a)
        }
      }
      oib(a) {
        this.Fa = a ? Infinity : 1
      }
    }
    var oja = new _.nja()
    oja.oib(!0)
    oja.nVa(new _.ne())
    _.Uba(oja)
    ;(new _.Uha(oja)).init()
    _.Nda()
    var pja = _.Se(_.Yc('hxvedd'), !1), qja = _.Se(_.Yc('dLc0B'), !1)
    if (_.Se(_.Yc('KUmoDd'), !1)) {
      let a =
        'blocking canvas customElements Error EventTarget FileReader geolocation IntersectionObserver MutationObserver on_property PromiseRejectionEvent queueMicrotask requestAnimationFrame timers toString util XHR ZoneAwarePromise'
          .split(' ')
      for (let b of a) window[`__Zone_disable_${b}`] = !0
    }
    switch (qja ? 2 : pja ? 1 : 0) {
      case 2:
        ;(0, _.ed)('bYMqif').then(() => {})
        break
      case 1:
        ;(0, _.ed)('WbBtze').then(() => {})
        break
      default:
        ;(0, _.ed)('LQaXg').then(() => {})
    }
    _._ModuleManager_initialize = function (a, b) {
      if (!_.Sb) {
        if (!_.Tba) return
        _.Uba(_.Tba())
      }
      _.Sb.eVa(a, b)
    }
    _._ModuleManager_initialize('', [])
  } catch (e) {
    _._DumpException(e)
  }
}).call(this, this.default_BardChatUi)
// Google Inc.
