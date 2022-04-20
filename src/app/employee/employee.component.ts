import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, AbstractControl, MinLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  qualification!: ['HSC','SSC','BTech'];
  experience!: ['Fresher', '1', '2'];
  codingLanguages!:['C/C++','Java','PHP','Python','C#']


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService
  ) {
    //Create Reactive Form with validation//
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', []],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      contactNumber: [null, [Validators.required]],
      id: [0, [Validators.required]],
      username: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      address: ['', [Validators.required]],

    });

  }


  ngOnInit(): void {
    //Get User ID On Edit//


  }
  addEmployee(){
    if(this.employeeForm.valid){
      this.api.postEmployeeList(this.employeeForm.value)
      .subscribe({
        next:(res)=>{alert("Employee added succesfully");
        this.employeeForm.reset();
      },
        error:()=>{alert("error while adding the employee")}
 });
    }

  }




}
