import toast from "react-hot-toast";


export const getRead = () => {
    let addedBooks = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        addedBooks = JSON.parse(storedBooks);
    }
    return addedBooks;
};


export const saveToRead = bookId => {
    const addedBooks = getRead();

  
    const isExist = addedBooks.find(b => b === bookId);
    if (isExist) {
        toast.error('This book already added to Read list');
        return; 
    }
 
    addedBooks.push(bookId);
    localStorage.setItem('books', JSON.stringify(addedBooks));
    toast.success('This book added to Read list');
};




export const getWishlist = () => {
    let wishlistBooks = [];
    const storedBooks = localStorage.getItem('wishlist');
    if (storedBooks) {
        wishlistBooks = JSON.parse(storedBooks);
    }
    return wishlistBooks;
};


export const saveToWishlist = bookId => {
    const wishlistBooks = getWishlist();
    const readBooks = getRead();

  
    const isExistInWishlist = wishlistBooks.find(b => b === bookId);
    if (isExistInWishlist) {
        toast.error('This book already added to Wishlist');
        return; 
    }

    const isExistInRead = readBooks.find(b => b === bookId);
    if (isExistInRead) {
        toast.error('This book already added to Read list');
        return; 
    }
  
    wishlistBooks.push(bookId);
    localStorage.setItem('wishlist', JSON.stringify(wishlistBooks));
    toast.success('This book added to Wishlist');
};