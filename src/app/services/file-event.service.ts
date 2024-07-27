import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FileEvent } from '../model/file-event.model'

@Injectable({
  providedIn: 'root'
})
export class FileEventService {
  private apiUrl = 'api/file-event'; // Assuming this is your API endpoint

  mockData: FileEvent[] = []; //

  constructor(private http: HttpClient) { 
    this.mockData = [
      {date:new Date('2024-01-02'), eventId:1, filename:'A1.csv',referenceId:101},
      {date:new Date('2024-01-02'), eventId:2, filename:'A2.csv',referenceId:102},
      {date:new Date('2024-01-02'), eventId:3, filename:'A3.csv',referenceId:103},
      {date:new Date('2024-01-02'), eventId:4, filename:'A4.csv',referenceId:104},
      {date:new Date('2024-01-02'), eventId:5, filename:'A5.csv',referenceId:101},
      {date:new Date('2024-01-02'), eventId:6, filename:'B1.csv',referenceId:102},
      {date:new Date('2024-01-02'), eventId:7, filename:'B2.csv',referenceId:103},
      {date:new Date('2024-01-02'), eventId:8, filename:'B3.csv',referenceId:104},
      {date:new Date('2024-01-02'), eventId:9, filename:'B4.csv',referenceId:101},
      {date:new Date('2024-01-02'), eventId:0, filename:'B0.csv',referenceId:102},
      ];
  }
  
  getAll(): Observable<FileEvent[]> {
    //return this.http.get<FileEvent[]>(this.apiUrl);
    console.log(`Hit getAll `);

    return of(this.mockData);
  
  }
  
  getByRefId(id: number): Observable<FileEvent[]> {
    //return this.http.get<FileEvent[]>(`${this.apiUrl}/ref/${id}`);
    console.log(`Hit getByRefId ${id}`);
    return of(this.mockData.filter(f => f.referenceId === id));
  }
  
}
