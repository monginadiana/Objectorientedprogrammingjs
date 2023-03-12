// object.method()

// everything is an object
// when you call a method to it it becomes an object


const s = 'hello'

console.log(s.toUpperCase())

// const s2 = new string('diana')

// console.log(typeof s2)

const book1 = {
    title : "atomic habbits",
    author : "diana",
    year : 2000,

    // object literals
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

};

console.log(book1.getSummary())

const book2 = {
    title : 'Ikigai',
    author : 'mongina',
    year : 2002,

    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


console.log(book2.getSummary())
// to get values of books
console.log(Object.values(book1))

// to get keys of books

console.log(Object.keys(book2))

// constructor

function Book(title, author, year){
    // to refer to any instance we are using it
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function(){
    const age = new Date().getFullYear() - this.year
    return `${this.title} s ${age} years old`
}

// revise year

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}





const read1 = new Book ('atomi habbits', 'victor', 2000);
const read2 =  new Book ('ikigai', 'johan', 2014 )

read1.revise('2022')

console.log(read1.getSummary())

console.log(read1.getAge())

console.log(read1)


// inheritance in javascript



function Magazine (title, author, year, month){
    Book.call(this, title, author, year)

    this.month = month;

}

const mag1 = new Magazine('Newyork Times', 'diana', 2022, 'February')

console.log(mag1)

Magazine.prototype = Object.create(Book.prototype)

console.log(mag1.getSummary())

// use magazine constructor

Magazine.prototype.constructor = Magazine

console.log(mag1)