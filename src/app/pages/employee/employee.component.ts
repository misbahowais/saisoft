import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getAll()
  }
  employees: EmployeeModel[] = [];

  getAll() {
    this.employeeService.getAll().subscribe(data => { this.employees = data });
  }

  edit(id: number) {

  }
  delete(id: number) {
    this.employeeService.delete(id).subscribe(data => {

      if (data.isSuccess) {
        this.getAll();
      }
    });
  }

}
