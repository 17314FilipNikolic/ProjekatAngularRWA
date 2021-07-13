import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import * as Actions from './books.actions';

export interface BooksState extends EntityState<Book> {
  clickedBookId: number;
}

const adapter = createEntityAdapter<Book>();

const initialState: BooksState = adapter.getInitialState({
  clickedBookId: 0,
});

export const booksReducer = createReducer(
  initialState,
  on(Actions.changeRating, (state, { bookId, rating }) => {
    const targetBook = state.entities[bookId];
    if (targetBook) {
      return adapter.setOne({ ...targetBook, score: rating }, state);
    } else {
      return state;
    }
  }),
  on(Actions.loadBooksSuccess, (state, { books }) =>
    adapter.setAll(books, state)
  ),
  on(Actions.selectBook, (state, { bookId }) => ({
    ...state,
    clickedBookId: bookId,
  }))
);
