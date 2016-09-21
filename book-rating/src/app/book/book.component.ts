import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>(true);

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
    console.log('ende!')
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }
}
