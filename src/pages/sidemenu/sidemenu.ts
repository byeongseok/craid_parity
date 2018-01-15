import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  rootPage = "TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    //{title:'Dashboard',pageName:'TabsPage',tabComponent:'DashboardPage',index:0, icon:'ios-desktop-outline'},
    { title:'Files',pageName:'FilePage',tabComponent:'FilePage',index:3, icon:'md-list-box'},
    { title:'Clouds',pageName:'CloudPage',tabComponent:'CloudPage',index:1, icon:'md-cloud'},

    { title:'Friends',pageName:'FriendPage',tabComponent:'FriendPage',index:4, icon:'md-person-add'},
    { title:'Settings', pageName:'SettingPage', icon:'md-settings'},
    { title:'Notifications', pageName:'NotificationPage', icon:'md-notifications'},
    { title:'About', pageName:'AboutPage', icon:'md-settings'}
   // {title:'Add',pageName:'AddPage',tabComponent:'AddPage',index:2, icon:'ios-add'},

   
 
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if(page.index){
      params = { tabIndex: page.index };
    }

    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }
}
