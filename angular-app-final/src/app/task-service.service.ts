import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  selectedUser:User ={
    task_id: null,
    task: null,
    task_start_date: null,
    task_end_date:null,
  }

  constructor(private http: HttpClient) { }
  deleteData(data) {
    return this.http.delete(`http://localhost:8087/task/remove/${data}`);
  }

  postData(data) {
    return this.http.post('http://localhost:8087/task/add', data);
  }

  updateData(data) {
    return this.http.put('http://localhost:8087/task/modify', data);
  }

  datas:any[] = [];

  getData() {
    this.http.get<any>('http://localhost:8087/task/get-all').subscribe(resData => {
      this.datas = resData.task;
      console.log(this.datas);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Data send Succesfully");
    });

  }
}
