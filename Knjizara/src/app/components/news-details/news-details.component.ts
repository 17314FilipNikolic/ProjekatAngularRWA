import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  @Input() singleNews: News | null = null;

  constructor() {}

  ngOnInit(): void {}
}
