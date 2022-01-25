"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_newDamRegistration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      animal: {
        id: '',
        pelak: '',
        jensiat: '',
        gone: '',
        nejad: '',
        jhen: '',
        tavalod: ''
      },
      itemsgone: [{
        v: 'boz',
        t: 'بز'
      }, {
        v: 'gosfand',
        t: 'گوسفند'
      }],
      itemsjensiat: [{
        v: 'nar',
        t: 'نر'
      }, {
        v: 'made',
        t: 'ماده'
      }],
      itemsjhen: [{
        v: 'hetero',
        t: 'هتروزیگوت'
      }, {
        v: 'hemo',
        t: 'هموزیگوت'
      }, {
        v: 'none',
        t: 'هیچکدام'
      }],
      pelakRules: [function (v) {
        return !!v || 'ورود پلاک الزامی است';
      }, function (v) {
        return !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'پلاک باید عددی باشد';
      }],
      inputRules: [function (v) {
        return !!v || 'ورود پلاک الزامی است';
      }]
    };
  },
  created: function created() {},
  methods: {
    addAnimal: function addAnimal(animal) {
      console.log(JSON.stringify(animal));
      this.$refs.form.validate();
      fetch('api/AddNewAnimals', {
        method: 'post',
        body: JSON.stringify(animal),
        headers: {
          'Accept': 'application/json',
          'content-type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      });
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./resources/js/components/views/newDamRegistration.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/views/newDamRegistration.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newDamRegistration.vue?vue&type=template&id=75382e35& */ "./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35&");
/* harmony import */ var _newDamRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newDamRegistration.vue?vue&type=script&lang=js& */ "./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newDamRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__.render,
  _newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/newDamRegistration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newDamRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newDamRegistration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newDamRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newDamRegistration_vue_vue_type_template_id_75382e35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newDamRegistration.vue?vue&type=template&id=75382e35& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/newDamRegistration.vue?vue&type=template&id=75382e35& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        {
          staticClass: "mx-auto",
          attrs: { "max-width": "1000", color: "#F9F9F9" },
        },
        [
          _c(
            "v-card-title",
            { staticStyle: { "background-color": "black", color: "white" } },
            [
              _c("h2", { staticClass: "text-center" }, [
                _vm._v("ثبت اطلاعات دام جدید"),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "v-form",
                  {
                    ref: "form",
                    staticClass: "px-3",
                    attrs: { "lazy-validation": "" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.addAnimal(_vm.animal)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              label: "شماره پلاک دام جدبد",
                              width: "100%",
                              rules: _vm.pelakRules,
                              required: "",
                            },
                            model: {
                              value: _vm.animal.pelak,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "pelak", $$v)
                              },
                              expression: "animal.pelak",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("date-picker"),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "date",
                              label: "تاریخ تولد",
                              name: "tavalod",
                              "is-inline": "",
                            },
                            model: {
                              value: _vm.animal.tavalod,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "tavalod", $$v)
                              },
                              expression: "animal.tavalod",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "گونه دام",
                              items: _vm.itemsgone,
                              "item-text": "t",
                              "item-value": "v",
                              "persistent-hint": "",
                              "return-object": "",
                              required: "",
                              rules: [
                                function (v) {
                                  return !!v || "ورود گونه دام الزامی است"
                                },
                              ],
                            },
                            model: {
                              value: _vm.animal.gone,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "gone", $$v)
                              },
                              expression: "animal.gone",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.itemsjensiat,
                              "item-text": "t",
                              "item-value": "v",
                              label: "جنسیت دام",
                              "persistent-hint": "",
                              "return-object": "",
                              required: "",
                              rules: [
                                function (v) {
                                  return !!v || "ورود جنسیت دام الزامی است"
                                },
                              ],
                            },
                            model: {
                              value: _vm.animal.jensiat,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "jensiat", $$v)
                              },
                              expression: "animal.jensiat",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "number",
                              label: "گله دام جدید",
                              width: "100%",
                            },
                            model: {
                              value: _vm.animal.gale,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "gale", $$v)
                              },
                              expression: "animal.gale",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.itemsjhen,
                              "item-text": "t",
                              "item-value": "v",
                              label: "ژن دام ",
                              "persistent-hint": "",
                              "return-object": "",
                            },
                            model: {
                              value: _vm.animal.jhen,
                              callback: function ($$v) {
                                _vm.$set(_vm.animal, "jhen", $$v)
                              },
                              expression: "animal.jhen",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mb-0" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-8 offset-md-4" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "#1D1D66", dark: "", large: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.addAnimal(_vm.animal)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\r\n                                              ثبت دام\r\n                                        "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);