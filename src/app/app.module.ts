import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//import { HomePage } from '../pages/home/home';
import { CMetadataProvider } from '../providers/c-metadata/c-metadata';

export var fire = {
  apiKey: "AIzaSyBaVXH011dDX8WG4JQYz8xHQQ610qIQUhc",
  authDomain: "craid-a1898.firebaseapp.com",
  databaseURL: "https://craid-a1898.firebaseio.com",
  projectId: "craid-a1898",
  storageBucket: "craid-a1898.appspot.com",
  messagingSenderId: "316102209082"
};
//firebase.initializeApp(fire);


@NgModule({
  declarations: [
    MyApp,
    //HomePage,
   ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fire),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileChooser,
    FileOpener,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CMetadataProvider
  ]
})
export class AppModule {}
