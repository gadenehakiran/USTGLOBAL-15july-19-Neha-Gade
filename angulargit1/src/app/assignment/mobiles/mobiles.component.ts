import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobileData:any='';
  sendmobile(mobile){
  this.mobileData=mobile;
  };
  mobiles=[
    {
      brand: 'samsung',
      img: 'https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650__340.png',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'apple',
      img: 'https://cdn.pixabay.com/photo/2016/02/10/16/39/girl-1192032__340.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'nokia',
      img: 'https://image.shutterstock.com/image-photo/texting-on-old-cellphone-monochrome-260nw-1106311148.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'oppo',
      img: 'https://image.shutterstock.com/image-vector/smartphone-mobile-phone-isolated-realistic-260nw-703670326.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'vivo',
      img: 'https://image.shutterstock.com/image-vector/realistic-smartphone-blank-screen-isolated-260nw-640277947.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed earum esse voluptates consequuntur voluptas nostrum adipisci aut dolor totam.',
    },
    {
      brand: 'note plus',
      img: '',
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
