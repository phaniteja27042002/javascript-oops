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
  }
 }

 // magazine Subclass
 class magazine extends Book { 
   constructor(title, author, year, month){
       super(title, author, year);
       this.month = month;
   }
 }

 //instantiate magazine
 const mag1 = magazine('mag one', 'john doe', '2018', 
 'jan');

 console.log(mag1.getsummary());