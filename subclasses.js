class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} and ${this.year}`;
    }
    
}
   
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year, month)
        this.month = month;
    }

}

const mag1 = new Magazine('newyork times', 'diana', 2022, 'february');

console.log(mag1.getSummary())