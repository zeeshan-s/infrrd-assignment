webpackJsonp([1,4],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingSpinnerService = (function () {
    function LoadingSpinnerService() {
        this.spinnerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.spinnerState = this.spinnerSubject.asObservable();
    }
    LoadingSpinnerService.prototype.show = function () {
        this.spinnerSubject.next({ show: true });
    };
    LoadingSpinnerService.prototype.hide = function () {
        this.spinnerSubject.next({ show: false });
    };
    LoadingSpinnerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoadingSpinnerService);
    return LoadingSpinnerService;
}());
//# sourceMappingURL=loading-spinner.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(406);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_loading_spinner_loading_spinner_service__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loader) {
        this.loader = loader;
        this.meetingRooms = [{
                name: "Meeting Room 1",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 2",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 3",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 4",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 5",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            }, {
                name: "Meeting Room 6",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 7",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 8",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 9",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            },
            {
                name: "Meeting Room 10",
                bookings: [],
                contentCollapsed: false,
                status: "Available"
            }];
        this.showAllertMessage = "";
        this.bookingRequest = {
            date: null,
            time: {
                from: null,
                to: null
            },
            agenda: "",
            userName: "",
        };
        this.selectedRoom = {};
        this.toggleModel = false;
        this.bookingError = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkRoomStatus();
    };
    AppComponent.prototype.checkRoomStatus = function () {
        var _this = this;
        var currentDate = this.formatDate(new Date());
        var minutes = new Date().getMinutes();
        minutes = minutes.toString().length == 1 ? "0" + minutes : minutes;
        var timeNow = new Date().getHours() + ":" + minutes;
        this.bookingError = "";
        if (this.bookingRequest.date) {
            var requestedDate = new Date(this.bookingRequest.date);
            if (requestedDate.getDay() == 6 || requestedDate.getDay() == 0) {
                this.bookingError = "Bookings available only on weekdays";
            }
            else if (this.parseTime(this.bookingRequest.time.from) < 900 || this.parseTime(this.bookingRequest.time.to) > 1800) {
                this.bookingError = "Time Range must be bitween 9:00 AM - 6:00 PM";
            }
            else if (this.parseTime(this.bookingRequest.time.to) - this.parseTime(this.bookingRequest.time.from) < 30) {
                this.bookingError = "Meeting duration must be more thane 30 Min";
            }
            else {
                this.loader.show();
                this.meetingRooms.forEach(function (element) {
                    if (element.bookings.length) {
                        element.bookings.forEach(function (booking) {
                            if (booking.date == currentDate && _this.roomAvailablity(timeNow, booking.time.from, booking.time.to)) {
                                element.status = "In-Use";
                            }
                            else if (_this.bookingRequest.date && _this.bookingRequest.date == booking.date && _this.isRoomBooked(booking)) {
                                element.status = "Booked";
                            }
                            else {
                                element.status = "Available";
                            }
                        });
                    }
                    else {
                        element.status = "Available";
                    }
                });
                setTimeout(function () {
                    _this.loader.hide();
                }, 1000);
            }
        }
    };
    AppComponent.prototype.isRoomBooked = function (booking) {
        var booked = false;
        if (booking.date == this.bookingRequest.date)
            if (this.parseTime(this.bookingRequest.time.from) <= this.parseTime(booking.time.from)) {
                if (this.parseTime(this.bookingRequest.time.to) < this.parseTime(booking.time.from)) {
                    if (this.parseTime(this.bookingRequest.time.to) < this.parseTime(booking.time.from)) {
                    }
                }
                else if (this.parseTime(this.bookingRequest.time.from) <= this.parseTime(booking.time.from)) {
                    booked = true;
                }
            }
            else {
                booked = false;
            }
        return booked;
    };
    AppComponent.prototype.parseTime = function (time) {
        if (time) {
            return parseInt(time.split(':').join(''));
        }
    };
    AppComponent.prototype.roomAvailablity = function (time, from, to) {
        var fromTime = parseInt(from.split(':').join(""));
        var toTime = parseInt(to.split(':').join(""));
        var selectedTime = parseInt(time.split(':').join(""));
        if (fromTime <= selectedTime && toTime > selectedTime) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.searchRooms = function () {
        this.checkRoomStatus();
    };
    AppComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    AppComponent.prototype.confirmBooking = function (room) {
        this.selectedRoom = room;
        this.toggleModel = true;
    };
    AppComponent.prototype.bookRoom = function () {
        var _this = this;
        this.bookingError = "";
        if (this.bookingRequest.date) {
            this.checkRoomStatus();
            this.meetingRooms.forEach(function (element) {
                if (element.name == _this.selectedRoom.name) {
                    if (element.status == "Available") {
                        element.bookings.push(_this.bookingRequest);
                        _this.bookingRequest = {
                            date: null,
                            time: {
                                from: null,
                                to: null
                            },
                            agenda: "",
                            userName: ""
                        };
                        _this.showAllertMessage = "Meeting Room Booked Successfully";
                        _this.toggleModel = false;
                        setTimeout(function () {
                            _this.showAllertMessage = "";
                        }, 2000);
                    }
                    else {
                        _this.bookingError = "This room is not avaliable for selected schedule";
                    }
                }
            });
        }
    };
    AppComponent.prototype.deleteBooking = function (roomIndex, bookingIndex) {
        this.meetingRooms[roomIndex].bookings.splice(bookingIndex, 1);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(464),
            styles: [__webpack_require__(460)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_loading_spinner_loading_spinner_service__["a" /* LoadingSpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_loading_spinner_loading_spinner_service__["a" /* LoadingSpinnerService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_loading_spinner_loading_spinner_service__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__core_loading_spinner_loading_spinner_service__["a" /* LoadingSpinnerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_header_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_spinner_loading_spinner_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(465),
            styles: [__webpack_require__(461)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_spinner_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.visible = false;
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe(function (state) {
            _this.visible = state.show;
        });
    };
    LoadingSpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerStateChanged.unsubscribe();
    };
    LoadingSpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(466),
            styles: [__webpack_require__(462)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__loading_spinner_service__["a" /* LoadingSpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__loading_spinner_service__["a" /* LoadingSpinnerService */]) === 'function' && _a) || Object])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
    var _a;
}());
//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ 406:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.app-header {\n  background-image: url(\"/dist/assets/images/header-bg.jpg\");\n  height: 120px;\n  background-position: left;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.loggedin-user {\n  color: #fff;\n  float: right;\n  cursor: default; }\n  .loggedin-user .user-icon {\n    display: inline-block;\n    background: red;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    border-radius: 50%; }\n  .loggedin-user .name {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    padding-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)();
// imports


// module
exports.push([module.i, ".loader {\n  position: fixed;\n  background: rgba(15, 20, 27, 0.54);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 999999;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .loader img {\n    margin: auto;\n    width: 70px; }\n\n.spinner-hidden {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main>\n    <div class=\"container margin-top\">\n      <div class=\"row\">\n          <aside class=\"column-30 booking-column\">\n            <h2> Booking Details</h2>\n            <label display-block>Date:</label>\n            <input type=\"date\" class=\"date-input\" [(ngModel)]=\"bookingRequest.date\">\n            <label display-block>Time:</label>\n            <div class=\"time-input\">\n                <input type=\"time\" [(ngModel)]=\"bookingRequest.time.from\">\n                <span>To</span>\n                <input type=\"time\" class=\"margin-left-10\" [(ngModel)]=\"bookingRequest.time.to\">\n            </div>\n            <div class=\"search-box-footer\">\n              <div class=\"error-msg booking-validations\">\n                  {{bookingError}}\n              </div>\n              <button type=\"button\" class=\"search-btn\" (click)=\"searchRooms()\">Search</button>\n            </div>\n          </aside>\n          <section class=\"column-70\">\n            <div class=\"rooms-list\" *ngFor=\"let room of meetingRooms; let roomIndex = index\">\n              <div class=\"room-icon\"> # </div>\n              <div class=\"room-content\">\n                <div class=\"room-name\">\n                  {{room.name}}\n                </div>\n                <div class=\"button-list\">\n                  <span class=\"room-status\">{{room.status}}</span>\n                  <button type=\"button\" (click)=\"confirmBooking(room)\">Book</button>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <ul>\n                  <li (click)=\"room.contentCollapsed = !room.contentCollapsed\">\n                    View All Meetings\n                  </li>\n                </ul>\n                <div class=\"all-meetings\" [ngClass]=\"{'expand': room.contentCollapsed}\">\n                  <div class=\"meeting-date\" *ngFor=\"let booking of room.bookings; let i = index\">\n                      <span class=\"scheduled-date\">{{booking.date}}</span>\n                      <span class=\"scheduled-time\">{{booking.time.from}} to {{booking.time.to}}</span>\n                      <span class=\"scheduled-user\">{{booking.userName}}</span>\n                      <span class=\"scheduled-user error-msg cursur-pointer\" (click)=\"deleteBooking(roomIndex, i)\">Delete</span>\n                  </div>\n                  <div *ngIf=\"room.bookings.length == 0\">\n                    <span class=\"error-msg\">\n                      There no bookings found yet\n                    </span>\n                  </div>\n              </div>\n              </div>\n            </div>\n          </section>\n      </div>\n      \n    </div>\n</main>\n<div class=\"modal\" *ngIf=\"toggleModel\">\n    <div class=\"modal-content\">\n    <div class=\"modla-header\">Confirm Booking <span class=\"modal-close\" (click)=\"toggleModel = false\">x</span></div>\n    <div class=\"modal-body\">\n        <div class=\"form-row\">\n    \n        <div class=\"form-lbl\">Room Name</div>\n        <div class=\"form-input\">{{selectedRoom.name}}</div>\n    </div>\n    <div class=\"form-row\">\n    \n        <div class=\"form-lbl\">Date:</div>\n        <div class=\"form-input\">\n          <input type=\"date\" [(ngModel)]=\"bookingRequest.date\">\n        \n        </div>\n    </div>\n    <div class=\"form-row\">\n    \n        <div class=\"form-lbl\">Time:</div>\n        <div class=\"form-input\">\n          <input type=\"time\" [(ngModel)]=\"bookingRequest.time.from\">\n          <span>To</span>\n          <input type=\"time\" [(ngModel)]=\"bookingRequest.time.to\">\n          </div>\n    </div>\n    <div class=\"form-row\">\n    \n        <div class=\"form-lbl\">Agenda:</div>\n        <div class=\"form-input\"><textarea [(ngModel)]=\"bookingRequest.agenda\"></textarea></div>\n    </div>\n    <div class=\"form-row\">\n    \n        <div class=\"form-lbl\">User Name:</div>\n        <div class=\"form-input\"><input type=\"text\" [(ngModel)]=\"bookingRequest.userName\" ></div>\n    </div>\n    <div class=\"for-row error-msg\" *ngIf=\"bookingError\">\n      {{bookingError}}\n    </div>\n        </div>\n    <div class=\"modal-footer\">\n        <button class=\"confirm-btn\" (click)=\"bookRoom();\">Book</button>\n    </div></div>\n</div>\n\n<div class=\"alert-box\" *ngIf=\"showAllertMessage\">\n  {{showAllertMessage}}\n</div>\n\n<app-loading-spinner></app-loading-spinner>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <div class=\"container\">\n      <div class=\"logo-column display-inline-flex\">\n        <img src=\"assets/images/infrrd-logo.png\">\n      </div>\n      <div class=\"loggedin-user display-inline-flex\">\n        <!-- <span class=\"user-icon\">ZS</span>\n        <span class=\"name\">Zeeshan Shaikh</span> -->\n      </div>\n  </div>\n</header>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<!--This code is for spinner at page load-->\n<div  [class.spinner-hidden]=\"!visible\" class=\"loader\">\n \n    <img src=\"assets/images/loader.gif\">\n</div>\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[481]);
//# sourceMappingURL=main.bundle.js.map