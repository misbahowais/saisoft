import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee.model';
import { Url } from 'src/app/model/url.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {
  form: FormGroup;

  idEmp: string = "";
  employee: EmployeeModel = {
    id: 0,
    name: '',
    email: '',
    dob: '',
    designation: '',
    salary: 0,
    status: true
  };

  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
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
    this.route.params.subscribe(params => {
      this.idEmp = params['id'];
      this.getbyId(this.idEmp);
    })

    // var urlString = window.location.href;
    // var url = new URL(urlString);
    // var id = url.searchParams.get('id');
    // if (id != null && id != undefined) {
    //   this.idEmp = id;
    //   this.getbyId(this.idEmp);
    // }
  }
  getbyId(id: string) {
    this.employeeService.getById(id).subscribe(data => { this.employee = data; console.log(this.employee); });
  }
  update() {
    if (!this.form.valid) return;
    this.employeeService.update(this.employee).subscribe(data => {
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
