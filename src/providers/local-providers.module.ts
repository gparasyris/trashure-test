import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

/* Importing Local Providers */
import { AuthenticationProvider } from './auth/authantication.provider';
import { UserProvider } from './user/user.provider';
/* Exporting  Classes, Providers, Interfaces the "regular" way */
export {
  AuthenticationProvider,
  UserProvider
};

@NgModule({
  providers: [ /* Don't add the services here */ ]
})

/* Exporting  Module with Singleton Providers */

export class LocalProvidersModule {
  static forRoot() {
    return {
      ngModule: LocalProvidersModule,
      providers: [
        AuthenticationProvider,
        UserProvider
      ]
    };
  }
}
