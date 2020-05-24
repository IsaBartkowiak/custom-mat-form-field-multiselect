import { MockCars } from './mock/mock-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public readonly mockCarsOption = MockCars;
  public form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      cars: new FormControl(),
    });
  }
}
