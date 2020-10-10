import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Product {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }



  fetchProductListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8075/getproductlist');
  }
  addProductToRemote(product: Product): Observable<any>{
    return this._http.post<any>('http://localhost:8075/addproduct',product);
  }
  updateProductToRemote(product: Product): Observable<any>{
    return this._http.post<any>('http://localhost:8075/editproduct',product);
  }

  fetchProductBdyIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8075/getproductbyid/'+id);
  }
  deleteProductBdyIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8075/product/' + id);
  }
}
