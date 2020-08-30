 // constructor
 function book(title,author,year) {
    this.title=title;
    this.author=author;
    this.year =year ;
    
    this.getsummary = function() {
        return `${this.title} was written by $
        {this.author} in ${this.year}`;
    };
}   
//instatiate an object
const book1 = new book('book one','joh doe','2013');
const book2 = new book('book two','akash kishan','2006');

console.log(book2);