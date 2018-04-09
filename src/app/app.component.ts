import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AuthenticationProvider } from '../providers/local-providers.module';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any, icon?: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private authenticationProvider: AuthenticationProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: "home", component: HomePage },
      { title: 'Login', icon: "log-in", component: 'LoginPage' },
      { title: 'Register', icon: "create", component: 'RegisterPage' },
      { title: 'Trashure Quiz', icon: "help-circle", component: 'QuizPage' },
      { title: 'Recycling', icon: "leaf", component: 'RecyclingPage' },
      { title: 'Scan QR!', icon: "qr-scanner", component: 'ScanqrPage' },
      { title: 'Contact us', icon: "chatbubbles", component: 'ContactPage' },
      { title: 'About', icon: "information-circle", component: 'AboutPage' },
      { title: 'Log out', icon: "log-out", component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.authenticationProvider.checkCredentials()) {
        this.rootPage = HomePage;
      }
      else{
        this.rootPage = 'LoginPage';
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
