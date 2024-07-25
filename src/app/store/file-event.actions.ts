import { createAction, props } from '@ngrx/store';
import { FileEvent } from '../model/file-event.model';

export const getFileEventByRefId = createAction(
  '[FileEvent] Get By Id',
  props<{ referenceId: number }>()
);

export const getFileEventByIdSuccess = createAction(
  '[FileEvent] Get By Id Success',
  props<{ fileEventList: FileEvent[] }>()
);

export const getFileEventByIdFailure = createAction(
  '[FileEvent] Get By Id Failure',
  props<{ error: any }>()
);