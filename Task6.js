let Booklist = {
    title: ['Game of Thrones', 'El principito'],
    author: ['George R.R. Martin', 'Frances']
    

}

function addBook (Book,Author){
    Booklist.title.push(Book);
    Booklist.author.push(Author);
    return console.log(` "${Booklist.title[Booklist.title.length-1]}" added to list`)
}

function removeBook (Title){
    for ( var index in Booklist.title){
        if (Booklist.title[index]===Title){
            Booklist.title.splice(index,1);
            Booklist.author.splice(index,1);         
            break;
        }
    }
    console.log(` "${Booklist.title[Booklist.title.length-1]}" removed from list`)
}

function listAllBooks(){
    console.log('List of books:');
    for (const value of Object.values(Booklist.title)){
        console.log(`${value}`);
    }
}

function searchByAuthor (author){
    for ( var index in Booklist.author){
        if (Booklist.author[index]===author){
            break;
        }
    }
    return console.log(`Book of the author ${author}: ${Booklist.title[index]}`)
}


addBook('Tell of the fallen','Anonymos');

console.log(Booklist);

listAllBooks();

searchByAuthor ('Frances');

let RemBook= 'El principito';
removeBook(RemBook);

console.log(Booklist);