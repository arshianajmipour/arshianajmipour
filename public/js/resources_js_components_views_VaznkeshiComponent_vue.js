"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_VaznkeshiComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SubmitVaznsOfGale: function SubmitVaznsOfGale() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_views_SubmitVaznsOfGale_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SubmitVaznsOfGale */ "./resources/js/components/views/SubmitVaznsOfGale.vue"));
    }
  },
  data: function data() {
    return {
      gales: [],
      current_gale_id: '',
      show_submitVaznsOfGale_modal: false
    };
  },
  created: function created() {
    this.fetchGales();
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  methods: {
    fetchGales: function fetchGales() {
      var _this = this;

      fetch('api/getGales').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.gales = res.data;
      });
    },
    setCurrentGaleID: function setCurrentGaleID(event) {
      this.current_gale_id = event.target.value; // console.log(this.current_gale_id);
      // console.log(this.current_gale);
    }
  },
  computed: {
    current_gale: function current_gale() {
      var _this2 = this;

      return this.gales.find(function (element) {
        return element.id == _this2.current_gale_id;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/views/VaznkeshiComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/views/VaznkeshiComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VaznkeshiComponent.vue?vue&type=template&id=7f14310e& */ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&");
/* harmony import */ var _VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VaznkeshiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__.render,
  _VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/VaznkeshiComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VaznkeshiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VaznkeshiComponent.vue?vue&type=template&id=7f14310e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e& ***!
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
  return _c("div", { staticClass: "w-100" }, [
    _c("h1", { staticClass: "text-center" }, [_vm._v("وزن کشی")]),
    _vm._v(" "),
    _c("div", { staticClass: "w-100 d-flex p-5" }, [
      _c(
        "div",
        [
          _c("label", { attrs: { for: "gale" } }, [_vm._v("انتخاب گله:")]),
          _vm._v(" "),
          _c(
            "select",
            {
              staticStyle: { margin: "20px" },
              attrs: { id: "gale", name: "gale" },
              on: {
                change: function ($event) {
                  return _vm.setCurrentGaleID($event)
                },
              },
            },
            [
              _c("option", { attrs: { selected: "" } }, [
                _vm._v("انتخاب کنید"),
              ]),
              _vm._v(" "),
              _vm._l(_vm.gales, function (gale) {
                return _c(
                  "option",
                  { key: gale.id, domProps: { value: gale.id } },
                  [_vm._v(_vm._s(gale.name))]
                )
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "#1D1D66", dark: "", large: "" },
              on: {
                click: function ($event) {
                  _vm.show_submitVaznsOfGale_modal = true
                },
              },
            },
            [_vm._v("\r\n              ثبت وزن کشی گله\r\n        ")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm.show_submitVaznsOfGale_modal
        ? _c("div", { staticClass: "modal-mask" }, [
            _c("div", { staticClass: "modal-wrapper" }, [
              _c(
                "div",
                {
                  staticClass: "modal-container",
                  staticStyle: { width: "50%", "background-color": "#eee" },
                },
                [
                  _c("submit-vazns-of-gale", {
                    attrs: { gale: _vm.current_gale },
                    on: {
                      close: function ($event) {
                        _vm.show_submitVaznsOfGale_modal = false
                      },
                      submitSuccess: function ($event) {
                        return _vm.fetchGales()
                      },
                    },
                  }),
                ],
                1
              ),
            ]),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-100 d-flex p-5" }, [
      _vm.current_gale_id
        ? _c(
            "table",
            { staticClass: "table" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.current_gale.animals, function (animal) {
                return _c(
                  "tbody",
                  { key: animal.id },
                  _vm._l(animal.vazns, function (vazn) {
                    return _c("tr", { key: vazn.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(vazn.id)),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(animal.pelak))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(animal.jensiat))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(animal.gone))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(animal.nejad))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(vazn.tarikh))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(vazn.tozihat))]),
                    ])
                  }),
                  0
                )
              }),
            ],
            2
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("پلاک دام")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("جنسیت")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("گونه")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("نژاد")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("تاریخ وزن کشی")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("توضیحات")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);