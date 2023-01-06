import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Perritas', url: '/customers', icon: 'accessibility' },
    { title: 'Cars', url: '/cars', icon: 'car-sport' },
    { title: 'Inicio de Sesion', url: '/login', icon: 'log-in' }
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
