import { Book } from './book';

fdescribe('Rating a book', () => {

  let book: Book;

  beforeEach(() => book = new Book('title', 'description'));

  it('should not rate higher than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toEqual(5);
  });

  it('should not rate lower than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toEqual(0);
  });
});
