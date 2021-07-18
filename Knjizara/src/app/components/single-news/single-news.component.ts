import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss'],
})
export class SingleNewsComponent implements OnInit {
  @Input() singleNews: News | null = null;
  @Output() onClick: EventEmitter<News> = new EventEmitter<News>();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    if (this.singleNews) {
      this.onClick.emit(this.singleNews);
    }
  }
}
