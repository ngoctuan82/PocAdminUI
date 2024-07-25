import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, Observable,async  } from 'rxjs';
import { FileEventComponent } from '../file-event/file-event.component';
import { InvalidData } from '../model/invalid-data.model';
import * as DataActions from '../store/invalid-data.actions';
import { selectInvalidDataList, selectInvalidDataLoading, selectInvalidDataError } from '../store/invalid-data.selectors';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-invalid-data',
  standalone: true,
  imports: [NgFor, CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './invalid-data.component.html',
  styleUrl: './invalid-data.component.css'
})
export class InvalidDataComponent implements  OnInit{
  displayedColumns: string[] = ['id', 'name', 'effectiveDate', 'value', 'referenceId'];
  dataSource = new MatTableDataSource<InvalidData>();
  highlightedRow: InvalidData | null = null;

  invalidDataList$: Observable<InvalidData[]> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private store: Store,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(DataActions.getInvalidDataList());
    this.invalidDataList$ = this.store.select(selectInvalidDataList);
    this.loading$ = this.store.select(selectInvalidDataLoading);
    this.error$ = this.store.select(selectInvalidDataError);

    this.invalidDataList$.subscribe(data => {
      
      console.log("Hit");
      console.log(data);

      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  highlight(row: InvalidData){
    this.highlightedRow = row;
  }

  onRowClick(referenceId: number)
  {
    this.dialog.open(FileEventComponent,{ data: {referenceId: referenceId} });
  }
}
