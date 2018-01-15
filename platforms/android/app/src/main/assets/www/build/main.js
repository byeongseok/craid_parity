webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_c_metadata_c_metadata__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_x2js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_x2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_x2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, file, ofile, fileChooser, filePath, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.ofile = ofile;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.cmeta = new __WEBPACK_IMPORTED_MODULE_4__providers_c_metadata_c_metadata__["a" /* CMetadataProvider */]();
        this.count = 0;
    }
    HomePage.prototype.chooseFile = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            _this.filePath.resolveNativePath(uri).then(function (nativeUrl) {
                _this.sourceFilePath = nativeUrl.substring(0, nativeUrl.lastIndexOf('/'));
                _this.sourceFileName = nativeUrl.substring(nativeUrl.lastIndexOf('/') + 1, nativeUrl.length);
                _this.file.resolveDirectoryUrl(_this.sourceFilePath).then(function (directoryEntry) {
                    _this.file.getFile(directoryEntry, _this.sourceFileName, {}).then(function (fileEntry) {
                        fileEntry.getMetadata(function (metadata) {
                            _this.originalFileSize = metadata.size;
                            alert("size: " + metadata.size);
                            //alert('file path: ' + this.path);
                            //this.writeSplitFile(this.size);
                            _this.showConfirm();
                        });
                    });
                });
            });
        });
    };
    HomePage.prototype.writeSplitFile = function (originalFilePath, originalFileName, size) {
        var _this = this;
        var splitnames = [];
        var splitSize;
        splitSize = Math.floor(size / 4);
        this.cmeta.splitSize = splitSize; //set split size
        this.file.readAsArrayBuffer(originalFilePath, originalFileName).then(function (arrayBuffer) {
            var i;
            for (i = 0; i < 4; i++) {
                var blob = new Blob([new Uint8Array(arrayBuffer, i * splitSize, splitSize)]);
                _this.contents = blob;
                _this.file.writeFile(originalFilePath, (i).toString() + "_" + originalFileName, _this.contents, { replace: true });
                splitnames.push((i).toString() + "_" + originalFileName);
                if (i == 3) {
                    if (size % 4 != 0) {
                        _this.cmeta.remainingBytes = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer, (i + 1) * splitSize, size % 4));
                    }
                }
            }
        }).then(function () {
            _this.cmeta.splitName = splitnames;
            //this.showToast("Finish split file");
            var timeStamp2 = new Date();
            alert((timeStamp2.getTime() - _this.timeStamp1.getTime()).toString());
            _this.makeMetaFile(_this.cmeta);
        });
    };
    HomePage.prototype.makeMetaFile = function (cmeta) {
        var parser = new __WEBPACK_IMPORTED_MODULE_6_x2js___default.a();
        var fd;
        var splitCount = cmeta.splitName.length;
        var splitfiles = [];
        for (var i = 1; i <= splitCount; i++) {
            splitfiles.push({ 'sFileName': cmeta.splitName[i - 1], 'sFileSize': cmeta.splitSize, '_order': i.toString() });
        }
        fd = { "FILE": { "SplitFile": splitfiles, "RemaingBytes": cmeta.remainingBytes } };
        var content = parser.js2xml(fd);
        this.file.writeFile(this.sourceFilePath, 'test.xml', content, { replace: true });
    };
    HomePage.prototype.writeMergeFile = function (filePath, fileName, buf) {
        var _this = this;
        var bb = new Blob([]);
        var i = 0;
        for (i; i < buf.length; i++) {
            bb = new Blob([bb, buf[i]]);
        }
        if (i == buf.length) {
            this.ofile.writeFile(filePath, 'merge_' + fileName, bb, { replace: true }).then(function () {
                var timeStamp2 = new Date();
                alert((timeStamp2.getTime() - _this.timeStamp1.getTime()).toString());
            });
        }
    };
    HomePage.prototype.mergeFiles = function (filePath, fileName) {
        var _this = this;
        var parser = new __WEBPACK_IMPORTED_MODULE_6_x2js___default.a();
        var meta;
        var buf = new Array();
        var count = 0;
        this.file.readAsText(filePath, fileName).then(function (str) {
            meta = parser.xml2js(str);
            var _loop_1 = function (i) {
                _this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(function (arrayBuffer) {
                    buf[i] = arrayBuffer;
                    count++;
                    if (count == meta["FILE"]["SplitFile"].length) {
                        _this.writeMergeFile(filePath, fileName, buf);
                    }
                });
            };
            for (var i = 0; i < meta["FILE"]["SplitFile"].length; i++) {
                _loop_1(i);
            }
        });
    };
    HomePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Split File',
            message: this.sourceFileName,
            buttons: [
                {
                    text: 'Split',
                    handler: function () {
                        _this.timeStamp1 = new Date();
                        _this.showToast('1: ' + _this.timeStamp1.getTime());
                        //this.timeStamp.getMilliseconds();
                        _this.writeSplitFile(_this.sourceFilePath, _this.sourceFileName, _this.originalFileSize);
                    }
                },
                {
                    text: 'Merge',
                    handler: function () {
                        _this.timeStamp1 = new Date();
                        _this.showToast('1: ' + _this.timeStamp1.getTime());
                        _this.mergeFiles(_this.sourceFilePath, _this.sourceFileName);
                    }
                },
                { text: 'Cancel' }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0111_home\Craid\craidFile\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      File Split Test\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="chooseFile()">Choose File</button>\n  \n</ion-content>\n'/*ion-inline-end:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0111_home\Craid\craidFile\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_c_metadata_c_metadata__["a" /* CMetadataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

/*
    this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(arrayBuffer => {
      const blob = new Blob([new Uint8Array(arrayBuffer)]);
      buf.push(blob);
      //return this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
      if(buf.length==meta["FILE"]["SplitFile"].length){
        alert(buf.length);
        for (let n:number=0;n<buf.length;n++){
         // alert(buf[n]);
          this.file.writeFile(filePath, 'new.txt', buf[n], { append: true, replace: false });
        }
      }
    });
  }
  /*
  alert(buf.length);
  for (let n:number=0;n<buf.length;n++){
    this.file.writeFile(filePath, 'new.txt', buf[n], { append: true, replace: false });
  }
});
}
  /*
  for (let i: number = 0; i < bloob.length; i++) {
    this.file.writeFile(filePath, 'new.txt', bloob[i], { append: true, replace: false });
  }*/
//});
/*
//alert(typeof(str.toString()));
//meta = parser.xml2js(str);
for (let i: number = 0; i < meta["FILE"]["SplitFile"].length; i++) {
  this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(arrayBuffer => {
    const blob = new Blob([new Uint8Array(arrayBuffer)]);
    this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false }).catch(error => {
      alert("write " + JSON.stringify(error));
    });
  }).catch(error => {
    alert("read " + JSON.stringify(error));
  })
}
    /* for (let i: number = 0; i < splitCount; i++) {
       this.file.readAsArrayBuffer(filePath, sd[i]['sFileName']).then(arrayBuffer => {
         const blob = new Blob([new Uint8Array(arrayBuffer)]);
         this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
       });
       /*
       result = this.file.checkFile(filePath, sd[i]['sFileName']);
       if (result) {
         this.file.readAsArrayBuffer(filePath, sd[i]['sFileName']).then(arrayBuffer => {
           const blob = new Blob([new Uint8Array(arrayBuffer)]);
           this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
         });
       } else {
         alert("There is no " + sd[i]['sFileName']);
         break;
       }
  }*/
/*.then(() => {
    this.showToast("Finish merge file");
  });*/
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
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

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_c_metadata_c_metadata__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_c_metadata_c_metadata__["a" /* CMetadataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0111_home\Craid\craidFile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\1_work\1_soc\2_workspace\IonicProject\Craid_0111_home\Craid\craidFile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map