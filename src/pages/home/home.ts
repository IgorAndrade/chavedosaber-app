import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CheckoutTripPage } from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  public go(){
    this.nav.push(CheckoutTripPage);
  }

  constructor(public nav: NavController) {
  }
}

//
