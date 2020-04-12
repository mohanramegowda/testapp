import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env';
import { TreeItemNode } from '@app/models/tree-item-node';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  getAllProductCategories(): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/productCategories`);
  }

  postAllProductCategories(data: TreeItemNode[]) {
    return this.http.post(`${environment.apiUrl}/productCategories`, data);
  }
}
