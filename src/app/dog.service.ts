import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'; 
import { DogI } from './dog';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  favDogs = new Array<String>();
  sb:String;
  sn:Number;
  constructor(private http:HttpClient) { }

  getBreeds():Observable<DogI>{
    return this.http.get<DogI>('https://dog.ceo/api/breeds/list/all')
  }
  getSelectedBreedDogs(breed,num): Observable<DogI>{ 
    console.log('service')
    return  this.http.get<DogI>('https://dog.ceo/api/breed/'+breed+'/images/random/'+num)                              
  }

  getHusky():Observable<DogI>{
    return this.http.get<DogI>('https://dog.ceo/api/breed/'+'husky'+'/images/random/9')
  }

  getPug():Observable<DogI>{
    return this.http.get<DogI>('https://dog.ceo/api/breed/'+'pug'+'/images/random/9')
  }

  getDoberman():Observable<DogI>{
    return this.http.get<DogI>('https://dog.ceo/api/breed/'+'doberman'+'/images/random/9')
    
  }

  addToFav(img)
  {
    this.favDogs.push(img);
    console.log(this.favDogs); 
  }


  
}
