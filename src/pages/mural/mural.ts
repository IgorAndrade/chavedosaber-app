import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import MuralProvider from '../../services/mural/mural';
import Mural from '../../model/mural';
/**
 * Generated class for the MuralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mural',
  templateUrl: 'mural.html',
})
export class MuralPage {
  public lista: Mural[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private muralService: MuralProvider) {
  }

  ionViewDidLoad() {
    this.muralService.getAll()
      .subscribe((lista)=>this.lista=lista)
  }

}
