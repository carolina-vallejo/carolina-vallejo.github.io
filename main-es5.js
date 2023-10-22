function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-aside></app-aside> <app-list></app-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article/article.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article/article.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"links\">\n  <a\n    class=\"link\"\n    *ngFor=\"let link of project.links\"\n    [href]=\"link.href\"\n    target=\"_blank\"\n    >{{ link.title }}</a\n  >\n</div>\n\n<div class=\"meta\">\n  <div class=\"year\">\n    {{ project.year }}\n  </div>\n  <span class=\"separator\">|</span>\n  <div class=\"category\" [innerHtml]=\"project.category\"></div>\n</div>\n\n<div class=\"title\" [innerHtml]=\"project.title\"></div>\n\n<div class=\"content\">\n  <div\n    class=\"image\"\n    [ngStyle]=\"{\n      'background-image':\n        'url(' + '../../../assets/slides/' + project.key_image + ')'\n    }\"\n  ></div>\n  <div class=\"description\" [innerHtml]=\"project.description\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aside/aside.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/aside/aside.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAsideAsideComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"brand\">\n  <div class=\"name\">\n    Carolina <br />\n    Vallejo <br />\n    Martínez\n  </div>\n  <div class=\"title\">Frontend Engineer</div>\n  <div class=\"line\"></div>\n</div>\n\n<div class=\"sentence\">\n  I am a Frontend engineer happy to build robust and scalable software using the\n  best development technologies and working effectively in cross-functional\n  teams.\n</div>\n\n<!-- LOGOS -->\n\n<div class=\"logos\">\n  <a\n    href=\"https://github.com/carolina-vallejo\"\n    class=\"social github\"\n    target=\"_blank\"\n  ></a>\n  <a\n    href=\"https://www.linkedin.com/in/carolina-v-76861145/\"\n    class=\"social linkedin\"\n    target=\"_blank\"\n  ></a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-article *ngFor=\"let project of projects\" [project]=\"project\"></app-article>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>nav works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    Colors\n*/\n/*\n    fonts\n*/\n/*\n    Media query\n*/\n/*\n    Spacing\n*/\n/*\n    Globals\n*/\n:host {\n  display: flex;\n  width: 90%;\n  max-width: 70em;\n  margin: 0 auto;\n}\napp-aside {\n  padding: 1em;\n  width: 20%;\n  flex: 0 0 auto;\n}\napp-list {\n  padding: 1em 1em 1em 5em;\n}\n@media only screen and (max-width: 900px) {\n  :host {\n    flex-wrap: wrap;\n  }\n\n  app-aside {\n    width: 100%;\n    flex: 0 0 auto;\n  }\n\n  app-list {\n    width: 100%;\n    flex: 0 0 auto;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJvbGluYS9Eb2N1bWVudHMvQ09ERS9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2Nhcm9saW5hL0RvY3VtZW50cy9DT0RFL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FBUUE7O0NBQUE7QUFVQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUMzQkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDY0Y7QURYQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2NGO0FEWEE7RUFDRSx3QkFBQTtBQ2NGO0FEWEE7RUFDRTtJQUNFLGVBQUE7RUNjRjs7RURaQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VDZUY7O0VEWkE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUNlRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb2xvcnNcbiovXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMDA5NGZmO1xuJGdyYXk6ICM1YjcwOGI7XG4kZ3JheS1icmlnaHQ6IHJnYmEoJGdyYXksIDAuNSk7XG4kZ3JheS1saWdodDogI2RjZTVlZjtcbiRibGFjazogIzAyMDgxNDtcbi8qXG4gICAgZm9udHNcbiovXG5cbiR0aXRsZTogMmVtO1xuJHN1Yi10aXRsZTogMS4zZW07XG4kdGV4dDogMC45ZW07XG5cbiRsYWJlbEZvbnQ6IFwiUm9ib3RvIE1vbm9cIjtcblxuLypcbiAgICBNZWRpYSBxdWVyeVxuKi9cbiRtZWRpYS1xdWVyeS1pcGFkOiA5MDBweDtcbiRtZWRpYS1xdWVyeS1tb2JpbGU6IDYwMHB4O1xuXG4vKlxuICAgIFNwYWNpbmdcbiovXG4kc3BhY2VyOiA0cHg7XG5cbi8qXG4gICAgR2xvYmFsc1xuKi9cbiRtYXJnaW4tdG9wOiA2MHB4O1xuIiwiQGltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA3MGVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYXBwLWFzaWRlIHtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMjAlO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuYXBwLWxpc3Qge1xuICBwYWRkaW5nOiAxZW0gMWVtIDFlbSA1ZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLXF1ZXJ5LWlwYWQpIHtcbiAgOmhvc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBhcHAtYXNpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG5cbiAgYXBwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbiIsIi8qXG4gICAgQ29sb3JzXG4qL1xuLypcbiAgICBmb250c1xuKi9cbi8qXG4gICAgTWVkaWEgcXVlcnlcbiovXG4vKlxuICAgIFNwYWNpbmdcbiovXG4vKlxuICAgIEdsb2JhbHNcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNzBlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmFwcC1hc2lkZSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDIwJTtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbmFwcC1saXN0IHtcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gNWVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICBhcHAtYXNpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG5cbiAgYXBwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/aside/aside.component */
    "./src/app/components/aside/aside.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/article/article.component */
    "./src/app/components/article/article.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/article/article.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/article/article.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticleArticleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    Colors\n*/\n/*\n    fonts\n*/\n/*\n    Media query\n*/\n/*\n    Spacing\n*/\n/*\n    Globals\n*/\n:host {\n  display: block;\n  border: 1px solid #adb8c557;\n  padding: 33px;\n  border-bottom-width: 2px;\n  margin-bottom: 30px;\n}\n.meta {\n  display: flex;\n  font-family: \"Roboto Mono\";\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.separator {\n  color: #0094ff;\n  margin: 0 10px;\n  font-weight: 700;\n}\n.title {\n  font-size: 1.7em;\n  line-height: 1.25;\n  color: #020814;\n  margin-bottom: 20px;\n}\n.links {\n  margin-top: 14px;\n  float: right;\n}\n.link {\n  text-decoration: none;\n  display: inline-block;\n  font-size: 0.75em;\n  font-weight: 700;\n  border: 1px solid rgba(0, 148, 255, 0.3);\n  padding: 7px;\n  border-radius: 5px;\n  line-height: 14px;\n  margin: 5px;\n  text-decoration: none;\n  color: #0094ff;\n  text-transform: uppercase;\n  transition: all 200ms ease;\n}\n.link:hover {\n  background: rgba(0, 148, 255, 0.1);\n}\n.image {\n  flex: 0 0 auto;\n  width: 40%;\n  margin-right: 30px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center 0;\n  border: 1px solid #dce5ef;\n  border-radius: 6px;\n  min-height: 200px;\n}\n.content {\n  display: flex;\n}\n@media only screen and (max-width: 900px) {\n  .links {\n    margin-top: 0;\n    margin-left: -5px;\n    float: none;\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  :host {\n    padding: 20px;\n    padding-top: 220px;\n    position: relative;\n    border-radius: 6px 6px 0 0;\n  }\n\n  .image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 200px;\n    width: 100%;\n    border-radius: 6px 6px 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJvbGluYS9Eb2N1bWVudHMvQ09ERS9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2Nhcm9saW5hL0RvY3VtZW50cy9DT0RFL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQVFBOztDQUFBO0FBVUE7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FDM0JBO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNjRjtBRFpBO0VBQ0UsYUFBQTtFQUNBLDBCREtVO0VDSlYsZUFBQTtFQUNBLHlCQUFBO0FDZUY7QURaQTtFQUNFLGNEZGdCO0VDZWhCLGNBQUE7RUFDQSxnQkFBQTtBQ2VGO0FEWkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0RsQk07RUNtQk4sbUJBQUE7QUNlRjtBRFpBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDZUY7QURaQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNEMUNnQjtFQzJDaEIseUJBQUE7RUFDQSwwQkFBQTtBQ2VGO0FEZEU7RUFDRSxrQ0FBQTtBQ2dCSjtBRFpBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2NGO0FEWEE7RUFDRSxhQUFBO0FDY0Y7QURaQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDZUY7QUFDRjtBRGJBO0VBSUU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0VDWUY7O0VEVkE7SUFDRSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsYUFiYTtJQWNiLFdBQUE7SUFDQSwwQkFBQTtFQ2FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29sb3JzXG4qL1xuJGhpZ2hsaWdodC1jb2xvcjogIzAwOTRmZjtcbiRncmF5OiAjNWI3MDhiO1xuJGdyYXktYnJpZ2h0OiByZ2JhKCRncmF5LCAwLjUpO1xuJGdyYXktbGlnaHQ6ICNkY2U1ZWY7XG4kYmxhY2s6ICMwMjA4MTQ7XG4vKlxuICAgIGZvbnRzXG4qL1xuXG4kdGl0bGU6IDJlbTtcbiRzdWItdGl0bGU6IDEuM2VtO1xuJHRleHQ6IDAuOWVtO1xuXG4kbGFiZWxGb250OiBcIlJvYm90byBNb25vXCI7XG5cbi8qXG4gICAgTWVkaWEgcXVlcnlcbiovXG4kbWVkaWEtcXVlcnktaXBhZDogOTAwcHg7XG4kbWVkaWEtcXVlcnktbW9iaWxlOiA2MDBweDtcblxuLypcbiAgICBTcGFjaW5nXG4qL1xuJHNwYWNlcjogNHB4O1xuXG4vKlxuICAgIEdsb2JhbHNcbiovXG4kbWFyZ2luLXRvcDogNjBweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiOGM1NTc7XG4gIHBhZGRpbmc6IDMzcHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6ICRsYWJlbEZvbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiAkYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5saW5rcyB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGhpZ2hsaWdodC1jb2xvciwgMC4zKTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGhpZ2hsaWdodC1jb2xvciwgMC4xKTtcbiAgfVxufVxuXG4uaW1hZ2Uge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDQwJTtcbiAgLy8gYmFja2dyb3VuZDogJGhpZ2hsaWdodC1jb2xvcjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktbGlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLXF1ZXJ5LWlwYWQpIHtcbiAgLmxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGlhLXF1ZXJ5LW1vYmlsZSkge1xuICAkaW1hZ2UtaGVpZ2h0OiAyMDBweDtcbiAgJG1hcmdpbjogMjBweDtcblxuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogJGltYWdlLWhlaWdodCArICRtYXJnaW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogJGltYWdlLWhlaWdodDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcbiAgfVxufVxuIiwiLypcbiAgICBDb2xvcnNcbiovXG4vKlxuICAgIGZvbnRzXG4qL1xuLypcbiAgICBNZWRpYSBxdWVyeVxuKi9cbi8qXG4gICAgU3BhY2luZ1xuKi9cbi8qXG4gICAgR2xvYmFsc1xuKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGI4YzU1NztcbiAgcGFkZGluZzogMzNweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNb25vXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGNvbG9yOiAjMDA5NGZmO1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiAjMDIwODE0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGlua3Mge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE0OCwgMjU1LCAwLjMpO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA5NGZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbn1cbi5saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNDgsIDI1NSwgMC4xKTtcbn1cblxuLmltYWdlIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U1ZWY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubGlua3Mge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/article/article.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/article/article.component.ts ***!
    \*********************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppComponentsArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent() {
        _classCallCheck(this, ArticleComponent);
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArticleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArticleComponent.prototype, "project", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-article",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article/article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article.component.scss */
      "./src/app/components/article/article.component.scss"))["default"]]
    })], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/components/aside/aside.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/aside/aside.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAsideAsideComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    Colors\n*/\n/*\n    fonts\n*/\n/*\n    Media query\n*/\n/*\n    Spacing\n*/\n/*\n    Globals\n*/\n:host {\n  display: block;\n}\n.brand {\n  margin: 60px 0 36px;\n  padding: 8px 0;\n  position: relative;\n}\n.brand::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 110%;\n  height: 110%;\n  background: #0094ff;\n  z-index: -1;\n}\n.name {\n  font-size: 2em;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n}\n.title {\n  color: white;\n  font-size: 1.3em;\n  line-height: 1.25;\n  margin: 12px 0;\n}\n.line {\n  display: block;\n  content: \"\";\n  width: 40px;\n  height: 4px;\n  border-radius: 4px;\n  background: white;\n  margin-bottom: 36px;\n}\n.sentence {\n  color: rgba(91, 112, 139, 0.5);\n}\n.place {\n  margin: 2vh 0 0 0;\n  font-size: 0.9em;\n}\n/*\n\n    SOCIALS\n*/\n.logos {\n  margin-top: 10vh;\n  margin-left: -6px;\n}\n.social {\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0.5;\n  cursor: pointer;\n  display: block;\n  transition: all 200ms ease;\n}\n.social:hover {\n  opacity: 1;\n}\n.github {\n  background-image: url('github.svg');\n  background-position: -71px 0;\n}\n.linkedin {\n  background-image: url('linkedin.svg');\n}\n.vimeo {\n  background-image: url('vimeo.svg');\n  background-position: -36px 0;\n}\n@media only screen and (max-width: 900px) {\n  .title {\n    margin: 2vh 0;\n  }\n\n  .logos {\n    margin-top: 2vh;\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJvbGluYS9Eb2N1bWVudHMvQ09ERS9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2Nhcm9saW5hL0RvY3VtZW50cy9DT0RFL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFRQTs7Q0FBQTtBQVVBOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQzNCQTtFQUNFLGNBQUE7QUNjRjtBRFhBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRGJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkRmYztFQ2dCZCxXQUFBO0FDZUo7QURYQTtFQUNFLGNEWk07RUNhTixnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDY0Y7QURYQTtFQUNFLFlBQUE7RUFDQSxnQkRuQlU7RUNvQlYsaUJBQUE7RUFDQSxjQUFBO0FDY0Y7QURWQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBTFk7RUFNWixrQkFOWTtFQU9aLGlCQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFZBO0VBQ0UsOEJENUNZO0FFeURkO0FEVkE7RUFDRSxpQkFBQTtFQUNBLGdCRHhDSztBRXFEUDtBRFZBOzs7Q0FBQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ2NGO0FEYkU7RUFDRSxVQUFBO0FDZUo7QURYQTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7QUNjRjtBRFhBO0VBQ0UscUNBQUE7QUNjRjtBRFhBO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtBQ2NGO0FEWEE7RUFDRTtJQUNFLGFBQUE7RUNjRjs7RURYQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvbG9yc1xuKi9cbiRoaWdobGlnaHQtY29sb3I6ICMwMDk0ZmY7XG4kZ3JheTogIzViNzA4YjtcbiRncmF5LWJyaWdodDogcmdiYSgkZ3JheSwgMC41KTtcbiRncmF5LWxpZ2h0OiAjZGNlNWVmO1xuJGJsYWNrOiAjMDIwODE0O1xuLypcbiAgICBmb250c1xuKi9cblxuJHRpdGxlOiAyZW07XG4kc3ViLXRpdGxlOiAxLjNlbTtcbiR0ZXh0OiAwLjllbTtcblxuJGxhYmVsRm9udDogXCJSb2JvdG8gTW9ub1wiO1xuXG4vKlxuICAgIE1lZGlhIHF1ZXJ5XG4qL1xuJG1lZGlhLXF1ZXJ5LWlwYWQ6IDkwMHB4O1xuJG1lZGlhLXF1ZXJ5LW1vYmlsZTogNjAwcHg7XG5cbi8qXG4gICAgU3BhY2luZ1xuKi9cbiRzcGFjZXI6IDRweDtcblxuLypcbiAgICBHbG9iYWxzXG4qL1xuJG1hcmdpbi10b3A6IDYwcHg7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJyYW5kIHtcbiAgbWFyZ2luOiAkbWFyZ2luLXRvcCAwICRzcGFjZXIgKiA5O1xuICBwYWRkaW5nOiAkc3BhY2VyICogMiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMTAlO1xuICAgIGhlaWdodDogMTEwJTtcbiAgICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0LWNvbG9yO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAkdGl0bGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAkc3ViLXRpdGxlO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luOiAkc3BhY2VyICogMyAwO1xufVxuXG4kbGluZS1oZWlnaHQ6IDRweDtcbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJGxpbmUtaGVpZ2h0O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlciAqIDk7XG59XG5cbi5zZW50ZW5jZSB7XG4gIGNvbG9yOiAkZ3JheS1icmlnaHQ7XG59XG5cbi5wbGFjZSB7XG4gIG1hcmdpbjogMnZoIDAgMCAwO1xuICBmb250LXNpemU6ICR0ZXh0O1xufVxuXG4vKlxuXG4gICAgU09DSUFMU1xuKi9cbi5sb2dvcyB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xufVxuLnNvY2lhbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmdpdGh1YiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcxcHggMDtcbn1cblxuLmxpbmtlZGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9saW5rZWRpbi5zdmdcIik7XG59XG5cbi52aW1lbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmltZW8uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzZweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpYS1xdWVyeS1pcGFkKSB7XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiAydmggMDtcbiAgfVxuXG4gIC5sb2dvcyB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbiIsIi8qXG4gICAgQ29sb3JzXG4qL1xuLypcbiAgICBmb250c1xuKi9cbi8qXG4gICAgTWVkaWEgcXVlcnlcbiovXG4vKlxuICAgIFNwYWNpbmdcbiovXG4vKlxuICAgIEdsb2JhbHNcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnJhbmQge1xuICBtYXJnaW46IDYwcHggMCAzNnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJyYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAxMTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA5NGZmO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cblxuLnNlbnRlbmNlIHtcbiAgY29sb3I6IHJnYmEoOTEsIDExMiwgMTM5LCAwLjUpO1xufVxuXG4ucGxhY2Uge1xuICBtYXJnaW46IDJ2aCAwIDAgMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLypcblxuICAgIFNPQ0lBTFNcbiovXG4ubG9nb3Mge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cblxuLnNvY2lhbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG59XG4uc29jaWFsOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmdpdGh1YiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcxcHggMDtcbn1cblxuLmxpbmtlZGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9saW5rZWRpbi5zdmdcIik7XG59XG5cbi52aW1lbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmltZW8uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzZweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luOiAydmggMDtcbiAgfVxuXG4gIC5sb2dvcyB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/aside/aside.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/aside/aside.component.ts ***!
    \*****************************************************/

  /*! exports provided: AsideComponent */

  /***/
  function srcAppComponentsAsideAsideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideComponent", function () {
      return AsideComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AsideComponent = /*#__PURE__*/function () {
      function AsideComponent() {
        _classCallCheck(this, AsideComponent);
      }

      _createClass(AsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AsideComponent;
    }();

    AsideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aside',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aside.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/aside/aside.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aside.component.scss */
      "./src/app/components/aside/aside.component.scss"))["default"]]
    })], AsideComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/list/list.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/list/list.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    Colors\n*/\n/*\n    fonts\n*/\n/*\n    Media query\n*/\n/*\n    Spacing\n*/\n/*\n    Globals\n*/\n:host {\n  display: block;\n  margin-top: 6vh;\n}\n@media only screen and (max-width: 900px) {\n  :host {\n    margin-top: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJvbGluYS9Eb2N1bWVudHMvQ09ERS9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2Nhcm9saW5hL0RvY3VtZW50cy9DT0RFL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQVFBOztDQUFBO0FBVUE7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FDM0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNjRjtBRFhBO0VBQ0U7SUFDRSxlQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb2xvcnNcbiovXG4kaGlnaGxpZ2h0LWNvbG9yOiAjMDA5NGZmO1xuJGdyYXk6ICM1YjcwOGI7XG4kZ3JheS1icmlnaHQ6IHJnYmEoJGdyYXksIDAuNSk7XG4kZ3JheS1saWdodDogI2RjZTVlZjtcbiRibGFjazogIzAyMDgxNDtcbi8qXG4gICAgZm9udHNcbiovXG5cbiR0aXRsZTogMmVtO1xuJHN1Yi10aXRsZTogMS4zZW07XG4kdGV4dDogMC45ZW07XG5cbiRsYWJlbEZvbnQ6IFwiUm9ib3RvIE1vbm9cIjtcblxuLypcbiAgICBNZWRpYSBxdWVyeVxuKi9cbiRtZWRpYS1xdWVyeS1pcGFkOiA5MDBweDtcbiRtZWRpYS1xdWVyeS1tb2JpbGU6IDYwMHB4O1xuXG4vKlxuICAgIFNwYWNpbmdcbiovXG4kc3BhY2VyOiA0cHg7XG5cbi8qXG4gICAgR2xvYmFsc1xuKi9cbiRtYXJnaW4tdG9wOiA2MHB4O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaWEtcXVlcnktaXBhZCkge1xuICA6aG9zdCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICB9XG59XG4iLCIvKlxuICAgIENvbG9yc1xuKi9cbi8qXG4gICAgZm9udHNcbiovXG4vKlxuICAgIE1lZGlhIHF1ZXJ5XG4qL1xuLypcbiAgICBTcGFjaW5nXG4qL1xuLypcbiAgICBHbG9iYWxzXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNnZoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/model */
    "./src/app/models/model.ts");
    /* harmony import */


    var src_assets_data_data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/data/data_portfolio */
    "./src/assets/data/data_portfolio.ts");

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent() {
        _classCallCheck(this, ListComponent);
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects = src_assets_data_data_portfolio__WEBPACK_IMPORTED_MODULE_3__["portfolioData"].filter(function (p) {
            return p.status === src_app_models_model__WEBPACK_IMPORTED_MODULE_2__["STATUS"].PUBLISHED;
          });
          this.projects.reverse();
        }
      }]);

      return ListComponent;
    }();

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/components/list/list.component.scss"))["default"]]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/nav/nav.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.scss */
      "./src/app/components/nav/nav.component.scss"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/models/model.ts":
  /*!*********************************!*\
    !*** ./src/app/models/model.ts ***!
    \*********************************/

  /*! exports provided: STATUS */

  /***/
  function srcAppModelsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return STATUS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var STATUS;

    (function (STATUS) {
      STATUS["ARCHIVED"] = "archived";
      STATUS["PUBLISHED"] = "published";
    })(STATUS || (STATUS = {}));
    /***/

  },

  /***/
  "./src/assets/data/data_portfolio.ts":
  /*!*******************************************!*\
    !*** ./src/assets/data/data_portfolio.ts ***!
    \*******************************************/

  /*! exports provided: portfolioData */

  /***/
  function srcAssetsDataData_portfolioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "portfolioData", function () {
      return portfolioData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var portfolioData = [{
      key_image: "1_3.jpg",
      status: "published",
      category: "EXPERIMENTAL MULTIMEDIA",
      title: "Paint to music",
      year: "2013-2014",
      spec: "Aplicación multimedia. Processing",
      description: "Paint to Music is a sound application created in Processing where you can make music simply by drawing in a graphical interface. This project has been part of my Master thesis in Visual Arts, where I researched on ludic HCI.",
      color: "#f5c300",
      links: [{
        title: "Video 1st Version",
        href: "https://player.vimeo.com/video/73393600"
      }, {
        title: "Video 2nd Version",
        href: "https://player.vimeo.com/video/111230020"
      }]
    }, {
      key_image: "27_1.jpg",
      status: "archived",
      category: "WEB DEVELOPMENT",
      title: "Paper. Worpress theme for readers",
      year: "2016",
      spec: "Web design & Front-end development",
      description: "This project includes the visual and interaction design of a theme for Wordpress optimized for reading. Development in PHP, CSS3 and Jquery.<br><br> This responsive interface allows the user to adjust the font size of the text.",
      color: "#4a4a4a",
      links: [{
        title: "Github",
        href: "https://github.com/carolina-vallejo/paper_wordpress_theme"
      }]
    }, {
      key_image: "30_1.jpg",
      status: "archived",
      category: "WEB DEVELOPMENT",
      title: "Pathvizator",
      year: "2016",
      spec: "Data visualisation tool to create multiple circular charts",
      description: "Pathvizator is an online tool to create multiple circular charts in SVG and generate the necessary code to insert it in any webpage.",
      color: "#4a4a4a",
      links: [{
        title: "Gihub",
        href: "https://github.com/carolina-vallejo/pathvizator"
      }, {
        title: "Demo",
        href: "https://carolina-vallejo.github.io/pathvizator/"
      }]
    }, {
      key_image: "35_1.jpg",
      status: "published",
      category: "WEB DEVELOPMENT",
      title: "Biomech Consulting",
      year: "2016",
      spec: "Front-end development",
      description: "Front-end development for the Biomech Consulting website. Theme development in Wordpress, layout in PHP and SASS, functionalities, animations and interaction in JQUERY and JAVASCRIPT.<br><br>This project has been made for <i>MetricSalad Servicios y tecnologías de la información</i>",
      color: "#4a4a4a",
      links: [{
        title: "Website",
        href: "http://biomechconsulting.com"
      }]
    }, {
      key_image: "42_1.jpg",
      category: "WEB DEVELOPMENT",
      status: "published",
      title: "AMBERG GROUP",
      year: "2017",
      spec: "Front-end development & Interactive map",
      description: "Front-end development and Interactive map for the Engineering and technology company Amberg Group.<br><br>Technical details: Map visualisation with Leaflet.<br><br>This project has been made for <i>MetricSalad Servicios y tecnologías de la información</i>",
      color: "#4a4a4a",
      links: [{
        title: "Website",
        href: "https://amberggroup.com/"
      }]
    }, {
      key_image: "45_1.jpg",
      status: "published",
      category: "WEB DEVELOPMENT",
      title: "No Longer Empty, NY.",
      year: "2018",
      spec: "Front-end development",
      description: "I participated in the frontend development of the No Longer Empty foundation website. My role in this project was HTML/CSS and all the interactive functionalities in Javascript.<br><br>This project has been made for <i>MetricSalad Servicios y tecnologías de la información</i>",
      color: "#4a4a4a",
      links: [{
        title: "Website",
        href: "https://www.nolongerempty.org/"
      }]
    }, {
      key_image: "40_1.jpg",
      status: "published",
      category: "DATA VISUALIZATION",
      title: "Data visualisation for gender statistics",
      year: "2017",
      spec: "Information Design & Data visualisation",
      description: "The main objective of this project is to build a data visualisation that allows explore and contrast gender statistics extracted from World Data Bank. This visualisation takes gender statistics indicators from different issues like unemployment, education, economy, etc. calculates the average and shows a comparison between females and males in each country.",
      color: "#4a4a4a",
      links: [{
        title: "Website",
        href: "https://carolina-vallejo.github.io/gender_vizz/"
      }, {
        title: "Github",
        href: "https://github.com/carolina-vallejo/gender_vizz"
      }]
    }, {
      key_image: "itonics.webp",
      status: "published",
      category: "Software development",
      title: "Lead Frontend Engineer | ITONICS GmbH",
      year: "2018-2023",
      spec: "Software development",
      description: "In ITONICS GmbH I work as a Lead frontend engineer helping to build innovation management software. I have different roles and responsibilities.\n    <br><br>\n      One of the most crucial role is Team Lead. I use Scrum Methodologies to coordinate a team of developers, QA engineers and designers. I perform code reviews, write technical specifications and also do the planning in coordination with product owners and other technical leads. I am also taking part in the training and mentorship of junior developers.\n      <br><br>\n      My second role is Frontend Developer. I implement frontend features with Angular, Typescript, SASS, HTML. I work closely with backend engineers integrating REST APIs and GraphQL. I am familiar with Elastic Search, DynamoDB and PostgreSQL.\n      <br><br>\n      I am also specialised in implementing interactive data visualisations with D3.js + Angular.\n    ",
      color: "#4a4a4a",
      links: [{
        title: "Website",
        href: "https://www.itonics-innovation.de/produkt"
      }]
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/carolina/Documents/CODE/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map