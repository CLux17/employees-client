import { createAction, props } from '@ngrx/store';
import { EmployeeEntity } from '../reducers/emplyees.reducer';


export const employeesLoadedSuccessfully = createAction(
  '[employees] loaded successfully',
  props<{ payload: EmployeeEntity[] }>()
);

