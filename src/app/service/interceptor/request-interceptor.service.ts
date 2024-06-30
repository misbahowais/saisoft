import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Url } from "src/app/model/url.model";

@Injectable({
    providedIn: 'root',
})
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        // request = request.clone({ url: Url.url });
        // request.url = Url.url;
        console.log(request)
        return next.handle(request);
    }

}