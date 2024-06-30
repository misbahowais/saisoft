import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './pages/employee-update/employee-update.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'update/:id', component: EmployeeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
