import { EntityState } from '@ngrx/entity';
import { Book } from '../models/book.interface';

export interface IBookState extends EntityState<Book> {
  // additional entities state properties
  selectedBookId: number | null;
}

export const initialBookState: IBookState = {
  ids: [0, 1, 2],
  selectedBookId: 0,
  entities: {
    0: {
      id: 0,
      name: 'The Fellowship of the Ring'
    },
    1: {
      id: 1,
      name: 'The Two Towers'
    },
    2: {
      id: 2,
      name: 'The Return of the King'
    }
  }
};
