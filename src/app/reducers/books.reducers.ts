import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../models/book.interface';
import * as BookActions from '../actions/book.actions';

import { initialBookState, IBookState } from './../state/book.state';

// export interface State extends EntityState<Book> {
//   // additional entities state properties
//   selectedBookId: number | null;
// }
 
export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();
 
export const initialState: IBookState = adapter.getInitialState({
  // additional entity state properties
  selectedBookId: null,
});
 
const BookReducer = createReducer(
  initialBookState,
  on(BookActions.addBook, (state, { Book }) => {
    return adapter.addOne(Book, state)
  }),
  on(BookActions.setBook, (state, { Book }) => {
    return adapter.setOne(Book, state)
  }),
  on(BookActions.upsertBook, (state, { Book }) => {
    return adapter.upsertOne(Book, state);
  }),
  on(BookActions.addBooks, (state, { Books }) => {
    return adapter.addMany(Books, state);
  }),
  on(BookActions.upsertBooks, (state, { Books }) => {
    return adapter.upsertMany(Books, state);
  }),
  on(BookActions.updateBook, (state, { Book }) => {
    return adapter.updateOne(Book, state);
  }),
  on(BookActions.updateBooks, (state, { Books }) => {
    return adapter.updateMany(Books, state);
  }),
  on(BookActions.mapBooks, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(BookActions.deleteBook, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(BookActions.deleteBooks, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(BookActions.deleteBooksByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(BookActions.loadBooks, (state, { Books }) => {
    return adapter.addAll(Books, state);
  }),
  on(BookActions.clearBooks, state => {
    return adapter.removeAll({ ...state, selectedBookId: null });
  })
);
 
export function booksReducer(state: IBookState | undefined, action: Action) {
  return BookReducer(state, action);
}
 
export const getSelectedBookId = (state: IBookState) => state.selectedBookId;
 
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of Book ids
export const selectBookIds = selectIds;
 
// select the dictionary of Book entities
export const selectBookEntities = selectEntities;
 
// select the array of Books
export const selectAllBooks = selectAll;
 
// select the total Book count
export const selectBookTotal = selectTotal;