import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../state/app.state';
import { selectCurrentBook } from '../../selectors/book.selector';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book$ = this._store.pipe(select(selectCurrentBook));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
