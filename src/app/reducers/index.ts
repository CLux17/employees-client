import * as fromCounter from './counter.reducer';
import * as fromEmployees from './emplyees.reducer';
import * as employeeModels from '../components/employees/models';
import { createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  employees: fromEmployees.EmployeeState;
}

export const reducers = {
  counter: fromCounter.reducer,
  employees: fromEmployees.reducer
};

const selectCounter = (state: AppState) => state.counter;
const selectEmployees = (state: AppState) => state.employees;

export const selectCountingBy = createSelector(selectCounter, c => c.by);
export const selectCurrentCount = createSelector(selectCounter, (c) => c.current);
export const selecteAtBegining = createSelector(selectCurrentCount, selectCountingBy, (c, b) => (c - b) < 0);
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);

const { selectAll: selectEmployeesArray } = fromEmployees.adapter.getSelectors(selectEmployees);

export const selectEmployeeListModel = createSelector(selectEmployeesArray,
  e => e as employeeModels.EmployeeListModel[]);
