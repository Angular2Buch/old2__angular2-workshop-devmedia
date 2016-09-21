import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  @Output() bookCreated = new EventEmitter<Book>();

  add(title: HTMLInputElement, description: HTMLInputElement) {
    let book = new Book(title.value, description.value);
    this.bookCreated.emit(book);
    title.value = description.value = '';
  }
}
