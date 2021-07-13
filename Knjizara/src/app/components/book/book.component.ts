import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book | null = null;
  @Output() onClick: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    if (this.book) {
      this.onClick.emit(this.book);
    }
  }
}
