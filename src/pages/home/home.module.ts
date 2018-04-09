import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LocalProvidersModule } from '../../providers/local-providers.module';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    LocalProvidersModule,
    TranslateModule
  ],
})
export class HomePageModule {}