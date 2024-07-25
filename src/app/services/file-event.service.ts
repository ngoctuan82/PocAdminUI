import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileEvent } from '../model/file-event.model'

@Injectable({
  providedIn: 'root'
})
export class FileEventService {
  private apiUrl = 'api/file-event'; // Assuming this is your API endpoint

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<FileEvent[]> {
    return this.http.get<FileEvent[]>(this.apiUrl);
  }
  
  getByRefId(id: string): Observable<FileEvent[]> {
    return this.http.get<FileEvent[]>(`${this.apiUrl}/ref/${id}`);
  }
  
}
