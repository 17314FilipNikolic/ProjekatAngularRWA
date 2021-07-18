import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/models/news';
import { AppState } from 'src/app/store/app.state';
import { selectNews } from 'src/app/store/news.actions';
import { selectAllNews } from 'src/app/store/news.selectors';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  news: Observable<readonly News[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.news = this.store.select(selectAllNews);
  }

  selectedNews(singleNews: News) {
    this.store.dispatch(selectNews({ newsId: singleNews.id }));
  }
}
