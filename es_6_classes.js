class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} and ${this.year}`;
    }
    
    getAge(){
        const years =new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years;`
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
     static topBookStore(){
        return 'Barnes & Noble';

     }


}

console.log(Book.topBookStore());
// instant 

const book1 = new Book( 'atomic habbits', 'diana', '2012');
book1.revise('2026')

console.log(book1);