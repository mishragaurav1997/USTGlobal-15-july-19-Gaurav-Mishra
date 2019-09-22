import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTask: any;

  constructor(private service: ServiceService) { }
  addData(form){
    this.service.tasks.push(form);
    console.log(form);
  }

  printForm(form){
    console.log(form);
  }
  ngOnInit() {
  }

}
