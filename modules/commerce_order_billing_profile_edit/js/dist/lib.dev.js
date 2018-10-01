(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Editable_Core"), require("Editable_SevenBaseComponents"), require("PropTypes"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["Editable_Core", "Editable_SevenBaseComponents", "PropTypes", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["CommerceOrderBillingProfileEdit"] = factory(require("Editable_Core"), require("Editable_SevenBaseComponents"), require("PropTypes"), require("React"), require("ReactDOM"));
	else
		root["CommerceOrderBillingProfileEdit"] = factory(root["Editable_Core"], root["Editable_SevenBaseComponents"], root["PropTypes"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__drupal_editable_core__, __WEBPACK_EXTERNAL_MODULE__drupal_editable_seven_base_components__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/EditableAddress.js":
/*!*******************************************!*\
  !*** ./src/components/EditableAddress.js ***!
  \*******************************************/
/*! exports provided: EditableAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditableAddress\", function() { return EditableAddress; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @drupal-editable/core */ \"@drupal-editable/core\");\n/* harmony import */ var _drupal_editable_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @drupal-editable/seven-base-components */ \"@drupal-editable/seven-base-components\");\n/* harmony import */ var _drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n                            flex: 1;\\n                          \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n                            flex: 1;\\n                            margin-right: 1em;\\n                          \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n                          display: flex;\\n                        \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar _Drupal = Drupal,\n    t = _Drupal.t;\nvar EditableAddress =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(EditableAddress, _PureComponent);\n\n  function EditableAddress() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, EditableAddress);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableAddress)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      bundle: null,\n      type: null,\n      uuid: null\n    });\n\n    return _this;\n  }\n\n  _createClass(EditableAddress, [{\n    key: \"render\",\n    value: function render() {\n      var store = this.props.store;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n        store: store\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], this.state, function (_ref) {\n        var data = _ref.data,\n            loading = _ref.loading,\n            error = _ref.error;\n        return error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Error loading!\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"EditableEntity\"], {\n          data: data\n        }, function (_ref2) {\n          var getData = _ref2.getData,\n              handleChangeAndSave = _ref2.handleChangeAndSave,\n              saving = _ref2.saving;\n          return loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject())\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: t(\"First name\"),\n            value: getData(\"attributes.address.given_name\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.given_name\",\n            className: Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject2()),\n            loading: saving && saving.includes(\"attributes.address.given_name\")\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: t(\"Last name\"),\n            value: getData(\"attributes.address.family_name\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.family_name\",\n            className: Object(_drupal_editable_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject3()),\n            loading: saving && saving.includes(\"attributes.address.family_name\")\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: t(\"Company\"),\n            value: getData(\"attributes.address.organization\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.organization\",\n            loading: saving && saving.includes(\"attributes.address.organization\")\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: t(\"Street address\"),\n            value: getData(\"attributes.address.address_line1\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.address_line1\",\n            loading: saving && saving.includes(\"attributes.address.address_line1\")\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            value: getData(\"attributes.address.address_line2\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.address_line2\",\n            loading: saving && saving.includes(\"attributes.address.address_line2\")\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: \"Locality\",\n            value: getData(\"attributes.address.locality\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.locality\",\n            loading: saving && saving.includes(\"attributes.address.locality\")\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drupal_editable_seven_base_components__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            label: \"Postal code\",\n            value: getData(\"attributes.address.postal_code\"),\n            onChange: handleChangeAndSave,\n            propPath: \"attributes.address.postal_code\",\n            loading: saving && saving.includes(\"attributes.address.postal_code\")\n          }));\n        });\n      }));\n    }\n  }], [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props) {\n      var _props$data$initialDa = props.data.initialData.data,\n          uuid = _props$data$initialDa.id,\n          typeString = _props$data$initialDa.type;\n\n      var _typeString$split = typeString.split(\"--\"),\n          _typeString$split2 = _slicedToArray(_typeString$split, 2),\n          type = _typeString$split2[0],\n          bundle = _typeString$split2[1];\n\n      return {\n        uuid: uuid,\n        type: type,\n        bundle: bundle\n      };\n    }\n  }]);\n\n  return EditableAddress;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n_defineProperty(EditableAddress, \"propTypes\", {\n  // eslint-disable-next-line react/forbid-prop-types\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n});\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/./src/components/EditableAddress.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: EditableAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EditableAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableAddress */ \"./src/components/EditableAddress.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EditableAddress\", function() { return _EditableAddress__WEBPACK_IMPORTED_MODULE_0__[\"EditableAddress\"]; });\n\n\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/./src/components/index.js?");

/***/ }),

/***/ "./src/editableAddressInstantiator.js":
/*!********************************************!*\
  !*** ./src/editableAddressInstantiator.js ***!
  \********************************************/
/*! exports provided: EditableAddressInstantiator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditableAddressInstantiator\", function() { return EditableAddressInstantiator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar EditableAddressInstantiator =\n/*#__PURE__*/\nfunction () {\n  function EditableAddressInstantiator(el, store) {\n    _classCallCheck(this, EditableAddressInstantiator);\n\n    this.store = store;\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(EditableAddressInstantiator, [{\n    key: \"init\",\n    value: function init() {\n      this.readDataAttributes();\n      this.render();\n    }\n  }, {\n    key: \"readDataAttributes\",\n    value: function readDataAttributes() {\n      try {\n        this.data = JSON.parse(this.el.dataset.editable);\n      } catch (e) {\n        // eslint-disable-next-line no-console\n        console.error(\"Error initializing Drupal editable field, invalid data-editable property!\", e);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      try {\n        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[\"EditableAddress\"], {\n          data: this.data,\n          store: this.store\n        }), this.el);\n      } catch (e) {\n        // eslint-disable-next-line no-console\n        console.error(\"Error initializing Drupal editable field, error rendering!\", e);\n      }\n    }\n  }]);\n\n  return EditableAddressInstantiator;\n}();\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/./src/editableAddressInstantiator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editableAddressInstantiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editableAddressInstantiator */ \"./src/editableAddressInstantiator.js\");\n // @TODO Remove EditableAddressInstantiator and put that part in here. We don't\n// need it.\n\n(function ($, window, Drupal) {\n  Drupal.behaviors.initialise_commerce_order_billing_profile_edit = {\n    attach: function attach(context) {\n      var instances = [];\n      $(context).find(\"[data-editable]\").once(\"initialise-commerce-order-billing-profile-edit\").each(function eachCommerceOrderBillingProfileEditFn() {\n        var el = $(this).get(0);\n        window.Editable_Registry.addInitHook(function (store) {\n          instances.push(new _editableAddressInstantiator__WEBPACK_IMPORTED_MODULE_0__[\"EditableAddressInstantiator\"](el, store));\n        });\n      });\n    }\n  };\n})(jQuery, window, Drupal);\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/martin/Code/demo-commerce/web/modules/contrib/commerce_admin_order_advanced/modules/commerce_order_billing_profile_edit/js/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/multi_./src/index.js?");

/***/ }),

/***/ "@drupal-editable/core":
/*!********************************!*\
  !*** external "Editable_Core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_core__;\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/external_%22Editable_Core%22?");

/***/ }),

/***/ "@drupal-editable/seven-base-components":
/*!***********************************************!*\
  !*** external "Editable_SevenBaseComponents" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__drupal_editable_seven_base_components__;\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/external_%22Editable_SevenBaseComponents%22?");

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/external_%22PropTypes%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://CommerceOrderBillingProfileEdit/external_%22ReactDOM%22?");

/***/ })

/******/ });
});