import { createSelector } from '@ngrx/store';
import { News } from '../models/news';
import { AppState } from './app.state';
import { NewsState } from './news.reducer';

export const selectNewsFeature = createSelector(
  (state: AppState) => state.news,
  (news) => news
);
export const selectAllNews = createSelector(
  selectNewsFeature,
  (state: NewsState) =>
    Object.values(state.entities)
      .filter((news) => news != null)
      .map((news) => <News>news)
);

export const selectAllNewsAsDict = createSelector(
  selectNewsFeature,
  (state: NewsState) => state.entities
);

export const selectClickedNewsId = createSelector(
  selectNewsFeature,
  (state: NewsState) => state.clickedNewsId
);

export const selectClickedNews = createSelector(
  selectAllNewsAsDict,
  selectClickedNewsId,
  (news, clickedNewsId) => news[clickedNewsId] ?? null
);
