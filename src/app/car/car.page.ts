import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  id: any;
  finalId: any;
  cars: any = [];
  name: string | undefined;
  image: string | undefined;
  desc: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    //console.log(this.id)
    this.getCars().subscribe(res=>{
      console.log("Res",res)
      this.cars= res;
      this.name = this.cars[this.finalId].name
      this.image = this.cars[this.finalId].image
      this.desc = this.cars[this.finalId].desc
    });
  }

  getCars(){
    return this.http.get("assets/files/cars.json")
    .pipe(
      map((res:any)=>{ //Esto sirve para mapear el json y que te devuelva lo de dentro de data, para no estar poniendo todo el rato data
        return res.data;
      })
    )
  }

}
