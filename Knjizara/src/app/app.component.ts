import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { loadBooks } from './store/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Knjizara';

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }
}
