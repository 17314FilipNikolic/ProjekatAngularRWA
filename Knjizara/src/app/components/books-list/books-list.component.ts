import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState } from 'src/app/store/app.state';
import { selectBook } from 'src/app/store/books.actions';
import { selectAllBooks } from 'src/app/store/books.selectors';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent implements OnInit {
  books: Observable<readonly Book[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.books = this.store.select(selectAllBooks);
  }

  selectedBook(book: Book) {
    this.store.dispatch(selectBook({ bookId: book.id }));
  }
}
