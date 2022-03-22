import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  backUrl:string = "http://localhost:8080/products"

  public createProduct(product: FormData): Observable<Product> {
    return this.httpClient.post<Product>(this.backUrl + 'create-product', {'product': product});
  }

  public getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.backUrl + '/get-products');
  }
}
