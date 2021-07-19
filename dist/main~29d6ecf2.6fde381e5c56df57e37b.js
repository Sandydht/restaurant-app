(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "+5i3":
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__("LboF");
            var content = __webpack_require__("NQEb");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "GGhB":
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__("LboF");
            var content = __webpack_require__("nx+J");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "Ih97":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "JHdy":
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__("LboF");
            var content = __webpack_require__("Ih97");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "NQEb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "Sa1i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _models_restaurantdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dv+F");
/* harmony import */ var _component_hero_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8ypq");
/* harmony import */ var _component_restaurant_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xRGu");
/* harmony import */ var _component_skeleton_hero_image_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9ItX");
/* harmony import */ var _component_skeleton_restaurant_list_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Fugq");
/* harmony import */ var _component_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hCZr");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */






var Home = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <hero-image-skeleton></hero-image-skeleton>\n      <section class=\"restaurants\" id=\"restaurants\">\n        <h2 class=\"restaurants__heading restaurants__heading__skeleton\">Explore Cafe</h2>\n        <div class=\"restaurants__body\">\n          <restaurant-list-skeleton></restaurant-list-skeleton>\n        </div>\n      </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurantListSkeleton, mainContent, restaurants;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              restaurantListSkeleton = document.querySelector('restaurant-list-skeleton');
              restaurantListSkeleton.count = 20;
              mainContent = document.getElementById('mainContent');
              _context2.prev = 3;
              _context2.next = 6;
              return _models_restaurantdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].restaurantsList();

            case 6:
              restaurants = _context2.sent;
              mainContent.innerHTML = "\n        <hero-image></hero-image>\n        <section class=\"restaurants\" id=\"restaurants\">\n          <h2 class=\"restaurants__heading\">Explore Cafe</h2>\n          <div class=\"restaurants__body\">\n            <restaurant-list></restaurant-list>\n          </div>\n        </section>\n      ";
              document.querySelector('restaurant-list').restaurants = restaurants;
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              mainContent.innerHTML = '<not-found></not-found>';
              document.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "TovS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/models/favorite-restaurant-idb.js
var favorite_restaurant_idb = __webpack_require__("zF67");

// EXTERNAL MODULE: ./src/scripts/views/component/search-favorite/search-favorite.scss
var search_favorite = __webpack_require__("JHdy");

// CONCATENATED MODULE: ./src/scripts/views/component/search-favorite/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */


var SearchFavorite = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SearchFavorite, _HTMLElement);

  var _super = _createSuper(SearchFavorite);

  function SearchFavorite() {
    _classCallCheck(this, SearchFavorite);

    return _super.apply(this, arguments);
  }

  _createClass(SearchFavorite, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "changeEvent",
    set: function set(event) {
      this._changeEvent = event;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = '<input id="query" type="text" placeholder="Search you favorite cafe">';
      this.addEventListener('change', this._changeEvent);
    }
  }]);

  return SearchFavorite;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('search-favorite', SearchFavorite);
// EXTERNAL MODULE: ./src/scripts/views/component/restaurant-list/index.js + 1 modules
var restaurant_list = __webpack_require__("xRGu");

// EXTERNAL MODULE: ./src/scripts/views/component/not-found/index.js
var not_found = __webpack_require__("hCZr");

// CONCATENATED MODULE: ./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js
function favorite_restaurant_search_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_search_view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_search_view_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_search_view_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_search_view_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */

/* eslint-disable class-methods-use-this */




var FavoriteRestaurantSearchView = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchView() {
    favorite_restaurant_search_view_classCallCheck(this, FavoriteRestaurantSearchView);
  }

  favorite_restaurant_search_view_createClass(FavoriteRestaurantSearchView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n      <section class=\"favorite__restaurants\" id=\"favoriteRestaurants\">\n        <h2 class=\"favorite-restaurants__heading\">Favorite Cafe</h2>\n        <search-favorite></search-favorite>\n        <div id=\"favoriteRestaurantsBody\" class=\"favorite-restaurants__body\"></div>\n      </section>\n    ";
    }
  }, {
    key: "runWhenUserIsSearching",
    value: function runWhenUserIsSearching(callback) {
      document.querySelector('search-favorite').changeEvent = function (event) {
        callback(event.target.value);
      };
    }
  }, {
    key: "showFavoriteRestaurants",
    value: function showFavoriteRestaurants() {
      var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var favoriteRestaurantsBody = document.getElementById('favoriteRestaurantsBody');

      if (restaurants.length) {
        favoriteRestaurantsBody.innerHTML = '<restaurant-list></restaurant-list>';
        var restaurantList = document.querySelector('restaurant-list');
        restaurantList.restaurants = restaurants;
      } else {
        favoriteRestaurantsBody.innerHTML = '<not-found></not-found>';
        var notFound = document.querySelector('not-found');
        notFound.message = 'No favorite cafe was selected';
      }

      document.getElementById('favoriteRestaurants').dispatchEvent(new Event('restaurants:updated'));
    }
  }]);

  return FavoriteRestaurantSearchView;
}();

/* harmony default export */ var favorite_restaurant_search_view = (FavoriteRestaurantSearchView);
// EXTERNAL MODULE: ./src/scripts/presenters/favorite-restaurant-search-presenter.js
var favorite_restaurant_search_presenter = __webpack_require__("Jcka");

// EXTERNAL MODULE: ./src/scripts/presenters/favorite-restaurant-show-presenter.js
var favorite_restaurant_show_presenter = __webpack_require__("xrFV");

// CONCATENATED MODULE: ./src/scripts/views/pages/favorite.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-new */




var view = new favorite_restaurant_search_view();
var Favorite = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", view.getTemplate());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              new favorite_restaurant_search_presenter["a" /* default */]({
                view: view,
                favoriteRestaurants: favorite_restaurant_idb["a" /* default */]
              });
              new favorite_restaurant_show_presenter["a" /* default */]({
                view: view,
                favoriteRestaurants: favorite_restaurant_idb["a" /* default */]
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var favorite = __webpack_exports__["a"] = (Favorite);

/***/ }),

/***/ "nx+J":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "uxxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/models/restaurantdb-source.js + 1 modules
var restaurantdb_source = __webpack_require__("dv+F");

// EXTERNAL MODULE: ./src/scripts/routes/url-parser.js
var url_parser = __webpack_require__("I98V");

// EXTERNAL MODULE: ./src/scripts/models/favorite-restaurant-idb.js
var favorite_restaurant_idb = __webpack_require__("zF67");

// EXTERNAL MODULE: ./src/scripts/presenters/like-button-presenter.js
var like_button_presenter = __webpack_require__("9v1q");

// EXTERNAL MODULE: ./src/scripts/views/component/customer-review/index.js
var customer_review = __webpack_require__("g/8N");

// EXTERNAL MODULE: ./src/scripts/views/component/review-list/index.js + 1 modules
var review_list = __webpack_require__("OUjp");

// EXTERNAL MODULE: ./src/scripts/views/component/snackbar-component/snackbar-component.scss
var snackbar_component = __webpack_require__("GGhB");

// CONCATENATED MODULE: ./src/scripts/views/component/snackbar-component/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable linebreak-style */

/* eslint-disable no-unused-expressions */

/* eslint-disable no-underscore-dangle */


var SnackbarComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SnackbarComponent, _HTMLElement);

  var _super = _createSuper(SnackbarComponent);

  function SnackbarComponent() {
    _classCallCheck(this, SnackbarComponent);

    return _super.apply(this, arguments);
  }

  _createClass(SnackbarComponent, [{
    key: "show",
    set: function set(show) {
      this._show = show;
      this.render();
    }
  }, {
    key: "error",
    set: function set(error) {
      this._error = error;
    }
  }, {
    key: "message",
    set: function set(message) {
      this._message = message;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (this._show === true) {
        if (this._error === true) {
          this.innerHTML = "\n        <div id=\"snackbar\" class=\"snackbar error\">\n          <p>".concat(this._message, "</p>\n        </div>");
        } else {
          this.innerHTML = "\n        <div id=\"snackbar\" class=\"snackbar success\">\n          <p>".concat(this._message, "</p>\n        </div>");
        }

        var snackbar = this.querySelector('#snackbar');
        snackbar.classList.toggle('show');
        setTimeout(function () {
          snackbar.classList.remove('show');
          _this._error ? snackbar.classList.remove('error') : snackbar.classList.remove('success');
        }, 3000);
      }
    }
  }]);

  return SnackbarComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('snackbar-component', SnackbarComponent);
// CONCATENATED MODULE: ./src/scripts/views/pages/added-customer-review/customer-review-view.js
function customer_review_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function customer_review_view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function customer_review_view_createClass(Constructor, protoProps, staticProps) { if (protoProps) customer_review_view_defineProperties(Constructor.prototype, protoProps); if (staticProps) customer_review_view_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable class-methods-use-this */




var CustomerReviewView = /*#__PURE__*/function () {
  function CustomerReviewView() {
    customer_review_view_classCallCheck(this, CustomerReviewView);
  }

  customer_review_view_createClass(CustomerReviewView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n      <customer-review id=\"customerReview\"></customer-review>\n      <review-list></review-list>\n      <snackbar-component></snackbar-component>\n    ";
    }
  }, {
    key: "runWhenUserIsSubmitReview",
    value: function runWhenUserIsSubmitReview(callback) {
      document.querySelector('customer-review').clickEvent = function () {
        callback();
      };
    }
  }, {
    key: "disbledSubmitReviewButton",
    value: function disbledSubmitReviewButton(disabled) {
      document.querySelector('customer-review').disabledButton = disabled;
    }
  }, {
    key: "showCustomerReview",
    value: function showCustomerReview(restaurant) {
      document.querySelector('review-list').restaurant = restaurant;
    }
  }, {
    key: "showSnackbar",
    value: function showSnackbar(_ref) {
      var show = _ref.show,
          error = _ref.error,
          message = _ref.message;
      document.querySelector('snackbar-component').show = show;
      document.querySelector('snackbar-component').error = error;
      document.querySelector('snackbar-component').message = message;
    }
  }, {
    key: "latestInput",
    get: function get() {
      var _document$querySelect = document.querySelector('customer-review'),
          value = _document$querySelect.value;

      return value;
    }
  }]);

  return CustomerReviewView;
}();

/* harmony default export */ var customer_review_view = (CustomerReviewView);
// EXTERNAL MODULE: ./src/scripts/presenters/customer-review-add-presenter.js
var customer_review_add_presenter = __webpack_require__("+P04");

// EXTERNAL MODULE: ./src/scripts/presenters/customer-review-show-presenter.js
var customer_review_show_presenter = __webpack_require__("IyPX");

// EXTERNAL MODULE: ./src/scripts/views/component/restaurant-detail/index.js
var restaurant_detail = __webpack_require__("04+M");

// EXTERNAL MODULE: ./src/scripts/views/component/restaurant-categories/index.js
var restaurant_categories = __webpack_require__("Ci7D");

// EXTERNAL MODULE: ./src/scripts/views/component/restaurant-menus/index.js
var restaurant_menus = __webpack_require__("pwfY");

// EXTERNAL MODULE: ./src/scripts/views/component/like-button/index.js
var like_button = __webpack_require__("P1R6");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/restaurant-detail-skeleton/index.js
var restaurant_detail_skeleton = __webpack_require__("GfCc");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/restaurant-categories-skeleton/index.js
var restaurant_categories_skeleton = __webpack_require__("XE2o");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/restaurant-menus-skeleton/index.js
var restaurant_menus_skeleton = __webpack_require__("1ZFx");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/customer-review-skeleton/index.js
var customer_review_skeleton = __webpack_require__("Pt87");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/review-list-skeleton/index.js
var review_list_skeleton = __webpack_require__("F3Tn");

// EXTERNAL MODULE: ./src/scripts/views/component-skeleton/review-item-skeleton/index.js
var review_item_skeleton = __webpack_require__("2x4D");

// CONCATENATED MODULE: ./src/scripts/views/pages/detail.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-new */

/* eslint-disable no-underscore-dangle */

















var Detail = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n        <section class=\"restaurant\">\n          <h2 class=\"restaurant__heading restaurant__heading__skeleton\">Detail Cafe</h2>\n          <div class=\"restaurant__body\">\n            <restaurant-detail-skeleton></restaurant-detail-skeleton>\n            <hr>\n            <restaurant-categories-skeleton></restaurant-categories-skeleton>\n            <hr>\n            <restaurant-menus-skeleton></restaurant-menus-skeleton>\n            <hr>\n            <customer-review-skeleton></customer-review-skeleton>\n            <review-list-skeleton></review-list-skeleton>\n          </div>\n        </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var mainContent, url, restaurant, view;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              document.querySelector('restaurant-categories-skeleton').count = 3;
              document.querySelector('restaurant-menus-skeleton').count = 3;
              document.querySelector('review-list-skeleton').count = 3;
              mainContent = document.getElementById('mainContent');
              _context2.prev = 4;
              url = url_parser["a" /* default */].parseActiveUrlWithoutCombiner();
              _context2.next = 8;
              return restaurantdb_source["a" /* default */].restaurantDetail(url.id);

            case 8:
              restaurant = _context2.sent;
              view = new customer_review_view();
              mainContent.innerHTML = "\n        <section class=\"restaurant\">\n          <h2 class=\"restaurant__heading\">Detail Cafe</h2>\n          <div class=\"restaurant__body\">\n            <restaurant-detail></restaurant-detail>\n            <hr>\n            <restaurant-categories></restaurant-categories>\n            <hr>\n            <restaurant-menus></restaurant-menus>\n            <hr>\n            ".concat(view.getTemplate(), "\n          </div>\n        </section>\n        <like-button></like-button>\n      ");
              document.querySelector('restaurant-detail').restaurant = restaurant;
              document.querySelector('restaurant-categories').restaurant = restaurant;
              document.querySelector('restaurant-menus').restaurant = restaurant;
              new customer_review_add_presenter["a" /* default */]({
                view: view,
                restaurant: restaurant,
                restaurantDbSource: restaurantdb_source["a" /* default */]
              });
              new customer_review_show_presenter["a" /* default */]({
                view: view,
                restaurant: restaurant,
                restaurantDbSource: restaurantdb_source["a" /* default */]
              });
              _context2.next = 18;
              return like_button_presenter["a" /* default */].init({
                likeButtonContainer: document.querySelector('like-button'),
                favoriteRestaurant: favorite_restaurant_idb["a" /* default */],
                restaurant: restaurant
              });

            case 18:
              _context2.next = 24;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](4);
              mainContent.innerHTML = '<not-found></not-found>';
              document.querySelector('not-found').message = 'Failed to load data \nPlease check your internet connection';

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 20]]);
    }))();
  }
};
/* harmony default export */ var detail = __webpack_exports__["a"] = (Detail);

/***/ })

}]);