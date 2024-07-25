import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromFileEvent from './file-event.reducer';

export const selectFileEventState = createFeatureSelector<fromFileEvent.FileEventState>('FileEvent');

export const selectFileEventDetail = createSelector(
  selectFileEventState,
  (state: fromFileEvent.FileEventState) => 
  {
    console.log(`selectFileEventDetail ${state} `);
    return state.fileEventList;
  }
);

export const selectFileEventLoading = createSelector(
  selectFileEventState,
  (state: fromFileEvent.FileEventState) => state.loading
);

export const selectFileEventError = createSelector(
  selectFileEventState,
  (state: fromFileEvent.FileEventState) => state.error
);
