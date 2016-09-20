import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  ngOnInit() {
    this.books = [
        new Book('NG1', 'schön wars'),
        new Book('NG2', 'die Zukunft jetzt')];
  }
}
