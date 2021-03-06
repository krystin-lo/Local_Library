// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let results = books.filter((book) => {
    return book.borrows.some((thing) => thing.returned === false);
    //if the current book in  the loop is not returned, return the book
  });
  return lengthCalculator(results);
}

function lengthCalculator(data) {
  return data.length;
}

function getMostCommonGenres(books) {
  let arr = [];
  //define an aray for the return as specified in the example
  for(let book of books) {
    let record = arr.find((obj) => obj.name === book.genre);
    if(record) {
      record.count += 1;
    } else { // else is ran 1st because it will not find a record 
      arr.push({name : book.genre, count : 1}) // setting the count to one seeing it for the 1st time
    }   //increment the count by one if we see again ^ similar to the if
  } 
  return arr.sort((a, b) => b.count - a.count).slice(0,5); // slice (start at 1,  go to 5)
  //spilce (start at 1 [0], take up 5)
}


function getMostPopularBooks(books) {
  let popular = [];
   for (let book of books) { //for of sets up variable to current item in itteration
     let num = book.borrows.length
     popular.push({name : book.title, count : num}); // follows name of key : value your giving it
  }
  return popular.sort((a, b) => b.count - a.count).slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  let array = [];
  for (let book of books) {
    let author = authors.find((author) => author.id === book.authorId);
    //define author as a match of the authors id with books info of the author id
    let name = `${author.name.first} ${author.name.last}`
    //define the authors first and last name
    let record = array.find((obj) => obj.name === name)//looking for the author like get common genres
    if(record) {
      record.count += book.borrows.length; // increment of book borrows
    } else {
       array.push({name : name, count : book.borrows.length})
       //add the authors first and last name with the amount of books borrowed
    } 
  }
  let result = array.sort((a, b) => b.count - a.count).slice(0, 5);// indicates if b is bigger than a
  //define result as an arrays with top 5 authors
  return result;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
