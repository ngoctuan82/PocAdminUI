import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileEvent } from '../model/file-event.model';
import * as FileEventActions from '../store/file-event.actions';
import * as fromFileEvent from '../store/file-event.selectors';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, NgFor } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import * as InvalidDataActions from '../store/invalid-data.actions';
import { InvalidData } from '../model/invalid-data.model';

@Component({
  selector: 'app-file-event',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],  
  templateUrl: './file-event.component.html',
  styleUrls: ['./file-event.component.css']
})
export class FileEventComponent implements OnInit {
  fileEventList$: Observable<FileEvent[]> | undefined;
  displayedColumns: string[] = ['filename', 'date', 'eventId', 'referenceId'];
  dataSource = new MatTableDataSource<FileEvent>();
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;
  validateButtonText: string = 'Validate';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:  InvalidData,
    private store: Store
  ) {}

  ngOnInit(): void {

    this.store.dispatch(FileEventActions.getFileEventByRefId({ referenceId: this.data.referenceId }));
    this.fileEventList$ = this.store.select(fromFileEvent.selectFileEventDetail);
    this.loading$ = this.store.select(fromFileEvent.selectFileEventLoading);
    this.error$ = this.store.select(fromFileEvent.selectFileEventError);

    this.fileEventList$.subscribe(fileEvent => {
      console.log(`fileEvent ${fileEvent}`);
      this.dataSource.data = fileEvent;
    });
  }

  toggleValidateData() {
    this.validateButtonText = this.validateButtonText === 'Validate'? 'Unvalidate' : 'Validate';
    this.store.dispatch(InvalidDataActions.toggleCheckedInvalidData({ id: this.data.id }));
  }
  
}
