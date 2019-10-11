import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indianNews:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=0d2bf54a1cfa49e4b6be8fbd37d523e5')
    .subscribe(resData =>{
      this.indianNews = resData.articles; 
      console.log(this.indianNews);
      
      

    })
   }
   ngOnInit() {
  }

}

   
