(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"upHeading\">Fevorites</h2>\n<div class=\"weather__wrapper\" *ngIf=\"exists\">\n  <div class=\"weather__cont\" *ngFor=\"let city of favoriteCities\">\n    <div (click)=\"moreInfoCity(city.city, city.key)\">\n      <h3>{{ city.city }}</h3>\n      <img class=\"weather-icon\" src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n          city?.WeatherIcon\n        }}.svg\" />\n      <br />\n      <h4>\n        <p>{{ city.weatherText }}</p>\n        <p *ngIf=\"!unit\">\n          {{ city.Temperature.Imperial.Value }}\n          {{ city.Temperature.Imperial.Unit }}\n        </p>\n        <br />\n        <p *ngIf=\"unit\">\n          {{ city.Temperature.Metric.Value }} {{ city.Temperature.Metric.Unit }}\n        </p>\n      </h4>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-weather-card></app-weather-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm\">\n\n  <a class=\"navbar-brand\" routerLink=\"/\" >Weather App</a\n>\n\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\" style=\"color:white\"\n      ><i class=\"fa fa-bars\" style=\"font-size:24px\"></i\n    ></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <label class=\"nav-item active\" (click)=\"changeUnit(unit)\">\n          <a class=\"nav-link\" *ngIf=\"unit\"\n            ><i\n              class=\"fa fa-thermometer\"\n              style=\"font-size:25px;color:red\"\n            ></i> </a\n          ><a class=\"nav-link\" *ngIf=\"!unit\"\n            ><i\n              class=\"fa fa-thermometer\"\n              style=\"font-size:25px ;color:white\"\n            ></i>\n          </a>\n        </label>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\"\n          ><i\n            class=\"fa fa-home\"\n            aria-hidden=\"true\"\n            style=\"font-size:24px ;color:white\"\n          ></i\n        ></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/favorites\">\n          <i\n            class=\"fa fa-heart-o\"\n            aria-hidden=\"true\"\n            style=\"font-size:24px ;color:white\"\n          ></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"container-fluid\">\n    <div *ngIf=\"loaded\" class=\"sk-circle\">\n        <div class=\"sk-circle1 sk-child\"></div>\n        <div class=\"sk-circle2 sk-child\"></div>\n        <div class=\"sk-circle3 sk-child\"></div>\n        <div class=\"sk-circle4 sk-child\"></div>\n        <div class=\"sk-circle5 sk-child\"></div>\n        <div class=\"sk-circle6 sk-child\"></div>\n        <div class=\"sk-circle7 sk-child\"></div>\n        <div class=\"sk-circle8 sk-child\"></div>\n        <div class=\"sk-circle9 sk-child\"></div>\n        <div class=\"sk-circle10 sk-child\"></div>\n        <div class=\"sk-circle11 sk-child\"></div>\n        <div class=\"sk-circle12 sk-child\"></div>\n      </div>\n<div class=\"formwarrp\">\n  <form *ngIf=\"!loaded\" [formGroup]=\"searchForm\">\n    <input\n\n      type=\"text\"\n      formControlName=\"search\"\n      placeholder=\"Search By City Name\"\n      (input)=\"onInputChange($event)\"\n    />\n\n    <ul  class=\"ulsugesst\">\n      <li\n        *ngFor=\"let suggestion of suggestions\"\n        [value]=\"suggestion?.LocalizedName\"\n        (mousedown)=\"getWeather(suggestion?.Key, suggestion?.LocalizedName)\">\n        {{ suggestion?.LocalizedName }}\n    </li>\n    </ul>\n\n  </form>\n</div>\n\n\n<div *ngIf=\"!loaded\" class=\"weather-contine\">\n  <div class=\"container\">\n    <div class=\"widget\">\n      <div class=\"details\" *ngIf=\"!metric\">\n        <div class=\"temperature\">{{ City?.city }}</div>\n        <div class=\"temperature\">{{ City?.weatherText }}</div>\n        <img\n          class=\"pictoCloudBig\"\n          src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n            City?.WeatherIcon\n          }}.svg\"\n        />\n        <div class=\"temperature\">\n          {{ City?.Temperature?.Imperial?.Value }}\n          {{ City?.Temperature?.Imperial?.Unit }}\n        </div>\n      </div>\n      <div class=\"details\" *ngIf=\"metric\">\n        <div class=\"temperature\">{{ City?.city }}</div>\n        <div class=\"temperature\">{{ City?.weatherText }}</div>\n        <img\n          class=\"pictoCloudBig\"\n          src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n            City?.WeatherIcon\n          }}.svg\"\n        />\n        <div class=\"temperature\">\n          {{ City?.Temperature?.Metric?.Value }}\n          {{ City?.Temperature?.Metric?.Unit }}\n        </div>\n      </div>\n      <div class=\"like\">\n          <i\n          style='font-size:30px'\n          class=\"fa fa-heart-o\"\n          aria-hidden=\"true\"\n\n          (click)=\"addToFavorite()\" *ngIf=\"!exist\"\n        ></i>\n        <i\n        style='font-size:30px'\n        (click)=\"removeFromFavorite()\" *ngIf=\"exist\"\n        class=\"fa fa-heart\"\n        aria-hidden=\"true\"\n        [ngStyle]=\"exist && { color: '#2266ff;' }\"\n      ></i>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!loaded\" class=\"weather__wrapper\">\n  <div class=\"weather__cont\" *ngFor=\"let day of fiveDayWeather\">\n    <h4 >{{ day.Date }}</h4>\n    <img\n      class=\"weather-icon\"\n      src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n        day?.Day.Icon\n      }}.svg\"\n    />\n    <br />\n    <h4>\n      {{ day?.Day?.IconPhrase }}<br />\n      <br/>\n      {{ day?.Temperature?.Minimum?.Value }}\n      /\n      {{ day?.Temperature?.Maximum?.Value }}\n      {{ day?.Temperature?.Maximum?.Unit }}<br />\n    </h4>\n  </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weatherApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/weather-card/weather-card.component */ "./src/app/components/weather-card/weather-card.component.ts");
/* harmony import */ var _store_effects_weather_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects/weather.effect */ "./src/app/store/effects/weather.effect.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
            _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_10__["WeatherCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_12__["Reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_store_effects_weather_effect__WEBPACK_IMPORTED_MODULE_11__["WeatherEffects"]])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: Reducers, getWeatherReducer, getFiveDayWeatherReducer, getGeoLocationReducer, getWeatherData, getFiveDayWeatherData, getGeoLocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducers", function() { return Reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherReducer", function() { return getWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherReducer", function() { return getFiveDayWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationReducer", function() { return getGeoLocationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherData", function() { return getFiveDayWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationData", function() { return getGeoLocationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers/weather.reducer */ "./src/app/store/reducers/weather.reducer.ts");
/* harmony import */ var _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/fiveDayWeather.reducer */ "./src/app/store/reducers/fiveDayWeather.reducer.ts");
/* harmony import */ var _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers/geolocation.reducer */ "./src/app/store/reducers/geolocation.reducer.ts");





const Reducers = {
    weatherReducer: _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__["weatherReducer"],
    fiveDayWeatherReducer: _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_3__["fiveDayWeatherReducer"],
    geoLocationWeatherReducer: _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_4__["geoLocationReducer"]
};
const getWeatherReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('weatherReducer');
const getFiveDayWeatherReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('fiveDayWeatherReducer');
const getGeoLocationReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('geoLocationWeatherReducer');
const getWeatherData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getWeatherReducer, _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__["getWeatherData"]);
const getFiveDayWeatherData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getFiveDayWeatherReducer, _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_3__["getFiveDayWeatherData"]);
const getGeoLocationData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getGeoLocationReducer, _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_4__["getGeoLocationData"]);


/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FavoritesComponent = class FavoritesComponent {
    constructor(Data, router) {
        this.Data = Data;
        this.router = router;
        this.favoriteCities = [];
        this.exists = false;
    }
    ngOnInit() {
        this.onLoadComponent();
    }
    onLoadComponent() {
        this.Data.currentTempValue.subscribe(response => {
            this.unit = response;
        });
        this.checkFavoriteCitiesExists();
    }
    moreInfoCity(city, key) {
        const data = { city, key };
        this.Data.changeCity(JSON.stringify(data));
        this.router.navigate(['/']);
    }
    checkFavoriteCitiesExists() {
        if (JSON.parse(localStorage.getItem('cities'))) {
            this.favoriteCities = JSON.parse(localStorage.getItem('cities'));
            this.exists = true;
        }
        else {
            this.exists = false;
        }
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["Data"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-nav {\r\n  justify-content: space-evenly !important;\r\n  flex-direction: row !important;\r\n\r\n\r\n}\r\n.navbar{\r\n   box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);\r\n\r\n}\r\n.navbar a{\r\n  font-size: 24px;\r\n  font-weight: 800;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBd0M7RUFDeEMsOEJBQThCOzs7QUFHaEM7QUFDQTtHQUNHLHlDQUF5Qzs7QUFFNUM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG4ubmF2YmFye1xyXG4gICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxuXHJcbn1cclxuLm5hdmJhciBhe1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(router, DataService) {
        this.router = router;
        this.DataService = DataService;
        this.unit = false;
    }
    ngOnInit() {
        this.onLoadComponent();
        this.color = true;
    }
    onLoadComponent() {
        this.router.navigate(['/']);
    }
    changeUnit(unit) {
        if (unit) {
            this.unit = false;
            this.DataService.changeUnit(this.unit);
        }
        else {
            this.unit = true;
            this.DataService.changeUnit(this.unit);
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["Data"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nform input{\n  width: 15rem;\n  margin: auto;\n}\n\nform ul{\n  display:none;\n  position:absolute;\n  padding: 0;\n  margin: 0;\n}\n\nform:focus-within ul{\n  display: block;\n  width: 15rem;\n  z-index: 1;\n}\n\nform ul li{\n\n  padding: 5px;\n  list-style-type: none;\n  border-top: 1px solid;\n  background-color:rgba(105, 18, 163, 0.7);\n  /* border:1px solid ; */\n  color: #ffffff;\n  border-radius: 4px;\n\n}\n\nform ul li:hover{\n background-color:rgba(12, 4, 4, 0.7);\n color: #ffffff;\n}\n\n.like{\n  padding-top: 20px;\n  padding-left: 70px;\n  color: white;\n}\n\n.sk-circle {\n  margin: 100px auto;\n  width: 100px;\n  height: 100px;\n  position: relative;\n}\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-circle .sk-circle2 {\n  transform: rotate(30deg); }\n\n.sk-circle .sk-circle3 {\n  transform: rotate(60deg); }\n\n.sk-circle .sk-circle4 {\n  transform: rotate(90deg); }\n\n.sk-circle .sk-circle5 {\n  transform: rotate(120deg); }\n\n.sk-circle .sk-circle6 {\n  transform: rotate(150deg); }\n\n.sk-circle .sk-circle7 {\n  transform: rotate(180deg); }\n\n.sk-circle .sk-circle8 {\n  transform: rotate(210deg); }\n\n.sk-circle .sk-circle9 {\n  transform: rotate(240deg); }\n\n.sk-circle .sk-circle10 {\n  transform: rotate(270deg); }\n\n.sk-circle .sk-circle11 {\n  transform: rotate(300deg); }\n\n.sk-circle .sk-circle12 {\n  transform: rotate(330deg); }\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  } 40% {\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  } 40% {\n    transform: scale(1);\n  }\n}\n\n.ulsugesst{\n  width: 60%;\n  list-style: none;\n}\n\n.formwarrp{\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUNBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsY0FBYztBQUNmOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtBQUNSOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNFQUFzRTtVQUM5RCw4REFBOEQ7QUFDeEU7O0FBQ0E7RUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7RUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7RUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0VBQ0UsNEJBQTRCO1VBQ3BCLG9CQUFvQixFQUFFOztBQUNoQztFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQixFQUFFOztBQUNsQztFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQixFQUFFOztBQUNsQztFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQixFQUFFOztBQUVsQztFQUNFO0lBRVUsbUJBQW1CO0VBQzdCLEVBQUU7SUFFUSxtQkFBbUI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFO0lBRVUsbUJBQW1CO0VBQzdCLEVBQUU7SUFFUSxtQkFBbUI7RUFDN0I7QUFDRjs7QUFHQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3JtIGlucHV0e1xuICB3aWR0aDogMTVyZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuZm9ybSB1bHtcbiAgZGlzcGxheTpub25lO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuZm9ybTpmb2N1cy13aXRoaW4gdWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTVyZW07XG4gIHotaW5kZXg6IDE7XG59XG5mb3JtIHVsIGxpe1xuXG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMDUsIDE4LCAxNjMsIDAuNyk7XG4gIC8qIGJvcmRlcjoxcHggc29saWQgOyAqL1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG59XG5mb3JtIHVsIGxpOmhvdmVye1xuIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMiwgNCwgNCwgMC43KTtcbiBjb2xvcjogI2ZmZmZmZjtcbn1cbi5saWtle1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zay1jaXJjbGUge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNrLWNpcmNsZSAuc2stY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGU0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGU3IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUzOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTQ6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTc6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEwOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfSA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH0gNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cblxuLnVsc3VnZXNzdHtcbiAgd2lkdGg6IDYwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mb3Jtd2FycnB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/weather.action */ "./src/app/store/actions/weather.action.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let WeatherCardComponent = class WeatherCardComponent {
    constructor(Data, store) {
        this.Data = Data;
        this.store = store;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentWeather$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.favoriteCities = [];
        this.loaded = true;
        this.metric = true;
        this.exist = false;
    }
    //Init
    ngOnInit() {
        this.onLoad();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            })
        });
    }
    onLoad() {
        this.setData();
        this.Data.currentCity.subscribe(response => {
            if (response) {
                this.loaded = false;
                const data = {
                    key: JSON.parse(response).key,
                    city: JSON.parse(response).city
                };
                this.getWeather(data.key, data.city);
            }
            else {
                this.showGeoLocation();
            }
        });
    }
    //Search
    onInputChange($event) {
        var input = $event.target.value;
        if (input === '') {
            this.suggestions = [];
        }
        else {
            this.getAutoComplete(input);
        }
    }
    //
    getAutoComplete(input) {
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCities"](input));
        this.dataToSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            if (data.loaded) {
                this.suggestions = data.data;
            }
        });
    }
    //Location
    showGeoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const x = position.coords.latitude;
                const y = position.coords.longitude;
                const location = { x, y };
                this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocation"](location));
                const dataToSubscribeGeo = this.store
                    .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getGeoLocationData"])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
                    .subscribe(data => {
                    if (data.loaded) {
                        this.defaultKey = data.data.Key;
                        this.defaultCity = data.data.LocalizedName;
                        this.getWeather(data.data.Key, data.data.LocalizedName);
                        dataToSubscribeGeo.unsubscribe();
                    }
                });
            }, () => {
                this.getWeather(this.defaultKey, this.defaultCity);
                this.checkSpecificCity(this.defaultCity);
            });
        }
    }
    //Get Current Weather
    getWeather(key, city) {
        this.loaded = false;
        this.City.city = city;
        this.checkSpecificCity(city);
        const intKey = Number(key);
        this.getFiveDayWeather(intKey);
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeather"](intKey));
        this.currentSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.currentWeather$))
            .subscribe(data => {
            if (data.loaded) {
                this.currentWeather = data.data[0];
                this.weatherCityData(intKey);
            }
        });
    }
    //Five Days Weather
    getFiveDayWeather(key) {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeather"](key, this.metric));
        this.dataToSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getFiveDayWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            if (data.loaded) {
                data.data.DailyForecasts.forEach(day => {
                    day.Date = days[new Date(day.Date).getDay()];
                });
                this.fiveDayWeather = data.data.DailyForecasts;
            }
        });
    }
    //Change Unit
    changeUnit() {
        let i = 0;
        let value = 0;
        let fahToCelFormula = (value - 32) / (9 / 5);
        let celToFahFormula = value * (9 / 5) + 32;
        if (this.unit) {
            if (this.fiveDayWeather &&
                this.fiveDayWeather[0].Temperature.Minimum.Unit === 'F') {
                for (i = 0; i < 5; i++) {
                    value = this.fiveDayWeather[i].Temperature.Maximum.Value;
                    fahToCelFormula = (value - 32) / (9 / 5);
                    this.fiveDayWeather[i].Temperature.Maximum.Value = fahToCelFormula.toFixed(0);
                    value = this.fiveDayWeather[i].Temperature.Minimum.Value;
                    fahToCelFormula = (value - 32) / (9 / 5);
                    this.fiveDayWeather[i].Temperature.Minimum.Value = fahToCelFormula.toFixed(0);
                    this.fiveDayWeather[i].Temperature.Minimum.Unit = 'C';
                    this.fiveDayWeather[i].Temperature.Maximum.Unit = 'C';
                }
            }
        }
        else {
            if (this.fiveDayWeather &&
                this.fiveDayWeather[0].Temperature.Minimum.Unit === 'C') {
                for (i = 0; i < 5; i++) {
                    value = this.fiveDayWeather[i].Temperature.Maximum.Value;
                    celToFahFormula = value * (9 / 5) + 32;
                    this.fiveDayWeather[i].Temperature.Maximum.Value = celToFahFormula.toFixed(0);
                    value = this.fiveDayWeather[i].Temperature.Minimum.Value;
                    celToFahFormula = value * (9 / 5) + 32;
                    this.fiveDayWeather[i].Temperature.Minimum.Value = celToFahFormula.toFixed(0);
                    this.fiveDayWeather[i].Temperature.Minimum.Unit = 'F';
                    this.fiveDayWeather[i].Temperature.Maximum.Unit = 'F';
                }
            }
        }
    }
    //Add to the favorites
    addToFavorite() {
        this.checkIfExists();
        this.favoriteCities.push(this.City);
        localStorage.setItem('cities', JSON.stringify(this.favoriteCities));
        this.checkSpecificCity(this.City.city);
    }
    //Remove to the favorites
    removeFromFavorite() {
        this.checkIfExists();
        const index = this.favoriteCities.findIndex(city => city.city === this.City.city);
        if (index >= 0) {
            this.favoriteCities.splice(index, 1);
            localStorage.removeItem('cities');
            localStorage.setItem('cities', JSON.stringify(this.favoriteCities));
            this.checkSpecificCity(this.City.city);
        }
    }
    checkIfExists() {
        if (JSON.parse(localStorage.getItem('cities'))) {
            this.favoriteCities = JSON.parse(localStorage.getItem('cities'));
        }
    }
    checkSpecificCity(city) {
        const index = this.favoriteCities.find(arrayCity => arrayCity.city === city);
        if (index) {
            this.exist = true;
        }
        else {
            this.exist = false;
        }
    }
    setModel() {
        this.City = {
            key: 0,
            city: '',
            Country: {
                ID: '',
                LocalizedName: ''
            },
            Temperature: {
                Metric: {
                    Value: 0,
                    Unit: '',
                    UnitType: 0
                },
                Imperial: {
                    Value: 0,
                    Unit: '',
                    UnitType: 0
                }
            },
            weatherText: '',
            WeatherIcon: 0,
            link: '',
            mobileLink: '',
            dayTime: false
        };
    }
    weatherCityData(intKey) {
        this.City.key = intKey;
        this.City.dayTime = this.currentWeather.IsDayTime;
        this.City.Temperature = this.currentWeather.Temperature;
        this.City.weatherText = this.currentWeather.WeatherText;
        this.City.WeatherIcon = this.currentWeather.WeatherIcon;
    }
    setData() {
        this.Data.currentTempValue.subscribe(response => {
            this.unit = response;
            this.metric = response;
            this.changeUnit();
        });
        this.setModel();
        this.checkIfExists();
    }
};
WeatherCardComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["Data"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-card.component.css */ "./src/app/components/weather-card/weather-card.component.css")).default]
    })
], WeatherCardComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let Data = class Data {
    constructor() {
        this.tempValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.citySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentCity = this.citySource.asObservable();
        this.currentTempValue = this.tempValue.asObservable();
    }
    changeCity(city) {
        this.citySource.next(city);
    }
    changeUnit(value) {
        this.tempValue.next(value);
    }
};
Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], Data);



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.Key = 'uCy8wdBb6euxZ2vvvBNGBNFLyp5lyy2G';
        this.Url = 'https://dataservice.accuweather.com';
    }
    getAutocomplete(text) {
        return this.http.get(`${this.Url}/locations/v1/cities/autocomplete?apikey=${this.Key}&q=${text}`);
    }
    getCurrentWeatherGeolocation(data) {
        return this.http.get(`${this.Url}/locations/v1/cities/geoposition/search?apikey=${this.Key}&q=${data.x},${data.y}`);
    }
    getFiveDayForecasts(locationKey, metric) {
        return this.http.get(`${this.Url}/forecasts/v1/daily/5day/${locationKey}?apikey=${this.Key}&metric=${metric}`);
    }
    getCurrentWeather(locationKey) {
        return this.http.get(`${this.Url}/currentconditions/v1/${locationKey}?apikey=${this.Key}&details=false`);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], WeatherService);



/***/ }),

/***/ "./src/app/store/actions/weather.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/weather.action.ts ***!
  \*************************************************/
/*! exports provided: GET_AUTO_COMPLETE_CITIES, GET_AUTO_COMPLETE_CITIES_SUCCESS, GET_AUTO_COMPLETE_CITIES_FAILED, GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_SUCCESS, GET_CURRENT_WEATHER_FAILED, GET_FIVE_DAY_WEATHER, GET_FIVE_DAY_WEATHER_SUCCESS, GET_FIVE_DAY_WEATHER_FAILED, GET_GEOLOCATION_WEATHER, GET_GEOLOCATION_WEATHER_SUCCESS, GET_GEOLOCATION_WEATHER_FAILED, GetAutoCompleteCities, GetAutoCompleteCitiesSuccess, GetAutoCompleteCitiesFailed, GetCurrentWeather, GetCurrentWeatherSuccess, GetCurrentWeatherFailed, GetFiveDayWeather, GetFiveDayWeatherSuccess, GetFiveDayWeatherFailed, GetGeoLocation, GetGeoLocationSuccess, GetGeoLocationFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES", function() { return GET_AUTO_COMPLETE_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES_SUCCESS", function() { return GET_AUTO_COMPLETE_CITIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES_FAILED", function() { return GET_AUTO_COMPLETE_CITIES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER", function() { return GET_CURRENT_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER_SUCCESS", function() { return GET_CURRENT_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER_FAILED", function() { return GET_CURRENT_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER", function() { return GET_FIVE_DAY_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER_SUCCESS", function() { return GET_FIVE_DAY_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER_FAILED", function() { return GET_FIVE_DAY_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER", function() { return GET_GEOLOCATION_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER_SUCCESS", function() { return GET_GEOLOCATION_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER_FAILED", function() { return GET_GEOLOCATION_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCities", function() { return GetAutoCompleteCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCitiesSuccess", function() { return GetAutoCompleteCitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCitiesFailed", function() { return GetAutoCompleteCitiesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeather", function() { return GetCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeatherSuccess", function() { return GetCurrentWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeatherFailed", function() { return GetCurrentWeatherFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeather", function() { return GetFiveDayWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeatherSuccess", function() { return GetFiveDayWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeatherFailed", function() { return GetFiveDayWeatherFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocation", function() { return GetGeoLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocationSuccess", function() { return GetGeoLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocationFailed", function() { return GetGeoLocationFailed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const GET_AUTO_COMPLETE_CITIES = 'GET_AUTO_COMPLETE_CITIES';
const GET_AUTO_COMPLETE_CITIES_SUCCESS = 'GET_AUTO_COMPLETE_CITIES_SUCCESS';
const GET_AUTO_COMPLETE_CITIES_FAILED = 'GET_AUTO_COMPLETE_CITIES_FAILED';
const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
const GET_CURRENT_WEATHER_SUCCESS = 'GET_CURRENT_WEATHER_SUCCESS';
const GET_CURRENT_WEATHER_FAILED = 'GET_CURRENT_WEATHER_FAILED';
const GET_FIVE_DAY_WEATHER = 'GET_FIVE_DAY_WEATHER';
const GET_FIVE_DAY_WEATHER_SUCCESS = 'GET_FIVE_DAY_WEATHER_SUCCESS';
const GET_FIVE_DAY_WEATHER_FAILED = 'GET_FIVE_DAY_WEATHER_FAILED';
const GET_GEOLOCATION_WEATHER = 'GET_GEOLOCATION_WEATHER';
const GET_GEOLOCATION_WEATHER_SUCCESS = 'GET_GEOLOCATION_WEATHER_SUCCESS';
const GET_GEOLOCATION_WEATHER_FAILED = 'GET_GEOLOCATION_WEATHER_FAILED';
class GetAutoCompleteCities {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES;
    }
}
class GetAutoCompleteCitiesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES_SUCCESS;
    }
}
class GetAutoCompleteCitiesFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES_FAILED;
    }
}
class GetCurrentWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER;
    }
}
class GetCurrentWeatherSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER_SUCCESS;
    }
}
class GetCurrentWeatherFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER_FAILED;
    }
}
class GetFiveDayWeather {
    constructor(payload, metric) {
        this.payload = payload;
        this.metric = metric;
        this.type = GET_FIVE_DAY_WEATHER;
    }
}
class GetFiveDayWeatherSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_FIVE_DAY_WEATHER_SUCCESS;
    }
}
class GetFiveDayWeatherFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_FIVE_DAY_WEATHER_FAILED;
    }
}
class GetGeoLocation {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER;
    }
}
class GetGeoLocationSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER_SUCCESS;
    }
}
class GetGeoLocationFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER_FAILED;
    }
}


/***/ }),

/***/ "./src/app/store/effects/weather.effect.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/weather.effect.ts ***!
  \*************************************************/
/*! exports provided: WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return WeatherEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");







let WeatherEffects = class WeatherEffects {
    constructor(actions$, weatherService) {
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.weatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_AUTO_COMPLETE_CITIES"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((action) => {
            return this.weatherService.getAutocomplete(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCitiesSuccess"](data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCitiesFailed"](error))));
        }));
        this.currentWeatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_CURRENT_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((action) => {
            return this.weatherService.getCurrentWeather(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeatherSuccess"](data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeatherFailed"](error))));
        }));
        this.fiveDayWeatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_FIVE_DAY_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((action) => {
            return this.weatherService
                .getFiveDayForecasts(action.payload, action.metric)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeatherSuccess"](data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeatherFailed"](error))));
        }));
        this.geolocationData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_GEOLOCATION_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((action) => {
            return this.weatherService
                .getCurrentWeatherGeolocation(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocationSuccess"](data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocationFailed"](error))));
        }));
    }
};
WeatherEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "weatherData$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "currentWeatherData$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "fiveDayWeatherData$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], WeatherEffects.prototype, "geolocationData$", void 0);
WeatherEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WeatherEffects);



/***/ }),

/***/ "./src/app/store/reducers/fiveDayWeather.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/fiveDayWeather.reducer.ts ***!
  \**********************************************************/
/*! exports provided: fiveDayWeatherReducer, getFiveDayWeatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiveDayWeatherReducer", function() { return fiveDayWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherData", function() { return getFiveDayWeatherData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


const initialState = {
    data: [],
    loading: true,
    loaded: false
};
function fiveDayWeatherReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER"]:
            return Object.assign({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER_SUCCESS"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER_FAILED"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        default: {
            return state;
        }
    }
}
const getFiveDayWeatherData = (state) => state;


/***/ }),

/***/ "./src/app/store/reducers/geolocation.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/geolocation.reducer.ts ***!
  \*******************************************************/
/*! exports provided: geoLocationReducer, getGeoLocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoLocationReducer", function() { return geoLocationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationData", function() { return getGeoLocationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


const initialState = {
    data: [],
    loading: true,
    loaded: false
};
function geoLocationReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER"]:
            return Object.assign({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER_SUCCESS"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER_FAILED"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        default:
            return state;
    }
}
const getGeoLocationData = (state) => state;


/***/ }),

/***/ "./src/app/store/reducers/weather.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/weather.reducer.ts ***!
  \***************************************************/
/*! exports provided: weatherReducer, getWeatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherReducer", function() { return weatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


const initialState = {
    data: [],
    loading: false,
    loaded: false
};
function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES"]:
            return Object.assign({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES_SUCCESS"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES_FAILED"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER"]:
            return Object.assign({}, state, { loading: true, loaded: false });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER_SUCCESS"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER_FAILED"]:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.payload });
        default:
            return state;
    }
}
const getWeatherData = (state) => state;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\גיזה אג'יגו\Desktop\herolo-task\weatherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map