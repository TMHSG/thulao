exports.ids = [2];
exports.modules = {

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(452);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("24ba9554", content, true, context)
};

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RandomBackground_vue_vue_type_style_index_0_id_7a2ad1b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RandomBackground_vue_vue_type_style_index_0_id_7a2ad1b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RandomBackground_vue_vue_type_style_index_0_id_7a2ad1b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RandomBackground_vue_vue_type_style_index_0_id_7a2ad1b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RandomBackground_vue_vue_type_style_index_0_id_7a2ad1b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".random-background[data-v-7a2ad1b6]{background-size:cover;height:100%;left:0;position:fixed;top:0;transition:background-image .5s ease;width:100%;z-index:-1}.random-background[data-v-7a2ad1b6]:before{background:rgba(0,0,0,.3);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RandomBackground.vue?vue&type=template&id=7a2ad1b6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "random-background"
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RandomBackground.vue?vue&type=template&id=7a2ad1b6&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RandomBackground.vue?vue&type=script&lang=js
/* harmony default export */ var RandomBackgroundvue_type_script_lang_js = ({
  data() {
    return {
      backgrounds: ['/static/bg1.jpg', '/static/bg2.jpg', '/static/bg3.jpg'
      // Thêm các đường dẫn hình ảnh khác nếu cần
      ],
      currentBackground: null
    };
  },
  methods: {
    changeBackground() {
      const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
      const randomBackground = this.backgrounds[randomIndex];
      console.log('Đường dẫn đến hình ảnh:', randomBackground);
      this.$refs.randomBackground.$el.style.backgroundImage = `url(${randomBackground})`;
    }
  },
  watch: {
    backgrounds() {
      // Theo dõi thay đổi trong backgrounds và thay đổi background khi có sự thay đổi
      this.changeBackground();
    }
  },
  mounted() {
    // Thay đổi background khi component được tạo
    this.changeBackground();

    // (Tùy chọn) Cập nhật background sau mỗi khoảng thời gian nào đó
    setInterval(() => {
      this.changeBackground();
    }, 3000); // Thay đổi background sau mỗi 5 giây
  }
});
// CONCATENATED MODULE: ./components/RandomBackground.vue?vue&type=script&lang=js
 /* harmony default export */ var components_RandomBackgroundvue_type_script_lang_js = (RandomBackgroundvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/RandomBackground.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(451)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RandomBackgroundvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a2ad1b6",
  "0667f595"
  
)

/* harmony default export */ var RandomBackground = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=random-background.js.map