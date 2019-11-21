import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root', // Il ne vous dit rien ce selecteur ? 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Notes',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rappels',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Composants',
      url: '/composants',
      icon: 'apps'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
