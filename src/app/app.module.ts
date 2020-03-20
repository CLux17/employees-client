import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKioskComponent } from './components/bank-kiosk/bank-kiosk.component';
import { BankAccountService } from './services/bank-account.services';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeEntryComponent } from './components/employees/components/employee-entry/employee-entry.component';
import { EmployeeListComponent } from './components/employees/components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeEffects } from './effects/employees.effects';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    BankKioskComponent,
    CounterComponent,
    EmployeesComponent,
    EmployeeEntryComponent,
    EmployeeListComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects, EmployeeEffects]),
    HttpClientModule
  ],
  providers: [
    BankAccountService,
    // { provide: ICalculateBonuses, useClass: StandardBonusCalculator }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
