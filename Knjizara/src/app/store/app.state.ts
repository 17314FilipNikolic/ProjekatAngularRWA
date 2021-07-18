import { BooksState } from './books.reducer';
import { NewsState } from './news.reducer';

export interface AppState {
  books: BooksState;
  news: NewsState;
}
