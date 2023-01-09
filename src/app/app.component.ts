import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Conversaciones', url: '/customers', icon: 'accessibility' },
    { title: 'Cars', url: '/cars', icon: 'car-sport' },
    { title: 'Inicio de Sesion', url: '/login', icon: 'log-in' }
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  shareApp(){
    console.log("Boton de share, app.component")
    Share.share({
      title: 'mitituloLunaDePluton',
      text: 'Really weno texto',
      url: 'http://ionicframework.com/',
     
    });

  }
}
