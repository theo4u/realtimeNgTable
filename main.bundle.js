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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/angular.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Angular realtime table with Pusher\n  </a>\n</nav>\n\n<div class=\"container\">\n\n  <!-- Alert here -->\n <div class=\"app-level-alert\">\n    <ng-alert [(message)]=\"message\" [dismissable]=\"true\" [closeType]=\"closeTypes.TIMES\"></ng-alert>\n </div>\n  <!-- /Alert here -->\n\n  <p align=\"center\">\n    <img src=\"assets/pusher.svg\" width=\"30\" height=\"100\" width=\"60\"  alt=\"Pusher\">\n  </p>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n        <app-list-employee></app-list-employee>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n        <app-create-employee></app-create-employee>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theo4u_ng_alert__ = __webpack_require__("./node_modules/@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_ngAlert) {
        this._ngAlert = _ngAlert;
        this.closeTypes = __WEBPACK_IMPORTED_MODULE_1__theo4u_ng_alert__["a" /* CloseType */];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertSub = this._ngAlert.getSource().subscribe(function (message) {
            _this.message = message;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._alertSub.unsubscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__theo4u_ng_alert__["d" /* NgAlertService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__ = __webpack_require__("./node_modules/@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_employee_create_employee_component__ = __webpack_require__("./src/app/create-employee/create-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_employee_list_employee_component__ = __webpack_require__("./src/app/list-employee/list-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_employee_edit_employee_component__ = __webpack_require__("./src/app/edit-employee/edit-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employee_service__ = __webpack_require__("./src/app/services/employee.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__create_employee_create_employee_component__["a" /* CreateEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__list_employee_list_employee_component__["a" /* ListEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["c" /* NgAlertModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_employee_service__["a" /* EmployeeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-employee/create-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  create-employee works!\n</p>\n"

/***/ }),

/***/ "./src/app/create-employee/create-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent() {
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
    };
    CreateEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-create-employee',
            template: __webpack_require__("./src/app/create-employee/create-employee.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-employee works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent() {
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
    };
    EditEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-employee',
            template: __webpack_require__("./src/app/edit-employee/edit-employee.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/list-employee/list-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"pb-2 mb-0\">Employees</h6>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Position</th>\n      <th scope=\"col\">Salary</th>\n      <th scope=\"col\">Created At</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employee of employees\">\n      <td>{{employee.name}}</td>\n      <td>{{employee.position}}</td>\n      <td>{{employee.salary}}</td>\n      <td>{{employee.createdAt | date:'yyyy/MM/dd'}}</td>\n      <td>\n        <button class=\"btn btn-primary btn-sm\">\n          <span class=\"oi oi-pencil\"></span>\n        </button>\n        <button (click)=\"delete(employee)\" class=\"btn btn-danger btn-sm\">\n          <span class=\"oi oi-trash\"></span>\n        </button>\n      </td>\n    </tr>\n    <tr *ngIf=\"loading\">\n     <td colspan=\"5\" align=\"center\">Fetching Employees</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/list-employee/list-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_employee_service__ = __webpack_require__("./src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__ = __webpack_require__("./node_modules/@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListEmployeeComponent = /** @class */ (function () {
    function ListEmployeeComponent(_employeeService, _ngAlert) {
        this._employeeService = _employeeService;
        this._ngAlert = _ngAlert;
        this.employees = [];
        this.loading = true;
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._employeeService.list()
            .subscribe(function (employees) {
            _this.loading = false;
            _this.employees = employees;
        });
    };
    ListEmployeeComponent.prototype.delete = function (employee) {
        var _this = this;
        // show delete confirmation with ngAlert
        this._ngAlert.push({
            message: "<strong>Are you sure!</strong> you want to delele this employee with name <strong>" + employee.name + "</strong>",
            type: __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["b" /* MessageType */].warning,
            buttons: [
                {
                    label: 'Continue',
                    action: function () {
                        _this._actualDelete(employee);
                    },
                    css: 'btn btn-danger'
                }
            ]
        });
    };
    ListEmployeeComponent.prototype._actualDelete = function (employee) {
        var _this = this;
        this._employeeService.delete(employee)
            .subscribe(function () {
            // remove the employee if removed successfully
            _this.employees = _this.employees.filter(function (item) { return item !== employee; });
            _this._ngAlert.push({
                message: employee.name + " removed",
                type: __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["b" /* MessageType */].success
            });
        });
    };
    ListEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list-employee',
            template: __webpack_require__("./src/app/list-employee/list-employee.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["d" /* NgAlertService */]])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this._mock = [];
        for (var i = 0; i < 20; i++) {
            this._mock.push({
                name: 'Data ' + i,
                id: i,
                position: 'Manager',
                salary: '$340' + i,
                createdAt: new Date().toISOString()
            });
        }
    }
    EmployeeService.prototype.list = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this._mock);
    };
    /**
     * Create new employee
     * @param param
     * @return Observable<IEmployee> with the id
     */
    EmployeeService.prototype.create = function (param) {
        param.id = this._mock.length;
        param.createdAt = new Date().toISOString();
        this._mock.push(param);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(param);
    };
    /**
     * Remove an employee
     * @param employee to remove
     * @return Observable<IEmployee> the employee just removed
     */
    EmployeeService.prototype.delete = function (employee) {
        this._mock = this._mock.filter(function (emp) { return emp.id !== employee.id; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(employee);
    };
    /**
     * Update an employee using the employee id
     * @param param:Object what to update with in the employee
     * @return Observable<IEmployee>
     */
    EmployeeService.prototype.edit = function (param, id) {
        var index = this._mock.findIndex(function (emp) { return emp.id === id; });
        this._mock[index] = __assign({}, this._mock[index], param);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this._mock[index]);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmployeeService);
    return EmployeeService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
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