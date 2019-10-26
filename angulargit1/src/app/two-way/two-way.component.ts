import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit  {
  ngOnInit():void{
    console.log('ngoninit implemented');
  }
  background='data';

  constructor(){}
  datafromInput=''
  buttonEvent(data){
    console.log(data);

  }
  changecolor(data){
    this.background=data;
  }
  



  

 


}
