webpackJsonp([1],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidemenuPageModule = (function () {
    function SidemenuPageModule() {
    }
    SidemenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sidemenu__["a" /* SidemenuPage */]),
            ],
        })
    ], SidemenuPageModule);
    return SidemenuPageModule;
}());

//# sourceMappingURL=sidemenu.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuPage = (function () {
    function SidemenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = "TabsPage";
        this.pages = [
            //{title:'Dashboard',pageName:'TabsPage',tabComponent:'DashboardPage',index:0, icon:'ios-desktop-outline'},
            { title: 'Files', pageName: 'FilePage', tabComponent: 'FilePage', index: 3, icon: 'md-list-box' },
            { title: 'Clouds', pageName: 'CloudPage', tabComponent: 'CloudPage', index: 1, icon: 'md-cloud' },
            { title: 'Friends', pageName: 'FriendPage', tabComponent: 'FriendPage', index: 4, icon: 'md-person-add' },
            { title: 'Settings', pageName: 'SettingPage', icon: 'md-settings' },
            { title: 'Notifications', pageName: 'NotificationPage', icon: 'md-notifications' },
            { title: 'About', pageName: 'AboutPage', icon: 'md-settings' }
            // {title:'Add',pageName:'AddPage',tabComponent:'AddPage',index:2, icon:'ios-add'},
        ];
    }
    SidemenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    SidemenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0115\Craid\craidFile\src\pages\sidemenu\sidemenu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title text-center>Menu</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n  <!-- <ion-card>\n    <ion-item>\n      <ion-avatar>\n        hi\n      </ion-avatar>\n    </ion-item>\n  </ion-card> -->\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon itme-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n        {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0115\Craid\craidFile\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SidemenuPage);
    return SidemenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ })

});
//# sourceMappingURL=1.js.map