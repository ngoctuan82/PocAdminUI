import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromInvalidData from './invalid-data.reducer';

export const selectInvalidDataState = createFeatureSelector<fromInvalidData.InvalidDataState>('InvalidData');

export const selectInvalidDataList = createSelector(
  selectInvalidDataState,
  (state: fromInvalidData.InvalidDataState) => { 
    console.log(state);
    return state.invalidDataList;
  }
);

export const selectInvalidDataLoading = createSelector(
  selectInvalidDataState,
  (state: fromInvalidData.InvalidDataState) => state.loading
);

export const selectInvalidDataError = createSelector(
  selectInvalidDataState,
  (state: fromInvalidData.InvalidDataState) => state.error
);
