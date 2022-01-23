"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_Animals_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      animals: [],
      animal: {
        id: '',
        pelak: '',
        jensiat: '',
        gone: '',
        nejad: '',
        jhen: '',
        tavalod: ''
      },
      animal_id: '',
      searched: '',
      edit: false,
      formSeen: false
    };
  },
  created: function created() {
    this.fetchAnimals();
  },
  methods: {
    fetchAnimals: function fetchAnimals() {
      var _this = this;

      fetch('api/animals').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.animals = res.data;
      });
    },
    hideForm: function hideForm() {
      this.formSeen = 0;
    },
    addAnimal: function addAnimal(animal) {
      var _this2 = this;

      console.log(JSON.stringify(animal));

      if (this.edit === true) {
        fetch('api/animals', {
          method: 'post',
          body: JSON.stringify(animal),
          headers: {
            'Accept': 'application/json',
            'content-type': 'aplication/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this2.formSeen = 0;
          alert('اطلاعات دام بروزرسانی شد.');

          _this2.fetchAnimals();
        });
      }
    },
    editAnimal: function editAnimal(animal) {
      this.edit = true;
      this.formSeen = animal.id;
      this.animal.id = animal.id;
      this.animal_id = animal.id;
      this.animal.pelak = animal.pelak;
      this.animal.jensiat = animal.jensiat;
    },
    deleteAnimal: function deleteAnimal(id) {
      var _this3 = this;

      if (confirm('آیا از حذف این دام اطمینان دارید؟')) {
        fetch('api/animals/' + id, {
          method: 'delete'
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.formSeen = false;
          alert('دام مورد نظر حذف شد');

          _this3.fetchAnimals();
        });
      }
    },
    search: function search(searched) {
      var _this4 = this;

      console.log(JSON.stringify({
        search: searched
      }));
      fetch('api/animals/search/' + searched, {
        method: 'get',
        // body:JSON.stringify({search: searched}),
        headers: {
          'Accept': 'application/json',
          'content-type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log(res.data);
        _this4.searched = '';
        _this4.animals = res.data;
      });
    }
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./resources/js/components/views/Animals.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/views/Animals.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animals.vue?vue&type=template&id=53bf23fb& */ "./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb&");
/* harmony import */ var _Animals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animals.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Animals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Animals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Animals.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Animals.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/views/Animals.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Animals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animals_vue_vue_type_template_id_53bf23fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Animals.vue?vue&type=template&id=53bf23fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/Animals.vue?vue&type=template&id=53bf23fb& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("a", { attrs: { href: "newDamRegistration" } }, [
        _vm._v("افزودن دام جدید+"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "searching" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searched,
              expression: "searched",
            },
          ],
          domProps: { value: _vm.searched },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.searched = $event.target.value
            },
          },
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-warning",
            on: {
              click: function ($event) {
                return _vm.search(_vm.searched)
              },
            },
          },
          [_c("i", { staticClass: "fa fa-search" }), _vm._v("جستجو")]
        ),
      ]),
      _vm._v(" "),
      _vm._l(_vm.animals, function (animal) {
        return _c(
          "div",
          { key: animal.id, staticClass: "card card-body mb-2" },
          [
            _c("h3", [_vm._v("    " + _vm._s(animal.id))]),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c("h3", [_vm._v("    شماره پلاک:" + _vm._s(animal.pelak))])
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c("h3", [_vm._v("   جنسیت:" + _vm._s(animal.jensiat))])
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c("h3", [_vm._v("  تاریخ تولد :" + _vm._s(animal.tavalod))])
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c("h3", [_vm._v("  گونه:" + _vm._s(animal.gone))])
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c("h3", [_vm._v("  ژن :" + _vm._s(animal.jhen))])
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-warning mb-2",
                    on: {
                      click: function ($event) {
                        return _vm.editAnimal(animal)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-edit" }), _vm._v("بهروزرسانی")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen !== animal.id
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger ",
                    on: {
                      click: function ($event) {
                        return _vm.deleteAnimal(animal.id)
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-trash",
                      staticStyle: { color: "white" },
                    }),
                    _vm._v("حذف"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.formSeen === animal.id
              ? _c(
                  "form",
                  {
                    staticClass: "mb-3",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.addAnimal(animal)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { attrs: { for: "pellak" } }, [
                        _vm._v("پلاک دام"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: animal.pelak,
                            expression: "animal.pelak",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", id: "pelak" },
                        domProps: { value: animal.pelak },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(animal, "pelak", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { attrs: { for: "tavallod" } }, [
                        _vm._v("تاریخ تولد:   "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: animal.tavalod,
                            expression: "animal.tavalod",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date", id: "tavallod" },
                        domProps: { value: animal.tavalod },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(animal, "tavalod", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { attrs: { for: "jensiat" } }, [
                        _vm._v("جنسیت:"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: animal.jensiat,
                              expression: "animal.jensiat",
                            },
                          ],
                          attrs: { id: "jensiat" },
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
                                animal,
                                "jensiat",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "nar" } }, [
                            _vm._v("نر"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "made" } }, [
                            _vm._v("ماده"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { attrs: { for: "gone" } }, [
                        _vm._v("  گونه: "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: animal.gone,
                              expression: "animal.gone",
                            },
                          ],
                          attrs: { id: "gone" },
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
                                animal,
                                "gone",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "boz" } }, [
                            _vm._v("بز"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "gosfand" } }, [
                            _vm._v("مگوسفند"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { attrs: { for: "jhen" } }, [_vm._v("ژن:")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: animal.jhen,
                              expression: "animal.jhen",
                            },
                          ],
                          attrs: { id: "jhen" },
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
                                animal,
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
                            _vm._v("هیچکدام "),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "hemo" } }, [
                            _vm._v("ههموزیگوت "),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "none" } }, [
                            _vm._v("ههموزیگوت "),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_light btn-block",
                        attrs: { type: "submit" },
                      },
                      [_vm._v("ذخیره تغییرات")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_danger btn-block",
                        attrs: { type: "submit" },
                        on: {
                          click: function ($event) {
                            return _vm.hideForm()
                          },
                        },
                      },
                      [_vm._v("انصراف")]
                    ),
                  ]
                )
              : _vm._e(),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);