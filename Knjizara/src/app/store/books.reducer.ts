import { createReducer } from "@ngrx/store";

export interface BookState {

}

export const initialState: BookState = {

}
export const bookReducer = createReducer(
    initialState
)