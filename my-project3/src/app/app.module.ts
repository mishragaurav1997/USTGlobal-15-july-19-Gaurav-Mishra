import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';  

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment3DetailsComponent } from './assignment3-details/assignment3-details.component';
import { EveryComponent } from './every/every.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { UsComponent } from './us/us.component';
import { UkComponent } from './uk/uk.component';
import { JnComponent } from './jn/jn.component';
import { FranceComponent } from './france/france.component';
import { UsersComponent } from './users/users.component';
import { ReducePipe } from './reduce.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    FirebaseComponent,
    Assignment3Component,
    Assignment3DetailsComponent,
    EveryComponent,
    SportsComponent,
    BusinessComponent,
    UsComponent,
    UkComponent,
    JnComponent,
    FranceComponent,
    UsersComponent,
    ReducePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'news', component:NewsComponent},
      // {path:'movies', component:MoviesComponent},
      {path:'firebase' ,component:FirebaseComponent},
      {path:'every',component:EveryComponent},
      {path:'sports', component:SportsComponent},
      {path:'business', component:BusinessComponent},
      {path:'us',component:UsComponent},
      {path:'uk',component:UkComponent},
      {path:'jn',component:JnComponent},
      {path:'france',component:FranceComponent},
      {path:'users', component:UsersComponent},
    ]),HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
