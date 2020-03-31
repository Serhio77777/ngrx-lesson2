import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromBook from '../reducers/books.reducers';
 
import { IBookState } from '../state/book.state';

export const selectBookState = createFeatureSelector<IBookState>('books');
 
export const selectBookIds = createSelector(
  selectBookState,
  fromBook.selectBookIds // shorthand for BooksState => fromBook.selectBookIds(BooksState)
);
export const selectBookEntities = createSelector(
  selectBookState,
  fromBook.selectBookEntities
);
export const selectAllBooks = createSelector(
  selectBookState,
  fromBook.selectAllBooks
);
export const selectBookTotal = createSelector(
  selectBookState,
  fromBook.selectBookTotal
);
export const selectCurrentBookId = createSelector(
  selectBookState,
  fromBook.getSelectedBookId
);
 
export const selectCurrentBook = createSelector(
  selectBookEntities,
  selectCurrentBookId,
  (BookEntities, BookId) => BookEntities[BookId]
);