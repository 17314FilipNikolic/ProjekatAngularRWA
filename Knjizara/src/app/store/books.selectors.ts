import { createSelector } from "@ngrx/store";
import { Book } from "../models/book";
import { AppState } from "./app.state";
import { BooksState } from "./books.reducer";

export const selectBooksFeature = createSelector(
    (state: AppState) => state.books,
    (books) => books
);
export const selectAllBooks = createSelector(
    selectBooksFeature,
    (state: BooksState) => Object
        .values(state.entities)
        .filter(book => book != null)
        .map(book => <Book>book)
);

export const selectAllBooksAsDict = createSelector(
    selectBooksFeature,
    (state: BooksState) => state.entities
);

export const selectClickedBookId = createSelector(
    selectBooksFeature,
    (state: BooksState) => state.clickedBookId
);


export const selectClickedBook = createSelector(
    selectAllBooksAsDict,
    selectClickedBookId,
    (books, clickedBookId) => books[clickedBookId] ?? null
);