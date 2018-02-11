import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { NotificationsPage } from './../notifications/notifications';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MuralPage } from '../mural/mural';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = MuralPage;
  tab2Root = NotificationsPage
  tab3Root = HomePage;
  tab4Root = RegisterPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
