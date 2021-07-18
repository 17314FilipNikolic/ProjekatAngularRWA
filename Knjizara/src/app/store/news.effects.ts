import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import * as NewsActions from './news.actions';

@Injectable()
export class NewsEffects {
  constructor(private newsService: NewsService, private actions$: Actions) {}

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadNews),
      switchMap(() =>
        this.newsService.getAll().pipe(
          map((news) => NewsActions.loadNewsSuccess({ news })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );
}
