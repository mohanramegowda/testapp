import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  getAllTemplates(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/templates`);
  }

  getAllTemplatesById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/templates/${id}`);
  }

  postTemplate(data) {
    return this.http.post(`${environment.apiUrl}/templates`, data);
  }

  updateTemplate(data, templateId: number) {
    return this.http.put(`${environment.apiUrl}/templates/${templateId}`, data);
  }
}
