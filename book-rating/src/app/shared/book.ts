export class Book {

    constructor(
        public title: string,
        public description: string,
        public rating = 0
    ) { }

    rateUp() {
        this.rating++;
    }

    rateDown() {
        this.rating--;
    }
}



