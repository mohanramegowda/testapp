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

  getAllProductCategories(templateId: number): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories?templateId=${templateId}`);
  }

  postAllProductCategories(data: TreeItemNode[] | TreeItemNode) {
    return this.http.post(`${environment.apiUrl}/categories`, data);
  }

  updateProductCategory(data: TreeItemNode) {
    return this.http.put(`${environment.apiUrl}/categories/${data.id}`, data);
  }

  getAllRootCategories(templateId): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories?parentId=-1&templateId=${templateId}`);
  }

  getCategory(categoryId: number): Observable<TreeItemNode> {
    return this.http.get(`${environment.apiUrl}/categories/${categoryId}`);
  }

  getChildCategories(parentId: number, templateId: number): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/categories?parentId=${parentId}&templateId=${templateId}`);
  }

  deleteCategory(categoryId: number) {
    // Delete the category along with all the associated child categories.
    return this.http.delete(`${environment.apiUrl}/categories/${categoryId}`);
  }
}
