import { createReducer, on } from '@ngrx/store';
import * as InvalidDataActions from './invalid-data.actions';
import { InvalidData } from '../model/invalid-data.model';

export interface InvalidDataState {
  invalidDataList: InvalidData[];
  loading: boolean;
  error: any;
  filter: any;
}

const initialState: InvalidDataState = {
  invalidDataList: [],
  loading: false,
  error: null,
  filter: null
};

export const invalidDataReducer = createReducer(
  initialState,
  on(InvalidDataActions.getInvalidDataList, state => ({
    ...state, // create a new state object with the same properties as the current state
    loading: true,
    error: null
  })),
  on(InvalidDataActions.getInvalidDataListSuccess, (state, { invalidDataList: invalidDataList }) => ({
    ...state, // create a new state object with the same properties as the current state
    invalidDataList: invalidDataList,
    loading: false
  })),
  on(InvalidDataActions.getInvalidDataListFailure, (state, { error }) => ({
    ...state, // create a new state object with the same properties as the current state
    loading: false,
    error
  })),
  on(InvalidDataActions.toggleCheckedInvalidData, (state, { id }) => 
  {
    console.log('Validating data with id: ' , id);
    return {
    ...state, // create a new state object with the same properties as the current state
    invalidDataList: state.invalidDataList.map(item =>
      item.event_Id === id ? { ...item, validated: !item.validated } : item
        // For the matching item, create a new object with all properties from the original item,
        // then overwrite with properties from the updated data
    )
    }
})
  
);
