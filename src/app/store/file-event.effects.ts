import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FileEventService } from '../services/file-event.service';
import * as FileEventActions from './file-event.actions';

@Injectable()
export class FileEventEffects {
  loadFileEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FileEventActions.getFileEventByRefId),
      switchMap(action => {
        const referenceId = action.referenceId;
        return this.fileEventService.getByRefId(referenceId)
            .pipe(
              map(data =>
                {
                  console.log(`FileEventList ${data}`);
                  return FileEventActions.getFileEventByIdSuccess({ fileEventList: data });
                } ,
                catchError(error => of(FileEventActions.getFileEventByIdFailure({ error })))
              )
            )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private fileEventService: FileEventService
  ) {}
}
