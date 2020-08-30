// object of protos
 const bookprotos = {
     getsummary:function(){
    return `${this.title} was written by 
    ${this.author} in ${this.year}`;
 },
getAge: function(){
 const years = new Date().getfullyear() - this.year;
 return `${this.title} is ${year} years 

 old`;
 }
}
 
// create object
// const book1 = Object.create(bookprotos);
// book1.title = 'book one';
// book1.author = 'john doe';
// book1.year = '2013';

const book1 = Object.create(bookprotos,{
    title: {value:'book one' },
    author: {value:'john doe' },
    year: {value:'2013' },
});
 

console.log(book1);