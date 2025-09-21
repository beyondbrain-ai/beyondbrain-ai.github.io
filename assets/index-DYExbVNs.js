function Dx(t, e) {
  for (var n = 0; n < e.length; n++) {
    const a = e[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const o in a)
        if (o !== "default" && !(o in t)) {
          const s = Object.getOwnPropertyDescriptor(a, o);
          s && Object.defineProperty(t, o, s.get ? s : {
            enumerable: !0,
            get: () => a[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  }))
}(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver(o => {
    for (const s of o)
      if (s.type === "childList")
        for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && a(c)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(o) {
    const s = {};
    return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s)
  }
})();

function Kp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Qp = {
    exports: {}
  },
  Bc = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx = Symbol.for("react.transitional.element"),
  Vx = Symbol.for("react.fragment");

function Jp(t, e, n) {
  var a = null;
  if (n !== void 0 && (a = "" + n), e.key !== void 0 && (a = "" + e.key), "key" in e) {
    n = {};
    for (var o in e) o !== "key" && (n[o] = e[o])
  } else n = e;
  return e = n.ref, {
    $$typeof: Rx,
    type: t,
    key: a,
    ref: e !== void 0 ? e : null,
    props: n
  }
}
Bc.Fragment = Vx;
Bc.jsx = Jp;
Bc.jsxs = Jp;
Qp.exports = Bc;
var l = Qp.exports,
  $p = {
    exports: {}
  },
  kc = {},
  Wp = {
    exports: {}
  },
  Ip = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(C, M) {
    var V = C.length;
    C.push(M);
    t: for (; 0 < V;) {
      var J = V - 1 >>> 1,
        ot = C[J];
      if (0 < o(ot, M)) C[J] = M, C[V] = ot, V = J;
      else break t
    }
  }

  function n(C) {
    return C.length === 0 ? null : C[0]
  }

  function a(C) {
    if (C.length === 0) return null;
    var M = C[0],
      V = C.pop();
    if (V !== M) {
      C[0] = V;
      t: for (var J = 0, ot = C.length, xs = ot >>> 1; J < xs;) {
        var ys = 2 * (J + 1) - 1,
          di = C[ys],
          vn = ys + 1,
          vs = C[vn];
        if (0 > o(di, V)) vn < ot && 0 > o(vs, di) ? (C[J] = vs, C[vn] = V, J = vn) : (C[J] = di, C[ys] = V, J = ys);
        else if (vn < ot && 0 > o(vs, V)) C[J] = vs, C[vn] = V, J = vn;
        else break t
      }
    }
    return M
  }

  function o(C, M) {
    var V = C.sortIndex - M.sortIndex;
    return V !== 0 ? V : C.id - M.id
  }
  if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function() {
      return s.now()
    }
  } else {
    var c = Date,
      i = c.now();
    t.unstable_now = function() {
      return c.now() - i
    }
  }
  var r = [],
    d = [],
    u = 1,
    m = null,
    p = 3,
    f = !1,
    S = !1,
    v = !1,
    b = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;

  function g(C) {
    for (var M = n(d); M !== null;) {
      if (M.callback === null) a(d);
      else if (M.startTime <= C) a(d), M.sortIndex = M.expirationTime, e(r, M);
      else break;
      M = n(d)
    }
  }

  function w(C) {
    if (v = !1, g(C), !S)
      if (n(r) !== null) S = !0, E || (E = !0, ce());
      else {
        var M = n(d);
        M !== null && hs(w, M.startTime - C)
      }
  }
  var E = !1,
    A = -1,
    N = 5,
    B = -1;

  function R() {
    return b ? !0 : !(t.unstable_now() - B < N)
  }

  function pt() {
    if (b = !1, E) {
      var C = t.unstable_now();
      B = C;
      var M = !0;
      try {
        t: {
          S = !1,
          v && (v = !1, h(A), A = -1),
          f = !0;
          var V = p;
          try {
            e: {
              for (g(C), m = n(r); m !== null && !(m.expirationTime > C && R());) {
                var J = m.callback;
                if (typeof J == "function") {
                  m.callback = null, p = m.priorityLevel;
                  var ot = J(m.expirationTime <= C);
                  if (C = t.unstable_now(), typeof ot == "function") {
                    m.callback = ot, g(C), M = !0;
                    break e
                  }
                  m === n(r) && a(r), g(C)
                } else a(r);
                m = n(r)
              }
              if (m !== null) M = !0;
              else {
                var xs = n(d);
                xs !== null && hs(w, xs.startTime - C), M = !1
              }
            }
            break t
          }
          finally {
            m = null, p = V, f = !1
          }
          M = void 0
        }
      }
      finally {
        M ? ce() : E = !1
      }
    }
  }
  var ce;
  if (typeof y == "function") ce = function() {
    y(pt)
  };
  else if (typeof MessageChannel < "u") {
    var ps = new MessageChannel,
      fs = ps.port2;
    ps.port1.onmessage = pt, ce = function() {
      fs.postMessage(null)
    }
  } else ce = function() {
    x(pt, 0)
  };

  function hs(C, M) {
    A = x(function() {
      C(t.unstable_now())
    }, M)
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(C) {
    C.callback = null
  }, t.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < C ? Math.floor(1e3 / C) : 5
  }, t.unstable_getCurrentPriorityLevel = function() {
    return p
  }, t.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = p
    }
    var V = p;
    p = M;
    try {
      return C()
    } finally {
      p = V
    }
  }, t.unstable_requestPaint = function() {
    b = !0
  }, t.unstable_runWithPriority = function(C, M) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3
    }
    var V = p;
    p = C;
    try {
      return M()
    } finally {
      p = V
    }
  }, t.unstable_scheduleCallback = function(C, M, V) {
    var J = t.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? J + V : J) : V = J, C) {
      case 1:
        var ot = -1;
        break;
      case 2:
        ot = 250;
        break;
      case 5:
        ot = 1073741823;
        break;
      case 4:
        ot = 1e4;
        break;
      default:
        ot = 5e3
    }
    return ot = V + ot, C = {
      id: u++,
      callback: M,
      priorityLevel: C,
      startTime: V,
      expirationTime: ot,
      sortIndex: -1
    }, V > J ? (C.sortIndex = V, e(d, C), n(r) === null && C === n(d) && (v ? (h(A), A = -1) : v = !0, hs(w, V - J))) : (C.sortIndex = ot, e(r, C), S || f || (S = !0, E || (E = !0, ce()))), C
  }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(C) {
    var M = p;
    return function() {
      var V = p;
      p = M;
      try {
        return C.apply(this, arguments)
      } finally {
        p = V
      }
    }
  }
})(Ip);
Wp.exports = Ip;
var Ox = Wp.exports,
  tf = {
    exports: {}
  },
  H = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr = Symbol.for("react.transitional.element"),
  Hx = Symbol.for("react.portal"),
  zx = Symbol.for("react.fragment"),
  _x = Symbol.for("react.strict_mode"),
  Ux = Symbol.for("react.profiler"),
  Bx = Symbol.for("react.consumer"),
  kx = Symbol.for("react.context"),
  Lx = Symbol.for("react.forward_ref"),
  Px = Symbol.for("react.suspense"),
  qx = Symbol.for("react.memo"),
  ef = Symbol.for("react.lazy"),
  Id = Symbol.iterator;

function Yx(t) {
  return t === null || typeof t != "object" ? null : (t = Id && t[Id] || t["@@iterator"], typeof t == "function" ? t : null)
}
var nf = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  af = Object.assign,
  of = {};

function za(t, e, n) {
  this.props = t, this.context = e, this.refs = of, this.updater = n || nf
}
za.prototype.isReactComponent = {};
za.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState")
};
za.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function sf() {}
sf.prototype = za.prototype;

function jr(t, e, n) {
  this.props = t, this.context = e, this.refs = of, this.updater = n || nf
}
var br = jr.prototype = new sf;
br.constructor = jr;
af(br, za.prototype);
br.isPureReactComponent = !0;
var tu = Array.isArray,
  tt = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  },
  cf = Object.prototype.hasOwnProperty;

function wr(t, e, n, a, o, s) {
  return n = s.ref, {
    $$typeof: Sr,
    type: t,
    key: e,
    ref: n !== void 0 ? n : null,
    props: s
  }
}

function Gx(t, e) {
  return wr(t.type, e, void 0, void 0, void 0, t.props)
}

function Tr(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Sr
}

function Xx(t) {
  var e = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n]
  })
}
var eu = /\/+/g;

function ui(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? Xx("" + t.key) : e.toString(36)
}

function nu() {}

function Zx(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (typeof t.status == "string" ? t.then(nu, nu) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e)
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e)
        })), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason
      }
  }
  throw t
}

function Xn(t, e, n, a, o) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var c = !1;
  if (t === null) c = !0;
  else switch (s) {
    case "bigint":
    case "string":
    case "number":
      c = !0;
      break;
    case "object":
      switch (t.$$typeof) {
        case Sr:
        case Hx:
          c = !0;
          break;
        case ef:
          return c = t._init, Xn(c(t._payload), e, n, a, o)
      }
  }
  if (c) return o = o(t), c = a === "" ? "." + ui(t, 0) : a, tu(o) ? (n = "", c != null && (n = c.replace(eu, "$&/") + "/"), Xn(o, e, n, "", function(d) {
    return d
  })) : o != null && (Tr(o) && (o = Gx(o, n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(eu, "$&/") + "/") + c)), e.push(o)), 1;
  c = 0;
  var i = a === "" ? "." : a + ":";
  if (tu(t))
    for (var r = 0; r < t.length; r++) a = t[r], s = i + ui(a, r), c += Xn(a, e, n, s, o);
  else if (r = Yx(t), typeof r == "function")
    for (t = r.call(t), r = 0; !(a = t.next()).done;) a = a.value, s = i + ui(a, r++), c += Xn(a, e, n, s, o);
  else if (s === "object") {
    if (typeof t.then == "function") return Xn(Zx(t), e, n, a, o);
    throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.")
  }
  return c
}

function gs(t, e, n) {
  if (t == null) return t;
  var a = [],
    o = 0;
  return Xn(t, a, "", "", function(s) {
    return e.call(n, s, o++)
  }), a
}

function Kx(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
    }), t._status === -1 && (t._status = 0, t._result = e)
  }
  if (t._status === 1) return t._result.default;
  throw t._result
}
var au = typeof reportError == "function" ? reportError : function(t) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var e = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
      error: t
    });
    if (!window.dispatchEvent(e)) return
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", t);
    return
  }
  console.error(t)
};

function Qx() {}
H.Children = {
  map: gs,
  forEach: function(t, e, n) {
    gs(t, function() {
      e.apply(this, arguments)
    }, n)
  },
  count: function(t) {
    var e = 0;
    return gs(t, function() {
      e++
    }), e
  },
  toArray: function(t) {
    return gs(t, function(e) {
      return e
    }) || []
  },
  only: function(t) {
    if (!Tr(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t
  }
};
H.Component = za;
H.Fragment = zx;
H.Profiler = Ux;
H.PureComponent = jr;
H.StrictMode = _x;
H.Suspense = Px;
H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt;
H.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(t) {
    return tt.H.useMemoCache(t)
  }
};
H.cache = function(t) {
  return function() {
    return t.apply(null, arguments)
  }
};
H.cloneElement = function(t, e, n) {
  if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
  var a = af({}, t.props),
    o = t.key,
    s = void 0;
  if (e != null)
    for (c in e.ref !== void 0 && (s = void 0), e.key !== void 0 && (o = "" + e.key), e) !cf.call(e, c) || c === "key" || c === "__self" || c === "__source" || c === "ref" && e.ref === void 0 || (a[c] = e[c]);
  var c = arguments.length - 2;
  if (c === 1) a.children = n;
  else if (1 < c) {
    for (var i = Array(c), r = 0; r < c; r++) i[r] = arguments[r + 2];
    a.children = i
  }
  return wr(t.type, o, void 0, void 0, s, a)
};
H.createContext = function(t) {
  return t = {
    $$typeof: kx,
    _currentValue: t,
    _currentValue2: t,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, t.Provider = t, t.Consumer = {
    $$typeof: Bx,
    _context: t
  }, t
};
H.createElement = function(t, e, n) {
  var a, o = {},
    s = null;
  if (e != null)
    for (a in e.key !== void 0 && (s = "" + e.key), e) cf.call(e, a) && a !== "key" && a !== "__self" && a !== "__source" && (o[a] = e[a]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var i = Array(c), r = 0; r < c; r++) i[r] = arguments[r + 2];
    o.children = i
  }
  if (t && t.defaultProps)
    for (a in c = t.defaultProps, c) o[a] === void 0 && (o[a] = c[a]);
  return wr(t, s, void 0, void 0, null, o)
};
H.createRef = function() {
  return {
    current: null
  }
};
H.forwardRef = function(t) {
  return {
    $$typeof: Lx,
    render: t
  }
};
H.isValidElement = Tr;
H.lazy = function(t) {
  return {
    $$typeof: ef,
    _payload: {
      _status: -1,
      _result: t
    },
    _init: Kx
  }
};
H.memo = function(t, e) {
  return {
    $$typeof: qx,
    type: t,
    compare: e === void 0 ? null : e
  }
};
H.startTransition = function(t) {
  var e = tt.T,
    n = {};
  tt.T = n;
  try {
    var a = t(),
      o = tt.S;
    o !== null && o(n, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(Qx, au)
  } catch (s) {
    au(s)
  } finally {
    tt.T = e
  }
};
H.unstable_useCacheRefresh = function() {
  return tt.H.useCacheRefresh()
};
H.use = function(t) {
  return tt.H.use(t)
};
H.useActionState = function(t, e, n) {
  return tt.H.useActionState(t, e, n)
};
H.useCallback = function(t, e) {
  return tt.H.useCallback(t, e)
};
H.useContext = function(t) {
  return tt.H.useContext(t)
};
H.useDebugValue = function() {};
H.useDeferredValue = function(t, e) {
  return tt.H.useDeferredValue(t, e)
};
H.useEffect = function(t, e, n) {
  var a = tt.H;
  if (typeof n == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
  return a.useEffect(t, e)
};
H.useId = function() {
  return tt.H.useId()
};
H.useImperativeHandle = function(t, e, n) {
  return tt.H.useImperativeHandle(t, e, n)
};
H.useInsertionEffect = function(t, e) {
  return tt.H.useInsertionEffect(t, e)
};
H.useLayoutEffect = function(t, e) {
  return tt.H.useLayoutEffect(t, e)
};
H.useMemo = function(t, e) {
  return tt.H.useMemo(t, e)
};
H.useOptimistic = function(t, e) {
  return tt.H.useOptimistic(t, e)
};
H.useReducer = function(t, e, n) {
  return tt.H.useReducer(t, e, n)
};
H.useRef = function(t) {
  return tt.H.useRef(t)
};
H.useState = function(t) {
  return tt.H.useState(t)
};
H.useSyncExternalStore = function(t, e, n) {
  return tt.H.useSyncExternalStore(t, e, n)
};
H.useTransition = function() {
  return tt.H.useTransition()
};
H.version = "19.1.1";
tf.exports = H;
var F = tf.exports;
const Jx = Kp(F),
  $x = Dx({
    __proto__: null,
    default: Jx
  }, [F]);
var lf = {
    exports: {}
  },
  Dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wx = F;

function rf(t) {
  var e = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
  }
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function ke() {}
var Mt = {
    d: {
      f: ke,
      r: function() {
        throw Error(rf(522))
      },
      D: ke,
      C: ke,
      L: ke,
      m: ke,
      X: ke,
      S: ke,
      M: ke
    },
    p: 0,
    findDOMNode: null
  },
  Ix = Symbol.for("react.portal");

function ty(t, e, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ix,
    key: a == null ? null : "" + a,
    children: t,
    containerInfo: e,
    implementation: n
  }
}
var io = Wx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

function Lc(t, e) {
  if (t === "font") return "";
  if (typeof e == "string") return e === "use-credentials" ? e : ""
}
Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Mt;
Dt.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(rf(299));
  return ty(t, e, null, n)
};
Dt.flushSync = function(t) {
  var e = io.T,
    n = Mt.p;
  try {
    if (io.T = null, Mt.p = 2, t) return t()
  } finally {
    io.T = e, Mt.p = n, Mt.d.f()
  }
};
Dt.preconnect = function(t, e) {
  typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Mt.d.C(t, e))
};
Dt.prefetchDNS = function(t) {
  typeof t == "string" && Mt.d.D(t)
};
Dt.preinit = function(t, e) {
  if (typeof t == "string" && e && typeof e.as == "string") {
    var n = e.as,
      a = Lc(n, e.crossOrigin),
      o = typeof e.integrity == "string" ? e.integrity : void 0,
      s = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
    n === "style" ? Mt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
      crossOrigin: a,
      integrity: o,
      fetchPriority: s
    }) : n === "script" && Mt.d.X(t, {
      crossOrigin: a,
      integrity: o,
      fetchPriority: s,
      nonce: typeof e.nonce == "string" ? e.nonce : void 0
    })
  }
};
Dt.preinitModule = function(t, e) {
  if (typeof t == "string")
    if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var n = Lc(e.as, e.crossOrigin);
        Mt.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        })
      }
    } else e == null && Mt.d.M(t)
};
Dt.preload = function(t, e) {
  if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
    var n = e.as,
      a = Lc(n, e.crossOrigin);
    Mt.d.L(t, n, {
      crossOrigin: a,
      integrity: typeof e.integrity == "string" ? e.integrity : void 0,
      nonce: typeof e.nonce == "string" ? e.nonce : void 0,
      type: typeof e.type == "string" ? e.type : void 0,
      fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
      referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
      imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
      imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
      media: typeof e.media == "string" ? e.media : void 0
    })
  }
};
Dt.preloadModule = function(t, e) {
  if (typeof t == "string")
    if (e) {
      var n = Lc(e.as, e.crossOrigin);
      Mt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })
    } else Mt.d.m(t)
};
Dt.requestFormReset = function(t) {
  Mt.d.r(t)
};
Dt.unstable_batchedUpdates = function(t, e) {
  return t(e)
};
Dt.useFormState = function(t, e, n) {
  return io.H.useFormState(t, e, n)
};
Dt.useFormStatus = function() {
  return io.H.useHostTransitionStatus()
};
Dt.version = "19.1.1";

function df() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df)
  } catch (t) {
    console.error(t)
  }
}
df(), lf.exports = Dt;
var ey = lf.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt = Ox,
  uf = F,
  ny = ey;

function T(t) {
  var e = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
  }
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function mf(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Xo(t) {
  var e = t,
    n = t;
  if (t.alternate)
    for (; e.return;) e = e.return;
  else {
    t = e;
    do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
  }
  return e.tag === 3 ? n : null
}

function pf(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
  }
  return null
}

function ou(t) {
  if (Xo(t) !== t) throw Error(T(188))
}

function ay(t) {
  var e = t.alternate;
  if (!e) {
    if (e = Xo(t), e === null) throw Error(T(188));
    return e !== t ? null : t
  }
  for (var n = t, a = e;;) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (a = o.return, a !== null) {
        n = a;
        continue
      }
      break
    }
    if (o.child === s.child) {
      for (s = o.child; s;) {
        if (s === n) return ou(o), t;
        if (s === a) return ou(o), e;
        s = s.sibling
      }
      throw Error(T(188))
    }
    if (n.return !== a.return) n = o, a = s;
    else {
      for (var c = !1, i = o.child; i;) {
        if (i === n) {
          c = !0, n = o, a = s;
          break
        }
        if (i === a) {
          c = !0, a = o, n = s;
          break
        }
        i = i.sibling
      }
      if (!c) {
        for (i = s.child; i;) {
          if (i === n) {
            c = !0, n = s, a = o;
            break
          }
          if (i === a) {
            c = !0, a = s, n = o;
            break
          }
          i = i.sibling
        }
        if (!c) throw Error(T(189))
      }
    }
    if (n.alternate !== a) throw Error(T(190))
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? t : e
}

function ff(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t;
  for (t = t.child; t !== null;) {
    if (e = ff(t), e !== null) return e;
    t = t.sibling
  }
  return null
}
var W = Object.assign,
  oy = Symbol.for("react.element"),
  Ss = Symbol.for("react.transitional.element"),
  to = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  hf = Symbol.for("react.strict_mode"),
  il = Symbol.for("react.profiler"),
  sy = Symbol.for("react.provider"),
  xf = Symbol.for("react.consumer"),
  Fe = Symbol.for("react.context"),
  Fr = Symbol.for("react.forward_ref"),
  ll = Symbol.for("react.suspense"),
  rl = Symbol.for("react.suspense_list"),
  Nr = Symbol.for("react.memo"),
  Ye = Symbol.for("react.lazy"),
  dl = Symbol.for("react.activity"),
  cy = Symbol.for("react.memo_cache_sentinel"),
  su = Symbol.iterator;

function Ga(t) {
  return t === null || typeof t != "object" ? null : (t = su && t[su] || t["@@iterator"], typeof t == "function" ? t : null)
}
var iy = Symbol.for("react.client.reference");

function ul(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.$$typeof === iy ? null : t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Jn:
      return "Fragment";
    case il:
      return "Profiler";
    case hf:
      return "StrictMode";
    case ll:
      return "Suspense";
    case rl:
      return "SuspenseList";
    case dl:
      return "Activity"
  }
  if (typeof t == "object") switch (t.$$typeof) {
    case to:
      return "Portal";
    case Fe:
      return (t.displayName || "Context") + ".Provider";
    case xf:
      return (t._context.displayName || "Context") + ".Consumer";
    case Fr:
      var e = t.render;
      return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
    case Nr:
      return e = t.displayName || null, e !== null ? e : ul(t.type) || "Memo";
    case Ye:
      e = t._payload, t = t._init;
      try {
        return ul(t(e))
      } catch {}
  }
  return null
}
var eo = Array.isArray,
  O = uf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  P = ny.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  An = {
    pending: !1,
    data: null,
    method: null,
    action: null
  },
  ml = [],
  $n = -1;

function ge(t) {
  return {
    current: t
  }
}

function St(t) {
  0 > $n || (t.current = ml[$n], ml[$n] = null, $n--)
}

function et(t, e) {
  $n++, ml[$n] = t.current, t.current = e
}
var fe = ge(null),
  Ao = ge(null),
  en = ge(null),
  tc = ge(null);

function ec(t, e) {
  switch (et(en, e), et(Ao, t), et(fe, null), e.nodeType) {
    case 9:
    case 11:
      t = (t = e.documentElement) && (t = t.namespaceURI) ? dm(t) : 0;
      break;
    default:
      if (t = e.tagName, e = e.namespaceURI) e = dm(e), t = V1(e, t);
      else switch (t) {
        case "svg":
          t = 1;
          break;
        case "math":
          t = 2;
          break;
        default:
          t = 0
      }
  }
  St(fe), et(fe, t)
}

function ba() {
  St(fe), St(Ao), St(en)
}

function pl(t) {
  t.memoizedState !== null && et(tc, t);
  var e = fe.current,
    n = V1(e, t.type);
  e !== n && (et(Ao, t), et(fe, n))
}

function nc(t) {
  Ao.current === t && (St(fe), St(Ao)), tc.current === t && (St(tc), _o._currentValue = An)
}
var fl = Object.prototype.hasOwnProperty,
  Ar = xt.unstable_scheduleCallback,
  mi = xt.unstable_cancelCallback,
  ly = xt.unstable_shouldYield,
  ry = xt.unstable_requestPaint,
  he = xt.unstable_now,
  dy = xt.unstable_getCurrentPriorityLevel,
  yf = xt.unstable_ImmediatePriority,
  vf = xt.unstable_UserBlockingPriority,
  ac = xt.unstable_NormalPriority,
  uy = xt.unstable_LowPriority,
  gf = xt.unstable_IdlePriority,
  my = xt.log,
  py = xt.unstable_setDisableYieldValue,
  Zo = null,
  Pt = null;

function Je(t) {
  if (typeof my == "function" && py(t), Pt && typeof Pt.setStrictMode == "function") try {
    Pt.setStrictMode(Zo, t)
  } catch {}
}
var qt = Math.clz32 ? Math.clz32 : xy,
  fy = Math.log,
  hy = Math.LN2;

function xy(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (fy(t) / hy | 0) | 0
}
var js = 256,
  bs = 4194304;

function jn(t) {
  var e = t & 42;
  if (e !== 0) return e;
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return t & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return t
  }
}

function Pc(t, e, n) {
  var a = t.pendingLanes;
  if (a === 0) return 0;
  var o = 0,
    s = t.suspendedLanes,
    c = t.pingedLanes;
  t = t.warmLanes;
  var i = a & 134217727;
  return i !== 0 ? (a = i & ~s, a !== 0 ? o = jn(a) : (c &= i, c !== 0 ? o = jn(c) : n || (n = i & ~t, n !== 0 && (o = jn(n))))) : (i = a & ~s, i !== 0 ? o = jn(i) : c !== 0 ? o = jn(c) : n || (n = a & ~t, n !== 0 && (o = jn(n)))), o === 0 ? 0 : e !== 0 && e !== o && !(e & s) && (s = o & -o, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : o
}

function Ko(t, e) {
  return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
}

function yy(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return e + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function Sf() {
  var t = js;
  return js <<= 1, !(js & 4194048) && (js = 256), t
}

function jf() {
  var t = bs;
  return bs <<= 1, !(bs & 62914560) && (bs = 4194304), t
}

function pi(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e
}

function Qo(t, e) {
  t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
}

function vy(t, e, n, a, o, s) {
  var c = t.pendingLanes;
  t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
  var i = t.entanglements,
    r = t.expirationTimes,
    d = t.hiddenUpdates;
  for (n = c & ~n; 0 < n;) {
    var u = 31 - qt(n),
      m = 1 << u;
    i[u] = 0, r[u] = -1;
    var p = d[u];
    if (p !== null)
      for (d[u] = null, u = 0; u < p.length; u++) {
        var f = p[u];
        f !== null && (f.lane &= -536870913)
      }
    n &= ~m
  }
  a !== 0 && bf(t, a, 0), s !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(c & ~e))
}

function bf(t, e, n) {
  t.pendingLanes |= e, t.suspendedLanes &= ~e;
  var a = 31 - qt(e);
  t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 4194090
}

function wf(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n;) {
    var a = 31 - qt(n),
      o = 1 << a;
    o & e | t[a] & e && (t[a] |= e), n &= ~o
  }
}

function Er(t) {
  switch (t) {
    case 2:
      t = 1;
      break;
    case 8:
      t = 4;
      break;
    case 32:
      t = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      t = 128;
      break;
    case 268435456:
      t = 134217728;
      break;
    default:
      t = 0
  }
  return t
}

function Cr(t) {
  return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2
}

function Tf() {
  var t = P.p;
  return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : q1(t.type))
}

function gy(t, e) {
  var n = P.p;
  try {
    return P.p = t, e()
  } finally {
    P.p = n
  }
}
var hn = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + hn,
  Ht = "__reactProps$" + hn,
  _a = "__reactContainer$" + hn,
  hl = "__reactEvents$" + hn,
  Sy = "__reactListeners$" + hn,
  jy = "__reactHandles$" + hn,
  cu = "__reactResources$" + hn,
  Jo = "__reactMarker$" + hn;

function Mr(t) {
  delete t[Nt], delete t[Ht], delete t[hl], delete t[Sy], delete t[jy]
}

function Wn(t) {
  var e = t[Nt];
  if (e) return e;
  for (var n = t.parentNode; n;) {
    if (e = n[_a] || n[Nt]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = pm(t); t !== null;) {
          if (n = t[Nt]) return n;
          t = pm(t)
        }
      return e
    }
    t = n, n = t.parentNode
  }
  return null
}

function Ua(t) {
  if (t = t[Nt] || t[_a]) {
    var e = t.tag;
    if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
  }
  return null
}

function no(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
  throw Error(T(33))
}

function pa(t) {
  var e = t[cu];
  return e || (e = t[cu] = {
    hoistableStyles: new Map,
    hoistableScripts: new Map
  }), e
}

function vt(t) {
  t[Jo] = !0
}
var Ff = new Set,
  Nf = {};

function Bn(t, e) {
  wa(t, e), wa(t + "Capture", e)
}

function wa(t, e) {
  for (Nf[t] = e, t = 0; t < e.length; t++) Ff.add(e[t])
}
var by = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
  iu = {},
  lu = {};

function wy(t) {
  return fl.call(lu, t) ? !0 : fl.call(iu, t) ? !1 : by.test(t) ? lu[t] = !0 : (iu[t] = !0, !1)
}

function Us(t, e, n) {
  if (wy(e))
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var a = e.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(e);
            return
          }
      }
      t.setAttribute(e, "" + n)
    }
}

function ws(t, e, n) {
  if (n === null) t.removeAttribute(e);
  else {
    switch (typeof n) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(e);
        return
    }
    t.setAttribute(e, "" + n)
  }
}

function je(t, e, n, a) {
  if (a === null) t.removeAttribute(n);
  else {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(n);
        return
    }
    t.setAttributeNS(e, n, "" + a)
  }
}
var fi, ru;

function Zn(t) {
  if (fi === void 0) try {
    throw Error()
  } catch (n) {
    var e = n.stack.trim().match(/\n( *(at )?)/);
    fi = e && e[1] || "", ru = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
  }
  return `
` + fi + t + ru
}
var hi = !1;

function xi(t, e) {
  if (!t || hi) return "";
  hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var a = {
      DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var m = function() {
              throw Error()
            };
            if (Object.defineProperty(m.prototype, "props", {
                set: function() {
                  throw Error()
                }
              }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(m, [])
              } catch (f) {
                var p = f
              }
              Reflect.construct(t, [], m)
            } else {
              try {
                m.call()
              } catch (f) {
                p = f
              }
              t.call(m.prototype)
            }
          } else {
            try {
              throw Error()
            } catch (f) {
              p = f
            }(m = t()) && typeof m.catch == "function" && m.catch(function() {})
          }
        } catch (f) {
          if (f && p && typeof f.stack == "string") return [f.stack, p.stack]
        }
        return [null, null]
      }
    };
    a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
    o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
      value: "DetermineComponentFrameRoot"
    });
    var s = a.DetermineComponentFrameRoot(),
      c = s[0],
      i = s[1];
    if (c && i) {
      var r = c.split(`
`),
        d = i.split(`
`);
      for (o = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot");) a++;
      for (; o < d.length && !d[o].includes("DetermineComponentFrameRoot");) o++;
      if (a === r.length || o === d.length)
        for (a = r.length - 1, o = d.length - 1; 1 <= a && 0 <= o && r[a] !== d[o];) o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (r[a] !== d[o]) {
          if (a !== 1 || o !== 1)
            do
              if (a--, o--, 0 > o || r[a] !== d[o]) {
                var u = `
` + r[a].replace(" at new ", " at ");
                return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)), u
              } while (1 <= a && 0 <= o);
          break
        }
    }
  } finally {
    hi = !1, Error.prepareStackTrace = n
  }
  return (n = t ? t.displayName || t.name : "") ? Zn(n) : ""
}

function Ty(t) {
  switch (t.tag) {
    case 26:
    case 27:
    case 5:
      return Zn(t.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 15:
      return xi(t.type, !1);
    case 11:
      return xi(t.type.render, !1);
    case 1:
      return xi(t.type, !0);
    case 31:
      return Zn("Activity");
    default:
      return ""
  }
}

function du(t) {
  try {
    var e = "";
    do e += Ty(t), t = t.return; while (t);
    return e
  } catch (n) {
    return `
Error generating stack: ` + n.message + `
` + n.stack
  }
}

function Wt(t) {
  switch (typeof t) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return ""
  }
}

function Af(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function Fy(t) {
  var e = Af(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    a = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      s = n.set;
    return Object.defineProperty(t, e, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(c) {
        a = "" + c, s.call(this, c)
      }
    }), Object.defineProperty(t, e, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return a
      },
      setValue: function(c) {
        a = "" + c
      },
      stopTracking: function() {
        t._valueTracker = null, delete t[e]
      }
    }
  }
}

function oc(t) {
  t._valueTracker || (t._valueTracker = Fy(t))
}

function Ef(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    a = "";
  return t && (a = Af(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1
}

function sc(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body
  } catch {
    return t.body
  }
}
var Ny = /[\n"\\]/g;

function ee(t) {
  return t.replace(Ny, function(e) {
    return "\\" + e.charCodeAt(0).toString(16) + " "
  })
}

function xl(t, e, n, a, o, s, c, i) {
  t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Wt(e)) : t.value !== "" + Wt(e) && (t.value = "" + Wt(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? yl(t, c, Wt(e)) : n != null ? yl(t, c, Wt(n)) : a != null && t.removeAttribute("value"), o == null && s != null && (t.defaultChecked = !!s), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + Wt(i) : t.removeAttribute("name")
}

function Cf(t, e, n, a, o, s, c, i) {
  if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
    if (!(s !== "submit" && s !== "reset" || e != null)) return;
    n = n != null ? "" + Wt(n) : "", e = e != null ? "" + Wt(e) : n, i || e === t.value || (t.value = e), t.defaultValue = e
  }
  a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c)
}

function yl(t, e, n) {
  e === "number" && sc(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
}

function fa(t, e, n, a) {
  if (t = t.options, e) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++) o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && a && (t[n].defaultSelected = !0)
  } else {
    for (n = "" + Wt(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        t[o].selected = !0, a && (t[o].defaultSelected = !0);
        return
      }
      e !== null || t[o].disabled || (e = t[o])
    }
    e !== null && (e.selected = !0)
  }
}

function Mf(t, e, n) {
  if (e != null && (e = "" + Wt(e), e !== t.value && (t.value = e), n == null)) {
    t.defaultValue !== e && (t.defaultValue = e);
    return
  }
  t.defaultValue = n != null ? "" + Wt(n) : ""
}

function Df(t, e, n, a) {
  if (e == null) {
    if (a != null) {
      if (n != null) throw Error(T(92));
      if (eo(a)) {
        if (1 < a.length) throw Error(T(93));
        a = a[0]
      }
      n = a
    }
    n == null && (n = ""), e = n
  }
  n = Wt(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a)
}

function Ta(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return
    }
  }
  t.textContent = e
}
var Ay = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

function uu(t, e, n) {
  var a = e.indexOf("--") === 0;
  n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Ay.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
}

function Rf(t, e, n) {
  if (e != null && typeof e != "object") throw Error(T(62));
  if (t = t.style, n != null) {
    for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
    for (var o in e) a = e[o], e.hasOwnProperty(o) && n[o] !== a && uu(t, o, a)
  } else
    for (var s in e) e.hasOwnProperty(s) && uu(t, s, e[s])
}

function Dr(t) {
  if (t.indexOf("-") === -1) return !1;
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var Ey = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]),
  Cy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

function Bs(t) {
  return Cy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
}
var vl = null;

function Rr(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var In = null,
  ha = null;

function mu(t) {
  var e = Ua(t);
  if (e && (t = e.stateNode)) {
    var n = t[Ht] || null;
    t: switch (t = e.stateNode, e.type) {
      case "input":
        if (xl(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
          for (n = t; n.parentNode;) n = n.parentNode;
          for (n = n.querySelectorAll('input[name="' + ee("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
            var a = n[e];
            if (a !== t && a.form === t.form) {
              var o = a[Ht] || null;
              if (!o) throw Error(T(90));
              xl(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
            }
          }
          for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && Ef(a)
        }
        break t;
      case "textarea":
        Mf(t, n.value, n.defaultValue);
        break t;
      case "select":
        e = n.value, e != null && fa(t, !!n.multiple, e, !1)
    }
  }
}
var yi = !1;

function Vf(t, e, n) {
  if (yi) return t(e, n);
  yi = !0;
  try {
    var a = t(e);
    return a
  } finally {
    if (yi = !1, (In !== null || ha !== null) && (Wc(), In && (e = In, t = ha, ha = In = null, mu(e), t)))
      for (e = 0; e < t.length; e++) mu(t[e])
  }
}

function Eo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var a = n[Ht] || null;
  if (a === null) return null;
  n = a[e];
  t: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
      break t;
    default:
      t = !1
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(T(231, e, typeof n));
  return n
}
var Oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  gl = !1;
if (Oe) try {
  var Xa = {};
  Object.defineProperty(Xa, "passive", {
    get: function() {
      gl = !0
    }
  }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa)
} catch {
  gl = !1
}
var $e = null,
  Vr = null,
  ks = null;

function Of() {
  if (ks) return ks;
  var t, e = Vr,
    n = e.length,
    a, o = "value" in $e ? $e.value : $e.textContent,
    s = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++);
  var c = n - t;
  for (a = 1; a <= c && e[n - a] === o[s - a]; a++);
  return ks = o.slice(t, 1 < a ? 1 - a : void 0)
}

function Ls(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function Ts() {
  return !0
}

function pu() {
  return !1
}

function _t(t) {
  function e(n, a, o, s, c) {
    this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = s, this.target = c, this.currentTarget = null;
    for (var i in t) t.hasOwnProperty(i) && (n = t[i], this[i] = n ? n(s) : s[i]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ts : pu, this.isPropagationStopped = pu, this
  }
  return W(e.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ts)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ts)
    },
    persist: function() {},
    isPersistent: Ts
  }), e
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  qc = _t(kn),
  $o = W({}, kn, {
    view: 0,
    detail: 0
  }),
  My = _t($o),
  vi, gi, Za, Yc = W({}, $o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Or,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Za && (Za && t.type === "mousemove" ? (vi = t.screenX - Za.screenX, gi = t.screenY - Za.screenY) : gi = vi = 0, Za = t), vi)
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : gi
    }
  }),
  fu = _t(Yc),
  Dy = W({}, Yc, {
    dataTransfer: 0
  }),
  Ry = _t(Dy),
  Vy = W({}, $o, {
    relatedTarget: 0
  }),
  Si = _t(Vy),
  Oy = W({}, kn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hy = _t(Oy),
  zy = W({}, kn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData
    }
  }),
  _y = _t(zy),
  Uy = W({}, kn, {
    data: 0
  }),
  hu = _t(Uy),
  By = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Ly = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function Py(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Ly[t]) ? !!e[t] : !1
}

function Or() {
  return Py
}
var qy = W({}, $o, {
    key: function(t) {
      if (t.key) {
        var e = By[t.key] || t.key;
        if (e !== "Unidentified") return e
      }
      return t.type === "keypress" ? (t = Ls(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ky[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Or,
    charCode: function(t) {
      return t.type === "keypress" ? Ls(t) : 0
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
      return t.type === "keypress" ? Ls(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
  }),
  Yy = _t(qy),
  Gy = W({}, Yc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  xu = _t(Gy),
  Xy = W({}, $o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Or
  }),
  Zy = _t(Xy),
  Ky = W({}, kn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Qy = _t(Ky),
  Jy = W({}, Yc, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  $y = _t(Jy),
  Wy = W({}, kn, {
    newState: 0,
    oldState: 0
  }),
  Iy = _t(Wy),
  tv = [9, 13, 27, 32],
  Hr = Oe && "CompositionEvent" in window,
  lo = null;
Oe && "documentMode" in document && (lo = document.documentMode);
var ev = Oe && "TextEvent" in window && !lo,
  Hf = Oe && (!Hr || lo && 8 < lo && 11 >= lo),
  yu = " ",
  vu = !1;

function zf(t, e) {
  switch (t) {
    case "keyup":
      return tv.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function _f(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var ta = !1;

function nv(t, e) {
  switch (t) {
    case "compositionend":
      return _f(e);
    case "keypress":
      return e.which !== 32 ? null : (vu = !0, yu);
    case "textInput":
      return t = e.data, t === yu && vu ? null : t;
    default:
      return null
  }
}

function av(t, e) {
  if (ta) return t === "compositionend" || !Hr && zf(t, e) ? (t = Of(), ks = Vr = $e = null, ta = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which)
      }
      return null;
    case "compositionend":
      return Hf && e.locale !== "ko" ? null : e.data;
    default:
      return null
  }
}
var ov = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function gu(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!ov[t.type] : e === "textarea"
}

function Uf(t, e, n, a) {
  In ? ha ? ha.push(a) : ha = [a] : In = a, e = wc(e, "onChange"), 0 < e.length && (n = new qc("onChange", "change", null, n, a), t.push({
    event: n,
    listeners: e
  }))
}
var ro = null,
  Co = null;

function sv(t) {
  M1(t, 0)
}

function Gc(t) {
  var e = no(t);
  if (Ef(e)) return t
}

function Su(t, e) {
  if (t === "change") return e
}
var Bf = !1;
if (Oe) {
  var ji;
  if (Oe) {
    var bi = "oninput" in document;
    if (!bi) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"), bi = typeof ju.oninput == "function"
    }
    ji = bi
  } else ji = !1;
  Bf = ji && (!document.documentMode || 9 < document.documentMode)
}

function bu() {
  ro && (ro.detachEvent("onpropertychange", kf), Co = ro = null)
}

function kf(t) {
  if (t.propertyName === "value" && Gc(Co)) {
    var e = [];
    Uf(e, Co, t, Rr(t)), Vf(sv, e)
  }
}

function cv(t, e, n) {
  t === "focusin" ? (bu(), ro = e, Co = n, ro.attachEvent("onpropertychange", kf)) : t === "focusout" && bu()
}

function iv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown") return Gc(Co)
}

function lv(t, e) {
  if (t === "click") return Gc(e)
}

function rv(t, e) {
  if (t === "input" || t === "change") return Gc(e)
}

function dv(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Zt = typeof Object.is == "function" ? Object.is : dv;

function Mo(t, e) {
  if (Zt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
  var n = Object.keys(t),
    a = Object.keys(e);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var o = n[a];
    if (!fl.call(e, o) || !Zt(t[o], e[o])) return !1
  }
  return !0
}

function wu(t) {
  for (; t && t.firstChild;) t = t.firstChild;
  return t
}

function Tu(t, e) {
  var n = wu(t);
  t = 0;
  for (var a; n;) {
    if (n.nodeType === 3) {
      if (a = t + n.textContent.length, t <= e && a >= e) return {
        node: n,
        offset: e - t
      };
      t = a
    }
    t: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break t
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = wu(n)
  }
}

function Lf(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Lf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function Pf(t) {
  t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
  for (var e = sc(t.document); e instanceof t.HTMLIFrameElement;) {
    try {
      var n = typeof e.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) t = e.contentWindow;
    else break;
    e = sc(t.document)
  }
  return e
}

function zr(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
var uv = Oe && "documentMode" in document && 11 >= document.documentMode,
  ea = null,
  Sl = null,
  uo = null,
  jl = !1;

function Fu(t, e, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jl || ea == null || ea !== sc(a) || (a = ea, "selectionStart" in a && zr(a) ? a = {
    start: a.selectionStart,
    end: a.selectionEnd
  } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
    anchorNode: a.anchorNode,
    anchorOffset: a.anchorOffset,
    focusNode: a.focusNode,
    focusOffset: a.focusOffset
  }), uo && Mo(uo, a) || (uo = a, a = wc(Sl, "onSelect"), 0 < a.length && (e = new qc("onSelect", "select", null, e, n), t.push({
    event: e,
    listeners: a
  }), e.target = ea)))
}

function gn(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var na = {
    animationend: gn("Animation", "AnimationEnd"),
    animationiteration: gn("Animation", "AnimationIteration"),
    animationstart: gn("Animation", "AnimationStart"),
    transitionrun: gn("Transition", "TransitionRun"),
    transitionstart: gn("Transition", "TransitionStart"),
    transitioncancel: gn("Transition", "TransitionCancel"),
    transitionend: gn("Transition", "TransitionEnd")
  },
  wi = {},
  qf = {};
Oe && (qf = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);

function Ln(t) {
  if (wi[t]) return wi[t];
  if (!na[t]) return t;
  var e = na[t],
    n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in qf) return wi[t] = e[n];
  return t
}
var Yf = Ln("animationend"),
  Gf = Ln("animationiteration"),
  Xf = Ln("animationstart"),
  mv = Ln("transitionrun"),
  pv = Ln("transitionstart"),
  fv = Ln("transitioncancel"),
  Zf = Ln("transitionend"),
  Kf = new Map,
  bl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
bl.push("scrollEnd");

function de(t, e) {
  Kf.set(t, e), Bn(e, [t])
}
var Nu = new WeakMap;

function ne(t, e) {
  if (typeof t == "object" && t !== null) {
    var n = Nu.get(t);
    return n !== void 0 ? n : (e = {
      value: t,
      source: e,
      stack: du(e)
    }, Nu.set(t, e), e)
  }
  return {
    value: t,
    source: e,
    stack: du(e)
  }
}
var $t = [],
  aa = 0,
  _r = 0;

function Xc() {
  for (var t = aa, e = _r = aa = 0; e < t;) {
    var n = $t[e];
    $t[e++] = null;
    var a = $t[e];
    $t[e++] = null;
    var o = $t[e];
    $t[e++] = null;
    var s = $t[e];
    if ($t[e++] = null, a !== null && o !== null) {
      var c = a.pending;
      c === null ? o.next = o : (o.next = c.next, c.next = o), a.pending = o
    }
    s !== 0 && Qf(n, o, s)
  }
}

function Zc(t, e, n, a) {
  $t[aa++] = t, $t[aa++] = e, $t[aa++] = n, $t[aa++] = a, _r |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
}

function Ur(t, e, n, a) {
  return Zc(t, e, n, a), cc(t)
}

function Ba(t, e) {
  return Zc(t, null, null, e), cc(t)
}

function Qf(t, e, n) {
  t.lanes |= n;
  var a = t.alternate;
  a !== null && (a.lanes |= n);
  for (var o = !1, s = t.return; s !== null;) s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (o = !0)), t = s, s = s.return;
  return t.tag === 3 ? (s = t.stateNode, o && e !== null && (o = 31 - qt(n), t = s.hiddenUpdates, a = t[o], a === null ? t[o] = [e] : a.push(e), e.lane = n | 536870912), s) : null
}

function cc(t) {
  if (50 < jo) throw jo = 0, ql = null, Error(T(185));
  for (var e = t.return; e !== null;) t = e, e = t.return;
  return t.tag === 3 ? t.stateNode : null
}
var oa = {};

function hv(t, e, n, a) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Lt(t, e, n, a) {
  return new hv(t, e, n, a)
}

function Br(t) {
  return t = t.prototype, !(!t || !t.isReactComponent)
}

function Me(t, e) {
  var n = t.alternate;
  return n === null ? (n = Lt(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
    lanes: e.lanes,
    firstContext: e.firstContext
  }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
}

function Jf(t, e) {
  t.flags &= 65011714;
  var n = t.alternate;
  return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
    lanes: e.lanes,
    firstContext: e.firstContext
  }), t
}

function Ps(t, e, n, a, o, s) {
  var c = 0;
  if (a = t, typeof t == "function") Br(t) && (c = 1);
  else if (typeof t == "string") c = y2(t, n, fe.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
  else t: switch (t) {
    case dl:
      return t = Lt(31, n, e, o), t.elementType = dl, t.lanes = s, t;
    case Jn:
      return En(n.children, o, s, e);
    case hf:
      c = 8, o |= 24;
      break;
    case il:
      return t = Lt(12, n, e, o | 2), t.elementType = il, t.lanes = s, t;
    case ll:
      return t = Lt(13, n, e, o), t.elementType = ll, t.lanes = s, t;
    case rl:
      return t = Lt(19, n, e, o), t.elementType = rl, t.lanes = s, t;
    default:
      if (typeof t == "object" && t !== null) switch (t.$$typeof) {
        case sy:
        case Fe:
          c = 10;
          break t;
        case xf:
          c = 9;
          break t;
        case Fr:
          c = 11;
          break t;
        case Nr:
          c = 14;
          break t;
        case Ye:
          c = 16, a = null;
          break t
      }
      c = 29, n = Error(T(130, t === null ? "null" : typeof t, "")), a = null
  }
  return e = Lt(c, n, e, o), e.elementType = t, e.type = a, e.lanes = s, e
}

function En(t, e, n, a) {
  return t = Lt(7, t, a, e), t.lanes = n, t
}

function Ti(t, e, n) {
  return t = Lt(6, t, null, e), t.lanes = n, t
}

function Fi(t, e, n) {
  return e = Lt(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
    containerInfo: t.containerInfo,
    pendingChildren: null,
    implementation: t.implementation
  }, e
}
var sa = [],
  ca = 0,
  ic = null,
  lc = 0,
  It = [],
  te = 0,
  Cn = null,
  Ne = 1,
  Ae = "";

function bn(t, e) {
  sa[ca++] = lc, sa[ca++] = ic, ic = t, lc = e
}

function $f(t, e, n) {
  It[te++] = Ne, It[te++] = Ae, It[te++] = Cn, Cn = t;
  var a = Ne;
  t = Ae;
  var o = 32 - qt(a) - 1;
  a &= ~(1 << o), n += 1;
  var s = 32 - qt(e) + o;
  if (30 < s) {
    var c = o - o % 5;
    s = (a & (1 << c) - 1).toString(32), a >>= c, o -= c, Ne = 1 << 32 - qt(e) + o | n << o | a, Ae = s + t
  } else Ne = 1 << s | n << o | a, Ae = t
}

function kr(t) {
  t.return !== null && (bn(t, 1), $f(t, 1, 0))
}

function Lr(t) {
  for (; t === ic;) ic = sa[--ca], sa[ca] = null, lc = sa[--ca], sa[ca] = null;
  for (; t === Cn;) Cn = It[--te], It[te] = null, Ae = It[--te], It[te] = null, Ne = It[--te], It[te] = null
}
var Ct = null,
  ct = null,
  L = !1,
  Mn = null,
  me = !1,
  wl = Error(T(519));

function Hn(t) {
  var e = Error(T(418, ""));
  throw Do(ne(e, t)), wl
}

function Au(t) {
  var e = t.stateNode,
    n = t.type,
    a = t.memoizedProps;
  switch (e[Nt] = t, e[Ht] = a, n) {
    case "dialog":
      _("cancel", e), _("close", e);
      break;
    case "iframe":
    case "object":
    case "embed":
      _("load", e);
      break;
    case "video":
    case "audio":
      for (n = 0; n < Oo.length; n++) _(Oo[n], e);
      break;
    case "source":
      _("error", e);
      break;
    case "img":
    case "image":
    case "link":
      _("error", e), _("load", e);
      break;
    case "details":
      _("toggle", e);
      break;
    case "input":
      _("invalid", e), Cf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), oc(e);
      break;
    case "select":
      _("invalid", e);
      break;
    case "textarea":
      _("invalid", e), Df(e, a.value, a.defaultValue, a.children), oc(e)
  }
  n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || R1(e.textContent, n) ? (a.popover != null && (_("beforetoggle", e), _("toggle", e)), a.onScroll != null && _("scroll", e), a.onScrollEnd != null && _("scrollend", e), a.onClick != null && (e.onclick = ei), e = !0) : e = !1, e || Hn(t)
}

function Eu(t) {
  for (Ct = t.return; Ct;) switch (Ct.tag) {
    case 5:
    case 13:
      me = !1;
      return;
    case 27:
    case 3:
      me = !0;
      return;
    default:
      Ct = Ct.return
  }
}

function Ka(t) {
  if (t !== Ct) return !1;
  if (!L) return Eu(t), L = !0, !1;
  var e = t.tag,
    n;
  if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Ql(t.type, t.memoizedProps)), n = !n), n && ct && Hn(t), Eu(t), e === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(T(317));
    t: {
      for (t = t.nextSibling, e = 0; t;) {
        if (t.nodeType === 8)
          if (n = t.data, n === "/$") {
            if (e === 0) {
              ct = re(t.nextSibling);
              break t
            }
            e--
          } else n !== "$" && n !== "$!" && n !== "$?" || e++;
        t = t.nextSibling
      }
      ct = null
    }
  } else e === 27 ? (e = ct, xn(t.type) ? (t = Wl, Wl = null, ct = t) : ct = e) : ct = Ct ? re(t.stateNode.nextSibling) : null;
  return !0
}

function Wo() {
  ct = Ct = null, L = !1
}

function Cu() {
  var t = Mn;
  return t !== null && (Ot === null ? Ot = t : Ot.push.apply(Ot, t), Mn = null), t
}

function Do(t) {
  Mn === null ? Mn = [t] : Mn.push(t)
}
var Tl = ge(null),
  Pn = null,
  Ee = null;

function Xe(t, e, n) {
  et(Tl, e._currentValue), e._currentValue = n
}

function De(t) {
  t._currentValue = Tl.current, St(Tl)
}

function Fl(t, e, n) {
  for (; t !== null;) {
    var a = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
    t = t.return
  }
}

function Nl(t, e, n, a) {
  var o = t.child;
  for (o !== null && (o.return = t); o !== null;) {
    var s = o.dependencies;
    if (s !== null) {
      var c = o.child;
      s = s.firstContext;
      t: for (; s !== null;) {
        var i = s;
        s = o;
        for (var r = 0; r < e.length; r++)
          if (i.context === e[r]) {
            s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), Fl(s.return, n, t), a || (c = null);
            break t
          } s = i.next
      }
    } else if (o.tag === 18) {
      if (c = o.return, c === null) throw Error(T(341));
      c.lanes |= n, s = c.alternate, s !== null && (s.lanes |= n), Fl(c, n, t), c = null
    } else c = o.child;
    if (c !== null) c.return = o;
    else
      for (c = o; c !== null;) {
        if (c === t) {
          c = null;
          break
        }
        if (o = c.sibling, o !== null) {
          o.return = c.return, c = o;
          break
        }
        c = c.return
      }
    o = c
  }
}

function Io(t, e, n, a) {
  t = null;
  for (var o = e, s = !1; o !== null;) {
    if (!s) {
      if (o.flags & 524288) s = !0;
      else if (o.flags & 262144) break
    }
    if (o.tag === 10) {
      var c = o.alternate;
      if (c === null) throw Error(T(387));
      if (c = c.memoizedProps, c !== null) {
        var i = o.type;
        Zt(o.pendingProps.value, c.value) || (t !== null ? t.push(i) : t = [i])
      }
    } else if (o === tc.current) {
      if (c = o.alternate, c === null) throw Error(T(387));
      c.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(_o) : t = [_o])
    }
    o = o.return
  }
  t !== null && Nl(e, t, n, a), e.flags |= 262144
}

function rc(t) {
  for (t = t.firstContext; t !== null;) {
    if (!Zt(t.context._currentValue, t.memoizedValue)) return !0;
    t = t.next
  }
  return !1
}

function zn(t) {
  Pn = t, Ee = null, t = t.dependencies, t !== null && (t.firstContext = null)
}

function At(t) {
  return Wf(Pn, t)
}

function Fs(t, e) {
  return Pn === null && zn(t), Wf(t, e)
}

function Wf(t, e) {
  var n = e._currentValue;
  if (e = {
      context: e,
      memoizedValue: n,
      next: null
    }, Ee === null) {
    if (t === null) throw Error(T(308));
    Ee = e, t.dependencies = {
      lanes: 0,
      firstContext: e
    }, t.flags |= 524288
  } else Ee = Ee.next = e;
  return n
}
var xv = typeof AbortController < "u" ? AbortController : function() {
    var t = [],
      e = this.signal = {
        aborted: !1,
        addEventListener: function(n, a) {
          t.push(a)
        }
      };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n()
      })
    }
  },
  yv = xt.unstable_scheduleCallback,
  vv = xt.unstable_NormalPriority,
  ft = {
    $$typeof: Fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };

function Pr() {
  return {
    controller: new xv,
    data: new Map,
    refCount: 0
  }
}

function ts(t) {
  t.refCount--, t.refCount === 0 && yv(vv, function() {
    t.controller.abort()
  })
}
var mo = null,
  Al = 0,
  Fa = 0,
  xa = null;

function gv(t, e) {
  if (mo === null) {
    var n = mo = [];
    Al = 0, Fa = ud(), xa = {
      status: "pending",
      value: void 0,
      then: function(a) {
        n.push(a)
      }
    }
  }
  return Al++, e.then(Mu, Mu), e
}

function Mu() {
  if (--Al === 0 && mo !== null) {
    xa !== null && (xa.status = "fulfilled");
    var t = mo;
    mo = null, Fa = 0, xa = null;
    for (var e = 0; e < t.length; e++)(0, t[e])()
  }
}

function Sv(t, e) {
  var n = [],
    a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o)
      }
    };
  return t.then(function() {
    a.status = "fulfilled", a.value = e;
    for (var o = 0; o < n.length; o++)(0, n[o])(e)
  }, function(o) {
    for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++)(0, n[o])(void 0)
  }), a
}
var Du = O.S;
O.S = function(t, e) {
  typeof e == "object" && e !== null && typeof e.then == "function" && gv(t, e), Du !== null && Du(t, e)
};
var Dn = ge(null);

function qr() {
  var t = Dn.current;
  return t !== null ? t : Q.pooledCache
}

function qs(t, e) {
  e === null ? et(Dn, Dn.current) : et(Dn, e.pool)
}

function If() {
  var t = qr();
  return t === null ? null : {
    parent: ft._currentValue,
    pool: t
  }
}
var es = Error(T(460)),
  th = Error(T(474)),
  Kc = Error(T(542)),
  El = {
    then: function() {}
  };

function Ru(t) {
  return t = t.status, t === "fulfilled" || t === "rejected"
}

function Ns() {}

function eh(t, e, n) {
  switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ns, Ns), e = n), e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw t = e.reason, Ou(t), t;
    default:
      if (typeof e.status == "string") e.then(Ns, Ns);
      else {
        if (t = Q, t !== null && 100 < t.shellSuspendCounter) throw Error(T(482));
        t = e, t.status = "pending", t.then(function(a) {
          if (e.status === "pending") {
            var o = e;
            o.status = "fulfilled", o.value = a
          }
        }, function(a) {
          if (e.status === "pending") {
            var o = e;
            o.status = "rejected", o.reason = a
          }
        })
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Ou(t), t
      }
      throw po = e, es
  }
}
var po = null;

function Vu() {
  if (po === null) throw Error(T(459));
  var t = po;
  return po = null, t
}

function Ou(t) {
  if (t === es || t === Kc) throw Error(T(483))
}
var Ge = !1;

function Yr(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      lanes: 0,
      hiddenCallbacks: null
    },
    callbacks: null
  }
}

function Cl(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
    baseState: t.baseState,
    firstBaseUpdate: t.firstBaseUpdate,
    lastBaseUpdate: t.lastBaseUpdate,
    shared: t.shared,
    callbacks: null
  })
}

function nn(t) {
  return {
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function an(t, e, n) {
  var a = t.updateQueue;
  if (a === null) return null;
  if (a = a.shared, G & 2) {
    var o = a.pending;
    return o === null ? e.next = e : (e.next = o.next, o.next = e), a.pending = e, e = cc(t), Qf(t, null, n), e
  }
  return Zc(t, a, e, n), cc(t)
}

function fo(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
    var a = e.lanes;
    a &= t.pendingLanes, n |= a, e.lanes = n, wf(t, n)
  }
}

function Ni(t, e) {
  var n = t.updateQueue,
    a = t.alternate;
  if (a !== null && (a = a.updateQueue, n === a)) {
    var o = null,
      s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var c = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null
        };
        s === null ? o = s = c : s = s.next = c, n = n.next
      } while (n !== null);
      s === null ? o = s = e : s = s.next = e
    } else o = s = e;
    n = {
      baseState: a.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: a.shared,
      callbacks: a.callbacks
    }, t.updateQueue = n;
    return
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}
var Ml = !1;

function ho() {
  if (Ml) {
    var t = xa;
    if (t !== null) throw t
  }
}

function xo(t, e, n, a) {
  Ml = !1;
  var o = t.updateQueue;
  Ge = !1;
  var s = o.firstBaseUpdate,
    c = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var r = i,
      d = r.next;
    r.next = null, c === null ? s = d : c.next = d, c = r;
    var u = t.alternate;
    u !== null && (u = u.updateQueue, i = u.lastBaseUpdate, i !== c && (i === null ? u.firstBaseUpdate = d : i.next = d, u.lastBaseUpdate = r))
  }
  if (s !== null) {
    var m = o.baseState;
    c = 0, u = d = r = null, i = s;
    do {
      var p = i.lane & -536870913,
        f = p !== i.lane;
      if (f ? (k & p) === p : (a & p) === p) {
        p !== 0 && p === Fa && (Ml = !0), u !== null && (u = u.next = {
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: null,
          next: null
        });
        t: {
          var S = t,
            v = i;p = e;
          var b = n;
          switch (v.tag) {
            case 1:
              if (S = v.payload, typeof S == "function") {
                m = S.call(b, m, p);
                break t
              }
              m = S;
              break t;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = v.payload, p = typeof S == "function" ? S.call(b, m, p) : S, p == null) break t;
              m = W({}, m, p);
              break t;
            case 2:
              Ge = !0
          }
        }
        p = i.callback, p !== null && (t.flags |= 64, f && (t.flags |= 8192), f = o.callbacks, f === null ? o.callbacks = [p] : f.push(p))
      } else f = {
        lane: p,
        tag: i.tag,
        payload: i.payload,
        callback: i.callback,
        next: null
      }, u === null ? (d = u = f, r = m) : u = u.next = f, c |= p;
      if (i = i.next, i === null) {
        if (i = o.shared.pending, i === null) break;
        f = i, i = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
      }
    } while (!0);
    u === null && (r = m), o.baseState = r, o.firstBaseUpdate = d, o.lastBaseUpdate = u, s === null && (o.shared.lanes = 0), mn |= c, t.lanes = c, t.memoizedState = m
  }
}

function nh(t, e) {
  if (typeof t != "function") throw Error(T(191, t));
  t.call(e)
}

function ah(t, e) {
  var n = t.callbacks;
  if (n !== null)
    for (t.callbacks = null, t = 0; t < n.length; t++) nh(n[t], e)
}
var Na = ge(null),
  dc = ge(0);

function Hu(t, e) {
  t = _e, et(dc, t), et(Na, e), _e = t | e.baseLanes
}

function Dl() {
  et(dc, _e), et(Na, Na.current)
}

function Gr() {
  _e = dc.current, St(Na), St(dc)
}
var dn = 0,
  z = null,
  Z = null,
  ut = null,
  uc = !1,
  ya = !1,
  _n = !1,
  mc = 0,
  Ro = 0,
  va = null,
  jv = 0;

function lt() {
  throw Error(T(321))
}

function Xr(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Zt(t[n], e[n])) return !1;
  return !0
}

function Zr(t, e, n, a, o, s) {
  return dn = s, z = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? Oh : Hh, _n = !1, s = n(a, o), _n = !1, ya && (s = sh(e, n, a, o)), oh(t), s
}

function oh(t) {
  O.H = pc;
  var e = Z !== null && Z.next !== null;
  if (dn = 0, ut = Z = z = null, uc = !1, Ro = 0, va = null, e) throw Error(T(300));
  t === null || gt || (t = t.dependencies, t !== null && rc(t) && (gt = !0))
}

function sh(t, e, n, a) {
  z = t;
  var o = 0;
  do {
    if (ya && (va = null), Ro = 0, ya = !1, 25 <= o) throw Error(T(301));
    if (o += 1, ut = Z = null, t.updateQueue != null) {
      var s = t.updateQueue;
      s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0)
    }
    O.H = Ev, s = e(n, a)
  } while (ya);
  return s
}

function bv() {
  var t = O.H,
    e = t.useState()[0];
  return e = typeof e.then == "function" ? ns(e) : e, t = t.useState()[0], (Z !== null ? Z.memoizedState : null) !== t && (z.flags |= 1024), e
}

function Kr() {
  var t = mc !== 0;
  return mc = 0, t
}

function Qr(t, e, n) {
  e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
}

function Jr(t) {
  if (uc) {
    for (t = t.memoizedState; t !== null;) {
      var e = t.queue;
      e !== null && (e.pending = null), t = t.next
    }
    uc = !1
  }
  dn = 0, ut = Z = z = null, ya = !1, Ro = mc = 0, va = null
}

function Rt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ut === null ? z.memoizedState = ut = t : ut = ut.next = t, ut
}

function mt() {
  if (Z === null) {
    var t = z.alternate;
    t = t !== null ? t.memoizedState : null
  } else t = Z.next;
  var e = ut === null ? z.memoizedState : ut.next;
  if (e !== null) ut = e, Z = t;
  else {
    if (t === null) throw z.alternate === null ? Error(T(467)) : Error(T(310));
    Z = t, t = {
      memoizedState: Z.memoizedState,
      baseState: Z.baseState,
      baseQueue: Z.baseQueue,
      queue: Z.queue,
      next: null
    }, ut === null ? z.memoizedState = ut = t : ut = ut.next = t
  }
  return ut
}

function $r() {
  return {
    lastEffect: null,
    events: null,
    stores: null,
    memoCache: null
  }
}

function ns(t) {
  var e = Ro;
  return Ro += 1, va === null && (va = []), t = eh(va, t, e), e = z, (ut === null ? e.memoizedState : ut.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? Oh : Hh), t
}

function Qc(t) {
  if (t !== null && typeof t == "object") {
    if (typeof t.then == "function") return ns(t);
    if (t.$$typeof === Fe) return At(t)
  }
  throw Error(T(438, String(t)))
}

function Wr(t) {
  var e = null,
    n = z.updateQueue;
  if (n !== null && (e = n.memoCache), e == null) {
    var a = z.alternate;
    a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
      data: a.data.map(function(o) {
        return o.slice()
      }),
      index: 0
    })))
  }
  if (e == null && (e = {
      data: [],
      index: 0
    }), n === null && (n = $r(), z.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
    for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = cy;
  return e.index++, n
}

function He(t, e) {
  return typeof e == "function" ? e(t) : e
}

function Ys(t) {
  var e = mt();
  return Ir(e, Z, t)
}

function Ir(t, e, n) {
  var a = t.queue;
  if (a === null) throw Error(T(311));
  a.lastRenderedReducer = n;
  var o = t.baseQueue,
    s = a.pending;
  if (s !== null) {
    if (o !== null) {
      var c = o.next;
      o.next = s.next, s.next = c
    }
    e.baseQueue = o = s, a.pending = null
  }
  if (s = t.baseState, o === null) t.memoizedState = s;
  else {
    e = o.next;
    var i = c = null,
      r = null,
      d = e,
      u = !1;
    do {
      var m = d.lane & -536870913;
      if (m !== d.lane ? (k & m) === m : (dn & m) === m) {
        var p = d.revertLane;
        if (p === 0) r !== null && (r = r.next = {
          lane: 0,
          revertLane: 0,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        }), m === Fa && (u = !0);
        else if ((dn & p) === p) {
          d = d.next, p === Fa && (u = !0);
          continue
        } else m = {
          lane: 0,
          revertLane: d.revertLane,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        }, r === null ? (i = r = m, c = s) : r = r.next = m, z.lanes |= p, mn |= p;
        m = d.action, _n && n(s, m), s = d.hasEagerState ? d.eagerState : n(s, m)
      } else p = {
        lane: m,
        revertLane: d.revertLane,
        action: d.action,
        hasEagerState: d.hasEagerState,
        eagerState: d.eagerState,
        next: null
      }, r === null ? (i = r = p, c = s) : r = r.next = p, z.lanes |= m, mn |= m;
      d = d.next
    } while (d !== null && d !== e);
    if (r === null ? c = s : r.next = i, !Zt(s, t.memoizedState) && (gt = !0, u && (n = xa, n !== null))) throw n;
    t.memoizedState = s, t.baseState = c, t.baseQueue = r, a.lastRenderedState = s
  }
  return o === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
}

function Ai(t) {
  var e = mt(),
    n = e.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = t;
  var a = n.dispatch,
    o = n.pending,
    s = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var c = o = o.next;
    do s = t(s, c.action), c = c.next; while (c !== o);
    Zt(s, e.memoizedState) || (gt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s
  }
  return [s, a]
}

function ch(t, e, n) {
  var a = z,
    o = mt(),
    s = L;
  if (s) {
    if (n === void 0) throw Error(T(407));
    n = n()
  } else n = e();
  var c = !Zt((Z || o).memoizedState, n);
  c && (o.memoizedState = n, gt = !0), o = o.queue;
  var i = rh.bind(null, a, o, t);
  if (as(2048, 8, i, [t]), o.getSnapshot !== e || c || ut !== null && ut.memoizedState.tag & 1) {
    if (a.flags |= 2048, Aa(9, Jc(), lh.bind(null, a, o, n, e), null), Q === null) throw Error(T(349));
    s || dn & 124 || ih(a, e, n)
  }
  return n
}

function ih(t, e, n) {
  t.flags |= 16384, t = {
    getSnapshot: e,
    value: n
  }, e = z.updateQueue, e === null ? (e = $r(), z.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function lh(t, e, n, a) {
  e.value = n, e.getSnapshot = a, dh(e) && uh(t)
}

function rh(t, e, n) {
  return n(function() {
    dh(e) && uh(t)
  })
}

function dh(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Zt(t, n)
  } catch {
    return !0
  }
}

function uh(t) {
  var e = Ba(t, 2);
  e !== null && Gt(e, t, 2)
}

function Rl(t) {
  var e = Rt();
  if (typeof t == "function") {
    var n = t;
    if (t = n(), _n) {
      Je(!0);
      try {
        n()
      } finally {
        Je(!1)
      }
    }
  }
  return e.memoizedState = e.baseState = t, e.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: He,
    lastRenderedState: t
  }, e
}

function mh(t, e, n, a) {
  return t.baseState = n, Ir(t, Z, typeof a == "function" ? a : He)
}

function wv(t, e, n, a, o) {
  if ($c(t)) throw Error(T(485));
  if (t = e.action, t !== null) {
    var s = {
      payload: o,
      action: t,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function(c) {
        s.listeners.push(c)
      }
    };
    O.T !== null ? n(!0) : s.isTransition = !1, a(s), n = e.pending, n === null ? (s.next = e.pending = s, ph(e, s)) : (s.next = n.next, e.pending = n.next = s)
  }
}

function ph(t, e) {
  var n = e.action,
    a = e.payload,
    o = t.state;
  if (e.isTransition) {
    var s = O.T,
      c = {};
    O.T = c;
    try {
      var i = n(o, a),
        r = O.S;
      r !== null && r(c, i), zu(t, e, i)
    } catch (d) {
      Vl(t, e, d)
    } finally {
      O.T = s
    }
  } else try {
    s = n(o, a), zu(t, e, s)
  } catch (d) {
    Vl(t, e, d)
  }
}

function zu(t, e, n) {
  n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
    _u(t, e, a)
  }, function(a) {
    return Vl(t, e, a)
  }) : _u(t, e, n)
}

function _u(t, e, n) {
  e.status = "fulfilled", e.value = n, fh(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, ph(t, n)))
}

function Vl(t, e, n) {
  var a = t.pending;
  if (t.pending = null, a !== null) {
    a = a.next;
    do e.status = "rejected", e.reason = n, fh(e), e = e.next; while (e !== a)
  }
  t.action = null
}

function fh(t) {
  t = t.listeners;
  for (var e = 0; e < t.length; e++)(0, t[e])()
}

function hh(t, e) {
  return e
}

function Uu(t, e) {
  if (L) {
    var n = Q.formState;
    if (n !== null) {
      t: {
        var a = z;
        if (L) {
          if (ct) {
            e: {
              for (var o = ct, s = me; o.nodeType !== 8;) {
                if (!s) {
                  o = null;
                  break e
                }
                if (o = re(o.nextSibling), o === null) {
                  o = null;
                  break e
                }
              }
              s = o.data,
              o = s === "F!" || s === "F" ? o : null
            }
            if (o) {
              ct = re(o.nextSibling), a = o.data === "F!";
              break t
            }
          }
          Hn(a)
        }
        a = !1
      }
      a && (e = n[0])
    }
  }
  return n = Rt(), n.memoizedState = n.baseState = e, a = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: hh,
    lastRenderedState: e
  }, n.queue = a, n = Dh.bind(null, z, a), a.dispatch = n, a = Rl(!1), s = ad.bind(null, z, !1, a.queue), a = Rt(), o = {
    state: e,
    dispatch: null,
    action: t,
    pending: null
  }, a.queue = o, n = wv.bind(null, z, o, s, n), o.dispatch = n, a.memoizedState = t, [e, n, !1]
}

function Bu(t) {
  var e = mt();
  return xh(e, Z, t)
}

function xh(t, e, n) {
  if (e = Ir(t, e, hh)[0], t = Ys(He)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
    var a = ns(e)
  } catch (c) {
    throw c === es ? Kc : c
  } else a = e;
  e = mt();
  var o = e.queue,
    s = o.dispatch;
  return n !== e.memoizedState && (z.flags |= 2048, Aa(9, Jc(), Tv.bind(null, o, n), null)), [a, s, t]
}

function Tv(t, e) {
  t.action = e
}

function ku(t) {
  var e = mt(),
    n = Z;
  if (n !== null) return xh(e, n, t);
  mt(), e = e.memoizedState, n = mt();
  var a = n.queue.dispatch;
  return n.memoizedState = t, [e, a, !1]
}

function Aa(t, e, n, a) {
  return t = {
    tag: t,
    create: n,
    deps: a,
    inst: e,
    next: null
  }, e = z.updateQueue, e === null && (e = $r(), z.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t
}

function Jc() {
  return {
    destroy: void 0,
    resource: void 0
  }
}

function yh() {
  return mt().memoizedState
}

function Gs(t, e, n, a) {
  var o = Rt();
  a = a === void 0 ? null : a, z.flags |= t, o.memoizedState = Aa(1 | e, Jc(), n, a)
}

function as(t, e, n, a) {
  var o = mt();
  a = a === void 0 ? null : a;
  var s = o.memoizedState.inst;
  Z !== null && a !== null && Xr(a, Z.memoizedState.deps) ? o.memoizedState = Aa(e, s, n, a) : (z.flags |= t, o.memoizedState = Aa(1 | e, s, n, a))
}

function Lu(t, e) {
  Gs(8390656, 8, t, e)
}

function vh(t, e) {
  as(2048, 8, t, e)
}

function gh(t, e) {
  return as(4, 2, t, e)
}

function Sh(t, e) {
  return as(4, 4, t, e)
}

function jh(t, e) {
  if (typeof e == "function") {
    t = t();
    var n = e(t);
    return function() {
      typeof n == "function" ? n() : e(null)
    }
  }
  if (e != null) return t = t(), e.current = t,
    function() {
      e.current = null
    }
}

function bh(t, e, n) {
  n = n != null ? n.concat([t]) : null, as(4, 4, jh.bind(null, e, t), n)
}

function td() {}

function wh(t, e) {
  var n = mt();
  e = e === void 0 ? null : e;
  var a = n.memoizedState;
  return e !== null && Xr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t)
}

function Th(t, e) {
  var n = mt();
  e = e === void 0 ? null : e;
  var a = n.memoizedState;
  if (e !== null && Xr(e, a[1])) return a[0];
  if (a = t(), _n) {
    Je(!0);
    try {
      t()
    } finally {
      Je(!1)
    }
  }
  return n.memoizedState = [a, e], a
}

function ed(t, e, n) {
  return n === void 0 || dn & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = f1(), z.lanes |= t, mn |= t, n)
}

function Fh(t, e, n, a) {
  return Zt(n, e) ? n : Na.current !== null ? (t = ed(t, n, a), Zt(t, e) || (gt = !0), t) : dn & 42 ? (t = f1(), z.lanes |= t, mn |= t, e) : (gt = !0, t.memoizedState = n)
}

function Nh(t, e, n, a, o) {
  var s = P.p;
  P.p = s !== 0 && 8 > s ? s : 8;
  var c = O.T,
    i = {};
  O.T = i, ad(t, !1, e, n);
  try {
    var r = o(),
      d = O.S;
    if (d !== null && d(i, r), r !== null && typeof r == "object" && typeof r.then == "function") {
      var u = Sv(r, a);
      yo(t, e, u, Yt(t))
    } else yo(t, e, a, Yt(t))
  } catch (m) {
    yo(t, e, {
      then: function() {},
      status: "rejected",
      reason: m
    }, Yt())
  } finally {
    P.p = s, O.T = c
  }
}

function Fv() {}

function Ol(t, e, n, a) {
  if (t.tag !== 5) throw Error(T(476));
  var o = Ah(t).queue;
  Nh(t, o, e, An, n === null ? Fv : function() {
    return Eh(t), n(a)
  })
}

function Ah(t) {
  var e = t.memoizedState;
  if (e !== null) return e;
  e = {
    memoizedState: An,
    baseState: An,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: He,
      lastRenderedState: An
    },
    next: null
  };
  var n = {};
  return e.next = {
    memoizedState: n,
    baseState: n,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: He,
      lastRenderedState: n
    },
    next: null
  }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
}

function Eh(t) {
  var e = Ah(t).next.queue;
  yo(t, e, {}, Yt())
}

function nd() {
  return At(_o)
}

function Ch() {
  return mt().memoizedState
}

function Mh() {
  return mt().memoizedState
}

function Nv(t) {
  for (var e = t.return; e !== null;) {
    switch (e.tag) {
      case 24:
      case 3:
        var n = Yt();
        t = nn(n);
        var a = an(e, t, n);
        a !== null && (Gt(a, e, n), fo(a, e, n)), e = {
          cache: Pr()
        }, t.payload = e;
        return
    }
    e = e.return
  }
}

function Av(t, e, n) {
  var a = Yt();
  n = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, $c(t) ? Rh(e, n) : (n = Ur(t, e, n, a), n !== null && (Gt(n, t, a), Vh(n, e, a)))
}

function Dh(t, e, n) {
  var a = Yt();
  yo(t, e, n, a)
}

function yo(t, e, n, a) {
  var o = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if ($c(t)) Rh(e, o);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
      var c = e.lastRenderedState,
        i = s(c, n);
      if (o.hasEagerState = !0, o.eagerState = i, Zt(i, c)) return Zc(t, e, o, 0), Q === null && Xc(), !1
    } catch {} finally {}
    if (n = Ur(t, e, o, a), n !== null) return Gt(n, t, a), Vh(n, e, a), !0
  }
  return !1
}

function ad(t, e, n, a) {
  if (a = {
      lane: 2,
      revertLane: ud(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $c(t)) {
    if (e) throw Error(T(479))
  } else e = Ur(t, n, a, 2), e !== null && Gt(e, t, 2)
}

function $c(t) {
  var e = t.alternate;
  return t === z || e !== null && e === z
}

function Rh(t, e) {
  ya = uc = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Vh(t, e, n) {
  if (n & 4194048) {
    var a = e.lanes;
    a &= t.pendingLanes, n |= a, e.lanes = n, wf(t, n)
  }
}
var pc = {
    readContext: At,
    use: Qc,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt
  },
  Oh = {
    readContext: At,
    use: Qc,
    useCallback: function(t, e) {
      return Rt().memoizedState = [t, e === void 0 ? null : e], t
    },
    useContext: At,
    useEffect: Lu,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Gs(4194308, 4, jh.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
      return Gs(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
      Gs(4, 2, t, e)
    },
    useMemo: function(t, e) {
      var n = Rt();
      e = e === void 0 ? null : e;
      var a = t();
      if (_n) {
        Je(!0);
        try {
          t()
        } finally {
          Je(!1)
        }
      }
      return n.memoizedState = [a, e], a
    },
    useReducer: function(t, e, n) {
      var a = Rt();
      if (n !== void 0) {
        var o = n(e);
        if (_n) {
          Je(!0);
          try {
            n(e)
          } finally {
            Je(!1)
          }
        }
      } else o = e;
      return a.memoizedState = a.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, a.queue = t, t = t.dispatch = Av.bind(null, z, t), [a.memoizedState, t]
    },
    useRef: function(t) {
      var e = Rt();
      return t = {
        current: t
      }, e.memoizedState = t
    },
    useState: function(t) {
      t = Rl(t);
      var e = t.queue,
        n = Dh.bind(null, z, e);
      return e.dispatch = n, [t.memoizedState, n]
    },
    useDebugValue: td,
    useDeferredValue: function(t, e) {
      var n = Rt();
      return ed(n, t, e)
    },
    useTransition: function() {
      var t = Rl(!1);
      return t = Nh.bind(null, z, t.queue, !0, !1), Rt().memoizedState = t, [!1, t]
    },
    useSyncExternalStore: function(t, e, n) {
      var a = z,
        o = Rt();
      if (L) {
        if (n === void 0) throw Error(T(407));
        n = n()
      } else {
        if (n = e(), Q === null) throw Error(T(349));
        k & 124 || ih(a, e, n)
      }
      o.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: e
      };
      return o.queue = s, Lu(rh.bind(null, a, s, t), [t]), a.flags |= 2048, Aa(9, Jc(), lh.bind(null, a, s, n, e), null), n
    },
    useId: function() {
      var t = Rt(),
        e = Q.identifierPrefix;
      if (L) {
        var n = Ae,
          a = Ne;
        n = (a & ~(1 << 32 - qt(a) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = mc++, 0 < n && (e += "H" + n.toString(32)), e += "»"
      } else n = jv++, e = "«" + e + "r" + n.toString(32) + "»";
      return t.memoizedState = e
    },
    useHostTransitionStatus: nd,
    useFormState: Uu,
    useActionState: Uu,
    useOptimistic: function(t) {
      var e = Rt();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = ad.bind(null, z, !0, n), n.dispatch = e, [t, e]
    },
    useMemoCache: Wr,
    useCacheRefresh: function() {
      return Rt().memoizedState = Nv.bind(null, z)
    }
  },
  Hh = {
    readContext: At,
    use: Qc,
    useCallback: wh,
    useContext: At,
    useEffect: vh,
    useImperativeHandle: bh,
    useInsertionEffect: gh,
    useLayoutEffect: Sh,
    useMemo: Th,
    useReducer: Ys,
    useRef: yh,
    useState: function() {
      return Ys(He)
    },
    useDebugValue: td,
    useDeferredValue: function(t, e) {
      var n = mt();
      return Fh(n, Z.memoizedState, t, e)
    },
    useTransition: function() {
      var t = Ys(He)[0],
        e = mt().memoizedState;
      return [typeof t == "boolean" ? t : ns(t), e]
    },
    useSyncExternalStore: ch,
    useId: Ch,
    useHostTransitionStatus: nd,
    useFormState: Bu,
    useActionState: Bu,
    useOptimistic: function(t, e) {
      var n = mt();
      return mh(n, Z, t, e)
    },
    useMemoCache: Wr,
    useCacheRefresh: Mh
  },
  Ev = {
    readContext: At,
    use: Qc,
    useCallback: wh,
    useContext: At,
    useEffect: vh,
    useImperativeHandle: bh,
    useInsertionEffect: gh,
    useLayoutEffect: Sh,
    useMemo: Th,
    useReducer: Ai,
    useRef: yh,
    useState: function() {
      return Ai(He)
    },
    useDebugValue: td,
    useDeferredValue: function(t, e) {
      var n = mt();
      return Z === null ? ed(n, t, e) : Fh(n, Z.memoizedState, t, e)
    },
    useTransition: function() {
      var t = Ai(He)[0],
        e = mt().memoizedState;
      return [typeof t == "boolean" ? t : ns(t), e]
    },
    useSyncExternalStore: ch,
    useId: Ch,
    useHostTransitionStatus: nd,
    useFormState: ku,
    useActionState: ku,
    useOptimistic: function(t, e) {
      var n = mt();
      return Z !== null ? mh(n, Z, t, e) : (n.baseState = t, [t, n.queue.dispatch])
    },
    useMemoCache: Wr,
    useCacheRefresh: Mh
  },
  ga = null,
  Vo = 0;

function As(t) {
  var e = Vo;
  return Vo += 1, ga === null && (ga = []), eh(ga, t, e)
}

function Qa(t, e) {
  e = e.props.ref, t.ref = e !== void 0 ? e : null
}

function Es(t, e) {
  throw e.$$typeof === oy ? Error(T(525)) : (t = Object.prototype.toString.call(e), Error(T(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
}

function Pu(t) {
  var e = t._init;
  return e(t._payload)
}

function zh(t) {
  function e(x, h) {
    if (t) {
      var y = x.deletions;
      y === null ? (x.deletions = [h], x.flags |= 16) : y.push(h)
    }
  }

  function n(x, h) {
    if (!t) return null;
    for (; h !== null;) e(x, h), h = h.sibling;
    return null
  }

  function a(x) {
    for (var h = new Map; x !== null;) x.key !== null ? h.set(x.key, x) : h.set(x.index, x), x = x.sibling;
    return h
  }

  function o(x, h) {
    return x = Me(x, h), x.index = 0, x.sibling = null, x
  }

  function s(x, h, y) {
    return x.index = y, t ? (y = x.alternate, y !== null ? (y = y.index, y < h ? (x.flags |= 67108866, h) : y) : (x.flags |= 67108866, h)) : (x.flags |= 1048576, h)
  }

  function c(x) {
    return t && x.alternate === null && (x.flags |= 67108866), x
  }

  function i(x, h, y, g) {
    return h === null || h.tag !== 6 ? (h = Ti(y, x.mode, g), h.return = x, h) : (h = o(h, y), h.return = x, h)
  }

  function r(x, h, y, g) {
    var w = y.type;
    return w === Jn ? u(x, h, y.props.children, g, y.key) : h !== null && (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ye && Pu(w) === h.type) ? (h = o(h, y.props), Qa(h, y), h.return = x, h) : (h = Ps(y.type, y.key, y.props, null, x.mode, g), Qa(h, y), h.return = x, h)
  }

  function d(x, h, y, g) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Fi(y, x.mode, g), h.return = x, h) : (h = o(h, y.children || []), h.return = x, h)
  }

  function u(x, h, y, g, w) {
    return h === null || h.tag !== 7 ? (h = En(y, x.mode, g, w), h.return = x, h) : (h = o(h, y), h.return = x, h)
  }

  function m(x, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = Ti("" + h, x.mode, y), h.return = x, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ss:
          return y = Ps(h.type, h.key, h.props, null, x.mode, y), Qa(y, h), y.return = x, y;
        case to:
          return h = Fi(h, x.mode, y), h.return = x, h;
        case Ye:
          var g = h._init;
          return h = g(h._payload), m(x, h, y)
      }
      if (eo(h) || Ga(h)) return h = En(h, x.mode, y, null), h.return = x, h;
      if (typeof h.then == "function") return m(x, As(h), y);
      if (h.$$typeof === Fe) return m(x, Fs(x, h), y);
      Es(x, h)
    }
    return null
  }

  function p(x, h, y, g) {
    var w = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return w !== null ? null : i(x, h, "" + y, g);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ss:
          return y.key === w ? r(x, h, y, g) : null;
        case to:
          return y.key === w ? d(x, h, y, g) : null;
        case Ye:
          return w = y._init, y = w(y._payload), p(x, h, y, g)
      }
      if (eo(y) || Ga(y)) return w !== null ? null : u(x, h, y, g, null);
      if (typeof y.then == "function") return p(x, h, As(y), g);
      if (y.$$typeof === Fe) return p(x, h, Fs(x, y), g);
      Es(x, y)
    }
    return null
  }

  function f(x, h, y, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return x = x.get(y) || null, i(h, x, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ss:
          return x = x.get(g.key === null ? y : g.key) || null, r(h, x, g, w);
        case to:
          return x = x.get(g.key === null ? y : g.key) || null, d(h, x, g, w);
        case Ye:
          var E = g._init;
          return g = E(g._payload), f(x, h, y, g, w)
      }
      if (eo(g) || Ga(g)) return x = x.get(y) || null, u(h, x, g, w, null);
      if (typeof g.then == "function") return f(x, h, y, As(g), w);
      if (g.$$typeof === Fe) return f(x, h, y, Fs(h, g), w);
      Es(h, g)
    }
    return null
  }

  function S(x, h, y, g) {
    for (var w = null, E = null, A = h, N = h = 0, B = null; A !== null && N < y.length; N++) {
      A.index > N ? (B = A, A = null) : B = A.sibling;
      var R = p(x, A, y[N], g);
      if (R === null) {
        A === null && (A = B);
        break
      }
      t && A && R.alternate === null && e(x, A), h = s(R, h, N), E === null ? w = R : E.sibling = R, E = R, A = B
    }
    if (N === y.length) return n(x, A), L && bn(x, N), w;
    if (A === null) {
      for (; N < y.length; N++) A = m(x, y[N], g), A !== null && (h = s(A, h, N), E === null ? w = A : E.sibling = A, E = A);
      return L && bn(x, N), w
    }
    for (A = a(A); N < y.length; N++) B = f(A, x, N, y[N], g), B !== null && (t && B.alternate !== null && A.delete(B.key === null ? N : B.key), h = s(B, h, N), E === null ? w = B : E.sibling = B, E = B);
    return t && A.forEach(function(pt) {
      return e(x, pt)
    }), L && bn(x, N), w
  }

  function v(x, h, y, g) {
    if (y == null) throw Error(T(151));
    for (var w = null, E = null, A = h, N = h = 0, B = null, R = y.next(); A !== null && !R.done; N++, R = y.next()) {
      A.index > N ? (B = A, A = null) : B = A.sibling;
      var pt = p(x, A, R.value, g);
      if (pt === null) {
        A === null && (A = B);
        break
      }
      t && A && pt.alternate === null && e(x, A), h = s(pt, h, N), E === null ? w = pt : E.sibling = pt, E = pt, A = B
    }
    if (R.done) return n(x, A), L && bn(x, N), w;
    if (A === null) {
      for (; !R.done; N++, R = y.next()) R = m(x, R.value, g), R !== null && (h = s(R, h, N), E === null ? w = R : E.sibling = R, E = R);
      return L && bn(x, N), w
    }
    for (A = a(A); !R.done; N++, R = y.next()) R = f(A, x, N, R.value, g), R !== null && (t && R.alternate !== null && A.delete(R.key === null ? N : R.key), h = s(R, h, N), E === null ? w = R : E.sibling = R, E = R);
    return t && A.forEach(function(ce) {
      return e(x, ce)
    }), L && bn(x, N), w
  }

  function b(x, h, y, g) {
    if (typeof y == "object" && y !== null && y.type === Jn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ss:
          t: {
            for (var w = y.key; h !== null;) {
              if (h.key === w) {
                if (w = y.type, w === Jn) {
                  if (h.tag === 7) {
                    n(x, h.sibling), g = o(h, y.props.children), g.return = x, x = g;
                    break t
                  }
                } else if (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ye && Pu(w) === h.type) {
                  n(x, h.sibling), g = o(h, y.props), Qa(g, y), g.return = x, x = g;
                  break t
                }
                n(x, h);
                break
              } else e(x, h);
              h = h.sibling
            }
            y.type === Jn ? (g = En(y.props.children, x.mode, g, y.key), g.return = x, x = g) : (g = Ps(y.type, y.key, y.props, null, x.mode, g), Qa(g, y), g.return = x, x = g)
          }
          return c(x);
        case to:
          t: {
            for (w = y.key; h !== null;) {
              if (h.key === w)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  n(x, h.sibling), g = o(h, y.children || []), g.return = x, x = g;
                  break t
                } else {
                  n(x, h);
                  break
                }
              else e(x, h);
              h = h.sibling
            }
            g = Fi(y, x.mode, g),
            g.return = x,
            x = g
          }
          return c(x);
        case Ye:
          return w = y._init, y = w(y._payload), b(x, h, y, g)
      }
      if (eo(y)) return S(x, h, y, g);
      if (Ga(y)) {
        if (w = Ga(y), typeof w != "function") throw Error(T(150));
        return y = w.call(y), v(x, h, y, g)
      }
      if (typeof y.then == "function") return b(x, h, As(y), g);
      if (y.$$typeof === Fe) return b(x, h, Fs(x, y), g);
      Es(x, y)
    }
    return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, h !== null && h.tag === 6 ? (n(x, h.sibling), g = o(h, y), g.return = x, x = g) : (n(x, h), g = Ti(y, x.mode, g), g.return = x, x = g), c(x)) : n(x, h)
  }
  return function(x, h, y, g) {
    try {
      Vo = 0;
      var w = b(x, h, y, g);
      return ga = null, w
    } catch (A) {
      if (A === es || A === Kc) throw A;
      var E = Lt(29, A, null, x.mode);
      return E.lanes = g, E.return = x, E
    } finally {}
  }
}
var Ea = zh(!0),
  _h = zh(!1),
  oe = ge(null),
  xe = null;

function Ze(t) {
  var e = t.alternate;
  et(ht, ht.current & 1), et(oe, t), xe === null && (e === null || Na.current !== null || e.memoizedState !== null) && (xe = t)
}

function Uh(t) {
  if (t.tag === 22) {
    if (et(ht, ht.current), et(oe, t), xe === null) {
      var e = t.alternate;
      e !== null && e.memoizedState !== null && (xe = t)
    }
  } else Ke()
}

function Ke() {
  et(ht, ht.current), et(oe, oe.current)
}

function Ce(t) {
  St(oe), xe === t && (xe = null), St(ht)
}
var ht = ge(0);

function fc(t) {
  for (var e = t; e !== null;) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || $l(n))) return e
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue
    }
    if (e === t) break;
    for (; e.sibling === null;) {
      if (e.return === null || e.return === t) return null;
      e = e.return
    }
    e.sibling.return = e.return, e = e.sibling
  }
  return null
}

function Ei(t, e, n, a) {
  e = t.memoizedState, n = n(a, e), n = n == null ? e : W({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Hl = {
  enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var a = Yt(),
      o = nn(a);
    o.payload = e, n != null && (o.callback = n), e = an(t, o, a), e !== null && (Gt(e, t, a), fo(e, t, a))
  },
  enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var a = Yt(),
      o = nn(a);
    o.tag = 1, o.payload = e, n != null && (o.callback = n), e = an(t, o, a), e !== null && (Gt(e, t, a), fo(e, t, a))
  },
  enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = Yt(),
      a = nn(n);
    a.tag = 2, e != null && (a.callback = e), e = an(t, a, n), e !== null && (Gt(e, t, n), fo(e, t, n))
  }
};

function qu(t, e, n, a, o, s, c) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, s, c) : e.prototype && e.prototype.isPureReactComponent ? !Mo(n, a) || !Mo(o, s) : !0
}

function Yu(t, e, n, a) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Hl.enqueueReplaceState(e, e.state, null)
}

function Un(t, e) {
  var n = e;
  if ("ref" in e) {
    n = {};
    for (var a in e) a !== "ref" && (n[a] = e[a])
  }
  if (t = t.defaultProps) {
    n === e && (n = W({}, n));
    for (var o in t) n[o] === void 0 && (n[o] = t[o])
  }
  return n
}
var hc = typeof reportError == "function" ? reportError : function(t) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var e = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
      error: t
    });
    if (!window.dispatchEvent(e)) return
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", t);
    return
  }
  console.error(t)
};

function Bh(t) {
  hc(t)
}

function kh(t) {
  console.error(t)
}

function Lh(t) {
  hc(t)
}

function xc(t, e) {
  try {
    var n = t.onUncaughtError;
    n(e.value, {
      componentStack: e.stack
    })
  } catch (a) {
    setTimeout(function() {
      throw a
    })
  }
}

function Gu(t, e, n) {
  try {
    var a = t.onCaughtError;
    a(n.value, {
      componentStack: n.stack,
      errorBoundary: e.tag === 1 ? e.stateNode : null
    })
  } catch (o) {
    setTimeout(function() {
      throw o
    })
  }
}

function zl(t, e, n) {
  return n = nn(n), n.tag = 3, n.payload = {
    element: null
  }, n.callback = function() {
    xc(t, e)
  }, n
}

function Ph(t) {
  return t = nn(t), t.tag = 3, t
}

function qh(t, e, n, a) {
  var o = n.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var s = a.value;
    t.payload = function() {
      return o(s)
    }, t.callback = function() {
      Gu(e, n, a)
    }
  }
  var c = n.stateNode;
  c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
    Gu(e, n, a), typeof o != "function" && (on === null ? on = new Set([this]) : on.add(this));
    var i = a.stack;
    this.componentDidCatch(a.value, {
      componentStack: i !== null ? i : ""
    })
  })
}

function Cv(t, e, n, a, o) {
  if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
    if (e = n.alternate, e !== null && Io(e, n, o, !0), n = oe.current, n !== null) {
      switch (n.tag) {
        case 13:
          return xe === null ? Yl() : n.alternate === null && it === 0 && (it = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === El ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([a]) : e.add(a), Bi(t, a, o)), !1;
        case 22:
          return n.flags |= 65536, a === El ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
            transitions: null,
            markerInstances: null,
            retryQueue: new Set([a])
          }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([a]) : n.add(a)), Bi(t, a, o)), !1
      }
      throw Error(T(435, n.tag))
    }
    return Bi(t, a, o), Yl(), !1
  }
  if (L) return e = oe.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = o, a !== wl && (t = Error(T(422), {
    cause: a
  }), Do(ne(t, n)))) : (a !== wl && (e = Error(T(423), {
    cause: a
  }), Do(ne(e, n))), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, a = ne(a, n), o = zl(t.stateNode, a, o), Ni(t, o), it !== 4 && (it = 2)), !1;
  var s = Error(T(520), {
    cause: a
  });
  if (s = ne(s, n), So === null ? So = [s] : So.push(s), it !== 4 && (it = 2), e === null) return !0;
  a = ne(a, n), n = e;
  do {
    switch (n.tag) {
      case 3:
        return n.flags |= 65536, t = o & -o, n.lanes |= t, t = zl(n.stateNode, a, t), Ni(n, t), !1;
      case 1:
        if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (on === null || !on.has(s)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = Ph(o), qh(o, t, n, a), Ni(n, o), !1
    }
    n = n.return
  } while (n !== null);
  return !1
}
var Yh = Error(T(461)),
  gt = !1;

function bt(t, e, n, a) {
  e.child = t === null ? _h(e, null, n, a) : Ea(e, t.child, n, a)
}

function Xu(t, e, n, a, o) {
  n = n.render;
  var s = e.ref;
  if ("ref" in a) {
    var c = {};
    for (var i in a) i !== "ref" && (c[i] = a[i])
  } else c = a;
  return zn(e), a = Zr(t, e, n, c, s, o), i = Kr(), t !== null && !gt ? (Qr(t, e, o), ze(t, e, o)) : (L && i && kr(e), e.flags |= 1, bt(t, e, a, o), e.child)
}

function Zu(t, e, n, a, o) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" && !Br(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, Gh(t, e, s, a, o)) : (t = Ps(n.type, null, a, e, e.mode, o), t.ref = e.ref, t.return = e, e.child = t)
  }
  if (s = t.child, !od(t, o)) {
    var c = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mo, n(c, a) && t.ref === e.ref) return ze(t, e, o)
  }
  return e.flags |= 1, t = Me(s, a), t.ref = e.ref, t.return = e, e.child = t
}

function Gh(t, e, n, a, o) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Mo(s, a) && t.ref === e.ref)
      if (gt = !1, e.pendingProps = a = s, od(t, o)) t.flags & 131072 && (gt = !0);
      else return e.lanes = t.lanes, ze(t, e, o)
  }
  return _l(t, e, n, a, o)
}

function Xh(t, e, n) {
  var a = e.pendingProps,
    o = a.children,
    s = t !== null ? t.memoizedState : null;
  if (a.mode === "hidden") {
    if (e.flags & 128) {
      if (a = s !== null ? s.baseLanes | n : n, t !== null) {
        for (o = e.child = t.child, s = 0; o !== null;) s = s | o.lanes | o.childLanes, o = o.sibling;
        e.childLanes = s & ~a
      } else e.childLanes = 0, e.child = null;
      return Ku(t, e, a, n)
    }
    if (n & 536870912) e.memoizedState = {
      baseLanes: 0,
      cachePool: null
    }, t !== null && qs(e, s !== null ? s.cachePool : null), s !== null ? Hu(e, s) : Dl(), Uh(e);
    else return e.lanes = e.childLanes = 536870912, Ku(t, e, s !== null ? s.baseLanes | n : n, n)
  } else s !== null ? (qs(e, s.cachePool), Hu(e, s), Ke(), e.memoizedState = null) : (t !== null && qs(e, null), Dl(), Ke());
  return bt(t, e, o, n), e.child
}

function Ku(t, e, n, a) {
  var o = qr();
  return o = o === null ? null : {
    parent: ft._currentValue,
    pool: o
  }, e.memoizedState = {
    baseLanes: n,
    cachePool: o
  }, t !== null && qs(e, null), Dl(), Uh(e), t !== null && Io(t, e, a, !0), null
}

function Xs(t, e) {
  var n = e.ref;
  if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
  else {
    if (typeof n != "function" && typeof n != "object") throw Error(T(284));
    (t === null || t.ref !== n) && (e.flags |= 4194816)
  }
}

function _l(t, e, n, a, o) {
  return zn(e), n = Zr(t, e, n, a, void 0, o), a = Kr(), t !== null && !gt ? (Qr(t, e, o), ze(t, e, o)) : (L && a && kr(e), e.flags |= 1, bt(t, e, n, o), e.child)
}

function Qu(t, e, n, a, o, s) {
  return zn(e), e.updateQueue = null, n = sh(e, a, n, o), oh(t), a = Kr(), t !== null && !gt ? (Qr(t, e, s), ze(t, e, s)) : (L && a && kr(e), e.flags |= 1, bt(t, e, n, s), e.child)
}

function Ju(t, e, n, a, o) {
  if (zn(e), e.stateNode === null) {
    var s = oa,
      c = n.contextType;
    typeof c == "object" && c !== null && (s = At(c)), s = new n(a, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Hl, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = a, s.state = e.memoizedState, s.refs = {}, Yr(e), c = n.contextType, s.context = typeof c == "object" && c !== null ? At(c) : oa, s.state = e.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ei(e, n, c, a), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (c = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), c !== s.state && Hl.enqueueReplaceState(s, s.state, null), xo(e, a, s, o), ho(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !0
  } else if (t === null) {
    s = e.stateNode;
    var i = e.memoizedProps,
      r = Un(n, i);
    s.props = r;
    var d = s.context,
      u = n.contextType;
    c = oa, typeof u == "object" && u !== null && (c = At(u));
    var m = n.getDerivedStateFromProps;
    u = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function", i = e.pendingProps !== i, u || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i || d !== c) && Yu(e, s, a, c), Ge = !1;
    var p = e.memoizedState;
    s.state = p, xo(e, a, s, o), ho(), d = e.memoizedState, i || p !== d || Ge ? (typeof m == "function" && (Ei(e, n, m, a), d = e.memoizedState), (r = Ge || qu(e, n, r, a, p, d, c)) ? (u || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = d), s.props = a, s.state = d, s.context = c, a = r) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
  } else {
    s = e.stateNode, Cl(t, e), c = e.memoizedProps, u = Un(n, c), s.props = u, m = e.pendingProps, p = s.context, d = n.contextType, r = oa, typeof d == "object" && d !== null && (r = At(d)), i = n.getDerivedStateFromProps, (d = typeof i == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== m || p !== r) && Yu(e, s, a, r), Ge = !1, p = e.memoizedState, s.state = p, xo(e, a, s, o), ho();
    var f = e.memoizedState;
    c !== m || p !== f || Ge || t !== null && t.dependencies !== null && rc(t.dependencies) ? (typeof i == "function" && (Ei(e, n, i, a), f = e.memoizedState), (u = Ge || qu(e, n, u, a, p, f, r) || t !== null && t.dependencies !== null && rc(t.dependencies)) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, f, r), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, f, r)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = f), s.props = a, s.state = f, s.context = r, a = u) : (typeof s.componentDidUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), a = !1)
  }
  return s = a, Xs(t, e), a = (e.flags & 128) !== 0, s || a ? (s = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && a ? (e.child = Ea(e, t.child, null, o), e.child = Ea(e, null, n, o)) : bt(t, e, n, o), e.memoizedState = s.state, t = e.child) : t = ze(t, e, o), t
}

function $u(t, e, n, a) {
  return Wo(), e.flags |= 256, bt(t, e, n, a), e.child
}
var Ci = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};

function Mi(t) {
  return {
    baseLanes: t,
    cachePool: If()
  }
}

function Di(t, e, n) {
  return t = t !== null ? t.childLanes & ~n : 0, e && (t |= ae), t
}

function Zh(t, e, n) {
  var a = e.pendingProps,
    o = !1,
    s = (e.flags & 128) !== 0,
    c;
  if ((c = s) || (c = t !== null && t.memoizedState === null ? !1 : (ht.current & 2) !== 0), c && (o = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
    if (L) {
      if (o ? Ze(e) : Ke(), L) {
        var i = ct,
          r;
        if (r = i) {
          t: {
            for (r = i, i = me; r.nodeType !== 8;) {
              if (!i) {
                i = null;
                break t
              }
              if (r = re(r.nextSibling), r === null) {
                i = null;
                break t
              }
            }
            i = r
          }
          i !== null ? (e.memoizedState = {
            dehydrated: i,
            treeContext: Cn !== null ? {
              id: Ne,
              overflow: Ae
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, r = Lt(18, null, null, 0), r.stateNode = i, r.return = e, e.child = r, Ct = e, ct = null, r = !0) : r = !1
        }
        r || Hn(e)
      }
      if (i = e.memoizedState, i !== null && (i = i.dehydrated, i !== null)) return $l(i) ? e.lanes = 32 : e.lanes = 536870912, null;
      Ce(e)
    }
    return i = a.children, a = a.fallback, o ? (Ke(), o = e.mode, i = yc({
      mode: "hidden",
      children: i
    }, o), a = En(a, o, n, null), i.return = e, a.return = e, i.sibling = a, e.child = i, o = e.child, o.memoizedState = Mi(n), o.childLanes = Di(t, c, n), e.memoizedState = Ci, a) : (Ze(e), Ul(e, i))
  }
  if (r = t.memoizedState, r !== null && (i = r.dehydrated, i !== null)) {
    if (s) e.flags & 256 ? (Ze(e), e.flags &= -257, e = Ri(t, e, n)) : e.memoizedState !== null ? (Ke(), e.child = t.child, e.flags |= 128, e = null) : (Ke(), o = a.fallback, i = e.mode, a = yc({
      mode: "visible",
      children: a.children
    }, i), o = En(o, i, n, null), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, Ea(e, t.child, null, n), a = e.child, a.memoizedState = Mi(n), a.childLanes = Di(t, c, n), e.memoizedState = Ci, e = o);
    else if (Ze(e), $l(i)) {
      if (c = i.nextSibling && i.nextSibling.dataset, c) var d = c.dgst;
      c = d, a = Error(T(419)), a.stack = "", a.digest = c, Do({
        value: a,
        source: null,
        stack: null
      }), e = Ri(t, e, n)
    } else if (gt || Io(t, e, n, !1), c = (n & t.childLanes) !== 0, gt || c) {
      if (c = Q, c !== null && (a = n & -n, a = a & 42 ? 1 : Er(a), a = a & (c.suspendedLanes | n) ? 0 : a, a !== 0 && a !== r.retryLane)) throw r.retryLane = a, Ba(t, a), Gt(c, t, a), Yh;
      i.data === "$?" || Yl(), e = Ri(t, e, n)
    } else i.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = r.treeContext, ct = re(i.nextSibling), Ct = e, L = !0, Mn = null, me = !1, t !== null && (It[te++] = Ne, It[te++] = Ae, It[te++] = Cn, Ne = t.id, Ae = t.overflow, Cn = e), e = Ul(e, a.children), e.flags |= 4096);
    return e
  }
  return o ? (Ke(), o = a.fallback, i = e.mode, r = t.child, d = r.sibling, a = Me(r, {
    mode: "hidden",
    children: a.children
  }), a.subtreeFlags = r.subtreeFlags & 65011712, d !== null ? o = Me(d, o) : (o = En(o, i, n, null), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, a = o, o = e.child, i = t.child.memoizedState, i === null ? i = Mi(n) : (r = i.cachePool, r !== null ? (d = ft._currentValue, r = r.parent !== d ? {
    parent: d,
    pool: d
  } : r) : r = If(), i = {
    baseLanes: i.baseLanes | n,
    cachePool: r
  }), o.memoizedState = i, o.childLanes = Di(t, c, n), e.memoizedState = Ci, a) : (Ze(e), n = t.child, t = n.sibling, n = Me(n, {
    mode: "visible",
    children: a.children
  }), n.return = e, n.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = n, e.memoizedState = null, n)
}

function Ul(t, e) {
  return e = yc({
    mode: "visible",
    children: e
  }, t.mode), e.return = t, t.child = e
}

function yc(t, e) {
  return t = Lt(22, t, null, e), t.lanes = 0, t.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  }, t
}

function Ri(t, e, n) {
  return Ea(e, t.child, null, n), t = Ul(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function Wu(t, e, n) {
  t.lanes |= e;
  var a = t.alternate;
  a !== null && (a.lanes |= e), Fl(t.return, e, n)
}

function Vi(t, e, n, a, o) {
  var s = t.memoizedState;
  s === null ? t.memoizedState = {
    isBackwards: e,
    rendering: null,
    renderingStartTime: 0,
    last: a,
    tail: n,
    tailMode: o
  } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = o)
}

function Kh(t, e, n) {
  var a = e.pendingProps,
    o = a.revealOrder,
    s = a.tail;
  if (bt(t, e, a.children, n), a = ht.current, a & 2) a = a & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128) t: for (t = e.child; t !== null;) {
      if (t.tag === 13) t.memoizedState !== null && Wu(t, n, e);
      else if (t.tag === 19) Wu(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break t;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) break t;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    a &= 1
  }
  switch (et(ht, a), o) {
    case "forwards":
      for (n = e.child, o = null; n !== null;) t = n.alternate, t !== null && fc(t) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Vi(e, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = e.child, e.child = null; o !== null;) {
        if (t = o.alternate, t !== null && fc(t) === null) {
          e.child = o;
          break
        }
        t = o.sibling, o.sibling = n, n = o, o = t
      }
      Vi(e, !0, n, null, s);
      break;
    case "together":
      Vi(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null
  }
  return e.child
}

function ze(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), mn |= e.lanes, !(n & e.childLanes))
    if (t !== null) {
      if (Io(t, e, n, !1), (n & e.childLanes) === 0) return null
    } else return null;
  if (t !== null && e.child !== t.child) throw Error(T(153));
  if (e.child !== null) {
    for (t = e.child, n = Me(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = Me(t, t.pendingProps), n.return = e;
    n.sibling = null
  }
  return e.child
}

function od(t, e) {
  return t.lanes & e ? !0 : (t = t.dependencies, !!(t !== null && rc(t)))
}

function Mv(t, e, n) {
  switch (e.tag) {
    case 3:
      ec(e, e.stateNode.containerInfo), Xe(e, ft, t.memoizedState.cache), Wo();
      break;
    case 27:
    case 5:
      pl(e);
      break;
    case 4:
      ec(e, e.stateNode.containerInfo);
      break;
    case 10:
      Xe(e, e.type, e.memoizedProps.value);
      break;
    case 13:
      var a = e.memoizedState;
      if (a !== null) return a.dehydrated !== null ? (Ze(e), e.flags |= 128, null) : n & e.child.childLanes ? Zh(t, e, n) : (Ze(e), t = ze(t, e, n), t !== null ? t.sibling : null);
      Ze(e);
      break;
    case 19:
      var o = (t.flags & 128) !== 0;
      if (a = (n & e.childLanes) !== 0, a || (Io(t, e, n, !1), a = (n & e.childLanes) !== 0), o) {
        if (a) return Kh(t, e, n);
        e.flags |= 128
      }
      if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), et(ht, ht.current), a) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Xh(t, e, n);
    case 24:
      Xe(e, ft, t.memoizedState.cache)
  }
  return ze(t, e, n)
}

function Qh(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps) gt = !0;
    else {
      if (!od(t, n) && !(e.flags & 128)) return gt = !1, Mv(t, e, n);
      gt = !!(t.flags & 131072)
    }
  else gt = !1, L && e.flags & 1048576 && $f(e, lc, e.index);
  switch (e.lanes = 0, e.tag) {
    case 16:
      t: {
        t = e.pendingProps;
        var a = e.elementType,
          o = a._init;
        if (a = o(a._payload), e.type = a, typeof a == "function") Br(a) ? (t = Un(a, t), e.tag = 1, e = Ju(null, e, a, t, n)) : (e.tag = 0, e = _l(null, e, a, t, n));
        else {
          if (a != null) {
            if (o = a.$$typeof, o === Fr) {
              e.tag = 11, e = Xu(null, e, a, t, n);
              break t
            } else if (o === Nr) {
              e.tag = 14, e = Zu(null, e, a, t, n);
              break t
            }
          }
          throw e = ul(a) || a, Error(T(306, e, ""))
        }
      }
      return e;
    case 0:
      return _l(t, e, e.type, e.pendingProps, n);
    case 1:
      return a = e.type, o = Un(a, e.pendingProps), Ju(t, e, a, o, n);
    case 3:
      t: {
        if (ec(e, e.stateNode.containerInfo), t === null) throw Error(T(387));a = e.pendingProps;
        var s = e.memoizedState;o = s.element,
        Cl(t, e),
        xo(e, a, null, n);
        var c = e.memoizedState;
        if (a = c.cache, Xe(e, ft, a), a !== s.cache && Nl(e, [ft], n, !0), ho(), a = c.element, s.isDehydrated)
          if (s = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
            e = $u(t, e, a, n);
            break t
          } else if (a !== o) {
          o = ne(Error(T(424)), e), Do(o), e = $u(t, e, a, n);
          break t
        } else {
          switch (t = e.stateNode.containerInfo, t.nodeType) {
            case 9:
              t = t.body;
              break;
            default:
              t = t.nodeName === "HTML" ? t.ownerDocument.body : t
          }
          for (ct = re(t.firstChild), Ct = e, L = !0, Mn = null, me = !0, n = _h(e, null, a, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
        } else {
          if (Wo(), a === o) {
            e = ze(t, e, n);
            break t
          }
          bt(t, e, a, n)
        }
        e = e.child
      }
      return e;
    case 26:
      return Xs(t, e), t === null ? (n = hm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : L || (n = e.type, t = e.pendingProps, a = Tc(en.current).createElement(n), a[Nt] = e, a[Ht] = t, Tt(a, n, t), vt(a), e.stateNode = a) : e.memoizedState = hm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
    case 27:
      return pl(e), t === null && L && (a = e.stateNode = H1(e.type, e.pendingProps, en.current), Ct = e, me = !0, o = ct, xn(e.type) ? (Wl = o, ct = re(a.firstChild)) : ct = o), bt(t, e, e.pendingProps.children, n), Xs(t, e), t === null && (e.flags |= 4194304), e.child;
    case 5:
      return t === null && L && ((o = a = ct) && (a = o2(a, e.type, e.pendingProps, me), a !== null ? (e.stateNode = a, Ct = e, ct = re(a.firstChild), me = !1, o = !0) : o = !1), o || Hn(e)), pl(e), o = e.type, s = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = s.children, Ql(o, s) ? a = null : c !== null && Ql(o, c) && (e.flags |= 32), e.memoizedState !== null && (o = Zr(t, e, bv, null, null, n), _o._currentValue = o), Xs(t, e), bt(t, e, a, n), e.child;
    case 6:
      return t === null && L && ((t = n = ct) && (n = s2(n, e.pendingProps, me), n !== null ? (e.stateNode = n, Ct = e, ct = null, t = !0) : t = !1), t || Hn(e)), null;
    case 13:
      return Zh(t, e, n);
    case 4:
      return ec(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Ea(e, null, a, n) : bt(t, e, a, n), e.child;
    case 11:
      return Xu(t, e, e.type, e.pendingProps, n);
    case 7:
      return bt(t, e, e.pendingProps, n), e.child;
    case 8:
      return bt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return bt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      return a = e.pendingProps, Xe(e, e.type, a.value), bt(t, e, a.children, n), e.child;
    case 9:
      return o = e.type._context, a = e.pendingProps.children, zn(e), o = At(o), a = a(o), e.flags |= 1, bt(t, e, a, n), e.child;
    case 14:
      return Zu(t, e, e.type, e.pendingProps, n);
    case 15:
      return Gh(t, e, e.type, e.pendingProps, n);
    case 19:
      return Kh(t, e, n);
    case 31:
      return a = e.pendingProps, n = e.mode, a = {
        mode: a.mode,
        children: a.children
      }, t === null ? (n = yc(a, n), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = Me(t.child, a), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
    case 22:
      return Xh(t, e, n);
    case 24:
      return zn(e), a = At(ft), t === null ? (o = qr(), o === null && (o = Q, s = Pr(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= n), o = s), e.memoizedState = {
        parent: a,
        cache: o
      }, Yr(e), Xe(e, ft, o)) : (t.lanes & n && (Cl(t, e), xo(e, null, null, n), ho()), o = t.memoizedState, s = e.memoizedState, o.parent !== a ? (o = {
        parent: a,
        cache: a
      }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Xe(e, ft, a)) : (a = s.cache, Xe(e, ft, a), a !== o.cache && Nl(e, [ft], n, !0))), bt(t, e, e.pendingProps.children, n), e.child;
    case 29:
      throw e.pendingProps
  }
  throw Error(T(156, e.tag))
}

function be(t) {
  t.flags |= 4
}

function Iu(t, e) {
  if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
  else if (t.flags |= 16777216, !U1(e)) {
    if (e = oe.current, e !== null && ((k & 4194048) === k ? xe !== null : (k & 62914560) !== k && !(k & 536870912) || e !== xe)) throw po = El, th;
    t.flags |= 8192
  }
}

function Cs(t, e) {
  e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? jf() : 536870912, t.lanes |= e, Ca |= e)
}

function Ja(t, e) {
  if (!L) switch (t.tailMode) {
    case "hidden":
      e = t.tail;
      for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
      n === null ? t.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = t.tail;
      for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
      a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
  }
}

function nt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    a = 0;
  if (e)
    for (var o = t.child; o !== null;) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = t, o = o.sibling;
  else
    for (o = t.child; o !== null;) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = t, o = o.sibling;
  return t.subtreeFlags |= a, t.childLanes = n, e
}

function Dv(t, e, n) {
  var a = e.pendingProps;
  switch (Lr(e), e.tag) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return nt(e), null;
    case 1:
      return nt(e), null;
    case 3:
      return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), De(ft), ba(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ka(e) ? be(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Cu())), nt(e), null;
    case 26:
      return n = e.memoizedState, t === null ? (be(e), n !== null ? (nt(e), Iu(e, n)) : (nt(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (be(e), nt(e), Iu(e, n)) : (nt(e), e.flags &= -16777217) : (t.memoizedProps !== a && be(e), nt(e), e.flags &= -16777217), null;
    case 27:
      nc(e), n = en.current;
      var o = e.type;
      if (t !== null && e.stateNode != null) t.memoizedProps !== a && be(e);
      else {
        if (!a) {
          if (e.stateNode === null) throw Error(T(166));
          return nt(e), null
        }
        t = fe.current, Ka(e) ? Au(e) : (t = H1(o, a, n), e.stateNode = t, be(e))
      }
      return nt(e), null;
    case 5:
      if (nc(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && be(e);
      else {
        if (!a) {
          if (e.stateNode === null) throw Error(T(166));
          return nt(e), null
        }
        if (t = fe.current, Ka(e)) Au(e);
        else {
          switch (o = Tc(en.current), t) {
            case 1:
              t = o.createElementNS("http://www.w3.org/2000/svg", n);
              break;
            case 2:
              t = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
              break;
            default:
              switch (n) {
                case "svg":
                  t = o.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case "math":
                  t = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                case "script":
                  t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                  break;
                case "select":
                  t = typeof a.is == "string" ? o.createElement("select", {
                    is: a.is
                  }) : o.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                  break;
                default:
                  t = typeof a.is == "string" ? o.createElement(n, {
                    is: a.is
                  }) : o.createElement(n)
              }
          }
          t[Nt] = e, t[Ht] = a;
          t: for (o = e.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
              o.child.return = o, o = o.child;
              continue
            }
            if (o === e) break t;
            for (; o.sibling === null;) {
              if (o.return === null || o.return === e) break t;
              o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
          }
          e.stateNode = t;
          t: switch (Tt(t, n, a), n) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              t = !!a.autoFocus;
              break t;
            case "img":
              t = !0;
              break t;
            default:
              t = !1
          }
          t && be(e)
        }
      }
      return nt(e), e.flags &= -16777217, null;
    case 6:
      if (t && e.stateNode != null) t.memoizedProps !== a && be(e);
      else {
        if (typeof a != "string" && e.stateNode === null) throw Error(T(166));
        if (t = en.current, Ka(e)) {
          if (t = e.stateNode, n = e.memoizedProps, a = null, o = Ct, o !== null) switch (o.tag) {
            case 27:
            case 5:
              a = o.memoizedProps
          }
          t[Nt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || R1(t.nodeValue, n)), t || Hn(e)
        } else t = Tc(t).createTextNode(a), t[Nt] = e, e.stateNode = t
      }
      return nt(e), null;
    case 13:
      if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (o = Ka(e), a !== null && a.dehydrated !== null) {
          if (t === null) {
            if (!o) throw Error(T(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(T(317));
            o[Nt] = e
          } else Wo(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          nt(e), o = !1
        } else o = Cu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
        if (!o) return e.flags & 256 ? (Ce(e), e) : (Ce(e), null)
      }
      if (Ce(e), e.flags & 128) return e.lanes = n, e;
      if (n = a !== null, t = t !== null && t.memoizedState !== null, n) {
        a = e.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool);
        var s = null;
        a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== o && (a.flags |= 2048)
      }
      return n !== t && n && (e.child.flags |= 8192), Cs(e, e.updateQueue), nt(e), null;
    case 4:
      return ba(), t === null && md(e.stateNode.containerInfo), nt(e), null;
    case 10:
      return De(e.type), nt(e), null;
    case 19:
      if (St(ht), o = e.memoizedState, o === null) return nt(e), null;
      if (a = (e.flags & 128) !== 0, s = o.rendering, s === null)
        if (a) Ja(o, !1);
        else {
          if (it !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null;) {
              if (s = fc(t), s !== null) {
                for (e.flags |= 128, Ja(o, !1), t = s.updateQueue, e.updateQueue = t, Cs(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;) Jf(n, t), n = n.sibling;
                return et(ht, ht.current & 1 | 2), e.child
              }
              t = t.sibling
            }
          o.tail !== null && he() > gc && (e.flags |= 128, a = !0, Ja(o, !1), e.lanes = 4194304)
        }
      else {
        if (!a)
          if (t = fc(s), t !== null) {
            if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Cs(e, t), Ja(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !L) return nt(e), null
          } else 2 * he() - o.renderingStartTime > gc && n !== 536870912 && (e.flags |= 128, a = !0, Ja(o, !1), e.lanes = 4194304);
        o.isBackwards ? (s.sibling = e.child, e.child = s) : (t = o.last, t !== null ? t.sibling = s : e.child = s, o.last = s)
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = he(), e.sibling = null, t = ht.current, et(ht, a ? t & 1 | 2 : t & 1), e) : (nt(e), null);
    case 22:
    case 23:
      return Ce(e), Gr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? n & 536870912 && !(e.flags & 128) && (nt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : nt(e), n = e.updateQueue, n !== null && Cs(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && St(Dn), null;
    case 24:
      return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), De(ft), nt(e), null;
    case 25:
      return null;
    case 30:
      return null
  }
  throw Error(T(156, e.tag))
}

function Rv(t, e) {
  switch (Lr(e), e.tag) {
    case 1:
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return De(ft), ba(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 26:
    case 27:
    case 5:
      return nc(e), null;
    case 13:
      if (Ce(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null) throw Error(T(340));
        Wo()
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return St(ht), null;
    case 4:
      return ba(), null;
    case 10:
      return De(e.type), null;
    case 22:
    case 23:
      return Ce(e), Gr(), t !== null && St(Dn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 24:
      return De(ft), null;
    case 25:
      return null;
    default:
      return null
  }
}

function Jh(t, e) {
  switch (Lr(e), e.tag) {
    case 3:
      De(ft), ba();
      break;
    case 26:
    case 27:
    case 5:
      nc(e);
      break;
    case 4:
      ba();
      break;
    case 13:
      Ce(e);
      break;
    case 19:
      St(ht);
      break;
    case 10:
      De(e.type);
      break;
    case 22:
    case 23:
      Ce(e), Gr(), t !== null && St(Dn);
      break;
    case 24:
      De(ft)
  }
}

function os(t, e) {
  try {
    var n = e.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var o = a.next;
      n = o;
      do {
        if ((n.tag & t) === t) {
          a = void 0;
          var s = n.create,
            c = n.inst;
          a = s(), c.destroy = a
        }
        n = n.next
      } while (n !== o)
    }
  } catch (i) {
    K(e, e.return, i)
  }
}

function un(t, e, n) {
  try {
    var a = e.updateQueue,
      o = a !== null ? a.lastEffect : null;
    if (o !== null) {
      var s = o.next;
      a = s;
      do {
        if ((a.tag & t) === t) {
          var c = a.inst,
            i = c.destroy;
          if (i !== void 0) {
            c.destroy = void 0, o = e;
            var r = n,
              d = i;
            try {
              d()
            } catch (u) {
              K(o, r, u)
            }
          }
        }
        a = a.next
      } while (a !== s)
    }
  } catch (u) {
    K(e, e.return, u)
  }
}

function $h(t) {
  var e = t.updateQueue;
  if (e !== null) {
    var n = t.stateNode;
    try {
      ah(e, n)
    } catch (a) {
      K(t, t.return, a)
    }
  }
}

function Wh(t, e, n) {
  n.props = Un(t.type, t.memoizedProps), n.state = t.memoizedState;
  try {
    n.componentWillUnmount()
  } catch (a) {
    K(t, e, a)
  }
}

function vo(t, e) {
  try {
    var n = t.ref;
    if (n !== null) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          var a = t.stateNode;
          break;
        case 30:
          a = t.stateNode;
          break;
        default:
          a = t.stateNode
      }
      typeof n == "function" ? t.refCleanup = n(a) : n.current = a
    }
  } catch (o) {
    K(t, e, o)
  }
}

function pe(t, e) {
  var n = t.ref,
    a = t.refCleanup;
  if (n !== null)
    if (typeof a == "function") try {
      a()
    } catch (o) {
      K(t, e, o)
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
    } else if (typeof n == "function") try {
      n(null)
    } catch (o) {
      K(t, e, o)
    } else n.current = null
}

function Ih(t) {
  var e = t.type,
    n = t.memoizedProps,
    a = t.stateNode;
  try {
    t: switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && a.focus();
        break t;
      case "img":
        n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
    }
  }
  catch (o) {
    K(t, t.return, o)
  }
}

function Oi(t, e, n) {
  try {
    var a = t.stateNode;
    Iv(a, t.type, n, e), a[Ht] = e
  } catch (o) {
    K(t, t.return, o)
  }
}

function t1(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && xn(t.type) || t.tag === 4
}

function Hi(t) {
  t: for (;;) {
    for (; t.sibling === null;) {
      if (t.return === null || t1(t.return)) return null;
      t = t.return
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
      if (t.tag === 27 && xn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
      t.child.return = t, t = t.child
    }
    if (!(t.flags & 2)) return t.stateNode
  }
}

function Bl(t, e, n) {
  var a = t.tag;
  if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = ei));
  else if (a !== 4 && (a === 27 && xn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
    for (Bl(t, e, n), t = t.sibling; t !== null;) Bl(t, e, n), t = t.sibling
}

function vc(t, e, n) {
  var a = t.tag;
  if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (a !== 4 && (a === 27 && xn(t.type) && (n = t.stateNode), t = t.child, t !== null))
    for (vc(t, e, n), t = t.sibling; t !== null;) vc(t, e, n), t = t.sibling
}

function e1(t) {
  var e = t.stateNode,
    n = t.memoizedProps;
  try {
    for (var a = t.type, o = e.attributes; o.length;) e.removeAttributeNode(o[0]);
    Tt(e, a, n), e[Nt] = t, e[Ht] = n
  } catch (s) {
    K(t, t.return, s)
  }
}
var Te = !1,
  dt = !1,
  zi = !1,
  tm = typeof WeakSet == "function" ? WeakSet : Set,
  yt = null;

function Vv(t, e) {
  if (t = t.containerInfo, Zl = Ec, t = Pf(t), zr(t)) {
    if ("selectionStart" in t) var n = {
      start: t.selectionStart,
      end: t.selectionEnd
    };
    else t: {
      n = (n = t.ownerDocument) && n.defaultView || window;
      var a = n.getSelection && n.getSelection();
      if (a && a.rangeCount !== 0) {
        n = a.anchorNode;
        var o = a.anchorOffset,
          s = a.focusNode;
        a = a.focusOffset;
        try {
          n.nodeType, s.nodeType
        } catch {
          n = null;
          break t
        }
        var c = 0,
          i = -1,
          r = -1,
          d = 0,
          u = 0,
          m = t,
          p = null;
        e: for (;;) {
          for (var f; m !== n || o !== 0 && m.nodeType !== 3 || (i = c + o), m !== s || a !== 0 && m.nodeType !== 3 || (r = c + a), m.nodeType === 3 && (c += m.nodeValue.length), (f = m.firstChild) !== null;) p = m, m = f;
          for (;;) {
            if (m === t) break e;
            if (p === n && ++d === o && (i = c), p === s && ++u === a && (r = c), (f = m.nextSibling) !== null) break;
            m = p, p = m.parentNode
          }
          m = f
        }
        n = i === -1 || r === -1 ? null : {
          start: i,
          end: r
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (Kl = {
      focusedElem: t,
      selectionRange: n
    }, Ec = !1, yt = e; yt !== null;)
    if (e = yt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, yt = t;
    else
      for (; yt !== null;) {
        switch (e = yt, s = e.alternate, t = e.flags, e.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (t & 1024 && s !== null) {
              t = void 0, n = e, o = s.memoizedProps, s = s.memoizedState, a = n.stateNode;
              try {
                var S = Un(n.type, o, n.elementType === n.type);
                t = a.getSnapshotBeforeUpdate(S, s), a.__reactInternalSnapshotBeforeUpdate = t
              } catch (v) {
                K(n, n.return, v)
              }
            }
            break;
          case 3:
            if (t & 1024) {
              if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Jl(t);
              else if (n === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Jl(t);
                  break;
                default:
                  t.textContent = ""
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (t & 1024) throw Error(T(163))
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, yt = t;
          break
        }
        yt = e.return
      }
}

function n1(t, e, n) {
  var a = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      Le(t, n), a & 4 && os(5, n);
      break;
    case 1:
      if (Le(t, n), a & 4)
        if (t = n.stateNode, e === null) try {
          t.componentDidMount()
        } catch (c) {
          K(n, n.return, c)
        } else {
          var o = Un(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate)
          } catch (c) {
            K(n, n.return, c)
          }
        }
      a & 64 && $h(n), a & 512 && vo(n, n.return);
      break;
    case 3:
      if (Le(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
        if (e = null, n.child !== null) switch (n.child.tag) {
          case 27:
          case 5:
            e = n.child.stateNode;
            break;
          case 1:
            e = n.child.stateNode
        }
        try {
          ah(t, e)
        } catch (c) {
          K(n, n.return, c)
        }
      }
      break;
    case 27:
      e === null && a & 4 && e1(n);
    case 26:
    case 5:
      Le(t, n), e === null && a & 4 && Ih(n), a & 512 && vo(n, n.return);
      break;
    case 12:
      Le(t, n);
      break;
    case 13:
      Le(t, n), a & 4 && s1(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Pv.bind(null, n), c2(t, n))));
      break;
    case 22:
      if (a = n.memoizedState !== null || Te, !a) {
        e = e !== null && e.memoizedState !== null || dt, o = Te;
        var s = dt;
        Te = a, (dt = e) && !s ? Pe(t, n, (n.subtreeFlags & 8772) !== 0) : Le(t, n), Te = o, dt = s
      }
      break;
    case 30:
      break;
    default:
      Le(t, n)
  }
}

function a1(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, a1(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Mr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}
var I = null,
  Vt = !1;

function we(t, e, n) {
  for (n = n.child; n !== null;) o1(t, e, n), n = n.sibling
}

function o1(t, e, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
    Pt.onCommitFiberUnmount(Zo, n)
  } catch {}
  switch (n.tag) {
    case 26:
      dt || pe(n, e), we(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
      break;
    case 27:
      dt || pe(n, e);
      var a = I,
        o = Vt;
      xn(n.type) && (I = n.stateNode, Vt = !1), we(t, e, n), bo(n.stateNode), I = a, Vt = o;
      break;
    case 5:
      dt || pe(n, e);
    case 6:
      if (a = I, o = Vt, I = null, we(t, e, n), I = a, Vt = o, I !== null)
        if (Vt) try {
          (I.nodeType === 9 ? I.body : I.nodeName === "HTML" ? I.ownerDocument.body : I).removeChild(n.stateNode)
        } catch (s) {
          K(n, e, s)
        } else try {
          I.removeChild(n.stateNode)
        } catch (s) {
          K(n, e, s)
        }
      break;
    case 18:
      I !== null && (Vt ? (t = I, mm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), ko(t)) : mm(I, n.stateNode));
      break;
    case 4:
      a = I, o = Vt, I = n.stateNode.containerInfo, Vt = !0, we(t, e, n), I = a, Vt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      dt || un(2, n, e), dt || un(4, n, e), we(t, e, n);
      break;
    case 1:
      dt || (pe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Wh(n, e, a)), we(t, e, n);
      break;
    case 21:
      we(t, e, n);
      break;
    case 22:
      dt = (a = dt) || n.memoizedState !== null, we(t, e, n), dt = a;
      break;
    default:
      we(t, e, n)
  }
}

function s1(t, e) {
  if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
    ko(t)
  } catch (n) {
    K(e, e.return, n)
  }
}

function Ov(t) {
  switch (t.tag) {
    case 13:
    case 19:
      var e = t.stateNode;
      return e === null && (e = t.stateNode = new tm), e;
    case 22:
      return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new tm), e;
    default:
      throw Error(T(435, t.tag))
  }
}

function _i(t, e) {
  var n = Ov(t);
  e.forEach(function(a) {
    var o = qv.bind(null, t, a);
    n.has(a) || (n.add(a), a.then(o, o))
  })
}

function Ut(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var o = n[a],
        s = t,
        c = e,
        i = c;
      t: for (; i !== null;) {
        switch (i.tag) {
          case 27:
            if (xn(i.type)) {
              I = i.stateNode, Vt = !1;
              break t
            }
            break;
          case 5:
            I = i.stateNode, Vt = !1;
            break t;
          case 3:
          case 4:
            I = i.stateNode.containerInfo, Vt = !0;
            break t
        }
        i = i.return
      }
      if (I === null) throw Error(T(160));
      o1(s, c, o), I = null, Vt = !1, s = o.alternate, s !== null && (s.return = null), o.return = null
    }
  if (e.subtreeFlags & 13878)
    for (e = e.child; e !== null;) c1(e, t), e = e.sibling
}
var le = null;

function c1(t, e) {
  var n = t.alternate,
    a = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Ut(e, t), Bt(t), a & 4 && (un(3, t, t.return), os(3, t), un(5, t, t.return));
      break;
    case 1:
      Ut(e, t), Bt(t), a & 512 && (dt || n === null || pe(n, n.return)), a & 64 && Te && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
      break;
    case 26:
      var o = le;
      if (Ut(e, t), Bt(t), a & 512 && (dt || n === null || pe(n, n.return)), a & 4) {
        var s = n !== null ? n.memoizedState : null;
        if (a = t.memoizedState, n === null)
          if (a === null)
            if (t.stateNode === null) {
              t: {
                a = t.type,
                n = t.memoizedProps,
                o = o.ownerDocument || o;e: switch (a) {
                  case "title":
                    s = o.getElementsByTagName("title")[0], (!s || s[Jo] || s[Nt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(a), o.head.insertBefore(s, o.querySelector("head > title"))), Tt(s, a, n), s[Nt] = t, vt(s), a = s;
                    break t;
                  case "link":
                    var c = ym("link", "href", o).get(a + (n.href || ""));
                    if (c) {
                      for (var i = 0; i < c.length; i++)
                        if (s = c[i], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                          c.splice(i, 1);
                          break e
                        }
                    }
                    s = o.createElement(a), Tt(s, a, n), o.head.appendChild(s);
                    break;
                  case "meta":
                    if (c = ym("meta", "content", o).get(a + (n.content || ""))) {
                      for (i = 0; i < c.length; i++)
                        if (s = c[i], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                          c.splice(i, 1);
                          break e
                        }
                    }
                    s = o.createElement(a), Tt(s, a, n), o.head.appendChild(s);
                    break;
                  default:
                    throw Error(T(468, a))
                }
                s[Nt] = t,
                vt(s),
                a = s
              }
              t.stateNode = a
            }
        else vm(o, t.type, t.stateNode);
        else t.stateNode = xm(o, a, t.memoizedProps);
        else s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? vm(o, t.type, t.stateNode) : xm(o, a, t.memoizedProps)) : a === null && t.stateNode !== null && Oi(t, t.memoizedProps, n.memoizedProps)
      }
      break;
    case 27:
      Ut(e, t), Bt(t), a & 512 && (dt || n === null || pe(n, n.return)), n !== null && a & 4 && Oi(t, t.memoizedProps, n.memoizedProps);
      break;
    case 5:
      if (Ut(e, t), Bt(t), a & 512 && (dt || n === null || pe(n, n.return)), t.flags & 32) {
        o = t.stateNode;
        try {
          Ta(o, "")
        } catch (f) {
          K(t, t.return, f)
        }
      }
      a & 4 && t.stateNode != null && (o = t.memoizedProps, Oi(t, o, n !== null ? n.memoizedProps : o)), a & 1024 && (zi = !0);
      break;
    case 6:
      if (Ut(e, t), Bt(t), a & 4) {
        if (t.stateNode === null) throw Error(T(162));
        a = t.memoizedProps, n = t.stateNode;
        try {
          n.nodeValue = a
        } catch (f) {
          K(t, t.return, f)
        }
      }
      break;
    case 3:
      if (Qs = null, o = le, le = Fc(e.containerInfo), Ut(e, t), le = o, Bt(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ko(e.containerInfo)
      } catch (f) {
        K(t, t.return, f)
      }
      zi && (zi = !1, i1(t));
      break;
    case 4:
      a = le, le = Fc(t.stateNode.containerInfo), Ut(e, t), Bt(t), le = a;
      break;
    case 12:
      Ut(e, t), Bt(t);
      break;
    case 13:
      Ut(e, t), Bt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (rd = he()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, _i(t, a)));
      break;
    case 22:
      o = t.memoizedState !== null;
      var r = n !== null && n.memoizedState !== null,
        d = Te,
        u = dt;
      if (Te = d || o, dt = u || r, Ut(e, t), dt = u, Te = d, Bt(t), a & 8192) t: for (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, o && (n === null || r || Te || dt || wn(t)), n = null, e = t;;) {
        if (e.tag === 5 || e.tag === 26) {
          if (n === null) {
            r = n = e;
            try {
              if (s = r.stateNode, o) c = s.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
              else {
                i = r.stateNode;
                var m = r.memoizedProps.style,
                  p = m != null && m.hasOwnProperty("display") ? m.display : null;
                i.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim()
              }
            } catch (f) {
              K(r, r.return, f)
            }
          }
        } else if (e.tag === 6) {
          if (n === null) {
            r = e;
            try {
              r.stateNode.nodeValue = o ? "" : r.memoizedProps
            } catch (f) {
              K(r, r.return, f)
            }
          }
        } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
          e.child.return = e, e = e.child;
          continue
        }
        if (e === t) break t;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break t;
          n === e && (n = null), e = e.return
        }
        n === e && (n = null), e.sibling.return = e.return, e = e.sibling
      }
      a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, _i(t, n))));
      break;
    case 19:
      Ut(e, t), Bt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, _i(t, a)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      Ut(e, t), Bt(t)
  }
}

function Bt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      for (var n, a = t.return; a !== null;) {
        if (t1(a)) {
          n = a;
          break
        }
        a = a.return
      }
      if (n == null) throw Error(T(160));
      switch (n.tag) {
        case 27:
          var o = n.stateNode,
            s = Hi(t);
          vc(t, s, o);
          break;
        case 5:
          var c = n.stateNode;
          n.flags & 32 && (Ta(c, ""), n.flags &= -33);
          var i = Hi(t);
          vc(t, i, c);
          break;
        case 3:
        case 4:
          var r = n.stateNode.containerInfo,
            d = Hi(t);
          Bl(t, d, r);
          break;
        default:
          throw Error(T(161))
      }
    } catch (u) {
      K(t, t.return, u)
    }
    t.flags &= -3
  }
  e & 4096 && (t.flags &= -4097)
}

function i1(t) {
  if (t.subtreeFlags & 1024)
    for (t = t.child; t !== null;) {
      var e = t;
      i1(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
    }
}

function Le(t, e) {
  if (e.subtreeFlags & 8772)
    for (e = e.child; e !== null;) n1(t, e.alternate, e), e = e.sibling
}

function wn(t) {
  for (t = t.child; t !== null;) {
    var e = t;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        un(4, e, e.return), wn(e);
        break;
      case 1:
        pe(e, e.return);
        var n = e.stateNode;
        typeof n.componentWillUnmount == "function" && Wh(e, e.return, n), wn(e);
        break;
      case 27:
        bo(e.stateNode);
      case 26:
      case 5:
        pe(e, e.return), wn(e);
        break;
      case 22:
        e.memoizedState === null && wn(e);
        break;
      case 30:
        wn(e);
        break;
      default:
        wn(e)
    }
    t = t.sibling
  }
}

function Pe(t, e, n) {
  for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
    var a = e.alternate,
      o = t,
      s = e,
      c = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Pe(o, s, n), os(4, s);
        break;
      case 1:
        if (Pe(o, s, n), a = s, o = a.stateNode, typeof o.componentDidMount == "function") try {
          o.componentDidMount()
        } catch (d) {
          K(a, a.return, d)
        }
        if (a = s, o = a.updateQueue, o !== null) {
          var i = a.stateNode;
          try {
            var r = o.shared.hiddenCallbacks;
            if (r !== null)
              for (o.shared.hiddenCallbacks = null, o = 0; o < r.length; o++) nh(r[o], i)
          } catch (d) {
            K(a, a.return, d)
          }
        }
        n && c & 64 && $h(s), vo(s, s.return);
        break;
      case 27:
        e1(s);
      case 26:
      case 5:
        Pe(o, s, n), n && a === null && c & 4 && Ih(s), vo(s, s.return);
        break;
      case 12:
        Pe(o, s, n);
        break;
      case 13:
        Pe(o, s, n), n && c & 4 && s1(o, s);
        break;
      case 22:
        s.memoizedState === null && Pe(o, s, n), vo(s, s.return);
        break;
      case 30:
        break;
      default:
        Pe(o, s, n)
    }
    e = e.sibling
  }
}

function sd(t, e) {
  var n = null;
  t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && ts(n))
}

function cd(t, e) {
  t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ts(t))
}

function ue(t, e, n, a) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null;) l1(t, e, n, a), e = e.sibling
}

function l1(t, e, n, a) {
  var o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      ue(t, e, n, a), o & 2048 && os(9, e);
      break;
    case 1:
      ue(t, e, n, a);
      break;
    case 3:
      ue(t, e, n, a), o & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ts(t)));
      break;
    case 12:
      if (o & 2048) {
        ue(t, e, n, a), t = e.stateNode;
        try {
          var s = e.memoizedProps,
            c = s.id,
            i = s.onPostCommit;
          typeof i == "function" && i(c, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
        } catch (r) {
          K(e, e.return, r)
        }
      } else ue(t, e, n, a);
      break;
    case 13:
      ue(t, e, n, a);
      break;
    case 23:
      break;
    case 22:
      s = e.stateNode, c = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? ue(t, e, n, a) : go(t, e) : s._visibility & 2 ? ue(t, e, n, a) : (s._visibility |= 2, Kn(t, e, n, a, (e.subtreeFlags & 10256) !== 0)), o & 2048 && sd(c, e);
      break;
    case 24:
      ue(t, e, n, a), o & 2048 && cd(e.alternate, e);
      break;
    default:
      ue(t, e, n, a)
  }
}

function Kn(t, e, n, a, o) {
  for (o = o && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
    var s = t,
      c = e,
      i = n,
      r = a,
      d = c.flags;
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
        Kn(s, c, i, r, o), os(8, c);
        break;
      case 23:
        break;
      case 22:
        var u = c.stateNode;
        c.memoizedState !== null ? u._visibility & 2 ? Kn(s, c, i, r, o) : go(s, c) : (u._visibility |= 2, Kn(s, c, i, r, o)), o && d & 2048 && sd(c.alternate, c);
        break;
      case 24:
        Kn(s, c, i, r, o), o && d & 2048 && cd(c.alternate, c);
        break;
      default:
        Kn(s, c, i, r, o)
    }
    e = e.sibling
  }
}

function go(t, e) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null;) {
      var n = t,
        a = e,
        o = a.flags;
      switch (a.tag) {
        case 22:
          go(n, a), o & 2048 && sd(a.alternate, a);
          break;
        case 24:
          go(n, a), o & 2048 && cd(a.alternate, a);
          break;
        default:
          go(n, a)
      }
      e = e.sibling
    }
}
var ao = 8192;

function Yn(t) {
  if (t.subtreeFlags & ao)
    for (t = t.child; t !== null;) r1(t), t = t.sibling
}

function r1(t) {
  switch (t.tag) {
    case 26:
      Yn(t), t.flags & ao && t.memoizedState !== null && g2(le, t.memoizedState, t.memoizedProps);
      break;
    case 5:
      Yn(t);
      break;
    case 3:
    case 4:
      var e = le;
      le = Fc(t.stateNode.containerInfo), Yn(t), le = e;
      break;
    case 22:
      t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = ao, ao = 16777216, Yn(t), ao = e) : Yn(t));
      break;
    default:
      Yn(t)
  }
}

function d1(t) {
  var e = t.alternate;
  if (e !== null && (t = e.child, t !== null)) {
    e.child = null;
    do e = t.sibling, t.sibling = null, t = e; while (t !== null)
  }
}

function $a(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        yt = a, m1(a, t)
      }
    d1(t)
  }
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null;) u1(t), t = t.sibling
}

function u1(t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      $a(t), t.flags & 2048 && un(9, t, t.return);
      break;
    case 3:
      $a(t);
      break;
    case 12:
      $a(t);
      break;
    case 22:
      var e = t.stateNode;
      t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Zs(t)) : $a(t);
      break;
    default:
      $a(t)
  }
}

function Zs(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        yt = a, m1(a, t)
      }
    d1(t)
  }
  for (t = t.child; t !== null;) {
    switch (e = t, e.tag) {
      case 0:
      case 11:
      case 15:
        un(8, e, e.return), Zs(e);
        break;
      case 22:
        n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Zs(e));
        break;
      default:
        Zs(e)
    }
    t = t.sibling
  }
}

function m1(t, e) {
  for (; yt !== null;) {
    var n = yt;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        un(8, n, e);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var a = n.memoizedState.cachePool.pool;
          a != null && a.refCount++
        }
        break;
      case 24:
        ts(n.memoizedState.cache)
    }
    if (a = n.child, a !== null) a.return = n, yt = a;
    else t: for (n = t; yt !== null;) {
      a = yt;
      var o = a.sibling,
        s = a.return;
      if (a1(a), a === n) {
        yt = null;
        break t
      }
      if (o !== null) {
        o.return = s, yt = o;
        break t
      }
      yt = s
    }
  }
}
var Hv = {
    getCacheForType: function(t) {
      var e = At(ft),
        n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n
    }
  },
  zv = typeof WeakMap == "function" ? WeakMap : Map,
  G = 0,
  Q = null,
  U = null,
  k = 0,
  Y = 0,
  kt = null,
  We = !1,
  ka = !1,
  id = !1,
  _e = 0,
  it = 0,
  mn = 0,
  Rn = 0,
  ld = 0,
  ae = 0,
  Ca = 0,
  So = null,
  Ot = null,
  kl = !1,
  rd = 0,
  gc = 1 / 0,
  Sc = null,
  on = null,
  wt = 0,
  sn = null,
  Ma = null,
  Sa = 0,
  Ll = 0,
  Pl = null,
  p1 = null,
  jo = 0,
  ql = null;

function Yt() {
  if (G & 2 && k !== 0) return k & -k;
  if (O.T !== null) {
    var t = Fa;
    return t !== 0 ? t : ud()
  }
  return Tf()
}

function f1() {
  ae === 0 && (ae = !(k & 536870912) || L ? Sf() : 536870912);
  var t = oe.current;
  return t !== null && (t.flags |= 32), ae
}

function Gt(t, e, n) {
  (t === Q && (Y === 2 || Y === 9) || t.cancelPendingCommit !== null) && (Da(t, 0), Ie(t, k, ae, !1)), Qo(t, n), (!(G & 2) || t !== Q) && (t === Q && (!(G & 2) && (Rn |= n), it === 4 && Ie(t, k, ae, !1)), Se(t))
}

function h1(t, e, n) {
  if (G & 6) throw Error(T(327));
  var a = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ko(t, e),
    o = a ? Bv(t, e) : Ui(t, e, !0),
    s = a;
  do {
    if (o === 0) {
      ka && !a && Ie(t, e, 0, !1);
      break
    } else {
      if (n = t.current.alternate, s && !_v(n)) {
        o = Ui(t, e, !1), s = !1;
        continue
      }
      if (o === 2) {
        if (s = e, t.errorRecoveryDisabledLanes & s) var c = 0;
        else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
        if (c !== 0) {
          e = c;
          t: {
            var i = t;o = So;
            var r = i.current.memoizedState.isDehydrated;
            if (r && (Da(i, c).flags |= 256), c = Ui(i, c, !1), c !== 2) {
              if (id && !r) {
                i.errorRecoveryDisabledLanes |= s, Rn |= s, o = 4;
                break t
              }
              s = Ot, Ot = o, s !== null && (Ot === null ? Ot = s : Ot.push.apply(Ot, s))
            }
            o = c
          }
          if (s = !1, o !== 2) continue
        }
      }
      if (o === 1) {
        Da(t, 0), Ie(t, e, 0, !0);
        break
      }
      t: {
        switch (a = t, s = o, s) {
          case 0:
          case 1:
            throw Error(T(345));
          case 4:
            if ((e & 4194048) !== e) break;
          case 6:
            Ie(a, e, ae, !We);
            break t;
          case 2:
            Ot = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(T(329))
        }
        if ((e & 62914560) === e && (o = rd + 300 - he(), 10 < o)) {
          if (Ie(a, e, ae, !We), Pc(a, 0, !0) !== 0) break t;
          a.timeoutHandle = O1(em.bind(null, a, n, Ot, Sc, kl, e, ae, Rn, Ca, We, s, 2, -0, 0), o);
          break t
        }
        em(a, n, Ot, Sc, kl, e, ae, Rn, Ca, We, s, 0, -0, 0)
      }
    }
    break
  } while (!0);
  Se(t)
}

function em(t, e, n, a, o, s, c, i, r, d, u, m, p, f) {
  if (t.timeoutHandle = -1, m = e.subtreeFlags, (m & 8192 || (m & 16785408) === 16785408) && (zo = {
      stylesheets: null,
      count: 0,
      unsuspend: v2
    }, r1(e), m = S2(), m !== null)) {
    t.cancelPendingCommit = m(am.bind(null, t, e, s, n, a, o, c, i, r, u, 1, p, f)), Ie(t, s, c, !d);
    return
  }
  am(t, e, s, n, a, o, c, i, r)
}

function _v(t) {
  for (var e = t;;) {
    var n = e.tag;
    if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
      for (var a = 0; a < n.length; a++) {
        var o = n[a],
          s = o.getSnapshot;
        o = o.value;
        try {
          if (!Zt(s(), o)) return !1
        } catch {
          return !1
        }
      }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
    else {
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return !0;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
  }
  return !0
}

function Ie(t, e, n, a) {
  e &= ~ld, e &= ~Rn, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
  for (var o = e; 0 < o;) {
    var s = 31 - qt(o),
      c = 1 << s;
    a[s] = -1, o &= ~c
  }
  n !== 0 && bf(t, n, e)
}

function Wc() {
  return G & 6 ? !0 : (ss(0), !1)
}

function dd() {
  if (U !== null) {
    if (Y === 0) var t = U.return;
    else t = U, Ee = Pn = null, Jr(t), ga = null, Vo = 0, t = U;
    for (; t !== null;) Jh(t.alternate, t), t = t.return;
    U = null
  }
}

function Da(t, e) {
  var n = t.timeoutHandle;
  n !== -1 && (t.timeoutHandle = -1, e2(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), dd(), Q = t, U = n = Me(t.current, null), k = e, Y = 0, kt = null, We = !1, ka = Ko(t, e), id = !1, Ca = ae = ld = Rn = mn = it = 0, Ot = So = null, kl = !1, e & 8 && (e |= e & 32);
  var a = t.entangledLanes;
  if (a !== 0)
    for (t = t.entanglements, a &= e; 0 < a;) {
      var o = 31 - qt(a),
        s = 1 << o;
      e |= t[o], a &= ~s
    }
  return _e = e, Xc(), n
}

function x1(t, e) {
  z = null, O.H = pc, e === es || e === Kc ? (e = Vu(), Y = 3) : e === th ? (e = Vu(), Y = 4) : Y = e === Yh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, kt = e, U === null && (it = 1, xc(t, ne(e, t.current)))
}

function y1() {
  var t = O.H;
  return O.H = pc, t === null ? pc : t
}

function v1() {
  var t = O.A;
  return O.A = Hv, t
}

function Yl() {
  it = 4, We || (k & 4194048) !== k && oe.current !== null || (ka = !0), !(mn & 134217727) && !(Rn & 134217727) || Q === null || Ie(Q, k, ae, !1)
}

function Ui(t, e, n) {
  var a = G;
  G |= 2;
  var o = y1(),
    s = v1();
  (Q !== t || k !== e) && (Sc = null, Da(t, e)), e = !1;
  var c = it;
  t: do try {
      if (Y !== 0 && U !== null) {
        var i = U,
          r = kt;
        switch (Y) {
          case 8:
            dd(), c = 6;
            break t;
          case 3:
          case 2:
          case 9:
          case 6:
            oe.current === null && (e = !0);
            var d = Y;
            if (Y = 0, kt = null, ia(t, i, r, d), n && ka) {
              c = 0;
              break t
            }
            break;
          default:
            d = Y, Y = 0, kt = null, ia(t, i, r, d)
        }
      }
      Uv(), c = it;
      break
    } catch (u) {
      x1(t, u)
    }
    while (!0);
    return e && t.shellSuspendCounter++, Ee = Pn = null, G = a, O.H = o, O.A = s, U === null && (Q = null, k = 0, Xc()), c
}

function Uv() {
  for (; U !== null;) g1(U)
}

function Bv(t, e) {
  var n = G;
  G |= 2;
  var a = y1(),
    o = v1();
  Q !== t || k !== e ? (Sc = null, gc = he() + 500, Da(t, e)) : ka = Ko(t, e);
  t: do try {
      if (Y !== 0 && U !== null) {
        e = U;
        var s = kt;
        e: switch (Y) {
          case 1:
            Y = 0, kt = null, ia(t, e, s, 1);
            break;
          case 2:
          case 9:
            if (Ru(s)) {
              Y = 0, kt = null, nm(e);
              break
            }
            e = function() {
              Y !== 2 && Y !== 9 || Q !== t || (Y = 7), Se(t)
            }, s.then(e, e);
            break t;
          case 3:
            Y = 7;
            break t;
          case 4:
            Y = 5;
            break t;
          case 7:
            Ru(s) ? (Y = 0, kt = null, nm(e)) : (Y = 0, kt = null, ia(t, e, s, 7));
            break;
          case 5:
            var c = null;
            switch (U.tag) {
              case 26:
                c = U.memoizedState;
              case 5:
              case 27:
                var i = U;
                if (!c || U1(c)) {
                  Y = 0, kt = null;
                  var r = i.sibling;
                  if (r !== null) U = r;
                  else {
                    var d = i.return;
                    d !== null ? (U = d, Ic(d)) : U = null
                  }
                  break e
                }
            }
            Y = 0, kt = null, ia(t, e, s, 5);
            break;
          case 6:
            Y = 0, kt = null, ia(t, e, s, 6);
            break;
          case 8:
            dd(), it = 6;
            break t;
          default:
            throw Error(T(462))
        }
      }
      kv();
      break
    } catch (u) {
      x1(t, u)
    }
    while (!0);
    return Ee = Pn = null, O.H = a, O.A = o, G = n, U !== null ? 0 : (Q = null, k = 0, Xc(), it)
}

function kv() {
  for (; U !== null && !ly();) g1(U)
}

function g1(t) {
  var e = Qh(t.alternate, t, _e);
  t.memoizedProps = t.pendingProps, e === null ? Ic(t) : U = e
}

function nm(t) {
  var e = t,
    n = e.alternate;
  switch (e.tag) {
    case 15:
    case 0:
      e = Qu(n, e, e.pendingProps, e.type, void 0, k);
      break;
    case 11:
      e = Qu(n, e, e.pendingProps, e.type.render, e.ref, k);
      break;
    case 5:
      Jr(e);
    default:
      Jh(n, e), e = U = Jf(e, _e), e = Qh(n, e, _e)
  }
  t.memoizedProps = t.pendingProps, e === null ? Ic(t) : U = e
}

function ia(t, e, n, a) {
  Ee = Pn = null, Jr(e), ga = null, Vo = 0;
  var o = e.return;
  try {
    if (Cv(t, o, e, n, k)) {
      it = 1, xc(t, ne(n, t.current)), U = null;
      return
    }
  } catch (s) {
    if (o !== null) throw U = o, s;
    it = 1, xc(t, ne(n, t.current)), U = null;
    return
  }
  e.flags & 32768 ? (L || a === 1 ? t = !0 : ka || k & 536870912 ? t = !1 : (We = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = oe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), S1(e, t)) : Ic(e)
}

function Ic(t) {
  var e = t;
  do {
    if (e.flags & 32768) {
      S1(e, We);
      return
    }
    t = e.return;
    var n = Dv(e.alternate, e, _e);
    if (n !== null) {
      U = n;
      return
    }
    if (e = e.sibling, e !== null) {
      U = e;
      return
    }
    U = e = t
  } while (e !== null);
  it === 0 && (it = 5)
}

function S1(t, e) {
  do {
    var n = Rv(t.alternate, t);
    if (n !== null) {
      n.flags &= 32767, U = n;
      return
    }
    if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
      U = t;
      return
    }
    U = t = n
  } while (t !== null);
  it = 6, U = null
}

function am(t, e, n, a, o, s, c, i, r) {
  t.cancelPendingCommit = null;
  do ti(); while (wt !== 0);
  if (G & 6) throw Error(T(327));
  if (e !== null) {
    if (e === t.current) throw Error(T(177));
    if (s = e.lanes | e.childLanes, s |= _r, vy(t, n, s, c, i, r), t === Q && (U = Q = null, k = 0), Ma = e, sn = t, Sa = n, Ll = s, Pl = o, p1 = a, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, Yv(ac, function() {
        return F1(), null
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || a) {
      a = O.T, O.T = null, o = P.p, P.p = 2, c = G, G |= 4;
      try {
        Vv(t, e, n)
      } finally {
        G = c, P.p = o, O.T = a
      }
    }
    wt = 1, j1(), b1(), w1()
  }
}

function j1() {
  if (wt === 1) {
    wt = 0;
    var t = sn,
      e = Ma,
      n = (e.flags & 13878) !== 0;
    if (e.subtreeFlags & 13878 || n) {
      n = O.T, O.T = null;
      var a = P.p;
      P.p = 2;
      var o = G;
      G |= 4;
      try {
        c1(e, t);
        var s = Kl,
          c = Pf(t.containerInfo),
          i = s.focusedElem,
          r = s.selectionRange;
        if (c !== i && i && i.ownerDocument && Lf(i.ownerDocument.documentElement, i)) {
          if (r !== null && zr(i)) {
            var d = r.start,
              u = r.end;
            if (u === void 0 && (u = d), "selectionStart" in i) i.selectionStart = d, i.selectionEnd = Math.min(u, i.value.length);
            else {
              var m = i.ownerDocument || document,
                p = m && m.defaultView || window;
              if (p.getSelection) {
                var f = p.getSelection(),
                  S = i.textContent.length,
                  v = Math.min(r.start, S),
                  b = r.end === void 0 ? v : Math.min(r.end, S);
                !f.extend && v > b && (c = b, b = v, v = c);
                var x = Tu(i, v),
                  h = Tu(i, b);
                if (x && h && (f.rangeCount !== 1 || f.anchorNode !== x.node || f.anchorOffset !== x.offset || f.focusNode !== h.node || f.focusOffset !== h.offset)) {
                  var y = m.createRange();
                  y.setStart(x.node, x.offset), f.removeAllRanges(), v > b ? (f.addRange(y), f.extend(h.node, h.offset)) : (y.setEnd(h.node, h.offset), f.addRange(y))
                }
              }
            }
          }
          for (m = [], f = i; f = f.parentNode;) f.nodeType === 1 && m.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
          for (typeof i.focus == "function" && i.focus(), i = 0; i < m.length; i++) {
            var g = m[i];
            g.element.scrollLeft = g.left, g.element.scrollTop = g.top
          }
        }
        Ec = !!Zl, Kl = Zl = null
      } finally {
        G = o, P.p = a, O.T = n
      }
    }
    t.current = e, wt = 2
  }
}

function b1() {
  if (wt === 2) {
    wt = 0;
    var t = sn,
      e = Ma,
      n = (e.flags & 8772) !== 0;
    if (e.subtreeFlags & 8772 || n) {
      n = O.T, O.T = null;
      var a = P.p;
      P.p = 2;
      var o = G;
      G |= 4;
      try {
        n1(t, e.alternate, e)
      } finally {
        G = o, P.p = a, O.T = n
      }
    }
    wt = 3
  }
}

function w1() {
  if (wt === 4 || wt === 3) {
    wt = 0, ry();
    var t = sn,
      e = Ma,
      n = Sa,
      a = p1;
    e.subtreeFlags & 10256 || e.flags & 10256 ? wt = 5 : (wt = 0, Ma = sn = null, T1(t, t.pendingLanes));
    var o = t.pendingLanes;
    if (o === 0 && (on = null), Cr(n), e = e.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function") try {
      Pt.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
    if (a !== null) {
      e = O.T, o = P.p, P.p = 2, O.T = null;
      try {
        for (var s = t.onRecoverableError, c = 0; c < a.length; c++) {
          var i = a[c];
          s(i.value, {
            componentStack: i.stack
          })
        }
      } finally {
        O.T = e, P.p = o
      }
    }
    Sa & 3 && ti(), Se(t), o = t.pendingLanes, n & 4194090 && o & 42 ? t === ql ? jo++ : (jo = 0, ql = t) : jo = 0, ss(0)
  }
}

function T1(t, e) {
  (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ts(e)))
}

function ti(t) {
  return j1(), b1(), w1(), F1()
}

function F1() {
  if (wt !== 5) return !1;
  var t = sn,
    e = Ll;
  Ll = 0;
  var n = Cr(Sa),
    a = O.T,
    o = P.p;
  try {
    P.p = 32 > n ? 32 : n, O.T = null, n = Pl, Pl = null;
    var s = sn,
      c = Sa;
    if (wt = 0, Ma = sn = null, Sa = 0, G & 6) throw Error(T(331));
    var i = G;
    if (G |= 4, u1(s.current), l1(s, s.current, c, n), G = i, ss(0, !1), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
      Pt.onPostCommitFiberRoot(Zo, s)
    } catch {}
    return !0
  } finally {
    P.p = o, O.T = a, T1(t, e)
  }
}

function om(t, e, n) {
  e = ne(n, e), e = zl(t.stateNode, e, 2), t = an(t, e, 2), t !== null && (Qo(t, 2), Se(t))
}

function K(t, e, n) {
  if (t.tag === 3) om(t, t, n);
  else
    for (; e !== null;) {
      if (e.tag === 3) {
        om(e, t, n);
        break
      } else if (e.tag === 1) {
        var a = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (on === null || !on.has(a))) {
          t = ne(n, t), n = Ph(2), a = an(e, n, 2), a !== null && (qh(n, a, e, t), Qo(a, 2), Se(a));
          break
        }
      }
      e = e.return
    }
}

function Bi(t, e, n) {
  var a = t.pingCache;
  if (a === null) {
    a = t.pingCache = new zv;
    var o = new Set;
    a.set(e, o)
  } else o = a.get(e), o === void 0 && (o = new Set, a.set(e, o));
  o.has(n) || (id = !0, o.add(n), t = Lv.bind(null, t, e, n), e.then(t, t))
}

function Lv(t, e, n) {
  var a = t.pingCache;
  a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Q === t && (k & n) === n && (it === 4 || it === 3 && (k & 62914560) === k && 300 > he() - rd ? !(G & 2) && Da(t, 0) : ld |= n, Ca === k && (Ca = 0)), Se(t)
}

function N1(t, e) {
  e === 0 && (e = jf()), t = Ba(t, e), t !== null && (Qo(t, e), Se(t))
}

function Pv(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), N1(t, n)
}

function qv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var a = t.stateNode,
        o = t.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      a = t.stateNode;
      break;
    case 22:
      a = t.stateNode._retryCache;
      break;
    default:
      throw Error(T(314))
  }
  a !== null && a.delete(e), N1(t, n)
}

function Yv(t, e) {
  return Ar(t, e)
}
var jc = null,
  Qn = null,
  Gl = !1,
  bc = !1,
  ki = !1,
  Vn = 0;

function Se(t) {
  t !== Qn && t.next === null && (Qn === null ? jc = Qn = t : Qn = Qn.next = t), bc = !0, Gl || (Gl = !0, Xv())
}

function ss(t, e) {
  if (!ki && bc) {
    ki = !0;
    do
      for (var n = !1, a = jc; a !== null;) {
        if (t !== 0) {
          var o = a.pendingLanes;
          if (o === 0) var s = 0;
          else {
            var c = a.suspendedLanes,
              i = a.pingedLanes;
            s = (1 << 31 - qt(42 | t) + 1) - 1, s &= o & ~(c & ~i), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
          }
          s !== 0 && (n = !0, sm(a, s))
        } else s = k, s = Pc(a, a === Q ? s : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), !(s & 3) || Ko(a, s) || (n = !0, sm(a, s));
        a = a.next
      }
    while (n);
    ki = !1
  }
}

function Gv() {
  A1()
}

function A1() {
  bc = Gl = !1;
  var t = 0;
  Vn !== 0 && (t2() && (t = Vn), Vn = 0);
  for (var e = he(), n = null, a = jc; a !== null;) {
    var o = a.next,
      s = E1(a, e);
    s === 0 ? (a.next = null, n === null ? jc = o : n.next = o, o === null && (Qn = n)) : (n = a, (t !== 0 || s & 3) && (bc = !0)), a = o
  }
  ss(t)
}

function E1(t, e) {
  for (var n = t.suspendedLanes, a = t.pingedLanes, o = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s;) {
    var c = 31 - qt(s),
      i = 1 << c,
      r = o[c];
    r === -1 ? (!(i & n) || i & a) && (o[c] = yy(i, e)) : r <= e && (t.expiredLanes |= i), s &= ~i
  }
  if (e = Q, n = k, n = Pc(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (Y === 2 || Y === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mi(a), t.callbackNode = null, t.callbackPriority = 0;
  if (!(n & 3) || Ko(t, n)) {
    if (e = n & -n, e === t.callbackPriority) return e;
    switch (a !== null && mi(a), Cr(n)) {
      case 2:
      case 8:
        n = vf;
        break;
      case 32:
        n = ac;
        break;
      case 268435456:
        n = gf;
        break;
      default:
        n = ac
    }
    return a = C1.bind(null, t), n = Ar(n, a), t.callbackPriority = e, t.callbackNode = n, e
  }
  return a !== null && a !== null && mi(a), t.callbackPriority = 2, t.callbackNode = null, 2
}

function C1(t, e) {
  if (wt !== 0 && wt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
  var n = t.callbackNode;
  if (ti() && t.callbackNode !== n) return null;
  var a = k;
  return a = Pc(t, t === Q ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (h1(t, a, e), E1(t, he()), t.callbackNode != null && t.callbackNode === n ? C1.bind(null, t) : null)
}

function sm(t, e) {
  if (ti()) return null;
  h1(t, e, !0)
}

function Xv() {
  n2(function() {
    G & 6 ? Ar(yf, Gv) : A1()
  })
}

function ud() {
  return Vn === 0 && (Vn = Sf()), Vn
}

function cm(t) {
  return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Bs("" + t)
}

function im(t, e) {
  var n = e.ownerDocument.createElement("input");
  return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
}

function Zv(t, e, n, a, o) {
  if (e === "submit" && n && n.stateNode === o) {
    var s = cm((o[Ht] || null).action),
      c = a.submitter;
    c && (e = (e = c[Ht] || null) ? cm(e.formAction) : c.getAttribute("formAction"), e !== null && (s = e, c = null));
    var i = new qc("action", "action", null, a, o);
    t.push({
      event: i,
      listeners: [{
        instance: null,
        listener: function() {
          if (a.defaultPrevented) {
            if (Vn !== 0) {
              var r = c ? im(o, c) : new FormData(o);
              Ol(n, {
                pending: !0,
                data: r,
                method: o.method,
                action: s
              }, null, r)
            }
          } else typeof s == "function" && (i.preventDefault(), r = c ? im(o, c) : new FormData(o), Ol(n, {
            pending: !0,
            data: r,
            method: o.method,
            action: s
          }, s, r))
        },
        currentTarget: o
      }]
    })
  }
}
for (var Li = 0; Li < bl.length; Li++) {
  var Pi = bl[Li],
    Kv = Pi.toLowerCase(),
    Qv = Pi[0].toUpperCase() + Pi.slice(1);
  de(Kv, "on" + Qv)
}
de(Yf, "onAnimationEnd");
de(Gf, "onAnimationIteration");
de(Xf, "onAnimationStart");
de("dblclick", "onDoubleClick");
de("focusin", "onFocus");
de("focusout", "onBlur");
de(mv, "onTransitionRun");
de(pv, "onTransitionStart");
de(fv, "onTransitionCancel");
de(Zf, "onTransitionEnd");
wa("onMouseEnter", ["mouseout", "mouseover"]);
wa("onMouseLeave", ["mouseout", "mouseover"]);
wa("onPointerEnter", ["pointerout", "pointerover"]);
wa("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  Jv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));

function M1(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var a = t[n],
      o = a.event;
    a = a.listeners;
    t: {
      var s = void 0;
      if (e)
        for (var c = a.length - 1; 0 <= c; c--) {
          var i = a[c],
            r = i.instance,
            d = i.currentTarget;
          if (i = i.listener, r !== s && o.isPropagationStopped()) break t;
          s = i, o.currentTarget = d;
          try {
            s(o)
          } catch (u) {
            hc(u)
          }
          o.currentTarget = null, s = r
        } else
          for (c = 0; c < a.length; c++) {
            if (i = a[c], r = i.instance, d = i.currentTarget, i = i.listener, r !== s && o.isPropagationStopped()) break t;
            s = i, o.currentTarget = d;
            try {
              s(o)
            } catch (u) {
              hc(u)
            }
            o.currentTarget = null, s = r
          }
    }
  }
}

function _(t, e) {
  var n = e[hl];
  n === void 0 && (n = e[hl] = new Set);
  var a = t + "__bubble";
  n.has(a) || (D1(e, t, 2, !1), n.add(a))
}

function qi(t, e, n) {
  var a = 0;
  e && (a |= 4), D1(n, t, a, e)
}
var Ms = "_reactListening" + Math.random().toString(36).slice(2);

function md(t) {
  if (!t[Ms]) {
    t[Ms] = !0, Ff.forEach(function(n) {
      n !== "selectionchange" && (Jv.has(n) || qi(n, !1, t), qi(n, !0, t))
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ms] || (e[Ms] = !0, qi("selectionchange", !1, e))
  }
}

function D1(t, e, n, a) {
  switch (q1(e)) {
    case 2:
      var o = w2;
      break;
    case 8:
      o = T2;
      break;
    default:
      o = xd
  }
  n = o.bind(null, e, n, t), o = void 0, !gl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), a ? o !== void 0 ? t.addEventListener(e, n, {
    capture: !0,
    passive: o
  }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, {
    passive: o
  }) : t.addEventListener(e, n, !1)
}

function Yi(t, e, n, a, o) {
  var s = a;
  if (!(e & 1) && !(e & 2) && a !== null) t: for (;;) {
    if (a === null) return;
    var c = a.tag;
    if (c === 3 || c === 4) {
      var i = a.stateNode.containerInfo;
      if (i === o) break;
      if (c === 4)
        for (c = a.return; c !== null;) {
          var r = c.tag;
          if ((r === 3 || r === 4) && c.stateNode.containerInfo === o) return;
          c = c.return
        }
      for (; i !== null;) {
        if (c = Wn(i), c === null) return;
        if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
          a = s = c;
          continue t
        }
        i = i.parentNode
      }
    }
    a = a.return
  }
  Vf(function() {
    var d = s,
      u = Rr(n),
      m = [];
    t: {
      var p = Kf.get(t);
      if (p !== void 0) {
        var f = qc,
          S = t;
        switch (t) {
          case "keypress":
            if (Ls(n) === 0) break t;
          case "keydown":
          case "keyup":
            f = Yy;
            break;
          case "focusin":
            S = "focus", f = Si;
            break;
          case "focusout":
            S = "blur", f = Si;
            break;
          case "beforeblur":
          case "afterblur":
            f = Si;
            break;
          case "click":
            if (n.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Ry;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Zy;
            break;
          case Yf:
          case Gf:
          case Xf:
            f = Hy;
            break;
          case Zf:
            f = Qy;
            break;
          case "scroll":
          case "scrollend":
            f = My;
            break;
          case "wheel":
            f = $y;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = _y;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = xu;
            break;
          case "toggle":
          case "beforetoggle":
            f = Iy
        }
        var v = (e & 4) !== 0,
          b = !v && (t === "scroll" || t === "scrollend"),
          x = v ? p !== null ? p + "Capture" : null : p;
        v = [];
        for (var h = d, y; h !== null;) {
          var g = h;
          if (y = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || y === null || x === null || (g = Eo(h, x), g != null && v.push(Ho(h, g, y))), b) break;
          h = h.return
        }
        0 < v.length && (p = new f(p, S, null, n, u), m.push({
          event: p,
          listeners: v
        }))
      }
    }
    if (!(e & 7)) {
      t: {
        if (p = t === "mouseover" || t === "pointerover", f = t === "mouseout" || t === "pointerout", p && n !== vl && (S = n.relatedTarget || n.fromElement) && (Wn(S) || S[_a])) break t;
        if ((f || p) && (p = u.window === u ? u : (p = u.ownerDocument) ? p.defaultView || p.parentWindow : window, f ? (S = n.relatedTarget || n.toElement, f = d, S = S ? Wn(S) : null, S !== null && (b = Xo(S), v = S.tag, S !== b || v !== 5 && v !== 27 && v !== 6) && (S = null)) : (f = null, S = d), f !== S)) {
          if (v = fu, g = "onMouseLeave", x = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (v = xu, g = "onPointerLeave", x = "onPointerEnter", h = "pointer"), b = f == null ? p : no(f), y = S == null ? p : no(S), p = new v(g, h + "leave", f, n, u), p.target = b, p.relatedTarget = y, g = null, Wn(u) === d && (v = new v(x, h + "enter", S, n, u), v.target = y, v.relatedTarget = b, g = v), b = g, f && S) e: {
            for (v = f, x = S, h = 0, y = v; y; y = Gn(y)) h++;
            for (y = 0, g = x; g; g = Gn(g)) y++;
            for (; 0 < h - y;) v = Gn(v),
            h--;
            for (; 0 < y - h;) x = Gn(x),
            y--;
            for (; h--;) {
              if (v === x || x !== null && v === x.alternate) break e;
              v = Gn(v), x = Gn(x)
            }
            v = null
          }
          else v = null;
          f !== null && lm(m, p, f, v, !1), S !== null && b !== null && lm(m, b, S, v, !0)
        }
      }
      t: {
        if (p = d ? no(d) : window, f = p.nodeName && p.nodeName.toLowerCase(), f === "select" || f === "input" && p.type === "file") var w = Su;
        else if (gu(p))
          if (Bf) w = rv;
          else {
            w = iv;
            var E = cv
          }
        else f = p.nodeName,
        !f || f.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? d && Dr(d.elementType) && (w = Su) : w = lv;
        if (w && (w = w(t, d))) {
          Uf(m, w, n, u);
          break t
        }
        E && E(t, p, d),
        t === "focusout" && d && p.type === "number" && d.memoizedProps.value != null && yl(p, "number", p.value)
      }
      switch (E = d ? no(d) : window, t) {
        case "focusin":
          (gu(E) || E.contentEditable === "true") && (ea = E, Sl = d, uo = null);
          break;
        case "focusout":
          uo = Sl = ea = null;
          break;
        case "mousedown":
          jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jl = !1, Fu(m, n, u);
          break;
        case "selectionchange":
          if (uv) break;
        case "keydown":
        case "keyup":
          Fu(m, n, u)
      }
      var A;
      if (Hr) t: {
        switch (t) {
          case "compositionstart":
            var N = "onCompositionStart";
            break t;
          case "compositionend":
            N = "onCompositionEnd";
            break t;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break t
        }
        N = void 0
      }
      else ta ? zf(t, n) && (N = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");N && (Hf && n.locale !== "ko" && (ta || N !== "onCompositionStart" ? N === "onCompositionEnd" && ta && (A = Of()) : ($e = u, Vr = "value" in $e ? $e.value : $e.textContent, ta = !0)), E = wc(d, N), 0 < E.length && (N = new hu(N, t, null, n, u), m.push({
        event: N,
        listeners: E
      }), A ? N.data = A : (A = _f(n), A !== null && (N.data = A)))),
      (A = ev ? nv(t, n) : av(t, n)) && (N = wc(d, "onBeforeInput"), 0 < N.length && (E = new hu("onBeforeInput", "beforeinput", null, n, u), m.push({
        event: E,
        listeners: N
      }), E.data = A)),
      Zv(m, t, d, n, u)
    }
    M1(m, e)
  })
}

function Ho(t, e, n) {
  return {
    instance: t,
    listener: e,
    currentTarget: n
  }
}

function wc(t, e) {
  for (var n = e + "Capture", a = []; t !== null;) {
    var o = t,
      s = o.stateNode;
    if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = Eo(t, n), o != null && a.unshift(Ho(t, o, s)), o = Eo(t, e), o != null && a.push(Ho(t, o, s))), t.tag === 3) return a;
    t = t.return
  }
  return []
}

function Gn(t) {
  if (t === null) return null;
  do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
  return t || null
}

function lm(t, e, n, a, o) {
  for (var s = e._reactName, c = []; n !== null && n !== a;) {
    var i = n,
      r = i.alternate,
      d = i.stateNode;
    if (i = i.tag, r !== null && r === a) break;
    i !== 5 && i !== 26 && i !== 27 || d === null || (r = d, o ? (d = Eo(n, s), d != null && c.unshift(Ho(n, d, r))) : o || (d = Eo(n, s), d != null && c.push(Ho(n, d, r)))), n = n.return
  }
  c.length !== 0 && t.push({
    event: e,
    listeners: c
  })
}
var $v = /\r\n?/g,
  Wv = /\u0000|\uFFFD/g;

function rm(t) {
  return (typeof t == "string" ? t : "" + t).replace($v, `
`).replace(Wv, "")
}

function R1(t, e) {
  return e = rm(e), rm(t) === e
}

function ei() {}

function X(t, e, n, a, o, s) {
  switch (n) {
    case "children":
      typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ta(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ta(t, "" + a);
      break;
    case "className":
      ws(t, "class", a);
      break;
    case "tabIndex":
      ws(t, "tabindex", a);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      ws(t, n, a);
      break;
    case "style":
      Rf(t, a, s);
      break;
    case "data":
      if (e !== "object") {
        ws(t, "data", a);
        break
      }
    case "src":
    case "href":
      if (a === "" && (e !== "a" || n !== "href")) {
        t.removeAttribute(n);
        break
      }
      if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
        t.removeAttribute(n);
        break
      }
      a = Bs("" + a), t.setAttribute(n, a);
      break;
    case "action":
    case "formAction":
      if (typeof a == "function") {
        t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break
      } else typeof s == "function" && (n === "formAction" ? (e !== "input" && X(t, e, "name", o.name, o, null), X(t, e, "formEncType", o.formEncType, o, null), X(t, e, "formMethod", o.formMethod, o, null), X(t, e, "formTarget", o.formTarget, o, null)) : (X(t, e, "encType", o.encType, o, null), X(t, e, "method", o.method, o, null), X(t, e, "target", o.target, o, null)));
      if (a == null || typeof a == "symbol" || typeof a == "boolean") {
        t.removeAttribute(n);
        break
      }
      a = Bs("" + a), t.setAttribute(n, a);
      break;
    case "onClick":
      a != null && (t.onclick = ei);
      break;
    case "onScroll":
      a != null && _("scroll", t);
      break;
    case "onScrollEnd":
      a != null && _("scrollend", t);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(T(61));
        if (n = a.__html, n != null) {
          if (o.children != null) throw Error(T(60));
          t.innerHTML = n
        }
      }
      break;
    case "multiple":
      t.multiple = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "muted":
      t.muted = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
        t.removeAttribute("xlink:href");
        break
      }
      n = Bs("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
      break;
    case "capture":
    case "download":
      a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
      break;
    case "rowSpan":
    case "start":
      a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
      break;
    case "popover":
      _("beforetoggle", t), _("toggle", t), Us(t, "popover", a);
      break;
    case "xlinkActuate":
      je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
      break;
    case "xlinkArcrole":
      je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
      break;
    case "xlinkRole":
      je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
      break;
    case "xlinkShow":
      je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
      break;
    case "xlinkTitle":
      je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
      break;
    case "xlinkType":
      je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
      break;
    case "xmlBase":
      je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
      break;
    case "xmlLang":
      je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
      break;
    case "xmlSpace":
      je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
      break;
    case "is":
      Us(t, "is", a);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ey.get(n) || n, Us(t, n, a))
  }
}

function Xl(t, e, n, a, o, s) {
  switch (n) {
    case "style":
      Rf(t, a, s);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(T(61));
        if (n = a.__html, n != null) {
          if (o.children != null) throw Error(T(60));
          t.innerHTML = n
        }
      }
      break;
    case "children":
      typeof a == "string" ? Ta(t, a) : (typeof a == "number" || typeof a == "bigint") && Ta(t, "" + a);
      break;
    case "onScroll":
      a != null && _("scroll", t);
      break;
    case "onScrollEnd":
      a != null && _("scrollend", t);
      break;
    case "onClick":
      a != null && (t.onclick = ei);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!Nf.hasOwnProperty(n)) t: {
        if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), e = n.slice(2, o ? n.length - 7 : void 0), s = t[Ht] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, o), typeof a == "function")) {
          typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, o);
          break t
        }
        n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Us(t, n, a)
      }
  }
}

function Tt(t, e, n) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      _("error", t), _("load", t);
      var a = !1,
        o = !1,
        s;
      for (s in n)
        if (n.hasOwnProperty(s)) {
          var c = n[s];
          if (c != null) switch (s) {
            case "src":
              a = !0;
              break;
            case "srcSet":
              o = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(T(137, e));
            default:
              X(t, e, s, c, n, null)
          }
        } o && X(t, e, "srcSet", n.srcSet, n, null), a && X(t, e, "src", n.src, n, null);
      return;
    case "input":
      _("invalid", t);
      var i = s = c = o = null,
        r = null,
        d = null;
      for (a in n)
        if (n.hasOwnProperty(a)) {
          var u = n[a];
          if (u != null) switch (a) {
            case "name":
              o = u;
              break;
            case "type":
              c = u;
              break;
            case "checked":
              r = u;
              break;
            case "defaultChecked":
              d = u;
              break;
            case "value":
              s = u;
              break;
            case "defaultValue":
              i = u;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(T(137, e));
              break;
            default:
              X(t, e, a, u, n, null)
          }
        } Cf(t, s, i, r, d, c, o, !1), oc(t);
      return;
    case "select":
      _("invalid", t), a = c = s = null;
      for (o in n)
        if (n.hasOwnProperty(o) && (i = n[o], i != null)) switch (o) {
          case "value":
            s = i;
            break;
          case "defaultValue":
            c = i;
            break;
          case "multiple":
            a = i;
          default:
            X(t, e, o, i, n, null)
        }
      e = s, n = c, t.multiple = !!a, e != null ? fa(t, !!a, e, !1) : n != null && fa(t, !!a, n, !0);
      return;
    case "textarea":
      _("invalid", t), s = o = a = null;
      for (c in n)
        if (n.hasOwnProperty(c) && (i = n[c], i != null)) switch (c) {
          case "value":
            a = i;
            break;
          case "defaultValue":
            o = i;
            break;
          case "children":
            s = i;
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(T(91));
            break;
          default:
            X(t, e, c, i, n, null)
        }
      Df(t, a, o, s), oc(t);
      return;
    case "option":
      for (r in n)
        if (n.hasOwnProperty(r) && (a = n[r], a != null)) switch (r) {
          case "selected":
            t.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            X(t, e, r, a, n, null)
        }
      return;
    case "dialog":
      _("beforetoggle", t), _("toggle", t), _("cancel", t), _("close", t);
      break;
    case "iframe":
    case "object":
      _("load", t);
      break;
    case "video":
    case "audio":
      for (a = 0; a < Oo.length; a++) _(Oo[a], t);
      break;
    case "image":
      _("error", t), _("load", t);
      break;
    case "details":
      _("toggle", t);
      break;
    case "embed":
    case "source":
    case "link":
      _("error", t), _("load", t);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (d in n)
        if (n.hasOwnProperty(d) && (a = n[d], a != null)) switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(T(137, e));
          default:
            X(t, e, d, a, n, null)
        }
      return;
    default:
      if (Dr(e)) {
        for (u in n) n.hasOwnProperty(u) && (a = n[u], a !== void 0 && Xl(t, e, u, a, n, void 0));
        return
      }
  }
  for (i in n) n.hasOwnProperty(i) && (a = n[i], a != null && X(t, e, i, a, n, null))
}

function Iv(t, e, n, a) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var o = null,
        s = null,
        c = null,
        i = null,
        r = null,
        d = null,
        u = null;
      for (f in n) {
        var m = n[f];
        if (n.hasOwnProperty(f) && m != null) switch (f) {
          case "checked":
            break;
          case "value":
            break;
          case "defaultValue":
            r = m;
          default:
            a.hasOwnProperty(f) || X(t, e, f, null, a, m)
        }
      }
      for (var p in a) {
        var f = a[p];
        if (m = n[p], a.hasOwnProperty(p) && (f != null || m != null)) switch (p) {
          case "type":
            s = f;
            break;
          case "name":
            o = f;
            break;
          case "checked":
            d = f;
            break;
          case "defaultChecked":
            u = f;
            break;
          case "value":
            c = f;
            break;
          case "defaultValue":
            i = f;
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            if (f != null) throw Error(T(137, e));
            break;
          default:
            f !== m && X(t, e, p, f, a, m)
        }
      }
      xl(t, c, i, r, d, u, s, o);
      return;
    case "select":
      f = c = i = p = null;
      for (s in n)
        if (r = n[s], n.hasOwnProperty(s) && r != null) switch (s) {
          case "value":
            break;
          case "multiple":
            f = r;
          default:
            a.hasOwnProperty(s) || X(t, e, s, null, a, r)
        }
      for (o in a)
        if (s = a[o], r = n[o], a.hasOwnProperty(o) && (s != null || r != null)) switch (o) {
          case "value":
            p = s;
            break;
          case "defaultValue":
            i = s;
            break;
          case "multiple":
            c = s;
          default:
            s !== r && X(t, e, o, s, a, r)
        }
      e = i, n = c, a = f, p != null ? fa(t, !!n, p, !1) : !!a != !!n && (e != null ? fa(t, !!n, e, !0) : fa(t, !!n, n ? [] : "", !1));
      return;
    case "textarea":
      f = p = null;
      for (i in n)
        if (o = n[i], n.hasOwnProperty(i) && o != null && !a.hasOwnProperty(i)) switch (i) {
          case "value":
            break;
          case "children":
            break;
          default:
            X(t, e, i, null, a, o)
        }
      for (c in a)
        if (o = a[c], s = n[c], a.hasOwnProperty(c) && (o != null || s != null)) switch (c) {
          case "value":
            p = o;
            break;
          case "defaultValue":
            f = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(T(91));
            break;
          default:
            o !== s && X(t, e, c, o, a, s)
        }
      Mf(t, p, f);
      return;
    case "option":
      for (var S in n)
        if (p = n[S], n.hasOwnProperty(S) && p != null && !a.hasOwnProperty(S)) switch (S) {
          case "selected":
            t.selected = !1;
            break;
          default:
            X(t, e, S, null, a, p)
        }
      for (r in a)
        if (p = a[r], f = n[r], a.hasOwnProperty(r) && p !== f && (p != null || f != null)) switch (r) {
          case "selected":
            t.selected = p && typeof p != "function" && typeof p != "symbol";
            break;
          default:
            X(t, e, r, p, a, f)
        }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !a.hasOwnProperty(v) && X(t, e, v, null, a, p);
      for (d in a)
        if (p = a[d], f = n[d], a.hasOwnProperty(d) && p !== f && (p != null || f != null)) switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(T(137, e));
            break;
          default:
            X(t, e, d, p, a, f)
        }
      return;
    default:
      if (Dr(e)) {
        for (var b in n) p = n[b], n.hasOwnProperty(b) && p !== void 0 && !a.hasOwnProperty(b) && Xl(t, e, b, void 0, a, p);
        for (u in a) p = a[u], f = n[u], !a.hasOwnProperty(u) || p === f || p === void 0 && f === void 0 || Xl(t, e, u, p, a, f);
        return
      }
  }
  for (var x in n) p = n[x], n.hasOwnProperty(x) && p != null && !a.hasOwnProperty(x) && X(t, e, x, null, a, p);
  for (m in a) p = a[m], f = n[m], !a.hasOwnProperty(m) || p === f || p == null && f == null || X(t, e, m, p, a, f)
}
var Zl = null,
  Kl = null;

function Tc(t) {
  return t.nodeType === 9 ? t : t.ownerDocument
}

function dm(t) {
  switch (t) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0
  }
}

function V1(t, e) {
  if (t === 0) switch (e) {
    case "svg":
      return 1;
    case "math":
      return 2;
    default:
      return 0
  }
  return t === 1 && e === "foreignObject" ? 0 : t
}

function Ql(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Gi = null;

function t2() {
  var t = window.event;
  return t && t.type === "popstate" ? t === Gi ? !1 : (Gi = t, !0) : (Gi = null, !1)
}
var O1 = typeof setTimeout == "function" ? setTimeout : void 0,
  e2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  um = typeof Promise == "function" ? Promise : void 0,
  n2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof um < "u" ? function(t) {
    return um.resolve(null).then(t).catch(a2)
  } : O1;

function a2(t) {
  setTimeout(function() {
    throw t
  })
}

function xn(t) {
  return t === "head"
}

function mm(t, e) {
  var n = e,
    a = 0,
    o = 0;
  do {
    var s = n.nextSibling;
    if (t.removeChild(n), s && s.nodeType === 8)
      if (n = s.data, n === "/$") {
        if (0 < a && 8 > a) {
          n = a;
          var c = t.ownerDocument;
          if (n & 1 && bo(c.documentElement), n & 2 && bo(c.body), n & 4)
            for (n = c.head, bo(n), c = n.firstChild; c;) {
              var i = c.nextSibling,
                r = c.nodeName;
              c[Jo] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = i
            }
        }
        if (o === 0) {
          t.removeChild(s), ko(e);
          return
        }
        o--
      } else n === "$" || n === "$?" || n === "$!" ? o++ : a = n.charCodeAt(0) - 48;
    else a = 0;
    n = s
  } while (n);
  ko(e)
}

function Jl(t) {
  var e = t.firstChild;
  for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
    var n = e;
    switch (e = e.nextSibling, n.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        Jl(n), Mr(n);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (n.rel.toLowerCase() === "stylesheet") continue
    }
    t.removeChild(n)
  }
}

function o2(t, e, n, a) {
  for (; t.nodeType === 1;) {
    var o = n;
    if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
      if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
    } else if (a) {
      if (!t[Jo]) switch (e) {
        case "meta":
          if (!t.hasAttribute("itemprop")) break;
          return t;
        case "link":
          if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence")) break;
          if (s !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title)) break;
          return t;
        case "style":
          if (t.hasAttribute("data-precedence")) break;
          return t;
        case "script":
          if (s = t.getAttribute("src"), (s !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
          return t;
        default:
          return t
      }
    } else if (e === "input" && t.type === "hidden") {
      var s = o.name == null ? null : "" + o.name;
      if (o.type === "hidden" && t.getAttribute("name") === s) return t
    } else return t;
    if (t = re(t.nextSibling), t === null) break
  }
  return null
}

function s2(t, e, n) {
  if (e === "") return null;
  for (; t.nodeType !== 3;)
    if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = re(t.nextSibling), t === null)) return null;
  return t
}

function $l(t) {
  return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
}

function c2(t, e) {
  var n = t.ownerDocument;
  if (t.data !== "$?" || n.readyState === "complete") e();
  else {
    var a = function() {
      e(), n.removeEventListener("DOMContentLoaded", a)
    };
    n.addEventListener("DOMContentLoaded", a), t._reactRetry = a
  }
}

function re(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
      if (e === "/$") return null
    }
  }
  return t
}
var Wl = null;

function pm(t) {
  t = t.previousSibling;
  for (var e = 0; t;) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--
      } else n === "/$" && e++
    }
    t = t.previousSibling
  }
  return null
}

function H1(t, e, n) {
  switch (e = Tc(n), t) {
    case "html":
      if (t = e.documentElement, !t) throw Error(T(452));
      return t;
    case "head":
      if (t = e.head, !t) throw Error(T(453));
      return t;
    case "body":
      if (t = e.body, !t) throw Error(T(454));
      return t;
    default:
      throw Error(T(451))
  }
}

function bo(t) {
  for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
  Mr(t)
}
var se = new Map,
  fm = new Set;

function Fc(t) {
  return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
}
var Be = P.d;
P.d = {
  f: i2,
  r: l2,
  D: r2,
  C: d2,
  L: u2,
  m: m2,
  X: f2,
  S: p2,
  M: h2
};

function i2() {
  var t = Be.f(),
    e = Wc();
  return t || e
}

function l2(t) {
  var e = Ua(t);
  e !== null && e.tag === 5 && e.type === "form" ? Eh(e) : Be.r(t)
}
var La = typeof document > "u" ? null : document;

function z1(t, e, n) {
  var a = La;
  if (a && typeof e == "string" && e) {
    var o = ee(e);
    o = 'link[rel="' + t + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), fm.has(o) || (fm.add(o), t = {
      rel: t,
      crossOrigin: n,
      href: e
    }, a.querySelector(o) === null && (e = a.createElement("link"), Tt(e, "link", t), vt(e), a.head.appendChild(e)))
  }
}

function r2(t) {
  Be.D(t), z1("dns-prefetch", t, null)
}

function d2(t, e) {
  Be.C(t, e), z1("preconnect", t, e)
}

function u2(t, e, n) {
  Be.L(t, e, n);
  var a = La;
  if (a && t && e) {
    var o = 'link[rel="preload"][as="' + ee(e) + '"]';
    e === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + ee(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + ee(n.imageSizes) + '"]')) : o += '[href="' + ee(t) + '"]';
    var s = o;
    switch (e) {
      case "style":
        s = Ra(t);
        break;
      case "script":
        s = Pa(t)
    }
    se.has(s) || (t = W({
      rel: "preload",
      href: e === "image" && n && n.imageSrcSet ? void 0 : t,
      as: e
    }, n), se.set(s, t), a.querySelector(o) !== null || e === "style" && a.querySelector(cs(s)) || e === "script" && a.querySelector(is(s)) || (e = a.createElement("link"), Tt(e, "link", t), vt(e), a.head.appendChild(e)))
  }
}

function m2(t, e) {
  Be.m(t, e);
  var n = La;
  if (n && t) {
    var a = e && typeof e.as == "string" ? e.as : "script",
      o = 'link[rel="modulepreload"][as="' + ee(a) + '"][href="' + ee(t) + '"]',
      s = o;
    switch (a) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        s = Pa(t)
    }
    if (!se.has(s) && (t = W({
        rel: "modulepreload",
        href: t
      }, e), se.set(s, t), n.querySelector(o) === null)) {
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (n.querySelector(is(s))) return
      }
      a = n.createElement("link"), Tt(a, "link", t), vt(a), n.head.appendChild(a)
    }
  }
}

function p2(t, e, n) {
  Be.S(t, e, n);
  var a = La;
  if (a && t) {
    var o = pa(a).hoistableStyles,
      s = Ra(t);
    e = e || "default";
    var c = o.get(s);
    if (!c) {
      var i = {
        loading: 0,
        preload: null
      };
      if (c = a.querySelector(cs(s))) i.loading = 5;
      else {
        t = W({
          rel: "stylesheet",
          href: t,
          "data-precedence": e
        }, n), (n = se.get(s)) && pd(t, n);
        var r = c = a.createElement("link");
        vt(r), Tt(r, "link", t), r._p = new Promise(function(d, u) {
          r.onload = d, r.onerror = u
        }), r.addEventListener("load", function() {
          i.loading |= 1
        }), r.addEventListener("error", function() {
          i.loading |= 2
        }), i.loading |= 4, Ks(c, e, a)
      }
      c = {
        type: "stylesheet",
        instance: c,
        count: 1,
        state: i
      }, o.set(s, c)
    }
  }
}

function f2(t, e) {
  Be.X(t, e);
  var n = La;
  if (n && t) {
    var a = pa(n).hoistableScripts,
      o = Pa(t),
      s = a.get(o);
    s || (s = n.querySelector(is(o)), s || (t = W({
      src: t,
      async: !0
    }, e), (e = se.get(o)) && fd(t, e), s = n.createElement("script"), vt(s), Tt(s, "link", t), n.head.appendChild(s)), s = {
      type: "script",
      instance: s,
      count: 1,
      state: null
    }, a.set(o, s))
  }
}

function h2(t, e) {
  Be.M(t, e);
  var n = La;
  if (n && t) {
    var a = pa(n).hoistableScripts,
      o = Pa(t),
      s = a.get(o);
    s || (s = n.querySelector(is(o)), s || (t = W({
      src: t,
      async: !0,
      type: "module"
    }, e), (e = se.get(o)) && fd(t, e), s = n.createElement("script"), vt(s), Tt(s, "link", t), n.head.appendChild(s)), s = {
      type: "script",
      instance: s,
      count: 1,
      state: null
    }, a.set(o, s))
  }
}

function hm(t, e, n, a) {
  var o = (o = en.current) ? Fc(o) : null;
  if (!o) throw Error(T(446));
  switch (t) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Ra(n.href), n = pa(o).hoistableStyles, a = n.get(e), a || (a = {
        type: "style",
        instance: null,
        count: 0,
        state: null
      }, n.set(e, a)), a) : {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
    case "link":
      if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
        t = Ra(n.href);
        var s = pa(o).hoistableStyles,
          c = s.get(t);
        if (c || (o = o.ownerDocument || o, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, s.set(t, c), (s = o.querySelector(cs(t))) && !s._p && (c.instance = s, c.state.loading = 5), se.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, se.set(t, n), s || x2(o, t, n, c.state))), e && a === null) throw Error(T(528, ""));
        return c
      }
      if (e && a !== null) throw Error(T(529, ""));
      return null;
    case "script":
      return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Pa(n), n = pa(o).hoistableScripts, a = n.get(e), a || (a = {
        type: "script",
        instance: null,
        count: 0,
        state: null
      }, n.set(e, a)), a) : {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
    default:
      throw Error(T(444, t))
  }
}

function Ra(t) {
  return 'href="' + ee(t) + '"'
}

function cs(t) {
  return 'link[rel="stylesheet"][' + t + "]"
}

function _1(t) {
  return W({}, t, {
    "data-precedence": t.precedence,
    precedence: null
  })
}

function x2(t, e, n, a) {
  t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
    return a.loading |= 1
  }), e.addEventListener("error", function() {
    return a.loading |= 2
  }), Tt(e, "link", n), vt(e), t.head.appendChild(e))
}

function Pa(t) {
  return '[src="' + ee(t) + '"]'
}

function is(t) {
  return "script[async]" + t
}

function xm(t, e, n) {
  if (e.count++, e.instance === null) switch (e.type) {
    case "style":
      var a = t.querySelector('style[data-href~="' + ee(n.href) + '"]');
      if (a) return e.instance = a, vt(a), a;
      var o = W({}, n, {
        "data-href": n.href,
        "data-precedence": n.precedence,
        href: null,
        precedence: null
      });
      return a = (t.ownerDocument || t).createElement("style"), vt(a), Tt(a, "style", o), Ks(a, n.precedence, t), e.instance = a;
    case "stylesheet":
      o = Ra(n.href);
      var s = t.querySelector(cs(o));
      if (s) return e.state.loading |= 4, e.instance = s, vt(s), s;
      a = _1(n), (o = se.get(o)) && pd(a, o), s = (t.ownerDocument || t).createElement("link"), vt(s);
      var c = s;
      return c._p = new Promise(function(i, r) {
        c.onload = i, c.onerror = r
      }), Tt(s, "link", a), e.state.loading |= 4, Ks(s, n.precedence, t), e.instance = s;
    case "script":
      return s = Pa(n.src), (o = t.querySelector(is(s))) ? (e.instance = o, vt(o), o) : (a = n, (o = se.get(s)) && (a = W({}, n), fd(a, o)), t = t.ownerDocument || t, o = t.createElement("script"), vt(o), Tt(o, "link", a), t.head.appendChild(o), e.instance = o);
    case "void":
      return null;
    default:
      throw Error(T(443, e.type))
  } else e.type === "stylesheet" && !(e.state.loading & 4) && (a = e.instance, e.state.loading |= 4, Ks(a, n.precedence, t));
  return e.instance
}

function Ks(t, e, n) {
  for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, s = o, c = 0; c < a.length; c++) {
    var i = a[c];
    if (i.dataset.precedence === e) s = i;
    else if (s !== o) break
  }
  s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild))
}

function pd(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
}

function fd(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
}
var Qs = null;

function ym(t, e, n) {
  if (Qs === null) {
    var a = new Map,
      o = Qs = new Map;
    o.set(n, a)
  } else o = Qs, a = o.get(n), a || (a = new Map, o.set(n, a));
  if (a.has(t)) return a;
  for (a.set(t, null), n = n.getElementsByTagName(t), o = 0; o < n.length; o++) {
    var s = n[o];
    if (!(s[Jo] || s[Nt] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
      var c = s.getAttribute(e) || "";
      c = t + c;
      var i = a.get(c);
      i ? i.push(s) : a.set(c, [s])
    }
  }
  return a
}

function vm(t, e, n) {
  t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
}

function y2(t, e, n) {
  if (n === 1 || e.itemProp != null) return !1;
  switch (t) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
      return !0;
    case "link":
      if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
      switch (e.rel) {
        case "stylesheet":
          return t = e.disabled, typeof e.precedence == "string" && t == null;
        default:
          return !0
      }
    case "script":
      if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
  }
  return !1
}

function U1(t) {
  return !(t.type === "stylesheet" && !(t.state.loading & 3))
}
var zo = null;

function v2() {}

function g2(t, e, n) {
  if (zo === null) throw Error(T(475));
  var a = zo;
  if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && !(e.state.loading & 4)) {
    if (e.instance === null) {
      var o = Ra(n.href),
        s = t.querySelector(cs(o));
      if (s) {
        t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Nc.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = s, vt(s);
        return
      }
      s = t.ownerDocument || t, n = _1(n), (o = se.get(o)) && pd(n, o), s = s.createElement("link"), vt(s);
      var c = s;
      c._p = new Promise(function(i, r) {
        c.onload = i, c.onerror = r
      }), Tt(s, "link", n), e.instance = s
    }
    a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (a.count++, e = Nc.bind(a), t.addEventListener("load", e), t.addEventListener("error", e))
  }
}

function S2() {
  if (zo === null) throw Error(T(475));
  var t = zo;
  return t.stylesheets && t.count === 0 && Il(t, t.stylesheets), 0 < t.count ? function(e) {
    var n = setTimeout(function() {
      if (t.stylesheets && Il(t, t.stylesheets), t.unsuspend) {
        var a = t.unsuspend;
        t.unsuspend = null, a()
      }
    }, 6e4);
    return t.unsuspend = e,
      function() {
        t.unsuspend = null, clearTimeout(n)
      }
  } : null
}

function Nc() {
  if (this.count--, this.count === 0) {
    if (this.stylesheets) Il(this, this.stylesheets);
    else if (this.unsuspend) {
      var t = this.unsuspend;
      this.unsuspend = null, t()
    }
  }
}
var Ac = null;

function Il(t, e) {
  t.stylesheets = null, t.unsuspend !== null && (t.count++, Ac = new Map, e.forEach(j2, t), Ac = null, Nc.call(t))
}

function j2(t, e) {
  if (!(e.state.loading & 4)) {
    var n = Ac.get(t);
    if (n) var a = n.get(null);
    else {
      n = new Map, Ac.set(t, n);
      for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < o.length; s++) {
        var c = o[s];
        (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c)
      }
      a && n.set(null, a)
    }
    o = e.instance, c = o.getAttribute("data-precedence"), s = n.get(c) || a, s === a && n.set(null, o), n.set(c, o), this.count++, a = Nc.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), s ? s.parentNode.insertBefore(o, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4
  }
}
var _o = {
  $$typeof: Fe,
  Provider: null,
  Consumer: null,
  _currentValue: An,
  _currentValue2: An,
  _threadCount: 0
};

function b2(t, e, n, a, o, s, c, i) {
  this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.hiddenUpdates = pi(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map
}

function B1(t, e, n, a, o, s, c, i, r, d, u, m) {
  return t = new b2(t, e, n, c, i, r, d, m), e = 1, s === !0 && (e |= 24), s = Lt(3, null, null, e), t.current = s, s.stateNode = t, e = Pr(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
    element: a,
    isDehydrated: n,
    cache: e
  }, Yr(s), t
}

function k1(t) {
  return t ? (t = oa, t) : oa
}

function L1(t, e, n, a, o, s) {
  o = k1(o), a.context === null ? a.context = o : a.pendingContext = o, a = nn(e), a.payload = {
    element: n
  }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = an(t, a, e), n !== null && (Gt(n, t, e), fo(n, t, e))
}

function gm(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e
  }
}

function hd(t, e) {
  gm(t, e), (t = t.alternate) && gm(t, e)
}

function P1(t) {
  if (t.tag === 13) {
    var e = Ba(t, 67108864);
    e !== null && Gt(e, t, 67108864), hd(t, 67108864)
  }
}
var Ec = !0;

function w2(t, e, n, a) {
  var o = O.T;
  O.T = null;
  var s = P.p;
  try {
    P.p = 2, xd(t, e, n, a)
  } finally {
    P.p = s, O.T = o
  }
}

function T2(t, e, n, a) {
  var o = O.T;
  O.T = null;
  var s = P.p;
  try {
    P.p = 8, xd(t, e, n, a)
  } finally {
    P.p = s, O.T = o
  }
}

function xd(t, e, n, a) {
  if (Ec) {
    var o = tr(a);
    if (o === null) Yi(t, e, a, Cc, n), Sm(t, a);
    else if (N2(o, t, e, n, a)) a.stopPropagation();
    else if (Sm(t, a), e & 4 && -1 < F2.indexOf(t)) {
      for (; o !== null;) {
        var s = Ua(o);
        if (s !== null) switch (s.tag) {
          case 3:
            if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
              var c = jn(s.pendingLanes);
              if (c !== 0) {
                var i = s;
                for (i.pendingLanes |= 2, i.entangledLanes |= 2; c;) {
                  var r = 1 << 31 - qt(c);
                  i.entanglements[1] |= r, c &= ~r
                }
                Se(s), !(G & 6) && (gc = he() + 500, ss(0))
              }
            }
            break;
          case 13:
            i = Ba(s, 2), i !== null && Gt(i, s, 2), Wc(), hd(s, 2)
        }
        if (s = tr(a), s === null && Yi(t, e, a, Cc, n), s === o) break;
        o = s
      }
      o !== null && a.stopPropagation()
    } else Yi(t, e, a, null, n)
  }
}

function tr(t) {
  return t = Rr(t), yd(t)
}
var Cc = null;

function yd(t) {
  if (Cc = null, t = Wn(t), t !== null) {
    var e = Xo(t);
    if (e === null) t = null;
    else {
      var n = e.tag;
      if (n === 13) {
        if (t = pf(e), t !== null) return t;
        t = null
      } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
      } else e !== t && (t = null)
    }
  }
  return Cc = t, null
}

function q1(t) {
  switch (t) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (dy()) {
        case yf:
          return 2;
        case vf:
          return 8;
        case ac:
        case uy:
          return 32;
        case gf:
          return 268435456;
        default:
          return 32
      }
    default:
      return 32
  }
}
var er = !1,
  cn = null,
  ln = null,
  rn = null,
  Uo = new Map,
  Bo = new Map,
  Qe = [],
  F2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

function Sm(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      cn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Uo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bo.delete(e.pointerId)
  }
}

function Wa(t, e, n, a, o, s) {
  return t === null || t.nativeEvent !== s ? (t = {
    blockedOn: e,
    domEventName: n,
    eventSystemFlags: a,
    nativeEvent: s,
    targetContainers: [o]
  }, e !== null && (e = Ua(e), e !== null && P1(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t)
}

function N2(t, e, n, a, o) {
  switch (e) {
    case "focusin":
      return cn = Wa(cn, t, e, n, a, o), !0;
    case "dragenter":
      return ln = Wa(ln, t, e, n, a, o), !0;
    case "mouseover":
      return rn = Wa(rn, t, e, n, a, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Uo.set(s, Wa(Uo.get(s) || null, t, e, n, a, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Bo.set(s, Wa(Bo.get(s) || null, t, e, n, a, o)), !0
  }
  return !1
}

function Y1(t) {
  var e = Wn(t.target);
  if (e !== null) {
    var n = Xo(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = pf(n), e !== null) {
          t.blockedOn = e, gy(t.priority, function() {
            if (n.tag === 13) {
              var a = Yt();
              a = Er(a);
              var o = Ba(n, a);
              o !== null && Gt(o, n, a), hd(n, a)
            }
          });
          return
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  t.blockedOn = null
}

function Js(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length;) {
    var n = tr(t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var a = new n.constructor(n.type, n);
      vl = a, n.target.dispatchEvent(a), vl = null
    } else return e = Ua(n), e !== null && P1(e), t.blockedOn = n, !1;
    e.shift()
  }
  return !0
}

function jm(t, e, n) {
  Js(t) && n.delete(e)
}

function A2() {
  er = !1, cn !== null && Js(cn) && (cn = null), ln !== null && Js(ln) && (ln = null), rn !== null && Js(rn) && (rn = null), Uo.forEach(jm), Bo.forEach(jm)
}

function Ds(t, e) {
  t.blockedOn === e && (t.blockedOn = null, er || (er = !0, xt.unstable_scheduleCallback(xt.unstable_NormalPriority, A2)))
}
var Rs = null;

function bm(t) {
  Rs !== t && (Rs = t, xt.unstable_scheduleCallback(xt.unstable_NormalPriority, function() {
    Rs === t && (Rs = null);
    for (var e = 0; e < t.length; e += 3) {
      var n = t[e],
        a = t[e + 1],
        o = t[e + 2];
      if (typeof a != "function") {
        if (yd(a || n) === null) continue;
        break
      }
      var s = Ua(n);
      s !== null && (t.splice(e, 3), e -= 3, Ol(s, {
        pending: !0,
        data: o,
        method: n.method,
        action: a
      }, a, o))
    }
  }))
}

function ko(t) {
  function e(r) {
    return Ds(r, t)
  }
  cn !== null && Ds(cn, t), ln !== null && Ds(ln, t), rn !== null && Ds(rn, t), Uo.forEach(e), Bo.forEach(e);
  for (var n = 0; n < Qe.length; n++) {
    var a = Qe[n];
    a.blockedOn === t && (a.blockedOn = null)
  }
  for (; 0 < Qe.length && (n = Qe[0], n.blockedOn === null);) Y1(n), n.blockedOn === null && Qe.shift();
  if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
    for (a = 0; a < n.length; a += 3) {
      var o = n[a],
        s = n[a + 1],
        c = o[Ht] || null;
      if (typeof s == "function") c || bm(n);
      else if (c) {
        var i = null;
        if (s && s.hasAttribute("formAction")) {
          if (o = s, c = s[Ht] || null) i = c.formAction;
          else if (yd(o) !== null) continue
        } else i = c.action;
        typeof i == "function" ? n[a + 1] = i : (n.splice(a, 3), a -= 3), bm(n)
      }
    }
}

function vd(t) {
  this._internalRoot = t
}
ni.prototype.render = vd.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(T(409));
  var n = e.current,
    a = Yt();
  L1(n, a, t, e, null, null)
};
ni.prototype.unmount = vd.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    L1(t.current, 2, null, t, null, null), Wc(), e[_a] = null
  }
};

function ni(t) {
  this._internalRoot = t
}
ni.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = Tf();
    t = {
      blockedOn: null,
      target: t,
      priority: e
    };
    for (var n = 0; n < Qe.length && e !== 0 && e < Qe[n].priority; n++);
    Qe.splice(n, 0, t), n === 0 && Y1(t)
  }
};
var wm = uf.version;
if (wm !== "19.1.1") throw Error(T(527, wm, "19.1.1"));
P.findDOMNode = function(t) {
  var e = t._reactInternals;
  if (e === void 0) throw typeof t.render == "function" ? Error(T(188)) : (t = Object.keys(t).join(","), Error(T(268, t)));
  return t = ay(e), t = t !== null ? ff(t) : null, t = t === null ? null : t.stateNode, t
};
var E2 = {
  bundleType: 0,
  version: "19.1.1",
  rendererPackageName: "react-dom",
  currentDispatcherRef: O,
  reconcilerVersion: "19.1.1"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vs.isDisabled && Vs.supportsFiber) try {
    Zo = Vs.inject(E2), Pt = Vs
  } catch {}
}
kc.createRoot = function(t, e) {
  if (!mf(t)) throw Error(T(299));
  var n = !1,
    a = "",
    o = Bh,
    s = kh,
    c = Lh,
    i = null;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (i = e.unstable_transitionCallbacks)), e = B1(t, 1, !1, null, null, n, a, o, s, c, i, null), t[_a] = e.current, md(t), new vd(e)
};
kc.hydrateRoot = function(t, e, n) {
  if (!mf(t)) throw Error(T(299));
  var a = !1,
    o = "",
    s = Bh,
    c = kh,
    i = Lh,
    r = null,
    d = null;
  return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (i = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (r = n.unstable_transitionCallbacks), n.formState !== void 0 && (d = n.formState)), e = B1(t, 1, !0, e, n ?? null, a, o, s, c, i, r, d), e.context = k1(null), n = e.current, a = Yt(), a = Er(a), o = nn(a), o.callback = null, an(n, o, a), n = a, e.current.lanes = n, Qo(e, n), Se(e), t[_a] = e.current, md(t), new ni(e)
};
kc.version = "19.1.1";

function G1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1)
  } catch (t) {
    console.error(t)
  }
}
G1(), $p.exports = kc;
var C2 = $p.exports;
const M2 = Kp(C2);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mc() {
  return Mc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
    }
    return t
  }, Mc.apply(this, arguments)
}
var tn;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(tn || (tn = {}));
const Tm = "popstate";

function D2(t) {
  t === void 0 && (t = {});

  function e(o, s) {
    let {
      pathname: c = "/",
      search: i = "",
      hash: r = ""
    } = ls(o.location.hash.substr(1));
    return !c.startsWith("/") && !c.startsWith(".") && (c = "/" + c), nr("", {
      pathname: c,
      search: i,
      hash: r
    }, s.state && s.state.usr || null, s.state && s.state.key || "default")
  }

  function n(o, s) {
    let c = o.document.querySelector("base"),
      i = "";
    if (c && c.getAttribute("href")) {
      let r = o.location.href,
        d = r.indexOf("#");
      i = d === -1 ? r : r.slice(0, d)
    }
    return i + "#" + (typeof s == "string" ? s : X1(s))
  }

  function a(o, s) {
    gd(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")")
  }
  return V2(e, n, a, t)
}

function zt(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function gd(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e)
    } catch {}
  }
}

function R2() {
  return Math.random().toString(36).substr(2, 8)
}

function Fm(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  }
}

function nr(t, e, n, a) {
  return n === void 0 && (n = null), Mc({
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: ""
  }, typeof e == "string" ? ls(e) : e, {
    state: n,
    key: e && e.key || a || R2()
  })
}

function X1(t) {
  let {
    pathname: e = "/",
    search: n = "",
    hash: a = ""
  } = t;
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e
}

function ls(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
    let a = t.indexOf("?");
    a >= 0 && (e.search = t.substr(a), t = t.substr(0, a)), t && (e.pathname = t)
  }
  return e
}

function V2(t, e, n, a) {
  a === void 0 && (a = {});
  let {
    window: o = document.defaultView,
    v5Compat: s = !1
  } = a, c = o.history, i = tn.Pop, r = null, d = u();
  d == null && (d = 0, c.replaceState(Mc({}, c.state, {
    idx: d
  }), ""));

  function u() {
    return (c.state || {
      idx: null
    }).idx
  }

  function m() {
    i = tn.Pop;
    let b = u(),
      x = b == null ? null : b - d;
    d = b, r && r({
      action: i,
      location: v.location,
      delta: x
    })
  }

  function p(b, x) {
    i = tn.Push;
    let h = nr(v.location, b, x);
    n && n(h, b), d = u() + 1;
    let y = Fm(h, d),
      g = v.createHref(h);
    try {
      c.pushState(y, "", g)
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      o.location.assign(g)
    }
    s && r && r({
      action: i,
      location: v.location,
      delta: 1
    })
  }

  function f(b, x) {
    i = tn.Replace;
    let h = nr(v.location, b, x);
    n && n(h, b), d = u();
    let y = Fm(h, d),
      g = v.createHref(h);
    c.replaceState(y, "", g), s && r && r({
      action: i,
      location: v.location,
      delta: 0
    })
  }

  function S(b) {
    let x = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof b == "string" ? b : X1(b);
    return h = h.replace(/ $/, "%20"), zt(x, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, x)
  }
  let v = {
    get action() {
      return i
    },
    get location() {
      return t(o, c)
    },
    listen(b) {
      if (r) throw new Error("A history only accepts one active listener");
      return o.addEventListener(Tm, m), r = b, () => {
        o.removeEventListener(Tm, m), r = null
      }
    },
    createHref(b) {
      return e(o, b)
    },
    createURL: S,
    encodeLocation(b) {
      let x = S(b);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      }
    },
    push: p,
    replace: f,
    go(b) {
      return c.go(b)
    }
  };
  return v
}
var Nm;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(Nm || (Nm = {}));

function O2(t, e, n) {
  return n === void 0 && (n = "/"), H2(t, e, n)
}

function H2(t, e, n, a) {
  let o = typeof e == "string" ? ls(e) : e,
    s = Q1(o.pathname || "/", n);
  if (s == null) return null;
  let c = Z1(t);
  z2(c);
  let i = null;
  for (let r = 0; i == null && r < c.length; ++r) {
    let d = K2(s);
    i = G2(c[r], d)
  }
  return i
}

function Z1(t, e, n, a) {
  e === void 0 && (e = []), n === void 0 && (n = []), a === void 0 && (a = "");
  let o = (s, c, i) => {
    let r = {
      relativePath: i === void 0 ? s.path || "" : i,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: c,
      route: s
    };
    r.relativePath.startsWith("/") && (zt(r.relativePath.startsWith(a), 'Absolute route path "' + r.relativePath + '" nested under path ' + ('"' + a + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), r.relativePath = r.relativePath.slice(a.length));
    let d = ja([a, r.relativePath]),
      u = n.concat(r);
    s.children && s.children.length > 0 && (zt(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')), Z1(s.children, e, u, d)), !(s.path == null && !s.index) && e.push({
      path: d,
      score: q2(d, s.index),
      routesMeta: u
    })
  };
  return t.forEach((s, c) => {
    var i;
    if (s.path === "" || !((i = s.path) != null && i.includes("?"))) o(s, c);
    else
      for (let r of K1(s.path)) o(s, c, r)
  }), e
}

function K1(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...a] = e, o = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (a.length === 0) return o ? [s, ""] : [s];
  let c = K1(a.join("/")),
    i = [];
  return i.push(...c.map(r => r === "" ? s : [s, r].join("/"))), o && i.push(...c), i.map(r => t.startsWith("/") && r === "" ? "/" : r)
}

function z2(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : Y2(e.routesMeta.map(a => a.childrenIndex), n.routesMeta.map(a => a.childrenIndex)))
}
const _2 = /^:[\w-]+$/,
  U2 = 3,
  B2 = 2,
  k2 = 1,
  L2 = 10,
  P2 = -2,
  Am = t => t === "*";

function q2(t, e) {
  let n = t.split("/"),
    a = n.length;
  return n.some(Am) && (a += P2), e && (a += B2), n.filter(o => !Am(o)).reduce((o, s) => o + (_2.test(s) ? U2 : s === "" ? k2 : L2), a)
}

function Y2(t, e) {
  return t.length === e.length && t.slice(0, -1).every((a, o) => a === e[o]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function G2(t, e, n) {
  let {
    routesMeta: a
  } = t, o = {}, s = "/", c = [];
  for (let i = 0; i < a.length; ++i) {
    let r = a[i],
      d = i === a.length - 1,
      u = s === "/" ? e : e.slice(s.length) || "/",
      m = X2({
        path: r.relativePath,
        caseSensitive: r.caseSensitive,
        end: d
      }, u),
      p = r.route;
    if (!m) return null;
    Object.assign(o, m.params), c.push({
      params: o,
      pathname: ja([s, m.pathname]),
      pathnameBase: Q2(ja([s, m.pathnameBase])),
      route: p
    }), m.pathnameBase !== "/" && (s = ja([s, m.pathnameBase]))
  }
  return c
}

function X2(t, e) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, a] = Z2(t.path, t.caseSensitive, t.end), o = e.match(n);
  if (!o) return null;
  let s = o[0],
    c = s.replace(/(.)\/+$/, "$1"),
    i = o.slice(1);
  return {
    params: a.reduce((d, u, m) => {
      let {
        paramName: p,
        isOptional: f
      } = u;
      if (p === "*") {
        let v = i[m] || "";
        c = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1")
      }
      const S = i[m];
      return f && !S ? d[p] = void 0 : d[p] = (S || "").replace(/%2F/g, "/"), d
    }, {}),
    pathname: s,
    pathnameBase: c,
    pattern: t
  }
}

function Z2(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !0), gd(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let a = [],
    o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, i, r) => (a.push({
      paramName: i,
      isOptional: r != null
    }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (a.push({
    paramName: "*"
  }), o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, e ? void 0 : "i"), a]
}

function K2(t) {
  try {
    return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
  } catch (e) {
    return gd(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
  }
}

function Q1(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    a = t.charAt(n);
  return a && a !== "/" ? null : t.slice(n) || "/"
}
const ja = t => t.join("/").replace(/\/\/+/g, "/"),
  Q2 = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function J2(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const J1 = ["post", "put", "patch", "delete"];
new Set(J1);
const $2 = ["get", ...J1];
new Set($2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dc() {
  return Dc = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
    }
    return t
  }, Dc.apply(this, arguments)
}
const W2 = F.createContext(null),
  I2 = F.createContext(null),
  $1 = F.createContext(null),
  ai = F.createContext(null),
  oi = F.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
  }),
  W1 = F.createContext(null);

function Sd() {
  return F.useContext(ai) != null
}

function tg() {
  return Sd() || zt(!1), F.useContext(ai).location
}

function eg(t, e) {
  return ng(t, e)
}

function ng(t, e, n, a) {
  Sd() || zt(!1);
  let {
    navigator: o
  } = F.useContext($1), {
    matches: s
  } = F.useContext(oi), c = s[s.length - 1], i = c ? c.params : {};
  c && c.pathname;
  let r = c ? c.pathnameBase : "/";
  c && c.route;
  let d = tg(),
    u;
  if (e) {
    var m;
    let b = typeof e == "string" ? ls(e) : e;
    r === "/" || (m = b.pathname) != null && m.startsWith(r) || zt(!1), u = b
  } else u = d;
  let p = u.pathname || "/",
    f = p;
  if (r !== "/") {
    let b = r.replace(/^\//, "").split("/");
    f = "/" + p.replace(/^\//, "").split("/").slice(b.length).join("/")
  }
  let S = O2(t, {
      pathname: f
    }),
    v = ig(S && S.map(b => Object.assign({}, b, {
      params: Object.assign({}, i, b.params),
      pathname: ja([r, o.encodeLocation ? o.encodeLocation(b.pathname).pathname : b.pathname]),
      pathnameBase: b.pathnameBase === "/" ? r : ja([r, o.encodeLocation ? o.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), s, n, a);
  return e && v ? F.createElement(ai.Provider, {
    value: {
      location: Dc({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, u),
      navigationType: tn.Pop
    }
  }, v) : v
}

function ag() {
  let t = ug(),
    e = J2(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    o = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
  return F.createElement(F.Fragment, null, F.createElement("h2", null, "Unexpected Application Error!"), F.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? F.createElement("pre", {
    style: o
  }, n) : null, null)
}
const og = F.createElement(ag, null);
class sg extends F.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    }
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    }
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : n.error,
      location: n.location,
      revalidation: e.revalidation || n.revalidation
    }
  }
  componentDidCatch(e, n) {
    console.error("React Router caught the following error during render", e, n)
  }
  render() {
    return this.state.error !== void 0 ? F.createElement(oi.Provider, {
      value: this.props.routeContext
    }, F.createElement(W1.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children
  }
}

function cg(t) {
  let {
    routeContext: e,
    match: n,
    children: a
  } = t, o = F.useContext(W2);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), F.createElement(oi.Provider, {
    value: e
  }, a)
}

function ig(t, e, n, a) {
  var o;
  if (e === void 0 && (e = []), n === void 0 && (n = null), a === void 0 && (a = null), t == null) {
    var s;
    if (!n) return null;
    if (n.errors) t = n.matches;
    else if ((s = a) != null && s.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
    else return null
  }
  let c = t,
    i = (o = n) == null ? void 0 : o.errors;
  if (i != null) {
    let u = c.findIndex(m => m.route.id && (i == null ? void 0 : i[m.route.id]) !== void 0);
    u >= 0 || zt(!1), c = c.slice(0, Math.min(c.length, u + 1))
  }
  let r = !1,
    d = -1;
  if (n && a && a.v7_partialHydration)
    for (let u = 0; u < c.length; u++) {
      let m = c[u];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = u), m.route.id) {
        let {
          loaderData: p,
          errors: f
        } = n, S = m.route.loader && p[m.route.id] === void 0 && (!f || f[m.route.id] === void 0);
        if (m.route.lazy || S) {
          r = !0, d >= 0 ? c = c.slice(0, d + 1) : c = [c[0]];
          break
        }
      }
    }
  return c.reduceRight((u, m, p) => {
    let f, S = !1,
      v = null,
      b = null;
    n && (f = i && m.route.id ? i[m.route.id] : void 0, v = m.route.errorElement || og, r && (d < 0 && p === 0 ? (mg("route-fallback"), S = !0, b = null) : d === p && (S = !0, b = m.route.hydrateFallbackElement || null)));
    let x = e.concat(c.slice(0, p + 1)),
      h = () => {
        let y;
        return f ? y = v : S ? y = b : m.route.Component ? y = F.createElement(m.route.Component, null) : m.route.element ? y = m.route.element : y = u, F.createElement(cg, {
          match: m,
          routeContext: {
            outlet: u,
            matches: x,
            isDataRoute: n != null
          },
          children: y
        })
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || p === 0) ? F.createElement(sg, {
      location: n.location,
      revalidation: n.revalidation,
      component: v,
      error: f,
      children: h(),
      routeContext: {
        outlet: null,
        matches: x,
        isDataRoute: !0
      }
    }) : h()
  }, null)
}
var I1 = function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
}(I1 || {});

function lg(t) {
  let e = F.useContext(I2);
  return e || zt(!1), e
}

function rg(t) {
  let e = F.useContext(oi);
  return e || zt(!1), e
}

function dg(t) {
  let e = rg(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || zt(!1), n.route.id
}

function ug() {
  var t;
  let e = F.useContext(W1),
    n = lg(I1.UseRouteError),
    a = dg();
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[a]
}
const Em = {};

function mg(t, e, n) {
  Em[t] || (Em[t] = !0)
}

function pg(t, e) {
  t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function t0(t) {
  zt(!1)
}

function fg(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: a,
    navigationType: o = tn.Pop,
    navigator: s,
    static: c = !1,
    future: i
  } = t;
  Sd() && zt(!1);
  let r = e.replace(/^\/*/, "/"),
    d = F.useMemo(() => ({
      basename: r,
      navigator: s,
      static: c,
      future: Dc({
        v7_relativeSplatPath: !1
      }, i)
    }), [r, i, s, c]);
  typeof a == "string" && (a = ls(a));
  let {
    pathname: u = "/",
    search: m = "",
    hash: p = "",
    state: f = null,
    key: S = "default"
  } = a, v = F.useMemo(() => {
    let b = Q1(u, r);
    return b == null ? null : {
      location: {
        pathname: b,
        search: m,
        hash: p,
        state: f,
        key: S
      },
      navigationType: o
    }
  }, [r, u, m, p, f, S, o]);
  return v == null ? null : F.createElement($1.Provider, {
    value: d
  }, F.createElement(ai.Provider, {
    children: n,
    value: v
  }))
}

function hg(t) {
  let {
    children: e,
    location: n
  } = t;
  return eg(ar(e), n)
}
new Promise(() => {});

function ar(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return F.Children.forEach(t, (a, o) => {
    if (!F.isValidElement(a)) return;
    let s = [...e, o];
    if (a.type === F.Fragment) {
      n.push.apply(n, ar(a.props.children, s));
      return
    }
    a.type !== t0 && zt(!1), !a.props.index || !a.props.children || zt(!1);
    let c = {
      id: a.props.id || s.join("-"),
      caseSensitive: a.props.caseSensitive,
      element: a.props.element,
      Component: a.props.Component,
      index: a.props.index,
      path: a.props.path,
      loader: a.props.loader,
      action: a.props.action,
      errorElement: a.props.errorElement,
      ErrorBoundary: a.props.ErrorBoundary,
      hasErrorBoundary: a.props.ErrorBoundary != null || a.props.errorElement != null,
      shouldRevalidate: a.props.shouldRevalidate,
      handle: a.props.handle,
      lazy: a.props.lazy
    };
    a.props.children && (c.children = ar(a.props.children, s)), n.push(c)
  }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const xg = "6";
try {
  window.__reactRouterVersion = xg
} catch {}
const yg = "startTransition",
  Cm = $x[yg];

function vg(t) {
  let {
    basename: e,
    children: n,
    future: a,
    window: o
  } = t, s = F.useRef();
  s.current == null && (s.current = D2({
    window: o,
    v5Compat: !0
  }));
  let c = s.current,
    [i, r] = F.useState({
      action: c.action,
      location: c.location
    }),
    {
      v7_startTransition: d
    } = a || {},
    u = F.useCallback(m => {
      d && Cm ? Cm(() => r(m)) : r(m)
    }, [r, d]);
  return F.useLayoutEffect(() => c.listen(u), [c, u]), F.useEffect(() => pg(a), [a]), F.createElement(fg, {
    basename: e,
    children: n,
    location: i.location,
    navigationType: i.action,
    navigator: c,
    future: a
  })
}
var Mm;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(Mm || (Mm = {}));
var Dm;
(function(t) {
  t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(Dm || (Dm = {}));
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  e0 = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = F.forwardRef(({
  color: t = "currentColor",
  size: e = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: a,
  className: o = "",
  children: s,
  iconNode: c,
  ...i
}, r) => F.createElement("svg", {
  ref: r,
  ...Sg,
  width: e,
  height: e,
  stroke: t,
  strokeWidth: a ? Number(n) * 24 / Number(e) : n,
  className: e0("lucide", o),
  ...i
}, [...c.map(([d, u]) => F.createElement(d, u)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (t, e) => {
  const n = F.forwardRef(({
    className: a,
    ...o
  }, s) => F.createElement(jg, {
    ref: s,
    iconNode: e,
    className: e0(`lucide-${gg(t)}`, a),
    ...o
  }));
  return n.displayName = `${t}`, n
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = [
    ["path", {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }]
  ],
  wg = q("Activity", bg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]
  ],
  Fg = q("ArrowRight", Tg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = [
    ["path", {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }],
    ["circle", {
      cx: "12",
      cy: "8",
      r: "6",
      key: "1vp47v"
    }]
  ],
  Ag = q("Award", Ng);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = [
    ["path", {
      d: "M10.268 21a2 2 0 0 0 3.464 0",
      key: "vwvbt9"
    }],
    ["path", {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }]
  ],
  Cg = q("Bell", Eg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = [
    ["path", {
      d: "M10 2v8l3-3 3 3V2",
      key: "sqw3rj"
    }],
    ["path", {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }]
  ],
  Dg = q("BookMarked", Mg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = [
    ["path", {
      d: "M12 7v14",
      key: "1akyts"
    }],
    ["path", {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }]
  ],
  Vg = q("BookOpen", Rg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = [
    ["path", {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }],
    ["path", {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }],
    ["path", {
      d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
      key: "1p4c4q"
    }],
    ["path", {
      d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
      key: "tmeiqw"
    }],
    ["path", {
      d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
      key: "105sqy"
    }],
    ["path", {
      d: "M3.477 10.896a4 4 0 0 1 .585-.396",
      key: "ql3yin"
    }],
    ["path", {
      d: "M19.938 10.5a4 4 0 0 1 .585.396",
      key: "1qfode"
    }],
    ["path", {
      d: "M6 18a4 4 0 0 1-1.967-.516",
      key: "2e4loj"
    }],
    ["path", {
      d: "M19.967 17.484A4 4 0 0 1 18 18",
      key: "159ez6"
    }]
  ],
  Hg = q("Brain", Og);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = [
    ["path", {
      d: "M3 3v16a2 2 0 0 0 2 2h16",
      key: "c24i48"
    }],
    ["path", {
      d: "m19 9-5 5-4-4-3 3",
      key: "2osh9i"
    }]
  ],
  _g = q("ChartLine", zg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = [
    ["line", {
      x1: "12",
      x2: "12",
      y1: "20",
      y2: "10",
      key: "1vz5eb"
    }],
    ["line", {
      x1: "18",
      x2: "18",
      y1: "20",
      y2: "4",
      key: "cun8e5"
    }],
    ["line", {
      x1: "6",
      x2: "6",
      y1: "20",
      y2: "16",
      key: "hq0ia6"
    }]
  ],
  Bg = q("ChartNoAxesColumnIncreasing", Ug);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = [
    ["line", {
      x1: "18",
      x2: "18",
      y1: "20",
      y2: "10",
      key: "1xfpm4"
    }],
    ["line", {
      x1: "12",
      x2: "12",
      y1: "20",
      y2: "4",
      key: "be30l9"
    }],
    ["line", {
      x1: "6",
      x2: "6",
      y1: "20",
      y2: "14",
      key: "1r4le6"
    }]
  ],
  Lg = q("ChartNoAxesColumn", kg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = [
    ["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]
  ],
  Rm = q("ChevronDown", Pg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = [
    ["path", {
      d: "m9 18 6-6-6-6",
      key: "mthhwq"
    }]
  ],
  Yg = q("ChevronRight", qg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gg = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "m9 12 2 2 4-4",
      key: "dzmm74"
    }]
  ],
  Xi = q("CircleCheck", Gg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["polyline", {
      points: "12 6 12 12 16 14",
      key: "68esgv"
    }]
  ],
  Zg = q("Clock", Xg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = [
    ["path", {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7"
    }],
    ["path", {
      d: "M14 2v4a2 2 0 0 0 2 2h4",
      key: "tnqrlb"
    }],
    ["path", {
      d: "M10 9H8",
      key: "b1mrlr"
    }],
    ["path", {
      d: "M16 13H8",
      key: "t4e002"
    }],
    ["path", {
      d: "M16 17H8",
      key: "z1uh3a"
    }]
  ],
  Qg = q("FileText", Kg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = [
    ["path", {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }],
    ["path", {
      d: "M9 18h6",
      key: "x1upvd"
    }],
    ["path", {
      d: "M10 22h4",
      key: "ceow96"
    }]
  ],
  $g = q("Lightbulb", Jg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = [
    ["path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }],
    ["rect", {
      width: "4",
      height: "12",
      x: "2",
      y: "9",
      key: "mk3on5"
    }],
    ["circle", {
      cx: "4",
      cy: "4",
      r: "2",
      key: "bt5ra8"
    }]
  ],
  Ig = q("Linkedin", Wg);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = [
    ["path", {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }],
    ["path", {
      d: "M11 12 5.12 2.2",
      key: "qhuxz6"
    }],
    ["path", {
      d: "m13 12 5.88-9.8",
      key: "hbye0f"
    }],
    ["path", {
      d: "M8 7h8",
      key: "i86dvs"
    }],
    ["circle", {
      cx: "12",
      cy: "17",
      r: "5",
      key: "qbz8iq"
    }],
    ["path", {
      d: "M12 18v-2h-.5",
      key: "fawc4q"
    }]
  ],
  eS = q("Medal", tS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = [
    ["line", {
      x1: "4",
      x2: "20",
      y1: "12",
      y2: "12",
      key: "1e0a9i"
    }],
    ["line", {
      x1: "4",
      x2: "20",
      y1: "6",
      y2: "6",
      key: "1owob3"
    }],
    ["line", {
      x1: "4",
      x2: "20",
      y1: "18",
      y2: "18",
      key: "yk5zj1"
    }]
  ],
  aS = q("Menu", nS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oS = [
    ["path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz"
    }]
  ],
  sS = q("MessageSquare", oS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cS = [
    ["path", {
      d: "M14 22v-4a2 2 0 1 0-4 0v4",
      key: "hhkicm"
    }],
    ["path", {
      d: "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",
      key: "1xqip1"
    }],
    ["path", {
      d: "M18 5v17",
      key: "1sw6gf"
    }],
    ["path", {
      d: "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",
      key: "9d2mlk"
    }],
    ["path", {
      d: "M6 5v17",
      key: "1xfsm0"
    }],
    ["circle", {
      cx: "12",
      cy: "9",
      r: "2",
      key: "1092wv"
    }]
  ],
  iS = q("School", cS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [
    ["path", {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }],
    ["path", {
      d: "M20 3v4",
      key: "1olli1"
    }],
    ["path", {
      d: "M22 5h-4",
      key: "1gvqau"
    }],
    ["path", {
      d: "M4 17v2",
      key: "vumght"
    }],
    ["path", {
      d: "M5 18H3",
      key: "zchphs"
    }]
  ],
  Vm = q("Sparkles", lS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rS = [
    ["path", {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }]
  ],
  Zi = q("Star", rS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = [
    ["polyline", {
      points: "22 7 13.5 15.5 8.5 10.5 2 17",
      key: "126l90"
    }],
    ["polyline", {
      points: "16 7 22 7 22 13",
      key: "kwv8wd"
    }]
  ],
  Os = q("TrendingUp", dS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = [
    ["path", {
      d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
      key: "17hqa7"
    }],
    ["path", {
      d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
      key: "lmptdp"
    }],
    ["path", {
      d: "M4 22h16",
      key: "57wxv0"
    }],
    ["path", {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq"
    }],
    ["path", {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb"
    }],
    ["path", {
      d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
      key: "u46fv3"
    }]
  ],
  mS = q("Trophy", uS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = [
    ["path", {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }]
  ],
  fS = q("Twitter", pS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }],
    ["path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd"
    }],
    ["path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75",
      key: "1da9ce"
    }]
  ],
  xS = q("Users", hS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ],
  vS = q("X", yS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = [
    ["path", {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }],
    ["path", {
      d: "m10 15 5-3-5-3z",
      key: "1jp15x"
    }]
  ],
  SS = q("Youtube", gS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jS = [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ],
  bS = q("Zap", jS),
  wS = ({
    setColorPalette: t
  }) => {
    const [e, n] = F.useState(!1), [a, o] = F.useState(!1);
    F.useEffect(() => {
      const i = () => {
        window.scrollY > 20 ? o(!0) : o(!1)
      };
      return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
    }, []);
    const s = i => {
        const r = document.getElementById(i);
        r && (r.scrollIntoView({
          behavior: "smooth"
        }), n(!1))
      },
      c = i => {
        t(i)
      };
    return l.jsxs("header", {
      "data-component-start": "44:4:1313",
      "data-component-end": "250:13:9825",
      "data-component-path": "src/components/Header.jsx",
      "data-component-file": "Header.jsx",
      "data-component-name": "header",
      className: `fixed w-full z-50 transition-all duration-300 ${a?"bg-white/90 backdrop-blur-sm shadow-md":"bg-transparent"}`,
      children: [l.jsxs("div", {
        "data-component-start": "49:6:1490",
        "data-component-end": "194:12:7921",
        "data-component-path": "src/components/Header.jsx",
        "data-component-file": "Header.jsx",
        "data-component-name": "div",
        "data-component-class": "container mx-auto px-4 md:px-6 py-4 flex items-center justify-between",
        className: "container mx-auto px-4 md:px-6 py-4 flex items-center justify-between",
        children: [l.jsxs("div", {
          "data-component-start": "51:8:1607",
          "data-component-end": "60:14:2014",
          "data-component-path": "src/components/Header.jsx",
          "data-component-file": "Header.jsx",
          "data-component-name": "div",
          "data-component-class": "flex items-center",
          className: "flex items-center",
          onClick: () => s("hero"),
          children: [l.jsx("img", {
            "data-component-start": "52:10:1693",
            "data-component-end": "56:12:1861",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "img",
            "data-component-src": "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
            "data-component-class": "h-10 mr-2 cursor-pointer",
            src: "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
            alt: "Zunno.ai Logo",
            className: "h-10 mr-2 cursor-pointer"
          }), l.jsx("span", {
            "data-component-start": "57:10:1872",
            "data-component-end": "59:17:1999",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "span",
            "data-component-class": "font-poppins font-bold text-xl",
            className: "font-poppins font-bold text-xl",
            style: {
              color: "var(--color-dark)"
            },
            children: "Zunno.ai"
          })]
        }), l.jsxs("nav", {
          "data-component-start": "63:8:2067",
          "data-component-end": "142:14:5525",
          "data-component-path": "src/components/Header.jsx",
          "data-component-file": "Header.jsx",
          "data-component-name": "nav",
          "data-component-class": "hidden md:flex items-center space-x-6",
          className: "hidden md:flex items-center space-x-6",
          children: [l.jsx("a", {
            "data-component-start": "64:10:2133",
            "data-component-end": "70:14:2387",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            onClick: () => s("students"),
            className: "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            style: {
              color: "var(--color-text)"
            },
            children: "For Students"
          }), l.jsx("a", {
            "data-component-start": "71:10:2398",
            "data-component-end": "77:14:2652",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            onClick: () => s("teachers"),
            className: "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            style: {
              color: "var(--color-text)"
            },
            children: "For Teachers"
          }), l.jsx("a", {
            "data-component-start": "78:10:2663",
            "data-component-end": "84:14:2915",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            onClick: () => s("parents"),
            className: "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            style: {
              color: "var(--color-text)"
            },
            children: "For Parents"
          }), l.jsx("a", {
            "data-component-start": "85:10:2926",
            "data-component-end": "91:14:3178",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            onClick: () => s("schools"),
            className: "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            style: {
              color: "var(--color-text)"
            },
            children: "For Schools"
          }), l.jsx("a", {
            "data-component-start": "92:10:3189",
            "data-component-end": "98:14:3436",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            onClick: () => s("about"),
            className: "font-medium hover:text-opacity-70 transition-colors cursor-pointer",
            style: {
              color: "var(--color-text)"
            },
            children: "About Us"
          }), l.jsxs("div", {
            "data-component-start": "101:10:3499",
            "data-component-end": "134:16:5296",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "div",
            "data-component-class": "relative group",
            className: "relative group",
            children: [l.jsxs("button", {
              "data-component-start": "102:12:3544",
              "data-component-end": "108:21:3846",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "button",
              "data-component-class": "flex items-center font-medium hover:text-opacity-70 transition-colors focus:outline-none",
              className: "flex items-center font-medium hover:text-opacity-70 transition-colors focus:outline-none",
              style: {
                color: "var(--color-text)"
              },
              children: [l.jsx("span", {
                "data-component-start": "106:14:3749",
                "data-component-end": "106:49:3784",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "span",
                "data-component-class": "mr-1",
                className: "mr-1",
                children: "Theme"
              }), l.jsx(Rm, {
                "data-component-start": "107:14:3799",
                "data-component-end": "107:39:3824",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "ChevronDown",
                size: 16
              })]
            }), l.jsx("div", {
              "data-component-start": "109:12:3859",
              "data-component-end": "133:18:5279",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "div",
              "data-component-class": "absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
              className: "absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
              children: l.jsxs("div", {
                "data-component-start": "110:14:4057",
                "data-component-end": "132:20:5260",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "div",
                "data-component-class": "py-1",
                className: "py-1",
                children: [l.jsxs("button", {
                  "data-component-start": "111:16:4096",
                  "data-component-end": "117:25:4469",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette1"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "115:18:4299",
                    "data-component-end": "115:121:4402",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#FE9055"
                    }
                  }), "Vibrant Sophistication"]
                }), l.jsxs("button", {
                  "data-component-start": "118:16:4486",
                  "data-component-end": "124:25:4853",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette2"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "122:18:4689",
                    "data-component-end": "122:121:4792",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#3B82F6"
                    }
                  }), "Futuristic Trust"]
                }), l.jsxs("button", {
                  "data-component-start": "125:16:4870",
                  "data-component-end": "131:25:5239",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette3"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "129:18:5073",
                    "data-component-end": "129:121:5176",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#8B5CF6"
                    }
                  }), "Playful Innovation"]
                })]
              })
            })]
          }), l.jsx("a", {
            "data-component-start": "136:10:5318",
            "data-component-end": "141:14:5510",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "btn-primary motion-safe:hover:scale-105 transition-transform",
            onClick: () => s("cta"),
            className: "btn-primary motion-safe:hover:scale-105 transition-transform",
            children: "Request Demo"
          })]
        }), l.jsxs("div", {
          "data-component-start": "145:8:5578",
          "data-component-end": "193:14:7908",
          "data-component-path": "src/components/Header.jsx",
          "data-component-file": "Header.jsx",
          "data-component-name": "div",
          "data-component-class": "md:hidden flex items-center space-x-4",
          className: "md:hidden flex items-center space-x-4",
          children: [l.jsxs("div", {
            "data-component-start": "146:10:5644",
            "data-component-end": "180:16:7506",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "div",
            "data-component-class": "relative group",
            className: "relative group",
            children: [l.jsxs("button", {
              "data-component-start": "147:12:5689",
              "data-component-end": "154:21:6051",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "button",
              "data-component-class": "flex items-center space-x-1",
              className: "flex items-center space-x-1",
              style: {
                color: "var(--color-text)"
              },
              children: [l.jsx("span", {
                "data-component-start": "151:14:5833",
                "data-component-end": "151:59:5878",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "span",
                "data-component-class": "sr-only",
                className: "sr-only",
                children: "Change Theme"
              }), l.jsx("div", {
                "data-component-start": "152:14:5893",
                "data-component-end": "152:110:5989",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "div",
                "data-component-class": "w-6 h-6 rounded-full",
                className: "w-6 h-6 rounded-full",
                style: {
                  backgroundColor: "var(--color-primary)"
                }
              }), l.jsx(Rm, {
                "data-component-start": "153:14:6004",
                "data-component-end": "153:39:6029",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "ChevronDown",
                size: 16
              })]
            }), l.jsx("div", {
              "data-component-start": "155:12:6064",
              "data-component-end": "179:18:7489",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "div",
              "data-component-class": "absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",
              className: "absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",
              children: l.jsxs("div", {
                "data-component-start": "156:14:6267",
                "data-component-end": "178:20:7470",
                "data-component-path": "src/components/Header.jsx",
                "data-component-file": "Header.jsx",
                "data-component-name": "div",
                "data-component-class": "py-1",
                className: "py-1",
                children: [l.jsxs("button", {
                  "data-component-start": "157:16:6306",
                  "data-component-end": "163:25:6679",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette1"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "161:18:6509",
                    "data-component-end": "161:121:6612",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#FE9055"
                    }
                  }), "Vibrant Sophistication"]
                }), l.jsxs("button", {
                  "data-component-start": "164:16:6696",
                  "data-component-end": "170:25:7063",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette2"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "168:18:6899",
                    "data-component-end": "168:121:7002",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#3B82F6"
                    }
                  }), "Futuristic Trust"]
                }), l.jsxs("button", {
                  "data-component-start": "171:16:7080",
                  "data-component-end": "177:25:7449",
                  "data-component-path": "src/components/Header.jsx",
                  "data-component-file": "Header.jsx",
                  "data-component-name": "button",
                  "data-component-class": "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  onClick: () => c("palette3"),
                  className: "flex items-center w-full px-4 py-3 text-left hover:bg-gray-100",
                  children: [l.jsx("span", {
                    "data-component-start": "175:18:7283",
                    "data-component-end": "175:121:7386",
                    "data-component-path": "src/components/Header.jsx",
                    "data-component-file": "Header.jsx",
                    "data-component-name": "span",
                    "data-component-class": "inline-block w-4 h-4 rounded-full mr-2",
                    className: "inline-block w-4 h-4 rounded-full mr-2",
                    style: {
                      backgroundColor: "#8B5CF6"
                    }
                  }), "Playful Innovation"]
                })]
              })
            })]
          }), l.jsx("button", {
            "data-component-start": "182:10:7528",
            "data-component-end": "192:19:7893",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "button",
            "data-component-class": "focus:outline-none",
            onClick: () => n(!e),
            className: "focus:outline-none",
            "aria-label": "Toggle menu",
            children: e ? l.jsx(vS, {
              "data-component-start": "188:14:7714",
              "data-component-end": "188:68:7768",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "X",
              size: 24,
              style: {
                color: "var(--color-dark)"
              }
            }) : l.jsx(aS, {
              "data-component-start": "190:14:7801",
              "data-component-end": "190:71:7858",
              "data-component-path": "src/components/Header.jsx",
              "data-component-file": "Header.jsx",
              "data-component-name": "Menu",
              size: 24,
              style: {
                color: "var(--color-dark)"
              }
            })
          })]
        })]
      }), l.jsx("div", {
        "data-component-start": "197:6:7972",
        "data-component-end": "249:12:9811",
        "data-component-path": "src/components/Header.jsx",
        "data-component-file": "Header.jsx",
        "data-component-name": "div",
        className: `md:hidden fixed inset-0 z-40 bg-white transform ${e?"translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out pt-20`,
        style: {
          backgroundColor: "var(--color-background)"
        },
        children: l.jsxs("nav", {
          "data-component-start": "203:8:8248",
          "data-component-end": "248:14:9798",
          "data-component-path": "src/components/Header.jsx",
          "data-component-file": "Header.jsx",
          "data-component-name": "nav",
          "data-component-class": "container mx-auto px-4 py-5 flex flex-col space-y-6",
          className: "container mx-auto px-4 py-5 flex flex-col space-y-6",
          children: [l.jsx("a", {
            "data-component-start": "204:10:8328",
            "data-component-end": "210:14:8571",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium text-lg hover:opacity-70 transition-opacity",
            onClick: () => s("students"),
            className: "font-medium text-lg hover:opacity-70 transition-opacity",
            style: {
              color: "var(--color-text)"
            },
            children: "For Students"
          }), l.jsx("a", {
            "data-component-start": "211:10:8582",
            "data-component-end": "217:14:8825",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium text-lg hover:opacity-70 transition-opacity",
            onClick: () => s("teachers"),
            className: "font-medium text-lg hover:opacity-70 transition-opacity",
            style: {
              color: "var(--color-text)"
            },
            children: "For Teachers"
          }), l.jsx("a", {
            "data-component-start": "218:10:8836",
            "data-component-end": "224:14:9077",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium text-lg hover:opacity-70 transition-opacity",
            onClick: () => s("parents"),
            className: "font-medium text-lg hover:opacity-70 transition-opacity",
            style: {
              color: "var(--color-text)"
            },
            children: "For Parents"
          }), l.jsx("a", {
            "data-component-start": "225:10:9088",
            "data-component-end": "231:14:9329",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium text-lg hover:opacity-70 transition-opacity",
            onClick: () => s("schools"),
            className: "font-medium text-lg hover:opacity-70 transition-opacity",
            style: {
              color: "var(--color-text)"
            },
            children: "For Schools"
          }), l.jsx("a", {
            "data-component-start": "232:10:9340",
            "data-component-end": "238:14:9576",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "font-medium text-lg hover:opacity-70 transition-opacity",
            onClick: () => s("about"),
            className: "font-medium text-lg hover:opacity-70 transition-opacity",
            style: {
              color: "var(--color-text)"
            },
            children: "About Us"
          }), l.jsx("a", {
            "data-component-start": "240:10:9598",
            "data-component-end": "247:14:9783",
            "data-component-path": "src/components/Header.jsx",
            "data-component-file": "Header.jsx",
            "data-component-name": "a",
            "data-component-class": "btn-primary text-center",
            onClick: () => {
              s("cta")
            },
            className: "btn-primary text-center",
            children: "Request Demo"
          })]
        })
      })]
    })
  },
  TS = () => l.jsx("footer", {
    "data-component-start": "14:4:416",
    "data-component-end": "103:13:4055",
    "data-component-path": "src/components/Footer.jsx",
    "data-component-file": "Footer.jsx",
    "data-component-name": "footer",
    "data-component-class": "py-12",
    className: "py-12",
    style: {
      backgroundColor: "var(--color-dark)",
      color: "white"
    },
    children: l.jsxs("div", {
      "data-component-start": "15:6:514",
      "data-component-end": "102:12:4041",
      "data-component-path": "src/components/Footer.jsx",
      "data-component-file": "Footer.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto px-4 md:px-6",
      className: "container mx-auto px-4 md:px-6",
      children: [l.jsxs("div", {
        "data-component-start": "16:8:571",
        "data-component-end": "92:14:3546",
        "data-component-path": "src/components/Footer.jsx",
        "data-component-file": "Footer.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-3 gap-10",
        className: "grid grid-cols-1 md:grid-cols-3 gap-10",
        children: [l.jsxs("div", {
          "data-component-start": "18:10:670",
          "data-component-end": "30:16:1204",
          "data-component-path": "src/components/Footer.jsx",
          "data-component-file": "Footer.jsx",
          "data-component-name": "div",
          "data-component-class": "space-y-4",
          className: "space-y-4",
          children: [l.jsxs("div", {
            "data-component-start": "19:12:710",
            "data-component-end": "26:18:1035",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "div",
            "data-component-class": "flex items-center",
            className: "flex items-center",
            children: [l.jsx("img", {
              "data-component-start": "20:14:760",
              "data-component-end": "24:16:937",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "img",
              "data-component-src": "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
              "data-component-class": "h-10 mr-2 invert",
              src: "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
              alt: "Zunno.ai Logo",
              className: "h-10 mr-2 invert"
            }), l.jsx("span", {
              "data-component-start": "25:14:952",
              "data-component-end": "25:78:1016",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "span",
              "data-component-class": "font-poppins font-bold text-xl",
              className: "font-poppins font-bold text-xl",
              children: "Zunno.ai"
            })]
          }), l.jsx("p", {
            "data-component-start": "27:12:1048",
            "data-component-end": "29:16:1187",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "p",
            "data-component-class": "text-white/70",
            className: "text-white/70",
            children: "Empowering K-12 education through AI-driven personalized learning experiences."
          })]
        }), l.jsxs("div", {
          "data-component-start": "33:10:1256",
          "data-component-end": "57:16:2262",
          "data-component-path": "src/components/Footer.jsx",
          "data-component-file": "Footer.jsx",
          "data-component-name": "div",
          "data-component-class": "space-y-4",
          className: "space-y-4",
          children: [l.jsx("h3", {
            "data-component-start": "34:12:1296",
            "data-component-end": "34:75:1359",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "h3",
            "data-component-class": "font-poppins font-bold text-lg",
            className: "font-poppins font-bold text-lg",
            children: "Quick Links"
          }), l.jsxs("ul", {
            "data-component-start": "35:12:1372",
            "data-component-end": "56:17:2245",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "ul",
            "data-component-class": "space-y-2",
            className: "space-y-2",
            children: [l.jsx("li", {
              "data-component-start": "36:14:1413",
              "data-component-end": "40:19:1632",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "li",
              children: l.jsx("a", {
                "data-component-start": "37:16:1434",
                "data-component-end": "39:20:1612",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "a",
                "data-component-class": "text-white/70 hover:text-white transition-colors",
                href: "https://legal.heyboss.tech/67845a5e6e6bf5ecd4a3ae47/",
                className: "text-white/70 hover:text-white transition-colors",
                children: "Privacy Policy"
              })
            }), l.jsx("li", {
              "data-component-start": "41:14:1647",
              "data-component-end": "45:19:1872",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "li",
              children: l.jsx("a", {
                "data-component-start": "42:16:1668",
                "data-component-end": "44:20:1852",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "a",
                "data-component-class": "text-white/70 hover:text-white transition-colors",
                href: "https://legal.heyboss.tech/67845cfe76f9675292514b80/",
                className: "text-white/70 hover:text-white transition-colors",
                children: "Terms and Conditions"
              })
            }), l.jsx("li", {
              "data-component-start": "46:14:1887",
              "data-component-end": "50:19:2048",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "li",
              children: l.jsx("a", {
                "data-component-start": "47:16:1908",
                "data-component-end": "49:20:2028",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "a",
                "data-component-class": "text-white/70 hover:text-white transition-colors",
                href: "#",
                className: "text-white/70 hover:text-white transition-colors",
                children: "Support"
              })
            }), l.jsx("li", {
              "data-component-start": "51:14:2063",
              "data-component-end": "55:19:2227",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "li",
              children: l.jsx("a", {
                "data-component-start": "52:16:2084",
                "data-component-end": "54:20:2207",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "a",
                "data-component-class": "text-white/70 hover:text-white transition-colors",
                href: "#",
                className: "text-white/70 hover:text-white transition-colors",
                children: "Contact Us"
              })
            })]
          })]
        }), l.jsxs("div", {
          "data-component-start": "60:10:2310",
          "data-component-end": "91:16:3531",
          "data-component-path": "src/components/Footer.jsx",
          "data-component-file": "Footer.jsx",
          "data-component-name": "div",
          "data-component-class": "space-y-4",
          className: "space-y-4",
          children: [l.jsx("h3", {
            "data-component-start": "61:12:2350",
            "data-component-end": "61:79:2417",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "h3",
            "data-component-class": "font-poppins font-bold text-lg",
            className: "font-poppins font-bold text-lg",
            children: "Connect With Us"
          }), l.jsxs("div", {
            "data-component-start": "62:12:2430",
            "data-component-end": "90:18:3514",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-file": "Footer.jsx",
            "data-component-name": "div",
            "data-component-class": "flex space-x-4",
            className: "flex space-x-4",
            children: [l.jsx("a", {
              "data-component-start": "63:14:2477",
              "data-component-end": "71:18:2818",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "a",
              "data-component-class": "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              href: "https://www.linkedin.com/company/heyboss-xyz/",
              target: "_blank",
              rel: "noreferrer",
              className: "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              "aria-label": "LinkedIn",
              children: l.jsx(Ig, {
                "data-component-start": "70:16:2777",
                "data-component-end": "70:38:2799",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "Linkedin",
                size: 20
              })
            }), l.jsx("a", {
              "data-component-start": "72:14:2833",
              "data-component-end": "80:18:3150",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "a",
              "data-component-class": "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              href: "https://x.com/heybossAI",
              target: "_blank",
              rel: "noreferrer",
              className: "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              "aria-label": "Twitter",
              children: l.jsx(fS, {
                "data-component-start": "79:16:3110",
                "data-component-end": "79:37:3131",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "Twitter",
                size: 20
              })
            }), l.jsx("a", {
              "data-component-start": "81:14:3165",
              "data-component-end": "89:18:3495",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-file": "Footer.jsx",
              "data-component-name": "a",
              "data-component-class": "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              href: "https://www.youtube.com/@heyboss-xyz",
              target: "_blank",
              rel: "noreferrer",
              className: "bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all",
              "aria-label": "YouTube",
              children: l.jsx(SS, {
                "data-component-start": "88:16:3455",
                "data-component-end": "88:37:3476",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-file": "Footer.jsx",
                "data-component-name": "Youtube",
                size: 20
              })
            })]
          })]
        })]
      }), l.jsxs("div", {
        "data-component-start": "94:8:3564",
        "data-component-end": "101:14:4028",
        "data-component-path": "src/components/Footer.jsx",
        "data-component-file": "Footer.jsx",
        "data-component-name": "div",
        "data-component-class": "mt-10 pt-8 border-t border-white/10 text-center",
        className: "mt-10 pt-8 border-t border-white/10 text-center",
        children: [l.jsx("p", {
          "data-component-start": "95:10:3640",
          "data-component-end": "97:14:3747",
          "data-component-path": "src/components/Footer.jsx",
          "data-component-file": "Footer.jsx",
          "data-component-name": "p",
          "data-component-class": "text-white/50 text-sm",
          className: "text-white/50 text-sm",
          children: "© 2025 Zunno.ai. All rights reserved."
        }), l.jsxs("p", {
          "data-component-start": "98:10:3758",
          "data-component-end": "100:14:4013",
          "data-component-path": "src/components/Footer.jsx",
          "data-component-file": "Footer.jsx",
          "data-component-name": "p",
          "data-component-class": "text-white/50 text-sm mt-4",
          className: "text-white/50 text-sm mt-4",
          children: "Made with ❤️"
        })]
      })]
    })
  }),
  n0 = F.createContext({});

function FS(t) {
  const e = F.useRef(null);
  return e.current === null && (e.current = t()), e.current
}
const jd = F.createContext(null),
  a0 = F.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
  });

function NS(t = !0) {
  const e = F.useContext(jd);
  if (e === null) return [!0, null];
  const {
    isPresent: n,
    onExitComplete: a,
    register: o
  } = e, s = F.useId();
  F.useEffect(() => {
    t && o(s)
  }, [t]);
  const c = F.useCallback(() => t && a && a(s), [s, a, t]);
  return !n && a ? [!1, c] : [!0]
}
const bd = typeof window < "u",
  AS = bd ? F.useLayoutEffect : F.useEffect,
  Xt = t => t;
let o0 = Xt;

function wd(t) {
  let e;
  return () => (e === void 0 && (e = t()), e)
}
const Va = (t, e, n) => {
    const a = e - t;
    return a === 0 ? 1 : (n - t) / a
  },
  Re = t => t * 1e3,
  Ve = t => t / 1e3,
  ES = {
    useManualTiming: !1
  };

function CS(t) {
  let e = new Set,
    n = new Set,
    a = !1,
    o = !1;
  const s = new WeakSet;
  let c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function i(d) {
    s.has(d) && (r.schedule(d), t()), d(c)
  }
  const r = {
    schedule: (d, u = !1, m = !1) => {
      const f = m && a ? e : n;
      return u && s.add(d), f.has(d) || f.add(d), d
    },
    cancel: d => {
      n.delete(d), s.delete(d)
    },
    process: d => {
      if (c = d, a) {
        o = !0;
        return
      }
      a = !0, [e, n] = [n, e], e.forEach(i), e.clear(), a = !1, o && (o = !1, r.process(d))
    }
  };
  return r
}
const Hs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  MS = 40;

function s0(t, e) {
  let n = !1,
    a = !0;
  const o = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    s = () => n = !0,
    c = Hs.reduce((x, h) => (x[h] = CS(s), x), {}),
    {
      read: i,
      resolveKeyframes: r,
      update: d,
      preRender: u,
      render: m,
      postRender: p
    } = c,
    f = () => {
      const x = performance.now();
      n = !1, o.delta = a ? 1e3 / 60 : Math.max(Math.min(x - o.timestamp, MS), 1), o.timestamp = x, o.isProcessing = !0, i.process(o), r.process(o), d.process(o), u.process(o), m.process(o), p.process(o), o.isProcessing = !1, n && e && (a = !1, t(f))
    },
    S = () => {
      n = !0, a = !0, o.isProcessing || t(f)
    };
  return {
    schedule: Hs.reduce((x, h) => {
      const y = c[h];
      return x[h] = (g, w = !1, E = !1) => (n || S(), y.schedule(g, w, E)), x
    }, {}),
    cancel: x => {
      for (let h = 0; h < Hs.length; h++) c[Hs[h]].cancel(x)
    },
    state: o,
    steps: c
  }
}
const {
  schedule: $,
  cancel: pn,
  state: jt,
  steps: Ki
} = s0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xt, !0), c0 = F.createContext({
  strict: !1
}), Om = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Oa = {};
for (const t in Om) Oa[t] = {
  isEnabled: e => Om[t].some(n => !!e[n])
};

function DS(t) {
  for (const e in t) Oa[e] = {
    ...Oa[e],
    ...t[e]
  }
}
const RS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Rc(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || RS.has(t)
}
let i0 = t => !Rc(t);

function VS(t) {
  t && (i0 = e => e.startsWith("on") ? !Rc(e) : t(e))
}
try {
  VS(require("@emotion/is-prop-valid").default)
} catch {}

function OS(t, e, n) {
  const a = {};
  for (const o in t) o === "values" && typeof t.values == "object" || (i0(o) || n === !0 && Rc(o) || !e && !Rc(o) || t.draggable && o.startsWith("onDrag")) && (a[o] = t[o]);
  return a
}

function HS(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map,
    n = (...a) => t(...a);
  return new Proxy(n, {
    get: (a, o) => o === "create" ? t : (e.has(o) || e.set(o, t(o)), e.get(o))
  })
}
const si = F.createContext({});

function Lo(t) {
  return typeof t == "string" || Array.isArray(t)
}

function ci(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Td = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Fd = ["initial", ...Td];

function ii(t) {
  return ci(t.animate) || Fd.some(e => Lo(t[e]))
}

function l0(t) {
  return !!(ii(t) || t.variants)
}

function zS(t, e) {
  if (ii(t)) {
    const {
      initial: n,
      animate: a
    } = t;
    return {
      initial: n === !1 || Lo(n) ? n : void 0,
      animate: Lo(a) ? a : void 0
    }
  }
  return t.inherit !== !1 ? e : {}
}

function _S(t) {
  const {
    initial: e,
    animate: n
  } = zS(t, F.useContext(si));
  return F.useMemo(() => ({
    initial: e,
    animate: n
  }), [Hm(e), Hm(n)])
}

function Hm(t) {
  return Array.isArray(t) ? t.join(" ") : t
}
const US = Symbol.for("motionComponentSymbol");

function la(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function BS(t, e, n) {
  return F.useCallback(a => {
    a && t.onMount && t.onMount(a), e && (a ? e.mount(a) : e.unmount()), n && (typeof n == "function" ? n(a) : la(n) && (n.current = a))
  }, [e])
}
const Nd = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  kS = "framerAppearId",
  r0 = "data-" + Nd(kS),
  {
    schedule: Ad
  } = s0(queueMicrotask, !1),
  d0 = F.createContext({});

function LS(t, e, n, a, o) {
  var s, c;
  const {
    visualElement: i
  } = F.useContext(si), r = F.useContext(c0), d = F.useContext(jd), u = F.useContext(a0).reducedMotion, m = F.useRef(null);
  a = a || r.renderer, !m.current && a && (m.current = a(t, {
    visualState: e,
    parent: i,
    props: n,
    presenceContext: d,
    blockInitialAnimation: d ? d.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const p = m.current,
    f = F.useContext(d0);
  p && !p.projection && o && (p.type === "html" || p.type === "svg") && PS(m.current, n, o, f);
  const S = F.useRef(!1);
  F.useInsertionEffect(() => {
    p && S.current && p.update(n, d)
  });
  const v = n[r0],
    b = F.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, v)));
  return AS(() => {
    p && (S.current = !0, window.MotionIsMounted = !0, p.updateFeatures(), Ad.render(p.render), b.current && p.animationState && p.animationState.animateChanges())
  }), F.useEffect(() => {
    p && (!b.current && p.animationState && p.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) === null || x === void 0 || x.call(window, v)
    }), b.current = !1))
  }), p
}

function PS(t, e, n, a) {
  const {
    layoutId: o,
    layout: s,
    drag: c,
    dragConstraints: i,
    layoutScroll: r,
    layoutRoot: d
  } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : u0(t.parent)), t.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!c || i && la(i),
    visualElement: t,
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: a,
    layoutScroll: r,
    layoutRoot: d
  })
}

function u0(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : u0(t.parent)
}

function qS({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: a,
  Component: o
}) {
  var s, c;
  t && DS(t);

  function i(d, u) {
    let m;
    const p = {
        ...F.useContext(a0),
        ...d,
        layoutId: YS(d)
      },
      {
        isStatic: f
      } = p,
      S = _S(d),
      v = a(d, f);
    if (!f && bd) {
      GS();
      const b = XS(p);
      m = b.MeasureLayout, S.visualElement = LS(o, v, p, e, b.ProjectionNode)
    }
    return l.jsxs(si.Provider, {
      value: S,
      children: [m && S.visualElement ? l.jsx(m, {
        visualElement: S.visualElement,
        ...p
      }) : null, n(o, d, BS(v, S.visualElement, u), v, f, S.visualElement)]
    })
  }
  i.displayName = `motion.${typeof o=="string"?o:`create(${(c=(s=o.displayName)!==null&&s!==void 0?s:o.name)!==null&&c!==void 0?c:""})`}`;
  const r = F.forwardRef(i);
  return r[US] = o, r
}

function YS({
  layoutId: t
}) {
  const e = F.useContext(n0).id;
  return e && t !== void 0 ? e + "-" + t : t
}

function GS(t, e) {
  F.useContext(c0).strict
}

function XS(t) {
  const {
    drag: e,
    layout: n
  } = Oa;
  if (!e && !n) return {};
  const a = {
    ...e,
    ...n
  };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode
  }
}
const ZS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Ed(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(ZS.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function zm(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, a) => {
    e[0][a] = n.get(), e[1][a] = n.getVelocity()
  }), e
}

function Cd(t, e, n, a) {
  if (typeof e == "function") {
    const [o, s] = zm(a);
    e = e(n !== void 0 ? n : t.custom, o, s)
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [o, s] = zm(a);
    e = e(n !== void 0 ? n : t.custom, o, s)
  }
  return e
}
const or = t => Array.isArray(t),
  KS = t => !!(t && typeof t == "object" && t.mix && t.toValue),
  QS = t => or(t) ? t[t.length - 1] || 0 : t,
  Et = t => !!(t && t.getVelocity);

function $s(t) {
  const e = Et(t) ? t.get() : t;
  return KS(e) ? e.toValue() : e
}

function JS({
  scrapeMotionValuesFromProps: t,
  createRenderState: e,
  onUpdate: n
}, a, o, s) {
  const c = {
    latestValues: $S(a, o, s, t),
    renderState: e()
  };
  return n && (c.onMount = i => n({
    props: a,
    current: i,
    ...c
  }), c.onUpdate = i => n(i)), c
}
const m0 = t => (e, n) => {
  const a = F.useContext(si),
    o = F.useContext(jd),
    s = () => JS(t, e, a, o);
  return n ? s() : FS(s)
};

function $S(t, e, n, a) {
  const o = {},
    s = a(t, {});
  for (const p in s) o[p] = $s(s[p]);
  let {
    initial: c,
    animate: i
  } = t;
  const r = ii(t),
    d = l0(t);
  e && d && !r && t.inherit !== !1 && (c === void 0 && (c = e.initial), i === void 0 && (i = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || c === !1;
  const m = u ? i : c;
  if (m && typeof m != "boolean" && !ci(m)) {
    const p = Array.isArray(m) ? m : [m];
    for (let f = 0; f < p.length; f++) {
      const S = Cd(t, p[f]);
      if (S) {
        const {
          transitionEnd: v,
          transition: b,
          ...x
        } = S;
        for (const h in x) {
          let y = x[h];
          if (Array.isArray(y)) {
            const g = u ? y.length - 1 : 0;
            y = y[g]
          }
          y !== null && (o[h] = y)
        }
        for (const h in v) o[h] = v[h]
      }
    }
  }
  return o
}
const qa = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  qn = new Set(qa),
  p0 = t => e => typeof e == "string" && e.startsWith(t),
  f0 = p0("--"),
  WS = p0("var(--"),
  Md = t => WS(t) ? IS.test(t.split("/*")[0].trim()) : !1,
  IS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  h0 = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
  Ue = (t, e, n) => n > e ? e : n < t ? t : n,
  Ya = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  },
  Po = {
    ...Ya,
    transform: t => Ue(0, 1, t)
  },
  zs = {
    ...Ya,
    default: 1
  },
  rs = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  qe = rs("deg"),
  ye = rs("%"),
  D = rs("px"),
  tj = rs("vh"),
  ej = rs("vw"),
  _m = {
    ...ye,
    parse: t => ye.parse(t) / 100,
    transform: t => ye.transform(t * 100)
  },
  nj = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D
  },
  aj = {
    rotate: qe,
    rotateX: qe,
    rotateY: qe,
    rotateZ: qe,
    scale: zs,
    scaleX: zs,
    scaleY: zs,
    scaleZ: zs,
    skew: qe,
    skewX: qe,
    skewY: qe,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Po,
    originX: _m,
    originY: _m,
    originZ: D
  },
  Um = {
    ...Ya,
    transform: Math.round
  },
  Dd = {
    ...nj,
    ...aj,
    zIndex: Um,
    size: D,
    fillOpacity: Po,
    strokeOpacity: Po,
    numOctaves: Um
  },
  oj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  sj = qa.length;

function cj(t, e, n) {
  let a = "",
    o = !0;
  for (let s = 0; s < sj; s++) {
    const c = qa[s],
      i = t[c];
    if (i === void 0) continue;
    let r = !0;
    if (typeof i == "number" ? r = i === (c.startsWith("scale") ? 1 : 0) : r = parseFloat(i) === 0, !r || n) {
      const d = h0(i, Dd[c]);
      if (!r) {
        o = !1;
        const u = oj[c] || c;
        a += `${u}(${d}) `
      }
      n && (e[c] = d)
    }
  }
  return a = a.trim(), n ? a = n(e, o ? "" : a) : o && (a = "none"), a
}

function Rd(t, e, n) {
  const {
    style: a,
    vars: o,
    transformOrigin: s
  } = t;
  let c = !1,
    i = !1;
  for (const r in e) {
    const d = e[r];
    if (qn.has(r)) {
      c = !0;
      continue
    } else if (f0(r)) {
      o[r] = d;
      continue
    } else {
      const u = h0(d, Dd[r]);
      r.startsWith("origin") ? (i = !0, s[r] = u) : a[r] = u
    }
  }
  if (e.transform || (c || n ? a.transform = cj(e, t.transform, n) : a.transform && (a.transform = "none")), i) {
    const {
      originX: r = "50%",
      originY: d = "50%",
      originZ: u = 0
    } = s;
    a.transformOrigin = `${r} ${d} ${u}`
  }
}
const ij = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  lj = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function rj(t, e, n = 1, a = 0, o = !0) {
  t.pathLength = 1;
  const s = o ? ij : lj;
  t[s.offset] = D.transform(-a);
  const c = D.transform(e),
    i = D.transform(n);
  t[s.array] = `${c} ${i}`
}

function Bm(t, e, n) {
  return typeof t == "string" ? t : D.transform(e + n * t)
}

function dj(t, e, n) {
  const a = Bm(e, t.x, t.width),
    o = Bm(n, t.y, t.height);
  return `${a} ${o}`
}

function Vd(t, {
  attrX: e,
  attrY: n,
  attrScale: a,
  originX: o,
  originY: s,
  pathLength: c,
  pathSpacing: i = 1,
  pathOffset: r = 0,
  ...d
}, u, m) {
  if (Rd(t, d, m), u) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return
  }
  t.attrs = t.style, t.style = {};
  const {
    attrs: p,
    style: f,
    dimensions: S
  } = t;
  p.transform && (S && (f.transform = p.transform), delete p.transform), S && (o !== void 0 || s !== void 0 || f.transform) && (f.transformOrigin = dj(S, o !== void 0 ? o : .5, s !== void 0 ? s : .5)), e !== void 0 && (p.x = e), n !== void 0 && (p.y = n), a !== void 0 && (p.scale = a), c !== void 0 && rj(p, c, i, r, !1)
}
const Od = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  }),
  x0 = () => ({
    ...Od(),
    attrs: {}
  }),
  Hd = t => typeof t == "string" && t.toLowerCase() === "svg";

function y0(t, {
  style: e,
  vars: n
}, a, o) {
  Object.assign(t.style, e, o && o.getProjectionStyles(a));
  for (const s in n) t.style.setProperty(s, n[s])
}
const v0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function g0(t, e, n, a) {
  y0(t, e, void 0, a);
  for (const o in e.attrs) t.setAttribute(v0.has(o) ? o : Nd(o), e.attrs[o])
}
const Vc = {};

function uj(t) {
  Object.assign(Vc, t)
}

function S0(t, {
  layout: e,
  layoutId: n
}) {
  return qn.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Vc[t] || t === "opacity")
}

function zd(t, e, n) {
  var a;
  const {
    style: o
  } = t, s = {};
  for (const c in o)(Et(o[c]) || e.style && Et(e.style[c]) || S0(c, t) || ((a = n == null ? void 0 : n.getValue(c)) === null || a === void 0 ? void 0 : a.liveStyle) !== void 0) && (s[c] = o[c]);
  return s
}

function j0(t, e, n) {
  const a = zd(t, e, n);
  for (const o in t)
    if (Et(t[o]) || Et(e[o])) {
      const s = qa.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      a[s] = t[o]
    } return a
}

function mj(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  }
}
const km = ["x", "y", "width", "height", "cx", "cy", "r"],
  pj = {
    useVisualState: m0({
      scrapeMotionValuesFromProps: j0,
      createRenderState: x0,
      onUpdate: ({
        props: t,
        prevProps: e,
        current: n,
        renderState: a,
        latestValues: o
      }) => {
        if (!n) return;
        let s = !!t.drag;
        if (!s) {
          for (const i in o)
            if (qn.has(i)) {
              s = !0;
              break
            }
        }
        if (!s) return;
        let c = !e;
        if (e)
          for (let i = 0; i < km.length; i++) {
            const r = km[i];
            t[r] !== e[r] && (c = !0)
          }
        c && $.read(() => {
          mj(n, a), $.render(() => {
            Vd(a, o, Hd(n.tagName), t.transformTemplate), g0(n, a)
          })
        })
      }
    })
  },
  fj = {
    useVisualState: m0({
      scrapeMotionValuesFromProps: zd,
      createRenderState: Od
    })
  };

function b0(t, e, n) {
  for (const a in e) !Et(e[a]) && !S0(a, n) && (t[a] = e[a])
}

function hj({
  transformTemplate: t
}, e) {
  return F.useMemo(() => {
    const n = Od();
    return Rd(n, e, t), Object.assign({}, n.vars, n.style)
  }, [e])
}

function xj(t, e) {
  const n = t.style || {},
    a = {};
  return b0(a, n, t), Object.assign(a, hj(t, e)), a
}

function yj(t, e) {
  const n = {},
    a = xj(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = a, n
}

function vj(t, e, n, a) {
  const o = F.useMemo(() => {
    const s = x0();
    return Vd(s, e, Hd(a), t.transformTemplate), {
      ...s.attrs,
      style: {
        ...s.style
      }
    }
  }, [e]);
  if (t.style) {
    const s = {};
    b0(s, t.style, t), o.style = {
      ...s,
      ...o.style
    }
  }
  return o
}

function gj(t = !1) {
  return (n, a, o, {
    latestValues: s
  }, c) => {
    const r = (Ed(n) ? vj : yj)(a, s, c, n),
      d = OS(a, typeof n == "string", t),
      u = n !== F.Fragment ? {
        ...d,
        ...r,
        ref: o
      } : {},
      {
        children: m
      } = a,
      p = F.useMemo(() => Et(m) ? m.get() : m, [m]);
    return F.createElement(n, {
      ...u,
      children: p
    })
  }
}

function Sj(t, e) {
  return function(a, {
    forwardMotionProps: o
  } = {
    forwardMotionProps: !1
  }) {
    const c = {
      ...Ed(a) ? pj : fj,
      preloadedFeatures: t,
      useRender: gj(o),
      createVisualElement: e,
      Component: a
    };
    return qS(c)
  }
}

function w0(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let a = 0; a < n; a++)
    if (e[a] !== t[a]) return !1;
  return !0
}

function li(t, e, n) {
  const a = t.getProps();
  return Cd(a, e, n !== void 0 ? n : a.custom, t)
}
const jj = wd(() => window.ScrollTimeline !== void 0);
class bj {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
  }
  get finished() {
    return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
  }
  getAll(e) {
    return this.animations[0][e]
  }
  setAll(e, n) {
    for (let a = 0; a < this.animations.length; a++) this.animations[a][e] = n
  }
  attachTimeline(e, n) {
    const a = this.animations.map(o => {
      if (jj() && o.attachTimeline) return o.attachTimeline(e);
      if (typeof n == "function") return n(o)
    });
    return () => {
      a.forEach((o, s) => {
        o && o(), this.animations[s].stop()
      })
    }
  }
  get time() {
    return this.getAll("time")
  }
  set time(e) {
    this.setAll("time", e)
  }
  get speed() {
    return this.getAll("speed")
  }
  set speed(e) {
    this.setAll("speed", e)
  }
  get startTime() {
    return this.getAll("startTime")
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
    return e
  }
  runAll(e) {
    this.animations.forEach(n => n[e]())
  }
  flatten() {
    this.runAll("flatten")
  }
  play() {
    this.runAll("play")
  }
  pause() {
    this.runAll("pause")
  }
  cancel() {
    this.runAll("cancel")
  }
  complete() {
    this.runAll("complete")
  }
}
class wj extends bj {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n)
  }
}

function _d(t, e) {
  return t ? t[e] || t.default || t : void 0
}
const sr = 2e4;

function T0(t) {
  let e = 0;
  const n = 50;
  let a = t.next(e);
  for (; !a.done && e < sr;) e += n, a = t.next(e);
  return e >= sr ? 1 / 0 : e
}

function Ud(t) {
  return typeof t == "function"
}

function Lm(t, e) {
  t.timeline = e, t.onfinish = null
}
const Bd = t => Array.isArray(t) && typeof t[0] == "number",
  Tj = {
    linearEasing: void 0
  };

function Fj(t, e) {
  const n = wd(t);
  return () => {
    var a;
    return (a = Tj[e]) !== null && a !== void 0 ? a : n()
  }
}
const Oc = Fj(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch {
      return !1
    }
    return !0
  }, "linearEasing"),
  F0 = (t, e, n = 10) => {
    let a = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < o; s++) a += t(Va(0, o - 1, s)) + ", ";
    return `linear(${a.substring(0,a.length-2)})`
  };

function N0(t) {
  return !!(typeof t == "function" && Oc() || !t || typeof t == "string" && (t in cr || Oc()) || Bd(t) || Array.isArray(t) && t.every(N0))
}
const oo = ([t, e, n, a]) => `cubic-bezier(${t}, ${e}, ${n}, ${a})`,
  cr = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: oo([0, .65, .55, 1]),
    circOut: oo([.55, 0, 1, .45]),
    backIn: oo([.31, .01, .66, -.59]),
    backOut: oo([.33, 1.53, .69, .99])
  };

function A0(t, e) {
  if (t) return typeof t == "function" && Oc() ? F0(t, e) : Bd(t) ? oo(t) : Array.isArray(t) ? t.map(n => A0(n, e) || cr.easeOut) : cr[t]
}
const ie = {
  x: !1,
  y: !1
};

function E0() {
  return ie.x || ie.y
}

function Nj(t, e, n) {
  var a;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let o = document;
    const s = (a = void 0) !== null && a !== void 0 ? a : o.querySelectorAll(t);
    return s ? Array.from(s) : []
  }
  return Array.from(t)
}

function C0(t, e) {
  const n = Nj(t),
    a = new AbortController,
    o = {
      passive: !0,
      ...e,
      signal: a.signal
    };
  return [n, o, () => a.abort()]
}

function Pm(t) {
  return e => {
    e.pointerType === "touch" || E0() || t(e)
  }
}

function Aj(t, e, n = {}) {
  const [a, o, s] = C0(t, n), c = Pm(i => {
    const {
      target: r
    } = i, d = e(i);
    if (typeof d != "function" || !r) return;
    const u = Pm(m => {
      d(m), r.removeEventListener("pointerleave", u)
    });
    r.addEventListener("pointerleave", u, o)
  });
  return a.forEach(i => {
    i.addEventListener("pointerenter", c, o)
  }), s
}
const M0 = (t, e) => e ? t === e ? !0 : M0(t, e.parentElement) : !1,
  kd = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
  Ej = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Cj(t) {
  return Ej.has(t.tagName) || t.tabIndex !== -1
}
const so = new WeakSet;

function qm(t) {
  return e => {
    e.key === "Enter" && t(e)
  }
}

function Qi(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const Mj = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const a = qm(() => {
    if (so.has(n)) return;
    Qi(n, "down");
    const o = qm(() => {
        Qi(n, "up")
      }),
      s = () => Qi(n, "cancel");
    n.addEventListener("keyup", o, e), n.addEventListener("blur", s, e)
  });
  n.addEventListener("keydown", a, e), n.addEventListener("blur", () => n.removeEventListener("keydown", a), e)
};

function Ym(t) {
  return kd(t) && !E0()
}

function Dj(t, e, n = {}) {
  const [a, o, s] = C0(t, n), c = i => {
    const r = i.currentTarget;
    if (!Ym(i) || so.has(r)) return;
    so.add(r);
    const d = e(i),
      u = (f, S) => {
        window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", p), !(!Ym(f) || !so.has(r)) && (so.delete(r), typeof d == "function" && d(f, {
          success: S
        }))
      },
      m = f => {
        u(f, n.useGlobalTarget || M0(r, f.target))
      },
      p = f => {
        u(f, !1)
      };
    window.addEventListener("pointerup", m, o), window.addEventListener("pointercancel", p, o)
  };
  return a.forEach(i => {
    !Cj(i) && i.getAttribute("tabindex") === null && (i.tabIndex = 0), (n.useGlobalTarget ? window : i).addEventListener("pointerdown", c, o), i.addEventListener("focus", d => Mj(d, o), o)
  }), s
}

function Rj(t) {
  return t === "x" || t === "y" ? ie[t] ? null : (ie[t] = !0, () => {
    ie[t] = !1
  }) : ie.x || ie.y ? null : (ie.x = ie.y = !0, () => {
    ie.x = ie.y = !1
  })
}
const D0 = new Set(["width", "height", "top", "left", "right", "bottom", ...qa]);
let Ws;

function Vj() {
  Ws = void 0
}
const ve = {
  now: () => (Ws === void 0 && ve.set(jt.isProcessing || ES.useManualTiming ? jt.timestamp : performance.now()), Ws),
  set: t => {
    Ws = t, queueMicrotask(Vj)
  }
};

function Ld(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}

function Pd(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1)
}
class qd {
  constructor() {
    this.subscriptions = []
  }
  add(e) {
    return Ld(this.subscriptions, e), () => Pd(this.subscriptions, e)
  }
  notify(e, n, a) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](e, n, a);
      else
        for (let s = 0; s < o; s++) {
          const c = this.subscriptions[s];
          c && c(e, n, a)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}

function R0(t, e) {
  return e ? t * (1e3 / e) : 0
}
const Gm = 30,
  Oj = t => !isNaN(parseFloat(t));
class Hj {
  constructor(e, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (a, o = !0) => {
      const s = ve.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(a), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = ve.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Oj(this.current))
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
  }
  onChange(e) {
    return this.on("change", e)
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new qd);
    const a = this.events[e].add(n);
    return e === "change" ? () => {
      a(), $.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : a
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear()
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n
  }
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, n, a) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - a
  }
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const e = ve.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Gm) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Gm);
    return R0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(e) {
    return this.stop(), new Promise(n => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}

function qo(t, e) {
  return new Hj(t, e)
}

function zj(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, qo(n))
}

function _j(t, e) {
  const n = li(t, e);
  let {
    transitionEnd: a = {},
    transition: o = {},
    ...s
  } = n || {};
  s = {
    ...s,
    ...a
  };
  for (const c in s) {
    const i = QS(s[c]);
    zj(t, c, i)
  }
}

function Uj(t) {
  return !!(Et(t) && t.add)
}

function ir(t, e) {
  const n = t.getValue("willChange");
  if (Uj(n)) return n.add(e)
}

function V0(t) {
  return t.props[r0]
}
const O0 = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  Bj = 1e-7,
  kj = 12;

function Lj(t, e, n, a, o) {
  let s, c, i = 0;
  do c = e + (n - e) / 2, s = O0(c, a, o) - t, s > 0 ? n = c : e = c; while (Math.abs(s) > Bj && ++i < kj);
  return c
}

function ds(t, e, n, a) {
  if (t === e && n === a) return Xt;
  const o = s => Lj(s, 0, 1, t, n);
  return s => s === 0 || s === 1 ? s : O0(o(s), e, a)
}
const H0 = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  z0 = t => e => 1 - t(1 - e),
  _0 = ds(.33, 1.53, .69, .99),
  Yd = z0(_0),
  U0 = H0(Yd),
  B0 = t => (t *= 2) < 1 ? .5 * Yd(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
  Gd = t => 1 - Math.sin(Math.acos(t)),
  k0 = z0(Gd),
  L0 = H0(Gd),
  P0 = t => /^0[^.\s]+$/u.test(t);

function Pj(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || P0(t) : !0
}
const wo = t => Math.round(t * 1e5) / 1e5,
  Xd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function qj(t) {
  return t == null
}
const Yj = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zd = (t, e) => n => !!(typeof n == "string" && Yj.test(n) && n.startsWith(t) || e && !qj(n) && Object.prototype.hasOwnProperty.call(n, e)),
  q0 = (t, e, n) => a => {
    if (typeof a != "string") return a;
    const [o, s, c, i] = a.match(Xd);
    return {
      [t]: parseFloat(o),
      [e]: parseFloat(s),
      [n]: parseFloat(c),
      alpha: i !== void 0 ? parseFloat(i) : 1
    }
  },
  Gj = t => Ue(0, 255, t),
  Ji = {
    ...Ya,
    transform: t => Math.round(Gj(t))
  },
  Nn = {
    test: Zd("rgb", "red"),
    parse: q0("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: n,
      alpha: a = 1
    }) => "rgba(" + Ji.transform(t) + ", " + Ji.transform(e) + ", " + Ji.transform(n) + ", " + wo(Po.transform(a)) + ")"
  };

function Xj(t) {
  let e = "",
    n = "",
    a = "",
    o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), a = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), a = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, a += a, o += o), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(a, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  }
}
const lr = {
    test: Zd("#"),
    parse: Xj,
    transform: Nn.transform
  },
  ra = {
    test: Zd("hsl", "hue"),
    parse: q0("hue", "saturation", "lightness"),
    transform: ({
      hue: t,
      saturation: e,
      lightness: n,
      alpha: a = 1
    }) => "hsla(" + Math.round(t) + ", " + ye.transform(wo(e)) + ", " + ye.transform(wo(n)) + ", " + wo(Po.transform(a)) + ")"
  },
  Ft = {
    test: t => Nn.test(t) || lr.test(t) || ra.test(t),
    parse: t => Nn.test(t) ? Nn.parse(t) : ra.test(t) ? ra.parse(t) : lr.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Nn.transform(t) : ra.transform(t)
  },
  Zj = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Kj(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Xd)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Zj)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Y0 = "number",
  G0 = "color",
  Qj = "var",
  Jj = "var(",
  Xm = "${}",
  $j = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Yo(t) {
  const e = t.toString(),
    n = [],
    a = {
      color: [],
      number: [],
      var: []
    },
    o = [];
  let s = 0;
  const i = e.replace($j, r => (Ft.test(r) ? (a.color.push(s), o.push(G0), n.push(Ft.parse(r))) : r.startsWith(Jj) ? (a.var.push(s), o.push(Qj), n.push(r)) : (a.number.push(s), o.push(Y0), n.push(parseFloat(r))), ++s, Xm)).split(Xm);
  return {
    values: n,
    split: i,
    indexes: a,
    types: o
  }
}

function X0(t) {
  return Yo(t).values
}

function Z0(t) {
  const {
    split: e,
    types: n
  } = Yo(t), a = e.length;
  return o => {
    let s = "";
    for (let c = 0; c < a; c++)
      if (s += e[c], o[c] !== void 0) {
        const i = n[c];
        i === Y0 ? s += wo(o[c]) : i === G0 ? s += Ft.transform(o[c]) : s += o[c]
      } return s
  }
}
const Wj = t => typeof t == "number" ? 0 : t;

function Ij(t) {
  const e = X0(t);
  return Z0(t)(e.map(Wj))
}
const fn = {
    test: Kj,
    parse: X0,
    createTransformer: Z0,
    getAnimatableNone: Ij
  },
  t3 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function e3(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [a] = n.match(Xd) || [];
  if (!a) return t;
  const o = n.replace(a, "");
  let s = t3.has(e) ? 1 : 0;
  return a !== n && (s *= 100), e + "(" + s + o + ")"
}
const n3 = /\b([a-z-]*)\(.*?\)/gu,
  rr = {
    ...fn,
    getAnimatableNone: t => {
      const e = t.match(n3);
      return e ? e.map(e3).join(" ") : t
    }
  },
  a3 = {
    ...Dd,
    color: Ft,
    backgroundColor: Ft,
    outlineColor: Ft,
    fill: Ft,
    stroke: Ft,
    borderColor: Ft,
    borderTopColor: Ft,
    borderRightColor: Ft,
    borderBottomColor: Ft,
    borderLeftColor: Ft,
    filter: rr,
    WebkitFilter: rr
  },
  Kd = t => a3[t];

function K0(t, e) {
  let n = Kd(t);
  return n !== rr && (n = fn), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const o3 = new Set(["auto", "none", "0"]);

function s3(t, e, n) {
  let a = 0,
    o;
  for (; a < t.length && !o;) {
    const s = t[a];
    typeof s == "string" && !o3.has(s) && Yo(s).values.length && (o = t[a]), a++
  }
  if (o && n)
    for (const s of e) t[s] = K0(n, o)
}
const Zm = t => t === Ya || t === D,
  Km = (t, e) => parseFloat(t.split(", ")[e]),
  Qm = (t, e) => (n, {
    transform: a
  }) => {
    if (a === "none" || !a) return 0;
    const o = a.match(/^matrix3d\((.+)\)$/u);
    if (o) return Km(o[1], e);
    {
      const s = a.match(/^matrix\((.+)\)$/u);
      return s ? Km(s[1], t) : 0
    }
  },
  c3 = new Set(["x", "y", "z"]),
  i3 = qa.filter(t => !c3.has(t));

function l3(t) {
  const e = [];
  return i3.forEach(n => {
    const a = t.getValue(n);
    a !== void 0 && (e.push([n, a.get()]), a.set(n.startsWith("scale") ? 1 : 0))
  }), e
}
const Ha = {
  width: ({
    x: t
  }, {
    paddingLeft: e = "0",
    paddingRight: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({
    y: t
  }, {
    paddingTop: e = "0",
    paddingBottom: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, {
    top: e
  }) => parseFloat(e),
  left: (t, {
    left: e
  }) => parseFloat(e),
  bottom: ({
    y: t
  }, {
    top: e
  }) => parseFloat(e) + (t.max - t.min),
  right: ({
    x: t
  }, {
    left: e
  }) => parseFloat(e) + (t.max - t.min),
  x: Qm(4, 13),
  y: Qm(5, 14)
};
Ha.translateX = Ha.x;
Ha.translateY = Ha.y;
const On = new Set;
let dr = !1,
  ur = !1;

function Q0() {
  if (ur) {
    const t = Array.from(On).filter(a => a.needsMeasurement),
      e = new Set(t.map(a => a.element)),
      n = new Map;
    e.forEach(a => {
      const o = l3(a);
      o.length && (n.set(a, o), a.render())
    }), t.forEach(a => a.measureInitialState()), e.forEach(a => {
      a.render();
      const o = n.get(a);
      o && o.forEach(([s, c]) => {
        var i;
        (i = a.getValue(s)) === null || i === void 0 || i.set(c)
      })
    }), t.forEach(a => a.measureEndState()), t.forEach(a => {
      a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY)
    })
  }
  ur = !1, dr = !1, On.forEach(t => t.complete()), On.clear()
}

function J0() {
  On.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (ur = !0)
  })
}

function r3() {
  J0(), Q0()
}
class Qd {
  constructor(e, n, a, o, s, c = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = a, this.motionValue = o, this.element = s, this.isAsync = c
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (On.add(this), dr || (dr = !0, $.read(J0), $.resolveKeyframes(Q0))) : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: a,
      motionValue: o
    } = this;
    for (let s = 0; s < e.length; s++)
      if (e[s] === null)
        if (s === 0) {
          const c = o == null ? void 0 : o.get(),
            i = e[e.length - 1];
          if (c !== void 0) e[0] = c;
          else if (a && n) {
            const r = a.readValue(n, i);
            r != null && (e[0] = r)
          }
          e[0] === void 0 && (e[0] = i), o && c === void 0 && o.set(e[0])
        } else e[s] = e[s - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), On.delete(this)
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, On.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const $0 = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  d3 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function u3(t) {
  const e = d3.exec(t);
  if (!e) return [, ];
  const [, n, a, o] = e;
  return [`--${n??a}`, o]
}

function W0(t, e, n = 1) {
  const [a, o] = u3(t);
  if (!a) return;
  const s = window.getComputedStyle(e).getPropertyValue(a);
  if (s) {
    const c = s.trim();
    return $0(c) ? parseFloat(c) : c
  }
  return Md(o) ? W0(o, e, n + 1) : o
}
const I0 = t => e => e.test(t),
  m3 = {
    test: t => t === "auto",
    parse: t => t
  },
  tx = [Ya, D, ye, qe, ej, tj, m3],
  Jm = t => tx.find(I0(t));
class ex extends Qd {
  constructor(e, n, a, o, s) {
    super(e, n, a, o, s, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      element: n,
      name: a
    } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let r = 0; r < e.length; r++) {
      let d = e[r];
      if (typeof d == "string" && (d = d.trim(), Md(d))) {
        const u = W0(d, n.current);
        u !== void 0 && (e[r] = u), r === e.length - 1 && (this.finalKeyframe = d)
      }
    }
    if (this.resolveNoneKeyframes(), !D0.has(a) || e.length !== 2) return;
    const [o, s] = e, c = Jm(o), i = Jm(s);
    if (c !== i)
      if (Zm(c) && Zm(i))
        for (let r = 0; r < e.length; r++) {
          const d = e[r];
          typeof d == "string" && (e[r] = parseFloat(d))
        } else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n
    } = this, a = [];
    for (let o = 0; o < e.length; o++) Pj(e[o]) && a.push(o);
    a.length && s3(e, a, n)
  }
  measureInitialState() {
    const {
      element: e,
      unresolvedKeyframes: n,
      name: a
    } = this;
    if (!e || !e.current) return;
    a === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ha[a](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && e.getValue(a, o).jump(o, !1)
  }
  measureEndState() {
    var e;
    const {
      element: n,
      name: a,
      unresolvedKeyframes: o
    } = this;
    if (!n || !n.current) return;
    const s = n.getValue(a);
    s && s.jump(this.measuredOrigin, !1);
    const c = o.length - 1,
      i = o[c];
    o[c] = Ha[a](n.measureViewportBox(), window.getComputedStyle(n.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([r, d]) => {
      n.getValue(r).set(d)
    }), this.resolveNoneKeyframes()
  }
}
const $m = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (fn.test(t) || t === "0") && !t.startsWith("url("));

function p3(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e) return !0
}

function f3(t, e, n, a) {
  const o = t[0];
  if (o === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const s = t[t.length - 1],
    c = $m(o, e),
    i = $m(s, e);
  return !c || !i ? !1 : p3(t) || (n === "spring" || Ud(n)) && a
}
const h3 = t => t !== null;

function ri(t, {
  repeat: e,
  repeatType: n = "loop"
}, a) {
  const o = t.filter(h3),
    s = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !s || a === void 0 ? o[s] : a
}
const x3 = 40;
class nx {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: a = "keyframes",
    repeat: o = 0,
    repeatDelay: s = 0,
    repeatType: c = "loop",
    ...i
  }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ve.now(), this.options = {
      autoplay: e,
      delay: n,
      type: a,
      repeat: o,
      repeatDelay: s,
      repeatType: c,
      ...i
    }, this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > x3 ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && r3(), this._resolved
  }
  onKeyframesResolved(e, n) {
    this.resolvedAt = ve.now(), this.hasAttemptedResolve = !0;
    const {
      name: a,
      type: o,
      velocity: s,
      delay: c,
      onComplete: i,
      onUpdate: r,
      isGenerator: d
    } = this.options;
    if (!d && !f3(e, a, o, s))
      if (c) this.options.duration = 0;
      else {
        r && r(ri(e, this.options, n)), i && i(), this.resolveFinishedPromise();
        return
      } const u = this.initPlayback(e, n);
    u !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved())
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n)
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear"
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(e => {
      this.resolveFinishedPromise = e
    })
  }
}
const at = (t, e, n) => t + (e - t) * n;

function $i(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function y3({
  hue: t,
  saturation: e,
  lightness: n,
  alpha: a
}) {
  t /= 360, e /= 100, n /= 100;
  let o = 0,
    s = 0,
    c = 0;
  if (!e) o = s = c = n;
  else {
    const i = n < .5 ? n * (1 + e) : n + e - n * e,
      r = 2 * n - i;
    o = $i(r, i, t + 1 / 3), s = $i(r, i, t), c = $i(r, i, t - 1 / 3)
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(c * 255),
    alpha: a
  }
}

function Hc(t, e) {
  return n => n > 0 ? e : t
}
const Wi = (t, e, n) => {
    const a = t * t,
      o = n * (e * e - a) + a;
    return o < 0 ? 0 : Math.sqrt(o)
  },
  v3 = [lr, Nn, ra],
  g3 = t => v3.find(e => e.test(t));

function Wm(t) {
  const e = g3(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === ra && (n = y3(n)), n
}
const Im = (t, e) => {
    const n = Wm(t),
      a = Wm(e);
    if (!n || !a) return Hc(t, e);
    const o = {
      ...n
    };
    return s => (o.red = Wi(n.red, a.red, s), o.green = Wi(n.green, a.green, s), o.blue = Wi(n.blue, a.blue, s), o.alpha = at(n.alpha, a.alpha, s), Nn.transform(o))
  },
  S3 = (t, e) => n => e(t(n)),
  us = (...t) => t.reduce(S3),
  mr = new Set(["none", "hidden"]);

function j3(t, e) {
  return mr.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function b3(t, e) {
  return n => at(t, e, n)
}

function Jd(t) {
  return typeof t == "number" ? b3 : typeof t == "string" ? Md(t) ? Hc : Ft.test(t) ? Im : F3 : Array.isArray(t) ? ax : typeof t == "object" ? Ft.test(t) ? Im : w3 : Hc
}

function ax(t, e) {
  const n = [...t],
    a = n.length,
    o = t.map((s, c) => Jd(s)(s, e[c]));
  return s => {
    for (let c = 0; c < a; c++) n[c] = o[c](s);
    return n
  }
}

function w3(t, e) {
  const n = {
      ...t,
      ...e
    },
    a = {};
  for (const o in n) t[o] !== void 0 && e[o] !== void 0 && (a[o] = Jd(t[o])(t[o], e[o]));
  return o => {
    for (const s in a) n[s] = a[s](o);
    return n
  }
}

function T3(t, e) {
  var n;
  const a = [],
    o = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let s = 0; s < e.values.length; s++) {
    const c = e.types[s],
      i = t.indexes[c][o[c]],
      r = (n = t.values[i]) !== null && n !== void 0 ? n : 0;
    a[s] = r, o[c]++
  }
  return a
}
const F3 = (t, e) => {
  const n = fn.createTransformer(e),
    a = Yo(t),
    o = Yo(e);
  return a.indexes.var.length === o.indexes.var.length && a.indexes.color.length === o.indexes.color.length && a.indexes.number.length >= o.indexes.number.length ? mr.has(t) && !o.values.length || mr.has(e) && !a.values.length ? j3(t, e) : us(ax(T3(a, o), o.values), n) : Hc(t, e)
};

function ox(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? at(t, e, n) : Jd(t)(t, e)
}
const N3 = 5;

function sx(t, e, n) {
  const a = Math.max(e - N3, 0);
  return R0(n - t(a), e - a)
}
const st = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
      granular: .01,
      default: 2
    },
    restDelta: {
      granular: .005,
      default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
  },
  Ii = .001;

function A3({
  duration: t = st.duration,
  bounce: e = st.bounce,
  velocity: n = st.velocity,
  mass: a = st.mass
}) {
  let o, s, c = 1 - e;
  c = Ue(st.minDamping, st.maxDamping, c), t = Ue(st.minDuration, st.maxDuration, Ve(t)), c < 1 ? (o = d => {
    const u = d * c,
      m = u * t,
      p = u - n,
      f = pr(d, c),
      S = Math.exp(-m);
    return Ii - p / f * S
  }, s = d => {
    const m = d * c * t,
      p = m * n + n,
      f = Math.pow(c, 2) * Math.pow(d, 2) * t,
      S = Math.exp(-m),
      v = pr(Math.pow(d, 2), c);
    return (-o(d) + Ii > 0 ? -1 : 1) * ((p - f) * S) / v
  }) : (o = d => {
    const u = Math.exp(-d * t),
      m = (d - n) * t + 1;
    return -Ii + u * m
  }, s = d => {
    const u = Math.exp(-d * t),
      m = (n - d) * (t * t);
    return u * m
  });
  const i = 5 / t,
    r = C3(o, s, i);
  if (t = Re(t), isNaN(r)) return {
    stiffness: st.stiffness,
    damping: st.damping,
    duration: t
  };
  {
    const d = Math.pow(r, 2) * a;
    return {
      stiffness: d,
      damping: c * 2 * Math.sqrt(a * d),
      duration: t
    }
  }
}
const E3 = 12;

function C3(t, e, n) {
  let a = n;
  for (let o = 1; o < E3; o++) a = a - t(a) / e(a);
  return a
}

function pr(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const M3 = ["duration", "bounce"],
  D3 = ["stiffness", "damping", "mass"];

function tp(t, e) {
  return e.some(n => t[n] !== void 0)
}

function R3(t) {
  let e = {
    velocity: st.velocity,
    stiffness: st.stiffness,
    damping: st.damping,
    mass: st.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!tp(t, D3) && tp(t, M3))
    if (t.visualDuration) {
      const n = t.visualDuration,
        a = 2 * Math.PI / (n * 1.2),
        o = a * a,
        s = 2 * Ue(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
      e = {
        ...e,
        mass: st.mass,
        stiffness: o,
        damping: s
      }
    } else {
      const n = A3(t);
      e = {
        ...e,
        ...n,
        mass: st.mass
      }, e.isResolvedFromDuration = !0
    } return e
}

function cx(t = st.visualDuration, e = st.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let {
    restSpeed: a,
    restDelta: o
  } = n;
  const s = n.keyframes[0],
    c = n.keyframes[n.keyframes.length - 1],
    i = {
      done: !1,
      value: s
    },
    {
      stiffness: r,
      damping: d,
      mass: u,
      duration: m,
      velocity: p,
      isResolvedFromDuration: f
    } = R3({
      ...n,
      velocity: -Ve(n.velocity || 0)
    }),
    S = p || 0,
    v = d / (2 * Math.sqrt(r * u)),
    b = c - s,
    x = Ve(Math.sqrt(r / u)),
    h = Math.abs(b) < 5;
  a || (a = h ? st.restSpeed.granular : st.restSpeed.default), o || (o = h ? st.restDelta.granular : st.restDelta.default);
  let y;
  if (v < 1) {
    const w = pr(x, v);
    y = E => {
      const A = Math.exp(-v * x * E);
      return c - A * ((S + v * x * b) / w * Math.sin(w * E) + b * Math.cos(w * E))
    }
  } else if (v === 1) y = w => c - Math.exp(-x * w) * (b + (S + x * b) * w);
  else {
    const w = x * Math.sqrt(v * v - 1);
    y = E => {
      const A = Math.exp(-v * x * E),
        N = Math.min(w * E, 300);
      return c - A * ((S + v * x * b) * Math.sinh(N) + w * b * Math.cosh(N)) / w
    }
  }
  const g = {
    calculatedDuration: f && m || null,
    next: w => {
      const E = y(w);
      if (f) i.done = w >= m;
      else {
        let A = 0;
        v < 1 && (A = w === 0 ? Re(S) : sx(y, w, E));
        const N = Math.abs(A) <= a,
          B = Math.abs(c - E) <= o;
        i.done = N && B
      }
      return i.value = i.done ? c : E, i
    },
    toString: () => {
      const w = Math.min(T0(g), sr),
        E = F0(A => g.next(w * A).value, w, 30);
      return w + "ms " + E
    }
  };
  return g
}

function ep({
  keyframes: t,
  velocity: e = 0,
  power: n = .8,
  timeConstant: a = 325,
  bounceDamping: o = 10,
  bounceStiffness: s = 500,
  modifyTarget: c,
  min: i,
  max: r,
  restDelta: d = .5,
  restSpeed: u
}) {
  const m = t[0],
    p = {
      done: !1,
      value: m
    },
    f = N => i !== void 0 && N < i || r !== void 0 && N > r,
    S = N => i === void 0 ? r : r === void 0 || Math.abs(i - N) < Math.abs(r - N) ? i : r;
  let v = n * e;
  const b = m + v,
    x = c === void 0 ? b : c(b);
  x !== b && (v = x - m);
  const h = N => -v * Math.exp(-N / a),
    y = N => x + h(N),
    g = N => {
      const B = h(N),
        R = y(N);
      p.done = Math.abs(B) <= d, p.value = p.done ? x : R
    };
  let w, E;
  const A = N => {
    f(p.value) && (w = N, E = cx({
      keyframes: [p.value, S(p.value)],
      velocity: sx(y, N, p.value),
      damping: o,
      stiffness: s,
      restDelta: d,
      restSpeed: u
    }))
  };
  return A(0), {
    calculatedDuration: null,
    next: N => {
      let B = !1;
      return !E && w === void 0 && (B = !0, g(N), A(N)), w !== void 0 && N >= w ? E.next(N - w) : (!B && g(N), p)
    }
  }
}
const V3 = ds(.42, 0, 1, 1),
  O3 = ds(0, 0, .58, 1),
  ix = ds(.42, 0, .58, 1),
  H3 = t => Array.isArray(t) && typeof t[0] != "number",
  z3 = {
    linear: Xt,
    easeIn: V3,
    easeInOut: ix,
    easeOut: O3,
    circIn: Gd,
    circInOut: L0,
    circOut: k0,
    backIn: Yd,
    backInOut: U0,
    backOut: _0,
    anticipate: B0
  },
  np = t => {
    if (Bd(t)) {
      o0(t.length === 4);
      const [e, n, a, o] = t;
      return ds(e, n, a, o)
    } else if (typeof t == "string") return z3[t];
    return t
  };

function _3(t, e, n) {
  const a = [],
    o = n || ox,
    s = t.length - 1;
  for (let c = 0; c < s; c++) {
    let i = o(t[c], t[c + 1]);
    if (e) {
      const r = Array.isArray(e) ? e[c] || Xt : e;
      i = us(r, i)
    }
    a.push(i)
  }
  return a
}

function U3(t, e, {
  clamp: n = !0,
  ease: a,
  mixer: o
} = {}) {
  const s = t.length;
  if (o0(s === e.length), s === 1) return () => e[0];
  if (s === 2 && e[0] === e[1]) return () => e[1];
  const c = t[0] === t[1];
  t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const i = _3(e, a, o),
    r = i.length,
    d = u => {
      if (c && u < t[0]) return e[0];
      let m = 0;
      if (r > 1)
        for (; m < t.length - 2 && !(u < t[m + 1]); m++);
      const p = Va(t[m], t[m + 1], u);
      return i[m](p)
    };
  return n ? u => d(Ue(t[0], t[s - 1], u)) : d
}

function B3(t, e) {
  const n = t[t.length - 1];
  for (let a = 1; a <= e; a++) {
    const o = Va(0, e, a);
    t.push(at(n, 1, o))
  }
}

function k3(t) {
  const e = [0];
  return B3(e, t.length - 1), e
}

function L3(t, e) {
  return t.map(n => n * e)
}

function P3(t, e) {
  return t.map(() => e || ix).splice(0, t.length - 1)
}

function zc({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: a = "easeInOut"
}) {
  const o = H3(a) ? a.map(np) : np(a),
    s = {
      done: !1,
      value: e[0]
    },
    c = L3(n && n.length === e.length ? n : k3(e), t),
    i = U3(c, e, {
      ease: Array.isArray(o) ? o : P3(e, o)
    });
  return {
    calculatedDuration: t,
    next: r => (s.value = i(r), s.done = r >= t, s)
  }
}
const q3 = t => {
    const e = ({
      timestamp: n
    }) => t(n);
    return {
      start: () => $.update(e, !0),
      stop: () => pn(e),
      now: () => jt.isProcessing ? jt.timestamp : ve.now()
    }
  },
  Y3 = {
    decay: ep,
    inertia: ep,
    tween: zc,
    keyframes: zc,
    spring: cx
  },
  G3 = t => t / 100;
class $d extends nx {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.teardown();
      const {
        onStop: r
      } = this.options;
      r && r()
    };
    const {
      name: n,
      motionValue: a,
      element: o,
      keyframes: s
    } = this.options, c = (o == null ? void 0 : o.KeyframeResolver) || Qd, i = (r, d) => this.onKeyframesResolved(r, d);
    this.resolver = new c(s, i, n, a, o), this.resolver.scheduleResolve()
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }
  initPlayback(e) {
    const {
      type: n = "keyframes",
      repeat: a = 0,
      repeatDelay: o = 0,
      repeatType: s,
      velocity: c = 0
    } = this.options, i = Ud(n) ? n : Y3[n] || zc;
    let r, d;
    i !== zc && typeof e[0] != "number" && (r = us(G3, ox(e[0], e[1])), e = [0, 100]);
    const u = i({
      ...this.options,
      keyframes: e
    });
    s === "mirror" && (d = i({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -c
    })), u.calculatedDuration === null && (u.calculatedDuration = T0(u));
    const {
      calculatedDuration: m
    } = u, p = m + o, f = p * (a + 1) - o;
    return {
      generator: u,
      mirroredGenerator: d,
      mapPercentToKeyframes: r,
      calculatedDuration: m,
      resolvedDuration: p,
      totalDuration: f
    }
  }
  onPostResolved() {
    const {
      autoplay: e = !0
    } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
  }
  tick(e, n = !1) {
    const {
      resolved: a
    } = this;
    if (!a) {
      const {
        keyframes: N
      } = this.options;
      return {
        done: !0,
        value: N[N.length - 1]
      }
    }
    const {
      finalKeyframe: o,
      generator: s,
      mirroredGenerator: c,
      mapPercentToKeyframes: i,
      keyframes: r,
      calculatedDuration: d,
      totalDuration: u,
      resolvedDuration: m
    } = a;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p,
      repeat: f,
      repeatType: S,
      repeatDelay: v,
      onUpdate: b
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const x = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? x < 0 : x > u;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime,
      g = s;
    if (f) {
      const N = Math.min(this.currentTime, u) / m;
      let B = Math.floor(N),
        R = N % 1;
      !R && N >= 1 && (R = 1), R === 1 && B--, B = Math.min(B, f + 1), !!(B % 2) && (S === "reverse" ? (R = 1 - R, v && (R -= v / m)) : S === "mirror" && (g = c)), y = Ue(0, 1, R) * m
    }
    const w = h ? {
      done: !1,
      value: r[0]
    } : g.next(y);
    i && (w.value = i(w.value));
    let {
      done: E
    } = w;
    !h && d !== null && (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return A && o !== void 0 && (w.value = ri(r, this.options, o)), b && b(w.value), A && this.finish(), w
  }
  get duration() {
    const {
      resolved: e
    } = this;
    return e ? Ve(e.calculatedDuration) : 0
  }
  get time() {
    return Ve(this.currentTime)
  }
  set time(e) {
    e = Re(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = Ve(this.currentTime))
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return
    }
    if (this.isStopped) return;
    const {
      driver: e = q3,
      onPlay: n,
      startTime: a
    } = this.options;
    this.driver || (this.driver = e(s => this.tick(s))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = a ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
  }
  finish() {
    this.teardown(), this.state = "finished";
    const {
      onComplete: e
    } = this.options;
    e && e()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0)
  }
}
const X3 = new Set(["opacity", "clipPath", "filter", "transform"]);

function Z3(t, e, n, {
  delay: a = 0,
  duration: o = 300,
  repeat: s = 0,
  repeatType: c = "loop",
  ease: i = "easeInOut",
  times: r
} = {}) {
  const d = {
    [e]: n
  };
  r && (d.offset = r);
  const u = A0(i, o);
  return Array.isArray(u) && (d.easing = u), t.animate(d, {
    delay: a,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: c === "reverse" ? "alternate" : "normal"
  })
}
const K3 = wd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  _c = 10,
  Q3 = 2e4;

function J3(t) {
  return Ud(t.type) || t.type === "spring" || !N0(t.ease)
}

function $3(t, e) {
  const n = new $d({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let a = {
    done: !1,
    value: t[0]
  };
  const o = [];
  let s = 0;
  for (; !a.done && s < Q3;) a = n.sample(s), o.push(a.value), s += _c;
  return {
    times: void 0,
    keyframes: o,
    duration: s - _c,
    ease: "linear"
  }
}
const lx = {
  anticipate: B0,
  backInOut: U0,
  circInOut: L0
};

function W3(t) {
  return t in lx
}
class ap extends nx {
  constructor(e) {
    super(e);
    const {
      name: n,
      motionValue: a,
      element: o,
      keyframes: s
    } = this.options;
    this.resolver = new ex(s, (c, i) => this.onKeyframesResolved(c, i), n, a, o), this.resolver.scheduleResolve()
  }
  initPlayback(e, n) {
    let {
      duration: a = 300,
      times: o,
      ease: s,
      type: c,
      motionValue: i,
      name: r,
      startTime: d
    } = this.options;
    if (!i.owner || !i.owner.current) return !1;
    if (typeof s == "string" && Oc() && W3(s) && (s = lx[s]), J3(this.options)) {
      const {
        onComplete: m,
        onUpdate: p,
        motionValue: f,
        element: S,
        ...v
      } = this.options, b = $3(e, v);
      e = b.keyframes, e.length === 1 && (e[1] = e[0]), a = b.duration, o = b.times, s = b.ease, c = "keyframes"
    }
    const u = Z3(i.owner.current, r, e, {
      ...this.options,
      duration: a,
      times: o,
      ease: s
    });
    return u.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (Lm(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const {
        onComplete: m
      } = this.options;
      i.set(ri(e, this.options, n)), m && m(), this.cancel(), this.resolveFinishedPromise()
    }, {
      animation: u,
      duration: a,
      times: o,
      type: c,
      ease: s,
      keyframes: e
    }
  }
  get duration() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      duration: n
    } = e;
    return Ve(n)
  }
  get time() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      animation: n
    } = e;
    return Ve(n.currentTime || 0)
  }
  set time(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: a
    } = n;
    a.currentTime = Re(e)
  }
  get speed() {
    const {
      resolved: e
    } = this;
    if (!e) return 1;
    const {
      animation: n
    } = e;
    return n.playbackRate
  }
  set speed(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: a
    } = n;
    a.playbackRate = e
  }
  get state() {
    const {
      resolved: e
    } = this;
    if (!e) return "idle";
    const {
      animation: n
    } = e;
    return n.playState
  }
  get startTime() {
    const {
      resolved: e
    } = this;
    if (!e) return null;
    const {
      animation: n
    } = e;
    return n.startTime
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const {
        resolved: n
      } = this;
      if (!n) return Xt;
      const {
        animation: a
      } = n;
      Lm(a, e)
    }
    return Xt
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.pause()
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: a,
      duration: o,
      type: s,
      ease: c,
      times: i
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
        motionValue: d,
        onUpdate: u,
        onComplete: m,
        element: p,
        ...f
      } = this.options, S = new $d({
        ...f,
        keyframes: a,
        duration: o,
        type: s,
        ease: c,
        times: i,
        isGenerator: !0
      }), v = Re(this.time);
      d.setWithVelocity(S.sample(v - _c).value, S.sample(v).value, _c)
    }
    const {
      onStop: r
    } = this.options;
    r && r(), this.cancel()
  }
  complete() {
    const {
      resolved: e
    } = this;
    e && e.animation.finish()
  }
  cancel() {
    const {
      resolved: e
    } = this;
    e && e.animation.cancel()
  }
  static supports(e) {
    const {
      motionValue: n,
      name: a,
      repeatDelay: o,
      repeatType: s,
      damping: c,
      type: i
    } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const {
      onUpdate: r,
      transformTemplate: d
    } = n.owner.getProps();
    return K3() && a && X3.has(a) && !r && !d && !o && s !== "mirror" && c !== 0 && i !== "inertia"
  }
}
const I3 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  t4 = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  e4 = {
    type: "keyframes",
    duration: .8
  },
  n4 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  a4 = (t, {
    keyframes: e
  }) => e.length > 2 ? e4 : qn.has(t) ? t.startsWith("scale") ? t4(e[1]) : I3 : n4;

function o4({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: a,
  staggerDirection: o,
  repeat: s,
  repeatType: c,
  repeatDelay: i,
  from: r,
  elapsed: d,
  ...u
}) {
  return !!Object.keys(u).length
}
const Wd = (t, e, n, a = {}, o, s) => c => {
  const i = _d(a, t) || {},
    r = i.delay || a.delay || 0;
  let {
    elapsed: d = 0
  } = a;
  d = d - Re(r);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...i,
    delay: -d,
    onUpdate: p => {
      e.set(p), i.onUpdate && i.onUpdate(p)
    },
    onComplete: () => {
      c(), i.onComplete && i.onComplete()
    },
    name: t,
    motionValue: e,
    element: s ? void 0 : o
  };
  o4(i) || (u = {
    ...u,
    ...a4(t, u)
  }), u.duration && (u.duration = Re(u.duration)), u.repeatDelay && (u.repeatDelay = Re(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let m = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (m = !0)), m && !s && e.get() !== void 0) {
    const p = ri(u.keyframes, i);
    if (p !== void 0) return $.update(() => {
      u.onUpdate(p), u.onComplete()
    }), new wj([])
  }
  return !s && ap.supports(u) ? new ap(u) : new $d(u)
};

function s4({
  protectedKeys: t,
  needsAnimating: e
}, n) {
  const a = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, a
}

function rx(t, e, {
  delay: n = 0,
  transitionOverride: a,
  type: o
} = {}) {
  var s;
  let {
    transition: c = t.getDefaultTransition(),
    transitionEnd: i,
    ...r
  } = e;
  a && (c = a);
  const d = [],
    u = o && t.animationState && t.animationState.getState()[o];
  for (const m in r) {
    const p = t.getValue(m, (s = t.latestValues[m]) !== null && s !== void 0 ? s : null),
      f = r[m];
    if (f === void 0 || u && s4(u, m)) continue;
    const S = {
      delay: n,
      ..._d(c || {}, m)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const x = V0(t);
      if (x) {
        const h = window.MotionHandoffAnimation(x, m, $);
        h !== null && (S.startTime = h, v = !0)
      }
    }
    ir(t, m), p.start(Wd(m, p, f, t.shouldReduceMotion && D0.has(m) ? {
      type: !1
    } : S, t, v));
    const b = p.animation;
    b && d.push(b)
  }
  return i && Promise.all(d).then(() => {
    $.update(() => {
      i && _j(t, i)
    })
  }), d
}

function fr(t, e, n = {}) {
  var a;
  const o = li(t, e, n.type === "exit" ? (a = t.presenceContext) === null || a === void 0 ? void 0 : a.custom : void 0);
  let {
    transition: s = t.getDefaultTransition() || {}
  } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const c = o ? () => Promise.all(rx(t, o, n)) : () => Promise.resolve(),
    i = t.variantChildren && t.variantChildren.size ? (d = 0) => {
      const {
        delayChildren: u = 0,
        staggerChildren: m,
        staggerDirection: p
      } = s;
      return c4(t, e, u + d, m, p, n)
    } : () => Promise.resolve(),
    {
      when: r
    } = s;
  if (r) {
    const [d, u] = r === "beforeChildren" ? [c, i] : [i, c];
    return d().then(() => u())
  } else return Promise.all([c(), i(n.delay)])
}

function c4(t, e, n = 0, a = 0, o = 1, s) {
  const c = [],
    i = (t.variantChildren.size - 1) * a,
    r = o === 1 ? (d = 0) => d * a : (d = 0) => i - d * a;
  return Array.from(t.variantChildren).sort(i4).forEach((d, u) => {
    d.notify("AnimationStart", e), c.push(fr(d, e, {
      ...s,
      delay: n + r(u)
    }).then(() => d.notify("AnimationComplete", e)))
  }), Promise.all(c)
}

function i4(t, e) {
  return t.sortNodePosition(e)
}

function l4(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let a;
  if (Array.isArray(e)) {
    const o = e.map(s => fr(t, s, n));
    a = Promise.all(o)
  } else if (typeof e == "string") a = fr(t, e, n);
  else {
    const o = typeof e == "function" ? li(t, e, n.custom) : e;
    a = Promise.all(rx(t, o, n))
  }
  return a.then(() => {
    t.notify("AnimationComplete", e)
  })
}
const r4 = Fd.length;

function dx(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? dx(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n
  }
  const e = {};
  for (let n = 0; n < r4; n++) {
    const a = Fd[n],
      o = t.props[a];
    (Lo(o) || o === !1) && (e[a] = o)
  }
  return e
}
const d4 = [...Td].reverse(),
  u4 = Td.length;

function m4(t) {
  return e => Promise.all(e.map(({
    animation: n,
    options: a
  }) => l4(t, n, a)))
}

function p4(t) {
  let e = m4(t),
    n = op(),
    a = !0;
  const o = r => (d, u) => {
    var m;
    const p = li(t, u, r === "exit" ? (m = t.presenceContext) === null || m === void 0 ? void 0 : m.custom : void 0);
    if (p) {
      const {
        transition: f,
        transitionEnd: S,
        ...v
      } = p;
      d = {
        ...d,
        ...v,
        ...S
      }
    }
    return d
  };

  function s(r) {
    e = r(t)
  }

  function c(r) {
    const {
      props: d
    } = t, u = dx(t.parent) || {}, m = [], p = new Set;
    let f = {},
      S = 1 / 0;
    for (let b = 0; b < u4; b++) {
      const x = d4[b],
        h = n[x],
        y = d[x] !== void 0 ? d[x] : u[x],
        g = Lo(y),
        w = x === r ? h.isActive : null;
      w === !1 && (S = b);
      let E = y === u[x] && y !== d[x] && g;
      if (E && a && t.manuallyAnimateOnMount && (E = !1), h.protectedKeys = {
          ...f
        }, !h.isActive && w === null || !y && !h.prevProp || ci(y) || typeof y == "boolean") continue;
      const A = f4(h.prevProp, y);
      let N = A || x === r && h.isActive && !E && g || b > S && g,
        B = !1;
      const R = Array.isArray(y) ? y : [y];
      let pt = R.reduce(o(x), {});
      w === !1 && (pt = {});
      const {
        prevResolvedValues: ce = {}
      } = h, ps = {
        ...ce,
        ...pt
      }, fs = M => {
        N = !0, p.has(M) && (B = !0, p.delete(M)), h.needsAnimating[M] = !0;
        const V = t.getValue(M);
        V && (V.liveStyle = !1)
      };
      for (const M in ps) {
        const V = pt[M],
          J = ce[M];
        if (f.hasOwnProperty(M)) continue;
        let ot = !1;
        or(V) && or(J) ? ot = !w0(V, J) : ot = V !== J, ot ? V != null ? fs(M) : p.add(M) : V !== void 0 && p.has(M) ? fs(M) : h.protectedKeys[M] = !0
      }
      h.prevProp = y, h.prevResolvedValues = pt, h.isActive && (f = {
        ...f,
        ...pt
      }), a && t.blockInitialAnimation && (N = !1), N && (!(E && A) || B) && m.push(...R.map(M => ({
        animation: M,
        options: {
          type: x
        }
      })))
    }
    if (p.size) {
      const b = {};
      p.forEach(x => {
        const h = t.getBaseTarget(x),
          y = t.getValue(x);
        y && (y.liveStyle = !0), b[x] = h ?? null
      }), m.push({
        animation: b
      })
    }
    let v = !!m.length;
    return a && (d.initial === !1 || d.initial === d.animate) && !t.manuallyAnimateOnMount && (v = !1), a = !1, v ? e(m) : Promise.resolve()
  }

  function i(r, d) {
    var u;
    if (n[r].isActive === d) return Promise.resolve();
    (u = t.variantChildren) === null || u === void 0 || u.forEach(p => {
      var f;
      return (f = p.animationState) === null || f === void 0 ? void 0 : f.setActive(r, d)
    }), n[r].isActive = d;
    const m = c(r);
    for (const p in n) n[p].protectedKeys = {};
    return m
  }
  return {
    animateChanges: c,
    setActive: i,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = op(), a = !0
    }
  }
}

function f4(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !w0(e, t) : !1
}

function Sn(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function op() {
  return {
    animate: Sn(!0),
    whileInView: Sn(),
    whileHover: Sn(),
    whileTap: Sn(),
    whileDrag: Sn(),
    whileFocus: Sn(),
    exit: Sn()
  }
}
class yn {
  constructor(e) {
    this.isMounted = !1, this.node = e
  }
  update() {}
}
class h4 extends yn {
  constructor(e) {
    super(e), e.animationState || (e.animationState = p4(e))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: e
    } = this.node.getProps();
    ci(e) && (this.unmountControls = e.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: e
    } = this.node.getProps(), {
      animate: n
    } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
  }
}
let x4 = 0;
class y4 extends yn {
  constructor() {
    super(...arguments), this.id = x4++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: e,
      onExitComplete: n
    } = this.node.presenceContext, {
      isPresent: a
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === a) return;
    const o = this.node.animationState.setActive("exit", !e);
    n && !e && o.then(() => n(this.id))
  }
  mount() {
    const {
      register: e
    } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const v4 = {
  animation: {
    Feature: h4
  },
  exit: {
    Feature: y4
  }
};

function Go(t, e, n, a = {
  passive: !0
}) {
  return t.addEventListener(e, n, a), () => t.removeEventListener(e, n)
}

function ms(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  }
}
const g4 = t => e => kd(e) && t(e, ms(e));

function To(t, e, n, a) {
  return Go(t, e, g4(n), a)
}
const sp = (t, e) => Math.abs(t - e);

function S4(t, e) {
  const n = sp(t.x, e.x),
    a = sp(t.y, e.y);
  return Math.sqrt(n ** 2 + a ** 2)
}
class ux {
  constructor(e, n, {
    transformPagePoint: a,
    contextWindow: o,
    dragSnapToOrigin: s = !1
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const m = el(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          f = S4(m.offset, {
            x: 0,
            y: 0
          }) >= 3;
        if (!p && !f) return;
        const {
          point: S
        } = m, {
          timestamp: v
        } = jt;
        this.history.push({
          ...S,
          timestamp: v
        });
        const {
          onStart: b,
          onMove: x
        } = this.handlers;
        p || (b && b(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, m)
      }, this.handlePointerMove = (m, p) => {
        this.lastMoveEvent = m, this.lastMoveEventInfo = tl(p, this.transformPagePoint), $.update(this.updatePoint, !0)
      }, this.handlePointerUp = (m, p) => {
        this.end();
        const {
          onEnd: f,
          onSessionEnd: S,
          resumeAnimation: v
        } = this.handlers;
        if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = el(m.type === "pointercancel" ? this.lastMoveEventInfo : tl(p, this.transformPagePoint), this.history);
        this.startEvent && f && f(m, b), S && S(m, b)
      }, !kd(e)) return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = a, this.contextWindow = o || window;
    const c = ms(e),
      i = tl(c, this.transformPagePoint),
      {
        point: r
      } = i,
      {
        timestamp: d
      } = jt;
    this.history = [{
      ...r,
      timestamp: d
    }];
    const {
      onSessionStart: u
    } = n;
    u && u(e, el(i, this.history)), this.removeListeners = us(To(this.contextWindow, "pointermove", this.handlePointerMove), To(this.contextWindow, "pointerup", this.handlePointerUp), To(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), pn(this.updatePoint)
  }
}

function tl(t, e) {
  return e ? {
    point: e(t.point)
  } : t
}

function cp(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  }
}

function el({
  point: t
}, e) {
  return {
    point: t,
    delta: cp(t, mx(e)),
    offset: cp(t, j4(e)),
    velocity: b4(e, .1)
  }
}

function j4(t) {
  return t[0]
}

function mx(t) {
  return t[t.length - 1]
}

function b4(t, e) {
  if (t.length < 2) return {
    x: 0,
    y: 0
  };
  let n = t.length - 1,
    a = null;
  const o = mx(t);
  for (; n >= 0 && (a = t[n], !(o.timestamp - a.timestamp > Re(e)));) n--;
  if (!a) return {
    x: 0,
    y: 0
  };
  const s = Ve(o.timestamp - a.timestamp);
  if (s === 0) return {
    x: 0,
    y: 0
  };
  const c = {
    x: (o.x - a.x) / s,
    y: (o.y - a.y) / s
  };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}
const px = 1e-4,
  w4 = 1 - px,
  T4 = 1 + px,
  fx = .01,
  F4 = 0 - fx,
  N4 = 0 + fx;

function Kt(t) {
  return t.max - t.min
}

function A4(t, e, n) {
  return Math.abs(t - e) <= n
}

function ip(t, e, n, a = .5) {
  t.origin = a, t.originPoint = at(e.min, e.max, t.origin), t.scale = Kt(n) / Kt(e), t.translate = at(n.min, n.max, t.origin) - t.originPoint, (t.scale >= w4 && t.scale <= T4 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= F4 && t.translate <= N4 || isNaN(t.translate)) && (t.translate = 0)
}

function Fo(t, e, n, a) {
  ip(t.x, e.x, n.x, a ? a.originX : void 0), ip(t.y, e.y, n.y, a ? a.originY : void 0)
}

function lp(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Kt(e)
}

function E4(t, e, n) {
  lp(t.x, e.x, n.x), lp(t.y, e.y, n.y)
}

function rp(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Kt(e)
}

function No(t, e, n) {
  rp(t.x, e.x, n.x), rp(t.y, e.y, n.y)
}

function C4(t, {
  min: e,
  max: n
}, a) {
  return e !== void 0 && t < e ? t = a ? at(e, t, a.min) : Math.max(t, e) : n !== void 0 && t > n && (t = a ? at(n, t, a.max) : Math.min(t, n)), t
}

function dp(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  }
}

function M4(t, {
  top: e,
  left: n,
  bottom: a,
  right: o
}) {
  return {
    x: dp(t.x, n, o),
    y: dp(t.y, e, a)
  }
}

function up(t, e) {
  let n = e.min - t.min,
    a = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, a] = [a, n]), {
    min: n,
    max: a
  }
}

function D4(t, e) {
  return {
    x: up(t.x, e.x),
    y: up(t.y, e.y)
  }
}

function R4(t, e) {
  let n = .5;
  const a = Kt(t),
    o = Kt(e);
  return o > a ? n = Va(e.min, e.max - a, t.min) : a > o && (n = Va(t.min, t.max - o, e.min)), Ue(0, 1, n)
}

function V4(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const hr = .35;

function O4(t = hr) {
  return t === !1 ? t = 0 : t === !0 && (t = hr), {
    x: mp(t, "left", "right"),
    y: mp(t, "top", "bottom")
  }
}

function mp(t, e, n) {
  return {
    min: pp(t, e),
    max: pp(t, n)
  }
}

function pp(t, e) {
  return typeof t == "number" ? t : t[e] || 0
}
const fp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  da = () => ({
    x: fp(),
    y: fp()
  }),
  hp = () => ({
    min: 0,
    max: 0
  }),
  rt = () => ({
    x: hp(),
    y: hp()
  });

function Jt(t) {
  return [t("x"), t("y")]
}

function hx({
  top: t,
  left: e,
  right: n,
  bottom: a
}) {
  return {
    x: {
      min: e,
      max: n
    },
    y: {
      min: t,
      max: a
    }
  }
}

function H4({
  x: t,
  y: e
}) {
  return {
    top: e.min,
    right: t.max,
    bottom: e.max,
    left: t.min
  }
}

function z4(t, e) {
  if (!e) return t;
  const n = e({
      x: t.left,
      y: t.top
    }),
    a = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: a.y,
    right: a.x
  }
}

function nl(t) {
  return t === void 0 || t === 1
}

function xr({
  scale: t,
  scaleX: e,
  scaleY: n
}) {
  return !nl(t) || !nl(e) || !nl(n)
}

function Tn(t) {
  return xr(t) || xx(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function xx(t) {
  return xp(t.x) || xp(t.y)
}

function xp(t) {
  return t && t !== "0%"
}

function Uc(t, e, n) {
  const a = t - n,
    o = e * a;
  return n + o
}

function yp(t, e, n, a, o) {
  return o !== void 0 && (t = Uc(t, o, a)), Uc(t, n, a) + e
}

function yr(t, e = 0, n = 1, a, o) {
  t.min = yp(t.min, e, n, a, o), t.max = yp(t.max, e, n, a, o)
}

function yx(t, {
  x: e,
  y: n
}) {
  yr(t.x, e.translate, e.scale, e.originPoint), yr(t.y, n.translate, n.scale, n.originPoint)
}
const vp = .999999999999,
  gp = 1.0000000000001;

function _4(t, e, n, a = !1) {
  const o = n.length;
  if (!o) return;
  e.x = e.y = 1;
  let s, c;
  for (let i = 0; i < o; i++) {
    s = n[i], c = s.projectionDelta;
    const {
      visualElement: r
    } = s.options;
    r && r.props.style && r.props.style.display === "contents" || (a && s.options.layoutScroll && s.scroll && s !== s.root && ma(t, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), c && (e.x *= c.x.scale, e.y *= c.y.scale, yx(t, c)), a && Tn(s.latestValues) && ma(t, s.latestValues))
  }
  e.x < gp && e.x > vp && (e.x = 1), e.y < gp && e.y > vp && (e.y = 1)
}

function ua(t, e) {
  t.min = t.min + e, t.max = t.max + e
}

function Sp(t, e, n, a, o = .5) {
  const s = at(t.min, t.max, o);
  yr(t, e, n, s, a)
}

function ma(t, e) {
  Sp(t.x, e.x, e.scaleX, e.scale, e.originX), Sp(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function vx(t, e) {
  return hx(z4(t.getBoundingClientRect(), e))
}

function U4(t, e, n) {
  const a = vx(t, n),
    {
      scroll: o
    } = e;
  return o && (ua(a.x, o.offset.x), ua(a.y, o.offset.y)), a
}
const gx = ({
    current: t
  }) => t ? t.ownerDocument.defaultView : null,
  B4 = new WeakMap;
class k4 {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = rt(), this.visualElement = e
  }
  start(e, {
    snapToCursor: n = !1
  } = {}) {
    const {
      presenceContext: a
    } = this.visualElement;
    if (a && a.isPresent === !1) return;
    const o = u => {
        const {
          dragSnapToOrigin: m
        } = this.getProps();
        m ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ms(u).point)
      },
      s = (u, m) => {
        const {
          drag: p,
          dragPropagation: f,
          onDragStart: S
        } = this.getProps();
        if (p && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = Rj(p), !this.openDragLock)) return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Jt(b => {
          let x = this.getAxisMotionValue(b).get() || 0;
          if (ye.test(x)) {
            const {
              projection: h
            } = this.visualElement;
            if (h && h.layout) {
              const y = h.layout.layoutBox[b];
              y && (x = Kt(y) * (parseFloat(x) / 100))
            }
          }
          this.originPoint[b] = x
        }), S && $.postRender(() => S(u, m)), ir(this.visualElement, "transform");
        const {
          animationState: v
        } = this.visualElement;
        v && v.setActive("whileDrag", !0)
      },
      c = (u, m) => {
        const {
          dragPropagation: p,
          dragDirectionLock: f,
          onDirectionLock: S,
          onDrag: v
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const {
          offset: b
        } = m;
        if (f && this.currentDirection === null) {
          this.currentDirection = L4(b), this.currentDirection !== null && S && S(this.currentDirection);
          return
        }
        this.updateAxis("x", m.point, b), this.updateAxis("y", m.point, b), this.visualElement.render(), v && v(u, m)
      },
      i = (u, m) => this.stop(u, m),
      r = () => Jt(u => {
        var m;
        return this.getAnimationState(u) === "paused" && ((m = this.getAxisMotionValue(u).animation) === null || m === void 0 ? void 0 : m.play())
      }),
      {
        dragSnapToOrigin: d
      } = this.getProps();
    this.panSession = new ux(e, {
      onSessionStart: o,
      onStart: s,
      onMove: c,
      onSessionEnd: i,
      resumeAnimation: r
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      contextWindow: gx(this.visualElement)
    })
  }
  stop(e, n) {
    const a = this.isDragging;
    if (this.cancel(), !a) return;
    const {
      velocity: o
    } = n;
    this.startAnimation(o);
    const {
      onDragEnd: s
    } = this.getProps();
    s && $.postRender(() => s(e, n))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: e,
      animationState: n
    } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const {
      dragPropagation: a
    } = this.getProps();
    !a && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
  }
  updateAxis(e, n, a) {
    const {
      drag: o
    } = this.getProps();
    if (!a || !_s(e, o, this.currentDirection)) return;
    const s = this.getAxisMotionValue(e);
    let c = this.originPoint[e] + a[e];
    this.constraints && this.constraints[e] && (c = C4(c, this.constraints[e], this.elastic[e])), s.set(c)
  }
  resolveConstraints() {
    var e;
    const {
      dragConstraints: n,
      dragElastic: a
    } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, s = this.constraints;
    n && la(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = M4(o.layoutBox, n) : this.constraints = !1, this.elastic = O4(a), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Jt(c => {
      this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = V4(o.layoutBox[c], this.constraints[c]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: e,
      onMeasureDragConstraints: n
    } = this.getProps();
    if (!e || !la(e)) return !1;
    const a = e.current,
      {
        projection: o
      } = this.visualElement;
    if (!o || !o.layout) return !1;
    const s = U4(a, o.root, this.visualElement.getTransformPagePoint());
    let c = D4(o.layout.layoutBox, s);
    if (n) {
      const i = n(H4(c));
      this.hasMutatedConstraints = !!i, i && (c = hx(i))
    }
    return c
  }
  startAnimation(e) {
    const {
      drag: n,
      dragMomentum: a,
      dragElastic: o,
      dragTransition: s,
      dragSnapToOrigin: c,
      onDragTransitionEnd: i
    } = this.getProps(), r = this.constraints || {}, d = Jt(u => {
      if (!_s(u, n, this.currentDirection)) return;
      let m = r && r[u] || {};
      c && (m = {
        min: 0,
        max: 0
      });
      const p = o ? 200 : 1e6,
        f = o ? 40 : 1e7,
        S = {
          type: "inertia",
          velocity: a ? e[u] : 0,
          bounceStiffness: p,
          bounceDamping: f,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...s,
          ...m
        };
      return this.startAxisValueAnimation(u, S)
    });
    return Promise.all(d).then(i)
  }
  startAxisValueAnimation(e, n) {
    const a = this.getAxisMotionValue(e);
    return ir(this.visualElement, e), a.start(Wd(e, a, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
    Jt(e => this.getAxisMotionValue(e).stop())
  }
  pauseAnimation() {
    Jt(e => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
    })
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      a = this.visualElement.getProps(),
      o = a[n];
    return o || this.visualElement.getValue(e, (a.initial ? a.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
    Jt(n => {
      const {
        drag: a
      } = this.getProps();
      if (!_s(n, a, this.currentDirection)) return;
      const {
        projection: o
      } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const {
          min: c,
          max: i
        } = o.layout.layoutBox[n];
        s.set(e[n] - at(c, i, .5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: e,
      dragConstraints: n
    } = this.getProps(), {
      projection: a
    } = this.visualElement;
    if (!la(n) || !a || !this.constraints) return;
    this.stopAnimation();
    const o = {
      x: 0,
      y: 0
    };
    Jt(c => {
      const i = this.getAxisMotionValue(c);
      if (i && this.constraints !== !1) {
        const r = i.get();
        o[c] = R4({
          min: r,
          max: r
        }, this.constraints[c])
      }
    });
    const {
      transformTemplate: s
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", a.root && a.root.updateScroll(), a.updateLayout(), this.resolveConstraints(), Jt(c => {
      if (!_s(c, e, null)) return;
      const i = this.getAxisMotionValue(c),
        {
          min: r,
          max: d
        } = this.constraints[c];
      i.set(at(r, d, o[c]))
    })
  }
  addListeners() {
    if (!this.visualElement.current) return;
    B4.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = To(e, "pointerdown", r => {
        const {
          drag: d,
          dragListener: u = !0
        } = this.getProps();
        d && u && this.start(r)
      }),
      a = () => {
        const {
          dragConstraints: r
        } = this.getProps();
        la(r) && r.current && (this.constraints = this.resolveRefConstraints())
      },
      {
        projection: o
      } = this.visualElement,
      s = o.addEventListener("measure", a);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), $.read(a);
    const c = Go(window, "resize", () => this.scalePositionWithinConstraints()),
      i = o.addEventListener("didUpdate", ({
        delta: r,
        hasLayoutChanged: d
      }) => {
        this.isDragging && d && (Jt(u => {
          const m = this.getAxisMotionValue(u);
          m && (this.originPoint[u] += r[u].translate, m.set(m.get() + r[u].translate))
        }), this.visualElement.render())
      });
    return () => {
      c(), n(), s(), i && i()
    }
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: a = !1,
        dragPropagation: o = !1,
        dragConstraints: s = !1,
        dragElastic: c = hr,
        dragMomentum: i = !0
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: a,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: c,
      dragMomentum: i
    }
  }
}

function _s(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t)
}

function L4(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class P4 extends yn {
  constructor(e) {
    super(e), this.removeGroupControls = Xt, this.removeListeners = Xt, this.controls = new k4(e)
  }
  mount() {
    const {
      dragControls: e
    } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Xt
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const jp = t => (e, n) => {
  t && $.postRender(() => t(e, n))
};
class q4 extends yn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Xt
  }
  onPointerDown(e) {
    this.session = new ux(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: gx(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: a,
      onPanEnd: o
    } = this.node.getProps();
    return {
      onSessionStart: jp(e),
      onStart: jp(n),
      onMove: a,
      onEnd: (s, c) => {
        delete this.session, o && $.postRender(() => o(s, c))
      }
    }
  }
  mount() {
    this.removePointerDownListener = To(this.node.current, "pointerdown", e => this.onPointerDown(e))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const Is = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};

function bp(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Ia = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (D.test(t)) t = parseFloat(t);
        else return t;
      const n = bp(t, e.target.x),
        a = bp(t, e.target.y);
      return `${n}% ${a}%`
    }
  },
  Y4 = {
    correct: (t, {
      treeScale: e,
      projectionDelta: n
    }) => {
      const a = t,
        o = fn.parse(t);
      if (o.length > 5) return a;
      const s = fn.createTransformer(t),
        c = typeof o[0] != "number" ? 1 : 0,
        i = n.x.scale * e.x,
        r = n.y.scale * e.y;
      o[0 + c] /= i, o[1 + c] /= r;
      const d = at(i, r, .5);
      return typeof o[2 + c] == "number" && (o[2 + c] /= d), typeof o[3 + c] == "number" && (o[3 + c] /= d), s(o)
    }
  };
class G4 extends F.Component {
  componentDidMount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: a,
      layoutId: o
    } = this.props, {
      projection: s
    } = e;
    uj(X4), s && (n.group && n.group.add(s), a && a.register && o && a.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove()
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Is.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(e) {
    const {
      layoutDependency: n,
      visualElement: a,
      drag: o,
      isPresent: s
    } = this.props, c = a.projection;
    return c && (c.isPresent = s, o || e.layoutDependency !== n || n === void 0 ? c.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? c.promote() : c.relegate() || $.postRender(() => {
      const i = c.getStack();
      (!i || !i.members.length) && this.safeToRemove()
    }))), null
  }
  componentDidUpdate() {
    const {
      projection: e
    } = this.props.visualElement;
    e && (e.root.didUpdate(), Ad.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: a
    } = this.props, {
      projection: o
    } = e;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), a && a.deregister && a.deregister(o))
  }
  safeToRemove() {
    const {
      safeToRemove: e
    } = this.props;
    e && e()
  }
  render() {
    return null
  }
}

function Sx(t) {
  const [e, n] = NS(), a = F.useContext(n0);
  return l.jsx(G4, {
    ...t,
    layoutGroup: a,
    switchLayoutGroup: F.useContext(d0),
    isPresent: e,
    safeToRemove: n
  })
}
const X4 = {
  borderRadius: {
    ...Ia,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Ia,
  borderTopRightRadius: Ia,
  borderBottomLeftRadius: Ia,
  borderBottomRightRadius: Ia,
  boxShadow: Y4
};

function Z4(t, e, n) {
  const a = Et(t) ? t : qo(t);
  return a.start(Wd("", a, e, n)), a.animation
}

function K4(t) {
  return t instanceof SVGElement && t.tagName !== "svg"
}
const Q4 = (t, e) => t.depth - e.depth;
class J4 {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(e) {
    Ld(this.children, e), this.isDirty = !0
  }
  remove(e) {
    Pd(this.children, e), this.isDirty = !0
  }
  forEach(e) {
    this.isDirty && this.children.sort(Q4), this.isDirty = !1, this.children.forEach(e)
  }
}

function $4(t, e) {
  const n = ve.now(),
    a = ({
      timestamp: o
    }) => {
      const s = o - n;
      s >= e && (pn(a), t(s - e))
    };
  return $.read(a, !0), () => pn(a)
}
const jx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  W4 = jx.length,
  wp = t => typeof t == "string" ? parseFloat(t) : t,
  Tp = t => typeof t == "number" || D.test(t);

function I4(t, e, n, a, o, s) {
  o ? (t.opacity = at(0, n.opacity !== void 0 ? n.opacity : 1, t6(a)), t.opacityExit = at(e.opacity !== void 0 ? e.opacity : 1, 0, e6(a))) : s && (t.opacity = at(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, a));
  for (let c = 0; c < W4; c++) {
    const i = `border${jx[c]}Radius`;
    let r = Fp(e, i),
      d = Fp(n, i);
    if (r === void 0 && d === void 0) continue;
    r || (r = 0), d || (d = 0), r === 0 || d === 0 || Tp(r) === Tp(d) ? (t[i] = Math.max(at(wp(r), wp(d), a), 0), (ye.test(d) || ye.test(r)) && (t[i] += "%")) : t[i] = d
  }(e.rotate || n.rotate) && (t.rotate = at(e.rotate || 0, n.rotate || 0, a))
}

function Fp(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const t6 = bx(0, .5, k0),
  e6 = bx(.5, .95, Xt);

function bx(t, e, n) {
  return a => a < t ? 0 : a > e ? 1 : n(Va(t, e, a))
}

function Np(t, e) {
  t.min = e.min, t.max = e.max
}

function Qt(t, e) {
  Np(t.x, e.x), Np(t.y, e.y)
}

function Ap(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Ep(t, e, n, a, o) {
  return t -= e, t = Uc(t, 1 / n, a), o !== void 0 && (t = Uc(t, 1 / o, a)), t
}

function n6(t, e = 0, n = 1, a = .5, o, s = t, c = t) {
  if (ye.test(e) && (e = parseFloat(e), e = at(c.min, c.max, e / 100) - c.min), typeof e != "number") return;
  let i = at(s.min, s.max, a);
  t === s && (i -= e), t.min = Ep(t.min, e, n, i, o), t.max = Ep(t.max, e, n, i, o)
}

function Cp(t, e, [n, a, o], s, c) {
  n6(t, e[n], e[a], e[o], e.scale, s, c)
}
const a6 = ["x", "scaleX", "originX"],
  o6 = ["y", "scaleY", "originY"];

function Mp(t, e, n, a) {
  Cp(t.x, e, a6, n ? n.x : void 0, a ? a.x : void 0), Cp(t.y, e, o6, n ? n.y : void 0, a ? a.y : void 0)
}

function Dp(t) {
  return t.translate === 0 && t.scale === 1
}

function wx(t) {
  return Dp(t.x) && Dp(t.y)
}

function Rp(t, e) {
  return t.min === e.min && t.max === e.max
}

function s6(t, e) {
  return Rp(t.x, e.x) && Rp(t.y, e.y)
}

function Vp(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Tx(t, e) {
  return Vp(t.x, e.x) && Vp(t.y, e.y)
}

function Op(t) {
  return Kt(t.x) / Kt(t.y)
}

function Hp(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class c6 {
  constructor() {
    this.members = []
  }
  add(e) {
    Ld(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if (Pd(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(e) {
    const n = this.members.findIndex(o => e === o);
    if (n === 0) return !1;
    let a;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        a = s;
        break
      }
    }
    return a ? (this.promote(a), !0) : !1
  }
  promote(e, n) {
    const a = this.lead;
    if (e !== a && (this.prevLead = a, this.lead = e, e.show(), a)) {
      a.instance && a.scheduleRender(), e.scheduleRender(), e.resumeFrom = a, n && (e.resumeFrom.preserveOpacity = !0), a.snapshot && (e.snapshot = a.snapshot, e.snapshot.latestValues = a.animationValues || a.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const {
        crossfade: o
      } = e.options;
      o === !1 && a.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      const {
        options: n,
        resumingFrom: a
      } = e;
      n.onExitComplete && n.onExitComplete(), a && a.options.onExitComplete && a.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(e => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}

function i6(t, e, n) {
  let a = "";
  const o = t.x.translate / e.x,
    s = t.y.translate / e.y,
    c = (n == null ? void 0 : n.z) || 0;
  if ((o || s || c) && (a = `translate3d(${o}px, ${s}px, ${c}px) `), (e.x !== 1 || e.y !== 1) && (a += `scale(${1/e.x}, ${1/e.y}) `), n) {
    const {
      transformPerspective: d,
      rotate: u,
      rotateX: m,
      rotateY: p,
      skewX: f,
      skewY: S
    } = n;
    d && (a = `perspective(${d}px) ${a}`), u && (a += `rotate(${u}deg) `), m && (a += `rotateX(${m}deg) `), p && (a += `rotateY(${p}deg) `), f && (a += `skewX(${f}deg) `), S && (a += `skewY(${S}deg) `)
  }
  const i = t.x.scale * e.x,
    r = t.y.scale * e.y;
  return (i !== 1 || r !== 1) && (a += `scale(${i}, ${r})`), a || "none"
}
const Fn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  co = typeof window < "u" && window.MotionDebug !== void 0,
  al = ["", "X", "Y", "Z"],
  l6 = {
    visibility: "hidden"
  },
  zp = 1e3;
let r6 = 0;

function ol(t, e, n, a) {
  const {
    latestValues: o
  } = e;
  o[t] && (n[t] = o[t], e.setStaticValue(t, 0), a && (a[t] = 0))
}

function Fx(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
  const {
    visualElement: e
  } = t.options;
  if (!e) return;
  const n = V0(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const {
      layout: o,
      layoutId: s
    } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", $, !(o || s))
  }
  const {
    parent: a
  } = t;
  a && !a.hasCheckedOptimisedAppear && Fx(a)
}

function Nx({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: a,
  resetTransform: o
}) {
  return class {
    constructor(c = {}, i = e == null ? void 0 : e()) {
      this.id = r6++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, co && (Fn.totalNodes = Fn.resolvedTargetDeltas = Fn.recalculatedProjection = 0), this.nodes.forEach(m6), this.nodes.forEach(y6), this.nodes.forEach(v6), this.nodes.forEach(p6), co && window.MotionDebug.record(Fn)
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
      for (let r = 0; r < this.path.length; r++) this.path[r].shouldResetTransform = !0;
      this.root === this && (this.nodes = new J4)
    }
    addEventListener(c, i) {
      return this.eventHandlers.has(c) || this.eventHandlers.set(c, new qd), this.eventHandlers.get(c).add(i)
    }
    notifyListeners(c, ...i) {
      const r = this.eventHandlers.get(c);
      r && r.notify(...i)
    }
    hasListeners(c) {
      return this.eventHandlers.has(c)
    }
    mount(c, i = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = K4(c), this.instance = c;
      const {
        layoutId: r,
        layout: d,
        visualElement: u
      } = this.options;
      if (u && !u.current && u.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (d || r) && (this.isLayoutDirty = !0), t) {
        let m;
        const p = () => this.root.updateBlockedByResize = !1;
        t(c, () => {
          this.root.updateBlockedByResize = !0, m && m(), m = $4(p, 250), Is.hasAnimatedSinceResize && (Is.hasAnimatedSinceResize = !1, this.nodes.forEach(Up))
        })
      }
      r && this.root.registerSharedNode(r, this), this.options.animate !== !1 && u && (r || d) && this.addEventListener("didUpdate", ({
        delta: m,
        hasLayoutChanged: p,
        hasRelativeTargetChanged: f,
        layout: S
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return
        }
        const v = this.options.transition || u.getDefaultTransition() || w6,
          {
            onLayoutAnimationStart: b,
            onLayoutAnimationComplete: x
          } = u.getProps(),
          h = !this.targetLayout || !Tx(this.targetLayout, S) || f,
          y = !p && f;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || p && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(m, y);
          const g = {
            ..._d(v, "layout"),
            onPlay: b,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g)
        } else p || Up(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = S
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, pn(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(g6), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: c
      } = this.options;
      return c && c.getProps().transformTemplate
    }
    willUpdate(c = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Fx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const m = this.path[u];
        m.shouldResetTransform = !0, m.updateScroll("snapshot"), m.options.layoutRoot && m.willUpdate(!1)
      }
      const {
        layoutId: i,
        layout: r
      } = this.options;
      if (i === void 0 && !r) return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_p);
        return
      }
      this.isUpdating || this.nodes.forEach(h6), this.isUpdating = !1, this.nodes.forEach(x6), this.nodes.forEach(d6), this.nodes.forEach(u6), this.clearAllSnapshots();
      const i = ve.now();
      jt.delta = Ue(0, 1e3 / 60, i - jt.timestamp), jt.timestamp = i, jt.isProcessing = !0, Ki.update.process(jt), Ki.preRender.process(jt), Ki.render.process(jt), jt.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ad.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(f6), this.sharedNodes.forEach(S6)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, $.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let r = 0; r < this.path.length; r++) this.path[r].updateScroll();
      const c = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = rt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: i
      } = this.options;
      i && i.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
    }
    updateScroll(c = "measure") {
      let i = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (i = !1), i) {
        const r = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: r,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : r
        }
      }
    }
    resetTransform() {
      if (!o) return;
      const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        i = this.projectionDelta && !wx(this.projectionDelta),
        r = this.getTransformTemplate(),
        d = r ? r(this.latestValues, "") : void 0,
        u = d !== this.prevTransformTemplateValue;
      c && (i || Tn(this.latestValues) || u) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender())
    }
    measure(c = !0) {
      const i = this.measurePageBox();
      let r = this.removeElementScroll(i);
      return c && (r = this.removeTransform(r)), T6(r), {
        animationId: this.root.animationId,
        measuredBox: i,
        layoutBox: r,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var c;
      const {
        visualElement: i
      } = this.options;
      if (!i) return rt();
      const r = i.measureViewportBox();
      if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(F6))) {
        const {
          scroll: u
        } = this.root;
        u && (ua(r.x, u.offset.x), ua(r.y, u.offset.y))
      }
      return r
    }
    removeElementScroll(c) {
      var i;
      const r = rt();
      if (Qt(r, c), !((i = this.scroll) === null || i === void 0) && i.wasRoot) return r;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d],
          {
            scroll: m,
            options: p
          } = u;
        u !== this.root && m && p.layoutScroll && (m.wasRoot && Qt(r, c), ua(r.x, m.offset.x), ua(r.y, m.offset.y))
      }
      return r
    }
    applyTransform(c, i = !1) {
      const r = rt();
      Qt(r, c);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !i && u.options.layoutScroll && u.scroll && u !== u.root && ma(r, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Tn(u.latestValues) && ma(r, u.latestValues)
      }
      return Tn(this.latestValues) && ma(r, this.latestValues), r
    }
    removeTransform(c) {
      const i = rt();
      Qt(i, c);
      for (let r = 0; r < this.path.length; r++) {
        const d = this.path[r];
        if (!d.instance || !Tn(d.latestValues)) continue;
        xr(d.latestValues) && d.updateSnapshot();
        const u = rt(),
          m = d.measurePageBox();
        Qt(u, m), Mp(i, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u)
      }
      return Tn(this.latestValues) && Mp(i, this.latestValues), i
    }
    setTargetDelta(c) {
      this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== jt.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(c = !1) {
      var i;
      const r = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
      const d = !!this.resumingFrom || this !== r;
      if (!(c || d && this.isSharedProjectionDirty || this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: m,
        layoutId: p
      } = this.options;
      if (!(!this.layout || !(m || p))) {
        if (this.resolvedRelativeTargetAt = jt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rt(), this.relativeTargetOrigin = rt(), No(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = rt(), this.targetWithTransforms = rt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), E4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox), yx(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rt(), this.relativeTargetOrigin = rt(), No(this.relativeTargetOrigin, this.target, f.target), Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          co && Fn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || xr(this.parent.latestValues) || xx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var c;
      const i = this.getLead(),
        r = !!this.resumingFrom || this !== i;
      let d = !0;
      if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (d = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (d = !1), this.resolvedRelativeTargetAt === jt.timestamp && (d = !1), d) return;
      const {
        layout: u,
        layoutId: m
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || m)) return;
      Qt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        f = this.treeScale.y;
      _4(this.layoutCorrected, this.treeScale, this.path, r), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = rt());
      const {
        target: S
      } = i;
      if (!S) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ap(this.prevProjectionDelta.x, this.projectionDelta.x), Ap(this.prevProjectionDelta.y, this.projectionDelta.y)), Fo(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== f || !Hp(this.projectionDelta.x, this.prevProjectionDelta.x) || !Hp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S)), co && Fn.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(c = !0) {
      var i;
      if ((i = this.options.visualElement) === null || i === void 0 || i.scheduleRender(), c) {
        const r = this.getStack();
        r && r.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = da(), this.projectionDelta = da(), this.projectionDeltaWithTransform = da()
    }
    setAnimationOrigin(c, i = !1) {
      const r = this.snapshot,
        d = r ? r.latestValues : {},
        u = {
          ...this.latestValues
        },
        m = da();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
      const p = rt(),
        f = r ? r.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        v = f !== S,
        b = this.getStack(),
        x = !b || b.members.length <= 1,
        h = !!(v && !x && this.options.crossfade === !0 && !this.path.some(b6));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = g => {
        const w = g / 1e3;
        Bp(m.x, c.x, w), Bp(m.y, c.y, w), this.setTargetDelta(m), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (No(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), j6(this.relativeTarget, this.relativeTargetOrigin, p, w), y && s6(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = rt()), Qt(y, this.relativeTarget)), v && (this.animationValues = u, I4(u, d, this.latestValues, w, h, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (pn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $.update(() => {
        Is.hasAnimatedSinceResize = !0, this.currentAnimation = Z4(0, zp, {
          ...c,
          onUpdate: i => {
            this.mixTargetDelta(i), c.onUpdate && c.onUpdate(i)
          },
          onComplete: () => {
            c.onComplete && c.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const c = this.getStack();
      c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(zp), this.currentAnimation.stop()), this.completeAnimation()
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: i,
        target: r,
        layout: d,
        latestValues: u
      } = c;
      if (!(!i || !r || !d)) {
        if (this !== c && this.layout && d && Ax(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          r = this.target || rt();
          const m = Kt(this.layout.layoutBox.x);
          r.x.min = c.target.x.min, r.x.max = r.x.min + m;
          const p = Kt(this.layout.layoutBox.y);
          r.y.min = c.target.y.min, r.y.max = r.y.min + p
        }
        Qt(i, r), ma(i, u), Fo(this.projectionDeltaWithTransform, this.layoutCorrected, i, u)
      }
    }
    registerSharedNode(c, i) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new c6), this.sharedNodes.get(c).add(i);
      const d = i.options.initialPromotionConfig;
      i.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(i) : void 0
      })
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0
    }
    getLead() {
      var c;
      const {
        layoutId: i
      } = this.options;
      return i ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
    }
    getPrevLead() {
      var c;
      const {
        layoutId: i
      } = this.options;
      return i ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: c
      } = this.options;
      if (c) return this.root.sharedNodes.get(c)
    }
    promote({
      needsReset: c,
      transition: i,
      preserveFollowOpacity: r
    } = {}) {
      const d = this.getStack();
      d && d.promote(this, r), c && (this.projectionDelta = void 0, this.needsReset = !0), i && this.setOptions({
        transition: i
      })
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: c
      } = this.options;
      if (!c) return;
      let i = !1;
      const {
        latestValues: r
      } = c;
      if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (i = !0), !i) return;
      const d = {};
      r.z && ol("z", c, d, this.animationValues);
      for (let u = 0; u < al.length; u++) ol(`rotate${al[u]}`, c, d, this.animationValues), ol(`skew${al[u]}`, c, d, this.animationValues);
      c.render();
      for (const u in d) c.setStaticValue(u, d[u]), this.animationValues && (this.animationValues[u] = d[u]);
      c.scheduleRender()
    }
    getProjectionStyles(c) {
      var i, r;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return l6;
      const d = {
          visibility: ""
        },
        u = this.getTransformTemplate();
      if (this.needsReset) return this.needsReset = !1, d.opacity = "", d.pointerEvents = $s(c == null ? void 0 : c.pointerEvents) || "", d.transform = u ? u(this.latestValues, "") : "none", d;
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = $s(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !Tn(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v
      }
      const p = m.animationValues || m.latestValues;
      this.applyTransformsToTarget(), d.transform = i6(this.projectionDeltaWithTransform, this.treeScale, p), u && (d.transform = u(p, d.transform));
      const {
        x: f,
        y: S
      } = this.projectionDelta;
      d.transformOrigin = `${f.origin*100}% ${S.origin*100}% 0`, m.animationValues ? d.opacity = m === this ? (r = (i = p.opacity) !== null && i !== void 0 ? i : this.latestValues.opacity) !== null && r !== void 0 ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : d.opacity = m === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const v in Vc) {
        if (p[v] === void 0) continue;
        const {
          correct: b,
          applyTo: x
        } = Vc[v], h = d.transform === "none" ? p[v] : b(p[v], m);
        if (x) {
          const y = x.length;
          for (let g = 0; g < y; g++) d[x[g]] = h
        } else d[v] = h
      }
      return this.options.layoutId && (d.pointerEvents = m === this ? $s(c == null ? void 0 : c.pointerEvents) || "" : "none"), d
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(c => {
        var i;
        return (i = c.currentAnimation) === null || i === void 0 ? void 0 : i.stop()
      }), this.root.nodes.forEach(_p), this.root.sharedNodes.clear()
    }
  }
}

function d6(t) {
  t.updateLayout()
}

function u6(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const {
      layoutBox: a,
      measuredBox: o
    } = t.layout, {
      animationType: s
    } = t.options, c = n.source !== t.layout.source;
    s === "size" ? Jt(m => {
      const p = c ? n.measuredBox[m] : n.layoutBox[m],
        f = Kt(p);
      p.min = a[m].min, p.max = p.min + f
    }) : Ax(s, n.layoutBox, a) && Jt(m => {
      const p = c ? n.measuredBox[m] : n.layoutBox[m],
        f = Kt(a[m]);
      p.max = p.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[m].max = t.relativeTarget[m].min + f)
    });
    const i = da();
    Fo(i, a, n.layoutBox);
    const r = da();
    c ? Fo(r, t.applyTransform(o, !0), n.measuredBox) : Fo(r, a, n.layoutBox);
    const d = !wx(i);
    let u = !1;
    if (!t.resumeFrom) {
      const m = t.getClosestProjectingParent();
      if (m && !m.resumeFrom) {
        const {
          snapshot: p,
          layout: f
        } = m;
        if (p && f) {
          const S = rt();
          No(S, n.layoutBox, p.layoutBox);
          const v = rt();
          No(v, a, f.layoutBox), Tx(S, v) || (u = !0), m.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = S, t.relativeParent = m)
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: a,
      snapshot: n,
      delta: r,
      layoutDelta: i,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: u
    })
  } else if (t.isLead()) {
    const {
      onExitComplete: a
    } = t.options;
    a && a()
  }
  t.options.transition = void 0
}

function m6(t) {
  co && Fn.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function p6(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function f6(t) {
  t.clearSnapshot()
}

function _p(t) {
  t.clearMeasurements()
}

function h6(t) {
  t.isLayoutDirty = !1
}

function x6(t) {
  const {
    visualElement: e
  } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Up(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function y6(t) {
  t.resolveTargetDelta()
}

function v6(t) {
  t.calcProjection()
}

function g6(t) {
  t.resetSkewAndRotation()
}

function S6(t) {
  t.removeLeadSnapshot()
}

function Bp(t, e, n) {
  t.translate = at(e.translate, 0, n), t.scale = at(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function kp(t, e, n, a) {
  t.min = at(e.min, n.min, a), t.max = at(e.max, n.max, a)
}

function j6(t, e, n, a) {
  kp(t.x, e.x, n.x, a), kp(t.y, e.y, n.y, a)
}

function b6(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const w6 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  Lp = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Pp = Lp("applewebkit/") && !Lp("chrome/") ? Math.round : Xt;

function qp(t) {
  t.min = Pp(t.min), t.max = Pp(t.max)
}

function T6(t) {
  qp(t.x), qp(t.y)
}

function Ax(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !A4(Op(e), Op(n), .2)
}

function F6(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const N6 = Nx({
    attachResizeListener: (t, e) => Go(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  sl = {
    current: void 0
  },
  Ex = Nx({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!sl.current) {
        const t = new N6({});
        t.mount(window), t.setOptions({
          layoutScroll: !0
        }), sl.current = t
      }
      return sl.current
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none"
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  }),
  A6 = {
    pan: {
      Feature: q4
    },
    drag: {
      Feature: P4,
      ProjectionNode: Ex,
      MeasureLayout: Sx
    }
  };

function Yp(t, e, n) {
  const {
    props: a
  } = t;
  t.animationState && a.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n,
    s = a[o];
  s && $.postRender(() => s(e, ms(e)))
}
class E6 extends yn {
  mount() {
    const {
      current: e
    } = this.node;
    e && (this.unmount = Aj(e, n => (Yp(this.node, n, "Start"), a => Yp(this.node, a, "End"))))
  }
  unmount() {}
}
class C6 extends yn {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible")
    } catch {
      e = !0
    }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
  }
  mount() {
    this.unmount = us(Go(this.node.current, "focus", () => this.onFocus()), Go(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}

function Gp(t, e, n) {
  const {
    props: a
  } = t;
  t.animationState && a.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n),
    s = a[o];
  s && $.postRender(() => s(e, ms(e)))
}
class M6 extends yn {
  mount() {
    const {
      current: e
    } = this.node;
    e && (this.unmount = Dj(e, n => (Gp(this.node, n, "Start"), (a, {
      success: o
    }) => Gp(this.node, a, o ? "End" : "Cancel")), {
      useGlobalTarget: this.node.props.globalTapTarget
    }))
  }
  unmount() {}
}
const vr = new WeakMap,
  cl = new WeakMap,
  D6 = t => {
    const e = vr.get(t.target);
    e && e(t)
  },
  R6 = t => {
    t.forEach(D6)
  };

function V6({
  root: t,
  ...e
}) {
  const n = t || document;
  cl.has(n) || cl.set(n, {});
  const a = cl.get(n),
    o = JSON.stringify(e);
  return a[o] || (a[o] = new IntersectionObserver(R6, {
    root: t,
    ...e
  })), a[o]
}

function O6(t, e, n) {
  const a = V6(e);
  return vr.set(t, n), a.observe(t), () => {
    vr.delete(t), a.unobserve(t)
  }
}
const H6 = {
  some: 0,
  all: 1
};
class z6 extends yn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: e = {}
    } = this.node.getProps(), {
      root: n,
      margin: a,
      amount: o = "some",
      once: s
    } = e, c = {
      root: n ? n.current : void 0,
      rootMargin: a,
      threshold: typeof o == "number" ? o : H6[o]
    }, i = r => {
      const {
        isIntersecting: d
      } = r;
      if (this.isInView === d || (this.isInView = d, s && !d && this.hasEnteredView)) return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const {
        onViewportEnter: u,
        onViewportLeave: m
      } = this.node.getProps(), p = d ? u : m;
      p && p(r)
    };
    return O6(this.node.current, c, i)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: e,
      prevProps: n
    } = this.node;
    ["amount", "margin", "root"].some(_6(e, n)) && this.startObserver()
  }
  unmount() {}
}

function _6({
  viewport: t = {}
}, {
  viewport: e = {}
} = {}) {
  return n => t[n] !== e[n]
}
const U6 = {
    inView: {
      Feature: z6
    },
    tap: {
      Feature: M6
    },
    focus: {
      Feature: C6
    },
    hover: {
      Feature: E6
    }
  },
  B6 = {
    layout: {
      ProjectionNode: Ex,
      MeasureLayout: Sx
    }
  },
  gr = {
    current: null
  },
  Cx = {
    current: !1
  };

function k6() {
  if (Cx.current = !0, !!bd)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => gr.current = t.matches;
      t.addListener(e), e()
    } else gr.current = !1
}
const L6 = [...tx, Ft, fn],
  P6 = t => L6.find(I0(t)),
  Xp = new WeakMap;

function q6(t, e, n) {
  for (const a in e) {
    const o = e[a],
      s = n[a];
    if (Et(o)) t.addValue(a, o);
    else if (Et(s)) t.addValue(a, qo(o, {
      owner: t
    }));
    else if (s !== o)
      if (t.hasValue(a)) {
        const c = t.getValue(a);
        c.liveStyle === !0 ? c.jump(o) : c.hasAnimated || c.set(o)
      } else {
        const c = t.getStaticValue(a);
        t.addValue(a, qo(c !== void 0 ? c : o, {
          owner: t
        }))
      }
  }
  for (const a in n) e[a] === void 0 && t.removeValue(a);
  return e
}
const Zp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Y6 {
  scrapeMotionValuesFromProps(e, n, a) {
    return {}
  }
  constructor({
    parent: e,
    props: n,
    presenceContext: a,
    reducedMotionConfig: o,
    blockInitialAnimation: s,
    visualState: c
  }, i = {}) {
    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Qd, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = ve.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, $.render(this.render, !1, !0))
    };
    const {
      latestValues: r,
      renderState: d,
      onUpdate: u
    } = c;
    this.onUpdate = u, this.latestValues = r, this.baseTarget = {
      ...r
    }, this.initialValues = n.initial ? {
      ...r
    } : {}, this.renderState = d, this.parent = e, this.props = n, this.presenceContext = a, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.blockInitialAnimation = !!s, this.isControllingVariants = ii(n), this.isVariantNode = l0(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
    const {
      willChange: m,
      ...p
    } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in p) {
      const S = p[f];
      r[f] !== void 0 && Et(S) && S.set(r[f], !1)
    }
  }
  mount(e) {
    this.current = e, Xp.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, a) => this.bindToMotionValue(a, n)), Cx.current || k6(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gr.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
  }
  unmount() {
    Xp.delete(this.current), this.projection && this.projection.unmount(), pn(this.notifyUpdate), pn(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1)
    }
    this.current = null
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const a = qn.has(e),
      o = n.on("change", i => {
        this.latestValues[e] = i, this.props.onUpdate && $.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0)
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      o(), s(), c && c(), n.owner && n.stop()
    })
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
  }
  updateFeatures() {
    let e = "animation";
    for (e in Oa) {
      const n = Oa[e];
      if (!n) continue;
      const {
        isEnabled: a,
        Feature: o
      } = n;
      if (!this.features[e] && o && a(this.props) && (this.features[e] = new o(this)), this.features[e]) {
        const s = this.features[e];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rt()
  }
  getStaticValue(e) {
    return this.latestValues[e]
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let a = 0; a < Zp.length; a++) {
      const o = Zp[a];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o,
        c = e[s];
      c && (this.propEventSubscriptions[o] = this.on(o, c))
    }
    this.prevMotionValues = q6(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
  }
  getProps() {
    return this.props
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
  }
  addValue(e, n) {
    const a = this.values.get(e);
    n !== a && (a && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
    return this.values.has(e)
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let a = this.values.get(e);
    return a === void 0 && n !== void 0 && (a = qo(n === null ? void 0 : n, {
      owner: this
    }), this.addValue(e, a)), a
  }
  readValue(e, n) {
    var a;
    let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (a = this.getBaseTargetFromProps(this.props, e)) !== null && a !== void 0 ? a : this.readValueFromInstance(this.current, e, this.options);
    return o != null && (typeof o == "string" && ($0(o) || P0(o)) ? o = parseFloat(o) : !P6(o) && fn.test(n) && (o = K0(e, n)), this.setBaseTarget(e, Et(o) ? o.get() : o)), Et(o) ? o.get() : o
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n
  }
  getBaseTarget(e) {
    var n;
    const {
      initial: a
    } = this.props;
    let o;
    if (typeof a == "string" || typeof a == "object") {
      const c = Cd(this.props, a, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      c && (o = c[e])
    }
    if (a && o !== void 0) return o;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !Et(s) ? s : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e]
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new qd), this.events[e].add(n)
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n)
  }
}
class Mx extends Y6 {
  constructor() {
    super(...arguments), this.KeyframeResolver = ex
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0
  }
  removeValueFromRenderState(e, {
    vars: n,
    style: a
  }) {
    delete n[e], delete a[e]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: e
    } = this.props;
    Et(e) && (this.childSubscription = e.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }))
  }
}

function G6(t) {
  return window.getComputedStyle(t)
}
class X6 extends Mx {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = y0
  }
  readValueFromInstance(e, n) {
    if (qn.has(n)) {
      const a = Kd(n);
      return a && a.default || 0
    } else {
      const a = G6(e),
        o = (f0(n) ? a.getPropertyValue(n) : a[n]) || 0;
      return typeof o == "string" ? o.trim() : o
    }
  }
  measureInstanceViewportBox(e, {
    transformPagePoint: n
  }) {
    return vx(e, n)
  }
  build(e, n, a) {
    Rd(e, n, a.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, n, a) {
    return zd(e, n, a)
  }
}
class Z6 extends Mx {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = rt
  }
  getBaseTargetFromProps(e, n) {
    return e[n]
  }
  readValueFromInstance(e, n) {
    if (qn.has(n)) {
      const a = Kd(n);
      return a && a.default || 0
    }
    return n = v0.has(n) ? n : Nd(n), e.getAttribute(n)
  }
  scrapeMotionValuesFromProps(e, n, a) {
    return j0(e, n, a)
  }
  build(e, n, a) {
    Vd(e, n, this.isSVGTag, a.transformTemplate)
  }
  renderInstance(e, n, a, o) {
    g0(e, n, a, o)
  }
  mount(e) {
    this.isSVGTag = Hd(e.tagName), super.mount(e)
  }
}
const K6 = (t, e) => Ed(t) ? new Z6(e) : new X6(e, {
    allowProjection: t !== F.Fragment
  }),
  Q6 = Sj({
    ...v4,
    ...U6,
    ...A6,
    ...B6
  }, K6),
  j = HS(Q6),
  J6 = () => {
    const t = e => {
      const n = document.getElementById(e);
      n && n.scrollIntoView({
        behavior: "smooth"
      })
    };
    return l.jsxs("section", {
      "data-component-start": "21:4:731",
      "data-component-end": "299:14:11598",
      "data-component-path": "src/components/HeroSection.jsx",
      "data-component-file": "HeroSection.jsx",
      "data-component-name": "section",
      "data-component-class": "relative min-h-screen flex items-center pt-20 overflow-hidden",
      id: "hero",
      className: "relative min-h-screen flex items-center pt-20 overflow-hidden",
      style: {
        backgroundColor: "var(--color-background)"
      },
      children: [l.jsxs("div", {
        "data-component-start": "27:6:954",
        "data-component-end": "148:12:5764",
        "data-component-path": "src/components/HeroSection.jsx",
        "data-component-file": "HeroSection.jsx",
        "data-component-name": "div",
        "data-component-class": "absolute inset-0 overflow-hidden",
        className: "absolute inset-0 overflow-hidden",
        children: [l.jsx(j.div, {
          "data-component-start": "28:8:1013",
          "data-component-end": "34:22:1316",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "absolute top-1/4 -left-20 w-64 h-64 rounded-full",
          initial: {
            opacity: 0,
            scale: .8
          },
          animate: {
            opacity: .2,
            scale: 1
          },
          transition: {
            duration: 1.5
          },
          className: "absolute top-1/4 -left-20 w-64 h-64 rounded-full",
          style: {
            backgroundColor: "var(--color-primary)"
          }
        }), l.jsx(j.div, {
          "data-component-start": "35:8:1325",
          "data-component-end": "41:22:1647",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "absolute bottom-1/4 -right-20 w-80 h-80 rounded-full",
          initial: {
            opacity: 0,
            scale: .8
          },
          animate: {
            opacity: .1,
            scale: 1
          },
          transition: {
            duration: 1.5,
            delay: .3
          },
          className: "absolute bottom-1/4 -right-20 w-80 h-80 rounded-full",
          style: {
            backgroundColor: "var(--color-secondary)"
          }
        }), l.jsx(j.div, {
          "data-component-start": "42:8:1656",
          "data-component-end": "53:22:2065",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "absolute top-2/3 left-1/4 w-40 h-40 rounded-full",
          initial: {
            opacity: 0,
            y: 50
          },
          animate: {
            opacity: .1,
            y: 0
          },
          transition: {
            duration: 2,
            repeat: 1 / 0,
            repeatType: "reverse",
            repeatDelay: .5
          },
          className: "absolute top-2/3 left-1/4 w-40 h-40 rounded-full",
          style: {
            backgroundColor: "var(--color-accent)"
          }
        }), l.jsx("div", {
          "data-component-start": "56:8:2125",
          "data-component-end": "105:14:4076",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "div",
          "data-component-class": "hidden lg:block absolute top-20 right-20",
          className: "hidden lg:block absolute top-20 right-20",
          children: l.jsxs("svg", {
            "data-component-start": "57:10:2194",
            "data-component-end": "104:16:4061",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "svg",
            "data-component-class": "opacity-20",
            width: "300",
            height: "300",
            viewBox: "0 0 200 200",
            className: "opacity-20",
            children: [l.jsx(j.path, {
              "data-component-start": "58:12:2282",
              "data-component-end": "68:14:2706",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.path",
              d: "M10,10 L50,90 L90,30 L130,150 L170,70",
              stroke: "currentColor",
              strokeWidth: "2",
              fill: "none",
              strokeDasharray: "2,2",
              initial: {
                pathLength: 0,
                opacity: 0
              },
              animate: {
                pathLength: 1,
                opacity: 1
              },
              transition: {
                duration: 2
              },
              style: {
                color: "var(--color-tertiary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "69:12:2719",
              "data-component-end": "75:14:2973",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "10",
              cy: "10",
              r: "5",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: .3
              },
              style: {
                fill: "var(--color-primary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "76:12:2986",
              "data-component-end": "82:14:3240",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "50",
              cy: "90",
              r: "5",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: .6
              },
              style: {
                fill: "var(--color-primary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "83:12:3253",
              "data-component-end": "89:14:3507",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "90",
              cy: "30",
              r: "5",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: .9
              },
              style: {
                fill: "var(--color-primary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "90:12:3520",
              "data-component-end": "96:14:3776",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "130",
              cy: "150",
              r: "5",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: 1.2
              },
              style: {
                fill: "var(--color-primary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "97:12:3789",
              "data-component-end": "103:14:4044",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "170",
              cy: "70",
              r: "5",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: 1.5
              },
              style: {
                fill: "var(--color-primary)"
              }
            })]
          })
        }), l.jsx("div", {
          "data-component-start": "106:8:4085",
          "data-component-end": "147:14:5751",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "div",
          "data-component-class": "hidden lg:block absolute bottom-20 left-20",
          className: "hidden lg:block absolute bottom-20 left-20",
          children: l.jsxs("svg", {
            "data-component-start": "107:10:4156",
            "data-component-end": "146:16:5736",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "svg",
            "data-component-class": "opacity-20",
            width: "250",
            height: "250",
            viewBox: "0 0 200 200",
            className: "opacity-20",
            children: [l.jsx(j.path, {
              "data-component-start": "108:12:4244",
              "data-component-end": "117:14:4652",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.path",
              d: "M20,50 C70,20 80,120 150,90 S190,150 120,180",
              stroke: "currentColor",
              strokeWidth: "2",
              fill: "none",
              initial: {
                pathLength: 0,
                opacity: 0
              },
              animate: {
                pathLength: 1,
                opacity: 1
              },
              transition: {
                duration: 2,
                delay: .5
              },
              style: {
                color: "var(--color-secondary)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "118:12:4665",
              "data-component-end": "124:14:4918",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "20",
              cy: "50",
              r: "4",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: .8
              },
              style: {
                fill: "var(--color-accent)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "125:12:4931",
              "data-component-end": "131:14:5184",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "70",
              cy: "30",
              r: "4",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: 1.1
              },
              style: {
                fill: "var(--color-accent)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "132:12:5197",
              "data-component-end": "138:14:5451",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "150",
              cy: "90",
              r: "4",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: 1.4
              },
              style: {
                fill: "var(--color-accent)"
              }
            }), l.jsx(j.circle, {
              "data-component-start": "139:12:5464",
              "data-component-end": "145:14:5719",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.circle",
              cx: "120",
              cy: "180",
              r: "4",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                duration: .5,
                delay: 1.7
              },
              style: {
                fill: "var(--color-accent)"
              }
            })]
          })
        })]
      }), l.jsx("div", {
        "data-component-start": "150:6:5778",
        "data-component-end": "298:12:11583",
        "data-component-path": "src/components/HeroSection.jsx",
        "data-component-file": "HeroSection.jsx",
        "data-component-name": "div",
        "data-component-class": "container mx-auto px-4 md:px-6 z-10",
        className: "container mx-auto px-4 md:px-6 z-10",
        children: l.jsxs("div", {
          "data-component-start": "151:8:5840",
          "data-component-end": "297:14:11570",
          "data-component-path": "src/components/HeroSection.jsx",
          "data-component-file": "HeroSection.jsx",
          "data-component-name": "div",
          "data-component-class": "flex flex-col lg:flex-row items-center",
          className: "flex flex-col lg:flex-row items-center",
          children: [l.jsxs(j.div, {
            "data-component-start": "152:10:5907",
            "data-component-end": "210:23:8493",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "motion.div",
            "data-component-class": "lg:w-1/2 lg:pr-12 space-y-8",
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: .8
            },
            className: "lg:w-1/2 lg:pr-12 space-y-8",
            children: [l.jsxs(j.h1, {
              "data-component-start": "158:12:6126",
              "data-component-end": "170:24:6731",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.h1",
              "data-component-class": "font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                duration: .8,
                delay: .2
              },
              className: "font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight",
              style: {
                color: "var(--color-dark)"
              },
              children: ["The Future of ", l.jsx(j.span, {
                "data-component-start": "165:28:6465",
                "data-component-end": "169:41:6684",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.span",
                initial: {
                  color: "#000000"
                },
                animate: {
                  color: "var(--color-primary)"
                },
                transition: {
                  duration: 1,
                  delay: .5
                },
                children: "Personalized"
              }), " K-12 Learning, Today."]
            }), l.jsx(j.p, {
              "data-component-start": "172:12:6757",
              "data-component-end": "180:23:7190",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.p",
              "data-component-class": "text-lg md:text-xl max-w-lg",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: .8
              },
              transition: {
                duration: .8,
                delay: .4
              },
              className: "text-lg md:text-xl max-w-lg",
              style: {
                color: "var(--color-text)"
              },
              children: "Empowering every student, teacher, and school with AI-driven adaptive learning, gamified experiences, and real-time insights."
            }), l.jsxs(j.div, {
              "data-component-start": "182:12:7216",
              "data-component-end": "209:25:8469",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .8,
                delay: .6
              },
              className: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
              children: [l.jsxs(j.button, {
                "data-component-start": "188:14:7493",
                "data-component-end": "196:30:7896",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.button",
                "data-component-class": "btn-primary text-lg px-8 py-4 shadow-lg flex items-center justify-center",
                onClick: () => t("features"),
                className: "btn-primary text-lg px-8 py-4 shadow-lg flex items-center justify-center",
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: .95
                },
                children: ["Explore Features", l.jsx(Yg, {
                  "data-component-start": "195:16:7824",
                  "data-component-end": "195:57:7865",
                  "data-component-path": "src/components/HeroSection.jsx",
                  "data-component-file": "HeroSection.jsx",
                  "data-component-name": "ChevronRight",
                  "data-component-class": "ml-2 h-5 w-5",
                  className: "ml-2 h-5 w-5"
                })]
              }), l.jsx(j.button, {
                "data-component-start": "198:14:7926",
                "data-component-end": "208:30:8443",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.button",
                "data-component-class": "px-8 py-4 font-semibold rounded-lg border border-current flex items-center justify-center hover:bg-opacity-10 transition-colors",
                onClick: () => t("about"),
                className: "px-8 py-4 font-semibold rounded-lg border border-current flex items-center justify-center hover:bg-opacity-10 transition-colors",
                whileHover: {
                  backgroundColor: "rgba(254, 144, 85, 0.1)"
                },
                whileTap: {
                  scale: .95
                },
                style: {
                  color: "var(--color-primary)"
                },
                children: "Learn More"
              })]
            })]
          }), l.jsx(j.div, {
            "data-component-start": "212:10:8515",
            "data-component-end": "296:23:11555",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "motion.div",
            "data-component-class": "lg:w-1/2 mt-12 lg:mt-0 flex justify-center",
            initial: {
              opacity: 0,
              x: 50
            },
            animate: {
              opacity: 1,
              x: 0
            },
            transition: {
              duration: .8,
              delay: .3
            },
            className: "lg:w-1/2 mt-12 lg:mt-0 flex justify-center",
            children: l.jsxs("div", {
              "data-component-start": "218:12:8761",
              "data-component-end": "295:18:11531",
              "data-component-path": "src/components/HeroSection.jsx",
              "data-component-file": "HeroSection.jsx",
              "data-component-name": "div",
              "data-component-class": "relative",
              className: "relative",
              children: [l.jsxs(j.div, {
                "data-component-start": "220:14:8861",
                "data-component-end": "255:27:10226",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "w-80 h-80 md:w-96 md:h-96 relative",
                initial: {
                  y: 0
                },
                animate: {
                  y: [-10, 10, -10]
                },
                transition: {
                  repeat: 1 / 0,
                  duration: 6,
                  ease: "easeInOut"
                },
                className: "w-80 h-80 md:w-96 md:h-96 relative",
                children: [l.jsx("img", {
                  "data-component-start": "231:16:9269",
                  "data-component-end": "236:18:9554",
                  "data-component-path": "src/components/HeroSection.jsx",
                  "data-component-file": "HeroSection.jsx",
                  "data-component-name": "img",
                  "data-component-src": "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
                  "data-component-class": "w-full h-full object-contain",
                  src: "https://heyboss.heeyo.ai/1746855605-ca737fc2.png",
                  alt: "AI Learning Network",
                  className: "w-full h-full object-contain",
                  style: {
                    filter: "drop-shadow(0 0 10px var(--color-primary))"
                  }
                }), l.jsx(j.div, {
                  "data-component-start": "239:16:9627",
                  "data-component-end": "254:29:10198",
                  "data-component-path": "src/components/HeroSection.jsx",
                  "data-component-file": "HeroSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "absolute inset-0 rounded-full",
                  animate: {
                    opacity: [.2, .4, .2],
                    scale: [1, 1.05, 1]
                  },
                  transition: {
                    repeat: 1 / 0,
                    duration: 4,
                    ease: "easeInOut"
                  },
                  className: "absolute inset-0 rounded-full",
                  style: {
                    background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)"
                  }
                })]
              }), l.jsx(j.div, {
                "data-component-start": "258:14:10296",
                "data-component-end": "275:27:10879",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "absolute top-1/4 -right-5 w-16 h-16 rounded-full",
                initial: {
                  x: 0,
                  y: 0
                },
                animate: {
                  x: [0, 10, 5, 0],
                  y: [0, -10, -5, 0]
                },
                transition: {
                  repeat: 1 / 0,
                  duration: 8,
                  ease: "easeInOut"
                },
                className: "absolute top-1/4 -right-5 w-16 h-16 rounded-full",
                style: {
                  backgroundColor: "var(--color-accent)",
                  opacity: .7
                }
              }), l.jsx(j.div, {
                "data-component-start": "276:14:10894",
                "data-component-end": "294:27:11512",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "absolute bottom-1/4 -left-5 w-20 h-20 rounded-full",
                initial: {
                  x: 0,
                  y: 0
                },
                animate: {
                  x: [0, -10, -5, 0],
                  y: [0, 10, 5, 0]
                },
                transition: {
                  repeat: 1 / 0,
                  duration: 7,
                  ease: "easeInOut",
                  delay: .5
                },
                className: "absolute bottom-1/4 -left-5 w-20 h-20 rounded-full",
                style: {
                  backgroundColor: "var(--color-secondary)",
                  opacity: .7
                }
              })]
            })
          })]
        })
      })]
    })
  },
  $6 = () => l.jsx("section", {
    "data-component-start": "15:4:589",
    "data-component-end": "384:14:18057",
    "data-component-path": "src/components/ForStudentsSection.jsx",
    "data-component-file": "ForStudentsSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding",
    id: "students",
    className: "section-padding",
    style: {
      backgroundColor: "var(--color-background)"
    },
    children: l.jsxs("div", {
      "data-component-start": "16:6:702",
      "data-component-end": "383:12:18042",
      "data-component-path": "src/components/ForStudentsSection.jsx",
      "data-component-file": "ForStudentsSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: [l.jsxs(j.div, {
        "data-component-start": "17:8:764",
        "data-component-end": "30:21:1451",
        "data-component-path": "src/components/ForStudentsSection.jsx",
        "data-component-file": "ForStudentsSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "text-center mb-16",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-100px"
        },
        transition: {
          duration: .6
        },
        className: "text-center mb-16",
        children: [l.jsxs("h2", {
          "data-component-start": "24:10:1019",
          "data-component-end": "26:15:1206",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "h2",
          "data-component-class": "text-3xl md:text-4xl font-bold mb-4",
          className: "text-3xl md:text-4xl font-bold mb-4",
          style: {
            color: "var(--color-dark)"
          },
          children: ["For ", l.jsx("span", {
            "data-component-start": "25:16:1127",
            "data-component-end": "25:79:1190",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "span",
            style: {
              color: "var(--color-primary)"
            },
            children: "Students"
          })]
        }), l.jsx("p", {
          "data-component-start": "27:10:1217",
          "data-component-end": "29:14:1429",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "p",
          "data-component-class": "max-w-2xl mx-auto text-lg",
          className: "max-w-2xl mx-auto text-lg",
          style: {
            color: "var(--color-text-light)"
          },
          children: "Zunno.ai transforms learning into an exciting journey tailored to your unique needs and interests."
        })]
      }), l.jsxs("div", {
        "data-component-start": "32:8:1469",
        "data-component-end": "382:14:18029",
        "data-component-path": "src/components/ForStudentsSection.jsx",
        "data-component-file": "ForStudentsSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: [l.jsxs(j.div, {
          "data-component-start": "34:10:1583",
          "data-component-end": "94:23:4404",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .1
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsxs("div", {
            "data-component-start": "42:12:1922",
            "data-component-end": "62:18:2983",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: [l.jsx("div", {
              "data-component-start": "43:14:1968",
              "data-component-end": "52:20:2441",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .1
              },
              children: l.jsx(Vg, {
                "data-component-start": "47:16:2222",
                "data-component-end": "51:18:2420",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "BookOpen",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-primary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "53:14:2456",
              "data-component-end": "61:27:2964",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .5,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-primary)"
              },
              children: l.jsx("span", {
                "data-component-start": "60:16:2850",
                "data-component-end": "60:102:2936",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-primary)"
                },
                children: "1"
              })
            })]
          }), l.jsx("h3", {
            "data-component-start": "64:12:3009",
            "data-component-end": "66:17:3147",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Personalized Learning Paths"
          }), l.jsx("p", {
            "data-component-start": "68:12:3173",
            "data-component-end": "70:16:3385",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Our AI analyzes your learning style, strengths, and areas for growth to create a unique educational journey just for you."
          }), l.jsxs("div", {
            "data-component-start": "72:12:3411",
            "data-component-end": "93:18:4380",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto",
            className: "mt-auto",
            children: [l.jsx(j.div, {
              "data-component-start": "73:14:3451",
              "data-component-end": "89:27:4201",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "h-2 rounded-full",
              initial: {
                width: "30%"
              },
              whileInView: {
                width: "85%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: 1.5,
                delay: .7
              },
              className: "h-2 rounded-full",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .3
              },
              children: l.jsx(j.div, {
                "data-component-start": "81:16:3814",
                "data-component-end": "88:30:4173",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-full rounded-full",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "75%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: 1.2,
                  delay: 1
                },
                className: "h-full rounded-full",
                style: {
                  backgroundColor: "var(--color-primary)"
                }
              })
            }), l.jsx("p", {
              "data-component-start": "90:14:4216",
              "data-component-end": "92:18:4361",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-sm mt-2",
              className: "text-sm mt-2",
              style: {
                color: "var(--color-text-light)"
              },
              children: "75% improvement in learning outcomes"
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "97:10:4459",
          "data-component-end": "170:23:8014",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .2
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsxs("div", {
            "data-component-start": "105:12:4798",
            "data-component-end": "125:18:5865",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: [l.jsx("div", {
              "data-component-start": "106:14:4844",
              "data-component-end": "115:20:5319",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .1
              },
              children: l.jsx(mS, {
                "data-component-start": "110:16:5100",
                "data-component-end": "114:18:5298",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "Trophy",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-secondary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "116:14:5334",
              "data-component-end": "124:27:5846",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .6,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-secondary)"
              },
              children: l.jsx("span", {
                "data-component-start": "123:16:5730",
                "data-component-end": "123:104:5818",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-secondary)"
                },
                children: "2"
              })
            })]
          }), l.jsx("h3", {
            "data-component-start": "127:12:5891",
            "data-component-end": "129:17:6030",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Gamified Learning Experience"
          }), l.jsx("p", {
            "data-component-start": "131:12:6056",
            "data-component-end": "133:16:6272",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Turn studying into an exciting game with points, badges, leaderboards, and challenges that make learning fun and competitive."
          }), l.jsxs("div", {
            "data-component-start": "135:12:6298",
            "data-component-end": "169:18:7990",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex items-center space-x-2 mt-auto",
            className: "flex items-center space-x-2 mt-auto",
            children: [l.jsx(j.div, {
              "data-component-start": "136:14:6366",
              "data-component-end": "145:27:6844",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .8
              },
              className: "w-8 h-8 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .9
              },
              children: l.jsx("span", {
                "data-component-start": "144:16:6760",
                "data-component-end": "144:72:6816",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold text-white",
                className: "text-xs font-bold text-white",
                children: "A+"
              })
            }), l.jsx(j.div, {
              "data-component-start": "146:14:6859",
              "data-component-end": "155:27:7334",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .9
              },
              className: "w-8 h-8 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .9
              },
              children: l.jsx("span", {
                "data-component-start": "154:16:7250",
                "data-component-end": "154:72:7306",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold text-white",
                className: "text-xs font-bold text-white",
                children: "B+"
              })
            }), l.jsx(j.div, {
              "data-component-start": "156:14:7349",
              "data-component-end": "165:27:7823",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: 1
              },
              className: "w-8 h-8 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-tertiary)",
                opacity: .9
              },
              children: l.jsx("span", {
                "data-component-start": "164:16:7740",
                "data-component-end": "164:71:7795",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold text-white",
                className: "text-xs font-bold text-white",
                children: "S"
              })
            }), l.jsx("p", {
              "data-component-start": "166:14:7838",
              "data-component-end": "168:18:7971",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-sm ml-2",
              className: "text-sm ml-2",
              style: {
                color: "var(--color-text-light)"
              },
              children: "Earn badges as you learn"
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "173:10:8069",
          "data-component-end": "234:23:10939",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .3
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsxs("div", {
            "data-component-start": "181:12:8408",
            "data-component-end": "201:18:9462",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: [l.jsx("div", {
              "data-component-start": "182:14:8454",
              "data-component-end": "191:20:8922",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .1
              },
              children: l.jsx(Hg, {
                "data-component-start": "186:16:8707",
                "data-component-end": "190:18:8901",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "Brain",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-accent)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "192:14:8937",
              "data-component-end": "200:27:9443",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .7,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-accent)"
              },
              children: l.jsx("span", {
                "data-component-start": "199:16:9330",
                "data-component-end": "199:101:9415",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-accent)"
                },
                children: "3"
              })
            })]
          }), l.jsx("h3", {
            "data-component-start": "203:12:9488",
            "data-component-end": "205:17:9613",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "AI Study Buddy"
          }), l.jsx("p", {
            "data-component-start": "207:12:9639",
            "data-component-end": "209:16:9847",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Get 24/7 help from your personal AI tutor that answers questions, explains concepts, and helps you prepare for tests."
          }), l.jsxs("div", {
            "data-component-start": "211:12:9873",
            "data-component-end": "233:18:10915",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto bg-gray-50 p-3 rounded-lg relative overflow-hidden",
            className: "mt-auto bg-gray-50 p-3 rounded-lg relative overflow-hidden",
            children: [l.jsx(j.div, {
              "data-component-start": "212:14:9964",
              "data-component-end": "219:28:10318",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute bottom-0 left-0 h-1",
              initial: {
                width: "0%"
              },
              whileInView: {
                width: "100%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: 2,
                delay: .5
              },
              className: "absolute bottom-0 left-0 h-1",
              style: {
                backgroundColor: "var(--color-accent)"
              }
            }), l.jsx("p", {
              "data-component-start": "220:14:10333",
              "data-component-end": "222:18:10479",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-sm italic",
              className: "text-sm italic",
              style: {
                color: "var(--color-text)"
              },
              children: `"I don't understand this math problem..."`
            }), l.jsx(j.p, {
              "data-component-start": "223:14:10494",
              "data-component-end": "232:25:10896",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.p",
              "data-component-class": "text-sm mt-2 font-medium",
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .5,
                delay: 2
              },
              className: "text-sm mt-2 font-medium",
              style: {
                color: "var(--color-accent)"
              },
              children: '"Let me break it down step by step..."'
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "237:10:10994",
          "data-component-end": "313:23:14755",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group md:col-span-2 lg:col-span-1",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .4
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group md:col-span-2 lg:col-span-1",
          children: [l.jsxs("div", {
            "data-component-start": "245:12:11361",
            "data-component-end": "265:18:12428",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: [l.jsx("div", {
              "data-component-start": "246:14:11407",
              "data-component-end": "255:20:11884",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-tertiary)",
                opacity: .1
              },
              children: l.jsx(Dg, {
                "data-component-start": "250:16:11662",
                "data-component-end": "254:18:11863",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "BookMarked",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-tertiary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "256:14:11899",
              "data-component-end": "264:27:12409",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .8,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-tertiary)"
              },
              children: l.jsx("span", {
                "data-component-start": "263:16:12294",
                "data-component-end": "263:103:12381",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-tertiary)"
                },
                children: "4"
              })
            })]
          }), l.jsx("h3", {
            "data-component-start": "267:12:12454",
            "data-component-end": "269:17:12592",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Interactive Study Materials"
          }), l.jsx("p", {
            "data-component-start": "271:12:12618",
            "data-component-end": "273:16:12833",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Engage with dynamic content including videos, 3D models, simulations, and interactive exercises that bring learning to life."
          }), l.jsxs("div", {
            "data-component-start": "275:12:12859",
            "data-component-end": "312:18:14731",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "grid grid-cols-3 gap-2 mt-auto",
            className: "grid grid-cols-3 gap-2 mt-auto",
            children: [l.jsx(j.div, {
              "data-component-start": "276:14:12922",
              "data-component-end": "287:27:13510",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "aspect-video rounded-md overflow-hidden",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .6
              },
              className: "aspect-video rounded-md overflow-hidden",
              style: {
                backgroundColor: "var(--color-tertiary)",
                opacity: .7
              },
              children: l.jsx("div", {
                "data-component-start": "284:16:13327",
                "data-component-end": "286:22:13482",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-full h-full flex items-center justify-center",
                className: "w-full h-full flex items-center justify-center",
                children: l.jsx("span", {
                  "data-component-start": "285:18:13410",
                  "data-component-end": "285:67:13459",
                  "data-component-path": "src/components/ForStudentsSection.jsx",
                  "data-component-file": "ForStudentsSection.jsx",
                  "data-component-name": "span",
                  "data-component-class": "text-white text-xs",
                  className: "text-white text-xs",
                  children: "Video"
                })
              })
            }), l.jsx(j.div, {
              "data-component-start": "288:14:13525",
              "data-component-end": "299:27:14110",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "aspect-square rounded-md overflow-hidden",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .8
              },
              className: "aspect-square rounded-md overflow-hidden",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .7
              },
              children: l.jsx("div", {
                "data-component-start": "296:16:13930",
                "data-component-end": "298:22:14082",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-full h-full flex items-center justify-center",
                className: "w-full h-full flex items-center justify-center",
                children: l.jsx("span", {
                  "data-component-start": "297:18:14013",
                  "data-component-end": "297:64:14059",
                  "data-component-path": "src/components/ForStudentsSection.jsx",
                  "data-component-file": "ForStudentsSection.jsx",
                  "data-component-name": "span",
                  "data-component-class": "text-white text-xs",
                  className: "text-white text-xs",
                  children: "3D"
                })
              })
            }), l.jsx(j.div, {
              "data-component-start": "300:14:14125",
              "data-component-end": "311:27:14712",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "aspect-square rounded-md overflow-hidden",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: 1
              },
              className: "aspect-square rounded-md overflow-hidden",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .7
              },
              children: l.jsx("div", {
                "data-component-start": "308:16:14530",
                "data-component-end": "310:22:14684",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-full h-full flex items-center justify-center",
                className: "w-full h-full flex items-center justify-center",
                children: l.jsx("span", {
                  "data-component-start": "309:18:14613",
                  "data-component-end": "309:66:14661",
                  "data-component-path": "src/components/ForStudentsSection.jsx",
                  "data-component-file": "ForStudentsSection.jsx",
                  "data-component-name": "span",
                  "data-component-class": "text-white text-xs",
                  className: "text-white text-xs",
                  children: "Quiz"
                })
              })
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "316:10:14810",
          "data-component-end": "381:23:18014",
          "data-component-path": "src/components/ForStudentsSection.jsx",
          "data-component-file": "ForStudentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group md:col-span-2 lg:col-span-2",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .5
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group md:col-span-2 lg:col-span-2",
          children: [l.jsxs("div", {
            "data-component-start": "324:12:15177",
            "data-component-end": "344:18:16223",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: [l.jsx("div", {
              "data-component-start": "325:14:15223",
              "data-component-end": "334:20:15687",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-dark)",
                opacity: .1
              },
              children: l.jsx(Zg, {
                "data-component-start": "329:16:15474",
                "data-component-end": "333:18:15666",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "Clock",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-dark)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "335:14:15702",
              "data-component-end": "343:27:16204",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .9,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-dark)"
              },
              children: l.jsx("span", {
                "data-component-start": "342:16:16093",
                "data-component-end": "342:99:16176",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-dark)"
                },
                children: "5"
              })
            })]
          }), l.jsx("h3", {
            "data-component-start": "346:12:16249",
            "data-component-end": "348:17:16380",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Smart Study Schedule"
          }), l.jsx("p", {
            "data-component-start": "350:12:16406",
            "data-component-end": "352:16:16610",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Our AI creates an optimal study plan based on your learning habits, peak concentration times, and upcoming tests."
          }), l.jsx("div", {
            "data-component-start": "354:12:16636",
            "data-component-end": "380:18:17990",
            "data-component-path": "src/components/ForStudentsSection.jsx",
            "data-component-file": "ForStudentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "grid grid-cols-7 gap-1 mt-auto",
            className: "grid grid-cols-7 gap-1 mt-auto",
            children: ["M", "T", "W", "T", "F", "S", "S"].map((t, e) => l.jsxs(j.div, {
              "data-component-start": "356:16:16770",
              "data-component-end": "378:29:17953",
              "data-component-path": "src/components/ForStudentsSection.jsx",
              "data-component-file": "ForStudentsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-map-start": "355:15:16700",
              "data-component-map-end": "379:16:17970",
              "data-component-class": "flex flex-col items-center",
              initial: {
                opacity: 0,
                y: 10
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .5 + e * .1
              },
              className: "flex flex-col items-center",
              children: [l.jsx("span", {
                "data-component-start": "364:18:17122",
                "data-component-end": "364:106:17210",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs mb-1",
                className: "text-xs mb-1",
                style: {
                  color: "var(--color-text-light)"
                },
                children: t
              }), l.jsx(j.div, {
                "data-component-start": "365:18:17229",
                "data-component-end": "377:31:17923",
                "data-component-path": "src/components/ForStudentsSection.jsx",
                "data-component-file": "ForStudentsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "w-full aspect-square rounded-md flex items-center justify-center text-white text-xs",
                whileHover: {
                  scale: 1.1
                },
                className: "w-full aspect-square rounded-md flex items-center justify-center text-white text-xs",
                style: {
                  backgroundColor: e === 2 || e === 4 ? "var(--color-primary)" : e === 1 || e === 3 ? "var(--color-secondary)" : e === 5 ? "var(--color-accent)" : "var(--color-background-secondary)",
                  opacity: e < 5 ? .9 : .3
                },
                children: e < 5 ? e + 1 : ""
              })]
            }, e))
          })]
        })]
      })]
    })
  }),
  W6 = () => l.jsx("section", {
    "data-component-start": "15:4:574",
    "data-component-end": "345:14:16459",
    "data-component-path": "src/components/ForTeachersSection.jsx",
    "data-component-file": "ForTeachersSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding bg-white",
    id: "teachers",
    className: "section-padding bg-white",
    children: l.jsxs("div", {
      "data-component-start": "16:6:641",
      "data-component-end": "344:12:16444",
      "data-component-path": "src/components/ForTeachersSection.jsx",
      "data-component-file": "ForTeachersSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: [l.jsxs(j.div, {
        "data-component-start": "17:8:703",
        "data-component-end": "30:21:1406",
        "data-component-path": "src/components/ForTeachersSection.jsx",
        "data-component-file": "ForTeachersSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "text-center mb-16",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-100px"
        },
        transition: {
          duration: .6
        },
        className: "text-center mb-16",
        children: [l.jsxs("h2", {
          "data-component-start": "24:10:958",
          "data-component-end": "26:15:1145",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "h2",
          "data-component-class": "text-3xl md:text-4xl font-bold mb-4",
          className: "text-3xl md:text-4xl font-bold mb-4",
          style: {
            color: "var(--color-dark)"
          },
          children: ["For ", l.jsx("span", {
            "data-component-start": "25:16:1066",
            "data-component-end": "25:79:1129",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "span",
            style: {
              color: "var(--color-primary)"
            },
            children: "Teachers"
          })]
        }), l.jsx("p", {
          "data-component-start": "27:10:1156",
          "data-component-end": "29:14:1384",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "p",
          "data-component-class": "max-w-2xl mx-auto text-lg",
          className: "max-w-2xl mx-auto text-lg",
          style: {
            color: "var(--color-text-light)"
          },
          children: "Zunno.ai empowers educators with powerful tools to save time, gain insights, and deliver personalized instruction."
        })]
      }), l.jsxs("div", {
        "data-component-start": "32:8:1424",
        "data-component-end": "311:14:14748",
        "data-component-path": "src/components/ForTeachersSection.jsx",
        "data-component-file": "ForTeachersSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-2 gap-8",
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [l.jsxs(j.div, {
          "data-component-start": "34:10:1523",
          "data-component-end": "97:23:4662",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group flex flex-col md:flex-row gap-6",
          initial: {
            opacity: 0,
            x: -30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .1
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group flex flex-col md:flex-row gap-6",
          children: [l.jsxs("div", {
            "data-component-start": "42:12:1895",
            "data-component-end": "62:18:2960",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative shrink-0",
            className: "relative shrink-0",
            children: [l.jsx("div", {
              "data-component-start": "43:14:1945",
              "data-component-end": "52:20:2418",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .1
              },
              children: l.jsx(Qg, {
                "data-component-start": "47:16:2199",
                "data-component-end": "51:18:2397",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "FileText",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-primary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "53:14:2433",
              "data-component-end": "61:27:2941",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .5,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-primary)"
              },
              children: l.jsx("span", {
                "data-component-start": "60:16:2827",
                "data-component-end": "60:102:2913",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-primary)"
                },
                children: "1"
              })
            })]
          }), l.jsxs("div", {
            "data-component-start": "64:12:2986",
            "data-component-end": "96:18:4638",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex-1",
            className: "flex-1",
            children: [l.jsx("h3", {
              "data-component-start": "65:14:3025",
              "data-component-end": "67:19:3171",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "h3",
              "data-component-class": "text-xl font-bold mb-3",
              className: "text-xl font-bold mb-3",
              style: {
                color: "var(--color-dark)"
              },
              children: "Automated Assessments & Grading"
            }), l.jsx("p", {
              "data-component-start": "69:14:3201",
              "data-component-end": "71:18:3404",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "mb-4",
              className: "mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: "Save hours of work with AI-powered assessment creation, automated grading, and detailed feedback generation."
            }), l.jsxs("div", {
              "data-component-start": "73:14:3434",
              "data-component-end": "95:20:4619",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "mt-auto",
              className: "mt-auto",
              children: [l.jsxs("div", {
                "data-component-start": "74:16:3476",
                "data-component-end": "77:22:3783",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "div",
                "data-component-class": "flex items-center justify-between mb-2",
                className: "flex items-center justify-between mb-2",
                children: [l.jsx("span", {
                  "data-component-start": "75:18:3551",
                  "data-component-end": "75:115:3648",
                  "data-component-path": "src/components/ForTeachersSection.jsx",
                  "data-component-file": "ForTeachersSection.jsx",
                  "data-component-name": "span",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text-light)"
                  },
                  children: "Time saved per week"
                }), l.jsx("span", {
                  "data-component-start": "76:18:3667",
                  "data-component-end": "76:111:3760",
                  "data-component-path": "src/components/ForTeachersSection.jsx",
                  "data-component-file": "ForTeachersSection.jsx",
                  "data-component-name": "span",
                  "data-component-class": "text-sm font-bold",
                  className: "text-sm font-bold",
                  style: {
                    color: "var(--color-primary)"
                  },
                  children: "8+ hours"
                })]
              }), l.jsx(j.div, {
                "data-component-start": "78:16:3800",
                "data-component-end": "94:29:4598",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-2 rounded-full overflow-hidden",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "100%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: 1.5,
                  delay: .7
                },
                className: "h-2 rounded-full overflow-hidden",
                style: {
                  backgroundColor: "var(--color-primary)",
                  opacity: .2
                },
                children: l.jsx(j.div, {
                  "data-component-start": "86:18:4195",
                  "data-component-end": "93:32:4568",
                  "data-component-path": "src/components/ForTeachersSection.jsx",
                  "data-component-file": "ForTeachersSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "h-full rounded-full",
                  initial: {
                    width: "0%"
                  },
                  whileInView: {
                    width: "80%"
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: 1.2,
                    delay: 1
                  },
                  className: "h-full rounded-full",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  }
                })
              })]
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "100:10:4717",
          "data-component-end": "166:23:7980",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group flex flex-col md:flex-row gap-6",
          initial: {
            opacity: 0,
            x: 30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .2
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group flex flex-col md:flex-row gap-6",
          children: [l.jsxs("div", {
            "data-component-start": "108:12:5088",
            "data-component-end": "128:18:6162",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative shrink-0",
            className: "relative shrink-0",
            children: [l.jsx("div", {
              "data-component-start": "109:14:5138",
              "data-component-end": "118:20:5616",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .1
              },
              children: l.jsx(Lg, {
                "data-component-start": "113:16:5394",
                "data-component-end": "117:18:5595",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "BarChart2",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-secondary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "119:14:5631",
              "data-component-end": "127:27:6143",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .6,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-secondary)"
              },
              children: l.jsx("span", {
                "data-component-start": "126:16:6027",
                "data-component-end": "126:104:6115",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-secondary)"
                },
                children: "2"
              })
            })]
          }), l.jsxs("div", {
            "data-component-start": "130:12:6188",
            "data-component-end": "165:18:7956",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex-1",
            className: "flex-1",
            children: [l.jsx("h3", {
              "data-component-start": "131:14:6227",
              "data-component-end": "133:19:6371",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "h3",
              "data-component-class": "text-xl font-bold mb-3",
              className: "text-xl font-bold mb-3",
              style: {
                color: "var(--color-dark)"
              },
              children: "Real-Time Analytics Dashboard"
            }), l.jsx("p", {
              "data-component-start": "135:14:6401",
              "data-component-end": "137:18:6618",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "mb-4",
              className: "mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: "Gain valuable insights into student performance, identify learning gaps, and track progress with intuitive visualizations."
            }), l.jsxs("div", {
              "data-component-start": "139:14:6648",
              "data-component-end": "164:20:7937",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "grid grid-cols-3 gap-2 mt-auto",
              className: "grid grid-cols-3 gap-2 mt-auto",
              children: [l.jsx(j.div, {
                "data-component-start": "140:16:6713",
                "data-component-end": "147:30:7104",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "rounded-t-md w-full",
                initial: {
                  height: "10px"
                },
                whileInView: {
                  height: "40px"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .5,
                  delay: .7
                },
                className: "rounded-t-md w-full",
                style: {
                  backgroundColor: "var(--color-secondary)",
                  alignSelf: "flex-end"
                }
              }), l.jsx(j.div, {
                "data-component-start": "148:16:7121",
                "data-component-end": "155:30:7509",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "rounded-t-md w-full",
                initial: {
                  height: "10px"
                },
                whileInView: {
                  height: "60px"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .5,
                  delay: .8
                },
                className: "rounded-t-md w-full",
                style: {
                  backgroundColor: "var(--color-accent)",
                  alignSelf: "flex-end"
                }
              }), l.jsx(j.div, {
                "data-component-start": "156:16:7526",
                "data-component-end": "163:30:7916",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "rounded-t-md w-full",
                initial: {
                  height: "10px"
                },
                whileInView: {
                  height: "30px"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .5,
                  delay: .9
                },
                className: "rounded-t-md w-full",
                style: {
                  backgroundColor: "var(--color-tertiary)",
                  alignSelf: "flex-end"
                }
              })]
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "169:10:8035",
          "data-component-end": "244:23:11628",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group flex flex-col md:flex-row gap-6",
          initial: {
            opacity: 0,
            x: -30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .3
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group flex flex-col md:flex-row gap-6",
          children: [l.jsxs("div", {
            "data-component-start": "177:12:8407",
            "data-component-end": "197:18:9465",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative shrink-0",
            className: "relative shrink-0",
            children: [l.jsx("div", {
              "data-component-start": "178:14:8457",
              "data-component-end": "187:20:8925",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .1
              },
              children: l.jsx(xS, {
                "data-component-start": "182:16:8710",
                "data-component-end": "186:18:8904",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "Users",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-accent)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "188:14:8940",
              "data-component-end": "196:27:9446",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .7,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-accent)"
              },
              children: l.jsx("span", {
                "data-component-start": "195:16:9333",
                "data-component-end": "195:101:9418",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-accent)"
                },
                children: "3"
              })
            })]
          }), l.jsxs("div", {
            "data-component-start": "199:12:9491",
            "data-component-end": "243:18:11604",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex-1",
            className: "flex-1",
            children: [l.jsx("h3", {
              "data-component-start": "200:14:9530",
              "data-component-end": "202:19:9677",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "h3",
              "data-component-class": "text-xl font-bold mb-3",
              className: "text-xl font-bold mb-3",
              style: {
                color: "var(--color-dark)"
              },
              children: "Differentiated Instruction Tools"
            }), l.jsx("p", {
              "data-component-start": "204:14:9707",
              "data-component-end": "206:18:9914",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "mb-4",
              className: "mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: "Easily create personalized learning materials for different student needs and ability levels with AI assistance."
            }), l.jsxs("div", {
              "data-component-start": "208:14:9944",
              "data-component-end": "242:20:11585",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex items-center space-x-2 mt-auto",
              className: "flex items-center space-x-2 mt-auto",
              children: [l.jsx(j.div, {
                "data-component-start": "209:16:10014",
                "data-component-end": "218:29:10457",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                initial: {
                  scale: 0
                },
                whileInView: {
                  scale: 1
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .3,
                  delay: .8
                },
                className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                style: {
                  backgroundColor: "var(--color-accent)"
                },
                children: "A"
              }), l.jsx(j.div, {
                "data-component-start": "219:16:10474",
                "data-component-end": "228:29:10931",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                initial: {
                  scale: 0
                },
                whileInView: {
                  scale: 1
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .3,
                  delay: .9
                },
                className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                style: {
                  backgroundColor: "var(--color-accent)",
                  opacity: .7
                },
                children: "B"
              }), l.jsx(j.div, {
                "data-component-start": "229:16:10948",
                "data-component-end": "238:29:11403",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                initial: {
                  scale: 0
                },
                whileInView: {
                  scale: 1
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .3,
                  delay: 1
                },
                className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs",
                style: {
                  backgroundColor: "var(--color-accent)",
                  opacity: .4
                },
                children: "C"
              }), l.jsx("p", {
                "data-component-start": "239:16:11420",
                "data-component-end": "241:20:11564",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-sm ml-2",
                className: "text-sm ml-2",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Tailored to each learning level"
              })]
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "247:10:11683",
          "data-component-end": "310:23:14733",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group flex flex-col md:flex-row gap-6",
          initial: {
            opacity: 0,
            x: 30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .4
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group flex flex-col md:flex-row gap-6",
          children: [l.jsxs("div", {
            "data-component-start": "255:12:12054",
            "data-component-end": "275:18:13124",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative shrink-0",
            className: "relative shrink-0",
            children: [l.jsx("div", {
              "data-component-start": "256:14:12104",
              "data-component-end": "265:20:12580",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-tertiary)",
                opacity: .1
              },
              children: l.jsx($g, {
                "data-component-start": "260:16:12359",
                "data-component-end": "264:18:12559",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "Lightbulb",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-tertiary)"
                }
              })
            }), l.jsx(j.div, {
              "data-component-start": "266:14:12595",
              "data-component-end": "274:27:13105",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              animate: {
                scale: 1
              },
              transition: {
                delay: .8,
                type: "spring",
                stiffness: 200
              },
              className: "absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md",
              style: {
                border: "2px solid var(--color-tertiary)"
              },
              children: l.jsx("span", {
                "data-component-start": "273:16:12990",
                "data-component-end": "273:103:13077",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-bold",
                className: "text-xs font-bold",
                style: {
                  color: "var(--color-tertiary)"
                },
                children: "4"
              })
            })]
          }), l.jsxs("div", {
            "data-component-start": "277:12:13150",
            "data-component-end": "309:18:14709",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex-1",
            className: "flex-1",
            children: [l.jsx("h3", {
              "data-component-start": "278:14:13189",
              "data-component-end": "280:19:13332",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "h3",
              "data-component-class": "text-xl font-bold mb-3",
              className: "text-xl font-bold mb-3",
              style: {
                color: "var(--color-dark)"
              },
              children: "AI Lesson Planning Assistant"
            }), l.jsx("p", {
              "data-component-start": "282:14:13362",
              "data-component-end": "284:18:13556",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "mb-4",
              className: "mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: "Generate creative, standards-aligned lesson plans, activities, and resources with our AI assistant."
            }), l.jsxs("div", {
              "data-component-start": "286:14:13586",
              "data-component-end": "308:20:14690",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "div",
              "data-component-class": "mt-auto bg-gray-50 p-3 rounded-lg relative overflow-hidden",
              className: "mt-auto bg-gray-50 p-3 rounded-lg relative overflow-hidden",
              children: [l.jsx(j.div, {
                "data-component-start": "287:16:13679",
                "data-component-end": "294:30:14049",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "absolute bottom-0 left-0 h-1",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "100%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: 2,
                  delay: .5
                },
                className: "absolute bottom-0 left-0 h-1",
                style: {
                  backgroundColor: "var(--color-tertiary)"
                }
              }), l.jsx("p", {
                "data-component-start": "295:16:14066",
                "data-component-end": "297:20:14218",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-sm italic",
                className: "text-sm italic",
                style: {
                  color: "var(--color-text)"
                },
                children: '"I need a lesson plan on photosynthesis..."'
              }), l.jsx(j.p, {
                "data-component-start": "298:16:14235",
                "data-component-end": "307:27:14669",
                "data-component-path": "src/components/ForTeachersSection.jsx",
                "data-component-file": "ForTeachersSection.jsx",
                "data-component-name": "motion.p",
                "data-component-class": "text-sm mt-2 font-medium",
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .5,
                  delay: 2
                },
                className: "text-sm mt-2 font-medium",
                style: {
                  color: "var(--color-tertiary)"
                },
                children: '"Creating an engaging, interactive lesson plan..."'
              })]
            })]
          })]
        })]
      }), l.jsxs(j.div, {
        "data-component-start": "314:8:14802",
        "data-component-end": "343:21:16431",
        "data-component-path": "src/components/ForTeachersSection.jsx",
        "data-component-file": "ForTeachersSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "mt-16 p-8 rounded-2xl relative overflow-hidden",
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-50px"
        },
        transition: {
          duration: .6,
          delay: .5
        },
        className: "mt-16 p-8 rounded-2xl relative overflow-hidden",
        style: {
          backgroundColor: "var(--color-background-secondary)"
        },
        children: [l.jsx("div", {
          "data-component-start": "322:10:15172",
          "data-component-end": "322:118:15280",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "div",
          "data-component-class": "absolute top-0 left-0 w-full h-2",
          className: "absolute top-0 left-0 w-full h-2",
          style: {
            backgroundColor: "var(--color-primary)"
          }
        }), l.jsxs("div", {
          "data-component-start": "323:10:15291",
          "data-component-end": "342:16:16409",
          "data-component-path": "src/components/ForTeachersSection.jsx",
          "data-component-file": "ForTeachersSection.jsx",
          "data-component-name": "div",
          "data-component-class": "flex flex-col md:flex-row gap-8 items-center",
          className: "flex flex-col md:flex-row gap-8 items-center",
          children: [l.jsx("div", {
            "data-component-start": "324:12:15366",
            "data-component-end": "330:18:15716",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            "data-component-class": "w-24 h-24 rounded-full overflow-hidden shrink-0",
            className: "w-24 h-24 rounded-full overflow-hidden shrink-0",
            children: l.jsx("img", {
              "data-component-start": "325:14:15446",
              "data-component-end": "329:16:15697",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "img",
              "data-component-src": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
              "data-component-class": "w-full h-full object-cover",
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
              alt: "Teacher testimonial",
              className: "w-full h-full object-cover"
            })
          }), l.jsxs("div", {
            "data-component-start": "331:12:15729",
            "data-component-end": "341:18:16392",
            "data-component-path": "src/components/ForTeachersSection.jsx",
            "data-component-file": "ForTeachersSection.jsx",
            "data-component-name": "div",
            children: [l.jsx("p", {
              "data-component-start": "332:14:15749",
              "data-component-end": "334:18:16078",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-lg italic mb-4",
              className: "text-lg italic mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: `"Zunno.ai has transformed my classroom. I save hours each week on grading and lesson planning, and my students are more engaged than ever. The personalized insights help me target instruction exactly where it's needed."`
            }), l.jsx("p", {
              "data-component-start": "335:14:16093",
              "data-component-end": "337:18:16206",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "font-bold",
              className: "font-bold",
              style: {
                color: "var(--color-dark)"
              },
              children: "Sarah Johnson"
            }), l.jsx("p", {
              "data-component-start": "338:14:16221",
              "data-component-end": "340:18:16373",
              "data-component-path": "src/components/ForTeachersSection.jsx",
              "data-component-file": "ForTeachersSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-sm",
              className: "text-sm",
              style: {
                color: "var(--color-text-light)"
              },
              children: "8th Grade Science Teacher, Lincoln Middle School"
            })]
          })]
        })]
      })]
    })
  }),
  I6 = () => l.jsx("section", {
    "data-component-start": "15:4:577",
    "data-component-end": "332:14:16758",
    "data-component-path": "src/components/ForParentsSection.jsx",
    "data-component-file": "ForParentsSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding",
    id: "parents",
    className: "section-padding",
    style: {
      backgroundColor: "var(--color-background)"
    },
    children: l.jsxs("div", {
      "data-component-start": "16:6:689",
      "data-component-end": "331:12:16743",
      "data-component-path": "src/components/ForParentsSection.jsx",
      "data-component-file": "ForParentsSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: [l.jsxs(j.div, {
        "data-component-start": "17:8:751",
        "data-component-end": "30:21:1437",
        "data-component-path": "src/components/ForParentsSection.jsx",
        "data-component-file": "ForParentsSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "text-center mb-16",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-100px"
        },
        transition: {
          duration: .6
        },
        className: "text-center mb-16",
        children: [l.jsxs("h2", {
          "data-component-start": "24:10:1006",
          "data-component-end": "26:15:1192",
          "data-component-path": "src/components/ForParentsSection.jsx",
          "data-component-file": "ForParentsSection.jsx",
          "data-component-name": "h2",
          "data-component-class": "text-3xl md:text-4xl font-bold mb-4",
          className: "text-3xl md:text-4xl font-bold mb-4",
          style: {
            color: "var(--color-dark)"
          },
          children: ["For ", l.jsx("span", {
            "data-component-start": "25:16:1114",
            "data-component-end": "25:78:1176",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "span",
            style: {
              color: "var(--color-primary)"
            },
            children: "Parents"
          })]
        }), l.jsx("p", {
          "data-component-start": "27:10:1203",
          "data-component-end": "29:14:1415",
          "data-component-path": "src/components/ForParentsSection.jsx",
          "data-component-file": "ForParentsSection.jsx",
          "data-component-name": "p",
          "data-component-class": "max-w-2xl mx-auto text-lg",
          className: "max-w-2xl mx-auto text-lg",
          style: {
            color: "var(--color-text-light)"
          },
          children: "Stay connected with your child's educational journey and provide meaningful support with Zunno.ai."
        })]
      }), l.jsxs("div", {
        "data-component-start": "32:8:1455",
        "data-component-end": "330:14:16730",
        "data-component-path": "src/components/ForParentsSection.jsx",
        "data-component-file": "ForParentsSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-2 gap-8",
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [l.jsxs(j.div, {
          "data-component-start": "34:10:1566",
          "data-component-end": "191:23:9687",
          "data-component-path": "src/components/ForParentsSection.jsx",
          "data-component-file": "ForParentsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card h-full",
          initial: {
            opacity: 0,
            x: -30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5
          },
          className: "card h-full",
          children: [l.jsxs("div", {
            "data-component-start": "41:12:1829",
            "data-component-end": "59:18:2670",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex items-start mb-6",
            className: "flex items-start mb-6",
            children: [l.jsx("div", {
              "data-component-start": "42:14:1883",
              "data-component-end": "50:20:2231",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center mr-4",
              className: "w-16 h-16 rounded-full flex items-center justify-center mr-4",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .1
              },
              children: l.jsx(wg, {
                "data-component-start": "46:16:2092",
                "data-component-end": "49:18:2210",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "Activity",
                size: 28,
                style: {
                  color: "var(--color-primary)"
                }
              })
            }), l.jsxs("div", {
              "data-component-start": "51:14:2246",
              "data-component-end": "58:20:2651",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              children: [l.jsx("h3", {
                "data-component-start": "52:16:2268",
                "data-component-end": "54:21:2414",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "h3",
                "data-component-class": "text-xl font-bold mb-2",
                className: "text-xl font-bold mb-2",
                style: {
                  color: "var(--color-dark)"
                },
                children: "Real-Time Progress Tracking"
              }), l.jsx("p", {
                "data-component-start": "55:16:2431",
                "data-component-end": "57:20:2630",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "p",
                style: {
                  color: "var(--color-text)"
                },
                children: "Monitor your child's academic journey with detailed insights into their strengths, challenges, and learning patterns."
              })]
            })]
          }), l.jsxs("div", {
            "data-component-start": "61:12:2696",
            "data-component-end": "139:18:6850",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "bg-white rounded-xl p-6 shadow-sm mb-6",
            className: "bg-white rounded-xl p-6 shadow-sm mb-6",
            children: [l.jsxs("div", {
              "data-component-start": "62:14:2767",
              "data-component-end": "67:20:3133",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex justify-between items-center mb-4",
              className: "flex justify-between items-center mb-4",
              children: [l.jsx("h4", {
                "data-component-start": "63:16:2840",
                "data-component-end": "63:108:2932",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "h4",
                "data-component-class": "font-bold",
                className: "font-bold",
                style: {
                  color: "var(--color-dark)"
                },
                children: "Weekly Progress Report"
              }), l.jsx("span", {
                "data-component-start": "64:16:2949",
                "data-component-end": "66:23:3112",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm px-3 py-1 rounded-full",
                className: "text-sm px-3 py-1 rounded-full",
                style: {
                  backgroundColor: "var(--color-primary)",
                  color: "white"
                },
                children: "New"
              })]
            }), l.jsxs("div", {
              "data-component-start": "70:14:3207",
              "data-component-end": "138:20:6831",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "space-y-4",
              className: "space-y-4",
              children: [l.jsxs("div", {
                "data-component-start": "71:16:3251",
                "data-component-end": "86:22:4114",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsxs("div", {
                  "data-component-start": "72:18:3275",
                  "data-component-end": "75:24:3570",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex justify-between mb-1",
                  className: "flex justify-between mb-1",
                  children: [l.jsx("span", {
                    "data-component-start": "73:20:3339",
                    "data-component-end": "73:115:3434",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "Mathematics"
                  }), l.jsx("span", {
                    "data-component-start": "74:20:3455",
                    "data-component-end": "74:110:3545",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-primary)"
                    },
                    children: "87%"
                  })]
                }), l.jsx("div", {
                  "data-component-start": "76:18:3589",
                  "data-component-end": "85:24:4091",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  children: l.jsx(j.div, {
                    "data-component-start": "77:20:3679",
                    "data-component-end": "84:34:4066",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "h-full rounded-full",
                    initial: {
                      width: "0%"
                    },
                    whileInView: {
                      width: "87%"
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: 1,
                      delay: .3
                    },
                    className: "h-full rounded-full",
                    style: {
                      backgroundColor: "var(--color-primary)"
                    }
                  })
                })]
              }), l.jsxs("div", {
                "data-component-start": "88:16:4148",
                "data-component-end": "103:22:5011",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsxs("div", {
                  "data-component-start": "89:18:4172",
                  "data-component-end": "92:24:4465",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex justify-between mb-1",
                  className: "flex justify-between mb-1",
                  children: [l.jsx("span", {
                    "data-component-start": "90:20:4236",
                    "data-component-end": "90:111:4327",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "Science"
                  }), l.jsx("span", {
                    "data-component-start": "91:20:4348",
                    "data-component-end": "91:112:4440",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-secondary)"
                    },
                    children: "92%"
                  })]
                }), l.jsx("div", {
                  "data-component-start": "93:18:4484",
                  "data-component-end": "102:24:4988",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  children: l.jsx(j.div, {
                    "data-component-start": "94:20:4574",
                    "data-component-end": "101:34:4963",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "h-full rounded-full",
                    initial: {
                      width: "0%"
                    },
                    whileInView: {
                      width: "92%"
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: 1,
                      delay: .4
                    },
                    className: "h-full rounded-full",
                    style: {
                      backgroundColor: "var(--color-secondary)"
                    }
                  })
                })]
              }), l.jsxs("div", {
                "data-component-start": "105:16:5045",
                "data-component-end": "120:22:5908",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsxs("div", {
                  "data-component-start": "106:18:5069",
                  "data-component-end": "109:24:5365",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex justify-between mb-1",
                  className: "flex justify-between mb-1",
                  children: [l.jsx("span", {
                    "data-component-start": "107:20:5133",
                    "data-component-end": "107:117:5230",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "Language Arts"
                  }), l.jsx("span", {
                    "data-component-start": "108:20:5251",
                    "data-component-end": "108:109:5340",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-accent)"
                    },
                    children: "78%"
                  })]
                }), l.jsx("div", {
                  "data-component-start": "110:18:5384",
                  "data-component-end": "119:24:5885",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  children: l.jsx(j.div, {
                    "data-component-start": "111:20:5474",
                    "data-component-end": "118:34:5860",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "h-full rounded-full",
                    initial: {
                      width: "0%"
                    },
                    whileInView: {
                      width: "78%"
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: 1,
                      delay: .5
                    },
                    className: "h-full rounded-full",
                    style: {
                      backgroundColor: "var(--color-accent)"
                    }
                  })
                })]
              }), l.jsxs("div", {
                "data-component-start": "122:16:5942",
                "data-component-end": "137:22:6810",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsxs("div", {
                  "data-component-start": "123:18:5966",
                  "data-component-end": "126:24:6265",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex justify-between mb-1",
                  className: "flex justify-between mb-1",
                  children: [l.jsx("span", {
                    "data-component-start": "124:20:6030",
                    "data-component-end": "124:118:6128",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "Social Studies"
                  }), l.jsx("span", {
                    "data-component-start": "125:20:6149",
                    "data-component-end": "125:111:6240",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-tertiary)"
                    },
                    children: "85%"
                  })]
                }), l.jsx("div", {
                  "data-component-start": "127:18:6284",
                  "data-component-end": "136:24:6787",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                  children: l.jsx(j.div, {
                    "data-component-start": "128:20:6374",
                    "data-component-end": "135:34:6762",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "h-full rounded-full",
                    initial: {
                      width: "0%"
                    },
                    whileInView: {
                      width: "85%"
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: 1,
                      delay: .6
                    },
                    className: "h-full rounded-full",
                    style: {
                      backgroundColor: "var(--color-tertiary)"
                    }
                  })
                })]
              })]
            })]
          }), l.jsxs("div", {
            "data-component-start": "141:12:6876",
            "data-component-end": "190:18:9663",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "bg-white rounded-xl p-6 shadow-sm",
            className: "bg-white rounded-xl p-6 shadow-sm",
            children: [l.jsx("h4", {
              "data-component-start": "142:14:6942",
              "data-component-end": "142:106:7034",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "h4",
              "data-component-class": "font-bold mb-4",
              className: "font-bold mb-4",
              style: {
                color: "var(--color-dark)"
              },
              children: "Learning Insights"
            }), l.jsxs("div", {
              "data-component-start": "144:14:7064",
              "data-component-end": "189:20:9644",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "space-y-3",
              className: "space-y-3",
              children: [l.jsxs(j.div, {
                "data-component-start": "145:16:7108",
                "data-component-end": "158:29:7915",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "flex items-start",
                initial: {
                  opacity: 0,
                  y: 10
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .7
                },
                className: "flex items-start",
                children: [l.jsx("div", {
                  "data-component-start": "152:18:7412",
                  "data-component-end": "154:24:7669",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  className: "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  style: {
                    backgroundColor: "var(--color-primary)",
                    opacity: .1
                  },
                  children: l.jsx(Zi, {
                    "data-component-start": "153:20:7584",
                    "data-component-end": "153:80:7644",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "Star",
                    size: 16,
                    style: {
                      color: "var(--color-primary)"
                    }
                  })
                }), l.jsxs("p", {
                  "data-component-start": "155:18:7688",
                  "data-component-end": "157:22:7885",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: [l.jsx("span", {
                    "data-component-start": "156:20:7771",
                    "data-component-end": "156:66:7817",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "font-medium",
                    className: "font-medium",
                    children: "Strength:"
                  }), " Excellent problem-solving skills in algebra."]
                })]
              }), l.jsxs(j.div, {
                "data-component-start": "160:16:7949",
                "data-component-end": "173:29:8765",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "flex items-start",
                initial: {
                  opacity: 0,
                  y: 10
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .8
                },
                className: "flex items-start",
                children: [l.jsx("div", {
                  "data-component-start": "167:18:8253",
                  "data-component-end": "169:24:8508",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  className: "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  style: {
                    backgroundColor: "var(--color-accent)",
                    opacity: .1
                  },
                  children: l.jsx(Zi, {
                    "data-component-start": "168:20:8424",
                    "data-component-end": "168:79:8483",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "Star",
                    size: 16,
                    style: {
                      color: "var(--color-accent)"
                    }
                  })
                }), l.jsxs("p", {
                  "data-component-start": "170:18:8527",
                  "data-component-end": "172:22:8735",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: [l.jsx("span", {
                    "data-component-start": "171:20:8610",
                    "data-component-end": "171:69:8659",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "font-medium",
                    className: "font-medium",
                    children: "Growth Area:"
                  }), " Could benefit from more practice with essay writing."]
                })]
              }), l.jsxs(j.div, {
                "data-component-start": "175:16:8799",
                "data-component-end": "188:29:9623",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "flex items-start",
                initial: {
                  opacity: 0,
                  y: 10
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .9
                },
                className: "flex items-start",
                children: [l.jsx("div", {
                  "data-component-start": "182:18:9103",
                  "data-component-end": "184:24:9364",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  className: "w-8 h-8 rounded-full flex items-center justify-center mr-3 shrink-0",
                  style: {
                    backgroundColor: "var(--color-secondary)",
                    opacity: .1
                  },
                  children: l.jsx(Zi, {
                    "data-component-start": "183:20:9277",
                    "data-component-end": "183:82:9339",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "Star",
                    size: 16,
                    style: {
                      color: "var(--color-secondary)"
                    }
                  })
                }), l.jsxs("p", {
                  "data-component-start": "185:18:9383",
                  "data-component-end": "187:22:9593",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: [l.jsx("span", {
                    "data-component-start": "186:20:9466",
                    "data-component-end": "186:72:9518",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "font-medium",
                    className: "font-medium",
                    children: "Learning Style:"
                  }), " Visual learner who excels with interactive content."]
                })]
              })]
            })]
          })]
        }), l.jsxs("div", {
          "data-component-start": "194:10:9762",
          "data-component-end": "329:16:16715",
          "data-component-path": "src/components/ForParentsSection.jsx",
          "data-component-file": "ForParentsSection.jsx",
          "data-component-name": "div",
          "data-component-class": "space-y-8",
          className: "space-y-8",
          children: [l.jsx(j.div, {
            "data-component-start": "196:12:9832",
            "data-component-end": "252:25:12737",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "motion.div",
            "data-component-class": "card group",
            initial: {
              opacity: 0,
              x: 30
            },
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: !0,
              margin: "-50px"
            },
            transition: {
              duration: .5,
              delay: .2
            },
            whileHover: {
              y: -5,
              transition: {
                duration: .3
              }
            },
            className: "card group",
            children: l.jsxs("div", {
              "data-component-start": "204:14:10187",
              "data-component-end": "251:20:12711",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex items-start",
              className: "flex items-start",
              children: [l.jsx("div", {
                "data-component-start": "205:16:10238",
                "data-component-end": "214:22:10734",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110",
                className: "w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110",
                style: {
                  backgroundColor: "var(--color-secondary)",
                  opacity: .1
                },
                children: l.jsx(Cg, {
                  "data-component-start": "209:18:10507",
                  "data-component-end": "213:20:10711",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "Bell",
                  "data-component-class": "transition-all duration-300 group-hover:scale-110",
                  size: 28,
                  className: "transition-all duration-300 group-hover:scale-110",
                  style: {
                    color: "var(--color-secondary)"
                  }
                })
              }), l.jsxs("div", {
                "data-component-start": "215:16:10751",
                "data-component-end": "250:22:12690",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsx("h3", {
                  "data-component-start": "216:18:10775",
                  "data-component-end": "218:23:10917",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "h3",
                  "data-component-class": "text-xl font-bold mb-3",
                  className: "text-xl font-bold mb-3",
                  style: {
                    color: "var(--color-dark)"
                  },
                  children: "Smart Notifications"
                }), l.jsx("p", {
                  "data-component-start": "219:18:10936",
                  "data-component-end": "221:22:11159",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "mb-4",
                  className: "mb-4",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Receive timely updates about assignments, tests, achievements, and areas where your child might need additional support."
                }), l.jsxs("div", {
                  "data-component-start": "223:18:11197",
                  "data-component-end": "249:24:12667",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "space-y-2 mt-4",
                  className: "space-y-2 mt-4",
                  children: [l.jsxs(j.div, {
                    "data-component-start": "224:20:11250",
                    "data-component-end": "235:33:11919",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "flex items-center p-3 rounded-lg bg-white shadow-sm",
                    initial: {
                      opacity: 0,
                      x: 20
                    },
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: .4,
                      delay: .5
                    },
                    className: "flex items-center p-3 rounded-lg bg-white shadow-sm",
                    children: [l.jsx("div", {
                      "data-component-start": "231:22:11617",
                      "data-component-end": "231:123:11718",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "div",
                      "data-component-class": "w-2 h-2 rounded-full mr-3",
                      className: "w-2 h-2 rounded-full mr-3",
                      style: {
                        backgroundColor: "var(--color-primary)"
                      }
                    }), l.jsx("p", {
                      "data-component-start": "232:22:11741",
                      "data-component-end": "234:26:11885",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "p",
                      "data-component-class": "text-sm",
                      className: "text-sm",
                      style: {
                        color: "var(--color-text)"
                      },
                      children: "Math quiz scheduled for Friday"
                    })]
                  }), l.jsxs(j.div, {
                    "data-component-start": "237:20:11961",
                    "data-component-end": "248:33:12642",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "flex items-center p-3 rounded-lg bg-white shadow-sm",
                    initial: {
                      opacity: 0,
                      x: 20
                    },
                    whileInView: {
                      opacity: 1,
                      x: 0
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: .4,
                      delay: .6
                    },
                    className: "flex items-center p-3 rounded-lg bg-white shadow-sm",
                    children: [l.jsx("div", {
                      "data-component-start": "244:22:12328",
                      "data-component-end": "244:125:12431",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "div",
                      "data-component-class": "w-2 h-2 rounded-full mr-3",
                      className: "w-2 h-2 rounded-full mr-3",
                      style: {
                        backgroundColor: "var(--color-secondary)"
                      }
                    }), l.jsx("p", {
                      "data-component-start": "245:22:12454",
                      "data-component-end": "247:26:12608",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "p",
                      "data-component-class": "text-sm",
                      className: "text-sm",
                      style: {
                        color: "var(--color-text)"
                      },
                      children: "Science project completed with 95% score"
                    })]
                  })]
                })]
              })]
            })
          }), l.jsx(j.div, {
            "data-component-start": "255:12:12793",
            "data-component-end": "328:25:16698",
            "data-component-path": "src/components/ForParentsSection.jsx",
            "data-component-file": "ForParentsSection.jsx",
            "data-component-name": "motion.div",
            "data-component-class": "card group",
            initial: {
              opacity: 0,
              x: 30
            },
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: !0,
              margin: "-50px"
            },
            transition: {
              duration: .5,
              delay: .3
            },
            whileHover: {
              y: -5,
              transition: {
                duration: .3
              }
            },
            className: "card group",
            children: l.jsxs("div", {
              "data-component-start": "263:14:13148",
              "data-component-end": "327:20:16672",
              "data-component-path": "src/components/ForParentsSection.jsx",
              "data-component-file": "ForParentsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex items-start",
              className: "flex items-start",
              children: [l.jsx("div", {
                "data-component-start": "264:16:13199",
                "data-component-end": "273:22:13698",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110",
                className: "w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110",
                style: {
                  backgroundColor: "var(--color-accent)",
                  opacity: .1
                },
                children: l.jsx(sS, {
                  "data-component-start": "268:18:13465",
                  "data-component-end": "272:20:13675",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "MessageSquare",
                  "data-component-class": "transition-all duration-300 group-hover:scale-110",
                  size: 28,
                  className: "transition-all duration-300 group-hover:scale-110",
                  style: {
                    color: "var(--color-accent)"
                  }
                })
              }), l.jsxs("div", {
                "data-component-start": "274:16:13715",
                "data-component-end": "326:22:16651",
                "data-component-path": "src/components/ForParentsSection.jsx",
                "data-component-file": "ForParentsSection.jsx",
                "data-component-name": "div",
                children: [l.jsx("h3", {
                  "data-component-start": "275:18:13739",
                  "data-component-end": "277:23:13890",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "h3",
                  "data-component-class": "text-xl font-bold mb-3",
                  className: "text-xl font-bold mb-3",
                  style: {
                    color: "var(--color-dark)"
                  },
                  children: "Direct Teacher Communication"
                }), l.jsx("p", {
                  "data-component-start": "278:18:13909",
                  "data-component-end": "280:22:14121",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "mb-4",
                  className: "mb-4",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Easily message teachers, schedule conferences, and stay informed about classroom activities and expectations."
                }), l.jsxs("div", {
                  "data-component-start": "282:18:14159",
                  "data-component-end": "325:24:16628",
                  "data-component-path": "src/components/ForParentsSection.jsx",
                  "data-component-file": "ForParentsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "bg-white p-4 rounded-lg shadow-sm mt-4",
                  className: "bg-white p-4 rounded-lg shadow-sm mt-4",
                  children: [l.jsxs("div", {
                    "data-component-start": "283:20:14236",
                    "data-component-end": "300:26:15353",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "flex justify-between items-center mb-3",
                    className: "flex justify-between items-center mb-3",
                    children: [l.jsxs("div", {
                      "data-component-start": "284:22:14315",
                      "data-component-end": "296:28:15098",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "div",
                      "data-component-class": "flex items-center",
                      className: "flex items-center",
                      children: [l.jsx("div", {
                        "data-component-start": "285:24:14375",
                        "data-component-end": "291:30:14779",
                        "data-component-path": "src/components/ForParentsSection.jsx",
                        "data-component-file": "ForParentsSection.jsx",
                        "data-component-name": "div",
                        "data-component-class": "w-8 h-8 rounded-full overflow-hidden mr-2",
                        className: "w-8 h-8 rounded-full overflow-hidden mr-2",
                        children: l.jsx("img", {
                          "data-component-start": "286:26:14461",
                          "data-component-end": "290:28:14748",
                          "data-component-path": "src/components/ForParentsSection.jsx",
                          "data-component-file": "ForParentsSection.jsx",
                          "data-component-name": "img",
                          "data-component-src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                          "data-component-class": "w-full h-full object-cover",
                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                          alt: "Teacher",
                          className: "w-full h-full object-cover"
                        })
                      }), l.jsxs("div", {
                        "data-component-start": "292:24:14804",
                        "data-component-end": "295:30:15069",
                        "data-component-path": "src/components/ForParentsSection.jsx",
                        "data-component-file": "ForParentsSection.jsx",
                        "data-component-name": "div",
                        children: [l.jsx("p", {
                          "data-component-start": "293:26:14836",
                          "data-component-end": "293:114:14924",
                          "data-component-path": "src/components/ForParentsSection.jsx",
                          "data-component-file": "ForParentsSection.jsx",
                          "data-component-name": "p",
                          "data-component-class": "text-sm font-medium",
                          className: "text-sm font-medium",
                          style: {
                            color: "var(--color-dark)"
                          },
                          children: "Mr. Thomas"
                        }), l.jsx("p", {
                          "data-component-start": "294:26:14951",
                          "data-component-end": "294:113:15038",
                          "data-component-path": "src/components/ForParentsSection.jsx",
                          "data-component-file": "ForParentsSection.jsx",
                          "data-component-name": "p",
                          "data-component-class": "text-xs",
                          className: "text-xs",
                          style: {
                            color: "var(--color-text-light)"
                          },
                          children: "Science Teacher"
                        })]
                      })]
                    }), l.jsx("span", {
                      "data-component-start": "297:22:15121",
                      "data-component-end": "299:29:15326",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "span",
                      "data-component-class": "text-xs px-2 py-1 rounded-full",
                      className: "text-xs px-2 py-1 rounded-full",
                      style: {
                        backgroundColor: "var(--color-accent)",
                        opacity: .1,
                        color: "var(--color-accent)"
                      },
                      children: "Online"
                    })]
                  }), l.jsx(j.div, {
                    "data-component-start": "301:20:15374",
                    "data-component-end": "310:33:15933",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "motion.div",
                    "data-component-class": "text-sm p-3 rounded-lg mb-2",
                    initial: {
                      opacity: 0
                    },
                    whileInView: {
                      opacity: 1
                    },
                    viewport: {
                      once: !0
                    },
                    transition: {
                      duration: .5,
                      delay: .7
                    },
                    className: "text-sm p-3 rounded-lg mb-2",
                    style: {
                      backgroundColor: "var(--color-background-secondary)",
                      color: "var(--color-text)"
                    },
                    children: "Alex did great on today's lab experiment. He showed excellent analytical skills!"
                  }), l.jsxs("div", {
                    "data-component-start": "311:20:15954",
                    "data-component-end": "324:26:16603",
                    "data-component-path": "src/components/ForParentsSection.jsx",
                    "data-component-file": "ForParentsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "flex",
                    className: "flex",
                    children: [l.jsx("input", {
                      "data-component-start": "312:22:15999",
                      "data-component-end": "317:24:16307",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "input",
                      "data-component-class": "flex-1 text-sm p-2 border rounded-l-lg focus:outline-none",
                      type: "text",
                      placeholder: "Type your message...",
                      className: "flex-1 text-sm p-2 border rounded-l-lg focus:outline-none",
                      style: {
                        borderColor: "var(--color-background-secondary)"
                      }
                    }), l.jsx("button", {
                      "data-component-start": "318:22:16330",
                      "data-component-end": "323:31:16576",
                      "data-component-path": "src/components/ForParentsSection.jsx",
                      "data-component-file": "ForParentsSection.jsx",
                      "data-component-name": "button",
                      "data-component-class": "px-3 py-2 rounded-r-lg text-white text-sm",
                      className: "px-3 py-2 rounded-r-lg text-white text-sm",
                      style: {
                        backgroundColor: "var(--color-accent)"
                      },
                      children: "Send"
                    })]
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    })
  }),
  tb = () => l.jsx("section", {
    "data-component-start": "15:4:619",
    "data-component-end": "423:14:21645",
    "data-component-path": "src/components/ForSchoolsSection.jsx",
    "data-component-file": "ForSchoolsSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding bg-white",
    id: "schools",
    className: "section-padding bg-white",
    children: l.jsxs("div", {
      "data-component-start": "16:6:685",
      "data-component-end": "422:12:21630",
      "data-component-path": "src/components/ForSchoolsSection.jsx",
      "data-component-file": "ForSchoolsSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: [l.jsxs(j.div, {
        "data-component-start": "17:8:747",
        "data-component-end": "30:21:1467",
        "data-component-path": "src/components/ForSchoolsSection.jsx",
        "data-component-file": "ForSchoolsSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "text-center mb-16",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-100px"
        },
        transition: {
          duration: .6
        },
        className: "text-center mb-16",
        children: [l.jsxs("h2", {
          "data-component-start": "24:10:1002",
          "data-component-end": "26:15:1188",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "h2",
          "data-component-class": "text-3xl md:text-4xl font-bold mb-4",
          className: "text-3xl md:text-4xl font-bold mb-4",
          style: {
            color: "var(--color-dark)"
          },
          children: ["For ", l.jsx("span", {
            "data-component-start": "25:16:1110",
            "data-component-end": "25:78:1172",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "span",
            style: {
              color: "var(--color-primary)"
            },
            children: "Schools"
          })]
        }), l.jsx("p", {
          "data-component-start": "27:10:1199",
          "data-component-end": "29:14:1445",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "p",
          "data-component-class": "max-w-2xl mx-auto text-lg",
          className: "max-w-2xl mx-auto text-lg",
          style: {
            color: "var(--color-text-light)"
          },
          children: "Transform your educational institution with data-driven insights, improved student outcomes, and a competitive learning environment."
        })]
      }), l.jsx(j.div, {
        "data-component-start": "33:8:1541",
        "data-component-end": "209:21:11276",
        "data-component-path": "src/components/ForSchoolsSection.jsx",
        "data-component-file": "ForSchoolsSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "card mb-12 overflow-hidden",
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-50px"
        },
        transition: {
          duration: .6
        },
        className: "card mb-12 overflow-hidden",
        children: l.jsxs("div", {
          "data-component-start": "40:10:1804",
          "data-component-end": "208:16:11254",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "div",
          "data-component-class": "flex flex-col lg:flex-row",
          className: "flex flex-col lg:flex-row",
          children: [l.jsxs("div", {
            "data-component-start": "41:12:1860",
            "data-component-end": "109:18:5624",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "lg:w-1/3 p-6",
            className: "lg:w-1/3 p-6",
            children: [l.jsxs("div", {
              "data-component-start": "42:14:1905",
              "data-component-end": "57:20:2567",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex items-start mb-6",
              className: "flex items-start mb-6",
              children: [l.jsx("div", {
                "data-component-start": "43:16:1961",
                "data-component-end": "51:22:2326",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center mr-4",
                className: "w-16 h-16 rounded-full flex items-center justify-center mr-4",
                style: {
                  backgroundColor: "var(--color-primary)",
                  opacity: .1
                },
                children: l.jsx(_g, {
                  "data-component-start": "47:18:2178",
                  "data-component-end": "50:20:2303",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "LineChart",
                  size: 28,
                  style: {
                    color: "var(--color-primary)"
                  }
                })
              }), l.jsx("div", {
                "data-component-start": "52:16:2343",
                "data-component-end": "56:22:2546",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                children: l.jsx("h3", {
                  "data-component-start": "53:18:2367",
                  "data-component-end": "55:23:2523",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "h3",
                  "data-component-class": "text-xl font-bold mb-2",
                  className: "text-xl font-bold mb-2",
                  style: {
                    color: "var(--color-dark)"
                  },
                  children: "Comprehensive Analytics Dashboard"
                })
              })]
            }), l.jsx("p", {
              "data-component-start": "59:14:2597",
              "data-component-end": "61:18:2832",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "mb-6",
              className: "mb-6",
              style: {
                color: "var(--color-text)"
              },
              children: "Gain valuable insights into school-wide performance metrics, student engagement, and learning outcomes with our powerful analytics platform."
            }), l.jsxs("ul", {
              "data-component-start": "63:14:2862",
              "data-component-end": "108:19:5605",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "ul",
              "data-component-class": "space-y-3",
              className: "space-y-3",
              children: [l.jsxs(j.li, {
                "data-component-start": "64:16:2905",
                "data-component-end": "77:28:3776",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.li",
                "data-component-class": "flex items-center",
                initial: {
                  opacity: 0,
                  x: -20
                },
                whileInView: {
                  opacity: 1,
                  x: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .3
                },
                className: "flex items-center",
                children: [l.jsx("div", {
                  "data-component-start": "71:18:3210",
                  "data-component-end": "75:24:3632",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  className: "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  },
                  children: l.jsx("svg", {
                    "data-component-start": "72:20:3359",
                    "data-component-end": "74:26:3607",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: l.jsx("path", {
                      "data-component-start": "73:22:3477",
                      "data-component-end": "73:125:3580",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "path",
                      d: "M20 6L9 17L4 12",
                      stroke: "white",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  })
                }), l.jsx("span", {
                  "data-component-start": "76:18:3651",
                  "data-component-end": "76:114:3747",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "span",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Track performance across grades and subjects"
                })]
              }), l.jsxs(j.li, {
                "data-component-start": "79:16:3810",
                "data-component-end": "92:28:4682",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.li",
                "data-component-class": "flex items-center",
                initial: {
                  opacity: 0,
                  x: -20
                },
                whileInView: {
                  opacity: 1,
                  x: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .4
                },
                className: "flex items-center",
                children: [l.jsx("div", {
                  "data-component-start": "86:18:4115",
                  "data-component-end": "90:24:4537",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  className: "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  },
                  children: l.jsx("svg", {
                    "data-component-start": "87:20:4264",
                    "data-component-end": "89:26:4512",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: l.jsx("path", {
                      "data-component-start": "88:22:4382",
                      "data-component-end": "88:125:4485",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "path",
                      d: "M20 6L9 17L4 12",
                      stroke: "white",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  })
                }), l.jsx("span", {
                  "data-component-start": "91:18:4556",
                  "data-component-end": "91:115:4653",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "span",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Identify learning gaps and intervention needs"
                })]
              }), l.jsxs(j.li, {
                "data-component-start": "94:16:4716",
                "data-component-end": "107:28:5585",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.li",
                "data-component-class": "flex items-center",
                initial: {
                  opacity: 0,
                  x: -20
                },
                whileInView: {
                  opacity: 1,
                  x: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .5
                },
                className: "flex items-center",
                children: [l.jsx("div", {
                  "data-component-start": "101:18:5021",
                  "data-component-end": "105:24:5443",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  className: "w-5 h-5 rounded-full mr-3 flex items-center justify-center",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  },
                  children: l.jsx("svg", {
                    "data-component-start": "102:20:5170",
                    "data-component-end": "104:26:5418",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: l.jsx("path", {
                      "data-component-start": "103:22:5288",
                      "data-component-end": "103:125:5391",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "path",
                      d: "M20 6L9 17L4 12",
                      stroke: "white",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    })
                  })
                }), l.jsx("span", {
                  "data-component-start": "106:18:5462",
                  "data-component-end": "106:112:5556",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "span",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Generate detailed reports for stakeholders"
                })]
              })]
            })]
          }), l.jsxs("div", {
            "data-component-start": "111:12:5650",
            "data-component-end": "207:18:11237",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "lg:w-2/3 bg-gray-50 p-6 rounded-lg",
            className: "lg:w-2/3 bg-gray-50 p-6 rounded-lg",
            children: [l.jsx("h4", {
              "data-component-start": "112:14:5717",
              "data-component-end": "112:117:5820",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "h4",
              "data-component-class": "font-bold mb-4",
              className: "font-bold mb-4",
              style: {
                color: "var(--color-dark)"
              },
              children: "School Performance Dashboard"
            }), l.jsxs("div", {
              "data-component-start": "114:14:5850",
              "data-component-end": "159:20:8582",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "grid grid-cols-3 gap-4 mb-6",
              className: "grid grid-cols-3 gap-4 mb-6",
              children: [l.jsxs(j.div, {
                "data-component-start": "115:16:5912",
                "data-component-end": "128:29:6770",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "bg-white p-4 rounded-lg shadow-sm text-center",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .3
                },
                className: "bg-white p-4 rounded-lg shadow-sm text-center",
                children: [l.jsx("p", {
                  "data-component-start": "122:18:6245",
                  "data-component-end": "122:108:6335",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm mb-1",
                  className: "text-sm mb-1",
                  style: {
                    color: "var(--color-text-light)"
                  },
                  children: "Average Score"
                }), l.jsx("p", {
                  "data-component-start": "123:18:6354",
                  "data-component-end": "123:101:6437",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-2xl font-bold",
                  className: "text-2xl font-bold",
                  style: {
                    color: "var(--color-primary)"
                  },
                  children: "87%"
                }), l.jsxs("div", {
                  "data-component-start": "124:18:6456",
                  "data-component-end": "127:24:6740",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex items-center justify-center mt-1",
                  className: "flex items-center justify-center mt-1",
                  children: [l.jsx(Os, {
                    "data-component-start": "125:20:6532",
                    "data-component-end": "125:103:6615",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "TrendingUp",
                    "data-component-class": "mr-1",
                    size: 14,
                    className: "mr-1",
                    style: {
                      color: "var(--color-primary)"
                    }
                  }), l.jsx("span", {
                    "data-component-start": "126:20:6636",
                    "data-component-end": "126:99:6715",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-xs",
                    className: "text-xs",
                    style: {
                      color: "var(--color-primary)"
                    },
                    children: "+12%"
                  })]
                })]
              }), l.jsxs(j.div, {
                "data-component-start": "130:16:6804",
                "data-component-end": "143:29:7670",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "bg-white p-4 rounded-lg shadow-sm text-center",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .4
                },
                className: "bg-white p-4 rounded-lg shadow-sm text-center",
                children: [l.jsx("p", {
                  "data-component-start": "137:18:7137",
                  "data-component-end": "137:110:7229",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm mb-1",
                  className: "text-sm mb-1",
                  style: {
                    color: "var(--color-text-light)"
                  },
                  children: "Engagement Rate"
                }), l.jsx("p", {
                  "data-component-start": "138:18:7248",
                  "data-component-end": "138:103:7333",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-2xl font-bold",
                  className: "text-2xl font-bold",
                  style: {
                    color: "var(--color-secondary)"
                  },
                  children: "94%"
                }), l.jsxs("div", {
                  "data-component-start": "139:18:7352",
                  "data-component-end": "142:24:7640",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex items-center justify-center mt-1",
                  className: "flex items-center justify-center mt-1",
                  children: [l.jsx(Os, {
                    "data-component-start": "140:20:7428",
                    "data-component-end": "140:105:7513",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "TrendingUp",
                    "data-component-class": "mr-1",
                    size: 14,
                    className: "mr-1",
                    style: {
                      color: "var(--color-secondary)"
                    }
                  }), l.jsx("span", {
                    "data-component-start": "141:20:7534",
                    "data-component-end": "141:101:7615",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-xs",
                    className: "text-xs",
                    style: {
                      color: "var(--color-secondary)"
                    },
                    children: "+18%"
                  })]
                })]
              }), l.jsxs(j.div, {
                "data-component-start": "145:16:7704",
                "data-component-end": "158:29:8561",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "bg-white p-4 rounded-lg shadow-sm text-center",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .4,
                  delay: .5
                },
                className: "bg-white p-4 rounded-lg shadow-sm text-center",
                children: [l.jsx("p", {
                  "data-component-start": "152:18:8037",
                  "data-component-end": "152:110:8129",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm mb-1",
                  className: "text-sm mb-1",
                  style: {
                    color: "var(--color-text-light)"
                  },
                  children: "Completion Rate"
                }), l.jsx("p", {
                  "data-component-start": "153:18:8148",
                  "data-component-end": "153:100:8230",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-2xl font-bold",
                  className: "text-2xl font-bold",
                  style: {
                    color: "var(--color-accent)"
                  },
                  children: "91%"
                }), l.jsxs("div", {
                  "data-component-start": "154:18:8249",
                  "data-component-end": "157:24:8531",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex items-center justify-center mt-1",
                  className: "flex items-center justify-center mt-1",
                  children: [l.jsx(Os, {
                    "data-component-start": "155:20:8325",
                    "data-component-end": "155:102:8407",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "TrendingUp",
                    "data-component-class": "mr-1",
                    size: 14,
                    className: "mr-1",
                    style: {
                      color: "var(--color-accent)"
                    }
                  }), l.jsx("span", {
                    "data-component-start": "156:20:8428",
                    "data-component-end": "156:98:8506",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-xs",
                    className: "text-xs",
                    style: {
                      color: "var(--color-accent)"
                    },
                    children: "+15%"
                  })]
                })]
              })]
            }), l.jsxs("div", {
              "data-component-start": "162:14:8654",
              "data-component-end": "206:20:11218",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "h-48 relative",
              className: "h-48 relative",
              children: [l.jsx("div", {
                "data-component-start": "163:16:8702",
                "data-component-end": "163:88:8774",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "absolute bottom-0 left-0 w-full h-px bg-gray-300",
                className: "absolute bottom-0 left-0 w-full h-px bg-gray-300"
              }), l.jsx("div", {
                "data-component-start": "164:16:8791",
                "data-component-end": "164:85:8860",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "absolute left-0 top-0 h-full w-px bg-gray-300",
                className: "absolute left-0 top-0 h-full w-px bg-gray-300"
              }), l.jsxs("svg", {
                "data-component-start": "167:16:8930",
                "data-component-end": "193:22:10428",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "svg",
                "data-component-class": "w-full h-full",
                className: "w-full h-full",
                viewBox: "0 0 400 150",
                preserveAspectRatio: "none",
                children: [l.jsx(j.path, {
                  "data-component-start": "168:18:9029",
                  "data-component-end": "179:20:9695",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "motion.path",
                  initial: {
                    pathLength: 0,
                    opacity: 0
                  },
                  whileInView: {
                    pathLength: 1,
                    opacity: 1
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: 1.5,
                    delay: .5
                  },
                  d: "M0,120 C20,100 40,110 60,90 C80,70 100,80 120,60 C140,40 160,50 180,30 C200,20 220,40 240,30 C260,20 280,10 300,20 C320,30 340,10 360,5 C380,0 400,10 400,10",
                  fill: "none",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  style: {
                    stroke: "var(--color-primary)"
                  }
                }), l.jsx(j.path, {
                  "data-component-start": "181:18:9733",
                  "data-component-end": "192:20:10405",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "motion.path",
                  initial: {
                    pathLength: 0,
                    opacity: 0
                  },
                  whileInView: {
                    pathLength: 1,
                    opacity: 1
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: 1.5,
                    delay: .7
                  },
                  d: "M0,140 C20,130 40,120 60,110 C80,100 100,90 120,85 C140,80 160,70 180,60 C200,50 220,55 240,50 C260,45 280,40 300,35 C320,30 340,25 360,30 C380,35 400,25 400,25",
                  fill: "none",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  style: {
                    stroke: "var(--color-secondary)"
                  }
                })]
              }), l.jsxs("div", {
                "data-component-start": "196:16:10493",
                "data-component-end": "205:22:11197",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "absolute top-2 right-2 flex items-center space-x-4",
                className: "absolute top-2 right-2 flex items-center space-x-4",
                children: [l.jsxs("div", {
                  "data-component-start": "197:18:10580",
                  "data-component-end": "200:24:10865",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex items-center",
                  className: "flex items-center",
                  children: [l.jsx("div", {
                    "data-component-start": "198:20:10636",
                    "data-component-end": "198:121:10737",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "w-3 h-3 mr-1 rounded-full",
                    className: "w-3 h-3 mr-1 rounded-full",
                    style: {
                      backgroundColor: "var(--color-primary)"
                    }
                  }), l.jsx("span", {
                    "data-component-start": "199:20:10758",
                    "data-component-end": "199:102:10840",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-xs",
                    className: "text-xs",
                    style: {
                      color: "var(--color-text-light)"
                    },
                    children: "Math"
                  })]
                }), l.jsxs("div", {
                  "data-component-start": "201:18:10884",
                  "data-component-end": "204:24:11174",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "flex items-center",
                  className: "flex items-center",
                  children: [l.jsx("div", {
                    "data-component-start": "202:20:10940",
                    "data-component-end": "202:123:11043",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "w-3 h-3 mr-1 rounded-full",
                    className: "w-3 h-3 mr-1 rounded-full",
                    style: {
                      backgroundColor: "var(--color-secondary)"
                    }
                  }), l.jsx("span", {
                    "data-component-start": "203:20:11064",
                    "data-component-end": "203:105:11149",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-xs",
                    className: "text-xs",
                    style: {
                      color: "var(--color-text-light)"
                    },
                    children: "Science"
                  })]
                })]
              })]
            })]
          })]
        })
      }), l.jsxs("div", {
        "data-component-start": "212:8:11330",
        "data-component-end": "389:14:19906",
        "data-component-path": "src/components/ForSchoolsSection.jsx",
        "data-component-file": "ForSchoolsSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-3 gap-8",
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: [l.jsxs(j.div, {
          "data-component-start": "214:10:11424",
          "data-component-end": "278:23:14777",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .2
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "222:12:11763",
            "data-component-end": "233:18:12302",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: l.jsx("div", {
              "data-component-start": "223:14:11809",
              "data-component-end": "232:20:12283",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .1
              },
              children: l.jsx(eS, {
                "data-component-start": "227:16:12065",
                "data-component-end": "231:18:12262",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "Medal",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-secondary)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "235:12:12328",
            "data-component-end": "237:17:12471",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Competitive Learning Environment"
          }), l.jsx("p", {
            "data-component-start": "239:12:12497",
            "data-component-end": "241:16:12703",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Foster healthy competition with inter-class and inter-school challenges, leaderboards, and achievement recognition."
          }), l.jsx("div", {
            "data-component-start": "243:12:12729",
            "data-component-end": "277:18:14753",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto",
            className: "mt-auto",
            children: l.jsxs("div", {
              "data-component-start": "244:14:12769",
              "data-component-end": "276:20:14734",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "bg-gray-50 rounded-lg p-4",
              className: "bg-gray-50 rounded-lg p-4",
              children: [l.jsx("h5", {
                "data-component-start": "245:16:12829",
                "data-component-end": "245:123:12936",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "h5",
                "data-component-class": "font-medium mb-3 text-sm",
                className: "font-medium mb-3 text-sm",
                style: {
                  color: "var(--color-dark)"
                },
                children: "Top Performing Classes"
              }), l.jsxs("div", {
                "data-component-start": "247:16:12970",
                "data-component-end": "275:22:14713",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "div",
                "data-component-class": "space-y-3",
                className: "space-y-3",
                children: [l.jsxs(j.div, {
                  "data-component-start": "248:18:13016",
                  "data-component-end": "260:31:13837",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "flex items-center justify-between",
                  initial: {
                    width: "0%"
                  },
                  whileInView: {
                    width: "100%"
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: .5,
                    delay: .3
                  },
                  className: "flex items-center justify-between",
                  children: [l.jsxs("div", {
                    "data-component-start": "255:20:13342",
                    "data-component-end": "258:26:13686",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "flex items-center",
                    className: "flex items-center",
                    children: [l.jsx("div", {
                      "data-component-start": "256:22:13400",
                      "data-component-end": "256:178:13556",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "div",
                      "data-component-class": "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                      className: "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                      style: {
                        backgroundColor: "var(--color-secondary)"
                      },
                      children: "1"
                    }), l.jsx("span", {
                      "data-component-start": "257:22:13579",
                      "data-component-end": "257:102:13659",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "span",
                      "data-component-class": "text-sm",
                      className: "text-sm",
                      style: {
                        color: "var(--color-text)"
                      },
                      children: "Class 8A"
                    })]
                  }), l.jsx("span", {
                    "data-component-start": "259:20:13707",
                    "data-component-end": "259:118:13805",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-secondary)"
                    },
                    children: "2,450 pts"
                  })]
                }), l.jsxs(j.div, {
                  "data-component-start": "262:18:13875",
                  "data-component-end": "274:31:14690",
                  "data-component-path": "src/components/ForSchoolsSection.jsx",
                  "data-component-file": "ForSchoolsSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "flex items-center justify-between",
                  initial: {
                    width: "0%"
                  },
                  whileInView: {
                    width: "100%"
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: .5,
                    delay: .4
                  },
                  className: "flex items-center justify-between",
                  children: [l.jsxs("div", {
                    "data-component-start": "269:20:14201",
                    "data-component-end": "272:26:14542",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "flex items-center",
                    className: "flex items-center",
                    children: [l.jsx("div", {
                      "data-component-start": "270:22:14259",
                      "data-component-end": "270:175:14412",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "div",
                      "data-component-class": "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                      className: "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                      style: {
                        backgroundColor: "var(--color-accent)"
                      },
                      children: "2"
                    }), l.jsx("span", {
                      "data-component-start": "271:22:14435",
                      "data-component-end": "271:102:14515",
                      "data-component-path": "src/components/ForSchoolsSection.jsx",
                      "data-component-file": "ForSchoolsSection.jsx",
                      "data-component-name": "span",
                      "data-component-class": "text-sm",
                      className: "text-sm",
                      style: {
                        color: "var(--color-text)"
                      },
                      children: "Class 7C"
                    })]
                  }), l.jsx("span", {
                    "data-component-start": "273:20:14563",
                    "data-component-end": "273:115:14658",
                    "data-component-path": "src/components/ForSchoolsSection.jsx",
                    "data-component-file": "ForSchoolsSection.jsx",
                    "data-component-name": "span",
                    "data-component-class": "text-sm font-medium",
                    className: "text-sm font-medium",
                    style: {
                      color: "var(--color-accent)"
                    },
                    children: "2,310 pts"
                  })]
                })]
              })]
            })
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "281:10:14827",
          "data-component-end": "333:23:17306",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .3
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "289:12:15166",
            "data-component-end": "300:18:15704",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: l.jsx("div", {
              "data-component-start": "290:14:15212",
              "data-component-end": "299:20:15685",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .1
              },
              children: l.jsx(Os, {
                "data-component-start": "294:16:15465",
                "data-component-end": "298:18:15664",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "TrendingUp",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-accent)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "302:12:15730",
            "data-component-end": "304:17:15873",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Performance Improvement Tracking"
          }), l.jsx("p", {
            "data-component-start": "306:12:15899",
            "data-component-end": "308:16:16113",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Monitor progress over time with detailed analytics that highlight areas of improvement and success across your institution."
          }), l.jsxs("div", {
            "data-component-start": "310:12:16139",
            "data-component-end": "332:18:17282",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto",
            className: "mt-auto",
            children: [l.jsxs("div", {
              "data-component-start": "311:14:16179",
              "data-component-end": "314:20:16482",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex items-center justify-between mb-2",
              className: "flex items-center justify-between mb-2",
              children: [l.jsx("span", {
                "data-component-start": "312:16:16252",
                "data-component-end": "312:120:16356",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm",
                className: "text-sm",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Year-over-Year Improvement"
              }), l.jsx("span", {
                "data-component-start": "313:16:16373",
                "data-component-end": "313:104:16461",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm font-bold",
                className: "text-sm font-bold",
                style: {
                  color: "var(--color-accent)"
                },
                children: "+23%"
              })]
            }), l.jsx(j.div, {
              "data-component-start": "315:14:16497",
              "data-component-end": "331:27:17263",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "h-2 rounded-full overflow-hidden",
              initial: {
                width: "0%"
              },
              whileInView: {
                width: "100%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: 1.5,
                delay: .5
              },
              className: "h-2 rounded-full overflow-hidden",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .2
              },
              children: l.jsx(j.div, {
                "data-component-start": "323:16:16875",
                "data-component-end": "330:30:17235",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-full rounded-full",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "73%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: 1.2,
                  delay: .8
                },
                className: "h-full rounded-full",
                style: {
                  backgroundColor: "var(--color-accent)"
                }
              })
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "336:10:17356",
          "data-component-end": "388:23:19891",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .4
          },
          whileHover: {
            y: -5,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "344:12:17695",
            "data-component-end": "355:18:18233",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative mb-6",
            className: "relative mb-6",
            children: l.jsx("div", {
              "data-component-start": "345:14:17741",
              "data-component-end": "354:20:18214",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              className: "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
              style: {
                backgroundColor: "var(--color-tertiary)",
                opacity: .1
              },
              children: l.jsx(iS, {
                "data-component-start": "349:16:17996",
                "data-component-end": "353:18:18193",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "School",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-tertiary)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "357:12:18259",
            "data-component-end": "359:17:18393",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Curriculum Optimization"
          }), l.jsx("p", {
            "data-component-start": "361:12:18419",
            "data-component-end": "363:16:18641",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Use data-driven insights to refine your curriculum, focusing resources where they'll have the greatest impact on learning outcomes."
          }), l.jsxs("div", {
            "data-component-start": "365:12:18667",
            "data-component-end": "387:18:19867",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto grid grid-cols-2 gap-2",
            className: "mt-auto grid grid-cols-2 gap-2",
            children: [l.jsxs(j.div, {
              "data-component-start": "366:14:18730",
              "data-component-end": "375:27:19273",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "bg-gray-50 p-3 rounded-lg text-center",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .6
              },
              className: "bg-gray-50 p-3 rounded-lg text-center",
              children: [l.jsx("p", {
                "data-component-start": "373:16:19050",
                "data-component-end": "373:111:19145",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-xs mb-1",
                className: "text-xs mb-1",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Content Engagement"
              }), l.jsx("p", {
                "data-component-start": "374:16:19162",
                "data-component-end": "374:99:19245",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-lg font-bold",
                className: "text-lg font-bold",
                style: {
                  color: "var(--color-tertiary)"
                },
                children: "92%"
              })]
            }), l.jsxs(j.div, {
              "data-component-start": "377:14:19303",
              "data-component-end": "386:27:19848",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "bg-gray-50 p-3 rounded-lg text-center",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .7
              },
              className: "bg-gray-50 p-3 rounded-lg text-center",
              children: [l.jsx("p", {
                "data-component-start": "384:16:19623",
                "data-component-end": "384:112:19719",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-xs mb-1",
                className: "text-xs mb-1",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Learning Efficiency"
              }), l.jsx("p", {
                "data-component-start": "385:16:19736",
                "data-component-end": "385:100:19820",
                "data-component-path": "src/components/ForSchoolsSection.jsx",
                "data-component-file": "ForSchoolsSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-lg font-bold",
                className: "text-lg font-bold",
                style: {
                  color: "var(--color-tertiary)"
                },
                children: "+35%"
              })]
            })]
          })]
        })]
      }), l.jsxs(j.div, {
        "data-component-start": "392:8:19959",
        "data-component-end": "421:21:21617",
        "data-component-path": "src/components/ForSchoolsSection.jsx",
        "data-component-file": "ForSchoolsSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "mt-16 p-8 rounded-2xl relative overflow-hidden",
        initial: {
          opacity: 0,
          y: 30
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-50px"
        },
        transition: {
          duration: .6,
          delay: .5
        },
        className: "mt-16 p-8 rounded-2xl relative overflow-hidden",
        style: {
          backgroundColor: "var(--color-background-secondary)"
        },
        children: [l.jsx("div", {
          "data-component-start": "400:10:20329",
          "data-component-end": "400:118:20437",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "div",
          "data-component-class": "absolute top-0 left-0 w-full h-2",
          className: "absolute top-0 left-0 w-full h-2",
          style: {
            backgroundColor: "var(--color-primary)"
          }
        }), l.jsxs("div", {
          "data-component-start": "401:10:20448",
          "data-component-end": "420:16:21595",
          "data-component-path": "src/components/ForSchoolsSection.jsx",
          "data-component-file": "ForSchoolsSection.jsx",
          "data-component-name": "div",
          "data-component-class": "flex flex-col md:flex-row gap-8 items-center",
          className: "flex flex-col md:flex-row gap-8 items-center",
          children: [l.jsx("div", {
            "data-component-start": "402:12:20523",
            "data-component-end": "408:18:20875",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            "data-component-class": "w-24 h-24 rounded-full overflow-hidden shrink-0",
            className: "w-24 h-24 rounded-full overflow-hidden shrink-0",
            children: l.jsx("img", {
              "data-component-start": "403:14:20603",
              "data-component-end": "407:16:20856",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "img",
              "data-component-src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
              "data-component-class": "w-full h-full object-cover",
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
              alt: "Principal testimonial",
              className: "w-full h-full object-cover"
            })
          }), l.jsxs("div", {
            "data-component-start": "409:12:20888",
            "data-component-end": "419:18:21578",
            "data-component-path": "src/components/ForSchoolsSection.jsx",
            "data-component-file": "ForSchoolsSection.jsx",
            "data-component-name": "div",
            children: [l.jsx("p", {
              "data-component-start": "410:14:20908",
              "data-component-end": "412:18:21282",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-lg italic mb-4",
              className: "text-lg italic mb-4",
              style: {
                color: "var(--color-text)"
              },
              children: `"Implementing Zunno.ai across our school has transformed our educational approach. We've seen a 23% improvement in standardized test scores and unprecedented levels of student engagement. The data insights have been invaluable for our teachers and administrators."`
            }), l.jsx("p", {
              "data-component-start": "413:14:21297",
              "data-component-end": "415:18:21413",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "font-bold",
              className: "font-bold",
              style: {
                color: "var(--color-dark)"
              },
              children: "Dr. Michael Chen"
            }), l.jsx("p", {
              "data-component-start": "416:14:21428",
              "data-component-end": "418:18:21559",
              "data-component-path": "src/components/ForSchoolsSection.jsx",
              "data-component-file": "ForSchoolsSection.jsx",
              "data-component-name": "p",
              "data-component-class": "text-sm",
              className: "text-sm",
              style: {
                color: "var(--color-text-light)"
              },
              children: "Principal, Westlake Academy"
            })]
          })]
        })]
      })]
    })
  }),
  eb = () => l.jsx("section", {
    "data-component-start": "15:4:566",
    "data-component-end": "391:14:19022",
    "data-component-path": "src/components/FeatureSection.jsx",
    "data-component-file": "FeatureSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding",
    id: "features",
    className: "section-padding",
    style: {
      backgroundColor: "var(--color-background)"
    },
    children: l.jsxs("div", {
      "data-component-start": "16:6:679",
      "data-component-end": "390:12:19007",
      "data-component-path": "src/components/FeatureSection.jsx",
      "data-component-file": "FeatureSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: [l.jsxs(j.div, {
        "data-component-start": "17:8:741",
        "data-component-end": "30:21:1419",
        "data-component-path": "src/components/FeatureSection.jsx",
        "data-component-file": "FeatureSection.jsx",
        "data-component-name": "motion.div",
        "data-component-class": "text-center mb-16",
        initial: {
          opacity: 0,
          y: 20
        },
        whileInView: {
          opacity: 1,
          y: 0
        },
        viewport: {
          once: !0,
          margin: "-100px"
        },
        transition: {
          duration: .6
        },
        className: "text-center mb-16",
        children: [l.jsxs("h2", {
          "data-component-start": "24:10:996",
          "data-component-end": "26:15:1183",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "h2",
          "data-component-class": "text-3xl md:text-4xl font-bold mb-4",
          className: "text-3xl md:text-4xl font-bold mb-4",
          style: {
            color: "var(--color-dark)"
          },
          children: ["Key ", l.jsx("span", {
            "data-component-start": "25:16:1104",
            "data-component-end": "25:79:1167",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "span",
            style: {
              color: "var(--color-primary)"
            },
            children: "Features"
          })]
        }), l.jsx("p", {
          "data-component-start": "27:10:1194",
          "data-component-end": "29:14:1397",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "p",
          "data-component-class": "max-w-2xl mx-auto text-lg",
          className: "max-w-2xl mx-auto text-lg",
          style: {
            color: "var(--color-text-light)"
          },
          children: "Discover how Zunno.ai is revolutionizing K-12 education with these powerful capabilities."
        })]
      }), l.jsxs("div", {
        "data-component-start": "32:8:1437",
        "data-component-end": "389:14:18994",
        "data-component-path": "src/components/FeatureSection.jsx",
        "data-component-file": "FeatureSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: [l.jsxs(j.div, {
          "data-component-start": "34:10:1551",
          "data-component-end": "105:23:5212",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .1
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "42:12:1890",
            "data-component-end": "55:18:2486",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mb-6",
            className: "mb-6",
            children: l.jsx(j.div, {
              "data-component-start": "43:14:1927",
              "data-component-end": "54:27:2467",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center",
              whileHover: {
                rotate: 15
              },
              transition: {
                type: "spring",
                stiffness: 300
              },
              className: "w-16 h-16 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .1
              },
              children: l.jsx(bS, {
                "data-component-start": "49:16:2246",
                "data-component-end": "53:18:2439",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "Zap",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-primary)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "57:12:2512",
            "data-component-end": "59:17:2649",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "AI-Powered Personalization"
          }), l.jsx("p", {
            "data-component-start": "61:12:2675",
            "data-component-end": "63:16:2890",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Our advanced AI algorithms analyze learning patterns to create truly personalized educational experiences for every student."
          }), l.jsxs("ul", {
            "data-component-start": "65:12:2916",
            "data-component-end": "104:17:5188",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "ul",
            "data-component-class": "space-y-2 mt-auto",
            className: "space-y-2 mt-auto",
            children: [l.jsxs(j.li, {
              "data-component-start": "66:14:2965",
              "data-component-end": "77:26:3675",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.li",
              "data-component-class": "flex items-center",
              initial: {
                opacity: 0,
                x: -10
              },
              whileInView: {
                opacity: 1,
                x: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .4
              },
              className: "flex items-center",
              children: [l.jsx("div", {
                "data-component-start": "73:16:3256",
                "data-component-end": "75:22:3536",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                className: "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                style: {
                  backgroundColor: "var(--color-primary)",
                  opacity: .1
                },
                children: l.jsx("div", {
                  "data-component-start": "74:18:3417",
                  "data-component-end": "74:114:3513",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-2 h-2 rounded-full",
                  className: "w-2 h-2 rounded-full",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  }
                })
              }), l.jsx("span", {
                "data-component-start": "76:16:3553",
                "data-component-end": "76:111:3648",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm",
                className: "text-sm",
                style: {
                  color: "var(--color-text)"
                },
                children: "Adaptive learning paths"
              })]
            }), l.jsxs(j.li, {
              "data-component-start": "79:14:3705",
              "data-component-end": "90:26:4418",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.li",
              "data-component-class": "flex items-center",
              initial: {
                opacity: 0,
                x: -10
              },
              whileInView: {
                opacity: 1,
                x: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .5
              },
              className: "flex items-center",
              children: [l.jsx("div", {
                "data-component-start": "86:16:3996",
                "data-component-end": "88:22:4276",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                className: "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                style: {
                  backgroundColor: "var(--color-primary)",
                  opacity: .1
                },
                children: l.jsx("div", {
                  "data-component-start": "87:18:4157",
                  "data-component-end": "87:114:4253",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-2 h-2 rounded-full",
                  className: "w-2 h-2 rounded-full",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  }
                })
              }), l.jsx("span", {
                "data-component-start": "89:16:4293",
                "data-component-end": "89:114:4391",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm",
                className: "text-sm",
                style: {
                  color: "var(--color-text)"
                },
                children: "Learning style recognition"
              })]
            }), l.jsxs(j.li, {
              "data-component-start": "92:14:4448",
              "data-component-end": "103:26:5170",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.li",
              "data-component-class": "flex items-center",
              initial: {
                opacity: 0,
                x: -10
              },
              whileInView: {
                opacity: 1,
                x: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .6
              },
              className: "flex items-center",
              children: [l.jsx("div", {
                "data-component-start": "99:16:4739",
                "data-component-end": "101:22:5019",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "div",
                "data-component-class": "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                className: "w-5 h-5 rounded-full mr-2 flex items-center justify-center",
                style: {
                  backgroundColor: "var(--color-primary)",
                  opacity: .1
                },
                children: l.jsx("div", {
                  "data-component-start": "100:18:4900",
                  "data-component-end": "100:114:4996",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "div",
                  "data-component-class": "w-2 h-2 rounded-full",
                  className: "w-2 h-2 rounded-full",
                  style: {
                    backgroundColor: "var(--color-primary)"
                  }
                })
              }), l.jsx("span", {
                "data-component-start": "102:16:5036",
                "data-component-end": "102:123:5143",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-sm",
                className: "text-sm",
                style: {
                  color: "var(--color-text)"
                },
                children: "Intelligent content recommendations"
              })]
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "108:10:5267",
          "data-component-end": "188:23:8955",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .2
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "116:12:5606",
            "data-component-end": "129:18:6208",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mb-6",
            className: "mb-6",
            children: l.jsx(j.div, {
              "data-component-start": "117:14:5643",
              "data-component-end": "128:27:6189",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center",
              whileHover: {
                rotate: 15
              },
              transition: {
                type: "spring",
                stiffness: 300
              },
              className: "w-16 h-16 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .1
              },
              children: l.jsx(Ag, {
                "data-component-start": "123:16:5964",
                "data-component-end": "127:18:6161",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "Award",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-secondary)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "131:12:6234",
            "data-component-end": "133:17:6373",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Gamified Learning Experience"
          }), l.jsx("p", {
            "data-component-start": "135:12:6399",
            "data-component-end": "137:16:6608",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Transform education into an exciting journey with points, badges, leaderboards, and challenges that make learning fun."
          }), l.jsxs("div", {
            "data-component-start": "139:12:6634",
            "data-component-end": "187:18:8931",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex flex-wrap gap-2 mt-auto",
            className: "flex flex-wrap gap-2 mt-auto",
            children: [l.jsx(j.div, {
              "data-component-start": "140:14:6695",
              "data-component-end": "150:27:7228",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .4
              },
              whileHover: {
                scale: 1.1,
                rotate: 5
              },
              className: "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              style: {
                backgroundColor: "var(--color-secondary)"
              },
              children: l.jsx("span", {
                "data-component-start": "149:16:7142",
                "data-component-end": "149:74:7200",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-white text-xs font-bold",
                className: "text-white text-xs font-bold",
                children: "Math"
              })
            }), l.jsx(j.div, {
              "data-component-start": "152:14:7258",
              "data-component-end": "162:27:7789",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .5
              },
              whileHover: {
                scale: 1.1,
                rotate: -5
              },
              className: "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              style: {
                backgroundColor: "var(--color-accent)"
              },
              children: l.jsx("span", {
                "data-component-start": "161:16:7703",
                "data-component-end": "161:74:7761",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-white text-xs font-bold",
                className: "text-white text-xs font-bold",
                children: "Quiz"
              })
            }), l.jsx(j.div, {
              "data-component-start": "164:14:7819",
              "data-component-end": "174:27:8350",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .6
              },
              whileHover: {
                scale: 1.1,
                rotate: 5
              },
              className: "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              style: {
                backgroundColor: "var(--color-tertiary)"
              },
              children: l.jsx("span", {
                "data-component-start": "173:16:8265",
                "data-component-end": "173:73:8322",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-white text-xs font-bold",
                className: "text-white text-xs font-bold",
                children: "Pro"
              })
            }), l.jsx(j.div, {
              "data-component-start": "176:14:8380",
              "data-component-end": "186:27:8912",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              initial: {
                scale: 0
              },
              whileInView: {
                scale: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .3,
                delay: .7
              },
              whileHover: {
                scale: 1.1,
                rotate: -5
              },
              className: "w-12 h-12 rounded-full flex items-center justify-center shadow-md",
              style: {
                backgroundColor: "var(--color-primary)"
              },
              children: l.jsx("span", {
                "data-component-start": "185:16:8826",
                "data-component-end": "185:74:8884",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-white text-xs font-bold",
                className: "text-white text-xs font-bold",
                children: "Star"
              })
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "191:10:9010",
          "data-component-end": "286:23:13513",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .3
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group",
          children: [l.jsx("div", {
            "data-component-start": "199:12:9349",
            "data-component-end": "212:18:9948",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mb-6",
            className: "mb-6",
            children: l.jsx(j.div, {
              "data-component-start": "200:14:9386",
              "data-component-end": "211:27:9929",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center",
              whileHover: {
                rotate: 15
              },
              transition: {
                type: "spring",
                stiffness: 300
              },
              className: "w-16 h-16 rounded-full flex items-center justify-center",
              style: {
                backgroundColor: "var(--color-accent)",
                opacity: .1
              },
              children: l.jsx(Bg, {
                "data-component-start": "206:16:9704",
                "data-component-end": "210:18:9901",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "BarChart",
                "data-component-class": "transition-all duration-300 group-hover:scale-110",
                size: 28,
                className: "transition-all duration-300 group-hover:scale-110",
                style: {
                  color: "var(--color-accent)"
                }
              })
            })
          }), l.jsx("h3", {
            "data-component-start": "214:12:9974",
            "data-component-end": "216:17:10104",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "h3",
            "data-component-class": "text-xl font-bold mb-3",
            className: "text-xl font-bold mb-3",
            style: {
              color: "var(--color-dark)"
            },
            children: "Real-Time Analytics"
          }), l.jsx("p", {
            "data-component-start": "218:12:10130",
            "data-component-end": "220:16:10341",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "p",
            "data-component-class": "mb-4",
            className: "mb-4",
            style: {
              color: "var(--color-text)"
            },
            children: "Gain valuable insights into learning progress with comprehensive analytics for students, teachers, parents, and schools."
          }), l.jsxs("div", {
            "data-component-start": "222:12:10367",
            "data-component-end": "285:18:13489",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "mt-auto space-y-2",
            className: "mt-auto space-y-2",
            children: [l.jsxs("div", {
              "data-component-start": "223:14:10417",
              "data-component-end": "226:20:10703",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex justify-between items-center",
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                "data-component-start": "224:16:10485",
                "data-component-end": "224:107:10576",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs",
                className: "text-xs",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Comprehension"
              }), l.jsx("span", {
                "data-component-start": "225:16:10593",
                "data-component-end": "225:105:10682",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-medium",
                className: "text-xs font-medium",
                style: {
                  color: "var(--color-accent)"
                },
                children: "85%"
              })]
            }), l.jsx(j.div, {
              "data-component-start": "227:14:10718",
              "data-component-end": "242:27:11417",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              initial: {
                width: "0%"
              },
              whileInView: {
                width: "100%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .8,
                delay: .4
              },
              className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              children: l.jsx(j.div, {
                "data-component-start": "234:16:11029",
                "data-component-end": "241:30:11389",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-full rounded-full",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "85%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .6,
                  delay: .6
                },
                className: "h-full rounded-full",
                style: {
                  backgroundColor: "var(--color-accent)"
                }
              })
            }), l.jsxs("div", {
              "data-component-start": "244:14:11447",
              "data-component-end": "247:20:11730",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex justify-between items-center",
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                "data-component-start": "245:16:11515",
                "data-component-end": "245:104:11603",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs",
                className: "text-xs",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Engagement"
              }), l.jsx("span", {
                "data-component-start": "246:16:11620",
                "data-component-end": "246:105:11709",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-medium",
                className: "text-xs font-medium",
                style: {
                  color: "var(--color-accent)"
                },
                children: "92%"
              })]
            }), l.jsx(j.div, {
              "data-component-start": "248:14:11745",
              "data-component-end": "263:27:12444",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              initial: {
                width: "0%"
              },
              whileInView: {
                width: "100%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .8,
                delay: .5
              },
              className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              children: l.jsx(j.div, {
                "data-component-start": "255:16:12056",
                "data-component-end": "262:30:12416",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-full rounded-full",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "92%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .6,
                  delay: .7
                },
                className: "h-full rounded-full",
                style: {
                  backgroundColor: "var(--color-accent)"
                }
              })
            }), l.jsxs("div", {
              "data-component-start": "265:14:12474",
              "data-component-end": "268:20:12756",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "div",
              "data-component-class": "flex justify-between items-center",
              className: "flex justify-between items-center",
              children: [l.jsx("span", {
                "data-component-start": "266:16:12542",
                "data-component-end": "266:103:12629",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs",
                className: "text-xs",
                style: {
                  color: "var(--color-text-light)"
                },
                children: "Retention"
              }), l.jsx("span", {
                "data-component-start": "267:16:12646",
                "data-component-end": "267:105:12735",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-xs font-medium",
                className: "text-xs font-medium",
                style: {
                  color: "var(--color-accent)"
                },
                children: "78%"
              })]
            }), l.jsx(j.div, {
              "data-component-start": "269:14:12771",
              "data-component-end": "284:27:13470",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              initial: {
                width: "0%"
              },
              whileInView: {
                width: "100%"
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .8,
                delay: .6
              },
              className: "h-1.5 bg-gray-200 rounded-full overflow-hidden",
              children: l.jsx(j.div, {
                "data-component-start": "276:16:13082",
                "data-component-end": "283:30:13442",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "motion.div",
                "data-component-class": "h-full rounded-full",
                initial: {
                  width: "0%"
                },
                whileInView: {
                  width: "78%"
                },
                viewport: {
                  once: !0
                },
                transition: {
                  duration: .6,
                  delay: .8
                },
                className: "h-full rounded-full",
                style: {
                  backgroundColor: "var(--color-accent)"
                }
              })
            })]
          })]
        }), l.jsx(j.div, {
          "data-component-start": "289:10:13568",
          "data-component-end": "388:23:18979",
          "data-component-path": "src/components/FeatureSection.jsx",
          "data-component-file": "FeatureSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "card group md:col-span-2 lg:col-span-3",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0,
            margin: "-50px"
          },
          transition: {
            duration: .5,
            delay: .4
          },
          whileHover: {
            y: -8,
            transition: {
              duration: .3
            }
          },
          className: "card group md:col-span-2 lg:col-span-3",
          children: l.jsxs("div", {
            "data-component-start": "297:12:13935",
            "data-component-end": "387:18:18955",
            "data-component-path": "src/components/FeatureSection.jsx",
            "data-component-file": "FeatureSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex flex-col md:flex-row gap-6",
            className: "flex flex-col md:flex-row gap-6",
            children: [l.jsxs("div", {
              "data-component-start": "298:14:13999",
              "data-component-end": "321:20:15138",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "div",
              "data-component-class": "md:w-1/3",
              className: "md:w-1/3",
              children: [l.jsx("div", {
                "data-component-start": "299:16:14042",
                "data-component-end": "312:22:14697",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "div",
                "data-component-class": "mb-6",
                className: "mb-6",
                children: l.jsx(j.div, {
                  "data-component-start": "300:18:14083",
                  "data-component-end": "311:31:14674",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "w-16 h-16 rounded-full flex items-center justify-center",
                  whileHover: {
                    rotate: 15
                  },
                  transition: {
                    type: "spring",
                    stiffness: 300
                  },
                  className: "w-16 h-16 rounded-full flex items-center justify-center",
                  style: {
                    backgroundColor: "var(--color-tertiary)",
                    opacity: .1
                  },
                  children: l.jsx(Vm, {
                    "data-component-start": "306:20:14427",
                    "data-component-end": "310:22:14642",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "Sparkles",
                    "data-component-class": "transition-all duration-300 group-hover:scale-110",
                    size: 28,
                    className: "transition-all duration-300 group-hover:scale-110",
                    style: {
                      color: "var(--color-tertiary)"
                    }
                  })
                })
              }), l.jsx("h3", {
                "data-component-start": "314:16:14731",
                "data-component-end": "316:21:14871",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "h3",
                "data-component-class": "text-xl font-bold mb-3",
                className: "text-xl font-bold mb-3",
                style: {
                  color: "var(--color-dark)"
                },
                children: "AI Learning Assistant"
              }), l.jsx("p", {
                "data-component-start": "318:16:14905",
                "data-component-end": "320:20:15117",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "p",
                "data-component-class": "mb-4",
                className: "mb-4",
                style: {
                  color: "var(--color-text)"
                },
                children: "Get 24/7 help from your personal AI tutor that answers questions, explains concepts, and helps prepare for tests."
              })]
            }), l.jsx("div", {
              "data-component-start": "323:14:15168",
              "data-component-end": "386:20:18936",
              "data-component-path": "src/components/FeatureSection.jsx",
              "data-component-file": "FeatureSection.jsx",
              "data-component-name": "div",
              "data-component-class": "md:w-2/3 bg-gray-50 p-6 rounded-lg",
              className: "md:w-2/3 bg-gray-50 p-6 rounded-lg",
              children: l.jsxs("div", {
                "data-component-start": "324:16:15237",
                "data-component-end": "385:22:18915",
                "data-component-path": "src/components/FeatureSection.jsx",
                "data-component-file": "FeatureSection.jsx",
                "data-component-name": "div",
                "data-component-class": "flex flex-col space-y-4",
                className: "flex flex-col space-y-4",
                children: [l.jsxs(j.div, {
                  "data-component-start": "325:18:15297",
                  "data-component-end": "342:31:16291",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "flex items-start",
                  initial: {
                    opacity: 0,
                    y: 10
                  },
                  whileInView: {
                    opacity: 1,
                    y: 0
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: .4,
                    delay: .5
                  },
                  className: "flex items-start",
                  children: [l.jsx("div", {
                    "data-component-start": "332:20:15615",
                    "data-component-end": "338:26:16004",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0",
                    className: "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0",
                    children: l.jsx("img", {
                      "data-component-start": "333:22:15706",
                      "data-component-end": "337:24:15977",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "img",
                      "data-component-src": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                      "data-component-class": "w-full h-full object-cover",
                      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                      alt: "Student",
                      className: "w-full h-full object-cover"
                    })
                  }), l.jsx("div", {
                    "data-component-start": "339:20:16025",
                    "data-component-end": "341:26:16259",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "bg-white p-3 rounded-lg shadow-sm",
                    className: "bg-white p-3 rounded-lg shadow-sm",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "I'm having trouble understanding how photosynthesis works. Can you explain it in a simple way?"
                  })]
                }), l.jsxs(j.div, {
                  "data-component-start": "344:18:16329",
                  "data-component-end": "365:31:17904",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "flex items-start",
                  initial: {
                    opacity: 0,
                    y: 10
                  },
                  whileInView: {
                    opacity: 1,
                    y: 0
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: .4,
                    delay: .7
                  },
                  className: "flex items-start",
                  children: [l.jsx("div", {
                    "data-component-start": "351:20:16647",
                    "data-component-end": "353:26:16896",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0 flex items-center justify-center",
                    className: "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0 flex items-center justify-center",
                    style: {
                      backgroundColor: "var(--color-tertiary)"
                    },
                    children: l.jsx(Vm, {
                      "data-component-start": "352:22:16824",
                      "data-component-end": "352:67:16869",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "Sparkles",
                      "data-component-class": "text-white",
                      size: 16,
                      className: "text-white"
                    })
                  }), l.jsxs("div", {
                    "data-component-start": "354:20:16917",
                    "data-component-end": "364:26:17872",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "bg-white p-3 rounded-lg shadow-sm",
                    className: "bg-white p-3 rounded-lg shadow-sm",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: [l.jsx("p", {
                      "data-component-start": "355:22:17030",
                      "data-component-end": "355:127:17135",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "p",
                      children: "Think of photosynthesis as a plant's way of making food using sunlight! Here's a simple breakdown:"
                    }), l.jsxs("ol", {
                      "data-component-start": "356:22:17158",
                      "data-component-end": "362:27:17722",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "ol",
                      "data-component-class": "mt-2 ml-4 list-decimal text-sm space-y-1",
                      className: "mt-2 ml-4 list-decimal text-sm space-y-1",
                      children: [l.jsx("li", {
                        "data-component-start": "357:24:17240",
                        "data-component-end": "357:110:17326",
                        "data-component-path": "src/components/FeatureSection.jsx",
                        "data-component-file": "FeatureSection.jsx",
                        "data-component-name": "li",
                        children: "Plants take in carbon dioxide from the air through tiny holes in their leaves"
                      }), l.jsx("li", {
                        "data-component-start": "358:24:17351",
                        "data-component-end": "358:70:17397",
                        "data-component-path": "src/components/FeatureSection.jsx",
                        "data-component-file": "FeatureSection.jsx",
                        "data-component-name": "li",
                        children: "They absorb water through their roots"
                      }), l.jsx("li", {
                        "data-component-start": "359:24:17422",
                        "data-component-end": "359:90:17488",
                        "data-component-path": "src/components/FeatureSection.jsx",
                        "data-component-file": "FeatureSection.jsx",
                        "data-component-name": "li",
                        children: "Sunlight hits the chlorophyll (the green stuff) in leaves"
                      }), l.jsx("li", {
                        "data-component-start": "360:24:17513",
                        "data-component-end": "360:108:17597",
                        "data-component-path": "src/components/FeatureSection.jsx",
                        "data-component-file": "FeatureSection.jsx",
                        "data-component-name": "li",
                        children: "This energy helps convert the CO₂ and water into glucose (sugar) and oxygen"
                      }), l.jsx("li", {
                        "data-component-start": "361:24:17622",
                        "data-component-end": "361:96:17694",
                        "data-component-path": "src/components/FeatureSection.jsx",
                        "data-component-file": "FeatureSection.jsx",
                        "data-component-name": "li",
                        children: "Plants use the glucose as food, and release oxygen into the air"
                      })]
                    }), l.jsx("p", {
                      "data-component-start": "363:22:17745",
                      "data-component-end": "363:122:17845",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "p",
                      "data-component-class": "mt-2",
                      className: "mt-2",
                      children: "Would you like me to create a simple diagram to help visualize this process?"
                    })]
                  })]
                }), l.jsxs(j.div, {
                  "data-component-start": "367:18:17942",
                  "data-component-end": "384:31:18892",
                  "data-component-path": "src/components/FeatureSection.jsx",
                  "data-component-file": "FeatureSection.jsx",
                  "data-component-name": "motion.div",
                  "data-component-class": "flex items-start",
                  initial: {
                    opacity: 0,
                    y: 10
                  },
                  whileInView: {
                    opacity: 1,
                    y: 0
                  },
                  viewport: {
                    once: !0
                  },
                  transition: {
                    duration: .4,
                    delay: .9
                  },
                  className: "flex items-start",
                  children: [l.jsx("div", {
                    "data-component-start": "374:20:18260",
                    "data-component-end": "380:26:18649",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0",
                    className: "w-8 h-8 rounded-full overflow-hidden mr-3 shrink-0",
                    children: l.jsx("img", {
                      "data-component-start": "375:22:18351",
                      "data-component-end": "379:24:18622",
                      "data-component-path": "src/components/FeatureSection.jsx",
                      "data-component-file": "FeatureSection.jsx",
                      "data-component-name": "img",
                      "data-component-src": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                      "data-component-class": "w-full h-full object-cover",
                      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                      alt: "Student",
                      className: "w-full h-full object-cover"
                    })
                  }), l.jsx("div", {
                    "data-component-start": "381:20:18670",
                    "data-component-end": "383:26:18860",
                    "data-component-path": "src/components/FeatureSection.jsx",
                    "data-component-file": "FeatureSection.jsx",
                    "data-component-name": "div",
                    "data-component-class": "bg-white p-3 rounded-lg shadow-sm",
                    className: "bg-white p-3 rounded-lg shadow-sm",
                    style: {
                      color: "var(--color-text)"
                    },
                    children: "Yes, a diagram would be really helpful! Thank you."
                  })]
                })]
              })
            })]
          })
        })]
      })]
    })
  }),
  nb = () => l.jsx("section", {
    "data-component-start": "16:4:470",
    "data-component-end": "212:14:9652",
    "data-component-path": "src/components/AboutSection.jsx",
    "data-component-file": "AboutSection.jsx",
    "data-component-name": "section",
    "data-component-class": "section-padding bg-white",
    id: "about",
    className: "section-padding bg-white",
    children: l.jsx("div", {
      "data-component-start": "17:6:534",
      "data-component-end": "211:12:9637",
      "data-component-path": "src/components/AboutSection.jsx",
      "data-component-file": "AboutSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto container-padding",
      className: "container mx-auto container-padding",
      children: l.jsxs("div", {
        "data-component-start": "18:8:596",
        "data-component-end": "210:14:9624",
        "data-component-path": "src/components/AboutSection.jsx",
        "data-component-file": "AboutSection.jsx",
        "data-component-name": "div",
        "data-component-class": "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        children: [l.jsxs(j.div, {
          "data-component-start": "20:10:722",
          "data-component-end": "132:23:5979",
          "data-component-path": "src/components/AboutSection.jsx",
          "data-component-file": "AboutSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "space-y-6",
          initial: {
            opacity: 0,
            x: -30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-100px"
          },
          transition: {
            duration: .6
          },
          className: "space-y-6",
          children: [l.jsxs(j.h2, {
            "data-component-start": "27:12:984",
            "data-component-end": "36:24:1408",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "motion.h2",
            "data-component-class": "text-3xl md:text-4xl font-bold",
            initial: {
              opacity: 0
            },
            whileInView: {
              opacity: 1
            },
            viewport: {
              once: !0
            },
            transition: {
              duration: .6,
              delay: .2
            },
            className: "text-3xl md:text-4xl font-bold",
            style: {
              color: "var(--color-dark)"
            },
            children: ["About ", l.jsx("span", {
              "data-component-start": "35:20:1320",
              "data-component-end": "35:83:1383",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "span",
              style: {
                color: "var(--color-primary)"
              },
              children: "Zunno.ai"
            })]
          }), l.jsx(j.p, {
            "data-component-start": "38:12:1434",
            "data-component-end": "47:23:1966",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "motion.p",
            "data-component-class": "text-lg",
            initial: {
              opacity: 0
            },
            whileInView: {
              opacity: 1
            },
            viewport: {
              once: !0
            },
            transition: {
              duration: .6,
              delay: .3
            },
            className: "text-lg",
            style: {
              color: "var(--color-text)"
            },
            children: "Zunno.ai is revolutionizing K-12 education by harnessing the power of artificial intelligence to create personalized, engaging, and effective learning experiences for students of all ages and abilities."
          }), l.jsx(j.p, {
            "data-component-start": "49:12:1992",
            "data-component-end": "57:23:2555",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "motion.p",
            initial: {
              opacity: 0
            },
            whileInView: {
              opacity: 1
            },
            viewport: {
              once: !0
            },
            transition: {
              duration: .6,
              delay: .4
            },
            style: {
              color: "var(--color-text)"
            },
            children: "Our platform combines cutting-edge AI technology with proven educational methodologies to address the unique challenges of modern education. We believe that every student deserves a learning experience tailored to their individual needs, interests, and learning style."
          }), l.jsxs("div", {
            "data-component-start": "59:12:2581",
            "data-component-end": "109:18:5013",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "div",
            "data-component-class": "space-y-4 pt-4",
            className: "space-y-4 pt-4",
            children: [l.jsx(j.h3, {
              "data-component-start": "60:14:2628",
              "data-component-end": "69:26:2999",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.h3",
              "data-component-class": "text-xl font-bold",
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .6,
                delay: .5
              },
              className: "text-xl font-bold",
              style: {
                color: "var(--color-dark)"
              },
              children: "Our Mission"
            }), l.jsxs(j.div, {
              "data-component-start": "71:14:3029",
              "data-component-end": "82:27:3668",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "flex items-start",
              initial: {
                opacity: 0,
                y: 10
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .6
              },
              className: "flex items-start",
              children: [l.jsx(Xi, {
                "data-component-start": "78:16:3319",
                "data-component-end": "78:115:3418",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "CheckCircle2",
                "data-component-class": "shrink-0 mr-3 mt-1",
                className: "shrink-0 mr-3 mt-1",
                size: 20,
                style: {
                  color: "var(--color-primary)"
                }
              }), l.jsx("p", {
                "data-component-start": "79:16:3435",
                "data-component-end": "81:20:3640",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "p",
                style: {
                  color: "var(--color-text)"
                },
                children: "To democratize access to high-quality, personalized education for every K-12 student, regardless of background or location."
              })]
            }), l.jsxs(j.div, {
              "data-component-start": "84:14:3698",
              "data-component-end": "95:27:4340",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "flex items-start",
              initial: {
                opacity: 0,
                y: 10
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .7
              },
              className: "flex items-start",
              children: [l.jsx(Xi, {
                "data-component-start": "91:16:3988",
                "data-component-end": "91:115:4087",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "CheckCircle2",
                "data-component-class": "shrink-0 mr-3 mt-1",
                className: "shrink-0 mr-3 mt-1",
                size: 20,
                style: {
                  color: "var(--color-primary)"
                }
              }), l.jsx("p", {
                "data-component-start": "92:16:4104",
                "data-component-end": "94:20:4312",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "p",
                style: {
                  color: "var(--color-text)"
                },
                children: "To empower teachers with AI tools that reduce administrative burden and enhance their ability to provide targeted instruction."
              })]
            }), l.jsxs(j.div, {
              "data-component-start": "97:14:4370",
              "data-component-end": "108:27:4994",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "flex items-start",
              initial: {
                opacity: 0,
                y: 10
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .4,
                delay: .8
              },
              className: "flex items-start",
              children: [l.jsx(Xi, {
                "data-component-start": "104:16:4660",
                "data-component-end": "104:115:4759",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "CheckCircle2",
                "data-component-class": "shrink-0 mr-3 mt-1",
                className: "shrink-0 mr-3 mt-1",
                size: 20,
                style: {
                  color: "var(--color-primary)"
                }
              }), l.jsx("p", {
                "data-component-start": "105:16:4776",
                "data-component-end": "107:20:4966",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "p",
                style: {
                  color: "var(--color-text)"
                },
                children: "To create a learning environment that fosters curiosity, critical thinking, and a lifelong love of learning."
              })]
            })]
          }), l.jsx(j.div, {
            "data-component-start": "111:12:5039",
            "data-component-end": "131:25:5955",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "motion.div",
            "data-component-class": "pt-4",
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            viewport: {
              once: !0
            },
            transition: {
              duration: .6,
              delay: .9
            },
            className: "pt-4",
            children: l.jsxs("a", {
              "data-component-start": "118:14:5303",
              "data-component-end": "130:18:5929",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "a",
              "data-component-class": "btn-primary inline-flex items-center",
              href: "#cta",
              className: "btn-primary inline-flex items-center",
              onClick: t => {
                t.preventDefault(), document.getElementById("cta").scrollIntoView({
                  behavior: "smooth"
                })
              },
              children: ["Join Our Mission", l.jsx("svg", {
                "data-component-start": "127:16:5646",
                "data-component-end": "129:22:5910",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "svg",
                "data-component-class": "ml-2 w-5 h-5",
                className: "ml-2 w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: l.jsx("path", {
                  "data-component-start": "128:18:5784",
                  "data-component-end": "128:121:5887",
                  "data-component-path": "src/components/AboutSection.jsx",
                  "data-component-file": "AboutSection.jsx",
                  "data-component-name": "path",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M14 5l7 7m0 0l-7 7m7-7H3"
                })
              })]
            })
          })]
        }), l.jsx(j.div, {
          "data-component-start": "135:10:6050",
          "data-component-end": "209:23:9609",
          "data-component-path": "src/components/AboutSection.jsx",
          "data-component-file": "AboutSection.jsx",
          "data-component-name": "motion.div",
          initial: {
            opacity: 0,
            x: 30
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          viewport: {
            once: !0,
            margin: "-100px"
          },
          transition: {
            duration: .6,
            delay: .2
          },
          children: l.jsxs("div", {
            "data-component-start": "141:12:6289",
            "data-component-end": "208:18:9585",
            "data-component-path": "src/components/AboutSection.jsx",
            "data-component-file": "AboutSection.jsx",
            "data-component-name": "div",
            "data-component-class": "relative",
            className: "relative",
            children: [l.jsxs(j.div, {
              "data-component-start": "143:14:6363",
              "data-component-end": "161:27:7278",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "rounded-2xl overflow-hidden shadow-xl",
              initial: {
                y: 20,
                opacity: 0
              },
              whileInView: {
                y: 0,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .6,
                delay: .3
              },
              className: "rounded-2xl overflow-hidden shadow-xl",
              children: [l.jsx("img", {
                "data-component-start": "150:16:6674",
                "data-component-end": "154:18:6935",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "img",
                "data-component-src": "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
                "data-component-class": "w-full h-auto",
                src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
                alt: "Students learning with technology",
                className: "w-full h-auto"
              }), l.jsx("div", {
                "data-component-start": "155:16:6952",
                "data-component-end": "160:23:7250",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "div",
                "data-component-class": "absolute inset-0 rounded-2xl",
                className: "absolute inset-0 rounded-2xl",
                style: {
                  background: `linear-gradient(to bottom, transparent 60%, ${getComputedStyle(document.documentElement).getPropertyValue("--color-dark")}aa)`
                }
              })]
            }), l.jsx(j.div, {
              "data-component-start": "164:14:7342",
              "data-component-end": "175:27:8004",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .5,
                delay: .5
              },
              className: "absolute top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]",
              children: l.jsxs("div", {
                "data-component-start": "171:16:7696",
                "data-component-end": "174:22:7976",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "div",
                "data-component-class": "text-center",
                className: "text-center",
                children: [l.jsx("h4", {
                  "data-component-start": "172:18:7744",
                  "data-component-end": "172:108:7834",
                  "data-component-path": "src/components/AboutSection.jsx",
                  "data-component-file": "AboutSection.jsx",
                  "data-component-name": "h4",
                  "data-component-class": "text-3xl font-bold mb-1",
                  className: "text-3xl font-bold mb-1",
                  style: {
                    color: "var(--color-primary)"
                  },
                  children: "35%"
                }), l.jsx("p", {
                  "data-component-start": "173:18:7853",
                  "data-component-end": "173:118:7953",
                  "data-component-path": "src/components/AboutSection.jsx",
                  "data-component-file": "AboutSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Average improvement in test scores"
                })]
              })
            }), l.jsx(j.div, {
              "data-component-start": "177:14:8034",
              "data-component-end": "188:27:8690",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]",
              initial: {
                scale: .8,
                opacity: 0
              },
              whileInView: {
                scale: 1,
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .5,
                delay: .7
              },
              className: "absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]",
              children: l.jsxs("div", {
                "data-component-start": "184:16:8391",
                "data-component-end": "187:22:8662",
                "data-component-path": "src/components/AboutSection.jsx",
                "data-component-file": "AboutSection.jsx",
                "data-component-name": "div",
                "data-component-class": "text-center",
                className: "text-center",
                children: [l.jsx("h4", {
                  "data-component-start": "185:18:8439",
                  "data-component-end": "185:110:8531",
                  "data-component-path": "src/components/AboutSection.jsx",
                  "data-component-file": "AboutSection.jsx",
                  "data-component-name": "h4",
                  "data-component-class": "text-3xl font-bold mb-1",
                  className: "text-3xl font-bold mb-1",
                  style: {
                    color: "var(--color-secondary)"
                  },
                  children: "92%"
                }), l.jsx("p", {
                  "data-component-start": "186:18:8550",
                  "data-component-end": "186:107:8639",
                  "data-component-path": "src/components/AboutSection.jsx",
                  "data-component-file": "AboutSection.jsx",
                  "data-component-name": "p",
                  "data-component-class": "text-sm",
                  className: "text-sm",
                  style: {
                    color: "var(--color-text)"
                  },
                  children: "Student engagement rate"
                })]
              })
            }), l.jsx(j.div, {
              "data-component-start": "191:14:8762",
              "data-component-end": "198:28:9147",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -top-4 -left-4 w-12 h-12 rounded-full",
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .5,
                delay: .9
              },
              className: "absolute -top-4 -left-4 w-12 h-12 rounded-full",
              style: {
                backgroundColor: "var(--color-primary)",
                opacity: .2
              }
            }), l.jsx(j.div, {
              "data-component-start": "200:14:9177",
              "data-component-end": "207:28:9566",
              "data-component-path": "src/components/AboutSection.jsx",
              "data-component-file": "AboutSection.jsx",
              "data-component-name": "motion.div",
              "data-component-class": "absolute -bottom-4 -right-4 w-16 h-16 rounded-full",
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .5,
                delay: 1
              },
              className: "absolute -bottom-4 -right-4 w-16 h-16 rounded-full",
              style: {
                backgroundColor: "var(--color-secondary)",
                opacity: .2
              }
            })]
          })
        })]
      })
    })
  }),
  ab = () => l.jsxs("section", {
    "data-component-start": "14:4:494",
    "data-component-end": "91:14:4085",
    "data-component-path": "src/components/CtaSection.jsx",
    "data-component-file": "CtaSection.jsx",
    "data-component-name": "section",
    "data-component-class": "py-20 relative overflow-hidden",
    id: "cta",
    className: "py-20 relative overflow-hidden",
    children: [l.jsxs("div", {
      "data-component-start": "16:6:601",
      "data-component-end": "27:12:1201",
      "data-component-path": "src/components/CtaSection.jsx",
      "data-component-file": "CtaSection.jsx",
      "data-component-name": "div",
      "data-component-class": "absolute inset-0 z-0",
      className: "absolute inset-0 z-0",
      style: {
        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
      },
      children: [l.jsx("div", {
        "data-component-start": "23:8:831",
        "data-component-end": "24:56:1004",
        "data-component-path": "src/components/CtaSection.jsx",
        "data-component-file": "CtaSection.jsx",
        "data-component-name": "div",
        "data-component-class": "absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3",
        className: "absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3",
        style: {
          backgroundColor: "white"
        }
      }), l.jsx("div", {
        "data-component-start": "25:8:1013",
        "data-component-end": "26:56:1188",
        "data-component-path": "src/components/CtaSection.jsx",
        "data-component-file": "CtaSection.jsx",
        "data-component-name": "div",
        "data-component-class": "absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3",
        className: "absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3",
        style: {
          backgroundColor: "white"
        }
      })]
    }), l.jsx("div", {
      "data-component-start": "29:6:1215",
      "data-component-end": "90:12:4070",
      "data-component-path": "src/components/CtaSection.jsx",
      "data-component-file": "CtaSection.jsx",
      "data-component-name": "div",
      "data-component-class": "container mx-auto px-4 md:px-8 relative z-10",
      className: "container mx-auto px-4 md:px-8 relative z-10",
      children: l.jsxs("div", {
        "data-component-start": "30:8:1286",
        "data-component-end": "89:14:4057",
        "data-component-path": "src/components/CtaSection.jsx",
        "data-component-file": "CtaSection.jsx",
        "data-component-name": "div",
        "data-component-class": "max-w-4xl mx-auto text-center",
        className: "max-w-4xl mx-auto text-center",
        children: [l.jsxs(j.div, {
          "data-component-start": "31:10:1344",
          "data-component-end": "66:23:2856",
          "data-component-path": "src/components/CtaSection.jsx",
          "data-component-file": "CtaSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "space-y-6",
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .6
          },
          viewport: {
            once: !0
          },
          className: "space-y-6",
          children: [l.jsx("h2", {
            "data-component-start": "38:12:1586",
            "data-component-end": "40:17:1705",
            "data-component-path": "src/components/CtaSection.jsx",
            "data-component-file": "CtaSection.jsx",
            "data-component-name": "h2",
            "data-component-class": "text-3xl md:text-5xl font-bold text-white",
            className: "text-3xl md:text-5xl font-bold text-white",
            children: "Ready to Transform Learning?"
          }), l.jsx("p", {
            "data-component-start": "42:12:1731",
            "data-component-end": "45:16:1966",
            "data-component-path": "src/components/CtaSection.jsx",
            "data-component-file": "CtaSection.jsx",
            "data-component-name": "p",
            "data-component-class": "text-lg md:text-xl text-white/90 max-w-2xl mx-auto",
            className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto",
            children: "Join thousands of schools already elevating their educational experience with Zunno.ai. Request a personalized demo today."
          }), l.jsxs("div", {
            "data-component-start": "47:12:1992",
            "data-component-end": "65:18:2832",
            "data-component-path": "src/components/CtaSection.jsx",
            "data-component-file": "CtaSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8",
            className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8",
            children: [l.jsxs(j.a, {
              "data-component-start": "48:14:2089",
              "data-component-end": "57:25:2564",
              "data-component-path": "src/components/CtaSection.jsx",
              "data-component-file": "CtaSection.jsx",
              "data-component-name": "motion.a",
              "data-component-class": "bg-white px-8 py-4 rounded-lg font-semibold shadow-lg inline-flex items-center",
              href: "mailto:info@zunno.ai?subject=Demo%20Request%20for%20Zunno.ai",
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: .98
              },
              className: "bg-white px-8 py-4 rounded-lg font-semibold shadow-lg inline-flex items-center",
              style: {
                color: "var(--color-primary)"
              },
              children: ["Request a Demo", l.jsx(Fg, {
                "data-component-start": "56:16:2499",
                "data-component-end": "56:55:2538",
                "data-component-path": "src/components/CtaSection.jsx",
                "data-component-file": "CtaSection.jsx",
                "data-component-name": "ArrowRight",
                "data-component-class": "ml-2 h-5 w-5",
                className: "ml-2 h-5 w-5"
              })]
            }), l.jsx("a", {
              "data-component-start": "59:14:2594",
              "data-component-end": "64:18:2813",
              "data-component-path": "src/components/CtaSection.jsx",
              "data-component-file": "CtaSection.jsx",
              "data-component-name": "a",
              "data-component-class": "text-white font-medium hover:text-white/80 transition-colors inline-flex items-center",
              href: "#about",
              className: "text-white font-medium hover:text-white/80 transition-colors inline-flex items-center",
              children: "Learn more about us"
            })]
          })]
        }), l.jsxs(j.div, {
          "data-component-start": "69:10:2908",
          "data-component-end": "88:23:4042",
          "data-component-path": "src/components/CtaSection.jsx",
          "data-component-file": "CtaSection.jsx",
          "data-component-name": "motion.div",
          "data-component-class": "mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto border border-white/20",
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .7,
            delay: .3
          },
          viewport: {
            once: !0
          },
          className: "mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto border border-white/20",
          children: [l.jsx("p", {
            "data-component-start": "76:12:3243",
            "data-component-end": "78:16:3517",
            "data-component-path": "src/components/CtaSection.jsx",
            "data-component-file": "CtaSection.jsx",
            "data-component-name": "p",
            "data-component-class": "text-lg text-white italic mb-4",
            className: "text-lg text-white italic mb-4",
            children: `"Implementing Zunno.ai was a game-changer for our school district. Student engagement has increased by 40%, and we've seen remarkable improvements in academic performance across all grade levels."`
          }), l.jsxs("div", {
            "data-component-start": "79:12:3530",
            "data-component-end": "87:18:4018",
            "data-component-path": "src/components/CtaSection.jsx",
            "data-component-file": "CtaSection.jsx",
            "data-component-name": "div",
            "data-component-class": "flex items-center justify-center",
            className: "flex items-center justify-center",
            children: [l.jsx("div", {
              "data-component-start": "80:14:3595",
              "data-component-end": "82:20:3775",
              "data-component-path": "src/components/CtaSection.jsx",
              "data-component-file": "CtaSection.jsx",
              "data-component-name": "div",
              "data-component-class": "w-10 h-10 rounded-full bg-white/30 flex items-center justify-center mr-3",
              className: "w-10 h-10 rounded-full bg-white/30 flex items-center justify-center mr-3",
              children: l.jsx("span", {
                "data-component-start": "81:16:3702",
                "data-component-end": "81:68:3754",
                "data-component-path": "src/components/CtaSection.jsx",
                "data-component-file": "CtaSection.jsx",
                "data-component-name": "span",
                "data-component-class": "text-white font-semibold",
                className: "text-white font-semibold",
                children: "MJ"
              })
            }), l.jsxs("div", {
              "data-component-start": "83:14:3790",
              "data-component-end": "86:20:3999",
              "data-component-path": "src/components/CtaSection.jsx",
              "data-component-file": "CtaSection.jsx",
              "data-component-name": "div",
              "data-component-class": "text-left",
              className: "text-left",
              children: [l.jsx("p", {
                "data-component-start": "84:16:3834",
                "data-component-end": "84:71:3889",
                "data-component-path": "src/components/CtaSection.jsx",
                "data-component-file": "CtaSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-white font-medium",
                className: "text-white font-medium",
                children: "Maria Johnson"
              }), l.jsx("p", {
                "data-component-start": "85:16:3906",
                "data-component-end": "85:88:3978",
                "data-component-path": "src/components/CtaSection.jsx",
                "data-component-file": "CtaSection.jsx",
                "data-component-name": "p",
                "data-component-class": "text-white/70 text-sm",
                className: "text-white/70 text-sm",
                children: "District Technology Coordinator"
              })]
            })]
          })]
        })]
      })
    })]
  }),
  ob = ({
    setColorPalette: t
  }) => (F.useEffect(() => {
    document.title = "Zunno.ai - AI-Powered K-12 Learning Platform"
  }, []), l.jsxs("div", {
    "data-component-start": "28:4:1261",
    "data-component-end": "53:10:1900",
    "data-component-path": "src/pages/HomePage.jsx",
    "data-component-file": "HomePage.jsx",
    "data-component-name": "div",
    "data-component-class": "flex flex-col min-h-screen",
    className: "flex flex-col min-h-screen",
    children: [l.jsx(wS, {
      "data-component-start": "29:6:1312",
      "data-component-end": "29:50:1356",
      "data-component-path": "src/pages/HomePage.jsx",
      "data-component-file": "HomePage.jsx",
      "data-component-name": "Header",
      setColorPalette: t
    }), l.jsxs("main", {
      "data-component-start": "31:6:1370",
      "data-component-end": "50:13:1865",
      "data-component-path": "src/pages/HomePage.jsx",
      "data-component-file": "HomePage.jsx",
      "data-component-name": "main",
      "data-component-class": "flex-grow",
      className: "flex-grow",
      children: [l.jsx(J6, {
        "data-component-start": "32:8:1407",
        "data-component-end": "32:23:1422",
        "data-component-path": "src/pages/HomePage.jsx",
        "data-component-file": "HomePage.jsx",
        "data-component-name": "HeroSection"
      }), l.jsx(nb, {
        "data-component-start": "35:8:1470",
        "data-component-end": "35:24:1486",
        "data-component-path": "src/pages/HomePage.jsx",
        "data-component-file": "HomePage.jsx",
        "data-component-name": "AboutSection"
      }), l.jsxs("div", {
        "data-component-start": "38:8:1547",
        "data-component-end": "43:14:1718",
        "data-component-path": "src/pages/HomePage.jsx",
        "data-component-file": "HomePage.jsx",
        "data-component-name": "div",
        "data-component-class": "bg-white",
        className: "bg-white",
        children: [l.jsx($6, {
          "data-component-start": "39:10:1584",
          "data-component-end": "39:32:1606",
          "data-component-path": "src/pages/HomePage.jsx",
          "data-component-file": "HomePage.jsx",
          "data-component-name": "ForStudentsSection"
        }), l.jsx(W6, {
          "data-component-start": "40:10:1617",
          "data-component-end": "40:32:1639",
          "data-component-path": "src/pages/HomePage.jsx",
          "data-component-file": "HomePage.jsx",
          "data-component-name": "ForTeachersSection"
        }), l.jsx(I6, {
          "data-component-start": "41:10:1650",
          "data-component-end": "41:31:1671",
          "data-component-path": "src/pages/HomePage.jsx",
          "data-component-file": "HomePage.jsx",
          "data-component-name": "ForParentsSection"
        }), l.jsx(tb, {
          "data-component-start": "42:10:1682",
          "data-component-end": "42:31:1703",
          "data-component-path": "src/pages/HomePage.jsx",
          "data-component-file": "HomePage.jsx",
          "data-component-name": "ForSchoolsSection"
        })]
      }), l.jsx(eb, {
        "data-component-start": "46:8:1773",
        "data-component-end": "46:26:1791",
        "data-component-path": "src/pages/HomePage.jsx",
        "data-component-file": "HomePage.jsx",
        "data-component-name": "FeatureSection"
      }), l.jsx(ab, {
        "data-component-start": "49:8:1837",
        "data-component-end": "49:22:1851",
        "data-component-path": "src/pages/HomePage.jsx",
        "data-component-file": "HomePage.jsx",
        "data-component-name": "CtaSection"
      })]
    }), l.jsx(TS, {
      "data-component-start": "52:6:1879",
      "data-component-end": "52:16:1889",
      "data-component-path": "src/pages/HomePage.jsx",
      "data-component-file": "HomePage.jsx",
      "data-component-name": "Footer"
    })]
  })),
  sb = () => {
    const [t, e] = F.useState("palette1");
    return F.useEffect(() => {
      const n = document.createElement("style");
      return n.textContent = `
      .motion-preset-fade-in {
        opacity: 0;
        animation: fadeIn 0.8s ease forwards;
      }
      
      .motion-preset-slide-up {
        opacity: 0;
        transform: translateY(30px);
        animation: slideUp 0.8s ease forwards;
      }
      
      .motion-preset-slide-right {
        opacity: 0;
        transform: translateX(-30px);
        animation: slideRight 0.8s ease forwards;
      }
      
      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideRight {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-pulse-slow {
        animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes pulseSlow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.3; }
      }
    `, document.head.appendChild(n), () => {
        document.head.removeChild(n)
      }
    }, []), l.jsx("div", {
      "data-component-start": "82:4:2035",
      "data-component-end": "89:10:2288",
      "data-component-path": "src/app.jsx",
      "data-component-file": "app.jsx",
      "data-component-name": "div",
      "data-palette": t,
      children: l.jsx(vg, {
        "data-component-start": "83:6:2075",
        "data-component-end": "88:19:2277",
        "data-component-path": "src/app.jsx",
        "data-component-file": "app.jsx",
        "data-component-name": "HashRouter",
        children: l.jsx(hg, {
          "data-component-start": "84:8:2096",
          "data-component-end": "87:17:2257",
          "data-component-path": "src/app.jsx",
          "data-component-file": "app.jsx",
          "data-component-name": "Routes",
          children: l.jsx(t0, {
            "data-component-start": "85:10:2115",
            "data-component-end": "85:85:2190",
            "data-component-path": "src/app.jsx",
            "data-component-file": "app.jsx",
            "data-component-name": "Route",
            path: "/",
            element: l.jsx(ob, {
              "data-component-start": "85:35:2140",
              "data-component-end": "85:81:2186",
              "data-component-path": "src/app.jsx",
              "data-component-file": "app.jsx",
              "data-component-name": "HomePage",
              setColorPalette: e
            })
          })
        })
      })
    })
  },
  cb = M2.createRoot(document.getElementById("app"));
cb.render(l.jsx(sb, {
  "data-component-start": "8:2:175",
  "data-component-end": "8:9:182",
  "data-component-path": "src/main.jsx",
  "data-component-file": "main.jsx",
  "data-component-name": "App"
}));
