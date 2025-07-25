/*!
* ScrollTrigger 3.10.4
* https://greensock.com
*
* @license Copyright 2022, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function q() {
        return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we
    }
    function y(e, t) {
        return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t]
    }
    function z(e) {
        return !!~t.indexOf(e)
    }
    function A(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }
    function B(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function E() {
        return De && De.isPressed || T.cache++
    }
    function F(r, n) {
        function Uc(e) {
            if (e || 0 === e) {
                i && (Me.history.scrollRestoration = "manual");
                var t = De && De.isPressed;
                e = Uc.v = Math.round(e) || (De && De.iOS ? 1 : 0),
                r(e),
                Uc.cacheID = T.cache,
                t && o("ss", e)
            } else
                (n || T.cache !== Uc.cacheID || o("ref")) && (Uc.cacheID = T.cache,
                Uc.v = r());
            return Uc.v + Uc.offset
        }
        return Uc.offset = 0,
        r && Uc
    }
    function I(e) {
        return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }
    function J(t, e) {
        var r = e.s
          , n = e.sc
          , i = T.indexOf(t)
          , o = n === Ne.sc ? 1 : 2;
        return ~i || (i = T.push(t) - 1),
        T[i + o] || (T[i + o] = F(y(t, r), !0) || (z(t) ? n : F(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })))
    }
    function K(e, t, i) {
        function od(e, t) {
            var r = He();
            t || n < r - s ? (a = o,
            o = e,
            l = s,
            s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e
          , a = e
          , s = He()
          , l = s
          , n = t || 50
          , c = Math.max(500, 3 * n);
        return {
            update: od,
            reset: function reset() {
                a = o = i ? 0 : o,
                l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l
                  , r = a
                  , n = He();
                return !e && 0 !== e || e === o || od(e),
                s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }
    function L(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }
    function M(e) {
        var t = Math.max.apply(Math, e)
          , r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }
    function N() {
        (Be = we.core.globals().ScrollTrigger) && Be.core && function _integrate() {
            var e = Be.core
              , r = e.bridge || {}
              , t = e._scrollers
              , n = e._proxies;
            t.push.apply(t, T),
            n.push.apply(n, Le),
            T = t,
            Le = n,
            o = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }
    function O(e) {
        return (we = e || q()) && "undefined" != typeof document && document.body && (Me = window,
        Ce = (Ae = document).documentElement,
        Oe = Ae.body,
        t = [Me, Ae, Ce, Oe],
        we.utils.clamp,
        Ie = "onpointerenter"in Oe ? "pointer" : "mouse",
        Ee = k.isTouch = Me.matchMedia && Me.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Me || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        ze = k.eventTypes = ("ontouchstart"in Ce ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ce ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return i = 0
        }, 500),
        N(),
        ke = 1),
        ke
    }
    var we, ke, Me, Ae, Ce, Oe, Ee, Ie, Be, t, De, ze, i = 1, Fe = [], T = [], Le = [], He = Date.now, o = function _bridge(e, t) {
        return t
    }, r = "scrollLeft", n = "scrollTop", Re = {
        s: r,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: F(function(e) {
            return arguments.length ? Me.scrollTo(e, Ne.sc()) : Me.pageXOffset || Ae[r] || Ce[r] || Oe[r] || 0
        })
    }, Ne = {
        s: n,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Re,
        sc: F(function(e) {
            return arguments.length ? Me.scrollTo(Re.sc(), e) : Me.pageYOffset || Ae[n] || Ce[n] || Oe[n] || 0
        })
    };
    Re.op = Ne,
    T.cache = 0;
    var k = (Observer.prototype.init = function init(e) {
        ke || O(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Be || N();
        var i = e.tolerance
          , a = e.dragMinimum
          , t = e.type
          , n = e.target
          , r = e.lineHeight
          , o = e.debounce
          , s = e.preventDefault
          , l = e.onStop
          , c = e.onStopDelay
          , u = e.ignore
          , f = e.wheelSpeed
          , d = e.event
          , p = e.onDragStart
          , g = e.onDragEnd
          , h = e.onDrag
          , v = e.onPress
          , b = e.onRelease
          , m = e.onRight
          , y = e.onLeft
          , x = e.onUp
          , w = e.onDown
          , S = e.onChangeX
          , _ = e.onChangeY
          , T = e.onChange
          , k = e.onToggleX
          , C = e.onToggleY
          , P = e.onHover
          , D = e.onHoverEnd
          , Y = e.onMove
          , X = e.ignoreCheck
          , F = e.isNormalizer
          , H = e.onGestureStart
          , R = e.onGestureEnd
          , U = e.onWheel
          , V = e.onEnable
          , W = e.onDisable
          , j = e.onClick
          , Q = e.scrollSpeed
          , q = e.capture
          , G = e.allowClicks
          , Z = e.lockAxis
          , $ = e.onLockAxis;
        function Pe() {
            return ye = He()
        }
        function Qe(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || X && X(e, t)
        }
        function Se() {
            var e = se.deltaX = M(be)
              , t = se.deltaY = M(me)
              , r = Math.abs(e) >= i
              , n = Math.abs(t) >= i;
            T && (r || n) && T(se, e, t, be, me),
            r && (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            S && S(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            le = se.deltaX,
            be[0] = be[1] = be[2] = 0),
            n && (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            _ && _(se),
            C && se.deltaY < 0 != ce < 0 && C(se),
            ce = se.deltaY,
            me[0] = me[1] = me[2] = 0),
            (ne || re) && (Y && Y(se),
            $ && oe && $(se),
            re && (h(se),
            re = !1),
            ne = oe = !1),
            ie && (U(se),
            ie = !1),
            ee = 0
        }
        function Te(e, t, r) {
            be[r] += e,
            me[r] += t,
            se._vx.update(e),
            se._vy.update(t),
            o ? ee = ee || requestAnimationFrame(Se) : Se()
        }
        function Ue(e, t) {
            "y" !== ae && (be[2] += e,
            se._vx.update(e, !0)),
            "x" !== ae && (me[2] += t,
            se._vy.update(t, !0)),
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y",
            oe = !0),
            o ? ee = ee || requestAnimationFrame(Se) : Se()
        }
        function Ve(e) {
            if (!Qe(e, 1)) {
                var t = (e = L(e, s)).clientX
                  , r = e.clientY
                  , n = t - se.x
                  , i = r - se.y
                  , o = se.isDragging;
                se.x = t,
                se.y = r,
                (o || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0),
                o || (se.isDragging = !0),
                Ue(n, i),
                o || p && p(se))
            }
        }
        function Xe(t) {
            if (!Qe(t, 1)) {
                B(F ? n : ve, ze[1], Ve, !0);
                var e = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY))
                  , r = L(t);
                e || (se._vx.reset(),
                se._vy.reset(),
                s && G && we.delayedCall(.08, function() {
                    if (300 < He() - ye && !t.defaultPrevented)
                        if (t.target.click)
                            t.target.click();
                        else if (ve.createEvent) {
                            var e = ve.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Me, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                            t.target.dispatchEvent(e)
                        }
                })),
                se.isDragging = se.isGesturing = se.isPressed = !1,
                l && !F && te.restart(!0),
                g && e && g(se),
                b && b(se, e)
            }
        }
        function Ye(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
        }
        function Ze() {
            return (se.isGesturing = !1) || R(se)
        }
        function $e(e) {
            if (!Qe(e)) {
                var t = ue()
                  , r = fe();
                Te((t - de) * Q, (r - pe) * Q, 1),
                de = t,
                pe = r,
                l && te.restart(!0)
            }
        }
        function _e(e) {
            if (!Qe(e)) {
                e = L(e, s),
                U && (ie = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Me.innerHeight : 1) * f;
                Te(e.deltaX * t, e.deltaY * t, 0),
                l && !F && te.restart(!0)
            }
        }
        function af(e) {
            if (!Qe(e)) {
                var t = e.clientX
                  , r = e.clientY
                  , n = t - se.x
                  , i = r - se.y;
                se.x = t,
                se.y = r,
                ne = !0,
                (n || i) && Ue(n, i)
            }
        }
        function bf(e) {
            se.event = e,
            P(se)
        }
        function cf(e) {
            se.event = e,
            D(se)
        }
        function df(e) {
            return Qe(e) || L(e, s) && j(se)
        }
        this.target = n = I(n) || Ce,
        this.vars = e,
        u = u && we.utils.toArray(u),
        i = i || 0,
        a = a || 0,
        f = f || 1,
        Q = Q || 1,
        t = t || "wheel,touch,pointer",
        o = !1 !== o,
        r = r || parseFloat(Me.getComputedStyle(Oe).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this, le = 0, ce = 0, ue = J(n, Re), fe = J(n, Ne), de = ue(), pe = fe(), ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === ze[0], he = z(n), ve = n.ownerDocument || Ae, be = [0, 0, 0], me = [0, 0, 0], ye = 0, xe = se.onPress = function(e) {
            Qe(e, 1) || (se.axis = ae = null,
            te.pause(),
            se.isPressed = !0,
            e = L(e),
            le = ce = 0,
            se.startX = se.x = e.clientX,
            se.startY = se.y = e.clientY,
            se._vx.reset(),
            se._vy.reset(),
            A(F ? n : ve, ze[1], Ve, s, !0),
            se.deltaX = se.deltaY = 0,
            v && v(se))
        }
        ;
        te = se._dc = we.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(),
            se._vy.reset(),
            te.pause(),
            l && l(se)
        }).pause(),
        se.deltaX = se.deltaY = 0,
        se._vx = K(0, 50, !0),
        se._vy = K(0, 50, !0),
        se.scrollX = ue,
        se.scrollY = fe,
        se.isDragging = se.isGesturing = se.isPressed = !1,
        se.enable = function(e) {
            return se.isEnabled || (A(he ? ve : n, "scroll", E),
            0 <= t.indexOf("scroll") && A(he ? ve : n, "scroll", $e, s, q),
            0 <= t.indexOf("wheel") && A(n, "wheel", _e, s, q),
            (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (A(n, ze[0], xe, s, q),
            A(ve, ze[2], Xe),
            A(ve, ze[3], Xe),
            G && A(n, "click", Pe, !1, !0),
            j && A(n, "click", df),
            H && A(ve, "gesturestart", Ye),
            R && A(ve, "gestureend", Ze),
            P && A(n, Ie + "enter", bf),
            D && A(n, Ie + "leave", cf),
            Y && A(n, Ie + "move", af)),
            se.isEnabled = !0,
            e && e.type && xe(e),
            V && V(se)),
            se
        }
        ,
        se.disable = function() {
            se.isEnabled && (Fe.filter(function(e) {
                return e !== se && z(e.target)
            }).length || B(he ? ve : n, "scroll", E),
            se.isPressed && (se._vx.reset(),
            se._vy.reset(),
            B(F ? n : ve, ze[1], Ve, !0)),
            B(he ? ve : n, "scroll", $e, q),
            B(n, "wheel", _e, q),
            B(n, ze[0], xe, q),
            B(ve, ze[2], Xe),
            B(ve, ze[3], Xe),
            B(n, "click", Pe, !0),
            B(n, "click", df),
            B(ve, "gesturestart", Ye),
            B(ve, "gestureend", Ze),
            B(n, Ie + "enter", bf),
            B(n, Ie + "leave", cf),
            B(n, Ie + "move", af),
            se.isEnabled = se.isPressed = se.isDragging = !1,
            W && W(se))
        }
        ,
        se.kill = function() {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1),
            De === se && (De = 0)
        }
        ,
        Fe.push(se),
        F && z(n) && (De = se),
        se.enable(d)
    }
    ,
    function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t),
        r && _defineProperties(e, r),
        e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]),
    Observer);
    function Observer(e) {
        this.init(e)
    }
    k.version = "3.10.4",
    k.create = function(e) {
        return new k(e)
    }
    ,
    k.register = O,
    k.getAll = function() {
        return Fe.slice()
    }
    ,
    k.getById = function(t) {
        return Fe.filter(function(e) {
            return e.vars.id === t
        })[0]
    }
    ,
    q() && we.registerPlugin(k);
    function va() {
        return nt = 1
    }
    function wa() {
        return nt = 0
    }
    function xa(e) {
        return e
    }
    function ya(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function za() {
        return "undefined" != typeof window
    }
    function Aa() {
        return We || za() && (We = window.gsap) && We.registerPlugin && We
    }
    function Ba(e) {
        return !!~s.indexOf(e)
    }
    function Ca(e) {
        return y(e, "getBoundingClientRect") || (Ba(e) ? function() {
            return Bt.width = je.innerWidth,
            Bt.height = je.innerHeight,
            Bt
        }
        : function() {
            return Mt(e)
        }
        )
    }
    function Fa(e, t) {
        var r = t.s
          , n = t.d2
          , i = t.d
          , o = t.a;
        return (r = "scroll" + n) && (o = y(e, r)) ? o() - Ca(e)()[i] : Ba(e) ? (qe[r] || Ge[r]) - (je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n]
    }
    function Ga(e, t) {
        for (var r = 0; r < p.length; r += 3)
            t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
    }
    function Ha(e) {
        return "string" == typeof e
    }
    function Ia(e) {
        return "function" == typeof e
    }
    function Ja(e) {
        return "number" == typeof e
    }
    function Ka(e) {
        return "object" == typeof e
    }
    function La(e) {
        return Ia(e) && e()
    }
    function Ma(r, n) {
        return function() {
            var e = La(r)
              , t = La(n);
            return function() {
                La(e),
                La(t)
            }
        }
    }
    function Na(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }
    function Oa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }
    function db(e) {
        return je.getComputedStyle(e)
    }
    function fb(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }
    function hb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }
    function ib(e) {
        var t, r = [], n = e.labels, i = e.duration();
        for (t in n)
            r.push(n[t] / i);
        return r
    }
    function kb(i) {
        var o = We.utils.snap(i)
          , a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
            return e - t
        });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001),
            !t)
                return o(e);
            if (0 < t) {
                for (e -= r,
                n = 0; n < a.length; n++)
                    if (a[n] >= e)
                        return a[n];
                return a[n - 1]
            }
            for (n = a.length,
            e += r; n--; )
                if (a[n] <= e)
                    return a[n];
            return a[0]
        }
        : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }
    function mb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }
    function nb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }
    function ob(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function pb(e, t, r) {
        return r && r.wheelHandler && e(t, "wheel", r)
    }
    function tb(e, t) {
        if (Ha(e)) {
            var r = e.indexOf("=")
              , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100),
            e = e.substr(0, r - 1)),
            e = n + (e in Y ? Y[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }
    function ub(e, t, r, n, i, o, a, s) {
        var l = i.startColor
          , c = i.endColor
          , u = i.fontSize
          , f = i.indent
          , d = i.fontWeight
          , p = Je.createElement("div")
          , g = Ba(r) || "fixed" === y(r, "pinType")
          , h = -1 !== e.indexOf("scroller")
          , v = g ? Ge : r
          , b = -1 !== e.indexOf("start")
          , m = b ? l : c
          , x = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"),
        !h && !s && g || (x += (n === Ne ? _ : P) + ":" + (o + parseFloat(f)) + "px;"),
        a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        p._isStart = b,
        p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        p.style.cssText = x,
        p.innerText = t || 0 === t ? e + "-" + t : e,
        v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
        p._offset = p["offset" + n.op.d2],
        X(p, 0, n, b),
        p
    }
    function zb() {
        return 34 < dt() - pt && ee()
    }
    function Ab() {
        h && h.isPressed && !(h.startX > Ge.clientWidth) || (T.cache++,
        x = x || requestAnimationFrame(ee),
        pt || V("scrollStart"),
        pt = dt())
    }
    function Bb() {
        m = je.innerWidth,
        b = je.innerHeight
    }
    function Cb() {
        T.cache++,
        rt || g || Je.fullscreenElement || Je.webkitFullscreenElement || v && m === je.innerWidth && !(Math.abs(je.innerHeight - b) > .25 * je.innerHeight) || l.restart(!0)
    }
    function Ib(e) {
        var t, r = We.ticker.frame, n = [], i = 0;
        if (w !== r || ft) {
            for (Q(); i < U.length; i += 4)
                (t = je.matchMedia(U[i]).matches) !== U[i + 3] && ((U[i + 3] = t) ? n.push(i) : Q(1, U[i]) || Ia(U[i + 2]) && U[i + 2]());
            for (j(),
            i = 0; i < n.length; i++)
                t = n[i],
                lt = U[t],
                U[t + 2] = U[t + 1](e);
            lt = 0,
            a && Z(0, 1),
            w = r,
            V("matchMedia")
        }
    }
    function Jb() {
        return ob(oe, "scrollEnd", Jb) || Z(!0)
    }
    function Ob() {
        return T.cache++ && T.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }
    function Zb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = te.length, a = t.style, s = e.style; o--; )
                a[i = te[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            s[P] = s[_] = a.flexBasis = "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[vt] = hb(e, Re) + kt,
            a[bt] = hb(e, Ne) + kt,
            a[St] = s[_t] = s.top = s.left = "0",
            It(n),
            s[vt] = s.maxWidth = r[vt],
            s[bt] = s.maxHeight = r[bt],
            s[St] = r[St],
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)
        }
    }
    function ac(e) {
        for (var t = re.length, r = e.style, n = [], i = 0; i < t; i++)
            n.push(re[i], r[re[i]]);
        return n.t = e,
        n
    }
    function dc(e, t, r, n, i, o, a, s, l, c, u, f, d) {
        Ia(e) && (e = e(s)),
        Ha(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? tb("0" + e.substr(3), r) : 0));
        var p, g, h, v = d ? d.time() : 0;
        if (d && d.seek(0),
        Ja(e))
            a && X(a, r, n, !0);
        else {
            Ia(t) && (t = t(s));
            var b, m, y, x, w = e.split(" ");
            h = I(t) || Ge,
            (b = Mt(h) || {}) && (b.left || b.top) || "none" !== db(h).display || (x = h.style.display,
            h.style.display = "block",
            b = Mt(h),
            x ? h.style.display = x : h.style.removeProperty("display")),
            m = tb(w[0], b[n.d]),
            y = tb(w[1] || "0", r),
            e = b[n.p] - l[n.p] - c + m + i - y,
            a && X(a, y, n, r - y < 20 || a._isStart && 20 < y),
            r -= r - y
        }
        if (o) {
            var S = e + r
              , _ = o._isStart;
            p = "scroll" + n.d2,
            X(o, S, n, _ && 20 < S || !_ && (u ? Math.max(Ge[p], qe[p]) : o.parentNode[p]) <= S + 1),
            u && (l = Mt(a),
            u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + kt))
        }
        return d && h && (p = Mt(h),
        d.seek(f),
        g = Mt(h),
        d._caScrollDist = p[n.p] - g[n.p],
        e = e / d._caScrollDist * f),
        d && d.seek(v),
        d ? e : Math.round(e)
    }
    function fc(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === Ge) {
                for (i in e._stOrig = a.cssText,
                o = db(e))
                    +i || ie.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r,
                a.left = n
            } else
                a.cssText = e._stOrig;
            We.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }
    function gc(l, e) {
        function Qj(e, t, r, n, i) {
            var o = Qj.tween
              , a = t.onComplete
              , s = {};
            return r = r || f(),
            i = n && i || 0,
            n = n || e - r,
            o && o.kill(),
            c = Math.round(r),
            t[d] = e,
            (t.modifiers = s)[d] = function(e) {
                return (e = ya(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(),
                Qj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio,
                u = c,
                c = ya(e)
            }
            ,
            t.onComplete = function() {
                Qj.tween = 0,
                a && a.call(o)
            }
            ,
            o = Qj.tween = We.to(l, t)
        }
        var c, u, f = J(l, e), d = "_scroll" + e.p2;
        return (l[d] = f).wheelHandler = function() {
            return Qj.tween && Qj.tween.kill() && (Qj.tween = 0)
        }
        ,
        nb(l, "wheel", f.wheelHandler),
        Qj
    }
    var We, a, je, Je, qe, Ge, s, l, Ke, et, tt, c, rt, nt, u, it, f, d, p, ot, at, g, h, v, b, m, C, st, x, lt, w, ct, ut, ft = 1, dt = Date.now, S = dt(), pt = 0, gt = 0, ht = Math.abs, _ = "right", P = "bottom", vt = "width", bt = "height", mt = "Right", yt = "Left", xt = "Top", wt = "Bottom", St = "padding", _t = "margin", Tt = "Width", D = "Height", kt = "px", Mt = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== db(e)[u] && We.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , n = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
        n
    }, At = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Ct = {
        toggleActions: "play",
        anticipatePin: 0
    }, Y = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, X = function _positionMarker(e, t, r, n) {
        var i = {
            display: "block"
        }
          , o = r[n ? "os2" : "p2"]
          , a = r[n ? "p2" : "os2"];
        e._isFlipped = n,
        i[r.a + "Percent"] = n ? -100 : 0,
        i[r.a] = n ? "1px" : 0,
        i["border" + o + Tt] = 1,
        i["border" + a + Tt] = 0,
        i[r.p] = t + "px",
        We.set(e, i)
    }, Ot = [], Pt = {}, H = {}, R = [], U = [], V = function _dispatch(e) {
        return H[e] && H[e].map(function(e) {
            return e()
        }) || R
    }, W = [], j = function _revertRecorded(e) {
        for (var t = 0; t < W.length; t += 5)
            e && W[t + 4] !== e || (W[t].style.cssText = W[t + 1],
            W[t].getBBox && W[t].setAttribute("transform", W[t + 2] || ""),
            W[t + 3].uncache = 1)
    }, Q = function _revertAll(e, t) {
        var r;
        for (it = 0; it < Ot.length; it++)
            r = Ot[it],
            t && r.media !== t || (e ? r.kill(1) : r.revert());
        t && j(t),
        t || V("revert")
    }, G = 0, Z = function _refreshAll(e, t) {
        if (!pt || e) {
            ct = !0;
            var r = V("refreshInit");
            ot && oe.sort(),
            t || Q(),
            Ot.slice(0).forEach(function(e) {
                return e.refresh()
            }),
            Ot.forEach(function(e) {
                return "max" === e.vars.end && e.setPositions(e.start, Fa(e.scroller, e._dir))
            }),
            r.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            Ob(),
            l.pause(),
            G++,
            ct = !1,
            V("refresh")
        } else
            nb(oe, "scrollEnd", Jb)
    }, $ = 0, Et = 1, ee = function _updateAll() {
        if (!ct) {
            oe.isUpdating = !0,
            ut && ut.update(0);
            var e = Ot.length
              , t = dt()
              , r = 50 <= t - S
              , n = e && Ot[0].scroll();
            if (Et = n < $ ? -1 : 1,
            $ = n,
            r && (pt && !nt && 200 < t - pt && (pt = 0,
            V("scrollEnd")),
            tt = S,
            S = t),
            Et < 0) {
                for (it = e; 0 < it--; )
                    Ot[it] && Ot[it].update(0, r);
                Et = 1
            } else
                for (it = 0; it < e; it++)
                    Ot[it] && Ot[it].update(0, r);
            oe.isUpdating = !1
        }
        x = 0
    }, te = ["left", "top", P, _, _t + wt, _t + mt, _t + xt, _t + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], re = te.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", _t, St, St + xt, St + mt, St + wt, St + yt]), ne = /([A-Z])/g, It = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, i = e.length, o = 0;
            for ((e.t._gsap || We.core.getCache(e.t)).uncache = 1; o < i; o += 2)
                r = e[o + 1],
                t = e[o],
                r ? n[t] = r : n[t] && n.removeProperty(t.replace(ne, "-$1").toLowerCase())
        }
    }, Bt = {
        left: 0,
        top: 0
    }, ie = /(webkit|moz|length|cssText|inset)/i, oe = (ScrollTrigger.prototype.init = function init(_, T) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        gt) {
            var k, n, p, M, A, C, O, P, E, B, D, e, z, Y, X, F, L, t, H, b, R, N, m, U, x, w, r, S, V, W, i, g, j, Q, q, G, K, o, Z = (_ = fb(Ha(_) || Ja(_) || _.nodeType ? {
                trigger: _
            } : _, Ct)).onUpdate, $ = _.toggleClass, a = _.id, ee = _.onToggle, te = _.onRefresh, re = _.scrub, ne = _.trigger, ie = _.pin, oe = _.pinSpacing, ae = _.invalidateOnRefresh, se = _.anticipatePin, s = _.onScrubComplete, h = _.onSnapComplete, le = _.once, ce = _.snap, ue = _.pinReparent, l = _.pinSpacer, fe = _.containerAnimation, de = _.fastScrollEnd, pe = _.preventOverlaps, ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Re : Ne, he = !re && 0 !== re, ve = I(_.scroller || je), c = We.core.getCache(ve), be = Ba(ve), me = "fixed" === ("pinType"in _ ? _.pinType : y(ve, "pinType") || be && "fixed"), ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack], xe = he && _.toggleActions.split(" "), u = "markers"in _ ? _.markers : Ct.markers, we = be ? 0 : parseFloat(db(ve)["border" + ge.p2 + Tt]) || 0, Se = this, _e = _.onRefreshInit && function() {
                return _.onRefreshInit(Se)
            }
            , Te = function _getSizeFunc(e, t, r) {
                var n = r.d
                  , i = r.d2
                  , o = r.a;
                return (o = y(e, "getBoundingClientRect")) ? function() {
                    return o()[n]
                }
                : function() {
                    return (t ? je["inner" + i] : e["client" + i]) || 0
                }
            }(ve, be, ge), ke = function _getOffsetsFunc(e, t) {
                return !t || ~Le.indexOf(e) ? Ca(e) : function() {
                    return Bt
                }
            }(ve, be), Me = 0, Ae = 0, Ce = J(ve, ge);
            if (Se.media = lt,
            Se._dir = ge,
            se *= 45,
            Se.scroller = ve,
            Se.scroll = fe ? fe.time.bind(fe) : Ce,
            M = Ce(),
            Se.vars = _,
            T = T || _.animation,
            "refreshPriority"in _ && (ot = 1,
            -9999 === _.refreshPriority && (ut = Se)),
            c.tweenScroll = c.tweenScroll || {
                top: gc(ve, Ne),
                left: gc(ve, Re)
            },
            Se.tweenTo = k = c.tweenScroll[ge.p],
            Se.scrubDuration = function(e) {
                (i = Ja(e) && e) ? W ? W.duration(e) : W = We.to(T, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: i,
                    paused: !0,
                    onComplete: function onComplete() {
                        return s && s(Se)
                    }
                }) : (W && W.progress(1).kill(),
                W = 0)
            }
            ,
            T && (T.vars.lazy = !1,
            T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0),
            Se.animation = T.pause(),
            (T.scrollTrigger = Se).scrubDuration(re),
            S = 0,
            a = a || T.vars.id),
            Ot.push(Se),
            ce && (Ka(ce) && !ce.push || (ce = {
                snapTo: ce
            }),
            "scrollBehavior"in Ge.style && We.set(be ? [Ge, qe] : ve, {
                scrollBehavior: "auto"
            }),
            p = Ia(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return We.utils.snap(ib(t), e)
                }
            }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
                return function(e, t) {
                    return kb(ib(r))(e, t.direction)
                }
            }(T) : !1 !== ce.directional ? function(e, t) {
                return kb(ce.snapTo)(e, dt() - Ae < 500 ? 0 : t.direction)
            }
            : We.utils.snap(ce.snapTo),
            g = ce.duration || {
                min: .1,
                max: 2
            },
            g = Ka(g) ? et(g.min, g.max) : et(g, g),
            j = We.delayedCall(ce.delay || i / 2 || .1, function() {
                var e = Ce()
                  , t = dt() - Ae < 500
                  , r = k.tween;
                if (!(t || Math.abs(Se.getVelocity()) < 10) || r || nt || Me === e)
                    Se.isActive && Me !== e && j.restart(!0);
                else {
                    var n = (e - C) / z
                      , i = T && !he ? T.totalProgress() : n
                      , o = t ? 0 : (i - V) / (dt() - tt) * 1e3 || 0
                      , a = We.utils.clamp(-n, 1 - n, ht(o / 2) * o / .185)
                      , s = n + (!1 === ce.inertia ? 0 : a)
                      , l = et(0, 1, p(s, Se))
                      , c = Math.round(C + l * z)
                      , u = ce.onStart
                      , f = ce.onInterrupt
                      , d = ce.onComplete;
                    if (e <= O && C <= e && c !== e) {
                        if (r && !r._initted && r.data <= ht(c - e))
                            return;
                        !1 === ce.inertia && (a = l - n),
                        k(c, {
                            duration: g(ht(.185 * Math.max(ht(s - i), ht(l - i)) / o / .05 || 0)),
                            ease: ce.ease || "power3",
                            data: ht(c - e),
                            onInterrupt: function onInterrupt() {
                                return j.restart(!0) && f && f(Se)
                            },
                            onComplete: function onComplete() {
                                Se.update(),
                                Me = Ce(),
                                S = V = T && !he ? T.totalProgress() : Se.progress,
                                h && h(Se),
                                d && d(Se)
                            }
                        }, e, a * z, c - e - a * z),
                        u && u(Se, k.tween)
                    }
                }
            }).pause()),
            a && (Pt[a] = Se),
            o = (o = (ne = Se.trigger = I(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se),
            ie = !0 === ie ? ne : I(ie),
            Ha($) && ($ = {
                targets: ne,
                className: $
            }),
            ie && (!1 === oe || oe === _t || (oe = !(!oe && "flex" === db(ie.parentNode).display) && St),
            Se.pin = ie,
            !1 !== _.force3D && We.set(ie, {
                force3D: !0
            }),
            (n = We.core.getCache(ie)).spacer ? Y = n.pinState : (l && ((l = I(l)) && !l.nodeType && (l = l.current || l.nativeElement),
            n.spacerIsNative = !!l,
            l && (n.spacerState = ac(l))),
            n.spacer = L = l || Je.createElement("div"),
            L.classList.add("prt-spacer"),
            a && L.classList.add("prt-spacer-" + a),
            n.pinState = Y = ac(ie)),
            Se.spacer = L = n.spacer,
            r = db(ie),
            m = r[oe + ge.os2],
            H = We.getProperty(ie),
            b = We.quickSetter(ie, ge.a, kt),
            Zb(ie, L, r),
            F = ac(ie)),
            u) {
                e = Ka(u) ? fb(u, At) : At,
                B = ub("scroller-start", a, ve, ge, e, 0),
                D = ub("scroller-end", a, ve, ge, e, 0, B),
                t = B["offset" + ge.op.d2];
                var f = I(y(ve, "content") || ve);
                P = this.markerStart = ub("start", a, f, ge, e, t, 0, fe),
                E = this.markerEnd = ub("end", a, f, ge, e, t, 0, fe),
                fe && (K = We.quickSetter([P, E], ge.a, kt)),
                me || Le.length && !0 === y(ve, "fixedMarkers") || (function _makePositionable(e) {
                    var t = db(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                }(be ? Ge : ve),
                We.set([B, D], {
                    force3D: !0
                }),
                x = We.quickSetter(B, ge.a, kt),
                w = We.quickSetter(D, ge.a, kt))
            }
            if (fe) {
                var d = fe.vars.onUpdate
                  , v = fe.vars.onUpdateParams;
                fe.eventCallback("onUpdate", function() {
                    Se.update(0, 0, 1),
                    d && d.apply(v || [])
                })
            }
            Se.previous = function() {
                return Ot[Ot.indexOf(Se) - 1]
            }
            ,
            Se.next = function() {
                return Ot[Ot.indexOf(Se) + 1]
            }
            ,
            Se.revert = function(e) {
                var t = !1 !== e || !Se.enabled
                  , r = rt;
                t !== Se.isReverted && (t && (!Se.scroll.rec && rt && ct && (Se.scroll.rec = Ce()),
                q = Math.max(Ce(), Se.scroll.rec || 0),
                Q = Se.progress,
                G = T && T.progress()),
                P && [P, E, B, D].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }),
                t && (rt = 1),
                Se.update(t),
                rt = r,
                ie && (t ? function _swapPinOut(e, t, r) {
                    It(r);
                    var n = e._gsap;
                    if (n.spacerIsNative)
                        It(n.spacerState);
                    else if (e.parentNode === t) {
                        var i = t.parentNode;
                        i && (i.insertBefore(e, t),
                        i.removeChild(t))
                    }
                }(ie, L, Y) : ue && Se.isActive || Zb(ie, L, db(ie), U)),
                Se.isReverted = t)
            }
            ,
            Se.refresh = function(e, t) {
                if (!rt && Se.enabled || t)
                    if (ie && e && pt)
                        nb(ScrollTrigger, "scrollEnd", Jb);
                    else {
                        !ct && _e && _e(Se),
                        rt = 1,
                        Ae = dt(),
                        k.tween && (k.tween.kill(),
                        k.tween = 0),
                        W && W.pause(),
                        ae && T && T.time(-.01, !0).invalidate(),
                        Se.isReverted || Se.revert();
                        for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Fa(ve, ge), h = 0, v = 0, b = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && I(_.pinnedContainer), w = ne && Math.max(0, Ot.indexOf(Se)) || 0, S = w; S--; )
                            (s = Ot[S]).end || s.refresh(0, 1) || (rt = 1),
                            !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s),
                            s.revert()),
                            s !== Ot[S] && (w--,
                            S--);
                        for (Ia(y) && (y = y(Se)),
                        C = dc(y, ne, d, ge, Ce(), P, B, Se, p, we, me, g, fe) || (ie ? -.001 : 0),
                        Ia(b) && (b = b(Se)),
                        Ha(b) && !b.indexOf("+=") && (~b.indexOf(" ") ? b = (Ha(y) ? y.split(" ")[0] : "") + b : (h = tb(b.substr(2), d),
                        b = Ha(y) ? y : C + h,
                        m = ne)),
                        O = Math.max(C, dc(b || (m ? "100% 0" : g), m, d, ge, Ce() + h, E, D, Se, p, we, me, g, fe)) || -.001,
                        z = O - C || (C -= .01) && .001,
                        h = 0,
                        S = w; S--; )
                            (l = (s = Ot[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start,
                            l !== ne && l !== x || Ja(y) || (h += r * (1 - s.progress)),
                            l === ie && (v += r));
                        if (C += h,
                        O += h,
                        Se._pinPush = v,
                        P && h && ((r = {})[ge.a] = "+=" + h,
                        x && (r[ge.p] = "-=" + Ce()),
                        We.set([P, E], r)),
                        ie)
                            r = db(ie),
                            o = ge === Ne,
                            i = Ce(),
                            R = parseFloat(H(ge.a)) + v,
                            !g && 1 < O && ((be ? Ge : ve).style["overflow-" + ge.a] = "scroll"),
                            Zb(ie, L, r),
                            F = ac(ie),
                            n = Mt(ie, !0),
                            c = me && J(ve, o ? Re : Ne)(),
                            oe && ((U = [oe + ge.os2, z + v + kt]).t = L,
                            (S = oe === St ? hb(ie, ge) + z + v : 0) && U.push(ge.d, S + kt),
                            It(U),
                            me && Ce(q)),
                            me && ((a = {
                                top: n.top + (o ? i - C : c) + kt,
                                left: n.left + (o ? c : i - C) + kt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[vt] = a.maxWidth = Math.ceil(n.width) + kt,
                            a[bt] = a.maxHeight = Math.ceil(n.height) + kt,
                            a[_t] = a[_t + xt] = a[_t + mt] = a[_t + wt] = a[_t + yt] = "0",
                            a[St] = r[St],
                            a[St + xt] = r[St + xt],
                            a[St + mt] = r[St + mt],
                            a[St + wt] = r[St + wt],
                            a[St + yt] = r[St + yt],
                            X = function _copyState(e, t, r) {
                                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)
                                    n = e[a],
                                    i.push(n, n in t ? t[n] : e[a + 1]);
                                return i.t = e.t,
                                i
                            }(Y, a, ue)),
                            T ? (u = T._initted,
                            at(1),
                            T.render(T.duration(), !0, !0),
                            N = H(ge.a) - R + z + v,
                            z !== N && me && X.splice(X.length - 2, 2),
                            T.render(0, !0, !0),
                            u || T.invalidate(),
                            at(0)) : N = z;
                        else if (ne && Ce() && !fe)
                            for (n = ne.parentNode; n && n !== Ge; )
                                n._pinOffset && (C -= n._pinOffset,
                                O -= n._pinOffset),
                                n = n.parentNode;
                        f && f.forEach(function(e) {
                            return e.revert(!1)
                        }),
                        Se.start = C,
                        Se.end = O,
                        M = A = Ce(),
                        fe || (M < q && Ce(q),
                        Se.scroll.rec = 0),
                        Se.revert(!1),
                        j && (Me = -1,
                        Se.isActive && Ce(C + z * Q),
                        j.restart(!0)),
                        rt = 0,
                        T && he && (T._initted || G) && T.progress() !== G && T.progress(G, !0).render(T.time(), !0, !0),
                        Q === Se.progress && !fe || (T && !he && T.totalProgress(Q, !0),
                        Se.progress = Q,
                        Se.update(0, 0, 1)),
                        ie && oe && (L._pinOffset = Math.round(Se.progress * N)),
                        te && te(Se)
                    }
            }
            ,
            Se.getVelocity = function() {
                return (Ce() - A) / (dt() - tt) * 1e3 || 0
            }
            ,
            Se.endAnimation = function() {
                Na(Se.callbackAnimation),
                T && (W ? W.progress(1) : T.paused() ? he || Na(T, Se.direction < 0, 1) : Na(T, T.reversed()))
            }
            ,
            Se.labelToScroll = function(e) {
                return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * z || 0
            }
            ,
            Se.getTrailing = function(t) {
                var e = Ot.indexOf(Se)
                  , r = 0 < Se.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1);
                return (Ha(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : r).filter(function(e) {
                    return 0 < Se.direction ? e.end <= C : e.start >= O
                })
            }
            ,
            Se.update = function(e, t, r) {
                if (!fe || r || e) {
                    var n, i, o, a, s, l, c, u = Se.scroll(), f = e ? 0 : (u - C) / z, d = f < 0 ? 0 : 1 < f ? 1 : f || 0, p = Se.progress;
                    if (t && (A = M,
                    M = fe ? Ce() : u,
                    ce && (V = S,
                    S = T && !he ? T.totalProgress() : d)),
                    se && !d && ie && !rt && !ft && pt && C < u + (u - A) / (dt() - tt) * se && (d = 1e-4),
                    d !== p && Se.enabled) {
                        if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p,
                        Se.direction = p < d ? 1 : -1,
                        Se.progress = d,
                        a && !rt && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3,
                        he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i],
                        c = T && ("complete" === o || "reset" === o || o in T))),
                        pe && (s || c) && (c || re || !T) && (Ia(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function(e) {
                            return e.endAnimation()
                        })),
                        he || (!W || rt || ft ? T && T.totalProgress(d, !!rt) : ((fe || ut && ut !== Se) && W.render(W._dp._time - W._start),
                        W.resetTo ? W.resetTo("totalProgress", d, T._tTime / T._tDur) : (W.vars.totalProgress = d,
                        W.invalidate().restart()))),
                        ie)
                            if (e && oe && (L.style[oe + ge.os2] = m),
                            me) {
                                if (a) {
                                    if (l = !e && p < d && u < O + 1 && u + 1 >= Fa(ve, ge),
                                    ue)
                                        if (e || !n && !l)
                                            fc(ie, L);
                                        else {
                                            var g = Mt(ie, !0)
                                              , h = u - C;
                                            fc(ie, Ge, g.top + (ge === Ne ? h : 0) + kt, g.left + (ge === Ne ? 0 : h) + kt)
                                        }
                                    It(n || l ? X : F),
                                    N !== z && d < 1 && n || b(R + (1 !== d || l ? 0 : N))
                                }
                            } else
                                b(ya(R + N * d));
                        !ce || k.tween || rt || ft || j.restart(!0),
                        $ && (s || le && d && (d < 1 || !st)) && Ke($.targets).forEach(function(e) {
                            return e.classList[n || le ? "add" : "remove"]($.className)
                        }),
                        !Z || he || e || Z(Se),
                        a && !rt ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()),
                        Z && Z(Se)),
                        !s && st || (ee && s && Oa(Se, ee),
                        ye[i] && Oa(Se, ye[i]),
                        le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0),
                        s || ye[i = 1 === d ? 1 : 3] && Oa(Se, ye[i])),
                        de && !n && Math.abs(Se.getVelocity()) > (Ja(de) ? de : 2500) && (Na(Se.callbackAnimation),
                        W ? W.progress(1) : Na(T, !d, 1))) : he && Z && !rt && Z(Se)
                    }
                    if (w) {
                        var v = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
                        x(v + (B._isFlipped ? 1 : 0)),
                        w(v)
                    }
                    K && K(-u / fe.duration() * (fe._caScrollDist || 0))
                }
            }
            ,
            Se.enable = function(e, t) {
                Se.enabled || (Se.enabled = !0,
                nb(ve, "resize", Cb),
                nb(be ? Je : ve, "scroll", Ab),
                _e && nb(ScrollTrigger, "refreshInit", _e),
                !1 !== e && (Se.progress = Q = 0,
                M = A = Me = Ce()),
                !1 !== t && Se.refresh())
            }
            ,
            Se.getTween = function(e) {
                return e && k ? k.tween : W
            }
            ,
            Se.setPositions = function(e, t) {
                ie && (R += e - C,
                N += t - e - z),
                Se.start = C = e,
                Se.end = O = t,
                z = t - e,
                Se.update()
            }
            ,
            Se.disable = function(e, t) {
                if (Se.enabled && (!1 !== e && Se.revert(),
                Se.enabled = Se.isActive = !1,
                t || W && W.pause(),
                q = 0,
                n && (n.uncache = 1),
                _e && ob(ScrollTrigger, "refreshInit", _e),
                j && (j.pause(),
                k.tween && k.tween.kill() && (k.tween = 0)),
                !be)) {
                    for (var r = Ot.length; r--; )
                        if (Ot[r].scroller === ve && Ot[r] !== Se)
                            return;
                    ob(ve, "resize", Cb),
                    ob(ve, "scroll", Ab)
                }
            }
            ,
            Se.kill = function(e, t) {
                Se.disable(e, t),
                W && !t && W.kill(),
                a && delete Pt[a];
                var r = Ot.indexOf(Se);
                0 <= r && Ot.splice(r, 1),
                r === it && 0 < Et && it--,
                r = 0,
                Ot.forEach(function(e) {
                    return e.scroller === Se.scroller && (r = 1)
                }),
                r || (Se.scroll.rec = 0),
                T && (T.scrollTrigger = null,
                e && T.render(-1),
                t || T.kill()),
                P && [P, E, B, D].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }),
                ut === Se && (ut = 0),
                ie && (n && (n.uncache = 1),
                r = 0,
                Ot.forEach(function(e) {
                    return e.pin === ie && r++
                }),
                r || (n.spacer = 0)),
                _.onKill && _.onKill(Se)
            }
            ,
            Se.enable(!1, !1),
            o && o(Se),
            T && T.add && !z ? We.delayedCall(.01, function() {
                return C || O || Se.refresh()
            }) && (z = .01) && (C = O = 0) : Se.refresh()
        } else
            this.update = this.refresh = this.kill = xa
    }
    ,
    ScrollTrigger.register = function register(e) {
        return a || (We = e || Aa(),
        za() && window.document && ScrollTrigger.enable(),
        a = gt),
        a
    }
    ,
    ScrollTrigger.defaults = function defaults(e) {
        if (e)
            for (var t in e)
                Ct[t] = e[t];
        return Ct
    }
    ,
    ScrollTrigger.disable = function disable(t, r) {
        gt = 0,
        Ot.forEach(function(e) {
            return e[r ? "kill" : "disable"](t)
        }),
        ob(je, "wheel", Ab),
        ob(Je, "scroll", Ab),
        clearInterval(c),
        ob(Je, "touchcancel", xa),
        ob(Ge, "touchstart", xa),
        mb(ob, Je, "pointerdown,touchstart,mousedown", va),
        mb(ob, Je, "pointerup,touchend,mouseup", wa),
        l.kill(),
        Ga(ob);
        for (var e = 0; e < T.length; e += 3)
            pb(ob, T[e], T[e + 1]),
            pb(ob, T[e], T[e + 2])
    }
    ,
    ScrollTrigger.enable = function enable() {
        if (je = window,
        Je = document,
        qe = Je.documentElement,
        Ge = Je.body,
        We && (Ke = We.utils.toArray,
        et = We.utils.clamp,
        at = We.core.suppressOverwrites || xa,
        We.core.globals("ScrollTrigger", ScrollTrigger),
        Ge)) {
            gt = 1,
            k.register(We),
            ScrollTrigger.isTouch = k.isTouch,
            C = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            nb(je, "wheel", Ab),
            s = [je, Je, qe, Ge],
            ScrollTrigger.matchMedia({
                "(orientation: portrait)": function orientationPortrait() {
                    return Bb(),
                    Bb
                }
            }),
            nb(Je, "scroll", Ab);
            var e, t, r = Ge.style, n = r.borderTopStyle;
            for (r.borderTopStyle = "solid",
            e = Mt(Ge),
            Ne.m = Math.round(e.top + Ne.sc()) || 0,
            Re.m = Math.round(e.left + Re.sc()) || 0,
            n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
            c = setInterval(zb, 250),
            We.delayedCall(.5, function() {
                return ft = 0
            }),
            nb(Je, "touchcancel", xa),
            nb(Ge, "touchstart", xa),
            mb(nb, Je, "pointerdown,touchstart,mousedown", va),
            mb(nb, Je, "pointerup,touchend,mouseup", wa),
            u = We.utils.checkPrefix("transform"),
            re.push(u),
            a = dt(),
            l = We.delayedCall(.2, Z).pause(),
            p = [Je, "visibilitychange", function() {
                var e = je.innerWidth
                  , t = je.innerHeight;
                Je.hidden ? (f = e,
                d = t) : f === e && d === t || Cb()
            }
            , Je, "DOMContentLoaded", Z, je, "load", Z, je, "resize", Cb],
            Ga(nb),
            Ot.forEach(function(e) {
                return e.enable(0, 1)
            }),
            t = 0; t < T.length; t += 3)
                pb(ob, T[t], T[t + 1]),
                pb(ob, T[t], T[t + 2])
        }
    }
    ,
    ScrollTrigger.config = function config(e) {
        "limitCallbacks"in e && (st = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(zb, t),
        "ignoreMobileResize"in e && (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
        "autoRefreshEvents"in e && (Ga(ob) || Ga(nb, e.autoRefreshEvents || "none"),
        g = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e)
          , n = T.indexOf(r)
          , i = Ba(r);
        ~n && T.splice(n, i ? 6 : 2),
        t && (i ? Le.unshift(je, t, Ge, t, qe, t) : Le.unshift(r, t))
    }
    ,
    ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for (r in e)
            n = U.indexOf(r),
            i = e[r],
            "all" === (lt = r) ? i() : (t = je.matchMedia(r)) && (t.matches && (o = i()),
            ~n ? (U[n + 1] = Ma(U[n + 1], i),
            U[n + 2] = Ma(U[n + 2], o)) : (n = U.length,
            U.push(r, i, o),
            t.addListener ? t.addListener(Ib) : t.addEventListener("change", Ib)),
            U[n + 3] = t.matches),
            lt = 0;
        return U
    }
    ,
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (U.length = 0),
        0 <= (e = U.indexOf(e)) && U.splice(e, 4)
    }
    ,
    ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ha(e) ? I(e) : e).getBoundingClientRect()
          , i = n[r ? vt : bt] * t || 0;
        return r ? 0 < n.right - i && n.left + i < je.innerWidth : 0 < n.bottom - i && n.top + i < je.innerHeight
    }
    ,
    ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ha(e) && (e = I(e));
        var n = e.getBoundingClientRect()
          , i = n[r ? vt : bt]
          , o = null == t ? i / 2 : t in Y ? Y[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return r ? (n.left + o) / je.innerWidth : (n.top + o) / je.innerHeight
    }
    ,
    ScrollTrigger);
    function ScrollTrigger(e, t) {
        a || ScrollTrigger.register(We) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t)
    }
    oe.version = "3.10.4",
    oe.saveStyles = function(e) {
        return e ? Ke(e).forEach(function(e) {
            if (e && e.style) {
                var t = W.indexOf(e);
                0 <= t && W.splice(t, 5),
                W.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), We.core.getCache(e), lt)
            }
        }) : W
    }
    ,
    oe.revert = function(e, t) {
        return Q(!e, t)
    }
    ,
    oe.create = function(e, t) {
        return new oe(e,t)
    }
    ,
    oe.refresh = function(e) {
        return e ? Cb() : (a || oe.register()) && Z(!0)
    }
    ,
    oe.update = ee,
    oe.clearScrollMemory = Ob,
    oe.maxScroll = function(e, t) {
        return Fa(e, t ? Re : Ne)
    }
    ,
    oe.getScrollFunc = function(e, t) {
        return J(I(e), t ? Re : Ne)
    }
    ,
    oe.getById = function(e) {
        return Pt[e]
    }
    ,
    oe.getAll = function() {
        return Ot.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }
    ,
    oe.isScrolling = function() {
        return !!pt
    }
    ,
    oe.snapDirectional = kb,
    oe.addEventListener = function(e, t) {
        var r = H[e] || (H[e] = []);
        ~r.indexOf(t) || r.push(t)
    }
    ,
    oe.removeEventListener = function(e, t) {
        var r = H[e]
          , n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }
    ,
    oe.batch = function(e, t) {
        function to(e, t) {
            var r = []
              , n = []
              , i = We.delayedCall(o, function() {
                t(r, n),
                r = [],
                n = []
            }).pause();
            return function(e) {
                r.length || i.restart(!0),
                r.push(e.trigger),
                n.push(e),
                a <= r.length && i.progress(1)
            }
        }
        var r, n = [], i = {}, o = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t)
            i[r] = "on" === r.substr(0, 2) && Ia(t[r]) && "onRefreshInit" !== r ? to(0, t[r]) : t[r];
        return Ia(a) && (a = a(),
        nb(oe, "refresh", function() {
            return a = t.batchMax()
        })),
        Ke(e).forEach(function(e) {
            var t = {};
            for (r in i)
                t[r] = i[r];
            t.trigger = e,
            n.push(oe.create(t))
        }),
        n
    }
    ;
    function ic(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0),
        n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }
    function jc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none",
        e === qe && jc(Ge, t)
    }
    function lc(e) {
        var t, r = e.event, n = e.target, i = e.axis, o = (r.changedTouches ? r.changedTouches[0] : r).target, a = o._gsap || We.core.getCache(o), s = dt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; o && o.scrollHeight <= o.clientHeight; )
                o = o.parentNode;
            a._isScroll = o && !Ba(o) && o !== n && (se[(t = db(o)).overflowY] || se[t.overflowX]),
            a._isScrollT = s
        }
        !a._isScroll && "x" !== i || (r._gsapAllow = !0)
    }
    function mc(e, t, r, n) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && lc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && nb(Je, k.eventTypes[0], ce, !1, !0)
            },
            onDisable: function onDisable() {
                return ob(Je, k.eventTypes[0], ce, !0)
            }
        })
    }
    function qc(e) {
        function op() {
            return n = !1
        }
        function rp() {
            o = Fa(d, Ne),
            _ = et(C ? 1 : 0, o),
            f && (S = et(0, Fa(d, Re))),
            a = G
        }
        function xp() {
            rp(),
            s.isActive() && s.vars.scrollY > o && (h() > o ? s.progress(1) && h(o) : s.resetTo("scrollY", o))
        }
        Ka(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var r, o, n, a, s, l, c, u, f = e.normalizeScrollX, t = e.momentum, i = e.allowNestedScroll, d = I(e.target) || qe, p = We.core.globals().ScrollSmoother, g = C && (e.content && I(e.content) || p && p.get() && p.get().content()), h = J(d, Ne), v = J(d, Re), b = 1, m = (k.isTouch && je.visualViewport ? je.visualViewport.scale * je.visualViewport.width : je.outerWidth) / je.innerWidth, y = 0, x = Ia(t) ? function() {
            return t(r)
        }
        : function() {
            return t || 2.8
        }
        , w = mc(d, e.type, !0, i), S = xa, _ = xa;
        return e.ignoreCheck = function(e) {
            return C && "touchmove" === e.type && function ignoreDrag() {
                if (n) {
                    requestAnimationFrame(op);
                    var e = ya(r.deltaY / 2)
                      , t = _(h.v - e);
                    return g && t !== h.v + h.offset && (h.offset = t - h.v,
                    g.style.transform = "translateY(" + -h.offset + "px)",
                    g._gsap && (g._gsap.y = -h.offset + "px"),
                    h.cacheID = T.cache,
                    ee()),
                    !0
                }
                g && (g.style.transform = "translateY(0px)",
                h.offset = h.cacheID = 0,
                g._gsap && (g._gsap.y = "0px")),
                n = !0
            }() || 1.05 < b && "touchstart" !== e.type || r.isGesturing || e.touches && 1 < e.touches.length
        }
        ,
        e.onPress = function() {
            var e = b;
            b = ya((je.visualViewport && je.visualViewport.scale || 1) / m),
            s.pause(),
            e !== b && jc(d, 1.01 < b || !f && "x"),
            n = !1,
            l = v(),
            c = h(),
            rp(),
            a = G
        }
        ,
        e.onRelease = e.onGestureStart = function(e, t) {
            if (g && (g.style.transform = "translateY(0px)",
            h.offset = h.cacheID = 0,
            g._gsap && (g._gsap.y = "0px")),
            t) {
                T.cache++;
                var r, n, i = x();
                f && (n = (r = v()) + .05 * i * -e.velocityX / .227,
                i *= ic(v, r, n, Fa(d, Re)),
                s.vars.scrollX = S(n)),
                n = (r = h()) + .05 * i * -e.velocityY / .227,
                i *= ic(h, r, n, Fa(d, Ne)),
                s.vars.scrollY = _(n),
                s.invalidate().duration(i).play(.01),
                (C && s.vars.scrollY >= o || o - 1 <= r) && We.to({}, {
                    onUpdate: xp,
                    duration: i
                })
            } else
                u.restart(!0)
        }
        ,
        e.onWheel = function() {
            s._ts && s.pause(),
            1e3 < dt() - y && (a = 0,
            y = dt())
        }
        ,
        e.onChange = function(e, t, r, n, i) {
            G !== a && rp(),
            t && f && v(S(n[2] === t ? l + (e.startX - e.x) : v() + t - n[1])),
            r && h(_(i[2] === r ? c + (e.startY - e.y) : h() + r - i[1])),
            ee()
        }
        ,
        e.onEnable = function() {
            jc(d, !f && "x"),
            nb(je, "resize", xp),
            w.enable()
        }
        ,
        e.onDisable = function() {
            jc(d, !0),
            ob(je, "resize", xp),
            w.kill()
        }
        ,
        ((r = new k(e)).iOS = C) && !h() && h(1),
        u = r._dc,
        s = We.to(r, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: u.vars.onComplete
        }),
        r
    }
    var ae, se = {
        auto: 1,
        scroll: 1
    }, le = /(input|label|select|textarea)/i, ce = function _captureInputs(e) {
        var t = le.test(e.target.tagName);
        (t || ae) && (e._gsapAllow = !0,
        ae = t)
    };
    oe.sort = function(e) {
        return Ot.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    oe.observe = function(e) {
        return new k(e)
    }
    ,
    oe.normalizeScroll = function(e) {
        if (void 0 === e)
            return h;
        if (!0 === e && h)
            return h.enable();
        if (!1 === e)
            return h && h.kill();
        var t = e instanceof k ? e : qc(e);
        return h && h.target === t.target && h.kill(),
        Ba(t.target) && (h = t),
        t
    }
    ,
    oe.core = {
        _getVelocityProp: K,
        _inputObserver: mc,
        _scrollers: T,
        _proxies: Le,
        bridge: {
            ss: function ss() {
                pt || V("scrollStart"),
                pt = dt()
            },
            ref: function ref() {
                return rt
            }
        }
    },
    Aa() && We.registerPlugin(oe),
    e.ScrollTrigger = oe,
    e.default = oe;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
