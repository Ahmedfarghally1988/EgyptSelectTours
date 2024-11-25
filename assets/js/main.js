!(function (e) {
    "use strict";
    function t(t) {
        e(t).length > 0 &&
            e(t).each(function () {
                var t = e(this).find("a");
                e(this)
                    .find(t)
                    .each(function () {
                        e(this).on("click", function () {
                            var t = e(this.getAttribute("href"));
                            t.length &&
                                (event.preventDefault(),
                                e("html, body")
                                    .stop()
                                    .animate({ scrollTop: t.offset().top - 10 }, 1e3));
                        });
                    });
            });
    }
    if (

(e(window).on("load", function () {
            e(".preloader").fadeOut();
        }),

        e(".nice-select").length && e(".nice-select").niceSelect(),
        e(".preloader").length > 0 &&
            e(".preloaderCls").each(function () {
                e(this).on("click", function (t) {
                    t.preventDefault(), e(".preloader").css("display", "none");
                });
            }),
        e(document).ready(function () {
            setTimeout(function () {
                e("#loader").addClass("loaded"),
                    e("#loader").hasClass("loaded") &&
                        e("#preloader")
                            .delay(9e3)
                            .queue(function () {
                                e(this).remove();
                            });
            }, 3e3);
        }),
        (e.fn.thmobilemenu = function (t) {
            var a = e.extend(
                {
                    menuToggleBtn: ".th-menu-toggle",
                    bodyToggleClass: "th-body-visible",
                    subMenuClass: "th-submenu",
                    subMenuParent: "menu-item-has-children",
                    thSubMenuParent: "th-item-has-children",
                    subMenuParentToggle: "th-active",
                    meanExpandClass: "th-mean-expand",
                    subMenuToggleClass: "th-open",
                    toggleSpeed: 400,
                },
                t
            );
            return this.each(function () {
                var t = e(this);
                function i() {
                    t.toggleClass(a.bodyToggleClass);
                    var i = "." + a.subMenuClass;
                    e(i).each(function () {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle));
                    });
                }
                t.find("." + a.subMenuParent).each(function () {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), e(this).addClass(a.subMenuParent), e(this).addClass(a.thSubMenuParent), e(this).children("a").append(a.appendElement);
                });
                var n = "." + a.thSubMenuParent + " > a";
                e(n).each(function () {
                    e(this).on("click", function (t) {
                        var i, n;
                        t.preventDefault(), (i = e(this).parent()), (n = i.children("ul")).length > 0 && (i.toggleClass(a.subMenuParentToggle), n.slideToggle(a.toggleSpeed), n.toggleClass(a.subMenuToggleClass));
                    });
                }),
                    e(a.menuToggleBtn).each(function () {
                        e(this).on("click", function () {
                            i();
                        });
                    }),
                    t.on("click", function (e) {
                        e.stopPropagation(), i();
                    }),
                    t.find("div").on("click", function (e) {
                        e.stopPropagation();
                    });
            });
        }),
        e(".th-menu-wrapper").thmobilemenu(),
        t(".onepage-nav"),
        t(".scroll-down"),
        e(window).on("scroll", function () {
            e(".onepage-nav").length;
        }),
        e(window).scroll(function () {
            e(this).scrollTop() > 500 ? (e(".sticky-wrapper").addClass("sticky"), e(".category-menu").addClass("close-category")) : (e(".sticky-wrapper").removeClass("sticky"), e(".category-menu").removeClass("close-category"));
        }),
        e(".menu-expand").each(function () {
            e(this).on("click", function (t) {
                t.preventDefault(), e(".category-menu").toggleClass("open-category");
            });
        }),
        e(".scroll-top").length > 0)
    ) {
        var a = document.querySelector(".scroll-top"),
            i = document.querySelector(".scroll-top path"),
            n = i.getTotalLength();
        (i.style.transition = i.style.WebkitTransition = "none"),
            (i.style.strokeDasharray = n + " " + n),
            (i.style.strokeDashoffset = n),
            i.getBoundingClientRect(),
            (i.style.transition = i.style.WebkitTransition = "stroke-dashoffset 10ms linear");
        var s = function () {
            var t = e(window).scrollTop(),
                a = e(document).height() - e(window).height(),
                s = n - (t * n) / a;
            i.style.strokeDashoffset = s;
        };
        s(), e(window).scroll(s);
        jQuery(window).on("scroll", function () {
            jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show");
        }),
            jQuery(a).on("click", function (e) {
                return e.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 750), !1;
            });
    }
    function o() {
        e("[data-ani]").each(function () {
            var t = e(this).data("ani");
            e(this).addClass(t);
        }),
            e("[data-ani-delay]").each(function () {
                var t = e(this).data("ani-delay");
                e(this).css("animation-delay", t);
            });
    }
    function o() {
        e("[data-ani]").each(function () {
            var t = e(this).data("ani");
            e(this).addClass(t);
        }),
            e("[data-ani-delay]").each(function () {
                var t = e(this).data("ani-delay");
                e(this).css("animation-delay", t);
            });
    }
    e("[data-bg-src]").length > 0 &&
        e("[data-bg-src]").each(function () {
            var t = e(this).attr("data-bg-src");
            e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image");
        }),
        e("[data-bg-color]").length > 0 &&
            e("[data-bg-color]").each(function () {
                var t = e(this).attr("data-bg-color");
                e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
            }),
        e("[data-border]").each(function () {
            var t = e(this).data("border");
            e(this).css("--th-border-color", t);
        }),

        e(".th-slider").each(function () {
            var t = e(this),
                a = e(this).data("slider-options"),
                i = t.find(".slider-prev"),
                n = t.find(".slider-next"),
                s = t.find(".slider-pagination.pagi-number"),
                o = t.siblings(".slider-controller").find(".slider-pagination"),
                r = o.length ? o.get(0) : t.find(".slider-pagination").get(0),
                l = a.paginationType ? a.paginationType : "bullets",
                c = a.autoplay,
                d = {
                    slidesPerView: 1,
                    spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                    loop: 0 != a.loop,
                    speed: a.speed ? a.speed : 1e3,
                    autoplay: c || { delay: 6e3, disableOnInteraction: !1 },
                    navigation: { nextEl: n.get(0), prevEl: i.get(0) },
                    pagination: {
                        el: r,
                        type: l,
                        clickable: !0,
                        renderBullet: function (e, t) {
                            var a = e + 1,
                                i = a < 10 ? "0" + a : a;
                            return s.length ? '<span class="' + t + ' number">' + i + "</span>" : '<span class="' + t + '" aria-label="Go to Slide ' + i + '"></span>';
                        },
                        formatFractionCurrent: function (e) {
                            return e < 10 ? "0" + e : e;
                        },
                        formatFractionTotal: function (e) {
                            return e < 10 ? "0" + e : e;
                        },
                    },
                    on: {
                        slideChange: function () {
                            setTimeout(function () {
                                p.params.mousewheel.releaseOnEdges = !1;
                            }, 500);
                        },
                        reachEnd: function () {
                            setTimeout(function () {
                                p.params.mousewheel.releaseOnEdges = !0;
                            }, 750);
                        },
                    },
                },
                u = JSON.parse(t.attr("data-slider-options"));
            u = e.extend({}, d, u);
            var p = new Swiper(t.get(0), u);
            e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap");
        }),
        o(),
        e("[data-slider-prev], [data-slider-next]").on("click", function () {
            var t = e(this).data("slider-prev") || e(this).data("slider-next"),
                a = e(t);
            if (a.length) {
                var i = a[0].swiper;
                i && (e(this).data("slider-prev") ? i.slidePrev() : i.slideNext());
            }
        }),
        o(),
        e("[data-slider-prev], [data-slider-next]").on("click", function () {
            (e(this).data("slider-prev") || e(this).data("slider-next")).split(", ").forEach(function (t) {
                var a = e(t);
                if (a.length) {
                    var i = a[0].swiper;
                    i && (e(this).data("slider-prev") ? i.slidePrev() : i.slideNext());
                }
            });
        });
    var r = new Swiper(".heroThumbs", { spaceBetween: 10, slidesPerView: 2, loop: !0, watchSlidesProgress: !0, slideToClickedSlide: !0, watchSlidesVisibility: !0, centeredSlidesBounds: !0 });
    (r = new Swiper(".hero-slider-2", {
        spaceBetween: 10,
        thumbs: { swiper: r },
        effect: "fade",
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        autoplay: { delay: 6e3, disableOnInteraction: !1 },
        loop: !0,
        watchSlidesProgress: !0,
    })),
        (r = new Swiper(".hero3Thumbs", { spaceBetween: 10, slidesPerView: 1, freeMode: !0, watchSlidesProgress: !0 })),
        (r = new Swiper(".hero-slider-3", {
            thumbs: { swiper: r },
            loop: !0,
            effect: "fade",
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                formatFractionCurrent: function (e) {
                    return "0" + e;
                },
            },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        })),
        (r = new Swiper(".hero6Thumbs", { spaceBetween: 3, slidesPerView: 1, freeMode: !0, watchSlidesProgress: !0 })),
        (r = new Swiper(".hero-slider-6", {
            thumbs: { swiper: r },
            loop: !0,
            effect: "fade",
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                formatFractionCurrent: function (e) {
                    return "" + e;
                },
            },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        })),
        (r = new Swiper(".hero6Thumbs", { spaceBetween: 3, slidesPerView: 1, freeMode: !0, watchSlidesProgress: !0 })),
        (r = new Swiper(".hero-slider-6", {
            thumbs: { swiper: r },
            loop: !0,
            effect: "fade",
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                formatFractionCurrent: function (e) {
                    return "" + e;
                },
            },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        })),
        (r = new Swiper(".hero9Thumbs", { spaceBetween: 10, slidesPerView: 1, freeMode: !0, watchSlidesProgress: !0 })),
        (r = new Swiper(".hero-slider-9", {
            thumbs: { swiper: r },
            loop: !0,
            effect: "fade",
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                formatFractionCurrent: function (e) {
                    return "0" + e;
                },
            },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        })),
        (r = new Swiper(".hero10Thumbs", { spaceBetween: 10, slidesPerView: 3, freeMode: !0, watchSlidesProgress: !0 })),
        (r = new Swiper(".hero-slider-10", {
            spaceBetween: 10,
            thumbs: { swiper: r },
            effect: "fade",
            pagination: { el: ".swiper-pagination", type: "fraction" },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            loop: !0,
            watchSlidesProgress: !0,
        }));
    function o() {
        e("[data-ani]").each(function () {
            var t = e(this).data("ani");
            e(this).addClass(t);
        }),
            e("[data-ani-delay]").each(function () {
                var t = e(this).data("ani-delay");
                e(this).css("animation-delay", t);
            });
    }
    document.addEventListener(
        "mouseenter",
        (e) => {
            const t = e.target;
            if (t && t.matches && t.matches(".swiper-container")) {
                t.swiper.autoplay.stop(), t.classList.add("swiper-paused");
                t.querySelector(".swiper-pagination-bullet-active").style.animationPlayState = "paused";
            }
        },
        !0
    ),
        document.addEventListener(
            "mouseleave",
            (e) => {
                const t = e.target;
                if (t && t.matches && t.matches(".swiper-container")) {
                    t.swiper.autoplay.start(), t.classList.remove("swiper-paused");
                    const e = t.querySelector(".swiper-pagination-bullet-active");
                    e.classList.remove("swiper-pagination-bullet-active"),
                        setTimeout(() => {
                            e.classList.add("swiper-pagination-bullet-active");
                        }, 10);
                }
            },
            !0
        ),
        e(document).ready(function () {
            e(".categorySlider").each(function () {
                const e = 0.1,
                    t = 0.01;
                new Swiper(".categorySlider", {
                    slidesPerView: 5,
                    spaceBetween: 60,
                    centeredSlides: !0,
                    loop: !0,
                    grabCursor: !0,
                    pagination: { el: ".swiper-pagination", clickable: !0 },
                    breakpoints: {
                        300: { slidesPerView: 1, spaceBetween: 10 },
                        600: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                        1280: { slidesPerView: 5, spaceBetween: 60 },
                    },
                }),
                    (function a() {
                        requestAnimationFrame(a),
                            document.querySelectorAll(".single").forEach((a, i) => {
                                const n = a.getBoundingClientRect(),
                                    s = 0.5 * window.innerWidth - (n.x + 0.5 * n.width);
                                let o = Math.abs(s) * e - n.width * e;
                                o < 0 && (o = 0);
                                const r = s < 0 ? "left top" : "right top";
                                (a.style.transform = `translate(0, ${o}px) rotate(${-s * t}deg)`), (a.style.transformOrigin = r);
                            });
                    })();
            });
        }),
        e(document).ready(function () {
            e(".categorySlider2").each(function () {
                const e = 0.1,
                    t = 0;
                new Swiper(".categorySlider2", {
                    slidesPerView: "auto",
                    slidesPerView: 5,
                    spaceBetween: 60,
                    centeredSlides: !0,
                    loop: !0,
                    grabCursor: !0,
                    pagination: { el: ".swiper-pagination", clickable: !0 },
                    breakpoints: {
                        300: { slidesPerView: 1, spaceBetween: 30 },
                        600: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                        1280: { slidesPerView: 5, spaceBetween: 60 },
                    },
                }),
                    (function a() {
                        requestAnimationFrame(a),
                            document.querySelectorAll(".single2").forEach((a, i) => {
                                const n = a.getBoundingClientRect(),
                                    s = 0.5 * window.innerWidth - (n.x + 0.5 * n.width);
                                let o = Math.abs(s) * e - n.width * e;
                                o < 0 && (o = 0);
                                const r = s < 0 ? "left top" : "right top";
                                (a.style.transform = `translate(0, ${o}px) rotate(${-s * t}deg)`), (a.style.transformOrigin = r);
                            });
                    })();
            });
        }),
        e(document).ready(function () {
            e(".categorySlider6").each(function () {
                const e = 0.1,
                    t = 0;
                new Swiper(".categorySlider6", {
                    slidesPerView: "auto",
                    slidesPerView: 5,
                    spaceBetween: 30,
                    centeredSlides: !0,
                    loop: !0,
                    grabCursor: !0,
                    pagination: { el: ".swiper-pagination", type: "progressbar" },
                    breakpoints: {
                        300: { slidesPerView: 1, spaceBetween: 30 },
                        575: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1200: { slidesPerView: 4, spaceBetween: 30 },
                        1380: { slidesPerView: 5, spaceBetween: 30 },
                    },
                }),
                    (function a() {
                        requestAnimationFrame(a),
                            document.querySelectorAll(".single2").forEach((a, i) => {
                                const n = a.getBoundingClientRect(),
                                    s = 0.5 * window.innerWidth - (n.x + 0.5 * n.width);
                                let o = Math.abs(s) * e - n.width * e;
                                o < 0 && (o = 0);
                                const r = s < 0 ? "left top" : "right top";
                                (a.style.transform = `translate(0, ${o}px) rotate(${-s * t}deg)`), (a.style.transformOrigin = r);
                            });
                    })();
            });
        }),
        e(".destination-list-wrap").on("click", function () {
            e(this).addClass("active").siblings().removeClass("active");
        }),
        e(".destination-prev").on("click", function () {
            var t;
            (t = e(".destination-list-area .destination-list-wrap.active")).prev().length > 0
                ? (t.removeClass("active"), t.prev().addClass("active"))
                : (t.removeClass("active"), e(".destination-list-area .destination-list-wrap:last").addClass("active"));
        }),
        e(".destination-next").on("click", function () {
            var t;
            (t = e(".destination-list-area .destination-list-wrap.active")).next().length > 0
                ? (t.removeClass("active"), t.next().addClass("active"))
                : (t.removeClass("active"), e(".destination-list-area .destination-list-wrap:first").addClass("active"));
        }),
        e(".accordion-item-wrapp li:first-child").addClass("active"),
        e(".according-img-tab").hide(),
        e(".according-img-tab:first").show(),
        e(".accordion-item-wrapp .accordion-item-content").mouseenter(function () {
            e(".accordion-item-wrapp .accordion-item-content").removeClass("active"), e(".according-img-tab").hide();
            var t = e(this).find(".accordion-tab-item").attr("data-bs-target");
            return e(t).fadeIn(), !1;
        }),
        e(document).on("mouseover", ".hover-item", function () {
            e(this).addClass("item-active"), e(".hover-item").removeClass("item-active"), e(this).addClass("item-active");
        }),
        o(),
        e("[data-slider-prev], [data-slider-next]").on("click", function () {
            var t = e(this).data("slider-prev") || e(this).data("slider-next"),
                a = e(t);
            if (a.length) {
                var i = a[0].swiper;
                i && (e(this).data("slider-prev") ? i.slidePrev() : i.slideNext());
            }
        }),
        (e.fn.activateSliderThumbs = function (t) {
            var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
            return this.each(function () {
                var t = e(this),
                    i = t.find(a.tabButton),
                    n = e('<span class="indicator"></span>').appendTo(t),
                    s = t.data("slider-tab"),
                    o = e(s)[0].swiper;
                if (
                    (i.on("click", function (t) {
                        t.preventDefault();
                        var i = e(this);
                        if ((i.addClass("active").siblings().removeClass("active"), c(i), i.prevAll(a.tabButton).addClass("list-active"), i.nextAll(a.tabButton).removeClass("list-active"), a.sliderTab)) {
                            var n = i.index();
                            o.slideTo(n);
                        }
                    }),
                    a.sliderTab)
                ) {
                    o.on("slideChange", function () {
                        var e = o.realIndex,
                            t = i.eq(e);
                        t.addClass("active").siblings().removeClass("active"), c(t), t.prevAll(a.tabButton).addClass("list-active"), t.nextAll(a.tabButton).removeClass("list-active");
                    });
                    var r = o.activeIndex,
                        l = i.eq(r);
                    l.addClass("active").siblings().removeClass("active"), c(l), l.prevAll(a.tabButton).addClass("list-active"), l.nextAll(a.tabButton).removeClass("list-active");
                }
                function c(e) {
                    var t = e.position(),
                        a = parseInt(e.css("margin-top")) || 0,
                        i = parseInt(e.css("margin-left")) || 0;
                    n.css("--height-set", e.outerHeight() + "px"), n.css("--width-set", e.outerWidth() + "px"), n.css("--pos-y", t.top + a + "px"), n.css("--pos-x", t.left + i + "px");
                }
            });
        }),
        e(".product-thumb").length && e(".product-thumb").activateSliderThumbs({ sliderTab: !0, tabButton: ".tab-btn" }),
        e(".team-thumb").length && e(".team-thumb").activateSliderThumbs({ sliderTab: !0, tabButton: ".tab-btn" }),
        e(".testi-thumb").length && e(".testi-thumb").activateSliderThumbs({ sliderTab: !0, tabButton: ".tab-btn" }),
        e(".testi-thumb2").length && e(".testi-thumb2").activateSliderThumbs({ sliderTab: !0, tabButton: ".tab-btn" });
    var l,
        c,
        d,
        u = ".ajax-contact",
        p = '[name="email"]',
        h = e(".form-messages");
    function f() {
        var t = e(u).serialize();
        (function () {
            var t,
                a = !0;
            function i(i) {
                i = i.split(",");
                for (var n = 0; n < i.length; n++) (t = u + " " + i[n]), e(t).val() ? (e(t).removeClass("is-invalid"), (a = !0)) : (e(t).addClass("is-invalid"), (a = !1));
            }
            i('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'),
                e(p).val() &&
                e(p)
                    .val()
                    .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
                    ? (e(p).removeClass("is-invalid"), (a = !0))
                    : (e(p).addClass("is-invalid"), (a = !1));
            return a;
        })() &&
            jQuery
                .ajax({ url: e(u).attr("action"), data: t, type: "POST" })
                .done(function (t) {
                    h.removeClass("error"), h.addClass("success"), h.text(t), e(u + ' input:not([type="submit"]),' + u + " textarea").val("");
                })
                .fail(function (e) {
                    h.removeClass("success"), h.addClass("error"), "" !== e.responseText ? h.html(e.responseText) : h.html("Oops! An error occured and your message could not be sent.");
                });
    }
    function m(t, a, i, n) {
        e(a).on("click", function (a) {
            a.preventDefault(), e(t).addClass(n);
        }),
            e(t).on("click", function (a) {
                a.stopPropagation(), e(t).removeClass(n);
            }),
            e(t + " > div").on("click", function (a) {
                a.stopPropagation(), e(t).addClass(n);
            }),
            e(i).on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), e(t).removeClass(n);
            });
    }
    function m(t, a, i, n) {
        e(a).on("click", function (a) {
            a.preventDefault(), e(t).addClass(n);
        }),
            e(t).on("click", function (a) {
                a.stopPropagation(), e(t).removeClass(n);
            }),
            e(t + " > div").on("click", function (a) {
                a.stopPropagation(), e(t).addClass(n);
            }),
            e(i).on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), e(t).removeClass(n);
            });
    }
    if (
        (e(u).on("submit", function (e) {
            e.preventDefault(), f();
        }),
        (l = ".popup-search-box"),
        (c = ".searchClose"),
        (d = "show"),
        e(".searchBoxToggler").on("click", function (t) {
            t.preventDefault(), e(l).addClass(d);
        }),
        e(l).on("click", function (t) {
            t.stopPropagation(), e(l).removeClass(d);
        }),
        e(l)
            .find("form")
            .on("click", function (t) {
                t.stopPropagation(), e(l).addClass(d);
            }),
        e(c).on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), e(l).removeClass(d);
        }),
        m(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
        m(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"),



        e(".th-anim").length)
    ) {
        gsap.registerPlugin(ScrollTrigger),
            document.querySelectorAll(".th-anim").forEach((e) => {
                let t = e.querySelector("img"),
                    a = gsap.timeline({ scrollTrigger: { trigger: e, toggleActions: "play none none none" } });
                a.set(e, { autoAlpha: 1 }), a.from(e, 1.5, { xPercent: -100, ease: Power2.out }), a.from(t, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
            });
    }
    if (e(".cursor").length) {
        const t = document.querySelector(".cursor"),
            a = document.querySelector(".cursor-follower"),
            i = document.querySelectorAll(".gsap-cursor");
        let n = 0,
            s = 0,
            o = 0,
            r = 0;
        TweenMax.to({}, 0.02, {
            repeat: -1,
            onRepeat: function () {
                (n += (o - n) / 9), (s += (r - s) / 9), TweenMax.set(a, { css: { left: n - 20, top: s - 20 } }), TweenMax.set(t, { css: { left: o, top: r } });
            },
        }),
            document.addEventListener("mousemove", (e) => {
                (o = e.pageX), (r = e.pageY);
            }),
            i.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    t.classList.add("active"), a.classList.add("active");
                }),
                    e.addEventListener("mouseleave", () => {
                        t.classList.remove("active"), a.classList.remove("active");
                    });
            }),
            e(".slider-drag-wrap").hover(
                function () {
                    e(".cursor").addClass("active");
                },
                function () {
                    e(".cursor").removeClass("active");
                }
            ),
            e(".slider-drag-wrap a").hover(
                function () {
                    e(".cursor").removeClass("active");
                },
                function () {
                    e(".cursor").addClass("active");
                }
            );
    }
    function g(e) {
        return parseInt(e, 10);
    }
    e.fn.sectionPosition = function (t, a) {
        e(this).each(function () {
            var i,
                n,
                s,
                o,
                r,
                l = e(this);
            (i = Math.floor(l.height() / 2)),
                (n = l.attr(t)),
                (s = l.attr(a)),
                (o = g(e(s).css("padding-top"))),
                (r = g(e(s).css("padding-bottom"))),
                "top-half" === n ? (e(s).css("padding-bottom", r + i + "px"), l.css("margin-top", "-" + i + "px")) : "bottom-half" === n && (e(s).css("padding-top", o + i + "px"), l.css("margin-bottom", "-" + i + "px"));
        });
    };
    function v() {
        e(".feature-circle .progressbar").each(function () {
            var t = e(this).attr("data-path-color"),
                a = e(this).offset().top,
                i = e(window).scrollTop(),
                n = e(this).find(".circle").attr("data-percent"),
                s = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
            a < i + e(window).height() - 30 &&
                !s &&
                (e(this).data("animate", !0),
                e(this)
                    .find(".circle")
                    .circleProgress({ startAngle: -Math.PI / 2, value: n / 100, size: 100, thickness: 8, emptyFill: "#E4E4E4", lineCap: "round", fill: { color: t } })
                    .on("circle-animation-progress", function (t, a, i) {
                        e(this)
                            .find(".circle-num")
                            .text((100 * i).toFixed(0) + "%");
                    })
                    .stop());
        }),
            e(".skill-circle .progressbar").each(function () {
                var t = e(this).offset().top,
                    a = e(window).scrollTop(),
                    i = e(this).find(".circle").attr("data-percent"),
                    n = (parseInt(i, 10), parseInt(100, 10), e(this).data("animate"));
                t < a + e(window).height() - 30 &&
                    !n &&
                    (e(this).data("animate", !0),
                    e(this)
                        .find(".circle")
                        .circleProgress({ startAngle: -Math.PI / 2, value: i / 100, size: 100, thickness: 8, emptyFill: "#E0E0E0", lineCap: "round", fill: { gradient: ["#F11F22", "#F2891D"] } })
                        .on("circle-animation-progress", function (t, a, i) {
                            e(this)
                                .find(".circle-num")
                                .text((100 * i).toFixed(0) + "%");
                        })
                        .stop());
            });
    }
    e("[data-sec-pos]").length &&

        v(),
        e(window).scroll(v),

        (e.fn.countdown = function () {
            e(this).each(function () {
                var t = e(this),
                    a = new Date(t.data("offer-date")).getTime();
                function i(e) {
                    return t.find(e);
                }
                var n = setInterval(function () {
                    var e = new Date().getTime(),
                        s = a - e,
                        o = Math.floor(s / 864e5),
                        r = Math.floor((s % 864e5) / 36e5),
                        l = Math.floor((s % 36e5) / 6e4),
                        c = Math.floor((s % 6e4) / 1e3);
                    o < 10 && (o = "0" + o),
                        r < 10 && (r = "0" + r),
                        l < 10 && (l = "0" + l),
                        c < 10 && (c = "0" + c),
                        s < 0 ? (clearInterval(n), t.addClass("expired"), t.find(".message").css("display", "block")) : (i(".day").html(o), i(".hour").html(r), i(".minute").html(l), i(".seconds").html(c));
                }, 1e3);
            });
        }),
        e(".counter-list").length && e(".counter-list").countdown(),
        e(function () {
            e(".faq-area").slice(0, 4).show(),
                e("#loadMore").on("click", function (t) {
                    t.preventDefault(), e(".loadcontent:hidden").slice(0, 3).slideDown(), 0 == e(".loadcontent:hidden").length && e("#loadMore").text("No Content").addClass("noContent");
                });
        }),



    function b() {
        const t = e(this),
            a = t.attr("src");
        if (!w[a]) {
            const t = e.Deferred();
            e.get(a, (a) => {
                t.resolve(e(a).find("svg"));
            }),
                (w[a] = t.promise());
        }
        w[a].then((a) => {
            const i = e(a).clone();
            t.attr("id") && i.attr("id", t.attr("id")),
                t.attr("class") && i.attr("class", t.attr("class")),
                t.attr("style") && i.attr("style", t.attr("style")),
                t.attr("width") && (i.attr("width", t.attr("width")), t.attr("height") || i.removeAttr("height")),
                t.attr("height") && (i.attr("height", t.attr("height")), t.attr("width") || i.removeAttr("width")),
                i.insertAfter(t),
                t.trigger("svgInlined", i[0]),
                t.remove();
        });
    }


    $(".show-more").click(function () {
        if($(".text").hasClass("show-more-height")) {
            $(this).text("Less More");
        } else {
            $(this).text("Reed More");
        }

        $(".text").toggleClass("show-more-height");
    });


})(jQuery);
