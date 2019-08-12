import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-pug',
  templateUrl: './pug.component.html',
  styleUrls: ['./pug.component.css']
})
export class PugComponent implements OnInit {
  dataArrayCame:boolean=false;
  dogs:string[];
  constructor(private http:HttpClient,private dogService:DogService) { }

  ngOnInit() {
    this.clickedOnPug9();
  }

  clickedOnPug9(){
    this.dogService.getPug()
    .subscribe(data=>{
      this.dogs=data.message;
      this.dataArrayCame=true;
    })
  }  

  onPicClick(dog){
    console.log(dog);
    this.dogService.addToFav(dog);
  }

}
