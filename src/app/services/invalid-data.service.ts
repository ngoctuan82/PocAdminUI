import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { InvalidData } from '../model/invalid-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvalidDataService {
  private apiUrl = 'api/invalid-data'; // Assuming this is your API endpoint

  constructor(private http: HttpClient) { }

  getAll(): Observable<InvalidData[]> {
    //return this.http.get<InvalidData[]>(this.apiUrl);
    // mock wait for emulate the response from api

    return of([
      { id: 1, name: 'Model A 1', effectiveDate: new Date(), value: 100, referenceId: 101, validated:false },
      { id: 2, name: 'Model A 2', effectiveDate: new Date(), value: 200, referenceId: 102, validated:false },
      { id: 3, name: 'Model A 3', effectiveDate: new Date(), value: 300, referenceId: 103, validated:false },
      // Add more mock data as needed
    ]).pipe(delay(1000));
  }

  getById(id: number): Observable<InvalidData> {
    //return this.http.get<InvalidData>(`${this.apiUrl}/${id}`);
    return of(
      { id: 1, name: 'Model A 1', effectiveDate: new Date(), value: 100, referenceId: 101, validated:false }
    )
  }
  
}
