import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IAppState } from '../../state/app.state';
import { selectBookEntities } from '../../selectors/book.selector';
import * as BookActions from '../../actions/book.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books$: Observable<any> = this._store.pipe(select(selectBookEntities))
  public displayedColumns: string[] = ['id', 'name', 'action']
  public book: string = 'Man In Black'
  public index: number = 0

  constructor(
    private _store: Store<IAppState>, 
    private _router: Router
  ) {
  }

  public ngOnInit(): void {
    this._store.pipe(select(selectBookEntities)).subscribe(data => {
      if (data && this.keyvalue(data).length) {
        this.index = this.keyvalue(data).length
      }
    });
  }

  public navigateToBook(id: number): void {
    this._router.navigate(['book', id]);
  }

  public keyvalue (data): any[] {
    return Object.values(data)
  }

  /**
   * addOne
   * (bookName: string) : void  
   */
  public addOne(bookName: string): void {
    this._store.dispatch(BookActions.addBook({
      Book: {
        id: this.index,
        name: bookName
      }
    }))
    this.book = ''
  }

  /**
   * deleteOne
   * (id: number): void
   */
  public deleteOne(id: number, e?): void {
    e.stopPropagation()
    this._store.dispatch(BookActions.deleteBook({ id }))
  }
}
