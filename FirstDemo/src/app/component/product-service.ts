import { Injectable } from "@angular/core";
import { iProduct } from "./product-interface";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';



@Injectable()
export class ProductService {
private productURL = "http://localhost:2018/login";
    constructor(private _http: HttpClient) {}
getProduct() :Observable<iProduct[]> {
    console.log("Path : "+this.productURL)
    return this._http.get<iProduct[]>(this.productURL)
    .do(data => console.log("All" +data)).catch(this.handleError);
}
private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err);
}
}