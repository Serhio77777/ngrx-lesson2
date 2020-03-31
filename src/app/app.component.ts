import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './state/app.state';
import { GetConfig } from './actions/config.actions';
import { selectConfig } from './selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-ngrx';
  public config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  public ngOnInit(): void {
    this._store.dispatch(new GetConfig());
  }
}
