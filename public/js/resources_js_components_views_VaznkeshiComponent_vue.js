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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      show_submitVaznsOfGale_modal: false,
      headers: [{
        text: '#',
        value: 'no'
      }, {
        text: 'پلاک دام',
        value: 'pelak'
      }, {
        text: 'جنسیت',
        value: 'jensiat'
      }, {
        text: 'گونه',
        value: 'gone'
      }, {
        text: 'نژاد',
        value: 'nejad'
      }, {
        text: 'کیلو',
        value: 'kilo'
      }, {
        text: 'گرم',
        value: 'gram'
      }, {
        text: 'تاریخ وزن کشی',
        value: 'date'
      }, {
        text: 'توضیحات',
        value: 'tozihat'
      }]
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
    },
    toFarsi: function toFarsi(str) {
      return this.$t(str);
    }
  },
  computed: {
    current_gale: function current_gale() {
      var _this2 = this;

      return this.gales.find(function (element) {
        return element.id == _this2.current_gale_id;
      });
    },
    items: function items() {
      var _this3 = this;

      var itms = [];

      if (this.current_gale) {
        this.current_gale.animals.forEach(function (element) {
          element.vazns.forEach(function (el) {
            var a = JSON.parse(JSON.stringify(el.vazn));

            if (typeof a == 'string') {
              a = JSON.parse(a);
              console.log(1);
            }

            console.log(_typeof(JSON.parse(JSON.stringify(a))), JSON.parse(JSON.stringify(a)));
            itms.push({
              no: el.id,
              pelak: _this3.toFarsi(element.pelak),
              jensiat: _this3.toFarsi(element.jensiat),
              gone: _this3.toFarsi(element.gone),
              nejad: _this3.toFarsi(element.nejad),
              kilo: a[0],
              gram: a[1],
              date: _this3.toFarsi(el.tarikh),
              tozihat: _this3.toFarsi(el.tozihat)
            });
          });
        });
      }

      return itms;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table thead th[data-v-7f14310e], .table tbody tr td[data-v-7f14310e] {\n    text-align: center;\n}\n.table[data-v-7f14310e] {\n    background:cornsilk;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_style_index_0_id_7f14310e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_style_index_0_id_7f14310e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_style_index_0_id_7f14310e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true& */ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true&");
/* harmony import */ var _VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VaznkeshiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _VaznkeshiComponent_vue_vue_type_style_index_0_id_7f14310e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& */ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VaznkeshiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f14310e",
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

/***/ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_style_index_0_id_7f14310e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=style&index=0&id=7f14310e&lang=css&scoped=true&");


/***/ }),

/***/ "./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VaznkeshiComponent_vue_vue_type_template_id_7f14310e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/views/VaznkeshiComponent.vue?vue&type=template&id=7f14310e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-100" },
    [
      _c("div", { staticClass: "w-100 d-flex p-2" }, [
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
                _c("option", { attrs: { selected: "", value: "null" } }, [
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.items },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);