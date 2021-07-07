import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const changeRating = createAction(
    "Change rating", 
    props<{bookId: number, rating: number}>()
    );

export const loadBooksSuccess = createAction(
    "Load books Success",
    props<{books: Book[]}>()
);

export const loadBooks = createAction(
    "Load books"
);

export const selectBook = createAction(
    "Select Book",
    props<{bookId: number}>()
);