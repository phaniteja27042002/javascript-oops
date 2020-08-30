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

// magazine constructor
function magazine(title,author,year,month) {
 book.call(this,title,author,year);

  this.month =month;
}

// inherit prototype
magazine.prototype = Object.create(book.prototype);


// instantiate magzine object
const mag1 = new magazine('mag one','john doe','2018',
'jan');


//use magazine constructor
magazine.prototype.constructor = magazine;
console.log(mag1);










