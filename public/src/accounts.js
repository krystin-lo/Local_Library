// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let results =accounts.find((data) => data.id === id);
  return results
}

function sortAccountsByLastName(accounts) {
  accounts.sort((num1, num2) => num1.name.last >num2.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const user = account.id  // when you use methods only use objects/nested objects
  const result = books.filter((data) => {
    //
   return data.borrows.some((check) => check.id === user);
   // chek if the books id info matches the account id info 
  });
  return result.length;
  //return the total number of borrowed books
}

function getBooksPossessedByAccount(account, books, authors) { 
  let user = account.id;
  //define the acount id
  let fil = books.filter(({borrows}) => (borrows[0].id === user && borrows[0].returned === false)).map((book) => {
    //if the borrowed book is not returned compare the borrowed book id with the account id
    const author = authors.find((auth) => auth.id === book.authorId);
    // see if the author id matches the book's author id
    return {...book, author};
    //return the account that possesses the borrowed book; include the author info
  })
  return fil;
}
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
