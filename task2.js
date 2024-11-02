class Library {
  constructor() {
    this.books = [];
  }
  addBook(title, author, year) {
    const id = this.books.length + 1;
    this.books.push({
      id: id,
      title: title,
      author: author,
      year: year,
    });
  }
  removeBook(id) {
    this.books = this.books.filter((i) => i.id !== id);
  }
  listBooks() {
    for (const book of this.books)
      console.log(
        `No: ${book.id}\nTitle: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\n-------------------`
      );
  }
}

const lib1 = new Library();
lib1.addBook("didostati", "gamsaxurdia", 1938);
lib1.addBook("something", "someone", 2024);
lib1.removeBook(2);
lib1.listBooks();
