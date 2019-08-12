import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatGridListModule,
         MatMenuModule,MatSelectModule, MatOptionModule,MatDialogModule,MatIconModule} from '@angular/material';
import { HuskComponent } from './husk/husk.component';
import { DobermanComponent } from './doberman/doberman.component';
import { PugComponent } from './pug/pug.component'
import { DogService } from './dog.service';
import { AboutComponent } from './about/about.component';
import { FavDogComponent } from './fav-dog/fav-dog.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HuskComponent, 
    DobermanComponent,
    PugComponent,
    AboutComponent,
    FavDogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,  
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
