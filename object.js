// object of prototype

const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    },
    getAge: function(){
        const years = new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years old`;

    }
}

// let's create objects

const book1 = Object.create(bookProtos);
book1.title = 'atomic habbits';
book1.author = 'diana'
book1.year = 2013

console.log(book1)  

const book1 = Object.create(bookProtos,{
    title: {value: 'atomic habbits'},
    author:{value: 'diana'},
    year :{value: '2013'}
})


console.log(book1) 


