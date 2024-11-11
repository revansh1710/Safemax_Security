import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = 'http://localhost:2301/api/appointments';

  constructor(private http: HttpClient) {}

  getAllConsultations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateStatus(id: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/status`, { status });
  }
}