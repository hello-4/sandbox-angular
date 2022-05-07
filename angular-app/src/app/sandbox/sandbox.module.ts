import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgrxComponent } from './ngrx/ngrx.component';
import { sandboxReducer, featureName } from './sandbox.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ [featureName]: sandboxReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [NgrxComponent],
})
export class SandboxModule {}
