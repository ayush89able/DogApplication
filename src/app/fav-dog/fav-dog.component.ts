import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-fav-dog',
  templateUrl: './fav-dog.component.html',
  styleUrls: ['./fav-dog.component.css']
})
export class FavDogComponent implements OnInit {
  fdogs:String[];
  notEmpty:boolean;
  constructor(private dogService:DogService) { }

  ngOnInit() {
    this.fdogs=this.dogService.favDogs;
    console.log(this.fdogs)
    this.fdogs.length>0 ? this.notEmpty=true : this.notEmpty=false
  }

}
