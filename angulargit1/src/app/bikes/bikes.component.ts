import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  
  bikeData:any='';
  sendBike(bike){
  this.bikeData=bike;
  };
  bikes=[
    {
      brand: 'bmw',
      img: 'https://cdn.pixabay.com/photo/2016/02/19/11/25/motorcycle-1209698__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'royal',
      img: 'https://cdn.pixabay.com/photo/2017/07/30/18/32/motocross-2555185__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm',
      img: 'https://cdn.pixabay.com/photo/2018/03/10/21/11/motorcycle-3215311__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'pulsor',
      img: 'data:image/jpeg;base64,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',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm2',
      img: 'https://image.shutterstock.com/image-photo/motorcyclist-on-crosscountry-motorcycle-go-260nw-1412575478.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'ktm3',
      img: 'https://cdn.pixabay.com/photo/2017/11/10/17/51/motorcycle-2937057__340.jpg',
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
