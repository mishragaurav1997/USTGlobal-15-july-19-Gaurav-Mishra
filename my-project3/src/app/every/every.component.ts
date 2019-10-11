import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {
  everyNews:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0d2bf54a1cfa49e4b6be8fbd37d523e5')
    .subscribe(eveData =>{
      this.everyNews = eveData.articles;  
      console.log(this.everyNews);
      
      

    })
   }

  ngOnInit() {
  }

}
