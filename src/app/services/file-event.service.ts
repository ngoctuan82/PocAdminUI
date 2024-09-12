import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FileEvent } from '../model/file-event.model'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileEventService {
  private apiUrl = `${environment.apiUrl}/FileEvent/ByReferenceId`; // api end point

  constructor(private http: HttpClient) { 
    
  }
   
  getByRefId(refId: string): Observable<FileEvent[]> {
    return this.http.get<FileEvent[]>(`${this.apiUrl}/${refId}`);
  }
  
}
