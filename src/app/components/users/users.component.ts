import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { GetUsers } from './../../actions/user.actions';
import { IAppState } from '../../state/app.state';
import { selectUserList } from '../../selectors/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'cardNumber', 'cardType'];
  public users$ = this._store.pipe(select(selectUserList))

  constructor(
    private _store: Store<IAppState>, 
    private _router: Router
  ) {
    this._store.pipe(select(selectUserList))
  }

  public ngOnInit(): void {
    this._store.dispatch(new GetUsers());
  }

  public navigateToUser(id: number): void {
    this._router.navigate(['user', id]);
  }
}
