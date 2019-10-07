import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService { 


  


  constructor(private http:HttpClient) { }

  deleteData(data){
   return this.http.delete(`http://localhost:8085/employee/remove/${data}`); 
  }

  postData(data){
    return this.http.post('http://localhost:8085/employee/add',data);
  }

  updateData(data){
    return this.http.put('http://localhost:8085/employee/modify/',data);
  }

  datas =[];

  getData(){
    this.http.get<any>('http://localhost:8085/employee/get-all').subscribe(resData=>{
      this.datas = resData.task;
      console.log(this.datas);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Data send Succesfully");
    });
  }
}

