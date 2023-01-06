import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  cars: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log("Hoola ngOnInit");
    this.getCities().subscribe(res=>{
      console.log("Res",res)
      this.cars= res;
    });
  }

  getCities(){
    return this.http.get("assets/files/cars.json")
    .pipe(
      map((res:any)=>{ //Esto sirve para mapear el json y que te devuelva lo de dentro de data, para no estar poniendo todo el rato data
        return res.data;
      })
    )
  }

  async presentToast1 (){
    const toast = await this.toastController.create({
      message:'Cachau',
      duration: 500,
      position: 'bottom' 
    })
    toast.present()
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header:"Borrar bolido",
      message:"Se borro webon",
      buttons:["ok"]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log("result:",result)
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header:"Borrar bolido",
      message:"Se borro webon?",
      buttons:[
        {
          text:'No',
          handler: () =>{
            console.log("No sa borrao")
          }
      },
      {
        text:'Si',
        handler: () =>{
          console.log("Sa borrao")
        }
    }
    ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log("result:",result)
  }
  

}
