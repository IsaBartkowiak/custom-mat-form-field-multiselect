import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatChipsModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMatMultiselectComponent } from './multiselect/custom-mat-multiselect.component';

@NgModule({
  declarations: [
    CustomMatMultiselectComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  exports: [
    CustomMatMultiselectComponent,
  ],
})
export class CustomMatMultiselectModule { }
