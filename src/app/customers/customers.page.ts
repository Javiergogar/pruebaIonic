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
  searchedUser:any;
  

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
      this.searchedUser = this.users;
    });
  }

  goToHome(){ //funcion para el routeo de customers->home, en vez de usar el router link, se llama a esto desde el html,se hace con la libreria router de angular
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http.get("assets/files/customers.json")
    .pipe(
      map((res:any)=>{ //Esto sirve para mapear el json y que te devuelva lo de dentro de data, para no estar poniendo todo el rato data
        return res.data;
      })
    )
  }
  
  searchCustomers(event){
   const text = event.target.value; 
   this.searchedUser = this.users;
   if(text && text.trim() != ''){
    
    this.searchedUser = this.searchedUser.filter((user: any)=>{
      
     return (user.name.toLowerCase().indexOf(text.toLowerCase()) >-1) 
    })
    
   }
  }

  doRefresh(event){
    this.getUsers();
    console.log("Begin async operation")
    setTimeout(()=>{
      console.log("Async opertaion ended")
      event.target.complete();
    },2000);

  }

}
