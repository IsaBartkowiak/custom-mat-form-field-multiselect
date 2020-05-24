import { Component, OnInit } from '@angular/core';
import { Option } from '../shared/option.model';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: MultiselectComponent,
  }],
})
export class MultiselectComponent implements MatFormFieldControl<Option[]>, OnInit {

  public multiselectValue: Option[];

  constructor() { }

  get value(): Option[] | null {
    return this.multiselectValue;
  }

  set value(options: Option[] | null) {
    this.multiselectValue = options;
  }

  ngOnInit() {
  }

}
