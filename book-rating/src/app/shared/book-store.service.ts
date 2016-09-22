import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http,
    @Inject('MY_BOOK_MONKEY_URL') private url: string) { }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`http://book-monkey2-api.angular2buch.de/book/${isbn}`)
      .map(response => response.json())
      .map(r => new Book(r.title, r.description, r.rating, r.isbn));
  }

  getAll(): Observable<Book[]> {
    return this.http
      .get(this.url)
      .map(response => response.json())
      .map(jsonArray => jsonArray
        .map(jsonObj =>
          new Book(
            jsonObj.title,
            jsonObj.description,
            jsonObj.rating,
            jsonObj.isbn)
        ));
  }
}
