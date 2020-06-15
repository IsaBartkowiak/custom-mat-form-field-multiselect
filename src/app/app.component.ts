import { Option } from './shared/ui/custom-mat-multiselect/shared/option.model';
import { MockCars } from './mock/mock-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public readonly mockCarsOptions = MockCars;

  public form: FormGroup;
  public cars: Option[];

  ngOnInit(): void {
    this.cars = [{
      label: 'Volkswagen',
      id: 1,
    }];
    this.form = new FormGroup({
      cars: new FormControl(),
    });
  }

  public changeCarsValue(): void {
    this.cars = [MockCars[2]];
  }

  public changeFormControlValue(): void {
    this.form.controls.cars.setValue([MockCars[2]]);
  }
}
