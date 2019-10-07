import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styles: []
})
export class EditTaskComponent implements OnInit {

  constructor(private service: TaskServiceService, private router: Router) { }

  deleteData(data) {
    this.service.deleteData(data).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/show');
  });
  }

  updateData(data) {
    this.service.updateData(data).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/show');
    }, err => {
      console.log(err);
    });
  }
  ngOnInit() {
    this.service.getData();
  }

}
