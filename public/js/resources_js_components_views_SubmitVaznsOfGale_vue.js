"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_SubmitVaznsOfGale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      vazns: [],
      tarikh_of_vazn: new Date(),
      tozihat: ''
    };
  },
  props: {
    gale: {
      required: true,
      type: Object
    }
  },
  created: function created() {
    var _this = this;

    // console.log(this.gale);
    // const vazn_keys = Object.keys(this.gale.animals[0].vazns[0]);
    this.gale.animals.forEach(function (element) {
      var vaznObj = {}; // vazn_keys.forEach(key => {
      //     vaznObj[key] = {};
      // });

      vaznObj.animal_id = element.id;
      vaznObj.vazn = {
        kilo: '',
        geram: ''
      };
      _this.vazns[element.id] = vaznObj;
    });
  },
  methods: {
    getVaznOfAnimalID: function getVaznOfAnimalID(animal_id) {
      return this.vazns.find(function (element) {
        return element.animal_id == animal_id;
      });
    },
    createVazns: function createVazns() {
      var _this2 = this;

      var objToBeCreated = {
        vazns_array: JSON.stringify(this.vazns.filter(function (element) {
          return element != null;
        })),
        tarikh: this.tarikh_of_vazn,
        tozihat: this.tozihat
      };
      console.log(JSON.stringify(objToBeCreated));
      fetch('api/vaznkeshi/createVazns', {
        method: "post",
        body: JSON.stringify(objToBeCreated),
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log(res);
        alert('وزن کشی ها با موفقیت ثبت شد.');

        _this2.$emit("submitSuccess");
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/views/SubmitVaznsOfGale.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/views/SubmitVaznsOfGale.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c& */ "./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c&");
/* harmony import */ var _SubmitVaznsOfGale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitVaznsOfGale.vue?vue&type=script&lang=js& */ "./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitVaznsOfGale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/SubmitVaznsOfGale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitVaznsOfGale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitVaznsOfGale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitVaznsOfGale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitVaznsOfGale_vue_vue_type_template_id_36b84e2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/SubmitVaznsOfGale.vue?vue&type=template&id=36b84e2c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-100" }, [
    _c("h4", [_vm._v("ثبت وزن کشی برای دام های گله " + _vm._s(_vm.gale.name))]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.createVazns()
          },
        },
      },
      [
        _c("div", [
          _c("label", { attrs: { for: "tarikh" } }, [
            _vm._v("انتخاب تاریخ وزن کشی:"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tarikh_of_vazn,
                expression: "tarikh_of_vazn",
              },
            ],
            attrs: { type: "date", name: "tarikh", id: "tarikh" },
            domProps: { value: _vm.tarikh_of_vazn },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tarikh_of_vazn = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-wrapper" }, [
          _c("table", { staticClass: "w-100 table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.gale.animals, function (animal) {
                return _c("tr", { key: animal.id }, [
                  _c("td", [_vm._v(_vm._s(animal.pelak))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(animal.tavalod))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm.vazns.length
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.vazns[animal.id].vazn.kilo,
                              expression: "vazns[animal.id].vazn.kilo",
                            },
                          ],
                          attrs: {
                            type: "number",
                            name: "kilo" + animal.id,
                            id: "kilo" + animal.id,
                            min: "0",
                          },
                          domProps: { value: _vm.vazns[animal.id].vazn.kilo },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.vazns[animal.id].vazn,
                                "kilo",
                                $event.target.value
                              )
                            },
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "kilo" + animal.id } }, [
                      _vm._v("کیلو"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm.vazns.length
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.vazns[animal.id].vazn.geram,
                              expression: "vazns[animal.id].vazn.geram",
                            },
                          ],
                          attrs: {
                            type: "number",
                            name: "geram" + animal.id,
                            id: "geram" + animal.id,
                            min: "0",
                          },
                          domProps: { value: _vm.vazns[animal.id].vazn.geram },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.vazns[animal.id].vazn,
                                "geram",
                                $event.target.value
                              )
                            },
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "geram" + animal.id } }, [
                      _vm._v("گرم"),
                    ]),
                  ]),
                ])
              }),
              0
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("\n                ثبت\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secodary",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.$emit("close")
                },
              },
            },
            [_vm._v("\n                برگشت\n            ")]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("پلاک")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("تاریخ تولد")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", colspan: "2" } }, [_vm._v("وزن")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);