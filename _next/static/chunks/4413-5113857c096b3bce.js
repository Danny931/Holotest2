"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4413],
  {
    24413: function (e, s, t) {
      var n = t(85893),
        l = t(67294),
        i = t(93967),
        a = t.n(i),
        d = t(86523),
        r = t(8559),
        o = t(58484),
        c = t(7823),
        u = t(95767),
        x = t(76112),
        m = t(49280),
        h = t(51373),
        v = function (e, s, t, n) {
          return new (t || (t = Promise))(function (l, i) {
            function a(e) {
              try {
                r(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function d(e) {
              try {
                r(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              var s;
              e.done
                ? l(e.value)
                : ((s = e.value) instanceof t
                    ? s
                    : new t(function (e) {
                        e(s);
                      })
                  ).then(a, d);
            }
            r((n = n.apply(e, s || [])).next());
          });
        };
      s.Z = (e) => {
        let { show: s, onClose: t, onSelectMemecoin: i } = e,
          p = [r.TB.BASE],
          [g, f] = (0, l.useState)(!1),
          [y, b] = (0, l.useState)(r.TB.BASE),
          [j, N] = (0, l.useState)(""),
          [w, k] = (0, l.useState)(!1),
          [C, S] = (0, l.useState)(""),
          [E, _] = (0, l.useState)(null),
          [A, T] = (0, l.useState)([]),
          [Z, B] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          s || (B(null), S(""), k(!1), _(null));
        }, [s]),
          (0, l.useEffect)(() => {
            f(s);
          }, [s]),
          (0, l.useEffect)(() => {
            y && G();
          }, [y]),
          (0, l.useEffect)(() => {
            s || B(null);
          }, [Z]);
        let I = () =>
            v(void 0, void 0, void 0, function* () {
              var e, s, t, n, l, i, a, d;
              if (w) return;
              S(""), k(!0);
              let r = yield fetch(
                "/api/launchpad/memecoins/search?chain_id="
                  .concat(y.toLowerCase(), "&contract_address=")
                  .concat(j),
                { method: "GET" }
              );
              if (!r.ok) {
                S("No result found!"), k(!1);
                return;
              }
              let o = yield r.json();
              if (!o) {
                S("No result found!"), k(!1);
                return;
              }
              let c = U(o.logoURI);
              _({
                chain: y,
                contractAddress: o.address,
                image: c,
                name: o.name,
                description:
                  null !==
                    (s =
                      null === (e = o.extensions) || void 0 === e
                        ? void 0
                        : e.description) && void 0 !== s
                    ? s
                    : "",
                symbol: o.symbol,
                twitter: (
                  null === (t = o.extensions) || void 0 === t
                    ? void 0
                    : t.twitter
                )
                  ? null === (n = o.extensions) || void 0 === n
                    ? void 0
                    : n.twitter
                  : null,
                website: (
                  null === (l = o.extensions) || void 0 === l
                    ? void 0
                    : l.website
                )
                  ? null === (i = o.extensions) || void 0 === i
                    ? void 0
                    : i.website
                  : null,
                telegram: (
                  null === (a = o.extensions) || void 0 === a
                    ? void 0
                    : a.telegram
                )
                  ? null === (d = o.extensions) || void 0 === d
                    ? void 0
                    : d.telegram
                  : null,
              }),
                k(!1);
            }),
          G = () =>
            v(void 0, void 0, void 0, function* () {
              let e = yield fetch(
                "/api/launchpad/memecoins/trending?chain_id=".concat(
                  y.toLowerCase()
                ),
                { method: "GET" }
              );
              if (!e.ok) {
                S("No result found!"), k(!1);
                return;
              }
              T(yield e.json());
            }),
          L = (e) =>
            v(void 0, void 0, void 0, function* () {
              var s, t, n, l, i, a, d, r;
              if (null != Z) return;
              B(e.address);
              let o = yield fetch(
                "/api/launchpad/memecoins/search?chain_id="
                  .concat(y.toLowerCase(), "&contract_address=")
                  .concat(e.address),
                { method: "GET" }
              );
              if (!o.ok) {
                S("No result found!"), k(!1);
                return;
              }
              let c = yield o.json();
              if (!c) {
                S("No result found!"), k(!1);
                return;
              }
              let u = U(c.logoURI);
              R({
                chain: y,
                contractAddress: c.address,
                image: u,
                name: c.name,
                description:
                  null !==
                    (t =
                      null === (s = c.extensions) || void 0 === s
                        ? void 0
                        : s.description) && void 0 !== t
                    ? t
                    : "",
                symbol: c.symbol,
                twitter: (
                  null === (n = c.extensions) || void 0 === n
                    ? void 0
                    : n.twitter
                )
                  ? null === (l = c.extensions) || void 0 === l
                    ? void 0
                    : l.twitter
                  : null,
                website: (
                  null === (i = c.extensions) || void 0 === i
                    ? void 0
                    : i.website
                )
                  ? null === (a = c.extensions) || void 0 === a
                    ? void 0
                    : a.website
                  : null,
                telegram: (
                  null === (d = c.extensions) || void 0 === d
                    ? void 0
                    : d.telegram
                )
                  ? null === (r = c.extensions) || void 0 === r
                    ? void 0
                    : r.telegram
                  : null,
              });
            }),
          U = (e) =>
            e && (e.startsWith("http://") || e.startsWith("https://"))
              ? e.includes("coingecko") && e.includes("small")
                ? e.replace("small", "large")
                : e
              : h.hX,
          O = () =>
            v(void 0, void 0, void 0, function* () {
              null == Z && (B(E.contractAddress), R(E));
            }),
          R = (e) =>
            v(void 0, void 0, void 0, function* () {
              var s;
              let t = yield fetch(
                "/api/launchpad/memecoins/metadata?chain_id="
                  .concat(e.chain.toLowerCase(), "&contract_address=")
                  .concat(e.contractAddress),
                { method: "GET" }
              );
              if (!t.ok) {
                i(e);
                return;
              }
              let n = yield t.json();
              if (!n) {
                i(e);
                return;
              }
              i(
                Object.assign(Object.assign({}, e), {
                  image: n.image.large,
                  description:
                    null === (s = n.description.en) || void 0 === s
                      ? void 0
                      : s.slice(0, 100),
                })
              );
            });
        return (0, n.jsx)(o.Z, {
          show: s,
          onClose: t,
          width: "lg",
          disableOutsideClick: !1,
          children:
            s &&
            (0, n.jsxs)("div", {
              className: a()(
                "rounded-2xl bg-black transition duration-300",
                g ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, n.jsx)("button", {
                  className: a()(
                    "absolute right-5 top-5 h-[40px] w-[40px] rounded-full p-0 text-white transition duration-300 hover:bg-black/50",
                    g ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: t,
                  children: (0, n.jsx)(d.T, {}),
                }),
                (0, n.jsxs)("div", {
                  className: "px-9 pb-12 pt-16 text-white",
                  children: [
                    (0, n.jsx)("div", {
                      className: a()(
                        "transition duration-300",
                        g
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      children: (0, n.jsx)("h4", {
                        className: "mb-4 mt-2",
                        children: (0, n.jsx)("span", {
                          className: "body-text-lg",
                          children: "Search Memecoin",
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, n.jsx)("div", {
                              className: "w-full",
                              children: (0, n.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: p.map((e) =>
                                  (0, n.jsxs)(
                                    "button",
                                    {
                                      onClick: () => {
                                        w || b(e);
                                      },
                                      className: a()(
                                        "subheading-sm-sm flex items-center gap-2 rounded-full border border-whiteAlpha-300 px-3 py-1",
                                        e === y
                                          ? "bg-secondary-200 text-gray-900"
                                          : "text-secondary-200 hover:bg-white/[0.08]"
                                      ),
                                      children: [
                                        (0, n.jsx)(u.Z, {
                                          chainId: m.a_.BASE,
                                          className: "h-4 w-4",
                                        }),
                                        (0, n.jsx)(x.Z, { chainId: m.a_.BASE }),
                                      ],
                                    },
                                    e
                                  )
                                ),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "w-full",
                              children: (0, n.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, n.jsx)("label", {
                                    className:
                                      "subheading-lg-xs text-secondary-200",
                                    children: "Contract Address",
                                  }),
                                  (0, n.jsx)("input", {
                                    type: "text",
                                    placeholder: "0x...",
                                    value: j,
                                    onChange: (e) => N(e.target.value),
                                    className: a()(
                                      "body-text-default mt-2 w-full rounded-lg border border-bordergray bg-black/20 px-4 py-2.5 text-white"
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "w-full",
                              children: (0, n.jsxs)("button", {
                                onClick: () => I(),
                                className:
                                  "subheading-lg-xss flex w-full items-center justify-center space-x-2 rounded-full bg-primary-default px-4 py-3.5 uppercase text-secondary-800 hover:bg-opacity-90",
                                children: [
                                  (0, n.jsx)("span", { children: "search" }),
                                  w &&
                                    (0, n.jsx)(c.Z, { className: "h-4 w-4" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        C &&
                          (0, n.jsx)("p", {
                            className: "body-text-sm mt-2 text-error",
                            children: C,
                          }),
                        E &&
                          (0, n.jsxs)("div", {
                            className:
                              "my-4 flex w-full items-center justify-between gap-x-2 rounded-lg border border-bordergray px-2 py-3",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "flex gap-x-4",
                                children: [
                                  (0, n.jsx)("img", {
                                    alt: E.name,
                                    src: E.image,
                                    className:
                                      "size-12 flex-none rounded-full bg-gray-800",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "min-w-0",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className: "text-sm",
                                        children: E.name,
                                      }),
                                      (0, n.jsxs)("p", {
                                        className:
                                          "mt-1 truncate text-xs text-primary-default",
                                        children: ["$", E.symbol],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: "",
                                children: (0, n.jsxs)("button", {
                                  className:
                                    "subheading-lg-xss flex items-center space-x-1 rounded-full bg-gray-100 px-4 py-2 text-secondary-800 ring-1 ring-gray-800 transition delay-75 duration-300 hover:bg-white hover:ring-2",
                                  onClick: () => O(),
                                  children: [
                                    (0, n.jsx)("span", { children: "Select" }),
                                    Z === E.contractAddress &&
                                      (0, n.jsx)(c.Z, { className: "h-3 w-3" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        (0, n.jsxs)("div", {
                          className: "mt-8",
                          children: [
                            (0, n.jsxs)("label", {
                              className: "subheading-lg-xs text-secondary-200",
                              children: [
                                "Trending tokens on ",
                                null == y ? void 0 : y.toUpperCase(),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "hide-scrollbar mt-1 h-48 overflow-y-scroll",
                              children: (0, n.jsx)("ul", {
                                className: "divide-y divide-gray-700",
                                children: A.map((e) => {
                                  let s = U(e.logoURI);
                                  return (0, n.jsxs)(
                                    "li",
                                    {
                                      className:
                                        "group flex items-center justify-between gap-x-2 px-2 py-3",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className: "flex gap-x-4",
                                          children: [
                                            (0, n.jsx)("img", {
                                              alt: e.name,
                                              src: s,
                                              className:
                                                "size-12 flex-none rounded-full bg-gray-800",
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "min-w-0",
                                              children: [
                                                (0, n.jsx)("p", {
                                                  className: "text-sm",
                                                  children: e.name,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className:
                                                    "mt-1 truncate text-xs text-primary-default",
                                                  children: ["$", e.symbol],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "",
                                          children: (0, n.jsxs)("button", {
                                            className:
                                              "subheading-lg-xss flex items-center space-x-1 rounded-full bg-gray-100 px-4 py-2 text-secondary-800 ring-1 ring-gray-800 transition delay-75 duration-300 hover:bg-white hover:ring-2",
                                            onClick: () => L(e),
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: "Select",
                                              }),
                                              Z === e.address &&
                                                (0, n.jsx)(c.Z, {
                                                  className: "h-3 w-3",
                                                }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    e.address
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        });
      };
    },
  },
]);
