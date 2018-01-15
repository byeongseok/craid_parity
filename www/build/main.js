webpackJsonp([13],{

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		444,
		12
	],
	"../pages/add/add.module": [
		445,
		11
	],
	"../pages/cloud/cloud.module": [
		446,
		10
	],
	"../pages/dashboard/dashboard.module": [
		447,
		9
	],
	"../pages/file/file.module": [
		448,
		8
	],
	"../pages/friend/friend.module": [
		449,
		7
	],
	"../pages/login/login.module": [
		450,
		6
	],
	"../pages/notification/notification.module": [
		451,
		5
	],
	"../pages/profile/profile.module": [
		452,
		4
	],
	"../pages/register/register.module": [
		453,
		3
	],
	"../pages/setting/setting.module": [
		454,
		2
	],
	"../pages/sidemenu/sidemenu.module": [
		455,
		1
	],
	"../pages/tabs/tabs.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(293);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fire */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_c_metadata_c_metadata__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { HomePage } from '../pages/home/home';

var fire = {
    apiKey: "AIzaSyBaVXH011dDX8WG4JQYz8xHQQ610qIQUhc",
    authDomain: "craid-a1898.firebaseapp.com",
    databaseURL: "https://craid-a1898.firebaseio.com",
    projectId: "craid-a1898",
    storageBucket: "craid-a1898.appspot.com",
    messagingSenderId: "316102209082"
};
//firebase.initializeApp(fire);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cloud/cloud.module#CloudPageModule', name: 'CloudPage', segment: 'cloud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file/file.module#FilePageModule', name: 'FilePage', segment: 'file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friend/friend.module#FriendPageModule', name: 'FriendPage', segment: 'friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(fire),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_c_metadata_c_metadata__["a" /* CMetadataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
var MyApp = (function () {
    function MyApp() {
        this.rootPage = 'LoginPage';
    }
    MyApp.prototype.contructor = function (platform, statusBar, splashScreen) {
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0115\Craid\craidFile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0115\Craid\craidFile\src\app\app.html"*/
        })
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CMetadataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the CMetadataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CMetadataProvider = (function () {
    function CMetadataProvider() {
        //public csps: any;
        //public split_order:JSON;
        this.csp_name = null;
        this.split_names = [];
        this.split_fileid = null;
        this.isAscii = null;
        this.isEncrypted = null;
        this.secretKey = null;
        this.isRaid = null;
        this.remainingByte = '';
        //console.log('Hello CMetadataProvider Provider');
    }
    Object.defineProperty(CMetadataProvider.prototype, "fileUid", {
        get: function () {
            return this.file_uid;
        },
        set: function (File_uid) {
            this.file_uid = File_uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "cspName", {
        /*
        get splitOrder():JSON{
          return this.split_order;
        }
        */
        get: function () {
            return this.csp_name;
        },
        /*
        set splitOrder(Split_order:JSON){
          this.split_order=Split_order;
        }
        */
        set: function (Csp_name) {
            this.csp_name = Csp_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "splitName", {
        get: function () {
            return this.split_names;
        },
        set: function (Split_names) {
            this.split_names = Split_names;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "splitSize", {
        get: function () {
            return this.split_size;
        },
        set: function (Split_size) {
            this.split_size = Split_size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "splitFileID", {
        get: function () {
            return this.split_fileid;
        },
        set: function (Split_fileid) {
            this.split_fileid = Split_fileid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "fileType", {
        get: function () {
            return this.isAscii;
        },
        set: function (IsAscii) {
            this.isAscii = IsAscii;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "operationType", {
        get: function () {
            return this.isEncrypted;
        },
        set: function (IsEncrypted) {
            this.isEncrypted = IsEncrypted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "secretKeys", {
        get: function () {
            return this.secretKey;
        },
        set: function (SecretKey) {
            this.secretKey = SecretKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "raidType", {
        get: function () {
            return this.isRaid;
        },
        set: function (IsRaid) {
            this.isRaid = IsRaid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CMetadataProvider.prototype, "remainingBytes", {
        get: function () {
            return this.remainingByte;
        },
        set: function (remain) {
            this.remainingByte = remain;
        },
        enumerable: true,
        configurable: true
    });
    CMetadataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CMetadataProvider);
    return CMetadataProvider;
}());

//# sourceMappingURL=c-metadata.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.js.map