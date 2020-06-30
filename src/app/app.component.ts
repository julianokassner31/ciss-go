import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CISSGo';
  loading$: Observable<any>;
  constructor(private store: Store<{ loading: boolean }>) {
    this.loading$ = this.store.pipe(select('loading'));
  }
}
