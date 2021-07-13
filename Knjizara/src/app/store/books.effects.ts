import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BooksService } from '../services/books.service';
import * as BookActions from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(private booksService: BooksService, private actions$: Actions) {}

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      switchMap(() =>
        this.booksService.getAll().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );
}
