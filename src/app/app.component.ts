import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient,private router:Router){}

  naviagateToRoot(){
    this.router.navigateByUrl('/home')
  }

  naviagateToHusk(){
    this.router.navigateByUrl('/husk');
  }

  naviagateToDoberman(){
    this.router.navigateByUrl('/doberman');
  }

  naviagateToPug(){
    this.router.navigateByUrl('/pug'); 
  }

}
