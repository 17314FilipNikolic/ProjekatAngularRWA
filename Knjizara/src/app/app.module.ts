import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BooksService } from './services/books.service';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksListComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: bookReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
