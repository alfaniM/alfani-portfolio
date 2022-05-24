"use strict";
exports.id = 4319;
exports.ids = [4319];
exports.modules = {

/***/ 4319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Testimonials1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/common/removeOverlay.js
const removeOverlay = ()=>{
    let sectionWithOutOverlay = document.querySelectorAll("section.noOverlay");
    if (sectionWithOutOverlay) {
        sectionWithOutOverlay.forEach((section)=>section.removeAttribute("data-overlay-dark")
        );
    }
};
/* harmony default export */ const common_removeOverlay = (removeOverlay);

;// CONCATENATED MODULE: ./src/components/Testimonials1/index.jsx

/* eslint-disable @next/next/no-img-element */ 





class Testimonials1 extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arrows",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickNext()
                    ,
                    className: "next cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-right"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    className: "prev cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-left"
                    })
                })
            ]
        }));
    };
    componentDidMount() {
        common_removeOverlay();
    }
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: `testimonials section-padding ${this.props.withBG ? "bg-img" : ""} ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.parallaxie ? " parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`,
            style: {
                backgroundImage: `${this.props.withBG && !this.props.imgSrc ? "url(/img/slid/work.jpg)" : this.props.imgSrc ? `url(${this.props.imgSrc})` : "none"}`
            },
            "data-overlay-dark": `${this.props.overlay ? "9" : "0"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container position-re",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "What Peapole Says?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Testimonials."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Testimonials"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center wow fadeInUp",
                        "data-wow-delay": ".5s",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                className: "slic-item",
                                ref: (c)=>this.slider = c
                                ,
                                dots: true,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                rows: 1,
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Alfani is talented and tech-savvy person passionate about graphic design and UI/UX design. He can deliver his tasks on time with excellent results. his eagerness to learn new things and develop his skill is easily noticeable once you work with him. I believe he can achieve more things in the future with that performances."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBGLftstlParallaxie ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/citraalfani.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Citra Melati Nurillahi Alfani Putri"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Graphic Designer, Head of Marketing Communication"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Citra Melati Nurillahi Alfani Putri"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Graphic Designer, Head of Marketing Communication"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Alfani is talented and tech-savvy person passionate about graphic design and UI/UX design. He can deliver his tasks on time with excellent results. his eagerness to learn new things and develop his skill is easily noticeable once you work with him. I believe he can achieve more things in the future with that performances."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBGLftstlParallaxie ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/citraalfani.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Citra Melati Nurillahi Alfani Putri"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Graphic Designer, Head of Marketing Communication"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Citra Melati Nurillahi Alfani Putri"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Graphic Designer, Head of Marketing Communication"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Alfani is talented and tech-savvy person passionate about graphic design and UI/UX design. He can deliver his tasks on time with excellent results. his eagerness to learn new things and develop his skill is easily noticeable once you work with him. I believe he can achieve more things in the future with that performances."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBGLftstlParallaxie ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/citraalfani.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Citra Melati Nurillahi Alfani Putri"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Graphic Designer, Head of Marketing Communication"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Citra Melati Nurillahi Alfani Putri"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Graphic Designer, Head of Marketing Communication"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    this.renderArrows()
                ]
            })
        }));
    }
}
/* harmony default export */ const components_Testimonials1 = (Testimonials1);


/***/ })

};
;