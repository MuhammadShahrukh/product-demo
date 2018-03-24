webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_list_product_list_component__ = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_details_product_details_component__ = __webpack_require__("./src/app/product/product-details/product-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__product_product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_product_details_product_details_component__["a" /* ProductDetailsComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navigation{\n    margin: 20px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h1 class=\"text-center\">\n        Welcome to Product Demo App\n    </h1>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_list_product_list_component__ = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_details_product_details_component__ = __webpack_require__("./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_api_service__ = __webpack_require__("./src/app/product/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_product_details_product_details_component__["a" /* ProductDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__product_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:4000/api/product';
    }
    // this api will fetch all products
    ApiService.prototype.fetchProducts = function (productName) {
        var url = this.API_URL + '/';
        if (productName) {
            url += '?productName=' + productName;
        }
        return this.http.get(url);
    };
    // this api will fetch product through productId
    ApiService.prototype.fetchProductDetails = function (productId) {
        return this.http.get(this.API_URL + '/' + productId);
    };
    // this api will delete product
    ApiService.prototype.deleteProduct = function (productId) {
        return this.http.delete(this.API_URL + '/' + productId);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/product/product-details/product-details.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n\twidth: 400px;\n\tmargin: 0px auto;\n\tbackground-color: white;\n\t-webkit-box-shadow: 0px 5px 20px #555;\n\t        box-shadow: 0px 5px 20px #555;\n}\n.card a {\n\tcolor: #333;\n\ttext-decoration: none;\n}\n.card:hover .card-image img {\n\twidth: 110%;\n\t-webkit-filter: grayscale(0);\n\t        filter: grayscale(0);\n}\n.card-image {\n\theight: 250px;\n\tposition: relative;\n\toverflow: hidden;\n}\n.card-image img {\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\t-webkit-transition-property: -webkit-filter width;\n\ttransition-property: -webkit-filter width;\n\ttransition-property: filter width;\n\ttransition-property: filter width, -webkit-filter width;\n\t-webkit-transition-duration: .3s;\n\t        transition-duration: .3s;\n}\n.card-body {\n\ttext-align: center;\n\tpadding: 15px 20px;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n.card-date {\n\tfont-family: 'Source Sans Pro', sans-serif;\n}\n.card-title,\n.card-exceprt {\n\tfont-family: 'Playfair Display', serif;\n}\n.card-date,\n.card-title {\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n.card-date,\n.card-exceprt,\n#case-title {\n\tcolor: #777;\n}\n#case-title {\n\tposition: absolute;\n\tfont: 18px 'Microsoft YaHei';\n\ttop:10px;\n\tleft:0px;\n\tright:0px;\n\tmargin:auto;\n\tdisplay:block;\n\ttext-align:center;\n\ttext-decoration: none;\n}"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <a class=\"btn btn-small btn-link\" routerLink=\"/products\">Go Back</a>\n</div>\n<div class=\"card\" *ngIf=\"product\" style=\"margin-bottom:50px\">\n    <a href=\"{{product.link}}\">\n        <div class=\"card-image\">\n            <img [src]=\"product.image\" alt=\"Orange\" />\n        </div>\n        <div class=\"card-body\">\n            <div class=\"card-date\">\n                <time>\n                    {{product.price}} {{product.currency}}\n                </time>\n            </div>\n            <div class=\"card-title\">\n                <h3>\n                    {{product.name}}\n                </h3>\n            </div>\n            <div class=\"card-exceprt\">\n                <p>\n                    {{product.description}}\n                </p>\n            </div>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/product/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(apiService, activatedRoute) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.fetchProductDetails();
    };
    ProductDetailsComponent.prototype.fetchProductDetails = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.apiService.fetchProductDetails(params['id'])
                .subscribe(function (product) {
                _this.product = product;
            });
        });
    };
    ProductDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-details',
            template: __webpack_require__("./src/app/product/product-details/product-details.component.html"),
            styles: [__webpack_require__("./src/app/product/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "button{\n    margin: 5px;\n}"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Products</h3>\n<div>\n    <form #searchForm=\"ngForm\" (ngSubmit)=\"searchProduct(searchForm.value)\" class=\"form-inline\">\n        <div class=\"form-group\">\n            <input name=\"name\" ngModel type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"search by name\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n    </form>\n</div>\n<table class=\"table\">\n    <tr>\n        <th>#</th>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Price</th>\n        <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let product of products; let i = index\">\n        <td>{{i+1}}</td>\n        <td>\n            <img [src]=\"product.image\" alt=\"\" width=\"70px\">\n        </td>\n        <td>{{product.name}}</td>\n        <td>{{product.price}} {{product.currency}}</td>\n        <td>\n            <a routerLink=\"/products/{{product._id}}\" class=\"btn btn-info btn-small\">Details</a>\n            <button (click)=\"deleteProduct(product._id,index)\" class=\"btn btn-danger btn-small\">delete</button>\n        </td>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/product/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(apiService) {
        this.apiService = apiService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.fetchProducts();
    };
    ProductListComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.apiService.fetchProducts()
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductListComponent.prototype.deleteProduct = function (productId, index) {
        var _this = this;
        this.apiService.deleteProduct(productId)
            .subscribe(function () { return _this.products.splice(index, 1); });
    };
    ProductListComponent.prototype.searchProduct = function (filter) {
        var _this = this;
        this.apiService.fetchProducts(filter.name)
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map