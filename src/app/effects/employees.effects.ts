import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../actions/app.actions';
import * as employeeActions from '../actions/employee.actions';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { EmployeeEntity } from '../reducers/emplyees.reducer';
import { of, Observable } from 'rxjs';


@Injectable()
export class EmployeeEffects {


  fireEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.employeeFired),
      switchMap(a => this.client.delete(`http://localhost:1337/employees/${a.payload.id}`)
        .pipe(
          filter(() => false),
          catchError(() => of(employeeActions.employeeFiredFailure({
            payload: a.payload,
            errorMessage: 'failed to delete'
          })) as Observable<any>
          )
        )
      )
    ), { dispatch: true });

  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.employeeAdded),
      switchMap(a => this.client.post<EmployeeEntity>('http://localhost:1337/employees', {
        firstName: a.payload.firstName,
        lastName: a.payload.lastName,
        department: a.payload.department
      }).pipe(
        map(savedEmployee => employeeActions.employeeAddedSuccessfully(
          {
            oldId: a.payload.id,
            employee: savedEmployee
          }))
      )
      )
    ),
  );
  // ApplicationStarted -> (call the api... and then dispatch an action) -> employeesLoadedSuccessfully
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<GetEmployeesResponse>('http://localhost:1337/employees')
        .pipe(
          map(response => response.data),
          map(payload => employeeActions.employeesLoadedSuccessfully({ payload }))
        )
      )
    )
  );


  constructor(private actions$: Actions, private client: HttpClient) { }
}
interface GetEmployeesResponse {
  data: EmployeeEntity[];
}
