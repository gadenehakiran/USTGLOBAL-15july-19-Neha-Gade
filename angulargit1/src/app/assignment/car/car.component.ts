import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carsData:any='';
  sendCars(cars){
  this.carsData=cars;
  };
  car=[
    {
      brand: 'hyundai',
      img: 'https://cdn.pixabay.com/photo/2014/03/28/00/18/all-wheel-drive-299772__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'marcedes',
      img: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'bmw',
      img: 'https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'duster',
      img: 'https://cdn.pixabay.com/photo/2018/04/16/17/56/car-3325384__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ferari',
      img: 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'lamborgini',
      img: 'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm4',
      img: 'https://cdn.pixabay.com/photo/2018/05/10/16/47/motorcycle-3387987__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm5',
      img: 'https://cdn.pixabay.com/photo/2017/05/11/18/21/superduke-2304979__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm6',
      img: 'https://cdn.pixabay.com/photo/2017/11/21/12/37/ktm-2968100__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm7',
      img: 'https://cdn.pixabay.com/photo/2017/11/21/12/37/ktm-2968100__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm8',
      img: 'https://cdn.pixabay.com/photo/2019/04/19/10/29/motorcycle-4139052__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
  
  
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
