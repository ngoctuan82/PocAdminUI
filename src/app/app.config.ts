import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { invalidDataReducer } from './store/invalid-data.reducer';
import { fileEventReducer } from './store/file-event.reducer';
import { InvalidDataEffects } from './store/invalid-data.effects';
import { provideHttpClient } from '@angular/common/http';
import { FileEventEffects } from './store/file-event.effects';
import { importProvidersFrom } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideEffects([InvalidDataEffects, FileEventEffects]),
    provideHttpClient(),
    provideStore({
      InvalidData: invalidDataReducer,
      fileEvent: fileEventReducer,        
    }),
    importProvidersFrom(MatTableModule, MatPaginatorModule, MatSortModule)
  ]
};
