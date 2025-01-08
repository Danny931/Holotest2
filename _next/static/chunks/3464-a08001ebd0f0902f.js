"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3464],
  {
    12095: function (e, t, n) {
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var r = n(85893),
        s = n(34926),
        u = n(90608),
        i = n(4220),
        a = n(49381),
        o = n(53882);
      let l = (0, a.G)((e, t) => {
          let n = (0, u.x)();
          return (0, r.jsx)(o.m.button, {
            ref: t,
            ...e,
            __css: {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              outline: 0,
              ...n.button,
            },
          });
        }),
        c = (0, a.G)((e, t) => {
          let { children: n, as: u, ...a } = e,
            c = (0, i.zZ)(a, t),
            d = u || l;
          return (0, r.jsx)(d, {
            ...c,
            className: (0, s.cx)("chakra-menu__menu-button", e.className),
            children: (0, r.jsx)(o.m.span, {
              __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
              children: e.children,
            }),
          });
        });
      c.displayName = "MenuButton";
    },
    63162: function (e, t, n) {
      n.d(t, {
        s: function () {
          return m;
        },
      });
      var r = n(85893),
        s = n(34926),
        u = n(90608),
        i = n(49381),
        a = n(53882);
      let o = (0, i.G)((e, t) => {
        let n = (0, u.x)();
        return (0, r.jsx)(a.m.span, {
          ref: t,
          ...e,
          __css: n.command,
          className: "chakra-menu__command",
        });
      });
      o.displayName = "MenuCommand";
      var l = n(67294);
      let c = (e) => {
        let { className: t, children: n, ...i } = e,
          o = (0, u.x)(),
          c = l.Children.only(n),
          d = (0, l.isValidElement)(c)
            ? (0, l.cloneElement)(c, {
                focusable: "false",
                "aria-hidden": !0,
                className: (0, s.cx)("chakra-menu__icon", c.props.className),
              })
            : null,
          f = (0, s.cx)("chakra-menu__icon-wrapper", t);
        return (0, r.jsx)(a.m.span, {
          className: f,
          ...i,
          __css: o.icon,
          children: d,
        });
      };
      c.displayName = "MenuIcon";
      let d = (0, i.G)((e, t) => {
        let { type: n, ...s } = e,
          i = (0, u.x)(),
          o = s.as || n ? n ?? void 0 : "button",
          c = (0, l.useMemo)(
            () => ({
              textDecoration: "none",
              color: "inherit",
              userSelect: "none",
              display: "flex",
              width: "100%",
              alignItems: "center",
              textAlign: "start",
              flex: "0 0 auto",
              outline: 0,
              ...i.item,
            }),
            [i.item]
          );
        return (0, r.jsx)(a.m.button, { ref: t, type: o, ...s, __css: c });
      });
      var f = n(4220);
      let m = (0, i.G)((e, t) => {
        let {
            icon: n,
            iconSpacing: u = "0.75rem",
            command: i,
            commandSpacing: a = "0.75rem",
            children: l,
            ...m
          } = e,
          p = (0, f.iX)(m, t),
          h =
            n || i
              ? (0, r.jsx)("span", {
                  style: { pointerEvents: "none", flex: 1 },
                  children: l,
                })
              : l;
        return (0, r.jsxs)(d, {
          ...p,
          className: (0, s.cx)("chakra-menu__menuitem", p.className),
          children: [
            n &&
              (0, r.jsx)(c, { fontSize: "0.8em", marginEnd: u, children: n }),
            h,
            i && (0, r.jsx)(o, { marginStart: a, children: i }),
          ],
        });
      });
      m.displayName = "MenuItem";
    },
    34302: function (e, t, n) {
      n.d(t, {
        q: function () {
          return m;
        },
      });
      var r = n(85893),
        s = n(34926),
        u = n(68928),
        i = n(33654),
        a = n(90608),
        o = n(4220),
        l = n(53882),
        c = n(49381);
      let d = {
          enter: {
            visibility: "visible",
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            transitionEnd: { visibility: "hidden" },
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.1, easings: "easeOut" },
          },
        },
        f = (0, l.m)(i.E.div),
        m = (0, c.G)(function (e, t) {
          let { rootProps: n, motionProps: i, ...c } = e,
            {
              isOpen: m,
              onTransitionEnd: p,
              unstable__animationState: h,
            } = (0, o.Xh)(),
            b = (0, o._l)(c, t),
            v = (0, o.Qh)(n),
            E = (0, a.x)();
          return (0,
          r.jsx)(l.m.div, { ...v, __css: { zIndex: e.zIndex ?? E.list?.zIndex }, children: (0, r.jsx)(f, { variants: d, initial: !1, animate: m ? "enter" : "exit", __css: { outline: 0, ...E.list }, ...i, ...b, className: (0, s.cx)("chakra-menu__menu-list", b.className), onUpdate: p, onAnimationComplete: (0, u.P)(h.onComplete, b.onAnimationComplete) }) });
        });
      m.displayName = "MenuList";
    },
    90608: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
        x: function () {
          return f;
        },
      });
      var r = n(85893),
        s = n(65544),
        u = n(52110),
        i = n(2847),
        a = n(67294),
        o = n(4220),
        l = n(37984),
        c = n(64317);
      let [d, f] = (0, u.k)({
          name: "MenuStylesContext",
          errorMessage:
            "useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" ",
        }),
        m = (e) => {
          let { children: t } = e,
            n = (0, c.j)("Menu", e),
            u = (0, s.L)(e),
            { direction: f } = (0, l.F)(),
            { descendants: m, ...p } = (0, o.H9)({ ...u, direction: f }),
            h = (0, a.useMemo)(() => p, [p]),
            { isOpen: b, onClose: v, forceUpdate: E } = h;
          return (0, r.jsx)(o.wN, {
            value: m,
            children: (0, r.jsx)(o.Kb, {
              value: h,
              children: (0, r.jsx)(d, {
                value: n,
                children: (0, i.P)(t, {
                  isOpen: b,
                  onClose: v,
                  forceUpdate: E,
                }),
              }),
            }),
          });
        };
      m.displayName = "Menu";
    },
    4220: function (e, t, n) {
      n.d(t, {
        wN: function () {
          return D;
        },
        Kb: function () {
          return S;
        },
        H9: function () {
          return j;
        },
        zZ: function () {
          return A;
        },
        Xh: function () {
          return P;
        },
        iX: function () {
          return q;
        },
        _l: function () {
          return U;
        },
        Qh: function () {
          return F;
        },
      });
      var r = n(83658),
        s = n(67294),
        u = n(95372);
      function i(e, t) {
        let n = e.composedPath?.()[0] ?? e.target;
        return (!n || !!a(n).contains(n)) && !t.current?.contains(n);
      }
      function a(e) {
        return e?.ownerDocument ?? document;
      }
      var o = n(59255),
        l = n(90191),
        c = n(4840),
        d = n(74247),
        f = n(29062),
        m = n(52110),
        p = n(20397),
        h = n(68928);
      function b(e) {
        return e.sort((e, t) => {
          let n = e.compareDocumentPosition(t);
          if (
            n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return -1;
          if (
            n & Node.DOCUMENT_POSITION_PRECEDING ||
            n & Node.DOCUMENT_POSITION_CONTAINS
          )
            return 1;
          if (
            !(n & Node.DOCUMENT_POSITION_DISCONNECTED) &&
            !(n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          )
            return 0;
          throw Error("Cannot sort the given nodes.");
        });
      }
      let v = (e) =>
        "object" == typeof e &&
        "nodeType" in e &&
        e.nodeType === Node.ELEMENT_NODE;
      function E(e, t, n) {
        let r = e + 1;
        return n && r >= t && (r = 0), r;
      }
      function x(e, t, n) {
        let r = e - 1;
        return n && r < 0 && (r = t), r;
      }
      let C = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect,
        y = (e) => e;
      var N = Object.defineProperty,
        k = (e, t, n) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        g = (e, t, n) => (k(e, "symbol" != typeof t ? t + "" : t, n), n);
      class _ {
        constructor() {
          g(this, "descendants", new Map()),
            g(this, "register", (e) => {
              if (null != e)
                return v(e)
                  ? this.registerNode(e)
                  : (t) => {
                      this.registerNode(t, e);
                    };
            }),
            g(this, "unregister", (e) => {
              this.descendants.delete(e);
              let t = b(Array.from(this.descendants.keys()));
              this.assignIndex(t);
            }),
            g(this, "destroy", () => {
              this.descendants.clear();
            }),
            g(this, "assignIndex", (e) => {
              this.descendants.forEach((t) => {
                let n = e.indexOf(t.node);
                (t.index = n), (t.node.dataset.index = t.index.toString());
              });
            }),
            g(this, "count", () => this.descendants.size),
            g(this, "enabledCount", () => this.enabledValues().length),
            g(this, "values", () =>
              Array.from(this.descendants.values()).sort(
                (e, t) => e.index - t.index
              )
            ),
            g(this, "enabledValues", () =>
              this.values().filter((e) => !e.disabled)
            ),
            g(this, "item", (e) => {
              if (0 !== this.count()) return this.values()[e];
            }),
            g(this, "enabledItem", (e) => {
              if (0 !== this.enabledCount()) return this.enabledValues()[e];
            }),
            g(this, "first", () => this.item(0)),
            g(this, "firstEnabled", () => this.enabledItem(0)),
            g(this, "last", () => this.item(this.descendants.size - 1)),
            g(this, "lastEnabled", () => {
              let e = this.enabledValues().length - 1;
              return this.enabledItem(e);
            }),
            g(this, "indexOf", (e) =>
              e ? this.descendants.get(e)?.index ?? -1 : -1
            ),
            g(this, "enabledIndexOf", (e) =>
              null == e
                ? -1
                : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
            ),
            g(this, "next", (e, t = !0) => {
              let n = E(e, this.count(), t);
              return this.item(n);
            }),
            g(this, "nextEnabled", (e, t = !0) => {
              let n = this.item(e);
              if (!n) return;
              let r = E(this.enabledIndexOf(n.node), this.enabledCount(), t);
              return this.enabledItem(r);
            }),
            g(this, "prev", (e, t = !0) => {
              let n = x(e, this.count() - 1, t);
              return this.item(n);
            }),
            g(this, "prevEnabled", (e, t = !0) => {
              let n = this.item(e);
              if (!n) return;
              let r = x(
                this.enabledIndexOf(n.node),
                this.enabledCount() - 1,
                t
              );
              return this.enabledItem(r);
            }),
            g(this, "registerNode", (e, t) => {
              if (!e || this.descendants.has(e)) return;
              let n = b(Array.from(this.descendants.keys()).concat(e));
              t?.disabled && (t.disabled = !!t.disabled);
              let r = { node: e, index: -1, ...t };
              this.descendants.set(e, r), this.assignIndex(n);
            });
        }
      }
      var I = n(78627);
      function w(e) {
        let { tagName: t, isContentEditable: n } =
          e.composedPath?.()?.[0] ?? e.target;
        return "INPUT" !== t && "TEXTAREA" !== t && !0 !== n;
      }
      let [D, O, M, T] = (function () {
          let [e, t] = (0, m.k)({
            name: "DescendantsProvider",
            errorMessage:
              "useDescendantsContext must be used within DescendantsProvider",
          });
          return [
            e,
            t,
            () => {
              let e = (0, s.useRef)(new _());
              return C(() => () => e.current.destroy()), e.current;
            },
            (e) => {
              let n = t(),
                [r, u] = (0, s.useState)(-1),
                i = (0, s.useRef)(null);
              C(
                () => () => {
                  i.current && n.unregister(i.current);
                },
                []
              ),
                C(() => {
                  if (!i.current) return;
                  let e = Number(i.current.dataset.index);
                  r == e || Number.isNaN(e) || u(e);
                });
              let a = e ? y(n.register(e)) : y(n.register);
              return {
                descendants: n,
                index: r,
                enabledIndex: n.enabledIndexOf(i.current),
                register: (0, f.lq)(a, i),
              };
            },
          ];
        })(),
        [S, P] = (0, m.k)({ strict: !1, name: "MenuContext" });
      function L(e) {
        return e?.ownerDocument ?? document;
      }
      function j(e = {}) {
        let {
            id: t,
            closeOnSelect: n = !0,
            closeOnBlur: f = !0,
            initialFocusRef: m,
            autoSelect: p = !0,
            isLazy: h,
            isOpen: b,
            defaultIsOpen: v,
            onClose: E,
            onOpen: x,
            placement: C = "bottom-start",
            lazyBehavior: y = "unmount",
            direction: N,
            computePositionOnMount: k = !1,
            ...g
          } = e,
          _ = (0, s.useRef)(null),
          w = (0, s.useRef)(null),
          D = (0, s.useRef)(!0),
          O = M(),
          T = (0, s.useCallback)(() => {
            requestAnimationFrame(() => {
              _.current?.focus({ preventScroll: !1 });
            });
          }, []),
          S = (0, s.useCallback)(() => {
            let e = setTimeout(() => {
              if (m) m.current?.focus();
              else if (O.count()) {
                let e = O.firstEnabled();
                e && z(e.index);
              } else _.current?.focus({ preventScroll: !1 });
            });
            X.current.add(e);
          }, [O, m]),
          P = (0, s.useCallback)(() => {
            let e = setTimeout(() => {
              if (O.count()) {
                let e = O.lastEnabled();
                e && z(e.index);
              } else _.current?.focus({ preventScroll: !1 });
            });
            X.current.add(e);
          }, [O]),
          j = (0, s.useCallback)(() => {
            x?.(), p ? S() : T();
          }, [p, S, T, x]),
          {
            isOpen: A,
            onOpen: R,
            onClose: U,
            onToggle: F,
          } = (0, r.q)({ isOpen: b, defaultIsOpen: v, onClose: E, onOpen: j });
        !(function (e) {
          let { ref: t, handler: n, enabled: r = !0 } = e,
            o = (0, u.W)(n),
            l = (0, s.useRef)({
              isPointerDown: !1,
              ignoreEmulatedMouseEvents: !1,
            }).current;
          (0, s.useEffect)(() => {
            if (!r) return;
            let e = (e) => {
                i(e, t) && (l.isPointerDown = !0);
              },
              s = (e) => {
                if (l.ignoreEmulatedMouseEvents) {
                  l.ignoreEmulatedMouseEvents = !1;
                  return;
                }
                l.isPointerDown &&
                  n &&
                  i(e, t) &&
                  ((l.isPointerDown = !1), o(e));
              },
              u = (e) => {
                (l.ignoreEmulatedMouseEvents = !0),
                  n &&
                    l.isPointerDown &&
                    i(e, t) &&
                    ((l.isPointerDown = !1), o(e));
              },
              c = a(t.current);
            return (
              c.addEventListener("mousedown", e, !0),
              c.addEventListener("mouseup", s, !0),
              c.addEventListener("touchstart", e, !0),
              c.addEventListener("touchend", u, !0),
              () => {
                c.removeEventListener("mousedown", e, !0),
                  c.removeEventListener("mouseup", s, !0),
                  c.removeEventListener("touchstart", e, !0),
                  c.removeEventListener("touchend", u, !0);
              }
            );
          }, [n, t, o, l, r]);
        })({
          enabled: A && f,
          ref: _,
          handler: (e) => {
            let t = e.composedPath?.()?.[0] ?? e.target;
            w.current?.contains(t) || U();
          },
        });
        let q = (0, I.D)({ ...g, enabled: A || k, placement: C, direction: N }),
          [K, z] = (0, s.useState)(-1);
        !(function (e, t) {
          let { shouldFocus: n, visible: r, focusRef: s } = t,
            u = n && !r;
          (0, c.r)(() => {
            let t;
            if (
              !u ||
              (function (e) {
                let t = e.current;
                if (!t) return !1;
                let n = (0, o.vY)(t);
                return !(!n || t.contains(n)) && !!(0, l.Wq)(n);
              })(e)
            )
              return;
            let n = s?.current || e.current;
            if (n)
              return (
                (t = requestAnimationFrame(() => {
                  n.focus({ preventScroll: !0 });
                })),
                () => {
                  cancelAnimationFrame(t);
                }
              );
          }, [u, e, s]);
        })(_, { focusRef: w, visible: A, shouldFocus: !0 });
        let G = (function (e) {
            let { isOpen: t, ref: n } = e,
              [r, u] = (0, s.useState)(t),
              [i, a] = (0, s.useState)(!1);
            return (
              (0, s.useEffect)(() => {
                i || (u(t), a(!0));
              }, [t, i, r]),
              (0, d.O)(
                () => n.current,
                "animationend",
                () => {
                  u(t);
                }
              ),
              {
                present: !(!t && !r),
                onComplete() {
                  let e = new ((0, o.kR)(n.current).CustomEvent)(
                    "animationend",
                    { bubbles: !0 }
                  );
                  n.current?.dispatchEvent(e);
                },
              }
            );
          })({ isOpen: A, ref: _ }),
          [V, W] = (function (e, ...t) {
            let n = (function (e, t) {
              let n = (0, s.useId)();
              return (0, s.useMemo)(
                () => e || [void 0, n].filter(Boolean).join("-"),
                [e, void 0, n]
              );
            })(e);
            return (0, s.useMemo)(() => t.map((e) => `${e}-${n}`), [n, t]);
          })(t, "menu-button", "menu-list"),
          B = (0, s.useCallback)(() => {
            R(), T();
          }, [R, T]),
          X = (0, s.useRef)(new Set([]));
        return (
          (0, s.useEffect)(() => {
            let e = X.current;
            return () => {
              e.forEach((e) => clearTimeout(e)), e.clear();
            };
          }, []),
          (0, c.r)(() => {
            A || (z(-1), _.current?.scrollTo(0, 0));
          }, [A]),
          (0, c.r)(() => {
            A && -1 === K && T();
          }, [K, A]),
          (0, s.useEffect)(() => {
            if (!A) return;
            let e = O.item(K);
            e?.node?.focus({ preventScroll: !D.current });
          }, [O, K, A]),
          {
            openAndFocusMenu: B,
            openAndFocusFirstItem: (0, s.useCallback)(() => {
              R(), S();
            }, [S, R]),
            openAndFocusLastItem: (0, s.useCallback)(() => {
              (D.current = !0), R(), P();
            }, [R, P]),
            onTransitionEnd: (0, s.useCallback)(() => {
              let e = L(_.current),
                t = _.current?.contains(e.activeElement);
              if (!(A && !t)) return;
              let n = O.item(K)?.node;
              n?.focus({ preventScroll: !D.current });
            }, [A, K, O]),
            unstable__animationState: G,
            descendants: O,
            popper: q,
            buttonId: V,
            menuId: W,
            forceUpdate: q.forceUpdate,
            orientation: "vertical",
            isOpen: A,
            onToggle: F,
            onOpen: R,
            onClose: U,
            menuRef: _,
            buttonRef: w,
            focusedIndex: K,
            closeOnSelect: n,
            closeOnBlur: f,
            autoSelect: p,
            setFocusedIndex: z,
            isLazy: h,
            lazyBehavior: y,
            initialFocusRef: m,
            scrollIntoViewRef: D,
          }
        );
      }
      function A(e = {}, t = null) {
        let n = P(),
          {
            onToggle: r,
            popper: u,
            openAndFocusFirstItem: i,
            openAndFocusLastItem: a,
            scrollIntoViewRef: o,
          } = n,
          l = (0, s.useCallback)(
            (e) => {
              let t = { Enter: i, ArrowDown: i, ArrowUp: a }[e.key];
              t &&
                ((o.current = !0),
                e.preventDefault(),
                e.stopPropagation(),
                t(e));
            },
            [i, a, o]
          );
        return {
          ...e,
          ref: (0, f.lq)(n.buttonRef, t, u.referenceRef),
          id: n.buttonId,
          "data-active": (0, p.P)(n.isOpen),
          "aria-expanded": n.isOpen,
          "aria-haspopup": "menu",
          "aria-controls": n.menuId,
          onClick: (0, h.v)(e.onClick, r),
          onKeyDown: (0, h.v)(e.onKeyDown, l),
        };
      }
      function R(e) {
        return (
          (function (e) {
            if (
              !(
                null != e &&
                "object" == typeof e &&
                "nodeType" in e &&
                e.nodeType === Node.ELEMENT_NODE
              )
            )
              return !1;
            let t = e.ownerDocument.defaultView ?? window;
            return e instanceof t.HTMLElement;
          })(e) && !!e?.getAttribute("role")?.startsWith("menuitem")
        );
      }
      function U(e = {}, t = null) {
        let n = P();
        if (!n)
          throw Error(
            "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
          );
        let {
            focusedIndex: r,
            setFocusedIndex: u,
            menuRef: i,
            isOpen: a,
            onClose: o,
            menuId: l,
            isLazy: c,
            lazyBehavior: d,
            scrollIntoViewRef: m,
            unstable__animationState: p,
          } = n,
          b = O(),
          v = (function (e = {}) {
            let { timeout: t = 300, preventDefault: n = () => !0 } = e,
              [r, u] = (0, s.useState)([]),
              i = (0, s.useRef)(),
              a = () => {
                i.current && (clearTimeout(i.current), (i.current = null));
              },
              o = () => {
                a(),
                  (i.current = setTimeout(() => {
                    u([]), (i.current = null);
                  }, t));
              };
            return (
              (0, s.useEffect)(() => a, []),
              function (e) {
                return (t) => {
                  if ("Backspace" === t.key) {
                    let e = [...r];
                    e.pop(), u(e);
                    return;
                  }
                  if (
                    (function (e) {
                      let { key: t } = e;
                      return (
                        1 === t.length ||
                        (t.length > 1 && /[^a-zA-Z0-9]/.test(t))
                      );
                    })(t)
                  ) {
                    let s = r.concat(t.key);
                    n(t) && (t.preventDefault(), t.stopPropagation()),
                      u(s),
                      e(s.join("")),
                      o();
                  }
                };
              }
            );
          })({ preventDefault: (e) => " " !== e.key && R(e.target) }),
          E = (0, s.useCallback)(
            (e) => {
              if (!e.currentTarget.contains(e.target)) return;
              let t = {
                Tab: (e) => e.preventDefault(),
                Escape: (e) => {
                  e.stopPropagation(), o();
                },
                ArrowDown: () => {
                  m.current = !0;
                  let e = b.nextEnabled(r) ?? b.firstEnabled();
                  e && u(e.index);
                },
                ArrowUp: () => {
                  m.current = !0;
                  let e = b.prevEnabled(r) ?? b.firstEnabled();
                  e && u(e.index);
                },
              }[e.key];
              if (t) {
                e.preventDefault(), t(e);
                return;
              }
              let n = v((e) => {
                let t = (function (e, t, n, r) {
                  if (null == t) return r;
                  if (!r)
                    return e.find((e) =>
                      n(e).toLowerCase().startsWith(t.toLowerCase())
                    );
                  let s = e.filter((e) =>
                    n(e).toLowerCase().startsWith(t.toLowerCase())
                  );
                  if (s.length > 0) {
                    let t;
                    return s.includes(r)
                      ? ((t = s.indexOf(r) + 1) === s.length && (t = 0), s[t])
                      : ((t = e.indexOf(s[0])), e[t]);
                  }
                  return r;
                })(b.values(), e, (e) => e?.node?.textContent ?? "", b.item(r));
                t && u(b.indexOf(t.node));
              });
              R(e.target) && n(e);
            },
            [b, r, v, o, u, m]
          ),
          x = (0, s.useRef)(!1);
        a && (x.current = !0);
        let C = (function (e) {
          let {
            wasSelected: t,
            enabled: n,
            isSelected: r,
            mode: s = "unmount",
          } = e;
          return !n || !!r || ("keepMounted" === s && !!t);
        })({
          wasSelected: x.current,
          enabled: c,
          mode: d,
          isSelected: p.present,
        });
        return {
          ...e,
          ref: (0, f.lq)(i, t),
          children: C ? e.children : null,
          tabIndex: -1,
          role: "menu",
          id: l,
          style: {
            ...e.style,
            transformOrigin: "var(--popper-transform-origin)",
          },
          "aria-orientation": "vertical",
          onKeyDown: (0, h.v)(e.onKeyDown, E),
        };
      }
      function F(e = {}) {
        let { popper: t, isOpen: n } = P();
        return t.getPopperProps({
          ...e,
          style: { visibility: n ? "visible" : "hidden", ...e.style },
        });
      }
      function q(e = {}, t = null) {
        let {
            onMouseEnter: n,
            onMouseMove: r,
            onMouseLeave: u,
            onClick: i,
            onFocus: a,
            isDisabled: o,
            isFocusable: l,
            closeOnSelect: c,
            type: d,
            ...m
          } = e,
          {
            setFocusedIndex: h,
            focusedIndex: b,
            closeOnSelect: v,
            onClose: E,
            menuId: x,
            scrollIntoViewRef: C,
          } = P(),
          y = (0, s.useRef)(null),
          N = `${x}-menuitem-${(0, s.useId)()}`,
          { index: k, register: g } = T({ disabled: o && !l }),
          _ = (0, s.useCallback)(
            (e) => {
              n?.(e), o || ((C.current = !1), h(k));
            },
            [h, k, o, n, C]
          ),
          I = (0, s.useCallback)(
            (e) => {
              var t;
              r?.(e),
                y.current && L((t = y.current)).activeElement !== t && _(e);
            },
            [_, r]
          ),
          D = (0, s.useCallback)(
            (e) => {
              u?.(e), o || h(-1);
            },
            [h, o, u]
          ),
          O = (0, s.useCallback)(
            (e) => {
              i?.(e), R(e.currentTarget) && (c ?? v) && E();
            },
            [E, i, v, c]
          ),
          M = (0, s.useCallback)(
            (e) => {
              a?.(e), h(k);
            },
            [h, a, k]
          ),
          S = k === b,
          j = (function (e = {}) {
            let {
                ref: t,
                isDisabled: n,
                isFocusable: r,
                clickOnEnter: u = !0,
                clickOnSpace: i = !0,
                onMouseDown: a,
                onMouseUp: o,
                onClick: l,
                onKeyDown: c,
                onKeyUp: d,
                tabIndex: m,
                onMouseOver: h,
                onMouseLeave: b,
                ...v
              } = e,
              [E, x] = (0, s.useState)(!0),
              [C, y] = (0, s.useState)(!1),
              N = (function () {
                let e = (0, s.useRef)(new Map()),
                  t = e.current,
                  n = (0, s.useCallback)((t, n, r, s) => {
                    e.current.set(r, { type: n, el: t, options: s }),
                      t.addEventListener(n, r, s);
                  }, []),
                  r = (0, s.useCallback)((t, n, r, s) => {
                    t.removeEventListener(n, r, s), e.current.delete(r);
                  }, []);
                return (
                  (0, s.useEffect)(
                    () => () => {
                      t.forEach((e, t) => {
                        r(e.el, e.type, t, e.options);
                      });
                    },
                    [r, t]
                  ),
                  { add: n, remove: r }
                );
              })(),
              k = E ? m : m || 0,
              g = n && !r,
              _ = (0, s.useCallback)(
                (e) => {
                  if (n) {
                    e.stopPropagation(), e.preventDefault();
                    return;
                  }
                  e.currentTarget.focus(), l?.(e);
                },
                [n, l]
              ),
              I = (0, s.useCallback)(
                (e) => {
                  C &&
                    w(e) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    y(!1),
                    N.remove(document, "keyup", I, !1));
                },
                [C, N]
              ),
              D = (0, s.useCallback)(
                (e) => {
                  if (
                    (c?.(e),
                    n ||
                      e.defaultPrevented ||
                      e.metaKey ||
                      !w(e.nativeEvent) ||
                      E)
                  )
                    return;
                  let t = u && "Enter" === e.key;
                  i && " " === e.key && (e.preventDefault(), y(!0)),
                    t && (e.preventDefault(), e.currentTarget.click()),
                    N.add(document, "keyup", I, !1);
                },
                [n, E, c, u, i, N, I]
              ),
              O = (0, s.useCallback)(
                (e) => {
                  d?.(e),
                    !n &&
                      !e.defaultPrevented &&
                      !e.metaKey &&
                      w(e.nativeEvent) &&
                      !E &&
                      i &&
                      " " === e.key &&
                      (e.preventDefault(), y(!1), e.currentTarget.click());
                },
                [i, E, n, d]
              ),
              M = (0, s.useCallback)(
                (e) => {
                  0 === e.button &&
                    (y(!1), N.remove(document, "mouseup", M, !1));
                },
                [N]
              ),
              T = (0, s.useCallback)(
                (e) => {
                  if (0 === e.button) {
                    if (n) {
                      e.stopPropagation(), e.preventDefault();
                      return;
                    }
                    E || y(!0),
                      e.currentTarget.focus({ preventScroll: !0 }),
                      N.add(document, "mouseup", M, !1),
                      a?.(e);
                  }
                },
                [n, E, a, N, M]
              ),
              S = (0, s.useCallback)(
                (e) => {
                  0 === e.button && (E || y(!1), o?.(e));
                },
                [o, E]
              ),
              P = (0, s.useCallback)(
                (e) => {
                  if (n) {
                    e.preventDefault();
                    return;
                  }
                  h?.(e);
                },
                [n, h]
              ),
              L = (0, s.useCallback)(
                (e) => {
                  C && (e.preventDefault(), y(!1)), b?.(e);
                },
                [C, b]
              ),
              j = (0, f.lq)(t, (e) => {
                e && "BUTTON" !== e.tagName && x(!1);
              });
            return E
              ? {
                  ...v,
                  ref: j,
                  type: "button",
                  "aria-disabled": g ? void 0 : n,
                  disabled: g,
                  onClick: _,
                  onMouseDown: a,
                  onMouseUp: o,
                  onKeyUp: d,
                  onKeyDown: c,
                  onMouseOver: h,
                  onMouseLeave: b,
                }
              : {
                  ...v,
                  ref: j,
                  role: "button",
                  "data-active": (0, p.P)(C),
                  "aria-disabled": n ? "true" : void 0,
                  tabIndex: g ? void 0 : k,
                  onClick: _,
                  onMouseDown: T,
                  onMouseUp: S,
                  onKeyUp: O,
                  onKeyDown: D,
                  onMouseOver: P,
                  onMouseLeave: L,
                };
          })({
            onClick: O,
            onFocus: M,
            onMouseEnter: _,
            onMouseMove: I,
            onMouseLeave: D,
            ref: (0, f.lq)(g, y, t),
            isDisabled: o,
            isFocusable: l,
          });
        return {
          ...m,
          ...j,
          type: d ?? j.type,
          id: N,
          role: "menuitem",
          tabIndex: S ? 0 : -1,
        };
      }
    },
  },
]);
