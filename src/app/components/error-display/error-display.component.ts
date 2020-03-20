import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectHasError, selectErrorMessage } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { clearError } from 'src/app/actions/errors.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  hasErrors$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasErrors$ = this.store.select(selectHasError);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  clear() {
    this.store.dispatch(clearError());
  }

}
