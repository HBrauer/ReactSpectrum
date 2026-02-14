import zt, { useMemo as jt, useRef as J, useState as Ne, useEffect as Le } from "react";
var rt = { exports: {} }, Je = {};
var Dt;
function or() {
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
function nr() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ke ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case N:
          return "Fragment";
        case le:
          return "Profiler";
        case Z:
          return "StrictMode";
        case oe:
          return "Suspense";
        case pe:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case F:
            return "Portal";
          case ce:
            return a.displayName || "Context";
          case V:
            return (a._context.displayName || "Context") + ".Consumer";
          case Y:
            var x = a.render;
            return a = a.displayName, a || (a = x.displayName || x.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case h:
            return x = a.displayName || null, x !== null ? x : t(a.type) || "Memo";
          case z:
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
        var w = x.error, y = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return w.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), n(a);
      }
    }
    function r(a) {
      if (a === N) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var x = t(a);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var a = B.A;
      return a === null ? null : a.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (Fe.call(a, "key")) {
        var x = Object.getOwnPropertyDescriptor(a, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function b(a, x) {
      function w() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: w,
        configurable: !0
      });
    }
    function d() {
      var a = t(this.type);
      return W[a] || (W[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, x, w, y, $, be) {
      var v = w.ref;
      return a = {
        $$typeof: Q,
        type: a,
        key: x,
        props: w,
        _owner: y
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: d
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
        value: $
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: be
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function S(a, x, w, y, $, be) {
      var v = x.children;
      if (v !== void 0)
        if (y)
          if (j(v)) {
            for (y = 0; y < v.length; y++)
              D(v[y]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else D(v);
      if (Fe.call(x, "key")) {
        v = t(a);
        var ae = Object.keys(x).filter(function(ge) {
          return ge !== "key";
        });
        y = 0 < ae.length ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[v + y] || (ae = 0 < ae.length ? "{" + ae.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          v,
          ae,
          v
        ), Ee[v + y] = !0);
      }
      if (v = null, w !== void 0 && (o(w), v = "" + w), u(x) && (o(x.key), v = "" + x.key), "key" in x) {
        w = {};
        for (var ee in x)
          ee !== "key" && (w[ee] = x[ee]);
      } else w = x;
      return v && b(
        w,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(
        a,
        v,
        w,
        l(),
        $,
        be
      );
    }
    function D(a) {
      A(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === z && (a._payload.status === "fulfilled" ? A(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function A(a) {
      return typeof a == "object" && a !== null && a.$$typeof === Q;
    }
    var C = zt, Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), F = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), ce = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), h = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), ke = /* @__PURE__ */ Symbol.for("react.client.reference"), B = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Fe = Object.prototype.hasOwnProperty, j = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var X, W = {}, p = C.react_stack_bottom_frame.bind(
      C,
      c
    )(), Ue = ne(r(c)), Ee = {};
    Qe.Fragment = N, Qe.jsx = function(a, x, w) {
      var y = 1e4 > B.recentlyCreatedOwnerStacks++;
      return S(
        a,
        x,
        w,
        !1,
        y ? Error("react-stack-top-frame") : p,
        y ? ne(r(a)) : Ue
      );
    }, Qe.jsxs = function(a, x, w) {
      var y = 1e4 > B.recentlyCreatedOwnerStacks++;
      return S(
        a,
        x,
        w,
        !0,
        y ? Error("react-stack-top-frame") : p,
        y ? ne(r(a)) : Ue
      );
    };
  })()), Qe;
}
var Mt;
function ar() {
  return Mt || (Mt = 1, process.env.NODE_ENV === "production" ? rt.exports = or() : rt.exports = nr()), rt.exports;
}
var _ = ar();
function Ot(t) {
  var n, o, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (n = 0; n < l; n++) t[n] && (o = Ot(t[n])) && (r && (r += " "), r += o);
  } else for (o in t) t[o] && (r && (r += " "), r += o);
  return r;
}
function sr() {
  for (var t, n, o = 0, r = "", l = arguments.length; o < l; o++) (t = arguments[o]) && (n = Ot(t)) && (r && (r += " "), r += n);
  return r;
}
const ir = (t, n) => {
  const o = new Array(t.length + n.length);
  for (let r = 0; r < t.length; r++)
    o[r] = t[r];
  for (let r = 0; r < n.length; r++)
    o[t.length + r] = n[r];
  return o;
}, lr = (t, n) => ({
  classGroupId: t,
  validator: n
}), Bt = (t = /* @__PURE__ */ new Map(), n = null, o) => ({
  nextPart: t,
  validators: n,
  classGroupId: o
}), at = "-", Pt = [], cr = "arbitrary..", ur = (t) => {
  const n = fr(t), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (u) => {
      if (u.startsWith("[") && u.endsWith("]"))
        return dr(u);
      const b = u.split(at), d = b[0] === "" && b.length > 1 ? 1 : 0;
      return Xt(b, d, n);
    },
    getConflictingClassGroupIds: (u, b) => {
      if (b) {
        const d = r[u], g = o[u];
        return d ? g ? ir(g, d) : d : g || Pt;
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
  const b = n === 0 ? t.join(at) : t.slice(n).join(at), d = u.length;
  for (let g = 0; g < d; g++) {
    const S = u[g];
    if (S.validator(b))
      return S.classGroupId;
  }
}, dr = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = t.slice(1, -1), o = n.indexOf(":"), r = n.slice(0, o);
  return r ? cr + r : void 0;
})(), fr = (t) => {
  const {
    theme: n,
    classGroups: o
  } = t;
  return mr(o, n);
}, mr = (t, n) => {
  const o = Bt();
  for (const r in t) {
    const l = t[r];
    ht(l, o, r, n);
  }
  return o;
}, ht = (t, n, o, r) => {
  const l = t.length;
  for (let c = 0; c < l; c++) {
    const u = t[c];
    pr(u, n, o, r);
  }
}, pr = (t, n, o, r) => {
  if (typeof t == "string") {
    br(t, n, o);
    return;
  }
  if (typeof t == "function") {
    gr(t, n, o, r);
    return;
  }
  hr(t, n, o, r);
}, br = (t, n, o) => {
  const r = t === "" ? n : Gt(n, t);
  r.classGroupId = o;
}, gr = (t, n, o, r) => {
  if (xr(t)) {
    ht(t(r), n, o, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(lr(o, t));
}, hr = (t, n, o, r) => {
  const l = Object.entries(t), c = l.length;
  for (let u = 0; u < c; u++) {
    const [b, d] = l[u];
    ht(d, Gt(n, b), o, r);
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
}, xr = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, wr = (t) => {
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
}, gt = "!", Ct = ":", vr = [], Nt = (t, n, o, r, l) => ({
  modifiers: t,
  hasImportantModifier: n,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: l
}), Tr = (t) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = t;
  let r = (l) => {
    const c = [];
    let u = 0, b = 0, d = 0, g;
    const S = l.length;
    for (let F = 0; F < S; F++) {
      const N = l[F];
      if (u === 0 && b === 0) {
        if (N === Ct) {
          c.push(l.slice(d, F)), d = F + 1;
          continue;
        }
        if (N === "/") {
          g = F;
          continue;
        }
      }
      N === "[" ? u++ : N === "]" ? u-- : N === "(" ? b++ : N === ")" && b--;
    }
    const D = c.length === 0 ? l : l.slice(d);
    let A = D, C = !1;
    D.endsWith(gt) ? (A = D.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      D.startsWith(gt) && (A = D.slice(1), C = !0)
    );
    const Q = g && g > d ? g - d : void 0;
    return Nt(c, C, A, Q);
  };
  if (n) {
    const l = n + Ct, c = r;
    r = (u) => u.startsWith(l) ? c(u.slice(l.length)) : Nt(vr, !1, u, void 0, !0);
  }
  if (o) {
    const l = r;
    r = (c) => o({
      className: c,
      parseClassName: l
    });
  }
  return r;
}, yr = (t) => {
  const n = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((o, r) => {
    n.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let l = [];
    for (let c = 0; c < o.length; c++) {
      const u = o[c], b = u[0] === "[", d = n.has(u);
      b || d ? (l.length > 0 && (l.sort(), r.push(...l), l = []), r.push(u)) : l.push(u);
    }
    return l.length > 0 && (l.sort(), r.push(...l)), r;
  };
}, Rr = (t) => ({
  cache: wr(t.cacheSize),
  parseClassName: Tr(t),
  sortModifiers: yr(t),
  ...ur(t)
}), kr = /\s+/, Er = (t, n) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: l,
    sortModifiers: c
  } = n, u = [], b = t.trim().split(kr);
  let d = "";
  for (let g = b.length - 1; g >= 0; g -= 1) {
    const S = b[g], {
      isExternal: D,
      modifiers: A,
      hasImportantModifier: C,
      baseClassName: Q,
      maybePostfixModifierPosition: F
    } = o(S);
    if (D) {
      d = S + (d.length > 0 ? " " + d : d);
      continue;
    }
    let N = !!F, Z = r(N ? Q.substring(0, F) : Q);
    if (!Z) {
      if (!N) {
        d = S + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (Z = r(Q), !Z) {
        d = S + (d.length > 0 ? " " + d : d);
        continue;
      }
      N = !1;
    }
    const le = A.length === 0 ? "" : A.length === 1 ? A[0] : c(A).join(":"), V = C ? le + gt : le, ce = V + Z;
    if (u.indexOf(ce) > -1)
      continue;
    u.push(ce);
    const Y = l(Z, N);
    for (let oe = 0; oe < Y.length; ++oe) {
      const pe = Y[oe];
      u.push(V + pe);
    }
    d = S + (d.length > 0 ? " " + d : d);
  }
  return d;
}, _r = (...t) => {
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
}, Sr = (t, ...n) => {
  let o, r, l, c;
  const u = (d) => {
    const g = n.reduce((S, D) => D(S), t());
    return o = Rr(g), r = o.cache.get, l = o.cache.set, c = b, b(d);
  }, b = (d) => {
    const g = r(d);
    if (g)
      return g;
    const S = Er(d, o);
    return l(d, S), S;
  };
  return c = u, (...d) => c(_r(...d));
}, Dr = [], I = (t) => {
  const n = (o) => o[t] || Dr;
  return n.isThemeGetter = !0, n;
}, Yt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Wt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ar = /^\d+\/\d+$/, Mr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Nr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ge = (t) => Ar.test(t), T = (t) => !!t && !Number.isNaN(Number(t)), Ie = (t) => !!t && Number.isInteger(Number(t)), ft = (t) => t.endsWith("%") && T(t.slice(0, -1)), Ae = (t) => Mr.test(t), Ir = () => !0, Fr = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pr.test(t) && !Cr.test(t)
), $t = () => !1, Ur = (t) => Nr.test(t), zr = (t) => Lr.test(t), jr = (t) => !f(t) && !m(t), Or = (t) => Ve(t, Jt, $t), f = (t) => Yt.test(t), je = (t) => Ve(t, Qt, Fr), mt = (t) => Ve(t, Yr, T), Lt = (t) => Ve(t, qt, $t), Br = (t) => Ve(t, Ht, zr), ot = (t) => Ve(t, Zt, Ur), m = (t) => Wt.test(t), Ze = (t) => Ye(t, Qt), Xr = (t) => Ye(t, Wr), It = (t) => Ye(t, qt), Gr = (t) => Ye(t, Jt), Vr = (t) => Ye(t, Ht), nt = (t) => Ye(t, Zt, !0), Ve = (t, n, o) => {
  const r = Yt.exec(t);
  return r ? r[1] ? n(r[1]) : o(r[2]) : !1;
}, Ye = (t, n, o = !1) => {
  const r = Wt.exec(t);
  return r ? r[1] ? n(r[1]) : o : !1;
}, qt = (t) => t === "position" || t === "percentage", Ht = (t) => t === "image" || t === "url", Jt = (t) => t === "length" || t === "size" || t === "bg-size", Qt = (t) => t === "length", Yr = (t) => t === "number", Wr = (t) => t === "family-name", Zt = (t) => t === "shadow", $r = () => {
  const t = I("color"), n = I("font"), o = I("text"), r = I("font-weight"), l = I("tracking"), c = I("leading"), u = I("breakpoint"), b = I("container"), d = I("spacing"), g = I("radius"), S = I("shadow"), D = I("inset-shadow"), A = I("text-shadow"), C = I("drop-shadow"), Q = I("blur"), F = I("perspective"), N = I("aspect"), Z = I("ease"), le = I("animate"), V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ce = () => [
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
  ], Y = () => [...ce(), m, f], oe = () => ["auto", "hidden", "clip", "visible", "scroll"], pe = () => ["auto", "contain", "none"], h = () => [m, f, d], z = () => [Ge, "full", "auto", ...h()], K = () => [Ie, "none", "subgrid", m, f], ke = () => ["auto", {
    span: ["full", Ie, m, f]
  }, Ie, m, f], B = () => [Ie, "auto", m, f], Fe = () => ["auto", "min", "max", "fr", m, f], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], X = () => ["auto", ...h()], W = () => [Ge, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], p = () => [t, m, f], Ue = () => [...ce(), It, Lt, {
    position: [m, f]
  }], Ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], a = () => ["auto", "cover", "contain", Gr, Or, {
    size: [m, f]
  }], x = () => [ft, Ze, je], w = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    m,
    f
  ], y = () => ["", T, Ze, je], $ = () => ["solid", "dashed", "dotted", "double"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], v = () => [T, ft, It, Lt], ae = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Q,
    m,
    f
  ], ee = () => ["none", T, m, f], ge = () => ["none", T, m, f], te = () => [T, m, f], Oe = () => [Ge, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ae],
      breakpoint: [Ae],
      color: [Ir],
      container: [Ae],
      "drop-shadow": [Ae],
      ease: ["in", "out", "in-out"],
      font: [jr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ae],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ae],
      shadow: [Ae],
      spacing: ["px", T],
      text: [Ae],
      "text-shadow": [Ae],
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
        aspect: ["auto", "square", Ge, f, m, N]
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
        columns: [T, f, m, b]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: Y()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: oe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": oe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": oe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: pe()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": pe()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": pe()
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
        inset: z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: z()
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
        z: [Ie, "auto", m, f]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ge, "full", "auto", b, ...h()]
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
        flex: [T, Ge, "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", T, m, f]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", T, m, f]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ie, "first", "last", "none", m, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": K()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ke()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": K()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ke()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": Fe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Fe()
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
        justify: [...j(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": j()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
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
        m: X()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: X()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: X()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: X()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: X()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: X()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: X()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: X()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: X()
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [b, "screen", ...W()]
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
          ...W()
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
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
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
        font: [r, m, mt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ft, f]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xr, f, n]
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
        tracking: [l, m, f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [T, "none", m, mt]
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
        "list-image": ["none", m, f]
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
        list: ["disc", "decimal", "none", m, f]
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
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [T, "from-font", "auto", m, je]
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
        "underline-offset": [T, "auto", m, f]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m, f]
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
        content: ["none", m, f]
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
        bg: Ue()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ee()
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
          }, Ie, m, f],
          radial: ["", m, f],
          conic: [Ie, m, f]
        }, Vr, Br]
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
        rounded: w()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": w()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": w()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": w()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": w()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": w()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": w()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": w()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": w()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": w()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": w()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": w()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": w()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": w()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": w()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: y()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": y()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": y()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": y()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": y()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": y()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": y()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": y()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": y()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": y()
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
        "divide-y": y()
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
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
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
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, m, f]
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
          S,
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
        "inset-shadow": ["none", D, nt, ot]
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
        ring: y()
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
        "inset-ring": y()
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
        "text-shadow": ["none", A, nt, ot]
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
        opacity: [T, m, f]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...be(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
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
        "mask-linear-from": v()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": v()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": p()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": v()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": v()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": p()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": v()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": v()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": p()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": v()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": v()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": p()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": v()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": v()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": p()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": v()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": v()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": p()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": v()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": v()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": p()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, f]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": v()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": v()
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
        "mask-radial-at": ce()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [T]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": v()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": v()
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
        mask: Ue()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ee()
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
        mask: ["none", m, f]
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
          m,
          f
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ae()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T, m, f]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T, m, f]
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
          C,
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
        grayscale: ["", T, m, f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [T, m, f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", T, m, f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T, m, f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", T, m, f]
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
          m,
          f
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ae()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T, m, f]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T, m, f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", T, m, f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [T, m, f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", T, m, f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T, m, f]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T, m, f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", T, m, f]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", m, f]
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
        duration: [T, "initial", m, f]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Z, m, f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [T, m, f]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", le, m, f]
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
        perspective: [F, m, f]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ee()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ee()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ee()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ee()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ge()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ge()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ge()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ge()
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
        skew: te()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": te()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": te()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [m, f, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Y()
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
        translate: Oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Oe()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m, f]
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
        "will-change": ["auto", "scroll", "contents", "transform", m, f]
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
        stroke: [T, Ze, je, mt]
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
}, qr = /* @__PURE__ */ Sr($r);
function Ft(...t) {
  return qr(sr(t));
}
function Ut(t, n, o) {
  const r = t.createShader(n);
  return r ? (t.shaderSource(r, o), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.error("Shader compile error:", t.getShaderInfoLog(r)), t.deleteShader(r), null)) : null;
}
function pt(t, n, o) {
  const r = Ut(t, t.VERTEX_SHADER, n), l = Ut(t, t.FRAGMENT_SHADER, o);
  if (!r || !l) return null;
  const c = t.createProgram();
  return c ? (t.attachShader(c, r), t.attachShader(c, l), t.linkProgram(c), t.getProgramParameter(c, t.LINK_STATUS) ? c : (console.error("Program link error:", t.getProgramInfoLog(c)), t.deleteProgram(c), null)) : null;
}
function Hr(t) {
  const n = t.clientWidth * window.devicePixelRatio, o = t.clientHeight * window.devicePixelRatio;
  return t.width !== n || t.height !== o ? (t.width = n, t.height = o, !0) : !1;
}
const Jr = `#version 300 es
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
`, Qr = `#version 300 es
precision mediump float;
in float v_yNorm;
out vec4 outColor;

void main() {
  // Gradient from Dark Blue (bottom) to Light Blue (top)
  vec4 colorBottom = vec4(0.0, 0.1, 0.3, 0.6); // Dark semi-transparent
  vec4 colorTop = vec4(0.0, 0.6, 1.0, 0.9);    // Brighter Light Blue
  
  outColor = mix(colorBottom, colorTop, v_yNorm);
}
`, Zr = `#version 300 es
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
`, Kr = Zr, eo = `#version 300 es
precision mediump float;
uniform vec4 u_color;
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure White Line
}
`, to = `#version 300 es
in vec2 a_position; // quad vertices -1..1
in vec2 a_texCoord; // 0..1

out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`, ro = `#version 300 es
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
function bt(t = "turbo") {
  const n = document.createElement("canvas");
  n.width = 256, n.height = 1;
  const o = n.getContext("2d");
  if (!o) return new Uint8Array(256 * 4);
  const r = o.createLinearGradient(0, 0, 256, 0);
  switch (t) {
    case "viridis":
      M(r, 0, "#440154"), M(r, 0.25, "#3b528b"), M(r, 0.5, "#21918c"), M(r, 0.75, "#5ec962"), M(r, 1, "#fde725");
      break;
    case "inferno":
      M(r, 0, "#000004"), M(r, 0.25, "#420a68"), M(r, 0.5, "#932667"), M(r, 0.75, "#dd513a"), M(r, 1, "#fcffa4");
      break;
    case "magma":
      M(r, 0, "#000004"), M(r, 0.25, "#3b0f70"), M(r, 0.5, "#8c2981"), M(r, 0.75, "#fe6100"), M(r, 1, "#fcfdbf");
      break;
    case "grayscale":
      M(r, 0, "#000000"), M(r, 1, "#ffffff");
      break;
    default:
      M(r, 0, "#30123b"), M(r, 0.1, "#466be3"), M(r, 0.25, "#28bceb"), M(r, 0.45, "#32f298"), M(r, 0.65, "#a4fc3c"), M(r, 0.85, "#eecf3a"), M(r, 0.95, "#fb7e21"), M(r, 1, "#7a0403");
      break;
  }
  o.fillStyle = r, o.fillRect(0, 0, 256, 1);
  const l = o.getImageData(0, 0, 256, 1);
  return new Uint8Array(l.data.buffer);
}
function M(t, n, o) {
  t.addColorStop(n, o);
}
function oo(t, n, o) {
  return jt(() => {
    const r = t - n / 2, l = t + n / 2, c = n, u = Math.max(2, Math.floor(o / 100)), b = c / u, d = Math.pow(10, Math.floor(Math.log10(b)));
    let g = d;
    b / d > 5 ? g *= 5 : b / d > 2 && (g *= 2);
    const S = [], D = Math.ceil(r / g) * g;
    for (let A = D; A <= l; A += g) {
      const C = (A - r) / c * 100;
      S.push({
        val: A,
        percent: C,
        label: (A / 1e6).toFixed(3) + "M"
        // Simple formatting
      });
    }
    return S;
  }, [t, n, o]);
}
function no(t, n, o) {
  return jt(() => {
    const r = t - n, l = t, c = Math.max(2, Math.floor(o / 40)), u = n, b = u / c, d = Math.ceil(b / 10) * 10, g = [], S = Math.ceil(r / d) * d;
    for (let D = S; D <= l; D += d) {
      const A = (l - D) / u * 100;
      g.push({ val: D, percent: A });
    }
    return g;
  }, [t, n, o]);
}
const so = ({
  data: t,
  running: n = !0,
  refLevel: o = 0,
  displayRange: r = 80,
  averaging: l = 0.5,
  showPeakHold: c = !1,
  colorMap: u = "turbo",
  waterfallScaleMode: b = "auto",
  waterfallFixedMinDb: d,
  waterfallFixedMaxDb: g,
  className: S,
  targetRate: D = 50,
  jitterBufferMs: A = 200,
  onRefLevelChange: C,
  onDisplayRangeChange: Q,
  onWaterfallFixedRangeChange: F
}) => {
  const N = t.length > 0 ? t[t.length - 1] : null, { frequency: Z, bandwidth: le } = N || { frequency: 1e8, bandwidth: 2e6 }, V = J(null), ce = J(null), Y = J(null), oe = J(null), pe = J(bt(u)), h = J(0), z = J({
    w: 0,
    h: 0,
    refLevel: 0,
    displayRange: 0,
    minDb: 0,
    maxDb: 0,
    cmapVersion: 0
  }), [K, ke] = Ne({ min: -120, max: 0 }), [B, Fe] = Ne({ width: 0, height: 0 }), [j, ne] = Ne(0.34), [X, W] = Ne(!1), p = J(0.34);
  Le(() => {
    p.current = j;
  }, [j]);
  const Ue = oo(Z, le, B.width), Ee = B.height * j, a = no(o, r, Ee), [x, w] = Ne([]), y = J([]), $ = J(/* @__PURE__ */ new Map()), be = J(0), [v, ae] = Ne(!1), [ee, ge] = Ne(null), te = typeof d == "number" && typeof g == "number", Oe = te ? d : K.min, Kt = te ? g : K.max, k = J({
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
    // Props Cache
    props: {
      running: n,
      refLevel: o,
      displayRange: r,
      colorMap: u,
      averaging: l,
      showPeakHold: c,
      targetRate: D,
      jitterBufferMs: A,
      waterfallScaleMode: b,
      waterfallFixedMinDb: d,
      waterfallFixedMaxDb: g
    }
  }), xt = J(n);
  Le(() => {
    if (!V.current) return;
    const i = new ResizeObserver((e) => {
      for (const P of e)
        Fe({
          width: P.contentRect.width,
          height: P.contentRect.height
        });
    });
    return i.observe(V.current), () => i.disconnect();
  }, []), Le(() => {
    k.current.props = {
      running: n,
      refLevel: o,
      displayRange: r,
      colorMap: u,
      averaging: l,
      showPeakHold: c,
      targetRate: D,
      jitterBufferMs: A,
      waterfallScaleMode: b,
      waterfallFixedMinDb: d,
      waterfallFixedMaxDb: g
    }, typeof d == "number" && typeof g == "number" && (k.current.waterfallFixedMinDb = d, k.current.waterfallFixedMaxDb = g, k.current.waterfallFixedReady = !0, ke({ min: d, max: g }));
    const i = bt(u);
    pe.current = i, h.current += 1;
    const e = k.current.gl;
    e && k.current.colormapTexture && (e.bindTexture(e.TEXTURE_2D, k.current.colormapTexture), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, 256, 1, e.RGBA, e.UNSIGNED_BYTE, i));
  }, [n, o, r, u, l, c, D, A, b, d, g]), Le(() => {
    if (n && !xt.current) {
      const i = k.current, e = i.gl, P = i.fftSize;
      if (i.frameQueue = [], i.renderTime = 0, i.lastRafTime = 0, i.accumulator = 0, i.fftSize = 0, i.averagedBins = new Float32Array(0), i.waterfallRow = 0, i.waterfallScaleReady = !1, y.current = [], $.current.clear(), w([]), be.current = 0, e) {
        const R = P > 0 ? P : 1;
        i.waterfallTexture && (e.bindTexture(e.TEXTURE_2D, i.waterfallTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, R, i.waterfallHeight, 0, e.RED, e.FLOAT, null)), i.spectrumDataTexture && (e.bindTexture(e.TEXTURE_2D, i.spectrumDataTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, R, 1, 0, e.RED, e.FLOAT, null));
      }
    }
    xt.current = n;
  }, [n]), Le(() => {
    if (!t || t.length === 0) return;
    const i = k.current;
    if (!i.props.running) return;
    t.forEach((R) => {
      if (!R.fftBins || R.fftBins.length === 0) return;
      R.fftBins.length !== i.fftSize && (i.fftSize = R.fftBins.length, i.averagedBins = new Float32Array(R.fftBins));
      const E = i.frameQueue;
      if (E.length === 0 || R.time > E[E.length - 1].time)
        E.push(R);
      else {
        let L = E.length - 1;
        for (; L >= 0 && E[L].time > R.time; )
          L--;
        E.splice(L + 1, 0, R);
      }
      i.renderTime === 0 && (i.renderTime = R.time - i.props.jitterBufferMs / 1e3, i.averagedBins.set(R.fftBins));
    });
    const e = i.frameQueue, P = Math.ceil(i.props.targetRate * 5);
    if (e.length > P) {
      const R = e[e.length - 1].time;
      if (R - i.renderTime > 5)
        for (i.renderTime = R - i.props.jitterBufferMs / 1e3; e.length > P; ) e.shift();
      else
        for (; e.length > P; ) e.shift();
    }
  }, [t]), Le(() => {
    const i = ce.current;
    if (!i) return;
    const e = i.getContext("webgl2", { alpha: !1, antialias: !1 });
    if (!e) {
      console.error("WebGL 2 not supported");
      return;
    }
    k.current.gl = e;
    const P = pt(e, Kr, eo), R = pt(e, Jr, Qr), E = pt(e, to, ro);
    if (!P || !R || !E) return;
    k.current.programSpectrumLine = P, k.current.programSpectrumFill = R, k.current.programWaterfall = E;
    const L = e.createVertexArray();
    k.current.spectrumVao = L;
    const _e = e.createVertexArray();
    e.bindVertexArray(_e);
    const ue = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]), de = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, de), e.bufferData(e.ARRAY_BUFFER, ue, e.STATIC_DRAW);
    const se = e.getAttribLocation(E, "a_position"), he = e.getAttribLocation(E, "a_texCoord");
    e.enableVertexAttribArray(se), e.vertexAttribPointer(se, 2, e.FLOAT, !1, 16, 0), e.enableVertexAttribArray(he), e.vertexAttribPointer(he, 2, e.FLOAT, !1, 16, 8);
    const yt = e.getExtension("OES_texture_float_linear") ? e.LINEAR : e.NEAREST, Rt = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, Rt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, yt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, yt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), k.current.waterfallTexture = Rt;
    const kt = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, kt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), k.current.spectrumDataTexture = kt;
    const Et = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, Et), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 256, 1, 0, e.RGBA, e.UNSIGNED_BYTE, bt(k.current.props.colorMap)), k.current.colormapTexture = Et;
    let xe = 0;
    const _t = () => {
      const fe = oe.current;
      if (!fe) return;
      const s = fe.getContext("2d");
      if (!s) return;
      const Se = fe.getBoundingClientRect(), O = window.devicePixelRatio || 1, me = Math.max(1, Math.floor(Se.width * O)), we = Math.max(1, Math.floor(Se.height * O)), q = k.current.props, We = q.waterfallScaleMode === "fixed", Ke = k.current.waterfallScaleReady ? k.current.waterfallMinDb : q.refLevel - q.displayRange, et = k.current.waterfallScaleReady ? k.current.waterfallMaxDb : q.refLevel, $e = k.current.waterfallFixedMinDb, ct = k.current.waterfallFixedMaxDb, De = We && k.current.waterfallFixedReady ? $e : Ke, qe = We && k.current.waterfallFixedReady ? ct : et, tt = h.current, H = z.current;
      if (H.w === me && H.h === we && H.refLevel === q.refLevel && H.displayRange === q.displayRange && H.minDb === De && H.maxDb === qe && H.cmapVersion === tt)
        return;
      z.current = { w: me, h: we, refLevel: q.refLevel, displayRange: q.displayRange, minDb: De, maxDb: qe, cmapVersion: tt }, fe.width !== me && (fe.width = me), fe.height !== we && (fe.height = we);
      const ve = s.createImageData(me, we), Pe = ve.data, ze = pe.current, G = Math.max(1e-6, qe - De);
      for (let Te = 0; Te < we; Te++) {
        const St = we > 1 ? Te / (we - 1) : 0, ut = q.refLevel - St * q.displayRange, ie = Math.max(0, Math.min(1, (ut - De) / G)), U = Math.max(0, Math.min(255, Math.round(ie * 255))) * 4, ye = ze[U], Ce = ze[U + 1], Xe = ze[U + 2], dt = ze[U + 3];
        for (let He = 0; He < me; He++) {
          const Re = (Te * me + He) * 4;
          Pe[Re] = ye, Pe[Re + 1] = Ce, Pe[Re + 2] = Xe, Pe[Re + 3] = dt;
        }
      }
      s.putImageData(ve, 0, 0);
    }, lt = (fe) => {
      const s = k.current, { fftSize: Se, frameQueue: O } = s, me = s.props.waterfallScaleMode;
      s.lastWaterfallScaleMode !== me && (me === "fixed" && (s.waterfallScaleReady ? (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, te || ke({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb })) : s.waterfallFixedReady = !1), s.lastWaterfallScaleMode = me), s.lastRafTime === 0 && (s.lastRafTime = fe);
      const we = (fe - s.lastRafTime) / 1e3;
      s.lastRafTime = fe;
      const q = 1 / s.props.targetRate;
      let We = 0;
      const Ke = 5e3;
      if (Se > 0 && Se !== xe && (xe = Se, e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, xe, s.waterfallHeight, 0, e.RED, e.FLOAT, null), e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, xe, 1, 0, e.RED, e.FLOAT, null)), s.props.running) {
        s.accumulator += we;
        const H = 5;
        for (s.accumulator > H && (s.accumulator = H); s.accumulator >= q && We < Ke && Se > 0; ) {
          const ve = s.accumulator > s.props.jitterBufferMs / 1e3 * 1.5, Pe = O.length > 0 ? O[O.length - 1] : null, ze = Pe && Pe.time > s.renderTime;
          if (ve && !ze)
            break;
          for (s.accumulator -= q, s.renderTime += q, We++; O.length > 2 && O[1].time < s.renderTime; )
            O.shift();
          let G = null;
          if (O.length !== 0) if (s.renderTime < O[0].time)
            G = O[0].fftBins;
          else if (O.length === 1)
            G = O[0].fftBins;
          else {
            const ie = O[0], re = O[1];
            if (s.renderTime >= re.time)
              G = re.fftBins;
            else {
              const U = (s.renderTime - ie.time) / (re.time - ie.time), ye = Math.max(0, Math.min(1, U)), Ce = Se;
              (!s.averagedBins || s.averagedBins.length !== Ce) && (s.averagedBins = new Float32Array(Ce));
              const Xe = s.averagedBins, dt = ie.fftBins, He = re.fftBins;
              for (let Re = 0; Re < Ce; Re++)
                Xe[Re] = dt[Re] * (1 - ye) + He[Re] * ye;
              G = Xe;
            }
          }
          if (G) {
            let ie = 1 / 0, re = -1 / 0;
            for (let U = 0; U < G.length; U++) {
              const ye = G[U];
              ye < ie && (ie = ye), ye > re && (re = ye);
            }
            if (Number.isFinite(ie) && Number.isFinite(re)) {
              if (!s.waterfallScaleReady)
                s.waterfallMinDb = ie, s.waterfallMaxDb = re, s.waterfallScaleReady = !0;
              else {
                const U = s.waterfallScaleAlpha;
                s.waterfallMinDb = s.waterfallMinDb * (1 - U) + ie * U, s.waterfallMaxDb = s.waterfallMaxDb * (1 - U) + re * U;
              }
              s.waterfallMaxDb - s.waterfallMinDb < 1 && (s.waterfallMaxDb = s.waterfallMinDb + 1), s.props.waterfallScaleMode === "fixed" && !s.waterfallFixedReady && (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, te || ke({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb }));
            }
            e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.pixelStorei(e.UNPACK_ALIGNMENT, 1), e.texSubImage2D(e.TEXTURE_2D, 0, 0, s.waterfallRow, xe, 1, e.RED, e.FLOAT, G), s.waterfallRow = (s.waterfallRow + 1) % s.waterfallHeight, G !== s.averagedBins && s.averagedBins.set(G);
          }
          const Te = s.renderTime * 1e3, ut = s.waterfallHeight / s.props.targetRate * 1e3;
          if (Te - be.current > 2e3) {
            const re = new Date(Te).toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit", second: "2-digit" }), U = { id: Te, label: re, rowIndex: s.waterfallRow }, Ce = [...y.current, U].filter((Xe) => Te - Xe.id < ut);
            y.current = Ce, w(Ce), be.current = Te;
          }
        }
      }
      if (Hr(i) && e.viewport(0, 0, i.width, i.height), e.clearColor(0, 0, 0, 1), e.clear(e.COLOR_BUFFER_BIT), Se === 0) {
        _t(), Y.current = requestAnimationFrame(lt);
        return;
      }
      e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, xe, 1, e.RED, e.FLOAT, s.averagedBins);
      const et = p.current, $e = Math.floor(i.height * (1 - et));
      e.viewport(0, 0, i.width, $e), e.useProgram(s.programWaterfall), e.bindVertexArray(_e), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s.waterfallTexture), e.uniform1i(e.getUniformLocation(E, "u_waterfall"), 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, s.colormapTexture), e.uniform1i(e.getUniformLocation(E, "u_colormap"), 1);
      const ct = s.waterfallRow / s.waterfallHeight;
      e.uniform1f(e.getUniformLocation(E, "u_offset"), ct), s.props.waterfallScaleMode === "fixed" && s.waterfallFixedReady ? (e.uniform1f(e.getUniformLocation(E, "u_minDb"), s.waterfallFixedMinDb), e.uniform1f(e.getUniformLocation(E, "u_maxDb"), s.waterfallFixedMaxDb)) : (e.uniform1f(e.getUniformLocation(E, "u_minDb"), s.waterfallMinDb), e.uniform1f(e.getUniformLocation(E, "u_maxDb"), s.waterfallMaxDb)), e.drawArrays(e.TRIANGLES, 0, 6), e.viewport(0, $e, i.width, i.height - $e), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), e.useProgram(s.programSpectrumFill), e.bindVertexArray(s.spectrumVao), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s.spectrumDataTexture), e.uniform1i(e.getUniformLocation(R, "u_data"), 0), e.uniform1f(e.getUniformLocation(R, "u_bins"), xe), e.uniform1f(e.getUniformLocation(R, "u_minDb"), s.props.refLevel - s.props.displayRange), e.uniform1f(e.getUniformLocation(R, "u_maxDb"), s.props.refLevel), e.drawArrays(e.TRIANGLE_STRIP, 0, xe * 2), e.useProgram(s.programSpectrumLine), e.bindVertexArray(s.spectrumVao), e.uniform1i(e.getUniformLocation(P, "u_data"), 0), e.uniform1f(e.getUniformLocation(P, "u_bins"), xe), e.uniform1f(e.getUniformLocation(P, "u_minDb"), s.props.refLevel - s.props.displayRange), e.uniform1f(e.getUniformLocation(P, "u_maxDb"), s.props.refLevel), e.drawArrays(e.LINE_STRIP, 0, xe), e.disable(e.BLEND), _t();
      const De = s.waterfallHeight, qe = De / s.props.targetRate, tt = s.renderTime * 1e3;
      y.current.forEach((H) => {
        const ve = $.current.get(H.id);
        if (ve)
          if ((tt - H.id) / 1e3 > qe)
            ve.style.display = "none";
          else {
            ve.style.display = "block";
            let G = (s.waterfallRow - H.rowIndex + De) % De / De * 100;
            ve.style.top = `${G}%`, ve.style.opacity = G > 98 ? "0" : "1";
          }
      }), Y.current = requestAnimationFrame(lt);
    };
    return Y.current = requestAnimationFrame(lt), () => {
      Y.current && cancelAnimationFrame(Y.current), e.deleteProgram(P), e.deleteProgram(R), e.deleteProgram(E), e.deleteTexture(k.current.waterfallTexture), e.deleteTexture(k.current.colormapTexture), e.deleteTexture(k.current.spectrumDataTexture);
    };
  }, []);
  const [Be, wt] = zt.useState(null), [vt, st] = Ne(!1), it = J(0), er = (i) => {
    if (X) {
      const se = V.current?.getBoundingClientRect();
      if (se) {
        let Me = (i.clientY - se.top) / se.height;
        Me < 0.1 && (Me = 0.1), Me > 0.9 && (Me = 0.9), ne(Me);
      }
      return;
    }
    if (vt && C) {
      const se = i.clientY - it.current;
      it.current = i.clientY;
      const he = r / Ee, Me = se * he;
      C(o + Me);
      return;
    }
    const e = V.current?.getBoundingClientRect();
    if (!e) return;
    const P = i.clientX - e.left, R = i.clientY - e.top, E = Z - le / 2, L = le / e.width, _e = E + P * L, ue = e.height * j;
    let de = -1 / 0;
    if (R < ue) {
      const he = r / ue;
      de = o - R * he;
    }
    wt({ freq: _e, db: de, x: P, y: R });
  }, tr = () => {
    wt(null), X && W(!1), vt && st(!1);
  }, rr = () => {
    W(!1), st(!1);
  }, Tt = (i) => {
    if (r <= 0) return 0;
    const e = (o - i) / r * 100;
    return Math.max(0, Math.min(100, e));
  };
  return Le(() => {
    te || (k.current.waterfallFixedMinDb = K.min, k.current.waterfallFixedMaxDb = K.max, k.current.waterfallFixedReady = !0);
  }, [te, K]), Le(() => {
    if (!ee) return;
    const i = (P) => {
      const R = V.current?.getBoundingClientRect();
      if (!R) return;
      const E = R.height * j;
      if (E <= 0 || r === 0) return;
      const L = Math.min(Math.max(P.clientY - R.top, 0), E), _e = o - L / E * r;
      let ue = te ? d : K.min, de = te ? g : K.max;
      ee === "min" ? ue = Math.min(_e, de - 1) : de = Math.max(_e, ue + 1);
      const se = o - r, he = o;
      ue = Math.min(he - 1, Math.max(se, ue)), de = Math.max(se + 1, Math.min(he, de)), F ? F(ue, de) : ke({ min: ue, max: de });
    }, e = () => ge(null);
    return window.addEventListener("mousemove", i), window.addEventListener("mouseup", e), () => {
      window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", e);
    };
  }, [
    ee,
    j,
    r,
    o,
    te,
    d,
    g,
    K,
    F
  ]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: V,
      className: Ft("relative w-full h-full bg-black overflow-hidden cursor-crosshair group", S),
      onMouseMove: er,
      onMouseLeave: tr,
      onMouseUp: rr,
      children: [
        /* @__PURE__ */ _.jsx(
          "canvas",
          {
            ref: ce,
            className: "block w-full h-full"
          }
        ),
        /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute top-0 left-0 right-0 pointer-events-none overflow-hidden",
            style: { height: `${j * 100}%` },
            children: [
              /* @__PURE__ */ _.jsx("div", { className: "absolute top-0 left-0 w-1 z-10 pointer-events-none", style: { bottom: "6px" }, children: /* @__PURE__ */ _.jsx("canvas", { ref: oe, className: "block w-full h-full" }) }),
              /* @__PURE__ */ _.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-12 z-40 cursor-ns-resize hover:bg-white/5 active:bg-white/10 transition-colors pointer-events-auto",
                  title: "Drag to adjust reference level. scroll to zoom",
                  onMouseDown: (i) => {
                    i.preventDefault(), i.stopPropagation(), st(!0), it.current = i.clientY;
                  },
                  onWheel: (i) => {
                    if (!Q || !C) return;
                    i.preventDefault(), i.stopPropagation();
                    const e = i.currentTarget.getBoundingClientRect(), R = (i.clientY - e.top) / e.height, E = 1.1;
                    let L = r;
                    i.deltaY < 0 ? L = r / E : L = r * E, L < 10 && (L = 10), L > 200 && (L = 200);
                    const _e = o + R * (L - r);
                    Q(L), C(_e);
                  }
                }
              ),
              /* @__PURE__ */ _.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-3 z-50 pointer-events-auto",
                  onMouseEnter: () => ae(!0),
                  onMouseLeave: () => ae(!1),
                  children: b === "fixed" && (v || ee) && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${Tt(Kt)}%` },
                        onMouseDown: (i) => {
                          i.preventDefault(), i.stopPropagation(), ge("max");
                        }
                      }
                    ),
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${Tt(Oe)}%` },
                        onMouseDown: (i) => {
                          i.preventDefault(), i.stopPropagation(), ge("min");
                        }
                      }
                    )
                  ] })
                }
              ),
              a.map((i) => /* @__PURE__ */ _.jsxs(
                "div",
                {
                  className: "absolute left-0 w-full flex items-center group/tick",
                  style: { top: `${i.percent}%`, transform: "translateY(-50%)" },
                  children: [
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: Ft(
                          "bg-black/60 text-xs text-white/90 px-1 ml-1 font-mono rounded-r transition-opacity",
                          i.percent > 95 ? "opacity-0" : "opacity-100"
                        ),
                        children: i.val
                      }
                    ),
                    /* @__PURE__ */ _.jsx("div", { className: "ml-1 h-px bg-white/10 w-[calc(100%-0.25rem)]", style: { width: B.width } })
                  ]
                },
                i.val
              ))
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "absolute left-0 right-0 h-4 flex items-center justify-center z-30 cursor-row-resize hover:bg-white/5 active:bg-white/10 transition-colors -translate-y-1/2",
            style: { top: `${j * 100}%` },
            onMouseDown: (i) => {
              i.preventDefault(), W(!0);
            },
            children: /* @__PURE__ */ _.jsx("div", { className: "w-full h-px bg-white/20 pointer-events-none" })
          }
        ),
        /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute left-0 right-0 h-6 bg-black flex items-center border-t border-white/20 pointer-events-none z-20",
            style: { top: `${j * 100}%`, transform: "translateY(-100%)" },
            children: [
              Ue.map((i) => /* @__PURE__ */ _.jsxs(
                "div",
                {
                  className: "absolute top-0 h-full flex flex-col justify-center items-center",
                  style: { left: `${i.percent}%`, transform: "translateX(-50%)" },
                  children: [
                    /* @__PURE__ */ _.jsx("span", { className: "relative z-10 text-[10px] text-white font-mono bg-black px-1 whitespace-nowrap", children: i.label }),
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "w-px bg-white/10 absolute left-1/2 -translate-x-1/2 pointer-events-none",
                        style: { height: B.height, top: -Ee }
                      }
                    )
                  ]
                },
                i.val
              )),
              /* @__PURE__ */ _.jsx("div", { className: "absolute top-0 left-1/2 w-0.5 h-[5px] bg-red-500 -translate-x-1/2" })
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "absolute left-0 right-0 pointer-events-none overflow-hidden",
            style: { top: `${j * 100}%`, bottom: 0 },
            children: x.map((i) => /* @__PURE__ */ _.jsx(
              "div",
              {
                ref: (e) => {
                  e ? $.current.set(i.id, e) : $.current.delete(i.id);
                },
                className: "absolute w-full border-t border-white/20 transition-opacity duration-100",
                style: { top: "-10px", opacity: 1 },
                children: /* @__PURE__ */ _.jsx("div", { className: "absolute left-1 -top-3 text-[10px] text-white/70 font-mono bg-black/40 px-1 rounded", children: i.label })
              },
              i.id
            ))
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "absolute top-2 right-2 text-xs text-white/70 font-mono pointer-events-none select-none bg-black/60 p-2 rounded text-right border border-white/10 z-40", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "font-bold text-white", children: [
            (Z / 1e6).toFixed(3),
            " MHz"
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "text-white/50", children: [
            "Span: ",
            (le / 1e6).toFixed(3),
            " MHz"
          ] })
        ] }),
        Be && /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute pointer-events-none bg-black/90 text-white text-[10px] font-mono p-1 rounded border border-white/20 whitespace-nowrap z-50",
            style: {
              left: Math.min(Be.x + 15, B.width - 120),
              top: Math.min(Be.y + 15, B.height - 50)
            },
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "text-yellow-400", children: [
                (Be.freq / 1e6).toFixed(6),
                " MHz"
              ] }),
              Be.db > -1e3 && /* @__PURE__ */ _.jsxs("div", { className: "text-cyan-400", children: [
                Be.db.toFixed(1),
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
  so as SpectrumWaterfall
};
