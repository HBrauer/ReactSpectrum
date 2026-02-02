import Ut, { useMemo as zt, useRef as te, useState as Ce, useEffect as Ue } from "react";
var rt = { exports: {} }, Qe = {};
var St;
function tr() {
  if (St) return Qe;
  St = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, i, l) {
    var u = null;
    if (l !== void 0 && (u = "" + l), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      l = {};
      for (var p in i)
        p !== "key" && (l[p] = i[p]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: r,
      key: u,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return Qe.Fragment = n, Qe.jsx = o, Qe.jsxs = o, Qe;
}
var Ze = {};
var At;
function rr() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === le ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case C:
          return "Fragment";
        case q:
          return "Profiler";
        case V:
          return "StrictMode";
        case re:
          return "Suspense";
        case pe:
          return "SuspenseList";
        case ye:
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
          case me:
            return (a._context.displayName || "Context") + ".Consumer";
          case ie:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case g:
            return h = a.displayName || null, h !== null ? h : e(a.type) || "Memo";
          case P:
            h = a._payload, a = a._init;
            try {
              return e(a(h));
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
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var x = h.error, T = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return x.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), n(a);
      }
    }
    function r(a) {
      if (a === C) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === P)
        return "<...>";
      try {
        var h = e(a);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var a = be.A;
      return a === null ? null : a.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function u(a) {
      if (z.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function p(a, h) {
      function x() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: x,
        configurable: !0
      });
    }
    function d() {
      var a = e(this.type);
      return J[a] || (J[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, h, x, T, oe, Se) {
      var w = x.ref;
      return a = {
        $$typeof: G,
        type: a,
        key: h,
        props: x,
        _owner: T
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(a, "ref", {
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
        value: oe
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function S(a, h, x, T, oe, Se) {
      var w = h.children;
      if (w !== void 0)
        if (T)
          if (Le(w)) {
            for (T = 0; T < w.length; T++)
              D(w[T]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else D(w);
      if (z.call(h, "key")) {
        w = e(a);
        var W = Object.keys(h).filter(function(O) {
          return O !== "key";
        });
        T = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", Ie[w + T] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          w,
          W,
          w
        ), Ie[w + T] = !0);
      }
      if (w = null, x !== void 0 && (o(x), w = "" + x), u(h) && (o(h.key), w = "" + h.key), "key" in h) {
        x = {};
        for (var ne in h)
          ne !== "key" && (x[ne] = h[ne]);
      } else x = h;
      return w && p(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(
        a,
        w,
        x,
        i(),
        oe,
        Se
      );
    }
    function D(a) {
      A(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === P && (a._payload.status === "fulfilled" ? A(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function A(a) {
      return typeof a == "object" && a !== null && a.$$typeof === G;
    }
    var F = Ut, G = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), re = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), g = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.activity"), le = /* @__PURE__ */ Symbol.for("react.client.reference"), be = F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, Le = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    F = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var j, J = {}, b = F.react_stack_bottom_frame.bind(
      F,
      l
    )(), Te = H(r(l)), Ie = {};
    Ze.Fragment = C, Ze.jsx = function(a, h, x) {
      var T = 1e4 > be.recentlyCreatedOwnerStacks++;
      return S(
        a,
        h,
        x,
        !1,
        T ? Error("react-stack-top-frame") : b,
        T ? H(r(a)) : Te
      );
    }, Ze.jsxs = function(a, h, x) {
      var T = 1e4 > be.recentlyCreatedOwnerStacks++;
      return S(
        a,
        h,
        x,
        !0,
        T ? Error("react-stack-top-frame") : b,
        T ? H(r(a)) : Te
      );
    };
  })()), Ze;
}
var Dt;
function or() {
  return Dt || (Dt = 1, process.env.NODE_ENV === "production" ? rt.exports = tr() : rt.exports = rr()), rt.exports;
}
var _ = or();
function jt(e) {
  var n, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (n = 0; n < i; n++) e[n] && (o = jt(e[n])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function nr() {
  for (var e, n, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (n = jt(e)) && (r && (r += " "), r += n);
  return r;
}
const ar = (e, n) => {
  const o = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < n.length; r++)
    o[e.length + r] = n[r];
  return o;
}, sr = (e, n) => ({
  classGroupId: e,
  validator: n
}), Ot = (e = /* @__PURE__ */ new Map(), n = null, o) => ({
  nextPart: e,
  validators: n,
  classGroupId: o
}), at = "-", Mt = [], ir = "arbitrary..", lr = (e) => {
  const n = ur(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (u) => {
      if (u.startsWith("[") && u.endsWith("]"))
        return cr(u);
      const p = u.split(at), d = p[0] === "" && p.length > 1 ? 1 : 0;
      return Bt(p, d, n);
    },
    getConflictingClassGroupIds: (u, p) => {
      if (p) {
        const d = r[u], v = o[u];
        return d ? v ? ar(v, d) : d : v || Mt;
      }
      return o[u] || Mt;
    }
  };
}, Bt = (e, n, o) => {
  if (e.length - n === 0)
    return o.classGroupId;
  const i = e[n], l = o.nextPart.get(i);
  if (l) {
    const v = Bt(e, n + 1, l);
    if (v) return v;
  }
  const u = o.validators;
  if (u === null)
    return;
  const p = n === 0 ? e.join(at) : e.slice(n).join(at), d = u.length;
  for (let v = 0; v < d; v++) {
    const S = u[v];
    if (S.validator(p))
      return S.classGroupId;
  }
}, cr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), o = n.indexOf(":"), r = n.slice(0, o);
  return r ? ir + r : void 0;
})(), ur = (e) => {
  const {
    theme: n,
    classGroups: o
  } = e;
  return dr(o, n);
}, dr = (e, n) => {
  const o = Ot();
  for (const r in e) {
    const i = e[r];
    ht(i, o, r, n);
  }
  return o;
}, ht = (e, n, o, r) => {
  const i = e.length;
  for (let l = 0; l < i; l++) {
    const u = e[l];
    fr(u, n, o, r);
  }
}, fr = (e, n, o, r) => {
  if (typeof e == "string") {
    mr(e, n, o);
    return;
  }
  if (typeof e == "function") {
    pr(e, n, o, r);
    return;
  }
  br(e, n, o, r);
}, mr = (e, n, o) => {
  const r = e === "" ? n : Xt(n, e);
  r.classGroupId = o;
}, pr = (e, n, o, r) => {
  if (gr(e)) {
    ht(e(r), n, o, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(sr(o, e));
}, br = (e, n, o, r) => {
  const i = Object.entries(e), l = i.length;
  for (let u = 0; u < l; u++) {
    const [p, d] = i[u];
    ht(d, Xt(n, p), o, r);
  }
}, Xt = (e, n) => {
  let o = e;
  const r = n.split(at), i = r.length;
  for (let l = 0; l < i; l++) {
    const u = r[l];
    let p = o.nextPart.get(u);
    p || (p = Ot(), o.nextPart.set(u, p)), o = p;
  }
  return o;
}, gr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, hr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const i = (l, u) => {
    o[l] = u, n++, n > e && (n = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(l) {
      let u = o[l];
      if (u !== void 0)
        return u;
      if ((u = r[l]) !== void 0)
        return i(l, u), u;
    },
    set(l, u) {
      l in o ? o[l] = u : i(l, u);
    }
  };
}, gt = "!", Pt = ":", xr = [], Ct = (e, n, o, r, i) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: i
}), wr = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: o
  } = e;
  let r = (i) => {
    const l = [];
    let u = 0, p = 0, d = 0, v;
    const S = i.length;
    for (let X = 0; X < S; X++) {
      const C = i[X];
      if (u === 0 && p === 0) {
        if (C === Pt) {
          l.push(i.slice(d, X)), d = X + 1;
          continue;
        }
        if (C === "/") {
          v = X;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" ? u-- : C === "(" ? p++ : C === ")" && p--;
    }
    const D = l.length === 0 ? i : i.slice(d);
    let A = D, F = !1;
    D.endsWith(gt) ? (A = D.slice(0, -1), F = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      D.startsWith(gt) && (A = D.slice(1), F = !0)
    );
    const G = v && v > d ? v - d : void 0;
    return Ct(l, F, A, G);
  };
  if (n) {
    const i = n + Pt, l = r;
    r = (u) => u.startsWith(i) ? l(u.slice(i.length)) : Ct(xr, !1, u, void 0, !0);
  }
  if (o) {
    const i = r;
    r = (l) => o({
      className: l,
      parseClassName: i
    });
  }
  return r;
}, vr = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, r) => {
    n.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let i = [];
    for (let l = 0; l < o.length; l++) {
      const u = o[l], p = u[0] === "[", d = n.has(u);
      p || d ? (i.length > 0 && (i.sort(), r.push(...i), i = []), r.push(u)) : i.push(u);
    }
    return i.length > 0 && (i.sort(), r.push(...i)), r;
  };
}, yr = (e) => ({
  cache: hr(e.cacheSize),
  parseClassName: wr(e),
  sortModifiers: vr(e),
  ...lr(e)
}), Tr = /\s+/, kr = (e, n) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: l
  } = n, u = [], p = e.trim().split(Tr);
  let d = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const S = p[v], {
      isExternal: D,
      modifiers: A,
      hasImportantModifier: F,
      baseClassName: G,
      maybePostfixModifierPosition: X
    } = o(S);
    if (D) {
      d = S + (d.length > 0 ? " " + d : d);
      continue;
    }
    let C = !!X, V = r(C ? G.substring(0, X) : G);
    if (!V) {
      if (!C) {
        d = S + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (V = r(G), !V) {
        d = S + (d.length > 0 ? " " + d : d);
        continue;
      }
      C = !1;
    }
    const q = A.length === 0 ? "" : A.length === 1 ? A[0] : l(A).join(":"), me = F ? q + gt : q, Y = me + V;
    if (u.indexOf(Y) > -1)
      continue;
    u.push(Y);
    const ie = i(V, C);
    for (let re = 0; re < ie.length; ++re) {
      const pe = ie[re];
      u.push(me + pe);
    }
    d = S + (d.length > 0 ? " " + d : d);
  }
  return d;
}, Rr = (...e) => {
  let n = 0, o, r, i = "";
  for (; n < e.length; )
    (o = e[n++]) && (r = Gt(o)) && (i && (i += " "), i += r);
  return i;
}, Gt = (e) => {
  if (typeof e == "string")
    return e;
  let n, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = Gt(e[r])) && (o && (o += " "), o += n);
  return o;
}, Er = (e, ...n) => {
  let o, r, i, l;
  const u = (d) => {
    const v = n.reduce((S, D) => D(S), e());
    return o = yr(v), r = o.cache.get, i = o.cache.set, l = p, p(d);
  }, p = (d) => {
    const v = r(d);
    if (v)
      return v;
    const S = kr(d, o);
    return i(d, S), S;
  };
  return l = u, (...d) => l(Rr(...d));
}, _r = [], I = (e) => {
  const n = (o) => o[e] || _r;
  return n.isThemeGetter = !0, n;
}, Vt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Sr = /^\d+\/\d+$/, Ar = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Pr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ge = (e) => Sr.test(e), y = (e) => !!e && !Number.isNaN(Number(e)), Ne = (e) => !!e && Number.isInteger(Number(e)), ft = (e) => e.endsWith("%") && y(e.slice(0, -1)), _e = (e) => Ar.test(e), Nr = () => !0, Lr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Dr.test(e) && !Mr.test(e)
), Wt = () => !1, Ir = (e) => Pr.test(e), Fr = (e) => Cr.test(e), Ur = (e) => !f(e) && !m(e), zr = (e) => Ve(e, Ht, Wt), f = (e) => Vt.test(e), ze = (e) => Ve(e, Jt, Lr), mt = (e) => Ve(e, Gr, y), Nt = (e) => Ve(e, $t, Wt), jr = (e) => Ve(e, qt, Fr), ot = (e) => Ve(e, Qt, Ir), m = (e) => Yt.test(e), Ke = (e) => Ye(e, Jt), Or = (e) => Ye(e, Vr), Lt = (e) => Ye(e, $t), Br = (e) => Ye(e, Ht), Xr = (e) => Ye(e, qt), nt = (e) => Ye(e, Qt, !0), Ve = (e, n, o) => {
  const r = Vt.exec(e);
  return r ? r[1] ? n(r[1]) : o(r[2]) : !1;
}, Ye = (e, n, o = !1) => {
  const r = Yt.exec(e);
  return r ? r[1] ? n(r[1]) : o : !1;
}, $t = (e) => e === "position" || e === "percentage", qt = (e) => e === "image" || e === "url", Ht = (e) => e === "length" || e === "size" || e === "bg-size", Jt = (e) => e === "length", Gr = (e) => e === "number", Vr = (e) => e === "family-name", Qt = (e) => e === "shadow", Yr = () => {
  const e = I("color"), n = I("font"), o = I("text"), r = I("font-weight"), i = I("tracking"), l = I("leading"), u = I("breakpoint"), p = I("container"), d = I("spacing"), v = I("radius"), S = I("shadow"), D = I("inset-shadow"), A = I("text-shadow"), F = I("drop-shadow"), G = I("blur"), X = I("perspective"), C = I("aspect"), V = I("ease"), q = I("animate"), me = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [
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
  ], ie = () => [...Y(), m, f], re = () => ["auto", "hidden", "clip", "visible", "scroll"], pe = () => ["auto", "contain", "none"], g = () => [m, f, d], P = () => [Ge, "full", "auto", ...g()], ye = () => [Ne, "none", "subgrid", m, f], le = () => ["auto", {
    span: ["full", Ne, m, f]
  }, Ne, m, f], be = () => [Ne, "auto", m, f], z = () => ["auto", "min", "max", "fr", m, f], Le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], j = () => ["auto", ...g()], J = () => [Ge, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], b = () => [e, m, f], Te = () => [...Y(), Lt, Nt, {
    position: [m, f]
  }], Ie = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], a = () => ["auto", "cover", "contain", Br, zr, {
    size: [m, f]
  }], h = () => [ft, Ke, ze], x = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    m,
    f
  ], T = () => ["", y, Ke, ze], oe = () => ["solid", "dashed", "dotted", "double"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], w = () => [y, ft, Lt, Nt], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    G,
    m,
    f
  ], ne = () => ["none", y, m, f], O = () => ["none", y, m, f], We = () => [y, m, f], je = () => [Ge, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_e],
      breakpoint: [_e],
      color: [Nr],
      container: [_e],
      "drop-shadow": [_e],
      ease: ["in", "out", "in-out"],
      font: [Ur],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_e],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_e],
      shadow: [_e],
      spacing: ["px", y],
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
        aspect: ["auto", "square", Ge, f, m, C]
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
        columns: [y, f, m, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": me()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": me()
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
        object: ie()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
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
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        z: [Ne, "auto", m, f]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ge, "full", "auto", p, ...g()]
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
        flex: [y, Ge, "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", y, m, f]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", y, m, f]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ne, "first", "last", "none", m, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ye()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: le()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": be()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": be()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ye()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: le()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": be()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": be()
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
        "auto-cols": z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: j()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: j()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: j()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: j()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: j()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: j()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: j()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: j()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: j()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
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
        "space-y": g()
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
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...J()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...J()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [u]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Ke, ze]
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
        font: [Or, f, n]
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
        tracking: [i, m, f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [y, "none", m, mt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...g()
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
        placeholder: b()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: b()
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
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [y, "from-font", "auto", m, ze]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: b()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [y, "auto", m, f]
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
        indent: g()
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
        bg: Te()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ie()
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
          }, Ne, m, f],
          radial: ["", m, f],
          conic: [Ne, m, f]
        }, Xr, jr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: b()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: h()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: h()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: b()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: x()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": x()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": x()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": x()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": x()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": x()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": x()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": x()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": x()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": x()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": x()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": x()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": x()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": x()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": x()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
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
        "divide-y": T()
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
        border: [...oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: b()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": b()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": b()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": b()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": b()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": b()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": b()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": b()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": b()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: b()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [y, m, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", y, Ke, ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: b()
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
        shadow: b()
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
        "inset-shadow": b()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
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
        ring: b()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [y, ze]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": b()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": b()
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
        "text-shadow": b()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y, m, f]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
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
        "mask-linear": [y]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": w()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": b()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": b()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": w()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": b()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": b()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": w()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": b()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": b()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": w()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": b()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": b()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": w()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": b()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": b()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": w()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": b()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": b()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": w()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": b()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": b()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, f]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": w()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": b()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": b()
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
        "mask-conic": [y]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": w()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": b()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": b()
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
        mask: Te()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ie()
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
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [y, m, f]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [y, m, f]
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
          F,
          nt,
          ot
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": b()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", y, m, f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y, m, f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", y, m, f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y, m, f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", y, m, f]
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
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [y, m, f]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [y, m, f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", y, m, f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y, m, f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", y, m, f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y, m, f]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y, m, f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", y, m, f]
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
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
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
        duration: [y, "initial", m, f]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", V, m, f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [y, m, f]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", q, m, f]
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
        perspective: [X, m, f]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ie()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: O()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": O()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": O()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": O()
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
        skew: We()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": We()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": We()
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
        origin: ie()
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
        translate: je()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": je()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": je()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": je()
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
        accent: b()
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
        caret: b()
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
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
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
        fill: ["none", ...b()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [y, Ke, ze, mt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...b()]
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
}, Wr = /* @__PURE__ */ Er(Yr);
function It(...e) {
  return Wr(nr(e));
}
function Ft(e, n, o) {
  const r = e.createShader(n);
  return r ? (e.shaderSource(r, o), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.error("Shader compile error:", e.getShaderInfoLog(r)), e.deleteShader(r), null)) : null;
}
function pt(e, n, o) {
  const r = Ft(e, e.VERTEX_SHADER, n), i = Ft(e, e.FRAGMENT_SHADER, o);
  if (!r || !i) return null;
  const l = e.createProgram();
  return l ? (e.attachShader(l, r), e.attachShader(l, i), e.linkProgram(l), e.getProgramParameter(l, e.LINK_STATUS) ? l : (console.error("Program link error:", e.getProgramInfoLog(l)), e.deleteProgram(l), null)) : null;
}
function $r(e) {
  const n = e.clientWidth * window.devicePixelRatio, o = e.clientHeight * window.devicePixelRatio;
  return e.width !== n || e.height !== o ? (e.width = n, e.height = o, !0) : !1;
}
const qr = `#version 300 es
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
`, Hr = `#version 300 es
precision mediump float;
in float v_yNorm;
out vec4 outColor;

void main() {
  // Gradient from Dark Blue (bottom) to Light Blue (top)
  vec4 colorBottom = vec4(0.0, 0.1, 0.3, 0.6); // Dark semi-transparent
  vec4 colorTop = vec4(0.0, 0.6, 1.0, 0.9);    // Brighter Light Blue
  
  outColor = mix(colorBottom, colorTop, v_yNorm);
}
`, Jr = `#version 300 es
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
`, Qr = Jr, Zr = `#version 300 es
precision mediump float;
uniform vec4 u_color;
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure White Line
}
`, Kr = `#version 300 es
in vec2 a_position; // quad vertices -1..1
in vec2 a_texCoord; // 0..1

out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`, eo = `#version 300 es
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
function bt(e = "turbo") {
  const n = document.createElement("canvas");
  n.width = 256, n.height = 1;
  const o = n.getContext("2d");
  if (!o) return new Uint8Array(256 * 4);
  const r = o.createLinearGradient(0, 0, 256, 0);
  switch (e) {
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
  const i = o.getImageData(0, 0, 256, 1);
  return new Uint8Array(i.data.buffer);
}
function M(e, n, o) {
  e.addColorStop(n, o);
}
function to(e, n, o) {
  return zt(() => {
    const r = e - n / 2, i = e + n / 2, l = n, u = Math.max(2, Math.floor(o / 100)), p = l / u, d = Math.pow(10, Math.floor(Math.log10(p)));
    let v = d;
    p / d > 5 ? v *= 5 : p / d > 2 && (v *= 2);
    const S = [], D = Math.ceil(r / v) * v;
    for (let A = D; A <= i; A += v) {
      const F = (A - r) / l * 100;
      S.push({
        val: A,
        percent: F,
        label: (A / 1e6).toFixed(3) + "M"
        // Simple formatting
      });
    }
    return S;
  }, [e, n, o]);
}
function ro(e, n, o) {
  return zt(() => {
    const r = e - n, i = e, l = Math.max(2, Math.floor(o / 40)), u = n, p = u / l, d = Math.ceil(p / 10) * 10, v = [], S = Math.ceil(r / d) * d;
    for (let D = S; D <= i; D += d) {
      const A = (i - D) / u * 100;
      v.push({ val: D, percent: A });
    }
    return v;
  }, [e, n, o]);
}
const no = ({
  data: e,
  refLevel: n = 0,
  displayRange: o = 80,
  averaging: r = 0.5,
  showPeakHold: i = !1,
  colorMap: l = "turbo",
  waterfallScaleMode: u = "auto",
  waterfallFixedMinDb: p,
  waterfallFixedMaxDb: d,
  className: v,
  targetRate: S = 50,
  jitterBufferMs: D = 200,
  onRefLevelChange: A,
  onDisplayRangeChange: F,
  onWaterfallFixedRangeChange: G
}) => {
  const X = e.length > 0 ? e[e.length - 1] : null, { frequency: C, bandwidth: V } = X || { frequency: 1e8, bandwidth: 2e6 }, q = te(null), me = te(null), Y = te(null), ie = te(null), re = te(bt(l)), pe = te(0), g = te({
    w: 0,
    h: 0,
    refLevel: 0,
    displayRange: 0,
    minDb: 0,
    maxDb: 0,
    cmapVersion: 0
  }), [P, ye] = Ce({ min: -120, max: 0 }), [le, be] = Ce({ width: 0, height: 0 }), [z, Le] = Ce(0.34), [H, j] = Ce(!1), J = te(0.34);
  Ue(() => {
    J.current = z;
  }, [z]);
  const b = to(C, V, le.width), Te = le.height * z, Ie = ro(n, o, Te), [a, h] = Ce([]), x = te([]), T = te(/* @__PURE__ */ new Map()), oe = te(0), [Se, w] = Ce(!1), [W, ne] = Ce(null), O = typeof p == "number" && typeof d == "number", We = O ? p : P.min, je = O ? d : P.max, k = te({
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
      refLevel: n,
      displayRange: o,
      colorMap: l,
      averaging: r,
      showPeakHold: i,
      targetRate: S,
      jitterBufferMs: D,
      waterfallScaleMode: u,
      waterfallFixedMinDb: p,
      waterfallFixedMaxDb: d
    }
  });
  Ue(() => {
    if (!q.current) return;
    const c = new ResizeObserver((t) => {
      for (const N of t)
        be({
          width: N.contentRect.width,
          height: N.contentRect.height
        });
    });
    return c.observe(q.current), () => c.disconnect();
  }, []), Ue(() => {
    k.current.props = {
      refLevel: n,
      displayRange: o,
      colorMap: l,
      averaging: r,
      showPeakHold: i,
      targetRate: S,
      jitterBufferMs: D,
      waterfallScaleMode: u,
      waterfallFixedMinDb: p,
      waterfallFixedMaxDb: d
    }, typeof p == "number" && typeof d == "number" && (k.current.waterfallFixedMinDb = p, k.current.waterfallFixedMaxDb = d, k.current.waterfallFixedReady = !0, ye({ min: p, max: d }));
    const c = bt(l);
    re.current = c, pe.current += 1;
    const t = k.current.gl;
    t && k.current.colormapTexture && (t.bindTexture(t.TEXTURE_2D, k.current.colormapTexture), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, 256, 1, t.RGBA, t.UNSIGNED_BYTE, c));
  }, [n, o, l, r, i, S, D, u, p, d]), Ue(() => {
    if (!e || e.length === 0) return;
    const c = k.current;
    e.forEach((R) => {
      if (!R.fftBins || R.fftBins.length === 0) return;
      R.fftBins.length !== c.fftSize && (c.fftSize = R.fftBins.length, c.averagedBins = new Float32Array(R.fftBins));
      const E = c.frameQueue;
      if (E.length === 0 || R.time > E[E.length - 1].time)
        E.push(R);
      else {
        let L = E.length - 1;
        for (; L >= 0 && E[L].time > R.time; )
          L--;
        E.splice(L + 1, 0, R);
      }
      c.renderTime === 0 && (c.renderTime = R.time - c.props.jitterBufferMs / 1e3, c.averagedBins.set(R.fftBins));
    });
    const t = c.frameQueue, N = Math.ceil(c.props.targetRate * 5);
    if (t.length > N) {
      const R = t[t.length - 1].time;
      if (R - c.renderTime > 5)
        for (c.renderTime = R - c.props.jitterBufferMs / 1e3; t.length > N; ) t.shift();
      else
        for (; t.length > N; ) t.shift();
    }
  }, [e]), Ue(() => {
    const c = me.current;
    if (!c) return;
    const t = c.getContext("webgl2", { alpha: !1, antialias: !1 });
    if (!t) {
      console.error("WebGL 2 not supported");
      return;
    }
    k.current.gl = t;
    const N = pt(t, Qr, Zr), R = pt(t, qr, Hr), E = pt(t, Kr, eo);
    if (!N || !R || !E) return;
    k.current.programSpectrumLine = N, k.current.programSpectrumFill = R, k.current.programWaterfall = E;
    const L = t.createVertexArray();
    k.current.spectrumVao = L;
    const ke = t.createVertexArray();
    t.bindVertexArray(ke);
    const ce = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]), ue = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, ue), t.bufferData(t.ARRAY_BUFFER, ce, t.STATIC_DRAW);
    const ae = t.getAttribLocation(E, "a_position"), ge = t.getAttribLocation(E, "a_texCoord");
    t.enableVertexAttribArray(ae), t.vertexAttribPointer(ae, 2, t.FLOAT, !1, 16, 0), t.enableVertexAttribArray(ge), t.vertexAttribPointer(ge, 2, t.FLOAT, !1, 16, 8);
    const yt = t.getExtension("OES_texture_float_linear") ? t.LINEAR : t.NEAREST, Tt = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, Tt), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, yt), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, yt), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), k.current.waterfallTexture = Tt;
    const kt = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, kt), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), k.current.spectrumDataTexture = kt;
    const Rt = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, Rt), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 256, 1, 0, t.RGBA, t.UNSIGNED_BYTE, bt(k.current.props.colorMap)), k.current.colormapTexture = Rt;
    let he = 0;
    const Et = () => {
      const de = ie.current;
      if (!de) return;
      const s = de.getContext("2d");
      if (!s) return;
      const Re = de.getBoundingClientRect(), B = window.devicePixelRatio || 1, fe = Math.max(1, Math.floor(Re.width * B)), xe = Math.max(1, Math.floor(Re.height * B)), $ = k.current.props, $e = $.waterfallScaleMode === "fixed", et = k.current.waterfallScaleReady ? k.current.waterfallMinDb : $.refLevel - $.displayRange, qe = k.current.waterfallScaleReady ? k.current.waterfallMaxDb : $.refLevel, ct = k.current.waterfallFixedMinDb, He = k.current.waterfallFixedMaxDb, Be = $e && k.current.waterfallFixedReady ? ct : et, De = $e && k.current.waterfallFixedReady ? He : qe, tt = pe.current, Ee = g.current;
      if (Ee.w === fe && Ee.h === xe && Ee.refLevel === $.refLevel && Ee.displayRange === $.displayRange && Ee.minDb === Be && Ee.maxDb === De && Ee.cmapVersion === tt)
        return;
      g.current = { w: fe, h: xe, refLevel: $.refLevel, displayRange: $.displayRange, minDb: Be, maxDb: De, cmapVersion: tt }, de.width !== fe && (de.width = fe), de.height !== xe && (de.height = xe);
      const Me = s.createImageData(fe, xe), Q = Me.data, Fe = re.current, Z = Math.max(1e-6, De - Be);
      for (let K = 0; K < xe; K++) {
        const _t = xe > 1 ? K / (xe - 1) : 0, ut = $.refLevel - _t * $.displayRange, se = Math.max(0, Math.min(1, (ut - Be) / Z)), U = Math.max(0, Math.min(255, Math.round(se * 255))) * 4, we = Fe[U], Pe = Fe[U + 1], Xe = Fe[U + 2], dt = Fe[U + 3];
        for (let Je = 0; Je < fe; Je++) {
          const ve = (K * fe + Je) * 4;
          Q[ve] = we, Q[ve + 1] = Pe, Q[ve + 2] = Xe, Q[ve + 3] = dt;
        }
      }
      s.putImageData(Me, 0, 0);
    }, lt = (de) => {
      const s = k.current, { fftSize: Re, frameQueue: B } = s, fe = s.props.waterfallScaleMode;
      s.lastWaterfallScaleMode !== fe && (fe === "fixed" && (s.waterfallScaleReady ? (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, O || ye({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb })) : s.waterfallFixedReady = !1), s.lastWaterfallScaleMode = fe), s.lastRafTime === 0 && (s.lastRafTime = de);
      const xe = (de - s.lastRafTime) / 1e3;
      s.lastRafTime = de, s.accumulator += xe;
      const $ = 1 / s.props.targetRate;
      let $e = 0;
      const et = 5e3;
      Re > 0 && Re !== he && (he = Re, t.bindTexture(t.TEXTURE_2D, s.waterfallTexture), t.texImage2D(t.TEXTURE_2D, 0, t.R32F, he, s.waterfallHeight, 0, t.RED, t.FLOAT, null), t.bindTexture(t.TEXTURE_2D, s.spectrumDataTexture), t.texImage2D(t.TEXTURE_2D, 0, t.R32F, he, 1, 0, t.RED, t.FLOAT, null));
      const qe = 5;
      for (s.accumulator > qe && (s.accumulator = qe); s.accumulator >= $ && $e < et && Re > 0; ) {
        const Me = s.accumulator > s.props.jitterBufferMs / 1e3 * 1.5, Q = B.length > 0 ? B[B.length - 1] : null, Fe = Q && Q.time > s.renderTime;
        if (Me && !Fe)
          break;
        for (s.accumulator -= $, s.renderTime += $, $e++; B.length > 2 && B[1].time < s.renderTime; )
          B.shift();
        let Z = null;
        if (B.length !== 0) if (s.renderTime < B[0].time)
          Z = B[0].fftBins;
        else if (B.length === 1)
          Z = B[0].fftBins;
        else {
          const se = B[0], ee = B[1];
          if (s.renderTime >= ee.time)
            Z = ee.fftBins;
          else {
            const U = (s.renderTime - se.time) / (ee.time - se.time), we = Math.max(0, Math.min(1, U)), Pe = Re;
            (!s.averagedBins || s.averagedBins.length !== Pe) && (s.averagedBins = new Float32Array(Pe));
            const Xe = s.averagedBins, dt = se.fftBins, Je = ee.fftBins;
            for (let ve = 0; ve < Pe; ve++)
              Xe[ve] = dt[ve] * (1 - we) + Je[ve] * we;
            Z = Xe;
          }
        }
        if (Z) {
          let se = 1 / 0, ee = -1 / 0;
          for (let U = 0; U < Z.length; U++) {
            const we = Z[U];
            we < se && (se = we), we > ee && (ee = we);
          }
          if (Number.isFinite(se) && Number.isFinite(ee)) {
            if (!s.waterfallScaleReady)
              s.waterfallMinDb = se, s.waterfallMaxDb = ee, s.waterfallScaleReady = !0;
            else {
              const U = s.waterfallScaleAlpha;
              s.waterfallMinDb = s.waterfallMinDb * (1 - U) + se * U, s.waterfallMaxDb = s.waterfallMaxDb * (1 - U) + ee * U;
            }
            s.waterfallMaxDb - s.waterfallMinDb < 1 && (s.waterfallMaxDb = s.waterfallMinDb + 1), s.props.waterfallScaleMode === "fixed" && !s.waterfallFixedReady && (s.waterfallFixedMinDb = s.waterfallMinDb, s.waterfallFixedMaxDb = s.waterfallMaxDb, s.waterfallFixedReady = !0, O || ye({ min: s.waterfallFixedMinDb, max: s.waterfallFixedMaxDb }));
          }
          t.bindTexture(t.TEXTURE_2D, s.waterfallTexture), t.pixelStorei(t.UNPACK_ALIGNMENT, 1), t.texSubImage2D(t.TEXTURE_2D, 0, 0, s.waterfallRow, he, 1, t.RED, t.FLOAT, Z), s.waterfallRow = (s.waterfallRow + 1) % s.waterfallHeight, Z !== s.averagedBins && s.averagedBins.set(Z);
        }
        const K = s.renderTime * 1e3, ut = s.waterfallHeight / s.props.targetRate * 1e3;
        if (K - oe.current > 2e3) {
          const ee = new Date(K).toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit", second: "2-digit" }), U = { id: K, label: ee, rowIndex: s.waterfallRow }, Pe = [...x.current, U].filter((Xe) => K - Xe.id < ut);
          x.current = Pe, h(Pe), oe.current = K;
        }
      }
      if ($r(c) && t.viewport(0, 0, c.width, c.height), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT), Re === 0) {
        Et(), Y.current = requestAnimationFrame(lt);
        return;
      }
      t.bindTexture(t.TEXTURE_2D, s.spectrumDataTexture), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, he, 1, t.RED, t.FLOAT, s.averagedBins);
      const ct = J.current, He = Math.floor(c.height * (1 - ct));
      t.viewport(0, 0, c.width, He), t.useProgram(s.programWaterfall), t.bindVertexArray(ke), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, s.waterfallTexture), t.uniform1i(t.getUniformLocation(E, "u_waterfall"), 0), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s.colormapTexture), t.uniform1i(t.getUniformLocation(E, "u_colormap"), 1);
      const Be = s.waterfallRow / s.waterfallHeight;
      t.uniform1f(t.getUniformLocation(E, "u_offset"), Be), s.props.waterfallScaleMode === "fixed" && s.waterfallFixedReady ? (t.uniform1f(t.getUniformLocation(E, "u_minDb"), s.waterfallFixedMinDb), t.uniform1f(t.getUniformLocation(E, "u_maxDb"), s.waterfallFixedMaxDb)) : (t.uniform1f(t.getUniformLocation(E, "u_minDb"), s.waterfallMinDb), t.uniform1f(t.getUniformLocation(E, "u_maxDb"), s.waterfallMaxDb)), t.drawArrays(t.TRIANGLES, 0, 6), t.viewport(0, He, c.width, c.height - He), t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), t.useProgram(s.programSpectrumFill), t.bindVertexArray(s.spectrumVao), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, s.spectrumDataTexture), t.uniform1i(t.getUniformLocation(R, "u_data"), 0), t.uniform1f(t.getUniformLocation(R, "u_bins"), he), t.uniform1f(t.getUniformLocation(R, "u_minDb"), s.props.refLevel - s.props.displayRange), t.uniform1f(t.getUniformLocation(R, "u_maxDb"), s.props.refLevel), t.drawArrays(t.TRIANGLE_STRIP, 0, he * 2), t.useProgram(s.programSpectrumLine), t.bindVertexArray(s.spectrumVao), t.uniform1i(t.getUniformLocation(N, "u_data"), 0), t.uniform1f(t.getUniformLocation(N, "u_bins"), he), t.uniform1f(t.getUniformLocation(N, "u_minDb"), s.props.refLevel - s.props.displayRange), t.uniform1f(t.getUniformLocation(N, "u_maxDb"), s.props.refLevel), t.drawArrays(t.LINE_STRIP, 0, he), t.disable(t.BLEND), Et();
      const De = s.waterfallHeight, tt = De / s.props.targetRate, Ee = s.renderTime * 1e3;
      x.current.forEach((Me) => {
        const Q = T.current.get(Me.id);
        if (Q)
          if ((Ee - Me.id) / 1e3 > tt)
            Q.style.display = "none";
          else {
            Q.style.display = "block";
            let K = (s.waterfallRow - Me.rowIndex + De) % De / De * 100;
            Q.style.top = `${K}%`, Q.style.opacity = K > 98 ? "0" : "1";
          }
      }), Y.current = requestAnimationFrame(lt);
    };
    return Y.current = requestAnimationFrame(lt), () => {
      Y.current && cancelAnimationFrame(Y.current), t.deleteProgram(N), t.deleteProgram(R), t.deleteProgram(E), t.deleteTexture(k.current.waterfallTexture), t.deleteTexture(k.current.colormapTexture), t.deleteTexture(k.current.spectrumDataTexture);
    };
  }, []);
  const [Oe, xt] = Ut.useState(null), [wt, st] = Ce(!1), it = te(0), Zt = (c) => {
    if (H) {
      const ae = q.current?.getBoundingClientRect();
      if (ae) {
        let Ae = (c.clientY - ae.top) / ae.height;
        Ae < 0.1 && (Ae = 0.1), Ae > 0.9 && (Ae = 0.9), Le(Ae);
      }
      return;
    }
    if (wt && A) {
      const ae = c.clientY - it.current;
      it.current = c.clientY;
      const ge = o / Te, Ae = ae * ge;
      A(n + Ae);
      return;
    }
    const t = q.current?.getBoundingClientRect();
    if (!t) return;
    const N = c.clientX - t.left, R = c.clientY - t.top, E = C - V / 2, L = V / t.width, ke = E + N * L, ce = t.height * z;
    let ue = -1 / 0;
    if (R < ce) {
      const ge = o / ce;
      ue = n - R * ge;
    }
    xt({ freq: ke, db: ue, x: N, y: R });
  }, Kt = () => {
    xt(null), H && j(!1), wt && st(!1);
  }, er = () => {
    j(!1), st(!1);
  }, vt = (c) => {
    if (o <= 0) return 0;
    const t = (n - c) / o * 100;
    return Math.max(0, Math.min(100, t));
  };
  return Ue(() => {
    O || (k.current.waterfallFixedMinDb = P.min, k.current.waterfallFixedMaxDb = P.max, k.current.waterfallFixedReady = !0);
  }, [O, P]), Ue(() => {
    if (!W) return;
    const c = (N) => {
      const R = q.current?.getBoundingClientRect();
      if (!R) return;
      const E = R.height * z;
      if (E <= 0 || o === 0) return;
      const L = Math.min(Math.max(N.clientY - R.top, 0), E), ke = n - L / E * o;
      let ce = O ? p : P.min, ue = O ? d : P.max;
      W === "min" ? ce = Math.min(ke, ue - 1) : ue = Math.max(ke, ce + 1);
      const ae = n - o, ge = n;
      ce = Math.min(ge - 1, Math.max(ae, ce)), ue = Math.max(ae + 1, Math.min(ge, ue)), G ? G(ce, ue) : ye({ min: ce, max: ue });
    }, t = () => ne(null);
    return window.addEventListener("mousemove", c), window.addEventListener("mouseup", t), () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", t);
    };
  }, [
    W,
    z,
    o,
    n,
    O,
    p,
    d,
    P,
    G
  ]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: q,
      className: It("relative w-full h-full bg-black overflow-hidden cursor-crosshair group", v),
      onMouseMove: Zt,
      onMouseLeave: Kt,
      onMouseUp: er,
      children: [
        /* @__PURE__ */ _.jsx(
          "canvas",
          {
            ref: me,
            className: "block w-full h-full"
          }
        ),
        /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute top-0 left-0 right-0 pointer-events-none overflow-hidden",
            style: { height: `${z * 100}%` },
            children: [
              /* @__PURE__ */ _.jsx("div", { className: "absolute top-0 left-0 w-1 z-10 pointer-events-none", style: { bottom: "6px" }, children: /* @__PURE__ */ _.jsx("canvas", { ref: ie, className: "block w-full h-full" }) }),
              /* @__PURE__ */ _.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-12 z-40 cursor-ns-resize hover:bg-white/5 active:bg-white/10 transition-colors pointer-events-auto",
                  title: "Drag to adjust reference level. scroll to zoom",
                  onMouseDown: (c) => {
                    c.preventDefault(), c.stopPropagation(), st(!0), it.current = c.clientY;
                  },
                  onWheel: (c) => {
                    if (!F || !A) return;
                    c.preventDefault(), c.stopPropagation();
                    const t = c.currentTarget.getBoundingClientRect(), R = (c.clientY - t.top) / t.height, E = 1.1;
                    let L = o;
                    c.deltaY < 0 ? L = o / E : L = o * E, L < 10 && (L = 10), L > 200 && (L = 200);
                    const ke = n + R * (L - o);
                    F(L), A(ke);
                  }
                }
              ),
              /* @__PURE__ */ _.jsx(
                "div",
                {
                  className: "absolute top-0 left-0 bottom-0 w-3 z-50 pointer-events-auto",
                  onMouseEnter: () => w(!0),
                  onMouseLeave: () => w(!1),
                  children: u === "fixed" && (Se || W) && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${vt(je)}%` },
                        onMouseDown: (c) => {
                          c.preventDefault(), c.stopPropagation(), ne("max");
                        }
                      }
                    ),
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "absolute left-0 w-3 h-3 -translate-y-1/2 bg-white/90 border border-black/60 rounded",
                        style: { top: `${vt(We)}%` },
                        onMouseDown: (c) => {
                          c.preventDefault(), c.stopPropagation(), ne("min");
                        }
                      }
                    )
                  ] })
                }
              ),
              Ie.map((c) => /* @__PURE__ */ _.jsxs(
                "div",
                {
                  className: "absolute left-0 w-full flex items-center group/tick",
                  style: { top: `${c.percent}%`, transform: "translateY(-50%)" },
                  children: [
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: It(
                          "bg-black/60 text-xs text-white/90 px-1 ml-1 font-mono rounded-r transition-opacity",
                          c.percent > 95 ? "opacity-0" : "opacity-100"
                        ),
                        children: c.val
                      }
                    ),
                    /* @__PURE__ */ _.jsx("div", { className: "ml-1 h-px bg-white/10 w-[calc(100%-0.25rem)]", style: { width: le.width } })
                  ]
                },
                c.val
              ))
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "absolute left-0 right-0 h-4 flex items-center justify-center z-30 cursor-row-resize hover:bg-white/5 active:bg-white/10 transition-colors -translate-y-1/2",
            style: { top: `${z * 100}%` },
            onMouseDown: (c) => {
              c.preventDefault(), j(!0);
            },
            children: /* @__PURE__ */ _.jsx("div", { className: "w-full h-px bg-white/20 pointer-events-none" })
          }
        ),
        /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute left-0 right-0 h-6 bg-black flex items-center border-t border-white/20 pointer-events-none z-20",
            style: { top: `${z * 100}%`, transform: "translateY(-100%)" },
            children: [
              b.map((c) => /* @__PURE__ */ _.jsxs(
                "div",
                {
                  className: "absolute top-0 h-full flex flex-col justify-center items-center",
                  style: { left: `${c.percent}%`, transform: "translateX(-50%)" },
                  children: [
                    /* @__PURE__ */ _.jsx("span", { className: "relative z-10 text-[10px] text-white font-mono bg-black px-1 whitespace-nowrap", children: c.label }),
                    /* @__PURE__ */ _.jsx(
                      "div",
                      {
                        className: "w-px bg-white/10 absolute left-1/2 -translate-x-1/2 pointer-events-none",
                        style: { height: le.height, top: -Te }
                      }
                    )
                  ]
                },
                c.val
              )),
              /* @__PURE__ */ _.jsx("div", { className: "absolute top-0 left-1/2 w-0.5 h-[5px] bg-red-500 -translate-x-1/2" })
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "absolute left-0 right-0 pointer-events-none overflow-hidden",
            style: { top: `${z * 100}%`, bottom: 0 },
            children: a.map((c) => /* @__PURE__ */ _.jsx(
              "div",
              {
                ref: (t) => {
                  t ? T.current.set(c.id, t) : T.current.delete(c.id);
                },
                className: "absolute w-full border-t border-white/20 transition-opacity duration-100",
                style: { top: "-10px", opacity: 1 },
                children: /* @__PURE__ */ _.jsx("div", { className: "absolute left-1 -top-3 text-[10px] text-white/70 font-mono bg-black/40 px-1 rounded", children: c.label })
              },
              c.id
            ))
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "absolute top-2 right-2 text-xs text-white/70 font-mono pointer-events-none select-none bg-black/60 p-2 rounded text-right border border-white/10 z-40", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "font-bold text-white", children: [
            (C / 1e6).toFixed(3),
            " MHz"
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "text-white/50", children: [
            "Span: ",
            (V / 1e6).toFixed(3),
            " MHz"
          ] })
        ] }),
        Oe && /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "absolute pointer-events-none bg-black/90 text-white text-[10px] font-mono p-1 rounded border border-white/20 whitespace-nowrap z-50",
            style: {
              left: Math.min(Oe.x + 15, le.width - 120),
              top: Math.min(Oe.y + 15, le.height - 50)
            },
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "text-yellow-400", children: [
                (Oe.freq / 1e6).toFixed(6),
                " MHz"
              ] }),
              Oe.db > -1e3 && /* @__PURE__ */ _.jsxs("div", { className: "text-cyan-400", children: [
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
  no as SpectrumWaterfall
};
