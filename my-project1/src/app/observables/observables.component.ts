import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers: []
})
export class ObservablesComponent implements OnInit {
  // mySubscription: Subscription;

  constructor(private userService:UserService) { }

  ngOnInit() {
//    this.mySubscription = interval(1000).subscribe(data=>{
//       console.log(data);
//     },
//     err=>{
//       console.log(err);
//     },
//     ()=>{
// console.log('subscription complete');
//     });
  }
  ngOnDestroy(){
    // this.mySubscription.unsubscribe();
  }

}
