import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styles: []
})
export class ShowTaskComponent implements OnInit {

  constructor(private service: TaskServiceService) { }

  ngOnInit() {
    this.service.getData();
  }

}
