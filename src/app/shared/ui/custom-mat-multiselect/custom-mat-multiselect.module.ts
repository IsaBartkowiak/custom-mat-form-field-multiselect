import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatChipsModule, MatCheckboxModule, MatInputModule } from '@angular/material';
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
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomMatMultiselectComponent,
  ],
})
export class CustomMatMultiselectModule { }
