import { Component, OnInit, OnDestroy } from '@angular/core';
import { Option } from '../shared/option.model';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: MultiselectComponent,
  }],
})
export class MultiselectComponent implements MatFormFieldControl<Option[]>, OnInit, OnDestroy {

  public multiselectValue: Option[];

  private stateChanges = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  get value(): Option[] | null {
    return this.multiselectValue;
  }

  set value(options: Option[] | null) {
    this.multiselectValue = options;
    this.stateChanges.next();
  }
}
