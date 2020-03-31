import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { initialConfigState, IConfigState } from './config.state';
import { initialBookState, IBookState } from './book.state';


export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  books: IBookState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  books: initialBookState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
