import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileEvent } from '../model/file-event.model';
import * as FileEventActions from '../store/file-event.actions';
import * as fromFileEvent from '../store/file-event.selectors';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-file-event',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './file-event.component.html',
  styleUrl: './file-event.component.css'
})
export class FileEventComponent implements OnInit {
  fileEventList$: Observable<FileEvent[]>|undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { referenceId: number },
    private store: Store) { 
    }

  ngOnInit(): void {
    this.store.dispatch(FileEventActions.getFileEventByRefId({referenceId: this.data.referenceId}));
    this.fileEventList$ = this.store.select(fromFileEvent.selectFileEventDetail);
  
  }
}