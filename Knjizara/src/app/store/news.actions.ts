import { createAction, props } from '@ngrx/store';
import { News } from '../models/news';

export const loadNewsSuccess = createAction(
  'Load news Success',
  props<{ news: News[] }>()
);

export const loadNews = createAction('Load news');

export const selectNews = createAction(
  'Select News',
  props<{ newsId: number }>()
);
