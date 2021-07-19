(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "+P04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */
var CustomerReviewAddPresenter = /*#__PURE__*/function () {
  function CustomerReviewAddPresenter(_ref) {
    var view = _ref.view,
        restaurant = _ref.restaurant,
        restaurantDbSource = _ref.restaurantDbSource;

    _classCallCheck(this, CustomerReviewAddPresenter);

    this._view = view;
    this._restaurant = restaurant;
    this._restaurantDbSource = restaurantDbSource;

    this._listenToSubmitReviewRequestByUser();
  }

  _createClass(CustomerReviewAddPresenter, [{
    key: "_listenToSubmitReviewRequestByUser",
    value: function _listenToSubmitReviewRequestByUser() {
      var _this = this;

      this._view.runWhenUserIsSubmitReview(function () {
        _this._addCustomerReview(_this._view.latestInput);
      });
    }
  }, {
    key: "_addCustomerReview",
    value: function () {
      var _addCustomerReview2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latestInput) {
        var restaurant;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._view.disbledSubmitReviewButton(true);

                this._latestInput = {
                  id: this._restaurant.id,
                  name: latestInput.name,
                  review: latestInput.review
                };
                _context.prev = 2;
                _context.next = 5;
                return this._restaurantDbSource.addCustomerReview(this._latestInput);

              case 5:
                restaurant = _context.sent;

                if (!(restaurant.error === false)) {
                  _context.next = 12;
                  break;
                }

                this._view.showSnackbar({
                  show: true,
                  error: false,
                  message: restaurant.message
                });

                this._showCustomerReview(restaurant);

                this._view.disbledSubmitReviewButton(false);

                _context.next = 18;
                break;

              case 12:
                this._view.showSnackbar({
                  show: true,
                  error: true,
                  message: restaurant.message
                });

                _context.next = 15;
                return this._restaurantDbSource.restaurantDetail(this._restaurant.id);

              case 15:
                restaurant = _context.sent;

                this._showCustomerReview(restaurant);

                this._view.disbledSubmitReviewButton(false);

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](2);

                this._view.showSnackbar({
                  show: true,
                  error: true,
                  message: 'Failed to send your review. Please check your internet connection'
                });

                this._view.disbledSubmitReviewButton(false);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 20]]);
      }));

      function _addCustomerReview(_x) {
        return _addCustomerReview2.apply(this, arguments);
      }

      return _addCustomerReview;
    }()
  }, {
    key: "_showCustomerReview",
    value: function _showCustomerReview(restaurant) {
      this._view.showCustomerReview(restaurant);
    }
  }, {
    key: "latestInput",
    get: function get() {
      return this._latestInput;
    }
  }]);

  return CustomerReviewAddPresenter;
}();

/* harmony default export */ __webpack_exports__["a"] = (CustomerReviewAddPresenter);

/***/ }),

/***/ "9v1q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */
var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurant, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurant = _ref.favoriteRestaurant, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._favoriteRestaurant = favoriteRestaurant;
              _this._restaurant = restaurant;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurant.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.isRestaurantExist = false;
    this._likeButtonContainer.clickEvent = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurant.putRestaurant(_this4._restaurant);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.isRestaurantExist = true;
    this._likeButtonContainer.clickEvent = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurant.deleteRestaurant(_this5._restaurant.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),

/***/ "FZBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("ls82");

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("+5i3");

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__("s+lh");

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__("v1EE");

// EXTERNAL MODULE: ./src/scripts/views/app.js
var app = __webpack_require__("CCrt");

// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__("n5Vj");
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */


var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            console.log('Service worker not supported in this browser');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// EXTERNAL MODULE: ./src/scripts/views/component/app-drawer/index.js
var app_drawer = __webpack_require__("tchV");

// EXTERNAL MODULE: ./src/scripts/views/component/footer-component/index.js
var footer_component = __webpack_require__("3hCY");

// CONCATENATED MODULE: ./src/scripts/index.js
/* eslint-disable linebreak-style */








var mainContent = document.getElementById('mainContent');
var scripts_app = new app["a" /* default */]({
  content: mainContent
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
});

/***/ }),

/***/ "I98V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLocaleLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLocaleLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),

/***/ "IyPX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */
var CustomerReviewShowPresenter = /*#__PURE__*/function () {
  function CustomerReviewShowPresenter(_ref) {
    var view = _ref.view,
        restaurant = _ref.restaurant,
        restaurantDbSource = _ref.restaurantDbSource;

    _classCallCheck(this, CustomerReviewShowPresenter);

    this._view = view;
    this._restaurant = restaurant;
    this._restaurantDbSource = restaurantDbSource;

    this._showCustomerReview();
  }

  _createClass(CustomerReviewShowPresenter, [{
    key: "_showCustomerReview",
    value: function () {
      var _showCustomerReview2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return this._restaurantDbSource.restaurantDetail(this._restaurant.id);

              case 3:
                _context.t1 = _context.sent;

                _context.t0._displayCustomerReview.call(_context.t0, _context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _showCustomerReview() {
        return _showCustomerReview2.apply(this, arguments);
      }

      return _showCustomerReview;
    }()
  }, {
    key: "_displayCustomerReview",
    value: function _displayCustomerReview(restaurant) {
      this._view.showCustomerReview(restaurant);
    }
  }]);

  return CustomerReviewShowPresenter;
}();

/* harmony default export */ __webpack_exports__["a"] = (CustomerReviewShowPresenter);

/***/ }),

/***/ "Jcka":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */
var FavoriteRestaurantSearchPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchPresenter(_ref) {
    var view = _ref.view,
        favoriteRestaurants = _ref.favoriteRestaurants;

    _classCallCheck(this, FavoriteRestaurantSearchPresenter);

    this._view = view;

    this._listenToSearchRequestByUser();

    this._favoriteRestaurants = favoriteRestaurants;
  }

  _createClass(FavoriteRestaurantSearchPresenter, [{
    key: "_listenToSearchRequestByUser",
    value: function _listenToSearchRequestByUser() {
      var _this = this;

      this._view.runWhenUserIsSearching(function (latestQuery) {
        _this._searchRestaurants(latestQuery);
      });
    }
  }, {
    key: "_searchRestaurants",
    value: function () {
      var _searchRestaurants2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latestQuery) {
        var foundRestaurants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._latestQuery = latestQuery.trim();

                if (!(this.latestQuery.length > 0)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this._favoriteRestaurants.searchRestaurants(this.latestQuery);

              case 4:
                foundRestaurants = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this._favoriteRestaurants.getAllRestaurants();

              case 9:
                foundRestaurants = _context.sent;

              case 10:
                this._showFoundRestaurants(foundRestaurants);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _searchRestaurants(_x) {
        return _searchRestaurants2.apply(this, arguments);
      }

      return _searchRestaurants;
    }()
  }, {
    key: "_showFoundRestaurants",
    value: function _showFoundRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "latestQuery",
    get: function get() {
      return this._latestQuery;
    }
  }]);

  return FavoriteRestaurantSearchPresenter;
}();

/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantSearchPresenter);

/***/ }),

/***/ "dv+F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__("jcm9");

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js
/* eslint-disable linebreak-style */

var API_ENDPOINT = {
  HOME: "".concat(config["a" /* default */].BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(config["a" /* default */].BASE_URL, "detail/").concat(id);
  },
  ADD_CUSTOMER_REVIEW: "".concat(config["a" /* default */].BASE_URL, "review")
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/models/restaurantdb-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable class-methods-use-this */



var restaurantdb_source_RestaurantDbSource = /*#__PURE__*/function () {
  function RestaurantDbSource() {
    _classCallCheck(this, RestaurantDbSource);
  }

  _createClass(RestaurantDbSource, null, [{
    key: "restaurantsList",
    value: function () {
      var _restaurantsList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.HOME);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function restaurantsList() {
        return _restaurantsList.apply(this, arguments);
      }

      return restaurantsList;
    }()
  }, {
    key: "restaurantDetail",
    value: function () {
      var _restaurantDetail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.DETAIL(id));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson.restaurant);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function restaurantDetail(_x) {
        return _restaurantDetail.apply(this, arguments);
      }

      return restaurantDetail;
    }()
  }, {
    key: "addCustomerReview",
    value: function () {
      var _addCustomerReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(latestInput) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(api_endpoint.ADD_CUSTOMER_REVIEW, {
                  method: 'POST',
                  headers: {
                    'X-Auth-Token': config["a" /* default */].API_KEY,
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(latestInput)
                });

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                responseJson = _context3.sent;
                return _context3.abrupt("return", responseJson);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addCustomerReview(_x2) {
        return _addCustomerReview.apply(this, arguments);
      }

      return addCustomerReview;
    }()
  }]);

  return RestaurantDbSource;
}();

/* harmony default export */ var restaurantdb_source = __webpack_exports__["a"] = (restaurantdb_source_RestaurantDbSource);

/***/ }),

/***/ "jcm9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable linebreak-style */
var CONFIG = {
  API_KEY: 12345,
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  CACHE_NAME: "Cafetaria-".concat(new Date().toISOString()),
  DATABASE_NAME: 'cafetaria-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),

/***/ "mLM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Sa1i");
/* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TovS");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uxxR");
/* eslint-disable linebreak-style */



var routes = {
  '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/home': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/favorite': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "xrFV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */

/* eslint-disable no-underscore-dangle */
var FavoriteRestaurantShowPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantShowPresenter(_ref) {
    var view = _ref.view,
        favoriteRestaurants = _ref.favoriteRestaurants;

    _classCallCheck(this, FavoriteRestaurantShowPresenter);

    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  _createClass(FavoriteRestaurantShowPresenter, [{
    key: "_showFavoriteRestaurants",
    value: function () {
      var _showFavoriteRestaurants2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return this._favoriteRestaurants.getAllRestaurants();

              case 3:
                _context.t1 = _context.sent;

                _context.t0._displayRestaurants.call(_context.t0, _context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _showFavoriteRestaurants() {
        return _showFavoriteRestaurants2.apply(this, arguments);
      }

      return _showFavoriteRestaurants;
    }()
  }, {
    key: "_displayRestaurants",
    value: function _displayRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }]);

  return FavoriteRestaurantShowPresenter;
}();

/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantShowPresenter);

/***/ }),

/***/ "zF67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("P0+2");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jcm9");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable linebreak-style */

/* eslint-disable consistent-return */

/* eslint-disable no-prototype-builtins */


var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (restaurant.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  searchRestaurants: function searchRestaurants(query) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.getAllRestaurants();

            case 2:
              return _context5.abrupt("return", _context5.sent.filter(function (restaurant) {
                var loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
                var jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
                var loweredCaseQuery = query.toLowerCase();
                var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
                return jammedRestaurantName.indexOf(jammedQuery) !== -1;
              }));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantIdb);

/***/ })

}]);