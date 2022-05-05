import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, featureName } from './counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    // type 2
    StoreModule.forRoot({ [featureName]: counterReducer }),

    // type 1
    //StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [CounterComponent],
})
export class CounterModule {}
