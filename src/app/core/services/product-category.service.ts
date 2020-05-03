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
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories`);
  }

  postAllProductCategories(data: TreeItemNode[] | TreeItemNode) {
    return this.http.post(`${environment.apiUrl}/categories`, data);
  }

  updateProductCategory(data: TreeItemNode) {
    return this.http.put(`${environment.apiUrl}/categories/${data.id}`, data);
  }

  getAllRootCategories(): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories?parentId=-1`);
  }

  getCategory(categoryId: number): Observable<TreeItemNode> {
    return this.http.get(`${environment.apiUrl}/categories/${categoryId}`);
  }

  getChildCategories(parentId: number): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories?parentId=${parentId}`);
  }

  deleteCategory(categoryId: number) {
    // Delete the category along with all the associated child categories.
    return this.http.delete(`${environment.apiUrl}/categories/${categoryId}`);
  }
}
