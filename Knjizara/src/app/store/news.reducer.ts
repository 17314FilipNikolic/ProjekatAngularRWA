import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { News } from 'src/app/models/news';
import * as Actions from './news.actions';

export interface NewsState extends EntityState<News> {
  clickedNewsId: number;
}

const adapter = createEntityAdapter<News>();

const initialState: NewsState = adapter.getInitialState({
  clickedNewsId: 0,
});

export const newsReducer = createReducer(
  initialState,
  on(Actions.loadNewsSuccess, (state, { news }) => adapter.setAll(news, state)),
  on(Actions.selectNews, (state, { newsId }) => ({
    ...state,
    clickedNewsId: newsId,
  }))
);
