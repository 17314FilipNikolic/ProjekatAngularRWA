import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Book[]>(environment.apiURL + '/books')
      .pipe(catchError(errorHandler));
  }

  getById(id: number) {
    return this.httpClient
      .get<Book>(`${environment.apiURL}/books/${id}`)
      .pipe(catchError(errorHandler));
  }
}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
