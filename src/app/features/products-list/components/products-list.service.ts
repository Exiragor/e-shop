import { Injectable } from '@angular/core';
import { IProduct, ProductsApi } from "../../../core/api";
import { Observable, of } from "rxjs";

@Injectable()
export class ProductsListService {
  private _api: ProductsApi = new ProductsApi();

  constructor() { }
  
  getProducts$(page: number, pageSize: number): Observable<IProduct[]> {
    return of(this._api.getProducts(page, pageSize));
  }
}
