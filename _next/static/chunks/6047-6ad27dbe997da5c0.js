(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6047],
  {
    95551: function (t, e, n) {
      "use strict";
      function r(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function i(t) {
        var e = r(t).Element;
        return t instanceof e || t instanceof Element;
      }
      function o(t) {
        var e = r(t).HTMLElement;
        return t instanceof e || t instanceof HTMLElement;
      }
      function s(t) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var e = r(t).ShadowRoot;
        return t instanceof e || t instanceof ShadowRoot;
      }
      n.d(e, {
        fi: function () {
          return tu;
        },
      });
      var a,
        l,
        u,
        c,
        f,
        h = Math.max,
        d = Math.min,
        p = Math.round;
      function m() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function v() {
        return !/^((?!chrome|android).)*safari/i.test(m());
      }
      function g(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var s = t.getBoundingClientRect(),
          a = 1,
          l = 1;
        e &&
          o(t) &&
          ((a = (t.offsetWidth > 0 && p(s.width) / t.offsetWidth) || 1),
          (l = (t.offsetHeight > 0 && p(s.height) / t.offsetHeight) || 1));
        var u = (i(t) ? r(t) : window).visualViewport,
          c = !v() && n,
          f = (s.left + (c && u ? u.offsetLeft : 0)) / a,
          h = (s.top + (c && u ? u.offsetTop : 0)) / l,
          d = s.width / a,
          m = s.height / l;
        return {
          width: d,
          height: m,
          top: h,
          right: f + d,
          bottom: h + m,
          left: f,
          x: f,
          y: h,
        };
      }
      function y(t) {
        var e = r(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function x(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function b(t) {
        return ((i(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function w(t) {
        return g(b(t)).left + y(t).scrollLeft;
      }
      function E(t) {
        return r(t).getComputedStyle(t);
      }
      function A(t) {
        var e = E(t),
          n = e.overflow,
          r = e.overflowX,
          i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r);
      }
      function P(t) {
        var e = g(t),
          n = t.offsetWidth,
          r = t.offsetHeight;
        return (
          1 >= Math.abs(e.width - n) && (n = e.width),
          1 >= Math.abs(e.height - r) && (r = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
        );
      }
      function T(t) {
        return "html" === x(t)
          ? t
          : t.assignedSlot || t.parentNode || (s(t) ? t.host : null) || b(t);
      }
      function V(t, e) {
        void 0 === e && (e = []);
        var n,
          i = (function t(e) {
            return ["html", "body", "#document"].indexOf(x(e)) >= 0
              ? e.ownerDocument.body
              : o(e) && A(e)
              ? e
              : t(T(e));
          })(t),
          s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          a = r(i),
          l = s ? [a].concat(a.visualViewport || [], A(i) ? i : []) : i,
          u = e.concat(l);
        return s ? u : u.concat(V(T(l)));
      }
      function O(t) {
        return o(t) && "fixed" !== E(t).position ? t.offsetParent : null;
      }
      function S(t) {
        for (
          var e = r(t), n = O(t);
          n &&
          ["table", "td", "th"].indexOf(x(n)) >= 0 &&
          "static" === E(n).position;

        )
          n = O(n);
        return n &&
          ("html" === x(n) || ("body" === x(n) && "static" === E(n).position))
          ? e
          : n ||
              (function (t) {
                var e = /firefox/i.test(m());
                if (/Trident/i.test(m()) && o(t) && "fixed" === E(t).position)
                  return null;
                var n = T(t);
                for (
                  s(n) && (n = n.host);
                  o(n) && 0 > ["html", "body"].indexOf(x(n));

                ) {
                  var r = E(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (e && "filter" === r.willChange) ||
                    (e && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      var C = "bottom",
        M = "right",
        k = "left",
        D = "auto",
        R = ["top", C, M, k],
        j = "start",
        L = "viewport",
        B = "popper",
        I = R.reduce(function (t, e) {
          return t.concat([e + "-" + j, e + "-end"]);
        }, []),
        F = [].concat(R, [D]).reduce(function (t, e) {
          return t.concat([e, e + "-" + j, e + "-end"]);
        }, []),
        U = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        N = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function W() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      var $ = { passive: !0 };
      function _(t) {
        return t.split("-")[0];
      }
      function q(t) {
        return t.split("-")[1];
      }
      function z(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function H(t) {
        var e,
          n = t.reference,
          r = t.element,
          i = t.placement,
          o = i ? _(i) : null,
          s = i ? q(i) : null,
          a = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case "top":
            e = { x: a, y: n.y - r.height };
            break;
          case C:
            e = { x: a, y: n.y + n.height };
            break;
          case M:
            e = { x: n.x + n.width, y: l };
            break;
          case k:
            e = { x: n.x - r.width, y: l };
            break;
          default:
            e = { x: n.x, y: n.y };
        }
        var u = o ? z(o) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (s) {
            case j:
              e[u] = e[u] - (n[c] / 2 - r[c] / 2);
              break;
            case "end":
              e[u] = e[u] + (n[c] / 2 - r[c] / 2);
          }
        }
        return e;
      }
      var Y = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Z(t) {
        var e,
          n,
          i,
          o,
          s,
          a,
          l,
          u = t.popper,
          c = t.popperRect,
          f = t.placement,
          h = t.variation,
          d = t.offsets,
          m = t.position,
          v = t.gpuAcceleration,
          g = t.adaptive,
          y = t.roundOffsets,
          x = t.isFixed,
          w = d.x,
          A = void 0 === w ? 0 : w,
          P = d.y,
          T = void 0 === P ? 0 : P,
          V = "function" == typeof y ? y({ x: A, y: T }) : { x: A, y: T };
        (A = V.x), (T = V.y);
        var O = d.hasOwnProperty("x"),
          D = d.hasOwnProperty("y"),
          R = k,
          j = "top",
          L = window;
        if (g) {
          var B = S(u),
            I = "clientHeight",
            F = "clientWidth";
          B === r(u) &&
            "static" !== E((B = b(u))).position &&
            "absolute" === m &&
            ((I = "scrollHeight"), (F = "scrollWidth")),
            ("top" === f || ((f === k || f === M) && "end" === h)) &&
              ((j = C),
              (T -=
                (x && B === L && L.visualViewport
                  ? L.visualViewport.height
                  : B[I]) - c.height),
              (T *= v ? 1 : -1)),
            (f === k || (("top" === f || f === C) && "end" === h)) &&
              ((R = M),
              (A -=
                (x && B === L && L.visualViewport
                  ? L.visualViewport.width
                  : B[F]) - c.width),
              (A *= v ? 1 : -1));
        }
        var U = Object.assign({ position: m }, g && Y),
          N =
            !0 === y
              ? ((e = { x: A, y: T }),
                (n = r(u)),
                (i = e.x),
                (o = e.y),
                {
                  x: p(i * (s = n.devicePixelRatio || 1)) / s || 0,
                  y: p(o * s) / s || 0,
                })
              : { x: A, y: T };
        return ((A = N.x), (T = N.y), v)
          ? Object.assign(
              {},
              U,
              (((l = {})[j] = D ? "0" : ""),
              (l[R] = O ? "0" : ""),
              (l.transform =
                1 >= (L.devicePixelRatio || 1)
                  ? "translate(" + A + "px, " + T + "px)"
                  : "translate3d(" + A + "px, " + T + "px, 0)"),
              l)
            )
          : Object.assign(
              {},
              U,
              (((a = {})[j] = D ? T + "px" : ""),
              (a[R] = O ? A + "px" : ""),
              (a.transform = ""),
              a)
            );
      }
      var X = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function G(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return X[t];
        });
      }
      var K = { start: "end", end: "start" };
      function J(t) {
        return t.replace(/start|end/g, function (t) {
          return K[t];
        });
      }
      function Q(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && s(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function tt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function te(t, e, n) {
        var o, s, a, l, u, c, f, d, p, m;
        return e === L
          ? tt(
              (function (t, e) {
                var n = r(t),
                  i = b(t),
                  o = n.visualViewport,
                  s = i.clientWidth,
                  a = i.clientHeight,
                  l = 0,
                  u = 0;
                if (o) {
                  (s = o.width), (a = o.height);
                  var c = v();
                  (c || (!c && "fixed" === e)) &&
                    ((l = o.offsetLeft), (u = o.offsetTop));
                }
                return { width: s, height: a, x: l + w(t), y: u };
              })(t, n)
            )
          : i(e)
          ? (((o = g(e, !1, "fixed" === n)).top = o.top + e.clientTop),
            (o.left = o.left + e.clientLeft),
            (o.bottom = o.top + e.clientHeight),
            (o.right = o.left + e.clientWidth),
            (o.width = e.clientWidth),
            (o.height = e.clientHeight),
            (o.x = o.left),
            (o.y = o.top),
            o)
          : tt(
              ((s = b(t)),
              (l = b(s)),
              (u = y(s)),
              (c = null == (a = s.ownerDocument) ? void 0 : a.body),
              (f = h(
                l.scrollWidth,
                l.clientWidth,
                c ? c.scrollWidth : 0,
                c ? c.clientWidth : 0
              )),
              (d = h(
                l.scrollHeight,
                l.clientHeight,
                c ? c.scrollHeight : 0,
                c ? c.clientHeight : 0
              )),
              (p = -u.scrollLeft + w(s)),
              (m = -u.scrollTop),
              "rtl" === E(c || l).direction &&
                (p += h(l.clientWidth, c ? c.clientWidth : 0) - f),
              { width: f, height: d, x: p, y: m })
            );
      }
      function tn() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function tr(t) {
        return Object.assign({}, tn(), t);
      }
      function ti(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e;
        }, {});
      }
      function to(t, e) {
        void 0 === e && (e = {});
        var n,
          r,
          s,
          a,
          l,
          u,
          c,
          f,
          p = e,
          m = p.placement,
          v = void 0 === m ? t.placement : m,
          y = p.strategy,
          w = void 0 === y ? t.strategy : y,
          A = p.boundary,
          P = p.rootBoundary,
          O = p.elementContext,
          k = void 0 === O ? B : O,
          D = p.altBoundary,
          j = p.padding,
          I = void 0 === j ? 0 : j,
          F = tr("number" != typeof I ? I : ti(I, R)),
          U = t.rects.popper,
          N = t.elements[void 0 !== D && D ? (k === B ? "reference" : B) : k],
          W =
            ((n = i(N) ? N : N.contextElement || b(t.elements.popper)),
            (r = void 0 === A ? "clippingParents" : A),
            (s = void 0 === P ? L : P),
            (c = (u = [].concat(
              "clippingParents" === r
                ? ((a = V(T(n))),
                  i(
                    (l =
                      ["absolute", "fixed"].indexOf(E(n).position) >= 0 && o(n)
                        ? S(n)
                        : n)
                  )
                    ? a.filter(function (t) {
                        return i(t) && Q(t, l) && "body" !== x(t);
                      })
                    : [])
                : [].concat(r),
              [s]
            ))[0]),
            ((f = u.reduce(function (t, e) {
              var r = te(n, e, w);
              return (
                (t.top = h(r.top, t.top)),
                (t.right = d(r.right, t.right)),
                (t.bottom = d(r.bottom, t.bottom)),
                (t.left = h(r.left, t.left)),
                t
              );
            }, te(n, c, w))).width = f.right - f.left),
            (f.height = f.bottom - f.top),
            (f.x = f.left),
            (f.y = f.top),
            f),
          $ = g(t.elements.reference),
          _ = H({
            reference: $,
            element: U,
            strategy: "absolute",
            placement: v,
          }),
          q = tt(Object.assign({}, U, _)),
          z = k === B ? q : $,
          Y = {
            top: W.top - z.top + F.top,
            bottom: z.bottom - W.bottom + F.bottom,
            left: W.left - z.left + F.left,
            right: z.right - W.right + F.right,
          },
          Z = t.modifiersData.offset;
        if (k === B && Z) {
          var X = Z[v];
          Object.keys(Y).forEach(function (t) {
            var e = [M, C].indexOf(t) >= 0 ? 1 : -1,
              n = ["top", C].indexOf(t) >= 0 ? "y" : "x";
            Y[t] += X[n] * e;
          });
        }
        return Y;
      }
      function ts(t, e, n) {
        return h(t, d(e, n));
      }
      function ta(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        );
      }
      function tl(t) {
        return ["top", M, C, k].some(function (e) {
          return t[e] >= 0;
        });
      }
      var tu =
        ((u =
          void 0 ===
          (l = (a = {
            defaultModifiers: [
              {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (t) {
                  var e = t.state,
                    n = t.instance,
                    i = t.options,
                    o = i.scroll,
                    s = void 0 === o || o,
                    a = i.resize,
                    l = void 0 === a || a,
                    u = r(e.elements.popper),
                    c = [].concat(
                      e.scrollParents.reference,
                      e.scrollParents.popper
                    );
                  return (
                    s &&
                      c.forEach(function (t) {
                        t.addEventListener("scroll", n.update, $);
                      }),
                    l && u.addEventListener("resize", n.update, $),
                    function () {
                      s &&
                        c.forEach(function (t) {
                          t.removeEventListener("scroll", n.update, $);
                        }),
                        l && u.removeEventListener("resize", n.update, $);
                    }
                  );
                },
                data: {},
              },
              {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (t) {
                  var e = t.state,
                    n = t.name;
                  e.modifiersData[n] = H({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                  });
                },
                data: {},
              },
              {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    r = n.gpuAcceleration,
                    i = n.adaptive,
                    o = n.roundOffsets,
                    s = void 0 === o || o,
                    a = {
                      placement: _(e.placement),
                      variation: q(e.placement),
                      popper: e.elements.popper,
                      popperRect: e.rects.popper,
                      gpuAcceleration: void 0 === r || r,
                      isFixed: "fixed" === e.options.strategy,
                    };
                  null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign(
                      {},
                      e.styles.popper,
                      Z(
                        Object.assign({}, a, {
                          offsets: e.modifiersData.popperOffsets,
                          position: e.options.strategy,
                          adaptive: void 0 === i || i,
                          roundOffsets: s,
                        })
                      )
                    )),
                    null != e.modifiersData.arrow &&
                      (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        Z(
                          Object.assign({}, a, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: s,
                          })
                        )
                      )),
                    (e.attributes.popper = Object.assign(
                      {},
                      e.attributes.popper,
                      { "data-popper-placement": e.placement }
                    ));
                },
                data: {},
              },
              {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (t) {
                  var e = t.state;
                  Object.keys(e.elements).forEach(function (t) {
                    var n = e.styles[t] || {},
                      r = e.attributes[t] || {},
                      i = e.elements[t];
                    o(i) &&
                      x(i) &&
                      (Object.assign(i.style, n),
                      Object.keys(r).forEach(function (t) {
                        var e = r[t];
                        !1 === e
                          ? i.removeAttribute(t)
                          : i.setAttribute(t, !0 === e ? "" : e);
                      }));
                  });
                },
                effect: function (t) {
                  var e = t.state,
                    n = {
                      popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                      },
                      arrow: { position: "absolute" },
                      reference: {},
                    };
                  return (
                    Object.assign(e.elements.popper.style, n.popper),
                    (e.styles = n),
                    e.elements.arrow &&
                      Object.assign(e.elements.arrow.style, n.arrow),
                    function () {
                      Object.keys(e.elements).forEach(function (t) {
                        var r = e.elements[t],
                          i = e.attributes[t] || {},
                          s = Object.keys(
                            e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                          ).reduce(function (t, e) {
                            return (t[e] = ""), t;
                          }, {});
                        o(r) &&
                          x(r) &&
                          (Object.assign(r.style, s),
                          Object.keys(i).forEach(function (t) {
                            r.removeAttribute(t);
                          }));
                      });
                    }
                  );
                },
                requires: ["computeStyles"],
              },
              {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    r = t.name,
                    i = n.offset,
                    o = void 0 === i ? [0, 0] : i,
                    s = F.reduce(function (t, n) {
                      var r, i, s, a, l, u;
                      return (
                        (t[n] =
                          ((r = e.rects),
                          (s = [k, "top"].indexOf((i = _(n))) >= 0 ? -1 : 1),
                          (l = (a =
                            "function" == typeof o
                              ? o(Object.assign({}, r, { placement: n }))
                              : o)[0]),
                          (u = a[1]),
                          (l = l || 0),
                          (u = (u || 0) * s),
                          [k, M].indexOf(i) >= 0
                            ? { x: u, y: l }
                            : { x: l, y: u })),
                        t
                      );
                    }, {}),
                    a = s[e.placement],
                    l = a.x,
                    u = a.y;
                  null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += l),
                    (e.modifiersData.popperOffsets.y += u)),
                    (e.modifiersData[r] = s);
                },
              },
              {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    r = t.name;
                  if (!e.modifiersData[r]._skip) {
                    for (
                      var i = n.mainAxis,
                        o = void 0 === i || i,
                        s = n.altAxis,
                        a = void 0 === s || s,
                        l = n.fallbackPlacements,
                        u = n.padding,
                        c = n.boundary,
                        f = n.rootBoundary,
                        h = n.altBoundary,
                        d = n.flipVariations,
                        p = void 0 === d || d,
                        m = n.allowedAutoPlacements,
                        v = e.options.placement,
                        g = _(v) === v,
                        y =
                          l ||
                          (g || !p
                            ? [G(v)]
                            : (function (t) {
                                if (_(t) === D) return [];
                                var e = G(t);
                                return [J(t), e, J(e)];
                              })(v)),
                        x = [v].concat(y).reduce(function (t, n) {
                          var r, i, o, s, a, l, h, d, v, g, y, x;
                          return t.concat(
                            _(n) === D
                              ? ((i = (r = {
                                  placement: n,
                                  boundary: c,
                                  rootBoundary: f,
                                  padding: u,
                                  flipVariations: p,
                                  allowedAutoPlacements: m,
                                }).placement),
                                (o = r.boundary),
                                (s = r.rootBoundary),
                                (a = r.padding),
                                (l = r.flipVariations),
                                (d =
                                  void 0 === (h = r.allowedAutoPlacements)
                                    ? F
                                    : h),
                                0 ===
                                  (y = (g = (v = q(i))
                                    ? l
                                      ? I
                                      : I.filter(function (t) {
                                          return q(t) === v;
                                        })
                                    : R).filter(function (t) {
                                    return d.indexOf(t) >= 0;
                                  })).length && (y = g),
                                Object.keys(
                                  (x = y.reduce(function (t, n) {
                                    return (
                                      (t[n] = to(e, {
                                        placement: n,
                                        boundary: o,
                                        rootBoundary: s,
                                        padding: a,
                                      })[_(n)]),
                                      t
                                    );
                                  }, {}))
                                ).sort(function (t, e) {
                                  return x[t] - x[e];
                                }))
                              : n
                          );
                        }, []),
                        b = e.rects.reference,
                        w = e.rects.popper,
                        E = new Map(),
                        A = !0,
                        P = x[0],
                        T = 0;
                      T < x.length;
                      T++
                    ) {
                      var V = x[T],
                        O = _(V),
                        S = q(V) === j,
                        L = ["top", C].indexOf(O) >= 0,
                        B = L ? "width" : "height",
                        U = to(e, {
                          placement: V,
                          boundary: c,
                          rootBoundary: f,
                          altBoundary: h,
                          padding: u,
                        }),
                        N = L ? (S ? M : k) : S ? C : "top";
                      b[B] > w[B] && (N = G(N));
                      var W = G(N),
                        $ = [];
                      if (
                        (o && $.push(U[O] <= 0),
                        a && $.push(U[N] <= 0, U[W] <= 0),
                        $.every(function (t) {
                          return t;
                        }))
                      ) {
                        (P = V), (A = !1);
                        break;
                      }
                      E.set(V, $);
                    }
                    if (A)
                      for (
                        var z = p ? 3 : 1,
                          H = function (t) {
                            var e = x.find(function (e) {
                              var n = E.get(e);
                              if (n)
                                return n.slice(0, t).every(function (t) {
                                  return t;
                                });
                            });
                            if (e) return (P = e), "break";
                          },
                          Y = z;
                        Y > 0 && "break" !== H(Y);
                        Y--
                      );
                    e.placement !== P &&
                      ((e.modifiersData[r]._skip = !0),
                      (e.placement = P),
                      (e.reset = !0));
                  }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 },
              },
              {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                  var e = t.state,
                    n = t.options,
                    r = t.name,
                    i = n.mainAxis,
                    o = n.altAxis,
                    s = n.boundary,
                    a = n.rootBoundary,
                    l = n.altBoundary,
                    u = n.padding,
                    c = n.tether,
                    f = void 0 === c || c,
                    p = n.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    v = to(e, {
                      boundary: s,
                      rootBoundary: a,
                      padding: u,
                      altBoundary: l,
                    }),
                    g = _(e.placement),
                    y = q(e.placement),
                    x = !y,
                    b = z(g),
                    w = "x" === b ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    V =
                      "function" == typeof m
                        ? m(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : m,
                    O =
                      "number" == typeof V
                        ? { mainAxis: V, altAxis: V }
                        : Object.assign({ mainAxis: 0, altAxis: 0 }, V),
                    D = e.modifiersData.offset
                      ? e.modifiersData.offset[e.placement]
                      : null,
                    R = { x: 0, y: 0 };
                  if (E) {
                    if (void 0 === i || i) {
                      var L,
                        B = "y" === b ? "top" : k,
                        I = "y" === b ? C : M,
                        F = "y" === b ? "height" : "width",
                        U = E[b],
                        N = U + v[B],
                        W = U - v[I],
                        $ = f ? -T[F] / 2 : 0,
                        H = y === j ? A[F] : T[F],
                        Y = y === j ? -T[F] : -A[F],
                        Z = e.elements.arrow,
                        X = f && Z ? P(Z) : { width: 0, height: 0 },
                        G = e.modifiersData["arrow#persistent"]
                          ? e.modifiersData["arrow#persistent"].padding
                          : tn(),
                        K = G[B],
                        J = G[I],
                        Q = ts(0, A[F], X[F]),
                        tt = x
                          ? A[F] / 2 - $ - Q - K - O.mainAxis
                          : H - Q - K - O.mainAxis,
                        te = x
                          ? -A[F] / 2 + $ + Q + J + O.mainAxis
                          : Y + Q + J + O.mainAxis,
                        tr = e.elements.arrow && S(e.elements.arrow),
                        ti = tr
                          ? "y" === b
                            ? tr.clientTop || 0
                            : tr.clientLeft || 0
                          : 0,
                        ta = null != (L = null == D ? void 0 : D[b]) ? L : 0,
                        tl = ts(
                          f ? d(N, U + tt - ta - ti) : N,
                          U,
                          f ? h(W, U + te - ta) : W
                        );
                      (E[b] = tl), (R[b] = tl - U);
                    }
                    if (void 0 !== o && o) {
                      var tu,
                        tc,
                        tf = "x" === b ? "top" : k,
                        th = "x" === b ? C : M,
                        td = E[w],
                        tp = "y" === w ? "height" : "width",
                        tm = td + v[tf],
                        tv = td - v[th],
                        tg = -1 !== ["top", k].indexOf(g),
                        ty = null != (tc = null == D ? void 0 : D[w]) ? tc : 0,
                        tx = tg ? tm : td - A[tp] - T[tp] - ty + O.altAxis,
                        tb = tg ? td + A[tp] + T[tp] - ty - O.altAxis : tv,
                        tw =
                          f && tg
                            ? (tu = ts(tx, td, tb)) > tb
                              ? tb
                              : tu
                            : ts(f ? tx : tm, td, f ? tb : tv);
                      (E[w] = tw), (R[w] = tw - td);
                    }
                    e.modifiersData[r] = R;
                  }
                },
                requiresIfExists: ["offset"],
              },
              {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                  var e,
                    n,
                    r = t.state,
                    i = t.name,
                    o = t.options,
                    s = r.elements.arrow,
                    a = r.modifiersData.popperOffsets,
                    l = _(r.placement),
                    u = z(l),
                    c = [k, M].indexOf(l) >= 0 ? "height" : "width";
                  if (s && a) {
                    var f = tr(
                        "number" !=
                          typeof (e =
                            "function" == typeof (e = o.padding)
                              ? e(
                                  Object.assign({}, r.rects, {
                                    placement: r.placement,
                                  })
                                )
                              : e)
                          ? e
                          : ti(e, R)
                      ),
                      h = P(s),
                      d = "y" === u ? "top" : k,
                      p = "y" === u ? C : M,
                      m =
                        r.rects.reference[c] +
                        r.rects.reference[u] -
                        a[u] -
                        r.rects.popper[c],
                      v = a[u] - r.rects.reference[u],
                      g = S(s),
                      y = g
                        ? "y" === u
                          ? g.clientHeight || 0
                          : g.clientWidth || 0
                        : 0,
                      x = f[d],
                      b = y - h[c] - f[p],
                      w = y / 2 - h[c] / 2 + (m / 2 - v / 2),
                      E = ts(x, w, b);
                    r.modifiersData[i] =
                      (((n = {})[u] = E), (n.centerOffset = E - w), n);
                  }
                },
                effect: function (t) {
                  var e = t.state,
                    n = t.options.element,
                    r = void 0 === n ? "[data-popper-arrow]" : n;
                  null != r &&
                    ("string" != typeof r ||
                      (r = e.elements.popper.querySelector(r))) &&
                    Q(e.elements.popper, r) &&
                    (e.elements.arrow = r);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
              },
              {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (t) {
                  var e = t.state,
                    n = t.name,
                    r = e.rects.reference,
                    i = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    s = to(e, { elementContext: "reference" }),
                    a = to(e, { altBoundary: !0 }),
                    l = ta(s, r),
                    u = ta(a, i, o),
                    c = tl(l),
                    f = tl(u);
                  (e.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: u,
                    isReferenceHidden: c,
                    hasPopperEscaped: f,
                  }),
                    (e.attributes.popper = Object.assign(
                      {},
                      e.attributes.popper,
                      {
                        "data-popper-reference-hidden": c,
                        "data-popper-escaped": f,
                      }
                    ));
                },
              },
            ],
          }).defaultModifiers)
            ? []
            : l),
        (f = void 0 === (c = a.defaultOptions) ? N : c),
        function (t, e, n) {
          void 0 === n && (n = f);
          var s,
            a,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, N, f),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            c = [],
            h = !1,
            d = {
              state: l,
              setOptions: function (n) {
                var r,
                  o,
                  s,
                  a,
                  h,
                  p = "function" == typeof n ? n(l.options) : n;
                m(),
                  (l.options = Object.assign({}, f, l.options, p)),
                  (l.scrollParents = {
                    reference: i(t)
                      ? V(t)
                      : t.contextElement
                      ? V(t.contextElement)
                      : [],
                    popper: V(e),
                  });
                var v =
                  ((o = Object.keys(
                    (r = []
                      .concat(u, l.options.modifiers)
                      .reduce(function (t, e) {
                        var n = t[e.name];
                        return (
                          (t[e.name] = n
                            ? Object.assign({}, n, e, {
                                options: Object.assign(
                                  {},
                                  n.options,
                                  e.options
                                ),
                                data: Object.assign({}, n.data, e.data),
                              })
                            : e),
                          t
                        );
                      }, {}))
                  ).map(function (t) {
                    return r[t];
                  })),
                  (s = new Map()),
                  (a = new Set()),
                  (h = []),
                  o.forEach(function (t) {
                    s.set(t.name, t);
                  }),
                  o.forEach(function (t) {
                    a.has(t.name) ||
                      (function t(e) {
                        a.add(e.name),
                          []
                            .concat(e.requires || [], e.requiresIfExists || [])
                            .forEach(function (e) {
                              if (!a.has(e)) {
                                var n = s.get(e);
                                n && t(n);
                              }
                            }),
                          h.push(e);
                      })(t);
                  }),
                  U.reduce(function (t, e) {
                    return t.concat(
                      h.filter(function (t) {
                        return t.phase === e;
                      })
                    );
                  }, []));
                return (
                  (l.orderedModifiers = v.filter(function (t) {
                    return t.enabled;
                  })),
                  l.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      r = t.effect;
                    if ("function" == typeof r) {
                      var i = r({
                        state: l,
                        name: e,
                        instance: d,
                        options: void 0 === n ? {} : n,
                      });
                      c.push(i || function () {});
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!h) {
                  var t,
                    e,
                    n,
                    i,
                    s,
                    a,
                    u,
                    c,
                    f,
                    m,
                    v,
                    E,
                    T = l.elements,
                    V = T.reference,
                    O = T.popper;
                  if (W(V, O)) {
                    (l.rects = {
                      reference:
                        ((e = S(O)),
                        (n = "fixed" === l.options.strategy),
                        (i = o(e)),
                        (c =
                          o(e) &&
                          ((a =
                            p((s = e.getBoundingClientRect()).width) /
                              e.offsetWidth || 1),
                          (u = p(s.height) / e.offsetHeight || 1),
                          1 !== a || 1 !== u)),
                        (f = b(e)),
                        (m = g(V, c, n)),
                        (v = { scrollLeft: 0, scrollTop: 0 }),
                        (E = { x: 0, y: 0 }),
                        (i || (!i && !n)) &&
                          (("body" !== x(e) || A(f)) &&
                            (v =
                              (t = e) !== r(t) && o(t)
                                ? {
                                    scrollLeft: t.scrollLeft,
                                    scrollTop: t.scrollTop,
                                  }
                                : y(t)),
                          o(e)
                            ? ((E = g(e, !0)),
                              (E.x += e.clientLeft),
                              (E.y += e.clientTop))
                            : f && (E.x = w(f))),
                        {
                          x: m.left + v.scrollLeft - E.x,
                          y: m.top + v.scrollTop - E.y,
                          width: m.width,
                          height: m.height,
                        }),
                      popper: P(O),
                    }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (t) {
                        return (l.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var C = 0; C < l.orderedModifiers.length; C++) {
                      if (!0 === l.reset) {
                        (l.reset = !1), (C = -1);
                        continue;
                      }
                      var M = l.orderedModifiers[C],
                        k = M.fn,
                        D = M.options,
                        R = void 0 === D ? {} : D,
                        j = M.name;
                      "function" == typeof k &&
                        (l =
                          k({ state: l, options: R, name: j, instance: d }) ||
                          l);
                    }
                  }
                }
              },
              update:
                ((s = function () {
                  return new Promise(function (t) {
                    d.forceUpdate(), t(l);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (a = void 0), t(s());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                m(), (h = !0);
              },
            };
          if (!W(t, e)) return d;
          function m() {
            c.forEach(function (t) {
              return t();
            }),
              (c = []);
          }
          return (
            d.setOptions(n).then(function (t) {
              !h && n.onFirstUpdate && n.onFirstUpdate(t);
            }),
            d
          );
        });
    },
    24394: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return i;
        },
      });
      var r = function () {},
        i = function () {};
    },
    75132: function (t, e) {
      "use strict";
      var n, r, i, o;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          ACTION_FAST_REFRESH: function () {
            return f;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_REFRESH: function () {
            return s;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return h;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          PrefetchCacheEntryStatus: function () {
            return r;
          },
          PrefetchKind: function () {
            return n;
          },
          isThenable: function () {
            return d;
          },
        });
      let s = "refresh",
        a = "navigate",
        l = "restore",
        u = "server-patch",
        c = "prefetch",
        f = "fast-refresh",
        h = "server-action";
      function d(t) {
        return (
          t &&
          ("object" == typeof t || "function" == typeof t) &&
          "function" == typeof t.then
        );
      }
      ((i = n || (n = {})).AUTO = "auto"),
        (i.FULL = "full"),
        (i.TEMPORARY = "temporary"),
        ((o = r || (r = {})).fresh = "fresh"),
        (o.reusable = "reusable"),
        (o.expired = "expired"),
        (o.stale = "stale"),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    92842: function (t, e, n) {
      "use strict";
      function r(t, e, n, r) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(68796),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    63500: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(10260),
        i = n(85893),
        o = r._(n(67294)),
        s = n(64813),
        a = n(65853),
        l = n(5058),
        u = n(45782),
        c = n(28878),
        f = n(37171),
        h = n(3068),
        d = n(91487),
        p = n(92842),
        m = n(41412),
        v = n(75132),
        g = new Set();
      function y(t, e, n, r, i, o) {
        if (o || (0, a.isLocalURL)(e)) {
          if (!r.bypassPrefetchedCheck) {
            let i =
              e +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (g.has(i)) return;
            g.add(i);
          }
          (async () => (o ? t.prefetch(e, i) : t.prefetch(e, n, r)))().catch(
            (t) => {}
          );
        }
      }
      function x(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = o.default.forwardRef(function (t, e) {
        let n, r;
        let {
          href: l,
          as: g,
          children: b,
          prefetch: w = null,
          passHref: E,
          replace: A,
          shallow: P,
          scroll: T,
          locale: V,
          onClick: O,
          onMouseEnter: S,
          onTouchStart: C,
          legacyBehavior: M = !1,
          ...k
        } = t;
        (n = b),
          M &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n }));
        let D = o.default.useContext(f.RouterContext),
          R = o.default.useContext(h.AppRouterContext),
          j = null != D ? D : R,
          L = !D,
          B = !1 !== w,
          I = null === w ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: F, as: U } = o.default.useMemo(() => {
            if (!D) {
              let t = x(l);
              return { href: t, as: g ? x(g) : t };
            }
            let [t, e] = (0, s.resolveHref)(D, l, !0);
            return { href: t, as: g ? (0, s.resolveHref)(D, g) : e || t };
          }, [D, l, g]),
          N = o.default.useRef(F),
          W = o.default.useRef(U);
        M && (r = o.default.Children.only(n));
        let $ = M ? r && "object" == typeof r && r.ref : e,
          [_, q, z] = (0, d.useIntersection)({ rootMargin: "200px" }),
          H = o.default.useCallback(
            (t) => {
              (W.current !== U || N.current !== F) &&
                (z(), (W.current = U), (N.current = F)),
                _(t),
                $ &&
                  ("function" == typeof $
                    ? $(t)
                    : "object" == typeof $ && ($.current = t));
            },
            [U, $, F, z, _]
          );
        o.default.useEffect(() => {
          j && q && B && y(j, F, U, { locale: V }, { kind: I }, L);
        }, [U, F, q, V, B, null == D ? void 0 : D.locale, j, L, I]);
        let Y = {
          ref: H,
          onClick(t) {
            M || "function" != typeof O || O(t),
              M &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              j &&
                !t.defaultPrevented &&
                (function (t, e, n, r, i, s, l, u, c) {
                  let { nodeName: f } = t.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  t.preventDefault();
                  let h = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[i ? "replace" : "push"](n, r, {
                          shallow: s,
                          locale: u,
                          scroll: t,
                        })
                      : e[i ? "replace" : "push"](r || n, { scroll: t });
                  };
                  c ? o.default.startTransition(h) : h();
                })(t, j, F, U, A, P, T, V, L);
          },
          onMouseEnter(t) {
            M || "function" != typeof S || S(t),
              M &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              j &&
                (B || !L) &&
                y(
                  j,
                  F,
                  U,
                  { locale: V, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
          onTouchStart: function (t) {
            M || "function" != typeof C || C(t),
              M &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              j &&
                (B || !L) &&
                y(
                  j,
                  F,
                  U,
                  { locale: V, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) Y.href = U;
        else if (!M || E || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== V ? V : null == D ? void 0 : D.locale,
            e =
              (null == D ? void 0 : D.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                U,
                t,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales
              );
          Y.href =
            e ||
            (0, m.addBasePath)(
              (0, c.addLocale)(U, t, null == D ? void 0 : D.defaultLocale)
            );
        }
        return M
          ? o.default.cloneElement(r, Y)
          : (0, i.jsx)("a", { ...k, ...Y, children: n });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    91487: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(67294),
        i = n(66078),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: n, disabled: l } = t,
          u = l || !o,
          [c, f] = (0, r.useState)(!1),
          h = (0, r.useRef)(null),
          d = (0, r.useCallback)((t) => {
            h.current = t;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let t = h.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = a.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (r && (e = s.get(r))) return e;
                    let i = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = i.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: i,
                      }),
                      a.push(n),
                      s.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    o.set(t, e),
                    i.observe(t),
                    function () {
                      if ((o.delete(t), i.unobserve(t), 0 === o.size)) {
                        i.disconnect(), s.delete(r);
                        let t = a.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && f(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let t = (0, i.requestIdleCallback)(() => f(!0));
              return () => (0, i.cancelIdleCallback)(t);
            }
          }, [u, n, e, c, h.current]),
          [
            d,
            c,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    41664: function (t, e, n) {
      t.exports = n(63500);
    },
    95372: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      var r = n(67294);
      function i(t, e = []) {
        let n = (0, r.useRef)(t);
        return (
          (0, r.useEffect)(() => {
            n.current = t;
          }),
          (0, r.useCallback)((...t) => n.current?.(...t), e)
        );
      }
    },
    83658: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return o;
        },
      });
      var r = n(95372),
        i = n(67294);
      function o(t = {}) {
        let { onClose: e, onOpen: n, isOpen: o, id: s } = t,
          a = (0, r.W)(n),
          l = (0, r.W)(e),
          [u, c] = (0, i.useState)(t.defaultIsOpen || !1),
          f = void 0 !== o ? o : u,
          h = void 0 !== o,
          d = (0, i.useId)(),
          p = s ?? `disclosure-${d}`,
          m = (0, i.useCallback)(() => {
            h || c(!1), l?.();
          }, [h, l]),
          v = (0, i.useCallback)(() => {
            h || c(!0), a?.();
          }, [h, a]),
          g = (0, i.useCallback)(() => {
            f ? m() : v();
          }, [f, v, m]);
        return {
          isOpen: f,
          onOpen: v,
          onClose: m,
          onToggle: g,
          isControlled: h,
          getButtonProps: function (t = {}) {
            return {
              ...t,
              "aria-expanded": f,
              "aria-controls": p,
              onClick(e) {
                t.onClick?.(e), g();
              },
            };
          },
          getDisclosureProps: function (t = {}) {
            return { ...t, hidden: !f, id: p };
          },
        };
      }
    },
    74247: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
      });
      var r = n(67294),
        i = n(95372);
      function o(t, e, n, o) {
        let s = (0, i.W)(n);
        return (
          (0, r.useEffect)(() => {
            let r = "function" == typeof t ? t() : t ?? document;
            if (n && r)
              return (
                r.addEventListener(e, s, o),
                () => {
                  r.removeEventListener(e, s, o);
                }
              );
          }, [e, t, o, s, n]),
          () => {
            let n = "function" == typeof t ? t() : t ?? document;
            n?.removeEventListener(e, s, o);
          }
        );
      }
    },
    29062: function (t, e, n) {
      "use strict";
      n.d(e, {
        lq: function () {
          return i;
        },
        qq: function () {
          return o;
        },
      });
      var r = n(67294);
      function i(...t) {
        return (e) => {
          t.forEach((t) => {
            !(function (t, e) {
              if (null != t) {
                if ("function" == typeof t) {
                  t(e);
                  return;
                }
                try {
                  t.current = e;
                } catch (n) {
                  throw Error(`Cannot assign value '${e}' to ref '${t}'`);
                }
              }
            })(t, e);
          });
        };
      }
      function o(...t) {
        return (0, r.useMemo)(() => i(...t), t);
      }
    },
    4840: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return i;
        },
      });
      var r = n(67294);
      let i = (t, e) => {
        let n = (0, r.useRef)(!1),
          i = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          if (n.current && i.current) return t();
          i.current = !0;
        }, e),
          (0, r.useEffect)(
            () => (
              (n.current = !0),
              () => {
                n.current = !1;
              }
            ),
            []
          );
      };
    },
    78627: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return g;
        },
      });
      var r = n(29062),
        i = n(95551),
        o = n(67294),
        s = n(38898);
      let a = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state: t }) => {
            t.styles.popper.width = `${t.rects.reference.width}px`;
          },
          effect:
            ({ state: t }) =>
            () => {
              let e = t.elements.reference;
              t.elements.popper.style.width = `${e.offsetWidth}px`;
            },
        },
        l = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: ({ state: t }) => {
            u(t);
          },
          effect:
            ({ state: t }) =>
            () => {
              u(t);
            },
        },
        u = (t) => {
          t.elements.popper.style.setProperty(
            s.Dq.transformOrigin.var,
            (0, s.mv)(t.placement)
          );
        },
        c = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: ({ state: t }) => {
            f(t);
          },
        },
        f = (t) => {
          if (!t.placement) return;
          let e = h(t.placement);
          if (t.elements?.arrow && e) {
            Object.assign(t.elements.arrow.style, {
              [e.property]: e.value,
              width: s.Dq.arrowSize.varRef,
              height: s.Dq.arrowSize.varRef,
              zIndex: -1,
            });
            let n = {
              [s.Dq.arrowSizeHalf
                .var]: `calc(${s.Dq.arrowSize.varRef} / 2 - 1px)`,
              [s.Dq.arrowOffset.var]: `calc(${s.Dq.arrowSizeHalf.varRef} * -1)`,
            };
            for (let e in n) t.elements.arrow.style.setProperty(e, n[e]);
          }
        },
        h = (t) =>
          t.startsWith("top")
            ? { property: "bottom", value: s.Dq.arrowOffset.varRef }
            : t.startsWith("bottom")
            ? { property: "top", value: s.Dq.arrowOffset.varRef }
            : t.startsWith("left")
            ? { property: "right", value: s.Dq.arrowOffset.varRef }
            : t.startsWith("right")
            ? { property: "left", value: s.Dq.arrowOffset.varRef }
            : void 0,
        d = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: ({ state: t }) => {
            p(t);
          },
          effect:
            ({ state: t }) =>
            () => {
              p(t);
            },
        },
        p = (t) => {
          if (!t.elements.arrow) return;
          let e = t.elements.arrow.querySelector("[data-popper-arrow-inner]");
          if (!e) return;
          let n = (0, s.Ke)(t.placement);
          n && e.style.setProperty("--popper-arrow-default-shadow", n),
            Object.assign(e.style, {
              transform: "rotate(45deg)",
              background: s.Dq.arrowBg.varRef,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "inherit",
              boxShadow:
                "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
            });
        },
        m = {
          "start-start": { ltr: "left-start", rtl: "right-start" },
          "start-end": { ltr: "left-end", rtl: "right-end" },
          "end-start": { ltr: "right-start", rtl: "left-start" },
          "end-end": { ltr: "right-end", rtl: "left-end" },
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        },
        v = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start",
        };
      function g(t = {}) {
        let {
            enabled: e = !0,
            modifiers: n,
            placement: u = "bottom",
            strategy: f = "absolute",
            arrowPadding: h = 8,
            eventListeners: p = !0,
            offset: g,
            gutter: y = 8,
            flip: x = !0,
            boundary: b = "clippingParents",
            preventOverflow: w = !0,
            matchWidth: E,
            direction: A = "ltr",
          } = t,
          P = (0, o.useRef)(null),
          T = (0, o.useRef)(null),
          V = (0, o.useRef)(null),
          O = (function (t, e = "ltr") {
            let n = m[t]?.[e] || t;
            return "ltr" === e ? n : v[t] ?? n;
          })(u, A),
          S = (0, o.useRef)(() => {}),
          C = (0, o.useCallback)(() => {
            e &&
              P.current &&
              T.current &&
              (S.current?.(),
              (V.current = (0, i.fi)(P.current, T.current, {
                placement: O,
                modifiers: [
                  d,
                  c,
                  l,
                  { ...a, enabled: !!E },
                  { name: "eventListeners", ...(0, s.$B)(p) },
                  { name: "arrow", options: { padding: h } },
                  { name: "offset", options: { offset: g ?? [0, y] } },
                  { name: "flip", enabled: !!x, options: { padding: 8 } },
                  {
                    name: "preventOverflow",
                    enabled: !!w,
                    options: { boundary: b },
                  },
                  ...(n ?? []),
                ],
                strategy: f,
              })),
              V.current.forceUpdate(),
              (S.current = V.current.destroy));
          }, [O, e, n, E, p, h, g, y, x, w, b, f]);
        (0, o.useEffect)(
          () => () => {
            P.current ||
              T.current ||
              (V.current?.destroy(), (V.current = null));
          },
          []
        );
        let M = (0, o.useCallback)(
            (t) => {
              (P.current = t), C();
            },
            [C]
          ),
          k = (0, o.useCallback)(
            (t = {}, e = null) => ({ ...t, ref: (0, r.lq)(M, e) }),
            [M]
          ),
          D = (0, o.useCallback)(
            (t) => {
              (T.current = t), C();
            },
            [C]
          ),
          R = (0, o.useCallback)(
            (t = {}, e = null) => ({
              ...t,
              ref: (0, r.lq)(D, e),
              style: {
                ...t.style,
                position: f,
                minWidth: E ? void 0 : "max-content",
                inset: "0 auto auto 0",
              },
            }),
            [f, D, E]
          ),
          j = (0, o.useCallback)((t = {}, e = null) => {
            let { size: n, shadowColor: r, bg: i, style: o, ...s } = t;
            return {
              ...s,
              ref: e,
              "data-popper-arrow": "",
              style: (function (t) {
                let { size: e, shadowColor: n, bg: r, style: i } = t,
                  o = { ...i, position: "absolute" };
                return (
                  e && (o["--popper-arrow-size"] = e),
                  n && (o["--popper-arrow-shadow-color"] = n),
                  r && (o["--popper-arrow-bg"] = r),
                  o
                );
              })(t),
            };
          }, []),
          L = (0, o.useCallback)(
            (t = {}, e = null) => ({
              ...t,
              ref: e,
              "data-popper-arrow-inner": "",
            }),
            []
          );
        return {
          update() {
            V.current?.update();
          },
          forceUpdate() {
            V.current?.forceUpdate();
          },
          transformOrigin: s.Dq.transformOrigin.varRef,
          referenceRef: M,
          popperRef: D,
          getPopperProps: R,
          getArrowProps: j,
          getArrowInnerProps: L,
          getReferenceProps: k,
        };
      }
    },
    38898: function (t, e, n) {
      "use strict";
      n.d(e, {
        $B: function () {
          return u;
        },
        Dq: function () {
          return i;
        },
        Ke: function () {
          return o;
        },
        mv: function () {
          return a;
        },
      });
      let r = (t, e) => ({
          var: t,
          varRef: e ? `var(${t}, ${e})` : `var(${t})`,
        }),
        i = {
          arrowShadowColor: r("--popper-arrow-shadow-color"),
          arrowSize: r("--popper-arrow-size", "8px"),
          arrowSizeHalf: r("--popper-arrow-size-half"),
          arrowBg: r("--popper-arrow-bg"),
          transformOrigin: r("--popper-transform-origin"),
          arrowOffset: r("--popper-arrow-offset"),
        };
      function o(t) {
        return t.includes("top")
          ? "1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("bottom")
          ? "-1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("right")
          ? "-1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("left")
          ? "1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : void 0;
      }
      let s = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom",
        },
        a = (t) => s[t],
        l = { scroll: !0, resize: !0 };
      function u(t) {
        return "object" == typeof t
          ? { enabled: !0, options: { ...l, ...t } }
          : { enabled: t, options: l };
      }
    },
    65544: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(8297);
      function i(t) {
        return (0, r.C)(t, ["styleConfig", "size", "variant", "colorScheme"]);
      }
    },
    20397: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return r;
        },
        Q: function () {
          return i;
        },
      });
      let r = (t) => (t ? "" : void 0),
        i = (t) => !!t || void 0;
    },
    68928: function (t, e, n) {
      "use strict";
      function r(...t) {
        return function (...e) {
          t.forEach((t) => t?.(...e));
        };
      }
      function i(...t) {
        return function (e) {
          t.some((t) => (t?.(e), e?.defaultPrevented));
        };
      }
      n.d(e, {
        P: function () {
          return r;
        },
        v: function () {
          return i;
        },
      });
    },
    21326: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          null != t &&
          "object" == typeof t &&
          "nodeType" in t &&
          t.nodeType === Node.ELEMENT_NODE
        );
      }
      function i(t) {
        let e = t.getAttribute("contenteditable");
        return "false" !== e && null != e;
      }
      function o(t) {
        return (
          !0 == !!t.getAttribute("disabled") ||
          !0 == !!t.getAttribute("aria-disabled")
        );
      }
      n.d(e, {
        Re: function () {
          return r;
        },
        iU: function () {
          return i;
        },
        nV: function () {
          return o;
        },
        oI: function () {
          return function t(e) {
            return !!(e.parentElement && t(e.parentElement)) || e.hidden;
          };
        },
      });
    },
    59255: function (t, e, n) {
      "use strict";
      n.d(e, {
        dh: function () {
          return s;
        },
        kR: function () {
          return i;
        },
        vY: function () {
          return a;
        },
      });
      var r = n(21326);
      function i(t) {
        return o(t)?.defaultView ?? window;
      }
      function o(t) {
        return (0, r.Re)(t) ? t.ownerDocument : document;
      }
      function s(t) {
        return t.view ?? window;
      }
      function a(t) {
        return o(t).activeElement;
      }
    },
    90191: function (t, e, n) {
      "use strict";
      n.d(e, {
        EB: function () {
          return s;
        },
        Wq: function () {
          return a;
        },
      });
      var r = n(21326);
      let i = (t) => t.hasAttribute("tabindex"),
        o = (t) => i(t) && -1 === t.tabIndex;
      function s(t) {
        if (!(0, r.Re)(t) || (0, r.oI)(t) || (0, r.nV)(t)) return !1;
        let { localName: e } = t;
        if (["input", "select", "textarea", "button"].indexOf(e) >= 0)
          return !0;
        let n = {
          a: () => t.hasAttribute("href"),
          audio: () => t.hasAttribute("controls"),
          video: () => t.hasAttribute("controls"),
        };
        return e in n ? n[e]() : !!(0, r.iU)(t) || i(t);
      }
      function a(t) {
        return !!t && (0, r.Re)(t) && s(t) && !o(t);
      }
    },
    15947: function (t, e, n) {
      "use strict";
      n.d(e, {
        oO: function () {
          return o;
        },
      });
      var r = n(67294),
        i = n(240);
      function o() {
        let t = (0, r.useContext)(i.O);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: n, register: o } = t,
          s = (0, r.useId)();
        return (
          (0, r.useEffect)(() => o(s), []),
          !e && n ? [!1, () => n && n(s)] : [!0]
        );
      }
    },
    25364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(67294).createContext)({});
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(67294).createContext)(null);
    },
    37367: function (t, e, n) {
      "use strict";
      n.d(e, {
        frameData: function () {
          return r;
        },
      });
      let r = { delta: 0, timestamp: 0 };
    },
    30404: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return d;
        },
        iW: function () {
          return p;
        },
        Z_: function () {
          return h;
        },
      });
      let r = (1 / 60) * 1e3,
        i =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r);
      var s = n(37367);
      let a = !0,
        l = !1,
        u = !1,
        c = ["read", "update", "preRender", "render", "postRender"],
        f = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1,
                s = new WeakSet(),
                a = {
                  schedule: (t, o = !1, a = !1) => {
                    let l = a && i,
                      u = l ? e : n;
                    return (
                      o && s.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), s.delete(t);
                  },
                  process: (l) => {
                    if (i) {
                      o = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([e, n] = [n, e]),
                      (n.length = 0),
                      (r = e.length))
                    )
                      for (let n = 0; n < r; n++) {
                        let r = e[n];
                        r(l), s.has(r) && (a.schedule(r), t());
                      }
                    (i = !1), o && ((o = !1), a.process(l));
                  },
                };
              return a;
            })(() => (l = !0))),
            t
          ),
          {}
        ),
        h = c.reduce((t, e) => {
          let n = f[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (l || g(), n.schedule(t, e, r))), t
          );
        }, {}),
        d = c.reduce((t, e) => ((t[e] = f[e].cancel), t), {}),
        p = c.reduce(
          (t, e) => ((t[e] = () => f[e].process(s.frameData)), t),
          {}
        ),
        m = (t) => f[t].process(s.frameData),
        v = (t) => {
          (l = !1),
            (s.frameData.delta = a
              ? r
              : Math.max(Math.min(t - s.frameData.timestamp, 40), 1)),
            (s.frameData.timestamp = t),
            (u = !0),
            c.forEach(m),
            (u = !1),
            l && ((a = !1), o(v));
        },
        g = () => {
          (l = !0), (a = !0), u || o(v);
        };
    },
    33654: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return iX;
        },
      });
      var r,
        i,
        o,
        s,
        a,
        l = n(67294);
      let u = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        c = (0, l.createContext)({});
      var f = n(240),
        h = n(58868);
      let d = (0, l.createContext)({ strict: !1 });
      function p(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function m(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function v(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let g = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function y(t) {
        return v(t.animate) || g.some((e) => m(t[e]));
      }
      function x(t) {
        return !!(y(t) || t.variants);
      }
      function b(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let w = (t) => ({ isEnabled: (e) => t.some((t) => !!e[t]) }),
        E = {
          measureLayout: w(["layout", "layoutId", "drag"]),
          animation: w([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: w(["exit"]),
          drag: w(["drag", "dragControls"]),
          focus: w(["whileFocus"]),
          hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: w(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var A = n(11741),
        P = n(96681);
      let T = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        V = 1;
      var O = n(25364);
      class S extends l.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      let C = (0, l.createContext)({}),
        M = Symbol.for("motionComponentSymbol"),
        k = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function D(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let R = {},
        j = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        L = new Set(j);
      function B(t, { layout: e, layoutId: n }) {
        return (
          L.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!R[t] || "opacity" === t))
        );
      }
      let I = (t) => !!(null == t ? void 0 : t.getVelocity),
        F = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        U = (t, e) => j.indexOf(t) - j.indexOf(e);
      function N(t) {
        return t.startsWith("--");
      }
      let W = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        $ = (t, e, n) => Math.min(Math.max(n, t), e),
        _ = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        q = { ..._, transform: (t) => $(0, 1, t) },
        z = { ..._, default: 1 },
        H = (t) => Math.round(1e5 * t) / 1e5,
        Y = /(-)?([\d]*\.?[\d])+/g,
        Z =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        X =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function G(t) {
        return "string" == typeof t;
      }
      let K = (t) => ({
          test: (e) => G(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        J = K("deg"),
        Q = K("%"),
        tt = K("px"),
        te = K("vh"),
        tn = K("vw"),
        tr = {
          ...Q,
          parse: (t) => Q.parse(t) / 100,
          transform: (t) => Q.transform(100 * t),
        },
        ti = { ..._, transform: Math.round },
        to = {
          borderWidth: tt,
          borderTopWidth: tt,
          borderRightWidth: tt,
          borderBottomWidth: tt,
          borderLeftWidth: tt,
          borderRadius: tt,
          radius: tt,
          borderTopLeftRadius: tt,
          borderTopRightRadius: tt,
          borderBottomRightRadius: tt,
          borderBottomLeftRadius: tt,
          width: tt,
          maxWidth: tt,
          height: tt,
          maxHeight: tt,
          size: tt,
          top: tt,
          right: tt,
          bottom: tt,
          left: tt,
          padding: tt,
          paddingTop: tt,
          paddingRight: tt,
          paddingBottom: tt,
          paddingLeft: tt,
          margin: tt,
          marginTop: tt,
          marginRight: tt,
          marginBottom: tt,
          marginLeft: tt,
          rotate: J,
          rotateX: J,
          rotateY: J,
          rotateZ: J,
          scale: z,
          scaleX: z,
          scaleY: z,
          scaleZ: z,
          skew: J,
          skewX: J,
          skewY: J,
          distance: tt,
          translateX: tt,
          translateY: tt,
          translateZ: tt,
          x: tt,
          y: tt,
          z: tt,
          perspective: tt,
          transformPerspective: tt,
          opacity: q,
          originX: tr,
          originY: tr,
          originZ: tt,
          zIndex: ti,
          fillOpacity: q,
          strokeOpacity: q,
          numOctaves: ti,
        };
      function ts(t, e, n, r) {
        let {
          style: i,
          vars: o,
          transform: s,
          transformKeys: a,
          transformOrigin: l,
        } = t;
        a.length = 0;
        let u = !1,
          c = !1,
          f = !0;
        for (let t in e) {
          let n = e[t];
          if (N(t)) {
            o[t] = n;
            continue;
          }
          let r = to[t],
            h = W(n, r);
          if (L.has(t)) {
            if (((u = !0), (s[t] = h), a.push(t), !f)) continue;
            n !== (r.default || 0) && (f = !1);
          } else t.startsWith("origin") ? ((c = !0), (l[t] = h)) : (i[t] = h);
        }
        if (
          (!e.transform &&
            (u || r
              ? (i.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: r = !0,
                  },
                  i,
                  o
                ) {
                  let s = "";
                  for (let n of (e.sort(U), e)) s += `${F[n] || n}(${t[n]}) `;
                  return (
                    n && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    o ? (s = o(t, i ? "" : s)) : r && i && (s = "none"),
                    s
                  );
                })(t, n, f, r))
              : i.transform && (i.transform = "none")),
          c)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = l;
          i.transformOrigin = `${t} ${e} ${n}`;
        }
      }
      let ta = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });
      function tl(t, e, n) {
        for (let r in e) I(e[r]) || B(r, n) || (t[r] = e[r]);
      }
      let tu = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function tc(t) {
        return tu.has(t);
      }
      let tf = (t) => !tc(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (tf = (t) => (t.startsWith("on") ? !tc(t) : r(t)));
      } catch (t) {}
      function th(t, e, n) {
        return "string" == typeof t ? t : tt.transform(e + n * t);
      }
      let td = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tp = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tm(
        t,
        {
          attrX: e,
          attrY: n,
          originX: r,
          originY: i,
          pathLength: o,
          pathSpacing: s = 1,
          pathOffset: a = 0,
          ...l
        },
        u,
        c,
        f
      ) {
        if ((ts(t, l, u, f), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: d, dimensions: p } = t;
        h.transform && (p && (d.transform = h.transform), delete h.transform),
          p &&
            (void 0 !== r || void 0 !== i || d.transform) &&
            (d.transformOrigin = (function (t, e, n) {
              let r = th(e, t.x, t.width),
                i = th(n, t.y, t.height);
              return `${r} ${i}`;
            })(p, void 0 !== r ? r : 0.5, void 0 !== i ? i : 0.5)),
          void 0 !== e && (h.x = e),
          void 0 !== n && (h.y = n),
          void 0 !== o &&
            (function (t, e, n = 1, r = 0, i = !0) {
              t.pathLength = 1;
              let o = i ? td : tp;
              t[o.offset] = tt.transform(-r);
              let s = tt.transform(e),
                a = tt.transform(n);
              t[o.array] = `${s} ${a}`;
            })(h, o, s, a, !1);
      }
      let tv = () => ({ ...ta(), attrs: {} }),
        tg = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        ty = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tx(t, { style: e, vars: n }, r, i) {
        for (let o in (Object.assign(t.style, e, i && i.getProjectionStyles(r)),
        n))
          t.style.setProperty(o, n[o]);
      }
      let tb = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tw(t, e, n, r) {
        for (let n in (tx(t, e, void 0, r), e.attrs))
          t.setAttribute(tb.has(n) ? n : ty(n), e.attrs[n]);
      }
      function tE(t) {
        let { style: e } = t,
          n = {};
        for (let r in e) (I(e[r]) || B(r, t)) && (n[r] = e[r]);
        return n;
      }
      function tA(t) {
        let e = tE(t);
        for (let n in t)
          I(t[n]) &&
            (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e;
      }
      function tP(t, e, n, r = {}, i = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      let tT = (t) => Array.isArray(t),
        tV = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tO = (t) => (tT(t) ? t[t.length - 1] || 0 : t);
      function tS(t) {
        let e = I(t) ? t.get() : t;
        return tV(e) ? e.toValue() : e;
      }
      let tC = (t) => (e, n) => {
          let r = (0, l.useContext)(c),
            i = (0, l.useContext)(f.O),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: n,
                },
                r,
                i,
                o
              ) {
                let s = {
                  latestValues: (function (t, e, n, r) {
                    let i = {},
                      o = r(t);
                    for (let t in o) i[t] = tS(o[t]);
                    let { initial: s, animate: a } = t,
                      l = y(t),
                      u = x(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === s && (s = e.initial),
                      void 0 === a && (a = e.animate));
                    let c = !!n && !1 === n.initial,
                      f = (c = c || !1 === s) ? a : s;
                    return (
                      f &&
                        "boolean" != typeof f &&
                        !v(f) &&
                        (Array.isArray(f) ? f : [f]).forEach((e) => {
                          let n = tP(t, e);
                          if (!n) return;
                          let { transitionEnd: r, transition: o, ...s } = n;
                          for (let t in s) {
                            let e = s[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (i[t] = e);
                          }
                          for (let t in r) i[t] = r[t];
                        }),
                      i
                    );
                  })(r, i, o, t),
                  renderState: e(),
                };
                return n && (s.mount = (t) => n(r, t, s)), s;
              })(t, e, r, i);
          return n ? o() : (0, P.h)(o);
        },
        tM = {
          useVisualState: tC({
            scrapeMotionValuesFromProps: tA,
            createRenderState: tv,
            onMount: (t, e, { renderState: n, latestValues: r }) => {
              try {
                n.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tm(
                n,
                r,
                { enableHardwareAcceleration: !1 },
                tg(e.tagName),
                t.transformTemplate
              ),
                tw(e, n);
            },
          }),
        },
        tk = {
          useVisualState: tC({
            scrapeMotionValuesFromProps: tE,
            createRenderState: ta,
          }),
        };
      function tD(t, e, n, r = { passive: !0 }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
      }
      function tR(t, e, n, r) {
        (0, l.useEffect)(() => {
          let i = t.current;
          if (n && i) return tD(i, e, n, r);
        }, [t, e, n, r]);
      }
      function tj(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      ((i = s || (s = {})).Animate = "animate"),
        (i.Hover = "whileHover"),
        (i.Tap = "whileTap"),
        (i.Drag = "whileDrag"),
        (i.Focus = "whileFocus"),
        (i.InView = "whileInView"),
        (i.Exit = "exit");
      let tL = { pageX: 0, pageY: 0 };
      function tB(t, e = "page") {
        return {
          point: t.touches
            ? (function (t, e = "page") {
                let n = t.touches[0] || t.changedTouches[0] || tL;
                return { x: n[e + "X"], y: n[e + "Y"] };
              })(t, e)
            : (function (t, e = "page") {
                return { x: t[e + "X"], y: t[e + "Y"] };
              })(t, e),
        };
      }
      let tI = (t, e = !1) => {
          let n = (e) => t(e, tB(e));
          return e
            ? (t) => {
                let e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              }
            : n;
        },
        tF = () => A.j && null === window.onpointerdown,
        tU = () => A.j && null === window.ontouchstart,
        tN = () => A.j && null === window.onmousedown,
        tW = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        t$ = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function t_(t) {
        if (tF());
        else if (tU()) return t$[t];
        else if (tN()) return tW[t];
        return t;
      }
      function tq(t, e, n, r) {
        return tD(t, t_(e), tI(n, "pointerdown" === e), r);
      }
      function tz(t, e, n, r) {
        return tR(t, t_(e), n && tI(n, "pointerdown" === e), r);
      }
      function tH(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tY = tH("dragHorizontal"),
        tZ = tH("dragVertical");
      function tX(t) {
        let e = !1;
        if ("y" === t) e = tZ();
        else if ("x" === t) e = tY();
        else {
          let t = tY(),
            n = tZ();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function tG() {
        let t = tX(!0);
        return !t || (t(), !1);
      }
      function tK(t, e, n) {
        return (r, i) => {
          !(!tj(r) || tG()) &&
            (t.animationState && t.animationState.setActive(s.Hover, e),
            n && n(r, i));
        };
      }
      let tJ = (t, e) => !!e && (t === e || tJ(t, e.parentElement));
      var tQ = n(65411);
      let t0 = (t, e) => (n) => e(t(n)),
        t1 = (...t) => t.reduce(t0);
      var t2 = n(49304),
        t5 = n(16034);
      let t3 = new WeakMap(),
        t4 = new WeakMap(),
        t9 = (t) => {
          let e = t3.get(t.target);
          e && e(t);
        },
        t6 = (t) => {
          t.forEach(t9);
        },
        t7 = { some: 0, all: 1 },
        t8 = (t) => (e) => (t(e), null),
        et = {
          inView: t8(function ({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: r,
            viewport: i = {},
          }) {
            let o = (0, l.useRef)({ hasEnteredView: !1, isInView: !1 }),
              a = !!(e || n || r);
            i.once && o.current.hasEnteredView && (a = !1),
              ("undefined" == typeof IntersectionObserver
                ? function (t, e, n, { fallback: r = !0 }) {
                    (0, l.useEffect)(() => {
                      t &&
                        r &&
                        ("production" !== t2.O &&
                          (0, t5.O)(
                            !1,
                            "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
                          ),
                        requestAnimationFrame(() => {
                          e.hasEnteredView = !0;
                          let { onViewportEnter: t } = n.getProps();
                          t && t(null),
                            n.animationState &&
                              n.animationState.setActive(s.InView, !0);
                        }));
                    }, [t]);
                  }
                : function (
                    t,
                    e,
                    n,
                    { root: r, margin: i, amount: o = "some", once: a }
                  ) {
                    (0, l.useEffect)(() => {
                      if (!t || !n.current) return;
                      let l = {
                        root: null == r ? void 0 : r.current,
                        rootMargin: i,
                        threshold: "number" == typeof o ? o : t7[o],
                      };
                      return (function (t, e, n) {
                        let r = (function ({ root: t, ...e }) {
                          let n = t || document;
                          t4.has(n) || t4.set(n, {});
                          let r = t4.get(n),
                            i = JSON.stringify(e);
                          return (
                            r[i] ||
                              (r[i] = new IntersectionObserver(t6, {
                                root: t,
                                ...e,
                              })),
                            r[i]
                          );
                        })(e);
                        return (
                          t3.set(t, n),
                          r.observe(t),
                          () => {
                            t3.delete(t), r.unobserve(t);
                          }
                        );
                      })(n.current, l, (t) => {
                        let { isIntersecting: r } = t;
                        if (
                          e.isInView === r ||
                          ((e.isInView = r), a && !r && e.hasEnteredView)
                        )
                          return;
                        r && (e.hasEnteredView = !0),
                          n.animationState &&
                            n.animationState.setActive(s.InView, r);
                        let i = n.getProps(),
                          o = r ? i.onViewportEnter : i.onViewportLeave;
                        o && o(t);
                      });
                    }, [t, r, i, o]);
                  })(a, o.current, t, i);
          }),
          tap: t8(function ({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: r,
            visualElement: i,
          }) {
            let o = t || e || n || r,
              a = (0, l.useRef)(!1),
              u = (0, l.useRef)(null),
              c = { passive: !(e || t || n || m) };
            function f() {
              u.current && u.current(), (u.current = null);
            }
            function h() {
              return (
                f(),
                (a.current = !1),
                i.animationState && i.animationState.setActive(s.Tap, !1),
                !tG()
              );
            }
            function d(e, r) {
              h() && (tJ(i.current, e.target) ? t && t(e, r) : n && n(e, r));
            }
            function p(t, e) {
              h() && n && n(t, e);
            }
            function m(t, n) {
              f(),
                !a.current &&
                  ((a.current = !0),
                  (u.current = t1(
                    tq(window, "pointerup", d, c),
                    tq(window, "pointercancel", p, c)
                  )),
                  i.animationState && i.animationState.setActive(s.Tap, !0),
                  e && e(t, n));
            }
            tz(i, "pointerdown", o ? m : void 0, c), (0, tQ.z)(f);
          }),
          focus: t8(function ({ whileFocus: t, visualElement: e }) {
            let { animationState: n } = e;
            tR(
              e,
              "focus",
              t
                ? () => {
                    n && n.setActive(s.Focus, !0);
                  }
                : void 0
            ),
              tR(
                e,
                "blur",
                t
                  ? () => {
                      n && n.setActive(s.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: t8(function ({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: r,
          }) {
            tz(r, "pointerenter", t || n ? tK(r, !0, t) : void 0, {
              passive: !t,
            }),
              tz(r, "pointerleave", e || n ? tK(r, !1, e) : void 0, {
                passive: !e,
              });
          }),
        };
      var ee = n(15947);
      function en(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      let er = (t) => /^\-?\d*\.?\d+$/.test(t),
        ei = (t) => /^0[^.\s]+$/.test(t);
      var eo = n(37367),
        es = n(30404);
      function ea(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function el(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class eu {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return ea(this.subscriptions, t), () => el(this.subscriptions, t);
        }
        notify(t, e, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function ec(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      let ef = (t) => !isNaN(parseFloat(t));
      class eh {
        constructor(t, e = {}) {
          (this.version = "7.10.3"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: n, timestamp: r } = eo.frameData;
              this.lastUpdated !== r &&
                ((this.timeDelta = n),
                (this.lastUpdated = r),
                es.Z_.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              es.Z_.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = ef(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eu()), this.events[t].add(e)
          );
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e), (this.prev = t), (this.timeDelta = n);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? ec(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.stopAnimation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.stopAnimation &&
            (this.stopAnimation(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.clearListeners(), this.stop();
        }
      }
      function ed(t, e) {
        return new eh(t, e);
      }
      let ep = (t, e) => (n) =>
          !!(
            (G(n) && X.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        em = (t, e, n) => (r) => {
          if (!G(r)) return r;
          let [i, o, s, a] = r.match(Y);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        ev = (t) => $(0, 255, t),
        eg = { ..._, transform: (t) => Math.round(ev(t)) },
        ey = {
          test: ep("rgb", "red"),
          parse: em("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            eg.transform(t) +
            ", " +
            eg.transform(e) +
            ", " +
            eg.transform(n) +
            ", " +
            H(q.transform(r)) +
            ")",
        },
        ex = {
          test: ep("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (n = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (i = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (n = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (i = t.substring(4, 5)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ey.transform,
        },
        eb = {
          test: ep("hsl", "hue"),
          parse: em("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Q.transform(H(e)) +
            ", " +
            Q.transform(H(n)) +
            ", " +
            H(q.transform(r)) +
            ")",
        },
        ew = {
          test: (t) => ey.test(t) || ex.test(t) || eb.test(t),
          parse: (t) =>
            ey.test(t) ? ey.parse(t) : eb.test(t) ? eb.parse(t) : ex.parse(t),
          transform: (t) =>
            G(t)
              ? t
              : t.hasOwnProperty("red")
              ? ey.transform(t)
              : eb.transform(t),
        },
        eE = "${c}",
        eA = "${n}";
      function eP(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          n = 0,
          r = 0,
          i = t.match(Z);
        i &&
          ((n = i.length), (t = t.replace(Z, eE)), e.push(...i.map(ew.parse)));
        let o = t.match(Y);
        return (
          o &&
            ((r = o.length), (t = t.replace(Y, eA)), e.push(...o.map(_.parse))),
          { values: e, numColors: n, numNumbers: r, tokenised: t }
        );
      }
      function eT(t) {
        return eP(t).values;
      }
      function eV(t) {
        let { values: e, numColors: n, tokenised: r } = eP(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? eE : eA,
              r < n ? ew.transform(t[r]) : H(t[r])
            );
          return e;
        };
      }
      let eO = (t) => ("number" == typeof t ? 0 : t),
        eS = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              G(t) &&
              ((null === (e = t.match(Y)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(Z)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: eT,
          createTransformer: eV,
          getAnimatableNone: function (t) {
            let e = eT(t);
            return eV(t)(e.map(eO));
          },
        },
        eC = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eM(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = n.match(Y) || [];
        if (!r) return t;
        let i = n.replace(r, ""),
          o = eC.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      let ek = /([a-z-]*)\(.*?\)/g,
        eD = {
          ...eS,
          getAnimatableNone: (t) => {
            let e = t.match(ek);
            return e ? e.map(eM).join(" ") : t;
          },
        },
        eR = {
          ...to,
          color: ew,
          backgroundColor: ew,
          outlineColor: ew,
          fill: ew,
          stroke: ew,
          borderColor: ew,
          borderTopColor: ew,
          borderRightColor: ew,
          borderBottomColor: ew,
          borderLeftColor: ew,
          filter: eD,
          WebkitFilter: eD,
        },
        ej = (t) => eR[t];
      function eL(t, e) {
        var n;
        let r = ej(t);
        return (
          r !== eD && (r = eS),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      let eB = (t) => (e) => e.test(t),
        eI = [
          _,
          tt,
          Q,
          J,
          tn,
          te,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eF = (t) => eI.find(eB(t)),
        eU = [...eI, ew, eS],
        eN = (t) => eU.find(eB(t));
      function eW(t, e, n) {
        let r = t.getProps();
        return tP(
          r,
          e,
          void 0 !== n ? n : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
      function e$(t) {
        return !!(I(t) && t.add);
      }
      let e_ = (t, e) => `${t}: ${e}`,
        eq = "data-" + ty("framerAppearId");
      var ez = n(24394);
      let eH = (t) => 1e3 * t,
        eY = { current: !1 },
        eZ = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eX = (t) => (e) => 1 - t(1 - e),
        eG = (t) => t * t,
        eK = eX(eG),
        eJ = eZ(eG),
        eQ = (t, e, n) => -n * t + n * e + t;
      function e0(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      let e1 = (t, e, n) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r));
        },
        e2 = [ex, ey, eb],
        e5 = (t) => e2.find((e) => e.test(t));
      function e3(t) {
        let e = e5(t);
        (0, ez.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = e.parse(t);
        return (
          e === eb &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
              (t /= 360), (n /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  a = 2 * n - r;
                (i = e0(a, r, t + 1 / 3)),
                  (o = e0(a, r, t)),
                  (s = e0(a, r, t - 1 / 3));
              } else i = o = s = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let e4 = (t, e) => {
        let n = e3(t),
          r = e3(e),
          i = { ...n };
        return (t) => (
          (i.red = e1(n.red, r.red, t)),
          (i.green = e1(n.green, r.green, t)),
          (i.blue = e1(n.blue, r.blue, t)),
          (i.alpha = eQ(n.alpha, r.alpha, t)),
          ey.transform(i)
        );
      };
      function e9(t, e) {
        return "number" == typeof t
          ? (n) => eQ(t, e, n)
          : ew.test(t)
          ? e4(t, e)
          : e8(t, e);
      }
      let e6 = (t, e) => {
          let n = [...t],
            r = n.length,
            i = t.map((t, n) => e9(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        e7 = (t, e) => {
          let n = { ...t, ...e },
            r = {};
          for (let i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = e9(t[i], e[i]));
          return (t) => {
            for (let e in r) n[e] = r[e](t);
            return n;
          };
        },
        e8 = (t, e) => {
          let n = eS.createTransformer(e),
            r = eP(t),
            i = eP(e);
          return r.numColors === i.numColors && r.numNumbers >= i.numNumbers
            ? t1(e6(r.values, i.values), n)
            : ((0, ez.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        nt = (t, e, n) => {
          let r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        ne = (t, e) => (n) => eQ(t, e, n);
      function nn(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        let o = t.length;
        (0, ez.k)(
          o === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, ez.k)(
            !r || !Array.isArray(r) || r.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let s = (function (t, e, n) {
            let r = [],
              i =
                n ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return ew.test(t) ? e4 : e8;
                  else if (Array.isArray(t)) return e6;
                  else if ("object" == typeof t) return e7;
                  return ne;
                })(t[0]),
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let o = i(t[n], t[n + 1]);
              e && (o = t1(Array.isArray(e) ? e[n] : e, o)), r.push(o);
            }
            return r;
          })(e, r, i),
          a = s.length,
          l = (e) => {
            let n = 0;
            if (a > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            let r = nt(t[n], t[n + 1], e);
            return s[n](r);
          };
        return n ? (e) => l($(t[0], t[o - 1], e)) : l;
      }
      let nr = (t) => t,
        ni = (t, e, n) =>
          (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function no(t, e, n, r) {
        if (t === e && n === r) return nr;
        let i = (e) =>
          (function (t, e, n, r, i) {
            let o, s;
            let a = 0;
            do
              (o = ni((s = e + (n - e) / 2), r, i) - t) > 0 ? (n = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : ni(i(t), e, r));
      }
      let ns = (t) => 1 - Math.sin(Math.acos(t)),
        na = eX(ns),
        nl = eZ(na),
        nu = no(0.33, 1.53, 0.69, 0.99),
        nc = eX(nu),
        nf = eZ(nc),
        nh = {
          linear: nr,
          easeIn: eG,
          easeInOut: eJ,
          easeOut: eK,
          circIn: ns,
          circInOut: nl,
          circOut: na,
          backIn: nc,
          backInOut: nf,
          backOut: nu,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * nc(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        nd = (t) => {
          if (Array.isArray(t)) {
            (0, ez.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, r, i] = t;
            return no(e, n, r, i);
          }
          return "string" == typeof t
            ? ((0, ez.k)(void 0 !== nh[t], `Invalid easing type '${t}'`), nh[t])
            : t;
        },
        np = (t) => Array.isArray(t) && "number" != typeof t[0];
      function nm({ keyframes: t, ease: e = eJ, times: n, duration: r = 300 }) {
        t = [...t];
        let i = nm[0],
          o = np(e) ? e.map(nd) : nd(e),
          s = { done: !1, value: i },
          a = (
            n && n.length === nm.length
              ? n
              : (function (t) {
                  let e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(t)
          ).map((t) => t * r);
        function l() {
          var e;
          return nn(a, t, {
            ease: Array.isArray(o)
              ? o
              : (e = t).map(() => o || eJ).splice(0, e.length - 1),
          });
        }
        let u = l();
        return {
          next: (t) => ((s.value = u(t)), (s.done = t >= r), s),
          flipTarget: () => {
            t.reverse(), (u = l());
          },
        };
      }
      function nv(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ng = ["duration", "bounce"],
        ny = ["stiffness", "damping", "mass"];
      function nx(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function nb({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = 0.01,
        ...r
      }) {
        let i = t[0],
          o = t[t.length - 1],
          s = { done: !1, value: i },
          {
            stiffness: a,
            damping: l,
            mass: u,
            velocity: c,
            duration: f,
            isResolvedFromDuration: h,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!nx(t, ny) && nx(t, ng)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let i, o;
                (0, ez.K)(
                  t <= 1e4,
                  "Spring duration must be 10 seconds or less"
                );
                let s = 1 - e;
                (s = $(0.05, 1, s)),
                  (t = $(0.01, 10, t / 1e3)),
                  s < 1
                    ? ((i = (e) => {
                        let r = e * s,
                          i = r * t;
                        return 0.001 - ((r - n) / nv(e, s)) * Math.exp(-i);
                      }),
                      (o = (e) => {
                        let r = e * s * t,
                          o = Math.pow(s, 2) * Math.pow(e, 2) * t,
                          a = nv(Math.pow(e, 2), s);
                        return (
                          ((r * n + n - o) *
                            Math.exp(-r) *
                            (-i(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((i = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (o = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let a = (function (t, e, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= t(r) / e(r);
                  return r;
                })(i, o, 5 / t);
                if (((t *= 1e3), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * s * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...n,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(r),
          d = nw,
          p = c ? -(c / 1e3) : 0,
          m = l / (2 * Math.sqrt(a * u));
        function v() {
          let t = o - i,
            e = Math.sqrt(a / u) / 1e3;
          if (
            (void 0 === n && (n = Math.min(Math.abs(o - i) / 100, 0.4)), m < 1)
          ) {
            let n = nv(e, m);
            d = (r) =>
              o -
              Math.exp(-m * e * r) *
                (((p + m * e * t) / n) * Math.sin(n * r) + t * Math.cos(n * r));
          } else if (1 === m)
            d = (n) => o - Math.exp(-e * n) * (t + (p + e * t) * n);
          else {
            let n = e * Math.sqrt(m * m - 1);
            d = (r) => {
              let i = Math.exp(-m * e * r),
                s = Math.min(n * r, 300);
              return (
                o -
                (i * ((p + m * e * t) * Math.sinh(s) + n * t * Math.cosh(s))) /
                  n
              );
            };
          }
        }
        return (
          v(),
          {
            next: (t) => {
              let r = d(t);
              if (h) s.done = t >= f;
              else {
                let i = p;
                if (0 !== t) {
                  if (m < 1) {
                    let e = Math.max(0, t - 5);
                    i = ec(r - d(e), t - e);
                  } else i = 0;
                }
                let a = Math.abs(i) <= e,
                  l = Math.abs(o - r) <= n;
                s.done = a && l;
              }
              return (s.value = s.done ? o : r), s;
            },
            flipTarget: () => {
              (p = -p), ([i, o] = [o, i]), v();
            },
          }
        );
      }
      nb.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let nw = (t) => 0,
        nE = {
          decay: function ({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = 0.8,
            timeConstant: r = 350,
            restDelta: i = 0.5,
            modifyTarget: o,
          }) {
            let s = t[0],
              a = { done: !1, value: s },
              l = n * e,
              u = s + l,
              c = void 0 === o ? u : o(u);
            return (
              c !== u && (l = c - s),
              {
                next: (t) => {
                  let e = -l * Math.exp(-t / r);
                  return (
                    (a.done = !(e > i || e < -i)),
                    (a.value = a.done ? c : c + e),
                    a
                  );
                },
                flipTarget: () => {},
              }
            );
          },
          keyframes: nm,
          tween: nm,
          spring: nb,
        };
      function nA(t, e, n = 0) {
        return t - e - n;
      }
      let nP = (t) => {
        let e = ({ delta: e }) => t(e);
        return {
          start: () => es.Z_.update(e, !0),
          stop: () => es.qY.update(e),
        };
      };
      function nT({
        duration: t,
        driver: e = nP,
        elapsed: n = 0,
        repeat: r = 0,
        repeatType: i = "loop",
        repeatDelay: o = 0,
        keyframes: s,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: c,
        onRepeat: f,
        onUpdate: h,
        type: d = "keyframes",
        ...p
      }) {
        var m;
        let v, g, y;
        let x = 0,
          b = t,
          w = !1,
          E = !0,
          A = nE[s.length > 2 ? "keyframes" : d],
          P = s[0],
          T = s[s.length - 1];
        (null === (m = A.needsInterpolation) || void 0 === m
          ? void 0
          : m.call(A, P, T)) &&
          ((y = nn([0, 100], [P, T], { clamp: !1 })), (s = [0, 100]));
        let V = A({ ...p, duration: t, keyframes: s });
        return (
          a &&
            (l && l(),
            (v = e(function (t) {
              if ((E || (t = -t), (n += t), !w)) {
                let t = V.next(Math.max(0, n));
                (g = t.value), y && (g = y(g)), (w = E ? t.done : n <= 0);
              }
              if ((h && h(g), w)) {
                if ((0 === x && (b = void 0 !== b ? b : n), x < r)) {
                  var e, s;
                  (e = n),
                    (s = b),
                    (E ? e >= s + o : e <= -o) &&
                      (x++,
                      "reverse" === i
                        ? (n = (function (t, e = 0, n = 0, r = !0) {
                            return r ? nA(e + -t, e, n) : e - (t - e) + n;
                          })(n, b, o, (E = x % 2 == 0)))
                        : ((n = nA(n, b, o)), "mirror" === i && V.flipTarget()),
                      (w = !1),
                      f && f());
                } else v.stop(), c && c();
              }
            })).start()),
          {
            stop: () => {
              u && u(), v.stop();
            },
            sample: (t) => V.next(Math.max(0, t)),
          }
        );
      }
      let nV = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        nO = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nV([0, 0.65, 0.55, 1]),
          circOut: nV([0.55, 0, 1, 0.45]),
          backIn: nV([0.31, 0.01, 0.66, -0.59]),
          backOut: nV([0.33, 1.53, 0.69, 0.99]),
        };
      function nS(t, e) {
        let n = performance.now(),
          r = ({ timestamp: i }) => {
            let o = i - n;
            o >= e && (es.qY.read(r), t(o - e));
          };
        return es.Z_.read(r, !0), () => es.qY.read(r);
      }
      let nC = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        nM = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        nk = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        nD = { type: "keyframes", duration: 0.8 },
        nR = {
          x: nC,
          y: nC,
          z: nC,
          rotate: nC,
          rotateX: nC,
          rotateY: nC,
          rotateZ: nC,
          scaleX: nM,
          scaleY: nM,
          scale: nM,
          opacity: nk,
          backgroundColor: nk,
          color: nk,
          default: nM,
        },
        nj = (t, { keyframes: e }) =>
          e.length > 2 ? nD : (nR[t] || nR.default)(e[1]),
        nL = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e && eS.test(e) && !e.startsWith("url("))
          );
      function nB(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function nI(t) {
        return "number" == typeof t ? 0 : eL("", t);
      }
      function nF(t, e) {
        return t[e] || t.default || t;
      }
      let nU = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        nN = {},
        nW = {};
      for (let t in nU)
        nW[t] = () => (void 0 === nN[t] && (nN[t] = nU[t]()), nN[t]);
      let n$ = new Set(["opacity"]),
        n_ =
          (t, e, n, r = {}) =>
          (i) => {
            let o = nF(r, t) || {},
              s = o.delay || r.delay || 0,
              { elapsed: a = 0 } = r;
            a -= eH(s);
            let l = (function (t, e, n, r) {
                let i = nL(e, n),
                  o = void 0 !== r.from ? r.from : t.get();
                return ("none" === o && i && "string" == typeof n
                  ? (o = eL(e, n))
                  : nB(o) && "string" == typeof n
                  ? (o = nI(n))
                  : !Array.isArray(n) &&
                    nB(n) &&
                    "string" == typeof o &&
                    (n = nI(o)),
                Array.isArray(n))
                  ? (null === n[0] && (n[0] = o), n)
                  : [o, n];
              })(e, t, n, o),
              u = l[0],
              c = l[l.length - 1],
              f = nL(t, u),
              h = nL(t, c);
            (0, ez.K)(
              f === h,
              `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
            );
            let d = {
              keyframes: l,
              velocity: e.getVelocity(),
              ...o,
              elapsed: a,
              onUpdate: (t) => {
                e.set(t), o.onUpdate && o.onUpdate(t);
              },
              onComplete: () => {
                i(), o.onComplete && o.onComplete();
              },
            };
            if (!f || !h || eY.current || !1 === o.type)
              return (function ({
                keyframes: t,
                elapsed: e,
                onUpdate: n,
                onComplete: r,
              }) {
                let i = () => (n && n(t[t.length - 1]), r && r(), () => {});
                return e ? nS(i, -e) : i();
              })(d);
            if ("inertia" === o.type) {
              let t = (function ({
                keyframes: t,
                velocity: e = 0,
                min: n,
                max: r,
                power: i = 0.8,
                timeConstant: o = 750,
                bounceStiffness: s = 500,
                bounceDamping: a = 10,
                restDelta: l = 1,
                modifyTarget: u,
                driver: c,
                onUpdate: f,
                onComplete: h,
                onStop: d,
              }) {
                let p;
                let m = t[0];
                function v(t) {
                  return (void 0 !== n && t < n) || (void 0 !== r && t > r);
                }
                function g(t) {
                  return void 0 === n
                    ? r
                    : void 0 === r
                    ? n
                    : Math.abs(n - t) < Math.abs(r - t)
                    ? n
                    : r;
                }
                function y(t) {
                  null == p || p.stop(),
                    (p = nT({
                      keyframes: [0, 1],
                      velocity: 0,
                      ...t,
                      driver: c,
                      onUpdate: (e) => {
                        var n;
                        null == f || f(e),
                          null === (n = t.onUpdate) ||
                            void 0 === n ||
                            n.call(t, e);
                      },
                      onComplete: h,
                      onStop: d,
                    }));
                }
                function x(t) {
                  y({
                    type: "spring",
                    stiffness: s,
                    damping: a,
                    restDelta: l,
                    ...t,
                  });
                }
                if (v(m)) x({ velocity: e, keyframes: [m, g(m)] });
                else {
                  let t,
                    r,
                    s = i * e + m;
                  void 0 !== u && (s = u(s));
                  let a = g(s),
                    c = a === n ? -1 : 1;
                  y({
                    type: "decay",
                    keyframes: [m, 0],
                    velocity: e,
                    timeConstant: o,
                    power: i,
                    restDelta: l,
                    modifyTarget: u,
                    onUpdate: v(s)
                      ? (n) => {
                          (t = r),
                            (r = n),
                            (e = ec(n - t, eo.frameData.delta)),
                            ((1 === c && n > a) || (-1 === c && n < a)) &&
                              x({ keyframes: [n, a], velocity: e });
                        }
                      : void 0,
                  });
                }
                return { stop: () => (null == p ? void 0 : p.stop()) };
              })(d);
              return () => t.stop();
            }
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(o) && (d = { ...d, ...nj(t, d) }),
              d.duration && (d.duration = eH(d.duration)),
              d.repeatDelay && (d.repeatDelay = eH(d.repeatDelay));
            let p = e.owner,
              m = p && p.current;
            if (
              nW.waapi() &&
              n$.has(t) &&
              !d.repeatDelay &&
              "mirror" !== d.repeatType &&
              0 !== d.damping &&
              p &&
              m instanceof HTMLElement &&
              !p.getProps().onUpdate
            )
              return (function (t, e, { onUpdate: n, onComplete: r, ...i }) {
                var o;
                let {
                  keyframes: s,
                  duration: a = 0.3,
                  elapsed: l = 0,
                  ease: u,
                } = i;
                if (
                  "spring" === i.type ||
                  !(
                    !(o = i.ease) ||
                    Array.isArray(o) ||
                    ("string" == typeof o && nO[o])
                  )
                ) {
                  let t = nT(i),
                    e = { done: !1, value: s[0] },
                    n = [],
                    r = 0;
                  for (; !e.done; )
                    (e = t.sample(r)), n.push(e.value), (r += 10);
                  (s = n), (a = r - 10), (u = "linear");
                }
                let c = (function (
                  t,
                  e,
                  n,
                  {
                    delay: r = 0,
                    duration: i,
                    repeat: o = 0,
                    repeatType: s = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  return t.animate(
                    { [e]: n, offset: l },
                    {
                      delay: r,
                      duration: i,
                      easing: (function (t) {
                        if (t) return Array.isArray(t) ? nV(t) : nO[t];
                      })(a),
                      fill: "both",
                      iterations: o + 1,
                      direction: "reverse" === s ? "alternate" : "normal",
                    }
                  );
                })(t.owner.current, e, s, {
                  ...i,
                  delay: -l,
                  duration: a,
                  ease: u,
                });
                return (
                  (c.onfinish = () => {
                    t.set(s[s.length - 1]), r && r();
                  }),
                  () => {
                    let { currentTime: e } = c;
                    if (e) {
                      let n = nT(i);
                      t.setWithVelocity(
                        n.sample(e - 10).value,
                        n.sample(e).value,
                        10
                      );
                    }
                    es.Z_.update(() => c.cancel());
                  }
                );
              })(e, t, d);
            {
              let t = nT(d);
              return () => t.stop();
            }
          };
      function nq(t, e, n = {}) {
        var r;
        let i = eW(t, e, n.custom),
          { transition: o = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        let s = i ? () => nz(t, i, n) : () => Promise.resolve(),
          a = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? (r = 0) => {
                let {
                  delayChildren: i = 0,
                  staggerChildren: s,
                  staggerDirection: a,
                } = o;
                return (function (t, e, n = 0, r = 0, i = 1, o) {
                  let s = [],
                    a = (t.variantChildren.size - 1) * r,
                    l = 1 === i ? (t = 0) => t * r : (t = 0) => a - t * r;
                  return (
                    Array.from(t.variantChildren)
                      .sort(nH)
                      .forEach((t, r) => {
                        s.push(
                          nq(t, e, { ...o, delay: n + l(r) }).then(() =>
                            t.notify("AnimationComplete", e)
                          )
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, i + r, s, a, n);
              }
            : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(e);
        }
      }
      function nz(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        var o;
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = t.makeTargetAnimatable(e),
          u = t.getValue("willChange");
        r && (s = r);
        let c = [],
          f =
            i &&
            (null === (o = t.animationState) || void 0 === o
              ? void 0
              : o.getState()[i]);
        for (let e in l) {
          let r = t.getValue(e),
            i = l[e];
          if (
            !r ||
            void 0 === i ||
            (f &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let r = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), r;
              })(f, e))
          )
            continue;
          let o = { delay: n, elapsed: 0, ...s };
          if (
            (t.shouldReduceMotion &&
              L.has(e) &&
              (o = { ...o, type: !1, delay: 0 }),
            !r.hasAnimated)
          ) {
            let n = t.getProps()[eq];
            n &&
              (o.elapsed = (function (t, e) {
                let { MotionAppearAnimations: n } = window,
                  r = e_(t, L.has(e) ? "transform" : e),
                  i = n && n.get(r);
                return i
                  ? (es.Z_.render(() => {
                      try {
                        i.cancel(), n.delete(r);
                      } catch (t) {}
                    }),
                    i.currentTime || 0)
                  : 0;
              })(n, e));
          }
          let a = r.start(n_(e, r, i, o));
          e$(u) && (u.add(e), (a = a.then(() => u.remove(e)))), c.push(a);
        }
        return Promise.all(c).then(() => {
          a &&
            (function (t, e) {
              let n = eW(t, e),
                {
                  transitionEnd: r = {},
                  transition: i = {},
                  ...o
                } = n ? t.makeTargetAnimatable(n, !1) : {};
              for (let e in (o = { ...o, ...r })) {
                let n = tO(o[e]);
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ed(n));
              }
            })(t, a);
        });
      }
      function nH(t, e) {
        return t.sortNodePosition(e);
      }
      let nY = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit],
        nZ = [...nY].reverse(),
        nX = nY.length;
      function nG(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let nK = {
          animation: t8(({ visualElement: t, animate: e }) => {
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => nq(t, e, n)));
                          else if ("string" == typeof e) r = nq(t, e, n);
                          else {
                            let i =
                              "function" == typeof e ? eW(t, e, n.custom) : e;
                            r = nz(t, i, n);
                          }
                          return r.then(() => t.notify("AnimationComplete", e));
                        })(t, e, n)
                      )
                    ),
                  n = {
                    [s.Animate]: nG(!0),
                    [s.InView]: nG(),
                    [s.Hover]: nG(),
                    [s.Tap]: nG(),
                    [s.Drag]: nG(),
                    [s.Focus]: nG(),
                    [s.Exit]: nG(),
                  },
                  r = !0,
                  i = (e, n) => {
                    let r = eW(t, n);
                    if (r) {
                      let { transition: t, transitionEnd: n, ...i } = r;
                      e = { ...e, ...i, ...n };
                    }
                    return e;
                  };
                function o(o, s) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    c = new Set(),
                    f = {},
                    h = 1 / 0;
                  for (let e = 0; e < nX; e++) {
                    var d;
                    let p = nZ[e],
                      g = n[p],
                      y = void 0 !== a[p] ? a[p] : l[p],
                      x = m(y),
                      b = p === s ? g.isActive : null;
                    !1 === b && (h = e);
                    let w = y === l[p] && y !== a[p] && x;
                    if (
                      (w && r && t.manuallyAnimateOnMount && (w = !1),
                      (g.protectedKeys = { ...f }),
                      (!g.isActive && null === b) ||
                        (!y && !g.prevProp) ||
                        v(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let E =
                        ((d = g.prevProp),
                        "string" == typeof y
                          ? y !== d
                          : !!Array.isArray(y) && !en(y, d)),
                      A =
                        E || (p === s && g.isActive && !w && x) || (e > h && x),
                      P = Array.isArray(y) ? y : [y],
                      T = P.reduce(i, {});
                    !1 === b && (T = {});
                    let { prevResolvedValues: V = {} } = g,
                      O = { ...V, ...T },
                      S = (t) => {
                        (A = !0), c.delete(t), (g.needsAnimating[t] = !0);
                      };
                    for (let t in O) {
                      let e = T[t],
                        n = V[t];
                      f.hasOwnProperty(t) ||
                        (e !== n
                          ? tT(e) && tT(n)
                            ? !en(e, n) || E
                              ? S(t)
                              : (g.protectedKeys[t] = !0)
                            : void 0 !== e
                            ? S(t)
                            : c.add(t)
                          : void 0 !== e && c.has(t)
                          ? S(t)
                          : (g.protectedKeys[t] = !0));
                    }
                    (g.prevProp = y),
                      (g.prevResolvedValues = T),
                      g.isActive && (f = { ...f, ...T }),
                      r && t.blockInitialAnimation && (A = !1),
                      A &&
                        !w &&
                        u.push(
                          ...P.map((t) => ({
                            animation: t,
                            options: { type: p, ...o },
                          }))
                        );
                  }
                  if (c.size) {
                    let e = {};
                    c.forEach((n) => {
                      let r = t.getBaseTarget(n);
                      void 0 !== r && (e[n] = r);
                    }),
                      u.push({ animation: e });
                  }
                  let p = !!u.length;
                  return (
                    r &&
                      !1 === a.initial &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (r = !1),
                    p ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, r, i) {
                    var s;
                    if (n[e].isActive === r) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, r);
                      }),
                      (n[e].isActive = r);
                    let a = o(i, e);
                    for (let t in n) n[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                };
              })(t)),
              v(e) && (0, l.useEffect)(() => e.subscribe(t), [e]);
          }),
          exit: t8((t) => {
            let { custom: e, visualElement: n } = t,
              [r, i] = (0, ee.oO)(),
              o = (0, l.useContext)(f.O);
            (0, l.useEffect)(() => {
              n.isPresent = r;
              let t =
                n.animationState &&
                n.animationState.setActive(s.Exit, !r, {
                  custom: (o && o.custom) || e,
                });
              t && !r && t.then(i);
            }, [r]);
          }),
        },
        nJ = (t, e) => Math.abs(t - e);
      class nQ {
        constructor(t, e, { transformPagePoint: n } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = n2(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                i =
                  ((t = n.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(nJ(t.x, e.x) ** 2 + nJ(t.y, e.y) ** 2) >= 3);
              if (!r && !i) return;
              let { point: o } = n,
                { timestamp: s } = eo.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (t, e) => {
              if (
                ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = n0(e, this.transformPagePoint)),
                tj(t) && 0 === t.buttons)
              ) {
                this.handlePointerUp(t, e);
                return;
              }
              es.Z_.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: n, onSessionEnd: r } = this.handlers,
                i = n2(n0(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), r && r(t, i);
            }),
            t.touches && t.touches.length > 1)
          )
            return;
          (this.handlers = e), (this.transformPagePoint = n);
          let r = n0(tB(t), this.transformPagePoint),
            { point: i } = r,
            { timestamp: o } = eo.frameData;
          this.history = [{ ...i, timestamp: o }];
          let { onSessionStart: s } = e;
          s && s(t, n2(r, this.history)),
            (this.removeListeners = t1(
              tq(window, "pointermove", this.handlePointerMove),
              tq(window, "pointerup", this.handlePointerUp),
              tq(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            es.qY.update(this.updatePoint);
        }
      }
      function n0(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function n1(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function n2({ point: t }, e) {
        return {
          point: t,
          delta: n1(t, n5(e)),
          offset: n1(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              r = null,
              i = n5(t);
            for (
              ;
              n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > eH(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function n5(t) {
        return t[t.length - 1];
      }
      function n3(t) {
        return t.max - t.min;
      }
      function n4(t, e = 0, n = 0.01) {
        return Math.abs(t - e) <= n;
      }
      function n9(t, e, n, r = 0.5) {
        (t.origin = r),
          (t.originPoint = eQ(e.min, e.max, t.origin)),
          (t.scale = n3(n) / n3(e)),
          (n4(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = eQ(n.min, n.max, t.origin) - t.originPoint),
          (n4(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function n6(t, e, n, r) {
        n9(t.x, e.x, n.x, null == r ? void 0 : r.originX),
          n9(t.y, e.y, n.y, null == r ? void 0 : r.originY);
      }
      function n7(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + n3(e));
      }
      function n8(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + n3(e));
      }
      function rt(t, e, n) {
        n8(t.x, e.x, n.x), n8(t.y, e.y, n.y);
      }
      function re(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function rn(t, e) {
        let n = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      function rr(t, e, n) {
        return { min: ri(t, e), max: ri(t, n) };
      }
      function ri(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let ro = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rs = () => ({ x: ro(), y: ro() }),
        ra = () => ({ min: 0, max: 0 }),
        rl = () => ({ x: ra(), y: ra() });
      function ru(t) {
        return [t("x"), t("y")];
      }
      function rc({ top: t, left: e, right: n, bottom: r }) {
        return { x: { min: e, max: n }, y: { min: t, max: r } };
      }
      function rf(t) {
        return void 0 === t || 1 === t;
      }
      function rh({ scale: t, scaleX: e, scaleY: n }) {
        return !rf(t) || !rf(e) || !rf(n);
      }
      function rd(t) {
        return rh(t) || rp(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function rp(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function rm(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function rv(t, e = 0, n = 1, r, i) {
        (t.min = rm(t.min, e, n, r, i)), (t.max = rm(t.max, e, n, r, i));
      }
      function rg(t, { x: e, y: n }) {
        rv(t.x, e.translate, e.scale, e.originPoint),
          rv(t.y, n.translate, n.scale, n.originPoint);
      }
      function ry(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function rx(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rb(t, e, [n, r, i]) {
        let o = void 0 !== e[i] ? e[i] : 0.5,
          s = eQ(t.min, t.max, o);
        rv(t, e[n], e[r], s, e.scale);
      }
      let rw = ["x", "scaleX", "originX"],
        rE = ["y", "scaleY", "originY"];
      function rA(t, e) {
        rb(t.x, e, rw), rb(t.y, e, rE);
      }
      function rP(t, e) {
        return rc(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let rT = new WeakMap();
      class rV {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rl()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          !1 !== this.visualElement.isPresent &&
            (this.panSession = new nQ(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(tB(t, "page").point);
                },
                onStart: (t, e) => {
                  var n;
                  let {
                    drag: r,
                    dragPropagation: i,
                    onDragStart: o,
                  } = this.getProps();
                  (!r ||
                    i ||
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tX(r)),
                    this.openGlobalLock)) &&
                    ((this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    ru((t) => {
                      var e, n;
                      let r = this.getAxisMotionValue(t).get() || 0;
                      if (Q.test(r)) {
                        let i =
                          null ===
                            (n =
                              null === (e = this.visualElement.projection) ||
                              void 0 === e
                                ? void 0
                                : e.layout) || void 0 === n
                            ? void 0
                            : n.layoutBox[t];
                        if (i) {
                          let t = n3(i);
                          r = (parseFloat(r) / 100) * t;
                        }
                      }
                      this.originPoint[t] = r;
                    }),
                    null == o || o(t, e),
                    null === (n = this.visualElement.animationState) ||
                      void 0 === n ||
                      n.setActive(s.Drag, !0));
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: n,
                    dragDirectionLock: r,
                    onDirectionLock: i,
                    onDrag: o,
                  } = this.getProps();
                  if (!n && !this.openGlobalLock) return;
                  let { offset: s } = e;
                  if (r && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let n = null;
                      return (
                        Math.abs(t.y) > e
                          ? (n = "y")
                          : Math.abs(t.x) > e && (n = "x"),
                        n
                      );
                    })(s)),
                      null !== this.currentDirection &&
                        (null == i || i(this.currentDirection));
                    return;
                  }
                  this.updateAxis("x", e.point, s),
                    this.updateAxis("y", e.point, s),
                    this.visualElement.render(),
                    null == o || o(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          null == i || i(t, e);
        }
        cancel() {
          var t, e;
          (this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (t = this.panSession) || void 0 === t || t.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (e = this.visualElement.animationState) ||
              void 0 === e ||
              e.setActive(s.Drag, !1);
        }
        updateAxis(t, e, n) {
          let { drag: r } = this.getProps();
          if (!n || !rO(t, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            o = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: n }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? eQ(e, t, r.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = r ? eQ(n, t, r.max) : Math.min(t, n)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            i.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: n } = this.visualElement.projection || {},
            r = this.constraints;
          t && p(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: r, right: i }
              ) {
                return { x: re(t.x, n, i), y: re(t.y, e, r) };
              })(n.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: rr(t, "left", "right"), y: rr(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              ru((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !p(e)) return !1;
          let r = e.current;
          (0, ez.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (t, e, n) {
              let r = rP(t, n),
                { scroll: i } = e;
              return i && (rx(r.x, i.offset.x), rx(r.y, i.offset.y)), r;
            })(r, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: rn((t = i.layout.layoutBox).x, o.x), y: rn(t.y, o.y) };
          if (n) {
            let t = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!t), t && (s = rc(t));
          }
          return s;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            ru((s) => {
              if (!rO(s, e, this.currentDirection)) return;
              let l = (null == a ? void 0 : a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start(n_(t, n, 0, e));
        }
        stopAnimation() {
          ru((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          var e;
          let n = "_drag" + t.toUpperCase();
          return (
            this.visualElement.getProps()[n] ||
            this.visualElement.getValue(
              t,
              (null === (e = this.visualElement.getProps().initial) ||
              void 0 === e
                ? void 0
                : e[t]) || 0
            )
          );
        }
        snapToCursor(t) {
          ru((e) => {
            let { drag: n } = this.getProps();
            if (!rO(e, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: n, max: o } = r.layout.layoutBox[e];
              i.set(t[e] - eQ(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!p(n) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          ru((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  r = n3(t),
                  i = n3(e);
                return (
                  i > r
                    ? (n = nt(e.min, e.max - r, t.min))
                    : r > i && (n = nt(t.min, t.max - i, e.min)),
                  $(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            ru((t) => {
              if (!rO(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: r, max: o } = this.constraints[t];
              n.set(eQ(r, o, i[t]));
            });
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          rT.set(this.visualElement, this);
          let e = tq(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              p(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", n);
          r &&
            !r.layout &&
            (null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout()),
            n();
          let o = tD(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (ru((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), e(), i(), null == s || s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function rO(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      let rS = {
        pan: t8(function ({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: i,
        }) {
          let o = (0, l.useRef)(null),
            { transformPagePoint: s } = (0, l.useContext)(u),
            a = {
              onSessionStart: r,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                (o.current = null), n && n(t, e);
              },
            };
          (0, l.useEffect)(() => {
            null !== o.current && o.current.updateHandlers(a);
          }),
            tz(
              i,
              "pointerdown",
              (t || e || n || r) &&
                function (t) {
                  o.current = new nQ(t, a, { transformPagePoint: s });
                }
            ),
            (0, tQ.z)(() => o.current && o.current.end());
        }),
        drag: t8(function (t) {
          let { dragControls: e, visualElement: n } = t,
            r = (0, P.h)(() => new rV(n));
          (0, l.useEffect)(() => e && e.subscribe(r), [r, e]),
            (0, l.useEffect)(() => r.addListeners(), [r]);
        }),
      };
      function rC(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      let rM = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function rk(t, e, n = 1) {
        (0, ez.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [r, i] = (function (t) {
          let e = rM.exec(t);
          if (!e) return [,];
          let [, n, r] = e;
          return [n, r];
        })(t);
        if (!r) return;
        let o = window.getComputedStyle(e).getPropertyValue(r);
        return o ? o.trim() : rC(i) ? rk(i, e, n + 1) : i;
      }
      let rD = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        rR = (t) => rD.has(t),
        rj = (t) => Object.keys(t).some(rR),
        rL = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        rB = (t) => t === _ || t === tt;
      ((o = a || (a = {})).width = "width"),
        (o.height = "height"),
        (o.left = "left"),
        (o.right = "right"),
        (o.top = "top"),
        (o.bottom = "bottom");
      let rI = (t, e) => parseFloat(t.split(", ")[e]),
        rF =
          (t, e) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/);
            if (i) return rI(i[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/);
              return e ? rI(e[1], t) : 0;
            }
          },
        rU = new Set(["x", "y", "z"]),
        rN = j.filter((t) => !rU.has(t)),
        rW = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: rF(4, 13),
          y: rF(5, 14),
        },
        r$ = (t, e, n) => {
          let r = e.measureViewportBox(),
            i = getComputedStyle(e.current),
            { display: o } = i,
            s = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            n.forEach((t) => {
              s[t] = rW[t](r, i);
            }),
            e.render();
          let a = e.measureViewportBox();
          return (
            n.forEach((n) => {
              rL(e.getValue(n), s[n]), (t[n] = rW[n](a, i));
            }),
            t
          );
        },
        r_ = (t, e, n = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          let i = Object.keys(e).filter(rR),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = t.getValue(i);
              if (!t.hasValue(i)) return;
              let c = n[i],
                f = eF(c),
                h = e[i];
              if (tT(h)) {
                let t = h.length,
                  e = null === h[0] ? 1 : 0;
                f = eF((c = h[e]));
                for (let n = e; n < t; n++)
                  l
                    ? (0, ez.k)(
                        eF(h[n]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = eF(h[n])),
                      (0, ez.k)(
                        l === f || (rB(f) && rB(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = eF(h);
              if (f !== l) {
                if (rB(f) && rB(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof h
                      ? (e[i] = parseFloat(h))
                      : Array.isArray(h) &&
                        l === tt &&
                        (e[i] = h.map(parseFloat));
                } else
                  (null == f ? void 0 : f.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === h)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (e[i] = f.transform(h))
                    : (s ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            rN.forEach((n) => {
                              let r = t.getValue(n);
                              void 0 !== r &&
                                (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (s = !0)),
                      a.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                      rL(u, h));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: r };
          {
            let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = r$(e, t, a);
            return (
              o.length &&
                o.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              A.j && null !== n && window.scrollTo({ top: n }),
              { target: i, transitionEnd: r }
            );
          }
        },
        rq = (t, e, n, r) => {
          var i, o;
          let s = (function (t, { ...e }, n) {
            let r = t.current;
            if (!(r instanceof Element)) return { target: e, transitionEnd: n };
            for (let i in (n && (n = { ...n }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!rC(e)) return;
              let n = rk(e, r);
              n && t.set(n);
            }),
            e)) {
              let t = e[i];
              if (!rC(t)) continue;
              let o = rk(t, r);
              o && ((e[i] = o), n && void 0 === n[i] && (n[i] = t));
            }
            return { target: e, transitionEnd: n };
          })(t, e, r);
          return (
            (e = s.target),
            (r = s.transitionEnd),
            (i = e),
            (o = r),
            rj(i) ? r_(t, i, n, o) : { target: i, transitionEnd: o }
          );
        },
        rz = { current: null },
        rH = { current: !1 },
        rY = Object.keys(E),
        rZ = rY.length,
        rX = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rG {
        constructor(
          { parent: t, props: e, reducedMotionConfig: n, visualState: r },
          i = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => es.Z_.render(this.render, !1, !0));
          let { latestValues: o, renderState: s } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = s),
            (this.parent = t),
            (this.props = e),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = i),
            (this.isControllingVariants = y(e)),
            (this.isVariantNode = x(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: a, ...l } = this.scrapeMotionValuesFromProps(e);
          for (let t in l) {
            let e = l[t];
            void 0 !== o[t] && I(e) && (e.set(o[t], !1), e$(a) && a.add(t));
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {};
        }
        mount(t) {
          var e;
          (this.current = t),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rH.current ||
              (function () {
                if (((rH.current = !0), A.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rz.current = t.matches);
                    t.addListener(e), e();
                  } else rz.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rz.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var t, e, n;
          for (let r in (null === (t = this.projection) ||
            void 0 === t ||
            t.unmount(),
          es.qY.update(this.notifyUpdate),
          es.qY.render(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          null === (e = this.removeFromVariantTree) ||
            void 0 === e ||
            e.call(this),
          null === (n = this.parent) || void 0 === n || n.children.delete(this),
          this.events))
            this.events[r].clear();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = L.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && es.Z_.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, n, r, i, o) {
          let s = [];
          "production" !== t2.O &&
            n &&
            e &&
            (0, ez.k)(
              !1,
              "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
            );
          for (let e = 0; e < rZ; e++) {
            let n = rY[e],
              { isEnabled: r, Component: i } = E[n];
            r(t) &&
              i &&
              s.push(
                (0, l.createElement)(i, { key: n, ...t, visualElement: this })
              );
          }
          if (!this.projection && i) {
            this.projection = new i(
              r,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: n,
              drag: s,
              dragConstraints: a,
              layoutScroll: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: !!s || (a && p(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: l,
            });
          }
          return s;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rl();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.props = t);
          for (let e = 0; e < rX.length; e++) {
            let n = rX[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = t["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          this.prevMotionValues = (function (t, e, n) {
            let { willChange: r } = e;
            for (let i in e) {
              let o = e[i],
                s = n[i];
              if (I(o)) t.addValue(i, o), e$(r) && r.add(i);
              else if (I(s))
                t.addValue(i, ed(o, { owner: t })), e$(r) && r.remove(i);
              else if (s !== o) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  e.hasAnimated || e.set(o);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, ed(void 0 !== e ? e : o));
                }
              }
            }
            for (let r in n) void 0 === e[r] && t.removeValue(r);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e
            ? void 0
            : e[t];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode
            ? this
            : null === (t = this.parent) || void 0 === t
            ? void 0
            : t.getClosestVariantNode();
        }
        getVariantContext(t = !1) {
          var e, n;
          if (t)
            return null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getVariantContext();
          if (!this.isControllingVariants) {
            let t =
              (null === (n = this.parent) || void 0 === n
                ? void 0
                : n.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let r = {};
          for (let t = 0; t < rJ; t++) {
            let e = rK[t],
              n = this.props[e];
            (m(n) || !1 === n) && (r[e] = n);
          }
          return r;
        }
        addVariantChild(t) {
          var e;
          let n = this.getClosestVariantNode();
          if (n)
            return (
              null === (e = n.variantChildren) || void 0 === e || e.add(t),
              () => n.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()),
            this.bindToMotionValue(t, e);
        }
        removeValue(t) {
          var e;
          this.values.delete(t),
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
            this.valueSubscriptions.delete(t),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = ed(e, { owner: this })), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: n } = this.props,
            r =
              "string" == typeof n || "object" == typeof n
                ? null === (e = tP(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || I(i)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eu()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e);
        }
      }
      let rK = ["initial", ...nY],
        rJ = rK.length;
      class rQ extends rG {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e];
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          { transformValues: r },
          i
        ) {
          let o = (function (t, e, n) {
            var r;
            let i = {};
            for (let o in t) {
              let t = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(o, e);
              i[o] =
                void 0 !== t
                  ? t
                  : null === (r = n.getValue(o)) || void 0 === r
                  ? void 0
                  : r.get();
            }
            return i;
          })(n, t || {}, this);
          if ((r && (e && (e = r(e)), n && (n = r(n)), o && (o = r(o))), i)) {
            !(function (t, e, n) {
              var r, i;
              let o = Object.keys(e).filter((e) => !t.hasValue(e)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let s = o[a],
                    l = e[s],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (r = n[s]) && void 0 !== r
                              ? r
                              : t.readValue(s)) && void 0 !== i
                          ? i
                          : e[s]),
                    null != u &&
                      ("string" == typeof u && (er(u) || ei(u))
                        ? (u = parseFloat(u))
                        : !eN(u) && eS.test(l) && (u = eL(s, l)),
                      t.addValue(s, ed(u, { owner: t })),
                      void 0 === n[s] && (n[s] = u),
                      null !== u && t.setBaseTarget(s, u));
                }
            })(this, n, o);
            let t = rq(this, n, o, e);
            (e = t.transitionEnd), (n = t.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
      class r0 extends rQ {
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            let t = ej(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              r = (N(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return rP(t, e);
        }
        build(t, e, n, r) {
          ts(t, e, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t) {
          return tE(t);
        }
        renderInstance(t, e, n, r) {
          tx(t, e, n, r);
        }
      }
      class r1 extends rQ {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          var n;
          return L.has(e)
            ? (null === (n = ej(e)) || void 0 === n ? void 0 : n.default) || 0
            : ((e = tb.has(e) ? e : ty(e)), t.getAttribute(e));
        }
        measureInstanceViewportBox() {
          return rl();
        }
        scrapeMotionValuesFromProps(t) {
          return tA(t);
        }
        build(t, e, n, r) {
          tm(t, e, n, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, n, r) {
          tw(t, e, n, r);
        }
        mount(t) {
          (this.isSVGTag = tg(t.tagName)), super.mount(t);
        }
      }
      let r2 = (t, e) =>
        D(t)
          ? new r1(e, { enableHardwareAcceleration: !1 })
          : new r0(e, { enableHardwareAcceleration: !0 });
      function r5(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let r3 = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tt.test(t)) return t;
              t = parseFloat(t);
            }
            let n = r5(t, e.target.x),
              r = r5(t, e.target.y);
            return `${n}% ${r}%`;
          },
        },
        r4 = "_$css",
        r9 = {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let r = t,
              i = t.includes("var("),
              o = [];
            i && (t = t.replace(rM, (t) => (o.push(t), r4)));
            let s = eS.parse(t);
            if (s.length > 5) return r;
            let a = eS.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            (s[0 + l] /= u), (s[1 + l] /= c);
            let f = eQ(u, c, 0.5);
            "number" == typeof s[2 + l] && (s[2 + l] /= f),
              "number" == typeof s[3 + l] && (s[3 + l] /= f);
            let h = a(s);
            if (i) {
              let t = 0;
              h = h.replace(r4, () => {
                let e = o[t];
                return t++, e;
              });
            }
            return h;
          },
        };
      class r6 extends l.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = t;
          Object.assign(R, r7),
            i &&
              (e.group && e.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (T.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = i),
              r || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    es.Z_.postRender(() => {
                      var t;
                      (null === (t = o.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            (null == e ? void 0 : e.group) && e.group.remove(r),
            (null == n ? void 0 : n.deregister) && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          null == t || t();
        }
        render() {
          return null;
        }
      }
      let r7 = {
          borderRadius: {
            ...r3,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: r3,
          borderTopRightRadius: r3,
          borderBottomLeftRadius: r3,
          borderBottomRightRadius: r3,
          boxShadow: r9,
        },
        r8 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        it = r8.length,
        ie = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ir = (t) => "number" == typeof t || tt.test(t);
      function ii(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let io = ia(0, 0.5, na),
        is = ia(0.5, 0.95, nr);
      function ia(t, e, n) {
        return (r) => (r < t ? 0 : r > e ? 1 : n(nt(t, e, r)));
      }
      function il(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function iu(t, e) {
        il(t.x, e.x), il(t.y, e.y);
      }
      function ic(t, e, n, r, i) {
        return (
          (t -= e),
          (t = r + (1 / n) * (t - r)),
          void 0 !== i && (t = r + (1 / i) * (t - r)),
          t
        );
      }
      function ih(t, e, [n, r, i], o, s) {
        !(function (t, e = 0, n = 1, r = 0.5, i, o = t, s = t) {
          if (
            (Q.test(e) &&
              ((e = parseFloat(e)), (e = eQ(s.min, s.max, e / 100) - s.min)),
            "number" != typeof e)
          )
            return;
          let a = eQ(o.min, o.max, r);
          t === o && (a -= e),
            (t.min = ic(t.min, e, n, a, i)),
            (t.max = ic(t.max, e, n, a, i));
        })(t, e[n], e[r], e[i], e.scale, o, s);
      }
      let id = ["x", "scaleX", "originX"],
        ip = ["y", "scaleY", "originY"];
      function im(t, e, n, r) {
        ih(t.x, e, id, null == n ? void 0 : n.x, null == r ? void 0 : r.x),
          ih(t.y, e, ip, null == n ? void 0 : n.y, null == r ? void 0 : r.y);
      }
      function iv(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ig(t) {
        return iv(t.x) && iv(t.y);
      }
      function iy(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function ix(t) {
        return n3(t.x) / n3(t.y);
      }
      class ib {
        constructor() {
          this.members = [];
        }
        add(t) {
          ea(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (el(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          var n;
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) &&
                (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            var e, n, r, i, o;
            null === (n = (e = t.options).onExitComplete) ||
              void 0 === n ||
              n.call(e),
              null ===
                (o =
                  null === (r = t.resumingFrom) || void 0 === r
                    ? void 0
                    : (i = r.options).onExitComplete) ||
                void 0 === o ||
                o.call(i);
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function iw(t, e, n) {
        let r = "",
          i = t.x.translate / e.x,
          o = t.y.translate / e.y;
        if (
          ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          n)
        ) {
          let { rotate: t, rotateX: e, rotateY: i } = n;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            i && (r += `rotateY(${i}deg) `);
        }
        let s = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== s || 1 !== a) && (r += `scale(${s}, ${a})`), r || "none";
      }
      let iE = (t, e) => t.depth - e.depth;
      class iA {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          ea(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          el(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(iE),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let iP = ["", "X", "Y", "Z"],
        iT = 0;
      function iV({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(t, n = {}, r = null == e ? void 0 : e()) {
            (this.id = iT++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(iC),
                  this.nodes.forEach(ij),
                  this.nodes.forEach(iL);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = n),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iA());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new eu()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            null == n || n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, n = !1) {
            var r;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: o, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              null === (r = this.parent) ||
                void 0 === r ||
                r.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              n && (o || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = nS(r, 250)),
                  T.hasAnimatedSinceResize &&
                    ((T.hasAnimatedSinceResize = !1), this.nodes.forEach(iR));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    var i, o, a, l, u;
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let c =
                        null !==
                          (o =
                            null !== (i = this.options.transition) &&
                            void 0 !== i
                              ? i
                              : s.getDefaultTransition()) && void 0 !== o
                          ? o
                          : iW,
                      {
                        onLayoutAnimationStart: f,
                        onLayoutAnimationComplete: h,
                      } = s.getProps(),
                      d = !this.targetLayout || !iy(this.targetLayout, r) || n,
                      p = !e && n;
                    if (
                      (null === (a = this.resumeFrom) || void 0 === a
                        ? void 0
                        : a.instance) ||
                      p ||
                      (e && (d || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, p);
                      let e = { ...nF(c, "layout"), onPlay: f, onComplete: h };
                      s.shouldReduceMotion && ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || 0 !== this.animationProgress || iR(this),
                        this.isLead() &&
                          (null === (u = (l = this.options).onExitComplete) ||
                            void 0 === u ||
                            u.call(l));
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (t = this.getStack()) || void 0 === t || t.remove(this),
              null === (e = this.parent) ||
                void 0 === e ||
                e.children.delete(this),
              (this.instance = void 0),
              es.qY.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            var t;
            return (
              this.isAnimationBlocked ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            var t;
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              null === (t = this.nodes) || void 0 === t || t.forEach(iB),
              this.animationId++);
          }
          willUpdate(t = !0) {
            var e, n, r;
            if (this.root.isUpdateBlocked()) {
              null === (n = (e = this.options).onExitComplete) ||
                void 0 === n ||
                n.call(e);
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0), e.updateScroll("snapshot");
            }
            let { layoutId: i, layout: o } = this.options;
            if (void 0 === i && !o) return;
            let s =
              null === (r = this.options.visualElement) || void 0 === r
                ? void 0
                : r.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              null == s ? void 0 : s(this.latestValues, "")),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            if (this.isUpdateBlocked()) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ik);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(i$), this.potentialNodes.clear()),
              this.nodes.forEach(iD),
              this.nodes.forEach(iO),
              this.nodes.forEach(iS),
              this.clearAllSnapshots(),
              es.iW.update(),
              es.iW.preRender(),
              es.iW.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(iM), this.sharedNodes.forEach(iI);
          }
          scheduleUpdateProjection() {
            es.Z_.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            es.Z_.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            var t;
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = rl()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox),
              null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.notify(
                  "LayoutMeasure",
                  this.layout.layoutBox,
                  null == e ? void 0 : e.layoutBox
                );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            var t;
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !ig(this.projectionDelta),
              r =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate,
              o = null == r ? void 0 : r(this.latestValues, ""),
              s = o !== this.prevTransformTemplateValue;
            e &&
              (n || rd(this.latestValues) || s) &&
              (i(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              t && (r = this.removeTransform(r)),
              i_((e = r).x),
              i_(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return rl();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (rx(e.x, n.offset.x), rx(e.y, n.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = rl();
            iu(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                { scroll: i, options: o } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  iu(e, t);
                  let { scroll: n } = this.root;
                  n && (rx(e.x, -n.offset.x), rx(e.y, -n.offset.y));
                }
                rx(e.x, i.offset.x), rx(e.y, i.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = rl();
            iu(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rA(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rd(r.latestValues) && rA(n, r.latestValues);
            }
            return rd(this.latestValues) && rA(n, this.latestValues), n;
          }
          removeTransform(t) {
            var e;
            let n = rl();
            iu(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !rd(r.latestValues)) continue;
              rh(r.latestValues) && r.updateSnapshot();
              let i = rl();
              iu(i, r.measurePageBox()),
                im(
                  n,
                  r.latestValues,
                  null === (e = r.snapshot) || void 0 === e
                    ? void 0
                    : e.layoutBox,
                  i
                );
            }
            return rd(this.latestValues) && im(n, this.latestValues), n;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              (this.isProjectionDirty = !0),
              this.root.scheduleUpdateProjection();
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            var t, e, n, r;
            let i = this.getLead();
            if (
              (this.isProjectionDirty ||
                (this.isProjectionDirty = i.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = i.isTransformDirty),
              !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
            )
              return;
            let { layout: o, layoutId: s } = this.options;
            if (this.layout && (o || s)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let t = this.getClosestProjectingParent();
                t && t.layout
                  ? ((this.relativeParent = t),
                    (this.relativeTarget = rl()),
                    (this.relativeTargetOrigin = rl()),
                    rt(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    iu(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (
                (this.relativeTarget || this.targetDelta) &&
                ((this.target ||
                  ((this.target = rl()), (this.targetWithTransforms = rl())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target))
                  ? ((e = this.target),
                    (n = this.relativeTarget),
                    (r = this.relativeParent.target),
                    n7(e.x, n.x, r.x),
                    n7(e.y, n.y, r.y))
                  : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : iu(this.target, this.layout.layoutBox),
                    rg(this.target, this.targetDelta))
                  : iu(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let t = this.getClosestProjectingParent();
                t &&
                !!t.resumingFrom == !!this.resumingFrom &&
                !t.options.layoutScroll &&
                t.target
                  ? ((this.relativeParent = t),
                    (this.relativeTarget = rl()),
                    (this.relativeTargetOrigin = rl()),
                    rt(this.relativeTargetOrigin, this.target, t.target),
                    iu(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                rh(this.parent.latestValues) ||
                rp(this.parent.latestValues)
              )
            )
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            var t;
            let { isProjectionDirty: e, isTransformDirty: n } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            let r = this.getLead(),
              i = !!this.resumingFrom || this !== r,
              o = !0;
            if ((e && (o = !1), i && n && (o = !1), o)) return;
            let { layout: s, layoutId: a } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || a))
            )
              return;
            iu(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, n, r = !1) {
                var i, o;
                let s, a;
                let l = n.length;
                if (l) {
                  e.x = e.y = 1;
                  for (let u = 0; u < l; u++)
                    (a = (s = n[u]).projectionDelta),
                      (null ===
                        (o =
                          null === (i = s.instance) || void 0 === i
                            ? void 0
                            : i.style) || void 0 === o
                        ? void 0
                        : o.display) !== "contents" &&
                        (r &&
                          s.options.layoutScroll &&
                          s.scroll &&
                          s !== s.root &&
                          rA(t, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y,
                          }),
                        a && ((e.x *= a.x.scale), (e.y *= a.y.scale), rg(t, a)),
                        r && rd(s.latestValues) && rA(t, s.latestValues));
                  (e.x = ry(e.x)), (e.y = ry(e.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, i);
            let { target: l } = r;
            if (!l) return;
            this.projectionDelta ||
              ((this.projectionDelta = rs()),
              (this.projectionDeltaWithTransform = rs()));
            let u = this.treeScale.x,
              c = this.treeScale.y,
              f = this.projectionTransform;
            n6(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = iw(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== f ||
                this.treeScale.x !== u ||
                this.treeScale.y !== c) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e, n, r;
            null === (n = (e = this.options).scheduleRender) ||
              void 0 === n ||
              n.call(e),
              t &&
                (null === (r = this.getStack()) ||
                  void 0 === r ||
                  r.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            var n, r;
            let i = this.snapshot,
              o = (null == i ? void 0 : i.latestValues) || {},
              s = { ...this.latestValues },
              a = rs();
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let l = rl(),
              u =
                (null == i ? void 0 : i.source) !==
                (null === (n = this.layout) || void 0 === n
                  ? void 0
                  : n.source),
              c =
                1 >=
                ((null === (r = this.getStack()) || void 0 === r
                  ? void 0
                  : r.members.length) || 0),
              f = !!(
                u &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(iN)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var n, r, i;
                let h = e / 1e3;
                iF(a.x, t.x, h),
                  iF(a.y, t.y, h),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (n = this.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (rt(
                      l,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (r = this.relativeTarget),
                    (i = this.relativeTargetOrigin),
                    iU(r.x, i.x, l.x, h),
                    iU(r.y, i.y, l.y, h)),
                  u &&
                    ((this.animationValues = s),
                    (function (t, e, n, r, i, o) {
                      i
                        ? ((t.opacity = eQ(
                            0,
                            void 0 !== n.opacity ? n.opacity : 1,
                            io(r)
                          )),
                          (t.opacityExit = eQ(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            is(r)
                          )))
                        : o &&
                          (t.opacity = eQ(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== n.opacity ? n.opacity : 1,
                            r
                          ));
                      for (let i = 0; i < it; i++) {
                        let o = `border${r8[i]}Radius`,
                          s = ii(e, o),
                          a = ii(n, o);
                        (void 0 !== s || void 0 !== a) &&
                          (s || (s = 0),
                          a || (a = 0),
                          0 === s || 0 === a || ir(s) === ir(a)
                            ? ((t[o] = Math.max(eQ(ie(s), ie(a), r), 0)),
                              (Q.test(a) || Q.test(s)) && (t[o] += "%"))
                            : (t[o] = a));
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = eQ(e.rotate || 0, n.rotate || 0, r));
                    })(s, o, this.latestValues, h, f, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = h);
              }),
              this.mixTargetDelta(0);
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"),
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
              this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
              this.pendingAnimation &&
                (es.qY.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = es.Z_.update(() => {
                (T.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n = {}) {
                    let r = I(0) ? 0 : ed(0);
                    return (
                      r.start(n_("", r, 1e3, n)),
                      {
                        stop: () => r.stop(),
                        isAnimating: () => r.isAnimating(),
                      }
                    );
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      var n;
                      this.mixTargetDelta(e),
                        null === (n = t.onUpdate) ||
                          void 0 === n ||
                          n.call(t, e);
                    },
                    onComplete: () => {
                      var e;
                      null === (e = t.onComplete) || void 0 === e || e.call(t),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            var t;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (t = this.getStack()) ||
                void 0 === t ||
                t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            var t;
            this.currentAnimation &&
              (null === (t = this.mixTargetDelta) ||
                void 0 === t ||
                t.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: r,
                latestValues: i,
              } = t;
            if (e && n && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                iq(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                n = this.target || rl();
                let e = n3(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let r = n3(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + r);
              }
              iu(e, n),
                rA(e, i),
                n6(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            var n, r, i;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new ib()),
              this.sharedNodes.get(t).add(e),
              e.promote({
                transition:
                  null === (n = e.options.initialPromotionConfig) ||
                  void 0 === n
                    ? void 0
                    : n.transition,
                preserveFollowOpacity:
                  null ===
                    (i =
                      null === (r = e.options.initialPromotionConfig) ||
                      void 0 === r
                        ? void 0
                        : r.shouldPreserveFollowOpacity) || void 0 === i
                    ? void 0
                    : i.call(r, e),
              });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
              !e)
            )
              return;
            let r = {};
            for (let e = 0; e < iP.length; e++) {
              let i = "rotate" + iP[e];
              n[i] && ((r[i] = n[i]), t.setStaticValue(i, 0));
            }
            for (let e in (null == t || t.render(), r))
              t.setStaticValue(e, r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, n, r;
            let i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return { visibility: "hidden" };
            i.visibility = "";
            let o =
              null === (e = this.options.visualElement) || void 0 === e
                ? void 0
                : e.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents = tS(t.pointerEvents) || ""),
                (i.transform = o ? o(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tS(t.pointerEvents) || "")),
                this.hasProjected &&
                  !rd(this.latestValues) &&
                  ((e.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let a = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = iw(
                this.projectionDeltaWithTransform,
                this.treeScale,
                a
              )),
              o && (i.transform = o(a, i.transform));
            let { x: l, y: u } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * l.origin}% ${
              100 * u.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (r =
                          null !== (n = a.opacity) && void 0 !== n
                            ? n
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            R)) {
              if (void 0 === a[t]) continue;
              let { correct: e, applyTo: n } = R[t],
                r = e(a[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this ? tS(t.pointerEvents) || "" : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ik),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iO(t) {
        t.updateLayout();
      }
      function iS(t) {
        var e, n, r;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            o = i.source !== t.layout.source;
          "size" === r
            ? ru((t) => {
                let n = o ? i.measuredBox[t] : i.layoutBox[t],
                  r = n3(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : iq(r, i.layoutBox, e) &&
              ru((t) => {
                let n = o ? i.measuredBox[t] : i.layoutBox[t],
                  r = n3(e[t]);
                n.max = n.min + r;
              });
          let s = rs();
          n6(s, e, i.layoutBox);
          let a = rs();
          o
            ? n6(a, t.applyTransform(n, !0), i.measuredBox)
            : n6(a, e, i.layoutBox);
          let l = !ig(s),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: t, layout: r } = n;
              if (t && r) {
                let n = rl();
                rt(n, i.layoutBox, t.layoutBox);
                let o = rl();
                rt(o, e, r.layoutBox), iy(n, o) || (u = !0);
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else
          t.isLead() &&
            (null === (r = (n = t.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        t.options.transition = void 0;
      }
      function iC(t) {
        t.isProjectionDirty ||
          (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)),
          t.isTransformDirty ||
            (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty));
      }
      function iM(t) {
        t.clearSnapshot();
      }
      function ik(t) {
        t.clearMeasurements();
      }
      function iD(t) {
        let { visualElement: e } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function iR(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function ij(t) {
        t.resolveTargetDelta();
      }
      function iL(t) {
        t.calcProjection();
      }
      function iB(t) {
        t.resetRotation();
      }
      function iI(t) {
        t.removeLeadSnapshot();
      }
      function iF(t, e, n) {
        (t.translate = eQ(e.translate, 0, n)),
          (t.scale = eQ(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iU(t, e, n, r) {
        (t.min = eQ(e.min, n.min, r)), (t.max = eQ(e.max, n.max, r));
      }
      function iN(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iW = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function i$(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (t.path[e].instance) {
            n = t.path[e];
            break;
          }
        let r = (n && n !== t.root ? n.instance : document).querySelector(
          `[data-projection-id="${e}"]`
        );
        r && t.mount(r, !0);
      }
      function i_(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function iq(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !n4(ix(e), ix(n), 0.2))
        );
      }
      let iz = iV({
          attachResizeListener: (t, e) => tD(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iH = { current: void 0 },
        iY = iV({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iH.current) {
              let t = new iz(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iH.current = t);
            }
            return iH.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        iZ = {
          ...nK,
          ...et,
          ...rS,
          measureLayout: function (t) {
            let [e, n] = (0, ee.oO)(),
              r = (0, l.useContext)(O.p);
            return l.createElement(r6, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, l.useContext)(C),
              isPresent: e,
              safeToRemove: n,
            });
          },
        },
        iX = (function (t) {
          function e(e, n = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              projectionNodeConstructor: n,
              useRender: r,
              useVisualState: i,
              Component: o,
            }) {
              t &&
                (function (t) {
                  for (let e in t)
                    "projectionNodeConstructor" === e
                      ? (E.projectionNodeConstructor = t[e])
                      : (E[e].Component = t[e]);
                })(t);
              let s = (0, l.forwardRef)(function (s, a) {
                var v;
                let g = {
                    ...(0, l.useContext)(u),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, l.useContext)(O.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: x } = g,
                  w = null,
                  M = (function (t) {
                    let { initial: e, animate: n } = (function (t, e) {
                      if (y(t)) {
                        let { initial: e, animate: n } = t;
                        return {
                          initial: !1 === e || m(e) ? e : void 0,
                          animate: m(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(c));
                    return (0, l.useMemo)(
                      () => ({ initial: e, animate: n }),
                      [b(e), b(n)]
                    );
                  })(s),
                  k = x
                    ? void 0
                    : (0, P.h)(() => {
                        if (T.hasEverUpdated) return V++;
                      }),
                  D = i(s, x);
                if (!x && A.j) {
                  M.visualElement = (function (t, e, n, r) {
                    let i = (0, l.useContext)(c).visualElement,
                      o = (0, l.useContext)(d),
                      s = (0, l.useContext)(f.O),
                      a = (0, l.useContext)(u).reducedMotion,
                      p = (0, l.useRef)();
                    (r = r || o.renderer),
                      !p.current &&
                        r &&
                        (p.current = r(t, {
                          visualState: e,
                          parent: i,
                          props: n,
                          presenceId: s ? s.id : void 0,
                          blockInitialAnimation: !!s && !1 === s.initial,
                          reducedMotionConfig: a,
                        }));
                    let m = p.current;
                    return (
                      (0, h.L)(() => {
                        m && m.render();
                      }),
                      (0, h.L)(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      (0, h.L)(() => () => m && m.notify("Unmount"), []),
                      m
                    );
                  })(o, D, g, e);
                  let r = (0, l.useContext)(d).strict,
                    i = (0, l.useContext)(C);
                  M.visualElement &&
                    (w = M.visualElement.loadFeatures(
                      g,
                      r,
                      t,
                      k,
                      n || E.projectionNodeConstructor,
                      i
                    ));
                }
                return l.createElement(
                  S,
                  { visualElement: M.visualElement, props: g },
                  w,
                  l.createElement(
                    c.Provider,
                    { value: M },
                    r(
                      o,
                      s,
                      k,
                      ((v = M.visualElement),
                      (0, l.useCallback)(
                        (t) => {
                          t && D.mount && D.mount(t),
                            v && (t ? v.mount(t) : v.unmount()),
                            a &&
                              ("function" == typeof a
                                ? a(t)
                                : p(a) && (a.current = t));
                        },
                        [v]
                      )),
                      D,
                      x,
                      M.visualElement
                    )
                  )
                );
              });
              return (s[M] = o), s;
            })(t(e, n));
          }
          if ("undefined" == typeof Proxy) return e;
          let n = new Map();
          return new Proxy(e, {
            get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, n, r, i) {
            return {
              ...(D(t) ? tM : tk),
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, n, r, i, { latestValues: o }, s) => {
                  let a = (
                      D(e)
                        ? function (t, e, n, r) {
                            let i = (0, l.useMemo)(() => {
                              let n = tv();
                              return (
                                tm(
                                  n,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tg(r),
                                  t.transformTemplate
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tl(e, t.style, t),
                                (i.style = { ...e, ...i.style });
                            }
                            return i;
                          }
                        : function (t, e, n) {
                            let r = {},
                              i = (function (t, e, n) {
                                let r = t.style || {},
                                  i = {};
                                return (
                                  tl(i, r, t),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: t }, e, n) {
                                      return (0, l.useMemo)(() => {
                                        let r = ta();
                                        return (
                                          ts(
                                            r,
                                            e,
                                            { enableHardwareAcceleration: !n },
                                            t
                                          ),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [e]);
                                    })(t, e, n)
                                  ),
                                  t.transformValues ? t.transformValues(i) : i
                                );
                              })(t, e, n);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((r.draggable = !1),
                                (i.userSelect =
                                  i.WebkitUserSelect =
                                  i.WebkitTouchCallout =
                                    "none"),
                                (i.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              (r.style = i),
                              r
                            );
                          }
                    )(n, o, s, e),
                    u = {
                      ...(function (t, e, n) {
                        let r = {};
                        for (let i in t)
                          (tf(i) ||
                            (!0 === n && tc(i)) ||
                            (!e && !tc(i)) ||
                            (t.draggable && i.startsWith("onDrag"))) &&
                            (r[i] = t[i]);
                        return r;
                      })(n, "string" == typeof e, t),
                      ...a,
                      ref: i,
                    };
                  return (
                    r && (u["data-projection-id"] = r),
                    (0, l.createElement)(e, u)
                  );
                };
              })(e),
              createVisualElement: r,
              projectionNodeConstructor: i,
              Component: t,
            };
          })(t, e, iZ, r2, iY)
        );
    },
    11741: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    49304: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      var r = n(34155);
      let i = (void 0 === r || r.env, "production");
    },
    96681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(67294);
      function i(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    58868: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(67294);
      let i = n(11741).j ? r.useLayoutEffect : r.useEffect;
    },
    65411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(67294);
      function i(t) {
        return (0, r.useEffect)(() => () => t(), []);
      }
    },
    16034: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let r = new Set();
      function i(t, e, n) {
        t || r.has(e) || (console.warn(e), n && console.warn(n), r.add(e));
      }
    },
  },
]);
