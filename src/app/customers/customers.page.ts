import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];

  permission: boolean | undefined;

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.permission = true;
    console.log("Hoola ngOnInit");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users= res;
    });
  }

  goToHome(){ //funcion para el routeo de customers->home, en vez de usar el router link, se llama a esto desde el html,se hace con la libreria router de angular
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http.get("assets/files/perritas.json")
    .pipe(
      map((res:any)=>{ //Esto sirve para mapear el json y que te devuelva lo de dentro de data, para no estar poniendo todo el rato data
        return res.data;
      })
    )
  }

}
