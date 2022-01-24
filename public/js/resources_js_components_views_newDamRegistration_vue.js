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
      }
    };
  },
  created: function created() {},
  methods: {
    addAnimal: function addAnimal(animal) {
      var _this = this;

      console.log(JSON.stringify(animal)); // if(this.edit === true){

      fetch('api/AddNewAnimals', {
        method: 'post',
        body: JSON.stringify(animal),
        headers: {
          'Accept': 'application/json',
          'content-type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.formSeen = 0;
        alert('اطلاعات دام بروزرسانی شد.');

        _this.fetchAnimals();
      }); // }
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
  return _c("div", [
    _c("div", { staticClass: "card-header" }, [_vm._v("Login")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
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
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "pelak" },
              },
              [_vm._v("شماره پلاک}")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.animal.pelak,
                    expression: "animal.pelak",
                  },
                ],
                attrs: { id: "pelak", type: "number", name: "pelak" },
                domProps: { value: _vm.animal.pelak },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.animal, "pelak", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "tavalod" },
              },
              [_vm._v("تاریخ تولد")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.animal.tavalod,
                    expression: "animal.tavalod",
                  },
                ],
                attrs: { id: "tavalod", type: "date", name: "tavalod" },
                domProps: { value: _vm.animal.tavalod },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.animal, "tavalod", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "gone" },
              },
              [_vm._v("گونه دام")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.animal.gone,
                      expression: "animal.gone",
                    },
                  ],
                  attrs: { id: "gone", name: "gone" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.animal,
                        "gone",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "boz" } }, [_vm._v("بز")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "gosfand" } }, [
                    _vm._v("گوسفتد"),
                  ]),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "jensiat" },
              },
              [_vm._v("گونه دام")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.animal.jensiat,
                      expression: "animal.jensiat",
                    },
                  ],
                  attrs: { id: "jensiat", name: "jensiat" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.animal,
                        "jensiat",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "nar" } }, [_vm._v("نر")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "made" } }, [_vm._v("ماده")]),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "gale" },
              },
              [_vm._v("گله")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.animal.gale,
                    expression: "animal.gale",
                  },
                ],
                attrs: { id: "gale", name: "gale" },
                domProps: { value: _vm.animal.gale },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.animal, "gale", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-form-label text-md-right",
                attrs: { for: "jhen" },
              },
              [_vm._v("گونه دام")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.animal.jhen,
                      expression: "animal.jhen",
                    },
                  ],
                  attrs: { id: "jhen", name: "jhen" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.animal,
                        "jhen",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "hetero" } }, [
                    _vm._v("هتروزیگوت "),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "hemo" } }, [
                    _vm._v("هموزیگوت "),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "none" } }, [
                    _vm._v("هیچکدام "),
                  ]),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(0),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-8 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [
            _vm._v(
              "\r\n                                    ثبت دام\r\n                                "
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);