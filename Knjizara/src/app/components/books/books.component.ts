import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/store/app.state';
import { selectClickedBook } from 'src/app/store/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  title = 'ng-books';
  selectedBook: Observable<Book | null> = of(null);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedBook = this.store.select(selectClickedBook);
  }
}
