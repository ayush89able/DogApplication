import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DogService } from '../dog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogImageUrl:string;
  dataCame:boolean=false;
  breeds:String[];
  selectedBreed:String;
  selectedNumber:Number;
  // selectBreedPlease:boolean=false; 
  // selectNumberPlease:boolean=false;
  Numbers:Number[];
  dataArrayCame:boolean=false;
  public dogs=[];
  constructor(private http:HttpClient,private dogService: DogService) { }

  ngOnInit() {
  this.Numbers=[9,12,15,18,21,24,27,30];
  if(this.dogService.sb==undefined)
    this.selectedBreed='bulldog'
  else
    this.selectedBreed=this.dogService.sb;
  if(this.dogService.sn==undefined)
    this.selectedNumber=9;
  else
    this.selectedNumber=this.dogService.sn;
  this.clickedOnFindBreeds();
  this.clickedOnFindDogs();
  }

  clickedOnFindDogs(){
    this.dogService.getSelectedBreedDogs(this.selectedBreed,this.selectedNumber)
    .subscribe(data=> {
      this.dogs=data.message;
      console.log(this.dogs);
      this.dataArrayCame=true;
    });
  }

  clickedOnFindBreeds(){
    this.dogService.getBreeds()
    .subscribe(data=>{
      this.breeds=Object.keys(data.message);
      console.log(this.breeds);
    })
  }

  change(breed)
  {
    this.selectedBreed=breed;
    // this.selectBreedPlease=true;
    this.dogService.sb=this.selectedBreed;
    console.log('selected breed',this.selectedBreed);
  }

  changeNum(num)
  {
    this.selectedNumber=num;
    // this.selectNumberPlease=true
    this.dogService.sn=this.selectedNumber;
    console.log('selected number',this.selectedNumber);
  }

  onPicClick(dog){
    console.log(dog);
    this.dogService.addToFav(dog);
  }


}
