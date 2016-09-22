import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../shared/book';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor(private http: Http,
    @Inject('MY_BOOK_MONKEY_URL') private url: string) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.books = response.json().map(json =>
          new Book(json.title, json.description, json.rating)
        );
        this.reorderBooks();
      });
  }

  addBook(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
