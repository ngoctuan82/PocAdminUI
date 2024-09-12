import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { InvalidData } from '../model/invalid-data.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvalidDataService {
  private apiUrl = `${environment.apiUrl}/InvalidData`; // api end point

  constructor(private http: HttpClient) { }

  getAll(): Observable<InvalidData[]> {
    return this.http.get<InvalidData[]>(this.apiUrl);
  }

  getById(id: number): Observable<InvalidData> {
    return this.http.get<InvalidData>(`${this.apiUrl}/${id}`);    
  }
  
}
