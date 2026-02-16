import zt, { useMemo as jt, useRef as Q, useState as Me, useEffect as Pe } from "react";
var rt = { exports: {} }, Je = {};
var Dt;
function nr() {
  if (Dt) return Je;
  Dt = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, l, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), l.key !== void 0 && (u = "" + l.key), "key" in l) {
      c = {};
      for (var b in l)
        b !== "key" && (c[b] = l[b]);
    } else c = l;
    return l = c.ref, {
      $$typeof: t,
      type: r,
      key: u,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return Je.Fragment = n, Je.jsx = o, Je.jsxs = o, Je;
}
var Qe = {};
var At;
function ar() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === Z ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case C:
          return "Fragment";
        case be:
          return "Profiler";
        case ae:
          return "StrictMode";
        case W:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case Ne:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case X:
            return "Portal";
          case Y:
            return a.displayName || "Context";
          case re:
            return (a._context.displayName || "Context") + ".Consumer";
          case se:
            var x = a.render;
            return a = a.displayName, a || (a = x.displayName || x.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case h:
            return x = a.displayName || null, x !== null ? x : t(a.type) || "Memo";
          case G:
            x = a._payload, a = a._init;
            try {
              return t(a(x));
            } catch {
            }
        }
      return null;
    }
    function n(a) {
      return "" + a;
    }
    function o(a) {
      try {
        n(a);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var v = x.error, k = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), n(a);
      }
    }
    function r(a) {
      if (a === C) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === G)
        return "<...>";
      try {
        var x = t(a);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var a = K.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (oe.call(a, "key")) {
        var x = Object.getOwnPropertyDescriptor(a, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function b(a, x) {
      function v() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var a = t(this.type);
      return ee[a] || (ee[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, x, v, k, q, ie) {
      var w = v.ref;
      return a = {
        $$typeof: V,
        type: a,
        key: x,
        props: v,
        _owner: k
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function R(a, x, v, k, q, ie) {
      var w = x.children;
      if (w !== void 0)
        if (k)
          if (Ie(w)) {
            for (k = 0; k < w.length; k++)
              M(w[k]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(w);
      if (oe.call(x, "key")) {
        w = t(a);
        var le = Object.keys(x).filter(function(ue) {
          return ue !== "key";
        });
        k = 0 < le.length ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}", Le[w + k] || (le = 0 < le.length ? "{" + le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          w,
          le,
          w
        ), Le[w + k] = !0);
      }
      if (w = null, v !== void 0 && (o(v), w = "" + v), u(x) && (o(x.key), w = "" + x.key), "key" in x) {
        v = {};
        for (var ce in x)
          ce !== "key" && (v[ce] = x[ce]);
      } else v = x;
      return w && b(
        v,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        w,
        v,
        l(),
        q,
        ie
      );
    }
    function M(a) {
      D(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === G && (a._payload.status === "fulfilled" ? D(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function D(a) {
      return typeof a == "object" && a !== null && a.$$typeof === V;
    }
    var z = zt, V = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), ae = /* @__PURE__ */ Symbol.for("react.strict_mode"), be = /* @__PURE__ */ Symbol.for("react.profiler"), re = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), ge = /* @__PURE__ */ Symbol.for("react.suspense_list"), h = /* @__PURE__ */ Symbol.for("react.memo"), G = /* @__PURE__ */ Symbol.for("react.lazy"), Ne = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), K = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = Object.prototype.hasOwnProperty, Ie = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    z = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var $, ee = {}, p = z.react_stack_bottom_frame.bind(
      z,
      c
    )(), Se = N(r(c)), Le = {};
    Qe.Fragment = C, Qe.jsx = function(a, x, v) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return R(
        a,
        x,
        v,
        !1,
        k ? Error("react-stack-top-frame") : p,
        k ? N(r(a)) : Se
      );
    }, Qe.jsxs = function(a, x, v) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return R(
        a,
        x,
        v,
        !0,
        k ? Error("react-stack-top-frame") : p,
        k ? N(r(a)) : Se
      );
    };
  })()), Qe;
}
var Mt;
function sr() {
  return Mt || (Mt = 1, process.env.NODE_ENV === "production" ? rt.exports = nr() : rt.exports = ar()), rt.exports;
}
var S = sr();
function Ot(t) {
  var n, o, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (n = 0; n < l; n++) t[n] && (o = Ot(t[n])) && (r && (r += " "), r += o);
  } else for (o in t) t[o] && (r && (r += " "), r += o);
  return r;
}
function ir() {
  for (var t, n, o = 0, r = "", l = arguments.length; o < l; o++) (t = arguments[o]) && (n = Ot(t)) && (r && (r += " "), r += n);
  return r;
}
const lr = (t, n) => {
  const o = new Array(t.length + n.length);
  for (let r = 0; r < t.length; r++)
    o[r] = t[r];
  for (let r = 0; r < n.length; r++)
    o[t.length + r] = n[r];
  return o;
}, cr = (t, n) => ({
  classGroupId: t,
  validator: n
}), Bt = (t = /* @__PURE__ */ new Map(), n = null, o) => ({
  nextPart: t,
  validators: n,
  classGroupId: o
}), at = "-", Pt = [], ur = "arbitrary..", dr = (t) => {
  const n = mr(t), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (u) => {
      if (u.startsWith("[") && u.endsWith("]"))
        return fr(u);
      const b = u.split(at), m = b[0] === "" && b.length > 1 ? 1 : 0;
      return Xt(b, m, n);
    },
    getConflictingClassGroupIds: (u, b) => {
      if (b) {
        const m = r[u], g = o[u];
        return m ? g ? lr(g, m) : m : g || Pt;
      }
      return o[u] || Pt;
    }
  };
}, Xt = (t, n, o) => {
  if (t.length - n === 0)
    return o.classGroupId;
  const l = t[n], c = o.nextPart.get(l);
  if (c) {
    const g = Xt(t, n + 1, c);
    if (g) return g;
  }
  const u = o.validators;
  if (u === null)
    return;
  const b = n === 0 ? t.join(at) : t.slice(n).join(at), m = u.length;
  for (let g = 0; g < m; g++) {
    const R = u[g];
    if (R.validator(b))
      return R.classGroupId;
  }
}, fr = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = t.slice(1, -1), o = n.indexOf(":"), r = n.slice(0, o);
  return r ? ur + r : void 0;
})(), mr = (t) => {
  const {
    theme: n,
    classGroups: o
  } = t;
  return pr(o, n);
}, pr = (t, n) => {
  const o = Bt();
  for (const r in t) {
    const l = t[r];
    xt(l, o, r, n);
  }
  return o;
}, xt = (t, n, o, r) => {
  const l = t.length;
  for (let c = 0; c < l; c++) {
    const u = t[c];
    br(u, n, o, r);
  }
}, br = (t, n, o, r) => {
  if (typeof t == "string") {
    gr(t, n, o);
    return;
  }
  if (typeof t == "function") {
    hr(t, n, o, r);
    return;
  }
  xr(t, n, o, r);
}, gr = (t, n, o) => {
  const r = t === "" ? n : Gt(n, t);
  r.classGroupId = o;
}, hr = (t, n, o, r) => {
  if (wr(t)) {
    xt(t(r), n, o, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(cr(o, t));
}, xr = (t, n, o, r) => {
  const l = Object.entries(t), c = l.length;
  for (let u = 0; u < c; u++) {
    const [b, m] = l[u];
    xt(m, Gt(n, b), o, r);
  }
}, Gt = (t, n) => {
  let o = t;
  const r = n.split(at), l = r.length;
  for (let c = 0; c < l; c++) {
    const u = r[c];
    let b = o.nextPart.get(u);
    b || (b = Bt(), o.nextPart.set(u, b)), o = b;
  }
  return o;
}, wr = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, vr = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const l = (c, u) => {
    o[c] = u, n++, n > t && (n = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(c) {
      let u = o[c];
      if (u !== void 0)
        return u;
      if ((u = r[c]) !== void 0)
        return l(c, u), u;
    },
    set(c, u) {
      c in o ? o[c] = u : l(c, u);
    }
  };
}, ht = "!", Ct = ":", Tr = [], Nt = (t, n, o, r, l) => ({
  modifiers: t,
  hasImportantModifier: n,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: l
}), yr = (t) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = t;
  let r = (l) => {
    const c = [];
    let u = 0, b = 0, m = 0, g;
    const R = l.length;
    for (let X = 0; X < R; X++) {
      const C = l[X];
      if (u === 0 && b === 0) {
        if (C === Ct) {
          c.push(l.slice(m, X)), m = X + 1;
          continue;
        }
        if (C === "/") {
          g = X;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" ? u-- : C === "(" ? b++ : C === ")" && b--;
    }
    const M = c.length === 0 ? l : l.slice(m);
    let D = M, z = !1;
    M.endsWith(ht) ? (D = M.slice(0, -1), z = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      M.startsWith(ht) && (D = M.slice(1), z = !0)
    );
    const V = g && g > m ? g - m : void 0;
    return Nt(c, z, D, V);
  };
  if (n) {
    const l = n + Ct, c = r;
    r = (u) => u.startsWith(l) ? c(u.slice(l.length)) : Nt(Tr, !1, u, void 0, !0);
  }
  if (o) {
    const l = r;
    r = (c) => o({
      className: c,
      parseClassName: l
    });
  }
  return r;
}, Rr = (t) => {
  const n = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((o, r) => {
    n.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let l = [];
    for (let c = 0; c < o.length; c++) {
      const u = o[c], b = u[0] === "[", m = n.has(u);
      b || m ? (l.length > 0 && (l.sort(), r.push(...l), l = []), r.push(u)) : l.push(u);
    }
    return l.length > 0 && (l.sort(), r.push(...l)), r;
  };
}, kr = (t) => ({
  cache: vr(t.cacheSize),
  parseClassName: yr(t),
  sortModifiers: Rr(t),
  ...dr(t)
}), Er = /\s+/, _r = (t, n) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = n, u = [], b = t.trim().split(Er);
  let m = "";
  for (let g = b.length - 1; g >= 0; g -= 1) {
    const R = b[g], {
      isExternal: M,
      modifiers: D,
      hasImportantModifier: z,
      baseClassName: V,
      maybePostfixModifierPosition: X
    } = o(R);
    if (M) {
      m = R + (m.length > 0 ? " " + m : m);
      continue;
    }
    let C = !!X, ae = r(C ? V.substring(0, X) : V);
    if (!ae) {
      if (!C) {
        m = R + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (ae = r(V), !ae) {
        m = R + (m.length > 0 ? " " + m : m);
        continue;
      }
      C = !1;
    }
    const be = D.length === 0 ? "" : D.length === 1 ? D[0] : c(D).join(":"), re = z ? be + ht : be, Y = re + ae;
    if (u.indexOf(Y) > -1)
      continue;
    u.push(Y);
    const se = l(ae, C);
    for (let W = 0; W < se.length; ++W) {
      const ge = se[W];
      u.push(re + ge);
    }
    m = R + (m.length > 0 ? " " + m : m);
  }
  return m;
}, Sr = (...t) => {
  let n = 0, o, r, l = "";
  for (; n < t.length; )
    (o = t[n++]) && (r = Vt(o)) && (l && (l += " "), l += r);
  return l;
}, Vt = (t) => {
  if (typeof t == "string")
    return t;
  let n, o = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (n = Vt(t[r])) && (o && (o += " "), o += n);
  return o;
}, Dr = (t, ...n) => {
  let o, r, l, c;
  const u = (m) => {
    const g = n.reduce((R, M) => M(R), t());
    return o = kr(g), r = o.cache.get, l = o.cache.set, c = b, b(m);
  }, b = (m) => {
    const g = r(m);
    if (g)
      return g;
    const R = _r(m, o);
    return l(m, R), R;
  };
  return c = u, (...m) => c(Sr(...m));
}, Ar = [], U = (t) => {
  const n = (o) => o[t] || Ar;
  return n.isThemeGetter = !0, n;
}, Yt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Wt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mr = /^\d+\/\d+$/, Pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Cr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ir = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (t) => Mr.test(t), T = (t) => !!t && !Number.isNaN(Number(t)), Ce = (t) => !!t && Number.isInteger(Number(t)), mt = (t) => t.endsWith("%") && T(t.slice(0, -1)), _e = (t) => Pr.test(t), Fr = () => !0, Ur = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Cr.test(t) && !Nr.test(t)
), $t = () => !1, zr = (t) => Ir.test(t), jr = (t) => Lr.test(t), Or = (t) => !d(t) && !f(t), Br = (t) => Ye(t, Jt, $t), d = (t) => Yt.test(t), je = (t) => Ye(t, Qt, Ur), pt = (t) => Ye(t, Wr, T), It = (t) => Ye(t, qt, $t), Xr = (t) => Ye(t, Ht, jr), ot = (t) => Ye(t, Zt, zr), f = (t) => Wt.test(t), Ze = (t) => We(t, Qt), Gr = (t) => We(t, $r), Lt = (t) => We(t, qt), Vr = (t) => We(t, Jt), Yr = (t) => We(t, Ht), nt = (t) => We(t, Zt, !0), Ye = (t, n, o) => {
  const r = Yt.exec(t);
  return r ? r[1] ? n(r[1]) : o(r[2]) : !1;
}, We = (t, n, o = !1) => {
  const r = Wt.exec(t);
  return r ? r[1] ? n(r[1]) : o : !1;
}, qt = (t) => t === "position" || t === "percentage", Ht = (t) => t === "image" || t === "url", Jt = (t) => t === "length" || t === "size" || t === "bg-size", Qt = (t) => t === "length", Wr = (t) => t === "number", $r = (t) => t === "family-name", Zt = (t) => t === "shadow", qr = () => {
  const t = U("color"), n = U("font"), o = U("text"), r = U("font-weight"), l = U("tracking"), c = U("leading"), u = U("breakpoint"), b = U("container"), m = U("spacing"), g = U("radius"), R = U("shadow"), M = U("inset-shadow"), D = U("text-shadow"), z = U("drop-shadow"), V = U("blur"), X = U("perspective"), C = U("aspect"), ae = U("ease"), be = U("animate"), re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], se = () => [...Y(), f, d], W = () => ["auto", "hidden", "clip", "visible", "scroll"], ge = () => ["auto", "contain", "none"], h = () => [f, d, m], G = () => [Ve, "full", "auto", ...h()], Ne = () => [Ce, "none", "subgrid", f, d], Z = () => ["auto", {
    span: ["full", Ce, f, d]
  }, Ce, f, d], K = () => [Ce, "auto", f, d], oe = () => ["auto", "min", "max", "fr", f, d], Ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...h()], ee = () => [Ve, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], p = () => [t, f, d], Se = () => [...Y(), Lt, It, {
    position: [f, d]
  }], Le = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], a = () => ["auto", "cover", "contain", Vr, Br, {
    size: [f, d]
  }], x = () => [mt, Ze, je], v = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    f,
    d
  ], k = () => ["", T, Ze, je], q = () => ["solid", "dashed", "dotted", "double"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], w = () => [T, mt, Lt, It], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    V,
    f,
    d
  ], ce = () => ["none", T, f, d], ue = () => ["none", T, f, d], Fe = () => [T, f, d], H = () => [Ve, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_e],
      breakpoint: [_e],
      color: [Fr],
      container: [_e],
      "drop-shadow": [_e],
      ease: ["in", "out", "in-out"],
      font: [Or],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_e],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_e],
      shadow: [_e],
      spacing: ["px", T],
      text: [_e],
      "text-shadow": [_e],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ve, d, f, C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [T, d, f, b]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: se()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ge()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ge()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ge()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: G()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": G()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": G()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: G()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: G()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: G()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: G()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: G()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: G()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ce, "auto", f, d]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ve, "full", "auto", b, ...h()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [T, Ve, "auto", "initial", "none", d]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", T, f, d]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", T, f, d]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ce, "first", "last", "none", f, d]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ne()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ne()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...N(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...N()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...N(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...N()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": h()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ee()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [b, "screen", ...ee()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          b,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ee()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          b,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [u]
          },
          ...ee()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ee()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ee()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ee()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Ze, je]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, f, pt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mt, d]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Gr, d, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [l, f, d]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [T, "none", f, pt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f, d]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", f, d]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: p()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: p()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [T, "from-font", "auto", f, je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: p()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [T, "auto", f, d]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f, d]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f, d]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Se()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Le()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: a()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ce, f, d],
          radial: ["", f, d],
          conic: [Ce, f, d]
        }, Yr, Xr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: p()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: x()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: p()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: p()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: p()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: v()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": v()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": v()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": v()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": v()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": v()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": v()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": v()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": v()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": v()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": v()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": v()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": v()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": v()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": v()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": k()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: p()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": p()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": p()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": p()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": p()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": p()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": p()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": p()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": p()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: p()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, f, d]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", T, Ze, je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: p()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          R,
          nt,
          ot
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: p()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", M, nt, ot]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": p()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: p()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [T, je]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": p()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": p()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", D, nt, ot]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": p()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T, f, d]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [T]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": w()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": p()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": w()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": p()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": w()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": p()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": w()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": p()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": w()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": p()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": w()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": p()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": w()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": p()
      }],
      "mask-image-radial": [{
        "mask-radial": [f, d]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": w()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": p()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": p()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": Y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [T]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": w()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": p()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": p()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Se()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Le()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: a()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", f, d]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          f,
          d
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: le()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T, f, d]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T, f, d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          z,
          nt,
          ot
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": p()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", T, f, d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [T, f, d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", T, f, d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T, f, d]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", T, f, d]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          f,
          d
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": le()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T, f, d]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T, f, d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", T, f, d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [T, f, d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", T, f, d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T, f, d]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T, f, d]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", T, f, d]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", f, d]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [T, "initial", f, d]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", ae, f, d]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [T, f, d]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", be, f, d]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [X, f, d]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": se()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ue()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ue()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ue()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ue()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Fe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Fe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Fe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [f, d, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: se()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: H()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": H()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": H()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": H()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: p()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: p()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f, d]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f, d]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...p()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [T, Ze, je, pt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...p()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Hr = /* @__PURE__ */ Dr(qr);
function Ft(...t) {
  return Hr(ir(t));
}
function Ut(t, n, o) {
  const r = t.createShader(n);
  return r ? (t.shaderSource(r, o), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.error("Shader compile error:", t.getShaderInfoLog(r)), t.deleteShader(r), null)) : null;
}
function bt(t, n, o) {
  const r = Ut(t, t.VERTEX_SHADER, n), l = Ut(t, t.FRAGMENT_SHADER, o);
  if (!r || !l) return null;
  const c = t.createProgram();
  return c ? (t.attachShader(c, r), t.attachShader(c, l), t.linkProgram(c), t.getProgramParameter(c, t.LINK_STATUS) ? c : (console.error("Program link error:", t.getProgramInfoLog(c)), t.deleteProgram(c), null)) : null;
}
function Jr(t) {
  const n = t.clientWidth * window.devicePixelRatio, o = t.clientHeight * window.devicePixelRatio;
  return t.width !== n || t.height !== o ? (t.width = n, t.height = o, !0) : !1;
}
const Qr = `#version 300 es
uniform sampler2D u_data; // Nx1 texture
uniform float u_bins;
uniform float u_minDb;
uniform float u_maxDb;

out float v_yNorm; // For gradient

void main() {
  int id = gl_VertexID;
  int binIndex = id / 2;
  bool isTop = (id % 2) == 0;

  // Fetch magnitude (using texelFetch for exact pixel)
  float mag = texelFetch(u_data, ivec2(binIndex, 0), 0).r;
  
  // Normalize Y: (mag - min) / span
  float yNorm = (mag - u_minDb) / (u_maxDb - u_minDb);
  
  // If bottom vertex, force Y to min (0.0 normalized)
  if (!isTop) {
     yNorm = 0.0;
  }
  
  v_yNorm = yNorm; // Pass to FS for gradient

  // X coordinate: -1..1
  float x = (float(binIndex) / (u_bins - 1.0)) * 2.0 - 1.0;
  // Y coordinate: -1..1
  float y = yNorm * 2.0 - 1.0;

  gl_Position = vec4(x, y, 0.0, 1.0);
}
`, Zr = `#version 300 es
precision mediump float;
in float v_yNorm;
out vec4 outColor;

void main() {
  // Gradient from Dark Blue (bottom) to Light Blue (top)
  vec4 colorBottom = vec4(0.0, 0.1, 0.3, 0.6); // Dark semi-transparent
  vec4 colorTop = vec4(0.0, 0.6, 1.0, 0.9);    // Brighter Light Blue
  
  outColor = mix(colorBottom, colorTop, v_yNorm);
}
`, Kr = `#version 300 es
uniform sampler2D u_data;
uniform float u_bins;
uniform float u_minDb;
uniform float u_maxDb;

void main() {
  int binIndex = gl_VertexID;
  float mag = texelFetch(u_data, ivec2(binIndex, 0), 0).r;
  
  float yNorm = (mag - u_minDb) / (u_maxDb - u_minDb);
  
  float x = (float(binIndex) / (u_bins - 1.0)) * 2.0 - 1.0;
  float y = yNorm * 2.0 - 1.0;

  gl_Position = vec4(x, y, 0.0, 1.0);
}
`, eo = Kr, to = `#version 300 es
precision mediump float;
uniform vec4 u_color;
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure White Line
}
`, ro = `#version 300 es
in vec2 a_position; // quad vertices -1..1
in vec2 a_texCoord; // 0..1

out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`, oo = `#version 300 es
precision mediump float;

in vec2 v_texCoord;
out vec4 outColor;

uniform sampler2D u_waterfall;
uniform sampler2D u_colormap;
uniform float u_offset; // Normalize Y offset for scrolling (0..1)
uniform float u_minDb;
uniform float u_maxDb;

void main() {
  // Scroll Y
  float y = fract(v_texCoord.y + u_offset);
  
  // Sample magnitude from waterfall texture (red channel or R float)
  float mag = texture(u_waterfall, vec2(v_texCoord.x, y)).r;
  
  // Map dB to 0..1 for colormap lookup
  float intensity = clamp((mag - u_minDb) / (u_maxDb - u_minDb), 0.0, 1.0);
  
  // Sample colormap
  outColor = texture(u_colormap, vec2(intensity, 0.5));
}
`;
function gt(t = "turbo") {
  const n = document.createElement("canvas");
  n.width = 256, n.height = 1;
  const o = n.getContext("2d");
  if (!o) return new Uint8Array(256 * 4);
  const r = o.createLinearGradient(0, 0, 256, 0);
  switch (t) {
    case "viridis":
      A(r, 0, "#440154"), A(r, 0.25, "#3b528b"), A(r, 0.5, "#21918c"), A(r, 0.75, "#5ec962"), A(r, 1, "#fde725");
      break;
    case "inferno":
      A(r, 0, "#000004"), A(r, 0.25, "#420a68"), A(r, 0.5, "#932667"), A(r, 0.75, "#dd513a"), A(r, 1, "#fcffa4");
      break;
    case "magma":
      A(r, 0, "#000004"), A(r, 0.25, "#3b0f70"), A(r, 0.5, "#8c2981"), A(r, 0.75, "#fe6100"), A(r, 1, "#fcfdbf");
      break;
    case "grayscale":
      A(r, 0, "#000000"), A(r, 1, "#ffffff");
      break;
    default:
      A(r, 0, "#30123b"), A(r, 0.1, "#466be3"), A(r, 0.25, "#28bceb"), A(r, 0.45, "#32f298"), A(r, 0.65, "#a4fc3c"), A(r, 0.85, "#eecf3a"), A(r, 0.95, "#fb7e21"), A(r, 1, "#7a0403");
      break;
  }
  o.fillStyle = r, o.fillRect(0, 0, 256, 1);
  const l = o.getImageData(0, 0, 256, 1);
  return new Uint8Array(l.data.buffer);
}
function A(t, n, o) {
  t.addColorStop(n, o);
}
function no(t, n, o) {
  return jt(() => {
    const r = t - n / 2, l = t + n / 2, c = n, u = Math.max(2, Math.floor(o / 100)), b = c / u, m = Math.pow(10, Math.floor(Math.log10(b)));
    let g = m;
    b / m > 5 ? g *= 5 : b / m > 2 && (g *= 2);
    const R = [], M = Math.ceil(r / g) * g;
    for (let D = M; D <= l; D += g) {
      const z = (D - r) / c * 100;
      R.push({
        val: D,
        percent: z,
        label: (D / 1e6).toFixed(3) + "M"
        // Simple formatting
      });
    }
    return R;
  }, [t, n, o]);
}
function ao(t, n, o) {
  return jt(() => {
    const r = t - n, l = t, c = Math.max(2, Math.floor(o / 40)), u = n, b = u / c, m = Math.ceil(b / 10) * 10, g = [], R = Math.ceil(r / m) * m;
    for (let M = R; M <= l; M += m) {
      const D = (l - M) / u * 100;
      g.push({ val: M, percent: D });
    }
    return g;
  }, [t, n, o]);
}
const io = ({
  data: t,
  running: n = !0,
  playbackMode: o = "live",
  refLevel: r = 0,
  displayRange: l = 80,
  averaging: c = 0.5,
  showPeakHold: u = !1,
  colorMap: b = "turbo",
  waterfallScaleMode: m = "auto",
  waterfallFixedMinDb: g,
  waterfallFixedMaxDb: R,
  className: M,
  targetRate: D = 50,
  jitterBufferMs: z = 200,
  onRefLevelChange: V,
  onDisplayRangeChange: X,
  onWaterfallFixedRangeChange: C
}) => {
  const ae = t.length > 0 ? t[t.length - 1] : null, { frequency: be, bandwidth: re } = ae || { frequency: 1e8, bandwidth: 2e6 }, Y = Q(null), se = Q(null), W = Q(null), ge = Q(null), h = Q(gt(b)), G = Q(0), Ne = Q({
    w: 0,
    h: 0,
    refLevel: 0,
    displayRange: 0,
    minDb: 0,
    maxDb: 0,
    cmapVersion: 0
  }), [Z, K] = Me({ min: -120, max: 0 }), [oe, Ie] = Me({ width: 0, height: 0 }), [N, $] = Me(0.34), [ee, p] = Me(!1), Se = Q(0.34);
  Pe(() => {
    Se.current = N;
  }, [N]);
  const Le = no(be, re, oe.width), a = oe.height * N, x = ao(r, l, a), [v, k] = Me([]), q = Q([]), ie = Q(/* @__PURE__ */ new Map()), w = Q(0), [le, ce] = Me(!1), [ue, Fe] = Me(null), H = typeof g == "number" && typeof R == "number", Kt = H ? g : Z.min, er = H ? R : Z.max, E = Q({
    // WebGL Resources
    gl: null,
    spectrumVao: null,
    waterfallVao: null,
    programSpectrumLine: null,
    programSpectrumFill: null,
    programWaterfall: null,
    waterfallTexture: null,
    colormapTexture: null,
    spectrumDataTexture: null,
    // Data State
    fftSize: 0,
    averagedBins: new Float32Array(0),
    // Waterfall State
    waterfallRow: 0,
    waterfallHeight: 1024,
    // Increased height for smoother faster scrolling if needed
    waterfallMinDb: -120,
    waterfallMaxDb: 0,
    waterfallScaleReady: !1,
    waterfallScaleAlpha: 0.05,
    waterfallFixedMinDb: -120,
    waterfallFixedMaxDb: 0,
    waterfallFixedReady: !1,
    lastWaterfallScaleMode: "auto",
    // Time-Based Rendering State
    frameQueue: [],
    renderTime: 0,
    // Current playhead time
    lastRafTime: 0,
    accumulator: 0,
    lastIngestedTime: -1 / 0,
    // Props Cache
    props: {
      running: n,
      playbackMode: o,
      refLevel: r,
      displayRange: l,
      colorMap: b,
      averaging: c,
      showPeakHold: u,
      targetRate: D,
      jitterBufferMs: z,
      waterfallScaleMode: m,
      waterfallFixedMinDb: g,
      waterfallFixedMaxDb: R
    }
  }), wt = Q(n);
  Pe(() => {
    if (!Y.current) return;
    const i = new ResizeObserver((e) => {
      for (const P of e)
        Ie({
          width: P.contentRect.width,
          height: P.contentRect.height
        });
    });
    return i.observe(Y.current), () => i.disconnect();
  }, []), Pe(() => {
    E.current.props = {
      running: n,
      playbackMode: o,
      refLevel: r,
      displayRange: l,
      colorMap: b,
      averaging: c,
      showPeakHold: u,
      targetRate: D,
      jitterBufferMs: z,
      waterfallScaleMode: m,
      waterfallFixedMinDb: g,
      waterfallFixedMaxDb: R
    }, typeof g == "number" && typeof R == "number" && (E.current.waterfallFixedMinDb = g, E.current.waterfallFixedMaxDb = R, E.current.waterfallFixedReady = !0, K({ min: g, max: R }));
    const i = gt(b);
    h.current = i, G.current += 1;
    const e = E.current.gl;
    e && E.current.colormapTexture && (e.bindTexture(e.TEXTURE_2D, E.current.colormapTexture), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, 256, 1, e.RGBA, e.UNSIGNED_BYTE, i));
  }, [n, o, r, l, b, c, u, D, z, m, g, R]), Pe(() => {
    if (n && !wt.current) {
      const i = E.current, e = i.gl, P = i.fftSize;
      if (i.frameQueue = [], i.renderTime = 0, i.lastRafTime = 0, i.accumulator = 0, i.lastIngestedTime = -1 / 0, i.fftSize = 0, i.averagedBins = new Float32Array(0), i.waterfallRow = 0, i.waterfallScaleReady = !1, q.current = [], ie.current.clear(), k([]), w.current = 0, e) {
        const y = P > 0 ? P : 1;
        i.waterfallTexture && (e.bindTexture(e.TEXTURE_2D, i.waterfallTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, y, i.waterfallHeight, 0, e.RED, e.FLOAT, null)), i.spectrumDataTexture && (e.bindTexture(e.TEXTURE_2D, i.spectrumDataTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, y, 1, 0, e.RED, e.FLOAT, null));
      }
    }
    wt.current = n;
  }, [n]), Pe(() => {
    if (!t || t.length === 0) return;
    const i = E.current;
    if (!i.props.running) return;
    t.forEach((y) => {
      if (!y.fftBins || y.fftBins.length === 0 || y.time <= i.lastIngestedTime) return;
      y.fftBins.length !== i.fftSize && (i.fftSize = y.fftBins.length, i.averagedBins = new Float32Array(y.fftBins));
      const _ = i.frameQueue;
      if (_.length === 0 || y.time > _[_.length - 1].time)
        _.push(y);
      else {
        let F = _.length - 1;
        for (; F >= 0 && _[F].time > y.time; )
          F--;
        _.splice(F + 1, 0, y);
      }
      i.renderTime === 0 && (i.renderTime = i.props.playbackMode === "replay" ? y.time : y.time - i.props.jitterBufferMs / 1e3, i.averagedBins.set(y.fftBins)), i.lastIngestedTime = y.time;
    });
    const e = i.frameQueue, P = Math.ceil(i.props.targetRate * 5);
    if (e.length > P) {
      const y = e[e.length - 1].time;
      for (y - i.renderTime > 5 && i.props.playbackMode === "live" && (i.renderTime = y - i.props.jitterBufferMs / 1e3); e.length > P; ) e.shift();
    }
  }, [t]), Pe(() => {
    const i = se.current;
    if (!i) return;
    const e = i.getContext("webgl2", { alpha: !1, antialias: !1 });
    if (!e) {
      console.error("WebGL 2 not supported");
      return;
    }
    E.current.gl = e;
    const P = bt(e, eo, to), y = bt(e, Qr, Zr), _ = bt(e, ro, oo);
    if (!P || !y || !_) return;
    E.current.programSpectrumLine = P, E.current.programSpectrumFill = y, E.current.programWaterfall = _;
    const F = e.createVertexArray();
    E.current.spectrumVao = F;
    const ye = e.createVertexArray();
    e.bindVertexArray(ye);
    const de = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]), fe = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, fe), e.bufferData(e.ARRAY_BUFFER, de, e.STATIC_DRAW);
    const ne = e.getAttribLocation(_, "a_position"), he = e.getAttribLocation(_, "a_texCoord");
    e.enableVertexAttribArray(ne), e.vertexAttribPointer(ne, 2, e.FLOAT, !1, 16, 0), e.enableVertexAttribArray(he), e.vertexAttribPointer(he, 2, e.FLOAT, !1, 16, 8);
    const Rt = e.getExtension("OES_texture_float_linear") ? e.LINEAR : e.NEAREST, kt = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, kt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, Rt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, Rt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), E.current.waterfallTexture = kt;
    const Et = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, Et), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), E.current.spectrumDataTexture = Et;
    const _t = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, _t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 256, 1, 0, e.RGBA, e.UNSIGNED_BYTE, gt(E.current.props.colorMap)), E.current.colormapTexture = _t;
    let xe = 0;
    const St = () => {
      const me = ge.current;
      if (!me) return;
      const s = me.getContext("2d");
      if (!s) return;
      const we = me.getBoundingClientRect(), j = window.devicePixelRatio || 1, pe = Math.max(1, Math.floor(we.width * j)), ve = Math.max(1, Math.floor(we.height * j)), J = E.current.props, Ue = J.waterfallScaleMode === "fixed", $e = E.current.waterfallScaleReady ? E.current.waterfallMinDb : J.refLevel - J.displayRange, qe = E.current.waterfallScaleReady ? E.current.waterfallMaxDb : J.refLevel, ct = E.current.waterfallFixedMinDb, He = E.current.waterfallFixedMaxDb, Be = Ue && E.current.waterfallFixedReady ? ct : $e, Ae = Ue && E.current.waterfallFixedReady ? He : qe, Ke = G.current, Re = Ne.current;
      if (Re.w === pe && Re.h === ve && Re.refLevel === J.refLevel && Re.displayRange === J.displayRange && Re.minDb === Be && Re.maxDb === Ae && Re.cmapVersion === Ke)
        return;
      Ne.current = { w: pe, h: ve, refLevel: J.refLevel, displayRange: J.displayRange, minDb: Be, maxDb: Ae, cmapVersion: Ke }, me.width !== pe && (me.width = pe), me.height !== ve && (me.height = ve);
      const I = s.createImageData(pe, ve), O = I.data, ke = h.current, Xe = Math.max(1e-6, Ae - Be);
      for (let L = 0; L < ve; L++) {
        const te = ve > 1 ? L / (ve - 1) : 0, B = J.refLevel - te * J.displayRange, Ee = Math.max(0, Math.min(1, (B - Be) / Xe)), Te = Math.max(0, Math.min(255, Math.round(Ee * 255))) * 4, et = ke[Te], ut = ke[Te + 1], dt = ke[Te + 2], ze = ke[Te + 3];
        for (let ft = 0; ft < pe; ft++) {
          const tt = (L * pe + ft) * 4;
          O[tt] = et, O[tt + 1] = ut, O[tt + 2] = dt, O[tt + 3] = ze;
        }
      }
      s.putImageData(I, 0, 0);
    }, lt = (me) => {
      const s = E.current, { fftSize: we, frameQueue: j } = s, pe = s.props.waterfallScaleMode;
      s.lastWaterfallScaleMode !== pe && (pe === "fixed" && (s.waterfallScaleReady ? (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, H || K({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb })) : s.waterfallFixedReady = !1), s.lastWaterfallScaleMode = pe), s.lastRafTime === 0 && (s.lastRafTime = me);
      const ve = (me - s.lastRafTime) / 1e3;
      s.lastRafTime = me;
      const J = 1 / s.props.targetRate;
      let Ue = 0;
      const $e = 5e3;
      we > 0 && we !== xe && (xe = we, e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, xe, s.waterfallHeight, 0, e.RED, e.FLOAT, null), e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, xe, 1, 0, e.RED, e.FLOAT, null));
      const qe = (I) => {
        if (I) {
          let L = 1 / 0, te = -1 / 0;
          for (let B = 0; B < I.length; B++) {
            const Ee = I[B];
            Ee < L && (L = Ee), Ee > te && (te = Ee);
          }
          if (Number.isFinite(L) && Number.isFinite(te)) {
            if (!s.waterfallScaleReady)
              s.waterfallMinDb = L, s.waterfallMaxDb = te, s.waterfallScaleReady = !0;
            else {
              const B = s.waterfallScaleAlpha;
              s.waterfallMinDb = s.waterfallMinDb * (1 - B) + L * B, s.waterfallMaxDb = s.waterfallMaxDb * (1 - B) + te * B;
            }
            s.waterfallMaxDb - s.waterfallMinDb < 1 && (s.waterfallMaxDb = s.waterfallMinDb + 1), s.props.waterfallScaleMode === "fixed" && !s.waterfallFixedReady && (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, H || K({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb }));
          }
          e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.pixelStorei(e.UNPACK_ALIGNMENT, 1), e.texSubImage2D(e.TEXTURE_2D, 0, 0, s.waterfallRow, xe, 1, e.RED, e.FLOAT, I), s.waterfallRow = (s.waterfallRow + 1) % s.waterfallHeight, I !== s.averagedBins && s.averagedBins.set(I);
        }
        const O = s.renderTime * 1e3, Xe = s.waterfallHeight / s.props.targetRate * 1e3;
        if (O - w.current > 2e3) {
          const te = new Date(O).toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit", second: "2-digit" }), B = { id: O, label: te, rowIndex: s.waterfallRow }, Ge = [...q.current, B].filter((Te) => O - Te.id < Xe);
          q.current = Ge, k(Ge), w.current = O;
        }
      };
      if (s.props.running)
        if (s.props.playbackMode === "replay")
          for (s.accumulator = 0; j.length > 0 && Ue < $e && we > 0; ) {
            const I = j.shift();
            if (!I) break;
            I.time <= s.renderTime || (s.renderTime = I.time, Ue++, qe(I.fftBins));
          }
        else {
          s.accumulator += ve;
          const I = 5;
          for (s.accumulator > I && (s.accumulator = I); s.accumulator >= J && Ue < $e && we > 0; ) {
            const O = s.accumulator > s.props.jitterBufferMs / 1e3 * 1.5, ke = j.length > 0 ? j[j.length - 1] : null, Xe = ke && ke.time > s.renderTime;
            if (O && !Xe)
              break;
            for (s.accumulator -= J, s.renderTime += J, Ue++; j.length > 2 && j[1].time < s.renderTime; )
              j.shift();
            let L = null;
            if (j.length !== 0) if (s.renderTime < j[0].time)
              L = j[0].fftBins;
            else if (j.length === 1)
              L = j[0].fftBins;
            else {
              const te = j[0], B = j[1];
              if (s.renderTime >= B.time)
                L = B.fftBins;
              else {
                const Ee = (s.renderTime - te.time) / (B.time - te.time), Ge = Math.max(0, Math.min(1, Ee)), Te = we;
                (!s.averagedBins || s.averagedBins.length !== Te) && (s.averagedBins = new Float32Array(Te));
                const et = s.averagedBins, ut = te.fftBins, dt = B.fftBins;
                for (let ze = 0; ze < Te; ze++)
                  et[ze] = ut[ze] * (1 - Ge) + dt[ze] * Ge;
                L = et;
              }
            }
            qe(L);
          }
        }
      if (Jr(i) && e.viewport(0, 0, i.width, i.height), e.clearColor(0, 0, 0, 1), e.clear(e.COLOR_BUFFER_BIT), we === 0) {
        St(), W.current = requestAnimationFrame(lt);
        return;
      }
      e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, xe, 1, e.RED, e.FLOAT, s.averagedBins);
      const ct = Se.current, He = Math.floor(i.height * (1 - ct));
      e.viewport(0, 0, i.width, He), e.useProgram(s.programWaterfall), e.bindVertexArray(ye), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.uniform1i(e.getUniformLocation(_, "u_waterfall"), 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, s.colormapTexture), e.uniform1i(e.getUniformLocation(_, "u_colormap"), 1);
      const Be = s.waterfallRow / s.waterfallHeight;
      e.uniform1f(e.getUniformLocation(_, "u_offset"), Be), s.props.waterfallScaleMode === "fixed" && s.waterfallFixedReady ? (e.uniform1f(e.getUniformLocation(_, "u_minDb"), s.waterfallFixedMinDb), e.uniform1f(e.getUniformLocation(_, "u_maxDb"), s.waterfallFixedMaxDb)) : (e.uniform1f(e.getUniformLocation(_, "u_minDb"), s.waterfallMinDb), e.uniform1f(e.getUniformLocation(_, "u_maxDb"), s.waterfallMaxDb)), e.drawArrays(e.TRIANGLES, 0, 6), e.viewport(0, He, i.width, i.height - He), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.useProgram(s.programSpectrumFill), e.bindVertexArray(s.spectrumVao), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.uniform1i(e.getUniformLocation(y, "u_data"), 0), e.uniform1f(e.getUniformLocation(y, "u_bins"), xe), e.uniform1f(e.getUniformLocation(y, "u_minDb"), s.props.refLevel - s.props.displayRange), e.uniform1f(e.getUniformLocation(y, "u_maxDb"), s.props.refLevel), e.drawArrays(e.TRIANGLE_STRIP, 0, xe * 2), e.useProgram(s.programSpectrumLine), e.bindVertexArray(s.spectrumVao), e.uniform1i(e.getUniformLocation(P, "u_data"), 0), e.uniform1f(e.getUniformLocation(P, "u_bins"), xe), e.uniform1f(e.getUniformLocation(P, "u_minDb"), s.props.refLevel - s.props.displayRange), e.uniform1f(e.getUniformLocation(P, "u_maxDb"), s.props.refLevel), e.drawArrays(e.LINE_STRIP, 0, xe), e.disable(e.BLEND), St();
      const Ae = s.waterfallHeight, Ke = Ae / s.props.targetRate, Re = s.renderTime * 1e3;
      q.current.forEach((I) => {
        const O = ie.current.get(I.id);
        if (O)
          if ((Re - I.id) / 1e3 > Ke)
            O.style.display = "none";
          else {
            O.style.display = "block";
            let L = (s.waterfallRow - I.rowIndex + Ae) % Ae / Ae * 100;
            O.style.top = `${L}%`, O.style.opacity = L > 98 ? "0" : "1";
          }
      }), W.current = requestAnimationFrame(lt);
    };
    return W.current = requestAnimationFrame(lt), () => {
      W.current && cancelAnimationFrame(W.current), e.deleteProgram(P), e.deleteProgram(y), e.deleteProgram(_), e.deleteTexture(E.current.waterfallTexture), e.deleteTexture(E.current.colormapTexture), e.deleteTexture(E.current.spectrumDataTexture);
    };
  }, []);
  const [Oe, vt] = zt.useState(null), [Tt, st] = Me(!1), it = Q(0), tr = (i) => {
    if (ee) {
      const ne = Y.current?.getBoundingClientRect();
      if (ne) {
        let De = (i.clientY - ne.top) / ne.height;
        De < 0.1 && (De = 0.1), De > 0.9 && (De = 0.9), $(De);
      }
      return;
    }
    if (Tt && V) {
      const ne = i.clientY - it.current;
      it.current = i.clientY;
      const he = l / a, De = ne * he;
      V(r + De);
      return;
    }
    const e = Y.current?.getBoundingClientRect();
    if (!e) return;
    const P = i.clientX - e.left, y = i.clientY - e.top, _ = be - re / 2, F = re / e.width, ye = _ + P * F, de = e.height * N;
    let fe = -1 / 0;
    if (y < de) {
      const he = l / de;
      fe = r - y * he;
    }
    vt({ freq: ye, db: fe, x: P, y });
  }, rr = () => {
    vt(null), ee && p(!1), Tt && st(!1);
  }, or = () => {
    p(!1), st(!1);
  }, yt = (i) => {
    if (l <= 0) return 0;
    const e = (r - i) / l * 100;
    return Math.max(0, Math.min(100, e));
  };
  return Pe(() => {
    H || (E.current.waterfallFixedMinDb = Z.min, E.current.waterfallFixedMaxDb = Z.max, E.current.waterfallFixedReady = !0);
  }, [H, Z]), Pe(() => {
    if (!ue) return;
    const i = (P) => {
      const y = Y.current?.getBoundingClientRect();
      if (!y) return;
      const _ = y.height * N;
      if (_ <= 0 || l === 0) return;
      const F = Math.min(Math.max(P.clientY - y.top, 0), _), ye = r - F / _ * l;
      let de = H ? g : Z.min, fe = H ? R : Z.max;
      ue === "min" ? de = Math.min(ye, fe - 1) : fe = Math.max(ye, de + 1);
      const ne = r - l, he = r;
      de = Math.min(he - 1, Math.max(ne, de)), fe = Math.max(ne + 1, Math.min(he, fe)), C ? C(de, fe) : K({ min: de, max: fe });
    }, e = () => Fe(null);
    return window.addEventListener("mousemove", i), window.addEventListener("mouseup", e), () => {
      window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", e);
    };
  }, [
    ue,
    N,
    l,
    r,
    H,
    g,
    R,
    Z,
    C
  ]), /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: Y,
      className: Ft("relative w-full h-full bg-black overflow-hidden cursor-crosshair group", M),
      onMouseMove: tr,
      onMouseLeave: rr,
      onMouseUp: or,
      children: [
        /* @__PURE__ */ S.jsx(
          "canvas",
          {
            ref: se,
            className: "block w-full h-full"
          }
        ),
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "absolute top-0 left-0 right-0 pointer-events-none overflow-hidden",
            style: { height: `${N * 100}%` },
            children: [
              /* @__PURE__ */ S.jsx("div", { className: "absolute top-0 left-0 w-1 z-10 pointer-events-none", style: { bottom: "6px" }, children: /* @__PURE__ */ S.jsx("canvas", { ref: ge, className: "block w-full h-full" }) }),
              /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-12 z-40 cursor-ns-resize hover:bg-white/5 active:bg-white/10 transition-colors pointer-events-auto",
                  title: "Drag to adjust reference level. scroll to zoom",
                  onMouseDown: (i) => {
                    i.preventDefault(), i.stopPropagation(), st(!0), it.current = i.clientY;
                  },
                  onWheel: (i) => {
                    if (!X || !V) return;
                    i.preventDefault(), i.stopPropagation();
                    const e = i.currentTarget.getBoundingClientRect(), y = (i.clientY - e.top) / e.height, _ = 1.1;
                    let F = l;
                    i.deltaY < 0 ? F = l / _ : F = l * _, F < 10 && (F = 10), F > 200 && (F = 200);
                    const ye = r + y * (F - l);
                    X(F), V(ye);
                  }
                }
              ),
              /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-3 z-50 pointer-events-auto",
                  onMouseEnter: () => ce(!0),
                  onMouseLeave: () => ce(!1),
                  children: m === "fixed" && (le || ue) && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                    /* @__PURE__ */ S.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${yt(er)}%` },
                        onMouseDown: (i) => {
                          i.preventDefault(), i.stopPropagation(), Fe("max");
                        }
                      }
                    ),
                    /* @__PURE__ */ S.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${yt(Kt)}%` },
                        onMouseDown: (i) => {
                          i.preventDefault(), i.stopPropagation(), Fe("min");
                        }
                      }
                    )
                  ] })
                }
              ),
              x.map((i) => /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: "absolute left-0 w-full flex items-center group/tick",
                  style: { top: `${i.percent}%`, transform: "translateY(-50%)" },
                  children: [
                    /* @__PURE__ */ S.jsx(
                      "div",
                      {
                        className: Ft(
                          "bg-black/60 text-xs text-white/90 px-1 ml-1 font-mono rounded-r transition-opacity",
                          i.percent > 95 ? "opacity-0" : "opacity-100"
                        ),
                        children: i.val
                      }
                    ),
                    /* @__PURE__ */ S.jsx("div", { className: "ml-1 h-px bg-white/10 w-[calc(100%-0.25rem)]", style: { width: oe.width } })
                  ]
                },
                i.val
              ))
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "absolute left-0 right-0 h-4 flex items-center justify-center z-30 cursor-row-resize hover:bg-white/5 active:bg-white/10 transition-colors -translate-y-1/2",
            style: { top: `${N * 100}%` },
            onMouseDown: (i) => {
              i.preventDefault(), p(!0);
            },
            children: /* @__PURE__ */ S.jsx("div", { className: "w-full h-px bg-white/20 pointer-events-none" })
          }
        ),
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "absolute left-0 right-0 h-6 bg-black flex items-center border-t border-white/20 pointer-events-none z-20",
            style: { top: `${N * 100}%`, transform: "translateY(-100%)" },
            children: [
              Le.map((i) => /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: "absolute top-0 h-full flex flex-col justify-center items-center",
                  style: { left: `${i.percent}%`, transform: "translateX(-50%)" },
                  children: [
                    /* @__PURE__ */ S.jsx("span", { className: "relative z-10 text-[10px] text-white font-mono bg-black px-1 whitespace-nowrap", children: i.label }),
                    /* @__PURE__ */ S.jsx(
                      "div",
                      {
                        className: "w-px bg-white/10 absolute left-1/2 -translate-x-1/2 pointer-events-none",
                        style: { height: oe.height, top: -a }
                      }
                    )
                  ]
                },
                i.val
              )),
              /* @__PURE__ */ S.jsx("div", { className: "absolute top-0 left-1/2 w-0.5 h-[5px] bg-red-500 -translate-x-1/2" })
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "absolute left-0 right-0 pointer-events-none overflow-hidden",
            style: { top: `${N * 100}%`, bottom: 0 },
            children: v.map((i) => /* @__PURE__ */ S.jsx(
              "div",
              {
                ref: (e) => {
                  e ? ie.current.set(i.id, e) : ie.current.delete(i.id);
                },
                className: "absolute w-full border-t border-white/20 transition-opacity duration-100",
                style: { top: "-10px", opacity: 1 },
                children: /* @__PURE__ */ S.jsx("div", { className: "absolute left-1 -top-3 text-[10px] text-white/70 font-mono bg-black/40 px-1 rounded", children: i.label })
              },
              i.id
            ))
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "absolute top-2 right-2 text-xs text-white/70 font-mono pointer-events-none select-none bg-black/60 p-2 rounded text-right border border-white/10 z-40", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "font-bold text-white", children: [
            (be / 1e6).toFixed(3),
            " MHz"
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "text-white/50", children: [
            "Span: ",
            (re / 1e6).toFixed(3),
            " MHz"
          ] })
        ] }),
        Oe && /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "absolute pointer-events-none bg-black/90 text-white text-[10px] font-mono p-1 rounded border border-white/20 whitespace-nowrap z-50",
            style: {
              left: Math.min(Oe.x + 15, oe.width - 120),
              top: Math.min(Oe.y + 15, oe.height - 50)
            },
            children: [
              /* @__PURE__ */ S.jsxs("div", { className: "text-yellow-400", children: [
                (Oe.freq / 1e6).toFixed(6),
                " MHz"
              ] }),
              Oe.db > -1e3 && /* @__PURE__ */ S.jsxs("div", { className: "text-cyan-400", children: [
                Oe.db.toFixed(1),
                " dB"
              ] })
            ]
          }
        )
      ]
    }
  );
};
export {
  io as SpectrumWaterfall
};
