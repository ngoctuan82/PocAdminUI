import { createAction, props } from '@ngrx/store';
import { InvalidData } from '../model/invalid-data.model';

export const getInvalidDataList = createAction('[InvalidData] Get List');

export const getInvalidDataListSuccess = createAction(
  '[InvalidData] Get List Success',
  props<{ invalidDataList: InvalidData[] }>()
);

export const getInvalidDataListFailure = createAction(
  '[InvalidData] Get List Failure',
  props<{ error: any }>()
);

export const validateInvalidData = createAction(
  '[InvalidData] Validate Invalid Data',
  props<{ id: number }>()
);

