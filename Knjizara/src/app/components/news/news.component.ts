import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/models/news';
import { AppState } from 'src/app/store/app.state';
import { selectClickedNews } from 'src/app/store/news.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  title = 'ng-news';
  selectedNews: Observable<News | null> = of(null);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedNews = this.store.select(selectClickedNews);
  }
}
