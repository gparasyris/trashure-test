import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LocalProvidersModule } from '../../providers/local-providers.module';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LocalProvidersModule,
    TranslateModule
  ],
})
export class LoginPageModule {}
