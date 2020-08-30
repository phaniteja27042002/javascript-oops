class book {
    constructor (title, author, year){
      this.title = title;
      this.author = author;
      this.year =year ;
    }

    getsummary(){
book.prototype.getsummary = function(){
    return `${this.title} was written by 
    ${this.author} in ${this.year}`;
};

    getage()
        book.prototype.getage = function(){
            const year = new date().getfullyear -
             this.year;
            return `${this.title} is ${years} year 
            old`;
    }

    revise(newyear) 
        this.year = newyear;
        this.revised = true;
    }

    static topbookstore(){
        return 'barnes & noble';
    }
}

// instantiate object
 const book1 = new book('book one', 'john doe','2013');

// console.log(book1);
// book1.revise('2018');
// console.log(book1);

console.log(book1.topbookstore());