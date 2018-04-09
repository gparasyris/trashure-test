import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/local-providers.module';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenticationProvider: AuthenticationProvider,
    public formBuilder: FormBuilder
  ) {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      pin: [, Validators.required],
      pinConfirm: [, Validators.required],
      email: [, []],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let newUser = {
      'name': this.registerForm.controls.name.value,
      'surname': this.registerForm.controls.surname.value,
      'username': this.registerForm.controls.username.value,
      'password': this.registerForm.controls.pin.value,
      'email': this.registerForm.controls.email.value,
    };
    this.authenticationProvider.register(newUser)
      .then((success) => {
        console.log('navigate to login page');
        this.navCtrl.setRoot('LoginPage');
      })
      .catch(err => {
        console.log(err);
      })
  }

}
