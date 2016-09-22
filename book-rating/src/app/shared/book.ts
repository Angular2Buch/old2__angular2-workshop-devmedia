export class Book {

  static empty(): Book {
    return new Book('', '');
  }

  constructor(
    public title: string,
    public description: string,
    public rating = 0,
    public isbn = ''
  ) {
    this.isbn = isbn || Math.random().toString(36).substr(2, 9);
  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 0) {
      this.rating--;
    }
  }
}



