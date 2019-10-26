import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition=false;
  users=[{
    id:111,
    name:'neha',
 },
 {
  id:777,
  name:'teju',
},
{
  id:666,
  name:'aishu',
},
{
  id:555,
  name:'praju',
},
{
  id:333,
  name:'ashu',
},
{
  id:222,
  name:'sid',
},

]

  constructor() { }
  removeUser(i){
    let index = this.users.indexOf(i);
    this.users.splice(index,1);
    this.condition=true;
  }

  ngOnInit() {
  }

}
