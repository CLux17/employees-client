import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { employeeAdded } from 'src/app/actions/employee.actions';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  hire(firstNameEL: HTMLInputElement,
    lastNameEL: HTMLInputElement,
    departmentEL: HTMLInputElement) {
    const payload = {
      firstName: firstNameEL.value,
      lastName: lastNameEL.value,
      department: departmentEL.value
    };

    this.store.dispatch(employeeAdded(payload));
    console.log(payload);
    firstNameEL.value = '';
    lastNameEL.value = '';
    departmentEL.value = '';
    firstNameEL.focus();
  }
}
