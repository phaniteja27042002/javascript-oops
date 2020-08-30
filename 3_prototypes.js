 // constructor
 function book(title,author,year) {
    this.title=title;
    this.author=author;
    this.year =year ;
} 

//getsummary
book.prototype.getsummary = function(){
    return `${this.title} was written by 
    ${this.author} in ${this.year}`;
};

//getage
book.prototype.getage = function(){
    const year = new date().getfullyear - this.year;
    return `${this.title} is ${years} year old`;
};

//revise / change year
book.prototype.revise = function(newyear) {
    this.year = newyear;
    this.revise = true;
}
//instatiate an object
const book1 = new book('book one','joh doe','2013');
const book2 = new book('book two','akash kishan','2006');

console.log(book2);
book2.revise('2018')
console.log(book2);