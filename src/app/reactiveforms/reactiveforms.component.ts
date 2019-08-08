import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  radioGroupData: any[] = [];
  employeeForm: FormGroup;
  employeeRegistration: EmployeeRegistration;

  constructor(private fb: FormBuilder) {
    this.employeeRegistration = new EmployeeRegistration();
    this.radioGroupData = [{
      genderName: 'Male',
      genderId: 'male'
    }, {
      genderName: 'Female',
      genderId: 'female'
    }];
   }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      Gender: ['', [Validators.required]],
      DateOfBirth: ['', Validators.required],
      Agree: ['', [Validators.required, Validators.requiredTrue]],

    });
  }

}

export class EmployeeRegistration {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  agree: any;
  dateOfBirth = new Date();
}