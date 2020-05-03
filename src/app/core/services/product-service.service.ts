import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@app/models/product';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products`);
  }

  getAllProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products?categoryId=${categoryId}`);
  }

  postProduct(data) {
    return this.http.post(`${environment.apiUrl}/products`, data);
  }
}
