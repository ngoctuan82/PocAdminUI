import { createReducer, on } from '@ngrx/store';
import * as FileEventActions from './file-event.actions';
import { FileEvent } from '../model/file-event.model';

export interface FileEventState {
  fileEventList: FileEvent[];
  loading: boolean;
  error: any;
}

const initialState: FileEventState = {
  fileEventList: [] , 
  loading: false,
  error: null
};

export const fileEventReducer = createReducer(
  initialState,
  on(FileEventActions.getFileEventByRefId, state => ({
    ...state,     // create a new state object with the same properties as the current state
    loading: true,
    error: null
  })),
  on(FileEventActions.getFileEventByIdSuccess, (state, { fileEventList }) => ({
    ...state,   // create a new state object with the same properties as the current state
    fileEventList,
    loading: false
  })),
  on(FileEventActions.getFileEventByIdFailure, (state, { error }) => ({
    ...state,   // create a new state object with the same properties as the current state
    loading: false,
    error
  }))
);
