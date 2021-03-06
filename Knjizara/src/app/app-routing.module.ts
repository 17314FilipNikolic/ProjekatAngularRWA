import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { InfoComponent } from './components/info/info.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
