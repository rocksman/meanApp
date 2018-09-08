(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/action/action.component.css":
/*!*********************************************!*\
  !*** ./src/app/action/action.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    padding:2em;\r\n    overflow: hidden;\r\n}\r\nh3{\r\n    color:#bbb;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.actionContainer{\r\n    overflow-y: auto;\r\n    height: 40vh;\r\n}\r\n.actionCard{\r\n    display: block;\r\n    margin: 10px;\r\n    width: 100%;\r\n    background-color:#000;\r\n    color:#bbb;\r\n    padding: 0.5em;\r\n    border-radius:5px;\r\n}\r\np{\r\n    font-size: 0.5em;\r\n}"

/***/ }),

/***/ "./src/app/action/action.component.html":
/*!**********************************************!*\
  !*** ./src/app/action/action.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <h3>Dashboard</h3>\n    <div class=\"actionContainer\">\n      <div *ngFor=\"let act of Actions.actions\">\n        <div *ngIf=\"act.actions.donate\">\n          <div class=\"actionCard\">\n            <p>{{act.actions.emailfrom}} donated {{act.actions.amount_don}} to {{act.actions.emailto}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"act.actions.added\">\n          <div class=\"actionCard\">\n            <p>You added a new project</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/action/action.component.ts":
/*!********************************************!*\
  !*** ./src/app/action/action.component.ts ***!
  \********************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionComponent = /** @class */ (function () {
    function ActionComponent(http, user) {
        this.http = http;
        this.user = user;
    }
    ActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/getActions', { email: this.user.email })
            .subscribe(function (data) {
            console.log(data);
            _this.Actions = data;
        });
    };
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action',
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.css */ "./src/app/action/action.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    padding:2em;\r\n    overflow: hidden;\r\n}\r\nh3{\r\n    color:#bbb;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.actionContainer{\r\n    overflow-y: auto;\r\n    height: 40vh;\r\n}\r\n.actionCard{\r\n    display: block;\r\n    margin: 10px;\r\n    width: 100%;\r\n    background-color:#000;\r\n    color:#bbb;\r\n    padding: 0.5em;\r\n    border-radius:5px;\r\n}\r\np{\r\n    font-size: 0.5em;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <h3>Dashboard</h3>\n    <div class=\"actionContainer\">\n      <div *ngFor=\"let act of Actions.actions\">\n        <div *ngIf=\"act.actions.donate\">\n          <div class=\"actionCard\">\n            <p>{{act.actions.emailfrom}} donated {{act.actions.amount_don}} to {{act.actions.emailto}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"act.actions.added\">\n          <div class=\"actionCard\">\n            <p>{{act.actions.emailfrom}} added a new project</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(http, user) {
        this.http = http;
        this.user = user;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.admin = true;
        this.http.get('/allActions')
            .subscribe(function (data) {
            console.log(data);
            _this.Actions = data;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meanApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _borrow_borrow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./borrow/borrow.component */ "./src/app/borrow/borrow.component.ts");
/* harmony import */ var _lender_lender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lender/lender.component */ "./src/app/lender/lender.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./action/action.component */ "./src/app/action/action.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _borrow_borrow_component__WEBPACK_IMPORTED_MODULE_13__["BorrowComponent"],
                _lender_lender_component__WEBPACK_IMPORTED_MODULE_14__["LenderComponent"],
                _action_action_component__WEBPACK_IMPORTED_MODULE_15__["ActionComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _borrow_borrow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./borrow/borrow.component */ "./src/app/borrow/borrow.component.ts");
/* harmony import */ var _lender_lender_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lender/lender.component */ "./src/app/lender/lender.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action/action.component */ "./src/app/action/action.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");











var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        children: [
            { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
            { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
        ]
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        children: [
            { path: '', component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] },
            { path: 'borrow', component: _borrow_borrow_component__WEBPACK_IMPORTED_MODULE_7__["BorrowComponent"] },
            { path: 'lender', component: _lender_lender_component__WEBPACK_IMPORTED_MODULE_8__["LenderComponent"] },
            { path: 'action', component: _action_action_component__WEBPACK_IMPORTED_MODULE_9__["ActionComponent"] },
            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] }
        ]
    }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { useHash: true });


/***/ }),

/***/ "./src/app/borrow/borrow.component.css":
/*!*********************************************!*\
  !*** ./src/app/borrow/borrow.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    padding: 1em 2em;\r\n}\r\nh3{\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #bbb;\r\n    text-align: center;\r\n}\r\nform{\r\n    width:50%;\r\n    font-family: 'Montserrat', sans-serif;\r\n    display: block;\r\n    margin: auto;\r\n    margin-top:3em;\r\n}\r\n.fields{\r\n    position: relative;\r\n    padding-top: 1.5rem;\r\n}\r\nlabel {\r\n    position: absolute;\r\n    top: 0;\r\n    color: #bbb;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 0.8em;\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: all 0.2s ease-out;\r\n}\r\ninput:placeholder-shown + label {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n            transform: translateY(20px);\r\n    cursor: text;\r\n}\r\ninput[type=\"email\"], input[type=\"text\"]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    border: none;\r\n    border-bottom: solid 1px #777;\r\n    border-radius: 1px;\r\n    height: auto;\r\n    transition: border-color 0.3s;\r\n    box-shadow: none;\r\n    padding-left: 2px;\r\n    padding-right: 0px;\r\n    color: #bbb;\r\n    cursor: text;\r\n    background: rgba(0,0,0,0);\r\n    font-size: 0.9em;\r\n}\r\ninput[type=\"email\"]:focus,input[type=\"password\"]:focus{\r\n    border-color: #bbb;\r\n}\r\ninput.ng-valid.ng-touched {\r\n    border-bottom: 1px solid #0067b8;\r\n  }\r\ninput.ng-invalid.ng-touched {\r\n    border-bottom: 1px solid rgba(180, 24, 24, 0.5);\r\n}\r\n::-webkit-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(200,200,200,0.6);\r\n    cursor: text;\r\n}\r\n:-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(200,200,200,0.6);\r\n    cursor: text;\r\n}\r\n::-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(200,200,200,0.6);\r\n    cursor: text;\r\n}\r\n::placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(200,200,200,0.6);\r\n    cursor: text;\r\n}\r\n.button{\r\n    float: right;\r\n    width: 60px;\r\n    border-radius: 5px;\r\n    background-color: #0067b8;\r\n}"

/***/ }),

/***/ "./src/app/borrow/borrow.component.html":
/*!**********************************************!*\
  !*** ./src/app/borrow/borrow.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"addProject(projectForm.value)\">\n    <div class=\"form-container\">\n      <div class=\"row columns\">\n        <h3>New Project</h3>\n        <div class=\"fields\">\n          <input type=\"text\" id=\"dynamic-label-input\" formControlName=\"name\" placeholder=\"Project name\">\n          <label for=\"dynamic-label-input\">Project name</label>\n        </div>\n        <div class=\"fields\">\n          <input type=\"text\" id=\"dynamic-label-input\" formControlName=\"amount\" placeholder=\"Amount required\">\n          <label for=\"dynamic-label-input\">Amount required</label>\n        </div>\n        <input type=\"submit\" class=\"button expanded\" value=\"add\" [disabled]=\"!projectForm.valid\">\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/borrow/borrow.component.ts":
/*!********************************************!*\
  !*** ./src/app/borrow/borrow.component.ts ***!
  \********************************************/
/*! exports provided: BorrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowComponent", function() { return BorrowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BorrowComponent = /** @class */ (function () {
    function BorrowComponent(fb, http, user) {
        this.fb = fb;
        this.http = http;
        this.user = user;
        this.projectForm = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'amount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    BorrowComponent.prototype.addProject = function (pForm) {
        pForm.email = this.user.email;
        console.log(pForm);
        this.http.post('/addproj', pForm)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    BorrowComponent.prototype.ngOnInit = function () {
    };
    BorrowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-borrow',
            template: __webpack_require__(/*! ./borrow.component.html */ "./src/app/borrow/borrow.component.html"),
            styles: [__webpack_require__(/*! ./borrow.component.css */ "./src/app/borrow/borrow.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], BorrowComponent);
    return BorrowComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    padding: 2em;\r\n}\r\n.container{\r\n    display: block;\r\n    margin: auto;\r\n    width: 50%;\r\n    margin-top:5em;\r\n}\r\nh3{\r\n    text-align: center;\r\n    color: #bbb;\r\n}\r\nform{\r\n    display: block;\r\n    margin: auto;\r\n    text-align: center;\r\n    color: #bbb;\r\n}\r\ninput[type=\"radio\"]{\r\n    margin-left:5px;\r\n    font-size: 1em;\r\n}\r\nselect{\r\n    /* background: #bbb; */\r\n    opacity: 0.5;\r\n    border: none;\r\n    border-bottom: 1px rgb(92, 90, 90) solid;\r\n    font-size: 0.9em;\r\n}"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <h3>Choose a role</h3>\n    <form [formGroup]=\"roleForm\" (ngSubmit)=\"chooseRole(roleForm.value)\">\n      <!-- <select formControlName=\"roles\">\n        <option value=\"default\" default>Choose role</option>\n        <option value=\"lender\">Lender</option>\n        <option value=\"borrower\">Borrower</option>\n      </select> -->\n      <input type=\"radio\" value=\"lender\" formControlName=\"roles\"/>Lender\n      <input type=\"radio\" value=\"borrower\" formControlName=\"roles\"/>Borrower\n      <input type=\"submit\" class=\"button expanded\" value=\"save\" [disabled]=\"!roleForm.valid\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(http, user, fb, router) {
        this.http = http;
        this.user = user;
        this.fb = fb;
        this.router = router;
        this.roleForm = fb.group({
            'roles': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ErrorComponent.prototype.chooseRole = function (val) {
        var _this = this;
        val.email = this.user.email;
        console.log(val);
        this.http.post('/role', val)
            .subscribe(function (data) {
            _this.user.roles = val.roles;
            if (val.roles == "lender") {
                _this.router.navigateByUrl('/profile/lender');
            }
            else if (val.roles == "borrower") {
                _this.router.navigateByUrl('/profile/borrow');
            }
        });
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/fblogin')
            .subscribe(function (data) {
            console.log(data);
            var val = JSON.parse(JSON.stringify(data));
            _this.user.name = val.name;
            _this.user.email = val.email;
            _this.user.roles = val.role;
            if (val.role == "lender") {
                _this.router.navigateByUrl('/profile/lender');
            }
            else if (val.role == "borrower") {
                _this.router.navigateByUrl('/profile/borrow');
            }
        });
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background: url('bg4.jpg');\r\n    position: absolute;\r\n    top:0;\r\n    background-size: contain;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n.wrapper{\r\n    display: block;\r\n    margin: auto;\r\n    width: 70%;\r\n    background-color: rgba(255,255,255,0.6);\r\n    min-height: 80vh;\r\n    margin-top: 10vh;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n\r\n}\r\n.right{\r\n    min-height:80vh;\r\n    background-color: #444;\r\n    width: 50%;\r\n    float: right;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    box-shadow: -2px 0px 8px 1px rgba(0,0,0,0.2);\r\n\r\n}\r\n.left{\r\n    float: left;\r\n}\r\n.left img{\r\n    height: 15em;\r\n    display: block;\r\n    margin-left: 7em;\r\n    margin-top: 7em;\r\n}\r\n.rightCont{\r\n    display: block;\r\n    margin:3em;\r\n    font-size: 2em;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"wrapper\">\n    <div class=\"left\">\n      <img src=\"../../assets/img/logo.png\"/>\n    </div>\n    <div class=\"right\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lender/lender.component.css":
/*!*********************************************!*\
  !*** ./src/app/lender/lender.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    padding:2em;\r\n    overflow: hidden;\r\n}\r\nh3{\r\n    color:#bbb;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.projectContainer{\r\n    overflow-y: auto;\r\n    height: 40vh;\r\n}\r\n.projectCard{\r\n    display: block;\r\n    width: 100%;\r\n    background-color:#000;\r\n    color:#bbb;\r\n    padding: 0.6em;\r\n    border-radius:5px;\r\n    margin-bottom: 10px;\r\n}\r\n.projHead{\r\n    font-size: 1em;\r\n}\r\np{\r\n    font-size:0.5em;\r\n}\r\np span{\r\n    color: #3466cc;\r\n}\r\nbutton{\r\n    background: #3466cc;\r\n    color: #eee;\r\n    border:none;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    float: right;\r\n    font-size: 0.5em;\r\n}"

/***/ }),

/***/ "./src/app/lender/lender.component.html":
/*!**********************************************!*\
  !*** ./src/app/lender/lender.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <h3>Projects</h3>\n    <div class=\"projectContainer\">\n      <div *ngFor=\"let proj of Projects \">\n        <div class=\"projectCard\">\n          <div class=\"projHead\">{{proj.projects.name}}</div>\n          <p>Amount required : <span>{{proj.projects.amount_req}}</span></p>\n          <button (click)=\"donate(proj.projects)\">donate</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/lender/lender.component.ts":
/*!********************************************!*\
  !*** ./src/app/lender/lender.component.ts ***!
  \********************************************/
/*! exports provided: LenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenderComponent", function() { return LenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LenderComponent = /** @class */ (function () {
    function LenderComponent(fb, http, user) {
        this.fb = fb;
        this.http = http;
        this.user = user;
    }
    LenderComponent.prototype.donate = function (proj) {
        var _this = this;
        console.log(proj);
        alert("project email:" + proj.email);
        this.http.post('/donate', { email: this.user.email, proj: proj.name, emailTo: proj.email, amount: proj.amount_req })
            .subscribe(function (data) {
            console.log(data);
            _this.projs();
        });
    };
    LenderComponent.prototype.projs = function () {
        var _this = this;
        this.http.get('/getproj')
            .subscribe(function (data) {
            console.log(data);
            _this.Projects = data;
        });
    };
    LenderComponent.prototype.ngOnInit = function () {
        this.projs();
    };
    LenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lender',
            template: __webpack_require__(/*! ./lender.component.html */ "./src/app/lender/lender.component.html"),
            styles: [__webpack_require__(/*! ./lender.component.css */ "./src/app/lender/lender.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LenderComponent);
    return LenderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    display:block;\r\n    width:80%;\r\n    padding:7em 2em;\r\n    margin: auto;\r\n    border-radius: 0px;\r\n    z-index: 10;\r\n}\r\n.fields{\r\n    position: relative;\r\n    padding-top: 1.5rem;\r\n}\r\n.alert {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 0.8s alertAnim forwards;\r\n            animation: 0.8s alertAnim forwards;\r\n}\r\n.button {\r\n    color: #222;\r\n    margin-top: 2rem;\r\n    border-radius: 0px;\r\n    width:25%;\r\n    border-radius: 30px;\r\n    float: right;\r\n    background-color: #bbb;\r\n}\r\nimg{\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n    height: 2em;\r\n}\r\n.h4 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: left;\r\n    width: 100%;\r\n    color:rgb(92, 90, 90);\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n.h3 {\r\n    margin-bottom: 0.6rem;\r\n    font-weight:bold;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: left;\r\n    width: 100%;\r\n    color:#bbb;\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n}\r\nlabel {\r\n    position: absolute;\r\n    top: 0;\r\n    color: #bbb;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 0.8em;\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: all 0.2s ease-out;\r\n}\r\ninput:placeholder-shown + label {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n            transform: translateY(20px);\r\n    cursor: text;\r\n}\r\ninput[type=\"email\"], input[type=\"password\"]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    border: none;\r\n    border-bottom: solid 1px #222;\r\n    border-radius: 1px;\r\n    height: auto;\r\n    transition: border-color 0.3s;\r\n    box-shadow: none;\r\n    padding-left: 2px;\r\n    padding-right: 0px;\r\n    color: #111;\r\n    cursor: text;\r\n    background: rgba(0,0,0,0);\r\n    font-size: 0.9em;\r\n}\r\ninput[type=\"email\"]:focus,input[type=\"password\"]:focus{\r\n    border-color: #bbb;\r\n}\r\ninput.ng-valid.ng-touched {\r\n    border-bottom: 1px solid #0067b8;\r\n  }\r\ninput.ng-invalid.ng-touched {\r\n    border-bottom: 1px solid rgba(180, 24, 24, 0.5);\r\n}\r\n::-webkit-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n:-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n::-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n::placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n    <div class=\"form-container\">\n      <div class=\"row columns\">\n        <div class=\"h3\">Login</div>\n        <div class=\"fields\">\n          <input type=\"email\" id=\"dynamic-label-input\" formControlName=\"email\" placeholder=\"Email ID\">\n          <label for=\"dynamic-label-input\">Email ID</label>\n        </div>\n        <div class=\"fields\">\n          <input type=\"password\" id=\"dynamic-label-input\" formControlName=\"password\" placeholder=\"Password\">\n          <label for=\"dynamic-label-input\">Password</label>\n        </div>\n        <input type=\"submit\" class=\"button expanded\" value=\"login\" [disabled]=\"!loginForm.valid\">\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, user, router) {
        this.fb = fb;
        this.http = http;
        this.user = user;
        this.router = router;
        this.loginForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.login = function (lForm) {
        var _this = this;
        console.log(lForm);
        this.http.post('/login', lForm)
            .subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(JSON.stringify(data));
            if (result.success == true) {
                _this.user.name = result.user.name;
                _this.user.email = result.user.email;
                _this.user.roles = result.user.role;
                if (result.user.role == "lender") {
                    _this.router.navigateByUrl('/profile/lender');
                }
                else if (result.user.role == "borrower") {
                    _this.router.navigateByUrl('/profile/borrow');
                }
                else if (result.user.role == "admin") {
                    _this.router.navigateByUrl('/profile/admin');
                }
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    display: block;\r\n    font-size: 2em;\r\n    font-family: 'Montserrat', sans-serif;\r\n    text-align: center;\r\n}\r\n.headerText{\r\n    text-align: center;\r\n    padding-top:3em;\r\n    color: #bbb;\r\n}\r\nh2,h3,h5{\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #bbb;\r\n}\r\n.btnCont{\r\n    margin-top: 1em;\r\n    text-align: center;\r\n}\r\na{\r\n    display: block;  \r\n    width: 80%;\r\n    font-size: 0.5em;\r\n    margin: auto;\r\n    padding:10px 70px;\r\n    border:none;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    font-weight: lighter;\r\n    text-decoration: none;\r\n}\r\n.btn1{\r\n    box-shadow: 0 0 0 0;\r\n    color: #eee;\r\n    text-decoration: underline;\r\n}\r\n.btn2{\r\n    background-color: #bbb;\r\n    color: #222;\r\n}\r\n.fb-btn{\r\n    font-size: 0.5em;\r\n    padding:10px 15px;\r\n    border:none;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    font-weight: lighter;\r\n    background-color: rgb(66,103,178);\r\n    color: white;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"headerText\">\n    <h2>Hey there!</h2>\n    <h3>Join our community.</h3>\n  </div>\n  <div class=\"btnCont\">\n    <a [routerLink]=\"['signup']\" class=\"btn2\">Join Us</a>\n    <h5>or</h5>\n    <a href=\"/auth/facebook\" class=\"fb-btn\">login with facebook</a>\n    <br/>\n    <a [routerLink]=\"['login']\" class=\"btn1\">Already a user? login</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(http, user) {
        this.http = http;
        this.user = user;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background: url('bg4.jpg');\r\n    position: absolute;\r\n    top:0;\r\n    background-size: contain;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n}\r\n.container{\r\n    background-color: rgba(1,1,1,0.7);\r\n    height: 80vh;\r\n    width:70%;\r\n    display: block;\r\n    margin:4em auto;\r\n    border-radius:10px;\r\n}\r\n.vertical-menu {\r\n    font-size:0.8em;\r\n    width: 20%; /* Set a width if you like */\r\n    display: block;\r\n    border: none;\r\n    height: 90vh;\r\n    z-index: 6;\r\n    float:left;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.vertical-menu a {\r\n    position: relative;\r\n    color: #ddd; /* Black text color */\r\n    display: block; /* Add some padding */\r\n    text-decoration: none; /* Remove underline from links */\r\n    height: 10vh;\r\n    padding-top: 3vh;\r\n    text-align: center;\r\n    font-size: 1em;\r\n    font-weight: lighter;\r\n}\r\n.vertical-menu a:hover {\r\n    background-color: #222;\r\n}\r\n.vertical-menu .active {\r\n    color: white;\r\n    background: #111;\r\n    padding: 4vh;\r\n    padding-bottom: 3vh;\r\n    font-size: 1.5em;\r\n    font-weight: lighter;\r\n    text-align: center;\r\n}\r\n.vertical-menu a.blue{\r\n    background-color: #222;\r\n    color: rgb(0,102,204);\r\n    border-right: rgb(0,102,204) 5px solid;\r\n}\r\n.admin{\r\n    display: block;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    margin: auto;\r\n}\r\n.content{\r\n    width: 80%;\r\n    background: #222;\r\n    height:90vh;\r\n    float: right;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n.banner{\r\n    width:100%;\r\n    min-height: 5vh;\r\n    background-color: #111;\r\n    border-top-right-radius: 10px;\r\n}\r\n.welcomeUser{\r\n    text-align: center;\r\n    font-size: 1em;\r\n    padding-top:0.3em;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #ddd;\r\n    font-weight: lighter;\r\n}\r\n.router{\r\n    min-height: 60vh;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"vertical-menu\">\n      <div class=\"active\">\n        <img src=\"../../assets/img/admin.png\" class=\"admin\" />\n      </div>\n      <div *ngIf=\"!user.admin\">\n      <a (click)=\"roles()\">Projects</a>\n    </div>\n      <a [routerLink]=\"['action']\">Dashboard</a>\n\n    </div>\n    <div class=\"content\">\n      <div class=\"banner\">\n        <div class=\"welcomeUser\">\n          Welcome {{username}}\n        </div>\n      </div>\n      <div class=\"router\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(user, router) {
        this.user = user;
        this.router = router;
        this.username = this.user.name;
        this.admin = this.user.admin;
    }
    ProfileComponent.prototype.roles = function () {
        if (this.user.roles == "lender") {
            this.router.navigateByUrl('/profile/lender');
        }
        else if (this.user.roles == "borrower") {
            this.router.navigateByUrl('/profile/borrow');
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:2em;\r\n}\r\n.form-container {\r\n    display:block;\r\n    width:80%;\r\n    padding:0 1em;\r\n    margin: auto;\r\n    border-radius: 0px;\r\n    z-index: 10;\r\n}\r\n.fields{\r\n    position: relative;\r\n    padding-top: 1rem;\r\n}\r\n.alert {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 0.8s alertAnim forwards;\r\n            animation: 0.8s alertAnim forwards;\r\n}\r\n.button {\r\n    color: #222;\r\n    margin-top: 2rem;\r\n    border-radius: 0px;\r\n    width:25%;\r\n    border-radius: 30px;\r\n    float: right;\r\n    background-color: #bbb;\r\n}\r\nimg{\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n    height: 2em;\r\n}\r\n.h4 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: left;\r\n    width: 100%;\r\n    color:rgb(92, 90, 90);\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n.h3 {\r\n    margin-bottom: 0.6rem;\r\n    font-weight:bold;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: left;\r\n    width: 100%;\r\n    color:#bbb;\r\n    padding-top: 10px;\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n}\r\nlabel {\r\n    position: absolute;\r\n    top: 0;\r\n    color: #bbb;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 0.8em;\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: all 0.2s ease-out;\r\n}\r\ninput:placeholder-shown + label {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n            transform: translateY(20px);\r\n    cursor: text;\r\n}\r\ninput[type=\"email\"], input[type=\"password\"], input[type=\"text\"]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    border: none;\r\n    border-bottom: solid 1px #222;\r\n    border-radius: 1px;\r\n    height: auto;\r\n    transition: border-color 0.3s;\r\n    box-shadow: none;\r\n    padding-left: 2px;\r\n    padding-right: 0px;\r\n    color: #111;\r\n    cursor: text;\r\n    background: rgba(0,0,0,0);\r\n    font-size: 0.9em;\r\n}\r\ninput[type=\"email\"]:focus,input[type=\"password\"]:focus,input[type=\"text\"]:focus{\r\n    border-color: #bbb;\r\n}\r\ninput.ng-valid.ng-touched {\r\n    border-bottom: 1px solid #0067b8;\r\n  }\r\ninput.ng-invalid.ng-touched {\r\n    border-bottom: 1px solid rgba(180, 24, 24, 0.5);\r\n}\r\n::-webkit-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n:-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n::-ms-input-placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n::placeholder{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    text-align: left;\r\n    color:rgba(0,0,0,0.6);\r\n    cursor: text;\r\n}\r\n/* custom select */\r\nselect{\r\n    background: #bbb;\r\n    border: none;\r\n    border-bottom: 1px rgb(92, 90, 90) solid;\r\n    font-size: 0.9em;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n    <div class=\"form-container\">\n      <div class=\"row columns\">\n        <div class=\"h3\">Sign Up</div>\n        <div class=\"fields\">\n          <input type=\"text\" id=\"dynamic-label-input\" formControlName=\"username\" placeholder=\"Username\">\n          <label for=\"dynamic-label-input\">Username</label>\n        </div>\n        <div class=\"fields\">\n          <input type=\"email\" id=\"dynamic-label-input\" formControlName=\"email\" placeholder=\"Email ID\">\n          <label for=\"dynamic-label-input\">Email ID</label>\n        </div>\n        <div class=\"fields\">\n          <input type=\"password\" id=\"dynamic-label-input\" formControlName=\"password\" placeholder=\"Password\">\n          <label for=\"dynamic-label-input\">Password</label>\n        </div>\n        <div class=\"fields\">\n          <input type=\"password\" id=\"dynamic-label-input\" formControlName=\"confPassword\" placeholder=\"Confirm password\">\n          <label for=\"dynamic-label-input\">Confirm password</label>\n        </div>\n        <select formControlName=\"roles\">\n          <option value=\"lender\">Lender</option>\n          <option value=\"borrower\">Borrower</option>\n        </select>\n        <input type=\"submit\" class=\"button expanded\" value=\"Register\" [disabled]=\"!signupForm.valid\">\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, http, user, router) {
        this.fb = fb;
        this.http = http;
        this.user = user;
        this.router = router;
        this.signupForm = fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'roles': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SignupComponent.prototype.signup = function (sForm) {
        var _this = this;
        console.log(sForm);
        this.http.post('/signup', sForm)
            .subscribe(function (data) {
            console.log(data);
            var result = JSON.parse(JSON.stringify(data));
            console.log(result.user.role);
            if (result.success == true) {
                _this.user.name = result.user.name;
                _this.user.email = result.user.email;
                _this.user.roles = result.user.role;
                if (result.user.role == "lender") {
                    _this.router.navigateByUrl('/profile/lender');
                }
                else if (result.user.role == "borrower") {
                    _this.router.navigateByUrl('/profile/borrow');
                }
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.name = "";
        this.roles = "";
        this.email = "";
        this.admin = false;
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mean\meanApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map