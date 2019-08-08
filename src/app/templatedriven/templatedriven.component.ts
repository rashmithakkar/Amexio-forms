import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  userRegistration:UserRegistration;
  radioGroupData: any;
  checkboxGroupdata: any;

  constructor() {
    this.userRegistration = new UserRegistration();
    this.radioGroupData = {
      response:{
        data:[{
          gender:'Male',
          genderId:'male'
        },{
          gender:'Female',
          genderId:'female',
        },
        ]
      }
    };
   }

  ngOnInit() {
  }

  

}

export class UserRegistration {
  firstName: string;
  lastName: string;
  agree: boolean;
  gender: string;
  age: number;
  dateOfBirth = new Date();
  email: string;
 }