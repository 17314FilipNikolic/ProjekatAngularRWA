import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { newsReducer } from './store/news.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BooksService } from './services/books.service';
import { NewsService } from './services/news.service';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';
import { BooksComponent } from './components/books/books.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { NewsComponent } from './components/news/news.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsListComponent } from './components/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksListComponent,
    BookDetailsComponent,
    BooksComponent,
    InfoComponent,
    NewsComponent,
    SingleNewsComponent,
    NewsDetailsComponent,
    NewsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, news: newsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([BooksEffects]),
  ],
  providers: [BooksService, NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
