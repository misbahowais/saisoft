import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './pages/employee-update/employee-update.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './service/interceptor/error-interceptor.service';
import { RequestInterceptor } from './service/interceptor/request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
