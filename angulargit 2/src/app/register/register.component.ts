import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator}  from './customvalidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  

get email(){
  return this.registerForm.get('email');
}

  registerForm= new FormGroup({
    
     
     email:new FormControl('',[Validators.minLength(5),Validators.required])
  })
  printform(registerForm){
    console.log(registerForm.value);
  }
 

  ngOnInit() {
  }

}
