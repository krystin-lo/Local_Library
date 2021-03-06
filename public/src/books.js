// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let results = authors.find((data) => data.id === id);
  return results
}


function findBookById(books, id) {
  let results = books.find((data) => data.id === id);
  return results
}


function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let notReturned = [];
  for (let idx in books) {
    let book = books[idx];
    //define book as current book iteration of the for/in loop
    let checkOut = book.borrows[0].returned; //is the book returned?
    !checkOut ? notReturned.push(book) : returned.push(book); //if the book is not returned push into book[idx]
  }
  return [notReturned, returned];
}


function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let borrower = accounts.find((borrower) => borrower.id === borrow.id)
    //the account id must match with the borrowed book id
    return {...borrow, ...borrower};
  }).slice(0, 10);
}


  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
