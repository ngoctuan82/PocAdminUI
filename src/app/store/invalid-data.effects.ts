import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InvalidDataService } from '../services/invalid-data.service';
import * as InvalidDataActions from './invalid-data.actions';

@Injectable()
export class InvalidDataEffects {
  loadInvalidData$ = createEffect(() =>

    this.actions$.pipe(
      ofType(InvalidDataActions.getInvalidDataList),

      switchMap(() =>
        this.invalidDataService.getAll().pipe(
          map(invalidDataList => InvalidDataActions.getInvalidDataListSuccess({ invalidDataList })),
          catchError(error => of(InvalidDataActions.getInvalidDataListFailure({ error })))
        )
      )
      
    )
  );

  constructor(
    private actions$: Actions,
    private invalidDataService: InvalidDataService
  ) {}
}
