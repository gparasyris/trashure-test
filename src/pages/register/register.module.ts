import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { LocalProvidersModule } from '../../providers/local-providers.module';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    LocalProvidersModule,
    TranslateModule
  ],
})
export class RegisterPageModule {}
