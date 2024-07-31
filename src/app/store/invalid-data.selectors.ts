import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import * as fromInvalidData from './invalid-data.reducer';
import { setInvalidDataFilter } from './invalid-data.actions';

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

export const selectFilteredInvalidData = createSelector(
  selectInvalidDataList,
  setInvalidDataFilter,
  (data, filter) => data.filter(item => item.name.toLowerCase().includes(filter.filter.toLowerCase()))
);

