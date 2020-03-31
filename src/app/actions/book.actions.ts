import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';
 
import { Book } from '../models/book.interface';
 
export const loadBooks = createAction('[Book/API] Load Books', props<{ Books: Book[] }>());
export const addBook = createAction('[Book/API] Add Book', props<{ Book: Book }>());
export const setBook = createAction('[Book/API] Set Book', props<{ Book: Book }>());
export const upsertBook = createAction('[Book/API] Upsert Book', props<{ Book: Book }>());
export const addBooks = createAction('[Book/API] Add Books', props<{ Books: Book[] }>());
export const upsertBooks = createAction('[Book/API] Upsert Books', props<{ Books: Book[] }>());
export const updateBook = createAction('[Book/API] Update Book', props<{ Book: Update<Book> }>());
export const updateBooks = createAction('[Book/API] Update Books', props<{ Books: Update<Book>[] }>());
export const mapBooks = createAction('[Book/API] Map Books', props<{ entityMap: EntityMap<Book> }>());
export const deleteBook = createAction('[Book/API] Delete Book', props<{ id: number }>());
export const deleteBooks = createAction('[Book/API] Delete Books', props<{ ids: number[] }>());
export const deleteBooksByPredicate = createAction('[Book/API] Delete Books By Predicate', props<{ predicate: Predicate<Book> }>());
export const clearBooks = createAction('[Book/API] Clear Books');