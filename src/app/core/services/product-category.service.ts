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

  postAllProductCategories(data: TreeItemNode[] | TreeItemNode) {
    return this.http.post(`${environment.apiUrl}/productCategories`, data);
  }

  updateProductCategory(data: TreeItemNode) {
    return this.http.put(`${environment.apiUrl}/productCategories/${data.id}`, data);
  }

  getAllRootCategories(): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/productCategories?parentId=-1`);
  }

  getCategory(categoryId: number): Observable<TreeItemNode> {
    return this.http.get(`${environment.apiUrl}/productCategories/${categoryId}`);
  }

  getChildCategories(parentId: number): Observable<TreeItemNode[]> {
    return this.http.get<TreeItemNode[]>(`${environment.apiUrl}/productCategories?parentId=${parentId}`);
  }

  deleteCategory(categoryId: number) {
    // Delete the category along with all the associated child categories.
    this.getChildCategories(categoryId).subscribe(data => {
      if (data && data.length > 0) {
        data.forEach(childItem => {
          if(childItem.categoryType === 'hasChildren') {
            this.deleteCategory(childItem.id);
          }
          this.http.delete(`${environment.apiUrl}/productCategories/${childItem.id}`).subscribe(
            i  => console.log("item deleted successfully")
          );
        })
      }
    })
    return this.http.delete(`${environment.apiUrl}/productCategories/${categoryId}`);
  }
}
