import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {
  valid: boolean = true;
  employee: EmployeeModel = {
    id: 0,
    name: '',
    email: '',
    dob: '',
    designation: '',
    salary: 0,
    status: true
  };

  form: FormGroup;
  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      dob: [new Date(), Validators.required],
      designation: ['', Validators.required],
      salary: ['', Validators.required],
      status: [''],
    })
  }
  ngOnInit(): void {

  }

  create() {
    
    if (!this.form.valid) {this.valid = false;;return};
    this.employeeService.create(this.form.value).subscribe(data => {
      if (data.isSuccess) {
        this.router.navigateByUrl('/');
      }
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get dob() {
    return this.form.get('dob');
  }
  get salary() {
    return this.form.get('salary');
  } get designation() {
    return this.form.get('designation');
  } get status() {
    return this.form.get('status');
  }
}
