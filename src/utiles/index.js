
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveBooks = (bookId, action) => {
    let books = getBooks();
    const isExist = books.find(b => b === bookId);
    
    if (action === 'read' && !isExist) {
        books.push(bookId);
        localStorage.setItem('books', JSON.stringify(books));
        return true; 
    } else if (action === 'wishlist' && !isExist) {
        books.push(bookId);
        localStorage.setItem('books', JSON.stringify(books));
        return true; 
    } else {
        return false; 
    }
};

