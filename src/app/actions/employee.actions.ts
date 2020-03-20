import { createAction, props } from '@ngrx/store';
import { EmployeeEntity } from '../reducers/emplyees.reducer';



export const employeesLoadedSuccessfully = createAction(
  '[employees] loaded successfully',
  props<{ payload: EmployeeEntity[] }>()
);

let fakeIdSeed = 1;

export const employeeAdded = createAction(
  '[employees] added employee',
  ({ firstName, lastName, department }: { firstName: string, lastName: string, department: string }) => ({
    payload: {
      id: 'T' + fakeIdSeed++,
      firstName,
      lastName,
      department
    } as EmployeeEntity
  })
);

export const employeeAddedSuccessfully = createAction(
  '[emplyees] employee added successfully',
  props<{ oldId: string, employee: EmployeeEntity }>()
);


export const employeeFired = createAction(
  '[employees] fired an employee',
  props<{ payload: EmployeeEntity }>()
);

export const employeeFiredFailure = createAction(
  '[employees] failed to fire an employee',
  props<{ payload: EmployeeEntity, errorMessage: string }>()
);

