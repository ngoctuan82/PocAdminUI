import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InvalidData } from '../model/invalid-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvalidDataService {
  private apiUrl = 'api/invalid-data'; // Assuming this is your API endpoint

  constructor(private http: HttpClient) { }

  getAll(): Observable<InvalidData[]> {
    //return this.http.get<InvalidData[]>(this.apiUrl);
    return of([
      { id: 1, name: 'Model A 1', effectiveDate: new Date(), value: 100, referenceId: 101 },
      { id: 2, name: 'Model A 2', effectiveDate: new Date(), value: 200, referenceId: 102 },
      { id: 3, name: 'Model A 3', effectiveDate: new Date(), value: 300, referenceId: 103 },
      // Add more mock data as needed
    ]);
  }

  getById(id: number): Observable<InvalidData> {
    //return this.http.get<InvalidData>(`${this.apiUrl}/${id}`);
    return of(
      { id: 1, name: 'Model A 1', effectiveDate: new Date(), value: 100, referenceId: 101 }
    )
  }
  
}
