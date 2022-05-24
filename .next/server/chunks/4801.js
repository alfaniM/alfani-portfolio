"use strict";
exports.id = 4801;
exports.ids = [4801];
exports.modules = {

/***/ 7116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_with_skills)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/heroSkillsProgress.js
const heroSkillsProgress = ()=>{
    if (document.querySelector(".hero-sec .skills-box")) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (document.querySelector(".hero-sec")) {
                    if (window.pageYOffset > document.querySelector(".hero-sec").offsetTop - 800) {
                        item.style.width = myVal;
                    }
                }
            });
        });
    }
};
/* harmony default export */ const common_heroSkillsProgress = (heroSkillsProgress);

;// CONCATENATED MODULE: ./src/components/About-with-skills/index.jsx



const AboutWithSkills = ()=>{
    external_react_default().useEffect(()=>{
        common_heroSkillsProgress();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "About Me"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "main-title wow",
                                    "data-splitting": true,
                                    children: "My mission is to design dan develop great applications that are useful for all."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: "Hello! I’m Muhammad Aulia Alfani. UI/UX designer from Indonesia, Jawa Barat. Passionate in UI/UX design and Front-end web development with high interests in product design, design thinking, social media, digital marketing, and communication. These interests bring me to be an adaptable, creative, and initiative person who pays attention to detail. Love to learn new things, have a high curiosity, and meet new people from different backgrounds."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#0",
                                    className: "simple-btn mt-40",
                                    children: "Download C.V"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "UI / UX Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "80%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Front-End Web Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "70%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Graphic Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "80%"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_with_skills = (AboutWithSkills);


/***/ }),

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Clients_brands)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/clients-brands.json
const clients_brands_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/01.png","lightImage":"/img/clients/brands/light/1.png"},{"id":2,"darkImage":"/img/clients/brands/dark/02.png","lightImage":"/img/clients/brands/light/2.png"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","lightImage":"/img/clients/brands/light/3.png"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","lightImage":"/img/clients/brands/light/4.png"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","lightImage":"/img/clients/brands/light/5.png"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","lightImage":"/img/clients/brands/light/6.png"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","lightImage":"/img/clients/brands/light/7.png"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","lightImage":"/img/clients/brands/light/8.png"}]');
;// CONCATENATED MODULE: ./src/components/Clients-brands/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const ClientsBrands = ({ subBG , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients-brand section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                className: "",
                "data-wow-delay": ".5s",
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }, 
                ],
                children: clients_brands_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "brands",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    display: "none"
                                },
                                children: " \xa0 "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                "data-wow-delay": index + 1 == "1" ? ".3s" : index + 1 == "2" ? ".6s" : index + 1 == "3" ? ".8s" : index + 1 == "4" ? ".3s" : index + 1 == "5" ? ".4s" : index + 1 == "6" ? ".7s" : index + 1 == "7" ? ".5s" : index + 1 == "8" ? ".3s" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: theme == "dark" ? item.darkImage : item.lightImage,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "link words chars splitting",
                                            "data-splitting": true,
                                            children: "www.avo.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Clients_brands = (ClientsBrands);


/***/ }),

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IntroTxt = ({ subBG  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`,
        style: {
            backgroundImage: "url(/img/slid/freelancer.jpg)"
        },
        "data-overlay-dark": "4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cont",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                children: "Hello, I'm"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Muhammad Aulia Alfani"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "UI & UX Designer"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "social-icon",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fab fa-linkedin-in"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.behance.net/alfaniaulia",
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fab fa-behance"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.instagram.com/m.alfaniii",
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fab fa-dribbble"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroTxt);


/***/ })

};
;