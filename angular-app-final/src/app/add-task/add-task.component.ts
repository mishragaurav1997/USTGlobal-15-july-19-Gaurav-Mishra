import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: []
})
export class AddTaskComponent implements OnInit {

  constructor(private service :TaskServiceService) { }
 
  postData(data) {
    this.service.postData(data.value).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
