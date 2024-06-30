import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeModel } from "src/app/model/employee.model";
import { ResponseModel } from "src/app/model/response.model";
import { Url, } from "src/app/model/url.model";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    private path = Url.url + "/Employee"
    constructor(private http: HttpClient) { }

    create(data: EmployeeModel): Observable<ResponseModel> {
        console.log(this.path + "/Create")
        return this.http.post<ResponseModel>(this.path + "/Create", data);
    }
    update(data: EmployeeModel): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(this.path + "/Update", data);
    }
    delete(id: number): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(this.path + "/Delete?Id=" + id);
    }
    getAll(): Observable<EmployeeModel[]> {
        console.log(this.path + "/Create")

        return this.http.get<EmployeeModel[]>(this.path + "/GetAll");
    }
    getById(id: string): Observable<EmployeeModel> {
        return this.http.get<EmployeeModel>(this.path + "/GetById?id=" + id);
    }
}