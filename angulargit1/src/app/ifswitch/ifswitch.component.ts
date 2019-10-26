import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifswitch',
  templateUrl: './ifswitch.component.html',
  styleUrls: ['./ifswitch.component.css']
})
export class IfswitchComponent implements OnInit {
condition=false;
person='zen';
printInput(element){
  console.log(element.value);
}
  constructor() { }

  ngOnInit() {
  }

}
