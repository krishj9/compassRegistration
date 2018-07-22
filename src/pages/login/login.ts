import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployerCredentialsPage } from '../employer-credentials/employer-credentials';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToEmployerCredentials(params){
    if (!params) params = {};
    this.navCtrl.push(EmployerCredentialsPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
