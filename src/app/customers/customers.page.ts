import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){ //funcion para el routeo de customers->home, en vez de usar el router link, se llama a esto desde el html,se hace con la libreria router de angular
    this.router.navigate(['/home'])
  }

}
