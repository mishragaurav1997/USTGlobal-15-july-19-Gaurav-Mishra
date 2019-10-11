import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  sportNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=business&apiKey=0d2bf54a1cfa49e4b6be8fbd37d523e5  ')
    .subscribe(resData =>{
      this.sportNews = resData.articles; 
      console.log(this.sportNews);
    })

  }

  ngOnInit() {
  }

}
