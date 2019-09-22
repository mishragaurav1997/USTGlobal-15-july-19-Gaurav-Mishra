import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData: any ='';
  cars =[
    
    {
      brand:'BMW',
      img:'https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274__340.jpg',
      description:'The BMW 7 Series has 1 Diesel Engine and 2 Petrol Engine on offer. The Diesel engine is 2993 cc while the Petrol engine is 2998 cc and 6592 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the 7 Series has a mileage of 7.96 to 39.53 kmpl. The 7 Series is a 4 seater Sedan and has a length of 5238mm, width of 2169mm and a wheelbase of 3210mm.'
    },
    {
      brand:'Lamborghini',
      img:'https://cdn.pixabay.com/photo/2017/03/12/19/12/lamborghini-2137815__340.jpg',
      description:'The Lamborghini Aventador has 1 Petrol Engine on offer. The Petrol engine is 6498 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Aventador has a mileage of 5.0 to 7.69 kmpl. The Aventador is a 2 seater Coupe and has a length of 4843 mm, width of 2273 mm and a wheelbase of 2700mm.'
    },
    {
      brand:'Rolls Royce',
      img:'https://cdn.pixabay.com/photo/2017/09/03/21/15/rolls-royce-2712120__340.png',
      description:'The Rolls Royce Phantom has 1 Petrol Engine on offer. The Petrol engine is 6749 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Rolls Royce Phantom has a mileage of 9.8 kmpl. The Rolls Royce Phantom is a 5 seater Sedan and has a length of 6092mm, width of 1990mm and a wheelbase of 3820mm.'
    },
    {
      brand:'volkswagen',
      img:'https://cdn.pixabay.com/photo/2017/03/11/16/37/vw-2135350__340.png',
      description:'The Volkswagen Polo has 1 Diesel Engine and 2 Petrol Engine on offer. The Diesel engine is 1498 cc while the Petrol engine is 999 cc and 1197 cc. It is available with the Manual and Automatic transmission. Depending upon the variant and fuel type the Polo has a mileage of 17.21 to 21.49 kmpl. The Polo is a 5 seater Hatchback and has a length of 3971mm, width of 1682mm '
    },
    {
      brand:'Skoda',
      img:'https://cdn.pixabay.com/photo/2018/04/14/07/22/car-3318430__340.jpg',
      description:'The Skoda Octavia has 1 Diesel Engine and 3 Petrol Engine on offer. The Diesel engine is 1968 cc while the Petrol engine is 1395 cc and 1798 cc and 1984 cc. It is available with the Manual and Automatic transmission. Depending upon the variant and fuel type the Octavia has a mileage of 14.45 to 21.0 kmpl. The Octavia is a 5 seater Sedan and has a length of 4689mm,'
    }
  ];


  constructor() { }
  sendCar(car){
    this.carData = car;
    }

  ngOnInit() {
  }

}
