import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-husk',
  templateUrl: './husk.component.html',
  styleUrls: ['./husk.component.css']
})
export class HuskComponent implements OnInit {
  dataArrayCame:boolean=false;
  dogs:string[];
  constructor(private http:HttpClient,private dogService:DogService) { }

  ngOnInit() {
    this.clickedOnHusky9();
  }

  clickedOnHusky9(){
    this.dogService.getHusky()
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
