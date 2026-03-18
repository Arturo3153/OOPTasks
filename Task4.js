class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
  
}

const TellFallen = new Book('Tell of the Fallen', 'Anonymus', 1950, '460');

const GameofThrones = new Book('Game of Thrones','R.R. Martin', 2010, '800');

const DivineComedy = new Book('Divine Comedy','Dante Aligheri', 1750, '1200');

console.log(TellFallen);

console.log(GameofThrones);

console.log(DivineComedy);

