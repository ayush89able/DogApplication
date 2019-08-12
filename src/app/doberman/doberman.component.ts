import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DogService } from '../dog.service';
import { DogI } from './../dog';
@Component({
  selector: 'app-doberman',
  templateUrl: './doberman.component.html',
  styleUrls: ['./doberman.component.css']
})
export class DobermanComponent implements OnInit {
  dataArrayCame:boolean=false;
  dogs:string[];
  constructor(private http:HttpClient,private dogService:DogService) { }

  ngOnInit() {
    this.clickedOnDoberman9();
  }

  clickedOnDoberman9(){
    this.dogService.getDoberman()
    .subscribe(data=>{
      console.log(data);
      this.dogs=data.message;
      this.dataArrayCame=true;
    })
  }  

  onPicClick(dog){
    console.log(dog);
    this.dogService.addToFav(dog);
  }

}
