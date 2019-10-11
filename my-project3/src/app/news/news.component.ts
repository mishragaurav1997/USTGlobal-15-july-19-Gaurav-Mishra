import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
indianNews:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=35c1647e7afa4d46af655ca035057493')
    .subscribe(resData =>{
      this.indianNews = resData.articles; 
      console.log(this.indianNews);
    })
   }

  ngOnInit() {
  }

}