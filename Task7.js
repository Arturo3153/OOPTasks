let Booklist = {
    title: ['Game of Thrones', 'El principito', 'Tell of the fallen'],
    author: ['George R.R. Martin', 'Antoine de Saint','Anonymus'],
    year: ['2012','1950','1750']

}

const fs = require('fs');

let sumtext = 'Title: ';


for (var index in Booklist.title){
    sumtext += `${index}- ${Booklist.title[index]}, `
}

sumtext += '\nAuthor: ';

for (var index in Booklist.title){
    sumtext += `${index}- ${Booklist.author[index]}, `
}

sumtext += '\nYear: ';

for (var index in Booklist.title){
    sumtext += `${index}- ${Booklist.year[index]}, `
}

fs.writeFile('test.txt', sumtext, err => {
      if (err) {
          console.err;
          return;
      }
  });


fs.readFile('test.txt','utf8',(err,data) => {
    if (err) {
        console.error(err);
         return;
     }

     console.log(data);
 });

let NewBookList = {
    title:[],
    author:[],
    year:[]
}


