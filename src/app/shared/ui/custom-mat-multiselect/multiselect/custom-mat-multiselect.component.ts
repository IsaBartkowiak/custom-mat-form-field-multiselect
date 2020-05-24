import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../shared/option.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-custom-mat-multiselect',
  templateUrl: './custom-mat-multiselect.component.html',
  styleUrls: ['./custom-mat-multiselect.component.scss'],
})
export class CustomMatMultiselectComponent implements OnInit {

  @Input() options: Option[];
  @Input() value: Option[] | null;

  public searchControl: FormControl;
  public isAllSelected: boolean;
  public filteredOptions: Observable<Option[]>;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      map(searchQuery => this.filterOptions(searchQuery)),
    );
  }

  public filterOptions(searchQuery: string): Option[] {
    return this.options.map(option => {
      option.isHidden = !option.label.toLowerCase().includes(searchQuery.toLowerCase());
      return option;
    });
  }

  public removeOption(optionToRemove: Option): void {
    this.value = this.value.filter(option => optionToRemove.id !== option.id);
  }

  public clearSelection(): void {
    this.value = null;
    this.isAllSelected = false;
  }

  public toggleSelection(isAllSelected: boolean): void {
    this.value = isAllSelected ? this.options : null;
  }

}
