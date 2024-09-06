import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FileEvent } from '../model/file-event.model'

@Injectable({
  providedIn: 'root'
})
export class FileEventService {
  private apiUrl = 'https://localhost:44322/api/FileEvent/ByReferenceId'; // Api end point

  mockData: FileEvent[] = []; //

  constructor(private http: HttpClient) { 
    
  }
   
  getByRefId(refId: string): Observable<FileEvent[]> {
    return this.http.get<FileEvent[]>(`${this.apiUrl}/${refId}`);
  }
  
}
